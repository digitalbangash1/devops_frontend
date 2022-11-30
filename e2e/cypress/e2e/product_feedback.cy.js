Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
describe('Product details', () => {
  it('successfully loads', () => {
      cy.visit('/jdshoes/2');
      cy.contains("Rate this product").click();
      cy.get('textarea').type('id');
      cy.get('textarea').type('Very cheap product');
      
  });
})