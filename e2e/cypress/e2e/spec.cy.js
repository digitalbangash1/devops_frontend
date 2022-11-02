describe('My First Test', () => {
  it('clicks the link "Feedback"', () => {
    cy.visit('https://samat.admin.samat.diplomportal.dk/')

    cy.contains('Feedback').click()
  })
})