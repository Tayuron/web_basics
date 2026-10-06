import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { CatalogPage } from '../../src/pages/CatalogPage'
import { ProductPage } from '../../src/pages/ProductPage'

describe('PC configurator components', () => {
  it('filters products by maximum price', () => {
    cy.mount(
      <MemoryRouter initialEntries={['/catalog']}>
        <CatalogPage />
      </MemoryRouter>,
    )
    cy.get('#max-price').type('40000')
    cy.contains('TERMINATOR-lite').should('be.visible')
    cy.contains('JAG-PANZER').should('not.exist')
  })

  it('recalculates the product price after changing options', () => {
    cy.mount(
      <MemoryRouter initialEntries={['/products/jag-panzer']}>
        <Routes>
          <Route path="/products/:productId" element={<ProductPage />} />
        </Routes>
      </MemoryRouter>,
    )
    cy.get('#ram-select').select('1')
    cy.get('#storage-select').select('2')
    cy.get('[data-testid="product-price"]')
      .invoke('text')
      .should('match', /50.?799 грн/)
  })
})
