'use client';

// Next
import Link from 'next/link';
import { Poppins } from 'next/font/google';
import { Path } from './types';
import { useCursor } from '@/contexts/MouseContext';
import Magnetic from '@/components/shared/Magnetic';

const poppins = Poppins({ subsets: ['latin'], weight: ['400'] });

export default function NavMenu({ paths }: { paths: Path[] }) {
	const { setIsOverElement } = useCursor();

	return (
		<nav className="hidden md:flex items-center">
			<ul className="flex items-center gap-[24px]">
				{paths.map(({ label, path }, i) => (
					<li key={i}>
						<Magnetic>
							<Link
								href={path}
								className={
									'text-neutral-1000 px-[16px] py-[8px] rounded-full relative'
								}
								style={poppins.style}
								onMouseOver={({ currentTarget }) => {
									setIsOverElement({
										isHovered: true,
										element: currentTarget,
										animation: 'sticky',
									});
								}}
								onMouseLeave={({ currentTarget }) => {
									setIsOverElement({
										isHovered: false,
										element: currentTarget,
									});
								}}
							>
								{/* Bounds */}
								<div className="absolute top-0 left-0 w-full h-full hover:scale-125 hover:scale-y-[2.5]" />
								{label}
							</Link>
						</Magnetic>
					</li>
				))}
			</ul>
		</nav>
	);
}
