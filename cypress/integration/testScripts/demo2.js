describe('My Second Test', () =>{
    it('Gets, types and assers', () => {
        cy.visit('https://example.cypress.io')
        cy.contains('type').click()

        cy.pause()
        
        cy.url()
        .should('include', '/commands/actions')

        cy.get('.action-email')
        .type('testemail@faker.com')
        .should('have.value', 'testemail@faker.com')
    })
})