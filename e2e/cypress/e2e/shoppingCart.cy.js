Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
describe("button", () => {
    before(() => {
        cy.visit("/");
        Cypress.on('uncaught:exception', () => false)

    });

    it("Redirect to jd route and button click ", () => {
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
        cy.contains("-").click();
        cy.contains("Checkout").click();
    });

//Junit test
    it("test all button and check if arraylist-lenght equal to number of click & check if selected item are store in shopping list ", () => {
        let k = 0
        cy.get("nav").contains("Categories").click();
                cy.get("nav").contains("Jd Shoes").click();
                //Cypress.$(document).ready(function() {
                cy.get(".details button").each(($button) => {
                    cy.wrap($button).click()
                    k+=1
                    });
            cy.get("nav").get("span").eq(3).click().then(($span) => {
                expect($span.text()).to.eq(k.toString())
            })
        });
        
});

/*
 it("test all button and check if arraylist-lenght equal to number of click & check if selected item are store in shopping list ", () => {
        let k = 0
        cy.get("nav").contains("Categories").click();
                cy.get("nav").contains("Jd Shoes").click();
                //Cypress.$(document).ready(function() {
                cy.get(".details button").each(($button) => {
            // click using jQuery click() method
            
            $button.click()
            k += 1
            cy.wait(10)
        //});
        }).then(() => {
            cy.get("nav").get("span").eq(3).click().then(($span) => {
                expect($span.text()).to.eq(k.toString())
            })
        })
        });


*/