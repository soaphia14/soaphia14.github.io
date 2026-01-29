<script>
    import { grayedtext } from "../../const";

    const songcember = [
        {
            imgname: "yellow.png",
            desc: "Day 1 - a song that has a color in its name",
            songname: "Yellow by Yoh Kamiyama",
            songlink: "https://youtu.be/1_lap6dzSUc"
        },
        {
            imgname: "1800.PNG",
            desc: "Day 2 - song with a number in its name - i need to watch a video on color",
            songname: "1-800 by bbno$",
            songlink: "https://youtu.be/6Ro7NubzE9A"
        },
        {
            imgname: "makima.png",
            desc: "Day 4 - song about someone you'd rather forget (makima)",
            songname: "Devil in Disguise by Marino",
            songlink: "https://youtu.be/DC-cqWO_GM0"
        },
        {
            imgname: "coloryournight.png",
            desc: "(for) Day 6 - a song you're never tired of (accidental frieren angle lol + different art app)",
            songname: "Color Your Night from Persona 3",
            songlink: "https://open.spotify.com/track/4pjFNyjGaoKgLTnndISP6V?si=e79e914016cb4463"
        },
        {
            imgname: "devilbythewindow.png",
            desc: "(for) Day 11 - a song that makes you want to dance - there's something with me and devils + frieren angles.. (done after color your night)",
            songname: "Devil by the Window by TXT",
            songlink: "https://open.spotify.com/track/53H3sGmqiXWO4MwuZAJfyn?si=731839371357459e"
        },
        {
            imgname: "yellow-songcember2.png",
            desc: "Day 16 - a song that's a classic favorite, yellow revisited",
            songname: "Yellow by Yoh Kamiyama",
            songlink: "https://youtu.be/1_lap6dzSUc"
        },
        {
            imgname: "ohmygod.png",
            desc: "Day 22 - a song by an artist whose voice you love, very regal",
            songname: "Oh My God by i-dle",
            songlink: "https://open.spotify.com/track/2DmRXiyn03tOqKgEJXlaiJ?si=6e32a007f55143fd"
        }, 
        {
            imgname: "tomboy.png",
            desc: "Day 28 - a song that moves you forward, very boppy song",
            songname: "Tomboy by i-dle",
            songlink: "https://open.spotify.com/track/5L7MoCA875qqRJoKnGCxkE?si=a66b51fbd52741d8"
        },
        {
            imgname: "bts-piedpiper-faded.jpg",
            desc: "Day 23 - a song you think everyone should listen to, absolute fav bts song <3",
            songname: "Pied Piper by BTS",
            songlink: "https://open.spotify.com/track/1ZPeaPDjQOOC8hw1mNjyjF?si=647207614fb046f3"
        }

    ];

        const songcember_wallpaper = [
            "wallpaper-devilbythewindow.png",
            "wallpaper-coloryournight.png",
            "wallpaper-yellow.png",
            "wallpaper-bts-piedpiper-BETTER.jpg"
        ]
</script>

<h1>Art</h1>
featuring: a very casual digital artist 
<!-- Image -->

<br /><br />
<h2>Songcember 2025</h2>
At least my attempt at it...
<p class = {grayedtext}>{songcember.length} is basically 31 righttt</p>

<section class="lg:flex lg:flex-wrap">
    {#each songcember as pic}
        <div
            class="flex flex-col my-5 border lg:m-3 rounded-lg lg:w-[47%] border-none max-w-sm"
        >
            <img
                src="/art/songcember/{pic.imgname}"
                alt={pic.desc}
                class="border-2 border-neutral-800 rounded-lg object-cover w-full"
            />
            <div class="p-2 lg:my-0 mt-2 mb-5">
                <a class="text-soappink" target="_blank" href={pic.songlink}>{pic.songname}</a>
                <br>
                {pic.desc}
            </div>
        </div>
    {/each}
</section>

<br>
Some wallpaper versions :)
<section class="lg:flex lg:flex-wrap">
    {#each songcember_wallpaper as wp}
        <div
            class="flex flex-col my-5 border rounded-lg lg:m-3 border-none max-w-md"
        >
            <img
                src="/art/wallpaper/{wp}"
                alt="wallpaper version"
                class="border-2 border-neutral-800 rounded-lg object-cover w-full"
            />
        </div>
    {/each}
</section>