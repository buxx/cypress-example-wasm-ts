describe('Wasm', () => {
  it('sums', () => {
    cy.visit('/')
    // automatically retry checking "window.sum" until
    // it is set and is a function
    cy.window()
      .its('sum')
      .should('be.a', 'function')
      .then((sum) => {
        // now let's test the sum
        expect(sum(2, 3)).to.equal(5)
      })
  })
})
