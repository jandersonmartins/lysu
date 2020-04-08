describe('Shopping flow', () => {
  before(() => {
    cy.visit('/')
  })

  it('add items flow', () => {
    // Add items
    cy.get('[name="new_item"]').type('Rice')
    cy.contains('Adicionar').click()

    cy.get('[name="new_item"]').type('Beans')
    cy.contains('Adicionar').click()

    // increment quantity
    cy.get('[data-test="quantity-increment"]')
      .first()
      .click()

    cy.get('[data-test="quantity-increment"]')
      .first()
      .click()

    cy.get('[data-test="quantity-increment"]')
      .last()
      .click()

    // decrement quantity
    cy.get('[data-test="quantity-decrement"]')
      .first()
      .click()

    // change input value
    cy.get('[name="value"]')
      .first()
      .type('05.11')

    cy.get('[name="value"]')
      .last()
      .type('10.00')

    // assert total item
    cy.get('[data-test="total-item"]')
      .contains('$ 5,11')

    cy.get('[data-test="total-item"]')
      .contains('$ 10')

    // assert all items total
    cy.get('[data-test="total-all-items"]')
      .contains('Valor Total $ 15,11')

    // remove items
    cy.get('[data-test="remove-item"]').click({ multiple: true })

    // assert quantity items
    cy.get('[data-test="items-added"]')
      .contains('Items 0')
  })
})
