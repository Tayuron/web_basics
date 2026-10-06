describe('PC Configurator user flow', () => {
  it('opens the catalog and configures a computer', () => {
    cy.visit('/')
    cy.contains('Переглянути каталог').click()
    cy.url().should('include', '/catalog')
    cy.contains('JAG-PANZER').click()
    cy.url().should('include', '/products/jag-panzer')
    cy.get('#ram-select').select('1')
    cy.get('#storage-select').select('2')
    cy.get('[data-testid="product-price"]')
      .invoke('text')
      .should('match', /50.?799 грн/)
  })
})
