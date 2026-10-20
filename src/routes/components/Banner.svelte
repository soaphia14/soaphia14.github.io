<!--
Project banner: a looping muted video when the project has `bannerVideo`, otherwise the image.
The image doubles as the video's poster, and is all that shows for people who prefer reduced motion.
-->
<script lang="ts">
    import type { Project } from "$lib/projects";

    let {
        project,
        class: klass = "",
        lazy = false,
        card = false,
    }: { project: Project; class?: string; lazy?: boolean; card?: boolean } = $props();

    // bannerFit: contain only applies on cards; wide article headers always crop.
    const contain = $derived(card && project.bannerFit === "contain");

    const style = $derived(
        [
            project.hasArticle && `view-transition-name: banner-${project.slug}`,
            project.bannerPosition && `object-position: ${project.bannerPosition}`,
            contain && `object-fit: contain; background: ${project.bannerBg ?? "#fff"}`,
        ]
            .filter(Boolean)
            .join("; ") || undefined,
    );

    let video: HTMLVideoElement | undefined = $state();

    $effect(() => {
        if (!video) return;
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
        const sync = () => (reduce.matches ? video!.pause() : video!.play().catch(() => {}));
        sync();
        reduce.addEventListener("change", sync);
        return () => reduce.removeEventListener("change", sync);
    });
</script>

{#if project.bannerVideo}
    <video
        bind:this={video}
        src={project.bannerVideo}
        poster={project.banner}
        class={klass}
        {style}
        loop
        muted
        playsinline
        preload={lazy ? "metadata" : "auto"}
        aria-label="{project.title} demo"
    ></video>
{:else if project.banner}
    <img src={project.banner} alt="{project.title} banner" class={klass} {style} loading={lazy ? "lazy" : "eager"} />
{/if}
