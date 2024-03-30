export type Path = {
	label: string;
	path: string;
};

export type MobileMenuProps = {
	paths: Path[];
};

export type HeaderProps = {
	params: Params;
};

export type Params = {
	locale: string;
};
