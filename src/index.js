// we cannot import the wasm code directly
// because it requires a separate resource load
// import { sum } from '../internal/wasm_pack_ts_cypress'
// you will get webpack error like this one:
/*
  ERROR in ./internal/wasm_pack_ts_cypress_bg.wasm
  WebAssembly module is included in initial chunk.
  This is not allowed, because WebAssembly download and compilation must happen asynchronous.
  Add an async splitpoint (i. e. import()) somewhere between your entrypoint and the WebAssembly module
*/

// thus we need to use dynamic import and then use the imported module
import('../internal/wasm_pack_ts_cypress').then(({ sum }) => {
  // expose the "sum" import on the window object
  // to be able to access it from the Cypress tests
  window.sum = sum
})
