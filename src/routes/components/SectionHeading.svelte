<!-- h1 with a hand-drawn squiggle underneath that draws itself in when scrolled into view (the text itself doesn't animate). -->
<script lang="ts">
    import type { Snippet } from "svelte";
    import { inView } from "$lib/inView";

    let { children, class: klass = "" }: { children: Snippet; class?: string } = $props();
</script>

<h1 class="squiggle-heading relative inline-block pb-3 {klass}" use:inView>
    {@render children()}
    <svg
        class="absolute -bottom-0.5 left-0 h-3 w-full overflow-visible text-soappink/70"
        viewBox="0 0 200 12"
        preserveAspectRatio="none"
        aria-hidden="true"
    >
        <path
            d="M2 8 C 20 2, 35 11, 55 6 S 90 2, 110 7 S 150 11, 170 5 S 192 4, 198 7"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            pathLength="1"
        />
    </svg>
</h1>
