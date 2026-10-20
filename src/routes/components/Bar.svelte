<!--
CS2112 is infecting my brain.
Sidebar (when screensize large enough) or header (when screensize small enough).
Displays name, email, picture, and other links.
-->
<script lang="ts">
    import Icon from "$lib/Icon.svelte";

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

    const iconBtn =
        "grid size-10 place-items-center rounded-full border border-white/10 bg-white/5 text-notwhite/80 transition-all duration-200 hover:-translate-y-0.5 hover:border-soappink/40 hover:bg-soappink/10 hover:text-soappink";
</script>

<div
    class="relative flex h-full min-h-[65svh] flex-col items-center justify-center overflow-hidden bg-black bg-[url(/flowers-gif.gif)] bg-cover bg-center px-6 py-12 md:min-h-0"
>
    <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-darkfill/95"></div>

    <div class="relative z-10 flex flex-col items-center text-center">
        <div
            class="group rounded-full bg-gradient-to-br from-soappink to-soappink-strong/60 p-[3px] shadow-[0_0_40px_-8px_rgb(242_209_240/0.5)] transition-transform duration-500 hover:scale-105"
        >
            <img
                src="/headshot.jpeg"
                alt="Sophia Liu"
                class="size-32 rounded-full border-4 border-darkfill bg-white object-cover"
            />
        </div>

        <h1 class="mt-6 mb-1 text-4xl">Sophia Liu</h1>
        <p class="text-notwhite/80">Cornell CS Undergrad</p>

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
            {copied ? "copied! ✿" : "sl3632 (at) cornell.edu"}
        </button>
    </div>
</div>
