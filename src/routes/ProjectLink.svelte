<script>
    import { onMount } from "svelte";
    import { divclass } from "./const";

    let { color, hover, link, target, children } = $props();
    

</script>

<a href={link} target = {target ? target : "_blank"} class = "mt-2">
    <div class = "w-36 h-13 {divclass} {color} mx-2 {hover} hover:cursor-pointer transition-colors duration-300 justify-center items-center flex flex-row">
        {@render children()}
    </div>
</a>