class AutoStore_HomePage_PO {

    accessHomePage(){
        //cy.visit('https://automationteststore.com')
        cy.visit("/")
    }

    clickOn_HairCare_Link(){
        cy.get('a[href*="product/category&path="]').contains("Hair Care").click()
    }


}

export default AutoStore_HomePage_PO;