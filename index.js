'use strict';

const loadWasm = async (filename) => {
  const response = await fetch(filename);
  const bytes = await response.arrayBuffer();
  const module = await WebAssembly.compile(bytes);
  return await WebAssembly.instantiate(module);
};

(async () => {
  const instance = await loadWasm('math.wasm');

  const add = instance.exports._Z3addii;
  document.getElementById('p1').innerHTML = add(12345, 23456);

  const pow = instance.exports._Z3powi;
  document.getElementById('p2').innerHTML = pow(34567);
})();
