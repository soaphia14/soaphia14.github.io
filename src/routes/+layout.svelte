<script lang="ts">
	import '../app.css';
    import Bar from './Bar.svelte';

	let { children } = $props();
</script>

<div class="flex h-screen">
	<Bar />
	
		<!-- Main content -->
	<main class="flex-start p-10 w-screen overflow-y-scroll">
		{@render children()}
	</main>
</div>