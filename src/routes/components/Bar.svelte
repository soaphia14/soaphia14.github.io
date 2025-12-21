<!--
CS2112 is infecting my brain.
Sidebar (when screensize large enough) or fullscreen bar (when screensize small enough).
Displays name, email, picture, and other links.
-->
<script>
    let isOpen = true;
    const toggleSidebar = () => (isOpen = !isOpen);
</script>

<div
    class="h-screen border-5 py-10 md:w-96 flex flex-col justify-center items-center bg-[url(/flowers-gif.gif)] bg-cover relative bg-black"
>
    <div class="absolute inset-0 bg-black/70"></div>
    <div class="z-10 justify-center items-center flex flex-col">
        <h1>Sophia Liu</h1>
        <p class="text-white">Cornell CS Undergrad</p>

        <img
            src="/pfp.gif"
            alt="Profile"
            class="w-32 h-32 rounded-full my-4 border-2 border-white bg-white"
        />

        <div
            class="bg-divfill/50 border-divborder/20 border-2 rounded-lg p-4 m-4 flex flex-col text-notwhite justify-center items-center"
        >
            <p class="text-soappink">Contact Me!</p>
            <p>sl3632 (at) cornell.edu</p>
            <a
                href="https://www.linkedin.com/in/sophia-liu-cs/"
                target="_blank"
                class="text-sky-300 hover:text-soappink transition-all"
                >Linkedin</a
            >
            <a
                href="https://github.com/soaphia14"
                target="_blank"
                class="text-gray-400 hover:text-soappink transition-all"
                >Github</a
            >
        </div>
    </div>
</div>
