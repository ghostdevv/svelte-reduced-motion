<script lang="ts">
	import { blur, fly } from 'svelte/transition';
	import { createTransition } from '$lib';
	import Example from './Example.svelte';
	import GitHub from './GitHub.svelte';

	const { data } = $props();
</script>

<section class="title">
	<h1>Svelte Reduced Motion</h1>

	<a href="https://github.com/ghostdevv/svelte-reduced-motion">
		<GitHub />
	</a>
</section>

<section class="col">
	<h2 id="usage">Usage</h2>

	<p>
		The easiest way to get started is with the
		<code>svelte/transition</code> wrapper. This wraps all official
		transitions with our <code>createTransition</code> api, which will automatically
		use fade when reduced motion is requested.
	</p>

	<Example code={data.examples.gettingStarted}></Example>

	<p>
		You can provide your own fallback transition with the
		<code>createTransition</code> api. We'll import the regular fly and blur
		transitions for this. The first argument is the target transition, with the
		second being the fallback.
	</p>

	<Example code={data.examples.customFallback}></Example>

	<p>
		We can still specify options as usual, but they will be applied to both
		the target and fallback transition.
	</p>

	<Example code={data.examples.optionsMerge}></Example>

	<p>
		If we want to specify options per transition, you can do that in the
		<code>createTransition</code> fn. Any options passed to the final transition
		will overwrite them, and still cause a merge.
	</p>

	<Example code={data.examples.individualOptions}></Example>

	<p>
		You can also import the <code>prefersReducedMotion</code> store to make checks
		for yourself.
	</p>

	<Example code={data.examples.store}></Example>
</section>

<style lang="scss">
	.title {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	// p {
	// 	max-width: 65%;
	// }
</style>
