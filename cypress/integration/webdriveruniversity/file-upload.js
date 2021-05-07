/// <reference types="Cypress" />

describe("File uploading", ()=>{
    beforeEach(() =>{
        cy.visit('http://webdriveruniversity.com')        
        cy.get('#file-upload').scrollIntoView().invoke('removeAttr', 'target').click({force:true})
    })

    it('Select and upload a test file', ()=>{
       
        cy.fixture("background.jpg", 'base64').then(fileContent =>{
            cy.get("#myFile").attachFile({
                fileContent,
                fileName: 'background.jpg',
                mimeType: 'image/jpg'
            },
            {
                uploadType: "input"
            })
        })
        //observe the logs, cypress automatically handles the alerts

        cy.get('#submit-button').click()
    })

    it('Donot upload a test file', ()=>{
       //observe the logs, cypress automatically handles the alerts
        cy.get('#submit-button').click()
    })
})