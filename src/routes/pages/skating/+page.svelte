<script lang="ts">
    import { reveal } from "$lib/reveal";
    import Icon from "$lib/Icon.svelte";
    import { grayedtext } from "../../const";

    interface SkatingYear {
        title: string;
        date: string;
        links?: { event: string; url: string }[];
    }

    const soloDanceVids: SkatingYear[] = [
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
                { event: "Cape Code", url: "https://youtu.be/sCXsSRZR5Bo" },
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
            title: "Juv (Adam's Family)",
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
    ].reverse(); // so it's from earlieest to latest
</script>

<svelte:head>
    <title>Figure Skating · Sophia Liu</title>
    <meta name="description" content="My figure skating videos over the years: synchronized skating and solo ice dance." />
</svelte:head>

{#snippet seasons(vids: SkatingYear[])}
    <ol class="relative mt-6 space-y-4 border-l border-white/10 pl-6">
        {#each vids as vid, i}
            <li class="relative" use:reveal={i % 3}>
                <span class="absolute top-5 -left-[1.95rem] size-3 rounded-full border-2 border-darkfill bg-soappink"></span>
                <div class="card p-4">
                    <p class="text-sm text-muted">{vid.date}</p>
                    <p class="font-display text-lg text-soappink">{vid.title}</p>
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

<h1>Figure Skating</h1>
<p>A place to store all my skating videos throughout the years.</p>
<p>
    For my brief skating history: Freestyle (once upon a time) → Synchro → Solo Dance
    → Collegiate Solo Dance
</p>

<h2>Solo Ice Dance</h2>
<p>SDS = Solo Dance Series, Collegiate = Solo Dance in Collegiate Competitions</p>
<p class="mt-1">P = Pattern Dance, V = Variation</p>
<p class="{grayedtext} mt-1">
    Almost exclusively International Pattern Dance (except one time I tried
    Westminster Waltz.. o.o)
</p>
{@render seasons(soloDanceVids)}

<h2>Synchronized Skating</h2>
<p>SP = Short Program, FP = Free Program</p>
<p class="{grayedtext} mt-1">Did someone say DC EDGE ?!</p>
{@render seasons(synchroVids)}
