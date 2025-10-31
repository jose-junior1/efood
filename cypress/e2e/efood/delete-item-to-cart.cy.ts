describe('Testes para fluxo de remoção de um prato do carrinho', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')

        cy.get('.about-restaurant').first().click()
        cy.get('.more-details').first().click()
        cy.get('.add-to-cart').click()
        cy.get('.added').click()
    })

    it('Deve remover o item adicionado do carrinho', () => {
        cy.get('.is-open li').should('have.length', 1)
        cy.get('.remove-item').click()
        cy.get('.is-open li').should('not.exist')
        cy.get('button[title= "Adicione itens no carrinho para continuar"]')
            .contains('Adicione itens no carrinho para continuar')
    })
})