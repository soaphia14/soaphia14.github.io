// Soft pink glow that follows the cursor across an element (styles: .spotlight in app.css).
// Usage: <div use:spotlight>
export function spotlight(node: HTMLElement) {
	node.classList.add('spotlight');

	const move = (e: PointerEvent) => {
		const rect = node.getBoundingClientRect();
		node.style.setProperty('--mx', `${e.clientX - rect.left}px`);
		node.style.setProperty('--my', `${e.clientY - rect.top}px`);
	};
	node.addEventListener('pointermove', move);

	return {
		destroy() {
			node.removeEventListener('pointermove', move);
		}
	};
}
