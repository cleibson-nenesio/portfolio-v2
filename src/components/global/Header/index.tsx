// Types
import { HeaderProps, Path } from './types';

// i18n
import initTranslations from '../../../i18n';

// Components
import MobileMenu from './MobileMenu';
import NavMenu from './NavMenu';

export default async function Header({ params: { locale } }: HeaderProps) {
	const { t } = await initTranslations(locale, ['home', 'common']);

	const paths: Path[] = [
		{
			label: t('common:menu-experience'),
			path: '#experiences',
		},
		{
			label: t('common:menu-technologies'),
			path: '#technologies',
		},
		{
			label: t('common:menu-projects'),
			path: '#projects',
		},
		{
			label: t('common:menu-contact'),
			path: '#contact',
		},
	];

	return (
		<header className="max-w-screen-max mx-auto flex justify-between p-[24px] md:px-[34.6px] lg:px-[55.8px] xl:px-[77.1px] 2xl:px-[130px]">
			<h3 className="font-bold text-xl text-neutral-1000">
				Cleibson<span>.</span>
			</h3>

			<MobileMenu paths={paths} />

			<NavMenu paths={paths} />
		</header>
	);
}
