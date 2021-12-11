import { readable } from 'svelte/store';

const mediaQuery = () => window.matchMedia('(prefers-reduced-motion: reduce)');

export const reducedMotion = readable(mediaQuery().matches, (set) => {
    const query = mediaQuery();

    const update = (event: MediaQueryList | MediaQueryListEvent) =>
        set(event.matches);

    // Set initial value of query
    update(query);

    // Listener
    query.addEventListener('change', update);

    // Remove listener on destroy
    return () => query.removeEventListener('change', update);
});
