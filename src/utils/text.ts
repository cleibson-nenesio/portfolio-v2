export function slugify(value: string): string {
	const normalizedString = value
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '');
	const hyphenatedString = normalizedString.replace(/\s/g, '-');
	return hyphenatedString.toLowerCase();
}
