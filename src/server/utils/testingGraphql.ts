import { importPKCS8, SignJWT } from 'jose'
import { z } from 'zod'

// mirrors postgraphile's global object identifiers
const getNodeId = (typeName: string, ...keys: string[]) =>
  btoa([typeName, ...keys].join(':'))

const ACCOUNT = {
  displayName: null,
  id: TESTING_ACCOUNT_ID,
  rowId: TESTING_ACCOUNT_ROW_ID,
  username: TESTING_ACCOUNT_USERNAME,
  __typename: 'Account',
}
const EVENT_CATEGORY = {
  id: getNodeId('EventCategory', '11111111-1111-1111-1111-111111111111'),
  name: 'music-and-entertainment',
  rowId: '11111111-1111-1111-1111-111111111111',
  __typename: 'EventCategory',
}
const EVENT_FORMAT = {
  id: getNodeId('EventFormat', '33333333-3333-3333-3333-333333333333'),
  name: 'meetup',
  rowId: '33333333-3333-3333-3333-333333333333',
  __typename: 'EventFormat',
}
const EVENT_CATEGORY_MAPPING_ID = getNodeId(
  'EventCategoryMapping',
  TESTING_EVENT_ROW_ID,
  EVENT_CATEGORY.rowId,
)
const EVENT_FORMAT_MAPPING_ID = getNodeId(
  'EventFormatMapping',
  TESTING_EVENT_ROW_ID,
  EVENT_FORMAT.rowId,
)
const EVENT = {
  createdBy: TESTING_ACCOUNT_ROW_ID,
  description: '<p>Meet the community behind vibetype.</p>',
  end: '2030-06-15T21:00:00+00:00',
  guestCountMaximum: 20,
  id: getNodeId('Event', TESTING_EVENT_ROW_ID),
  isArchived: false,
  isInPerson: false,
  isRemote: true,
  name: TESTING_EVENT_NAME,
  publishedAt: '2020-01-01T00:00:00.000Z',
  rowId: TESTING_EVENT_ROW_ID,
  slug: TESTING_EVENT_SLUG,
  start: '2030-06-15T18:00:00+00:00',
  url: 'https://example.com/community-meetup',
  visibility: 'public',
  __typename: 'Event',
}
const EVENT_UPLOADS = {
  nodes: [],
  __typename: 'EventUploadConnection',
}
const EVENT_LIST_ITEM = {
  eventCategoryMappingsByEventId: {
    nodes: [
      {
        eventCategoryByCategoryId: {
          id: EVENT_CATEGORY.id,
          name: EVENT_CATEGORY.name,
          __typename: 'EventCategory',
        },
        id: EVENT_CATEGORY_MAPPING_ID,
        __typename: 'EventCategoryMapping',
      },
    ],
    __typename: 'EventCategoryMappingConnection',
  },
  eventFavoritesByEventId: {
    nodes: [],
    __typename: 'EventFavoriteConnection',
  },
  eventFormatMappingsByEventId: {
    nodes: [
      {
        eventFormatByFormatId: {
          id: EVENT_FORMAT.id,
          name: EVENT_FORMAT.name,
          __typename: 'EventFormat',
        },
        id: EVENT_FORMAT_MAPPING_ID,
        __typename: 'EventFormatMapping',
      },
    ],
    __typename: 'EventFormatMappingConnection',
  },
  eventUploadsByEventId: EVENT_UPLOADS,
  guestsByEventId: {
    nodes: [],
    __typename: 'GuestConnection',
  },
  id: EVENT.id,
  name: EVENT.name,
  rowId: EVENT.rowId,
  slug: EVENT.slug,
  start: EVENT.start,
  __typename: 'Event',
}
const EVENT_RECOMMENDATIONS = [
  {
    name: 'Summer Rooftop Party',
    rowId: TESTING_EVENT_RECOMMENDATION_ROW_IDS[0],
    slug: 'summer-rooftop-party',
    start: '2030-07-20T19:00:00+00:00',
  },
  {
    name: 'Board Game Night',
    rowId: TESTING_EVENT_RECOMMENDATION_ROW_IDS[1],
    slug: 'board-game-night',
    start: '2030-08-10T17:30:00+00:00',
  },
].map((event) => ({
  ...EVENT_LIST_ITEM,
  accountByCreatedBy: ACCOUNT,
  addressByAddressId: null,
  eventCategoryMappingsByEventId: {
    ...EVENT_LIST_ITEM.eventCategoryMappingsByEventId,
    nodes: [
      {
        ...EVENT_LIST_ITEM.eventCategoryMappingsByEventId.nodes[0],
        id: getNodeId(
          'EventCategoryMapping',
          event.rowId,
          EVENT_CATEGORY.rowId,
        ),
      },
    ],
  },
  eventFormatMappingsByEventId: {
    ...EVENT_LIST_ITEM.eventFormatMappingsByEventId,
    nodes: [
      {
        ...EVENT_LIST_ITEM.eventFormatMappingsByEventId.nodes[0],
        id: getNodeId('EventFormatMapping', event.rowId, EVENT_FORMAT.rowId),
      },
    ],
  },
  id: getNodeId('Event', event.rowId),
  ...event,
}))
const EVENT_VIEW = {
  accountByCreatedBy: ACCOUNT,
  addressByAddressId: null,
  createdBy: EVENT.createdBy,
  description: EVENT.description,
  end: EVENT.end,
  eventCategoryMappingsByEventId: {
    nodes: [
      {
        categoryId: EVENT_CATEGORY.rowId,
        eventCategoryByCategoryId: {
          id: EVENT_CATEGORY.id,
          name: EVENT_CATEGORY.name,
          __typename: 'EventCategory',
        },
        id: EVENT_CATEGORY_MAPPING_ID,
        __typename: 'EventCategoryMapping',
      },
    ],
    __typename: 'EventCategoryMappingConnection',
  },
  eventFavoritesByEventId: {
    nodes: [],
    __typename: 'EventFavoriteConnection',
  },
  eventFormatMappingsByEventId: {
    nodes: [
      {
        eventFormatByFormatId: {
          id: EVENT_FORMAT.id,
          name: EVENT_FORMAT.name,
          __typename: 'EventFormat',
        },
        formatId: EVENT_FORMAT.rowId,
        id: EVENT_FORMAT_MAPPING_ID,
        __typename: 'EventFormatMapping',
      },
    ],
    __typename: 'EventFormatMappingConnection',
  },
  eventUploadsByEventId: EVENT_UPLOADS,
  guestsByEventId: {
    nodes: [],
    __typename: 'GuestConnection',
  },
  id: EVENT.id,
  isArchived: EVENT.isArchived,
  isInPerson: EVENT.isInPerson,
  isRemote: EVENT.isRemote,
  name: EVENT.name,
  publishedAt: EVENT.publishedAt,
  rowId: EVENT.rowId,
  slug: EVENT.slug,
  start: EVENT.start,
  url: EVENT.url,
  visibility: EVENT.visibility,
  __typename: 'Event',
}
const CONTACT = {
  firstName: 'Jane',
  id: getNodeId('Contact', TESTING_CONTACT_ROW_ID),
  lastName: 'Doe',
  nickname: null,
  rowId: TESTING_CONTACT_ROW_ID,
  __typename: 'Contact',
}
const GUEST_ID = getNodeId('Guest', TESTING_GUEST_ROW_ID)
const OWN_CONTACT_ID = getNodeId('Contact', TESTING_OWN_CONTACT_ROW_ID)

