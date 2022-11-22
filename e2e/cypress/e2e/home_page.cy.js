Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
describe('The Home Page', () => {
    it('successfully loads', () => {
        cy.visit('/') // change URL to match your dev URL

    })
})