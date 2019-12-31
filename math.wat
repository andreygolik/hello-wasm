(module
  (type (;0;) (func))
  (type (;1;) (func (param i32) (result i32)))
  (type (;2;) (func (param i32 i32) (result i32)))
  (func (;0;) (type 0)
    nop)
  (func (;1;) (type 1) (param i32) (result i32)
    local.get 0
    local.get 0
    i32.mul)
  (func (;2;) (type 2) (param i32 i32) (result i32)
    local.get 0
    local.get 1
    i32.add)
  (memory (;0;) 256 256)
  (export "memory" (memory 0))
  (export "_Z3addii" (func 2))
  (export "_Z3powi" (func 1))
  (export "_start" (func 0))
  (data (;0;) (i32.const 1536) "\a0\06P"))
