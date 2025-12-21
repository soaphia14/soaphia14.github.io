<script>
    const ogPics = [
        {
            imgname: "duck.JPG",
            title: "The Duck",
            spec: "my first amigurumi pattern + pillow",
        },
        {
            imgname: "jellyfish.JPG",
            title: "The Jellyfish",
            spec: "i loved the curls",
        },
        {
            imgname: "anemo_slime.JPG",
            title: "Anemo Slime",
            spec: "free handed it (somehow)",
        },
        {
            imgname: "cow.JPG",
            title: "The Cow",
            spec: "the head was 51% of the weight",
        },
        {
            imgname: "dinosaur.JPG",
            title: "The Dino",
            spec: "notice how the eyes are glued on (also the tooth is cute)",
        },
        {
            imgname: "kiwi.JPG",
            title: "The Kiwi",
            spec: "i didn't know they named a fruit after a bird?!",
        },
        {
            imgname: "blue_cat.JPG",
            title: "The Cat",
            spec: "filterfied. also the pattern required little sewing 🥰",
        },
    ];

    const newPics = [
        {
            imgname: "tiger.jpg",
            title: "The 老虎",
            spec: "for my grandmother",
        },
        {
            imgname: "pigeon.jpg",
            title: "The Pigeon (Bots)",
            spec: "freehanded (holy AP chem review book)",
        },
    ];
</script>

<h1>Crocheting</h1>
A homage to my original website (back in 2020).
<!-- Image -->

<br /><br />
<h2>The OGs</h2>
<section class="lg:flex lg:justify-between lg:flex-wrap">
    {#each ogPics as pic}
        <div
            class="columns-2 my-5 border rounded-lg m-3 lg:w-[47%] border-none"
        >
            <img
                src="/crochet/{pic.imgname}"
                alt={pic.title}
                class="border-2 border-neutral-800 rounded-lg object-cover aspect-square w-full"
            />
            <div class="p-5 rounded-lg bg-neutral-800 lg:my-0 mt-2 mb-5">
                <h2>{pic.title}</h2>
                {pic.spec}
            </div>
        </div>
    {/each}
</section>

<br /><br />
<h2>New Ones</h2>
<section class="lg:flex lg:justify-between lg:flex-wrap">
    {#each newPics as pic}
        <div
            class="columns-2 my-5 border rounded-lg m-3 lg:w-[47%] border-none"
        >
            <img
                src="/crochet/{pic.imgname}"
                alt={pic.title}
                class="border-2 border-neutral-800 rounded-lg object-cover aspect-square w-full"
            />
            <div class="p-5 rounded-lg bg-neutral-800 h-full lg:my-0 mt-2 mb-5">
                <h2>{pic.title}</h2>
                {pic.spec}
            </div>
        </div>
    {/each}
</section>
