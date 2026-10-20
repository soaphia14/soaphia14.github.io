<script lang="ts">
    import { dateLabel } from "$lib/projects";
    import BackHome from "../../components/BackHome.svelte";
    import Banner from "../../components/Banner.svelte";
    import ProjectLink from "../../components/ProjectLink.svelte";
    import SectionHeading from "../../components/SectionHeading.svelte";
    import Tag from "../../components/Tag.svelte";

    let { data } = $props();
    const project = $derived(data.project);
    // The article link points at this page, so leave it out here.
    const links = $derived(project.links.filter((l) => l.url !== `/projects/${project.slug}`));
</script>

<svelte:head>
    <title>{project.title} · Sophia Liu</title>
    <meta name="description" content={project.summary.replace(/<[^>]+>/g, " ")} />
</svelte:head>

<BackHome />

<article class="prose-page">
    <Banner {project} class="mb-8 h-48 w-full rounded-2xl border border-white/10 object-cover sm:h-56" />

    <SectionHeading>{project.title}</SectionHeading>
    <div class="mt-1 flex flex-wrap items-center gap-2">
        <Tag>{dateLabel(project)}</Tag>
        {#each project.tags as tag}
            <Tag color={tag.color} url={tag.url}>{tag.name}</Tag>
        {/each}
    </div>
    {#if links.length}
        <div class="mt-4 flex flex-wrap gap-2">
            {#each links as link}
                <ProjectLink {link} />
            {/each}
        </div>
    {/if}

    <data.Content />
</article>
