<script>
    let { href, unicode, children } = $props();
    ""
</script>

<a {href}>
    <button
        class="group transition bg-divfill flex flex-row w-full my-1 justify-start items-start border-divborder/20 border-1 rounded-lg p-3 flex flex-col text-notwhite hover:bg-divfill/40 active:bg-divfill/20 transition-all cursor-pointer"
    >
        {@render children()}

        <!-- {#if href == "./"} -->
            <span
                class="transform transition duration-300 w-auto not-group-hover:hidden ml-2"
            >
                <!--› group-hover:translate-x-4 --> {unicode}
                
            </span>
        <!-- {/if} -->
    </button>
</a>
