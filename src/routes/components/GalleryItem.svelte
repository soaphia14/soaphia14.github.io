<!-- An image card with a caption, used on the art and crocheting pages. -->
<script lang="ts">
    import type { Snippet } from "svelte";
    import { reveal } from "$lib/reveal";

    let {
        src,
        alt,
        square = false,
        index = 0,
        children,
    }: { src: string; alt: string; square?: boolean; index?: number; children?: Snippet } = $props();

    let loaded = $state(false);
    let img: HTMLImageElement;

    // Images already in the cache can finish loading before hydration, so onload never fires.
    $effect(() => {
        if (img.complete) loaded = true;
    });
</script>

<figure class="card group overflow-hidden" use:reveal={index % 2}>
    <div class="overflow-hidden bg-surface {square ? 'aspect-square' : ''}">
        <img
            bind:this={img}
            {src}
            {alt}
            loading="lazy"
            onload={() => (loaded = true)}
            class="size-full object-cover transition-all duration-700 ease-out motion-safe:group-hover:scale-[1.03] {loaded
                ? 'opacity-100'
                : 'opacity-0'}"
        />
    </div>
    {#if children}
        <figcaption class="p-4 text-notwhite/80">
            {@render children()}
        </figcaption>
    {/if}
</figure>
