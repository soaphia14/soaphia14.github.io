<script lang="ts">
    import ProjectLink from "./ProjectLink.svelte";
    import Tag from "./Tag.svelte";
    import { type ProjectCard } from "../const";

    let { project }: { project: ProjectCard } = $props();
</script>

<div
    class="card group flex h-full flex-col overflow-hidden transition-all duration-300 hover:border-soappink/30 hover:shadow-[0_12px_40px_-12px_rgb(242_209_240/0.25)] motion-safe:hover:-translate-y-1"
>
    <div class="relative h-40 overflow-hidden border-b border-white/8 bg-surface">
        {#if project.banner}
            <img
                class="size-full object-cover brightness-75 transition-all duration-500 ease-out group-hover:brightness-100 motion-safe:group-hover:scale-105"
                src={project.banner}
                alt="{project.title} banner"
                loading="lazy"
                style={project.slug ? `view-transition-name: banner-${project.slug}` : undefined}
            />
        {/if}
        <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-divfill/80 to-transparent"></div>
    </div>

    <div class="flex flex-1 flex-col p-5">
        <h3 class="mt-0 mb-2 text-2xl text-notwhite transition-colors group-hover:text-soappink">{project.title}</h3>
        <div class="flex flex-wrap gap-2">
            <Tag>{project.date}</Tag>
            {#each project.tags ?? [] as tag}
                <Tag>{tag}</Tag>
            {/each}
        </div>
        <p class="mt-3 text-notwhite/80">
            {@html project.description}
        </p>

        {#if project.links?.length}
            <div class="mt-auto flex flex-wrap gap-2 pt-5">
                {#each project.links as link}
                    <ProjectLink {link} />
                {/each}
            </div>
        {/if}
    </div>
</div>
