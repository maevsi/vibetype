import { CYPRESS_BASE_URL } from '~/plugins/util/constants'

describe('task event create page', () => {
  context('page load', () => {
    it('redirects to sign-in when not signed in', () => {
      cy.request({
        url: '/task/event/create',
        followRedirect: false,
      }).then((resp) => {
        expect(resp.status).to.equal(302)
        expect(resp.redirectedToUrl).to.equal(
          `${CYPRESS_BASE_URL(
            Cypress.env('NODE_ENV')
          )}/task/account/sign-in?referrer=/task/event/create`
        )
      })
    })
  })
})
