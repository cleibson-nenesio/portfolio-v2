'use client';

// Libraries
import { useTranslation } from 'react-i18next';

// Utils
import { slugify } from '@/utils/text';

export default function Projects() {
	const { t } = useTranslation();

	return (
		<section
			id={slugify(t('common:menu-projects'))}
			className="h-[40svh] md:h-[60svh] lg:h-[70svh] flex flex-col gap-[24px] justify-center p-[24px] md:px-[34.6px] lg:px-[55.8px] xl:px-[77.1px] 2xl:px-[130px]"
		>
			<h3 className="text-[36px] font-bold leading-[54px]">
				{t('projects_title')}
			</h3>

			<div></div>
		</section>
	);
}
