# @vpukhanov/react-character-map

`@vpukhanov/react-character-map` is an easy to include character map selector component built with React. It provides a simple user interface to select a character from a categorised list. It is based on the original `react-character-map` by Joel Day, but rebuilt from the ground up using TypeScript
and functional components.

<p align="center">
  <a href="https://i.imgur.com/nmtkZ73.png">
    <img src="https://i.imgur.com/nmtkZ73.png" width="386" alt="react-character-map preview image" />
  </a>
</p>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Basic Usage](#basic-usage)
  - [Advanced Usage](#advanced-usage)
- [Contributions](#contributions)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

```
npm install @vpukhanov/react-character-map
```

## Usage

### Basic Usage

You can use the pre-configured `CharMap` component that includes the category menu and the character selector itself. Provide
`onSelect` callback to receive character data of the user's selection. Optionally provide the `characterData` prop to replace
the built-in symbols with your own. You can also change the category that is selected by default by passing in a
`defaultSelectedCategory` prop and define how the category names are displayed using the `categoryNames` prop.

```tsx
import { CharMap } from "@vpukhanov/react-character-map";
// ...
<CharMap onSelect={(char) => alert(`You selected ${char.char}!`)} />;
```

### Advanced Usage

You can also use separate `CharMapCategoriesList` and `CharMapSelector` components if you want to build a custom layout.
They have to be wrapped in a `CharMapContextProvider` in order to function correctly.

```tsx
import {
  CharMapCategoriesList,
  CharMapSelector,
  CharMapContextProvider,
} from "@vpukhanov/react-character-map";
// ...
<CharMapContextProvider>
  <CharMapCategoriesList />
  <div>Some text between categories and selector</div>
  <CharMapSelector onSelect={(char) => alert(`You selected ${char.char}!`)} />
</CharMapContextProvider>;
```

`CharMapContextProvider` accepts the `characterData`, `defaultSelectedCategory` and `categoryNames` props described earlier.
`CharMapCategoriesList` allows for additional customisations by setting the optional `buttonClassName` and
`activeButtonClassName` props.

## Contributions

All contributions are welcomed, feel free to send a pull request straight away, unless it's a major change. In that case
please create an issue for prior discussion.
