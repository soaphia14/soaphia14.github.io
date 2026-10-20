<script lang="ts">
    import Icon from "$lib/Icon.svelte";

    let { children } = $props();
</script>

<a
    href="/"
    class="group mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-notwhite/80 hover:border-soappink/40 hover:text-soappink"
>
    <Icon name="arrow-left" class="size-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
    Home
</a>

<article class="prose-page">
    {@render children()}
</article>
