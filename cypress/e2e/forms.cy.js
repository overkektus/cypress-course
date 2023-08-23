describe('form tests', () => {
  beforeEach(() => {
    cy.visit('/forms')
  })

  it('Test subscribe form', () => {
    cy.contains(/testing forms/i)
    cy.getDataTest('subscribe-form').find('input').type('egor.piskunou@gmail.com')
    cy.contains(/Successfully subbed: egor.piskunou@gmail.com!/i).should('not.exist')
    cy.getDataTest('subscribe-button').click()
    cy.contains(/Successfully subbed: egor.piskunou@gmail.com!/i).should('exist')
  })
})