'use client';

// React
import { useEffect, useState } from 'react';

// Next
import Link from 'next/link';
import { Poppins } from 'next/font/google';

// Icons
import { IoMdClose } from 'react-icons/io';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

// Types
import { MobileMenuProps } from './types';

const poppins = Poppins({ subsets: ['latin'], weight: ['400'] });

export default function MobileMenu({ paths }: MobileMenuProps) {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	useEffect(() => {
		if (!document) return;

		document.body.style.overflowY = isOpen ? 'hidden' : 'scroll';
	}, [isOpen]);

	function toggleMenu() {
		setIsOpen((prevState) => !prevState);
		console.log('toggle menu');
	}

	return (
		<>
			<button onClick={toggleMenu} className="md:hidden">
				<HiOutlineMenuAlt3 size={24} />
			</button>

			<div
				className={`md:hidden fixed top-0 left-0 right-0 bottom-0 bg-neutral-950 transition-all duration-500 ${
					isOpen
						? 'opacity-20 pointer-events-auto'
						: 'opacity-0 pointer-events-none'
				}`}
				onClick={toggleMenu}
			/>

			<div
				className={`md:hidden w-2/3 h-full bg-white shadow fixed top-0 p-[24px] transition-all duration-500 ${
					isOpen ? 'right-0' : '-right-full'
				}`}
			>
				<div className="flex justify-end items-center">
					<button onClick={toggleMenu}>
						<IoMdClose size={24} />
					</button>
				</div>

				<nav className="mt-10">
					<ul className="flex flex-col items-center gap-[24px]">
						{paths.map(({ label, path }, i) => (
							<li key={i}>
								<Link
									href={path}
									className={
										'text-neutral-1000 relative before:absolute before:left-0 before:-bottom-0 before:bg-primary-400 before:transition-all before:w-0 before:h-[2px] hover:before:w-full'
									}
									style={poppins.style}
									onClick={toggleMenu}
								>
									{label}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</>
	);
}
