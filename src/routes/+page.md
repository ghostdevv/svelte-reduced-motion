<script>
    import DemoCode from './Demo.svelte?raw';
    import Demo2 from './Demo2.svelte';    
    import Demo from './Demo.svelte';
</script>

You can set if it's reduced motion in Chrome easily by opening dev
tools, pressing the three dots in the top right, then going on more
tools > rendering and finding the "Emulate css media feature prefers
reduced motion"

---

<Demo />

---

Code for demo above:

```svelte
<script>
	import { reducedMotion, createTransition } from 'svelte-reduced-motion';
	import { fly } from 'svelte/transition';

	let showing;

	const accessibleTransition = createTransition(fly);
</script>

<p>
	Reduced Motion: {$reducedMotion}
</p>

<button on:click={() => (showing = !showing)}> Toggle Animation </button>

{#if showing}
	<div
		transition:accessibleTransition={{ y: -20 }}
		style="padding: 16px 0px;"
	>
		Hello World
	</div>
{/if}
```

You can also simplify this by using the prebuilt transitions:

<Demo2 />

```svelte
<script>
	import { fly } from 'svelte-reduced-motion/transition';

	let showing;
</script>

<button on:click={() => (showing = !showing)}> Toggle Animation </button>

{#if showing}
	<div transition:fly={{ y: -20 }} style="padding: 16px 0px;">
		Hello World
	</div>
{/if}
```
