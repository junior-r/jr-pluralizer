# jr-pluralizer

A small TypeScript utility to pluralize words based on counts. Works in **Node.js**, **React**, **Next.js**, and any environment supporting ESM or CommonJS.

---

## Installation

```bash
npm install jr-pluralizer
# or
yarn add jr-pluralizer
```

## Usage

### ESM (React, Next.js, Vite, etc.)

```javascript
import { pluralize } from "jr-pluralizer";

console.log(pluralize("cat", 1)); // "cat"
console.log(pluralize("cat", 2)); // "cats"
console.log(pluralize("child", 2, "ren", "child")); // "children"
```

### CommonJS (Node.js)

```javascript
const { pluralize } = require("jr-pluralizer");

console.log(pluralize("dog", 1)); // "dog"
console.log(pluralize("dog", 3)); // "dogs"
```

## API

`pluralize(text, value, pluralSuffix = "s", singularSuffix = "")`

- **text**: string — Base word to pluralize.
- **value**: `number | string | object | null | undefined` — Determines the count:

  - `number` → the number itself.
  - `string` → if numeric, converted to number.
  - `array` → length of the array.
  - `object` → number of keys.
  - `null` or `undefined` → treated as `0`.

**pluralSuffix**: `string` (default: `"s"`) — Suffix to add when count ≠ 1.
**singularSuffix**: `string` (default: `""`) — Optional replacement for singular (full word if needed).

Returns: `string` — The word with the correct pluralization applied.

## Example

```ts
pluralize("cat", 1); // "cat"
pluralize("cat", 2); // "cats"
pluralize("child", 1, "ren", "child"); // "child"
pluralize("child", 2, "ren", "child"); // "children"
pluralize("item", [1, 2, 3]); // "items"
pluralize("key", { a: 1, b: 2 }); // "keys"
pluralize("thing", null); // "things"
```

## Development

```bash
# Install dev dependencies
npm install

# Run tests
npm run test

# Build the package
npm run build
```

---

<div align="center"> 
  <a href="https://github.com/junior-r"> 
    <img src="https://avatars.githubusercontent.com/junior-r" loading="lazy" width="100" style="border-radius: 50%;" alt="Junior R's GitHub Profile"> 
  </a> <br /> <strong>👨‍💻 Junior Ruiz</strong> 
  <br /> 
  <a href="https://github.com/junior-r" target="_blank">GitHub</a> • 
  <a href="https://junior-dev.vercel.app/" target="_blank">Website</a> • 
  <a href="mailto:juniorruiz331@gmail.com">Contact</a> 
</div>
