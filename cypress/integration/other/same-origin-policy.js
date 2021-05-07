/// <reference types="Cypress" />

describe("Cypress Web security",
    {
        retries: {
          runMode: 2,
          openMode: 1,
    }
}, ()=>{
    it('Visit two different domains', ()=>{
        cy.visit('http://webdriveruniversity.com/')

        //This will result in error when you try to visit another super domain
        //cy.visit() failed because you are attempting to visit a URL that is of a different origin.
        cy.visit('https://automationteststore.com/')
    })

    it('Validate visiting two different domains via user action', ()=>{
        cy.visit('http://webdriveruniversity.com/')

        //This will result in error when you try to visit another super domain
        //cy.visit() failed because you are attempting to visit a URL that is of a different origin.
        //This will work when we add below property to cypress.json
        // "chromeWebSecurity": false

        cy.get('#automation-test-store').invoke('removeAttr', 'target').click()
    })
    it('Testing retries at individual test level',
    {
        retries: {
          runMode: 2,
          openMode: 2,
    }
}, ()=>{
        cy.visit('http://webdriveruniversity.com/')

        //This will result in error when you try to visit another super domain
        //cy.visit() failed because you are attempting to visit a URL that is of a different origin.
        //cy.visit('https://automationteststore.com/')
        cy.get('bbcc').click()
    })
    it('Testing retries at scenario level', ()=>{
        cy.visit('http://webdriveruniversity.com/')

        //This will result in error when you try to visit another super domain
        //cy.visit() failed because you are attempting to visit a URL that is of a different origin.
        //cy.visit('https://automationteststore.com/')
        cy.get('bbcc').click()
    })
})