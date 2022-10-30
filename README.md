<p>
  <img width="100%" src="https://assets.solidjs.com/banner?type=solid-gridstack&background=tiles&project=%20" alt="solid-gridstack">
</p>

# solid-gridstack

[![pnpm](https://img.shields.io/badge/maintained%20with-pnpm-cc00ff.svg?style=for-the-badge&logo=pnpm)](https://pnpm.io/)

A simple wrapper around [gridstack.js](https://github.com/gridstack/gridstack.js) for the use in solid-js.

## Quick start

Install it:

```bash
npm i solid-gridstack
# or
yarn add solid-gridstack
# or
pnpm add solid-gridstack
```

Use it:

```tsx
import { GridStack } from 'solid-gridstack'

const App: Component = () => {
  return (
    <GridStack
      div={{ style: { 'margin': '2.5px' }}}
      items={[...new Array(5)].map((_, i) => (
        <div gs-x={0} gs-y={i * 2} gs-w={12} gs-h={2} gs-auto-position="true">
          <div style={{
            'margin': '2.5px',
            'background-color': 'rgb(68 107 158)',
            'height': 'calc(100% - 5px)',
            'width': 'calc(100% - 5px)',
            'border-radius': '7.5px'
          }}></div>
        </div>
      ))}
    />
  );
};
```
