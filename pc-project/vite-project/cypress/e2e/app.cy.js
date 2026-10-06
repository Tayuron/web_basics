describe('Vite React application', () => {
  it('loads the main page and increments the counter', () => {
    cy.visit('/')
    cy.contains('h1', 'Get started').should('be.visible')
    cy.contains('button', 'Count is 0').click()
    cy.contains('button', 'Count is 1').should('be.visible')
  })
})
