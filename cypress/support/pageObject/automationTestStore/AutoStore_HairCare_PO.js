class AutoStore_HairCare_PO {

    addHairCareProductsToBasket(){
        globalThis.data.productName.forEach(function(element){
            cy.addToCart(element)
        })
        cy.get('.dropdown-toggle > .fa').click()
    }
    addHairCareProductsToBasket_withDebug(){
        globalThis.data.productName.forEach(function(element){
            cy.addToCart(element).then(() =>{
                debugger
            })
        })
        cy.get('.dropdown-toggle > .fa').click()
       // cy.screenshot()
        //cy.screenshot("test")
    }
}

export default AutoStore_HairCare_PO;