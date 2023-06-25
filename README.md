# Svelte Reduced Motion

Works with Svelte 3 & 4!

A collection of utilities for working with reduced motion in svelte! Please [create an issue](https://github.com/ghostdevv/svelte-reduced-motion/issues/new) if something is missing/wrong

# Resources

- [Demo](https://svelte-reduced-motion.vercel.app)
- [Blog Post](https://ghostdev.xyz/posts/working-with-reduced-motion-in-svelte) - Covers the importance of `prefers-reduced-motion` and how to use this package

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

-   ## Prebuilt Transitions

    We ship all the svelte transitions ready to go, they use the same `createTransition` function under the hood! This serves as a drop in replacement for any Svelte Transition and allows you to use accesible transitions without any effort.

    ```html
    <script>
        import { fly } from 'svelte-reduced-motion/transition';
    </script>

    <div transition:fly>
        I change to fade on devices that prefer-reduced-motion
    </div>
    ```

-   ## Custom Transitions

    If you want to use a fallback of something other than `fade` or need more control, this method is for you.

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
