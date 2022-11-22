describe("Test stripe", () => {
    before(() => {
        cy.visit("/checkout");
        Cypress.on('uncaught:exception', () => false)
    });

    it("Redirect to payment", () => {
        cy.get(".checkout-button").contains("Buy").click();







    });
});