'use strict';

const fs = require('fs');
const bytes = fs.readFileSync('./math.wasm');

(async () => {
  // Explicitly compile and then instantiate the wasm module.
  const module = await WebAssembly.compile(bytes);
  const instance = await WebAssembly.instantiate(module);

  console.log(instance.exports._Z3addii(12345, 12345));
})();

(async () => {
  // Instantiate the Wasm module with an implicit compilation step.
  const { instance, module } = await WebAssembly.instantiate(bytes);

  console.log(instance.exports._Z3powi(12345));
})();
