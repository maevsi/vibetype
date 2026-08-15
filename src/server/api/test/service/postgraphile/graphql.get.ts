const ACCOUNT_ROW_ID = TESTING_ACCOUNT_ROW_ID
const ACCOUNT_ID = TESTING_ACCOUNT_ID
const ACCOUNT_USERNAME = TESTING_ACCOUNT_USERNAME
const ACCOUNT_DESCRIPTION = TESTING_ACCOUNT_DESCRIPTION

export default defineEventHandler((event) => {
  const isTesting = useIsTesting({ isCookieEnabled: false })

  if (!isTesting) {
    throw createAppError({
      status: 403,
      statusText: 'This endpoint is only available in the testing environment.',
    })
  }

  const { operationName } = getQuery(event)

  switch (operationName) {
    case 'Account':
      return {
        data: {
          accountByUsername: {
            achievementsByAccountId: {
              nodes: [],
              __typename: 'AchievementConnection',
            },
            description: ACCOUNT_DESCRIPTION,
            eventsByCreatedBy: {
              nodes: [],
              totalCount: 0,
              __typename: 'EventConnection',
            },
            id: ACCOUNT_ID,
            imprintUrl: null,
            profilePictureByAccountId: null,
            rowId: ACCOUNT_ROW_ID,
            __typename: 'Account',
          },
        },
      }
    case 'AccountByRowId':
      return {
        data: {
          accountByRowId: {
            id: ACCOUNT_ID,
            profilePictureByAccountId: null,
            rowId: ACCOUNT_ROW_ID,
            username: ACCOUNT_USERNAME,
            __typename: 'Account',
          },
        },
      }
    case 'AllEventCategoriesFormEvent':
      return {
        data: {
          allEventCategories: {
            nodes: [
              {
                id: 'RXZlbnRDYXRlZ29yeToxMTExMTExMS0xMTExLTExMTEtMTExMS0xMTExMTExMTExMTE=',
                name: 'music-and-entertainment',
                rowId: '11111111-1111-1111-1111-111111111111',
                __typename: 'EventCategory',
              },
              {
                id: 'RXZlbnRDYXRlZ29yeToyMjIyMjIyMi0yMjIyLTIyMjItMjIyMi0yMjIyMjIyMjIyMjI=',
                name: 'sports-and-fitness',
                rowId: '22222222-2222-2222-2222-222222222222',
                __typename: 'EventCategory',
              },
            ],
            __typename: 'EventCategoryConnection',
          },
        },
      }
    case 'AllEventFormatsFormEvent':
      return {
        data: {
          allEventFormats: {
            nodes: [
              {
                id: 'RXZlbnRGb3JtYXQ6MzMzMzMzMzMtMzMzMy0zMzMzLTMzMzMtMzMzMzMzMzMzMzMz',
                name: 'meetup',
                rowId: '33333333-3333-3333-3333-333333333333',
                __typename: 'EventFormat',
              },
              {
                id: 'RXZlbnRGb3JtYXQ6NDQ0NDQ0NDQtNDQ0NC00NDQ0LTQ0NDQtNDQ0NDQ0NDQ0NDQ0',
                name: 'workshop',
                rowId: '44444444-4444-4444-4444-444444444444',
                __typename: 'EventFormat',
              },
            ],
            __typename: 'EventFormatConnection',
          },
        },
      }
    case 'AllLegalTerms':
      return {
        data: {
          allLegalTerms: {
            nodes: [
              {
                rowId: '858ab35b-0433-4698-902f-ff42a25ec94a',
                term: '# Terms of Use',
                __typename: 'LegalTerm',
              },
            ],
            __typename: 'LegalTermConnection',
          },
        },
      }
    default:
      return { data: {} }
  }
})
