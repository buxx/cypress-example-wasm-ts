// does not work since automatic Webpack bundling in Cypress
// forces the spec into a single JS spec
// and WASM needs its own resource load

// describe("sum test", function () {
//   it("should be able to run a sum test", async () => {
//     const { sum } = await import("../internal/wasm_pack_ts_cypress")
//     expect(sum(1, 2)).to.equal(3);
//   });
// });
