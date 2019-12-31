'use strict';

// node >= 12.3.0
// $ node --experimental-modules --experimental-wasm-modules math-module.mjs

import * as math from './math.wasm';

console.log(math._Z3powi(12345));
