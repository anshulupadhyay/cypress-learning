/// <reference types="Cypress" />

describe("Validate webdriver University home page links", ()=>{
    
    it('Confirm links redirect to correct pages', ()=>{
        cy.visit('http://webdriveruniversity.com')
        
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        
        cy.url()
        .should('include', 'contactus')

        //to perform browser actions
        cy.go('back')
        cy.url()
        .should('include', 'http://webdriveruniversity.com')
        cy.reload() // reload with cache

        //cy.reload(true) //reload without using cache

        cy.go('forward')
        cy.url()
        .should('include', 'contactus')

        //login portal
        cy.go('back')
        cy.get('#login-portal').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'Login-Portal')

        //click on to do list
        cy.go('back')
        cy.get('#to-do-list').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'To-Do-List')

        cy.go('back')
    })
})