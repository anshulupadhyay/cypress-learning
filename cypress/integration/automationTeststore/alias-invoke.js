/// <reference types="cypress" />

describe("Alias and invoke", ()=>{
   
    it('Validate a specific hair care product', ()=>{
        cy.visit('http://automationteststore.com/')

        cy.get('a[href*="product/category&path="]').contains("Hair Care").click()
        
        cy.get(".fixed_wrapper .prdocutname").eq(0).invoke('text').as('productThumbnail')
        cy.get('@productThumbnail').should('include', 'Seaweed Conditioner')

        cy.get('@productThumbnail').its('length').should('be.gt', 5)

    })  

    it.only('Calculate total of normal and sell products', ()=>{
        cy.visit('http://automationteststore.com/')

        cy.log('Alternative way using alias ------>>>>>')
        cy.get('.thumbnail').as('productThumbnail')
        cy.get('@productThumbnail').should('have.length', 16)

        // cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list)=>{
        //     cy.log($el.text())

        // })
        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
        cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice')

        var itemTotal = 0
        cy.get('@itemPrice').then($linkText => {
            var itemPriceTotal = 0
            var itemPrice = $linkText.split('$')

            var i;
            for (i = 0; i < itemPrice.length; i++) {
                cy.log(itemPrice[i]) 
                itemPriceTotal += Number(itemPrice[i])               
            }
            cy.log('Total for non sale price items :: ' + itemPriceTotal)
            itemTotal += itemPriceTotal
            cy.log(itemTotal)

        })

        cy.get('@saleItemPrice').then($linkText => {
            var saleItemPriceTotal = 0
            var itemPrice = $linkText.split('$')

            var i;
            for (i = 0; i < itemPrice.length; i++) {
                cy.log(itemPrice[i]) 
                saleItemPriceTotal += Number(itemPrice[i])               
            }
            cy.log('Total for sale price items :: ' + saleItemPriceTotal)
            itemTotal += saleItemPriceTotal
            cy.log(itemTotal)
        })
        .then(() =>{
            cy.log('Total price : ' + itemTotal)
            expect(itemTotal).to.equal(663.1)
        })
    })
  
})