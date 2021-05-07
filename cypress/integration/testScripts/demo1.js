describe('My first test', function(){
    it('Visits a site', () => {
        cy.visit('https://example.cypress.io')
        //cy.screenshot()
        cy.contains('type').click()
        //cy.contains('with')
        cy.url()
            .should('include', '/commands/actions')
    })
})