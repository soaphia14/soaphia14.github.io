<script lang="ts">
    import { divclass } from "../const";
    import ProjectLink from "./ProjectLink.svelte";
    import Tag from "./Tag.svelte";
    import { type ProjectCard } from "../const";

    let { project }: { project: ProjectCard } = $props();
    var imgclass = "inline pl-3 h-1/2 object-contain";
</script>

<div
    class="{divclass} mt-1 mb-5 w-full lg:w-4/10 lg:mx-8 flexbox flex-col justify-center items-center lg:flex-row hover group"
>
    {#if project.banner}
        <img
            class="border-divborder/20 border-1 rounded-t-lg w-full h-32 brightness-70 group-hover:brightness-90 object-cover duration-200"
            src={project.banner}
            alt="{project.title} banner image"
        />
    {:else}
        <div
            class="bg-darkfill/40 border-divborder/20 border-1 rounded-t-lg w-full h-32 brightness-30 group-hover:brightness-95 object-cover duration-200 justify-center items-center flex flex-row text-notwhite"
        ></div>
    {/if}
    <div class="p-5">
        <div class="text-notwhite share-tech text-3xl">{project.title}</div>
        <div class="flex">
            {#if project.date}
                <Tag>{project.date}</Tag>
            {/if}
            {#each project.tags as tag}
                <Tag>{tag}</Tag>
            {/each}
        </div>
        <p class="mt-2">
            {@html project.description}
        </p>

        <div class="flex flex-row justify-center items-center">
            {#each project.links as link}
                {#if link.type == "ext"}
                    <ProjectLink
                        target={link.target}
                        link={link.url}
                        color="bg-slate-900/70"
                        hover="hover:bg-slate-900/90"
                    >
                        {link.name}
                        <img
                            src="https://img.icons8.com/fluent-systems-regular/512/FFFFFF/external-link.png"
                            alt="Ext Icon"
                            class={imgclass}
                        />
                    </ProjectLink>
                {:else if link.type == "github"}
                    <ProjectLink
                        target={link.target}
                        link={link.url}
                        color="bg-stone-900/70"
                        hover="hover:bg-stone-900/90"
                    >
                        Github
                        <img
                            src="https://img.icons8.com/ios11/512/FFFFFF/github.png"
                            alt="GitHub Icon"
                            class={imgclass}
                        />
                    </ProjectLink>
                {:else if link.type == "youtube"}
                    <ProjectLink
                        target={link.target}
                        link={link.url}
                        color="bg-red-900/50"
                        hover="hover:bg-red-500/70"
                    >
                        <img
                            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-app-white-icon.png"
                            alt="YouTube Icon"
                            class={imgclass}
                        />
                        Youtube
                    </ProjectLink>
                {/if}
            {/each}
        </div>
    </div>
</div>
