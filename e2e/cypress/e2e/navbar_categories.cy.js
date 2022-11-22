describe("Routes", () => {
    before(() => {
        cy.visit("/");
    });

    it("Redirect to data route", () => {
        cy.get("nav").contains("Categories").click();
        cy.get("nav").contains("Jd Shoes").click();
        cy.url().should("include", "/jdshoes");


    });
});