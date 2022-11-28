Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
describe("button", () => {
    before(() => {
        cy.visit("/");
        Cypress.on('uncaught:exception', () => false)

    });

    it("Redirect to jd route", () => {
        cy.get("nav").contains("Categories").click();
        cy.get("nav").contains("Jd Shoes").click();
        cy.get(".details button").contains("+ Add to Cart").click();

    });

    it("Redirect to shopping list ", () => {
        cy.get("nav").contains("Categories").click();
        cy.get("nav").contains("Jd Shoes").click();
        cy.get(".details button").contains("+ Add to Cart").click();
        cy.visit('/shoppingCart');
        cy.contains("+").click();
        cy.contains("+").click();
        cy.contains("Checkout").click();
    });


    it("test all button and chack if arraylist-lenght equal to number of click & chack if selected item are store in shopping list ", () => {
        let k = 0
        cy.get("nav").contains("Categories").click();
                cy.get("nav").contains("Jd Shoes").click();
                cy.get(".details button").each(($button) => {
            // click using jQuery click() method
            $button.click()
            k += 1
         }).then(() => {
            cy.get("nav").get("span").eq(3)                    
            .contains('span',k)
          })
        });
        

});

