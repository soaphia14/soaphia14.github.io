<script>
    import { onMount } from 'svelte';

    let { children } = $props();

</script>
<a id = "top" href="/#"><u>Back to Home</u></a>

<br>
<br>
{@render children()}