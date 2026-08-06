const ACCOUNT_ROW_ID = 'a3f8f6c2-6b1e-4b6a-9b9a-9f7d6a2e6c1a'
const ACCOUNT_ID =
  'QWNjb3VudDphM2Y4ZjZjMi02YjFlLTRiNmEtOWI5YS05ZjdkNmEyZTZjMWE='
const ACCOUNT_USERNAME = 'e2e-test-account'
const ACCOUNT_DESCRIPTION = 'Building vibetype, one event at a time.'

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
