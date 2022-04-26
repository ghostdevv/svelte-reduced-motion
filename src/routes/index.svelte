<script>
    import { reducedMotion, createTransition } from '$lib';
    import { fade, fly, draw } from 'svelte/transition';

    let showing;

    const accessibleTransition = createTransition(fly);
</script>

<p>
    Reduced Motion: {$reducedMotion}
</p>

<p>
    You can test this in Chrome easily by opening dev tools, pressing the three
    dots in the top right, then going on more tools > rendering and finding the
    "Emulate css media feature prefers reduced motion"
</p>

<hr />

<button on:click={() => (showing = !showing)}> Toggle Animation </button>

{#if showing}
    <div
        transition:accessibleTransition={{ y: -20 }}
        style="padding: 16px 0px;">
        Hello World
    </div>
{/if}
