/* eslint-disable indent */
describe('Note app', function() {

  beforeEach(function() {
    cy.visit('')
    cy.request('POST',`${Cypress.env('BACKEND')}/testing/reset`)
    const user = {
      name: 'The Dark Lord Sauron',
      username: 'Sauron',
      password: 'IwanttheRing123'
    }
    cy.request('POST', `${Cypress.env('BACKEND')}/users`, user)
    cy.visit('')
  })

  it('front page can be opened', function() {
    cy.contains('Notes')
    cy.contains('Note app, Department of Computer Science, University of Helsinki 2023')
  })

  it('user can log in', function() {
    cy.contains('log in').click()
    cy.get('#username').type('Sauron')
    cy.get('#password').type('IwanttheRing123')
    cy.get('#login-button').click()

    cy.contains('The Dark Lord Sauron logged in')
  })
  it('login fails with wrong password', function() {
    cy.contains('log in').click()
    cy.get('#username').type('mluukkai')
    cy.get('#password').type('wrong')
    cy.get('#login-button').click()

    cy.get('.error')
    .should('contain', 'wrong credentials')
    .and('have.css', 'color', 'rgb(255, 0, 0)')
    .and('have.css', 'border-style', 'solid')

    cy.get('html').should('not.contain', 'Matti Luukkainen logged in')
  })
  describe('when logged in', function() {
    beforeEach(function() {
      cy.login({ username: 'Sauron', password: 'IwanttheRing123' })
    })
    it('a new note can be created', function() {
      cy.contains('new note').click()
      cy.get('#newNote').type('a note created by cypress')
      cy.contains('save').click()
      cy.contains('a note created by cypress')
    })

    describe('and a note exists', function () {
      beforeEach(function () {
        cy.createNote({ content: 'first note', important: false })
        cy.createNote({ content: 'second note', important: false })
        cy.createNote({ content: 'third note', important: false })
      })

      it('one of those can be made important', function () {
        cy.contains('second note').parent().find('button').click()
        cy.contains('second note').parent().find('button')
          .should('contain', 'make not important')
      })
    })
  })
})