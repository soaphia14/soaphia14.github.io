<script lang="ts">
    import ProjectLink from "./ProjectLink.svelte";
    import Tag from "./Tag.svelte";
    import Banner from "./Banner.svelte";
    import { spotlight } from "$lib/spotlight";
    import { dateLabel, type Project } from "$lib/projects";

    let { project }: { project: Project } = $props();
</script>

<div
    use:spotlight
    class="card group flex flex-col overflow-hidden @xl:flex-row transition-all duration-300 hover:border-soappink/30 hover:shadow-[0_12px_40px_-12px_rgb(242_209_240/0.25)] motion-safe:hover:-translate-y-1"
>
    <!-- banner: on top when narrow, on the left when the list is wide enough -->
    <div class="relative h-40 shrink-0 overflow-hidden border-b border-white/8 bg-surface @xl:h-auto @xl:min-h-44 @xl:w-60 @xl:border-r @xl:border-b-0">
        <Banner
            {project}
            lazy
            card
            class="absolute inset-0 size-full object-cover brightness-75 transition-all duration-500 ease-out group-hover:brightness-100 motion-safe:group-hover:scale-105"
        />
    </div>

    <div class="flex min-w-0 flex-1 flex-col p-5 @xl:px-6">
        <h3 class="mt-0 mb-1.5 text-2xl text-notwhite transition-colors group-hover:text-soappink">
            {project.title}
        </h3>
        <div class="flex flex-wrap gap-2">
            <Tag>{dateLabel(project)}</Tag>
            {#each project.tags as tag}
                <Tag color={tag.color} url={tag.url}>{tag.name}</Tag>
            {/each}
        </div>
        <p class="mt-2.5 text-notwhite/80">
            {@html project.summary}
        </p>

        {#if project.links.length}
            <div class="mt-auto flex flex-wrap gap-2 pt-4 @xl:justify-end">
                {#each project.links as link}
                    <ProjectLink {link} />
                {/each}
            </div>
        {/if}
    </div>
</div>
