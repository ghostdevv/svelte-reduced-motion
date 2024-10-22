# Svelte Reduced Motion

A library for working with reduced motion and Svelte transitions. Read more about [why reduced motion is important](https://ghostdev.xyz/posts/working-with-reduced-motion-in-svelte/). Please [create an issue](https://github.com/ghostdevv/svelte-reduced-motion/issues/new) if something is missing/wrong.

# Installing

```sh
npm install svelte-reduced-motion -D
```

This library works with Svelte 5 only, [checkout v1](https://www.npmjs.com/package/svelte-reduced-motion/v/1.1.1) for Svelte 3/4 support.

# Usage

Below is some use cases for the library, checkout the [full docs here](https://svelte-reduced-motion.willow.codes).

## Transitions

The easiest way to get started is with the `svelte/transition` wrapper. This wraps all official transitions with our `createTransition` api, which will automatically use fade when reduced motion is requested.

```diff
<script>
-	import { fly } from 'svelte/transition';
+	import { fly } from 'svelte-reduced-motion/transition';
</script>
```

You can provide your own fallback transition with the `createTransition` api. We'll import the regular fly and blur transitions for this. The first argument is the target transition, with the second being the fallback.

```svelte
<script>
	import { createTransition } from 'svelte-reduced-motion';
	import { fly, blur } from 'svelte/transition';

	const accessibleFly = createTransition(fly, blur);
</script>
```

If we want to specify options per transition, you can do that in the createTransition fn. Any options passed to the final transition will overwrite them, and still cause a merge.

```svelte
<script>
	import { createTransition } from 'svelte-reduced-motion';
	import { fly, blur } from 'svelte/transition';

	const accessibleFly = createTransition(
		[fly, { y: -20, duration: 200 }],
		[blur, { duration: 500 }],
	);
</script>

<div use:accessibleFly></div>
```

## Store

You can also import the `prefersReducedMotion` store to make checks for yourself.

```svelte
<script>
	import { prefersReducedMotion } from 'svelte-reduced-motion';
</script>

{#if $prefersReducedMotion}
	<p>The user prefers reduced motion!</p>
{/if}
```

# Migrating from v1 to v2

-   Requires Svelte 5
-   The `reducedMotion` store is now called `prefersReducedMotion` to match the media query
-   The types have been tweaked to be more compatible, please let me know if there any issues.

# Support

-   Create a issue on the [github](https://github.com/ghostdevv/svelte-reduced-motion/issues/new)
-   Join the [discord](https://discord.gg/2Vd4wAjJnm)<br>
