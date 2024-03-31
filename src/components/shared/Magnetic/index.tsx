'use client';

// React
import { useRef, useState } from 'react';

// Framer-Motion
import { motion } from 'framer-motion';

export default function Magnetic({ children }: { children: React.ReactNode }) {
	const ref = useRef<HTMLDivElement>(null);
	const [position, setPosition] = useState({ x: 0, y: 0 });

	function handleMouse(
		e: MouseEvent | React.MouseEvent<HTMLDivElement, MouseEvent>
	) {
		if (!ref || !ref.current) return;

		const { clientX, clientY } = e;

		const { height, width, left, top } =
			ref.current.getBoundingClientRect();

		const middleX = clientX - (left + width / 2);
		const middleY = clientY - (top + height / 2);

		setPosition({ x: middleX * 0.03, y: middleY * 0.1 });
	}

	function reset() {
		setPosition({ x: 0, y: 0 });
	}

	const { x, y } = position;

	const transition = {
		type: 'spring',
		stiffness: 350,
		damping: 5,
		mass: 0.5,
	};

	return (
		<motion.div
			style={{ position: 'relative' }}
			ref={ref}
			onMouseMove={handleMouse}
			onMouseLeave={reset}
			transition={transition}
			animate={{ x, y }}
		>
			{children}
		</motion.div>
	);
}
