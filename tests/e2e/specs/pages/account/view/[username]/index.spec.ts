import { test } from '@playwright/test'

import { testOgImage } from '#tests/e2e/utils/tests'

// import { TIMEZONE_COOKIE_NAME } from '~/utils/constants'
// import {
//   COOKIE_CONTROL_CONSENT_COOKIE_DEFAULT,
//   TIMEZONE_DEFAULT,
// } from '~/cypress/utils/constants'

// fixture account served by `server/api/test/service/postgraphile/graphql.get.ts`
testOgImage({
  dynamic: {
    de: 'a_Das+Profilbild+des+Kontos.,c_Person.takumi,description_~QnVpbGRpbmcgdmliZXR5cGUsIG9uZSBldmVudCBhdCBhIHRpbWUu,title_Profil,username_e2e-test-account,p_Ii9kZS9hY2NvdW50L3ZpZXcvZTJlLXRlc3QtYWNjb3VudCI,s_RgpoxFkWn9mqGRkg.png',
    en: `a_The+account's+profile+picture.,c_Person.takumi,description_~QnVpbGRpbmcgdmliZXR5cGUsIG9uZSBldmVudCBhdCBhIHRpbWUu,title_Profile,username_e2e-test-account,p_Ii9hY2NvdW50L3ZpZXcvZTJlLXRlc3QtYWNjb3VudCI,s_GKEir2paKu3o389J.png`,
  },
})

test.describe('account username page', () => {
  // TODO: mock data
  // beforeEach(() => {
  //   cy.setCookie(TIMEZONE_COOKIE_NAME, TIMEZONE_DEFAULT)
  //   cy.setCookie('ncc_c', COOKIE_CONTROL_CONSENT_COOKIE_DEFAULT)
  // })
  //
  // TODO: mock data
  // context('page load', () => {
  // it('loads the page successfully if user exists', () => {
  //   cy.request('/accounts/username-that-exists').then((resp) => {
  //     expect(resp.status).to.equal(200)
  //     expect(resp.redirectedToUrl).to.equal(undefined)
  //   })
  // })
  //
  // it('does not find page if user does not exists', () => {
  //   cy.request({
  //     url: '/accounts/username-that-does-not-exist',
  //     failOnStatusCode: false,
  //   }).then((resp) => {
  //     expect(resp.status).to.equal(404)
  //     expect(resp.redirectedToUrl).to.equal(undefined)
  //   })
  // })
  // })
  //
  // TODO: mock data
  // context('visual regression', () => {
  //   it('looks as before', () => {
  //     cy.visit('/accounts/username')
  //     cy.get('[data-is-loading="false"]').should('be.visible')
  //     cy.get('[data-testid="nuxt-cookie-control-control-button"]').should(
  //       'be.visible'
  //     )
  //     cy.compareSnapshot('index')
  //   })
  // })
})
