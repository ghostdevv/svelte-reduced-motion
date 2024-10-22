import { transformerNotationDiff } from '@shikijs/transformers';
import { codeToHtml } from 'shiki';
import dedent from 'dedent';

async function highlight(code: string) {
	return await codeToHtml(code, {
		lang: 'svelte',
		theme: 'nord',
		transformers: [transformerNotationDiff()],
	});
}

export async function load() {
	return {
		examples: {
			gettingStarted: await highlight(dedent`
				<script>
					import { fly } from 'svelte/transition'; // [!code --]
					import { fly } from 'svelte-reduced-motion/transition'; // [!code ++]
				</script>
			`),
			customFallback: await highlight(dedent`
				<script>
					import { createTransition } from 'svelte-reduced-motion';	
					import { fly, blur } from 'svelte/transition';

					const accessibleFly = createTransition(fly, blur)
				</script>
			`),
			optionsMerge: await highlight(dedent`
				<script>
					import { fly } from 'svelte-reduced-motion/transition';
				</script>

				<div use:fly={{ y: -20, duration: 200 }}></div>
			`),
			individualOptions: await highlight(dedent`
				<script>
					import { createTransition } from 'svelte-reduced-motion';	
					import { fly, blur } from 'svelte/transition';

					const accessibleFly = createTransition(
						[fly, { y: -20, duration: 200 }],
						[blur, { duration: 500 }],
					);
				</script>

				<div use:accessibleFly></div>
			`),
			store: await highlight(dedent`
				<script>
					import { prefersReducedMotion } from 'svelte-reduced-motion';	
				</script>

				{#if $prefersReducedMotion}
					<p>The user prefers reduced motion!</p>
				{/if}
			`),
			flyExample: await highlight(dedent`
                <script>
					import { fly } from 'svelte/transition';

					let show = $state(false);
				</script>

				<button onclick={() => show = !show}>
					Toggle
				</button>

				{#if show}
					<p transition:fly={{ y: -20 }}>
						Hello World
					</p>
				{/if}
            `),
		},
	};
}
