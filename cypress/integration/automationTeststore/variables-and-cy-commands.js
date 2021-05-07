/// <reference types="cypress" />

describe("Verifying variables, cypress commands and jquery commands", ()=>{
    it('Navigate to specific product pages', ()=>{
        cy.visit('http://automationteststore.com/')


        //This will fail
        // const makeUpLink = cy.get('a[href*="product/category&path="]')
        //                     .contains("Makeup")
        

        // const skinCareLink = cy.get('a[href*="product/category&path="]')
        //                     .contains("SKINCARE")
        // makeUpLink.click()
        // skinCareLink.click()


        //This will pass
        // cy.visit('http://automationteststore.com/')
        // const makeUpLink = cy.get('a[href*="product/category&path="]')
        //                     .contains("Makeup")
        
        // makeUpLink.click()

        // const skinCareLink = cy.get('a[href*="product/category&path="]')
        //                     .contains("SKINCARE")
        // skinCareLink.click()

        //Recommended approach
        cy.get('a[href*="product/category&path="]').contains("Makeup").click()
        
        cy.get('a[href*="product/category&path="]').contains("SKINCARE").click()



    })

    it('Navigate to specific product pages and validate text', ()=>{
        cy.visit('http://automationteststore.com/')

        cy.get('a[href*="product/category&path="]').contains("Makeup").click()
        
        //following code will fail
        // const header = cy.get('h1 .maintext')
        // cy.log(header.text())


        cy.get('h1 .maintext').then(($headerText) =>{
            const headerText = $headerText.text()
            cy.log('found header text ' + headerText)
            expect(headerText).is.eq('Makeup')
        })

    })

    it.only('Validate properties of contact us page', ()=>{
        cy.visit('https://automationteststore.com/index.php?rt=content/contact')

        //uses cypress command and chaining
        cy.contains('#ContactUsFrm', 'Contact Us Form')

        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name:')

        //JQuery approach
        //with this approach we can execute more cypress commands in a controlled sequence
        //e.g. validation after making some action
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(text =>{
            const firstNameText = text.find('#field_11').text()
            expect(firstNameText).to.contain('First name:')

        
            //Embedded command (Closure)

            cy.get('#field_11').then(fnText =>{
                cy.log(fnText.text())
                cy.log(fnText)
            })
        })       
    })
})