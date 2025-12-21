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
            desc: "(for) Day 11 - a song you're never tired of (accidental frieren angle lol + different art app)",
            songname: "Color Your Night from Persona 3",
            songlink: "https://open.spotify.com/track/4pjFNyjGaoKgLTnndISP6V?si=e79e914016cb4463"
        }
    ];

</script>

<h1>Art</h1>
featuring: a very casual digital artist 
<!-- Image -->

<br /><br />
<h2>Songcember 2025</h2>
At least my attempt at it...
<p class = {grayedtext}>4 is basically 31 righttt</p>

<section class="lg:flex lg:flex-wrap">
    {#each songcember as pic}
        <div
            class="flex flex-col my-5 border rounded-lg m-3 lg:w-[47%] border-none max-w-sm"
        >
            <img
                src="/art/{pic.imgname}"
                alt={pic.desc}
                class="border-2 border-neutral-800 rounded-lg object-cover aspect-square w-full"
            />
            <div class="p-2 lg:my-0 mt-2 mb-5">
                <a class="text-soappink" target="_blank" href={pic.songlink}>{pic.songname}</a>
                <br>
                {pic.desc}
            </div>
        </div>
    {/each}
</section>