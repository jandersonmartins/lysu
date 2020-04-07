describe('Header', () => {
  before(() => {
    cy.visit('/')
  })

  it('greets with logo', () => {
    cy.contains('Lysu')
      .should('have.attr', 'href', '/')
  })
})
