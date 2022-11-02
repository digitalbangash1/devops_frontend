describe('My First Test', () => {
  it('clicks the link "Feedback"', () => {
    cy.visit('localhost:3000')

    cy.contains('Feedback').click()
  })
})