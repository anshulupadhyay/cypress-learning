
class HomePage_PO {

    visitHomePage(){
        cy.visit(Cypress.env("webdriverUni_homepage"))   //defined in env variable cypress.json
        //if I need to override the default time out
        cy.visit(Cypress.env("webdriverUni_homepage"), {timeout: 7000})
    }

    clickOnContactUs(){
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true}, {timeout: 500})
    }

}

export default HomePage_PO;