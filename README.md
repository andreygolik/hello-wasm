To compile WASM you need to install **Emscripten Compiler Frontend** (emcc).

```
emcc -s WASM=1 -O3 math.cpp -o math.wasm
```
