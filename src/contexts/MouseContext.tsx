'use client';

// React
import { createContext, useContext, useState, useEffect } from 'react';

// Framer Motion
import { motion, useMotionValue, useSpring, transform } from 'framer-motion';

// Types
import { MouseContextReturn } from '@/types';

const CursorContext = createContext<MouseContextReturn>(
	{} as MouseContextReturn
);

const DEFAULT_CURSOR_SIZE = {
	width: 32,
	height: 32,
};

function CursorProvider({ children }: { children: React.ReactNode }) {
	const [currentElement, setCurrentElement] = useState<HTMLElement | null>(
		null
	);
	const [cursorSize, setCursorSize] = useState({
		width: 32,
		height: 32,
	});
	const [isHovered, setIsHovered] = useState<boolean>(false);
	const [animationType, setAnimationType] = useState<'increase' | 'sticky'>(
		'sticky'
	);

	useEffect(() => {
		if (!window) return;

		window.addEventListener('mousemove', getCursorPosition);

		return () => {
			window.removeEventListener('mousemove', getCursorPosition);
		};
	}, [isHovered, currentElement]);

	const mouse = {
		x: useMotionValue(0),
		y: useMotionValue(0),
	};

	const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
	const smoothMouse = {
		x: useSpring(mouse.x, smoothOptions),
		y: useSpring(mouse.y, smoothOptions),
	};

	function getCursorPosition(
		e: React.MouseEvent<Element, MouseEvent> | MouseEvent
	) {
		const { clientX, clientY } = e;

		if (isHovered && currentElement) {
			if (animationType == 'sticky') {
				const { left, top, width, height } =
					currentElement.getBoundingClientRect();

				const center = { x: left + width / 2, y: top + height / 2 };
				const distance = {
					x: clientX - center.x,
					y: clientY - center.y,
				};

				mouse.x.set(left + distance.x * 0.1);
				mouse.y.set(
					center.y - cursorSize.height / 2 + distance.y * 0.1
				);

				setCursorSize((prevState) => ({
					...prevState,
					width,
				}));
			}

			if (animationType == 'increase') {
				setCursorSize({
					height: 60,
					width: 60,
				});

				mouse.x.set(clientX - DEFAULT_CURSOR_SIZE.width / 2);
				mouse.y.set(clientY - DEFAULT_CURSOR_SIZE.height / 2);
			}
		} else {
			setCursorSize({
				width: DEFAULT_CURSOR_SIZE.width,
				height: DEFAULT_CURSOR_SIZE.height,
			});

			mouse.x.set(clientX - DEFAULT_CURSOR_SIZE.width / 2);
			mouse.y.set(clientY - DEFAULT_CURSOR_SIZE.height / 2);
		}
	}

	function setIsOverElement({
		isHovered,
		element,
		animation = 'increase',
	}: {
		isHovered: boolean;
		element: HTMLElement | null;
		animation?: typeof animationType;
	}) {
		setAnimationType(animation);
		setCurrentElement(element);
		setIsHovered(isHovered);
	}

	return (
		<CursorContext.Provider
			value={{
				setIsOverElement,
			}}
		>
			{children}
			<motion.div
				className={`fixed top-0 left-0 z-[99999999] rounded-full border border-neutral-400 pointer-events-none`}
				animate={{
					width: cursorSize.width,
					height: cursorSize.height,
				}}
				style={{
					left: smoothMouse.x,
					top: smoothMouse.y,
					width: cursorSize.width,
					height: cursorSize.height,
					backgroundColor: '#F9F9F9',
					borderRadius: '99999px',
					mixBlendMode: 'difference',
				}}
			/>
		</CursorContext.Provider>
	);
}

function useCursor() {
	const context = useContext(CursorContext);

	if (!context) {
		throw new Error('useCursor must be used within an CursorProvider');
	}

	return context;
}

export { CursorProvider, useCursor };
