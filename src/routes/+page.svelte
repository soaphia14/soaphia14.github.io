<script lang="ts">
	import { flip } from "svelte/animate";
	import { fade, scale } from "svelte/transition";
	import { reveal } from "$lib/reveal";
	import Button from "./components/Button.svelte";
	import ProjectCard from "./components/ProjectCard.svelte";
	import { projects, futureProjects } from "./const";

	// "2023-2024" -> [2023, 2024]
	const yearsOf = (date: string) => (date.match(/\d{4}/g) ?? []).map(Number);

	// Filter options come straight from the project data, newest first.
	const years = [...new Set(projects.flatMap((p) => yearsOf(p.date)))].sort((a, b) => b - a);

	let year: number | null = $state(null);
	const filtered = $derived(
		year === null ? projects : projects.filter((p) => yearsOf(p.date).includes(year!)),
	);

	const pillBase =
		"cursor-pointer rounded-full px-4 py-1 text-sm transition-all duration-200";
	const pillOn = "bg-soappink text-darkfill shadow-[0_0_20px_-4px_rgb(242_209_240/0.6)]";
	const pillOff = "text-notwhite/70 hover:bg-white/10 hover:text-notwhite";
</script>

<svelte:head>
	<title>Sophia Liu</title>
	<meta
		name="description"
		content="Sophia Liu: Cornell CS undergrad. Projects in robotics, RL, and web dev, plus figure skating, crochet, and art."
	/>
</svelte:head>

<!-- Introduction -->
<section use:reveal>
	<h1>Hello!</h1>
	<div class="grid gap-4 lg:grid-cols-[3fr_1fr]">
		<div class="card p-6">
			<p>
				I'm <span class="text-soappink">Sophia Liu</span>, an undergraduate student studying Computer
				Science at Cornell University. I'm interested in full-stack development and autonomy. 
			</p>
		</div>
		<div
			class="card hidden select-none items-center justify-center p-6 text-center text-lg leading-loose text-soappink/90 lg:flex"
		>
			/ᐠ - ˕ -マ Ⳋ<br />
			₍^. ̫.^₎⟆
		</div>
	</div>
</section>

<!-- Projects -->
<section class="mt-14">
	<div class="mb-6 flex flex-wrap items-end justify-between gap-4">
		<h1 class="mb-0">Projects</h1>
		<div class="flex gap-1 rounded-full border border-white/10 bg-white/5 p-1" role="group" aria-label="Filter by year">
			<button class="{pillBase} {year === null ? pillOn : pillOff}" onclick={() => (year = null)} aria-pressed={year === null}>
				All
			</button>
			{#each years as y}
				<button class="{pillBase} {year === y ? pillOn : pillOff}" onclick={() => (year = y)} aria-pressed={year === y}>
					{y}
				</button>
			{/each}
		</div>
	</div>

	<div class="grid grid-cols-[repeat(auto-fill,minmax(18rem,1fr))] gap-6">
		{#each filtered as project, i (project.title)}
			<div
				animate:flip={{ duration: 350 }}
				in:fade={{ duration: 250, delay: 100 }}
				out:scale={{ duration: 200, start: 0.95 }}
			>
				<div class="h-full" use:reveal={i % 3}>
					<ProjectCard {project} />
				</div>
			</div>
		{/each}
	</div>
</section>

<!-- Future Projects -->
<section class="mt-16" use:reveal>
	<h1 class="mb-1">In the Works</h1>
	<p class="muted mb-6">To motivate myself to finish these :D</p>
	<div class="grid grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] gap-4">
		{#each futureProjects as project}
			<div
				class="rounded-2xl border border-dashed border-white/15 p-5 transition-colors duration-200 hover:border-soappink/40"
			>
				<p class="font-display text-lg text-soappink">{project.title}</p>
				<p class="mt-1 text-sm text-notwhite/70">{project.description}</p>
			</div>
		{/each}
	</div>
</section>

<!-- Nontechnical Section -->
<section class="mt-16 grid items-start gap-4 sm:grid-cols-2 xl:grid-cols-[13rem_1fr_1fr]" use:reveal>
	<div class="hidden xl:block">
		<p class="hand -rotate-6 text-3xl text-soappink">Nontechnical Things</p>
		<img src="arrow.png" alt="" class="mt-3 ml-16 h-12 w-24 rotate-40 -scale-x-100 opacity-80" />
	</div>
	<p class="hand -rotate-2 text-3xl text-soappink sm:col-span-2 xl:hidden">Nontechnical Things</p>

	<div class="grid gap-2">
		<Button href="/pages/skating" unicode="&#9976;">Figure Skating</Button>
		<Button href="/pages/crocheting" unicode="&#129526;">Crocheting</Button>
		<Button href="/pages/art" unicode="&#x1F3A8;">Art</Button>
	</div>

	<div class="card h-full p-5">
		<p class="mb-3 text-sm uppercase tracking-widest text-muted">Current recs</p>
		<dl class="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2">
			<dt class="text-muted">Book</dt>
			<dd>ORV</dd>
			<dt class="text-muted">Song</dt>
			<dd>Devil by the Window by TXT</dd>
			<dt class="text-muted">TV</dt>
			<dd>Andor Season 2</dd>
		</dl>
	</div>
</section>
