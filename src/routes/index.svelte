<script>
    import { reducedMotion, createTransition } from '$lib';
    import { fade, fly, draw } from 'svelte/transition';

    let showing;

    const accessibleTransition = createTransition(fly);
</script>

<p>
    Reduced Motion: {$reducedMotion}
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
