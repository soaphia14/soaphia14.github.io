<script lang="ts">
    import GalleryItem from "../../components/GalleryItem.svelte";

    const songcember = [
        {
            imgname: "yellow.webp",
            desc: "Day 1 - a song that has a color in its name",
            songname: "Yellow by Yoh Kamiyama",
            songlink: "https://youtu.be/1_lap6dzSUc"
        },
        {
            imgname: "1800.webp",
            desc: "Day 2 - song with a number in its name - i need to watch a video on color",
            songname: "1-800 by bbno$",
            songlink: "https://youtu.be/6Ro7NubzE9A"
        },
        {
            imgname: "makima.webp",
            desc: "Day 4 - song about someone you'd rather forget (makima)",
            songname: "Devil in Disguise by Marino",
            songlink: "https://youtu.be/DC-cqWO_GM0"
        },
        {
            imgname: "coloryournight.webp",
            desc: "(for) Day 6 - a song you're never tired of (accidental frieren angle lol + different art app)",
            songname: "Color Your Night from Persona 3",
            songlink: "https://open.spotify.com/track/4pjFNyjGaoKgLTnndISP6V?si=e79e914016cb4463"
        },
        {
            imgname: "devilbythewindow.webp",
            desc: "(for) Day 11 - a song that makes you want to dance - there's something with me and devils + frieren angles.. (done after color your night)",
            songname: "Devil by the Window by TXT",
            songlink: "https://open.spotify.com/track/53H3sGmqiXWO4MwuZAJfyn?si=731839371357459e"
        },
        {
            imgname: "yellow-songcember2.webp",
            desc: "Day 16 - a song that's a classic favorite, yellow revisited",
            songname: "Yellow by Yoh Kamiyama",
            songlink: "https://youtu.be/1_lap6dzSUc"
        },
        {
            imgname: "ohmygod.webp",
            desc: "Day 22 - a song by an artist whose voice you love, very regal",
            songname: "Oh My God by i-dle",
            songlink: "https://open.spotify.com/track/2DmRXiyn03tOqKgEJXlaiJ?si=6e32a007f55143fd"
        }, 
        {
            imgname: "tomboy.webp",
            desc: "Day 28 - a song that moves you forward, very boppy song",
            songname: "Tomboy by i-dle",
            songlink: "https://open.spotify.com/track/5L7MoCA875qqRJoKnGCxkE?si=a66b51fbd52741d8"
        },
        {
            imgname: "bts-piedpiper-faded.webp",
            desc: "Day 23 - a song you think everyone should listen to, absolute fav bts song <3",
            songname: "Pied Piper by BTS",
            songlink: "https://open.spotify.com/track/1ZPeaPDjQOOC8hw1mNjyjF?si=647207614fb046f3"
        }

    ];

        const songcember_wallpaper = [
            "wallpaper-devilbythewindow.webp",
            "wallpaper-coloryournight.webp",
            "wallpaper-yellow.webp",
            "wallpaper-bts-piedpiper-BETTER.webp"
        ]
</script>

<svelte:head>
    <title>Art · Sophia Liu</title>
    <meta name="description" content="Casual digital art, including my Songcember 2025 drawings." />
</svelte:head>

<h1>Art</h1>
<p>featuring: a very casual digital artist</p>

<h2>Songcember 2025</h2>
<p>At least my attempt at it...</p>
<p class="muted mt-1">{songcember.length} is basically 31 righttt</p>

<section class="mt-6 grid gap-5 sm:grid-cols-2">
    {#each songcember as pic, i}
        <GalleryItem src="/art/songcember/{pic.imgname}" alt={pic.desc} index={i}>
            <a class="link" target="_blank" href={pic.songlink}>{pic.songname}</a>
            <p class="mt-1 text-sm">{pic.desc}</p>
        </GalleryItem>
    {/each}
</section>

<h3>Some wallpaper versions :)</h3>
<section class="mt-4 grid gap-5 sm:grid-cols-2">
    {#each songcember_wallpaper as wp, i}
        <GalleryItem src="/art/wallpaper/{wp}" alt="Wallpaper version of {wp}" index={i} />
    {/each}
</section>
