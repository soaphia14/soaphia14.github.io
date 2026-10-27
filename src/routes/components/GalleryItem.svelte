<!-- An image card with a caption, used on the art and crocheting pages. -->
<script lang="ts">
    import type { Snippet } from "svelte";

    let {
        src,
        alt,
        square = false,
        children,
    }: { src: string; alt: string; square?: boolean; children?: Snippet } = $props();
</script>

<figure class="card group overflow-hidden">
    <div class="overflow-hidden bg-surface {square ? 'aspect-square' : ''}">
        <img
            {src}
            {alt}
            loading="lazy"
            class="size-full object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.03]"
        />
    </div>
    {#if children}
        <figcaption class="p-4 text-notwhite/80">
            {@render children()}
        </figcaption>
    {/if}
</figure>
