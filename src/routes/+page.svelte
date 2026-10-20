<script lang="ts">
	import { flip } from "svelte/animate";
	import { fade, scale } from "svelte/transition";
	import { reveal } from "$lib/reveal";
	import { spotlight } from "$lib/spotlight";
	import Icon from "$lib/Icon.svelte";
	import { pinned, projects, wipProjects, yearSections, years, type Project } from "$lib/projects";
	import Button from "./components/Button.svelte";
	import ProjectCard from "./components/ProjectCard.svelte";
	import SectionHeading from "./components/SectionHeading.svelte";

	// null = All: Pinned, then a section per year. Picking a year shows just that year's
	// projects (pinned ones included) in one grid, with no headings.
	let year: number | null = $state(null);
	const yearProjects = $derived(projects.filter((p) => year !== null && p.years.includes(year)));

	const contactBtn =
		"ml-1 inline-grid size-7 translate-y-[-1px] place-items-center rounded-full border border-white/10 bg-white/5 align-middle text-notwhite/90 transition-all hover:border-soappink/40 hover:bg-soappink/10 hover:text-soappink";

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

{#snippet grid(list: Project[])}
	<div class="@container flex flex-col gap-4">
		{#each list as project, i (project.slug)}
			<div
				animate:flip={{ duration: 350 }}
				in:fade={{ duration: 250, delay: 100 }}
				out:scale={{ duration: 200, start: 0.95 }}
			>
				<div use:reveal={i % 3}>
					<ProjectCard {project} />
				</div>
			</div>
		{/each}
	</div>
{/snippet}

<!-- Introduction -->
<section use:reveal>
	<h1>Hello!</h1>
	<div class="grid gap-4 lg:grid-cols-[3fr_2fr]">
		<!-- Freeform intro -->
		<div class="card flex flex-col p-6">
			<p>
				I'm <span class="text-soappink">Sophia Liu</span>, an undergraduate student studying Computer
				Science at Cornell University. I'm interested in full-stack development and autonomy.
			</p>
			<p>
				Outside of code: I love <a href="/pages/skating" class="link">figure skating</a>, guitar,
				dance, and <a href="/pages/art" class="link">digital art</a>!
			</p>

			<!-- pinned to the bottom of the card, whatever the text above -->
			<div class="mt-auto pt-5">
				<div class="flex items-start gap-2 rounded-xl bg-soappink/10 px-4 py-3 text-notwhite">
					<span class="text-soappink">✦</span>
					<p>
						Always down to build something cool. Feel free to reach out!
						<!-- buttons sit inline, right after the text -->
						<a href="mailto:sl3632@cornell.edu" class={contactBtn} aria-label="Email" title="Email">
							<Icon name="mail" />
						</a>
						<a href="https://www.linkedin.com/in/sophia-liu-cs/" target="_blank" rel="noopener" class={contactBtn} aria-label="LinkedIn" title="LinkedIn">
							<Icon name="linkedin" />
						</a>
						<!-- Résumé button goes here once there's a /resume link -->
					</p>
				</div>
			</div>
		</div>

		<!-- Profile -->
		<div class="card relative p-6">
			<p class="mb-4 text-sm tracking-widest text-muted uppercase">Profile</p>
			<dl class="space-y-4 text-[0.95rem]">
				<div>
					<dt class="text-xs tracking-wide text-muted uppercase">Studying</dt>
					<dd class="mt-0.5">B.S. Computer Science<br />Minors in Robotics &amp; ECE</dd>
				</div>
				<div>
					<dt class="text-xs tracking-wide text-muted uppercase">Currently</dt>
					<dd class="mt-0.5">Researcher @ TrAuSt Moonshot<br />Intelligence subteam @ CUAir</dd>
				</div>
				<div>
					<dt class="text-xs tracking-wide text-muted uppercase">Member of</dt>
					<dd class="mt-1.5 flex flex-wrap gap-1.5">
						<span class="pill" title="Cornell Unmanned Air Systems">CUAir</span>
						<span class="pill" title="Women in Computing at Cornell">WICC</span>
						<span class="pill" title="Cornell University Figure Skating Club">CUFSC</span>
					</dd>
				</div>
			</dl>
			<!-- the cats live here now -->
			<p class="pointer-events-none absolute top-5 right-5 text-right text-xs leading-snug text-soappink/60 select-none" aria-hidden="true">
				/ᐠ - ˕ -マ Ⳋ<br />₍^. ̫.^₎⟆
			</p>
		</div>
	</div>
</section>

<!-- Projects -->
<section class="mt-14">
	<div class="mb-6 flex flex-wrap items-end justify-between gap-4">
		<SectionHeading class="mb-0">Projects</SectionHeading>
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

	{#if year === null}
		<div class="space-y-12" in:fade={{ duration: 200, delay: 130 }} out:fade={{ duration: 120 }}>
			{#if pinned.length}
				<div>
					<div class="mb-4 flex items-center gap-3">
						<h2 class="my-0 flex items-center gap-2 text-xl">
							<Icon name="pin" class="size-5 -rotate-12" /> Pinned
						</h2>
						<div class="h-px flex-1 bg-white/10"></div>
					</div>
					{@render grid(pinned)}
				</div>
			{/if}

			{#each yearSections as section (section.year)}
				<div>
					<div class="mb-4 flex items-center gap-3">
						<h2 class="my-0 text-xl">{section.year}</h2>
						<div class="h-px flex-1 bg-white/10"></div>
						<span class="text-sm text-muted">{section.projects.length}</span>
					</div>
					{@render grid(section.projects)}
				</div>
			{/each}
		</div>
	{:else}
		<div in:fade={{ duration: 200, delay: 130 }} out:fade={{ duration: 120 }}>
			{@render grid(yearProjects)}
		</div>
	{/if}
</section>

<!-- Future Projects -->
<section class="mt-16" use:reveal>
	<SectionHeading class="mb-1">In the Works</SectionHeading>
	<p class="muted mb-6">To motivate myself to finish these :D</p>
	<div class="grid grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] gap-4">
		{#each wipProjects as project}
			<div
				class="rounded-2xl border border-dashed border-white/15 p-5 transition-colors duration-200 hover:border-soappink/40"
			>
				<p class="font-display text-lg text-soappink">{project.title}</p>
				<p class="mt-1 text-sm text-notwhite/70">{project.summary}</p>
			</div>
		{/each}
	</div>
</section>

<!-- Nontechnical Section -->
<section class="mt-16 grid items-start gap-4 sm:grid-cols-2 xl:grid-cols-[13rem_1fr_1fr]" use:reveal>
	<div class="hidden xl:block">
		<p class="hand -rotate-6 text-3xl text-soappink">Nontechnical Things</p>
		<img src="/arrow.webp" alt="" class="mt-3 ml-16 h-12 w-24 rotate-40 -scale-x-100 opacity-80" />
	</div>
	<p class="hand -rotate-2 text-3xl text-soappink sm:col-span-2 xl:hidden">Nontechnical Things</p>

	<div class="grid gap-2">
		<Button href="/pages/skating" unicode="&#9976;">Figure Skating</Button>
		<Button href="/pages/crocheting" unicode="&#129526;">Crocheting</Button>
		<Button href="/pages/art" unicode="&#x1F3A8;">Art</Button>
	</div>

	<div class="card h-full p-5" use:spotlight>
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
