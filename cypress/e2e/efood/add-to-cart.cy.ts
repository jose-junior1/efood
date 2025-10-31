describe('Testes para fluxo de adição de um prato no carrinho', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
    
    it('Deve entrar na página de um restaurante', () => {
        cy.get('.about-restaurant', {timeout: 3000}).first().click()
        cy.url().should('include', '/restaurant/1')
    })

    it('Deve abrir o modal com os detalhes do prato', () => {
        cy.get('.about-restaurant').first().click()
        cy.get('.more-details').first().click()
    })

    it('Deve adicionar o prato ao carrinho e abrir o carrinho mostrando os itens adicionados', () => {
        cy.get('.about-restaurant').first().click()
        cy.get('.more-details').first().click()
        cy.get('.add-to-cart').click()
        cy.get('.added').click()

        cy.get('.is-open').should('be.visible')
    })
})