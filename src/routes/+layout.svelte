<script lang="ts">
	import '../app.css';
	import Bar from './components/Bar.svelte';
	import { page } from '$app/state';
	import { onNavigate } from '$app/navigation';

	let { children } = $props();

	// Smooth cross-fade between pages where the browser supports View Transitions.
	onNavigate((navigation) => {
		if (!document.startViewTransition) return;
		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<div class="bg-glow flex min-h-screen flex-col md:flex-row">
	<!-- Desktop: sticky sidebar. Mobile: full header, home page only. -->
	<aside
		class="shrink-0 md:sticky md:top-0 md:block md:h-screen md:w-80 lg:w-96 {page.url.pathname === '/'
			? 'block'
			: 'hidden'}"
		style="view-transition-name: sidebar"
	>
		<Bar />
	</aside>

	<main class="min-w-0 flex-1 px-5 py-10 sm:px-8 md:px-12 lg:px-16 lg:py-14">
		<div class="mx-auto max-w-6xl">
			{@render children()}
		</div>
	</main>
</div>
