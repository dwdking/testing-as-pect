// The entry file of your WebAssembly module.

export function add(a: i32, b: i32): i32 {
  console.log('123');
  return a + b + a;
}

export function addTwice(a: i32, b:i32): i32 {
  let avalue = a + b;
  avalue = avalue + a;

  return avalue;
}

@external('input_len')
export declare function inputLen(lenPtr: usize): u16;
