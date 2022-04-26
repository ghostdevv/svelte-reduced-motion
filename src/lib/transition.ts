import { createTransition } from '$lib/createTransition';
import * as transitions from 'svelte/transition';

export const crossfade = createTransition(transitions.fade);

export const scale = createTransition(transitions.scale);

export const slide = createTransition(transitions.slide);

export const blur = transitions.blur;

export const draw = createTransition(transitions.draw);

export const fly = createTransition(transitions.fly);

export const fade = transitions.fade;
