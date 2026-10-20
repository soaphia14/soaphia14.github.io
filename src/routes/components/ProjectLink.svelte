<script lang="ts">
    import Icon from "$lib/Icon.svelte";
    import type { Link } from "../const";

    let { link }: { link: Link } = $props();

    const styles = {
        ext: { label: "Link", icon: "ext", tone: "hover:border-soappink/40 hover:bg-soappink/10 hover:text-soappink" },
        github: { label: "GitHub", icon: "github", tone: "hover:border-white/30 hover:bg-white/10 hover:text-white" },
        youtube: { label: "YouTube", icon: "youtube", tone: "hover:border-red-400/40 hover:bg-red-500/10 hover:text-red-300" },
    } as const;

    const style = $derived(styles[link.type]);
    // External links open in a new tab, internal ones don't (unless set explicitly).
    const target = $derived(link.target ?? (link.url.startsWith("http") ? "_blank" : "_self"));
</script>

<a
    href={link.url}
    {target}
    rel={target === "_blank" ? "noopener" : undefined}
    class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-notwhite/90 transition-all duration-200 {style.tone}"
>
    <Icon name={style.icon} />
    {link.name ?? style.label}
</a>
