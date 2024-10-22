import type { TransitionConfig } from 'svelte/transition';
import { fade, slide } from 'svelte/transition';
import { reducedMotion } from './store';
import { get } from 'svelte/store';

type AnyElement = Element | SVGElement;

export type Transition<N extends AnyElement, O> = (
	node: N,
	options?: O,
) => TransitionConfig;

export type OptionsPair<N extends AnyElement, O> = [
	transition: Transition<N, O>,
	options?: O,
];

export type AcceptedTransition<N extends AnyElement, O> =
	| Transition<N, O>
	| OptionsPair<N, O>;

export function createTransition<
	Base extends TransitionConfig,
	Fallback extends TransitionConfig,
	Node extends AnyElement,
>(
	base: AcceptedTransition<Node, Base>,
	fallback: AcceptedTransition<Node, Fallback> = fade,
) {
	return (node: Node, options: Base & Fallback): TransitionConfig => {
		function run(
			transition:
				| AcceptedTransition<Node, Base>
				| AcceptedTransition<Node, Fallback>,
		) {
			return Array.isArray(transition)
				? transition[0](node, { ...transition[1], ...options })
				: transition(node, options);
		}

		return get(reducedMotion) ? run(fallback) : run(base);
	};
}
