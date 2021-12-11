<script>
    import { reducedMotion, createTransition } from '$lib';
    import { fade, fly, draw } from 'svelte/transition';

    let showing;

    const accessibleTransition = createTransition([fly, { y: -20 }], draw);
</script>

<p>
    Reduced Motion: {$reducedMotion}
</p>

<hr />

<button on:click={() => (showing = !showing)}> Toggle </button>

{#if showing}
    <div transition:accessibleTransition style="padding: 16px 0px;">
        Hello World
    </div>
{/if}
