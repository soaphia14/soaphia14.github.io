<script lang="ts">
	import '../app.css';
    import Bar from './components/Bar.svelte';
	import { page } from '$app/state';
    import { onMount } from 'svelte';
	
	let showBar = $state();
	let { children } = $props();
	 let windowWidth: number = $state(0);

	onMount(() => {
		windowWidth = window.innerWidth;
		
		const handleResize = () => {
			windowWidth = window.innerWidth;
			console.log("here", windowWidth)
		};

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});
</script>

<div class="flex flex-col md:flex-row h-screen">
	<div>
		{#if page.url.pathname == '/' && windowWidth < 768}
			<Bar />
		{/if}
	</div>

	{#if windowWidth >= 768}
		<Bar />
	{/if}

		<!-- Main content -->
	<main class="flex-start p-10 w-screen md:overflow-y-scroll text-notwhite">
		{@render children()}
	</main>
</div>