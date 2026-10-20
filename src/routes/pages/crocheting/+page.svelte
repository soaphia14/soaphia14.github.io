<script lang="ts">
    import GalleryItem from "../../components/GalleryItem.svelte";
    const ogPics = [
        {
            imgname: "duck.webp",
            title: "The Duck",
            spec: "my first amigurumi pattern + pillow",
        },
        {
            imgname: "jellyfish.webp",
            title: "The Jellyfish",
            spec: "i loved the curls",
        },
        {
            imgname: "anemo_slime.webp",
            title: "Anemo Slime",
            spec: "free handed it (somehow)",
        },
        {
            imgname: "cow.webp",
            title: "The Cow",
            spec: "the head was 51% of the weight",
        },
        {
            imgname: "dinosaur.webp",
            title: "The Dino",
            spec: "notice how the eyes are glued on (also the tooth is cute)",
        },
        {
            imgname: "kiwi.webp",
            title: "The Kiwi",
            spec: "i didn't know they named a fruit after a bird?!",
        },
        {
            imgname: "blue_cat.webp",
            title: "The Cat",
            spec: "filterfied. also the pattern required little sewing 🥰",
        },
    ];

    const newPics = [
        {
            imgname: "tiger.webp",
            title: "The 老虎",
            spec: "for my grandmother",
        },
        {
            imgname: "pigeon.webp",
            title: "The Pigeon (Bots)",
            spec: "freehanded (holy AP chem review book)",
        },
    ];
</script>

<svelte:head>
    <title>Crocheting · Sophia Liu</title>
    <meta name="description" content="Amigurumi and other crochet projects." />
</svelte:head>

{#snippet gallery(pics: typeof ogPics)}
    <section class="mt-4 grid gap-5 sm:grid-cols-2">
        {#each pics as pic, i}
            <GalleryItem src="/crochet/{pic.imgname}" alt={pic.title} square index={i}>
                <p class="font-display text-xl text-soappink">{pic.title}</p>
                <p class="mt-1 text-sm">{pic.spec}</p>
            </GalleryItem>
        {/each}
    </section>
{/snippet}

<h1>Crocheting</h1>
<p>A homage to my original website (back in 2020).</p>

<h2>The OGs</h2>
{@render gallery(ogPics)}

<h2>New Ones</h2>
{@render gallery(newPics)}
