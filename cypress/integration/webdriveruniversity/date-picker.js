/// <reference types="Cypress" />

describe("Handling data Pickers", ()=>{
    beforeEach(() =>{
        cy.visit('http://webdriveruniversity.com')        
        cy.get('#datepicker').scrollIntoView().invoke('removeAttr', 'target').click({force:true})
    })

    it('Select Date from the data picker', ()=>{
        // let date = new Date()
        // date.setDate(date.getDate()) //get current day

        // cy.log(date.getDate())

        // let date1 = new Date()
        // date1.setDate(date.getDate() + 5)
        // cy.log(date1.getDate()) // current date + 5
        cy.get('#datepicker').click()

        var date = new Date()
        date.setDate(date.getDate() + 360)

        var futureYear = date.getFullYear()
        var futureMonth = date.toLocaleString('default', {month: 'long'})

        var futureDay = date.getDate()

        cy.log('future year ' + futureYear)
        cy.log('future month ' + futureMonth)

        cy.log('future day ' + futureDay)

        function selectMonthYear(){
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(curretDate =>{
                if(!curretDate.text().includes(futureYear)){
                    cy.get('.next').first().click();
                    selectMonthYear()
                }
            }).then(() => {
                cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(curretDate =>{
                    if(!curretDate.text().includes(futureMonth)){
                        cy.get('.next').first().click();
                        selectMonthYear()
                    }
            })
        })
        }

        function selectFutureDay(){
            cy.get('[class="day"]').contains(futureDay).click()
        }

        selectMonthYear()
        selectFutureDay()
    })

})