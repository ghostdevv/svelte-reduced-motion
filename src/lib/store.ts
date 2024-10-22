import { readable } from 'svelte/store';

function match() {
	return window.matchMedia('(prefers-reduced-motion: reduce)');
}

export const prefersReducedMotion = readable(
	typeof window === 'undefined' ? false : match().matches,
	(set) => {
		if (typeof window === 'undefined') return;

		const query = match();

		function update(event: MediaQueryList | MediaQueryListEvent) {
			set(event.matches);
		}

		// Set initial value of query
		update(query);

		// Listener
		query.addEventListener('change', update);

		// Remove listener on destroy
		return () => {
			query.removeEventListener('change', update);
		};
	},
);
