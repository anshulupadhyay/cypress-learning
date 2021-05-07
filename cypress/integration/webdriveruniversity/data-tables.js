/// <reference types="Cypress" />

describe("Handling data tables", ()=>{
    beforeEach(() =>{
        cy.visit('http://webdriveruniversity.com')        
        cy.get('#data-table').scrollIntoView().invoke('removeAttr', 'target').click({force:true})
    })

    it('Calculate & assert age of all users', ()=>{
        var userDetail = []
        let numb = 0
        cy.get('#thumbnail-1 td').each(($el, index, $list) =>{
            userDetail[index] = $el.text()
        }).then(() =>{
            var i;
            for (i = 0; i < userDetail.length; i++) {
                if(Number(userDetail[i])){
                    numb += Number(userDetail[i])
                }
                //cy.log(userDetail[i])
            }
            cy.log('Total :: ' + numb)
            expect(numb).to.eq(322)

        })
    })

    it('Select data based on user last name', ()=>{
        
        cy.get('#thumbnail-1 tr td:nth-child(2)').each(($el, index, $list) =>{
            const text = $el.text()
            if(text.includes('Woods')){
                cy.get('#thumbnail-1 tr td:nth-child(2)').eq(index).next().then(function(age){
                    const userAge = age.text()
                    expect(userAge).to.equal("80")
                })
            }
        })
    })

})