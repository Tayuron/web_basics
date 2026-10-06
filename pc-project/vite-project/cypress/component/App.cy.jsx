import App from '../../src/App'

describe('App component', () => {
  it('increments the counter', () => {
    cy.mount(<App />)
    cy.contains('button', 'Count is 0').click()
    cy.contains('button', 'Count is 1').should('be.visible')
  })
})
