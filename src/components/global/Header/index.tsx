// Next
import { Poppins } from 'next/font/google';
import Link from 'next/link';

// Types
import { HeaderProps, Path } from './types';

// i18n
import initTranslations from '../../../i18n';
import MobileMenu from './MobileMenu';

const poppins = Poppins({ subsets: ['latin'], weight: ['400'] });

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

			<nav className="hidden md:block">
				<ul className="flex items-center gap-[24px]">
					{paths.map(({ label, path }, i) => (
						<li key={i}>
							<Link
								href={path}
								className={
									'text-neutral-1000 relative before:absolute before:left-0 before:-bottom-0 before:bg-primary-400 before:transition-all before:w-0 before:h-[2px] hover:before:w-full'
								}
								style={poppins.style}
							>
								{label}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}
