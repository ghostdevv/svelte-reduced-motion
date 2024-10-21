import type { FadeParams, TransitionConfig } from 'svelte/transition';
import { fade } from 'svelte/transition';
import { reducedMotion } from './store.js';
import { get } from 'svelte/store';

export type Transition<T> = (node: Element, options?: T) => TransitionConfig;
export type OptionsPair<T> = [transition: Transition<T>, options?: T];

export type AcceptedTransition<T> = Transition<T> | OptionsPair<T>;

export const createTransition =
	<Base, Fallback = FadeParams>(
		base: AcceptedTransition<Base>,
		fallback: AcceptedTransition<Fallback> = fade,
	) =>
	(node: Element, options: Base & Fallback): TransitionConfig => {
		const run = (transition: AcceptedTransition<Base | Fallback>) =>
			Array.isArray(transition)
				? transition[0](node, { ...transition[1], options })
				: transition(node, options);

		return get(reducedMotion) ? run(fallback) : run(base);
	};
