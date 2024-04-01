'use client';

// React
import { useState } from 'react';

// i18n
import { useTranslation } from 'react-i18next';

// Variables
import { TECHNOLOGIES } from './variables';

// Contexts
import { useCursor } from '@/contexts/MouseContext';

// Utils
import { slugify } from '@/utils/text';

export default function Technologies() {
	const { t } = useTranslation();
	const { setIsOverElement } = useCursor();

	const [currentHovering, setCurrentHovering] = useState<string>('');

	return (
		<section
			id={slugify(t('common:menu-technologies'))}
			className="flex items-center justify-between p-[24px] md:px-[34.6px] lg:px-[55.8px] xl:px-[77.1px] 2xl:px-[130px]"
		>
			<div
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
				<h3 className="font-bold text-[36px] leading-[54px]">
					{t('home:technologies_title')}
				</h3>

				<p className="text-xl leading-[36px]">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</p>
			</div>

			<div className="grid grid-cols-3 gap-[24px]">
				{TECHNOLOGIES.map(({ Icon, title, description, id }) => (
					<div
						key={id}
						className="w-[60px] h-[60px] flex justify-center items-center bg-neutral-200 rounded transition-all hover:scale-110"
					>
						<Icon />
					</div>
				))}
			</div>
		</section>
	);
}
