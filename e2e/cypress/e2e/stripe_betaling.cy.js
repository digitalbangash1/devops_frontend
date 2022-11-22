describe("Test stripe", () => {
    before(() => {
        cy.visit("/checkout");
    });

    it("Redirect to payment", () => {
        cy.get(".checkout-button").contains("Buy").click();
        cy.get('iframe[name="__privateStripeFrame5"]').then(function($iframe) {
            const $body = $iframe.contents().find('body')
            cy
                .wrap($body)
                .find('input[autocomplete="cc-number"]')
                .type('4242424242424242', { force: true })
            cy
                .wrap($body)
                .find('input[autocomplete="cc-exp"]')
                .type('03/30', { force: true })
            cy
                .wrap($body)
                .find('input[autocomplete="cc-csc"]')
                .type('737', { force: true })
            cy
                .wrap($body)
                .find('input[autocomplete="postal-code"]')
                .type('12345', { force: true })
        })






    });
});