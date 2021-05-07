/// <reference types="Cypress" />

describe('Testing in Cypress App', () =>{

    it('loads the default page', () =>{
        cy.visit('localhost:3000')
        cy.url()
        .should('include','/signin')
    })

    it('does not display error', ()=>{
        cy.get('.Mui-error').should('not.exist')
    })

    it('displays error when username not entered and clicked anywhere', () =>{
        cy.get('input[id=password]').click()
    })
    
    it('displays error', ()=>{
        cy.get('.Mui-error').contains('Username is required')
    })

    it('button is disabled', () =>{
        cy.get('.makeStyles-submit-5').should('be.disabled')
    })

    it('Enters email address and password, sign in button is enabled', ()=>{
        cy.get('input[id=username]')
        .type('testemail@faker.com')
        cy.get('input[id=password]')
        .type('abcd1234')

        cy.get('.makeStyles-submit-5').should('be.enabled')
    })

    it('display error on clicking on sign in', ()=>{
        cy.get('.makeStyles-submit-5').click()

        cy.get('.MuiAlert-message').contains('Username or password is invalid')
    })
})

describe('Create new account', () =>{

    it('click on signup link', () =>{
       cy.get('a[href*=signup]')
       .click()

        cy.url()
        .should('include','/signup')

        cy.get('h1[data-test="signup-title"')
        .contains('Sign Up')
        //cy.get('div[data-test="signup-first-name"] div input[name=firstName]')
          //  .type('John')
    })

    it('Enter all fields & submit', ()=>{
        cy.get('input[name="firstName"]')
        .type('John')

        cy.get('input[id=lastName]')
        .type('Mayer')

        cy.get('input[id=username]')
        .type('JohnMayer')

        cy.get('input[id=password]')
        .type('abcd1234')

        cy.get('input[id=confirmPassword]')
        .type('abcd1234')

        cy.get('button[type=submit]')
        .click()
    })
/*
    it('displays error when username not entered and clicked anywhere', () =>{
        cy.get('input[id=password]').click()
    })
    
    it('displays error', ()=>{
        cy.get('.Mui-error').contains('Username is required')
    })

    it('button is disabled', () =>{
        cy.get('.makeStyles-submit-5').should('be.disabled')
    })

    it('Enters email address and password, sign in button is enabled', ()=>{
        cy.get('input[id=username]')
        .type('testemail@faker.com')
        cy.get('input[id=password]')
        .type('abcd1234')

        cy.get('.makeStyles-submit-5').should('be.enabled')
    })

    it('display error on clicking on sign in', ()=>{
        cy.get('.makeStyles-submit-5').click()

        cy.get('.MuiAlert-message').contains('Username or password is invalid')
    })
    */
})