/// <reference types="cypress" />

describe("Iterate over elements", ()=>{
    beforeEach(function(){
     cy.visit('http://automationteststore.com/')
     cy.get('a[href*="product/category&path="]').contains("Hair Care").click()

    })
     it('Log information of all hair care products', ()=>{
                 
         cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) =>{
             cy.log("Index : " + index + " : " + $el.text())
         })
     })
 
    
     it('Add specific product to basket - Using custom commands', ()=>{
          cy.selectProduct('Curls to straight Shampoo');
     })
 
     it('Add another specific product to basket - Using custom commands', ()=>{
          cy.selectProduct('Seaweed Conditioner');
     })
 
     it('Add 3rd specific product to basket - Using custom commands', ()=>{
        cy.selectProduct('Eau Parfumee au The Vert Shampoo');
   })
 
 })