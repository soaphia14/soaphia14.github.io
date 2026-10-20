<!--
CS2112 is infecting my brain.
Sidebar (when screensize large enough) or header (when screensize small enough).
Displays name, email, picture, and other links.
-->
<script lang="ts">
    import Icon from "$lib/Icon.svelte";
    import { fly } from "svelte/transition";

    const email = "sl3632@cornell.edu";
    let copied = $state(false);

    async function copyEmail() {
        try {
            await navigator.clipboard.writeText(email);
            copied = true;
            setTimeout(() => (copied = false), 1600);
        } catch {
            // clipboard blocked; the address is still visible to copy by hand
        }
    }

    // The flowers background is a video, not an animated image: browsers keep videos
    // playing while you scroll, but pause or drop frames on animated images.
    let flowers: HTMLVideoElement | undefined = $state();

    $effect(() => {
        if (!flowers) return;
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
        const sync = () => (reduce.matches ? flowers!.pause() : flowers!.play().catch(() => {}));
        sync();
        reduce.addEventListener("change", sync);
        return () => reduce.removeEventListener("change", sync);
    });

    const iconBtn =
        "grid size-10 place-items-center rounded-full border border-white/10 bg-white/5 text-notwhite/80 transition-all duration-200 hover:-translate-y-0.5 hover:border-soappink/40 hover:bg-soappink/10 hover:text-soappink";
</script>

<div
    class="relative flex h-full min-h-[65svh] flex-col items-center justify-center overflow-hidden bg-black px-6 py-12 md:min-h-0"
>
    <video
        bind:this={flowers}
        src="/flowers.mp4"
        poster="/flowers-poster.webp"
        class="absolute inset-0 size-full object-cover"
        loop
        muted
        playsinline
        aria-hidden="true"
    ></video>
    <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-darkfill/95"></div>

    <div class="relative z-10 flex flex-col items-center text-center">
        <div
            class="group rounded-full bg-gradient-to-br from-soappink to-soappink-strong/60 p-[3px] shadow-[0_0_40px_-8px_rgb(242_209_240/0.5)] transition-transform duration-500 hover:scale-105"
        >
            <img
                src="/headshot.webp"
                alt="Sophia Liu"
                class="size-32 rounded-full border-4 border-darkfill bg-white object-cover"
            />
        </div>

        <h1 class="mt-6 mb-1 text-4xl">Sophia Liu</h1>
        <p class="text-notwhite/80">CS @ Cornell</p>

        <div class="mt-8 flex items-center gap-3">
            <a href="https://www.linkedin.com/in/sophia-liu-cs/" target="_blank" rel="noopener" class={iconBtn} aria-label="LinkedIn">
                <Icon name="linkedin" />
            </a>
            <a href="https://github.com/soaphia14" target="_blank" rel="noopener" class={iconBtn} aria-label="GitHub">
                <Icon name="github" class="size-5" />
            </a>
            <button type="button" onclick={copyEmail} class="{iconBtn} cursor-pointer" aria-label="Copy email">
                <Icon name="mail" />
            </button>
        </div>

        <button
            type="button"
            onclick={copyEmail}
            class="mt-4 cursor-pointer text-sm text-notwhite/60 transition-colors hover:text-soappink"
        >
            sl3632 (at) cornell.edu
        </button>
    </div>
</div>

<!-- Toast shown after copying the email -->
<div class="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center" aria-live="polite">
    {#if copied}
        <div
            transition:fly={{ y: 16, duration: 250 }}
            class="flex items-center gap-2 rounded-full border border-soappink/30 bg-divfill/95 px-4 py-2 text-sm text-notwhite shadow-[0_10px_30px_-10px_rgb(242_209_240/0.4)] backdrop-blur"
        >
            <span class="text-soappink">✿</span> email copied!
        </div>
    {/if}
</div>
