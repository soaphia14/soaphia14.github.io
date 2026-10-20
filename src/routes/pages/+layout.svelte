<script lang="ts">
    import BackHome from "../components/BackHome.svelte";

    let { children } = $props();
</script>

<BackHome />

<article class="prose-page">
    {@render children()}
</article>
