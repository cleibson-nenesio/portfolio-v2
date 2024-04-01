'use client';

// Next
import Link from 'next/link';

// Components
import Technologies from '@/components/pages/Home/Technologies';
import Projects from '@/components/pages/Home/Projects';
import Magnetic from '@/components/shared/Magnetic';

// Contexts
import { useCursor } from '@/contexts/MouseContext';

// Utils
import { slugify } from '@/utils/text';

// Libraries
import { useTranslation } from 'react-i18next';
import { formatDistance, format } from 'date-fns';
import gsap from 'gsap';

// Variables
import { EXPERIENCES } from './variables';

gsap.registerPlugin();

export default function Home() {
	const { setIsOverElement } = useCursor();
	const { t } = useTranslation();

	return (
		<main>
			<section className="h-[90svh] flex flex-col gap-[8px] justify-center p-[24px] md:px-[34.6px] lg:px-[55.8px] xl:px-[77.1px] 2xl:px-[130px]">
				<div
					className="w-fit"
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
					<p
						id="top-main-title"
						className="text-2xl overflow-hidden md:text-4xl lg:text-5xl text-neutral-1000 uppercase"
					>
						{t('home:top_main_title')}
					</p>

					<h3
						id="main-title"
						className="text-6xl leading-[66px] md:leading-[111px] md:text-8xl lg:leading-[140px] lg:text-[140px] 2xl:leading-[180px] 2xl:text-9xl uppercase font-bold text-neutral-1000 text-wrap"
					>
						Cleibson
						<span
							className="h-[32px] w-[32px] inline-block"
							id="main-title-dot"
						/>
					</h3>

					<h2
						id="bottom-main-title"
						className="text-5xl overflow-hidden md:leading-[78px] md:text-7xl lg:leading-[111px] lg:text-8xl font-bold text-neutral-1000"
					>
						Front.End
					</h2>
				</div>
			</section>

			<section
				id={slugify(t('common:menu-experience'))}
				className="h-[70svh] flex flex-col gap-[24px] justify-center p-[24px] md:px-[34.6px] lg:px-[55.8px] xl:px-[77.1px] 2xl:px-[130px]"
			>
				<h3
					className="font-bold text-[36px] leading-[54px] py-[8px] w-fit relative -z-10"
					onMouseOver={({ currentTarget }) =>
						setIsOverElement({
							element: currentTarget,
							isHovered: true,
							animation: 'sticky',
						})
					}
					onMouseLeave={({ currentTarget }) => {
						setIsOverElement({
							element: currentTarget,
							isHovered: false,
							animation: 'sticky',
						});
					}}
				>
					<div className="top-0 left-0 absolute scale-125 w-full h-full" />
					{t('home:my_experiences_title')}
				</h3>

				{EXPERIENCES.map(
					({ id, Icon, company, description, from, to }) => (
						<div className="flex flex-col" key={id}>
							<div className="w-fit h-fit relative">
								<Magnetic>
									<div
										className="mb-[24px] transition-all hover:invert w-fit p-4"
										onMouseOver={({ currentTarget }) =>
											setIsOverElement({
												element: currentTarget,
												isHovered: true,
												animation: 'sticky',
											})
										}
										onMouseLeave={({ currentTarget }) => {
											setIsOverElement({
												element: currentTarget,
												isHovered: false,
												animation: 'sticky',
											});
										}}
									>
										<Link
											target="_blank"
											href="https://tropa.digital"
										>
											<Icon
												style={{
													position: 'relative',
													zIndex: -1,
												}}
											/>
										</Link>
									</div>
								</Magnetic>
							</div>

							<div
								className="flex flex-col gap-[16px]"
								onMouseOver={({ currentTarget }) =>
									setIsOverElement({
										element: currentTarget,
										isHovered: true,
										animation: 'increase',
									})
								}
								onMouseLeave={({ currentTarget }) => {
									setIsOverElement({
										element: currentTarget,
										isHovered: false,
										animation: 'increase',
									});
								}}
							>
								<div>
									<h4 className="font-medium text-neutral-1000 text-[36px]">
										{company}
									</h4>

									<p className="text-lg font-medium">
										{format(from, 'MMM yyyy')} -{' '}
										{t('home:current_working')}
									</p>
								</div>

								<p className="text-xl leading-[36px] text-neutral-1000">
									{t(description)}
								</p>
							</div>
						</div>
					)
				)}
			</section>

			<Technologies />

			<Projects />
		</main>
	);
}
