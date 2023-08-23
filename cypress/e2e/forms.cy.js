describe('form tests', () => {
  const validEmail = 'egor.piskunou@gmail.com'
  const invalidEmail = 'egor.piskunou@gmail.io'

  beforeEach(() => {
    cy.visit('/forms')
  })

  it('Test subscribe form', () => {
    cy.contains(/testing forms/i)
    cy.getDataTest('subscribe-form').find('input').as('subscribe-input')
    cy.get('@subscribe-input').type(validEmail)
    cy.contains(new RegExp(`Successfully subbed: ${validEmail}!`, 'i')).should('not.exist')
    cy.getDataTest('subscribe-button').click()
    cy.contains(new RegExp(`Successfully subbed: ${validEmail}!`, 'i')).should('exist');
    cy.wait(3000)
    cy.contains(/Successfully subbed: !/i).should('not.exist')

    cy.get('@subscribe-input').type(invalidEmail)
    cy.contains(new RegExp(`invalid email: ${invalidEmail}`, 'i')).should('not.exist')
    cy.getDataTest('subscribe-button').click()
    cy.contains(new RegExp(`invalid email: ${invalidEmail}`, 'i')).should('exist')
    cy.wait(3000)
    cy.contains(new RegExp(`invalid email: ${invalidEmail}`, 'i')).should('not.exist')

    cy.contains(/fail!/i).should('not.exist')
    cy.get('@subscribe-input')
    cy.getDataTest('subscribe-button').click()
    cy.contains(/fail!/i).should('exist')
    cy.wait(3000)
    cy.contains(/fail!/i).should('not.exist')
  })
})