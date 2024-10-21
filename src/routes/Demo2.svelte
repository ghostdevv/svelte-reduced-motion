<script>
	import { fly } from '$lib/transition';

	let showing;
</script>

<button on:click={() => (showing = !showing)}> Toggle Animation </button>

{#if showing}
	<div transition:fly={{ y: -20 }} style="padding: 16px 0px;">
		Hello World
	</div>
{/if}
