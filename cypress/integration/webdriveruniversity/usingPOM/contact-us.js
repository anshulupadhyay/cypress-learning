import HomePage_PO from '../../../support/pageObject/webdriver-uni/HomePage_PO'
import ContactUs_PO from '../../../support/pageObject/webdriver-uni/ContactUs_PO'

/// <reference types="Cypress" />

describe("Test contact us form in webdriveruniversity", ()=>{
    Cypress.config('defaultCommandTimeout', 25000)
    
    const contactus_PO = new ContactUs_PO()
    const homePage_PO = new HomePage_PO()

    beforeEach(function(){
        homePage_PO.visitHomePage();
        homePage_PO.clickOnContactUs()
    })

    before(function(){
        cy.fixture('example').then(function(data){
            globalThis.data = data;
        })
    })

    it('Should be able to fill and submit the form', ()=>{
//validate the document has charset as UTF-8
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        //validate the title of the page
        cy.title().should('include','WebDriver | Contact Us')

        cy.url().should('include', 'contactus.html')
        //cy.webDriver_ContactFormSubmission(Cypress.env("first_name"), data.last_name, data.email, data.comment, 'h1', data.successMessage)
        //cy.pause()

        cy.wait(3000)
        contactus_PO.contactForm_Submission(Cypress.env("first_name"), data.last_name, data.email, data.comment, 'h1', data.successMessage)
    })
    
    it('Should not be able to submit if all fields are not completed', ()=>{
        contactus_PO.contactForm_Submission(data.first_name, data.last_name, ' ', data.comment,'body', data.failMessage1)
    })

})