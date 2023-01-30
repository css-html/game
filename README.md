### bits → bytes → kilos → megas

- ui
    - index.ts
    - src
        - components
            - bits
                - SomeComponentFolder
                    - index.tsx
                    - story.tsx
                    - style.scss
            - index.ts


**General Guideline:**

- Bits
    - Abstraction of a singular primitive HTML Element
        - ie: h1, p, input, ul, li, etc
- Bytes
    - A composite component of bits and rudimentary layout/styles
- Kilos
    - Generally a full-featured module of a page but simple in complexity
        - ie The Homepage sidebar components - Featured Games, Featured Creators
- Megas
    - Complex components that have multiple responsibilities
        - ie The Homepage Video feature
            - Video/VideoInfo/Fullscreen + Playlist carousel
- Layouts
    - This would include components that are utility to composing components
        - ie Row, Col, Modal

> Each component is then exported in its respective component library `index` file and storybook `index` file to be consumed by the client.
