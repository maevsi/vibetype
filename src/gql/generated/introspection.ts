import type { IntrospectionQuery } from 'graphql'
export default {
  __schema: {
    queryType: {
      name: 'Query',
      kind: 'OBJECT',
    },
    mutationType: {
      name: 'Mutation',
      kind: 'OBJECT',
    },
    subscriptionType: null,
    types: [
      {
        kind: 'OBJECT',
        name: 'Account',
        fields: [
          {
            name: 'accountBlocksByBlockedAccountId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'AccountBlockConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'accountBlocksByCreatedBy',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'AccountBlockConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'accountSocialNetworksByAccountId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'AccountSocialNetworkConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'achievementsByAccountId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'AchievementConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'addressesByCreatedBy',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'AddressConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'addressesByUpdatedBy',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'AddressConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'appsByCreatedBy',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'AppConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'attendancesByUpdatedBy',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'AttendanceConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'contactsByAccountId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'ContactConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'contactsByCreatedBy',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'ContactConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'description',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'devicesByCreatedBy',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'DeviceConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'devicesByUpdatedBy',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'DeviceConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'eventAppsByCreatedBy',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'EventAppConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'eventFavoritesByCreatedBy',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'EventFavoriteConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'eventRecommendationsByAccountId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'EventRecommendationConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'eventsByCreatedBy',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'EventConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'friendshipsByAAccountId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'FriendshipConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'friendshipsByBAccountId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'FriendshipConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'friendshipsByCreatedBy',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'FriendshipConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'friendshipsByUpdatedBy',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'FriendshipConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'guestsByUpdatedBy',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'GuestConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'imprintUrl',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'legalTermAcceptancesByAccountId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'LegalTermAcceptanceConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'preferenceEventCategoriesByAccountId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'PreferenceEventCategoryConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'preferenceEventFormatsByAccountId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'PreferenceEventFormatConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'preferenceEventLocationsByCreatedBy',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'PreferenceEventLocationConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'preferenceEventSizesByAccountId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'PreferenceEventSizeConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'profilePictureByAccountId',
            type: {
              kind: 'OBJECT',
              name: 'ProfilePicture',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'reportsByCreatedBy',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'ReportConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'reportsByTargetAccountId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'ReportConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'rowId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'uploadsByCreatedBy',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'UploadConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'username',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [
          {
            kind: 'INTERFACE',
            name: 'Node',
          },
        ],
      },
      {
        kind: 'OBJECT',
        name: 'AccountBlock',
        fields: [
          {
            name: 'accountByBlockedAccountId',
            type: {
              kind: 'OBJECT',
              name: 'Account',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'accountByCreatedBy',
            type: {
              kind: 'OBJECT',
              name: 'Account',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'blockedAccountId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'createdAt',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'createdBy',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'rowId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [
          {
            kind: 'INTERFACE',
            name: 'Node',
          },
        ],
      },
      {
        kind: 'OBJECT',
        name: 'AccountBlockAccountsConnection',
        fields: [
          {
            name: 'edges',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'AccountBlockAccountsEdge',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'nodes',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'AccountBlockAccountsRecord',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'pageInfo',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'PageInfo',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'totalCount',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'AccountBlockAccountsEdge',
        fields: [
          {
            name: 'cursor',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'node',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'AccountBlockAccountsRecord',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'AccountBlockAccountsRecord',
        fields: [
          {
            name: 'id',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'storageKey',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'username',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'AccountBlockConnection',
        fields: [
          {
            name: 'edges',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'AccountBlockEdge',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'nodes',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'AccountBlock',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'pageInfo',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'PageInfo',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'totalCount',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'AccountBlockEdge',
        fields: [
          {
            name: 'cursor',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'node',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'AccountBlock',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'AccountConnection',
        fields: [
          {
            name: 'edges',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'AccountEdge',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'nodes',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'Account',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'pageInfo',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'PageInfo',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'totalCount',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'AccountDeletePayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'AccountEdge',
        fields: [
          {
            name: 'cursor',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'node',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'Account',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'AccountEmailAddressVerificationPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'AccountPasswordChangePayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'AccountPasswordResetPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'AccountPasswordResetRequestPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'AccountRegistrationPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'AccountRegistrationRefreshPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'AccountSocialNetwork',
        fields: [
          {
            name: 'accountByAccountId',
            type: {
              kind: 'OBJECT',
              name: 'Account',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'accountId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'socialNetwork',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'socialNetworkUsername',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [
          {
            kind: 'INTERFACE',
            name: 'Node',
          },
        ],
      },
      {
        kind: 'OBJECT',
        name: 'AccountSocialNetworkConnection',
        fields: [
          {
            name: 'edges',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'AccountSocialNetworkEdge',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'nodes',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'AccountSocialNetwork',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'pageInfo',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'PageInfo',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'totalCount',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'AccountSocialNetworkEdge',
        fields: [
          {
            name: 'cursor',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'node',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'AccountSocialNetwork',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'Achievement',
        fields: [
          {
            name: 'accountByAccountId',
            type: {
              kind: 'OBJECT',
              name: 'Account',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'accountId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'achievement',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'level',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'rowId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [
          {
            kind: 'INTERFACE',
            name: 'Node',
          },
        ],
      },
      {
        kind: 'OBJECT',
        name: 'AchievementConnection',
        fields: [
          {
            name: 'edges',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'AchievementEdge',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'nodes',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'Achievement',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'pageInfo',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'PageInfo',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'totalCount',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'AchievementEdge',
        fields: [
          {
            name: 'cursor',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'node',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'Achievement',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'AchievementUnlockPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'result',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'Address',
        fields: [
          {
            name: 'accountByCreatedBy',
            type: {
              kind: 'OBJECT',
              name: 'Account',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'accountByUpdatedBy',
            type: {
              kind: 'OBJECT',
              name: 'Account',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'city',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'contactsByAddressId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'ContactConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'country',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'createdAt',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'createdBy',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'eventsByAddressId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'EventConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'line1',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'line2',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'location',
            type: {
              kind: 'OBJECT',
              name: 'GeographyPoint',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'name',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'postalCode',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'region',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'rowId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'updatedAt',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'updatedBy',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
        ],
        interfaces: [
          {
            kind: 'INTERFACE',
            name: 'Node',
          },
        ],
      },
      {
        kind: 'OBJECT',
        name: 'AddressConnection',
        fields: [
          {
            name: 'edges',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'AddressEdge',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'nodes',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'Address',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'pageInfo',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'PageInfo',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'totalCount',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'AddressEdge',
        fields: [
          {
            name: 'cursor',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'node',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'Address',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'App',
        fields: [
          {
            name: 'accountByCreatedBy',
            type: {
              kind: 'OBJECT',
              name: 'Account',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'createdAt',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'createdBy',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'eventAppsByAppId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'EventAppConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'iconSvg',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'name',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'rowId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'url',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'urlAttendance',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [
          {
            kind: 'INTERFACE',
            name: 'Node',
          },
        ],
      },
      {
        kind: 'OBJECT',
        name: 'AppConnection',
        fields: [
          {
            name: 'edges',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'AppEdge',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'nodes',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'App',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'pageInfo',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'PageInfo',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'totalCount',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'AppEdge',
        fields: [
          {
            name: 'cursor',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'node',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'App',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'Attendance',
        fields: [
          {
            name: 'accountByUpdatedBy',
            type: {
              kind: 'OBJECT',
              name: 'Account',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'checkedOut',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'contactByContactId',
            type: {
              kind: 'OBJECT',
              name: 'Contact',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'contactId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'createdAt',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'guestByGuestId',
            type: {
              kind: 'OBJECT',
              name: 'Guest',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'guestId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'rowId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'updatedAt',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'updatedBy',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
        ],
        interfaces: [
          {
            kind: 'INTERFACE',
            name: 'Node',
          },
        ],
      },
      {
        kind: 'OBJECT',
        name: 'AttendanceConnection',
        fields: [
          {
            name: 'edges',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'AttendanceEdge',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'nodes',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'Attendance',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'pageInfo',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'PageInfo',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'totalCount',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'AttendanceEdge',
        fields: [
          {
            name: 'cursor',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'node',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'Attendance',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'Contact',
        fields: [
          {
            name: 'accountByAccountId',
            type: {
              kind: 'OBJECT',
              name: 'Account',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'accountByCreatedBy',
            type: {
              kind: 'OBJECT',
              name: 'Account',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'accountId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'addressByAddressId',
            type: {
              kind: 'OBJECT',
              name: 'Address',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'addressId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'attendancesByContactId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'AttendanceConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'createdAt',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'createdBy',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'emailAddress',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'emailAddressHash',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'firstName',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'guestsByContactId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'GuestConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'language',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'lastName',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'nickname',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'note',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'phoneNumber',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'rowId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'timeZone',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'url',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
        ],
        interfaces: [
          {
            kind: 'INTERFACE',
            name: 'Node',
          },
        ],
      },
      {
        kind: 'OBJECT',
        name: 'ContactConnection',
        fields: [
          {
            name: 'edges',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'ContactEdge',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'nodes',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'Contact',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'pageInfo',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'PageInfo',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'totalCount',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'ContactEdge',
        fields: [
          {
            name: 'cursor',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'node',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'Contact',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'CreateAccountBlockPayload',
        fields: [
          {
            name: 'accountBlock',
            type: {
              kind: 'OBJECT',
              name: 'AccountBlock',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'accountBlockEdge',
            type: {
              kind: 'OBJECT',
              name: 'AccountBlockEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'CreateAccountSocialNetworkPayload',
        fields: [
          {
            name: 'accountSocialNetwork',
            type: {
              kind: 'OBJECT',
              name: 'AccountSocialNetwork',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'accountSocialNetworkEdge',
            type: {
              kind: 'OBJECT',
              name: 'AccountSocialNetworkEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'CreateAddressPayload',
        fields: [
          {
            name: 'address',
            type: {
              kind: 'OBJECT',
              name: 'Address',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'addressEdge',
            type: {
              kind: 'OBJECT',
              name: 'AddressEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'CreateAttendancePayload',
        fields: [
          {
            name: 'attendance',
            type: {
              kind: 'OBJECT',
              name: 'Attendance',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'attendanceEdge',
            type: {
              kind: 'OBJECT',
              name: 'AttendanceEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'CreateContactPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'contact',
            type: {
              kind: 'OBJECT',
              name: 'Contact',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'contactEdge',
            type: {
              kind: 'OBJECT',
              name: 'ContactEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'CreateDevicePayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'device',
            type: {
              kind: 'OBJECT',
              name: 'Device',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'deviceEdge',
            type: {
              kind: 'OBJECT',
              name: 'DeviceEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'CreateEventCategoryMappingPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'eventCategoryMapping',
            type: {
              kind: 'OBJECT',
              name: 'EventCategoryMapping',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'eventCategoryMappingEdge',
            type: {
              kind: 'OBJECT',
              name: 'EventCategoryMappingEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'CreateEventFavoritePayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'eventFavorite',
            type: {
              kind: 'OBJECT',
              name: 'EventFavorite',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'eventFavoriteEdge',
            type: {
              kind: 'OBJECT',
              name: 'EventFavoriteEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'CreateEventFormatMappingPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'eventFormatMapping',
            type: {
              kind: 'OBJECT',
              name: 'EventFormatMapping',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'eventFormatMappingEdge',
            type: {
              kind: 'OBJECT',
              name: 'EventFormatMappingEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'CreateEventPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'event',
            type: {
              kind: 'OBJECT',
              name: 'Event',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'eventEdge',
            type: {
              kind: 'OBJECT',
              name: 'EventEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'CreateEventUploadPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'eventUpload',
            type: {
              kind: 'OBJECT',
              name: 'EventUpload',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'eventUploadEdge',
            type: {
              kind: 'OBJECT',
              name: 'EventUploadEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'CreateFriendshipPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'friendship',
            type: {
              kind: 'OBJECT',
              name: 'Friendship',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'friendshipEdge',
            type: {
              kind: 'OBJECT',
              name: 'FriendshipEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'CreateGuestPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'guest',
            type: {
              kind: 'OBJECT',
              name: 'Guest',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'guestEdge',
            type: {
              kind: 'OBJECT',
              name: 'GuestEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'CreateGuestsPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'result',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'OBJECT',
                  name: 'Guest',
                  ofType: null,
                },
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'CreateLegalTermAcceptancePayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'legalTermAcceptance',
            type: {
              kind: 'OBJECT',
              name: 'LegalTermAcceptance',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'legalTermAcceptanceEdge',
            type: {
              kind: 'OBJECT',
              name: 'LegalTermAcceptanceEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'CreatePreferenceEventCategoryPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'preferenceEventCategory',
            type: {
              kind: 'OBJECT',
              name: 'PreferenceEventCategory',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'preferenceEventCategoryEdge',
            type: {
              kind: 'OBJECT',
              name: 'PreferenceEventCategoryEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'CreatePreferenceEventFormatPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'preferenceEventFormat',
            type: {
              kind: 'OBJECT',
              name: 'PreferenceEventFormat',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'preferenceEventFormatEdge',
            type: {
              kind: 'OBJECT',
              name: 'PreferenceEventFormatEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'CreatePreferenceEventLocationPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'preferenceEventLocation',
            type: {
              kind: 'OBJECT',
              name: 'PreferenceEventLocation',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'preferenceEventLocationEdge',
            type: {
              kind: 'OBJECT',
              name: 'PreferenceEventLocationEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'CreatePreferenceEventSizePayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'preferenceEventSize',
            type: {
              kind: 'OBJECT',
              name: 'PreferenceEventSize',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'preferenceEventSizeEdge',
            type: {
              kind: 'OBJECT',
              name: 'PreferenceEventSizeEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'CreateProfilePicturePayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'profilePicture',
            type: {
              kind: 'OBJECT',
              name: 'ProfilePicture',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'profilePictureEdge',
            type: {
              kind: 'OBJECT',
              name: 'ProfilePictureEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'CreateReportPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'report',
            type: {
              kind: 'OBJECT',
              name: 'Report',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'reportEdge',
            type: {
              kind: 'OBJECT',
              name: 'ReportEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
            ],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'CreateUploadPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'upload',
            type: {
              kind: 'OBJECT',
              name: 'Upload',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'uploadEdge',
            type: {
              kind: 'OBJECT',
              name: 'UploadEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
            ],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'DeleteAccountBlockPayload',
        fields: [
          {
            name: 'accountBlock',
            type: {
              kind: 'OBJECT',
              name: 'AccountBlock',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'accountBlockEdge',
            type: {
              kind: 'OBJECT',
              name: 'AccountBlockEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'deletedAccountBlockId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'DeleteAccountSocialNetworkPayload',
        fields: [
          {
            name: 'accountSocialNetwork',
            type: {
              kind: 'OBJECT',
              name: 'AccountSocialNetwork',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'accountSocialNetworkEdge',
            type: {
              kind: 'OBJECT',
              name: 'AccountSocialNetworkEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'deletedAccountSocialNetworkId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'DeleteAddressPayload',
        fields: [
          {
            name: 'address',
            type: {
              kind: 'OBJECT',
              name: 'Address',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'addressEdge',
            type: {
              kind: 'OBJECT',
              name: 'AddressEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'deletedAddressId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'DeleteContactPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'contact',
            type: {
              kind: 'OBJECT',
              name: 'Contact',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'contactEdge',
            type: {
              kind: 'OBJECT',
              name: 'ContactEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'deletedContactId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'DeleteDevicePayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'deletedDeviceId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'device',
            type: {
              kind: 'OBJECT',
              name: 'Device',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'deviceEdge',
            type: {
              kind: 'OBJECT',
              name: 'DeviceEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'DeleteEventCategoryMappingPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'deletedEventCategoryMappingId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'eventCategoryMapping',
            type: {
              kind: 'OBJECT',
              name: 'EventCategoryMapping',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'eventCategoryMappingEdge',
            type: {
              kind: 'OBJECT',
              name: 'EventCategoryMappingEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'DeleteEventFavoritePayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'deletedEventFavoriteId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'eventFavorite',
            type: {
              kind: 'OBJECT',
              name: 'EventFavorite',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'eventFavoriteEdge',
            type: {
              kind: 'OBJECT',
              name: 'EventFavoriteEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'DeleteEventFormatMappingPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'deletedEventFormatMappingId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'eventFormatMapping',
            type: {
              kind: 'OBJECT',
              name: 'EventFormatMapping',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'eventFormatMappingEdge',
            type: {
              kind: 'OBJECT',
              name: 'EventFormatMappingEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'DeleteEventPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'deletedEventId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'event',
            type: {
              kind: 'OBJECT',
              name: 'Event',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'eventEdge',
            type: {
              kind: 'OBJECT',
              name: 'EventEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'DeleteEventUploadPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'deletedEventUploadId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'eventUpload',
            type: {
              kind: 'OBJECT',
              name: 'EventUpload',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'eventUploadEdge',
            type: {
              kind: 'OBJECT',
              name: 'EventUploadEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'DeleteFriendshipPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'deletedFriendshipId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'friendship',
            type: {
              kind: 'OBJECT',
              name: 'Friendship',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'friendshipEdge',
            type: {
              kind: 'OBJECT',
              name: 'FriendshipEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'DeleteGuestPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'deletedGuestId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'guest',
            type: {
              kind: 'OBJECT',
              name: 'Guest',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'guestEdge',
            type: {
              kind: 'OBJECT',
              name: 'GuestEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'DeletePreferenceEventCategoryPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'deletedPreferenceEventCategoryId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'preferenceEventCategory',
            type: {
              kind: 'OBJECT',
              name: 'PreferenceEventCategory',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'preferenceEventCategoryEdge',
            type: {
              kind: 'OBJECT',
              name: 'PreferenceEventCategoryEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'DeletePreferenceEventFormatPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'deletedPreferenceEventFormatId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'preferenceEventFormat',
            type: {
              kind: 'OBJECT',
              name: 'PreferenceEventFormat',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'preferenceEventFormatEdge',
            type: {
              kind: 'OBJECT',
              name: 'PreferenceEventFormatEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'DeletePreferenceEventLocationPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'deletedPreferenceEventLocationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'preferenceEventLocation',
            type: {
              kind: 'OBJECT',
              name: 'PreferenceEventLocation',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'preferenceEventLocationEdge',
            type: {
              kind: 'OBJECT',
              name: 'PreferenceEventLocationEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'DeletePreferenceEventSizePayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'deletedPreferenceEventSizeId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'preferenceEventSize',
            type: {
              kind: 'OBJECT',
              name: 'PreferenceEventSize',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'preferenceEventSizeEdge',
            type: {
              kind: 'OBJECT',
              name: 'PreferenceEventSizeEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'DeleteProfilePicturePayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'deletedProfilePictureId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'profilePicture',
            type: {
              kind: 'OBJECT',
              name: 'ProfilePicture',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'profilePictureEdge',
            type: {
              kind: 'OBJECT',
              name: 'ProfilePictureEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'DeleteUploadPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'deletedUploadId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'upload',
            type: {
              kind: 'OBJECT',
              name: 'Upload',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'uploadEdge',
            type: {
              kind: 'OBJECT',
              name: 'UploadEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
            ],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'Device',
        fields: [
          {
            name: 'accountByCreatedBy',
            type: {
              kind: 'OBJECT',
              name: 'Account',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'accountByUpdatedBy',
            type: {
              kind: 'OBJECT',
              name: 'Account',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'createdAt',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'createdBy',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'fcmToken',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'rowId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'updatedAt',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'updatedBy',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
        ],
        interfaces: [
          {
            kind: 'INTERFACE',
            name: 'Node',
          },
        ],
      },
      {
        kind: 'OBJECT',
        name: 'DeviceConnection',
        fields: [
          {
            name: 'edges',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'DeviceEdge',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'nodes',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'Device',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'pageInfo',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'PageInfo',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'totalCount',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'DeviceEdge',
        fields: [
          {
            name: 'cursor',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'node',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'Device',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'Event',
        fields: [
          {
            name: 'accountByCreatedBy',
            type: {
              kind: 'OBJECT',
              name: 'Account',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'addressByAddressId',
            type: {
              kind: 'OBJECT',
              name: 'Address',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'addressId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'createdAt',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'createdBy',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'description',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'end',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'eventAppsByEventId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'EventAppConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'eventCategoryMappingsByEventId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'EventCategoryMappingConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'eventFavoritesByEventId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'EventFavoriteConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'eventFormatMappingsByEventId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'EventFormatMappingConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'eventRecommendationsByEventId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'EventRecommendationConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'eventUploadsByEventId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'EventUploadConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'guestCountMaximum',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'guestsByEventId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'GuestConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'isArchived',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'isInPerson',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'isRemote',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'language',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'name',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'reportsByTargetEventId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'ReportConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'rowId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'slug',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'start',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'url',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'visibility',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [
          {
            kind: 'INTERFACE',
            name: 'Node',
          },
        ],
      },
      {
        kind: 'OBJECT',
        name: 'EventApp',
        fields: [
          {
            name: 'accountByCreatedBy',
            type: {
              kind: 'OBJECT',
              name: 'Account',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'appByAppId',
            type: {
              kind: 'OBJECT',
              name: 'App',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'appId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'createdAt',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'createdBy',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'eventByEventId',
            type: {
              kind: 'OBJECT',
              name: 'Event',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'eventId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'rowId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [
          {
            kind: 'INTERFACE',
            name: 'Node',
          },
        ],
      },
      {
        kind: 'OBJECT',
        name: 'EventAppConnection',
        fields: [
          {
            name: 'edges',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'EventAppEdge',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'nodes',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'EventApp',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'pageInfo',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'PageInfo',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'totalCount',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'EventAppEdge',
        fields: [
          {
            name: 'cursor',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'node',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'EventApp',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'EventCategory',
        fields: [
          {
            name: 'eventCategoryMappingsByCategoryId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'EventCategoryMappingConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'name',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'preferenceEventCategoriesByCategoryId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'PreferenceEventCategoryConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'rowId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [
          {
            kind: 'INTERFACE',
            name: 'Node',
          },
        ],
      },
      {
        kind: 'OBJECT',
        name: 'EventCategoryConnection',
        fields: [
          {
            name: 'edges',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'EventCategoryEdge',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'nodes',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'EventCategory',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'pageInfo',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'PageInfo',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'totalCount',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'EventCategoryEdge',
        fields: [
          {
            name: 'cursor',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'node',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'EventCategory',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'EventCategoryMapping',
        fields: [
          {
            name: 'categoryId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'eventByEventId',
            type: {
              kind: 'OBJECT',
              name: 'Event',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'eventCategoryByCategoryId',
            type: {
              kind: 'OBJECT',
              name: 'EventCategory',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'eventId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [
          {
            kind: 'INTERFACE',
            name: 'Node',
          },
        ],
      },
      {
        kind: 'OBJECT',
        name: 'EventCategoryMappingConnection',
        fields: [
          {
            name: 'edges',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'EventCategoryMappingEdge',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'nodes',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'EventCategoryMapping',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'pageInfo',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'PageInfo',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'totalCount',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'EventCategoryMappingEdge',
        fields: [
          {
            name: 'cursor',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'node',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'EventCategoryMapping',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'EventConnection',
        fields: [
          {
            name: 'edges',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'EventEdge',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'nodes',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'Event',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'pageInfo',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'PageInfo',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'totalCount',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'EventDeletePayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'eventEdge',
            type: {
              kind: 'OBJECT',
              name: 'EventEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'result',
            type: {
              kind: 'OBJECT',
              name: 'Event',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'EventEdge',
        fields: [
          {
            name: 'cursor',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'node',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'Event',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'EventFavorite',
        fields: [
          {
            name: 'accountByCreatedBy',
            type: {
              kind: 'OBJECT',
              name: 'Account',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'createdAt',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'createdBy',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'eventByEventId',
            type: {
              kind: 'OBJECT',
              name: 'Event',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'eventId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'rowId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [
          {
            kind: 'INTERFACE',
            name: 'Node',
          },
        ],
      },
      {
        kind: 'OBJECT',
        name: 'EventFavoriteConnection',
        fields: [
          {
            name: 'edges',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'EventFavoriteEdge',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'nodes',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'EventFavorite',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'pageInfo',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'PageInfo',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'totalCount',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'EventFavoriteEdge',
        fields: [
          {
            name: 'cursor',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'node',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'EventFavorite',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'EventFormat',
        fields: [
          {
            name: 'eventFormatMappingsByFormatId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'EventFormatMappingConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'name',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'preferenceEventFormatsByFormatId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'PreferenceEventFormatConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'rowId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [
          {
            kind: 'INTERFACE',
            name: 'Node',
          },
        ],
      },
      {
        kind: 'OBJECT',
        name: 'EventFormatConnection',
        fields: [
          {
            name: 'edges',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'EventFormatEdge',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'nodes',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'EventFormat',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'pageInfo',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'PageInfo',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'totalCount',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'EventFormatEdge',
        fields: [
          {
            name: 'cursor',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'node',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'EventFormat',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'EventFormatMapping',
        fields: [
          {
            name: 'eventByEventId',
            type: {
              kind: 'OBJECT',
              name: 'Event',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'eventFormatByFormatId',
            type: {
              kind: 'OBJECT',
              name: 'EventFormat',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'eventId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'formatId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [
          {
            kind: 'INTERFACE',
            name: 'Node',
          },
        ],
      },
      {
        kind: 'OBJECT',
        name: 'EventFormatMappingConnection',
        fields: [
          {
            name: 'edges',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'EventFormatMappingEdge',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'nodes',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'EventFormatMapping',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'pageInfo',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'PageInfo',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'totalCount',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'EventFormatMappingEdge',
        fields: [
          {
            name: 'cursor',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'node',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'EventFormatMapping',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'EventRecommendation',
        fields: [
          {
            name: 'accountByAccountId',
            type: {
              kind: 'OBJECT',
              name: 'Account',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'accountId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'eventByEventId',
            type: {
              kind: 'OBJECT',
              name: 'Event',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'eventId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'predictedScore',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'score',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
        ],
        interfaces: [
          {
            kind: 'INTERFACE',
            name: 'Node',
          },
        ],
      },
      {
        kind: 'OBJECT',
        name: 'EventRecommendationConnection',
        fields: [
          {
            name: 'edges',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'EventRecommendationEdge',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'nodes',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'EventRecommendation',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'pageInfo',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'PageInfo',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'totalCount',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'EventRecommendationEdge',
        fields: [
          {
            name: 'cursor',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'node',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'EventRecommendation',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'EventUnlockPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'result',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'OBJECT',
                  name: 'EventUnlockRecord',
                  ofType: null,
                },
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'EventUnlockRecord',
        fields: [
          {
            name: 'creatorUsername',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'eventSlug',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'jwt',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'EventUpload',
        fields: [
          {
            name: 'eventByEventId',
            type: {
              kind: 'OBJECT',
              name: 'Event',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'eventId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'isHeaderImage',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'rowId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'uploadByUploadId',
            type: {
              kind: 'OBJECT',
              name: 'Upload',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'uploadId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [
          {
            kind: 'INTERFACE',
            name: 'Node',
          },
        ],
      },
      {
        kind: 'OBJECT',
        name: 'EventUploadConnection',
        fields: [
          {
            name: 'edges',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'EventUploadEdge',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'nodes',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'EventUpload',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'pageInfo',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'PageInfo',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'totalCount',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'EventUploadEdge',
        fields: [
          {
            name: 'cursor',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'node',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'EventUpload',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'Friendship',
        fields: [
          {
            name: 'aAccountId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'accountByAAccountId',
            type: {
              kind: 'OBJECT',
              name: 'Account',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'accountByBAccountId',
            type: {
              kind: 'OBJECT',
              name: 'Account',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'accountByCreatedBy',
            type: {
              kind: 'OBJECT',
              name: 'Account',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'accountByUpdatedBy',
            type: {
              kind: 'OBJECT',
              name: 'Account',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'bAccountId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'createdAt',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'createdBy',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'rowId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'status',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'updatedAt',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'updatedBy',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
        ],
        interfaces: [
          {
            kind: 'INTERFACE',
            name: 'Node',
          },
        ],
      },
      {
        kind: 'OBJECT',
        name: 'FriendshipConnection',
        fields: [
          {
            name: 'edges',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'FriendshipEdge',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'nodes',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'Friendship',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'pageInfo',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'PageInfo',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'totalCount',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'FriendshipEdge',
        fields: [
          {
            name: 'cursor',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'node',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'Friendship',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'INTERFACE',
        name: 'GeographyGeometry',
        fields: [
          {
            name: 'geojson',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'srid',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
        possibleTypes: [
          {
            kind: 'OBJECT',
            name: 'GeographyPoint',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'GeographyInterface',
        fields: [
          {
            name: 'geojson',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'srid',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
        possibleTypes: [
          {
            kind: 'OBJECT',
            name: 'GeographyPoint',
          },
        ],
      },
      {
        kind: 'OBJECT',
        name: 'GeographyPoint',
        fields: [
          {
            name: 'geojson',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'latitude',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'longitude',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'srid',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [
          {
            kind: 'INTERFACE',
            name: 'GeographyGeometry',
          },
          {
            kind: 'INTERFACE',
            name: 'GeographyInterface',
          },
        ],
      },
      {
        kind: 'OBJECT',
        name: 'Guest',
        fields: [
          {
            name: 'accountByUpdatedBy',
            type: {
              kind: 'OBJECT',
              name: 'Account',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'attendanceByGuestId',
            type: {
              kind: 'OBJECT',
              name: 'Attendance',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'contactByContactId',
            type: {
              kind: 'OBJECT',
              name: 'Contact',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'contactId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'createdAt',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'eventByEventId',
            type: {
              kind: 'OBJECT',
              name: 'Event',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'eventId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'feedback',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'feedbackPaper',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'rowId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'updatedAt',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'updatedBy',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
        ],
        interfaces: [
          {
            kind: 'INTERFACE',
            name: 'Node',
          },
        ],
      },
      {
        kind: 'OBJECT',
        name: 'GuestConnection',
        fields: [
          {
            name: 'edges',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'GuestEdge',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'nodes',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'Guest',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'pageInfo',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'PageInfo',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'totalCount',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'GuestContactIdsConnection',
        fields: [
          {
            name: 'edges',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'OBJECT',
                  name: 'GuestContactIdsEdge',
                  ofType: null,
                },
              },
            },
            args: [],
          },
          {
            name: 'nodes',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            },
            args: [],
          },
          {
            name: 'pageInfo',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'PageInfo',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'totalCount',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'GuestContactIdsEdge',
        fields: [
          {
            name: 'cursor',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'node',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'GuestEdge',
        fields: [
          {
            name: 'cursor',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'node',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'Guest',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'GuestFlat',
        fields: [
          {
            name: 'contactAccountId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'contactAddressId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'contactCreatedBy',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'contactEmailAddress',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'contactEmailAddressHash',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'contactFirstName',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'contactId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'contactLastName',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'contactPhoneNumber',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'contactUrl',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'eventAddressId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'eventCreatedBy',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'eventDescription',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'eventEnd',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'eventGuestCountMaximum',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'eventId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'eventIsArchived',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'eventIsInPerson',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'eventIsRemote',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'eventName',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'eventSlug',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'eventStart',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'eventUrl',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'eventVisibility',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'guestContactId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'guestEventId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'guestFeedback',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'guestFeedbackPaper',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'guestId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'GuestFlatConnection',
        fields: [
          {
            name: 'edges',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'GuestFlatEdge',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'nodes',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'GuestFlat',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'pageInfo',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'PageInfo',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'totalCount',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'GuestFlatEdge',
        fields: [
          {
            name: 'cursor',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'node',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'GuestFlat',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'InvitePayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'JwtCreatePayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'result',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'JwtUpdateAttendanceAddPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'result',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'JwtUpdatePayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'result',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'LegalTerm',
        fields: [
          {
            name: 'createdAt',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'language',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'legalTermAcceptancesByLegalTermId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'LegalTermAcceptanceConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'rowId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'term',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'version',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [
          {
            kind: 'INTERFACE',
            name: 'Node',
          },
        ],
      },
      {
        kind: 'OBJECT',
        name: 'LegalTermAcceptance',
        fields: [
          {
            name: 'accountByAccountId',
            type: {
              kind: 'OBJECT',
              name: 'Account',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'accountId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'createdAt',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'legalTermByLegalTermId',
            type: {
              kind: 'OBJECT',
              name: 'LegalTerm',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'legalTermId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'rowId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [
          {
            kind: 'INTERFACE',
            name: 'Node',
          },
        ],
      },
      {
        kind: 'OBJECT',
        name: 'LegalTermAcceptanceConnection',
        fields: [
          {
            name: 'edges',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'LegalTermAcceptanceEdge',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'nodes',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'LegalTermAcceptance',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'pageInfo',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'PageInfo',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'totalCount',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'LegalTermAcceptanceEdge',
        fields: [
          {
            name: 'cursor',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'node',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'LegalTermAcceptance',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'LegalTermConnection',
        fields: [
          {
            name: 'edges',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'LegalTermEdge',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'nodes',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'LegalTerm',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'pageInfo',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'PageInfo',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'totalCount',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'LegalTermEdge',
        fields: [
          {
            name: 'cursor',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'node',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'LegalTerm',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'Mutation',
        fields: [
          {
            name: 'accountDelete',
            type: {
              kind: 'OBJECT',
              name: 'AccountDeletePayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'accountEmailAddressVerification',
            type: {
              kind: 'OBJECT',
              name: 'AccountEmailAddressVerificationPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'accountPasswordChange',
            type: {
              kind: 'OBJECT',
              name: 'AccountPasswordChangePayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'accountPasswordReset',
            type: {
              kind: 'OBJECT',
              name: 'AccountPasswordResetPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'accountPasswordResetRequest',
            type: {
              kind: 'OBJECT',
              name: 'AccountPasswordResetRequestPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'accountRegistration',
            type: {
              kind: 'OBJECT',
              name: 'AccountRegistrationPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'accountRegistrationRefresh',
            type: {
              kind: 'OBJECT',
              name: 'AccountRegistrationRefreshPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'achievementUnlock',
            type: {
              kind: 'OBJECT',
              name: 'AchievementUnlockPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'createAccountBlock',
            type: {
              kind: 'OBJECT',
              name: 'CreateAccountBlockPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'createAccountSocialNetwork',
            type: {
              kind: 'OBJECT',
              name: 'CreateAccountSocialNetworkPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'createAddress',
            type: {
              kind: 'OBJECT',
              name: 'CreateAddressPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'createAttendance',
            type: {
              kind: 'OBJECT',
              name: 'CreateAttendancePayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'createContact',
            type: {
              kind: 'OBJECT',
              name: 'CreateContactPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'createDevice',
            type: {
              kind: 'OBJECT',
              name: 'CreateDevicePayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'createEvent',
            type: {
              kind: 'OBJECT',
              name: 'CreateEventPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'createEventCategoryMapping',
            type: {
              kind: 'OBJECT',
              name: 'CreateEventCategoryMappingPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'createEventFavorite',
            type: {
              kind: 'OBJECT',
              name: 'CreateEventFavoritePayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'createEventFormatMapping',
            type: {
              kind: 'OBJECT',
              name: 'CreateEventFormatMappingPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'createEventUpload',
            type: {
              kind: 'OBJECT',
              name: 'CreateEventUploadPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'createFriendship',
            type: {
              kind: 'OBJECT',
              name: 'CreateFriendshipPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'createGuest',
            type: {
              kind: 'OBJECT',
              name: 'CreateGuestPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'createGuests',
            type: {
              kind: 'OBJECT',
              name: 'CreateGuestsPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'createLegalTermAcceptance',
            type: {
              kind: 'OBJECT',
              name: 'CreateLegalTermAcceptancePayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'createPreferenceEventCategory',
            type: {
              kind: 'OBJECT',
              name: 'CreatePreferenceEventCategoryPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'createPreferenceEventFormat',
            type: {
              kind: 'OBJECT',
              name: 'CreatePreferenceEventFormatPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'createPreferenceEventLocation',
            type: {
              kind: 'OBJECT',
              name: 'CreatePreferenceEventLocationPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'createPreferenceEventSize',
            type: {
              kind: 'OBJECT',
              name: 'CreatePreferenceEventSizePayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'createProfilePicture',
            type: {
              kind: 'OBJECT',
              name: 'CreateProfilePicturePayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'createReport',
            type: {
              kind: 'OBJECT',
              name: 'CreateReportPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'createUpload',
            type: {
              kind: 'OBJECT',
              name: 'CreateUploadPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteAccountBlock',
            type: {
              kind: 'OBJECT',
              name: 'DeleteAccountBlockPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteAccountBlockByCreatedByAndBlockedAccountId',
            type: {
              kind: 'OBJECT',
              name: 'DeleteAccountBlockPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteAccountBlockByRowId',
            type: {
              kind: 'OBJECT',
              name: 'DeleteAccountBlockPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteAccountSocialNetwork',
            type: {
              kind: 'OBJECT',
              name: 'DeleteAccountSocialNetworkPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteAccountSocialNetworkByAccountIdAndSocialNetwork',
            type: {
              kind: 'OBJECT',
              name: 'DeleteAccountSocialNetworkPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteAddress',
            type: {
              kind: 'OBJECT',
              name: 'DeleteAddressPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteAddressByRowId',
            type: {
              kind: 'OBJECT',
              name: 'DeleteAddressPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteContact',
            type: {
              kind: 'OBJECT',
              name: 'DeleteContactPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteContactByCreatedByAndAccountId',
            type: {
              kind: 'OBJECT',
              name: 'DeleteContactPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteContactByRowId',
            type: {
              kind: 'OBJECT',
              name: 'DeleteContactPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteDevice',
            type: {
              kind: 'OBJECT',
              name: 'DeleteDevicePayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteDeviceByCreatedByAndFcmToken',
            type: {
              kind: 'OBJECT',
              name: 'DeleteDevicePayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteDeviceByRowId',
            type: {
              kind: 'OBJECT',
              name: 'DeleteDevicePayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteEvent',
            type: {
              kind: 'OBJECT',
              name: 'DeleteEventPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteEventByCreatedByAndSlug',
            type: {
              kind: 'OBJECT',
              name: 'DeleteEventPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteEventByRowId',
            type: {
              kind: 'OBJECT',
              name: 'DeleteEventPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteEventCategoryMapping',
            type: {
              kind: 'OBJECT',
              name: 'DeleteEventCategoryMappingPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteEventCategoryMappingByEventIdAndCategoryId',
            type: {
              kind: 'OBJECT',
              name: 'DeleteEventCategoryMappingPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteEventFavorite',
            type: {
              kind: 'OBJECT',
              name: 'DeleteEventFavoritePayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteEventFavoriteByCreatedByAndEventId',
            type: {
              kind: 'OBJECT',
              name: 'DeleteEventFavoritePayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteEventFavoriteByRowId',
            type: {
              kind: 'OBJECT',
              name: 'DeleteEventFavoritePayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteEventFormatMapping',
            type: {
              kind: 'OBJECT',
              name: 'DeleteEventFormatMappingPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteEventFormatMappingByEventIdAndFormatId',
            type: {
              kind: 'OBJECT',
              name: 'DeleteEventFormatMappingPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteEventUpload',
            type: {
              kind: 'OBJECT',
              name: 'DeleteEventUploadPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteEventUploadByEventIdAndUploadId',
            type: {
              kind: 'OBJECT',
              name: 'DeleteEventUploadPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteEventUploadByRowId',
            type: {
              kind: 'OBJECT',
              name: 'DeleteEventUploadPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteFriendship',
            type: {
              kind: 'OBJECT',
              name: 'DeleteFriendshipPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteFriendshipByAAccountIdAndBAccountId',
            type: {
              kind: 'OBJECT',
              name: 'DeleteFriendshipPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteFriendshipByRowId',
            type: {
              kind: 'OBJECT',
              name: 'DeleteFriendshipPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteGuest',
            type: {
              kind: 'OBJECT',
              name: 'DeleteGuestPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteGuestByEventIdAndContactId',
            type: {
              kind: 'OBJECT',
              name: 'DeleteGuestPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteGuestByRowId',
            type: {
              kind: 'OBJECT',
              name: 'DeleteGuestPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deletePreferenceEventCategory',
            type: {
              kind: 'OBJECT',
              name: 'DeletePreferenceEventCategoryPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deletePreferenceEventCategoryByAccountIdAndCategoryId',
            type: {
              kind: 'OBJECT',
              name: 'DeletePreferenceEventCategoryPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deletePreferenceEventCategoryByRowId',
            type: {
              kind: 'OBJECT',
              name: 'DeletePreferenceEventCategoryPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deletePreferenceEventFormat',
            type: {
              kind: 'OBJECT',
              name: 'DeletePreferenceEventFormatPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deletePreferenceEventFormatByAccountIdAndFormatId',
            type: {
              kind: 'OBJECT',
              name: 'DeletePreferenceEventFormatPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deletePreferenceEventFormatByRowId',
            type: {
              kind: 'OBJECT',
              name: 'DeletePreferenceEventFormatPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deletePreferenceEventLocation',
            type: {
              kind: 'OBJECT',
              name: 'DeletePreferenceEventLocationPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deletePreferenceEventLocationByCreatedByAndLocationAndRadius',
            type: {
              kind: 'OBJECT',
              name: 'DeletePreferenceEventLocationPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deletePreferenceEventLocationByRowId',
            type: {
              kind: 'OBJECT',
              name: 'DeletePreferenceEventLocationPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deletePreferenceEventSize',
            type: {
              kind: 'OBJECT',
              name: 'DeletePreferenceEventSizePayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deletePreferenceEventSizeByAccountIdAndEventSize',
            type: {
              kind: 'OBJECT',
              name: 'DeletePreferenceEventSizePayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deletePreferenceEventSizeByRowId',
            type: {
              kind: 'OBJECT',
              name: 'DeletePreferenceEventSizePayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteProfilePicture',
            type: {
              kind: 'OBJECT',
              name: 'DeleteProfilePicturePayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteProfilePictureByAccountId',
            type: {
              kind: 'OBJECT',
              name: 'DeleteProfilePicturePayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteProfilePictureByRowId',
            type: {
              kind: 'OBJECT',
              name: 'DeleteProfilePicturePayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteUpload',
            type: {
              kind: 'OBJECT',
              name: 'DeleteUploadPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteUploadByRowId',
            type: {
              kind: 'OBJECT',
              name: 'DeleteUploadPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteUploadByStorageKey',
            type: {
              kind: 'OBJECT',
              name: 'DeleteUploadPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'eventDelete',
            type: {
              kind: 'OBJECT',
              name: 'EventDeletePayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'eventUnlock',
            type: {
              kind: 'OBJECT',
              name: 'EventUnlockPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'invite',
            type: {
              kind: 'OBJECT',
              name: 'InvitePayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'jwtCreate',
            type: {
              kind: 'OBJECT',
              name: 'JwtCreatePayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'jwtUpdate',
            type: {
              kind: 'OBJECT',
              name: 'JwtUpdatePayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'jwtUpdateAttendanceAdd',
            type: {
              kind: 'OBJECT',
              name: 'JwtUpdateAttendanceAddPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'notificationAcknowledge',
            type: {
              kind: 'OBJECT',
              name: 'NotificationAcknowledgePayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'profilePictureSet',
            type: {
              kind: 'OBJECT',
              name: 'ProfilePictureSetPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateAccount',
            type: {
              kind: 'OBJECT',
              name: 'UpdateAccountPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateAccountByRowId',
            type: {
              kind: 'OBJECT',
              name: 'UpdateAccountPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateAccountByUsername',
            type: {
              kind: 'OBJECT',
              name: 'UpdateAccountPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateAccountLocation',
            type: {
              kind: 'OBJECT',
              name: 'UpdateAccountLocationPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateAccountSocialNetwork',
            type: {
              kind: 'OBJECT',
              name: 'UpdateAccountSocialNetworkPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateAccountSocialNetworkByAccountIdAndSocialNetwork',
            type: {
              kind: 'OBJECT',
              name: 'UpdateAccountSocialNetworkPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateAddress',
            type: {
              kind: 'OBJECT',
              name: 'UpdateAddressPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateAddressByRowId',
            type: {
              kind: 'OBJECT',
              name: 'UpdateAddressPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateAttendance',
            type: {
              kind: 'OBJECT',
              name: 'UpdateAttendancePayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateAttendanceByGuestId',
            type: {
              kind: 'OBJECT',
              name: 'UpdateAttendancePayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateAttendanceByRowId',
            type: {
              kind: 'OBJECT',
              name: 'UpdateAttendancePayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateContact',
            type: {
              kind: 'OBJECT',
              name: 'UpdateContactPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateContactByCreatedByAndAccountId',
            type: {
              kind: 'OBJECT',
              name: 'UpdateContactPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateContactByRowId',
            type: {
              kind: 'OBJECT',
              name: 'UpdateContactPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateDevice',
            type: {
              kind: 'OBJECT',
              name: 'UpdateDevicePayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateDeviceByCreatedByAndFcmToken',
            type: {
              kind: 'OBJECT',
              name: 'UpdateDevicePayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateDeviceByRowId',
            type: {
              kind: 'OBJECT',
              name: 'UpdateDevicePayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateEvent',
            type: {
              kind: 'OBJECT',
              name: 'UpdateEventPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateEventByCreatedByAndSlug',
            type: {
              kind: 'OBJECT',
              name: 'UpdateEventPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateEventByRowId',
            type: {
              kind: 'OBJECT',
              name: 'UpdateEventPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateFriendship',
            type: {
              kind: 'OBJECT',
              name: 'UpdateFriendshipPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateFriendshipByAAccountIdAndBAccountId',
            type: {
              kind: 'OBJECT',
              name: 'UpdateFriendshipPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateFriendshipByRowId',
            type: {
              kind: 'OBJECT',
              name: 'UpdateFriendshipPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateGuest',
            type: {
              kind: 'OBJECT',
              name: 'UpdateGuestPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateGuestByEventIdAndContactId',
            type: {
              kind: 'OBJECT',
              name: 'UpdateGuestPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateGuestByRowId',
            type: {
              kind: 'OBJECT',
              name: 'UpdateGuestPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateProfilePicture',
            type: {
              kind: 'OBJECT',
              name: 'UpdateProfilePicturePayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateProfilePictureByAccountId',
            type: {
              kind: 'OBJECT',
              name: 'UpdateProfilePicturePayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateProfilePictureByRowId',
            type: {
              kind: 'OBJECT',
              name: 'UpdateProfilePicturePayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateUpload',
            type: {
              kind: 'OBJECT',
              name: 'UpdateUploadPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateUploadByRowId',
            type: {
              kind: 'OBJECT',
              name: 'UpdateUploadPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateUploadByStorageKey',
            type: {
              kind: 'OBJECT',
              name: 'UpdateUploadPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'INTERFACE',
        name: 'Node',
        fields: [
          {
            name: 'id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
        possibleTypes: [
          {
            kind: 'OBJECT',
            name: 'Account',
          },
          {
            kind: 'OBJECT',
            name: 'AccountBlock',
          },
          {
            kind: 'OBJECT',
            name: 'AccountSocialNetwork',
          },
          {
            kind: 'OBJECT',
            name: 'Achievement',
          },
          {
            kind: 'OBJECT',
            name: 'Address',
          },
          {
            kind: 'OBJECT',
            name: 'App',
          },
          {
            kind: 'OBJECT',
            name: 'Attendance',
          },
          {
            kind: 'OBJECT',
            name: 'Contact',
          },
          {
            kind: 'OBJECT',
            name: 'Device',
          },
          {
            kind: 'OBJECT',
            name: 'Event',
          },
          {
            kind: 'OBJECT',
            name: 'EventApp',
          },
          {
            kind: 'OBJECT',
            name: 'EventCategory',
          },
          {
            kind: 'OBJECT',
            name: 'EventCategoryMapping',
          },
          {
            kind: 'OBJECT',
            name: 'EventFavorite',
          },
          {
            kind: 'OBJECT',
            name: 'EventFormat',
          },
          {
            kind: 'OBJECT',
            name: 'EventFormatMapping',
          },
          {
            kind: 'OBJECT',
            name: 'EventRecommendation',
          },
          {
            kind: 'OBJECT',
            name: 'EventUpload',
          },
          {
            kind: 'OBJECT',
            name: 'Friendship',
          },
          {
            kind: 'OBJECT',
            name: 'Guest',
          },
          {
            kind: 'OBJECT',
            name: 'LegalTerm',
          },
          {
            kind: 'OBJECT',
            name: 'LegalTermAcceptance',
          },
          {
            kind: 'OBJECT',
            name: 'PreferenceEventCategory',
          },
          {
            kind: 'OBJECT',
            name: 'PreferenceEventFormat',
          },
          {
            kind: 'OBJECT',
            name: 'PreferenceEventLocation',
          },
          {
            kind: 'OBJECT',
            name: 'PreferenceEventSize',
          },
          {
            kind: 'OBJECT',
            name: 'ProfilePicture',
          },
          {
            kind: 'OBJECT',
            name: 'Query',
          },
          {
            kind: 'OBJECT',
            name: 'Report',
          },
          {
            kind: 'OBJECT',
            name: 'Upload',
          },
        ],
      },
      {
        kind: 'OBJECT',
        name: 'NotificationAcknowledgePayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'PageInfo',
        fields: [
          {
            name: 'endCursor',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'hasNextPage',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'hasPreviousPage',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'startCursor',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'PreferenceEventCategory',
        fields: [
          {
            name: 'accountByAccountId',
            type: {
              kind: 'OBJECT',
              name: 'Account',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'accountId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'categoryId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'createdAt',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'eventCategoryByCategoryId',
            type: {
              kind: 'OBJECT',
              name: 'EventCategory',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'rowId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [
          {
            kind: 'INTERFACE',
            name: 'Node',
          },
        ],
      },
      {
        kind: 'OBJECT',
        name: 'PreferenceEventCategoryConnection',
        fields: [
          {
            name: 'edges',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'PreferenceEventCategoryEdge',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'nodes',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'PreferenceEventCategory',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'pageInfo',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'PageInfo',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'totalCount',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'PreferenceEventCategoryEdge',
        fields: [
          {
            name: 'cursor',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'node',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'PreferenceEventCategory',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'PreferenceEventFormat',
        fields: [
          {
            name: 'accountByAccountId',
            type: {
              kind: 'OBJECT',
              name: 'Account',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'accountId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'createdAt',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'eventFormatByFormatId',
            type: {
              kind: 'OBJECT',
              name: 'EventFormat',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'formatId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'rowId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [
          {
            kind: 'INTERFACE',
            name: 'Node',
          },
        ],
      },
      {
        kind: 'OBJECT',
        name: 'PreferenceEventFormatConnection',
        fields: [
          {
            name: 'edges',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'PreferenceEventFormatEdge',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'nodes',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'PreferenceEventFormat',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'pageInfo',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'PageInfo',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'totalCount',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'PreferenceEventFormatEdge',
        fields: [
          {
            name: 'cursor',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'node',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'PreferenceEventFormat',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'PreferenceEventLocation',
        fields: [
          {
            name: 'accountByCreatedBy',
            type: {
              kind: 'OBJECT',
              name: 'Account',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'createdAt',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'createdBy',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'location',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'GeographyPoint',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'radius',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'rowId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [
          {
            kind: 'INTERFACE',
            name: 'Node',
          },
        ],
      },
      {
        kind: 'OBJECT',
        name: 'PreferenceEventLocationConnection',
        fields: [
          {
            name: 'edges',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'PreferenceEventLocationEdge',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'nodes',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'PreferenceEventLocation',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'pageInfo',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'PageInfo',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'totalCount',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'PreferenceEventLocationEdge',
        fields: [
          {
            name: 'cursor',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'node',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'PreferenceEventLocation',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'PreferenceEventSize',
        fields: [
          {
            name: 'accountByAccountId',
            type: {
              kind: 'OBJECT',
              name: 'Account',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'accountId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'createdAt',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'eventSize',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'rowId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [
          {
            kind: 'INTERFACE',
            name: 'Node',
          },
        ],
      },
      {
        kind: 'OBJECT',
        name: 'PreferenceEventSizeConnection',
        fields: [
          {
            name: 'edges',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'PreferenceEventSizeEdge',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'nodes',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'PreferenceEventSize',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'pageInfo',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'PageInfo',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'totalCount',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'PreferenceEventSizeEdge',
        fields: [
          {
            name: 'cursor',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'node',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'PreferenceEventSize',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'ProfilePicture',
        fields: [
          {
            name: 'accountByAccountId',
            type: {
              kind: 'OBJECT',
              name: 'Account',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'accountId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'rowId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'uploadByUploadId',
            type: {
              kind: 'OBJECT',
              name: 'Upload',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'uploadId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [
          {
            kind: 'INTERFACE',
            name: 'Node',
          },
        ],
      },
      {
        kind: 'OBJECT',
        name: 'ProfilePictureConnection',
        fields: [
          {
            name: 'edges',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'ProfilePictureEdge',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'nodes',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'ProfilePicture',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'pageInfo',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'PageInfo',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'totalCount',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'ProfilePictureEdge',
        fields: [
          {
            name: 'cursor',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'node',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'ProfilePicture',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'ProfilePictureSetPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'Query',
        fields: [
          {
            name: 'account',
            type: {
              kind: 'OBJECT',
              name: 'Account',
              ofType: null,
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'accountBlock',
            type: {
              kind: 'OBJECT',
              name: 'AccountBlock',
              ofType: null,
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'accountBlockAccounts',
            type: {
              kind: 'OBJECT',
              name: 'AccountBlockAccountsConnection',
              ofType: null,
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'accountBlockByCreatedByAndBlockedAccountId',
            type: {
              kind: 'OBJECT',
              name: 'AccountBlock',
              ofType: null,
            },
            args: [
              {
                name: 'blockedAccountId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'createdBy',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'accountBlockByRowId',
            type: {
              kind: 'OBJECT',
              name: 'AccountBlock',
              ofType: null,
            },
            args: [
              {
                name: 'rowId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'accountByRowId',
            type: {
              kind: 'OBJECT',
              name: 'Account',
              ofType: null,
            },
            args: [
              {
                name: 'rowId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'accountByUsername',
            type: {
              kind: 'OBJECT',
              name: 'Account',
              ofType: null,
            },
            args: [
              {
                name: 'username',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'accountSearch',
            type: {
              kind: 'OBJECT',
              name: 'AccountConnection',
              ofType: null,
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'searchString',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'accountSocialNetwork',
            type: {
              kind: 'OBJECT',
              name: 'AccountSocialNetwork',
              ofType: null,
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'accountSocialNetworkByAccountIdAndSocialNetwork',
            type: {
              kind: 'OBJECT',
              name: 'AccountSocialNetwork',
              ofType: null,
            },
            args: [
              {
                name: 'accountId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'socialNetwork',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'accountUploadQuotaBytes',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'achievement',
            type: {
              kind: 'OBJECT',
              name: 'Achievement',
              ofType: null,
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'achievementByAccountIdAndAchievement',
            type: {
              kind: 'OBJECT',
              name: 'Achievement',
              ofType: null,
            },
            args: [
              {
                name: 'accountId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'achievement',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'achievementByRowId',
            type: {
              kind: 'OBJECT',
              name: 'Achievement',
              ofType: null,
            },
            args: [
              {
                name: 'rowId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'address',
            type: {
              kind: 'OBJECT',
              name: 'Address',
              ofType: null,
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'addressByRowId',
            type: {
              kind: 'OBJECT',
              name: 'Address',
              ofType: null,
            },
            args: [
              {
                name: 'rowId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'allAccountBlocks',
            type: {
              kind: 'OBJECT',
              name: 'AccountBlockConnection',
              ofType: null,
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'allAccountSocialNetworks',
            type: {
              kind: 'OBJECT',
              name: 'AccountSocialNetworkConnection',
              ofType: null,
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'allAccounts',
            type: {
              kind: 'OBJECT',
              name: 'AccountConnection',
              ofType: null,
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'allAchievements',
            type: {
              kind: 'OBJECT',
              name: 'AchievementConnection',
              ofType: null,
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'allAddresses',
            type: {
              kind: 'OBJECT',
              name: 'AddressConnection',
              ofType: null,
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'allApps',
            type: {
              kind: 'OBJECT',
              name: 'AppConnection',
              ofType: null,
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'allAttendances',
            type: {
              kind: 'OBJECT',
              name: 'AttendanceConnection',
              ofType: null,
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'allContacts',
            type: {
              kind: 'OBJECT',
              name: 'ContactConnection',
              ofType: null,
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'allDevices',
            type: {
              kind: 'OBJECT',
              name: 'DeviceConnection',
              ofType: null,
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'allEventApps',
            type: {
              kind: 'OBJECT',
              name: 'EventAppConnection',
              ofType: null,
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'allEventCategories',
            type: {
              kind: 'OBJECT',
              name: 'EventCategoryConnection',
              ofType: null,
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'allEventCategoryMappings',
            type: {
              kind: 'OBJECT',
              name: 'EventCategoryMappingConnection',
              ofType: null,
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'allEventFavorites',
            type: {
              kind: 'OBJECT',
              name: 'EventFavoriteConnection',
              ofType: null,
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'allEventFormatMappings',
            type: {
              kind: 'OBJECT',
              name: 'EventFormatMappingConnection',
              ofType: null,
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'allEventFormats',
            type: {
              kind: 'OBJECT',
              name: 'EventFormatConnection',
              ofType: null,
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'allEventRecommendations',
            type: {
              kind: 'OBJECT',
              name: 'EventRecommendationConnection',
              ofType: null,
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'allEventUploads',
            type: {
              kind: 'OBJECT',
              name: 'EventUploadConnection',
              ofType: null,
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'allEvents',
            type: {
              kind: 'OBJECT',
              name: 'EventConnection',
              ofType: null,
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'allFriendships',
            type: {
              kind: 'OBJECT',
              name: 'FriendshipConnection',
              ofType: null,
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'allGuestFlats',
            type: {
              kind: 'OBJECT',
              name: 'GuestFlatConnection',
              ofType: null,
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'allGuests',
            type: {
              kind: 'OBJECT',
              name: 'GuestConnection',
              ofType: null,
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'allLegalTermAcceptances',
            type: {
              kind: 'OBJECT',
              name: 'LegalTermAcceptanceConnection',
              ofType: null,
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'allLegalTerms',
            type: {
              kind: 'OBJECT',
              name: 'LegalTermConnection',
              ofType: null,
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'allPreferenceEventCategories',
            type: {
              kind: 'OBJECT',
              name: 'PreferenceEventCategoryConnection',
              ofType: null,
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'allPreferenceEventFormats',
            type: {
              kind: 'OBJECT',
              name: 'PreferenceEventFormatConnection',
              ofType: null,
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'allPreferenceEventLocations',
            type: {
              kind: 'OBJECT',
              name: 'PreferenceEventLocationConnection',
              ofType: null,
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'allPreferenceEventSizes',
            type: {
              kind: 'OBJECT',
              name: 'PreferenceEventSizeConnection',
              ofType: null,
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'allProfilePictures',
            type: {
              kind: 'OBJECT',
              name: 'ProfilePictureConnection',
              ofType: null,
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'allReports',
            type: {
              kind: 'OBJECT',
              name: 'ReportConnection',
              ofType: null,
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'allUploads',
            type: {
              kind: 'OBJECT',
              name: 'UploadConnection',
              ofType: null,
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'app',
            type: {
              kind: 'OBJECT',
              name: 'App',
              ofType: null,
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'appByName',
            type: {
              kind: 'OBJECT',
              name: 'App',
              ofType: null,
            },
            args: [
              {
                name: 'name',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'appByRowId',
            type: {
              kind: 'OBJECT',
              name: 'App',
              ofType: null,
            },
            args: [
              {
                name: 'rowId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'attendance',
            type: {
              kind: 'OBJECT',
              name: 'Attendance',
              ofType: null,
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'attendanceByGuestId',
            type: {
              kind: 'OBJECT',
              name: 'Attendance',
              ofType: null,
            },
            args: [
              {
                name: 'guestId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'attendanceByRowId',
            type: {
              kind: 'OBJECT',
              name: 'Attendance',
              ofType: null,
            },
            args: [
              {
                name: 'rowId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'attendanceClaimArray',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'contact',
            type: {
              kind: 'OBJECT',
              name: 'Contact',
              ofType: null,
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'contactByCreatedByAndAccountId',
            type: {
              kind: 'OBJECT',
              name: 'Contact',
              ofType: null,
            },
            args: [
              {
                name: 'accountId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'createdBy',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'contactByRowId',
            type: {
              kind: 'OBJECT',
              name: 'Contact',
              ofType: null,
            },
            args: [
              {
                name: 'rowId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'device',
            type: {
              kind: 'OBJECT',
              name: 'Device',
              ofType: null,
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deviceByCreatedByAndFcmToken',
            type: {
              kind: 'OBJECT',
              name: 'Device',
              ofType: null,
            },
            args: [
              {
                name: 'createdBy',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'fcmToken',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deviceByRowId',
            type: {
              kind: 'OBJECT',
              name: 'Device',
              ofType: null,
            },
            args: [
              {
                name: 'rowId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'event',
            type: {
              kind: 'OBJECT',
              name: 'Event',
              ofType: null,
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'eventApp',
            type: {
              kind: 'OBJECT',
              name: 'EventApp',
              ofType: null,
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'eventAppByEventIdAndAppId',
            type: {
              kind: 'OBJECT',
              name: 'EventApp',
              ofType: null,
            },
            args: [
              {
                name: 'appId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'eventId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'eventAppByRowId',
            type: {
              kind: 'OBJECT',
              name: 'EventApp',
              ofType: null,
            },
            args: [
              {
                name: 'rowId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'eventByAttendanceId',
            type: {
              kind: 'OBJECT',
              name: 'Event',
              ofType: null,
            },
            args: [
              {
                name: 'attendanceId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'eventByCreatedByAndSlug',
            type: {
              kind: 'OBJECT',
              name: 'Event',
              ofType: null,
            },
            args: [
              {
                name: 'createdBy',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'slug',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'eventByRowId',
            type: {
              kind: 'OBJECT',
              name: 'Event',
              ofType: null,
            },
            args: [
              {
                name: 'rowId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'eventCategory',
            type: {
              kind: 'OBJECT',
              name: 'EventCategory',
              ofType: null,
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'eventCategoryByName',
            type: {
              kind: 'OBJECT',
              name: 'EventCategory',
              ofType: null,
            },
            args: [
              {
                name: 'name',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'eventCategoryByRowId',
            type: {
              kind: 'OBJECT',
              name: 'EventCategory',
              ofType: null,
            },
            args: [
              {
                name: 'rowId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'eventCategoryMapping',
            type: {
              kind: 'OBJECT',
              name: 'EventCategoryMapping',
              ofType: null,
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'eventCategoryMappingByEventIdAndCategoryId',
            type: {
              kind: 'OBJECT',
              name: 'EventCategoryMapping',
              ofType: null,
            },
            args: [
              {
                name: 'categoryId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'eventId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'eventFavorite',
            type: {
              kind: 'OBJECT',
              name: 'EventFavorite',
              ofType: null,
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'eventFavoriteByCreatedByAndEventId',
            type: {
              kind: 'OBJECT',
              name: 'EventFavorite',
              ofType: null,
            },
            args: [
              {
                name: 'createdBy',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'eventId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'eventFavoriteByRowId',
            type: {
              kind: 'OBJECT',
              name: 'EventFavorite',
              ofType: null,
            },
            args: [
              {
                name: 'rowId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'eventFormat',
            type: {
              kind: 'OBJECT',
              name: 'EventFormat',
              ofType: null,
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'eventFormatByName',
            type: {
              kind: 'OBJECT',
              name: 'EventFormat',
              ofType: null,
            },
            args: [
              {
                name: 'name',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'eventFormatByRowId',
            type: {
              kind: 'OBJECT',
              name: 'EventFormat',
              ofType: null,
            },
            args: [
              {
                name: 'rowId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'eventFormatMapping',
            type: {
              kind: 'OBJECT',
              name: 'EventFormatMapping',
              ofType: null,
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'eventFormatMappingByEventIdAndFormatId',
            type: {
              kind: 'OBJECT',
              name: 'EventFormatMapping',
              ofType: null,
            },
            args: [
              {
                name: 'eventId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'formatId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'eventGuestCountMaximum',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [
              {
                name: 'eventId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'eventRecommendation',
            type: {
              kind: 'OBJECT',
              name: 'EventRecommendation',
              ofType: null,
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'eventRecommendationByAccountIdAndEventId',
            type: {
              kind: 'OBJECT',
              name: 'EventRecommendation',
              ofType: null,
            },
            args: [
              {
                name: 'accountId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'eventId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'eventSearch',
            type: {
              kind: 'OBJECT',
              name: 'EventConnection',
              ofType: null,
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'language',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'query',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'eventUpload',
            type: {
              kind: 'OBJECT',
              name: 'EventUpload',
              ofType: null,
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'eventUploadByEventIdAndUploadId',
            type: {
              kind: 'OBJECT',
              name: 'EventUpload',
              ofType: null,
            },
            args: [
              {
                name: 'eventId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'uploadId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'eventUploadByRowId',
            type: {
              kind: 'OBJECT',
              name: 'EventUpload',
              ofType: null,
            },
            args: [
              {
                name: 'rowId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'friendship',
            type: {
              kind: 'OBJECT',
              name: 'Friendship',
              ofType: null,
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'friendshipByAAccountIdAndBAccountId',
            type: {
              kind: 'OBJECT',
              name: 'Friendship',
              ofType: null,
            },
            args: [
              {
                name: 'aAccountId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'bAccountId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'friendshipByRowId',
            type: {
              kind: 'OBJECT',
              name: 'Friendship',
              ofType: null,
            },
            args: [
              {
                name: 'rowId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'guest',
            type: {
              kind: 'OBJECT',
              name: 'Guest',
              ofType: null,
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'guestByEventIdAndContactId',
            type: {
              kind: 'OBJECT',
              name: 'Guest',
              ofType: null,
            },
            args: [
              {
                name: 'contactId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'eventId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'guestByRowId',
            type: {
              kind: 'OBJECT',
              name: 'Guest',
              ofType: null,
            },
            args: [
              {
                name: 'rowId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'guestClaimArray',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'guestContactIds',
            type: {
              kind: 'OBJECT',
              name: 'GuestContactIdsConnection',
              ofType: null,
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'guestCount',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [
              {
                name: 'eventId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'invokerAccountId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'languageIsoFullTextSearch',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [
              {
                name: 'language',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'legalTerm',
            type: {
              kind: 'OBJECT',
              name: 'LegalTerm',
              ofType: null,
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'legalTermAcceptance',
            type: {
              kind: 'OBJECT',
              name: 'LegalTermAcceptance',
              ofType: null,
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'legalTermAcceptanceByRowId',
            type: {
              kind: 'OBJECT',
              name: 'LegalTermAcceptance',
              ofType: null,
            },
            args: [
              {
                name: 'rowId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'legalTermByLanguageAndVersion',
            type: {
              kind: 'OBJECT',
              name: 'LegalTerm',
              ofType: null,
            },
            args: [
              {
                name: 'language',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'version',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'legalTermByRowId',
            type: {
              kind: 'OBJECT',
              name: 'LegalTerm',
              ofType: null,
            },
            args: [
              {
                name: 'rowId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'node',
            type: {
              kind: 'INTERFACE',
              name: 'Node',
              ofType: null,
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'preferenceEventCategory',
            type: {
              kind: 'OBJECT',
              name: 'PreferenceEventCategory',
              ofType: null,
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'preferenceEventCategoryByAccountIdAndCategoryId',
            type: {
              kind: 'OBJECT',
              name: 'PreferenceEventCategory',
              ofType: null,
            },
            args: [
              {
                name: 'accountId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'categoryId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'preferenceEventCategoryByRowId',
            type: {
              kind: 'OBJECT',
              name: 'PreferenceEventCategory',
              ofType: null,
            },
            args: [
              {
                name: 'rowId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'preferenceEventFormat',
            type: {
              kind: 'OBJECT',
              name: 'PreferenceEventFormat',
              ofType: null,
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'preferenceEventFormatByAccountIdAndFormatId',
            type: {
              kind: 'OBJECT',
              name: 'PreferenceEventFormat',
              ofType: null,
            },
            args: [
              {
                name: 'accountId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'formatId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'preferenceEventFormatByRowId',
            type: {
              kind: 'OBJECT',
              name: 'PreferenceEventFormat',
              ofType: null,
            },
            args: [
              {
                name: 'rowId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'preferenceEventLocation',
            type: {
              kind: 'OBJECT',
              name: 'PreferenceEventLocation',
              ofType: null,
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'preferenceEventLocationByCreatedByAndLocationAndRadius',
            type: {
              kind: 'OBJECT',
              name: 'PreferenceEventLocation',
              ofType: null,
            },
            args: [
              {
                name: 'createdBy',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'location',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'radius',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'preferenceEventLocationByRowId',
            type: {
              kind: 'OBJECT',
              name: 'PreferenceEventLocation',
              ofType: null,
            },
            args: [
              {
                name: 'rowId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'preferenceEventSize',
            type: {
              kind: 'OBJECT',
              name: 'PreferenceEventSize',
              ofType: null,
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'preferenceEventSizeByAccountIdAndEventSize',
            type: {
              kind: 'OBJECT',
              name: 'PreferenceEventSize',
              ofType: null,
            },
            args: [
              {
                name: 'accountId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'eventSize',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'preferenceEventSizeByRowId',
            type: {
              kind: 'OBJECT',
              name: 'PreferenceEventSize',
              ofType: null,
            },
            args: [
              {
                name: 'rowId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'profilePicture',
            type: {
              kind: 'OBJECT',
              name: 'ProfilePicture',
              ofType: null,
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'profilePictureByAccountId',
            type: {
              kind: 'OBJECT',
              name: 'ProfilePicture',
              ofType: null,
            },
            args: [
              {
                name: 'accountId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'profilePictureByRowId',
            type: {
              kind: 'OBJECT',
              name: 'ProfilePicture',
              ofType: null,
            },
            args: [
              {
                name: 'rowId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'query',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'Query',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'report',
            type: {
              kind: 'OBJECT',
              name: 'Report',
              ofType: null,
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'reportByCreatedByAndTargetAccountIdAndTargetEventIdAndTargetUploadId',
            type: {
              kind: 'OBJECT',
              name: 'Report',
              ofType: null,
            },
            args: [
              {
                name: 'createdBy',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'targetAccountId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'targetEventId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'targetUploadId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'reportByRowId',
            type: {
              kind: 'OBJECT',
              name: 'Report',
              ofType: null,
            },
            args: [
              {
                name: 'rowId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'upload',
            type: {
              kind: 'OBJECT',
              name: 'Upload',
              ofType: null,
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'uploadByRowId',
            type: {
              kind: 'OBJECT',
              name: 'Upload',
              ofType: null,
            },
            args: [
              {
                name: 'rowId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'uploadByStorageKey',
            type: {
              kind: 'OBJECT',
              name: 'Upload',
              ofType: null,
            },
            args: [
              {
                name: 'storageKey',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
        ],
        interfaces: [
          {
            kind: 'INTERFACE',
            name: 'Node',
          },
        ],
      },
      {
        kind: 'OBJECT',
        name: 'Report',
        fields: [
          {
            name: 'accountByCreatedBy',
            type: {
              kind: 'OBJECT',
              name: 'Account',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'accountByTargetAccountId',
            type: {
              kind: 'OBJECT',
              name: 'Account',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'createdAt',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'createdBy',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'eventByTargetEventId',
            type: {
              kind: 'OBJECT',
              name: 'Event',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'reason',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'rowId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'targetAccountId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'targetEventId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'targetUploadId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'uploadByTargetUploadId',
            type: {
              kind: 'OBJECT',
              name: 'Upload',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [
          {
            kind: 'INTERFACE',
            name: 'Node',
          },
        ],
      },
      {
        kind: 'OBJECT',
        name: 'ReportConnection',
        fields: [
          {
            name: 'edges',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'ReportEdge',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'nodes',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'Report',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'pageInfo',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'PageInfo',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'totalCount',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'ReportEdge',
        fields: [
          {
            name: 'cursor',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'node',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'Report',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'UpdateAccountLocationPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'UpdateAccountPayload',
        fields: [
          {
            name: 'account',
            type: {
              kind: 'OBJECT',
              name: 'Account',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'accountEdge',
            type: {
              kind: 'OBJECT',
              name: 'AccountEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'UpdateAccountSocialNetworkPayload',
        fields: [
          {
            name: 'accountSocialNetwork',
            type: {
              kind: 'OBJECT',
              name: 'AccountSocialNetwork',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'accountSocialNetworkEdge',
            type: {
              kind: 'OBJECT',
              name: 'AccountSocialNetworkEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'UpdateAddressPayload',
        fields: [
          {
            name: 'address',
            type: {
              kind: 'OBJECT',
              name: 'Address',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'addressEdge',
            type: {
              kind: 'OBJECT',
              name: 'AddressEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'UpdateAttendancePayload',
        fields: [
          {
            name: 'attendance',
            type: {
              kind: 'OBJECT',
              name: 'Attendance',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'attendanceEdge',
            type: {
              kind: 'OBJECT',
              name: 'AttendanceEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'UpdateContactPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'contact',
            type: {
              kind: 'OBJECT',
              name: 'Contact',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'contactEdge',
            type: {
              kind: 'OBJECT',
              name: 'ContactEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'UpdateDevicePayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'device',
            type: {
              kind: 'OBJECT',
              name: 'Device',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'deviceEdge',
            type: {
              kind: 'OBJECT',
              name: 'DeviceEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'UpdateEventPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'event',
            type: {
              kind: 'OBJECT',
              name: 'Event',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'eventEdge',
            type: {
              kind: 'OBJECT',
              name: 'EventEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'UpdateFriendshipPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'friendship',
            type: {
              kind: 'OBJECT',
              name: 'Friendship',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'friendshipEdge',
            type: {
              kind: 'OBJECT',
              name: 'FriendshipEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'UpdateGuestPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'guest',
            type: {
              kind: 'OBJECT',
              name: 'Guest',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'guestEdge',
            type: {
              kind: 'OBJECT',
              name: 'GuestEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'UpdateProfilePicturePayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'profilePicture',
            type: {
              kind: 'OBJECT',
              name: 'ProfilePicture',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'profilePictureEdge',
            type: {
              kind: 'OBJECT',
              name: 'ProfilePictureEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'UpdateUploadPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'upload',
            type: {
              kind: 'OBJECT',
              name: 'Upload',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'uploadEdge',
            type: {
              kind: 'OBJECT',
              name: 'UploadEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
            ],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'Upload',
        fields: [
          {
            name: 'accountByCreatedBy',
            type: {
              kind: 'OBJECT',
              name: 'Account',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'createdAt',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'createdBy',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'eventUploadsByUploadId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'EventUploadConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'name',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'profilePicturesByUploadId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'ProfilePictureConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'reportsByTargetUploadId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'ReportConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'rowId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'sizeByte',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'storageKey',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'type',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [
          {
            kind: 'INTERFACE',
            name: 'Node',
          },
        ],
      },
      {
        kind: 'OBJECT',
        name: 'UploadConnection',
        fields: [
          {
            name: 'edges',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'UploadEdge',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'nodes',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'Upload',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'pageInfo',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'PageInfo',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'totalCount',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'UploadEdge',
        fields: [
          {
            name: 'cursor',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'node',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'Upload',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'SCALAR',
        name: 'Any',
      },
    ],
    directives: [],
  },
} as unknown as IntrospectionQuery
