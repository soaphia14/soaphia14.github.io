<script lang="ts">
    import { reveal } from "$lib/reveal";
    import Icon from "$lib/Icon.svelte";

    interface SkatingYear {
        title: string;
        date: string;
        links?: { event: string; url: string }[];
        results?: { event: string; place: string; url: string }[]; // placements, linked to IJS results
    }

    // Subtle medal tint for the placement badge; 4th and below stay neutral.
    const placeStyle: Record<string, string> = {
        "1st": "bg-amber-300/20 text-amber-200",
        "2nd": "bg-slate-300/20 text-slate-200",
        "3rd": "bg-orange-400/20 text-orange-200",
    };

    const achievements = [
        { label: "Overall", items: ["5x USFS Gold Medalist"] },
        { label: "Synchro", items: ["4x Team USA", "6x National Team", "4x Medaled Internationally"] },
        { label: "Solo Dance", items: ["Solo Dance Finalist"] },
    ];

    const soloDanceVids: SkatingYear[] = [
        {
            title: "SDS: Quickstep (P), Westminster Waltz (V)",
            date: "2022",
        },
        {
            title: "SDS: Rhumba (P), Yankee Polka (V)",
            date: "2023",
        },
        {
            title: "SDS: Ravensburger Waltz (P), Tango Romantica (V)",
            date: "2024",
            links: [
                { event: "Morris Open RW", url: "https://youtu.be/iHNuisNEG_M"},
                { event: "Morris Open TR", url: "https://youtu.be/ZJoVwk6lRK0"}
            ]
        },
        {
            title: "SDS: Tea Time Foxtrot (P), Finnstep (V)",
            date: "2025",
        },
        {
            title: "Collegiate: Austrian Waltz, Tango Romantica",
            date: "2025/26",
            results: [
                { event: "2025 Violet Classic", place: "2nd", url: "https://ijs.usfigureskating.org/leaderboard/nonqual_results/2025/36462/226_international%20solo%20pattern%20dancec1.htm" },
                { event: "2026 MIT Classic", place: "1st", url: "https://ijs.usfigureskating.org/leaderboard/nonqual_results/2025/36411/26%20international%20solo%20pattern%20dancec1.htm" },
                { event: "2026 Utica", place: "2nd", url: "https://ijs.usfigureskating.org/leaderboard/nonqual_results/2026/36388/119%20international%20solo%20pattern%20dancec1.htm" },
                { event: "2026 National Intercollegiate Finals", place: "5th", url: "https://ijs.usfigureskating.org/leaderboard/nonqual_results/2026/36400/127c1.htm" },
            ],
            links: [
                { event: "MIT Classic AW", url: "https://youtu.be/5ihuGsdH7Rc?t=3" },
                { event: "Utica TR", url: "https://www.youtube.com/watch?v=aqmQ78VuX3g" },
            ],
        },
        {
            title: "Collegiate: Silver Samba, Midnight Blues",
            date: "2026/27",
        },
    ].reverse();

    const synchroVids: SkatingYear[] = [
        {
            title: "B1 Blue (Penguins)",
            date: "2016/17",
            links: [
                { event: "Exhibition", url: "https://youtu.be/5KM3BmAlpJg" },
            ],
        },
        {
            title: "Prelim Blue (Sound of Music)",
            date: "2017/18",
            links: [
                { event: "Cape Cod", url: "https://youtu.be/sCXsSRZR5Bo" },
            ],
        },
        {
            title: "Juv (9 to 5)",
            date: "2018/19",
            links: [
                {
                    event: "Nationals Sendoff",
                    url: "https://youtu.be/sPyDuEb0hfA",
                },
                { event: "Nationals", url: "https://youtu.be/PgnnwXhYkEg" },
            ],
        },
        {
            title: "Juv (Hercules)",
            date: "2019/20",
            links: [
                { event: "Nationals", url: "https://youtu.be/oDuehR1NB6A" },
            ],
        },
        {
            title: "Juv (Addams Family)",
            date: "2020/21",
            links: [
                {
                    event: "Exhibition (Covid edition)",
                    url: "https://youtu.be/tyPV1ignsEg?t=734",
                },
            ],
        },
        {
            title: "Junior (SP: Ready or Not, FP: Judy)",
            date: "2021/22",
            links: [
                {
                    event: "Neuchatel Trophy SP",
                    url: "https://youtu.be/NzU1U7XCtLU",
                },
                { event: "Nationals SP", url: "https://youtu.be/8CZ21C_UhPM" },
                { event: "Nationals FP", url: "https://youtu.be/izmtvqwGun0" },
            ],
        },
        {
            title: "Junior (SP: Never Enough, FP: Murder Mystery)",
            date: "2022/23",
            links: [
                { event: "Britannia SP", url: "https://youtu.be/yb4RCeu0H0g" },
                { event: "Nationals SP", url: "https://youtu.be/4EtOS52RUQ8" },
                { event: "Nationals FP", url: "https://youtu.be/Q4gduT5CqvE" },
            ],
        },
        {
            title: "Junior (SP: Warriors, FP: Illusionists)",
            date: "2023/24",
            links: [
                {
                    event: "Nationals Sendoff SP",
                    url: "https://youtu.be/pkJ4LvbI2pU",
                },
                {
                    event: "Nationals Sendoff FP",
                    url: "https://youtu.be/3v77itQcH8w",
                },
            ],
        },
        {
            title: "Junior (SP: You Say, FP: Fairies)",
            date: "2024/25",
            links: [
                // { event: "Fall Classic SP", url: "https://youtu.be/fx0cS2OHEcQ"},
                // { event: "Nationals Sendoff SP", url: "https://youtu.be/cuSGQc2tZU4"},
                {
                    event: "Budapest Cup SP",
                    url: "https://youtu.be/KBQ73duuf_A",
                },
                { event: "Nationals FP", url: "https://youtu.be/_ICO6G5QcYQ" },
            ],
        },
    ].reverse(); // so it's from earliest to latest
