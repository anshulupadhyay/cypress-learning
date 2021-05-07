/// <reference types="Cypress" />

describe("Autocomplete lists", ()=>{
    
    it('Enter text and check options', ()=>{
        cy.visit('http://webdriveruniversity.com')
        
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({force:true})
        
        cy.get('#myInput').type('A')

        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) =>{
            const prod = $el.text();
            const productToSelect = 'Avacado';

            if(prod === productToSelect){
                $el.click

                cy.get('#submit-button').click()
                cy.url().should('include', productToSelect)
            }
        })

    })
        it("Select specific product via autocomplete list", () => {
            cy.visit("http://www.webdriveruniversity.com")
            cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({force:true})
    
            cy.get('#myInput').type('A')
    
            cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
                const prod = $el.text();
                const productToSelect = 'Avacado';
    
                if(prod === productToSelect){
                    $el.click()
    
                    cy.get('#submit-button').click();
                    cy.url().should('include', productToSelect)
                }
            })
        });
    
})