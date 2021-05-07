/// <reference types="cypress" />

describe("Iterate over elements", ()=>{
   beforeEach(function(){
    cy.visit('http://automationteststore.com/')

   })
    it('Log information of all hair care products', ()=>{
        
        cy.get('a[href*="product/category&path="]').contains("Hair Care").click()
        
        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) =>{
            cy.log("Index : " + index + " : " + $el.text())
        })
    })

    it('Add specific product to basket', ()=>{

        cy.get('a[href*="product/category&path="]').contains("Hair Care").click()

        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) =>{
           // cy.log("Index : " + index + " : " + $el.text())
           if($el.text().includes('Curls to straight Shampoo')){
               cy.wrap($el).click()
           }
        })
    })
    
    it('Validate a all products listed', ()=>{

        cy.get('.thumbnails .prdocutname').each(($el, index, $list) =>{
            cy.log("Index : " + index + " : " + $el.text())

            cy.wrap($el).get('a.productcart').should('have.attr', 'title', 'Add to Cart')

        })
        cy.get('.thumbnails .prdocutname').should('have.length', 16)

        cy.log('Alternative way using alias ------>>>>>')
        cy.get('.thumbnail').as('productThumbnail')
        cy.get('@productThumbnail').should('have.length', 16)

        cy.get('@productThumbnail').find('.productcart')
        .invoke('attr', 'title').should('include', 'Add to Cart')

    })

    it('Add specific product to basket - Using custom commands', ()=>{

        cy.get('a[href*="product/category&path="]').contains("Hair Care").click()
//command is defined in support->command.js
        cy.selectProduct('Curls to straight Shampoo');
    })

    it('Add another specific product to basket - Using custom commands', ()=>{

        cy.get('a[href*="product/category&path="]').contains("Hair Care").click()
//command is defined in support->command.js
        cy.selectProduct('Seaweed Conditioner');
    })


})