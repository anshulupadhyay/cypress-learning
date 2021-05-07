/// <reference types="Cypress" />

describe("Interacting with checkboxes", () => {

    before(function () {
        // cy.visit('http://webdriveruniversity.com')
        // cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true })
        cy.navigateToWebdriverUni_CheckBoxPage();

    })
    it('Handling checkboxes', () => {

        cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')
        cy.get('#checkboxes > :nth-child(1) > input').as('option-1')

        cy.get('@option-1').check()
        cy.get('@option-1').check().should('be.checked')

    })

    it('Uncheck a checkbox', () => {

        cy.get('#checkboxes > :nth-child(5) > input').should('be.checked')

        cy.get('#checkboxes > :nth-child(5) > input').uncheck().should('not.be.checked')
        cy.get('#checkboxes > :nth-child(5) > input').as('option-3')

        cy.get('@option-3').uncheck()
        cy.get('@option-3').uncheck().should('not.be.checked')

    })

    it('Selecting multiple checkboxes', () => {
        cy.get('input[type=checkbox]').check(['option-1', 'option-2', 'option-3', 'option-4']).should('be.checked')
    })

    it('Selecting Radio Button', () => {

        cy.get('#radio-buttons').find('[type="radio"]').first().check() //using first second etc

        cy.get('#radio-buttons').find('[type="radio"]').eq(1).check() //using indexes

    })

    it('Validate state of specific Radio Button', () => {

        cy.get('input[value="lettuce"]').should('not.be.checked')
        cy.get('input[value="cabbage"]').should('be.disabled')
        cy.get('input[value="pumpkin"]').should('be.checked')

        //check lettuce
        cy.get('input[value="lettuce"]').check()
        cy.get('input[value="lettuce"]').should('be.checked')
        cy.get('input[value="pumpkin"]').should('not.be.checked')

    })

    it('Handling Drop Down Menus', () => {

        cy.get('#dropdowm-menu-1').select('Python')
        cy.get('#dropdowm-menu-2').select('Maven').should('have.value', 'maven')
        cy.get('#dropdowm-menu-3').select('JQuery').contains('JQuery')
    })

})