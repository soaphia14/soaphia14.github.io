<script lang="ts">
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcomeFallback from '$lib/images/svelte-welcome.png';
    import TextDiv from './TextDiv.svelte';
	import Button from './Button.svelte';
    import Project from './Project.svelte';

	var divclass = "bg-divfill border-divborder/20 border-1 rounded-lg p-5 text-notwhite mx-2"
	
	var future_projects = [
{
			title: "Bad 2048",
			description: "2048 but 2048x more annoying.",
			tags: ["Fun"],
			present: {
			// 	ext: ["Website", "linklink"],
			// 	github: "linklink"
			}
		},{
			title: "Monte Carlinux",
			description: "There's a 60% of finding a linux user in your engineering class. But how many classes are needed to find someone who passes all your checks?",
			tags: ["Fun"],
			present: {
			// 	ext: ["Website", "linklink"],
			// 	github: "linklink"
			}
		},{
			title: "DuoLeetCode",
			description: "The best way to practice LeetCode problems with a friend. Adds fun to a typically grueling task.",
			tags: ["Website", "Fun"],
			present: {
				// ext: ["Website", "linklink"],
				// github: "linklink"
			}
		}
	]
	var projects = [
		{
			title: "Skater Data",
			date: "2025",
			description: "Analyzing whether the technical score has increased more than the program components score over past 2 decades.",
			banner: "/skaterdata/ladies_fs.png",
			present: {
				ext: ["Article", "/pages/skaterdata/#top", "_self"],
			}
		},{
			title: "RL Maze Agent",
			date: "2025",
			description: "Trained an RL agent to solve up to a 5x5 maze.",
			tags: [],
			present: {
				ext: ["Demo", "/pages/rlmaze/#top", "_self"],
			}
		},{
			title: "Mock Interview Website",
			date: "2023-2024",
			description: "An interview practice platform providing personalized AI-generated questions and video feedback.",
			extLinkTitle: "Demo Vid",
			banner:"/pokeco_ex_logo.png",
			present: {
				ext: ["Website", "https://poke-and-goose.onrender.com/"],
				github: "https://github.com/soaphia14/teampoke"
			}
		}, {
			title: "PigeonBots Website",
			date: "2023",
			description: "Team website for the FTC team #23975.",
			tags: ["Website"],
			banner: "/pigeonbots.png",
			present: {
				ext: ["Website", "https://pigeon-bots.netlify.app"],
				// github: "linklink"
			}
		},{
			title: "SGA Election Website",
			date: "2023",
			description: "A secure election platform that was used for my high school's freshman SGA elcetions.",
			tags: ["Website"],
			banner: "/phssite2.png",
			present: {
				ext: ["Demo Vid", "https://drive.google.com/file/d/14IRsYTx6a1rcwNrec9evfGOD01tgT4GW/view?usp=sharing"],
				github: "https://github.com/soaphia14/phs-sga-site"
			}
		}
	];

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class = "justify-start items-start">
	<h1> Hello! </h1>
	<div class = "flex flex-row mt-2">
		<div class = "{divclass} lg:w-3/4">
			I'm Sophia Liu, a freshman studying Computer Science at Cornell University. I'm interested in anything CS, especially with robotics, physics, and webdev~ <br>
			<br>
			Some other things about me:
			<ul class="list-disc list-inside">
				<li>I'm a long-time figure skater</li>
				<li>I'm a casual artist</li>
				<li>I like cats!</li>
			</ul>
		</div>
		<div class = "{divclass} hidden w-1/4 lg:block">
			can you actually work bruv
		</div>
	
	</div>
	<br>
	<div class = "flex flex-row">
		<div class = "items-center mb-4 w-[300px]">
			<p class="text-soappink text-3xl shadows-into-light-regular -rotate-10">Nontechnical Things</p>
			<div class = "ml-6xl justify-end w-fill lg:ml-4">
				<img src = "arrow.png" alt="Arrow" class="mx-5 w-24 h-12 mt-3 rotate-40 scale-x-[-1]"/>
			</div>
			
		</div>
		<div class="grid w-full lg:w-1/2 grid-row-3 mx-2">
			<Button>Skating</Button>
			<Button>Crocheting</Button>
			<Button>Art</Button>
		</div>
		<!-- <div class = "{divclass} w-1/4 hidden md:block my-1">
			<p class="h-full">
				can you actually work bruv
			</p>
		</div> -->
		<div class = "{divclass} w-1/2 hidden lg:block my-1">
			<p class="h-full">
				can you actually work bruv
			</p>
		</div>
		
	</div>
	<br>
	<h1> Projects </h1>
	<div class = "inline-flex flex-wrap justify-center">
		{#each projects as project}
			<Project 
				title={project.title} 
				date={project.date} 
				desc={project.description}
				tags={project.tags}
				banner={project.banner}
				present = {project.present}
				/>
		{/each}
	</div>

	<br>
	<h1> In the Works </h1>
	To motivate myself to finish these :D
	<br><br>
	<div class = "inline-flex flex-wrap justify-center">
		{#each future_projects as project}
			<Project 
				title={project.title} 
				date={project.date} 
				desc={project.description}
				tags={project.tags}
				banner={project.banner}
				present = {project.present}
				/>
		{/each}
	</div>

</section>

<!-- lg:w-30 mt-3 lg:mt-2 lg:h-20 lg:ml-[100px] s-->