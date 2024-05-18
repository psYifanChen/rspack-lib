# rspack-output-lib

This repo is to reproduce the issue when outputting lib using rspack.

## Step

- `pnpm run build`
- `node index.js`

When running with rspack@0.5.9, we can get `[Function: t]` on the console.
But when running with rspack >= 0.6.0, we will get `undefined` on the console.
