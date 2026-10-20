<!-- Site footer: last-updated date and a small cat who says hi when poked. -->
<script lang="ts">
    import { fly } from "svelte/transition";

    const updated = new Date(__LAST_UPDATED__).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });

    // Big-O facts (a study buddy cat)
    const quotes = [
        "Linked list: O(1) insert/delete if you have the node",
        "Array: O(1) random access",
        "Dynamic array: O(1) amortized append",
        "Hash map: O(1) average lookup",
        "Balanced BST: O(log n) search, insert, delete",
        "Heap: O(1) peek, O(log n) push/pop",
        "Stack & queue: O(1) push and pop",
        "Trie: O(m) lookup for a key of length m",
        "Union-find: ~O(1) per op (inverse Ackermann!)",
        "Binary search: O(log n) on a sorted array",
        "Merge sort: O(n log n) every time, and stable",
        "Quicksort: O(n log n) average, O(n²) worst",
        "Heapsort: O(n log n), in place",
        "Insertion sort: O(n) on nearly sorted input",
        "Counting sort: O(n + k)",
        "BFS / DFS: O(V + E)",
        "Dijkstra (binary heap): O((V + E) log V)",
    ];
    let says: string | null = $state(null);
    let hopping = $state(false);
    let timer: ReturnType<typeof setTimeout>;

    function poke() {
        // pick a different quote than the one showing
        const options = quotes.filter((q) => q !== says);
        says = options[Math.floor(Math.random() * options.length)];
        hopping = false;
        requestAnimationFrame(() => (hopping = true));
        clearTimeout(timer);
        timer = setTimeout(() => (says = null), 2800);
    }

    function hush() {
        clearTimeout(timer);
        says = null;
    }
</script>

<footer class="relative mt-24 border-t border-white/8 pt-6 pb-2 text-sm text-muted">
    <!-- hint next to the cat; fades out while it's talking -->
    <span
        class="hand pointer-events-none absolute -top-[22px] right-16 text-base text-muted/60 transition-opacity duration-300 select-none {says
            ? 'opacity-0'
            : 'opacity-100'}"
        aria-hidden="true"
    >
        click me →
    </span>

    <button
        type="button"
        onclick={poke}
        onmouseenter={poke}
        onmouseleave={hush}
        class="absolute -top-[30px] right-6 cursor-pointer"
        aria-label="Pet the cat"
    >
        {#if says}
            <span
                transition:fly={{ y: 6, duration: 200 }}
                class="absolute right-0 bottom-full mb-2 w-max max-w-56 text-right rounded-xl rounded-br-sm border border-white/10 bg-divfill px-2.5 py-1 text-xs text-soappink"
            >
                {says}
            </span>
        {/if}
        <img
            src="/cat-bit8.webp"
            alt=""
            class="cat size-8 [image-rendering:pixelated] {hopping ? 'hop' : ''}"
            onanimationend={() => (hopping = false)}
        />
    </button>

    <div class="flex flex-wrap items-center justify-between gap-2">
        <p>last updated {updated}</p>
        <p>made with <span class="text-soappink">♡</span> and svelte</p>
    </div>
</footer>

<style>
    @media (prefers-reduced-motion: no-preference) {
        .cat {
            animation: breathe 3.2s ease-in-out infinite;
            transform-origin: bottom center;
        }
        .cat.hop {
            animation: hop 450ms cubic-bezier(0.3, 0.7, 0.4, 1);
        }
    }
    @keyframes breathe {
        0%, 100% { transform: scaleY(1); }
        50% { transform: scaleY(0.94); }
    }
    @keyframes hop {
        0% { transform: translateY(0) scale(1, 1); }
        20% { transform: translateY(0) scale(1.1, 0.85); }
        50% { transform: translateY(-14px) scale(0.95, 1.08); }
        80% { transform: translateY(0) scale(1.08, 0.9); }
        100% { transform: translateY(0) scale(1, 1); }
    }
</style>