const getJwtPayloadFromCookie = async () => {
  const { getJwtFromCookie, verifyJwt } = await useJsonWebToken()
  return await verifyJwt<Jwt>(getJwtFromCookie()).catch(() => undefined)
}

const getJwtCreated = async () => {
  const privateKey = await importPKCS8(TESTING_JWT_PRIVATE_KEY, JWT_ALGORITHM)

  return await new SignJWT({
    attendances: [],
    guests: [],
    role: `${SITE_NAME}_account`,
    username: TESTING_ACCOUNT_USERNAME,
  })
    .setProtectedHeader({ alg: JWT_ALGORITHM })
    .setSubject(TESTING_ACCOUNT_ROW_ID)
    .setIssuer('postgraphile')
    .setAudience('postgraphile')
    .setJti(crypto.randomUUID())
    .setExpirationTime('1h')
    .sign(privateKey)
}

// postgraphile's `jwt_update` returns the caller's claims with a renewed expiry
const getJwtUpdated = async () => {
  const jwtPayload = await getJwtPayloadFromCookie()
  if (!jwtPayload) return null

  const privateKey = await importPKCS8(TESTING_JWT_PRIVATE_KEY, JWT_ALGORITHM)
  return await new SignJWT({ ...jwtPayload })
    .setProtectedHeader({ alg: JWT_ALGORITHM })
    .setExpirationTime('1h')
    .sign(privateKey)
}

