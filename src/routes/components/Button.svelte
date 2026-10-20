<script lang="ts">
    import Icon from "$lib/Icon.svelte";
    import { spotlight } from "$lib/spotlight";
    import type { Snippet } from "svelte";

    let { href, unicode, children }: { href: string; unicode: string; children: Snippet } = $props();
</script>

<a
    {href}
    use:spotlight
    class="card group flex items-center gap-3 px-4 py-3 text-notwhite transition-all duration-200 hover:border-soappink/30 hover:bg-divfill hover:text-notwhite motion-safe:hover:translate-x-1"
>
    <span class="grid size-9 place-items-center rounded-lg bg-white/5 text-lg transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
        {@html unicode}
    </span>
    <span class="flex-1">{@render children()}</span>
    <Icon
        name="chevron"
        class="size-4 text-muted transition-all duration-200 group-hover:translate-x-1 group-hover:text-soappink"
    />
</a>
