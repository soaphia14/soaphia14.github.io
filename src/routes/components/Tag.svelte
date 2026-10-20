<script lang="ts">
    import type { Snippet } from "svelte";
    import type { TagColor } from "$lib/projects";

    let { children, color, url }: { children: Snippet; color?: TagColor; url?: string } = $props();

    // Soft tinted pills; no color = the default gray pill.
    const tints: Record<TagColor, string> = {
        red: "border-red-400/30 bg-red-500/15 text-red-200",
        orange: "border-orange-400/30 bg-orange-500/15 text-orange-200",
        amber: "border-amber-300/30 bg-amber-400/15 text-amber-200",
        green: "border-emerald-400/30 bg-emerald-500/15 text-emerald-200",
        blue: "border-sky-400/30 bg-sky-500/15 text-sky-200",
        purple: "border-violet-400/30 bg-violet-500/15 text-violet-200",
        pink: "border-soappink/30 bg-soappink/15 text-soappink",
    };
</script>

{#if url}
    <a href={url} target="_blank" rel="noopener" class="pill transition-[filter] hover:brightness-125 {color ? tints[color] : ''}">
        {@render children()}
    </a>
{:else}
    <span class="pill {color ? tints[color] : ''}">{@render children()}</span>
{/if}
