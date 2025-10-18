<script lang="ts">
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcomeFallback from '$lib/images/svelte-welcome.png';
    import TextDiv from './TextDiv.svelte';
	import Button from './Button.svelte';
    import Project from './Project.svelte';

	var divclass = "bg-divfill border-divborder/20 border-1 rounded-lg p-5 text-notwhite mx-2"
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class = "justify-start items-start text-white">
	<h1> Hello! </h1>
	<div class = "flex flex-row mt-2">
		<div class = "{divclass} md:w-3/4">
			I'm Sophia Liu, a freshman studying Computer Science at Cornell University. I'm interested in anything CS, including when it comes to robotics, physics, and webdev! <br>
			<br>
			Some other things about me:
			<ul class="list-disc list-inside">
				<li>I'm a long-time figure skater</li>
				<li>I'm a casual artist</li>
				<li>I like cats!</li>
			</ul>
		</div>
		<div class = "{divclass} hidden w-1/4 md:block">
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
		<div class = "{divclass} w-1/4 hidden md:block my-1">
			<p class="h-full">
				can you actually work bruv
			</p>
		</div>
		<div class = "{divclass} w-1/4 hidden lg:block my-1">
			<p class="h-full">
				can you actually work bruv
			</p>
		</div>
		
	</div>
	<br>
	<h1> Projects </h1>
	<Project />
	<Project />

</section>

<!-- lg:w-30 mt-3 lg:mt-2 lg:h-20 lg:ml-[100px] s-->