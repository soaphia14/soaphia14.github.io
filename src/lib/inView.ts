// Adds the class `is-visible` the first time an element scrolls into view.
// Used to start the squiggle under section headings drawing (see app.css).
export function inView(node: HTMLElement) {
	const observer = new IntersectionObserver(
		(entries) => {
			if (entries.some((e) => e.isIntersecting)) {
				node.classList.add('is-visible');
				observer.disconnect();
			}
		},
		{ threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
	);
	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
