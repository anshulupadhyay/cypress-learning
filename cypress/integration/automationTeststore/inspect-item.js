/// <reference types="cypress" />

describe("Inspect automation test store items using chain of commands", ()=>{
    it('Clicks on the first item using item header', ()=>{
        cy.visit('http://automationteststore.com/')
        
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click()

    })

    it('Clicks on the first item using item text', ()=>{
        cy.visit('http://automationteststore.com/')
       //locate common class and use contains
        console.log('locate common class and use contains')

        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click()
        .then(function(itemText){
            console.log('selected the following item ' + itemText.text())
        })
        
    })

    it('Clicks on the first item using index', ()=>{
        cy.visit('http://automationteststore.com/')
        //locate common class and use contains
        cy.get('.fixed_wrapper')
            .find('.prdocutname')
            .eq(0)
            .click()

        
    })
})