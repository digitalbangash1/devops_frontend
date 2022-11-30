Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
describe('Admin Page load', () => {
  it('successfully loads', () => {
      cy.visit('/admin')
  });

  it("Redirect to Create New product", () => {
    cy.get(".productsNav").contains("Product List").click();
 });

 it("Redirect to Products List View", () => {
  cy.get(".productsNav").contains("Product List").click();
});

})