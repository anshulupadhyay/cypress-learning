/// <reference types="Cypress" />

describe("Test contact us form in webdriveruniversity", ()=>{
    beforeEach(function(){
        cy.visit("/")
    })
    
    before(function(){
        cy.fixture('example').then(function(data){
            //this.data=data;
            globalThis.data = data;
        })
    })

    it('Should be able to fill and submit the form', ()=>{
        //cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')
       // cy.visit('http://webdriveruniversity.com')
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
//validate the document has charset as UTF-8
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')

        //validate the title of the page
        cy.title()
        .should('include','WebDriver | Contact Us')

        cy.url()
        .should('include', 'contactus.html')
//Passing value from environment variable
        cy.webDriver_ContactFormSubmission(Cypress.env("first_name"), data.last_name, data.email, data.comment, 'h1', data.successMessage)
    })
    
    it('Should not be able to submit if all fields are not completed', ()=>{
        //cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')
        //cy.visit('http://webdriveruniversity.com')
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})

        cy.webDriver_ContactFormSubmission(data.first_name, data.last_name, ' ', data.comment,'body', data.failMessage1)

    })

    it('click on the contact us page and avoid opening new tab', ()=>{
        //cy.visit('http://webdriveruniversity.com')
        
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})

    })
})