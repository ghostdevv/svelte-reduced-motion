# Svelte Reduced Motion

A collection of utilities for working with reduced motion in svelte! Please [create an issue](https://github.com/ghostdevv/svelte-reduced-motion/issues/new) if something is missing/wrong

# Demo

https://svelte-reduced-motion.vercel.app

# Installing

```sh
npm install svelte-reduced-motion -D
```

# Usage

Below you can find all of the different exports you can use!

-   ## Store

    If you want to detect & react to reduced motion in Svelte you can use the store `reducedMotion`, for example:

    ```html
    <script>
        import { reducedMotion } from 'svelte-reduced-motion';
    </script>

    <p>
        Reduced Motion: {$reducedMotion ? 'enabled' : 'disabled'}
    </p>
    ```

-   ## Transitions

    You might want to use a motion-ful transition such as fly, and fallback to fade if the users perfers reduced motion. With createTransition we can do that (fade is the default fallback but any svelte transition can be used in it's place!)

    `createTransition(base, fallback)`

    ```html
    <script>
        import { createTransition } from 'svelte-reduced-motion';
        import { fly } from 'svelte/transition';

        const accessibleTransition = createTransition(fly);
    </script>

    <!-- You can even specify the options as usual-->
    <div transition:accessibleTransition={{ y: -20 }}>
        Hello world
    </div>
    ```

    ### But what if both my transitions need different options?

    No problem, here are a few examples

    ```js
    const accessibleTransition = createTransition(
        [fly, { duration: 1000 }],
        [fade, { duration: 200 }]
    );

    const accessibleTransition = createTransition(
        [fly, { duration: 750, y: -20 }],
        fade
    );
    ```