</script>

<svelte:head>
    <title>Figure Skating · Sophia Liu</title>
    <meta name="description" content="My figure skating videos over the years: synchronized skating and solo ice dance." />
</svelte:head>

{#snippet seasons(vids: SkatingYear[])}
    <ol class="relative mt-6 space-y-4 border-l border-white/10 pl-6">
        {#each vids as vid, i}
            <li class="relative" use:reveal={i % 3}>
                <span class="absolute top-3 -left-[1.95rem] size-3 rounded-full border-2 border-darkfill bg-soappink"></span>
                <div class="py-2">
                    <p class="text-sm text-muted">{vid.date}</p>
                    <p class="font-display text-lg text-soappink">{vid.title}</p>
                    {#if vid.results?.length}
                        <ul class="mt-2 space-y-1">
                            {#each vid.results as result}
                                <li>
                                    <a
                                        href={result.url}
                                        target="_blank"
                                        rel="noopener"
                                        class="group/result inline-flex items-center gap-2 text-sm text-notwhite/80 hover:text-soappink"
                                    >
                                        <span class="w-10 rounded-full py-0.5 text-center text-xs font-medium {placeStyle[result.place] ?? 'bg-white/10 text-notwhite'}">
                                            {result.place}
                                        </span>
                                        {result.event}
                                        {#if result.place === "1st"}
                                            <span class="hand -ml-1 inline-block -rotate-12 text-lg leading-none text-amber-300 motion-safe:group-hover/result:animate-[wiggle_0.5s_ease-in-out]">!!</span>
                                        {/if}
                                        <Icon name="ext" class="size-3.5 opacity-0 transition-opacity group-hover/result:opacity-70" />
                                    </a>
                                </li>
                            {/each}
                        </ul>
                    {/if}
                    {#if vid.links?.length}
                        <div class="mt-3 flex flex-wrap gap-2">
                            {#each vid.links as link}
                                <a
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener"
                                    class="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-notwhite/80 transition-all hover:border-red-400/40 hover:bg-red-500/10 hover:text-red-300"
                                >
                                    <Icon name="youtube" class="size-4" />
                                    {link.event}
                                </a>
                            {/each}
                        </div>
                    {/if}
                </div>
            </li>
        {/each}
    </ol>
{/snippet}

<div class="grid items-center gap-6 sm:grid-cols-[1fr_auto]">
    <div>
        <h1>Figure Skating</h1>
        <p>A place to store all my skating videos throughout the years.</p>
        <p>
            For my brief skating history: Freestyle (once upon a time) → Synchro → Solo Dance
            → Collegiate Solo Dance
        </p>
        <p class="mt-6 mb-2 text-sm tracking-widest text-muted uppercase">Achievements</p>
        <dl class="grid grid-cols-[auto_1fr] items-baseline gap-x-4 gap-y-2">
            {#each achievements as group}
                <dt class="text-sm text-muted">{group.label}</dt>
                <dd class="flex flex-wrap gap-1.5">
                    {#each group.items as item}
                        <span class="pill">{item}</span>
                    {/each}
                </dd>
            {/each}
        </dl>
    </div>
    <img
        src="/skating/me.webp"
        alt="Sophia at the ice rink"
        class="w-48 rotate-2 rounded-2xl border-4 border-white/90 shadow-[0_12px_30px_-10px_rgb(0_0_0/0.6)] transition-transform duration-300 hover:rotate-0 hover:scale-[1.03] sm:w-52"
    />
</div>

<h2>Solo Ice Dance</h2>
<p>SDS = Solo Dance Series, Collegiate = Solo Dance in Collegiate Competitions</p>
<p class="mt-1">P = Pattern Dance, V = Variation</p>
<p class="muted mt-1">
    Almost exclusively International Pattern Dance (except one time I tried
    Westminster Waltz.. o.o)
</p>
{@render seasons(soloDanceVids)}

<h2>Synchronized Skating</h2>
<p>SP = Short Program, FP = Free Program</p>
<p class="muted mt-1">Did someone say DC EDGE ?!</p>
{@render seasons(synchroVids)}

<style>
    @keyframes -global-wiggle {
        0%, 100% { transform: rotate(-12deg); }
        25% { transform: rotate(4deg) scale(1.15); }
        50% { transform: rotate(-20deg); }
        75% { transform: rotate(-4deg) scale(1.1); }
    }
</style>
