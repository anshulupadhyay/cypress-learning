/// <reference types="Cypress" />

describe("Handle Java script alerts", ()=>{
    
    it('Confirm JS alerts contains correct text', ()=>{
        cy.visit('http://webdriveruniversity.com')
        
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
        cy.get('#button1').click()

        cy.on('window:alert', (str) =>{
            expect(str).to.equal('I am an alert box!')
        })
        
    })

    it('Confirm correct text on Java script confirm box', ()=>{
        cy.visit('http://webdriveruniversity.com')
        
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
        cy.get('#button4').click()

        //cy.on('window:alert' -- This will accept Ok as default behavior
        //window:confirm provides ability to take action
        cy.on('window:confirm', (str) =>{
            return true
            //expect(str).to.equal('I am an alert box!')
        })
        
        cy.get('#confirm-alert-text').contains('You pressed OK!')

    })

    it('Confirm correct text on Java script confirm box, clicked Cancel', ()=>{
        cy.visit('http://webdriveruniversity.com')
        
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
        cy.get('#button4').click()

        cy.on('window:confirm', (str) =>{
            return false
        })
        
        cy.get('#confirm-alert-text').contains('You pressed Cancel!')
    })

    it.only('Validate java script alerts using a stub', ()=>{
        cy.visit('http://webdriveruniversity.com')
        
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
        //stub helps to ensure all java script alerts are called with appropriate message

        const stub = cy.stub()
        cy.on('window:confirm', stub)       //When this event is fired, stub will store the results

        cy.get('#button4').click().then( ()=>{
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
        }).then(() =>{
            return true
        }).then(()=>{
            cy.get('#confirm-alert-text').contains('You pressed OK!')
        })

        
    })

})