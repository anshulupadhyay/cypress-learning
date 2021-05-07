/// <reference types="Cypress" />

describe("Mouse Actions", ()=>{
    
    it('Scroll to select and option', ()=>{
        cy.visit('http://webdriveruniversity.com')
        
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})
        

    })

    it('Drag and drop box', ()=>{
        
        cy.get('#draggable').trigger('mousedown', {which: 1})
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force : true})
        
    })
    
    it('Double click on element', ()=>{
        
        cy.get('#double-click').dblclick()
        
    })

    it('Click and holding mouse button on a given element', ()=>{
        
        cy.get('#click-box').trigger('mousedown', {which: 1}).then(($element) =>{
            expect($element).to.have.css('background-color', 'rgb(0, 255, 0)')
        })
        
    })
})