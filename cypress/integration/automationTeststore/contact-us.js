/// <reference types="Cypress" />

describe("Test contact us form in Automation Test Store", ()=>{
    beforeEach(function(){
        cy.fixture("userDetails").as("user")
        })

    it('Should be able to fill and submit the form', ()=>{
        cy.visit('http://automationteststore.com/')
        
        //cy.get('a[href="https://automationteststore.com/index.php?rt=content/contact"]').click()

        cy.get('a[href$="contact"]').click()
        .then(function(itemText){
            console.log('Text to click on contact us link is ' + itemText.text())
            cy.log('Link text is ' + itemText.text())
        })

        //This opens the link in another page. Cypress does not allow it 
        // Check: https://docs.cypress.io/guides/references/trade-offs#Inside-the-browser
        // Check : https://docs.cypress.io/guides/references/error-messages
        // In order to continue, add this to cypress.json :     "chromeWebSecurity": false
 
        cy.get('#ContactUsFrm_first_name').type('Joe')
        cy.get('#ContactUsFrm_email').type('abcd@email.com')
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')
       //using cypress xpath plugin below:  https://github.com/cypress-io/cypress-xpath
        cy.xpath("//*[@id='ContactUsFrm_enquiry']").type('I have enquiry related to bulk order')
        
        //cy.get('#ContactUsFrm_enquiry').type('I have enquiry related to bulk order')
        cy.get('button[title="Submit"]').click()
        cy.url()
        .should('include','/success')

        cy.get('div.contentpanel section')
        .should('include.text', 'Your enquiry has been successfully sent to the store owner!')

        cy.log('Test has completed ... ')
        console.log ('Test has completed')
    })
    
    it('Should not be able to submit if all fields are not completed -- Using Fixtures', ()=>{
        cy.visit('http://automationteststore.com/')
        
        cy.get('a[href$="contact"]').click()
        .then(function(itemText){
            console.log('Text to click on contact us link is ' + itemText.text())
            cy.log('Link text is ' + itemText.text())
        })

        cy.get("@user").then((user)=>{
            cy.get('#ContactUsFrm_first_name').type(user.first_name)
            cy.get('#ContactUsFrm_email').type(user.email)
        })
        
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')
       //using cypress xpath plugin below:  https://github.com/cypress-io/cypress-xpath
        cy.xpath("//*[@id='ContactUsFrm_enquiry']").type('I have enquiry related to bulk order')
        
        //cy.get('#ContactUsFrm_enquiry').type('I have enquiry related to bulk order')
        cy.get('button[title="Submit"]').click()
        cy.url()
        .should('include','/success')

        cy.get('div.contentpanel section')
        .should('include.text', 'Your enquiry has been successfully sent to the store owner!')

        cy.log('Test has completed ... ')
        console.log ('Test has completed')
    })
})