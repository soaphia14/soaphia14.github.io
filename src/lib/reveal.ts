// Fades an element in the first time it scrolls into view.
// Usage: <div use:reveal> or <div use:reveal={index}> to stagger siblings.
export function reveal(node: HTMLElement, index = 0) {
	node.classList.add('reveal');
	node.style.setProperty('--i', String(index));

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.classList.add('is-visible');
					observer.disconnect();
				}
			}
		},
		{ threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
	);
	observer.observe(node);

	return {
		update(i: number) {
			node.style.setProperty('--i', String(i));
		},
		destroy() {
			observer.disconnect();
		}
	};
}
