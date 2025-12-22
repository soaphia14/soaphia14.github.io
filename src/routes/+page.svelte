<script lang="ts">
	import welcome from "$lib/images/svelte-welcome.webp";
	import welcomeFallback from "$lib/images/svelte-welcome.png";
	import Button from "./components/Button.svelte";
	import Project from "./components/ProjectCard.svelte";
	import { projects, futureProjects } from "./const.ts";
	import ProjectCard from "./components/ProjectCard.svelte";
	import { writable } from "svelte/store";

	const divclass =
		"bg-divfill border-divborder/20 border-1 rounded-lg p-5 text-notwhite mx-2";

	// Filter classes
	const filteredProjects = writable(projects);
	let dateFilter: string = "20"; // default

	$: {
		dateFilter;
		filteredProjects.set(
			projects.filter((p) => {
				return p.date.includes(dateFilter);
			}),
		);
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="justify-start items-start">
	<!-- Introduction -->
	<h1>Hello!</h1>
	<div class="flex flex-row mt-2">
		<div class="{divclass} lg:w-3/4">
			I'm Sophia Liu, an undergrad studying Computer Science at Cornell
			University. I'm interested in anything CS, especially with robotics,
			physics, and webdev. <br />
			<br />
			Some other things about me:
			<ul class="list-disc list-inside">
				<li>I'm a long-time figure skater</li>
				<li>I'm a casual artist</li>
				<li>I'm always up to explore a subject!</li>
			</ul>
		</div>
		<div
			class="{divclass} hidden w-1/4 lg:flex justify-center items-center text-center"
		>
			/ᐠ - ˕ -マ Ⳋ<br />
			₍^. ̫.^₎⟆ ‍
		</div>
	</div>
	<br />

	<!-- Nontechnical Section -->
	<div class="flex flex-row">
		<div class="items-center mb-4 w-[300px]">
			<p
				class="text-soappink text-3xl shadows-into-light-regular -rotate-10"
			>
				Nontechnical Things
			</p>
			<div class="ml-6xl justify-end w-fill lg:ml-4">
				<img
					src="arrow.png"
					alt="Arrow"
					class="mx-5 w-24 h-12 mt-3 rotate-40 scale-x-[-1]"
				/>
			</div>
		</div>
		<div class="grid w-full lg:w-1/2 grid-row-3 mx-2">
			<Button href="./pages/skating" unicode = "&#9976;">Figure Skating</Button>
			<Button href="./pages/crocheting" unicode ="&#129526;">Crocheting</Button>
			<Button href="./pages/art" unicode ="&#x1F3A8;">Art</Button>
		</div>
		<!-- <div class = "{divclass} w-1/4 hidden md:block my-1">
			<p class="h-full">
				can you actually work bruv
			</p>
		</div> -->
		<div class="{divclass} w-1/2 hidden lg:block my-1">
			<!-- <p class="h-full">Future information here!</p> flex justify-center items-center -->
			My current recs:
			<br>
			Book - ORV 
			<br>
			Song - Devil by the Window by TXT
			<br>
			TV Show - Andor Season 2
		</div>
	</div>
	<br />

	<!-- Projects -->
	<h1>Projects</h1>
	<span>
		Date:
		<select name="date" bind:value={dateFilter}>
			<option value="20">All</option>
			<option value="25">2025</option>
			<option value="24">2024</option>
			<option value="23">2023</option>
		</select>
	</span>
	<br />
	<div class="mt-3 sm:inline-flex sm:flex-wrap justify-center">
		{#each $filteredProjects as project}
			<ProjectCard {project} />
		{/each}
	</div>

	<br />

	<!-- Future Projects -->
	<h1>In the Works</h1>
	To motivate myself to finish these :D
	<br />
	<!-- <div class="inline-flex flex-wrap justify-center"> For ProjectCard -->
	<ul>
		{#each futureProjects as project}
			<li class="list-disc ml-5">
				<b class="text-soappink">{project.title}</b> -
				{project.description}
			</li>
		{/each}
	</ul>

	<!-- </div> -->
</section>

<!-- lg:w-30 mt-3 lg:mt-2 lg:h-20 lg:ml-[100px] s-->
