describe('The Home Page', () => {
    it('successfully loads', () => {
        cy.visit('/') // change URL to match your dev URL
        Cypress.on('uncaught:exception', () => false)
    })
})