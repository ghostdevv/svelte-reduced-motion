<script lang="ts">
	import 'ghostsui';
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	const { children }: Props = $props();
</script>

<main>
	{@render children?.()}
</main>

<style>
	main {
		padding: 12px 32px;
		max-width: 1400px;
		margin: 0 auto;
	}

	:global(.diff) {
		width: 100%;
		display: inline-block;
		padding: 2px 0px;

		background: linear-gradient(
			to right,
			transparent,
			var(--diff-colour) 0%,
			var(--diff-colour) 90%,
			transparent
		);
	}

	:global(.diff.remove) {
		--diff-colour: rgba(var(--red-rgb), 0.2);
		filter: brightness(0.75) opacity(0.9);

		&::before {
			content: '-';
			color: var(--red);
			margin-left: 16px;
		}
	}

	:global(.diff.add) {
		--diff-colour: rgba(var(--green-rgb), 0.2);

		&::before {
			content: '+';
			color: var(--green);
			margin-left: 16px;
		}
	}
</style>
