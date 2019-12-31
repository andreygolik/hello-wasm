#include <emscripten.h>

EMSCRIPTEN_KEEPALIVE
int add(int num1, int num2) {
    return num1 + num2;
}

EMSCRIPTEN_KEEPALIVE
int pow(int num) {
    return num * num;
}
