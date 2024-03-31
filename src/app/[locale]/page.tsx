'use client';

import { useCursor } from '@/contexts/MouseContext';

export default function Home() {
	const { setIsOverElement } = useCursor();

	return (
		<>
			<section className="h-[70svh] flex flex-col gap-[8px] justify-center p-[24px] md:px-[34.6px] lg:px-[55.8px] xl:px-[77.1px] 2xl:px-[130px]">
				<p className="text-5xl text-neutral-1000 uppercase">Eu sou o</p>
				<h3
					className="text-9xl uppercase font-bold leading-[180px] text-neutral-1000"
					onMouseOver={({ currentTarget }) =>
						setIsOverElement({
							element: currentTarget,
							isHovered: true,
						})
					}
					onMouseLeave={({ currentTarget }) => {
						setIsOverElement({
							element: currentTarget,
							isHovered: false,
						});
					}}
				>
					Cleibson
				</h3>
				<h2 className="leading-[111px] text-8xl font-bold text-neutral-1000">
					Front.End
				</h2>
			</section>
		</>
	);
}
