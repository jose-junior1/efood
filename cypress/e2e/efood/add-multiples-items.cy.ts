describe('Testes para fluxo de adição de vários itens e verificação de valor total', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')

        cy.get('.about-restaurant').first().click()
        cy.get('.more-details').first().click()
        cy.get('.add-to-cart').click()
    })

    it('Adiciona mais 3 itens ao carrinho e verifica se a quantidade de itens adicionada é 4 e o total R$', () => {
        // Fecha o modal no X e volta para a home
        cy.get('.close-modal').click()
        cy.get('.back-to-home').click()

        // Seleciona o segundo restaurante
        cy.get('.about-restaurant').eq(1).click()

        // Seleciona o terceiro item do cardápio e o adiciona no carrinho
        cy.get('.more-details').eq(2).click()
        cy.get('.add-to-cart').click()

        // Fecha o modal clicando no overlay (fora do modal) e volta para a home
        cy.get('div[title = "Clique aqui para fechar"]').click({force: true})
        cy.get('.back-to-home').click()

        // Seleciona o quarto restaurante
        cy.get('.about-restaurant').eq(4).click()

        // Seleciona o segundo item e o adiciona no carrinho
        cy.get('.more-details').eq(1).click()
        cy.get('.add-to-cart').click()

        // Fecha o modal e volta para a home
        cy.get('.close-modal').click()
        cy.get('.back-to-home').click()

        // Seleciona o terceiro restaurante
        cy.get('.about-restaurant').eq(2).click()

        // Seleciona o último item do cardápio e o adiciona no carrinho
        cy.get('.more-details').last().click()
        cy.get('.add-to-cart').click()

        // Abre o carrinho e compara se a quantidade de itens adicionado é 4 e o valor total é R$ 245,60
        cy.get('.added').click()
        cy.get('.is-open li').should('have.length', 4)
        cy.get('.total-value').contains('Valor total: R$ 245,60')
    })
})

//.overlay
//.close-modal
// cy.get('.').click()