const getJwtAdded = async (
  claims: Partial<Pick<Jwt, 'attendances' | 'guests'>>,
) => {
  const jwtPayload = await getJwtPayloadFromCookie()
  const privateKey = await importPKCS8(TESTING_JWT_PRIVATE_KEY, JWT_ALGORITHM)

  if (jwtPayload) {
    return await new SignJWT({
      ...jwtPayload,
      attendances: [...jwtPayload.attendances, ...(claims.attendances ?? [])],
      guests: [...jwtPayload.guests, ...(claims.guests ?? [])],
    })
      .setProtectedHeader({ alg: JWT_ALGORITHM })
      .sign(privateKey)
  }

  return await new SignJWT({
    attendances: claims.attendances ?? [],
    guests: claims.guests ?? [],
    role: `${SITE_NAME}_anonymous`,
  })
    .setProtectedHeader({ alg: JWT_ALGORITHM })
    .setIssuer('postgraphile')
    .setAudience('postgraphile')
    .setJti(crypto.randomUUID())
    .setExpirationTime('1h')
    .sign(privateKey)
}

// fixtures for the operations that pages need to render while testing, keyed by operation name
export const getTestingGraphqlResult = async ({
  operationName,
  variables,
}: {
  operationName: unknown
  variables?: unknown
}) => {
  const isTesting = useIsTesting({ isCookieEnabled: false })

  if (!isTesting) {
    throw createAppError({
      status: 403,
      statusText: 'This endpoint is only available in the testing environment.',
    })
  }

  // any other account or event does not exist, so that pages can be checked for missing data
  const { slug, username } = (variables ?? {}) as {
    slug?: unknown
    username?: unknown
  }

  if (username !== undefined && username !== TESTING_ACCOUNT_USERNAME)
    return { data: { accountByUsername: null } }

  // only operations that look an event up below `accountByUsername` take this
  // shape, others with a slug (e.g. the slug availability check) have their own
  if (
    username !== undefined &&
    slug !== undefined &&
    slug !== TESTING_EVENT_SLUG
  )
    return {
      data: {
        accountByUsername: {
          ...ACCOUNT,
          eventsByCreatedBy: { nodes: [], __typename: 'EventConnection' },
        },
      },
    }

  switch (operationName) {
    case 'Account':
      return {
        data: {
          accountByUsername: {
            achievementsByAccountId: {
              nodes: [],
              __typename: 'AchievementConnection',
            },
            description: TESTING_ACCOUNT_DESCRIPTION,
            displayName: ACCOUNT.displayName,
            eventsByCreatedBy: {
              nodes: [EVENT_LIST_ITEM],
              totalCount: 1,
              __typename: 'EventConnection',
            },
            id: ACCOUNT.id,
            imprintUrl: null,
            profilePictureByAccountId: null,
            rowId: ACCOUNT.rowId,
            __typename: 'Account',
          },
        },
      }
    case 'AccountBlockAccounts':
      return {
        data: {
          accountBlockAccounts: {
            nodes: [
              {
                id: 'f5a6b7c8-d9e0-4f1a-8b2c-3d4e5f6a7b8c',
                storageKey: null,
                username: 'e2e-blocked-account',
                __typename: 'AccountBlockAccountsRecord',
              },
            ],
            __typename: 'AccountBlockAccountsConnection',
          },
        },
      }
    case 'AccountByRowId':
      return {
        data: {
          accountByRowId: {
            ...ACCOUNT,
            profilePictureByAccountId: null,
          },
        },
      }
    // the testing account's username is taken, any other one is available (see above)
    case 'AccountByUsername':
      return {
        data: {
          accountByUsername: {
            id: ACCOUNT.id,
            rowId: ACCOUNT.rowId,
            __typename: 'Account',
          },
        },
      }
    case 'AccountEdit':
      return {
        data: {
          accountByUsername: {
            ...ACCOUNT,
            description: TESTING_ACCOUNT_DESCRIPTION,
            imprintUrl: null,
            profilePictureByAccountId: null,
          },
          allContacts: {
            nodes: [],
            __typename: 'ContactConnection',
          },
        },
      }
    case 'AccountPasswordResetRequest':
      return {
        data: {
          accountPasswordResetRequest: {
            clientMutationId: null,
            __typename: 'AccountPasswordResetRequestPayload',
          },
        },
      }
    case 'AccountProfilePicture':
      return {
        data: {
          accountByUsername: {
            id: ACCOUNT.id,
            profilePictureByAccountId: null,
            rowId: ACCOUNT.rowId,
            __typename: 'Account',
          },
        },
      }
    case 'AccountRegistration':
      return {
        data: {
          accountRegistration: {
            clientMutationId: null,
            __typename: 'AccountRegistrationPayload',
          },
        },
      }
    case 'AccountUploadQuotaBytes':
      return { data: { accountUploadQuotaBytes: 10485760 } }
    case 'AllContactsEmailAddresses':
      return {
        data: {
          allContacts: {
            nodes: [],
            pageInfo: {
              endCursor: null,
              hasNextPage: false,
              __typename: 'PageInfo',
            },
            __typename: 'ContactConnection',
          },
        },
      }
    case 'AllContacts':
      return {
        data: {
          allContacts: {
            nodes: [],
            pageInfo: {
              endCursor: null,
              hasNextPage: false,
              __typename: 'PageInfo',
            },
            totalCount: 0,
            __typename: 'ContactConnection',
          },
        },
      }
    case 'AllEventCategoriesFormEvent':
      return {
        data: {
          allEventCategories: {
            nodes: [
              EVENT_CATEGORY,
              {
                id: getNodeId(
                  'EventCategory',
                  '22222222-2222-2222-2222-222222222222',
                ),
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
              EVENT_FORMAT,
              {
                id: getNodeId(
                  'EventFormat',
                  '44444444-4444-4444-4444-444444444444',
                ),
                name: 'workshop',
                rowId: '44444444-4444-4444-4444-444444444444',
                __typename: 'EventFormat',
              },
            ],
            __typename: 'EventFormatConnection',
          },
        },
      }
    case 'AllGuests':
      return {
        data: {
          allGuests: {
            nodes: [
              {
                contactByContactId: {
                  ...CONTACT,
                  accountByAccountId: null,
                  accountByCreatedBy: ACCOUNT,
                  accountId: null,
                  createdBy: ACCOUNT.rowId,
                  emailAddress: 'jane.doe@example.com',
                  emailAddressHash: null,
                  note: null,
                  phoneNumber: null,
                  url: null,
                },
                contactId: CONTACT.rowId,
                feedback: 'accepted',
                id: GUEST_ID,
                rowId: TESTING_GUEST_ROW_ID,
                __typename: 'Guest',
              },
            ],
            pageInfo: {
              endCursor: null,
              hasNextPage: false,
              __typename: 'PageInfo',
            },
            totalCount: 1,
            __typename: 'GuestConnection',
          },
        },
      }
    case 'AllLegalTerms':
      return {
        data: {
          allLegalTerms: {
            nodes: [
              {
                id: getNodeId(
                  'LegalTerm',
                  '858ab35b-0433-4698-902f-ff42a25ec94a',
                ),
                rowId: '858ab35b-0433-4698-902f-ff42a25ec94a',
                term: '# Terms of Use',
                __typename: 'LegalTerm',
              },
            ],
            __typename: 'LegalTermConnection',
          },
        },
      }
    case 'AllPreferenceEventLocations':
      return {
        data: {
          allPreferenceEventLocations: {
            nodes: [],
            __typename: 'PreferenceEventLocationConnection',
          },
        },
      }
    case 'AllUploads':
      return {
        data: {
          allUploads: {
            nodes: [],
            pageInfo: {
              endCursor: null,
              hasNextPage: false,
              __typename: 'PageInfo',
            },
            totalCount: 0,
            __typename: 'UploadConnection',
          },
        },
      }
    case 'Attendance':
      return {
        data: {
          attendanceByRowId: {
            checkedOut: false,
            contactByContactId: {
              ...CONTACT,
              accountByAccountId: null,
              language: 'en',
            },
            createdAt: '2025-01-01T00:00:00.000Z',
            guestByGuestId: {
              contactByContactId: {
                accountId: null,
                id: CONTACT.id,
                __typename: 'Contact',
              },
              id: GUEST_ID,
              rowId: TESTING_GUEST_ROW_ID,
              __typename: 'Guest',
            },
            id: getNodeId('Attendance', TESTING_ATTENDANCE_ROW_ID),
            rowId: TESTING_ATTENDANCE_ROW_ID,
            tagSerialNumber: null,
            updatedAt: null,
            __typename: 'Attendance',
          },
          eventByAttendanceId: {
            accountByCreatedBy: {
              id: ACCOUNT.id,
              username: ACCOUNT.username,
              __typename: 'Account',
            },
            createdBy: ACCOUNT.rowId,
            eventAppsByEventId: {
              nodes: [],
              __typename: 'EventAppConnection',
            },
            id: EVENT.id,
            name: EVENT.name,
            rowId: EVENT.rowId,
            slug: EVENT.slug,
            __typename: 'Event',
          },
        },
      }
    case 'ContactByRowId':
      return {
        data: {
          contactByRowId: {
            ...CONTACT,
            accountByAccountId: null,
            accountByCreatedBy: {
              id: ACCOUNT.id,
              rowId: ACCOUNT.rowId,
              username: ACCOUNT.username,
              __typename: 'Account',
            },
            accountId: null,
            createdBy: ACCOUNT.rowId,
            emailAddress: null,
            emailAddressHash: null,
            note: null,
            phoneNumber: null,
            url: null,
          },
        },
      }
    case 'DashboardEventRecommendations':
      return {
        data: {
          eventByRowId:
            EVENT_RECOMMENDATIONS.find(
              (event) => event.rowId === (variables as { id?: unknown })?.id,
            ) ?? null,
        },
      }
    case 'DashboardEventUpcoming':
      return {
        data: {
          allEvents: {
            nodes: [
              {
                accountByCreatedBy: ACCOUNT,
                eventCategoryMappingsByEventId:
                  EVENT_LIST_ITEM.eventCategoryMappingsByEventId,
                eventFormatMappingsByEventId:
                  EVENT_LIST_ITEM.eventFormatMappingsByEventId,
                eventUploadsByEventId: EVENT_UPLOADS,
                id: EVENT.id,
                name: EVENT.name,
                rowId: EVENT.rowId,
                slug: EVENT.slug,
                start: EVENT.start,
                __typename: 'Event',
              },
            ],
            __typename: 'EventConnection',
          },
        },
      }
    case 'DashboardPreferenceCount':
      return {
        data: {
          allPreferenceEventCategories: {
            totalCount: 1,
            __typename: 'PreferenceEventCategoryConnection',
          },
          allPreferenceEventFormats: {
            totalCount: 1,
            __typename: 'PreferenceEventFormatConnection',
          },
          allPreferenceEventLocations: {
            totalCount: 1,
            __typename: 'PreferenceEventLocationConnection',
          },
          allPreferenceEventSizes: {
            totalCount: 1,
            __typename: 'PreferenceEventSizeConnection',
          },
        },
      }
    case 'Event':
      return {
        data: {
          accountByUsername: {
            ...ACCOUNT,
            eventsByCreatedBy: {
              nodes: [EVENT_VIEW],
              __typename: 'EventConnection',
            },
          },
        },
      }
    case 'EventAttendance':
      return {
        data: {
          accountByUsername: {
            eventsByCreatedBy: {
              nodes: [
                {
                  id: EVENT.id,
                  name: EVENT.name,
                  rowId: EVENT.rowId,
                  slug: EVENT.slug,
                  __typename: 'Event',
                },
              ],
              __typename: 'EventConnection',
            },
            id: ACCOUNT.id,
            __typename: 'Account',
          },
        },
      }
    case 'EventByCreatedByAndSlug':
      return {
        data: {
          eventByCreatedByAndSlug:
            slug === TESTING_EVENT_SLUG
              ? { id: EVENT.id, __typename: 'Event' }
              : null,
        },
      }
    case 'EventEdit':
      return {
        data: {
          accountByUsername: {
            ...ACCOUNT,
            eventsByCreatedBy: {
              nodes: [
                {
                  addressByAddressId: null,
                  createdBy: EVENT.createdBy,
                  description: EVENT.description,
                  end: EVENT.end,
                  eventCategoryMappingsByEventId: {
                    nodes: [
                      {
                        categoryId: EVENT_CATEGORY.rowId,
                        id: EVENT_CATEGORY_MAPPING_ID,
                        __typename: 'EventCategoryMapping',
                      },
                    ],
                    __typename: 'EventCategoryMappingConnection',
                  },
                  eventFormatMappingsByEventId: {
                    nodes: [
                      {
                        formatId: EVENT_FORMAT.rowId,
                        id: EVENT_FORMAT_MAPPING_ID,
                        __typename: 'EventFormatMapping',
                      },
                    ],
                    __typename: 'EventFormatMappingConnection',
                  },
                  eventUploadsByEventId: EVENT_UPLOADS,
                  guestCountMaximum: EVENT.guestCountMaximum,
                  id: EVENT.id,
                  isArchived: EVENT.isArchived,
                  isInPerson: EVENT.isInPerson,
                  isRemote: EVENT.isRemote,
                  name: EVENT.name,
                  publishedAt: EVENT.publishedAt,
                  rowId: EVENT.rowId,
                  slug: EVENT.slug,
                  start: EVENT.start,
                  url: EVENT.url,
                  visibility: EVENT.visibility,
                  __typename: 'Event',
                },
              ],
              __typename: 'EventConnection',
            },
          },
        },
      }
    case 'EventGuests':
      return {
        data: {
          accountByUsername: {
            eventsByCreatedBy: {
              nodes: [
                {
                  accountByCreatedBy: ACCOUNT,
                  createdBy: EVENT.createdBy,
                  guestCountMaximum: EVENT.guestCountMaximum,
                  guestsByEventId: {
                    nodes: [
                      {
                        contactByContactId: {
                          accountId: null,
                          id: CONTACT.id,
                          rowId: CONTACT.rowId,
                          __typename: 'Contact',
                        },
                        id: GUEST_ID,
                        rowId: TESTING_GUEST_ROW_ID,
                        __typename: 'Guest',
                      },
                    ],
                    pageInfo: {
                      endCursor: null,
                      hasNextPage: false,
                      __typename: 'PageInfo',
                    },
                    totalCount: 1,
                    __typename: 'GuestConnection',
                  },
                  id: EVENT.id,
                  name: EVENT.name,
                  publishedAt: EVENT.publishedAt,
                  rowId: EVENT.rowId,
                  slug: EVENT.slug,
                  __typename: 'Event',
                },
              ],
              __typename: 'EventConnection',
            },
            id: ACCOUNT.id,
            rowId: ACCOUNT.rowId,
            __typename: 'Account',
          },
        },
      }
    case 'EventListAccount':
      return {
        data: {
          accountByUsername: {
            eventsByCreatedBy: {
              nodes: [EVENT_LIST_ITEM],
              pageInfo: {
                endCursor: null,
                hasNextPage: false,
                __typename: 'PageInfo',
              },
              totalCount: 1,
              __typename: 'EventConnection',
            },
            id: ACCOUNT.id,
            rowId: ACCOUNT.rowId,
            __typename: 'Account',
          },
        },
      }
    case 'GuestEvent':
      return {
        data: {
          guestByRowId: {
            contactByContactId: {
              ...CONTACT,
              accountByAccountId: null,
              createdBy: ACCOUNT.rowId,
            },
            eventByEventId: EVENT_VIEW,
            feedback: null,
            id: GUEST_ID,
            rowId: TESTING_GUEST_ROW_ID,
            __typename: 'Guest',
          },
        },
      }
    // like postgraphile's `jwt_create`, wrong credentials yield no token rather than an error
    case 'JwtCreate': {
      const { input } = z
        .object({
          input: z.object({ password: z.string(), username: z.string() }),
        })
        .parse(variables)
      const isAuthenticated =
        input.username === TESTING_ACCOUNT_USERNAME &&
        input.password === TESTING_ACCOUNT_PASSWORD

      return {
        data: {
          jwtCreate: {
            clientMutationId: null,
            result: isAuthenticated ? await getJwtCreated() : null,
            __typename: 'JwtCreatePayload',
          },
        },
      }
    }
    // every server render with a jwt cookie refreshes it through `useJwtInitialize`
    case 'JwtUpdate':
      return {
        data: {
          jwtUpdate: {
            clientMutationId: null,
            result: await getJwtUpdated(),
            __typename: 'JwtUpdatePayload',
          },
        },
      }
    case 'JwtUpdateAttendanceAdd': {
      const { input } = z
        .object({ input: z.object({ attendanceId: z.string() }) })
        .parse(variables)

      return {
        data: {
          jwtUpdateAttendanceAdd: {
            result: await getJwtAdded({ attendances: [input.attendanceId] }),
            __typename: 'JwtUpdateAttendanceAddPayload',
          },
        },
      }
    }
    // the guest page signs in as the guest while rendering on the server
    case 'JwtUpdateGuestAddGuest': {
      const { input } = z
        .object({ input: z.object({ guestId: z.string() }) })
        .parse(variables)

      return {
        data: {
          jwtUpdateGuestAdd: {
            result: await getJwtAdded({ guests: [input.guestId] }),
            __typename: 'JwtUpdateGuestAddPayload',
          },
        },
      }
    }
    // without a language the session keeps the locale of the visited url
    case 'OwnContact':
      return {
        data: {
          contactByCreatedByAndAccountId: {
            id: OWN_CONTACT_ID,
            language: null,
            rowId: TESTING_OWN_CONTACT_ROW_ID,
            __typename: 'Contact',
          },
        },
      }
    // echoes the patch like the real api would
    case 'UpdateAccountByRowId': {
      const { input } = z
        .object({
          input: z.object({
            accountPatch: z.object({
              description: z.string().nullish(),
              displayName: z.string().nullish(),
              imprintUrl: z.string().nullish(),
            }),
          }),
        })
        .parse(variables)

      return {
        data: {
          updateAccountByRowId: {
            account: {
              description:
                'description' in input.accountPatch
                  ? input.accountPatch.description
                  : TESTING_ACCOUNT_DESCRIPTION,
              displayName:
                'displayName' in input.accountPatch
                  ? input.accountPatch.displayName
                  : ACCOUNT.displayName,
              id: ACCOUNT.id,
              imprintUrl: input.accountPatch.imprintUrl ?? null,
              rowId: ACCOUNT.rowId,
              __typename: 'Account',
            },
            __typename: 'UpdateAccountPayload',
          },
        },
      }
    }
    // echoes the patch like the real api would
    case 'UpdateGuestByRowId': {
      const { input } = z
        .object({
          input: z.object({
            guestPatch: z.object({ feedback: z.string().nullable() }),
          }),
        })
        .parse(variables)

      return {
        data: {
          updateGuestByRowId: {
            guest: {
              feedback: input.guestPatch.feedback,
              id: GUEST_ID,
              rowId: TESTING_GUEST_ROW_ID,
              __typename: 'Guest',
            },
            __typename: 'UpdateGuestPayload',
          },
        },
      }
    }
    // echoes the patch like the real api would
    case 'UpdateOwnContactLanguage': {
      const { input } = z
        .object({
          input: z.object({
            contactPatch: z.object({ language: z.enum(['de', 'en']) }),
            rowId: z.literal(TESTING_OWN_CONTACT_ROW_ID),
          }),
        })
        .parse(variables)

      return {
        data: {
          updateContactByRowId: {
            contact: {
              id: OWN_CONTACT_ID,
              language: input.contactPatch.language,
              rowId: TESTING_OWN_CONTACT_ROW_ID,
              __typename: 'Contact',
            },
            __typename: 'UpdateContactPayload',
          },
        },
      }
    }
    case 'updateEventByRowId':
      return {
        data: {
          updateEventByRowId: {
            event: { id: EVENT.id, __typename: 'Event' },
            __typename: 'UpdateEventPayload',
          },
        },
      }
    default:
      return { data: {} }
  }
}
