describe("Routes", () => {
    before(() => {
        cy.visit("/");
        Cypress.on('uncaught:exception', () => false)

    });

    it("Redirect to jd route", () => {
        cy.get("nav").contains("Categories").click();
        cy.get("nav").contains("Jd Shoes").click();
        cy.url().should("include", "/jdshoes");


    });
});