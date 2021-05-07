/// <reference types="Cypress" />

describe("Test contact us form in webdriveruniversity", ()=>{
    
    beforeEach(function(){
        cy.visit(Cypress.env("webdriverUni_homepage") + "/Contact-Us/contactus.html")        
        //cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
    })
    before(function(){
        cy.fixture('example').then(function(data){
            //this.data=data;
            globalThis.data = data;
        })
    })

    it('Should be able to fill and submit the form', ()=>{
      //  cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')
//validate the document has charset as UTF-8
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')

        //validate the title of the page
        cy.title()
        .should('include','WebDriver | Contact Us')

        cy.url()
        .should('include', 'contactus.html')

        cy.get('[name="first_name"]').type(data.first_name)
        cy.get('[name="last_name"]').type(data.last_name)
        cy.get('[name="email"]').type(data.email)
        cy.get('textarea.feedback-input').type('here is my comment')

        cy.get('[type="submit"]').click()
        cy.url()
        .should('include', '/contact-form-thank-you.html')
        //cy.visit('http://webdriveruniversity.com/Contact-Us/contact-form-thank-you.html')
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })
    
    it('Should not be able to submit if all fields are not completed', ()=>{
        //cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')
        //cy.visit('http://webdriveruniversity.com')

        //we will use JQuery to remove attribute which open the link in another tab
        //in this case target="_blank" should be removed        
        //cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})

        cy.get('[name="first_name"]').type(data.first_name)
        cy.get('[name="last_name"]').type(data.last_name)

        cy.get('textarea.feedback-input').type('here is my comment')

        cy.get('[type="submit"]').click()
        cy.url()
        .should('include', '/contact_us.php')

        cy.get('body')
        .contains('Error: all fields are required')

        cy.get('body')
        .contains('Error: Invalid email address')
    })

    it('click on the contact us page and avoid opening new tab', ()=>{
        cy.visit('http://webdriveruniversity.com')
        
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})

    })
})