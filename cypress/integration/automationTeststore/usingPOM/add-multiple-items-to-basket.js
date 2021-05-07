import AutoStore_HomePage_PO from '../../../support/pageObject/automationTestStore/AutoStore_HomePage_PO'
import AutoStore_HairCare_PO from '../../../support/pageObject/automationTestStore/AutoStore_HairCare_PO'

/// <reference types="cypress" />

describe("Inspect automation test store items using chain of commands", () => {
    const autoStore_HomePage_PO = new AutoStore_HomePage_PO()
    const autoStore_HairCare_PO = new AutoStore_HairCare_PO()

    before(function(){   
        //adjust size of window
        //cy.viewport(1050,750)  
        cy.fixture("products").then(function(data){
            globalThis.data=data
        })
    })
    
    beforeEach(function () {
        cy.clearLocalStorage()
        cy.clearCookies()
        autoStore_HomePage_PO.accessHomePage()
        autoStore_HomePage_PO.clickOn_HairCare_Link()

    })

    it('Add items to basket', () => {
        autoStore_HairCare_PO.addHairCareProductsToBasket_withDebug()
    })

})