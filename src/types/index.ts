export interface MouseContextReturn {
	setIsOverElement({
		isHovered,
		element,
		animation,
	}: {
		isHovered: boolean;
		element: HTMLElement | null;
		animation?: 'increase' | 'sticky';
	}): void;
	getMouseFirstPosition():
		| {
				x: number;
				y: number;
		  }
		| undefined;
}
