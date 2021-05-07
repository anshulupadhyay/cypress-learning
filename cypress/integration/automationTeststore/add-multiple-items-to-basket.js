/// <reference types="cypress" />

describe("Inspect automation test store items using chain of commands", () => {
    before(function(){
        cy.fixture("products").then(function(data){
            globalThis.data=data
        })
    })
    
    beforeEach(function () {
        cy.visit('http://automationteststore.com/')
        cy.get('a[href*="product/category&path="]').contains("Hair Care").click()

    })

    it('Add items to basket', () => {
        data.productName.forEach(function(element){
            cy.addToCart(element)
        })
        cy.get('.block_7 > .nav > .dropdown > .dropdown-toggle').click()
       // cy.addToCart(data.productName)
    })

    // it('Clicks on the first item using item text', () => {

    // })

    // it('Clicks on the first item using index', () => {

    // })
})