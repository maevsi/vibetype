/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-explicit-any */

import type {
  cacheExchange,
  Resolver as GraphCacheResolver,
  UpdateResolver as GraphCacheUpdateResolver,
  OptimisticMutationResolver as GraphCacheOptimisticMutationResolver,
} from '@urql/exchange-graphcache'

export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  BigInt: { input: any; output: any }
  Cursor: { input: any; output: any }
  Date: { input: any; output: any }
  Datetime: { input: any; output: any }
  GeoJSON: { input: any; output: any }
  Jwt: { input: any; output: any }
  RegConfig: { input: any; output: any }
  UUID: { input: any; output: any }
}

/** Public account data. */
export type Account = Node & {
  __typename?: 'Account'
  /** Reads and enables pagination through a set of `AccountBlock`. */
  accountBlocksByBlockedAccountId: AccountBlocksConnection
  /** Reads and enables pagination through a set of `AccountBlock`. */
  accountBlocksByCreatedBy: AccountBlocksConnection
  /** Reads and enables pagination through a set of `AccountSocialNetwork`. */
  accountSocialNetworksByAccountId: AccountSocialNetworksConnection
  /** Reads and enables pagination through a set of `Achievement`. */
  achievementsByAccountId: AchievementsConnection
  /** Reads and enables pagination through a set of `Address`. */
  addressesByCreatedBy: AddressesConnection
  /** Reads and enables pagination through a set of `Address`. */
  addressesByUpdatedBy: AddressesConnection
  /** Reads and enables pagination through a set of `Contact`. */
  contactsByAccountId: ContactsConnection
  /** Reads and enables pagination through a set of `Contact`. */
  contactsByCreatedBy: ContactsConnection
  /** The account's description. */
  description?: Maybe<Scalars['String']['output']>
  /** Reads and enables pagination through a set of `Device`. */
  devicesByCreatedBy: DevicesConnection
  /** Reads and enables pagination through a set of `Device`. */
  devicesByUpdatedBy: DevicesConnection
  /** Reads and enables pagination through a set of `EventFavorite`. */
  eventFavoritesByCreatedBy: EventFavoritesConnection
  /** Reads and enables pagination through a set of `EventRecommendation`. */
  eventRecommendationsByAccountId: EventRecommendationsConnection
  /** Reads and enables pagination through a set of `Event`. */
  eventsByCreatedBy: EventsConnection
  /** Reads and enables pagination through a set of `Friendship`. */
  friendshipsByAAccountId: FriendshipsConnection
  /** Reads and enables pagination through a set of `Friendship`. */
  friendshipsByBAccountId: FriendshipsConnection
  /** Reads and enables pagination through a set of `Friendship`. */
  friendshipsByCreatedBy: FriendshipsConnection
  /** Reads and enables pagination through a set of `Friendship`. */
  friendshipsByUpdatedBy: FriendshipsConnection
  /** Reads and enables pagination through a set of `Guest`. */
  guestsByUpdatedBy: GuestsConnection
  /** The account's internal id. */
  id: Scalars['UUID']['output']
  /** The account's imprint. */
  imprint?: Maybe<Scalars['String']['output']>
  /** Reads and enables pagination through a set of `LegalTermAcceptance`. */
  legalTermAcceptancesByAccountId: LegalTermAcceptancesConnection
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output']
  /** Reads and enables pagination through a set of `PreferenceEventCategory`. */
  preferenceEventCategoriesByAccountId: PreferenceEventCategoriesConnection
  /** Reads and enables pagination through a set of `PreferenceEventFormat`. */
  preferenceEventFormatsByAccountId: PreferenceEventFormatsConnection
  /** Reads and enables pagination through a set of `PreferenceEventLocation`. */
  preferenceEventLocationsByCreatedBy: PreferenceEventLocationsConnection
  /** Reads and enables pagination through a set of `PreferenceEventSize`. */
  preferenceEventSizesByAccountId: PreferenceEventSizesConnection
  /** Reads a single `ProfilePicture` that is related to this `Account`. */
  profilePictureByAccountId?: Maybe<ProfilePicture>
  /**
   * Reads and enables pagination through a set of `ProfilePicture`.
   * @deprecated Please use profilePictureByAccountId instead
   */
  profilePicturesByAccountId: ProfilePicturesConnection
  /** Reads and enables pagination through a set of `Report`. */
  reportsByCreatedBy: ReportsConnection
  /** Reads and enables pagination through a set of `Report`. */
  reportsByTargetAccountId: ReportsConnection
  /** Reads and enables pagination through a set of `Upload`. */
  uploadsByCreatedBy: UploadsConnection
  /** The account's username. */
  username: Scalars['String']['output']
}

/** Public account data. */
export type AccountAccountBlocksByBlockedAccountIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<AccountBlockCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<AccountBlocksOrderBy>>
}

/** Public account data. */
export type AccountAccountBlocksByCreatedByArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<AccountBlockCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<AccountBlocksOrderBy>>
}

/** Public account data. */
export type AccountAccountSocialNetworksByAccountIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<AccountSocialNetworkCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<AccountSocialNetworksOrderBy>>
}

/** Public account data. */
export type AccountAchievementsByAccountIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<AchievementCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<AchievementsOrderBy>>
}

/** Public account data. */
export type AccountAddressesByCreatedByArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<AddressCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<AddressesOrderBy>>
}

/** Public account data. */
export type AccountAddressesByUpdatedByArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<AddressCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<AddressesOrderBy>>
}

/** Public account data. */
export type AccountContactsByAccountIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<ContactCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<ContactsOrderBy>>
}

/** Public account data. */
export type AccountContactsByCreatedByArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<ContactCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<ContactsOrderBy>>
}

/** Public account data. */
export type AccountDevicesByCreatedByArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<DeviceCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<DevicesOrderBy>>
}

/** Public account data. */
export type AccountDevicesByUpdatedByArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<DeviceCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<DevicesOrderBy>>
}

/** Public account data. */
export type AccountEventFavoritesByCreatedByArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventFavoriteCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<EventFavoritesOrderBy>>
}

/** Public account data. */
export type AccountEventRecommendationsByAccountIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventRecommendationCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<EventRecommendationsOrderBy>>
}

/** Public account data. */
export type AccountEventsByCreatedByArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<EventsOrderBy>>
}

/** Public account data. */
export type AccountFriendshipsByAAccountIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<FriendshipCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<FriendshipsOrderBy>>
}

/** Public account data. */
export type AccountFriendshipsByBAccountIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<FriendshipCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<FriendshipsOrderBy>>
}

/** Public account data. */
export type AccountFriendshipsByCreatedByArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<FriendshipCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<FriendshipsOrderBy>>
}

/** Public account data. */
export type AccountFriendshipsByUpdatedByArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<FriendshipCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<FriendshipsOrderBy>>
}

/** Public account data. */
export type AccountGuestsByUpdatedByArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<GuestCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<GuestsOrderBy>>
}

/** Public account data. */
export type AccountLegalTermAcceptancesByAccountIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<LegalTermAcceptanceCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<LegalTermAcceptancesOrderBy>>
}

/** Public account data. */
export type AccountPreferenceEventCategoriesByAccountIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<PreferenceEventCategoryCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<PreferenceEventCategoriesOrderBy>>
}

/** Public account data. */
export type AccountPreferenceEventFormatsByAccountIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<PreferenceEventFormatCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<PreferenceEventFormatsOrderBy>>
}

/** Public account data. */
export type AccountPreferenceEventLocationsByCreatedByArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<PreferenceEventLocationCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<PreferenceEventLocationsOrderBy>>
}

/** Public account data. */
export type AccountPreferenceEventSizesByAccountIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<PreferenceEventSizeCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<PreferenceEventSizesOrderBy>>
}

/** Public account data. */
export type AccountProfilePicturesByAccountIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<ProfilePictureCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<ProfilePicturesOrderBy>>
}

/** Public account data. */
export type AccountReportsByCreatedByArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<ReportCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<ReportsOrderBy>>
}

/** Public account data. */
export type AccountReportsByTargetAccountIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<ReportCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<ReportsOrderBy>>
}

/** Public account data. */
export type AccountUploadsByCreatedByArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<UploadCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<UploadsOrderBy>>
}

/** Blocking of one account by another. */
export type AccountBlock = Node & {
  __typename?: 'AccountBlock'
  /** Reads a single `Account` that is related to this `AccountBlock`. */
  accountByBlockedAccountId?: Maybe<Account>
  /** Reads a single `Account` that is related to this `AccountBlock`. */
  accountByCreatedBy?: Maybe<Account>
  /** The account id of the user who is blocked. */
  blockedAccountId: Scalars['UUID']['output']
  /** Timestamp of when the account block was created. */
  createdAt: Scalars['Datetime']['output']
  /** The account id of the user who created the account block. */
  createdBy: Scalars['UUID']['output']
  /** The account block's internal id. */
  id: Scalars['UUID']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output']
}

/**
 * A condition to be used against `AccountBlock` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type AccountBlockCondition = {
  /** Checks for equality with the object’s `blockedAccountId` field. */
  blockedAccountId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>
  /** Checks for equality with the object’s `createdBy` field. */
  createdBy?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>
}

/** An input for mutations affecting `AccountBlock` */
export type AccountBlockInput = {
  /** The account id of the user who is blocked. */
  blockedAccountId: Scalars['UUID']['input']
  /** The account id of the user who created the account block. */
  createdBy: Scalars['UUID']['input']
}

/** A connection to a list of `AccountBlock` values. */
export type AccountBlocksConnection = {
  __typename?: 'AccountBlocksConnection'
  /** A list of edges which contains the `AccountBlock` and cursor to aid in pagination. */
  edges: Array<AccountBlocksEdge>
  /** A list of `AccountBlock` objects. */
  nodes: Array<AccountBlock>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `AccountBlock` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `AccountBlock` edge in the connection. */
export type AccountBlocksEdge = {
  __typename?: 'AccountBlocksEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `AccountBlock` at the end of the edge. */
  node: AccountBlock
}

/** Methods to use when ordering `AccountBlock`. */
export enum AccountBlocksOrderBy {
  BlockedAccountIdAsc = 'BLOCKED_ACCOUNT_ID_ASC',
  BlockedAccountIdDesc = 'BLOCKED_ACCOUNT_ID_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  CreatedByAsc = 'CREATED_BY_ASC',
  CreatedByDesc = 'CREATED_BY_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
}

/** A condition to be used against `Account` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type AccountCondition = {
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `imprint` field. */
  imprint?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `username` field. */
  username?: InputMaybe<Scalars['String']['input']>
}

/** All input for the `accountDelete` mutation. */
export type AccountDeleteInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  password: Scalars['String']['input']
}

/** The output of our `accountDelete` mutation. */
export type AccountDeletePayload = {
  __typename?: 'AccountDeletePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** All input for the `accountEmailAddressVerification` mutation. */
export type AccountEmailAddressVerificationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  code: Scalars['UUID']['input']
}

/** The output of our `accountEmailAddressVerification` mutation. */
export type AccountEmailAddressVerificationPayload = {
  __typename?: 'AccountEmailAddressVerificationPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** All input for the `accountPasswordChange` mutation. */
export type AccountPasswordChangeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  passwordCurrent: Scalars['String']['input']
  passwordNew: Scalars['String']['input']
}

/** The output of our `accountPasswordChange` mutation. */
export type AccountPasswordChangePayload = {
  __typename?: 'AccountPasswordChangePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** All input for the `accountPasswordReset` mutation. */
export type AccountPasswordResetInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  code: Scalars['UUID']['input']
  password: Scalars['String']['input']
}

/** The output of our `accountPasswordReset` mutation. */
export type AccountPasswordResetPayload = {
  __typename?: 'AccountPasswordResetPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** All input for the `accountPasswordResetRequest` mutation. */
export type AccountPasswordResetRequestInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  emailAddress: Scalars['String']['input']
  language: Scalars['String']['input']
}

/** The output of our `accountPasswordResetRequest` mutation. */
export type AccountPasswordResetRequestPayload = {
  __typename?: 'AccountPasswordResetRequestPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** Represents an update to a `Account`. Fields that are set will be updated. */
export type AccountPatch = {
  /** The account's description. */
  description?: InputMaybe<Scalars['String']['input']>
  /** The account's imprint. */
  imprint?: InputMaybe<Scalars['String']['input']>
}

/** All input for the `accountRegistration` mutation. */
export type AccountRegistrationInput = {
  birthDate: Scalars['Date']['input']
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  emailAddress: Scalars['String']['input']
  language: Scalars['String']['input']
  legalTermId: Scalars['UUID']['input']
  password: Scalars['String']['input']
  username: Scalars['String']['input']
}

/** The output of our `accountRegistration` mutation. */
export type AccountRegistrationPayload = {
  __typename?: 'AccountRegistrationPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** All input for the `accountRegistrationRefresh` mutation. */
export type AccountRegistrationRefreshInput = {
  accountId: Scalars['UUID']['input']
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  language: Scalars['String']['input']
}

/** The output of our `accountRegistrationRefresh` mutation. */
export type AccountRegistrationRefreshPayload = {
  __typename?: 'AccountRegistrationRefreshPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** Links accounts to their social media profiles. Each entry represents a specific social network and associated username for an account. */
export type AccountSocialNetwork = Node & {
  __typename?: 'AccountSocialNetwork'
  /** Reads a single `Account` that is related to this `AccountSocialNetwork`. */
  accountByAccountId?: Maybe<Account>
  /** The unique identifier of the account. */
  accountId: Scalars['UUID']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output']
  /** The social network to which the account is linked. */
  socialNetwork: SocialNetwork
  /** The username of the account on the specified social network. */
  socialNetworkUsername: Scalars['String']['output']
}

/**
 * A condition to be used against `AccountSocialNetwork` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type AccountSocialNetworkCondition = {
  /** Checks for equality with the object’s `accountId` field. */
  accountId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `socialNetwork` field. */
  socialNetwork?: InputMaybe<SocialNetwork>
  /** Checks for equality with the object’s `socialNetworkUsername` field. */
  socialNetworkUsername?: InputMaybe<Scalars['String']['input']>
}

/** An input for mutations affecting `AccountSocialNetwork` */
export type AccountSocialNetworkInput = {
  /** The unique identifier of the account. */
  accountId: Scalars['UUID']['input']
  /** The social network to which the account is linked. */
  socialNetwork: SocialNetwork
  /** The username of the account on the specified social network. */
  socialNetworkUsername: Scalars['String']['input']
}

/** Represents an update to a `AccountSocialNetwork`. Fields that are set will be updated. */
export type AccountSocialNetworkPatch = {
  /** The unique identifier of the account. */
  accountId?: InputMaybe<Scalars['UUID']['input']>
  /** The social network to which the account is linked. */
  socialNetwork?: InputMaybe<SocialNetwork>
  /** The username of the account on the specified social network. */
  socialNetworkUsername?: InputMaybe<Scalars['String']['input']>
}

/** A connection to a list of `AccountSocialNetwork` values. */
export type AccountSocialNetworksConnection = {
  __typename?: 'AccountSocialNetworksConnection'
  /** A list of edges which contains the `AccountSocialNetwork` and cursor to aid in pagination. */
  edges: Array<AccountSocialNetworksEdge>
  /** A list of `AccountSocialNetwork` objects. */
  nodes: Array<AccountSocialNetwork>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `AccountSocialNetwork` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `AccountSocialNetwork` edge in the connection. */
export type AccountSocialNetworksEdge = {
  __typename?: 'AccountSocialNetworksEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `AccountSocialNetwork` at the end of the edge. */
  node: AccountSocialNetwork
}

/** Methods to use when ordering `AccountSocialNetwork`. */
export enum AccountSocialNetworksOrderBy {
  AccountIdAsc = 'ACCOUNT_ID_ASC',
  AccountIdDesc = 'ACCOUNT_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SocialNetworkAsc = 'SOCIAL_NETWORK_ASC',
  SocialNetworkDesc = 'SOCIAL_NETWORK_DESC',
  SocialNetworkUsernameAsc = 'SOCIAL_NETWORK_USERNAME_ASC',
  SocialNetworkUsernameDesc = 'SOCIAL_NETWORK_USERNAME_DESC',
}

/** A connection to a list of `Account` values. */
export type AccountsConnection = {
  __typename?: 'AccountsConnection'
  /** A list of edges which contains the `Account` and cursor to aid in pagination. */
  edges: Array<AccountsEdge>
  /** A list of `Account` objects. */
  nodes: Array<Account>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `Account` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `Account` edge in the connection. */
export type AccountsEdge = {
  __typename?: 'AccountsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `Account` at the end of the edge. */
  node: Account
}

/** Methods to use when ordering `Account`. */
export enum AccountsOrderBy {
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  ImprintAsc = 'IMPRINT_ASC',
  ImprintDesc = 'IMPRINT_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UsernameAsc = 'USERNAME_ASC',
  UsernameDesc = 'USERNAME_DESC',
}

/** Achievements unlocked by users. */
export type Achievement = Node & {
  __typename?: 'Achievement'
  /** Reads a single `Account` that is related to this `Achievement`. */
  accountByAccountId?: Maybe<Account>
  /** The account which unlocked the achievement. */
  accountId: Scalars['UUID']['output']
  /** The unlock's achievement. */
  achievement: AchievementType
  /** The achievement unlock's internal id. */
  id: Scalars['UUID']['output']
  /** The achievement unlock's level. */
  level: Scalars['Int']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output']
}

/**
 * A condition to be used against `Achievement` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type AchievementCondition = {
  /** Checks for equality with the object’s `accountId` field. */
  accountId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `achievement` field. */
  achievement?: InputMaybe<AchievementType>
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `level` field. */
  level?: InputMaybe<Scalars['Int']['input']>
}

/** An input for mutations affecting `Achievement` */
export type AchievementInput = {
  /** The account which unlocked the achievement. */
  accountId: Scalars['UUID']['input']
  /** The unlock's achievement. */
  achievement: AchievementType
  /** The achievement unlock's internal id. */
  id?: InputMaybe<Scalars['UUID']['input']>
  /** The achievement unlock's level. */
  level?: InputMaybe<Scalars['Int']['input']>
}

/** Represents an update to a `Achievement`. Fields that are set will be updated. */
export type AchievementPatch = {
  /** The account which unlocked the achievement. */
  accountId?: InputMaybe<Scalars['UUID']['input']>
  /** The unlock's achievement. */
  achievement?: InputMaybe<AchievementType>
  /** The achievement unlock's internal id. */
  id?: InputMaybe<Scalars['UUID']['input']>
  /** The achievement unlock's level. */
  level?: InputMaybe<Scalars['Int']['input']>
}

/** Achievements that can be unlocked by users. */
export enum AchievementType {
  EarlyBird = 'EARLY_BIRD',
  MeetTheTeam = 'MEET_THE_TEAM',
}

/** All input for the `achievementUnlock` mutation. */
export type AchievementUnlockInput = {
  alias: Scalars['String']['input']
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  code: Scalars['UUID']['input']
}

/** The output of our `achievementUnlock` mutation. */
export type AchievementUnlockPayload = {
  __typename?: 'AchievementUnlockPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  uuid?: Maybe<Scalars['UUID']['output']>
}

/** A connection to a list of `Achievement` values. */
export type AchievementsConnection = {
  __typename?: 'AchievementsConnection'
  /** A list of edges which contains the `Achievement` and cursor to aid in pagination. */
  edges: Array<AchievementsEdge>
  /** A list of `Achievement` objects. */
  nodes: Array<Achievement>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `Achievement` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `Achievement` edge in the connection. */
export type AchievementsEdge = {
  __typename?: 'AchievementsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `Achievement` at the end of the edge. */
  node: Achievement
}

/** Methods to use when ordering `Achievement`. */
export enum AchievementsOrderBy {
  AccountIdAsc = 'ACCOUNT_ID_ASC',
  AccountIdDesc = 'ACCOUNT_ID_DESC',
  AchievementAsc = 'ACHIEVEMENT_ASC',
  AchievementDesc = 'ACHIEVEMENT_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  LevelAsc = 'LEVEL_ASC',
  LevelDesc = 'LEVEL_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
}

/** Stores detailed address information, including lines, city, state, country, and metadata. */
export type Address = Node & {
  __typename?: 'Address'
  /** Reads a single `Account` that is related to this `Address`. */
  accountByCreatedBy?: Maybe<Account>
  /** Reads a single `Account` that is related to this `Address`. */
  accountByUpdatedBy?: Maybe<Account>
  /** City of the address. Must be between 1 and 300 characters. */
  city?: Maybe<Scalars['String']['output']>
  /** Reads and enables pagination through a set of `Contact`. */
  contactsByAddressId: ContactsConnection
  /** Country of the address. Must be between 1 and 300 characters. */
  country?: Maybe<Scalars['String']['output']>
  /** Timestamp when the address was created. Defaults to the current timestamp. */
  createdAt: Scalars['Datetime']['output']
  /** Reference to the account that created the address. */
  createdBy: Scalars['UUID']['output']
  /** Reads and enables pagination through a set of `Event`. */
  eventsByAddressId: EventsConnection
  /** Primary key, uniquely identifies each address. */
  id: Scalars['UUID']['output']
  /** First line of the address (e.g., street address). Must be between 1 and 300 characters. */
  line1?: Maybe<Scalars['String']['output']>
  /** Second line of the address, if needed. Must be between 1 and 300 characters. */
  line2?: Maybe<Scalars['String']['output']>
  /** The geographic location of the address. */
  location?: Maybe<GeographyPoint>
  /** Person or company name. Must be between 1 and 300 characters. */
  name: Scalars['String']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output']
  /** Postal or ZIP code for the address. Must be between 1 and 20 characters. */
  postalCode?: Maybe<Scalars['String']['output']>
  /** Region of the address (e.g., state, province, county, department or territory). Must be between 1 and 300 characters. */
  region?: Maybe<Scalars['String']['output']>
  /** Timestamp when the address was last updated. */
  updatedAt?: Maybe<Scalars['Datetime']['output']>
  /** Reference to the account that last updated the address. */
  updatedBy?: Maybe<Scalars['UUID']['output']>
}

/** Stores detailed address information, including lines, city, state, country, and metadata. */
export type AddressContactsByAddressIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<ContactCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<ContactsOrderBy>>
}

/** Stores detailed address information, including lines, city, state, country, and metadata. */
export type AddressEventsByAddressIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<EventsOrderBy>>
}

/** A condition to be used against `Address` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type AddressCondition = {
  /** Checks for equality with the object’s `city` field. */
  city?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `country` field. */
  country?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>
  /** Checks for equality with the object’s `createdBy` field. */
  createdBy?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `line1` field. */
  line1?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `line2` field. */
  line2?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `location` field. */
  location?: InputMaybe<Scalars['GeoJSON']['input']>
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `postalCode` field. */
  postalCode?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `region` field. */
  region?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>
  /** Checks for equality with the object’s `updatedBy` field. */
  updatedBy?: InputMaybe<Scalars['UUID']['input']>
}

/** An input for mutations affecting `Address` */
export type AddressInput = {
  /** City of the address. Must be between 1 and 300 characters. */
  city?: InputMaybe<Scalars['String']['input']>
  /** Country of the address. Must be between 1 and 300 characters. */
  country?: InputMaybe<Scalars['String']['input']>
  /** Reference to the account that created the address. */
  createdBy: Scalars['UUID']['input']
  /** First line of the address (e.g., street address). Must be between 1 and 300 characters. */
  line1?: InputMaybe<Scalars['String']['input']>
  /** Second line of the address, if needed. Must be between 1 and 300 characters. */
  line2?: InputMaybe<Scalars['String']['input']>
  /** The geographic location of the address. */
  location?: InputMaybe<Scalars['GeoJSON']['input']>
  /** Person or company name. Must be between 1 and 300 characters. */
  name: Scalars['String']['input']
  /** Postal or ZIP code for the address. Must be between 1 and 20 characters. */
  postalCode?: InputMaybe<Scalars['String']['input']>
  /** Region of the address (e.g., state, province, county, department or territory). Must be between 1 and 300 characters. */
  region?: InputMaybe<Scalars['String']['input']>
}

/** Represents an update to a `Address`. Fields that are set will be updated. */
export type AddressPatch = {
  /** City of the address. Must be between 1 and 300 characters. */
  city?: InputMaybe<Scalars['String']['input']>
  /** Country of the address. Must be between 1 and 300 characters. */
  country?: InputMaybe<Scalars['String']['input']>
  /** First line of the address (e.g., street address). Must be between 1 and 300 characters. */
  line1?: InputMaybe<Scalars['String']['input']>
  /** Second line of the address, if needed. Must be between 1 and 300 characters. */
  line2?: InputMaybe<Scalars['String']['input']>
  /** The geographic location of the address. */
  location?: InputMaybe<Scalars['GeoJSON']['input']>
  /** Person or company name. Must be between 1 and 300 characters. */
  name?: InputMaybe<Scalars['String']['input']>
  /** Postal or ZIP code for the address. Must be between 1 and 20 characters. */
  postalCode?: InputMaybe<Scalars['String']['input']>
  /** Region of the address (e.g., state, province, county, department or territory). Must be between 1 and 300 characters. */
  region?: InputMaybe<Scalars['String']['input']>
}

/** A connection to a list of `Address` values. */
export type AddressesConnection = {
  __typename?: 'AddressesConnection'
  /** A list of edges which contains the `Address` and cursor to aid in pagination. */
  edges: Array<AddressesEdge>
  /** A list of `Address` objects. */
  nodes: Array<Address>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `Address` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `Address` edge in the connection. */
export type AddressesEdge = {
  __typename?: 'AddressesEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `Address` at the end of the edge. */
  node: Address
}

/** Methods to use when ordering `Address`. */
export enum AddressesOrderBy {
  CityAsc = 'CITY_ASC',
  CityDesc = 'CITY_DESC',
  CountryAsc = 'COUNTRY_ASC',
  CountryDesc = 'COUNTRY_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  CreatedByAsc = 'CREATED_BY_ASC',
  CreatedByDesc = 'CREATED_BY_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Line_1Asc = 'LINE_1_ASC',
  Line_1Desc = 'LINE_1_DESC',
  Line_2Asc = 'LINE_2_ASC',
  Line_2Desc = 'LINE_2_DESC',
  LocationAsc = 'LOCATION_ASC',
  LocationDesc = 'LOCATION_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PostalCodeAsc = 'POSTAL_CODE_ASC',
  PostalCodeDesc = 'POSTAL_CODE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RegionAsc = 'REGION_ASC',
  RegionDesc = 'REGION_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  UpdatedByAsc = 'UPDATED_BY_ASC',
  UpdatedByDesc = 'UPDATED_BY_DESC',
}

/** All input for the `authenticate` mutation. */
export type AuthenticateInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  password: Scalars['String']['input']
  username: Scalars['String']['input']
}

/** The output of our `authenticate` mutation. */
export type AuthenticatePayload = {
  __typename?: 'AuthenticatePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  jwt?: Maybe<Scalars['Jwt']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** Stores contact information related to accounts, including personal details, communication preferences, and metadata. */
export type Contact = Node & {
  __typename?: 'Contact'
  /** Reads a single `Account` that is related to this `Contact`. */
  accountByAccountId?: Maybe<Account>
  /** Reads a single `Account` that is related to this `Contact`. */
  accountByCreatedBy?: Maybe<Account>
  /** Optional reference to an associated account. */
  accountId?: Maybe<Scalars['UUID']['output']>
  /** Reads a single `Address` that is related to this `Contact`. */
  addressByAddressId?: Maybe<Address>
  /** Optional reference to the physical address of the contact. */
  addressId?: Maybe<Scalars['UUID']['output']>
  /** Timestamp when the contact was created. Defaults to the current timestamp. */
  createdAt: Scalars['Datetime']['output']
  /** Reference to the account that created this contact. Enforces cascading deletion. */
  createdBy: Scalars['UUID']['output']
  /** Email address of the contact. Must be shorter than 256 characters. */
  emailAddress?: Maybe<Scalars['String']['output']>
  /** Hash of the email address, generated using md5 on the lowercased trimmed version of the email. Useful to display a profile picture from Gravatar. */
  emailAddressHash?: Maybe<Scalars['String']['output']>
  /** First name of the contact. Must be between 1 and 100 characters. */
  firstName?: Maybe<Scalars['String']['output']>
  /** Reads and enables pagination through a set of `Guest`. */
  guestsByContactId: GuestsConnection
  /** Primary key, uniquely identifies each contact. */
  id: Scalars['UUID']['output']
  /** Reference to the preferred language of the contact. */
  language?: Maybe<Language>
  /** Last name of the contact. Must be between 1 and 100 characters. */
  lastName?: Maybe<Scalars['String']['output']>
  /** Nickname of the contact. Must be between 1 and 100 characters. Useful when the contact is not commonly referred to by their legal name. */
  nickname?: Maybe<Scalars['String']['output']>
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output']
  /** Additional notes about the contact. Must be between 1 and 1.000 characters. Useful for providing context or distinguishing details if the name alone is insufficient. */
  note?: Maybe<Scalars['String']['output']>
  /** The international phone number of the contact, formatted according to E.164 (https://wikipedia.org/wiki/E.164). */
  phoneNumber?: Maybe<Scalars['String']['output']>
  /** Timezone of the contact in ISO 8601 format, e.g., `+02:00`, `-05:30`, or `Z`. */
  timezone?: Maybe<Scalars['String']['output']>
  /** URL associated with the contact, must start with "https://" and be up to 300 characters. */
  url?: Maybe<Scalars['String']['output']>
}

/** Stores contact information related to accounts, including personal details, communication preferences, and metadata. */
export type ContactGuestsByContactIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<GuestCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<GuestsOrderBy>>
}

/** A condition to be used against `Contact` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type ContactCondition = {
  /** Checks for equality with the object’s `accountId` field. */
  accountId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `addressId` field. */
  addressId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>
  /** Checks for equality with the object’s `createdBy` field. */
  createdBy?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `emailAddress` field. */
  emailAddress?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `emailAddressHash` field. */
  emailAddressHash?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `firstName` field. */
  firstName?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `language` field. */
  language?: InputMaybe<Language>
  /** Checks for equality with the object’s `lastName` field. */
  lastName?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `nickname` field. */
  nickname?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `note` field. */
  note?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `phoneNumber` field. */
  phoneNumber?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `timezone` field. */
  timezone?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `url` field. */
  url?: InputMaybe<Scalars['String']['input']>
}

/** An input for mutations affecting `Contact` */
export type ContactInput = {
  /** Optional reference to an associated account. */
  accountId?: InputMaybe<Scalars['UUID']['input']>
  /** Optional reference to the physical address of the contact. */
  addressId?: InputMaybe<Scalars['UUID']['input']>
  /** Reference to the account that created this contact. Enforces cascading deletion. */
  createdBy: Scalars['UUID']['input']
  /** Email address of the contact. Must be shorter than 256 characters. */
  emailAddress?: InputMaybe<Scalars['String']['input']>
  /** First name of the contact. Must be between 1 and 100 characters. */
  firstName?: InputMaybe<Scalars['String']['input']>
  /** Reference to the preferred language of the contact. */
  language?: InputMaybe<Language>
  /** Last name of the contact. Must be between 1 and 100 characters. */
  lastName?: InputMaybe<Scalars['String']['input']>
  /** Nickname of the contact. Must be between 1 and 100 characters. Useful when the contact is not commonly referred to by their legal name. */
  nickname?: InputMaybe<Scalars['String']['input']>
  /** Additional notes about the contact. Must be between 1 and 1.000 characters. Useful for providing context or distinguishing details if the name alone is insufficient. */
  note?: InputMaybe<Scalars['String']['input']>
  /** The international phone number of the contact, formatted according to E.164 (https://wikipedia.org/wiki/E.164). */
  phoneNumber?: InputMaybe<Scalars['String']['input']>
  /** Timezone of the contact in ISO 8601 format, e.g., `+02:00`, `-05:30`, or `Z`. */
  timezone?: InputMaybe<Scalars['String']['input']>
  /** URL associated with the contact, must start with "https://" and be up to 300 characters. */
  url?: InputMaybe<Scalars['String']['input']>
}

/** Represents an update to a `Contact`. Fields that are set will be updated. */
export type ContactPatch = {
  /** Optional reference to an associated account. */
  accountId?: InputMaybe<Scalars['UUID']['input']>
  /** Optional reference to the physical address of the contact. */
  addressId?: InputMaybe<Scalars['UUID']['input']>
  /** Reference to the account that created this contact. Enforces cascading deletion. */
  createdBy?: InputMaybe<Scalars['UUID']['input']>
  /** Email address of the contact. Must be shorter than 256 characters. */
  emailAddress?: InputMaybe<Scalars['String']['input']>
  /** First name of the contact. Must be between 1 and 100 characters. */
  firstName?: InputMaybe<Scalars['String']['input']>
  /** Reference to the preferred language of the contact. */
  language?: InputMaybe<Language>
  /** Last name of the contact. Must be between 1 and 100 characters. */
  lastName?: InputMaybe<Scalars['String']['input']>
  /** Nickname of the contact. Must be between 1 and 100 characters. Useful when the contact is not commonly referred to by their legal name. */
  nickname?: InputMaybe<Scalars['String']['input']>
  /** Additional notes about the contact. Must be between 1 and 1.000 characters. Useful for providing context or distinguishing details if the name alone is insufficient. */
  note?: InputMaybe<Scalars['String']['input']>
  /** The international phone number of the contact, formatted according to E.164 (https://wikipedia.org/wiki/E.164). */
  phoneNumber?: InputMaybe<Scalars['String']['input']>
  /** Timezone of the contact in ISO 8601 format, e.g., `+02:00`, `-05:30`, or `Z`. */
  timezone?: InputMaybe<Scalars['String']['input']>
  /** URL associated with the contact, must start with "https://" and be up to 300 characters. */
  url?: InputMaybe<Scalars['String']['input']>
}

/** A connection to a list of `Contact` values. */
export type ContactsConnection = {
  __typename?: 'ContactsConnection'
  /** A list of edges which contains the `Contact` and cursor to aid in pagination. */
  edges: Array<ContactsEdge>
  /** A list of `Contact` objects. */
  nodes: Array<Contact>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `Contact` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `Contact` edge in the connection. */
export type ContactsEdge = {
  __typename?: 'ContactsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `Contact` at the end of the edge. */
  node: Contact
}

/** Methods to use when ordering `Contact`. */
export enum ContactsOrderBy {
  AccountIdAsc = 'ACCOUNT_ID_ASC',
  AccountIdDesc = 'ACCOUNT_ID_DESC',
  AddressIdAsc = 'ADDRESS_ID_ASC',
  AddressIdDesc = 'ADDRESS_ID_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  CreatedByAsc = 'CREATED_BY_ASC',
  CreatedByDesc = 'CREATED_BY_DESC',
  EmailAddressAsc = 'EMAIL_ADDRESS_ASC',
  EmailAddressDesc = 'EMAIL_ADDRESS_DESC',
  EmailAddressHashAsc = 'EMAIL_ADDRESS_HASH_ASC',
  EmailAddressHashDesc = 'EMAIL_ADDRESS_HASH_DESC',
  FirstNameAsc = 'FIRST_NAME_ASC',
  FirstNameDesc = 'FIRST_NAME_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  LanguageAsc = 'LANGUAGE_ASC',
  LanguageDesc = 'LANGUAGE_DESC',
  LastNameAsc = 'LAST_NAME_ASC',
  LastNameDesc = 'LAST_NAME_DESC',
  Natural = 'NATURAL',
  NicknameAsc = 'NICKNAME_ASC',
  NicknameDesc = 'NICKNAME_DESC',
  NoteAsc = 'NOTE_ASC',
  NoteDesc = 'NOTE_DESC',
  PhoneNumberAsc = 'PHONE_NUMBER_ASC',
  PhoneNumberDesc = 'PHONE_NUMBER_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TimezoneAsc = 'TIMEZONE_ASC',
  TimezoneDesc = 'TIMEZONE_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
}

/** All input for the create `AccountBlock` mutation. */
export type CreateAccountBlockInput = {
  /** The `AccountBlock` to be created by this mutation. */
  accountBlock: AccountBlockInput
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
}

/** The output of our create `AccountBlock` mutation. */
export type CreateAccountBlockPayload = {
  __typename?: 'CreateAccountBlockPayload'
  /** The `AccountBlock` that was created by this mutation. */
  accountBlock?: Maybe<AccountBlock>
  /** An edge for our `AccountBlock`. May be used by Relay 1. */
  accountBlockEdge?: Maybe<AccountBlocksEdge>
  /** Reads a single `Account` that is related to this `AccountBlock`. */
  accountByBlockedAccountId?: Maybe<Account>
  /** Reads a single `Account` that is related to this `AccountBlock`. */
  accountByCreatedBy?: Maybe<Account>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `AccountBlock` mutation. */
export type CreateAccountBlockPayloadAccountBlockEdgeArgs = {
  orderBy?: InputMaybe<Array<AccountBlocksOrderBy>>
}

/** All input for the create `AccountSocialNetwork` mutation. */
export type CreateAccountSocialNetworkInput = {
  /** The `AccountSocialNetwork` to be created by this mutation. */
  accountSocialNetwork: AccountSocialNetworkInput
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
}

/** The output of our create `AccountSocialNetwork` mutation. */
export type CreateAccountSocialNetworkPayload = {
  __typename?: 'CreateAccountSocialNetworkPayload'
  /** Reads a single `Account` that is related to this `AccountSocialNetwork`. */
  accountByAccountId?: Maybe<Account>
  /** The `AccountSocialNetwork` that was created by this mutation. */
  accountSocialNetwork?: Maybe<AccountSocialNetwork>
  /** An edge for our `AccountSocialNetwork`. May be used by Relay 1. */
  accountSocialNetworkEdge?: Maybe<AccountSocialNetworksEdge>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `AccountSocialNetwork` mutation. */
export type CreateAccountSocialNetworkPayloadAccountSocialNetworkEdgeArgs = {
  orderBy?: InputMaybe<Array<AccountSocialNetworksOrderBy>>
}

/** All input for the create `Achievement` mutation. */
export type CreateAchievementInput = {
  /** The `Achievement` to be created by this mutation. */
  achievement: AchievementInput
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
}

/** The output of our create `Achievement` mutation. */
export type CreateAchievementPayload = {
  __typename?: 'CreateAchievementPayload'
  /** Reads a single `Account` that is related to this `Achievement`. */
  accountByAccountId?: Maybe<Account>
  /** The `Achievement` that was created by this mutation. */
  achievement?: Maybe<Achievement>
  /** An edge for our `Achievement`. May be used by Relay 1. */
  achievementEdge?: Maybe<AchievementsEdge>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `Achievement` mutation. */
export type CreateAchievementPayloadAchievementEdgeArgs = {
  orderBy?: InputMaybe<Array<AchievementsOrderBy>>
}

/** All input for the create `Address` mutation. */
export type CreateAddressInput = {
  /** The `Address` to be created by this mutation. */
  address: AddressInput
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
}

/** The output of our create `Address` mutation. */
export type CreateAddressPayload = {
  __typename?: 'CreateAddressPayload'
  /** Reads a single `Account` that is related to this `Address`. */
  accountByCreatedBy?: Maybe<Account>
  /** Reads a single `Account` that is related to this `Address`. */
  accountByUpdatedBy?: Maybe<Account>
  /** The `Address` that was created by this mutation. */
  address?: Maybe<Address>
  /** An edge for our `Address`. May be used by Relay 1. */
  addressEdge?: Maybe<AddressesEdge>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `Address` mutation. */
export type CreateAddressPayloadAddressEdgeArgs = {
  orderBy?: InputMaybe<Array<AddressesOrderBy>>
}

/** All input for the create `Contact` mutation. */
export type CreateContactInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The `Contact` to be created by this mutation. */
  contact: ContactInput
}

/** The output of our create `Contact` mutation. */
export type CreateContactPayload = {
  __typename?: 'CreateContactPayload'
  /** Reads a single `Account` that is related to this `Contact`. */
  accountByAccountId?: Maybe<Account>
  /** Reads a single `Account` that is related to this `Contact`. */
  accountByCreatedBy?: Maybe<Account>
  /** Reads a single `Address` that is related to this `Contact`. */
  addressByAddressId?: Maybe<Address>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `Contact` that was created by this mutation. */
  contact?: Maybe<Contact>
  /** An edge for our `Contact`. May be used by Relay 1. */
  contactEdge?: Maybe<ContactsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `Contact` mutation. */
export type CreateContactPayloadContactEdgeArgs = {
  orderBy?: InputMaybe<Array<ContactsOrderBy>>
}

/** All input for the create `Device` mutation. */
export type CreateDeviceInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The `Device` to be created by this mutation. */
  device: DeviceInput
}

/** The output of our create `Device` mutation. */
export type CreateDevicePayload = {
  __typename?: 'CreateDevicePayload'
  /** Reads a single `Account` that is related to this `Device`. */
  accountByCreatedBy?: Maybe<Account>
  /** Reads a single `Account` that is related to this `Device`. */
  accountByUpdatedBy?: Maybe<Account>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `Device` that was created by this mutation. */
  device?: Maybe<Device>
  /** An edge for our `Device`. May be used by Relay 1. */
  deviceEdge?: Maybe<DevicesEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `Device` mutation. */
export type CreateDevicePayloadDeviceEdgeArgs = {
  orderBy?: InputMaybe<Array<DevicesOrderBy>>
}

/** All input for the create `EventCategoryMapping` mutation. */
export type CreateEventCategoryMappingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The `EventCategoryMapping` to be created by this mutation. */
  eventCategoryMapping: EventCategoryMappingInput
}

/** The output of our create `EventCategoryMapping` mutation. */
export type CreateEventCategoryMappingPayload = {
  __typename?: 'CreateEventCategoryMappingPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Reads a single `Event` that is related to this `EventCategoryMapping`. */
  eventByEventId?: Maybe<Event>
  /** Reads a single `EventCategory` that is related to this `EventCategoryMapping`. */
  eventCategoryByCategoryId?: Maybe<EventCategory>
  /** The `EventCategoryMapping` that was created by this mutation. */
  eventCategoryMapping?: Maybe<EventCategoryMapping>
  /** An edge for our `EventCategoryMapping`. May be used by Relay 1. */
  eventCategoryMappingEdge?: Maybe<EventCategoryMappingsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `EventCategoryMapping` mutation. */
export type CreateEventCategoryMappingPayloadEventCategoryMappingEdgeArgs = {
  orderBy?: InputMaybe<Array<EventCategoryMappingsOrderBy>>
}

/** All input for the create `EventFavorite` mutation. */
export type CreateEventFavoriteInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The `EventFavorite` to be created by this mutation. */
  eventFavorite: EventFavoriteInput
}

/** The output of our create `EventFavorite` mutation. */
export type CreateEventFavoritePayload = {
  __typename?: 'CreateEventFavoritePayload'
  /** Reads a single `Account` that is related to this `EventFavorite`. */
  accountByCreatedBy?: Maybe<Account>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Reads a single `Event` that is related to this `EventFavorite`. */
  eventByEventId?: Maybe<Event>
  /** The `EventFavorite` that was created by this mutation. */
  eventFavorite?: Maybe<EventFavorite>
  /** An edge for our `EventFavorite`. May be used by Relay 1. */
  eventFavoriteEdge?: Maybe<EventFavoritesEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `EventFavorite` mutation. */
export type CreateEventFavoritePayloadEventFavoriteEdgeArgs = {
  orderBy?: InputMaybe<Array<EventFavoritesOrderBy>>
}

/** All input for the create `EventFormatMapping` mutation. */
export type CreateEventFormatMappingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The `EventFormatMapping` to be created by this mutation. */
  eventFormatMapping: EventFormatMappingInput
}

/** The output of our create `EventFormatMapping` mutation. */
export type CreateEventFormatMappingPayload = {
  __typename?: 'CreateEventFormatMappingPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Reads a single `Event` that is related to this `EventFormatMapping`. */
  eventByEventId?: Maybe<Event>
  /** Reads a single `EventFormat` that is related to this `EventFormatMapping`. */
  eventFormatByFormatId?: Maybe<EventFormat>
  /** The `EventFormatMapping` that was created by this mutation. */
  eventFormatMapping?: Maybe<EventFormatMapping>
  /** An edge for our `EventFormatMapping`. May be used by Relay 1. */
  eventFormatMappingEdge?: Maybe<EventFormatMappingsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `EventFormatMapping` mutation. */
export type CreateEventFormatMappingPayloadEventFormatMappingEdgeArgs = {
  orderBy?: InputMaybe<Array<EventFormatMappingsOrderBy>>
}

/** All input for the create `Event` mutation. */
export type CreateEventInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The `Event` to be created by this mutation. */
  event: EventInput
}

/** The output of our create `Event` mutation. */
export type CreateEventPayload = {
  __typename?: 'CreateEventPayload'
  /** Reads a single `Account` that is related to this `Event`. */
  accountByCreatedBy?: Maybe<Account>
  /** Reads a single `Address` that is related to this `Event`. */
  addressByAddressId?: Maybe<Address>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `Event` that was created by this mutation. */
  event?: Maybe<Event>
  /** An edge for our `Event`. May be used by Relay 1. */
  eventEdge?: Maybe<EventsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `Event` mutation. */
export type CreateEventPayloadEventEdgeArgs = {
  orderBy?: InputMaybe<Array<EventsOrderBy>>
}

/** All input for the create `EventRecommendation` mutation. */
export type CreateEventRecommendationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The `EventRecommendation` to be created by this mutation. */
  eventRecommendation: EventRecommendationInput
}

/** The output of our create `EventRecommendation` mutation. */
export type CreateEventRecommendationPayload = {
  __typename?: 'CreateEventRecommendationPayload'
  /** Reads a single `Account` that is related to this `EventRecommendation`. */
  accountByAccountId?: Maybe<Account>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Reads a single `Event` that is related to this `EventRecommendation`. */
  eventByEventId?: Maybe<Event>
  /** The `EventRecommendation` that was created by this mutation. */
  eventRecommendation?: Maybe<EventRecommendation>
  /** An edge for our `EventRecommendation`. May be used by Relay 1. */
  eventRecommendationEdge?: Maybe<EventRecommendationsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `EventRecommendation` mutation. */
export type CreateEventRecommendationPayloadEventRecommendationEdgeArgs = {
  orderBy?: InputMaybe<Array<EventRecommendationsOrderBy>>
}

/** All input for the create `EventUpload` mutation. */
export type CreateEventUploadInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The `EventUpload` to be created by this mutation. */
  eventUpload: EventUploadInput
}

/** The output of our create `EventUpload` mutation. */
export type CreateEventUploadPayload = {
  __typename?: 'CreateEventUploadPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Reads a single `Event` that is related to this `EventUpload`. */
  eventByEventId?: Maybe<Event>
  /** The `EventUpload` that was created by this mutation. */
  eventUpload?: Maybe<EventUpload>
  /** An edge for our `EventUpload`. May be used by Relay 1. */
  eventUploadEdge?: Maybe<EventUploadsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `Upload` that is related to this `EventUpload`. */
  uploadByUploadId?: Maybe<Upload>
}

/** The output of our create `EventUpload` mutation. */
export type CreateEventUploadPayloadEventUploadEdgeArgs = {
  orderBy?: InputMaybe<Array<EventUploadsOrderBy>>
}

/** All input for the create `Friendship` mutation. */
export type CreateFriendshipInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The `Friendship` to be created by this mutation. */
  friendship: FriendshipInput
}

/** The output of our create `Friendship` mutation. */
export type CreateFriendshipPayload = {
  __typename?: 'CreateFriendshipPayload'
  /** Reads a single `Account` that is related to this `Friendship`. */
  accountByAAccountId?: Maybe<Account>
  /** Reads a single `Account` that is related to this `Friendship`. */
  accountByBAccountId?: Maybe<Account>
  /** Reads a single `Account` that is related to this `Friendship`. */
  accountByCreatedBy?: Maybe<Account>
  /** Reads a single `Account` that is related to this `Friendship`. */
  accountByUpdatedBy?: Maybe<Account>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `Friendship` that was created by this mutation. */
  friendship?: Maybe<Friendship>
  /** An edge for our `Friendship`. May be used by Relay 1. */
  friendshipEdge?: Maybe<FriendshipsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `Friendship` mutation. */
export type CreateFriendshipPayloadFriendshipEdgeArgs = {
  orderBy?: InputMaybe<Array<FriendshipsOrderBy>>
}

/** All input for the create `Guest` mutation. */
export type CreateGuestInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The `Guest` to be created by this mutation. */
  guest: GuestInput
}

/** The output of our create `Guest` mutation. */
export type CreateGuestPayload = {
  __typename?: 'CreateGuestPayload'
  /** Reads a single `Account` that is related to this `Guest`. */
  accountByUpdatedBy?: Maybe<Account>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Reads a single `Contact` that is related to this `Guest`. */
  contactByContactId?: Maybe<Contact>
  /** Reads a single `Event` that is related to this `Guest`. */
  eventByEventId?: Maybe<Event>
  /** The `Guest` that was created by this mutation. */
  guest?: Maybe<Guest>
  /** An edge for our `Guest`. May be used by Relay 1. */
  guestEdge?: Maybe<GuestsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `Guest` mutation. */
export type CreateGuestPayloadGuestEdgeArgs = {
  orderBy?: InputMaybe<Array<GuestsOrderBy>>
}

/** All input for the `createGuests` mutation. */
export type CreateGuestsInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  contactIds: Array<InputMaybe<Scalars['UUID']['input']>>
  eventId: Scalars['UUID']['input']
}

/** The output of our `createGuests` mutation. */
export type CreateGuestsPayload = {
  __typename?: 'CreateGuestsPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  guests?: Maybe<Array<Guest>>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** All input for the create `LegalTermAcceptance` mutation. */
export type CreateLegalTermAcceptanceInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The `LegalTermAcceptance` to be created by this mutation. */
  legalTermAcceptance: LegalTermAcceptanceInput
}

/** The output of our create `LegalTermAcceptance` mutation. */
export type CreateLegalTermAcceptancePayload = {
  __typename?: 'CreateLegalTermAcceptancePayload'
  /** Reads a single `Account` that is related to this `LegalTermAcceptance`. */
  accountByAccountId?: Maybe<Account>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `LegalTermAcceptance` that was created by this mutation. */
  legalTermAcceptance?: Maybe<LegalTermAcceptance>
  /** An edge for our `LegalTermAcceptance`. May be used by Relay 1. */
  legalTermAcceptanceEdge?: Maybe<LegalTermAcceptancesEdge>
  /** Reads a single `LegalTerm` that is related to this `LegalTermAcceptance`. */
  legalTermByLegalTermId?: Maybe<LegalTerm>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `LegalTermAcceptance` mutation. */
export type CreateLegalTermAcceptancePayloadLegalTermAcceptanceEdgeArgs = {
  orderBy?: InputMaybe<Array<LegalTermAcceptancesOrderBy>>
}

/** All input for the create `PreferenceEventCategory` mutation. */
export type CreatePreferenceEventCategoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The `PreferenceEventCategory` to be created by this mutation. */
  preferenceEventCategory: PreferenceEventCategoryInput
}

/** The output of our create `PreferenceEventCategory` mutation. */
export type CreatePreferenceEventCategoryPayload = {
  __typename?: 'CreatePreferenceEventCategoryPayload'
  /** Reads a single `Account` that is related to this `PreferenceEventCategory`. */
  accountByAccountId?: Maybe<Account>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Reads a single `EventCategory` that is related to this `PreferenceEventCategory`. */
  eventCategoryByCategoryId?: Maybe<EventCategory>
  /** The `PreferenceEventCategory` that was created by this mutation. */
  preferenceEventCategory?: Maybe<PreferenceEventCategory>
  /** An edge for our `PreferenceEventCategory`. May be used by Relay 1. */
  preferenceEventCategoryEdge?: Maybe<PreferenceEventCategoriesEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `PreferenceEventCategory` mutation. */
export type CreatePreferenceEventCategoryPayloadPreferenceEventCategoryEdgeArgs =
  {
    orderBy?: InputMaybe<Array<PreferenceEventCategoriesOrderBy>>
  }

/** All input for the create `PreferenceEventFormat` mutation. */
export type CreatePreferenceEventFormatInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The `PreferenceEventFormat` to be created by this mutation. */
  preferenceEventFormat: PreferenceEventFormatInput
}

/** The output of our create `PreferenceEventFormat` mutation. */
export type CreatePreferenceEventFormatPayload = {
  __typename?: 'CreatePreferenceEventFormatPayload'
  /** Reads a single `Account` that is related to this `PreferenceEventFormat`. */
  accountByAccountId?: Maybe<Account>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Reads a single `EventFormat` that is related to this `PreferenceEventFormat`. */
  eventFormatByFormatId?: Maybe<EventFormat>
  /** The `PreferenceEventFormat` that was created by this mutation. */
  preferenceEventFormat?: Maybe<PreferenceEventFormat>
  /** An edge for our `PreferenceEventFormat`. May be used by Relay 1. */
  preferenceEventFormatEdge?: Maybe<PreferenceEventFormatsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `PreferenceEventFormat` mutation. */
export type CreatePreferenceEventFormatPayloadPreferenceEventFormatEdgeArgs = {
  orderBy?: InputMaybe<Array<PreferenceEventFormatsOrderBy>>
}

/** All input for the create `PreferenceEventLocation` mutation. */
export type CreatePreferenceEventLocationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The `PreferenceEventLocation` to be created by this mutation. */
  preferenceEventLocation: PreferenceEventLocationInput
}

/** The output of our create `PreferenceEventLocation` mutation. */
export type CreatePreferenceEventLocationPayload = {
  __typename?: 'CreatePreferenceEventLocationPayload'
  /** Reads a single `Account` that is related to this `PreferenceEventLocation`. */
  accountByCreatedBy?: Maybe<Account>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `PreferenceEventLocation` that was created by this mutation. */
  preferenceEventLocation?: Maybe<PreferenceEventLocation>
  /** An edge for our `PreferenceEventLocation`. May be used by Relay 1. */
  preferenceEventLocationEdge?: Maybe<PreferenceEventLocationsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `PreferenceEventLocation` mutation. */
export type CreatePreferenceEventLocationPayloadPreferenceEventLocationEdgeArgs =
  {
    orderBy?: InputMaybe<Array<PreferenceEventLocationsOrderBy>>
  }

/** All input for the create `PreferenceEventSize` mutation. */
export type CreatePreferenceEventSizeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The `PreferenceEventSize` to be created by this mutation. */
  preferenceEventSize: PreferenceEventSizeInput
}

/** The output of our create `PreferenceEventSize` mutation. */
export type CreatePreferenceEventSizePayload = {
  __typename?: 'CreatePreferenceEventSizePayload'
  /** Reads a single `Account` that is related to this `PreferenceEventSize`. */
  accountByAccountId?: Maybe<Account>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `PreferenceEventSize` that was created by this mutation. */
  preferenceEventSize?: Maybe<PreferenceEventSize>
  /** An edge for our `PreferenceEventSize`. May be used by Relay 1. */
  preferenceEventSizeEdge?: Maybe<PreferenceEventSizesEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `PreferenceEventSize` mutation. */
export type CreatePreferenceEventSizePayloadPreferenceEventSizeEdgeArgs = {
  orderBy?: InputMaybe<Array<PreferenceEventSizesOrderBy>>
}

/** All input for the create `ProfilePicture` mutation. */
export type CreateProfilePictureInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The `ProfilePicture` to be created by this mutation. */
  profilePicture: ProfilePictureInput
}

/** The output of our create `ProfilePicture` mutation. */
export type CreateProfilePicturePayload = {
  __typename?: 'CreateProfilePicturePayload'
  /** Reads a single `Account` that is related to this `ProfilePicture`. */
  accountByAccountId?: Maybe<Account>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `ProfilePicture` that was created by this mutation. */
  profilePicture?: Maybe<ProfilePicture>
  /** An edge for our `ProfilePicture`. May be used by Relay 1. */
  profilePictureEdge?: Maybe<ProfilePicturesEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `Upload` that is related to this `ProfilePicture`. */
  uploadByUploadId?: Maybe<Upload>
}

/** The output of our create `ProfilePicture` mutation. */
export type CreateProfilePicturePayloadProfilePictureEdgeArgs = {
  orderBy?: InputMaybe<Array<ProfilePicturesOrderBy>>
}

/** All input for the create `Report` mutation. */
export type CreateReportInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The `Report` to be created by this mutation. */
  report: ReportInput
}

/** The output of our create `Report` mutation. */
export type CreateReportPayload = {
  __typename?: 'CreateReportPayload'
  /** Reads a single `Account` that is related to this `Report`. */
  accountByCreatedBy?: Maybe<Account>
  /** Reads a single `Account` that is related to this `Report`. */
  accountByTargetAccountId?: Maybe<Account>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Reads a single `Event` that is related to this `Report`. */
  eventByTargetEventId?: Maybe<Event>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** The `Report` that was created by this mutation. */
  report?: Maybe<Report>
  /** An edge for our `Report`. May be used by Relay 1. */
  reportEdge?: Maybe<ReportsEdge>
  /** Reads a single `Upload` that is related to this `Report`. */
  uploadByTargetUploadId?: Maybe<Upload>
}

/** The output of our create `Report` mutation. */
export type CreateReportPayloadReportEdgeArgs = {
  orderBy?: InputMaybe<Array<ReportsOrderBy>>
}

/** All input for the create `Upload` mutation. */
export type CreateUploadInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The `Upload` to be created by this mutation. */
  upload: UploadInput
}

/** The output of our create `Upload` mutation. */
export type CreateUploadPayload = {
  __typename?: 'CreateUploadPayload'
  /** Reads a single `Account` that is related to this `Upload`. */
  accountByCreatedBy?: Maybe<Account>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** The `Upload` that was created by this mutation. */
  upload?: Maybe<Upload>
  /** An edge for our `Upload`. May be used by Relay 1. */
  uploadEdge?: Maybe<UploadsEdge>
}

/** The output of our create `Upload` mutation. */
export type CreateUploadPayloadUploadEdgeArgs = {
  orderBy?: InputMaybe<Array<UploadsOrderBy>>
}

/** All input for the `deleteAccountBlockByCreatedByAndBlockedAccountId` mutation. */
export type DeleteAccountBlockByCreatedByAndBlockedAccountIdInput = {
  /** The account id of the user who is blocked. */
  blockedAccountId: Scalars['UUID']['input']
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The account id of the user who created the account block. */
  createdBy: Scalars['UUID']['input']
}

/** All input for the `deleteAccountBlockById` mutation. */
export type DeleteAccountBlockByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The account block's internal id. */
  id: Scalars['UUID']['input']
}

/** All input for the `deleteAccountBlock` mutation. */
export type DeleteAccountBlockInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `AccountBlock` to be deleted. */
  nodeId: Scalars['ID']['input']
}

/** The output of our delete `AccountBlock` mutation. */
export type DeleteAccountBlockPayload = {
  __typename?: 'DeleteAccountBlockPayload'
  /** The `AccountBlock` that was deleted by this mutation. */
  accountBlock?: Maybe<AccountBlock>
  /** An edge for our `AccountBlock`. May be used by Relay 1. */
  accountBlockEdge?: Maybe<AccountBlocksEdge>
  /** Reads a single `Account` that is related to this `AccountBlock`. */
  accountByBlockedAccountId?: Maybe<Account>
  /** Reads a single `Account` that is related to this `AccountBlock`. */
  accountByCreatedBy?: Maybe<Account>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  deletedAccountBlockId?: Maybe<Scalars['ID']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `AccountBlock` mutation. */
export type DeleteAccountBlockPayloadAccountBlockEdgeArgs = {
  orderBy?: InputMaybe<Array<AccountBlocksOrderBy>>
}

/** All input for the `deleteAccountSocialNetworkByAccountIdAndSocialNetwork` mutation. */
export type DeleteAccountSocialNetworkByAccountIdAndSocialNetworkInput = {
  /** The unique identifier of the account. */
  accountId: Scalars['UUID']['input']
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The social network to which the account is linked. */
  socialNetwork: SocialNetwork
}

/** All input for the `deleteAccountSocialNetwork` mutation. */
export type DeleteAccountSocialNetworkInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `AccountSocialNetwork` to be deleted. */
  nodeId: Scalars['ID']['input']
}

/** The output of our delete `AccountSocialNetwork` mutation. */
export type DeleteAccountSocialNetworkPayload = {
  __typename?: 'DeleteAccountSocialNetworkPayload'
  /** Reads a single `Account` that is related to this `AccountSocialNetwork`. */
  accountByAccountId?: Maybe<Account>
  /** The `AccountSocialNetwork` that was deleted by this mutation. */
  accountSocialNetwork?: Maybe<AccountSocialNetwork>
  /** An edge for our `AccountSocialNetwork`. May be used by Relay 1. */
  accountSocialNetworkEdge?: Maybe<AccountSocialNetworksEdge>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  deletedAccountSocialNetworkId?: Maybe<Scalars['ID']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `AccountSocialNetwork` mutation. */
export type DeleteAccountSocialNetworkPayloadAccountSocialNetworkEdgeArgs = {
  orderBy?: InputMaybe<Array<AccountSocialNetworksOrderBy>>
}

/** All input for the `deleteAchievementByAccountIdAndAchievement` mutation. */
export type DeleteAchievementByAccountIdAndAchievementInput = {
  /** The account which unlocked the achievement. */
  accountId: Scalars['UUID']['input']
  /** The unlock's achievement. */
  achievement: AchievementType
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
}

/** All input for the `deleteAchievementById` mutation. */
export type DeleteAchievementByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The achievement unlock's internal id. */
  id: Scalars['UUID']['input']
}

/** All input for the `deleteAchievement` mutation. */
export type DeleteAchievementInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `Achievement` to be deleted. */
  nodeId: Scalars['ID']['input']
}

/** The output of our delete `Achievement` mutation. */
export type DeleteAchievementPayload = {
  __typename?: 'DeleteAchievementPayload'
  /** Reads a single `Account` that is related to this `Achievement`. */
  accountByAccountId?: Maybe<Account>
  /** The `Achievement` that was deleted by this mutation. */
  achievement?: Maybe<Achievement>
  /** An edge for our `Achievement`. May be used by Relay 1. */
  achievementEdge?: Maybe<AchievementsEdge>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  deletedAchievementId?: Maybe<Scalars['ID']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `Achievement` mutation. */
export type DeleteAchievementPayloadAchievementEdgeArgs = {
  orderBy?: InputMaybe<Array<AchievementsOrderBy>>
}

/** All input for the `deleteAddressById` mutation. */
export type DeleteAddressByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Primary key, uniquely identifies each address. */
  id: Scalars['UUID']['input']
}

/** All input for the `deleteAddress` mutation. */
export type DeleteAddressInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `Address` to be deleted. */
  nodeId: Scalars['ID']['input']
}

/** The output of our delete `Address` mutation. */
export type DeleteAddressPayload = {
  __typename?: 'DeleteAddressPayload'
  /** Reads a single `Account` that is related to this `Address`. */
  accountByCreatedBy?: Maybe<Account>
  /** Reads a single `Account` that is related to this `Address`. */
  accountByUpdatedBy?: Maybe<Account>
  /** The `Address` that was deleted by this mutation. */
  address?: Maybe<Address>
  /** An edge for our `Address`. May be used by Relay 1. */
  addressEdge?: Maybe<AddressesEdge>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  deletedAddressId?: Maybe<Scalars['ID']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `Address` mutation. */
export type DeleteAddressPayloadAddressEdgeArgs = {
  orderBy?: InputMaybe<Array<AddressesOrderBy>>
}

/** All input for the `deleteContactByCreatedByAndAccountId` mutation. */
export type DeleteContactByCreatedByAndAccountIdInput = {
  /** Optional reference to an associated account. */
  accountId: Scalars['UUID']['input']
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Reference to the account that created this contact. Enforces cascading deletion. */
  createdBy: Scalars['UUID']['input']
}

/** All input for the `deleteContactById` mutation. */
export type DeleteContactByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Primary key, uniquely identifies each contact. */
  id: Scalars['UUID']['input']
}

/** All input for the `deleteContact` mutation. */
export type DeleteContactInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `Contact` to be deleted. */
  nodeId: Scalars['ID']['input']
}

/** The output of our delete `Contact` mutation. */
export type DeleteContactPayload = {
  __typename?: 'DeleteContactPayload'
  /** Reads a single `Account` that is related to this `Contact`. */
  accountByAccountId?: Maybe<Account>
  /** Reads a single `Account` that is related to this `Contact`. */
  accountByCreatedBy?: Maybe<Account>
  /** Reads a single `Address` that is related to this `Contact`. */
  addressByAddressId?: Maybe<Address>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `Contact` that was deleted by this mutation. */
  contact?: Maybe<Contact>
  /** An edge for our `Contact`. May be used by Relay 1. */
  contactEdge?: Maybe<ContactsEdge>
  deletedContactId?: Maybe<Scalars['ID']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `Contact` mutation. */
export type DeleteContactPayloadContactEdgeArgs = {
  orderBy?: InputMaybe<Array<ContactsOrderBy>>
}

/** All input for the `deleteDeviceByCreatedByAndFcmToken` mutation. */
export type DeleteDeviceByCreatedByAndFcmTokenInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Reference to the account that created the device. */
  createdBy: Scalars['UUID']['input']
  /** The Firebase Cloud Messaging token of the device that's used to deliver notifications. */
  fcmToken: Scalars['String']['input']
}

/** All input for the `deleteDeviceById` mutation. */
export type DeleteDeviceByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The internal id of the device. */
  id: Scalars['UUID']['input']
}

/** All input for the `deleteDevice` mutation. */
export type DeleteDeviceInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `Device` to be deleted. */
  nodeId: Scalars['ID']['input']
}

/** The output of our delete `Device` mutation. */
export type DeleteDevicePayload = {
  __typename?: 'DeleteDevicePayload'
  /** Reads a single `Account` that is related to this `Device`. */
  accountByCreatedBy?: Maybe<Account>
  /** Reads a single `Account` that is related to this `Device`. */
  accountByUpdatedBy?: Maybe<Account>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  deletedDeviceId?: Maybe<Scalars['ID']['output']>
  /** The `Device` that was deleted by this mutation. */
  device?: Maybe<Device>
  /** An edge for our `Device`. May be used by Relay 1. */
  deviceEdge?: Maybe<DevicesEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `Device` mutation. */
export type DeleteDevicePayloadDeviceEdgeArgs = {
  orderBy?: InputMaybe<Array<DevicesOrderBy>>
}

/** All input for the `deleteEventByCreatedByAndSlug` mutation. */
export type DeleteEventByCreatedByAndSlugInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The event creator's id. */
  createdBy: Scalars['UUID']['input']
  /** The event's name, slugified. */
  slug: Scalars['String']['input']
}

/** All input for the `deleteEventById` mutation. */
export type DeleteEventByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The event's internal id. */
  id: Scalars['UUID']['input']
}

/** All input for the `deleteEventCategoryMappingByEventIdAndCategoryId` mutation. */
export type DeleteEventCategoryMappingByEventIdAndCategoryIdInput = {
  /** A category id. */
  categoryId: Scalars['UUID']['input']
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An event id. */
  eventId: Scalars['UUID']['input']
}

/** All input for the `deleteEventCategoryMapping` mutation. */
export type DeleteEventCategoryMappingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `EventCategoryMapping` to be deleted. */
  nodeId: Scalars['ID']['input']
}

/** The output of our delete `EventCategoryMapping` mutation. */
export type DeleteEventCategoryMappingPayload = {
  __typename?: 'DeleteEventCategoryMappingPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  deletedEventCategoryMappingId?: Maybe<Scalars['ID']['output']>
  /** Reads a single `Event` that is related to this `EventCategoryMapping`. */
  eventByEventId?: Maybe<Event>
  /** Reads a single `EventCategory` that is related to this `EventCategoryMapping`. */
  eventCategoryByCategoryId?: Maybe<EventCategory>
  /** The `EventCategoryMapping` that was deleted by this mutation. */
  eventCategoryMapping?: Maybe<EventCategoryMapping>
  /** An edge for our `EventCategoryMapping`. May be used by Relay 1. */
  eventCategoryMappingEdge?: Maybe<EventCategoryMappingsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `EventCategoryMapping` mutation. */
export type DeleteEventCategoryMappingPayloadEventCategoryMappingEdgeArgs = {
  orderBy?: InputMaybe<Array<EventCategoryMappingsOrderBy>>
}

/** All input for the `deleteEventFavoriteByCreatedByAndEventId` mutation. */
export type DeleteEventFavoriteByCreatedByAndEventIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Reference to the account that created the event favorite. */
  createdBy: Scalars['UUID']['input']
  /** Reference to the event that is marked as a favorite. */
  eventId: Scalars['UUID']['input']
}

/** All input for the `deleteEventFavoriteById` mutation. */
export type DeleteEventFavoriteByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Primary key, uniquely identifies each favorite entry. */
  id: Scalars['UUID']['input']
}

/** All input for the `deleteEventFavorite` mutation. */
export type DeleteEventFavoriteInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `EventFavorite` to be deleted. */
  nodeId: Scalars['ID']['input']
}

/** The output of our delete `EventFavorite` mutation. */
export type DeleteEventFavoritePayload = {
  __typename?: 'DeleteEventFavoritePayload'
  /** Reads a single `Account` that is related to this `EventFavorite`. */
  accountByCreatedBy?: Maybe<Account>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  deletedEventFavoriteId?: Maybe<Scalars['ID']['output']>
  /** Reads a single `Event` that is related to this `EventFavorite`. */
  eventByEventId?: Maybe<Event>
  /** The `EventFavorite` that was deleted by this mutation. */
  eventFavorite?: Maybe<EventFavorite>
  /** An edge for our `EventFavorite`. May be used by Relay 1. */
  eventFavoriteEdge?: Maybe<EventFavoritesEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `EventFavorite` mutation. */
export type DeleteEventFavoritePayloadEventFavoriteEdgeArgs = {
  orderBy?: InputMaybe<Array<EventFavoritesOrderBy>>
}

/** All input for the `deleteEventFormatMappingByEventIdAndFormatId` mutation. */
export type DeleteEventFormatMappingByEventIdAndFormatIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An event id. */
  eventId: Scalars['UUID']['input']
  /** A format id. */
  formatId: Scalars['UUID']['input']
}

/** All input for the `deleteEventFormatMapping` mutation. */
export type DeleteEventFormatMappingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `EventFormatMapping` to be deleted. */
  nodeId: Scalars['ID']['input']
}

/** The output of our delete `EventFormatMapping` mutation. */
export type DeleteEventFormatMappingPayload = {
  __typename?: 'DeleteEventFormatMappingPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  deletedEventFormatMappingId?: Maybe<Scalars['ID']['output']>
  /** Reads a single `Event` that is related to this `EventFormatMapping`. */
  eventByEventId?: Maybe<Event>
  /** Reads a single `EventFormat` that is related to this `EventFormatMapping`. */
  eventFormatByFormatId?: Maybe<EventFormat>
  /** The `EventFormatMapping` that was deleted by this mutation. */
  eventFormatMapping?: Maybe<EventFormatMapping>
  /** An edge for our `EventFormatMapping`. May be used by Relay 1. */
  eventFormatMappingEdge?: Maybe<EventFormatMappingsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `EventFormatMapping` mutation. */
export type DeleteEventFormatMappingPayloadEventFormatMappingEdgeArgs = {
  orderBy?: InputMaybe<Array<EventFormatMappingsOrderBy>>
}

/** All input for the `deleteEvent` mutation. */
export type DeleteEventInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `Event` to be deleted. */
  nodeId: Scalars['ID']['input']
}

/** The output of our delete `Event` mutation. */
export type DeleteEventPayload = {
  __typename?: 'DeleteEventPayload'
  /** Reads a single `Account` that is related to this `Event`. */
  accountByCreatedBy?: Maybe<Account>
  /** Reads a single `Address` that is related to this `Event`. */
  addressByAddressId?: Maybe<Address>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  deletedEventId?: Maybe<Scalars['ID']['output']>
  /** The `Event` that was deleted by this mutation. */
  event?: Maybe<Event>
  /** An edge for our `Event`. May be used by Relay 1. */
  eventEdge?: Maybe<EventsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `Event` mutation. */
export type DeleteEventPayloadEventEdgeArgs = {
  orderBy?: InputMaybe<Array<EventsOrderBy>>
}

/** All input for the `deleteEventRecommendationByAccountIdAndEventId` mutation. */
export type DeleteEventRecommendationByAccountIdAndEventIdInput = {
  /** A user account id. */
  accountId: Scalars['UUID']['input']
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The predicted score of the recommendation. */
  eventId: Scalars['UUID']['input']
}

/** All input for the `deleteEventRecommendation` mutation. */
export type DeleteEventRecommendationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `EventRecommendation` to be deleted. */
  nodeId: Scalars['ID']['input']
}

/** The output of our delete `EventRecommendation` mutation. */
export type DeleteEventRecommendationPayload = {
  __typename?: 'DeleteEventRecommendationPayload'
  /** Reads a single `Account` that is related to this `EventRecommendation`. */
  accountByAccountId?: Maybe<Account>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  deletedEventRecommendationId?: Maybe<Scalars['ID']['output']>
  /** Reads a single `Event` that is related to this `EventRecommendation`. */
  eventByEventId?: Maybe<Event>
  /** The `EventRecommendation` that was deleted by this mutation. */
  eventRecommendation?: Maybe<EventRecommendation>
  /** An edge for our `EventRecommendation`. May be used by Relay 1. */
  eventRecommendationEdge?: Maybe<EventRecommendationsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `EventRecommendation` mutation. */
export type DeleteEventRecommendationPayloadEventRecommendationEdgeArgs = {
  orderBy?: InputMaybe<Array<EventRecommendationsOrderBy>>
}

/** All input for the `deleteEventUploadByEventIdAndUploadId` mutation. */
export type DeleteEventUploadByEventIdAndUploadIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Reference to the event associated with the upload. */
  eventId: Scalars['UUID']['input']
  /** Reference to the uploaded file. */
  uploadId: Scalars['UUID']['input']
}

/** All input for the `deleteEventUploadById` mutation. */
export type DeleteEventUploadByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Primary key, uniquely identifies each event-upload association. */
  id: Scalars['UUID']['input']
}

/** All input for the `deleteEventUpload` mutation. */
export type DeleteEventUploadInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `EventUpload` to be deleted. */
  nodeId: Scalars['ID']['input']
}

/** The output of our delete `EventUpload` mutation. */
export type DeleteEventUploadPayload = {
  __typename?: 'DeleteEventUploadPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  deletedEventUploadId?: Maybe<Scalars['ID']['output']>
  /** Reads a single `Event` that is related to this `EventUpload`. */
  eventByEventId?: Maybe<Event>
  /** The `EventUpload` that was deleted by this mutation. */
  eventUpload?: Maybe<EventUpload>
  /** An edge for our `EventUpload`. May be used by Relay 1. */
  eventUploadEdge?: Maybe<EventUploadsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `Upload` that is related to this `EventUpload`. */
  uploadByUploadId?: Maybe<Upload>
}

/** The output of our delete `EventUpload` mutation. */
export type DeleteEventUploadPayloadEventUploadEdgeArgs = {
  orderBy?: InputMaybe<Array<EventUploadsOrderBy>>
}

/** All input for the `deleteFriendshipByAAccountIdAndBAccountId` mutation. */
export type DeleteFriendshipByAAccountIdAndBAccountIdInput = {
  /** The 'left' side of the friend relation. It must be lexically less than the 'right' side. */
  aAccountId: Scalars['UUID']['input']
  /** The 'right' side of the friend relation. It must be lexically greater than the 'left' side. */
  bAccountId: Scalars['UUID']['input']
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
}

/** All input for the `deleteFriendshipById` mutation. */
export type DeleteFriendshipByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The friend relation's internal id. */
  id: Scalars['UUID']['input']
}

/** All input for the `deleteFriendship` mutation. */
export type DeleteFriendshipInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `Friendship` to be deleted. */
  nodeId: Scalars['ID']['input']
}

/** The output of our delete `Friendship` mutation. */
export type DeleteFriendshipPayload = {
  __typename?: 'DeleteFriendshipPayload'
  /** Reads a single `Account` that is related to this `Friendship`. */
  accountByAAccountId?: Maybe<Account>
  /** Reads a single `Account` that is related to this `Friendship`. */
  accountByBAccountId?: Maybe<Account>
  /** Reads a single `Account` that is related to this `Friendship`. */
  accountByCreatedBy?: Maybe<Account>
  /** Reads a single `Account` that is related to this `Friendship`. */
  accountByUpdatedBy?: Maybe<Account>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  deletedFriendshipId?: Maybe<Scalars['ID']['output']>
  /** The `Friendship` that was deleted by this mutation. */
  friendship?: Maybe<Friendship>
  /** An edge for our `Friendship`. May be used by Relay 1. */
  friendshipEdge?: Maybe<FriendshipsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `Friendship` mutation. */
export type DeleteFriendshipPayloadFriendshipEdgeArgs = {
  orderBy?: InputMaybe<Array<FriendshipsOrderBy>>
}

/** All input for the `deleteGuestByEventIdAndContactId` mutation. */
export type DeleteGuestByEventIdAndContactIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The internal id of the guest's contact. */
  contactId: Scalars['UUID']['input']
  /** The internal id of the guest's event. */
  eventId: Scalars['UUID']['input']
}

/** All input for the `deleteGuestById` mutation. */
export type DeleteGuestByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The guests's internal id. */
  id: Scalars['UUID']['input']
}

/** All input for the `deleteGuest` mutation. */
export type DeleteGuestInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `Guest` to be deleted. */
  nodeId: Scalars['ID']['input']
}

/** The output of our delete `Guest` mutation. */
export type DeleteGuestPayload = {
  __typename?: 'DeleteGuestPayload'
  /** Reads a single `Account` that is related to this `Guest`. */
  accountByUpdatedBy?: Maybe<Account>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Reads a single `Contact` that is related to this `Guest`. */
  contactByContactId?: Maybe<Contact>
  deletedGuestId?: Maybe<Scalars['ID']['output']>
  /** Reads a single `Event` that is related to this `Guest`. */
  eventByEventId?: Maybe<Event>
  /** The `Guest` that was deleted by this mutation. */
  guest?: Maybe<Guest>
  /** An edge for our `Guest`. May be used by Relay 1. */
  guestEdge?: Maybe<GuestsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `Guest` mutation. */
export type DeleteGuestPayloadGuestEdgeArgs = {
  orderBy?: InputMaybe<Array<GuestsOrderBy>>
}

/** All input for the `deletePreferenceEventCategoryByAccountIdAndCategoryId` mutation. */
export type DeletePreferenceEventCategoryByAccountIdAndCategoryIdInput = {
  /** A user account id. */
  accountId: Scalars['UUID']['input']
  /** An event category id. */
  categoryId: Scalars['UUID']['input']
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
}

/** All input for the `deletePreferenceEventCategoryById` mutation. */
export type DeletePreferenceEventCategoryByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  id: Scalars['UUID']['input']
}

/** All input for the `deletePreferenceEventCategory` mutation. */
export type DeletePreferenceEventCategoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `PreferenceEventCategory` to be deleted. */
  nodeId: Scalars['ID']['input']
}

/** The output of our delete `PreferenceEventCategory` mutation. */
export type DeletePreferenceEventCategoryPayload = {
  __typename?: 'DeletePreferenceEventCategoryPayload'
  /** Reads a single `Account` that is related to this `PreferenceEventCategory`. */
  accountByAccountId?: Maybe<Account>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  deletedPreferenceEventCategoryId?: Maybe<Scalars['ID']['output']>
  /** Reads a single `EventCategory` that is related to this `PreferenceEventCategory`. */
  eventCategoryByCategoryId?: Maybe<EventCategory>
  /** The `PreferenceEventCategory` that was deleted by this mutation. */
  preferenceEventCategory?: Maybe<PreferenceEventCategory>
  /** An edge for our `PreferenceEventCategory`. May be used by Relay 1. */
  preferenceEventCategoryEdge?: Maybe<PreferenceEventCategoriesEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `PreferenceEventCategory` mutation. */
export type DeletePreferenceEventCategoryPayloadPreferenceEventCategoryEdgeArgs =
  {
    orderBy?: InputMaybe<Array<PreferenceEventCategoriesOrderBy>>
  }

/** All input for the `deletePreferenceEventFormatByAccountIdAndFormatId` mutation. */
export type DeletePreferenceEventFormatByAccountIdAndFormatIdInput = {
  /** A user account id. */
  accountId: Scalars['UUID']['input']
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The id of an event format. */
  formatId: Scalars['UUID']['input']
}

/** All input for the `deletePreferenceEventFormatById` mutation. */
export type DeletePreferenceEventFormatByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  id: Scalars['UUID']['input']
}

/** All input for the `deletePreferenceEventFormat` mutation. */
export type DeletePreferenceEventFormatInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `PreferenceEventFormat` to be deleted. */
  nodeId: Scalars['ID']['input']
}

/** The output of our delete `PreferenceEventFormat` mutation. */
export type DeletePreferenceEventFormatPayload = {
  __typename?: 'DeletePreferenceEventFormatPayload'
  /** Reads a single `Account` that is related to this `PreferenceEventFormat`. */
  accountByAccountId?: Maybe<Account>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  deletedPreferenceEventFormatId?: Maybe<Scalars['ID']['output']>
  /** Reads a single `EventFormat` that is related to this `PreferenceEventFormat`. */
  eventFormatByFormatId?: Maybe<EventFormat>
  /** The `PreferenceEventFormat` that was deleted by this mutation. */
  preferenceEventFormat?: Maybe<PreferenceEventFormat>
  /** An edge for our `PreferenceEventFormat`. May be used by Relay 1. */
  preferenceEventFormatEdge?: Maybe<PreferenceEventFormatsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `PreferenceEventFormat` mutation. */
export type DeletePreferenceEventFormatPayloadPreferenceEventFormatEdgeArgs = {
  orderBy?: InputMaybe<Array<PreferenceEventFormatsOrderBy>>
}

/** All input for the `deletePreferenceEventLocationByCreatedByAndLocationAndRadius` mutation. */
export type DeletePreferenceEventLocationByCreatedByAndLocationAndRadiusInput =
  {
    /**
     * An arbitrary string value with no semantic meaning. Will be included in the
     * payload verbatim. May be used to track mutations by the client.
     */
    clientMutationId?: InputMaybe<Scalars['String']['input']>
    /** Reference to the account that created the location preference. */
    createdBy: Scalars['UUID']['input']
    /** Geographical point representing the preferred location, derived from latitude and longitude. */
    location: Scalars['GeoJSON']['input']
    /** Search radius in meters around the location where events are preferred. Must be positive. */
    radius: Scalars['Float']['input']
  }

/** All input for the `deletePreferenceEventLocationById` mutation. */
export type DeletePreferenceEventLocationByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Unique identifier for the preference record. */
  id: Scalars['UUID']['input']
}

/** All input for the `deletePreferenceEventLocation` mutation. */
export type DeletePreferenceEventLocationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `PreferenceEventLocation` to be deleted. */
  nodeId: Scalars['ID']['input']
}

/** The output of our delete `PreferenceEventLocation` mutation. */
export type DeletePreferenceEventLocationPayload = {
  __typename?: 'DeletePreferenceEventLocationPayload'
  /** Reads a single `Account` that is related to this `PreferenceEventLocation`. */
  accountByCreatedBy?: Maybe<Account>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  deletedPreferenceEventLocationId?: Maybe<Scalars['ID']['output']>
  /** The `PreferenceEventLocation` that was deleted by this mutation. */
  preferenceEventLocation?: Maybe<PreferenceEventLocation>
  /** An edge for our `PreferenceEventLocation`. May be used by Relay 1. */
  preferenceEventLocationEdge?: Maybe<PreferenceEventLocationsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `PreferenceEventLocation` mutation. */
export type DeletePreferenceEventLocationPayloadPreferenceEventLocationEdgeArgs =
  {
    orderBy?: InputMaybe<Array<PreferenceEventLocationsOrderBy>>
  }

/** All input for the `deletePreferenceEventSizeByAccountIdAndEventSize` mutation. */
export type DeletePreferenceEventSizeByAccountIdAndEventSizeInput = {
  /** The account's internal id. */
  accountId: Scalars['UUID']['input']
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** A preferred event size. */
  eventSize: EventSize
}

/** All input for the `deletePreferenceEventSizeById` mutation. */
export type DeletePreferenceEventSizeByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  id: Scalars['UUID']['input']
}

/** All input for the `deletePreferenceEventSize` mutation. */
export type DeletePreferenceEventSizeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `PreferenceEventSize` to be deleted. */
  nodeId: Scalars['ID']['input']
}

/** The output of our delete `PreferenceEventSize` mutation. */
export type DeletePreferenceEventSizePayload = {
  __typename?: 'DeletePreferenceEventSizePayload'
  /** Reads a single `Account` that is related to this `PreferenceEventSize`. */
  accountByAccountId?: Maybe<Account>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  deletedPreferenceEventSizeId?: Maybe<Scalars['ID']['output']>
  /** The `PreferenceEventSize` that was deleted by this mutation. */
  preferenceEventSize?: Maybe<PreferenceEventSize>
  /** An edge for our `PreferenceEventSize`. May be used by Relay 1. */
  preferenceEventSizeEdge?: Maybe<PreferenceEventSizesEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `PreferenceEventSize` mutation. */
export type DeletePreferenceEventSizePayloadPreferenceEventSizeEdgeArgs = {
  orderBy?: InputMaybe<Array<PreferenceEventSizesOrderBy>>
}

/** All input for the `deleteProfilePictureByAccountId` mutation. */
export type DeleteProfilePictureByAccountIdInput = {
  /** The account's id. */
  accountId: Scalars['UUID']['input']
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
}

/** All input for the `deleteProfilePictureById` mutation. */
export type DeleteProfilePictureByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The profile picture's internal id. */
  id: Scalars['UUID']['input']
}

/** All input for the `deleteProfilePicture` mutation. */
export type DeleteProfilePictureInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `ProfilePicture` to be deleted. */
  nodeId: Scalars['ID']['input']
}

/** The output of our delete `ProfilePicture` mutation. */
export type DeleteProfilePicturePayload = {
  __typename?: 'DeleteProfilePicturePayload'
  /** Reads a single `Account` that is related to this `ProfilePicture`. */
  accountByAccountId?: Maybe<Account>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  deletedProfilePictureId?: Maybe<Scalars['ID']['output']>
  /** The `ProfilePicture` that was deleted by this mutation. */
  profilePicture?: Maybe<ProfilePicture>
  /** An edge for our `ProfilePicture`. May be used by Relay 1. */
  profilePictureEdge?: Maybe<ProfilePicturesEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `Upload` that is related to this `ProfilePicture`. */
  uploadByUploadId?: Maybe<Upload>
}

/** The output of our delete `ProfilePicture` mutation. */
export type DeleteProfilePicturePayloadProfilePictureEdgeArgs = {
  orderBy?: InputMaybe<Array<ProfilePicturesOrderBy>>
}

/** All input for the `deleteUploadById` mutation. */
export type DeleteUploadByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The upload's internal id. */
  id: Scalars['UUID']['input']
}

/** All input for the `deleteUploadByStorageKey` mutation. */
export type DeleteUploadByStorageKeyInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The upload's storage key. */
  storageKey: Scalars['String']['input']
}

/** All input for the `deleteUpload` mutation. */
export type DeleteUploadInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `Upload` to be deleted. */
  nodeId: Scalars['ID']['input']
}

/** The output of our delete `Upload` mutation. */
export type DeleteUploadPayload = {
  __typename?: 'DeleteUploadPayload'
  /** Reads a single `Account` that is related to this `Upload`. */
  accountByCreatedBy?: Maybe<Account>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  deletedUploadId?: Maybe<Scalars['ID']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** The `Upload` that was deleted by this mutation. */
  upload?: Maybe<Upload>
  /** An edge for our `Upload`. May be used by Relay 1. */
  uploadEdge?: Maybe<UploadsEdge>
}

/** The output of our delete `Upload` mutation. */
export type DeleteUploadPayloadUploadEdgeArgs = {
  orderBy?: InputMaybe<Array<UploadsOrderBy>>
}

/** A device that's assigned to an account. */
export type Device = Node & {
  __typename?: 'Device'
  /** Reads a single `Account` that is related to this `Device`. */
  accountByCreatedBy?: Maybe<Account>
  /** Reads a single `Account` that is related to this `Device`. */
  accountByUpdatedBy?: Maybe<Account>
  /** Timestamp when the device was created. Defaults to the current timestamp. */
  createdAt: Scalars['Datetime']['output']
  /** Reference to the account that created the device. */
  createdBy: Scalars['UUID']['output']
  /** The Firebase Cloud Messaging token of the device that's used to deliver notifications. */
  fcmToken?: Maybe<Scalars['String']['output']>
  /** The internal id of the device. */
  id: Scalars['UUID']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output']
  /** Timestamp when the device was last updated. */
  updatedAt?: Maybe<Scalars['Datetime']['output']>
  /** Reference to the account that last updated the device. */
  updatedBy?: Maybe<Scalars['UUID']['output']>
}

/** A condition to be used against `Device` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type DeviceCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>
  /** Checks for equality with the object’s `createdBy` field. */
  createdBy?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `fcmToken` field. */
  fcmToken?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>
  /** Checks for equality with the object’s `updatedBy` field. */
  updatedBy?: InputMaybe<Scalars['UUID']['input']>
}

/** An input for mutations affecting `Device` */
export type DeviceInput = {
  /** Reference to the account that created the device. */
  createdBy: Scalars['UUID']['input']
  /** The Firebase Cloud Messaging token of the device that's used to deliver notifications. */
  fcmToken?: InputMaybe<Scalars['String']['input']>
}

/** Represents an update to a `Device`. Fields that are set will be updated. */
export type DevicePatch = {
  /** The Firebase Cloud Messaging token of the device that's used to deliver notifications. */
  fcmToken?: InputMaybe<Scalars['String']['input']>
}

/** A connection to a list of `Device` values. */
export type DevicesConnection = {
  __typename?: 'DevicesConnection'
  /** A list of edges which contains the `Device` and cursor to aid in pagination. */
  edges: Array<DevicesEdge>
  /** A list of `Device` objects. */
  nodes: Array<Device>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `Device` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `Device` edge in the connection. */
export type DevicesEdge = {
  __typename?: 'DevicesEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `Device` at the end of the edge. */
  node: Device
}

/** Methods to use when ordering `Device`. */
export enum DevicesOrderBy {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  CreatedByAsc = 'CREATED_BY_ASC',
  CreatedByDesc = 'CREATED_BY_DESC',
  FcmTokenAsc = 'FCM_TOKEN_ASC',
  FcmTokenDesc = 'FCM_TOKEN_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  UpdatedByAsc = 'UPDATED_BY_ASC',
  UpdatedByDesc = 'UPDATED_BY_DESC',
}

/** An event. */
export type Event = Node & {
  __typename?: 'Event'
  /** Reads a single `Account` that is related to this `Event`. */
  accountByCreatedBy?: Maybe<Account>
  /** Reads a single `Address` that is related to this `Event`. */
  addressByAddressId?: Maybe<Address>
  /** Optional reference to the physical address of the event. */
  addressId?: Maybe<Scalars['UUID']['output']>
  /** Timestamp of when the event was created, defaults to the current timestamp. */
  createdAt: Scalars['Datetime']['output']
  /** The event creator's id. */
  createdBy: Scalars['UUID']['output']
  /** The event's description. */
  description?: Maybe<Scalars['String']['output']>
  /** The event's end date and time, with timezone. */
  end?: Maybe<Scalars['Datetime']['output']>
  /** Reads and enables pagination through a set of `EventCategoryMapping`. */
  eventCategoryMappingsByEventId: EventCategoryMappingsConnection
  /** Reads and enables pagination through a set of `EventFavorite`. */
  eventFavoritesByEventId: EventFavoritesConnection
  /** Reads and enables pagination through a set of `EventFormatMapping`. */
  eventFormatMappingsByEventId: EventFormatMappingsConnection
  /** Reads and enables pagination through a set of `EventRecommendation`. */
  eventRecommendationsByEventId: EventRecommendationsConnection
  /** Reads and enables pagination through a set of `EventUpload`. */
  eventUploadsByEventId: EventUploadsConnection
  /** The event's maximum guest count. */
  guestCountMaximum?: Maybe<Scalars['Int']['output']>
  /** Reads and enables pagination through a set of `Guest`. */
  guestsByEventId: GuestsConnection
  /** The event's internal id. */
  id: Scalars['UUID']['output']
  /** Indicates whether the event is archived. */
  isArchived: Scalars['Boolean']['output']
  /** Indicates whether the event takes place in person. */
  isInPerson?: Maybe<Scalars['Boolean']['output']>
  /** Indicates whether the event takes place remotely. */
  isRemote?: Maybe<Scalars['Boolean']['output']>
  language?: Maybe<Language>
  /** The event's name. */
  name: Scalars['String']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output']
  /** Reads and enables pagination through a set of `Report`. */
  reportsByTargetEventId: ReportsConnection
  /** The event's name, slugified. */
  slug: Scalars['String']['output']
  /** The event's start date and time, with timezone. */
  start: Scalars['Datetime']['output']
  /** The event's unified resource locator. */
  url?: Maybe<Scalars['String']['output']>
  /** The event's visibility. */
  visibility: EventVisibility
}

/** An event. */
export type EventEventCategoryMappingsByEventIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventCategoryMappingCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<EventCategoryMappingsOrderBy>>
}

/** An event. */
export type EventEventFavoritesByEventIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventFavoriteCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<EventFavoritesOrderBy>>
}

/** An event. */
export type EventEventFormatMappingsByEventIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventFormatMappingCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<EventFormatMappingsOrderBy>>
}

/** An event. */
export type EventEventRecommendationsByEventIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventRecommendationCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<EventRecommendationsOrderBy>>
}

/** An event. */
export type EventEventUploadsByEventIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventUploadCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<EventUploadsOrderBy>>
}

/** An event. */
export type EventGuestsByEventIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<GuestCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<GuestsOrderBy>>
}

/** An event. */
export type EventReportsByTargetEventIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<ReportCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<ReportsOrderBy>>
}

/** A connection to a list of `EventCategory` values. */
export type EventCategoriesConnection = {
  __typename?: 'EventCategoriesConnection'
  /** A list of edges which contains the `EventCategory` and cursor to aid in pagination. */
  edges: Array<EventCategoriesEdge>
  /** A list of `EventCategory` objects. */
  nodes: Array<EventCategory>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `EventCategory` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `EventCategory` edge in the connection. */
export type EventCategoriesEdge = {
  __typename?: 'EventCategoriesEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `EventCategory` at the end of the edge. */
  node: EventCategory
}

/** Methods to use when ordering `EventCategory`. */
export enum EventCategoriesOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
}

/** Event categories. */
export type EventCategory = Node & {
  __typename?: 'EventCategory'
  /** Reads and enables pagination through a set of `EventCategoryMapping`. */
  eventCategoryMappingsByCategoryId: EventCategoryMappingsConnection
  /** The id of the event category. */
  id: Scalars['UUID']['output']
  /** A category name. */
  name: Scalars['String']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output']
  /** Reads and enables pagination through a set of `PreferenceEventCategory`. */
  preferenceEventCategoriesByCategoryId: PreferenceEventCategoriesConnection
}

/** Event categories. */
export type EventCategoryEventCategoryMappingsByCategoryIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventCategoryMappingCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<EventCategoryMappingsOrderBy>>
}

/** Event categories. */
export type EventCategoryPreferenceEventCategoriesByCategoryIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<PreferenceEventCategoryCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<PreferenceEventCategoriesOrderBy>>
}

/**
 * A condition to be used against `EventCategory` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type EventCategoryCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>
}

/** Mapping events to categories (M:N relationship). */
export type EventCategoryMapping = Node & {
  __typename?: 'EventCategoryMapping'
  /** A category id. */
  categoryId: Scalars['UUID']['output']
  /** Reads a single `Event` that is related to this `EventCategoryMapping`. */
  eventByEventId?: Maybe<Event>
  /** Reads a single `EventCategory` that is related to this `EventCategoryMapping`. */
  eventCategoryByCategoryId?: Maybe<EventCategory>
  /** An event id. */
  eventId: Scalars['UUID']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output']
}

/**
 * A condition to be used against `EventCategoryMapping` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type EventCategoryMappingCondition = {
  /** Checks for equality with the object’s `categoryId` field. */
  categoryId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `eventId` field. */
  eventId?: InputMaybe<Scalars['UUID']['input']>
}

/** An input for mutations affecting `EventCategoryMapping` */
export type EventCategoryMappingInput = {
  /** A category id. */
  categoryId: Scalars['UUID']['input']
  /** An event id. */
  eventId: Scalars['UUID']['input']
}

/** Represents an update to a `EventCategoryMapping`. Fields that are set will be updated. */
export type EventCategoryMappingPatch = {
  /** A category id. */
  categoryId?: InputMaybe<Scalars['UUID']['input']>
  /** An event id. */
  eventId?: InputMaybe<Scalars['UUID']['input']>
}

/** A connection to a list of `EventCategoryMapping` values. */
export type EventCategoryMappingsConnection = {
  __typename?: 'EventCategoryMappingsConnection'
  /** A list of edges which contains the `EventCategoryMapping` and cursor to aid in pagination. */
  edges: Array<EventCategoryMappingsEdge>
  /** A list of `EventCategoryMapping` objects. */
  nodes: Array<EventCategoryMapping>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `EventCategoryMapping` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `EventCategoryMapping` edge in the connection. */
export type EventCategoryMappingsEdge = {
  __typename?: 'EventCategoryMappingsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `EventCategoryMapping` at the end of the edge. */
  node: EventCategoryMapping
}

/** Methods to use when ordering `EventCategoryMapping`. */
export enum EventCategoryMappingsOrderBy {
  CategoryIdAsc = 'CATEGORY_ID_ASC',
  CategoryIdDesc = 'CATEGORY_ID_DESC',
  EventIdAsc = 'EVENT_ID_ASC',
  EventIdDesc = 'EVENT_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
}

/** A condition to be used against `Event` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type EventCondition = {
  /** Checks for equality with the object’s `addressId` field. */
  addressId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>
  /** Checks for equality with the object’s `createdBy` field. */
  createdBy?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `end` field. */
  end?: InputMaybe<Scalars['Datetime']['input']>
  /** Checks for equality with the object’s `guestCountMaximum` field. */
  guestCountMaximum?: InputMaybe<Scalars['Int']['input']>
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `isArchived` field. */
  isArchived?: InputMaybe<Scalars['Boolean']['input']>
  /** Checks for equality with the object’s `isInPerson` field. */
  isInPerson?: InputMaybe<Scalars['Boolean']['input']>
  /** Checks for equality with the object’s `isRemote` field. */
  isRemote?: InputMaybe<Scalars['Boolean']['input']>
  /** Checks for equality with the object’s `language` field. */
  language?: InputMaybe<Language>
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `slug` field. */
  slug?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `start` field. */
  start?: InputMaybe<Scalars['Datetime']['input']>
  /** Checks for equality with the object’s `url` field. */
  url?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `visibility` field. */
  visibility?: InputMaybe<EventVisibility>
}

/** All input for the `eventDelete` mutation. */
export type EventDeleteInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  id: Scalars['UUID']['input']
  password: Scalars['String']['input']
}

/** The output of our `eventDelete` mutation. */
export type EventDeletePayload = {
  __typename?: 'EventDeletePayload'
  /** Reads a single `Account` that is related to this `Event`. */
  accountByCreatedBy?: Maybe<Account>
  /** Reads a single `Address` that is related to this `Event`. */
  addressByAddressId?: Maybe<Address>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  event?: Maybe<Event>
  /** An edge for our `Event`. May be used by Relay 1. */
  eventEdge?: Maybe<EventsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our `eventDelete` mutation. */
export type EventDeletePayloadEventEdgeArgs = {
  orderBy?: InputMaybe<Array<EventsOrderBy>>
}

/** Stores user-specific event favorites, linking an event to the account that marked it as a favorite. */
export type EventFavorite = Node & {
  __typename?: 'EventFavorite'
  /** Reads a single `Account` that is related to this `EventFavorite`. */
  accountByCreatedBy?: Maybe<Account>
  /** Timestamp when the favorite was created. Defaults to the current timestamp. */
  createdAt: Scalars['Datetime']['output']
  /** Reference to the account that created the event favorite. */
  createdBy: Scalars['UUID']['output']
  /** Reads a single `Event` that is related to this `EventFavorite`. */
  eventByEventId?: Maybe<Event>
  /** Reference to the event that is marked as a favorite. */
  eventId: Scalars['UUID']['output']
  /** Primary key, uniquely identifies each favorite entry. */
  id: Scalars['UUID']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output']
}

/**
 * A condition to be used against `EventFavorite` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type EventFavoriteCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>
  /** Checks for equality with the object’s `createdBy` field. */
  createdBy?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `eventId` field. */
  eventId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>
}

/** An input for mutations affecting `EventFavorite` */
export type EventFavoriteInput = {
  /** Reference to the account that created the event favorite. */
  createdBy: Scalars['UUID']['input']
  /** Reference to the event that is marked as a favorite. */
  eventId: Scalars['UUID']['input']
}

/** A connection to a list of `EventFavorite` values. */
export type EventFavoritesConnection = {
  __typename?: 'EventFavoritesConnection'
  /** A list of edges which contains the `EventFavorite` and cursor to aid in pagination. */
  edges: Array<EventFavoritesEdge>
  /** A list of `EventFavorite` objects. */
  nodes: Array<EventFavorite>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `EventFavorite` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `EventFavorite` edge in the connection. */
export type EventFavoritesEdge = {
  __typename?: 'EventFavoritesEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `EventFavorite` at the end of the edge. */
  node: EventFavorite
}

/** Methods to use when ordering `EventFavorite`. */
export enum EventFavoritesOrderBy {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  CreatedByAsc = 'CREATED_BY_ASC',
  CreatedByDesc = 'CREATED_BY_DESC',
  EventIdAsc = 'EVENT_ID_ASC',
  EventIdDesc = 'EVENT_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
}

/** Event formats. */
export type EventFormat = Node & {
  __typename?: 'EventFormat'
  /** Reads and enables pagination through a set of `EventFormatMapping`. */
  eventFormatMappingsByFormatId: EventFormatMappingsConnection
  /** The id of the event format. */
  id: Scalars['UUID']['output']
  /** The name of the event format. */
  name: Scalars['String']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output']
  /** Reads and enables pagination through a set of `PreferenceEventFormat`. */
  preferenceEventFormatsByFormatId: PreferenceEventFormatsConnection
}

/** Event formats. */
export type EventFormatEventFormatMappingsByFormatIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventFormatMappingCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<EventFormatMappingsOrderBy>>
}

/** Event formats. */
export type EventFormatPreferenceEventFormatsByFormatIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<PreferenceEventFormatCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<PreferenceEventFormatsOrderBy>>
}

/**
 * A condition to be used against `EventFormat` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type EventFormatCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>
}

/** Mapping events to formats (M:N relationship). */
export type EventFormatMapping = Node & {
  __typename?: 'EventFormatMapping'
  /** Reads a single `Event` that is related to this `EventFormatMapping`. */
  eventByEventId?: Maybe<Event>
  /** Reads a single `EventFormat` that is related to this `EventFormatMapping`. */
  eventFormatByFormatId?: Maybe<EventFormat>
  /** An event id. */
  eventId: Scalars['UUID']['output']
  /** A format id. */
  formatId: Scalars['UUID']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output']
}

/**
 * A condition to be used against `EventFormatMapping` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type EventFormatMappingCondition = {
  /** Checks for equality with the object’s `eventId` field. */
  eventId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `formatId` field. */
  formatId?: InputMaybe<Scalars['UUID']['input']>
}

/** An input for mutations affecting `EventFormatMapping` */
export type EventFormatMappingInput = {
  /** An event id. */
  eventId: Scalars['UUID']['input']
  /** A format id. */
  formatId: Scalars['UUID']['input']
}

/** Represents an update to a `EventFormatMapping`. Fields that are set will be updated. */
export type EventFormatMappingPatch = {
  /** An event id. */
  eventId?: InputMaybe<Scalars['UUID']['input']>
  /** A format id. */
  formatId?: InputMaybe<Scalars['UUID']['input']>
}

/** A connection to a list of `EventFormatMapping` values. */
export type EventFormatMappingsConnection = {
  __typename?: 'EventFormatMappingsConnection'
  /** A list of edges which contains the `EventFormatMapping` and cursor to aid in pagination. */
  edges: Array<EventFormatMappingsEdge>
  /** A list of `EventFormatMapping` objects. */
  nodes: Array<EventFormatMapping>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `EventFormatMapping` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `EventFormatMapping` edge in the connection. */
export type EventFormatMappingsEdge = {
  __typename?: 'EventFormatMappingsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `EventFormatMapping` at the end of the edge. */
  node: EventFormatMapping
}

/** Methods to use when ordering `EventFormatMapping`. */
export enum EventFormatMappingsOrderBy {
  EventIdAsc = 'EVENT_ID_ASC',
  EventIdDesc = 'EVENT_ID_DESC',
  FormatIdAsc = 'FORMAT_ID_ASC',
  FormatIdDesc = 'FORMAT_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
}

/** A connection to a list of `EventFormat` values. */
export type EventFormatsConnection = {
  __typename?: 'EventFormatsConnection'
  /** A list of edges which contains the `EventFormat` and cursor to aid in pagination. */
  edges: Array<EventFormatsEdge>
  /** A list of `EventFormat` objects. */
  nodes: Array<EventFormat>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `EventFormat` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `EventFormat` edge in the connection. */
export type EventFormatsEdge = {
  __typename?: 'EventFormatsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `EventFormat` at the end of the edge. */
  node: EventFormat
}

/** Methods to use when ordering `EventFormat`. */
export enum EventFormatsOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
}

/** An input for mutations affecting `Event` */
export type EventInput = {
  /** Optional reference to the physical address of the event. */
  addressId?: InputMaybe<Scalars['UUID']['input']>
  /** The event creator's id. */
  createdBy: Scalars['UUID']['input']
  /** The event's description. */
  description?: InputMaybe<Scalars['String']['input']>
  /** The event's end date and time, with timezone. */
  end?: InputMaybe<Scalars['Datetime']['input']>
  /** The event's maximum guest count. */
  guestCountMaximum?: InputMaybe<Scalars['Int']['input']>
  /** Indicates whether the event is archived. */
  isArchived?: InputMaybe<Scalars['Boolean']['input']>
  /** Indicates whether the event takes place in person. */
  isInPerson?: InputMaybe<Scalars['Boolean']['input']>
  /** Indicates whether the event takes place remotely. */
  isRemote?: InputMaybe<Scalars['Boolean']['input']>
  language?: InputMaybe<Language>
  /** The event's name. */
  name: Scalars['String']['input']
  /** The event's name, slugified. */
  slug: Scalars['String']['input']
  /** The event's start date and time, with timezone. */
  start: Scalars['Datetime']['input']
  /** The event's unified resource locator. */
  url?: InputMaybe<Scalars['String']['input']>
  /** The event's visibility. */
  visibility: EventVisibility
}

/** Represents an update to a `Event`. Fields that are set will be updated. */
export type EventPatch = {
  /** Optional reference to the physical address of the event. */
  addressId?: InputMaybe<Scalars['UUID']['input']>
  /** The event creator's id. */
  createdBy?: InputMaybe<Scalars['UUID']['input']>
  /** The event's description. */
  description?: InputMaybe<Scalars['String']['input']>
  /** The event's end date and time, with timezone. */
  end?: InputMaybe<Scalars['Datetime']['input']>
  /** The event's maximum guest count. */
  guestCountMaximum?: InputMaybe<Scalars['Int']['input']>
  /** Indicates whether the event is archived. */
  isArchived?: InputMaybe<Scalars['Boolean']['input']>
  /** Indicates whether the event takes place in person. */
  isInPerson?: InputMaybe<Scalars['Boolean']['input']>
  /** Indicates whether the event takes place remotely. */
  isRemote?: InputMaybe<Scalars['Boolean']['input']>
  language?: InputMaybe<Language>
  /** The event's name. */
  name?: InputMaybe<Scalars['String']['input']>
  /** The event's name, slugified. */
  slug?: InputMaybe<Scalars['String']['input']>
  /** The event's start date and time, with timezone. */
  start?: InputMaybe<Scalars['Datetime']['input']>
  /** The event's unified resource locator. */
  url?: InputMaybe<Scalars['String']['input']>
  /** The event's visibility. */
  visibility?: InputMaybe<EventVisibility>
}

/** Events recommended to a user account (M:N relationship). */
export type EventRecommendation = Node & {
  __typename?: 'EventRecommendation'
  /** Reads a single `Account` that is related to this `EventRecommendation`. */
  accountByAccountId?: Maybe<Account>
  /** A user account id. */
  accountId: Scalars['UUID']['output']
  /** Reads a single `Event` that is related to this `EventRecommendation`. */
  eventByEventId?: Maybe<Event>
  /** The predicted score of the recommendation. */
  eventId: Scalars['UUID']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output']
  /** The score of the recommendation. */
  predictedScore?: Maybe<Scalars['Float']['output']>
  /** An event id. */
  score?: Maybe<Scalars['Float']['output']>
}

/**
 * A condition to be used against `EventRecommendation` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type EventRecommendationCondition = {
  /** Checks for equality with the object’s `accountId` field. */
  accountId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `eventId` field. */
  eventId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `predictedScore` field. */
  predictedScore?: InputMaybe<Scalars['Float']['input']>
  /** Checks for equality with the object’s `score` field. */
  score?: InputMaybe<Scalars['Float']['input']>
}

/** An input for mutations affecting `EventRecommendation` */
export type EventRecommendationInput = {
  /** A user account id. */
  accountId: Scalars['UUID']['input']
  /** The predicted score of the recommendation. */
  eventId: Scalars['UUID']['input']
  /** The score of the recommendation. */
  predictedScore?: InputMaybe<Scalars['Float']['input']>
  /** An event id. */
  score?: InputMaybe<Scalars['Float']['input']>
}

/** Represents an update to a `EventRecommendation`. Fields that are set will be updated. */
export type EventRecommendationPatch = {
  /** A user account id. */
  accountId?: InputMaybe<Scalars['UUID']['input']>
  /** The predicted score of the recommendation. */
  eventId?: InputMaybe<Scalars['UUID']['input']>
  /** The score of the recommendation. */
  predictedScore?: InputMaybe<Scalars['Float']['input']>
  /** An event id. */
  score?: InputMaybe<Scalars['Float']['input']>
}

/** A connection to a list of `EventRecommendation` values. */
export type EventRecommendationsConnection = {
  __typename?: 'EventRecommendationsConnection'
  /** A list of edges which contains the `EventRecommendation` and cursor to aid in pagination. */
  edges: Array<EventRecommendationsEdge>
  /** A list of `EventRecommendation` objects. */
  nodes: Array<EventRecommendation>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `EventRecommendation` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `EventRecommendation` edge in the connection. */
export type EventRecommendationsEdge = {
  __typename?: 'EventRecommendationsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `EventRecommendation` at the end of the edge. */
  node: EventRecommendation
}

/** Methods to use when ordering `EventRecommendation`. */
export enum EventRecommendationsOrderBy {
  AccountIdAsc = 'ACCOUNT_ID_ASC',
  AccountIdDesc = 'ACCOUNT_ID_DESC',
  EventIdAsc = 'EVENT_ID_ASC',
  EventIdDesc = 'EVENT_ID_DESC',
  Natural = 'NATURAL',
  PredictedScoreAsc = 'PREDICTED_SCORE_ASC',
  PredictedScoreDesc = 'PREDICTED_SCORE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ScoreAsc = 'SCORE_ASC',
  ScoreDesc = 'SCORE_DESC',
}

/** Possible event sizes: small, medium, large, huge. */
export enum EventSize {
  Huge = 'HUGE',
  Large = 'LARGE',
  Medium = 'MEDIUM',
  Small = 'SMALL',
}

/** All input for the `eventUnlock` mutation. */
export type EventUnlockInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  guestId: Scalars['UUID']['input']
}

/** The output of our `eventUnlock` mutation. */
export type EventUnlockPayload = {
  __typename?: 'EventUnlockPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  eventUnlockResponse?: Maybe<EventUnlockResponse>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

export type EventUnlockResponse = {
  __typename?: 'EventUnlockResponse'
  creatorUsername?: Maybe<Scalars['String']['output']>
  eventSlug?: Maybe<Scalars['String']['output']>
  jwt?: Maybe<Scalars['Jwt']['output']>
}

/** Associates uploaded files with events. */
export type EventUpload = Node & {
  __typename?: 'EventUpload'
  /** Reads a single `Event` that is related to this `EventUpload`. */
  eventByEventId?: Maybe<Event>
  /** Reference to the event associated with the upload. */
  eventId: Scalars['UUID']['output']
  /** Primary key, uniquely identifies each event-upload association. */
  id: Scalars['UUID']['output']
  /** Optional boolean flag indicating if the upload is the header image for the event. */
  isHeaderImage?: Maybe<Scalars['Boolean']['output']>
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output']
  /** Reads a single `Upload` that is related to this `EventUpload`. */
  uploadByUploadId?: Maybe<Upload>
  /** Reference to the uploaded file. */
  uploadId: Scalars['UUID']['output']
}

/**
 * A condition to be used against `EventUpload` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type EventUploadCondition = {
  /** Checks for equality with the object’s `eventId` field. */
  eventId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `isHeaderImage` field. */
  isHeaderImage?: InputMaybe<Scalars['Boolean']['input']>
  /** Checks for equality with the object’s `uploadId` field. */
  uploadId?: InputMaybe<Scalars['UUID']['input']>
}

/** An input for mutations affecting `EventUpload` */
export type EventUploadInput = {
  /** Reference to the event associated with the upload. */
  eventId: Scalars['UUID']['input']
  /** Optional boolean flag indicating if the upload is the header image for the event. */
  isHeaderImage?: InputMaybe<Scalars['Boolean']['input']>
  /** Reference to the uploaded file. */
  uploadId: Scalars['UUID']['input']
}

/** Represents an update to a `EventUpload`. Fields that are set will be updated. */
export type EventUploadPatch = {
  /** Optional boolean flag indicating if the upload is the header image for the event. */
  isHeaderImage?: InputMaybe<Scalars['Boolean']['input']>
}

/** A connection to a list of `EventUpload` values. */
export type EventUploadsConnection = {
  __typename?: 'EventUploadsConnection'
  /** A list of edges which contains the `EventUpload` and cursor to aid in pagination. */
  edges: Array<EventUploadsEdge>
  /** A list of `EventUpload` objects. */
  nodes: Array<EventUpload>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `EventUpload` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `EventUpload` edge in the connection. */
export type EventUploadsEdge = {
  __typename?: 'EventUploadsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `EventUpload` at the end of the edge. */
  node: EventUpload
}

/** Methods to use when ordering `EventUpload`. */
export enum EventUploadsOrderBy {
  EventIdAsc = 'EVENT_ID_ASC',
  EventIdDesc = 'EVENT_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  IsHeaderImageAsc = 'IS_HEADER_IMAGE_ASC',
  IsHeaderImageDesc = 'IS_HEADER_IMAGE_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UploadIdAsc = 'UPLOAD_ID_ASC',
  UploadIdDesc = 'UPLOAD_ID_DESC',
}

/** Possible visibilities of events and event groups: public, private and unlisted. */
export enum EventVisibility {
  Private = 'PRIVATE',
  Public = 'PUBLIC',
  Unlisted = 'UNLISTED',
}

/** A connection to a list of `Event` values. */
export type EventsConnection = {
  __typename?: 'EventsConnection'
  /** A list of edges which contains the `Event` and cursor to aid in pagination. */
  edges: Array<EventsEdge>
  /** A list of `Event` objects. */
  nodes: Array<Event>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `Event` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `Event` edge in the connection. */
export type EventsEdge = {
  __typename?: 'EventsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `Event` at the end of the edge. */
  node: Event
}

/** Methods to use when ordering `Event`. */
export enum EventsOrderBy {
  AddressIdAsc = 'ADDRESS_ID_ASC',
  AddressIdDesc = 'ADDRESS_ID_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  CreatedByAsc = 'CREATED_BY_ASC',
  CreatedByDesc = 'CREATED_BY_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  EndAsc = 'END_ASC',
  EndDesc = 'END_DESC',
  GuestCountMaximumAsc = 'GUEST_COUNT_MAXIMUM_ASC',
  GuestCountMaximumDesc = 'GUEST_COUNT_MAXIMUM_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  IsArchivedAsc = 'IS_ARCHIVED_ASC',
  IsArchivedDesc = 'IS_ARCHIVED_DESC',
  IsInPersonAsc = 'IS_IN_PERSON_ASC',
  IsInPersonDesc = 'IS_IN_PERSON_DESC',
  IsRemoteAsc = 'IS_REMOTE_ASC',
  IsRemoteDesc = 'IS_REMOTE_DESC',
  LanguageAsc = 'LANGUAGE_ASC',
  LanguageDesc = 'LANGUAGE_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SlugAsc = 'SLUG_ASC',
  SlugDesc = 'SLUG_DESC',
  StartAsc = 'START_ASC',
  StartDesc = 'START_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  VisibilityAsc = 'VISIBILITY_ASC',
  VisibilityDesc = 'VISIBILITY_DESC',
}

/** A connection to a list of `UUID` values. */
export type EventsOrganizedConnection = {
  __typename?: 'EventsOrganizedConnection'
  /** A list of edges which contains the `UUID` and cursor to aid in pagination. */
  edges: Array<EventsOrganizedEdge>
  /** A list of `UUID` objects. */
  nodes: Array<Maybe<Scalars['UUID']['output']>>
  /** The count of *all* `UUID` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `UUID` edge in the connection. */
export type EventsOrganizedEdge = {
  __typename?: 'EventsOrganizedEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `UUID` at the end of the edge. */
  node?: Maybe<Scalars['UUID']['output']>
}

/** A friend relation together with its status. */
export type Friendship = Node & {
  __typename?: 'Friendship'
  /** The 'left' side of the friend relation. It must be lexically less than the 'right' side. */
  aAccountId: Scalars['UUID']['output']
  /** Reads a single `Account` that is related to this `Friendship`. */
  accountByAAccountId?: Maybe<Account>
  /** Reads a single `Account` that is related to this `Friendship`. */
  accountByBAccountId?: Maybe<Account>
  /** Reads a single `Account` that is related to this `Friendship`. */
  accountByCreatedBy?: Maybe<Account>
  /** Reads a single `Account` that is related to this `Friendship`. */
  accountByUpdatedBy?: Maybe<Account>
  /** The 'right' side of the friend relation. It must be lexically greater than the 'left' side. */
  bAccountId: Scalars['UUID']['output']
  /** The timestamp when the friend relation was created. */
  createdAt: Scalars['Datetime']['output']
  /** The account that created the friend relation was created. */
  createdBy: Scalars['UUID']['output']
  /** The friend relation's internal id. */
  id: Scalars['UUID']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output']
  /** The status of the friend relation. */
  status: FriendshipStatus
  /** The timestamp when the friend relation's status was updated. */
  updatedAt?: Maybe<Scalars['Datetime']['output']>
  /** The account that updated the friend relation's status. */
  updatedBy?: Maybe<Scalars['UUID']['output']>
}

/**
 * A condition to be used against `Friendship` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type FriendshipCondition = {
  /** Checks for equality with the object’s `aAccountId` field. */
  aAccountId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `bAccountId` field. */
  bAccountId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>
  /** Checks for equality with the object’s `createdBy` field. */
  createdBy?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `status` field. */
  status?: InputMaybe<FriendshipStatus>
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>
  /** Checks for equality with the object’s `updatedBy` field. */
  updatedBy?: InputMaybe<Scalars['UUID']['input']>
}

/** An input for mutations affecting `Friendship` */
export type FriendshipInput = {
  /** The 'left' side of the friend relation. It must be lexically less than the 'right' side. */
  aAccountId: Scalars['UUID']['input']
  /** The 'right' side of the friend relation. It must be lexically greater than the 'left' side. */
  bAccountId: Scalars['UUID']['input']
  /** The account that created the friend relation was created. */
  createdBy: Scalars['UUID']['input']
}

/** Represents an update to a `Friendship`. Fields that are set will be updated. */
export type FriendshipPatch = {
  /** The status of the friend relation. */
  status?: InputMaybe<FriendshipStatus>
}

/**
 * Possible status values of a friend relation.
 * There is no status `rejected` because friendship records will be deleted when a friendship request is rejected.
 */
export enum FriendshipStatus {
  Accepted = 'ACCEPTED',
  Requested = 'REQUESTED',
}

/** A connection to a list of `Friendship` values. */
export type FriendshipsConnection = {
  __typename?: 'FriendshipsConnection'
  /** A list of edges which contains the `Friendship` and cursor to aid in pagination. */
  edges: Array<FriendshipsEdge>
  /** A list of `Friendship` objects. */
  nodes: Array<Friendship>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `Friendship` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `Friendship` edge in the connection. */
export type FriendshipsEdge = {
  __typename?: 'FriendshipsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `Friendship` at the end of the edge. */
  node: Friendship
}

/** Methods to use when ordering `Friendship`. */
export enum FriendshipsOrderBy {
  AAccountIdAsc = 'A_ACCOUNT_ID_ASC',
  AAccountIdDesc = 'A_ACCOUNT_ID_DESC',
  BAccountIdAsc = 'B_ACCOUNT_ID_ASC',
  BAccountIdDesc = 'B_ACCOUNT_ID_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  CreatedByAsc = 'CREATED_BY_ASC',
  CreatedByDesc = 'CREATED_BY_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  UpdatedByAsc = 'UPDATED_BY_ASC',
  UpdatedByDesc = 'UPDATED_BY_DESC',
}

/** All geography XY types implement this interface */
export type GeographyGeometry = {
  /** Converts the object to GeoJSON */
  geojson?: Maybe<Scalars['GeoJSON']['output']>
  /** Spatial reference identifier (SRID) */
  srid: Scalars['Int']['output']
}

/** All geography types implement this interface */
export type GeographyInterface = {
  /** Converts the object to GeoJSON */
  geojson?: Maybe<Scalars['GeoJSON']['output']>
  /** Spatial reference identifier (SRID) */
  srid: Scalars['Int']['output']
}

export type GeographyPoint = GeographyGeometry &
  GeographyInterface & {
    __typename?: 'GeographyPoint'
    geojson?: Maybe<Scalars['GeoJSON']['output']>
    latitude: Scalars['Float']['output']
    longitude: Scalars['Float']['output']
    srid: Scalars['Int']['output']
  }

/** A guest for a contact. A bidirectional mapping between an event and a contact. */
export type Guest = Node & {
  __typename?: 'Guest'
  /** Reads a single `Account` that is related to this `Guest`. */
  accountByUpdatedBy?: Maybe<Account>
  /** Reads a single `Contact` that is related to this `Guest`. */
  contactByContactId?: Maybe<Contact>
  /** The internal id of the guest's contact. */
  contactId: Scalars['UUID']['output']
  /** Timestamp of when the guest was created, defaults to the current timestamp. */
  createdAt: Scalars['Datetime']['output']
  /** Reads a single `Event` that is related to this `Guest`. */
  eventByEventId?: Maybe<Event>
  /** The internal id of the guest's event. */
  eventId: Scalars['UUID']['output']
  /** The guest's general feedback status. */
  feedback?: Maybe<InvitationFeedback>
  /** The guest's paper feedback status. */
  feedbackPaper?: Maybe<InvitationFeedbackPaper>
  /** The guests's internal id. */
  id: Scalars['UUID']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output']
  /** Timestamp of when the guest was last updated. */
  updatedAt?: Maybe<Scalars['Datetime']['output']>
  /** The id of the account which last updated the guest. `NULL` if the guest was updated by an anonymous user. */
  updatedBy?: Maybe<Scalars['UUID']['output']>
}

/** A condition to be used against `Guest` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type GuestCondition = {
  /** Checks for equality with the object’s `contactId` field. */
  contactId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>
  /** Checks for equality with the object’s `eventId` field. */
  eventId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `feedback` field. */
  feedback?: InputMaybe<InvitationFeedback>
  /** Checks for equality with the object’s `feedbackPaper` field. */
  feedbackPaper?: InputMaybe<InvitationFeedbackPaper>
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>
  /** Checks for equality with the object’s `updatedBy` field. */
  updatedBy?: InputMaybe<Scalars['UUID']['input']>
}

/** A `UUID` edge in the connection. */
export type GuestContactIdEdge = {
  __typename?: 'GuestContactIdEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `UUID` at the end of the edge. */
  node?: Maybe<Scalars['UUID']['output']>
}

/** A connection to a list of `UUID` values. */
export type GuestContactIdsConnection = {
  __typename?: 'GuestContactIdsConnection'
  /** A list of edges which contains the `UUID` and cursor to aid in pagination. */
  edges: Array<GuestContactIdEdge>
  /** A list of `UUID` objects. */
  nodes: Array<Maybe<Scalars['UUID']['output']>>
  /** The count of *all* `UUID` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** View returning flattened guests. */
export type GuestFlat = {
  __typename?: 'GuestFlat'
  contactAccountId?: Maybe<Scalars['UUID']['output']>
  contactAddressId?: Maybe<Scalars['UUID']['output']>
  contactCreatedBy?: Maybe<Scalars['UUID']['output']>
  contactEmailAddress?: Maybe<Scalars['String']['output']>
  contactEmailAddressHash?: Maybe<Scalars['String']['output']>
  contactFirstName?: Maybe<Scalars['String']['output']>
  contactId?: Maybe<Scalars['UUID']['output']>
  contactLastName?: Maybe<Scalars['String']['output']>
  contactPhoneNumber?: Maybe<Scalars['String']['output']>
  contactUrl?: Maybe<Scalars['String']['output']>
  eventAddressId?: Maybe<Scalars['UUID']['output']>
  eventCreatedBy?: Maybe<Scalars['UUID']['output']>
  eventDescription?: Maybe<Scalars['String']['output']>
  eventEnd?: Maybe<Scalars['Datetime']['output']>
  eventGuestCountMaximum?: Maybe<Scalars['Int']['output']>
  eventId?: Maybe<Scalars['UUID']['output']>
  eventIsArchived?: Maybe<Scalars['Boolean']['output']>
  eventIsInPerson?: Maybe<Scalars['Boolean']['output']>
  eventIsRemote?: Maybe<Scalars['Boolean']['output']>
  eventName?: Maybe<Scalars['String']['output']>
  eventSlug?: Maybe<Scalars['String']['output']>
  eventStart?: Maybe<Scalars['Datetime']['output']>
  eventUrl?: Maybe<Scalars['String']['output']>
  eventVisibility?: Maybe<EventVisibility>
  guestContactId?: Maybe<Scalars['UUID']['output']>
  guestEventId?: Maybe<Scalars['UUID']['output']>
  guestFeedback?: Maybe<InvitationFeedback>
  guestFeedbackPaper?: Maybe<InvitationFeedbackPaper>
  guestId?: Maybe<Scalars['UUID']['output']>
}

/**
 * A condition to be used against `GuestFlat` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type GuestFlatCondition = {
  /** Checks for equality with the object’s `contactAccountId` field. */
  contactAccountId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `contactAddressId` field. */
  contactAddressId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `contactCreatedBy` field. */
  contactCreatedBy?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `contactEmailAddress` field. */
  contactEmailAddress?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `contactEmailAddressHash` field. */
  contactEmailAddressHash?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `contactFirstName` field. */
  contactFirstName?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `contactId` field. */
  contactId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `contactLastName` field. */
  contactLastName?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `contactPhoneNumber` field. */
  contactPhoneNumber?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `contactUrl` field. */
  contactUrl?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `eventAddressId` field. */
  eventAddressId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `eventCreatedBy` field. */
  eventCreatedBy?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `eventDescription` field. */
  eventDescription?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `eventEnd` field. */
  eventEnd?: InputMaybe<Scalars['Datetime']['input']>
  /** Checks for equality with the object’s `eventGuestCountMaximum` field. */
  eventGuestCountMaximum?: InputMaybe<Scalars['Int']['input']>
  /** Checks for equality with the object’s `eventId` field. */
  eventId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `eventIsArchived` field. */
  eventIsArchived?: InputMaybe<Scalars['Boolean']['input']>
  /** Checks for equality with the object’s `eventIsInPerson` field. */
  eventIsInPerson?: InputMaybe<Scalars['Boolean']['input']>
  /** Checks for equality with the object’s `eventIsRemote` field. */
  eventIsRemote?: InputMaybe<Scalars['Boolean']['input']>
  /** Checks for equality with the object’s `eventName` field. */
  eventName?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `eventSlug` field. */
  eventSlug?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `eventStart` field. */
  eventStart?: InputMaybe<Scalars['Datetime']['input']>
  /** Checks for equality with the object’s `eventUrl` field. */
  eventUrl?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `eventVisibility` field. */
  eventVisibility?: InputMaybe<EventVisibility>
  /** Checks for equality with the object’s `guestContactId` field. */
  guestContactId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `guestEventId` field. */
  guestEventId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `guestFeedback` field. */
  guestFeedback?: InputMaybe<InvitationFeedback>
  /** Checks for equality with the object’s `guestFeedbackPaper` field. */
  guestFeedbackPaper?: InputMaybe<InvitationFeedbackPaper>
  /** Checks for equality with the object’s `guestId` field. */
  guestId?: InputMaybe<Scalars['UUID']['input']>
}

/** A connection to a list of `GuestFlat` values. */
export type GuestFlatsConnection = {
  __typename?: 'GuestFlatsConnection'
  /** A list of edges which contains the `GuestFlat` and cursor to aid in pagination. */
  edges: Array<GuestFlatsEdge>
  /** A list of `GuestFlat` objects. */
  nodes: Array<GuestFlat>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `GuestFlat` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `GuestFlat` edge in the connection. */
export type GuestFlatsEdge = {
  __typename?: 'GuestFlatsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `GuestFlat` at the end of the edge. */
  node: GuestFlat
}

/** Methods to use when ordering `GuestFlat`. */
export enum GuestFlatsOrderBy {
  ContactAccountIdAsc = 'CONTACT_ACCOUNT_ID_ASC',
  ContactAccountIdDesc = 'CONTACT_ACCOUNT_ID_DESC',
  ContactAddressIdAsc = 'CONTACT_ADDRESS_ID_ASC',
  ContactAddressIdDesc = 'CONTACT_ADDRESS_ID_DESC',
  ContactCreatedByAsc = 'CONTACT_CREATED_BY_ASC',
  ContactCreatedByDesc = 'CONTACT_CREATED_BY_DESC',
  ContactEmailAddressAsc = 'CONTACT_EMAIL_ADDRESS_ASC',
  ContactEmailAddressDesc = 'CONTACT_EMAIL_ADDRESS_DESC',
  ContactEmailAddressHashAsc = 'CONTACT_EMAIL_ADDRESS_HASH_ASC',
  ContactEmailAddressHashDesc = 'CONTACT_EMAIL_ADDRESS_HASH_DESC',
  ContactFirstNameAsc = 'CONTACT_FIRST_NAME_ASC',
  ContactFirstNameDesc = 'CONTACT_FIRST_NAME_DESC',
  ContactIdAsc = 'CONTACT_ID_ASC',
  ContactIdDesc = 'CONTACT_ID_DESC',
  ContactLastNameAsc = 'CONTACT_LAST_NAME_ASC',
  ContactLastNameDesc = 'CONTACT_LAST_NAME_DESC',
  ContactPhoneNumberAsc = 'CONTACT_PHONE_NUMBER_ASC',
  ContactPhoneNumberDesc = 'CONTACT_PHONE_NUMBER_DESC',
  ContactUrlAsc = 'CONTACT_URL_ASC',
  ContactUrlDesc = 'CONTACT_URL_DESC',
  EventAddressIdAsc = 'EVENT_ADDRESS_ID_ASC',
  EventAddressIdDesc = 'EVENT_ADDRESS_ID_DESC',
  EventCreatedByAsc = 'EVENT_CREATED_BY_ASC',
  EventCreatedByDesc = 'EVENT_CREATED_BY_DESC',
  EventDescriptionAsc = 'EVENT_DESCRIPTION_ASC',
  EventDescriptionDesc = 'EVENT_DESCRIPTION_DESC',
  EventEndAsc = 'EVENT_END_ASC',
  EventEndDesc = 'EVENT_END_DESC',
  EventGuestCountMaximumAsc = 'EVENT_GUEST_COUNT_MAXIMUM_ASC',
  EventGuestCountMaximumDesc = 'EVENT_GUEST_COUNT_MAXIMUM_DESC',
  EventIdAsc = 'EVENT_ID_ASC',
  EventIdDesc = 'EVENT_ID_DESC',
  EventIsArchivedAsc = 'EVENT_IS_ARCHIVED_ASC',
  EventIsArchivedDesc = 'EVENT_IS_ARCHIVED_DESC',
  EventIsInPersonAsc = 'EVENT_IS_IN_PERSON_ASC',
  EventIsInPersonDesc = 'EVENT_IS_IN_PERSON_DESC',
  EventIsRemoteAsc = 'EVENT_IS_REMOTE_ASC',
  EventIsRemoteDesc = 'EVENT_IS_REMOTE_DESC',
  EventNameAsc = 'EVENT_NAME_ASC',
  EventNameDesc = 'EVENT_NAME_DESC',
  EventSlugAsc = 'EVENT_SLUG_ASC',
  EventSlugDesc = 'EVENT_SLUG_DESC',
  EventStartAsc = 'EVENT_START_ASC',
  EventStartDesc = 'EVENT_START_DESC',
  EventUrlAsc = 'EVENT_URL_ASC',
  EventUrlDesc = 'EVENT_URL_DESC',
  EventVisibilityAsc = 'EVENT_VISIBILITY_ASC',
  EventVisibilityDesc = 'EVENT_VISIBILITY_DESC',
  GuestContactIdAsc = 'GUEST_CONTACT_ID_ASC',
  GuestContactIdDesc = 'GUEST_CONTACT_ID_DESC',
  GuestEventIdAsc = 'GUEST_EVENT_ID_ASC',
  GuestEventIdDesc = 'GUEST_EVENT_ID_DESC',
  GuestFeedbackAsc = 'GUEST_FEEDBACK_ASC',
  GuestFeedbackDesc = 'GUEST_FEEDBACK_DESC',
  GuestFeedbackPaperAsc = 'GUEST_FEEDBACK_PAPER_ASC',
  GuestFeedbackPaperDesc = 'GUEST_FEEDBACK_PAPER_DESC',
  GuestIdAsc = 'GUEST_ID_ASC',
  GuestIdDesc = 'GUEST_ID_DESC',
  Natural = 'NATURAL',
}

/** An input for mutations affecting `Guest` */
export type GuestInput = {
  /** The internal id of the guest's contact. */
  contactId: Scalars['UUID']['input']
  /** The internal id of the guest's event. */
  eventId: Scalars['UUID']['input']
  /** The guest's general feedback status. */
  feedback?: InputMaybe<InvitationFeedback>
  /** The guest's paper feedback status. */
  feedbackPaper?: InputMaybe<InvitationFeedbackPaper>
}

/** Represents an update to a `Guest`. Fields that are set will be updated. */
export type GuestPatch = {
  /** The internal id of the guest's contact. */
  contactId?: InputMaybe<Scalars['UUID']['input']>
  /** The internal id of the guest's event. */
  eventId?: InputMaybe<Scalars['UUID']['input']>
  /** The guest's general feedback status. */
  feedback?: InputMaybe<InvitationFeedback>
  /** The guest's paper feedback status. */
  feedbackPaper?: InputMaybe<InvitationFeedbackPaper>
}

/** A connection to a list of `Guest` values. */
export type GuestsConnection = {
  __typename?: 'GuestsConnection'
  /** A list of edges which contains the `Guest` and cursor to aid in pagination. */
  edges: Array<GuestsEdge>
  /** A list of `Guest` objects. */
  nodes: Array<Guest>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `Guest` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `Guest` edge in the connection. */
export type GuestsEdge = {
  __typename?: 'GuestsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `Guest` at the end of the edge. */
  node: Guest
}

/** Methods to use when ordering `Guest`. */
export enum GuestsOrderBy {
  ContactIdAsc = 'CONTACT_ID_ASC',
  ContactIdDesc = 'CONTACT_ID_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  EventIdAsc = 'EVENT_ID_ASC',
  EventIdDesc = 'EVENT_ID_DESC',
  FeedbackAsc = 'FEEDBACK_ASC',
  FeedbackDesc = 'FEEDBACK_DESC',
  FeedbackPaperAsc = 'FEEDBACK_PAPER_ASC',
  FeedbackPaperDesc = 'FEEDBACK_PAPER_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  UpdatedByAsc = 'UPDATED_BY_ASC',
  UpdatedByDesc = 'UPDATED_BY_DESC',
}

/** Possible answers to an invitation: accepted, canceled. */
export enum InvitationFeedback {
  Accepted = 'ACCEPTED',
  Canceled = 'CANCELED',
}

/** Possible choices on how to receive a paper invitation: none, paper, digital. */
export enum InvitationFeedbackPaper {
  Digital = 'DIGITAL',
  None = 'NONE',
  Paper = 'PAPER',
}

/** All input for the `invite` mutation. */
export type InviteInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  guestId: Scalars['UUID']['input']
  language: Scalars['String']['input']
}

/** The output of our `invite` mutation. */
export type InvitePayload = {
  __typename?: 'InvitePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** All input for the `jwtRefresh` mutation. */
export type JwtRefreshInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  jwtId: Scalars['UUID']['input']
}

/** The output of our `jwtRefresh` mutation. */
export type JwtRefreshPayload = {
  __typename?: 'JwtRefreshPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  jwt?: Maybe<Scalars['Jwt']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** Supported ISO 639 language codes. */
export enum Language {
  De = 'DE',
  En = 'EN',
}

/** Legal terms like privacy policies or terms of service. */
export type LegalTerm = Node & {
  __typename?: 'LegalTerm'
  /** Timestamp when the term was created. Set to the current time by default. */
  createdAt: Scalars['Datetime']['output']
  /** Unique identifier for each legal term. */
  id: Scalars['UUID']['output']
  /** Language code in ISO 639-1 format with optional region (e.g., `en` for English, `en_GB` for British English) */
  language: Scalars['String']['output']
  /** Reads and enables pagination through a set of `LegalTermAcceptance`. */
  legalTermAcceptancesByLegalTermId: LegalTermAcceptancesConnection
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output']
  /** Text of the legal term. Markdown is expected to be used. It must be non-empty and cannot exceed 500,000 characters. */
  term: Scalars['String']['output']
  /** Semantic versioning string to track changes to the legal terms (format: `X.Y.Z`). */
  version: Scalars['String']['output']
}

/** Legal terms like privacy policies or terms of service. */
export type LegalTermLegalTermAcceptancesByLegalTermIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<LegalTermAcceptanceCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<LegalTermAcceptancesOrderBy>>
}

/** Tracks each user account's acceptance of legal terms and conditions. */
export type LegalTermAcceptance = Node & {
  __typename?: 'LegalTermAcceptance'
  /** Reads a single `Account` that is related to this `LegalTermAcceptance`. */
  accountByAccountId?: Maybe<Account>
  /** The user account ID that accepted the legal terms. If the account is deleted, this acceptance record will also be deleted. */
  accountId: Scalars['UUID']['output']
  /** Timestamp showing when the legal terms were accepted, set automatically at the time of acceptance. */
  createdAt: Scalars['Datetime']['output']
  /** Unique identifier for this legal term acceptance record. Automatically generated for each new acceptance. */
  id: Scalars['UUID']['output']
  /** Reads a single `LegalTerm` that is related to this `LegalTermAcceptance`. */
  legalTermByLegalTermId?: Maybe<LegalTerm>
  /** The ID of the legal terms that were accepted. Deletion of these legal terms is restricted while they are still referenced in this table. */
  legalTermId: Scalars['UUID']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output']
}

/**
 * A condition to be used against `LegalTermAcceptance` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type LegalTermAcceptanceCondition = {
  /** Checks for equality with the object’s `accountId` field. */
  accountId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `legalTermId` field. */
  legalTermId?: InputMaybe<Scalars['UUID']['input']>
}

/** An input for mutations affecting `LegalTermAcceptance` */
export type LegalTermAcceptanceInput = {
  /** The user account ID that accepted the legal terms. If the account is deleted, this acceptance record will also be deleted. */
  accountId: Scalars['UUID']['input']
  /** The ID of the legal terms that were accepted. Deletion of these legal terms is restricted while they are still referenced in this table. */
  legalTermId: Scalars['UUID']['input']
}

/** A connection to a list of `LegalTermAcceptance` values. */
export type LegalTermAcceptancesConnection = {
  __typename?: 'LegalTermAcceptancesConnection'
  /** A list of edges which contains the `LegalTermAcceptance` and cursor to aid in pagination. */
  edges: Array<LegalTermAcceptancesEdge>
  /** A list of `LegalTermAcceptance` objects. */
  nodes: Array<LegalTermAcceptance>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `LegalTermAcceptance` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `LegalTermAcceptance` edge in the connection. */
export type LegalTermAcceptancesEdge = {
  __typename?: 'LegalTermAcceptancesEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `LegalTermAcceptance` at the end of the edge. */
  node: LegalTermAcceptance
}

/** Methods to use when ordering `LegalTermAcceptance`. */
export enum LegalTermAcceptancesOrderBy {
  AccountIdAsc = 'ACCOUNT_ID_ASC',
  AccountIdDesc = 'ACCOUNT_ID_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  LegalTermIdAsc = 'LEGAL_TERM_ID_ASC',
  LegalTermIdDesc = 'LEGAL_TERM_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
}

/**
 * A condition to be used against `LegalTerm` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type LegalTermCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `language` field. */
  language?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `term` field. */
  term?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `version` field. */
  version?: InputMaybe<Scalars['String']['input']>
}

/** A connection to a list of `LegalTerm` values. */
export type LegalTermsConnection = {
  __typename?: 'LegalTermsConnection'
  /** A list of edges which contains the `LegalTerm` and cursor to aid in pagination. */
  edges: Array<LegalTermsEdge>
  /** A list of `LegalTerm` objects. */
  nodes: Array<LegalTerm>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `LegalTerm` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `LegalTerm` edge in the connection. */
export type LegalTermsEdge = {
  __typename?: 'LegalTermsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `LegalTerm` at the end of the edge. */
  node: LegalTerm
}

/** Methods to use when ordering `LegalTerm`. */
export enum LegalTermsOrderBy {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  LanguageAsc = 'LANGUAGE_ASC',
  LanguageDesc = 'LANGUAGE_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TermAsc = 'TERM_ASC',
  TermDesc = 'TERM_DESC',
  VersionAsc = 'VERSION_ASC',
  VersionDesc = 'VERSION_DESC',
}

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation'
  /** Allows to delete an account. */
  accountDelete?: Maybe<AccountDeletePayload>
  /** Sets the account's email address verification code to `NULL` for which the email address verification code equals the one passed and is up to date. */
  accountEmailAddressVerification?: Maybe<AccountEmailAddressVerificationPayload>
  /** Allows to change an account's password. */
  accountPasswordChange?: Maybe<AccountPasswordChangePayload>
  /** Sets a new password for an account if there was a request to do so before that's still up to date. */
  accountPasswordReset?: Maybe<AccountPasswordResetPayload>
  /** Sets a new password reset verification code for an account. */
  accountPasswordResetRequest?: Maybe<AccountPasswordResetRequestPayload>
  /** Creates a contact and registers an account referencing it.\n\nError codes:\n- **VTBDA** when the birth date is not at least 18 years old.\n- **VTPLL** when the password length does not reach its minimum.\n- **VTAUV** when an account with the given username already exists. */
  accountRegistration?: Maybe<AccountRegistrationPayload>
  /** Refreshes an account's email address verification validity period. */
  accountRegistrationRefresh?: Maybe<AccountRegistrationRefreshPayload>
  /** Inserts an achievement unlock for the user that gave an existing achievement code. */
  achievementUnlock?: Maybe<AchievementUnlockPayload>
  /** Creates a JWT token that will securely identify an account and give it certain permissions. */
  authenticate?: Maybe<AuthenticatePayload>
  /** Creates a single `AccountBlock`. */
  createAccountBlock?: Maybe<CreateAccountBlockPayload>
  /** Creates a single `AccountSocialNetwork`. */
  createAccountSocialNetwork?: Maybe<CreateAccountSocialNetworkPayload>
  /** Creates a single `Achievement`. */
  createAchievement?: Maybe<CreateAchievementPayload>
  /** Creates a single `Address`. */
  createAddress?: Maybe<CreateAddressPayload>
  /** Creates a single `Contact`. */
  createContact?: Maybe<CreateContactPayload>
  /** Creates a single `Device`. */
  createDevice?: Maybe<CreateDevicePayload>
  /** Creates a single `Event`. */
  createEvent?: Maybe<CreateEventPayload>
  /** Creates a single `EventCategoryMapping`. */
  createEventCategoryMapping?: Maybe<CreateEventCategoryMappingPayload>
  /** Creates a single `EventFavorite`. */
  createEventFavorite?: Maybe<CreateEventFavoritePayload>
  /** Creates a single `EventFormatMapping`. */
  createEventFormatMapping?: Maybe<CreateEventFormatMappingPayload>
  /** Creates a single `EventRecommendation`. */
  createEventRecommendation?: Maybe<CreateEventRecommendationPayload>
  /** Creates a single `EventUpload`. */
  createEventUpload?: Maybe<CreateEventUploadPayload>
  /** Creates a single `Friendship`. */
  createFriendship?: Maybe<CreateFriendshipPayload>
  /** Creates a single `Guest`. */
  createGuest?: Maybe<CreateGuestPayload>
  /** Function for inserting multiple guest records. */
  createGuests?: Maybe<CreateGuestsPayload>
  /** Creates a single `LegalTermAcceptance`. */
  createLegalTermAcceptance?: Maybe<CreateLegalTermAcceptancePayload>
  /** Creates a single `PreferenceEventCategory`. */
  createPreferenceEventCategory?: Maybe<CreatePreferenceEventCategoryPayload>
  /** Creates a single `PreferenceEventFormat`. */
  createPreferenceEventFormat?: Maybe<CreatePreferenceEventFormatPayload>
  /** Creates a single `PreferenceEventLocation`. */
  createPreferenceEventLocation?: Maybe<CreatePreferenceEventLocationPayload>
  /** Creates a single `PreferenceEventSize`. */
  createPreferenceEventSize?: Maybe<CreatePreferenceEventSizePayload>
  /** Creates a single `ProfilePicture`. */
  createProfilePicture?: Maybe<CreateProfilePicturePayload>
  /** Creates a single `Report`. */
  createReport?: Maybe<CreateReportPayload>
  /** Creates a single `Upload`. */
  createUpload?: Maybe<CreateUploadPayload>
  /** Deletes a single `AccountBlock` using its globally unique id. */
  deleteAccountBlock?: Maybe<DeleteAccountBlockPayload>
  /** Deletes a single `AccountBlock` using a unique key. */
  deleteAccountBlockByCreatedByAndBlockedAccountId?: Maybe<DeleteAccountBlockPayload>
  /** Deletes a single `AccountBlock` using a unique key. */
  deleteAccountBlockById?: Maybe<DeleteAccountBlockPayload>
  /** Deletes a single `AccountSocialNetwork` using its globally unique id. */
  deleteAccountSocialNetwork?: Maybe<DeleteAccountSocialNetworkPayload>
  /** Deletes a single `AccountSocialNetwork` using a unique key. */
  deleteAccountSocialNetworkByAccountIdAndSocialNetwork?: Maybe<DeleteAccountSocialNetworkPayload>
  /** Deletes a single `Achievement` using its globally unique id. */
  deleteAchievement?: Maybe<DeleteAchievementPayload>
  /** Deletes a single `Achievement` using a unique key. */
  deleteAchievementByAccountIdAndAchievement?: Maybe<DeleteAchievementPayload>
  /** Deletes a single `Achievement` using a unique key. */
  deleteAchievementById?: Maybe<DeleteAchievementPayload>
  /** Deletes a single `Address` using its globally unique id. */
  deleteAddress?: Maybe<DeleteAddressPayload>
  /** Deletes a single `Address` using a unique key. */
  deleteAddressById?: Maybe<DeleteAddressPayload>
  /** Deletes a single `Contact` using its globally unique id. */
  deleteContact?: Maybe<DeleteContactPayload>
  /** Deletes a single `Contact` using a unique key. */
  deleteContactByCreatedByAndAccountId?: Maybe<DeleteContactPayload>
  /** Deletes a single `Contact` using a unique key. */
  deleteContactById?: Maybe<DeleteContactPayload>
  /** Deletes a single `Device` using its globally unique id. */
  deleteDevice?: Maybe<DeleteDevicePayload>
  /** Deletes a single `Device` using a unique key. */
  deleteDeviceByCreatedByAndFcmToken?: Maybe<DeleteDevicePayload>
  /** Deletes a single `Device` using a unique key. */
  deleteDeviceById?: Maybe<DeleteDevicePayload>
  /** Deletes a single `Event` using its globally unique id. */
  deleteEvent?: Maybe<DeleteEventPayload>
  /** Deletes a single `Event` using a unique key. */
  deleteEventByCreatedByAndSlug?: Maybe<DeleteEventPayload>
  /** Deletes a single `Event` using a unique key. */
  deleteEventById?: Maybe<DeleteEventPayload>
  /** Deletes a single `EventCategoryMapping` using its globally unique id. */
  deleteEventCategoryMapping?: Maybe<DeleteEventCategoryMappingPayload>
  /** Deletes a single `EventCategoryMapping` using a unique key. */
  deleteEventCategoryMappingByEventIdAndCategoryId?: Maybe<DeleteEventCategoryMappingPayload>
  /** Deletes a single `EventFavorite` using its globally unique id. */
  deleteEventFavorite?: Maybe<DeleteEventFavoritePayload>
  /** Deletes a single `EventFavorite` using a unique key. */
  deleteEventFavoriteByCreatedByAndEventId?: Maybe<DeleteEventFavoritePayload>
  /** Deletes a single `EventFavorite` using a unique key. */
  deleteEventFavoriteById?: Maybe<DeleteEventFavoritePayload>
  /** Deletes a single `EventFormatMapping` using its globally unique id. */
  deleteEventFormatMapping?: Maybe<DeleteEventFormatMappingPayload>
  /** Deletes a single `EventFormatMapping` using a unique key. */
  deleteEventFormatMappingByEventIdAndFormatId?: Maybe<DeleteEventFormatMappingPayload>
  /** Deletes a single `EventRecommendation` using its globally unique id. */
  deleteEventRecommendation?: Maybe<DeleteEventRecommendationPayload>
  /** Deletes a single `EventRecommendation` using a unique key. */
  deleteEventRecommendationByAccountIdAndEventId?: Maybe<DeleteEventRecommendationPayload>
  /** Deletes a single `EventUpload` using its globally unique id. */
  deleteEventUpload?: Maybe<DeleteEventUploadPayload>
  /** Deletes a single `EventUpload` using a unique key. */
  deleteEventUploadByEventIdAndUploadId?: Maybe<DeleteEventUploadPayload>
  /** Deletes a single `EventUpload` using a unique key. */
  deleteEventUploadById?: Maybe<DeleteEventUploadPayload>
  /** Deletes a single `Friendship` using its globally unique id. */
  deleteFriendship?: Maybe<DeleteFriendshipPayload>
  /** Deletes a single `Friendship` using a unique key. */
  deleteFriendshipByAAccountIdAndBAccountId?: Maybe<DeleteFriendshipPayload>
  /** Deletes a single `Friendship` using a unique key. */
  deleteFriendshipById?: Maybe<DeleteFriendshipPayload>
  /** Deletes a single `Guest` using its globally unique id. */
  deleteGuest?: Maybe<DeleteGuestPayload>
  /** Deletes a single `Guest` using a unique key. */
  deleteGuestByEventIdAndContactId?: Maybe<DeleteGuestPayload>
  /** Deletes a single `Guest` using a unique key. */
  deleteGuestById?: Maybe<DeleteGuestPayload>
  /** Deletes a single `PreferenceEventCategory` using its globally unique id. */
  deletePreferenceEventCategory?: Maybe<DeletePreferenceEventCategoryPayload>
  /** Deletes a single `PreferenceEventCategory` using a unique key. */
  deletePreferenceEventCategoryByAccountIdAndCategoryId?: Maybe<DeletePreferenceEventCategoryPayload>
  /** Deletes a single `PreferenceEventCategory` using a unique key. */
  deletePreferenceEventCategoryById?: Maybe<DeletePreferenceEventCategoryPayload>
  /** Deletes a single `PreferenceEventFormat` using its globally unique id. */
  deletePreferenceEventFormat?: Maybe<DeletePreferenceEventFormatPayload>
  /** Deletes a single `PreferenceEventFormat` using a unique key. */
  deletePreferenceEventFormatByAccountIdAndFormatId?: Maybe<DeletePreferenceEventFormatPayload>
  /** Deletes a single `PreferenceEventFormat` using a unique key. */
  deletePreferenceEventFormatById?: Maybe<DeletePreferenceEventFormatPayload>
  /** Deletes a single `PreferenceEventLocation` using its globally unique id. */
  deletePreferenceEventLocation?: Maybe<DeletePreferenceEventLocationPayload>
  /** Deletes a single `PreferenceEventLocation` using a unique key. */
  deletePreferenceEventLocationByCreatedByAndLocationAndRadius?: Maybe<DeletePreferenceEventLocationPayload>
  /** Deletes a single `PreferenceEventLocation` using a unique key. */
  deletePreferenceEventLocationById?: Maybe<DeletePreferenceEventLocationPayload>
  /** Deletes a single `PreferenceEventSize` using its globally unique id. */
  deletePreferenceEventSize?: Maybe<DeletePreferenceEventSizePayload>
  /** Deletes a single `PreferenceEventSize` using a unique key. */
  deletePreferenceEventSizeByAccountIdAndEventSize?: Maybe<DeletePreferenceEventSizePayload>
  /** Deletes a single `PreferenceEventSize` using a unique key. */
  deletePreferenceEventSizeById?: Maybe<DeletePreferenceEventSizePayload>
  /** Deletes a single `ProfilePicture` using its globally unique id. */
  deleteProfilePicture?: Maybe<DeleteProfilePicturePayload>
  /** Deletes a single `ProfilePicture` using a unique key. */
  deleteProfilePictureByAccountId?: Maybe<DeleteProfilePicturePayload>
  /** Deletes a single `ProfilePicture` using a unique key. */
  deleteProfilePictureById?: Maybe<DeleteProfilePicturePayload>
  /** Deletes a single `Upload` using its globally unique id. */
  deleteUpload?: Maybe<DeleteUploadPayload>
  /** Deletes a single `Upload` using a unique key. */
  deleteUploadById?: Maybe<DeleteUploadPayload>
  /** Deletes a single `Upload` using a unique key. */
  deleteUploadByStorageKey?: Maybe<DeleteUploadPayload>
  /** Allows to delete an event. */
  eventDelete?: Maybe<EventDeletePayload>
  /** Adds a guest claim to the current session. */
  eventUnlock?: Maybe<EventUnlockPayload>
  /** Adds a notification for the invitation channel. */
  invite?: Maybe<InvitePayload>
  /** Refreshes a JWT. */
  jwtRefresh?: Maybe<JwtRefreshPayload>
  /** Allows to set the acknowledgement state of a notification. */
  notificationAcknowledge?: Maybe<NotificationAcknowledgePayload>
  /** Sets the picture with the given upload id as the invoker's profile picture. */
  profilePictureSet?: Maybe<ProfilePictureSetPayload>
  /** Updates a single `Account` using its globally unique id and a patch. */
  updateAccount?: Maybe<UpdateAccountPayload>
  /** Updates a single `Account` using a unique key and a patch. */
  updateAccountById?: Maybe<UpdateAccountPayload>
  /** Updates a single `Account` using a unique key and a patch. */
  updateAccountByUsername?: Maybe<UpdateAccountPayload>
  /**
   * Sets the location for the invoker's account.
   *
   * Error codes:
   * - **P0002** when no record was updated.
   */
  updateAccountLocation?: Maybe<UpdateAccountLocationPayload>
  /** Updates a single `AccountSocialNetwork` using its globally unique id and a patch. */
  updateAccountSocialNetwork?: Maybe<UpdateAccountSocialNetworkPayload>
  /** Updates a single `AccountSocialNetwork` using a unique key and a patch. */
  updateAccountSocialNetworkByAccountIdAndSocialNetwork?: Maybe<UpdateAccountSocialNetworkPayload>
  /** Updates a single `Achievement` using its globally unique id and a patch. */
  updateAchievement?: Maybe<UpdateAchievementPayload>
  /** Updates a single `Achievement` using a unique key and a patch. */
  updateAchievementByAccountIdAndAchievement?: Maybe<UpdateAchievementPayload>
  /** Updates a single `Achievement` using a unique key and a patch. */
  updateAchievementById?: Maybe<UpdateAchievementPayload>
  /** Updates a single `Address` using its globally unique id and a patch. */
  updateAddress?: Maybe<UpdateAddressPayload>
  /** Updates a single `Address` using a unique key and a patch. */
  updateAddressById?: Maybe<UpdateAddressPayload>
  /** Updates a single `Contact` using its globally unique id and a patch. */
  updateContact?: Maybe<UpdateContactPayload>
  /** Updates a single `Contact` using a unique key and a patch. */
  updateContactByCreatedByAndAccountId?: Maybe<UpdateContactPayload>
  /** Updates a single `Contact` using a unique key and a patch. */
  updateContactById?: Maybe<UpdateContactPayload>
  /** Updates a single `Device` using its globally unique id and a patch. */
  updateDevice?: Maybe<UpdateDevicePayload>
  /** Updates a single `Device` using a unique key and a patch. */
  updateDeviceByCreatedByAndFcmToken?: Maybe<UpdateDevicePayload>
  /** Updates a single `Device` using a unique key and a patch. */
  updateDeviceById?: Maybe<UpdateDevicePayload>
  /** Updates a single `Event` using its globally unique id and a patch. */
  updateEvent?: Maybe<UpdateEventPayload>
  /** Updates a single `Event` using a unique key and a patch. */
  updateEventByCreatedByAndSlug?: Maybe<UpdateEventPayload>
  /** Updates a single `Event` using a unique key and a patch. */
  updateEventById?: Maybe<UpdateEventPayload>
  /** Updates a single `EventCategoryMapping` using its globally unique id and a patch. */
  updateEventCategoryMapping?: Maybe<UpdateEventCategoryMappingPayload>
  /** Updates a single `EventCategoryMapping` using a unique key and a patch. */
  updateEventCategoryMappingByEventIdAndCategoryId?: Maybe<UpdateEventCategoryMappingPayload>
  /** Updates a single `EventFormatMapping` using its globally unique id and a patch. */
  updateEventFormatMapping?: Maybe<UpdateEventFormatMappingPayload>
  /** Updates a single `EventFormatMapping` using a unique key and a patch. */
  updateEventFormatMappingByEventIdAndFormatId?: Maybe<UpdateEventFormatMappingPayload>
  /** Updates a single `EventRecommendation` using its globally unique id and a patch. */
  updateEventRecommendation?: Maybe<UpdateEventRecommendationPayload>
  /** Updates a single `EventRecommendation` using a unique key and a patch. */
  updateEventRecommendationByAccountIdAndEventId?: Maybe<UpdateEventRecommendationPayload>
  /** Updates a single `EventUpload` using its globally unique id and a patch. */
  updateEventUpload?: Maybe<UpdateEventUploadPayload>
  /** Updates a single `EventUpload` using a unique key and a patch. */
  updateEventUploadByEventIdAndUploadId?: Maybe<UpdateEventUploadPayload>
  /** Updates a single `EventUpload` using a unique key and a patch. */
  updateEventUploadById?: Maybe<UpdateEventUploadPayload>
  /** Updates a single `Friendship` using its globally unique id and a patch. */
  updateFriendship?: Maybe<UpdateFriendshipPayload>
  /** Updates a single `Friendship` using a unique key and a patch. */
  updateFriendshipByAAccountIdAndBAccountId?: Maybe<UpdateFriendshipPayload>
  /** Updates a single `Friendship` using a unique key and a patch. */
  updateFriendshipById?: Maybe<UpdateFriendshipPayload>
  /** Updates a single `Guest` using its globally unique id and a patch. */
  updateGuest?: Maybe<UpdateGuestPayload>
  /** Updates a single `Guest` using a unique key and a patch. */
  updateGuestByEventIdAndContactId?: Maybe<UpdateGuestPayload>
  /** Updates a single `Guest` using a unique key and a patch. */
  updateGuestById?: Maybe<UpdateGuestPayload>
  /** Updates a single `PreferenceEventCategory` using its globally unique id and a patch. */
  updatePreferenceEventCategory?: Maybe<UpdatePreferenceEventCategoryPayload>
  /** Updates a single `PreferenceEventCategory` using a unique key and a patch. */
  updatePreferenceEventCategoryByAccountIdAndCategoryId?: Maybe<UpdatePreferenceEventCategoryPayload>
  /** Updates a single `PreferenceEventCategory` using a unique key and a patch. */
  updatePreferenceEventCategoryById?: Maybe<UpdatePreferenceEventCategoryPayload>
  /** Updates a single `PreferenceEventFormat` using its globally unique id and a patch. */
  updatePreferenceEventFormat?: Maybe<UpdatePreferenceEventFormatPayload>
  /** Updates a single `PreferenceEventFormat` using a unique key and a patch. */
  updatePreferenceEventFormatByAccountIdAndFormatId?: Maybe<UpdatePreferenceEventFormatPayload>
  /** Updates a single `PreferenceEventFormat` using a unique key and a patch. */
  updatePreferenceEventFormatById?: Maybe<UpdatePreferenceEventFormatPayload>
  /** Updates a single `PreferenceEventLocation` using its globally unique id and a patch. */
  updatePreferenceEventLocation?: Maybe<UpdatePreferenceEventLocationPayload>
  /** Updates a single `PreferenceEventLocation` using a unique key and a patch. */
  updatePreferenceEventLocationByCreatedByAndLocationAndRadius?: Maybe<UpdatePreferenceEventLocationPayload>
  /** Updates a single `PreferenceEventLocation` using a unique key and a patch. */
  updatePreferenceEventLocationById?: Maybe<UpdatePreferenceEventLocationPayload>
  /** Updates a single `PreferenceEventSize` using its globally unique id and a patch. */
  updatePreferenceEventSize?: Maybe<UpdatePreferenceEventSizePayload>
  /** Updates a single `PreferenceEventSize` using a unique key and a patch. */
  updatePreferenceEventSizeByAccountIdAndEventSize?: Maybe<UpdatePreferenceEventSizePayload>
  /** Updates a single `PreferenceEventSize` using a unique key and a patch. */
  updatePreferenceEventSizeById?: Maybe<UpdatePreferenceEventSizePayload>
  /** Updates a single `ProfilePicture` using its globally unique id and a patch. */
  updateProfilePicture?: Maybe<UpdateProfilePicturePayload>
  /** Updates a single `ProfilePicture` using a unique key and a patch. */
  updateProfilePictureByAccountId?: Maybe<UpdateProfilePicturePayload>
  /** Updates a single `ProfilePicture` using a unique key and a patch. */
  updateProfilePictureById?: Maybe<UpdateProfilePicturePayload>
  /** Updates a single `Upload` using its globally unique id and a patch. */
  updateUpload?: Maybe<UpdateUploadPayload>
  /** Updates a single `Upload` using a unique key and a patch. */
  updateUploadById?: Maybe<UpdateUploadPayload>
  /** Updates a single `Upload` using a unique key and a patch. */
  updateUploadByStorageKey?: Maybe<UpdateUploadPayload>
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationAccountDeleteArgs = {
  input: AccountDeleteInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationAccountEmailAddressVerificationArgs = {
  input: AccountEmailAddressVerificationInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationAccountPasswordChangeArgs = {
  input: AccountPasswordChangeInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationAccountPasswordResetArgs = {
  input: AccountPasswordResetInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationAccountPasswordResetRequestArgs = {
  input: AccountPasswordResetRequestInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationAccountRegistrationArgs = {
  input: AccountRegistrationInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationAccountRegistrationRefreshArgs = {
  input: AccountRegistrationRefreshInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationAchievementUnlockArgs = {
  input: AchievementUnlockInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationAuthenticateArgs = {
  input: AuthenticateInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateAccountBlockArgs = {
  input: CreateAccountBlockInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateAccountSocialNetworkArgs = {
  input: CreateAccountSocialNetworkInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateAchievementArgs = {
  input: CreateAchievementInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateAddressArgs = {
  input: CreateAddressInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateContactArgs = {
  input: CreateContactInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateDeviceArgs = {
  input: CreateDeviceInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateEventArgs = {
  input: CreateEventInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateEventCategoryMappingArgs = {
  input: CreateEventCategoryMappingInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateEventFavoriteArgs = {
  input: CreateEventFavoriteInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateEventFormatMappingArgs = {
  input: CreateEventFormatMappingInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateEventRecommendationArgs = {
  input: CreateEventRecommendationInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateEventUploadArgs = {
  input: CreateEventUploadInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateFriendshipArgs = {
  input: CreateFriendshipInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateGuestArgs = {
  input: CreateGuestInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateGuestsArgs = {
  input: CreateGuestsInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateLegalTermAcceptanceArgs = {
  input: CreateLegalTermAcceptanceInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreatePreferenceEventCategoryArgs = {
  input: CreatePreferenceEventCategoryInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreatePreferenceEventFormatArgs = {
  input: CreatePreferenceEventFormatInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreatePreferenceEventLocationArgs = {
  input: CreatePreferenceEventLocationInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreatePreferenceEventSizeArgs = {
  input: CreatePreferenceEventSizeInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateProfilePictureArgs = {
  input: CreateProfilePictureInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateReportArgs = {
  input: CreateReportInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateUploadArgs = {
  input: CreateUploadInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAccountBlockArgs = {
  input: DeleteAccountBlockInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAccountBlockByCreatedByAndBlockedAccountIdArgs = {
  input: DeleteAccountBlockByCreatedByAndBlockedAccountIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAccountBlockByIdArgs = {
  input: DeleteAccountBlockByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAccountSocialNetworkArgs = {
  input: DeleteAccountSocialNetworkInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAccountSocialNetworkByAccountIdAndSocialNetworkArgs =
  {
    input: DeleteAccountSocialNetworkByAccountIdAndSocialNetworkInput
  }

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAchievementArgs = {
  input: DeleteAchievementInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAchievementByAccountIdAndAchievementArgs = {
  input: DeleteAchievementByAccountIdAndAchievementInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAchievementByIdArgs = {
  input: DeleteAchievementByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAddressArgs = {
  input: DeleteAddressInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAddressByIdArgs = {
  input: DeleteAddressByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteContactArgs = {
  input: DeleteContactInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteContactByCreatedByAndAccountIdArgs = {
  input: DeleteContactByCreatedByAndAccountIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteContactByIdArgs = {
  input: DeleteContactByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteDeviceArgs = {
  input: DeleteDeviceInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteDeviceByCreatedByAndFcmTokenArgs = {
  input: DeleteDeviceByCreatedByAndFcmTokenInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteDeviceByIdArgs = {
  input: DeleteDeviceByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEventArgs = {
  input: DeleteEventInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEventByCreatedByAndSlugArgs = {
  input: DeleteEventByCreatedByAndSlugInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEventByIdArgs = {
  input: DeleteEventByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEventCategoryMappingArgs = {
  input: DeleteEventCategoryMappingInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEventCategoryMappingByEventIdAndCategoryIdArgs = {
  input: DeleteEventCategoryMappingByEventIdAndCategoryIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEventFavoriteArgs = {
  input: DeleteEventFavoriteInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEventFavoriteByCreatedByAndEventIdArgs = {
  input: DeleteEventFavoriteByCreatedByAndEventIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEventFavoriteByIdArgs = {
  input: DeleteEventFavoriteByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEventFormatMappingArgs = {
  input: DeleteEventFormatMappingInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEventFormatMappingByEventIdAndFormatIdArgs = {
  input: DeleteEventFormatMappingByEventIdAndFormatIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEventRecommendationArgs = {
  input: DeleteEventRecommendationInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEventRecommendationByAccountIdAndEventIdArgs = {
  input: DeleteEventRecommendationByAccountIdAndEventIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEventUploadArgs = {
  input: DeleteEventUploadInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEventUploadByEventIdAndUploadIdArgs = {
  input: DeleteEventUploadByEventIdAndUploadIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEventUploadByIdArgs = {
  input: DeleteEventUploadByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteFriendshipArgs = {
  input: DeleteFriendshipInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteFriendshipByAAccountIdAndBAccountIdArgs = {
  input: DeleteFriendshipByAAccountIdAndBAccountIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteFriendshipByIdArgs = {
  input: DeleteFriendshipByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGuestArgs = {
  input: DeleteGuestInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGuestByEventIdAndContactIdArgs = {
  input: DeleteGuestByEventIdAndContactIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGuestByIdArgs = {
  input: DeleteGuestByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePreferenceEventCategoryArgs = {
  input: DeletePreferenceEventCategoryInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePreferenceEventCategoryByAccountIdAndCategoryIdArgs =
  {
    input: DeletePreferenceEventCategoryByAccountIdAndCategoryIdInput
  }

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePreferenceEventCategoryByIdArgs = {
  input: DeletePreferenceEventCategoryByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePreferenceEventFormatArgs = {
  input: DeletePreferenceEventFormatInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePreferenceEventFormatByAccountIdAndFormatIdArgs = {
  input: DeletePreferenceEventFormatByAccountIdAndFormatIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePreferenceEventFormatByIdArgs = {
  input: DeletePreferenceEventFormatByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePreferenceEventLocationArgs = {
  input: DeletePreferenceEventLocationInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePreferenceEventLocationByCreatedByAndLocationAndRadiusArgs =
  {
    input: DeletePreferenceEventLocationByCreatedByAndLocationAndRadiusInput
  }

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePreferenceEventLocationByIdArgs = {
  input: DeletePreferenceEventLocationByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePreferenceEventSizeArgs = {
  input: DeletePreferenceEventSizeInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePreferenceEventSizeByAccountIdAndEventSizeArgs = {
  input: DeletePreferenceEventSizeByAccountIdAndEventSizeInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePreferenceEventSizeByIdArgs = {
  input: DeletePreferenceEventSizeByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteProfilePictureArgs = {
  input: DeleteProfilePictureInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteProfilePictureByAccountIdArgs = {
  input: DeleteProfilePictureByAccountIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteProfilePictureByIdArgs = {
  input: DeleteProfilePictureByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUploadArgs = {
  input: DeleteUploadInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUploadByIdArgs = {
  input: DeleteUploadByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUploadByStorageKeyArgs = {
  input: DeleteUploadByStorageKeyInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationEventDeleteArgs = {
  input: EventDeleteInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationEventUnlockArgs = {
  input: EventUnlockInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationInviteArgs = {
  input: InviteInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationJwtRefreshArgs = {
  input: JwtRefreshInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationNotificationAcknowledgeArgs = {
  input: NotificationAcknowledgeInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationProfilePictureSetArgs = {
  input: ProfilePictureSetInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAccountArgs = {
  input: UpdateAccountInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAccountByIdArgs = {
  input: UpdateAccountByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAccountByUsernameArgs = {
  input: UpdateAccountByUsernameInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAccountLocationArgs = {
  input: UpdateAccountLocationInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAccountSocialNetworkArgs = {
  input: UpdateAccountSocialNetworkInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAccountSocialNetworkByAccountIdAndSocialNetworkArgs =
  {
    input: UpdateAccountSocialNetworkByAccountIdAndSocialNetworkInput
  }

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAchievementArgs = {
  input: UpdateAchievementInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAchievementByAccountIdAndAchievementArgs = {
  input: UpdateAchievementByAccountIdAndAchievementInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAchievementByIdArgs = {
  input: UpdateAchievementByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAddressArgs = {
  input: UpdateAddressInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAddressByIdArgs = {
  input: UpdateAddressByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateContactArgs = {
  input: UpdateContactInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateContactByCreatedByAndAccountIdArgs = {
  input: UpdateContactByCreatedByAndAccountIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateContactByIdArgs = {
  input: UpdateContactByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateDeviceArgs = {
  input: UpdateDeviceInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateDeviceByCreatedByAndFcmTokenArgs = {
  input: UpdateDeviceByCreatedByAndFcmTokenInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateDeviceByIdArgs = {
  input: UpdateDeviceByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateEventArgs = {
  input: UpdateEventInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateEventByCreatedByAndSlugArgs = {
  input: UpdateEventByCreatedByAndSlugInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateEventByIdArgs = {
  input: UpdateEventByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateEventCategoryMappingArgs = {
  input: UpdateEventCategoryMappingInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateEventCategoryMappingByEventIdAndCategoryIdArgs = {
  input: UpdateEventCategoryMappingByEventIdAndCategoryIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateEventFormatMappingArgs = {
  input: UpdateEventFormatMappingInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateEventFormatMappingByEventIdAndFormatIdArgs = {
  input: UpdateEventFormatMappingByEventIdAndFormatIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateEventRecommendationArgs = {
  input: UpdateEventRecommendationInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateEventRecommendationByAccountIdAndEventIdArgs = {
  input: UpdateEventRecommendationByAccountIdAndEventIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateEventUploadArgs = {
  input: UpdateEventUploadInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateEventUploadByEventIdAndUploadIdArgs = {
  input: UpdateEventUploadByEventIdAndUploadIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateEventUploadByIdArgs = {
  input: UpdateEventUploadByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateFriendshipArgs = {
  input: UpdateFriendshipInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateFriendshipByAAccountIdAndBAccountIdArgs = {
  input: UpdateFriendshipByAAccountIdAndBAccountIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateFriendshipByIdArgs = {
  input: UpdateFriendshipByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGuestArgs = {
  input: UpdateGuestInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGuestByEventIdAndContactIdArgs = {
  input: UpdateGuestByEventIdAndContactIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGuestByIdArgs = {
  input: UpdateGuestByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePreferenceEventCategoryArgs = {
  input: UpdatePreferenceEventCategoryInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePreferenceEventCategoryByAccountIdAndCategoryIdArgs =
  {
    input: UpdatePreferenceEventCategoryByAccountIdAndCategoryIdInput
  }

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePreferenceEventCategoryByIdArgs = {
  input: UpdatePreferenceEventCategoryByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePreferenceEventFormatArgs = {
  input: UpdatePreferenceEventFormatInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePreferenceEventFormatByAccountIdAndFormatIdArgs = {
  input: UpdatePreferenceEventFormatByAccountIdAndFormatIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePreferenceEventFormatByIdArgs = {
  input: UpdatePreferenceEventFormatByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePreferenceEventLocationArgs = {
  input: UpdatePreferenceEventLocationInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePreferenceEventLocationByCreatedByAndLocationAndRadiusArgs =
  {
    input: UpdatePreferenceEventLocationByCreatedByAndLocationAndRadiusInput
  }

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePreferenceEventLocationByIdArgs = {
  input: UpdatePreferenceEventLocationByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePreferenceEventSizeArgs = {
  input: UpdatePreferenceEventSizeInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePreferenceEventSizeByAccountIdAndEventSizeArgs = {
  input: UpdatePreferenceEventSizeByAccountIdAndEventSizeInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePreferenceEventSizeByIdArgs = {
  input: UpdatePreferenceEventSizeByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateProfilePictureArgs = {
  input: UpdateProfilePictureInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateProfilePictureByAccountIdArgs = {
  input: UpdateProfilePictureByAccountIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateProfilePictureByIdArgs = {
  input: UpdateProfilePictureByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUploadArgs = {
  input: UpdateUploadInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUploadByIdArgs = {
  input: UpdateUploadByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUploadByStorageKeyArgs = {
  input: UpdateUploadByStorageKeyInput
}

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output']
}

/** All input for the `notificationAcknowledge` mutation. */
export type NotificationAcknowledgeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  id: Scalars['UUID']['input']
  isAcknowledged: Scalars['Boolean']['input']
}

/** The output of our `notificationAcknowledge` mutation. */
export type NotificationAcknowledgePayload = {
  __typename?: 'NotificationAcknowledgePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo'
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']['output']>
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output']
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output']
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']['output']>
}

/** A connection to a list of `PreferenceEventCategory` values. */
export type PreferenceEventCategoriesConnection = {
  __typename?: 'PreferenceEventCategoriesConnection'
  /** A list of edges which contains the `PreferenceEventCategory` and cursor to aid in pagination. */
  edges: Array<PreferenceEventCategoriesEdge>
  /** A list of `PreferenceEventCategory` objects. */
  nodes: Array<PreferenceEventCategory>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `PreferenceEventCategory` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `PreferenceEventCategory` edge in the connection. */
export type PreferenceEventCategoriesEdge = {
  __typename?: 'PreferenceEventCategoriesEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `PreferenceEventCategory` at the end of the edge. */
  node: PreferenceEventCategory
}

/** Methods to use when ordering `PreferenceEventCategory`. */
export enum PreferenceEventCategoriesOrderBy {
  AccountIdAsc = 'ACCOUNT_ID_ASC',
  AccountIdDesc = 'ACCOUNT_ID_DESC',
  CategoryIdAsc = 'CATEGORY_ID_ASC',
  CategoryIdDesc = 'CATEGORY_ID_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
}

/** Event categories a user account is interested in (M:N relationship). */
export type PreferenceEventCategory = Node & {
  __typename?: 'PreferenceEventCategory'
  /** Reads a single `Account` that is related to this `PreferenceEventCategory`. */
  accountByAccountId?: Maybe<Account>
  /** A user account id. */
  accountId: Scalars['UUID']['output']
  /** An event category id. */
  categoryId: Scalars['UUID']['output']
  createdAt: Scalars['Datetime']['output']
  /** Reads a single `EventCategory` that is related to this `PreferenceEventCategory`. */
  eventCategoryByCategoryId?: Maybe<EventCategory>
  id: Scalars['UUID']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output']
}

/**
 * A condition to be used against `PreferenceEventCategory` object types. All
 * fields are tested for equality and combined with a logical ‘and.’
 */
export type PreferenceEventCategoryCondition = {
  /** Checks for equality with the object’s `accountId` field. */
  accountId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `categoryId` field. */
  categoryId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>
}

/** An input for mutations affecting `PreferenceEventCategory` */
export type PreferenceEventCategoryInput = {
  /** A user account id. */
  accountId: Scalars['UUID']['input']
  /** An event category id. */
  categoryId: Scalars['UUID']['input']
  createdAt?: InputMaybe<Scalars['Datetime']['input']>
  id?: InputMaybe<Scalars['UUID']['input']>
}

/** Represents an update to a `PreferenceEventCategory`. Fields that are set will be updated. */
export type PreferenceEventCategoryPatch = {
  /** A user account id. */
  accountId?: InputMaybe<Scalars['UUID']['input']>
  /** An event category id. */
  categoryId?: InputMaybe<Scalars['UUID']['input']>
  createdAt?: InputMaybe<Scalars['Datetime']['input']>
  id?: InputMaybe<Scalars['UUID']['input']>
}

/** Event formats a user account is interested in (M:N relationship). */
export type PreferenceEventFormat = Node & {
  __typename?: 'PreferenceEventFormat'
  /** Reads a single `Account` that is related to this `PreferenceEventFormat`. */
  accountByAccountId?: Maybe<Account>
  /** A user account id. */
  accountId: Scalars['UUID']['output']
  /** The timestammp when the record was created.. */
  createdAt: Scalars['Datetime']['output']
  /** Reads a single `EventFormat` that is related to this `PreferenceEventFormat`. */
  eventFormatByFormatId?: Maybe<EventFormat>
  /** The id of an event format. */
  formatId: Scalars['UUID']['output']
  id: Scalars['UUID']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output']
}

/**
 * A condition to be used against `PreferenceEventFormat` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type PreferenceEventFormatCondition = {
  /** Checks for equality with the object’s `accountId` field. */
  accountId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>
  /** Checks for equality with the object’s `formatId` field. */
  formatId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>
}

/** An input for mutations affecting `PreferenceEventFormat` */
export type PreferenceEventFormatInput = {
  /** A user account id. */
  accountId: Scalars['UUID']['input']
  /** The timestammp when the record was created.. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>
  /** The id of an event format. */
  formatId: Scalars['UUID']['input']
  id?: InputMaybe<Scalars['UUID']['input']>
}

/** Represents an update to a `PreferenceEventFormat`. Fields that are set will be updated. */
export type PreferenceEventFormatPatch = {
  /** A user account id. */
  accountId?: InputMaybe<Scalars['UUID']['input']>
  /** The timestammp when the record was created.. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>
  /** The id of an event format. */
  formatId?: InputMaybe<Scalars['UUID']['input']>
  id?: InputMaybe<Scalars['UUID']['input']>
}

/** A connection to a list of `PreferenceEventFormat` values. */
export type PreferenceEventFormatsConnection = {
  __typename?: 'PreferenceEventFormatsConnection'
  /** A list of edges which contains the `PreferenceEventFormat` and cursor to aid in pagination. */
  edges: Array<PreferenceEventFormatsEdge>
  /** A list of `PreferenceEventFormat` objects. */
  nodes: Array<PreferenceEventFormat>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `PreferenceEventFormat` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `PreferenceEventFormat` edge in the connection. */
export type PreferenceEventFormatsEdge = {
  __typename?: 'PreferenceEventFormatsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `PreferenceEventFormat` at the end of the edge. */
  node: PreferenceEventFormat
}

/** Methods to use when ordering `PreferenceEventFormat`. */
export enum PreferenceEventFormatsOrderBy {
  AccountIdAsc = 'ACCOUNT_ID_ASC',
  AccountIdDesc = 'ACCOUNT_ID_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  FormatIdAsc = 'FORMAT_ID_ASC',
  FormatIdDesc = 'FORMAT_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
}

/** Stores preferred event locations for user accounts, including coordinates and search radius. */
export type PreferenceEventLocation = Node & {
  __typename?: 'PreferenceEventLocation'
  /** Reads a single `Account` that is related to this `PreferenceEventLocation`. */
  accountByCreatedBy?: Maybe<Account>
  /** Timestamp of when the event size preference was created, defaults to the current timestamp. */
  createdAt: Scalars['Datetime']['output']
  /** Reference to the account that created the location preference. */
  createdBy: Scalars['UUID']['output']
  /** Unique identifier for the preference record. */
  id: Scalars['UUID']['output']
  /** Geographical point representing the preferred location, derived from latitude and longitude. */
  location: GeographyPoint
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output']
  /** Search radius in meters around the location where events are preferred. Must be positive. */
  radius: Scalars['Float']['output']
}

/**
 * A condition to be used against `PreferenceEventLocation` object types. All
 * fields are tested for equality and combined with a logical ‘and.’
 */
export type PreferenceEventLocationCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>
  /** Checks for equality with the object’s `createdBy` field. */
  createdBy?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `location` field. */
  location?: InputMaybe<Scalars['GeoJSON']['input']>
  /** Checks for equality with the object’s `radius` field. */
  radius?: InputMaybe<Scalars['Float']['input']>
}

/** An input for mutations affecting `PreferenceEventLocation` */
export type PreferenceEventLocationInput = {
  /** Reference to the account that created the location preference. */
  createdBy: Scalars['UUID']['input']
  /** Geographical point representing the preferred location, derived from latitude and longitude. */
  location: Scalars['GeoJSON']['input']
  /** Search radius in meters around the location where events are preferred. Must be positive. */
  radius: Scalars['Float']['input']
}

/** Represents an update to a `PreferenceEventLocation`. Fields that are set will be updated. */
export type PreferenceEventLocationPatch = {
  /** Timestamp of when the event size preference was created, defaults to the current timestamp. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>
  /** Reference to the account that created the location preference. */
  createdBy?: InputMaybe<Scalars['UUID']['input']>
  /** Unique identifier for the preference record. */
  id?: InputMaybe<Scalars['UUID']['input']>
  /** Geographical point representing the preferred location, derived from latitude and longitude. */
  location?: InputMaybe<Scalars['GeoJSON']['input']>
  /** Search radius in meters around the location where events are preferred. Must be positive. */
  radius?: InputMaybe<Scalars['Float']['input']>
}

/** A connection to a list of `PreferenceEventLocation` values. */
export type PreferenceEventLocationsConnection = {
  __typename?: 'PreferenceEventLocationsConnection'
  /** A list of edges which contains the `PreferenceEventLocation` and cursor to aid in pagination. */
  edges: Array<PreferenceEventLocationsEdge>
  /** A list of `PreferenceEventLocation` objects. */
  nodes: Array<PreferenceEventLocation>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `PreferenceEventLocation` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `PreferenceEventLocation` edge in the connection. */
export type PreferenceEventLocationsEdge = {
  __typename?: 'PreferenceEventLocationsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `PreferenceEventLocation` at the end of the edge. */
  node: PreferenceEventLocation
}

/** Methods to use when ordering `PreferenceEventLocation`. */
export enum PreferenceEventLocationsOrderBy {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  CreatedByAsc = 'CREATED_BY_ASC',
  CreatedByDesc = 'CREATED_BY_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  LocationAsc = 'LOCATION_ASC',
  LocationDesc = 'LOCATION_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RadiusAsc = 'RADIUS_ASC',
  RadiusDesc = 'RADIUS_DESC',
}

/** Table for the user accounts' preferred event sizes (M:N relationship). */
export type PreferenceEventSize = Node & {
  __typename?: 'PreferenceEventSize'
  /** Reads a single `Account` that is related to this `PreferenceEventSize`. */
  accountByAccountId?: Maybe<Account>
  /** The account's internal id. */
  accountId: Scalars['UUID']['output']
  /** Timestamp of when the event size preference was created, defaults to the current timestamp. */
  createdAt: Scalars['Datetime']['output']
  /** A preferred event size. */
  eventSize: EventSize
  id: Scalars['UUID']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output']
}

/**
 * A condition to be used against `PreferenceEventSize` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type PreferenceEventSizeCondition = {
  /** Checks for equality with the object’s `accountId` field. */
  accountId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>
  /** Checks for equality with the object’s `eventSize` field. */
  eventSize?: InputMaybe<EventSize>
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>
}

/** An input for mutations affecting `PreferenceEventSize` */
export type PreferenceEventSizeInput = {
  /** The account's internal id. */
  accountId: Scalars['UUID']['input']
  /** A preferred event size. */
  eventSize: EventSize
  id?: InputMaybe<Scalars['UUID']['input']>
}

/** Represents an update to a `PreferenceEventSize`. Fields that are set will be updated. */
export type PreferenceEventSizePatch = {
  /** The account's internal id. */
  accountId?: InputMaybe<Scalars['UUID']['input']>
  /** A preferred event size. */
  eventSize?: InputMaybe<EventSize>
  id?: InputMaybe<Scalars['UUID']['input']>
}

/** A connection to a list of `PreferenceEventSize` values. */
export type PreferenceEventSizesConnection = {
  __typename?: 'PreferenceEventSizesConnection'
  /** A list of edges which contains the `PreferenceEventSize` and cursor to aid in pagination. */
  edges: Array<PreferenceEventSizesEdge>
  /** A list of `PreferenceEventSize` objects. */
  nodes: Array<PreferenceEventSize>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `PreferenceEventSize` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `PreferenceEventSize` edge in the connection. */
export type PreferenceEventSizesEdge = {
  __typename?: 'PreferenceEventSizesEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `PreferenceEventSize` at the end of the edge. */
  node: PreferenceEventSize
}

/** Methods to use when ordering `PreferenceEventSize`. */
export enum PreferenceEventSizesOrderBy {
  AccountIdAsc = 'ACCOUNT_ID_ASC',
  AccountIdDesc = 'ACCOUNT_ID_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  EventSizeAsc = 'EVENT_SIZE_ASC',
  EventSizeDesc = 'EVENT_SIZE_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
}

/** Mapping of account ids to upload ids. */
export type ProfilePicture = Node & {
  __typename?: 'ProfilePicture'
  /** Reads a single `Account` that is related to this `ProfilePicture`. */
  accountByAccountId?: Maybe<Account>
  /** The account's id. */
  accountId: Scalars['UUID']['output']
  /** The profile picture's internal id. */
  id: Scalars['UUID']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output']
  /** Reads a single `Upload` that is related to this `ProfilePicture`. */
  uploadByUploadId?: Maybe<Upload>
  /** The upload's id. */
  uploadId: Scalars['UUID']['output']
}

/**
 * A condition to be used against `ProfilePicture` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type ProfilePictureCondition = {
  /** Checks for equality with the object’s `accountId` field. */
  accountId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `uploadId` field. */
  uploadId?: InputMaybe<Scalars['UUID']['input']>
}

/** An input for mutations affecting `ProfilePicture` */
export type ProfilePictureInput = {
  /** The account's id. */
  accountId: Scalars['UUID']['input']
  /** The upload's id. */
  uploadId: Scalars['UUID']['input']
}

/** Represents an update to a `ProfilePicture`. Fields that are set will be updated. */
export type ProfilePicturePatch = {
  /** The account's id. */
  accountId?: InputMaybe<Scalars['UUID']['input']>
  /** The upload's id. */
  uploadId?: InputMaybe<Scalars['UUID']['input']>
}

/** All input for the `profilePictureSet` mutation. */
export type ProfilePictureSetInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  uploadId: Scalars['UUID']['input']
}

/** The output of our `profilePictureSet` mutation. */
export type ProfilePictureSetPayload = {
  __typename?: 'ProfilePictureSetPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** A connection to a list of `ProfilePicture` values. */
export type ProfilePicturesConnection = {
  __typename?: 'ProfilePicturesConnection'
  /** A list of edges which contains the `ProfilePicture` and cursor to aid in pagination. */
  edges: Array<ProfilePicturesEdge>
  /** A list of `ProfilePicture` objects. */
  nodes: Array<ProfilePicture>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `ProfilePicture` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `ProfilePicture` edge in the connection. */
export type ProfilePicturesEdge = {
  __typename?: 'ProfilePicturesEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `ProfilePicture` at the end of the edge. */
  node: ProfilePicture
}

/** Methods to use when ordering `ProfilePicture`. */
export enum ProfilePicturesOrderBy {
  AccountIdAsc = 'ACCOUNT_ID_ASC',
  AccountIdDesc = 'ACCOUNT_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UploadIdAsc = 'UPLOAD_ID_ASC',
  UploadIdDesc = 'UPLOAD_ID_DESC',
}

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: 'Query'
  /** Reads a single `Account` using its globally unique `ID`. */
  account?: Maybe<Account>
  /** Reads a single `AccountBlock` using its globally unique `ID`. */
  accountBlock?: Maybe<AccountBlock>
  accountBlockByCreatedByAndBlockedAccountId?: Maybe<AccountBlock>
  accountBlockById?: Maybe<AccountBlock>
  accountById?: Maybe<Account>
  accountByUsername?: Maybe<Account>
  /** Reads a single `AccountSocialNetwork` using its globally unique `ID`. */
  accountSocialNetwork?: Maybe<AccountSocialNetwork>
  accountSocialNetworkByAccountIdAndSocialNetwork?: Maybe<AccountSocialNetwork>
  /** Gets the total upload quota in bytes for the invoking account. */
  accountUploadQuotaBytes?: Maybe<Scalars['BigInt']['output']>
  /** Reads a single `Achievement` using its globally unique `ID`. */
  achievement?: Maybe<Achievement>
  achievementByAccountIdAndAchievement?: Maybe<Achievement>
  achievementById?: Maybe<Achievement>
  /** Reads a single `Address` using its globally unique `ID`. */
  address?: Maybe<Address>
  addressById?: Maybe<Address>
  /** Reads and enables pagination through a set of `AccountBlock`. */
  allAccountBlocks?: Maybe<AccountBlocksConnection>
  /** Reads and enables pagination through a set of `AccountSocialNetwork`. */
  allAccountSocialNetworks?: Maybe<AccountSocialNetworksConnection>
  /** Reads and enables pagination through a set of `Account`. */
  allAccounts?: Maybe<AccountsConnection>
  /** Reads and enables pagination through a set of `Achievement`. */
  allAchievements?: Maybe<AchievementsConnection>
  /** Reads and enables pagination through a set of `Address`. */
  allAddresses?: Maybe<AddressesConnection>
  /** Reads and enables pagination through a set of `Contact`. */
  allContacts?: Maybe<ContactsConnection>
  /** Reads and enables pagination through a set of `Device`. */
  allDevices?: Maybe<DevicesConnection>
  /** Reads and enables pagination through a set of `EventCategory`. */
  allEventCategories?: Maybe<EventCategoriesConnection>
  /** Reads and enables pagination through a set of `EventCategoryMapping`. */
  allEventCategoryMappings?: Maybe<EventCategoryMappingsConnection>
  /** Reads and enables pagination through a set of `EventFavorite`. */
  allEventFavorites?: Maybe<EventFavoritesConnection>
  /** Reads and enables pagination through a set of `EventFormatMapping`. */
  allEventFormatMappings?: Maybe<EventFormatMappingsConnection>
  /** Reads and enables pagination through a set of `EventFormat`. */
  allEventFormats?: Maybe<EventFormatsConnection>
  /** Reads and enables pagination through a set of `EventRecommendation`. */
  allEventRecommendations?: Maybe<EventRecommendationsConnection>
  /** Reads and enables pagination through a set of `EventUpload`. */
  allEventUploads?: Maybe<EventUploadsConnection>
  /** Reads and enables pagination through a set of `Event`. */
  allEvents?: Maybe<EventsConnection>
  /** Reads and enables pagination through a set of `Friendship`. */
  allFriendships?: Maybe<FriendshipsConnection>
  /** Reads and enables pagination through a set of `GuestFlat`. */
  allGuestFlats?: Maybe<GuestFlatsConnection>
  /** Reads and enables pagination through a set of `Guest`. */
  allGuests?: Maybe<GuestsConnection>
  /** Reads and enables pagination through a set of `LegalTermAcceptance`. */
  allLegalTermAcceptances?: Maybe<LegalTermAcceptancesConnection>
  /** Reads and enables pagination through a set of `LegalTerm`. */
  allLegalTerms?: Maybe<LegalTermsConnection>
  /** Reads and enables pagination through a set of `PreferenceEventCategory`. */
  allPreferenceEventCategories?: Maybe<PreferenceEventCategoriesConnection>
  /** Reads and enables pagination through a set of `PreferenceEventFormat`. */
  allPreferenceEventFormats?: Maybe<PreferenceEventFormatsConnection>
  /** Reads and enables pagination through a set of `PreferenceEventLocation`. */
  allPreferenceEventLocations?: Maybe<PreferenceEventLocationsConnection>
  /** Reads and enables pagination through a set of `PreferenceEventSize`. */
  allPreferenceEventSizes?: Maybe<PreferenceEventSizesConnection>
  /** Reads and enables pagination through a set of `ProfilePicture`. */
  allProfilePictures?: Maybe<ProfilePicturesConnection>
  /** Reads and enables pagination through a set of `Report`. */
  allReports?: Maybe<ReportsConnection>
  /** Reads and enables pagination through a set of `Upload`. */
  allUploads?: Maybe<UploadsConnection>
  /** Reads a single `Contact` using its globally unique `ID`. */
  contact?: Maybe<Contact>
  contactByCreatedByAndAccountId?: Maybe<Contact>
  contactById?: Maybe<Contact>
  /** Reads a single `Device` using its globally unique `ID`. */
  device?: Maybe<Device>
  deviceByCreatedByAndFcmToken?: Maybe<Device>
  deviceById?: Maybe<Device>
  /** Reads a single `Event` using its globally unique `ID`. */
  event?: Maybe<Event>
  eventByCreatedByAndSlug?: Maybe<Event>
  eventById?: Maybe<Event>
  /** Reads a single `EventCategory` using its globally unique `ID`. */
  eventCategory?: Maybe<EventCategory>
  eventCategoryById?: Maybe<EventCategory>
  eventCategoryByName?: Maybe<EventCategory>
  /** Reads a single `EventCategoryMapping` using its globally unique `ID`. */
  eventCategoryMapping?: Maybe<EventCategoryMapping>
  eventCategoryMappingByEventIdAndCategoryId?: Maybe<EventCategoryMapping>
  /** Reads a single `EventFavorite` using its globally unique `ID`. */
  eventFavorite?: Maybe<EventFavorite>
  eventFavoriteByCreatedByAndEventId?: Maybe<EventFavorite>
  eventFavoriteById?: Maybe<EventFavorite>
  /** Reads a single `EventFormat` using its globally unique `ID`. */
  eventFormat?: Maybe<EventFormat>
  eventFormatById?: Maybe<EventFormat>
  eventFormatByName?: Maybe<EventFormat>
  /** Reads a single `EventFormatMapping` using its globally unique `ID`. */
  eventFormatMapping?: Maybe<EventFormatMapping>
  eventFormatMappingByEventIdAndFormatId?: Maybe<EventFormatMapping>
  /** Add a function that returns the maximum guest count of an accessible event. */
  eventGuestCountMaximum?: Maybe<Scalars['Int']['output']>
  /** Reads a single `EventRecommendation` using its globally unique `ID`. */
  eventRecommendation?: Maybe<EventRecommendation>
  eventRecommendationByAccountIdAndEventId?: Maybe<EventRecommendation>
  /** Performs a full-text search on the event table based on the provided query and language, returning event IDs ordered by relevance. */
  eventSearch?: Maybe<EventsConnection>
  /** Reads a single `EventUpload` using its globally unique `ID`. */
  eventUpload?: Maybe<EventUpload>
  eventUploadByEventIdAndUploadId?: Maybe<EventUpload>
  eventUploadById?: Maybe<EventUpload>
  /** Add a function that returns all event ids for which the invoker is the creator. */
  eventsOrganized?: Maybe<EventsOrganizedConnection>
  /** Reads a single `Friendship` using its globally unique `ID`. */
  friendship?: Maybe<Friendship>
  friendshipByAAccountIdAndBAccountId?: Maybe<Friendship>
  friendshipById?: Maybe<Friendship>
  /** Reads a single `Guest` using its globally unique `ID`. */
  guest?: Maybe<Guest>
  guestByEventIdAndContactId?: Maybe<Guest>
  guestById?: Maybe<Guest>
  /** Returns the current guest claims as UUID array. */
  guestClaimArray?: Maybe<Array<Maybe<Scalars['UUID']['output']>>>
  /** Returns contact ids that are accessible through guests. */
  guestContactIds?: Maybe<GuestContactIdsConnection>
  /** Returns the guest count for an event. */
  guestCount?: Maybe<Scalars['Int']['output']>
  /** Returns the session's account id. */
  invokerAccountId?: Maybe<Scalars['UUID']['output']>
  /** Maps an ISO language code to the corresponding PostgreSQL text search configuration. This function returns the appropriate text search configuration for supported languages, such as "german" for "de" and "english" for "en". If the language code is not explicitly handled, the function defaults to the "simple" configuration, which is a basic tokenizer that does not perform stemming or handle stop words. This ensures that full-text search can work with a wide range of languages even if specific optimizations are not available for some. */
  languageIsoFullTextSearch?: Maybe<Scalars['RegConfig']['output']>
  /** Reads a single `LegalTerm` using its globally unique `ID`. */
  legalTerm?: Maybe<LegalTerm>
  /** Reads a single `LegalTermAcceptance` using its globally unique `ID`. */
  legalTermAcceptance?: Maybe<LegalTermAcceptance>
  legalTermAcceptanceById?: Maybe<LegalTermAcceptance>
  legalTermById?: Maybe<LegalTerm>
  legalTermByLanguageAndVersion?: Maybe<LegalTerm>
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID']['output']
  /** Reads a single `PreferenceEventCategory` using its globally unique `ID`. */
  preferenceEventCategory?: Maybe<PreferenceEventCategory>
  preferenceEventCategoryByAccountIdAndCategoryId?: Maybe<PreferenceEventCategory>
  preferenceEventCategoryById?: Maybe<PreferenceEventCategory>
  /** Reads a single `PreferenceEventFormat` using its globally unique `ID`. */
  preferenceEventFormat?: Maybe<PreferenceEventFormat>
  preferenceEventFormatByAccountIdAndFormatId?: Maybe<PreferenceEventFormat>
  preferenceEventFormatById?: Maybe<PreferenceEventFormat>
  /** Reads a single `PreferenceEventLocation` using its globally unique `ID`. */
  preferenceEventLocation?: Maybe<PreferenceEventLocation>
  preferenceEventLocationByCreatedByAndLocationAndRadius?: Maybe<PreferenceEventLocation>
  preferenceEventLocationById?: Maybe<PreferenceEventLocation>
  /** Reads a single `PreferenceEventSize` using its globally unique `ID`. */
  preferenceEventSize?: Maybe<PreferenceEventSize>
  preferenceEventSizeByAccountIdAndEventSize?: Maybe<PreferenceEventSize>
  preferenceEventSizeById?: Maybe<PreferenceEventSize>
  /** Reads a single `ProfilePicture` using its globally unique `ID`. */
  profilePicture?: Maybe<ProfilePicture>
  profilePictureByAccountId?: Maybe<ProfilePicture>
  profilePictureById?: Maybe<ProfilePicture>
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query
  /** Reads a single `Report` using its globally unique `ID`. */
  report?: Maybe<Report>
  reportByCreatedByAndTargetAccountIdAndTargetEventIdAndTargetUploadId?: Maybe<Report>
  reportById?: Maybe<Report>
  /** Reads a single `Upload` using its globally unique `ID`. */
  upload?: Maybe<Upload>
  uploadById?: Maybe<Upload>
  uploadByStorageKey?: Maybe<Upload>
}

/** The root query type which gives access points into the data universe. */
export type QueryAccountArgs = {
  nodeId: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryAccountBlockArgs = {
  nodeId: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryAccountBlockByCreatedByAndBlockedAccountIdArgs = {
  blockedAccountId: Scalars['UUID']['input']
  createdBy: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryAccountBlockByIdArgs = {
  id: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryAccountByIdArgs = {
  id: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryAccountByUsernameArgs = {
  username: Scalars['String']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryAccountSocialNetworkArgs = {
  nodeId: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryAccountSocialNetworkByAccountIdAndSocialNetworkArgs = {
  accountId: Scalars['UUID']['input']
  socialNetwork: SocialNetwork
}

/** The root query type which gives access points into the data universe. */
export type QueryAchievementArgs = {
  nodeId: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryAchievementByAccountIdAndAchievementArgs = {
  accountId: Scalars['UUID']['input']
  achievement: AchievementType
}

/** The root query type which gives access points into the data universe. */
export type QueryAchievementByIdArgs = {
  id: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryAddressArgs = {
  nodeId: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryAddressByIdArgs = {
  id: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryAllAccountBlocksArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<AccountBlockCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<AccountBlocksOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllAccountSocialNetworksArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<AccountSocialNetworkCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<AccountSocialNetworksOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllAccountsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<AccountCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<AccountsOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllAchievementsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<AchievementCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<AchievementsOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllAddressesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<AddressCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<AddressesOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllContactsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<ContactCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<ContactsOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllDevicesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<DeviceCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<DevicesOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllEventCategoriesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventCategoryCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<EventCategoriesOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllEventCategoryMappingsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventCategoryMappingCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<EventCategoryMappingsOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllEventFavoritesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventFavoriteCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<EventFavoritesOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllEventFormatMappingsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventFormatMappingCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<EventFormatMappingsOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllEventFormatsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventFormatCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<EventFormatsOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllEventRecommendationsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventRecommendationCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<EventRecommendationsOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllEventUploadsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventUploadCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<EventUploadsOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllEventsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<EventsOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllFriendshipsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<FriendshipCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<FriendshipsOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllGuestFlatsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<GuestFlatCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<GuestFlatsOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllGuestsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<GuestCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<GuestsOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllLegalTermAcceptancesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<LegalTermAcceptanceCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<LegalTermAcceptancesOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllLegalTermsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<LegalTermCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<LegalTermsOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllPreferenceEventCategoriesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<PreferenceEventCategoryCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<PreferenceEventCategoriesOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllPreferenceEventFormatsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<PreferenceEventFormatCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<PreferenceEventFormatsOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllPreferenceEventLocationsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<PreferenceEventLocationCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<PreferenceEventLocationsOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllPreferenceEventSizesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<PreferenceEventSizeCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<PreferenceEventSizesOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllProfilePicturesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<ProfilePictureCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<ProfilePicturesOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllReportsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<ReportCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<ReportsOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllUploadsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<UploadCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<UploadsOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryContactArgs = {
  nodeId: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryContactByCreatedByAndAccountIdArgs = {
  accountId: Scalars['UUID']['input']
  createdBy: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryContactByIdArgs = {
  id: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryDeviceArgs = {
  nodeId: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryDeviceByCreatedByAndFcmTokenArgs = {
  createdBy: Scalars['UUID']['input']
  fcmToken: Scalars['String']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryDeviceByIdArgs = {
  id: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventArgs = {
  nodeId: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventByCreatedByAndSlugArgs = {
  createdBy: Scalars['UUID']['input']
  slug: Scalars['String']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventByIdArgs = {
  id: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventCategoryArgs = {
  nodeId: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventCategoryByIdArgs = {
  id: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventCategoryByNameArgs = {
  name: Scalars['String']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventCategoryMappingArgs = {
  nodeId: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventCategoryMappingByEventIdAndCategoryIdArgs = {
  categoryId: Scalars['UUID']['input']
  eventId: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventFavoriteArgs = {
  nodeId: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventFavoriteByCreatedByAndEventIdArgs = {
  createdBy: Scalars['UUID']['input']
  eventId: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventFavoriteByIdArgs = {
  id: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventFormatArgs = {
  nodeId: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventFormatByIdArgs = {
  id: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventFormatByNameArgs = {
  name: Scalars['String']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventFormatMappingArgs = {
  nodeId: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventFormatMappingByEventIdAndFormatIdArgs = {
  eventId: Scalars['UUID']['input']
  formatId: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventGuestCountMaximumArgs = {
  eventId: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventRecommendationArgs = {
  nodeId: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventRecommendationByAccountIdAndEventIdArgs = {
  accountId: Scalars['UUID']['input']
  eventId: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventSearchArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  language?: InputMaybe<Language>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  query?: InputMaybe<Scalars['String']['input']>
}

/** The root query type which gives access points into the data universe. */
export type QueryEventUploadArgs = {
  nodeId: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventUploadByEventIdAndUploadIdArgs = {
  eventId: Scalars['UUID']['input']
  uploadId: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventUploadByIdArgs = {
  id: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventsOrganizedArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
}

/** The root query type which gives access points into the data universe. */
export type QueryFriendshipArgs = {
  nodeId: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryFriendshipByAAccountIdAndBAccountIdArgs = {
  aAccountId: Scalars['UUID']['input']
  bAccountId: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryFriendshipByIdArgs = {
  id: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryGuestArgs = {
  nodeId: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryGuestByEventIdAndContactIdArgs = {
  contactId: Scalars['UUID']['input']
  eventId: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryGuestByIdArgs = {
  id: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryGuestContactIdsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
}

/** The root query type which gives access points into the data universe. */
export type QueryGuestCountArgs = {
  eventId: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryLanguageIsoFullTextSearchArgs = {
  language?: InputMaybe<Language>
}

/** The root query type which gives access points into the data universe. */
export type QueryLegalTermArgs = {
  nodeId: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryLegalTermAcceptanceArgs = {
  nodeId: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryLegalTermAcceptanceByIdArgs = {
  id: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryLegalTermByIdArgs = {
  id: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryLegalTermByLanguageAndVersionArgs = {
  language: Scalars['String']['input']
  version: Scalars['String']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryPreferenceEventCategoryArgs = {
  nodeId: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryPreferenceEventCategoryByAccountIdAndCategoryIdArgs = {
  accountId: Scalars['UUID']['input']
  categoryId: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryPreferenceEventCategoryByIdArgs = {
  id: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryPreferenceEventFormatArgs = {
  nodeId: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryPreferenceEventFormatByAccountIdAndFormatIdArgs = {
  accountId: Scalars['UUID']['input']
  formatId: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryPreferenceEventFormatByIdArgs = {
  id: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryPreferenceEventLocationArgs = {
  nodeId: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryPreferenceEventLocationByCreatedByAndLocationAndRadiusArgs = {
  createdBy: Scalars['UUID']['input']
  location: Scalars['GeoJSON']['input']
  radius: Scalars['Float']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryPreferenceEventLocationByIdArgs = {
  id: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryPreferenceEventSizeArgs = {
  nodeId: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryPreferenceEventSizeByAccountIdAndEventSizeArgs = {
  accountId: Scalars['UUID']['input']
  eventSize: EventSize
}

/** The root query type which gives access points into the data universe. */
export type QueryPreferenceEventSizeByIdArgs = {
  id: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryProfilePictureArgs = {
  nodeId: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryProfilePictureByAccountIdArgs = {
  accountId: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryProfilePictureByIdArgs = {
  id: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryReportArgs = {
  nodeId: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryReportByCreatedByAndTargetAccountIdAndTargetEventIdAndTargetUploadIdArgs =
  {
    createdBy: Scalars['UUID']['input']
    targetAccountId: Scalars['UUID']['input']
    targetEventId: Scalars['UUID']['input']
    targetUploadId: Scalars['UUID']['input']
  }

/** The root query type which gives access points into the data universe. */
export type QueryReportByIdArgs = {
  id: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryUploadArgs = {
  nodeId: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryUploadByIdArgs = {
  id: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryUploadByStorageKeyArgs = {
  storageKey: Scalars['String']['input']
}

/** Stores reports made by users on other users, events, or uploads for moderation purposes. */
export type Report = Node & {
  __typename?: 'Report'
  /** Reads a single `Account` that is related to this `Report`. */
  accountByCreatedBy?: Maybe<Account>
  /** Reads a single `Account` that is related to this `Report`. */
  accountByTargetAccountId?: Maybe<Account>
  /** Timestamp of when the report was created, defaults to the current timestamp. */
  createdAt: Scalars['Datetime']['output']
  /** The ID of the user who created the report. */
  createdBy: Scalars['UUID']['output']
  /** Reads a single `Event` that is related to this `Report`. */
  eventByTargetEventId?: Maybe<Event>
  /** Unique identifier for the report, generated randomly using UUIDs. */
  id: Scalars['UUID']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output']
  /** The reason for the report, provided by the reporting user. Must be non-empty and less than 2000 characters. */
  reason: Scalars['String']['output']
  /** The ID of the account being reported, if applicable. */
  targetAccountId?: Maybe<Scalars['UUID']['output']>
  /** The ID of the event being reported, if applicable. */
  targetEventId?: Maybe<Scalars['UUID']['output']>
  /** The ID of the upload being reported, if applicable. */
  targetUploadId?: Maybe<Scalars['UUID']['output']>
  /** Reads a single `Upload` that is related to this `Report`. */
  uploadByTargetUploadId?: Maybe<Upload>
}

/** A condition to be used against `Report` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type ReportCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>
  /** Checks for equality with the object’s `createdBy` field. */
  createdBy?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `reason` field. */
  reason?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `targetAccountId` field. */
  targetAccountId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `targetEventId` field. */
  targetEventId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `targetUploadId` field. */
  targetUploadId?: InputMaybe<Scalars['UUID']['input']>
}

/** An input for mutations affecting `Report` */
export type ReportInput = {
  /** The ID of the user who created the report. */
  createdBy: Scalars['UUID']['input']
  /** The reason for the report, provided by the reporting user. Must be non-empty and less than 2000 characters. */
  reason: Scalars['String']['input']
  /** The ID of the account being reported, if applicable. */
  targetAccountId?: InputMaybe<Scalars['UUID']['input']>
  /** The ID of the event being reported, if applicable. */
  targetEventId?: InputMaybe<Scalars['UUID']['input']>
  /** The ID of the upload being reported, if applicable. */
  targetUploadId?: InputMaybe<Scalars['UUID']['input']>
}

/** A connection to a list of `Report` values. */
export type ReportsConnection = {
  __typename?: 'ReportsConnection'
  /** A list of edges which contains the `Report` and cursor to aid in pagination. */
  edges: Array<ReportsEdge>
  /** A list of `Report` objects. */
  nodes: Array<Report>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `Report` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `Report` edge in the connection. */
export type ReportsEdge = {
  __typename?: 'ReportsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `Report` at the end of the edge. */
  node: Report
}

/** Methods to use when ordering `Report`. */
export enum ReportsOrderBy {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  CreatedByAsc = 'CREATED_BY_ASC',
  CreatedByDesc = 'CREATED_BY_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ReasonAsc = 'REASON_ASC',
  ReasonDesc = 'REASON_DESC',
  TargetAccountIdAsc = 'TARGET_ACCOUNT_ID_ASC',
  TargetAccountIdDesc = 'TARGET_ACCOUNT_ID_DESC',
  TargetEventIdAsc = 'TARGET_EVENT_ID_ASC',
  TargetEventIdDesc = 'TARGET_EVENT_ID_DESC',
  TargetUploadIdAsc = 'TARGET_UPLOAD_ID_ASC',
  TargetUploadIdDesc = 'TARGET_UPLOAD_ID_DESC',
}

/** Social networks. */
export enum SocialNetwork {
  Facebook = 'FACEBOOK',
  Instagram = 'INSTAGRAM',
  Tiktok = 'TIKTOK',
  X = 'X',
}

/** All input for the `updateAccountById` mutation. */
export type UpdateAccountByIdInput = {
  /** An object where the defined keys will be set on the `Account` being updated. */
  accountPatch: AccountPatch
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The account's internal id. */
  id: Scalars['UUID']['input']
}

/** All input for the `updateAccountByUsername` mutation. */
export type UpdateAccountByUsernameInput = {
  /** An object where the defined keys will be set on the `Account` being updated. */
  accountPatch: AccountPatch
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The account's username. */
  username: Scalars['String']['input']
}

/** All input for the `updateAccount` mutation. */
export type UpdateAccountInput = {
  /** An object where the defined keys will be set on the `Account` being updated. */
  accountPatch: AccountPatch
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `Account` to be updated. */
  nodeId: Scalars['ID']['input']
}

/** All input for the `updateAccountLocation` mutation. */
export type UpdateAccountLocationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  latitude: Scalars['Float']['input']
  longitude: Scalars['Float']['input']
}

/** The output of our `updateAccountLocation` mutation. */
export type UpdateAccountLocationPayload = {
  __typename?: 'UpdateAccountLocationPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our update `Account` mutation. */
export type UpdateAccountPayload = {
  __typename?: 'UpdateAccountPayload'
  /** The `Account` that was updated by this mutation. */
  account?: Maybe<Account>
  /** An edge for our `Account`. May be used by Relay 1. */
  accountEdge?: Maybe<AccountsEdge>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our update `Account` mutation. */
export type UpdateAccountPayloadAccountEdgeArgs = {
  orderBy?: InputMaybe<Array<AccountsOrderBy>>
}

/** All input for the `updateAccountSocialNetworkByAccountIdAndSocialNetwork` mutation. */
export type UpdateAccountSocialNetworkByAccountIdAndSocialNetworkInput = {
  /** The unique identifier of the account. */
  accountId: Scalars['UUID']['input']
  /** An object where the defined keys will be set on the `AccountSocialNetwork` being updated. */
  accountSocialNetworkPatch: AccountSocialNetworkPatch
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The social network to which the account is linked. */
  socialNetwork: SocialNetwork
}

/** All input for the `updateAccountSocialNetwork` mutation. */
export type UpdateAccountSocialNetworkInput = {
  /** An object where the defined keys will be set on the `AccountSocialNetwork` being updated. */
  accountSocialNetworkPatch: AccountSocialNetworkPatch
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `AccountSocialNetwork` to be updated. */
  nodeId: Scalars['ID']['input']
}

/** The output of our update `AccountSocialNetwork` mutation. */
export type UpdateAccountSocialNetworkPayload = {
  __typename?: 'UpdateAccountSocialNetworkPayload'
  /** Reads a single `Account` that is related to this `AccountSocialNetwork`. */
  accountByAccountId?: Maybe<Account>
  /** The `AccountSocialNetwork` that was updated by this mutation. */
  accountSocialNetwork?: Maybe<AccountSocialNetwork>
  /** An edge for our `AccountSocialNetwork`. May be used by Relay 1. */
  accountSocialNetworkEdge?: Maybe<AccountSocialNetworksEdge>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our update `AccountSocialNetwork` mutation. */
export type UpdateAccountSocialNetworkPayloadAccountSocialNetworkEdgeArgs = {
  orderBy?: InputMaybe<Array<AccountSocialNetworksOrderBy>>
}

/** All input for the `updateAchievementByAccountIdAndAchievement` mutation. */
export type UpdateAchievementByAccountIdAndAchievementInput = {
  /** The account which unlocked the achievement. */
  accountId: Scalars['UUID']['input']
  /** The unlock's achievement. */
  achievement: AchievementType
  /** An object where the defined keys will be set on the `Achievement` being updated. */
  achievementPatch: AchievementPatch
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
}

/** All input for the `updateAchievementById` mutation. */
export type UpdateAchievementByIdInput = {
  /** An object where the defined keys will be set on the `Achievement` being updated. */
  achievementPatch: AchievementPatch
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The achievement unlock's internal id. */
  id: Scalars['UUID']['input']
}

/** All input for the `updateAchievement` mutation. */
export type UpdateAchievementInput = {
  /** An object where the defined keys will be set on the `Achievement` being updated. */
  achievementPatch: AchievementPatch
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `Achievement` to be updated. */
  nodeId: Scalars['ID']['input']
}

/** The output of our update `Achievement` mutation. */
export type UpdateAchievementPayload = {
  __typename?: 'UpdateAchievementPayload'
  /** Reads a single `Account` that is related to this `Achievement`. */
  accountByAccountId?: Maybe<Account>
  /** The `Achievement` that was updated by this mutation. */
  achievement?: Maybe<Achievement>
  /** An edge for our `Achievement`. May be used by Relay 1. */
  achievementEdge?: Maybe<AchievementsEdge>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our update `Achievement` mutation. */
export type UpdateAchievementPayloadAchievementEdgeArgs = {
  orderBy?: InputMaybe<Array<AchievementsOrderBy>>
}

/** All input for the `updateAddressById` mutation. */
export type UpdateAddressByIdInput = {
  /** An object where the defined keys will be set on the `Address` being updated. */
  addressPatch: AddressPatch
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Primary key, uniquely identifies each address. */
  id: Scalars['UUID']['input']
}

/** All input for the `updateAddress` mutation. */
export type UpdateAddressInput = {
  /** An object where the defined keys will be set on the `Address` being updated. */
  addressPatch: AddressPatch
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `Address` to be updated. */
  nodeId: Scalars['ID']['input']
}

/** The output of our update `Address` mutation. */
export type UpdateAddressPayload = {
  __typename?: 'UpdateAddressPayload'
  /** Reads a single `Account` that is related to this `Address`. */
  accountByCreatedBy?: Maybe<Account>
  /** Reads a single `Account` that is related to this `Address`. */
  accountByUpdatedBy?: Maybe<Account>
  /** The `Address` that was updated by this mutation. */
  address?: Maybe<Address>
  /** An edge for our `Address`. May be used by Relay 1. */
  addressEdge?: Maybe<AddressesEdge>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our update `Address` mutation. */
export type UpdateAddressPayloadAddressEdgeArgs = {
  orderBy?: InputMaybe<Array<AddressesOrderBy>>
}

/** All input for the `updateContactByCreatedByAndAccountId` mutation. */
export type UpdateContactByCreatedByAndAccountIdInput = {
  /** Optional reference to an associated account. */
  accountId: Scalars['UUID']['input']
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `Contact` being updated. */
  contactPatch: ContactPatch
  /** Reference to the account that created this contact. Enforces cascading deletion. */
  createdBy: Scalars['UUID']['input']
}

/** All input for the `updateContactById` mutation. */
export type UpdateContactByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `Contact` being updated. */
  contactPatch: ContactPatch
  /** Primary key, uniquely identifies each contact. */
  id: Scalars['UUID']['input']
}

/** All input for the `updateContact` mutation. */
export type UpdateContactInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `Contact` being updated. */
  contactPatch: ContactPatch
  /** The globally unique `ID` which will identify a single `Contact` to be updated. */
  nodeId: Scalars['ID']['input']
}

/** The output of our update `Contact` mutation. */
export type UpdateContactPayload = {
  __typename?: 'UpdateContactPayload'
  /** Reads a single `Account` that is related to this `Contact`. */
  accountByAccountId?: Maybe<Account>
  /** Reads a single `Account` that is related to this `Contact`. */
  accountByCreatedBy?: Maybe<Account>
  /** Reads a single `Address` that is related to this `Contact`. */
  addressByAddressId?: Maybe<Address>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `Contact` that was updated by this mutation. */
  contact?: Maybe<Contact>
  /** An edge for our `Contact`. May be used by Relay 1. */
  contactEdge?: Maybe<ContactsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our update `Contact` mutation. */
export type UpdateContactPayloadContactEdgeArgs = {
  orderBy?: InputMaybe<Array<ContactsOrderBy>>
}

/** All input for the `updateDeviceByCreatedByAndFcmToken` mutation. */
export type UpdateDeviceByCreatedByAndFcmTokenInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Reference to the account that created the device. */
  createdBy: Scalars['UUID']['input']
  /** An object where the defined keys will be set on the `Device` being updated. */
  devicePatch: DevicePatch
  /** The Firebase Cloud Messaging token of the device that's used to deliver notifications. */
  fcmToken: Scalars['String']['input']
}

/** All input for the `updateDeviceById` mutation. */
export type UpdateDeviceByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `Device` being updated. */
  devicePatch: DevicePatch
  /** The internal id of the device. */
  id: Scalars['UUID']['input']
}

/** All input for the `updateDevice` mutation. */
export type UpdateDeviceInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `Device` being updated. */
  devicePatch: DevicePatch
  /** The globally unique `ID` which will identify a single `Device` to be updated. */
  nodeId: Scalars['ID']['input']
}

/** The output of our update `Device` mutation. */
export type UpdateDevicePayload = {
  __typename?: 'UpdateDevicePayload'
  /** Reads a single `Account` that is related to this `Device`. */
  accountByCreatedBy?: Maybe<Account>
  /** Reads a single `Account` that is related to this `Device`. */
  accountByUpdatedBy?: Maybe<Account>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `Device` that was updated by this mutation. */
  device?: Maybe<Device>
  /** An edge for our `Device`. May be used by Relay 1. */
  deviceEdge?: Maybe<DevicesEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our update `Device` mutation. */
export type UpdateDevicePayloadDeviceEdgeArgs = {
  orderBy?: InputMaybe<Array<DevicesOrderBy>>
}

/** All input for the `updateEventByCreatedByAndSlug` mutation. */
export type UpdateEventByCreatedByAndSlugInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The event creator's id. */
  createdBy: Scalars['UUID']['input']
  /** An object where the defined keys will be set on the `Event` being updated. */
  eventPatch: EventPatch
  /** The event's name, slugified. */
  slug: Scalars['String']['input']
}

/** All input for the `updateEventById` mutation. */
export type UpdateEventByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `Event` being updated. */
  eventPatch: EventPatch
  /** The event's internal id. */
  id: Scalars['UUID']['input']
}

/** All input for the `updateEventCategoryMappingByEventIdAndCategoryId` mutation. */
export type UpdateEventCategoryMappingByEventIdAndCategoryIdInput = {
  /** A category id. */
  categoryId: Scalars['UUID']['input']
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `EventCategoryMapping` being updated. */
  eventCategoryMappingPatch: EventCategoryMappingPatch
  /** An event id. */
  eventId: Scalars['UUID']['input']
}

/** All input for the `updateEventCategoryMapping` mutation. */
export type UpdateEventCategoryMappingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `EventCategoryMapping` being updated. */
  eventCategoryMappingPatch: EventCategoryMappingPatch
  /** The globally unique `ID` which will identify a single `EventCategoryMapping` to be updated. */
  nodeId: Scalars['ID']['input']
}

/** The output of our update `EventCategoryMapping` mutation. */
export type UpdateEventCategoryMappingPayload = {
  __typename?: 'UpdateEventCategoryMappingPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Reads a single `Event` that is related to this `EventCategoryMapping`. */
  eventByEventId?: Maybe<Event>
  /** Reads a single `EventCategory` that is related to this `EventCategoryMapping`. */
  eventCategoryByCategoryId?: Maybe<EventCategory>
  /** The `EventCategoryMapping` that was updated by this mutation. */
  eventCategoryMapping?: Maybe<EventCategoryMapping>
  /** An edge for our `EventCategoryMapping`. May be used by Relay 1. */
  eventCategoryMappingEdge?: Maybe<EventCategoryMappingsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our update `EventCategoryMapping` mutation. */
export type UpdateEventCategoryMappingPayloadEventCategoryMappingEdgeArgs = {
  orderBy?: InputMaybe<Array<EventCategoryMappingsOrderBy>>
}

/** All input for the `updateEventFormatMappingByEventIdAndFormatId` mutation. */
export type UpdateEventFormatMappingByEventIdAndFormatIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `EventFormatMapping` being updated. */
  eventFormatMappingPatch: EventFormatMappingPatch
  /** An event id. */
  eventId: Scalars['UUID']['input']
  /** A format id. */
  formatId: Scalars['UUID']['input']
}

/** All input for the `updateEventFormatMapping` mutation. */
export type UpdateEventFormatMappingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `EventFormatMapping` being updated. */
  eventFormatMappingPatch: EventFormatMappingPatch
  /** The globally unique `ID` which will identify a single `EventFormatMapping` to be updated. */
  nodeId: Scalars['ID']['input']
}

/** The output of our update `EventFormatMapping` mutation. */
export type UpdateEventFormatMappingPayload = {
  __typename?: 'UpdateEventFormatMappingPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Reads a single `Event` that is related to this `EventFormatMapping`. */
  eventByEventId?: Maybe<Event>
  /** Reads a single `EventFormat` that is related to this `EventFormatMapping`. */
  eventFormatByFormatId?: Maybe<EventFormat>
  /** The `EventFormatMapping` that was updated by this mutation. */
  eventFormatMapping?: Maybe<EventFormatMapping>
  /** An edge for our `EventFormatMapping`. May be used by Relay 1. */
  eventFormatMappingEdge?: Maybe<EventFormatMappingsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our update `EventFormatMapping` mutation. */
export type UpdateEventFormatMappingPayloadEventFormatMappingEdgeArgs = {
  orderBy?: InputMaybe<Array<EventFormatMappingsOrderBy>>
}

/** All input for the `updateEvent` mutation. */
export type UpdateEventInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `Event` being updated. */
  eventPatch: EventPatch
  /** The globally unique `ID` which will identify a single `Event` to be updated. */
  nodeId: Scalars['ID']['input']
}

/** The output of our update `Event` mutation. */
export type UpdateEventPayload = {
  __typename?: 'UpdateEventPayload'
  /** Reads a single `Account` that is related to this `Event`. */
  accountByCreatedBy?: Maybe<Account>
  /** Reads a single `Address` that is related to this `Event`. */
  addressByAddressId?: Maybe<Address>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `Event` that was updated by this mutation. */
  event?: Maybe<Event>
  /** An edge for our `Event`. May be used by Relay 1. */
  eventEdge?: Maybe<EventsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our update `Event` mutation. */
export type UpdateEventPayloadEventEdgeArgs = {
  orderBy?: InputMaybe<Array<EventsOrderBy>>
}

/** All input for the `updateEventRecommendationByAccountIdAndEventId` mutation. */
export type UpdateEventRecommendationByAccountIdAndEventIdInput = {
  /** A user account id. */
  accountId: Scalars['UUID']['input']
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The predicted score of the recommendation. */
  eventId: Scalars['UUID']['input']
  /** An object where the defined keys will be set on the `EventRecommendation` being updated. */
  eventRecommendationPatch: EventRecommendationPatch
}

/** All input for the `updateEventRecommendation` mutation. */
export type UpdateEventRecommendationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `EventRecommendation` being updated. */
  eventRecommendationPatch: EventRecommendationPatch
  /** The globally unique `ID` which will identify a single `EventRecommendation` to be updated. */
  nodeId: Scalars['ID']['input']
}

/** The output of our update `EventRecommendation` mutation. */
export type UpdateEventRecommendationPayload = {
  __typename?: 'UpdateEventRecommendationPayload'
  /** Reads a single `Account` that is related to this `EventRecommendation`. */
  accountByAccountId?: Maybe<Account>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Reads a single `Event` that is related to this `EventRecommendation`. */
  eventByEventId?: Maybe<Event>
  /** The `EventRecommendation` that was updated by this mutation. */
  eventRecommendation?: Maybe<EventRecommendation>
  /** An edge for our `EventRecommendation`. May be used by Relay 1. */
  eventRecommendationEdge?: Maybe<EventRecommendationsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our update `EventRecommendation` mutation. */
export type UpdateEventRecommendationPayloadEventRecommendationEdgeArgs = {
  orderBy?: InputMaybe<Array<EventRecommendationsOrderBy>>
}

/** All input for the `updateEventUploadByEventIdAndUploadId` mutation. */
export type UpdateEventUploadByEventIdAndUploadIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Reference to the event associated with the upload. */
  eventId: Scalars['UUID']['input']
  /** An object where the defined keys will be set on the `EventUpload` being updated. */
  eventUploadPatch: EventUploadPatch
  /** Reference to the uploaded file. */
  uploadId: Scalars['UUID']['input']
}

/** All input for the `updateEventUploadById` mutation. */
export type UpdateEventUploadByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `EventUpload` being updated. */
  eventUploadPatch: EventUploadPatch
  /** Primary key, uniquely identifies each event-upload association. */
  id: Scalars['UUID']['input']
}

/** All input for the `updateEventUpload` mutation. */
export type UpdateEventUploadInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `EventUpload` being updated. */
  eventUploadPatch: EventUploadPatch
  /** The globally unique `ID` which will identify a single `EventUpload` to be updated. */
  nodeId: Scalars['ID']['input']
}

/** The output of our update `EventUpload` mutation. */
export type UpdateEventUploadPayload = {
  __typename?: 'UpdateEventUploadPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Reads a single `Event` that is related to this `EventUpload`. */
  eventByEventId?: Maybe<Event>
  /** The `EventUpload` that was updated by this mutation. */
  eventUpload?: Maybe<EventUpload>
  /** An edge for our `EventUpload`. May be used by Relay 1. */
  eventUploadEdge?: Maybe<EventUploadsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `Upload` that is related to this `EventUpload`. */
  uploadByUploadId?: Maybe<Upload>
}

/** The output of our update `EventUpload` mutation. */
export type UpdateEventUploadPayloadEventUploadEdgeArgs = {
  orderBy?: InputMaybe<Array<EventUploadsOrderBy>>
}

/** All input for the `updateFriendshipByAAccountIdAndBAccountId` mutation. */
export type UpdateFriendshipByAAccountIdAndBAccountIdInput = {
  /** The 'left' side of the friend relation. It must be lexically less than the 'right' side. */
  aAccountId: Scalars['UUID']['input']
  /** The 'right' side of the friend relation. It must be lexically greater than the 'left' side. */
  bAccountId: Scalars['UUID']['input']
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `Friendship` being updated. */
  friendshipPatch: FriendshipPatch
}

/** All input for the `updateFriendshipById` mutation. */
export type UpdateFriendshipByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `Friendship` being updated. */
  friendshipPatch: FriendshipPatch
  /** The friend relation's internal id. */
  id: Scalars['UUID']['input']
}

/** All input for the `updateFriendship` mutation. */
export type UpdateFriendshipInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `Friendship` being updated. */
  friendshipPatch: FriendshipPatch
  /** The globally unique `ID` which will identify a single `Friendship` to be updated. */
  nodeId: Scalars['ID']['input']
}

/** The output of our update `Friendship` mutation. */
export type UpdateFriendshipPayload = {
  __typename?: 'UpdateFriendshipPayload'
  /** Reads a single `Account` that is related to this `Friendship`. */
  accountByAAccountId?: Maybe<Account>
  /** Reads a single `Account` that is related to this `Friendship`. */
  accountByBAccountId?: Maybe<Account>
  /** Reads a single `Account` that is related to this `Friendship`. */
  accountByCreatedBy?: Maybe<Account>
  /** Reads a single `Account` that is related to this `Friendship`. */
  accountByUpdatedBy?: Maybe<Account>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `Friendship` that was updated by this mutation. */
  friendship?: Maybe<Friendship>
  /** An edge for our `Friendship`. May be used by Relay 1. */
  friendshipEdge?: Maybe<FriendshipsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our update `Friendship` mutation. */
export type UpdateFriendshipPayloadFriendshipEdgeArgs = {
  orderBy?: InputMaybe<Array<FriendshipsOrderBy>>
}

/** All input for the `updateGuestByEventIdAndContactId` mutation. */
export type UpdateGuestByEventIdAndContactIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The internal id of the guest's contact. */
  contactId: Scalars['UUID']['input']
  /** The internal id of the guest's event. */
  eventId: Scalars['UUID']['input']
  /** An object where the defined keys will be set on the `Guest` being updated. */
  guestPatch: GuestPatch
}

/** All input for the `updateGuestById` mutation. */
export type UpdateGuestByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `Guest` being updated. */
  guestPatch: GuestPatch
  /** The guests's internal id. */
  id: Scalars['UUID']['input']
}

/** All input for the `updateGuest` mutation. */
export type UpdateGuestInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `Guest` being updated. */
  guestPatch: GuestPatch
  /** The globally unique `ID` which will identify a single `Guest` to be updated. */
  nodeId: Scalars['ID']['input']
}

/** The output of our update `Guest` mutation. */
export type UpdateGuestPayload = {
  __typename?: 'UpdateGuestPayload'
  /** Reads a single `Account` that is related to this `Guest`. */
  accountByUpdatedBy?: Maybe<Account>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Reads a single `Contact` that is related to this `Guest`. */
  contactByContactId?: Maybe<Contact>
  /** Reads a single `Event` that is related to this `Guest`. */
  eventByEventId?: Maybe<Event>
  /** The `Guest` that was updated by this mutation. */
  guest?: Maybe<Guest>
  /** An edge for our `Guest`. May be used by Relay 1. */
  guestEdge?: Maybe<GuestsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our update `Guest` mutation. */
export type UpdateGuestPayloadGuestEdgeArgs = {
  orderBy?: InputMaybe<Array<GuestsOrderBy>>
}

/** All input for the `updatePreferenceEventCategoryByAccountIdAndCategoryId` mutation. */
export type UpdatePreferenceEventCategoryByAccountIdAndCategoryIdInput = {
  /** A user account id. */
  accountId: Scalars['UUID']['input']
  /** An event category id. */
  categoryId: Scalars['UUID']['input']
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `PreferenceEventCategory` being updated. */
  preferenceEventCategoryPatch: PreferenceEventCategoryPatch
}

/** All input for the `updatePreferenceEventCategoryById` mutation. */
export type UpdatePreferenceEventCategoryByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  id: Scalars['UUID']['input']
  /** An object where the defined keys will be set on the `PreferenceEventCategory` being updated. */
  preferenceEventCategoryPatch: PreferenceEventCategoryPatch
}

/** All input for the `updatePreferenceEventCategory` mutation. */
export type UpdatePreferenceEventCategoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `PreferenceEventCategory` to be updated. */
  nodeId: Scalars['ID']['input']
  /** An object where the defined keys will be set on the `PreferenceEventCategory` being updated. */
  preferenceEventCategoryPatch: PreferenceEventCategoryPatch
}

/** The output of our update `PreferenceEventCategory` mutation. */
export type UpdatePreferenceEventCategoryPayload = {
  __typename?: 'UpdatePreferenceEventCategoryPayload'
  /** Reads a single `Account` that is related to this `PreferenceEventCategory`. */
  accountByAccountId?: Maybe<Account>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Reads a single `EventCategory` that is related to this `PreferenceEventCategory`. */
  eventCategoryByCategoryId?: Maybe<EventCategory>
  /** The `PreferenceEventCategory` that was updated by this mutation. */
  preferenceEventCategory?: Maybe<PreferenceEventCategory>
  /** An edge for our `PreferenceEventCategory`. May be used by Relay 1. */
  preferenceEventCategoryEdge?: Maybe<PreferenceEventCategoriesEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our update `PreferenceEventCategory` mutation. */
export type UpdatePreferenceEventCategoryPayloadPreferenceEventCategoryEdgeArgs =
  {
    orderBy?: InputMaybe<Array<PreferenceEventCategoriesOrderBy>>
  }

/** All input for the `updatePreferenceEventFormatByAccountIdAndFormatId` mutation. */
export type UpdatePreferenceEventFormatByAccountIdAndFormatIdInput = {
  /** A user account id. */
  accountId: Scalars['UUID']['input']
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The id of an event format. */
  formatId: Scalars['UUID']['input']
  /** An object where the defined keys will be set on the `PreferenceEventFormat` being updated. */
  preferenceEventFormatPatch: PreferenceEventFormatPatch
}

/** All input for the `updatePreferenceEventFormatById` mutation. */
export type UpdatePreferenceEventFormatByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  id: Scalars['UUID']['input']
  /** An object where the defined keys will be set on the `PreferenceEventFormat` being updated. */
  preferenceEventFormatPatch: PreferenceEventFormatPatch
}

/** All input for the `updatePreferenceEventFormat` mutation. */
export type UpdatePreferenceEventFormatInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `PreferenceEventFormat` to be updated. */
  nodeId: Scalars['ID']['input']
  /** An object where the defined keys will be set on the `PreferenceEventFormat` being updated. */
  preferenceEventFormatPatch: PreferenceEventFormatPatch
}

/** The output of our update `PreferenceEventFormat` mutation. */
export type UpdatePreferenceEventFormatPayload = {
  __typename?: 'UpdatePreferenceEventFormatPayload'
  /** Reads a single `Account` that is related to this `PreferenceEventFormat`. */
  accountByAccountId?: Maybe<Account>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Reads a single `EventFormat` that is related to this `PreferenceEventFormat`. */
  eventFormatByFormatId?: Maybe<EventFormat>
  /** The `PreferenceEventFormat` that was updated by this mutation. */
  preferenceEventFormat?: Maybe<PreferenceEventFormat>
  /** An edge for our `PreferenceEventFormat`. May be used by Relay 1. */
  preferenceEventFormatEdge?: Maybe<PreferenceEventFormatsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our update `PreferenceEventFormat` mutation. */
export type UpdatePreferenceEventFormatPayloadPreferenceEventFormatEdgeArgs = {
  orderBy?: InputMaybe<Array<PreferenceEventFormatsOrderBy>>
}

/** All input for the `updatePreferenceEventLocationByCreatedByAndLocationAndRadius` mutation. */
export type UpdatePreferenceEventLocationByCreatedByAndLocationAndRadiusInput =
  {
    /**
     * An arbitrary string value with no semantic meaning. Will be included in the
     * payload verbatim. May be used to track mutations by the client.
     */
    clientMutationId?: InputMaybe<Scalars['String']['input']>
    /** Reference to the account that created the location preference. */
    createdBy: Scalars['UUID']['input']
    /** Geographical point representing the preferred location, derived from latitude and longitude. */
    location: Scalars['GeoJSON']['input']
    /** An object where the defined keys will be set on the `PreferenceEventLocation` being updated. */
    preferenceEventLocationPatch: PreferenceEventLocationPatch
    /** Search radius in meters around the location where events are preferred. Must be positive. */
    radius: Scalars['Float']['input']
  }

/** All input for the `updatePreferenceEventLocationById` mutation. */
export type UpdatePreferenceEventLocationByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Unique identifier for the preference record. */
  id: Scalars['UUID']['input']
  /** An object where the defined keys will be set on the `PreferenceEventLocation` being updated. */
  preferenceEventLocationPatch: PreferenceEventLocationPatch
}

/** All input for the `updatePreferenceEventLocation` mutation. */
export type UpdatePreferenceEventLocationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `PreferenceEventLocation` to be updated. */
  nodeId: Scalars['ID']['input']
  /** An object where the defined keys will be set on the `PreferenceEventLocation` being updated. */
  preferenceEventLocationPatch: PreferenceEventLocationPatch
}

/** The output of our update `PreferenceEventLocation` mutation. */
export type UpdatePreferenceEventLocationPayload = {
  __typename?: 'UpdatePreferenceEventLocationPayload'
  /** Reads a single `Account` that is related to this `PreferenceEventLocation`. */
  accountByCreatedBy?: Maybe<Account>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `PreferenceEventLocation` that was updated by this mutation. */
  preferenceEventLocation?: Maybe<PreferenceEventLocation>
  /** An edge for our `PreferenceEventLocation`. May be used by Relay 1. */
  preferenceEventLocationEdge?: Maybe<PreferenceEventLocationsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our update `PreferenceEventLocation` mutation. */
export type UpdatePreferenceEventLocationPayloadPreferenceEventLocationEdgeArgs =
  {
    orderBy?: InputMaybe<Array<PreferenceEventLocationsOrderBy>>
  }

/** All input for the `updatePreferenceEventSizeByAccountIdAndEventSize` mutation. */
export type UpdatePreferenceEventSizeByAccountIdAndEventSizeInput = {
  /** The account's internal id. */
  accountId: Scalars['UUID']['input']
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** A preferred event size. */
  eventSize: EventSize
  /** An object where the defined keys will be set on the `PreferenceEventSize` being updated. */
  preferenceEventSizePatch: PreferenceEventSizePatch
}

/** All input for the `updatePreferenceEventSizeById` mutation. */
export type UpdatePreferenceEventSizeByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  id: Scalars['UUID']['input']
  /** An object where the defined keys will be set on the `PreferenceEventSize` being updated. */
  preferenceEventSizePatch: PreferenceEventSizePatch
}

/** All input for the `updatePreferenceEventSize` mutation. */
export type UpdatePreferenceEventSizeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `PreferenceEventSize` to be updated. */
  nodeId: Scalars['ID']['input']
  /** An object where the defined keys will be set on the `PreferenceEventSize` being updated. */
  preferenceEventSizePatch: PreferenceEventSizePatch
}

/** The output of our update `PreferenceEventSize` mutation. */
export type UpdatePreferenceEventSizePayload = {
  __typename?: 'UpdatePreferenceEventSizePayload'
  /** Reads a single `Account` that is related to this `PreferenceEventSize`. */
  accountByAccountId?: Maybe<Account>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `PreferenceEventSize` that was updated by this mutation. */
  preferenceEventSize?: Maybe<PreferenceEventSize>
  /** An edge for our `PreferenceEventSize`. May be used by Relay 1. */
  preferenceEventSizeEdge?: Maybe<PreferenceEventSizesEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our update `PreferenceEventSize` mutation. */
export type UpdatePreferenceEventSizePayloadPreferenceEventSizeEdgeArgs = {
  orderBy?: InputMaybe<Array<PreferenceEventSizesOrderBy>>
}

/** All input for the `updateProfilePictureByAccountId` mutation. */
export type UpdateProfilePictureByAccountIdInput = {
  /** The account's id. */
  accountId: Scalars['UUID']['input']
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `ProfilePicture` being updated. */
  profilePicturePatch: ProfilePicturePatch
}

/** All input for the `updateProfilePictureById` mutation. */
export type UpdateProfilePictureByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The profile picture's internal id. */
  id: Scalars['UUID']['input']
  /** An object where the defined keys will be set on the `ProfilePicture` being updated. */
  profilePicturePatch: ProfilePicturePatch
}

/** All input for the `updateProfilePicture` mutation. */
export type UpdateProfilePictureInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `ProfilePicture` to be updated. */
  nodeId: Scalars['ID']['input']
  /** An object where the defined keys will be set on the `ProfilePicture` being updated. */
  profilePicturePatch: ProfilePicturePatch
}

/** The output of our update `ProfilePicture` mutation. */
export type UpdateProfilePicturePayload = {
  __typename?: 'UpdateProfilePicturePayload'
  /** Reads a single `Account` that is related to this `ProfilePicture`. */
  accountByAccountId?: Maybe<Account>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `ProfilePicture` that was updated by this mutation. */
  profilePicture?: Maybe<ProfilePicture>
  /** An edge for our `ProfilePicture`. May be used by Relay 1. */
  profilePictureEdge?: Maybe<ProfilePicturesEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `Upload` that is related to this `ProfilePicture`. */
  uploadByUploadId?: Maybe<Upload>
}

/** The output of our update `ProfilePicture` mutation. */
export type UpdateProfilePicturePayloadProfilePictureEdgeArgs = {
  orderBy?: InputMaybe<Array<ProfilePicturesOrderBy>>
}

/** All input for the `updateUploadById` mutation. */
export type UpdateUploadByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The upload's internal id. */
  id: Scalars['UUID']['input']
  /** An object where the defined keys will be set on the `Upload` being updated. */
  uploadPatch: UploadPatch
}

/** All input for the `updateUploadByStorageKey` mutation. */
export type UpdateUploadByStorageKeyInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The upload's storage key. */
  storageKey: Scalars['String']['input']
  /** An object where the defined keys will be set on the `Upload` being updated. */
  uploadPatch: UploadPatch
}

/** All input for the `updateUpload` mutation. */
export type UpdateUploadInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `Upload` to be updated. */
  nodeId: Scalars['ID']['input']
  /** An object where the defined keys will be set on the `Upload` being updated. */
  uploadPatch: UploadPatch
}

/** The output of our update `Upload` mutation. */
export type UpdateUploadPayload = {
  __typename?: 'UpdateUploadPayload'
  /** Reads a single `Account` that is related to this `Upload`. */
  accountByCreatedBy?: Maybe<Account>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** The `Upload` that was updated by this mutation. */
  upload?: Maybe<Upload>
  /** An edge for our `Upload`. May be used by Relay 1. */
  uploadEdge?: Maybe<UploadsEdge>
}

/** The output of our update `Upload` mutation. */
export type UpdateUploadPayloadUploadEdgeArgs = {
  orderBy?: InputMaybe<Array<UploadsOrderBy>>
}

/** An upload. */
export type Upload = Node & {
  __typename?: 'Upload'
  /** Reads a single `Account` that is related to this `Upload`. */
  accountByCreatedBy?: Maybe<Account>
  /** Timestamp of when the upload was created, defaults to the current timestamp. */
  createdAt: Scalars['Datetime']['output']
  /** The uploader's account id. */
  createdBy: Scalars['UUID']['output']
  /** Reads and enables pagination through a set of `EventUpload`. */
  eventUploadsByUploadId: EventUploadsConnection
  /** The upload's internal id. */
  id: Scalars['UUID']['output']
  /** The name of the uploaded file. */
  name?: Maybe<Scalars['String']['output']>
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output']
  /** Reads and enables pagination through a set of `ProfilePicture`. */
  profilePicturesByUploadId: ProfilePicturesConnection
  /** Reads and enables pagination through a set of `Report`. */
  reportsByTargetUploadId: ReportsConnection
  /** The upload's size in bytes. */
  sizeByte: Scalars['BigInt']['output']
  /** The upload's storage key. */
  storageKey?: Maybe<Scalars['String']['output']>
  /** The type of the uploaded file, default is 'image'. */
  type: Scalars['String']['output']
}

/** An upload. */
export type UploadEventUploadsByUploadIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventUploadCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<EventUploadsOrderBy>>
}

/** An upload. */
export type UploadProfilePicturesByUploadIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<ProfilePictureCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<ProfilePicturesOrderBy>>
}

/** An upload. */
export type UploadReportsByTargetUploadIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<ReportCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<ReportsOrderBy>>
}

/** A condition to be used against `Upload` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type UploadCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>
  /** Checks for equality with the object’s `createdBy` field. */
  createdBy?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `sizeByte` field. */
  sizeByte?: InputMaybe<Scalars['BigInt']['input']>
  /** Checks for equality with the object’s `storageKey` field. */
  storageKey?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `type` field. */
  type?: InputMaybe<Scalars['String']['input']>
}

/** An input for mutations affecting `Upload` */
export type UploadInput = {
  /** The uploader's account id. */
  createdBy: Scalars['UUID']['input']
  /** The name of the uploaded file. */
  name?: InputMaybe<Scalars['String']['input']>
  /** The upload's size in bytes. */
  sizeByte: Scalars['BigInt']['input']
}

/** Represents an update to a `Upload`. Fields that are set will be updated. */
export type UploadPatch = {
  /** The uploader's account id. */
  createdBy?: InputMaybe<Scalars['UUID']['input']>
  /** The name of the uploaded file. */
  name?: InputMaybe<Scalars['String']['input']>
}

/** A connection to a list of `Upload` values. */
export type UploadsConnection = {
  __typename?: 'UploadsConnection'
  /** A list of edges which contains the `Upload` and cursor to aid in pagination. */
  edges: Array<UploadsEdge>
  /** A list of `Upload` objects. */
  nodes: Array<Upload>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `Upload` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `Upload` edge in the connection. */
export type UploadsEdge = {
  __typename?: 'UploadsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `Upload` at the end of the edge. */
  node: Upload
}

/** Methods to use when ordering `Upload`. */
export enum UploadsOrderBy {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  CreatedByAsc = 'CREATED_BY_ASC',
  CreatedByDesc = 'CREATED_BY_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SizeByteAsc = 'SIZE_BYTE_ASC',
  SizeByteDesc = 'SIZE_BYTE_DESC',
  StorageKeyAsc = 'STORAGE_KEY_ASC',
  StorageKeyDesc = 'STORAGE_KEY_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
}

export type WithTypename<T extends { __typename?: any }> = Partial<T> & {
  __typename: NonNullable<T['__typename']>
}

export type GraphCacheKeysConfig = {
  Account?: (data: WithTypename<Account>) => null | string
  AccountBlock?: (data: WithTypename<AccountBlock>) => null | string
  AccountBlocksConnection?: (
    data: WithTypename<AccountBlocksConnection>,
  ) => null | string
  AccountBlocksEdge?: (data: WithTypename<AccountBlocksEdge>) => null | string
  AccountDeletePayload?: (
    data: WithTypename<AccountDeletePayload>,
  ) => null | string
  AccountEmailAddressVerificationPayload?: (
    data: WithTypename<AccountEmailAddressVerificationPayload>,
  ) => null | string
  AccountPasswordChangePayload?: (
    data: WithTypename<AccountPasswordChangePayload>,
  ) => null | string
  AccountPasswordResetPayload?: (
    data: WithTypename<AccountPasswordResetPayload>,
  ) => null | string
  AccountPasswordResetRequestPayload?: (
    data: WithTypename<AccountPasswordResetRequestPayload>,
  ) => null | string
  AccountRegistrationPayload?: (
    data: WithTypename<AccountRegistrationPayload>,
  ) => null | string
  AccountRegistrationRefreshPayload?: (
    data: WithTypename<AccountRegistrationRefreshPayload>,
  ) => null | string
  AccountSocialNetwork?: (
    data: WithTypename<AccountSocialNetwork>,
  ) => null | string
  AccountSocialNetworksConnection?: (
    data: WithTypename<AccountSocialNetworksConnection>,
  ) => null | string
  AccountSocialNetworksEdge?: (
    data: WithTypename<AccountSocialNetworksEdge>,
  ) => null | string
  AccountsConnection?: (data: WithTypename<AccountsConnection>) => null | string
  AccountsEdge?: (data: WithTypename<AccountsEdge>) => null | string
  Achievement?: (data: WithTypename<Achievement>) => null | string
  AchievementUnlockPayload?: (
    data: WithTypename<AchievementUnlockPayload>,
  ) => null | string
  AchievementsConnection?: (
    data: WithTypename<AchievementsConnection>,
  ) => null | string
  AchievementsEdge?: (data: WithTypename<AchievementsEdge>) => null | string
  Address?: (data: WithTypename<Address>) => null | string
  AddressesConnection?: (
    data: WithTypename<AddressesConnection>,
  ) => null | string
  AddressesEdge?: (data: WithTypename<AddressesEdge>) => null | string
  AuthenticatePayload?: (
    data: WithTypename<AuthenticatePayload>,
  ) => null | string
  Contact?: (data: WithTypename<Contact>) => null | string
  ContactsConnection?: (data: WithTypename<ContactsConnection>) => null | string
  ContactsEdge?: (data: WithTypename<ContactsEdge>) => null | string
  CreateAccountBlockPayload?: (
    data: WithTypename<CreateAccountBlockPayload>,
  ) => null | string
  CreateAccountSocialNetworkPayload?: (
    data: WithTypename<CreateAccountSocialNetworkPayload>,
  ) => null | string
  CreateAchievementPayload?: (
    data: WithTypename<CreateAchievementPayload>,
  ) => null | string
  CreateAddressPayload?: (
    data: WithTypename<CreateAddressPayload>,
  ) => null | string
  CreateContactPayload?: (
    data: WithTypename<CreateContactPayload>,
  ) => null | string
  CreateDevicePayload?: (
    data: WithTypename<CreateDevicePayload>,
  ) => null | string
  CreateEventCategoryMappingPayload?: (
    data: WithTypename<CreateEventCategoryMappingPayload>,
  ) => null | string
  CreateEventFavoritePayload?: (
    data: WithTypename<CreateEventFavoritePayload>,
  ) => null | string
  CreateEventFormatMappingPayload?: (
    data: WithTypename<CreateEventFormatMappingPayload>,
  ) => null | string
  CreateEventPayload?: (data: WithTypename<CreateEventPayload>) => null | string
  CreateEventRecommendationPayload?: (
    data: WithTypename<CreateEventRecommendationPayload>,
  ) => null | string
  CreateEventUploadPayload?: (
    data: WithTypename<CreateEventUploadPayload>,
  ) => null | string
  CreateFriendshipPayload?: (
    data: WithTypename<CreateFriendshipPayload>,
  ) => null | string
  CreateGuestPayload?: (data: WithTypename<CreateGuestPayload>) => null | string
  CreateGuestsPayload?: (
    data: WithTypename<CreateGuestsPayload>,
  ) => null | string
  CreateLegalTermAcceptancePayload?: (
    data: WithTypename<CreateLegalTermAcceptancePayload>,
  ) => null | string
  CreatePreferenceEventCategoryPayload?: (
    data: WithTypename<CreatePreferenceEventCategoryPayload>,
  ) => null | string
  CreatePreferenceEventFormatPayload?: (
    data: WithTypename<CreatePreferenceEventFormatPayload>,
  ) => null | string
  CreatePreferenceEventLocationPayload?: (
    data: WithTypename<CreatePreferenceEventLocationPayload>,
  ) => null | string
  CreatePreferenceEventSizePayload?: (
    data: WithTypename<CreatePreferenceEventSizePayload>,
  ) => null | string
  CreateProfilePicturePayload?: (
    data: WithTypename<CreateProfilePicturePayload>,
  ) => null | string
  CreateReportPayload?: (
    data: WithTypename<CreateReportPayload>,
  ) => null | string
  CreateUploadPayload?: (
    data: WithTypename<CreateUploadPayload>,
  ) => null | string
  DeleteAccountBlockPayload?: (
    data: WithTypename<DeleteAccountBlockPayload>,
  ) => null | string
  DeleteAccountSocialNetworkPayload?: (
    data: WithTypename<DeleteAccountSocialNetworkPayload>,
  ) => null | string
  DeleteAchievementPayload?: (
    data: WithTypename<DeleteAchievementPayload>,
  ) => null | string
  DeleteAddressPayload?: (
    data: WithTypename<DeleteAddressPayload>,
  ) => null | string
  DeleteContactPayload?: (
    data: WithTypename<DeleteContactPayload>,
  ) => null | string
  DeleteDevicePayload?: (
    data: WithTypename<DeleteDevicePayload>,
  ) => null | string
  DeleteEventCategoryMappingPayload?: (
    data: WithTypename<DeleteEventCategoryMappingPayload>,
  ) => null | string
  DeleteEventFavoritePayload?: (
    data: WithTypename<DeleteEventFavoritePayload>,
  ) => null | string
  DeleteEventFormatMappingPayload?: (
    data: WithTypename<DeleteEventFormatMappingPayload>,
  ) => null | string
  DeleteEventPayload?: (data: WithTypename<DeleteEventPayload>) => null | string
  DeleteEventRecommendationPayload?: (
    data: WithTypename<DeleteEventRecommendationPayload>,
  ) => null | string
  DeleteEventUploadPayload?: (
    data: WithTypename<DeleteEventUploadPayload>,
  ) => null | string
  DeleteFriendshipPayload?: (
    data: WithTypename<DeleteFriendshipPayload>,
  ) => null | string
  DeleteGuestPayload?: (data: WithTypename<DeleteGuestPayload>) => null | string
  DeletePreferenceEventCategoryPayload?: (
    data: WithTypename<DeletePreferenceEventCategoryPayload>,
  ) => null | string
  DeletePreferenceEventFormatPayload?: (
    data: WithTypename<DeletePreferenceEventFormatPayload>,
  ) => null | string
  DeletePreferenceEventLocationPayload?: (
    data: WithTypename<DeletePreferenceEventLocationPayload>,
  ) => null | string
  DeletePreferenceEventSizePayload?: (
    data: WithTypename<DeletePreferenceEventSizePayload>,
  ) => null | string
  DeleteProfilePicturePayload?: (
    data: WithTypename<DeleteProfilePicturePayload>,
  ) => null | string
  DeleteUploadPayload?: (
    data: WithTypename<DeleteUploadPayload>,
  ) => null | string
  Device?: (data: WithTypename<Device>) => null | string
  DevicesConnection?: (data: WithTypename<DevicesConnection>) => null | string
  DevicesEdge?: (data: WithTypename<DevicesEdge>) => null | string
  Event?: (data: WithTypename<Event>) => null | string
  EventCategoriesConnection?: (
    data: WithTypename<EventCategoriesConnection>,
  ) => null | string
  EventCategoriesEdge?: (
    data: WithTypename<EventCategoriesEdge>,
  ) => null | string
  EventCategory?: (data: WithTypename<EventCategory>) => null | string
  EventCategoryMapping?: (
    data: WithTypename<EventCategoryMapping>,
  ) => null | string
  EventCategoryMappingsConnection?: (
    data: WithTypename<EventCategoryMappingsConnection>,
  ) => null | string
  EventCategoryMappingsEdge?: (
    data: WithTypename<EventCategoryMappingsEdge>,
  ) => null | string
  EventDeletePayload?: (data: WithTypename<EventDeletePayload>) => null | string
  EventFavorite?: (data: WithTypename<EventFavorite>) => null | string
  EventFavoritesConnection?: (
    data: WithTypename<EventFavoritesConnection>,
  ) => null | string
  EventFavoritesEdge?: (data: WithTypename<EventFavoritesEdge>) => null | string
  EventFormat?: (data: WithTypename<EventFormat>) => null | string
  EventFormatMapping?: (data: WithTypename<EventFormatMapping>) => null | string
  EventFormatMappingsConnection?: (
    data: WithTypename<EventFormatMappingsConnection>,
  ) => null | string
  EventFormatMappingsEdge?: (
    data: WithTypename<EventFormatMappingsEdge>,
  ) => null | string
  EventFormatsConnection?: (
    data: WithTypename<EventFormatsConnection>,
  ) => null | string
  EventFormatsEdge?: (data: WithTypename<EventFormatsEdge>) => null | string
  EventRecommendation?: (
    data: WithTypename<EventRecommendation>,
  ) => null | string
  EventRecommendationsConnection?: (
    data: WithTypename<EventRecommendationsConnection>,
  ) => null | string
  EventRecommendationsEdge?: (
    data: WithTypename<EventRecommendationsEdge>,
  ) => null | string
  EventUnlockPayload?: (data: WithTypename<EventUnlockPayload>) => null | string
  EventUnlockResponse?: (
    data: WithTypename<EventUnlockResponse>,
  ) => null | string
  EventUpload?: (data: WithTypename<EventUpload>) => null | string
  EventUploadsConnection?: (
    data: WithTypename<EventUploadsConnection>,
  ) => null | string
  EventUploadsEdge?: (data: WithTypename<EventUploadsEdge>) => null | string
  EventsConnection?: (data: WithTypename<EventsConnection>) => null | string
  EventsEdge?: (data: WithTypename<EventsEdge>) => null | string
  EventsOrganizedConnection?: (
    data: WithTypename<EventsOrganizedConnection>,
  ) => null | string
  EventsOrganizedEdge?: (
    data: WithTypename<EventsOrganizedEdge>,
  ) => null | string
  Friendship?: (data: WithTypename<Friendship>) => null | string
  FriendshipsConnection?: (
    data: WithTypename<FriendshipsConnection>,
  ) => null | string
  FriendshipsEdge?: (data: WithTypename<FriendshipsEdge>) => null | string
  GeographyPoint?: (data: WithTypename<GeographyPoint>) => null | string
  Guest?: (data: WithTypename<Guest>) => null | string
  GuestContactIdEdge?: (data: WithTypename<GuestContactIdEdge>) => null | string
  GuestContactIdsConnection?: (
    data: WithTypename<GuestContactIdsConnection>,
  ) => null | string
  GuestFlat?: (data: WithTypename<GuestFlat>) => null | string
  GuestFlatsConnection?: (
    data: WithTypename<GuestFlatsConnection>,
  ) => null | string
  GuestFlatsEdge?: (data: WithTypename<GuestFlatsEdge>) => null | string
  GuestsConnection?: (data: WithTypename<GuestsConnection>) => null | string
  GuestsEdge?: (data: WithTypename<GuestsEdge>) => null | string
  InvitePayload?: (data: WithTypename<InvitePayload>) => null | string
  JwtRefreshPayload?: (data: WithTypename<JwtRefreshPayload>) => null | string
  LegalTerm?: (data: WithTypename<LegalTerm>) => null | string
  LegalTermAcceptance?: (
    data: WithTypename<LegalTermAcceptance>,
  ) => null | string
  LegalTermAcceptancesConnection?: (
    data: WithTypename<LegalTermAcceptancesConnection>,
  ) => null | string
  LegalTermAcceptancesEdge?: (
    data: WithTypename<LegalTermAcceptancesEdge>,
  ) => null | string
  LegalTermsConnection?: (
    data: WithTypename<LegalTermsConnection>,
  ) => null | string
  LegalTermsEdge?: (data: WithTypename<LegalTermsEdge>) => null | string
  NotificationAcknowledgePayload?: (
    data: WithTypename<NotificationAcknowledgePayload>,
  ) => null | string
  PageInfo?: (data: WithTypename<PageInfo>) => null | string
  PreferenceEventCategoriesConnection?: (
    data: WithTypename<PreferenceEventCategoriesConnection>,
  ) => null | string
  PreferenceEventCategoriesEdge?: (
    data: WithTypename<PreferenceEventCategoriesEdge>,
  ) => null | string
  PreferenceEventCategory?: (
    data: WithTypename<PreferenceEventCategory>,
  ) => null | string
  PreferenceEventFormat?: (
    data: WithTypename<PreferenceEventFormat>,
  ) => null | string
  PreferenceEventFormatsConnection?: (
    data: WithTypename<PreferenceEventFormatsConnection>,
  ) => null | string
  PreferenceEventFormatsEdge?: (
    data: WithTypename<PreferenceEventFormatsEdge>,
  ) => null | string
  PreferenceEventLocation?: (
    data: WithTypename<PreferenceEventLocation>,
  ) => null | string
  PreferenceEventLocationsConnection?: (
    data: WithTypename<PreferenceEventLocationsConnection>,
  ) => null | string
  PreferenceEventLocationsEdge?: (
    data: WithTypename<PreferenceEventLocationsEdge>,
  ) => null | string
  PreferenceEventSize?: (
    data: WithTypename<PreferenceEventSize>,
  ) => null | string
  PreferenceEventSizesConnection?: (
    data: WithTypename<PreferenceEventSizesConnection>,
  ) => null | string
  PreferenceEventSizesEdge?: (
    data: WithTypename<PreferenceEventSizesEdge>,
  ) => null | string
  ProfilePicture?: (data: WithTypename<ProfilePicture>) => null | string
  ProfilePictureSetPayload?: (
    data: WithTypename<ProfilePictureSetPayload>,
  ) => null | string
  ProfilePicturesConnection?: (
    data: WithTypename<ProfilePicturesConnection>,
  ) => null | string
  ProfilePicturesEdge?: (
    data: WithTypename<ProfilePicturesEdge>,
  ) => null | string
  Report?: (data: WithTypename<Report>) => null | string
  ReportsConnection?: (data: WithTypename<ReportsConnection>) => null | string
  ReportsEdge?: (data: WithTypename<ReportsEdge>) => null | string
  UpdateAccountLocationPayload?: (
    data: WithTypename<UpdateAccountLocationPayload>,
  ) => null | string
  UpdateAccountPayload?: (
    data: WithTypename<UpdateAccountPayload>,
  ) => null | string
  UpdateAccountSocialNetworkPayload?: (
    data: WithTypename<UpdateAccountSocialNetworkPayload>,
  ) => null | string
  UpdateAchievementPayload?: (
    data: WithTypename<UpdateAchievementPayload>,
  ) => null | string
  UpdateAddressPayload?: (
    data: WithTypename<UpdateAddressPayload>,
  ) => null | string
  UpdateContactPayload?: (
    data: WithTypename<UpdateContactPayload>,
  ) => null | string
  UpdateDevicePayload?: (
    data: WithTypename<UpdateDevicePayload>,
  ) => null | string
  UpdateEventCategoryMappingPayload?: (
    data: WithTypename<UpdateEventCategoryMappingPayload>,
  ) => null | string
  UpdateEventFormatMappingPayload?: (
    data: WithTypename<UpdateEventFormatMappingPayload>,
  ) => null | string
  UpdateEventPayload?: (data: WithTypename<UpdateEventPayload>) => null | string
  UpdateEventRecommendationPayload?: (
    data: WithTypename<UpdateEventRecommendationPayload>,
  ) => null | string
  UpdateEventUploadPayload?: (
    data: WithTypename<UpdateEventUploadPayload>,
  ) => null | string
  UpdateFriendshipPayload?: (
    data: WithTypename<UpdateFriendshipPayload>,
  ) => null | string
  UpdateGuestPayload?: (data: WithTypename<UpdateGuestPayload>) => null | string
  UpdatePreferenceEventCategoryPayload?: (
    data: WithTypename<UpdatePreferenceEventCategoryPayload>,
  ) => null | string
  UpdatePreferenceEventFormatPayload?: (
    data: WithTypename<UpdatePreferenceEventFormatPayload>,
  ) => null | string
  UpdatePreferenceEventLocationPayload?: (
    data: WithTypename<UpdatePreferenceEventLocationPayload>,
  ) => null | string
  UpdatePreferenceEventSizePayload?: (
    data: WithTypename<UpdatePreferenceEventSizePayload>,
  ) => null | string
  UpdateProfilePicturePayload?: (
    data: WithTypename<UpdateProfilePicturePayload>,
  ) => null | string
  UpdateUploadPayload?: (
    data: WithTypename<UpdateUploadPayload>,
  ) => null | string
  Upload?: (data: WithTypename<Upload>) => null | string
  UploadsConnection?: (data: WithTypename<UploadsConnection>) => null | string
  UploadsEdge?: (data: WithTypename<UploadsEdge>) => null | string
}

export type GraphCacheResolvers = {
  Query?: {
    account?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAccountArgs,
      WithTypename<Account> | string
    >
    accountBlock?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAccountBlockArgs,
      WithTypename<AccountBlock> | string
    >
    accountBlockByCreatedByAndBlockedAccountId?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAccountBlockByCreatedByAndBlockedAccountIdArgs,
      WithTypename<AccountBlock> | string
    >
    accountBlockById?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAccountBlockByIdArgs,
      WithTypename<AccountBlock> | string
    >
    accountById?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAccountByIdArgs,
      WithTypename<Account> | string
    >
    accountByUsername?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAccountByUsernameArgs,
      WithTypename<Account> | string
    >
    accountSocialNetwork?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAccountSocialNetworkArgs,
      WithTypename<AccountSocialNetwork> | string
    >
    accountSocialNetworkByAccountIdAndSocialNetwork?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAccountSocialNetworkByAccountIdAndSocialNetworkArgs,
      WithTypename<AccountSocialNetwork> | string
    >
    accountUploadQuotaBytes?: GraphCacheResolver<
      WithTypename<Query>,
      Record<string, never>,
      Scalars['BigInt'] | string
    >
    achievement?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAchievementArgs,
      WithTypename<Achievement> | string
    >
    achievementByAccountIdAndAchievement?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAchievementByAccountIdAndAchievementArgs,
      WithTypename<Achievement> | string
    >
    achievementById?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAchievementByIdArgs,
      WithTypename<Achievement> | string
    >
    address?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAddressArgs,
      WithTypename<Address> | string
    >
    addressById?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAddressByIdArgs,
      WithTypename<Address> | string
    >
    allAccountBlocks?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllAccountBlocksArgs,
      WithTypename<AccountBlocksConnection> | string
    >
    allAccountSocialNetworks?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllAccountSocialNetworksArgs,
      WithTypename<AccountSocialNetworksConnection> | string
    >
    allAccounts?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllAccountsArgs,
      WithTypename<AccountsConnection> | string
    >
    allAchievements?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllAchievementsArgs,
      WithTypename<AchievementsConnection> | string
    >
    allAddresses?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllAddressesArgs,
      WithTypename<AddressesConnection> | string
    >
    allContacts?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllContactsArgs,
      WithTypename<ContactsConnection> | string
    >
    allDevices?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllDevicesArgs,
      WithTypename<DevicesConnection> | string
    >
    allEventCategories?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllEventCategoriesArgs,
      WithTypename<EventCategoriesConnection> | string
    >
    allEventCategoryMappings?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllEventCategoryMappingsArgs,
      WithTypename<EventCategoryMappingsConnection> | string
    >
    allEventFavorites?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllEventFavoritesArgs,
      WithTypename<EventFavoritesConnection> | string
    >
    allEventFormatMappings?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllEventFormatMappingsArgs,
      WithTypename<EventFormatMappingsConnection> | string
    >
    allEventFormats?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllEventFormatsArgs,
      WithTypename<EventFormatsConnection> | string
    >
    allEventRecommendations?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllEventRecommendationsArgs,
      WithTypename<EventRecommendationsConnection> | string
    >
    allEventUploads?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllEventUploadsArgs,
      WithTypename<EventUploadsConnection> | string
    >
    allEvents?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllEventsArgs,
      WithTypename<EventsConnection> | string
    >
    allFriendships?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllFriendshipsArgs,
      WithTypename<FriendshipsConnection> | string
    >
    allGuestFlats?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllGuestFlatsArgs,
      WithTypename<GuestFlatsConnection> | string
    >
    allGuests?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllGuestsArgs,
      WithTypename<GuestsConnection> | string
    >
    allLegalTermAcceptances?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllLegalTermAcceptancesArgs,
      WithTypename<LegalTermAcceptancesConnection> | string
    >
    allLegalTerms?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllLegalTermsArgs,
      WithTypename<LegalTermsConnection> | string
    >
    allPreferenceEventCategories?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllPreferenceEventCategoriesArgs,
      WithTypename<PreferenceEventCategoriesConnection> | string
    >
    allPreferenceEventFormats?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllPreferenceEventFormatsArgs,
      WithTypename<PreferenceEventFormatsConnection> | string
    >
    allPreferenceEventLocations?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllPreferenceEventLocationsArgs,
      WithTypename<PreferenceEventLocationsConnection> | string
    >
    allPreferenceEventSizes?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllPreferenceEventSizesArgs,
      WithTypename<PreferenceEventSizesConnection> | string
    >
    allProfilePictures?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllProfilePicturesArgs,
      WithTypename<ProfilePicturesConnection> | string
    >
    allReports?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllReportsArgs,
      WithTypename<ReportsConnection> | string
    >
    allUploads?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllUploadsArgs,
      WithTypename<UploadsConnection> | string
    >
    contact?: GraphCacheResolver<
      WithTypename<Query>,
      QueryContactArgs,
      WithTypename<Contact> | string
    >
    contactByCreatedByAndAccountId?: GraphCacheResolver<
      WithTypename<Query>,
      QueryContactByCreatedByAndAccountIdArgs,
      WithTypename<Contact> | string
    >
    contactById?: GraphCacheResolver<
      WithTypename<Query>,
      QueryContactByIdArgs,
      WithTypename<Contact> | string
    >
    device?: GraphCacheResolver<
      WithTypename<Query>,
      QueryDeviceArgs,
      WithTypename<Device> | string
    >
    deviceByCreatedByAndFcmToken?: GraphCacheResolver<
      WithTypename<Query>,
      QueryDeviceByCreatedByAndFcmTokenArgs,
      WithTypename<Device> | string
    >
    deviceById?: GraphCacheResolver<
      WithTypename<Query>,
      QueryDeviceByIdArgs,
      WithTypename<Device> | string
    >
    event?: GraphCacheResolver<
      WithTypename<Query>,
      QueryEventArgs,
      WithTypename<Event> | string
    >
    eventByCreatedByAndSlug?: GraphCacheResolver<
      WithTypename<Query>,
      QueryEventByCreatedByAndSlugArgs,
      WithTypename<Event> | string
    >
    eventById?: GraphCacheResolver<
      WithTypename<Query>,
      QueryEventByIdArgs,
      WithTypename<Event> | string
    >
    eventCategory?: GraphCacheResolver<
      WithTypename<Query>,
      QueryEventCategoryArgs,
      WithTypename<EventCategory> | string
    >
    eventCategoryById?: GraphCacheResolver<
      WithTypename<Query>,
      QueryEventCategoryByIdArgs,
      WithTypename<EventCategory> | string
    >
    eventCategoryByName?: GraphCacheResolver<
      WithTypename<Query>,
      QueryEventCategoryByNameArgs,
      WithTypename<EventCategory> | string
    >
    eventCategoryMapping?: GraphCacheResolver<
      WithTypename<Query>,
      QueryEventCategoryMappingArgs,
      WithTypename<EventCategoryMapping> | string
    >
    eventCategoryMappingByEventIdAndCategoryId?: GraphCacheResolver<
      WithTypename<Query>,
      QueryEventCategoryMappingByEventIdAndCategoryIdArgs,
      WithTypename<EventCategoryMapping> | string
    >
    eventFavorite?: GraphCacheResolver<
      WithTypename<Query>,
      QueryEventFavoriteArgs,
      WithTypename<EventFavorite> | string
    >
    eventFavoriteByCreatedByAndEventId?: GraphCacheResolver<
      WithTypename<Query>,
      QueryEventFavoriteByCreatedByAndEventIdArgs,
      WithTypename<EventFavorite> | string
    >
    eventFavoriteById?: GraphCacheResolver<
      WithTypename<Query>,
      QueryEventFavoriteByIdArgs,
      WithTypename<EventFavorite> | string
    >
    eventFormat?: GraphCacheResolver<
      WithTypename<Query>,
      QueryEventFormatArgs,
      WithTypename<EventFormat> | string
    >
    eventFormatById?: GraphCacheResolver<
      WithTypename<Query>,
      QueryEventFormatByIdArgs,
      WithTypename<EventFormat> | string
    >
    eventFormatByName?: GraphCacheResolver<
      WithTypename<Query>,
      QueryEventFormatByNameArgs,
      WithTypename<EventFormat> | string
    >
    eventFormatMapping?: GraphCacheResolver<
      WithTypename<Query>,
      QueryEventFormatMappingArgs,
      WithTypename<EventFormatMapping> | string
    >
    eventFormatMappingByEventIdAndFormatId?: GraphCacheResolver<
      WithTypename<Query>,
      QueryEventFormatMappingByEventIdAndFormatIdArgs,
      WithTypename<EventFormatMapping> | string
    >
    eventGuestCountMaximum?: GraphCacheResolver<
      WithTypename<Query>,
      QueryEventGuestCountMaximumArgs,
      Scalars['Int'] | string
    >
    eventRecommendation?: GraphCacheResolver<
      WithTypename<Query>,
      QueryEventRecommendationArgs,
      WithTypename<EventRecommendation> | string
    >
    eventRecommendationByAccountIdAndEventId?: GraphCacheResolver<
      WithTypename<Query>,
      QueryEventRecommendationByAccountIdAndEventIdArgs,
      WithTypename<EventRecommendation> | string
    >
    eventSearch?: GraphCacheResolver<
      WithTypename<Query>,
      QueryEventSearchArgs,
      WithTypename<EventsConnection> | string
    >
    eventUpload?: GraphCacheResolver<
      WithTypename<Query>,
      QueryEventUploadArgs,
      WithTypename<EventUpload> | string
    >
    eventUploadByEventIdAndUploadId?: GraphCacheResolver<
      WithTypename<Query>,
      QueryEventUploadByEventIdAndUploadIdArgs,
      WithTypename<EventUpload> | string
    >
    eventUploadById?: GraphCacheResolver<
      WithTypename<Query>,
      QueryEventUploadByIdArgs,
      WithTypename<EventUpload> | string
    >
    eventsOrganized?: GraphCacheResolver<
      WithTypename<Query>,
      QueryEventsOrganizedArgs,
      WithTypename<EventsOrganizedConnection> | string
    >
    friendship?: GraphCacheResolver<
      WithTypename<Query>,
      QueryFriendshipArgs,
      WithTypename<Friendship> | string
    >
    friendshipByAAccountIdAndBAccountId?: GraphCacheResolver<
      WithTypename<Query>,
      QueryFriendshipByAAccountIdAndBAccountIdArgs,
      WithTypename<Friendship> | string
    >
    friendshipById?: GraphCacheResolver<
      WithTypename<Query>,
      QueryFriendshipByIdArgs,
      WithTypename<Friendship> | string
    >
    guest?: GraphCacheResolver<
      WithTypename<Query>,
      QueryGuestArgs,
      WithTypename<Guest> | string
    >
    guestByEventIdAndContactId?: GraphCacheResolver<
      WithTypename<Query>,
      QueryGuestByEventIdAndContactIdArgs,
      WithTypename<Guest> | string
    >
    guestById?: GraphCacheResolver<
      WithTypename<Query>,
      QueryGuestByIdArgs,
      WithTypename<Guest> | string
    >
    guestClaimArray?: GraphCacheResolver<
      WithTypename<Query>,
      Record<string, never>,
      Array<Scalars['UUID'] | string>
    >
    guestContactIds?: GraphCacheResolver<
      WithTypename<Query>,
      QueryGuestContactIdsArgs,
      WithTypename<GuestContactIdsConnection> | string
    >
    guestCount?: GraphCacheResolver<
      WithTypename<Query>,
      QueryGuestCountArgs,
      Scalars['Int'] | string
    >
    invokerAccountId?: GraphCacheResolver<
      WithTypename<Query>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    languageIsoFullTextSearch?: GraphCacheResolver<
      WithTypename<Query>,
      QueryLanguageIsoFullTextSearchArgs,
      Scalars['RegConfig'] | string
    >
    legalTerm?: GraphCacheResolver<
      WithTypename<Query>,
      QueryLegalTermArgs,
      WithTypename<LegalTerm> | string
    >
    legalTermAcceptance?: GraphCacheResolver<
      WithTypename<Query>,
      QueryLegalTermAcceptanceArgs,
      WithTypename<LegalTermAcceptance> | string
    >
    legalTermAcceptanceById?: GraphCacheResolver<
      WithTypename<Query>,
      QueryLegalTermAcceptanceByIdArgs,
      WithTypename<LegalTermAcceptance> | string
    >
    legalTermById?: GraphCacheResolver<
      WithTypename<Query>,
      QueryLegalTermByIdArgs,
      WithTypename<LegalTerm> | string
    >
    legalTermByLanguageAndVersion?: GraphCacheResolver<
      WithTypename<Query>,
      QueryLegalTermByLanguageAndVersionArgs,
      WithTypename<LegalTerm> | string
    >
    node?: GraphCacheResolver<
      WithTypename<Query>,
      QueryNodeArgs,
      | WithTypename<Account>
      | WithTypename<AccountBlock>
      | WithTypename<AccountSocialNetwork>
      | WithTypename<Achievement>
      | WithTypename<Address>
      | WithTypename<Contact>
      | WithTypename<Device>
      | WithTypename<Event>
      | WithTypename<EventCategory>
      | WithTypename<EventCategoryMapping>
      | WithTypename<EventFavorite>
      | WithTypename<EventFormat>
      | WithTypename<EventFormatMapping>
      | WithTypename<EventRecommendation>
      | WithTypename<EventUpload>
      | WithTypename<Friendship>
      | WithTypename<Guest>
      | WithTypename<LegalTerm>
      | WithTypename<LegalTermAcceptance>
      | WithTypename<PreferenceEventCategory>
      | WithTypename<PreferenceEventFormat>
      | WithTypename<PreferenceEventLocation>
      | WithTypename<PreferenceEventSize>
      | WithTypename<ProfilePicture>
      | WithTypename<Query>
      | WithTypename<Report>
      | WithTypename<Upload>
      | string
    >
    nodeId?: GraphCacheResolver<
      WithTypename<Query>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    preferenceEventCategory?: GraphCacheResolver<
      WithTypename<Query>,
      QueryPreferenceEventCategoryArgs,
      WithTypename<PreferenceEventCategory> | string
    >
    preferenceEventCategoryByAccountIdAndCategoryId?: GraphCacheResolver<
      WithTypename<Query>,
      QueryPreferenceEventCategoryByAccountIdAndCategoryIdArgs,
      WithTypename<PreferenceEventCategory> | string
    >
    preferenceEventCategoryById?: GraphCacheResolver<
      WithTypename<Query>,
      QueryPreferenceEventCategoryByIdArgs,
      WithTypename<PreferenceEventCategory> | string
    >
    preferenceEventFormat?: GraphCacheResolver<
      WithTypename<Query>,
      QueryPreferenceEventFormatArgs,
      WithTypename<PreferenceEventFormat> | string
    >
    preferenceEventFormatByAccountIdAndFormatId?: GraphCacheResolver<
      WithTypename<Query>,
      QueryPreferenceEventFormatByAccountIdAndFormatIdArgs,
      WithTypename<PreferenceEventFormat> | string
    >
    preferenceEventFormatById?: GraphCacheResolver<
      WithTypename<Query>,
      QueryPreferenceEventFormatByIdArgs,
      WithTypename<PreferenceEventFormat> | string
    >
    preferenceEventLocation?: GraphCacheResolver<
      WithTypename<Query>,
      QueryPreferenceEventLocationArgs,
      WithTypename<PreferenceEventLocation> | string
    >
    preferenceEventLocationByCreatedByAndLocationAndRadius?: GraphCacheResolver<
      WithTypename<Query>,
      QueryPreferenceEventLocationByCreatedByAndLocationAndRadiusArgs,
      WithTypename<PreferenceEventLocation> | string
    >
    preferenceEventLocationById?: GraphCacheResolver<
      WithTypename<Query>,
      QueryPreferenceEventLocationByIdArgs,
      WithTypename<PreferenceEventLocation> | string
    >
    preferenceEventSize?: GraphCacheResolver<
      WithTypename<Query>,
      QueryPreferenceEventSizeArgs,
      WithTypename<PreferenceEventSize> | string
    >
    preferenceEventSizeByAccountIdAndEventSize?: GraphCacheResolver<
      WithTypename<Query>,
      QueryPreferenceEventSizeByAccountIdAndEventSizeArgs,
      WithTypename<PreferenceEventSize> | string
    >
    preferenceEventSizeById?: GraphCacheResolver<
      WithTypename<Query>,
      QueryPreferenceEventSizeByIdArgs,
      WithTypename<PreferenceEventSize> | string
    >
    profilePicture?: GraphCacheResolver<
      WithTypename<Query>,
      QueryProfilePictureArgs,
      WithTypename<ProfilePicture> | string
    >
    profilePictureByAccountId?: GraphCacheResolver<
      WithTypename<Query>,
      QueryProfilePictureByAccountIdArgs,
      WithTypename<ProfilePicture> | string
    >
    profilePictureById?: GraphCacheResolver<
      WithTypename<Query>,
      QueryProfilePictureByIdArgs,
      WithTypename<ProfilePicture> | string
    >
    query?: GraphCacheResolver<
      WithTypename<Query>,
      Record<string, never>,
      WithTypename<Query> | string
    >
    report?: GraphCacheResolver<
      WithTypename<Query>,
      QueryReportArgs,
      WithTypename<Report> | string
    >
    reportByCreatedByAndTargetAccountIdAndTargetEventIdAndTargetUploadId?: GraphCacheResolver<
      WithTypename<Query>,
      QueryReportByCreatedByAndTargetAccountIdAndTargetEventIdAndTargetUploadIdArgs,
      WithTypename<Report> | string
    >
    reportById?: GraphCacheResolver<
      WithTypename<Query>,
      QueryReportByIdArgs,
      WithTypename<Report> | string
    >
    upload?: GraphCacheResolver<
      WithTypename<Query>,
      QueryUploadArgs,
      WithTypename<Upload> | string
    >
    uploadById?: GraphCacheResolver<
      WithTypename<Query>,
      QueryUploadByIdArgs,
      WithTypename<Upload> | string
    >
    uploadByStorageKey?: GraphCacheResolver<
      WithTypename<Query>,
      QueryUploadByStorageKeyArgs,
      WithTypename<Upload> | string
    >
  }
  Account?: {
    accountBlocksByBlockedAccountId?: GraphCacheResolver<
      WithTypename<Account>,
      AccountAccountBlocksByBlockedAccountIdArgs,
      WithTypename<AccountBlocksConnection> | string
    >
    accountBlocksByCreatedBy?: GraphCacheResolver<
      WithTypename<Account>,
      AccountAccountBlocksByCreatedByArgs,
      WithTypename<AccountBlocksConnection> | string
    >
    accountSocialNetworksByAccountId?: GraphCacheResolver<
      WithTypename<Account>,
      AccountAccountSocialNetworksByAccountIdArgs,
      WithTypename<AccountSocialNetworksConnection> | string
    >
    achievementsByAccountId?: GraphCacheResolver<
      WithTypename<Account>,
      AccountAchievementsByAccountIdArgs,
      WithTypename<AchievementsConnection> | string
    >
    addressesByCreatedBy?: GraphCacheResolver<
      WithTypename<Account>,
      AccountAddressesByCreatedByArgs,
      WithTypename<AddressesConnection> | string
    >
    addressesByUpdatedBy?: GraphCacheResolver<
      WithTypename<Account>,
      AccountAddressesByUpdatedByArgs,
      WithTypename<AddressesConnection> | string
    >
    contactsByAccountId?: GraphCacheResolver<
      WithTypename<Account>,
      AccountContactsByAccountIdArgs,
      WithTypename<ContactsConnection> | string
    >
    contactsByCreatedBy?: GraphCacheResolver<
      WithTypename<Account>,
      AccountContactsByCreatedByArgs,
      WithTypename<ContactsConnection> | string
    >
    description?: GraphCacheResolver<
      WithTypename<Account>,
      Record<string, never>,
      Scalars['String'] | string
    >
    devicesByCreatedBy?: GraphCacheResolver<
      WithTypename<Account>,
      AccountDevicesByCreatedByArgs,
      WithTypename<DevicesConnection> | string
    >
    devicesByUpdatedBy?: GraphCacheResolver<
      WithTypename<Account>,
      AccountDevicesByUpdatedByArgs,
      WithTypename<DevicesConnection> | string
    >
    eventFavoritesByCreatedBy?: GraphCacheResolver<
      WithTypename<Account>,
      AccountEventFavoritesByCreatedByArgs,
      WithTypename<EventFavoritesConnection> | string
    >
    eventRecommendationsByAccountId?: GraphCacheResolver<
      WithTypename<Account>,
      AccountEventRecommendationsByAccountIdArgs,
      WithTypename<EventRecommendationsConnection> | string
    >
    eventsByCreatedBy?: GraphCacheResolver<
      WithTypename<Account>,
      AccountEventsByCreatedByArgs,
      WithTypename<EventsConnection> | string
    >
    friendshipsByAAccountId?: GraphCacheResolver<
      WithTypename<Account>,
      AccountFriendshipsByAAccountIdArgs,
      WithTypename<FriendshipsConnection> | string
    >
    friendshipsByBAccountId?: GraphCacheResolver<
      WithTypename<Account>,
      AccountFriendshipsByBAccountIdArgs,
      WithTypename<FriendshipsConnection> | string
    >
    friendshipsByCreatedBy?: GraphCacheResolver<
      WithTypename<Account>,
      AccountFriendshipsByCreatedByArgs,
      WithTypename<FriendshipsConnection> | string
    >
    friendshipsByUpdatedBy?: GraphCacheResolver<
      WithTypename<Account>,
      AccountFriendshipsByUpdatedByArgs,
      WithTypename<FriendshipsConnection> | string
    >
    guestsByUpdatedBy?: GraphCacheResolver<
      WithTypename<Account>,
      AccountGuestsByUpdatedByArgs,
      WithTypename<GuestsConnection> | string
    >
    id?: GraphCacheResolver<
      WithTypename<Account>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    imprint?: GraphCacheResolver<
      WithTypename<Account>,
      Record<string, never>,
      Scalars['String'] | string
    >
    legalTermAcceptancesByAccountId?: GraphCacheResolver<
      WithTypename<Account>,
      AccountLegalTermAcceptancesByAccountIdArgs,
      WithTypename<LegalTermAcceptancesConnection> | string
    >
    nodeId?: GraphCacheResolver<
      WithTypename<Account>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    preferenceEventCategoriesByAccountId?: GraphCacheResolver<
      WithTypename<Account>,
      AccountPreferenceEventCategoriesByAccountIdArgs,
      WithTypename<PreferenceEventCategoriesConnection> | string
    >
    preferenceEventFormatsByAccountId?: GraphCacheResolver<
      WithTypename<Account>,
      AccountPreferenceEventFormatsByAccountIdArgs,
      WithTypename<PreferenceEventFormatsConnection> | string
    >
    preferenceEventLocationsByCreatedBy?: GraphCacheResolver<
      WithTypename<Account>,
      AccountPreferenceEventLocationsByCreatedByArgs,
      WithTypename<PreferenceEventLocationsConnection> | string
    >
    preferenceEventSizesByAccountId?: GraphCacheResolver<
      WithTypename<Account>,
      AccountPreferenceEventSizesByAccountIdArgs,
      WithTypename<PreferenceEventSizesConnection> | string
    >
    profilePictureByAccountId?: GraphCacheResolver<
      WithTypename<Account>,
      Record<string, never>,
      WithTypename<ProfilePicture> | string
    >
    profilePicturesByAccountId?: GraphCacheResolver<
      WithTypename<Account>,
      AccountProfilePicturesByAccountIdArgs,
      WithTypename<ProfilePicturesConnection> | string
    >
    reportsByCreatedBy?: GraphCacheResolver<
      WithTypename<Account>,
      AccountReportsByCreatedByArgs,
      WithTypename<ReportsConnection> | string
    >
    reportsByTargetAccountId?: GraphCacheResolver<
      WithTypename<Account>,
      AccountReportsByTargetAccountIdArgs,
      WithTypename<ReportsConnection> | string
    >
    uploadsByCreatedBy?: GraphCacheResolver<
      WithTypename<Account>,
      AccountUploadsByCreatedByArgs,
      WithTypename<UploadsConnection> | string
    >
    username?: GraphCacheResolver<
      WithTypename<Account>,
      Record<string, never>,
      Scalars['String'] | string
    >
  }
  AccountBlock?: {
    accountByBlockedAccountId?: GraphCacheResolver<
      WithTypename<AccountBlock>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    accountByCreatedBy?: GraphCacheResolver<
      WithTypename<AccountBlock>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    blockedAccountId?: GraphCacheResolver<
      WithTypename<AccountBlock>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    createdAt?: GraphCacheResolver<
      WithTypename<AccountBlock>,
      Record<string, never>,
      Scalars['Datetime'] | string
    >
    createdBy?: GraphCacheResolver<
      WithTypename<AccountBlock>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    id?: GraphCacheResolver<
      WithTypename<AccountBlock>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    nodeId?: GraphCacheResolver<
      WithTypename<AccountBlock>,
      Record<string, never>,
      Scalars['ID'] | string
    >
  }
  AccountBlocksConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<AccountBlocksConnection>,
      Record<string, never>,
      Array<WithTypename<AccountBlocksEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<AccountBlocksConnection>,
      Record<string, never>,
      Array<WithTypename<AccountBlock> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<AccountBlocksConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<AccountBlocksConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  AccountBlocksEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<AccountBlocksEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<AccountBlocksEdge>,
      Record<string, never>,
      WithTypename<AccountBlock> | string
    >
  }
  AccountDeletePayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<AccountDeletePayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    query?: GraphCacheResolver<
      WithTypename<AccountDeletePayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  AccountEmailAddressVerificationPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<AccountEmailAddressVerificationPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    query?: GraphCacheResolver<
      WithTypename<AccountEmailAddressVerificationPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  AccountPasswordChangePayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<AccountPasswordChangePayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    query?: GraphCacheResolver<
      WithTypename<AccountPasswordChangePayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  AccountPasswordResetPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<AccountPasswordResetPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    query?: GraphCacheResolver<
      WithTypename<AccountPasswordResetPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  AccountPasswordResetRequestPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<AccountPasswordResetRequestPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    query?: GraphCacheResolver<
      WithTypename<AccountPasswordResetRequestPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  AccountRegistrationPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<AccountRegistrationPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    query?: GraphCacheResolver<
      WithTypename<AccountRegistrationPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  AccountRegistrationRefreshPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<AccountRegistrationRefreshPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    query?: GraphCacheResolver<
      WithTypename<AccountRegistrationRefreshPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  AccountSocialNetwork?: {
    accountByAccountId?: GraphCacheResolver<
      WithTypename<AccountSocialNetwork>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    accountId?: GraphCacheResolver<
      WithTypename<AccountSocialNetwork>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    nodeId?: GraphCacheResolver<
      WithTypename<AccountSocialNetwork>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    socialNetwork?: GraphCacheResolver<
      WithTypename<AccountSocialNetwork>,
      Record<string, never>,
      SocialNetwork | string
    >
    socialNetworkUsername?: GraphCacheResolver<
      WithTypename<AccountSocialNetwork>,
      Record<string, never>,
      Scalars['String'] | string
    >
  }
  AccountSocialNetworksConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<AccountSocialNetworksConnection>,
      Record<string, never>,
      Array<WithTypename<AccountSocialNetworksEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<AccountSocialNetworksConnection>,
      Record<string, never>,
      Array<WithTypename<AccountSocialNetwork> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<AccountSocialNetworksConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<AccountSocialNetworksConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  AccountSocialNetworksEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<AccountSocialNetworksEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<AccountSocialNetworksEdge>,
      Record<string, never>,
      WithTypename<AccountSocialNetwork> | string
    >
  }
  AccountsConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<AccountsConnection>,
      Record<string, never>,
      Array<WithTypename<AccountsEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<AccountsConnection>,
      Record<string, never>,
      Array<WithTypename<Account> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<AccountsConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<AccountsConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  AccountsEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<AccountsEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<AccountsEdge>,
      Record<string, never>,
      WithTypename<Account> | string
    >
  }
  Achievement?: {
    accountByAccountId?: GraphCacheResolver<
      WithTypename<Achievement>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    accountId?: GraphCacheResolver<
      WithTypename<Achievement>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    achievement?: GraphCacheResolver<
      WithTypename<Achievement>,
      Record<string, never>,
      AchievementType | string
    >
    id?: GraphCacheResolver<
      WithTypename<Achievement>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    level?: GraphCacheResolver<
      WithTypename<Achievement>,
      Record<string, never>,
      Scalars['Int'] | string
    >
    nodeId?: GraphCacheResolver<
      WithTypename<Achievement>,
      Record<string, never>,
      Scalars['ID'] | string
    >
  }
  AchievementUnlockPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<AchievementUnlockPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    query?: GraphCacheResolver<
      WithTypename<AchievementUnlockPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
    uuid?: GraphCacheResolver<
      WithTypename<AchievementUnlockPayload>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
  }
  AchievementsConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<AchievementsConnection>,
      Record<string, never>,
      Array<WithTypename<AchievementsEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<AchievementsConnection>,
      Record<string, never>,
      Array<WithTypename<Achievement> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<AchievementsConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<AchievementsConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  AchievementsEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<AchievementsEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<AchievementsEdge>,
      Record<string, never>,
      WithTypename<Achievement> | string
    >
  }
  Address?: {
    accountByCreatedBy?: GraphCacheResolver<
      WithTypename<Address>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    accountByUpdatedBy?: GraphCacheResolver<
      WithTypename<Address>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    city?: GraphCacheResolver<
      WithTypename<Address>,
      Record<string, never>,
      Scalars['String'] | string
    >
    contactsByAddressId?: GraphCacheResolver<
      WithTypename<Address>,
      AddressContactsByAddressIdArgs,
      WithTypename<ContactsConnection> | string
    >
    country?: GraphCacheResolver<
      WithTypename<Address>,
      Record<string, never>,
      Scalars['String'] | string
    >
    createdAt?: GraphCacheResolver<
      WithTypename<Address>,
      Record<string, never>,
      Scalars['Datetime'] | string
    >
    createdBy?: GraphCacheResolver<
      WithTypename<Address>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    eventsByAddressId?: GraphCacheResolver<
      WithTypename<Address>,
      AddressEventsByAddressIdArgs,
      WithTypename<EventsConnection> | string
    >
    id?: GraphCacheResolver<
      WithTypename<Address>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    line1?: GraphCacheResolver<
      WithTypename<Address>,
      Record<string, never>,
      Scalars['String'] | string
    >
    line2?: GraphCacheResolver<
      WithTypename<Address>,
      Record<string, never>,
      Scalars['String'] | string
    >
    location?: GraphCacheResolver<
      WithTypename<Address>,
      Record<string, never>,
      WithTypename<GeographyPoint> | string
    >
    name?: GraphCacheResolver<
      WithTypename<Address>,
      Record<string, never>,
      Scalars['String'] | string
    >
    nodeId?: GraphCacheResolver<
      WithTypename<Address>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    postalCode?: GraphCacheResolver<
      WithTypename<Address>,
      Record<string, never>,
      Scalars['String'] | string
    >
    region?: GraphCacheResolver<
      WithTypename<Address>,
      Record<string, never>,
      Scalars['String'] | string
    >
    updatedAt?: GraphCacheResolver<
      WithTypename<Address>,
      Record<string, never>,
      Scalars['Datetime'] | string
    >
    updatedBy?: GraphCacheResolver<
      WithTypename<Address>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
  }
  AddressesConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<AddressesConnection>,
      Record<string, never>,
      Array<WithTypename<AddressesEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<AddressesConnection>,
      Record<string, never>,
      Array<WithTypename<Address> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<AddressesConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<AddressesConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  AddressesEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<AddressesEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<AddressesEdge>,
      Record<string, never>,
      WithTypename<Address> | string
    >
  }
  AuthenticatePayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<AuthenticatePayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    jwt?: GraphCacheResolver<
      WithTypename<AuthenticatePayload>,
      Record<string, never>,
      Scalars['Jwt'] | string
    >
    query?: GraphCacheResolver<
      WithTypename<AuthenticatePayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  Contact?: {
    accountByAccountId?: GraphCacheResolver<
      WithTypename<Contact>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    accountByCreatedBy?: GraphCacheResolver<
      WithTypename<Contact>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    accountId?: GraphCacheResolver<
      WithTypename<Contact>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    addressByAddressId?: GraphCacheResolver<
      WithTypename<Contact>,
      Record<string, never>,
      WithTypename<Address> | string
    >
    addressId?: GraphCacheResolver<
      WithTypename<Contact>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    createdAt?: GraphCacheResolver<
      WithTypename<Contact>,
      Record<string, never>,
      Scalars['Datetime'] | string
    >
    createdBy?: GraphCacheResolver<
      WithTypename<Contact>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    emailAddress?: GraphCacheResolver<
      WithTypename<Contact>,
      Record<string, never>,
      Scalars['String'] | string
    >
    emailAddressHash?: GraphCacheResolver<
      WithTypename<Contact>,
      Record<string, never>,
      Scalars['String'] | string
    >
    firstName?: GraphCacheResolver<
      WithTypename<Contact>,
      Record<string, never>,
      Scalars['String'] | string
    >
    guestsByContactId?: GraphCacheResolver<
      WithTypename<Contact>,
      ContactGuestsByContactIdArgs,
      WithTypename<GuestsConnection> | string
    >
    id?: GraphCacheResolver<
      WithTypename<Contact>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    language?: GraphCacheResolver<
      WithTypename<Contact>,
      Record<string, never>,
      Language | string
    >
    lastName?: GraphCacheResolver<
      WithTypename<Contact>,
      Record<string, never>,
      Scalars['String'] | string
    >
    nickname?: GraphCacheResolver<
      WithTypename<Contact>,
      Record<string, never>,
      Scalars['String'] | string
    >
    nodeId?: GraphCacheResolver<
      WithTypename<Contact>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    note?: GraphCacheResolver<
      WithTypename<Contact>,
      Record<string, never>,
      Scalars['String'] | string
    >
    phoneNumber?: GraphCacheResolver<
      WithTypename<Contact>,
      Record<string, never>,
      Scalars['String'] | string
    >
    timezone?: GraphCacheResolver<
      WithTypename<Contact>,
      Record<string, never>,
      Scalars['String'] | string
    >
    url?: GraphCacheResolver<
      WithTypename<Contact>,
      Record<string, never>,
      Scalars['String'] | string
    >
  }
  ContactsConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<ContactsConnection>,
      Record<string, never>,
      Array<WithTypename<ContactsEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<ContactsConnection>,
      Record<string, never>,
      Array<WithTypename<Contact> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<ContactsConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<ContactsConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  ContactsEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<ContactsEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<ContactsEdge>,
      Record<string, never>,
      WithTypename<Contact> | string
    >
  }
  CreateAccountBlockPayload?: {
    accountBlock?: GraphCacheResolver<
      WithTypename<CreateAccountBlockPayload>,
      Record<string, never>,
      WithTypename<AccountBlock> | string
    >
    accountBlockEdge?: GraphCacheResolver<
      WithTypename<CreateAccountBlockPayload>,
      CreateAccountBlockPayloadAccountBlockEdgeArgs,
      WithTypename<AccountBlocksEdge> | string
    >
    accountByBlockedAccountId?: GraphCacheResolver<
      WithTypename<CreateAccountBlockPayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    accountByCreatedBy?: GraphCacheResolver<
      WithTypename<CreateAccountBlockPayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    clientMutationId?: GraphCacheResolver<
      WithTypename<CreateAccountBlockPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    query?: GraphCacheResolver<
      WithTypename<CreateAccountBlockPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  CreateAccountSocialNetworkPayload?: {
    accountByAccountId?: GraphCacheResolver<
      WithTypename<CreateAccountSocialNetworkPayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    accountSocialNetwork?: GraphCacheResolver<
      WithTypename<CreateAccountSocialNetworkPayload>,
      Record<string, never>,
      WithTypename<AccountSocialNetwork> | string
    >
    accountSocialNetworkEdge?: GraphCacheResolver<
      WithTypename<CreateAccountSocialNetworkPayload>,
      CreateAccountSocialNetworkPayloadAccountSocialNetworkEdgeArgs,
      WithTypename<AccountSocialNetworksEdge> | string
    >
    clientMutationId?: GraphCacheResolver<
      WithTypename<CreateAccountSocialNetworkPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    query?: GraphCacheResolver<
      WithTypename<CreateAccountSocialNetworkPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  CreateAchievementPayload?: {
    accountByAccountId?: GraphCacheResolver<
      WithTypename<CreateAchievementPayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    achievement?: GraphCacheResolver<
      WithTypename<CreateAchievementPayload>,
      Record<string, never>,
      WithTypename<Achievement> | string
    >
    achievementEdge?: GraphCacheResolver<
      WithTypename<CreateAchievementPayload>,
      CreateAchievementPayloadAchievementEdgeArgs,
      WithTypename<AchievementsEdge> | string
    >
    clientMutationId?: GraphCacheResolver<
      WithTypename<CreateAchievementPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    query?: GraphCacheResolver<
      WithTypename<CreateAchievementPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  CreateAddressPayload?: {
    accountByCreatedBy?: GraphCacheResolver<
      WithTypename<CreateAddressPayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    accountByUpdatedBy?: GraphCacheResolver<
      WithTypename<CreateAddressPayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    address?: GraphCacheResolver<
      WithTypename<CreateAddressPayload>,
      Record<string, never>,
      WithTypename<Address> | string
    >
    addressEdge?: GraphCacheResolver<
      WithTypename<CreateAddressPayload>,
      CreateAddressPayloadAddressEdgeArgs,
      WithTypename<AddressesEdge> | string
    >
    clientMutationId?: GraphCacheResolver<
      WithTypename<CreateAddressPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    query?: GraphCacheResolver<
      WithTypename<CreateAddressPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  CreateContactPayload?: {
    accountByAccountId?: GraphCacheResolver<
      WithTypename<CreateContactPayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    accountByCreatedBy?: GraphCacheResolver<
      WithTypename<CreateContactPayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    addressByAddressId?: GraphCacheResolver<
      WithTypename<CreateContactPayload>,
      Record<string, never>,
      WithTypename<Address> | string
    >
    clientMutationId?: GraphCacheResolver<
      WithTypename<CreateContactPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    contact?: GraphCacheResolver<
      WithTypename<CreateContactPayload>,
      Record<string, never>,
      WithTypename<Contact> | string
    >
    contactEdge?: GraphCacheResolver<
      WithTypename<CreateContactPayload>,
      CreateContactPayloadContactEdgeArgs,
      WithTypename<ContactsEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<CreateContactPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  CreateDevicePayload?: {
    accountByCreatedBy?: GraphCacheResolver<
      WithTypename<CreateDevicePayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    accountByUpdatedBy?: GraphCacheResolver<
      WithTypename<CreateDevicePayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    clientMutationId?: GraphCacheResolver<
      WithTypename<CreateDevicePayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    device?: GraphCacheResolver<
      WithTypename<CreateDevicePayload>,
      Record<string, never>,
      WithTypename<Device> | string
    >
    deviceEdge?: GraphCacheResolver<
      WithTypename<CreateDevicePayload>,
      CreateDevicePayloadDeviceEdgeArgs,
      WithTypename<DevicesEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<CreateDevicePayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  CreateEventCategoryMappingPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<CreateEventCategoryMappingPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    eventByEventId?: GraphCacheResolver<
      WithTypename<CreateEventCategoryMappingPayload>,
      Record<string, never>,
      WithTypename<Event> | string
    >
    eventCategoryByCategoryId?: GraphCacheResolver<
      WithTypename<CreateEventCategoryMappingPayload>,
      Record<string, never>,
      WithTypename<EventCategory> | string
    >
    eventCategoryMapping?: GraphCacheResolver<
      WithTypename<CreateEventCategoryMappingPayload>,
      Record<string, never>,
      WithTypename<EventCategoryMapping> | string
    >
    eventCategoryMappingEdge?: GraphCacheResolver<
      WithTypename<CreateEventCategoryMappingPayload>,
      CreateEventCategoryMappingPayloadEventCategoryMappingEdgeArgs,
      WithTypename<EventCategoryMappingsEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<CreateEventCategoryMappingPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  CreateEventFavoritePayload?: {
    accountByCreatedBy?: GraphCacheResolver<
      WithTypename<CreateEventFavoritePayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    clientMutationId?: GraphCacheResolver<
      WithTypename<CreateEventFavoritePayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    eventByEventId?: GraphCacheResolver<
      WithTypename<CreateEventFavoritePayload>,
      Record<string, never>,
      WithTypename<Event> | string
    >
    eventFavorite?: GraphCacheResolver<
      WithTypename<CreateEventFavoritePayload>,
      Record<string, never>,
      WithTypename<EventFavorite> | string
    >
    eventFavoriteEdge?: GraphCacheResolver<
      WithTypename<CreateEventFavoritePayload>,
      CreateEventFavoritePayloadEventFavoriteEdgeArgs,
      WithTypename<EventFavoritesEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<CreateEventFavoritePayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  CreateEventFormatMappingPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<CreateEventFormatMappingPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    eventByEventId?: GraphCacheResolver<
      WithTypename<CreateEventFormatMappingPayload>,
      Record<string, never>,
      WithTypename<Event> | string
    >
    eventFormatByFormatId?: GraphCacheResolver<
      WithTypename<CreateEventFormatMappingPayload>,
      Record<string, never>,
      WithTypename<EventFormat> | string
    >
    eventFormatMapping?: GraphCacheResolver<
      WithTypename<CreateEventFormatMappingPayload>,
      Record<string, never>,
      WithTypename<EventFormatMapping> | string
    >
    eventFormatMappingEdge?: GraphCacheResolver<
      WithTypename<CreateEventFormatMappingPayload>,
      CreateEventFormatMappingPayloadEventFormatMappingEdgeArgs,
      WithTypename<EventFormatMappingsEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<CreateEventFormatMappingPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  CreateEventPayload?: {
    accountByCreatedBy?: GraphCacheResolver<
      WithTypename<CreateEventPayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    addressByAddressId?: GraphCacheResolver<
      WithTypename<CreateEventPayload>,
      Record<string, never>,
      WithTypename<Address> | string
    >
    clientMutationId?: GraphCacheResolver<
      WithTypename<CreateEventPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    event?: GraphCacheResolver<
      WithTypename<CreateEventPayload>,
      Record<string, never>,
      WithTypename<Event> | string
    >
    eventEdge?: GraphCacheResolver<
      WithTypename<CreateEventPayload>,
      CreateEventPayloadEventEdgeArgs,
      WithTypename<EventsEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<CreateEventPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  CreateEventRecommendationPayload?: {
    accountByAccountId?: GraphCacheResolver<
      WithTypename<CreateEventRecommendationPayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    clientMutationId?: GraphCacheResolver<
      WithTypename<CreateEventRecommendationPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    eventByEventId?: GraphCacheResolver<
      WithTypename<CreateEventRecommendationPayload>,
      Record<string, never>,
      WithTypename<Event> | string
    >
    eventRecommendation?: GraphCacheResolver<
      WithTypename<CreateEventRecommendationPayload>,
      Record<string, never>,
      WithTypename<EventRecommendation> | string
    >
    eventRecommendationEdge?: GraphCacheResolver<
      WithTypename<CreateEventRecommendationPayload>,
      CreateEventRecommendationPayloadEventRecommendationEdgeArgs,
      WithTypename<EventRecommendationsEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<CreateEventRecommendationPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  CreateEventUploadPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<CreateEventUploadPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    eventByEventId?: GraphCacheResolver<
      WithTypename<CreateEventUploadPayload>,
      Record<string, never>,
      WithTypename<Event> | string
    >
    eventUpload?: GraphCacheResolver<
      WithTypename<CreateEventUploadPayload>,
      Record<string, never>,
      WithTypename<EventUpload> | string
    >
    eventUploadEdge?: GraphCacheResolver<
      WithTypename<CreateEventUploadPayload>,
      CreateEventUploadPayloadEventUploadEdgeArgs,
      WithTypename<EventUploadsEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<CreateEventUploadPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
    uploadByUploadId?: GraphCacheResolver<
      WithTypename<CreateEventUploadPayload>,
      Record<string, never>,
      WithTypename<Upload> | string
    >
  }
  CreateFriendshipPayload?: {
    accountByAAccountId?: GraphCacheResolver<
      WithTypename<CreateFriendshipPayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    accountByBAccountId?: GraphCacheResolver<
      WithTypename<CreateFriendshipPayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    accountByCreatedBy?: GraphCacheResolver<
      WithTypename<CreateFriendshipPayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    accountByUpdatedBy?: GraphCacheResolver<
      WithTypename<CreateFriendshipPayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    clientMutationId?: GraphCacheResolver<
      WithTypename<CreateFriendshipPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    friendship?: GraphCacheResolver<
      WithTypename<CreateFriendshipPayload>,
      Record<string, never>,
      WithTypename<Friendship> | string
    >
    friendshipEdge?: GraphCacheResolver<
      WithTypename<CreateFriendshipPayload>,
      CreateFriendshipPayloadFriendshipEdgeArgs,
      WithTypename<FriendshipsEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<CreateFriendshipPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  CreateGuestPayload?: {
    accountByUpdatedBy?: GraphCacheResolver<
      WithTypename<CreateGuestPayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    clientMutationId?: GraphCacheResolver<
      WithTypename<CreateGuestPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    contactByContactId?: GraphCacheResolver<
      WithTypename<CreateGuestPayload>,
      Record<string, never>,
      WithTypename<Contact> | string
    >
    eventByEventId?: GraphCacheResolver<
      WithTypename<CreateGuestPayload>,
      Record<string, never>,
      WithTypename<Event> | string
    >
    guest?: GraphCacheResolver<
      WithTypename<CreateGuestPayload>,
      Record<string, never>,
      WithTypename<Guest> | string
    >
    guestEdge?: GraphCacheResolver<
      WithTypename<CreateGuestPayload>,
      CreateGuestPayloadGuestEdgeArgs,
      WithTypename<GuestsEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<CreateGuestPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  CreateGuestsPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<CreateGuestsPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    guests?: GraphCacheResolver<
      WithTypename<CreateGuestsPayload>,
      Record<string, never>,
      Array<WithTypename<Guest> | string>
    >
    query?: GraphCacheResolver<
      WithTypename<CreateGuestsPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  CreateLegalTermAcceptancePayload?: {
    accountByAccountId?: GraphCacheResolver<
      WithTypename<CreateLegalTermAcceptancePayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    clientMutationId?: GraphCacheResolver<
      WithTypename<CreateLegalTermAcceptancePayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    legalTermAcceptance?: GraphCacheResolver<
      WithTypename<CreateLegalTermAcceptancePayload>,
      Record<string, never>,
      WithTypename<LegalTermAcceptance> | string
    >
    legalTermAcceptanceEdge?: GraphCacheResolver<
      WithTypename<CreateLegalTermAcceptancePayload>,
      CreateLegalTermAcceptancePayloadLegalTermAcceptanceEdgeArgs,
      WithTypename<LegalTermAcceptancesEdge> | string
    >
    legalTermByLegalTermId?: GraphCacheResolver<
      WithTypename<CreateLegalTermAcceptancePayload>,
      Record<string, never>,
      WithTypename<LegalTerm> | string
    >
    query?: GraphCacheResolver<
      WithTypename<CreateLegalTermAcceptancePayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  CreatePreferenceEventCategoryPayload?: {
    accountByAccountId?: GraphCacheResolver<
      WithTypename<CreatePreferenceEventCategoryPayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    clientMutationId?: GraphCacheResolver<
      WithTypename<CreatePreferenceEventCategoryPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    eventCategoryByCategoryId?: GraphCacheResolver<
      WithTypename<CreatePreferenceEventCategoryPayload>,
      Record<string, never>,
      WithTypename<EventCategory> | string
    >
    preferenceEventCategory?: GraphCacheResolver<
      WithTypename<CreatePreferenceEventCategoryPayload>,
      Record<string, never>,
      WithTypename<PreferenceEventCategory> | string
    >
    preferenceEventCategoryEdge?: GraphCacheResolver<
      WithTypename<CreatePreferenceEventCategoryPayload>,
      CreatePreferenceEventCategoryPayloadPreferenceEventCategoryEdgeArgs,
      WithTypename<PreferenceEventCategoriesEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<CreatePreferenceEventCategoryPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  CreatePreferenceEventFormatPayload?: {
    accountByAccountId?: GraphCacheResolver<
      WithTypename<CreatePreferenceEventFormatPayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    clientMutationId?: GraphCacheResolver<
      WithTypename<CreatePreferenceEventFormatPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    eventFormatByFormatId?: GraphCacheResolver<
      WithTypename<CreatePreferenceEventFormatPayload>,
      Record<string, never>,
      WithTypename<EventFormat> | string
    >
    preferenceEventFormat?: GraphCacheResolver<
      WithTypename<CreatePreferenceEventFormatPayload>,
      Record<string, never>,
      WithTypename<PreferenceEventFormat> | string
    >
    preferenceEventFormatEdge?: GraphCacheResolver<
      WithTypename<CreatePreferenceEventFormatPayload>,
      CreatePreferenceEventFormatPayloadPreferenceEventFormatEdgeArgs,
      WithTypename<PreferenceEventFormatsEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<CreatePreferenceEventFormatPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  CreatePreferenceEventLocationPayload?: {
    accountByCreatedBy?: GraphCacheResolver<
      WithTypename<CreatePreferenceEventLocationPayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    clientMutationId?: GraphCacheResolver<
      WithTypename<CreatePreferenceEventLocationPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    preferenceEventLocation?: GraphCacheResolver<
      WithTypename<CreatePreferenceEventLocationPayload>,
      Record<string, never>,
      WithTypename<PreferenceEventLocation> | string
    >
    preferenceEventLocationEdge?: GraphCacheResolver<
      WithTypename<CreatePreferenceEventLocationPayload>,
      CreatePreferenceEventLocationPayloadPreferenceEventLocationEdgeArgs,
      WithTypename<PreferenceEventLocationsEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<CreatePreferenceEventLocationPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  CreatePreferenceEventSizePayload?: {
    accountByAccountId?: GraphCacheResolver<
      WithTypename<CreatePreferenceEventSizePayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    clientMutationId?: GraphCacheResolver<
      WithTypename<CreatePreferenceEventSizePayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    preferenceEventSize?: GraphCacheResolver<
      WithTypename<CreatePreferenceEventSizePayload>,
      Record<string, never>,
      WithTypename<PreferenceEventSize> | string
    >
    preferenceEventSizeEdge?: GraphCacheResolver<
      WithTypename<CreatePreferenceEventSizePayload>,
      CreatePreferenceEventSizePayloadPreferenceEventSizeEdgeArgs,
      WithTypename<PreferenceEventSizesEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<CreatePreferenceEventSizePayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  CreateProfilePicturePayload?: {
    accountByAccountId?: GraphCacheResolver<
      WithTypename<CreateProfilePicturePayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    clientMutationId?: GraphCacheResolver<
      WithTypename<CreateProfilePicturePayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    profilePicture?: GraphCacheResolver<
      WithTypename<CreateProfilePicturePayload>,
      Record<string, never>,
      WithTypename<ProfilePicture> | string
    >
    profilePictureEdge?: GraphCacheResolver<
      WithTypename<CreateProfilePicturePayload>,
      CreateProfilePicturePayloadProfilePictureEdgeArgs,
      WithTypename<ProfilePicturesEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<CreateProfilePicturePayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
    uploadByUploadId?: GraphCacheResolver<
      WithTypename<CreateProfilePicturePayload>,
      Record<string, never>,
      WithTypename<Upload> | string
    >
  }
  CreateReportPayload?: {
    accountByCreatedBy?: GraphCacheResolver<
      WithTypename<CreateReportPayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    accountByTargetAccountId?: GraphCacheResolver<
      WithTypename<CreateReportPayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    clientMutationId?: GraphCacheResolver<
      WithTypename<CreateReportPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    eventByTargetEventId?: GraphCacheResolver<
      WithTypename<CreateReportPayload>,
      Record<string, never>,
      WithTypename<Event> | string
    >
    query?: GraphCacheResolver<
      WithTypename<CreateReportPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
    report?: GraphCacheResolver<
      WithTypename<CreateReportPayload>,
      Record<string, never>,
      WithTypename<Report> | string
    >
    reportEdge?: GraphCacheResolver<
      WithTypename<CreateReportPayload>,
      CreateReportPayloadReportEdgeArgs,
      WithTypename<ReportsEdge> | string
    >
    uploadByTargetUploadId?: GraphCacheResolver<
      WithTypename<CreateReportPayload>,
      Record<string, never>,
      WithTypename<Upload> | string
    >
  }
  CreateUploadPayload?: {
    accountByCreatedBy?: GraphCacheResolver<
      WithTypename<CreateUploadPayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    clientMutationId?: GraphCacheResolver<
      WithTypename<CreateUploadPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    query?: GraphCacheResolver<
      WithTypename<CreateUploadPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
    upload?: GraphCacheResolver<
      WithTypename<CreateUploadPayload>,
      Record<string, never>,
      WithTypename<Upload> | string
    >
    uploadEdge?: GraphCacheResolver<
      WithTypename<CreateUploadPayload>,
      CreateUploadPayloadUploadEdgeArgs,
      WithTypename<UploadsEdge> | string
    >
  }
  DeleteAccountBlockPayload?: {
    accountBlock?: GraphCacheResolver<
      WithTypename<DeleteAccountBlockPayload>,
      Record<string, never>,
      WithTypename<AccountBlock> | string
    >
    accountBlockEdge?: GraphCacheResolver<
      WithTypename<DeleteAccountBlockPayload>,
      DeleteAccountBlockPayloadAccountBlockEdgeArgs,
      WithTypename<AccountBlocksEdge> | string
    >
    accountByBlockedAccountId?: GraphCacheResolver<
      WithTypename<DeleteAccountBlockPayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    accountByCreatedBy?: GraphCacheResolver<
      WithTypename<DeleteAccountBlockPayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    clientMutationId?: GraphCacheResolver<
      WithTypename<DeleteAccountBlockPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    deletedAccountBlockId?: GraphCacheResolver<
      WithTypename<DeleteAccountBlockPayload>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    query?: GraphCacheResolver<
      WithTypename<DeleteAccountBlockPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  DeleteAccountSocialNetworkPayload?: {
    accountByAccountId?: GraphCacheResolver<
      WithTypename<DeleteAccountSocialNetworkPayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    accountSocialNetwork?: GraphCacheResolver<
      WithTypename<DeleteAccountSocialNetworkPayload>,
      Record<string, never>,
      WithTypename<AccountSocialNetwork> | string
    >
    accountSocialNetworkEdge?: GraphCacheResolver<
      WithTypename<DeleteAccountSocialNetworkPayload>,
      DeleteAccountSocialNetworkPayloadAccountSocialNetworkEdgeArgs,
      WithTypename<AccountSocialNetworksEdge> | string
    >
    clientMutationId?: GraphCacheResolver<
      WithTypename<DeleteAccountSocialNetworkPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    deletedAccountSocialNetworkId?: GraphCacheResolver<
      WithTypename<DeleteAccountSocialNetworkPayload>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    query?: GraphCacheResolver<
      WithTypename<DeleteAccountSocialNetworkPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  DeleteAchievementPayload?: {
    accountByAccountId?: GraphCacheResolver<
      WithTypename<DeleteAchievementPayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    achievement?: GraphCacheResolver<
      WithTypename<DeleteAchievementPayload>,
      Record<string, never>,
      WithTypename<Achievement> | string
    >
    achievementEdge?: GraphCacheResolver<
      WithTypename<DeleteAchievementPayload>,
      DeleteAchievementPayloadAchievementEdgeArgs,
      WithTypename<AchievementsEdge> | string
    >
    clientMutationId?: GraphCacheResolver<
      WithTypename<DeleteAchievementPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    deletedAchievementId?: GraphCacheResolver<
      WithTypename<DeleteAchievementPayload>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    query?: GraphCacheResolver<
      WithTypename<DeleteAchievementPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  DeleteAddressPayload?: {
    accountByCreatedBy?: GraphCacheResolver<
      WithTypename<DeleteAddressPayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    accountByUpdatedBy?: GraphCacheResolver<
      WithTypename<DeleteAddressPayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    address?: GraphCacheResolver<
      WithTypename<DeleteAddressPayload>,
      Record<string, never>,
      WithTypename<Address> | string
    >
    addressEdge?: GraphCacheResolver<
      WithTypename<DeleteAddressPayload>,
      DeleteAddressPayloadAddressEdgeArgs,
      WithTypename<AddressesEdge> | string
    >
    clientMutationId?: GraphCacheResolver<
      WithTypename<DeleteAddressPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    deletedAddressId?: GraphCacheResolver<
      WithTypename<DeleteAddressPayload>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    query?: GraphCacheResolver<
      WithTypename<DeleteAddressPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  DeleteContactPayload?: {
    accountByAccountId?: GraphCacheResolver<
      WithTypename<DeleteContactPayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    accountByCreatedBy?: GraphCacheResolver<
      WithTypename<DeleteContactPayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    addressByAddressId?: GraphCacheResolver<
      WithTypename<DeleteContactPayload>,
      Record<string, never>,
      WithTypename<Address> | string
    >
    clientMutationId?: GraphCacheResolver<
      WithTypename<DeleteContactPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    contact?: GraphCacheResolver<
      WithTypename<DeleteContactPayload>,
      Record<string, never>,
      WithTypename<Contact> | string
    >
    contactEdge?: GraphCacheResolver<
      WithTypename<DeleteContactPayload>,
      DeleteContactPayloadContactEdgeArgs,
      WithTypename<ContactsEdge> | string
    >
    deletedContactId?: GraphCacheResolver<
      WithTypename<DeleteContactPayload>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    query?: GraphCacheResolver<
      WithTypename<DeleteContactPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  DeleteDevicePayload?: {
    accountByCreatedBy?: GraphCacheResolver<
      WithTypename<DeleteDevicePayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    accountByUpdatedBy?: GraphCacheResolver<
      WithTypename<DeleteDevicePayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    clientMutationId?: GraphCacheResolver<
      WithTypename<DeleteDevicePayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    deletedDeviceId?: GraphCacheResolver<
      WithTypename<DeleteDevicePayload>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    device?: GraphCacheResolver<
      WithTypename<DeleteDevicePayload>,
      Record<string, never>,
      WithTypename<Device> | string
    >
    deviceEdge?: GraphCacheResolver<
      WithTypename<DeleteDevicePayload>,
      DeleteDevicePayloadDeviceEdgeArgs,
      WithTypename<DevicesEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<DeleteDevicePayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  DeleteEventCategoryMappingPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<DeleteEventCategoryMappingPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    deletedEventCategoryMappingId?: GraphCacheResolver<
      WithTypename<DeleteEventCategoryMappingPayload>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    eventByEventId?: GraphCacheResolver<
      WithTypename<DeleteEventCategoryMappingPayload>,
      Record<string, never>,
      WithTypename<Event> | string
    >
    eventCategoryByCategoryId?: GraphCacheResolver<
      WithTypename<DeleteEventCategoryMappingPayload>,
      Record<string, never>,
      WithTypename<EventCategory> | string
    >
    eventCategoryMapping?: GraphCacheResolver<
      WithTypename<DeleteEventCategoryMappingPayload>,
      Record<string, never>,
      WithTypename<EventCategoryMapping> | string
    >
    eventCategoryMappingEdge?: GraphCacheResolver<
      WithTypename<DeleteEventCategoryMappingPayload>,
      DeleteEventCategoryMappingPayloadEventCategoryMappingEdgeArgs,
      WithTypename<EventCategoryMappingsEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<DeleteEventCategoryMappingPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  DeleteEventFavoritePayload?: {
    accountByCreatedBy?: GraphCacheResolver<
      WithTypename<DeleteEventFavoritePayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    clientMutationId?: GraphCacheResolver<
      WithTypename<DeleteEventFavoritePayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    deletedEventFavoriteId?: GraphCacheResolver<
      WithTypename<DeleteEventFavoritePayload>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    eventByEventId?: GraphCacheResolver<
      WithTypename<DeleteEventFavoritePayload>,
      Record<string, never>,
      WithTypename<Event> | string
    >
    eventFavorite?: GraphCacheResolver<
      WithTypename<DeleteEventFavoritePayload>,
      Record<string, never>,
      WithTypename<EventFavorite> | string
    >
    eventFavoriteEdge?: GraphCacheResolver<
      WithTypename<DeleteEventFavoritePayload>,
      DeleteEventFavoritePayloadEventFavoriteEdgeArgs,
      WithTypename<EventFavoritesEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<DeleteEventFavoritePayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  DeleteEventFormatMappingPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<DeleteEventFormatMappingPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    deletedEventFormatMappingId?: GraphCacheResolver<
      WithTypename<DeleteEventFormatMappingPayload>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    eventByEventId?: GraphCacheResolver<
      WithTypename<DeleteEventFormatMappingPayload>,
      Record<string, never>,
      WithTypename<Event> | string
    >
    eventFormatByFormatId?: GraphCacheResolver<
      WithTypename<DeleteEventFormatMappingPayload>,
      Record<string, never>,
      WithTypename<EventFormat> | string
    >
    eventFormatMapping?: GraphCacheResolver<
      WithTypename<DeleteEventFormatMappingPayload>,
      Record<string, never>,
      WithTypename<EventFormatMapping> | string
    >
    eventFormatMappingEdge?: GraphCacheResolver<
      WithTypename<DeleteEventFormatMappingPayload>,
      DeleteEventFormatMappingPayloadEventFormatMappingEdgeArgs,
      WithTypename<EventFormatMappingsEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<DeleteEventFormatMappingPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  DeleteEventPayload?: {
    accountByCreatedBy?: GraphCacheResolver<
      WithTypename<DeleteEventPayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    addressByAddressId?: GraphCacheResolver<
      WithTypename<DeleteEventPayload>,
      Record<string, never>,
      WithTypename<Address> | string
    >
    clientMutationId?: GraphCacheResolver<
      WithTypename<DeleteEventPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    deletedEventId?: GraphCacheResolver<
      WithTypename<DeleteEventPayload>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    event?: GraphCacheResolver<
      WithTypename<DeleteEventPayload>,
      Record<string, never>,
      WithTypename<Event> | string
    >
    eventEdge?: GraphCacheResolver<
      WithTypename<DeleteEventPayload>,
      DeleteEventPayloadEventEdgeArgs,
      WithTypename<EventsEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<DeleteEventPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  DeleteEventRecommendationPayload?: {
    accountByAccountId?: GraphCacheResolver<
      WithTypename<DeleteEventRecommendationPayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    clientMutationId?: GraphCacheResolver<
      WithTypename<DeleteEventRecommendationPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    deletedEventRecommendationId?: GraphCacheResolver<
      WithTypename<DeleteEventRecommendationPayload>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    eventByEventId?: GraphCacheResolver<
      WithTypename<DeleteEventRecommendationPayload>,
      Record<string, never>,
      WithTypename<Event> | string
    >
    eventRecommendation?: GraphCacheResolver<
      WithTypename<DeleteEventRecommendationPayload>,
      Record<string, never>,
      WithTypename<EventRecommendation> | string
    >
    eventRecommendationEdge?: GraphCacheResolver<
      WithTypename<DeleteEventRecommendationPayload>,
      DeleteEventRecommendationPayloadEventRecommendationEdgeArgs,
      WithTypename<EventRecommendationsEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<DeleteEventRecommendationPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  DeleteEventUploadPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<DeleteEventUploadPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    deletedEventUploadId?: GraphCacheResolver<
      WithTypename<DeleteEventUploadPayload>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    eventByEventId?: GraphCacheResolver<
      WithTypename<DeleteEventUploadPayload>,
      Record<string, never>,
      WithTypename<Event> | string
    >
    eventUpload?: GraphCacheResolver<
      WithTypename<DeleteEventUploadPayload>,
      Record<string, never>,
      WithTypename<EventUpload> | string
    >
    eventUploadEdge?: GraphCacheResolver<
      WithTypename<DeleteEventUploadPayload>,
      DeleteEventUploadPayloadEventUploadEdgeArgs,
      WithTypename<EventUploadsEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<DeleteEventUploadPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
    uploadByUploadId?: GraphCacheResolver<
      WithTypename<DeleteEventUploadPayload>,
      Record<string, never>,
      WithTypename<Upload> | string
    >
  }
  DeleteFriendshipPayload?: {
    accountByAAccountId?: GraphCacheResolver<
      WithTypename<DeleteFriendshipPayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    accountByBAccountId?: GraphCacheResolver<
      WithTypename<DeleteFriendshipPayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    accountByCreatedBy?: GraphCacheResolver<
      WithTypename<DeleteFriendshipPayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    accountByUpdatedBy?: GraphCacheResolver<
      WithTypename<DeleteFriendshipPayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    clientMutationId?: GraphCacheResolver<
      WithTypename<DeleteFriendshipPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    deletedFriendshipId?: GraphCacheResolver<
      WithTypename<DeleteFriendshipPayload>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    friendship?: GraphCacheResolver<
      WithTypename<DeleteFriendshipPayload>,
      Record<string, never>,
      WithTypename<Friendship> | string
    >
    friendshipEdge?: GraphCacheResolver<
      WithTypename<DeleteFriendshipPayload>,
      DeleteFriendshipPayloadFriendshipEdgeArgs,
      WithTypename<FriendshipsEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<DeleteFriendshipPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  DeleteGuestPayload?: {
    accountByUpdatedBy?: GraphCacheResolver<
      WithTypename<DeleteGuestPayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    clientMutationId?: GraphCacheResolver<
      WithTypename<DeleteGuestPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    contactByContactId?: GraphCacheResolver<
      WithTypename<DeleteGuestPayload>,
      Record<string, never>,
      WithTypename<Contact> | string
    >
    deletedGuestId?: GraphCacheResolver<
      WithTypename<DeleteGuestPayload>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    eventByEventId?: GraphCacheResolver<
      WithTypename<DeleteGuestPayload>,
      Record<string, never>,
      WithTypename<Event> | string
    >
    guest?: GraphCacheResolver<
      WithTypename<DeleteGuestPayload>,
      Record<string, never>,
      WithTypename<Guest> | string
    >
    guestEdge?: GraphCacheResolver<
      WithTypename<DeleteGuestPayload>,
      DeleteGuestPayloadGuestEdgeArgs,
      WithTypename<GuestsEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<DeleteGuestPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  DeletePreferenceEventCategoryPayload?: {
    accountByAccountId?: GraphCacheResolver<
      WithTypename<DeletePreferenceEventCategoryPayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    clientMutationId?: GraphCacheResolver<
      WithTypename<DeletePreferenceEventCategoryPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    deletedPreferenceEventCategoryId?: GraphCacheResolver<
      WithTypename<DeletePreferenceEventCategoryPayload>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    eventCategoryByCategoryId?: GraphCacheResolver<
      WithTypename<DeletePreferenceEventCategoryPayload>,
      Record<string, never>,
      WithTypename<EventCategory> | string
    >
    preferenceEventCategory?: GraphCacheResolver<
      WithTypename<DeletePreferenceEventCategoryPayload>,
      Record<string, never>,
      WithTypename<PreferenceEventCategory> | string
    >
    preferenceEventCategoryEdge?: GraphCacheResolver<
      WithTypename<DeletePreferenceEventCategoryPayload>,
      DeletePreferenceEventCategoryPayloadPreferenceEventCategoryEdgeArgs,
      WithTypename<PreferenceEventCategoriesEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<DeletePreferenceEventCategoryPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  DeletePreferenceEventFormatPayload?: {
    accountByAccountId?: GraphCacheResolver<
      WithTypename<DeletePreferenceEventFormatPayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    clientMutationId?: GraphCacheResolver<
      WithTypename<DeletePreferenceEventFormatPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    deletedPreferenceEventFormatId?: GraphCacheResolver<
      WithTypename<DeletePreferenceEventFormatPayload>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    eventFormatByFormatId?: GraphCacheResolver<
      WithTypename<DeletePreferenceEventFormatPayload>,
      Record<string, never>,
      WithTypename<EventFormat> | string
    >
    preferenceEventFormat?: GraphCacheResolver<
      WithTypename<DeletePreferenceEventFormatPayload>,
      Record<string, never>,
      WithTypename<PreferenceEventFormat> | string
    >
    preferenceEventFormatEdge?: GraphCacheResolver<
      WithTypename<DeletePreferenceEventFormatPayload>,
      DeletePreferenceEventFormatPayloadPreferenceEventFormatEdgeArgs,
      WithTypename<PreferenceEventFormatsEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<DeletePreferenceEventFormatPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  DeletePreferenceEventLocationPayload?: {
    accountByCreatedBy?: GraphCacheResolver<
      WithTypename<DeletePreferenceEventLocationPayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    clientMutationId?: GraphCacheResolver<
      WithTypename<DeletePreferenceEventLocationPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    deletedPreferenceEventLocationId?: GraphCacheResolver<
      WithTypename<DeletePreferenceEventLocationPayload>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    preferenceEventLocation?: GraphCacheResolver<
      WithTypename<DeletePreferenceEventLocationPayload>,
      Record<string, never>,
      WithTypename<PreferenceEventLocation> | string
    >
    preferenceEventLocationEdge?: GraphCacheResolver<
      WithTypename<DeletePreferenceEventLocationPayload>,
      DeletePreferenceEventLocationPayloadPreferenceEventLocationEdgeArgs,
      WithTypename<PreferenceEventLocationsEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<DeletePreferenceEventLocationPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  DeletePreferenceEventSizePayload?: {
    accountByAccountId?: GraphCacheResolver<
      WithTypename<DeletePreferenceEventSizePayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    clientMutationId?: GraphCacheResolver<
      WithTypename<DeletePreferenceEventSizePayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    deletedPreferenceEventSizeId?: GraphCacheResolver<
      WithTypename<DeletePreferenceEventSizePayload>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    preferenceEventSize?: GraphCacheResolver<
      WithTypename<DeletePreferenceEventSizePayload>,
      Record<string, never>,
      WithTypename<PreferenceEventSize> | string
    >
    preferenceEventSizeEdge?: GraphCacheResolver<
      WithTypename<DeletePreferenceEventSizePayload>,
      DeletePreferenceEventSizePayloadPreferenceEventSizeEdgeArgs,
      WithTypename<PreferenceEventSizesEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<DeletePreferenceEventSizePayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  DeleteProfilePicturePayload?: {
    accountByAccountId?: GraphCacheResolver<
      WithTypename<DeleteProfilePicturePayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    clientMutationId?: GraphCacheResolver<
      WithTypename<DeleteProfilePicturePayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    deletedProfilePictureId?: GraphCacheResolver<
      WithTypename<DeleteProfilePicturePayload>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    profilePicture?: GraphCacheResolver<
      WithTypename<DeleteProfilePicturePayload>,
      Record<string, never>,
      WithTypename<ProfilePicture> | string
    >
    profilePictureEdge?: GraphCacheResolver<
      WithTypename<DeleteProfilePicturePayload>,
      DeleteProfilePicturePayloadProfilePictureEdgeArgs,
      WithTypename<ProfilePicturesEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<DeleteProfilePicturePayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
    uploadByUploadId?: GraphCacheResolver<
      WithTypename<DeleteProfilePicturePayload>,
      Record<string, never>,
      WithTypename<Upload> | string
    >
  }
  DeleteUploadPayload?: {
    accountByCreatedBy?: GraphCacheResolver<
      WithTypename<DeleteUploadPayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    clientMutationId?: GraphCacheResolver<
      WithTypename<DeleteUploadPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    deletedUploadId?: GraphCacheResolver<
      WithTypename<DeleteUploadPayload>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    query?: GraphCacheResolver<
      WithTypename<DeleteUploadPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
    upload?: GraphCacheResolver<
      WithTypename<DeleteUploadPayload>,
      Record<string, never>,
      WithTypename<Upload> | string
    >
    uploadEdge?: GraphCacheResolver<
      WithTypename<DeleteUploadPayload>,
      DeleteUploadPayloadUploadEdgeArgs,
      WithTypename<UploadsEdge> | string
    >
  }
  Device?: {
    accountByCreatedBy?: GraphCacheResolver<
      WithTypename<Device>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    accountByUpdatedBy?: GraphCacheResolver<
      WithTypename<Device>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    createdAt?: GraphCacheResolver<
      WithTypename<Device>,
      Record<string, never>,
      Scalars['Datetime'] | string
    >
    createdBy?: GraphCacheResolver<
      WithTypename<Device>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    fcmToken?: GraphCacheResolver<
      WithTypename<Device>,
      Record<string, never>,
      Scalars['String'] | string
    >
    id?: GraphCacheResolver<
      WithTypename<Device>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    nodeId?: GraphCacheResolver<
      WithTypename<Device>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    updatedAt?: GraphCacheResolver<
      WithTypename<Device>,
      Record<string, never>,
      Scalars['Datetime'] | string
    >
    updatedBy?: GraphCacheResolver<
      WithTypename<Device>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
  }
  DevicesConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<DevicesConnection>,
      Record<string, never>,
      Array<WithTypename<DevicesEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<DevicesConnection>,
      Record<string, never>,
      Array<WithTypename<Device> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<DevicesConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<DevicesConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  DevicesEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<DevicesEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<DevicesEdge>,
      Record<string, never>,
      WithTypename<Device> | string
    >
  }
  Event?: {
    accountByCreatedBy?: GraphCacheResolver<
      WithTypename<Event>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    addressByAddressId?: GraphCacheResolver<
      WithTypename<Event>,
      Record<string, never>,
      WithTypename<Address> | string
    >
    addressId?: GraphCacheResolver<
      WithTypename<Event>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    createdAt?: GraphCacheResolver<
      WithTypename<Event>,
      Record<string, never>,
      Scalars['Datetime'] | string
    >
    createdBy?: GraphCacheResolver<
      WithTypename<Event>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    description?: GraphCacheResolver<
      WithTypename<Event>,
      Record<string, never>,
      Scalars['String'] | string
    >
    end?: GraphCacheResolver<
      WithTypename<Event>,
      Record<string, never>,
      Scalars['Datetime'] | string
    >
    eventCategoryMappingsByEventId?: GraphCacheResolver<
      WithTypename<Event>,
      EventEventCategoryMappingsByEventIdArgs,
      WithTypename<EventCategoryMappingsConnection> | string
    >
    eventFavoritesByEventId?: GraphCacheResolver<
      WithTypename<Event>,
      EventEventFavoritesByEventIdArgs,
      WithTypename<EventFavoritesConnection> | string
    >
    eventFormatMappingsByEventId?: GraphCacheResolver<
      WithTypename<Event>,
      EventEventFormatMappingsByEventIdArgs,
      WithTypename<EventFormatMappingsConnection> | string
    >
    eventRecommendationsByEventId?: GraphCacheResolver<
      WithTypename<Event>,
      EventEventRecommendationsByEventIdArgs,
      WithTypename<EventRecommendationsConnection> | string
    >
    eventUploadsByEventId?: GraphCacheResolver<
      WithTypename<Event>,
      EventEventUploadsByEventIdArgs,
      WithTypename<EventUploadsConnection> | string
    >
    guestCountMaximum?: GraphCacheResolver<
      WithTypename<Event>,
      Record<string, never>,
      Scalars['Int'] | string
    >
    guestsByEventId?: GraphCacheResolver<
      WithTypename<Event>,
      EventGuestsByEventIdArgs,
      WithTypename<GuestsConnection> | string
    >
    id?: GraphCacheResolver<
      WithTypename<Event>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    isArchived?: GraphCacheResolver<
      WithTypename<Event>,
      Record<string, never>,
      Scalars['Boolean'] | string
    >
    isInPerson?: GraphCacheResolver<
      WithTypename<Event>,
      Record<string, never>,
      Scalars['Boolean'] | string
    >
    isRemote?: GraphCacheResolver<
      WithTypename<Event>,
      Record<string, never>,
      Scalars['Boolean'] | string
    >
    language?: GraphCacheResolver<
      WithTypename<Event>,
      Record<string, never>,
      Language | string
    >
    name?: GraphCacheResolver<
      WithTypename<Event>,
      Record<string, never>,
      Scalars['String'] | string
    >
    nodeId?: GraphCacheResolver<
      WithTypename<Event>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    reportsByTargetEventId?: GraphCacheResolver<
      WithTypename<Event>,
      EventReportsByTargetEventIdArgs,
      WithTypename<ReportsConnection> | string
    >
    slug?: GraphCacheResolver<
      WithTypename<Event>,
      Record<string, never>,
      Scalars['String'] | string
    >
    start?: GraphCacheResolver<
      WithTypename<Event>,
      Record<string, never>,
      Scalars['Datetime'] | string
    >
    url?: GraphCacheResolver<
      WithTypename<Event>,
      Record<string, never>,
      Scalars['String'] | string
    >
    visibility?: GraphCacheResolver<
      WithTypename<Event>,
      Record<string, never>,
      EventVisibility | string
    >
  }
  EventCategoriesConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<EventCategoriesConnection>,
      Record<string, never>,
      Array<WithTypename<EventCategoriesEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<EventCategoriesConnection>,
      Record<string, never>,
      Array<WithTypename<EventCategory> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<EventCategoriesConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<EventCategoriesConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  EventCategoriesEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<EventCategoriesEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<EventCategoriesEdge>,
      Record<string, never>,
      WithTypename<EventCategory> | string
    >
  }
  EventCategory?: {
    eventCategoryMappingsByCategoryId?: GraphCacheResolver<
      WithTypename<EventCategory>,
      EventCategoryEventCategoryMappingsByCategoryIdArgs,
      WithTypename<EventCategoryMappingsConnection> | string
    >
    id?: GraphCacheResolver<
      WithTypename<EventCategory>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    name?: GraphCacheResolver<
      WithTypename<EventCategory>,
      Record<string, never>,
      Scalars['String'] | string
    >
    nodeId?: GraphCacheResolver<
      WithTypename<EventCategory>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    preferenceEventCategoriesByCategoryId?: GraphCacheResolver<
      WithTypename<EventCategory>,
      EventCategoryPreferenceEventCategoriesByCategoryIdArgs,
      WithTypename<PreferenceEventCategoriesConnection> | string
    >
  }
  EventCategoryMapping?: {
    categoryId?: GraphCacheResolver<
      WithTypename<EventCategoryMapping>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    eventByEventId?: GraphCacheResolver<
      WithTypename<EventCategoryMapping>,
      Record<string, never>,
      WithTypename<Event> | string
    >
    eventCategoryByCategoryId?: GraphCacheResolver<
      WithTypename<EventCategoryMapping>,
      Record<string, never>,
      WithTypename<EventCategory> | string
    >
    eventId?: GraphCacheResolver<
      WithTypename<EventCategoryMapping>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    nodeId?: GraphCacheResolver<
      WithTypename<EventCategoryMapping>,
      Record<string, never>,
      Scalars['ID'] | string
    >
  }
  EventCategoryMappingsConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<EventCategoryMappingsConnection>,
      Record<string, never>,
      Array<WithTypename<EventCategoryMappingsEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<EventCategoryMappingsConnection>,
      Record<string, never>,
      Array<WithTypename<EventCategoryMapping> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<EventCategoryMappingsConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<EventCategoryMappingsConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  EventCategoryMappingsEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<EventCategoryMappingsEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<EventCategoryMappingsEdge>,
      Record<string, never>,
      WithTypename<EventCategoryMapping> | string
    >
  }
  EventDeletePayload?: {
    accountByCreatedBy?: GraphCacheResolver<
      WithTypename<EventDeletePayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    addressByAddressId?: GraphCacheResolver<
      WithTypename<EventDeletePayload>,
      Record<string, never>,
      WithTypename<Address> | string
    >
    clientMutationId?: GraphCacheResolver<
      WithTypename<EventDeletePayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    event?: GraphCacheResolver<
      WithTypename<EventDeletePayload>,
      Record<string, never>,
      WithTypename<Event> | string
    >
    eventEdge?: GraphCacheResolver<
      WithTypename<EventDeletePayload>,
      EventDeletePayloadEventEdgeArgs,
      WithTypename<EventsEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<EventDeletePayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  EventFavorite?: {
    accountByCreatedBy?: GraphCacheResolver<
      WithTypename<EventFavorite>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    createdAt?: GraphCacheResolver<
      WithTypename<EventFavorite>,
      Record<string, never>,
      Scalars['Datetime'] | string
    >
    createdBy?: GraphCacheResolver<
      WithTypename<EventFavorite>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    eventByEventId?: GraphCacheResolver<
      WithTypename<EventFavorite>,
      Record<string, never>,
      WithTypename<Event> | string
    >
    eventId?: GraphCacheResolver<
      WithTypename<EventFavorite>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    id?: GraphCacheResolver<
      WithTypename<EventFavorite>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    nodeId?: GraphCacheResolver<
      WithTypename<EventFavorite>,
      Record<string, never>,
      Scalars['ID'] | string
    >
  }
  EventFavoritesConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<EventFavoritesConnection>,
      Record<string, never>,
      Array<WithTypename<EventFavoritesEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<EventFavoritesConnection>,
      Record<string, never>,
      Array<WithTypename<EventFavorite> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<EventFavoritesConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<EventFavoritesConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  EventFavoritesEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<EventFavoritesEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<EventFavoritesEdge>,
      Record<string, never>,
      WithTypename<EventFavorite> | string
    >
  }
  EventFormat?: {
    eventFormatMappingsByFormatId?: GraphCacheResolver<
      WithTypename<EventFormat>,
      EventFormatEventFormatMappingsByFormatIdArgs,
      WithTypename<EventFormatMappingsConnection> | string
    >
    id?: GraphCacheResolver<
      WithTypename<EventFormat>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    name?: GraphCacheResolver<
      WithTypename<EventFormat>,
      Record<string, never>,
      Scalars['String'] | string
    >
    nodeId?: GraphCacheResolver<
      WithTypename<EventFormat>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    preferenceEventFormatsByFormatId?: GraphCacheResolver<
      WithTypename<EventFormat>,
      EventFormatPreferenceEventFormatsByFormatIdArgs,
      WithTypename<PreferenceEventFormatsConnection> | string
    >
  }
  EventFormatMapping?: {
    eventByEventId?: GraphCacheResolver<
      WithTypename<EventFormatMapping>,
      Record<string, never>,
      WithTypename<Event> | string
    >
    eventFormatByFormatId?: GraphCacheResolver<
      WithTypename<EventFormatMapping>,
      Record<string, never>,
      WithTypename<EventFormat> | string
    >
    eventId?: GraphCacheResolver<
      WithTypename<EventFormatMapping>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    formatId?: GraphCacheResolver<
      WithTypename<EventFormatMapping>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    nodeId?: GraphCacheResolver<
      WithTypename<EventFormatMapping>,
      Record<string, never>,
      Scalars['ID'] | string
    >
  }
  EventFormatMappingsConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<EventFormatMappingsConnection>,
      Record<string, never>,
      Array<WithTypename<EventFormatMappingsEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<EventFormatMappingsConnection>,
      Record<string, never>,
      Array<WithTypename<EventFormatMapping> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<EventFormatMappingsConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<EventFormatMappingsConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  EventFormatMappingsEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<EventFormatMappingsEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<EventFormatMappingsEdge>,
      Record<string, never>,
      WithTypename<EventFormatMapping> | string
    >
  }
  EventFormatsConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<EventFormatsConnection>,
      Record<string, never>,
      Array<WithTypename<EventFormatsEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<EventFormatsConnection>,
      Record<string, never>,
      Array<WithTypename<EventFormat> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<EventFormatsConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<EventFormatsConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  EventFormatsEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<EventFormatsEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<EventFormatsEdge>,
      Record<string, never>,
      WithTypename<EventFormat> | string
    >
  }
  EventRecommendation?: {
    accountByAccountId?: GraphCacheResolver<
      WithTypename<EventRecommendation>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    accountId?: GraphCacheResolver<
      WithTypename<EventRecommendation>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    eventByEventId?: GraphCacheResolver<
      WithTypename<EventRecommendation>,
      Record<string, never>,
      WithTypename<Event> | string
    >
    eventId?: GraphCacheResolver<
      WithTypename<EventRecommendation>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    nodeId?: GraphCacheResolver<
      WithTypename<EventRecommendation>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    predictedScore?: GraphCacheResolver<
      WithTypename<EventRecommendation>,
      Record<string, never>,
      Scalars['Float'] | string
    >
    score?: GraphCacheResolver<
      WithTypename<EventRecommendation>,
      Record<string, never>,
      Scalars['Float'] | string
    >
  }
  EventRecommendationsConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<EventRecommendationsConnection>,
      Record<string, never>,
      Array<WithTypename<EventRecommendationsEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<EventRecommendationsConnection>,
      Record<string, never>,
      Array<WithTypename<EventRecommendation> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<EventRecommendationsConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<EventRecommendationsConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  EventRecommendationsEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<EventRecommendationsEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<EventRecommendationsEdge>,
      Record<string, never>,
      WithTypename<EventRecommendation> | string
    >
  }
  EventUnlockPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<EventUnlockPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    eventUnlockResponse?: GraphCacheResolver<
      WithTypename<EventUnlockPayload>,
      Record<string, never>,
      WithTypename<EventUnlockResponse> | string
    >
    query?: GraphCacheResolver<
      WithTypename<EventUnlockPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  EventUnlockResponse?: {
    creatorUsername?: GraphCacheResolver<
      WithTypename<EventUnlockResponse>,
      Record<string, never>,
      Scalars['String'] | string
    >
    eventSlug?: GraphCacheResolver<
      WithTypename<EventUnlockResponse>,
      Record<string, never>,
      Scalars['String'] | string
    >
    jwt?: GraphCacheResolver<
      WithTypename<EventUnlockResponse>,
      Record<string, never>,
      Scalars['Jwt'] | string
    >
  }
  EventUpload?: {
    eventByEventId?: GraphCacheResolver<
      WithTypename<EventUpload>,
      Record<string, never>,
      WithTypename<Event> | string
    >
    eventId?: GraphCacheResolver<
      WithTypename<EventUpload>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    id?: GraphCacheResolver<
      WithTypename<EventUpload>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    isHeaderImage?: GraphCacheResolver<
      WithTypename<EventUpload>,
      Record<string, never>,
      Scalars['Boolean'] | string
    >
    nodeId?: GraphCacheResolver<
      WithTypename<EventUpload>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    uploadByUploadId?: GraphCacheResolver<
      WithTypename<EventUpload>,
      Record<string, never>,
      WithTypename<Upload> | string
    >
    uploadId?: GraphCacheResolver<
      WithTypename<EventUpload>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
  }
  EventUploadsConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<EventUploadsConnection>,
      Record<string, never>,
      Array<WithTypename<EventUploadsEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<EventUploadsConnection>,
      Record<string, never>,
      Array<WithTypename<EventUpload> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<EventUploadsConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<EventUploadsConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  EventUploadsEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<EventUploadsEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<EventUploadsEdge>,
      Record<string, never>,
      WithTypename<EventUpload> | string
    >
  }
  EventsConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<EventsConnection>,
      Record<string, never>,
      Array<WithTypename<EventsEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<EventsConnection>,
      Record<string, never>,
      Array<WithTypename<Event> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<EventsConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<EventsConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  EventsEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<EventsEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<EventsEdge>,
      Record<string, never>,
      WithTypename<Event> | string
    >
  }
  EventsOrganizedConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<EventsOrganizedConnection>,
      Record<string, never>,
      Array<WithTypename<EventsOrganizedEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<EventsOrganizedConnection>,
      Record<string, never>,
      Array<Scalars['UUID'] | string>
    >
    totalCount?: GraphCacheResolver<
      WithTypename<EventsOrganizedConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  EventsOrganizedEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<EventsOrganizedEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<EventsOrganizedEdge>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
  }
  Friendship?: {
    aAccountId?: GraphCacheResolver<
      WithTypename<Friendship>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    accountByAAccountId?: GraphCacheResolver<
      WithTypename<Friendship>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    accountByBAccountId?: GraphCacheResolver<
      WithTypename<Friendship>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    accountByCreatedBy?: GraphCacheResolver<
      WithTypename<Friendship>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    accountByUpdatedBy?: GraphCacheResolver<
      WithTypename<Friendship>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    bAccountId?: GraphCacheResolver<
      WithTypename<Friendship>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    createdAt?: GraphCacheResolver<
      WithTypename<Friendship>,
      Record<string, never>,
      Scalars['Datetime'] | string
    >
    createdBy?: GraphCacheResolver<
      WithTypename<Friendship>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    id?: GraphCacheResolver<
      WithTypename<Friendship>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    nodeId?: GraphCacheResolver<
      WithTypename<Friendship>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    status?: GraphCacheResolver<
      WithTypename<Friendship>,
      Record<string, never>,
      FriendshipStatus | string
    >
    updatedAt?: GraphCacheResolver<
      WithTypename<Friendship>,
      Record<string, never>,
      Scalars['Datetime'] | string
    >
    updatedBy?: GraphCacheResolver<
      WithTypename<Friendship>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
  }
  FriendshipsConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<FriendshipsConnection>,
      Record<string, never>,
      Array<WithTypename<FriendshipsEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<FriendshipsConnection>,
      Record<string, never>,
      Array<WithTypename<Friendship> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<FriendshipsConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<FriendshipsConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  FriendshipsEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<FriendshipsEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<FriendshipsEdge>,
      Record<string, never>,
      WithTypename<Friendship> | string
    >
  }
  GeographyPoint?: {
    geojson?: GraphCacheResolver<
      WithTypename<GeographyPoint>,
      Record<string, never>,
      Scalars['GeoJSON'] | string
    >
    latitude?: GraphCacheResolver<
      WithTypename<GeographyPoint>,
      Record<string, never>,
      Scalars['Float'] | string
    >
    longitude?: GraphCacheResolver<
      WithTypename<GeographyPoint>,
      Record<string, never>,
      Scalars['Float'] | string
    >
    srid?: GraphCacheResolver<
      WithTypename<GeographyPoint>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  Guest?: {
    accountByUpdatedBy?: GraphCacheResolver<
      WithTypename<Guest>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    contactByContactId?: GraphCacheResolver<
      WithTypename<Guest>,
      Record<string, never>,
      WithTypename<Contact> | string
    >
    contactId?: GraphCacheResolver<
      WithTypename<Guest>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    createdAt?: GraphCacheResolver<
      WithTypename<Guest>,
      Record<string, never>,
      Scalars['Datetime'] | string
    >
    eventByEventId?: GraphCacheResolver<
      WithTypename<Guest>,
      Record<string, never>,
      WithTypename<Event> | string
    >
    eventId?: GraphCacheResolver<
      WithTypename<Guest>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    feedback?: GraphCacheResolver<
      WithTypename<Guest>,
      Record<string, never>,
      InvitationFeedback | string
    >
    feedbackPaper?: GraphCacheResolver<
      WithTypename<Guest>,
      Record<string, never>,
      InvitationFeedbackPaper | string
    >
    id?: GraphCacheResolver<
      WithTypename<Guest>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    nodeId?: GraphCacheResolver<
      WithTypename<Guest>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    updatedAt?: GraphCacheResolver<
      WithTypename<Guest>,
      Record<string, never>,
      Scalars['Datetime'] | string
    >
    updatedBy?: GraphCacheResolver<
      WithTypename<Guest>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
  }
  GuestContactIdEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<GuestContactIdEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<GuestContactIdEdge>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
  }
  GuestContactIdsConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<GuestContactIdsConnection>,
      Record<string, never>,
      Array<WithTypename<GuestContactIdEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<GuestContactIdsConnection>,
      Record<string, never>,
      Array<Scalars['UUID'] | string>
    >
    totalCount?: GraphCacheResolver<
      WithTypename<GuestContactIdsConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  GuestFlat?: {
    contactAccountId?: GraphCacheResolver<
      WithTypename<GuestFlat>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    contactAddressId?: GraphCacheResolver<
      WithTypename<GuestFlat>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    contactCreatedBy?: GraphCacheResolver<
      WithTypename<GuestFlat>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    contactEmailAddress?: GraphCacheResolver<
      WithTypename<GuestFlat>,
      Record<string, never>,
      Scalars['String'] | string
    >
    contactEmailAddressHash?: GraphCacheResolver<
      WithTypename<GuestFlat>,
      Record<string, never>,
      Scalars['String'] | string
    >
    contactFirstName?: GraphCacheResolver<
      WithTypename<GuestFlat>,
      Record<string, never>,
      Scalars['String'] | string
    >
    contactId?: GraphCacheResolver<
      WithTypename<GuestFlat>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    contactLastName?: GraphCacheResolver<
      WithTypename<GuestFlat>,
      Record<string, never>,
      Scalars['String'] | string
    >
    contactPhoneNumber?: GraphCacheResolver<
      WithTypename<GuestFlat>,
      Record<string, never>,
      Scalars['String'] | string
    >
    contactUrl?: GraphCacheResolver<
      WithTypename<GuestFlat>,
      Record<string, never>,
      Scalars['String'] | string
    >
    eventAddressId?: GraphCacheResolver<
      WithTypename<GuestFlat>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    eventCreatedBy?: GraphCacheResolver<
      WithTypename<GuestFlat>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    eventDescription?: GraphCacheResolver<
      WithTypename<GuestFlat>,
      Record<string, never>,
      Scalars['String'] | string
    >
    eventEnd?: GraphCacheResolver<
      WithTypename<GuestFlat>,
      Record<string, never>,
      Scalars['Datetime'] | string
    >
    eventGuestCountMaximum?: GraphCacheResolver<
      WithTypename<GuestFlat>,
      Record<string, never>,
      Scalars['Int'] | string
    >
    eventId?: GraphCacheResolver<
      WithTypename<GuestFlat>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    eventIsArchived?: GraphCacheResolver<
      WithTypename<GuestFlat>,
      Record<string, never>,
      Scalars['Boolean'] | string
    >
    eventIsInPerson?: GraphCacheResolver<
      WithTypename<GuestFlat>,
      Record<string, never>,
      Scalars['Boolean'] | string
    >
    eventIsRemote?: GraphCacheResolver<
      WithTypename<GuestFlat>,
      Record<string, never>,
      Scalars['Boolean'] | string
    >
    eventName?: GraphCacheResolver<
      WithTypename<GuestFlat>,
      Record<string, never>,
      Scalars['String'] | string
    >
    eventSlug?: GraphCacheResolver<
      WithTypename<GuestFlat>,
      Record<string, never>,
      Scalars['String'] | string
    >
    eventStart?: GraphCacheResolver<
      WithTypename<GuestFlat>,
      Record<string, never>,
      Scalars['Datetime'] | string
    >
    eventUrl?: GraphCacheResolver<
      WithTypename<GuestFlat>,
      Record<string, never>,
      Scalars['String'] | string
    >
    eventVisibility?: GraphCacheResolver<
      WithTypename<GuestFlat>,
      Record<string, never>,
      EventVisibility | string
    >
    guestContactId?: GraphCacheResolver<
      WithTypename<GuestFlat>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    guestEventId?: GraphCacheResolver<
      WithTypename<GuestFlat>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    guestFeedback?: GraphCacheResolver<
      WithTypename<GuestFlat>,
      Record<string, never>,
      InvitationFeedback | string
    >
    guestFeedbackPaper?: GraphCacheResolver<
      WithTypename<GuestFlat>,
      Record<string, never>,
      InvitationFeedbackPaper | string
    >
    guestId?: GraphCacheResolver<
      WithTypename<GuestFlat>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
  }
  GuestFlatsConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<GuestFlatsConnection>,
      Record<string, never>,
      Array<WithTypename<GuestFlatsEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<GuestFlatsConnection>,
      Record<string, never>,
      Array<WithTypename<GuestFlat> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<GuestFlatsConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<GuestFlatsConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  GuestFlatsEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<GuestFlatsEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<GuestFlatsEdge>,
      Record<string, never>,
      WithTypename<GuestFlat> | string
    >
  }
  GuestsConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<GuestsConnection>,
      Record<string, never>,
      Array<WithTypename<GuestsEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<GuestsConnection>,
      Record<string, never>,
      Array<WithTypename<Guest> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<GuestsConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<GuestsConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  GuestsEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<GuestsEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<GuestsEdge>,
      Record<string, never>,
      WithTypename<Guest> | string
    >
  }
  InvitePayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<InvitePayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    query?: GraphCacheResolver<
      WithTypename<InvitePayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  JwtRefreshPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<JwtRefreshPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    jwt?: GraphCacheResolver<
      WithTypename<JwtRefreshPayload>,
      Record<string, never>,
      Scalars['Jwt'] | string
    >
    query?: GraphCacheResolver<
      WithTypename<JwtRefreshPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  LegalTerm?: {
    createdAt?: GraphCacheResolver<
      WithTypename<LegalTerm>,
      Record<string, never>,
      Scalars['Datetime'] | string
    >
    id?: GraphCacheResolver<
      WithTypename<LegalTerm>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    language?: GraphCacheResolver<
      WithTypename<LegalTerm>,
      Record<string, never>,
      Scalars['String'] | string
    >
    legalTermAcceptancesByLegalTermId?: GraphCacheResolver<
      WithTypename<LegalTerm>,
      LegalTermLegalTermAcceptancesByLegalTermIdArgs,
      WithTypename<LegalTermAcceptancesConnection> | string
    >
    nodeId?: GraphCacheResolver<
      WithTypename<LegalTerm>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    term?: GraphCacheResolver<
      WithTypename<LegalTerm>,
      Record<string, never>,
      Scalars['String'] | string
    >
    version?: GraphCacheResolver<
      WithTypename<LegalTerm>,
      Record<string, never>,
      Scalars['String'] | string
    >
  }
  LegalTermAcceptance?: {
    accountByAccountId?: GraphCacheResolver<
      WithTypename<LegalTermAcceptance>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    accountId?: GraphCacheResolver<
      WithTypename<LegalTermAcceptance>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    createdAt?: GraphCacheResolver<
      WithTypename<LegalTermAcceptance>,
      Record<string, never>,
      Scalars['Datetime'] | string
    >
    id?: GraphCacheResolver<
      WithTypename<LegalTermAcceptance>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    legalTermByLegalTermId?: GraphCacheResolver<
      WithTypename<LegalTermAcceptance>,
      Record<string, never>,
      WithTypename<LegalTerm> | string
    >
    legalTermId?: GraphCacheResolver<
      WithTypename<LegalTermAcceptance>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    nodeId?: GraphCacheResolver<
      WithTypename<LegalTermAcceptance>,
      Record<string, never>,
      Scalars['ID'] | string
    >
  }
  LegalTermAcceptancesConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<LegalTermAcceptancesConnection>,
      Record<string, never>,
      Array<WithTypename<LegalTermAcceptancesEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<LegalTermAcceptancesConnection>,
      Record<string, never>,
      Array<WithTypename<LegalTermAcceptance> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<LegalTermAcceptancesConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<LegalTermAcceptancesConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  LegalTermAcceptancesEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<LegalTermAcceptancesEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<LegalTermAcceptancesEdge>,
      Record<string, never>,
      WithTypename<LegalTermAcceptance> | string
    >
  }
  LegalTermsConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<LegalTermsConnection>,
      Record<string, never>,
      Array<WithTypename<LegalTermsEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<LegalTermsConnection>,
      Record<string, never>,
      Array<WithTypename<LegalTerm> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<LegalTermsConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<LegalTermsConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  LegalTermsEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<LegalTermsEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<LegalTermsEdge>,
      Record<string, never>,
      WithTypename<LegalTerm> | string
    >
  }
  NotificationAcknowledgePayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<NotificationAcknowledgePayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    query?: GraphCacheResolver<
      WithTypename<NotificationAcknowledgePayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  PageInfo?: {
    endCursor?: GraphCacheResolver<
      WithTypename<PageInfo>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    hasNextPage?: GraphCacheResolver<
      WithTypename<PageInfo>,
      Record<string, never>,
      Scalars['Boolean'] | string
    >
    hasPreviousPage?: GraphCacheResolver<
      WithTypename<PageInfo>,
      Record<string, never>,
      Scalars['Boolean'] | string
    >
    startCursor?: GraphCacheResolver<
      WithTypename<PageInfo>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
  }
  PreferenceEventCategoriesConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<PreferenceEventCategoriesConnection>,
      Record<string, never>,
      Array<WithTypename<PreferenceEventCategoriesEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<PreferenceEventCategoriesConnection>,
      Record<string, never>,
      Array<WithTypename<PreferenceEventCategory> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<PreferenceEventCategoriesConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<PreferenceEventCategoriesConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  PreferenceEventCategoriesEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<PreferenceEventCategoriesEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<PreferenceEventCategoriesEdge>,
      Record<string, never>,
      WithTypename<PreferenceEventCategory> | string
    >
  }
  PreferenceEventCategory?: {
    accountByAccountId?: GraphCacheResolver<
      WithTypename<PreferenceEventCategory>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    accountId?: GraphCacheResolver<
      WithTypename<PreferenceEventCategory>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    categoryId?: GraphCacheResolver<
      WithTypename<PreferenceEventCategory>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    createdAt?: GraphCacheResolver<
      WithTypename<PreferenceEventCategory>,
      Record<string, never>,
      Scalars['Datetime'] | string
    >
    eventCategoryByCategoryId?: GraphCacheResolver<
      WithTypename<PreferenceEventCategory>,
      Record<string, never>,
      WithTypename<EventCategory> | string
    >
    id?: GraphCacheResolver<
      WithTypename<PreferenceEventCategory>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    nodeId?: GraphCacheResolver<
      WithTypename<PreferenceEventCategory>,
      Record<string, never>,
      Scalars['ID'] | string
    >
  }
  PreferenceEventFormat?: {
    accountByAccountId?: GraphCacheResolver<
      WithTypename<PreferenceEventFormat>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    accountId?: GraphCacheResolver<
      WithTypename<PreferenceEventFormat>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    createdAt?: GraphCacheResolver<
      WithTypename<PreferenceEventFormat>,
      Record<string, never>,
      Scalars['Datetime'] | string
    >
    eventFormatByFormatId?: GraphCacheResolver<
      WithTypename<PreferenceEventFormat>,
      Record<string, never>,
      WithTypename<EventFormat> | string
    >
    formatId?: GraphCacheResolver<
      WithTypename<PreferenceEventFormat>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    id?: GraphCacheResolver<
      WithTypename<PreferenceEventFormat>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    nodeId?: GraphCacheResolver<
      WithTypename<PreferenceEventFormat>,
      Record<string, never>,
      Scalars['ID'] | string
    >
  }
  PreferenceEventFormatsConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<PreferenceEventFormatsConnection>,
      Record<string, never>,
      Array<WithTypename<PreferenceEventFormatsEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<PreferenceEventFormatsConnection>,
      Record<string, never>,
      Array<WithTypename<PreferenceEventFormat> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<PreferenceEventFormatsConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<PreferenceEventFormatsConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  PreferenceEventFormatsEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<PreferenceEventFormatsEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<PreferenceEventFormatsEdge>,
      Record<string, never>,
      WithTypename<PreferenceEventFormat> | string
    >
  }
  PreferenceEventLocation?: {
    accountByCreatedBy?: GraphCacheResolver<
      WithTypename<PreferenceEventLocation>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    createdAt?: GraphCacheResolver<
      WithTypename<PreferenceEventLocation>,
      Record<string, never>,
      Scalars['Datetime'] | string
    >
    createdBy?: GraphCacheResolver<
      WithTypename<PreferenceEventLocation>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    id?: GraphCacheResolver<
      WithTypename<PreferenceEventLocation>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    location?: GraphCacheResolver<
      WithTypename<PreferenceEventLocation>,
      Record<string, never>,
      WithTypename<GeographyPoint> | string
    >
    nodeId?: GraphCacheResolver<
      WithTypename<PreferenceEventLocation>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    radius?: GraphCacheResolver<
      WithTypename<PreferenceEventLocation>,
      Record<string, never>,
      Scalars['Float'] | string
    >
  }
  PreferenceEventLocationsConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<PreferenceEventLocationsConnection>,
      Record<string, never>,
      Array<WithTypename<PreferenceEventLocationsEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<PreferenceEventLocationsConnection>,
      Record<string, never>,
      Array<WithTypename<PreferenceEventLocation> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<PreferenceEventLocationsConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<PreferenceEventLocationsConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  PreferenceEventLocationsEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<PreferenceEventLocationsEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<PreferenceEventLocationsEdge>,
      Record<string, never>,
      WithTypename<PreferenceEventLocation> | string
    >
  }
  PreferenceEventSize?: {
    accountByAccountId?: GraphCacheResolver<
      WithTypename<PreferenceEventSize>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    accountId?: GraphCacheResolver<
      WithTypename<PreferenceEventSize>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    createdAt?: GraphCacheResolver<
      WithTypename<PreferenceEventSize>,
      Record<string, never>,
      Scalars['Datetime'] | string
    >
    eventSize?: GraphCacheResolver<
      WithTypename<PreferenceEventSize>,
      Record<string, never>,
      EventSize | string
    >
    id?: GraphCacheResolver<
      WithTypename<PreferenceEventSize>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    nodeId?: GraphCacheResolver<
      WithTypename<PreferenceEventSize>,
      Record<string, never>,
      Scalars['ID'] | string
    >
  }
  PreferenceEventSizesConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<PreferenceEventSizesConnection>,
      Record<string, never>,
      Array<WithTypename<PreferenceEventSizesEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<PreferenceEventSizesConnection>,
      Record<string, never>,
      Array<WithTypename<PreferenceEventSize> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<PreferenceEventSizesConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<PreferenceEventSizesConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  PreferenceEventSizesEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<PreferenceEventSizesEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<PreferenceEventSizesEdge>,
      Record<string, never>,
      WithTypename<PreferenceEventSize> | string
    >
  }
  ProfilePicture?: {
    accountByAccountId?: GraphCacheResolver<
      WithTypename<ProfilePicture>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    accountId?: GraphCacheResolver<
      WithTypename<ProfilePicture>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    id?: GraphCacheResolver<
      WithTypename<ProfilePicture>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    nodeId?: GraphCacheResolver<
      WithTypename<ProfilePicture>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    uploadByUploadId?: GraphCacheResolver<
      WithTypename<ProfilePicture>,
      Record<string, never>,
      WithTypename<Upload> | string
    >
    uploadId?: GraphCacheResolver<
      WithTypename<ProfilePicture>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
  }
  ProfilePictureSetPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<ProfilePictureSetPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    query?: GraphCacheResolver<
      WithTypename<ProfilePictureSetPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  ProfilePicturesConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<ProfilePicturesConnection>,
      Record<string, never>,
      Array<WithTypename<ProfilePicturesEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<ProfilePicturesConnection>,
      Record<string, never>,
      Array<WithTypename<ProfilePicture> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<ProfilePicturesConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<ProfilePicturesConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  ProfilePicturesEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<ProfilePicturesEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<ProfilePicturesEdge>,
      Record<string, never>,
      WithTypename<ProfilePicture> | string
    >
  }
  Report?: {
    accountByCreatedBy?: GraphCacheResolver<
      WithTypename<Report>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    accountByTargetAccountId?: GraphCacheResolver<
      WithTypename<Report>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    createdAt?: GraphCacheResolver<
      WithTypename<Report>,
      Record<string, never>,
      Scalars['Datetime'] | string
    >
    createdBy?: GraphCacheResolver<
      WithTypename<Report>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    eventByTargetEventId?: GraphCacheResolver<
      WithTypename<Report>,
      Record<string, never>,
      WithTypename<Event> | string
    >
    id?: GraphCacheResolver<
      WithTypename<Report>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    nodeId?: GraphCacheResolver<
      WithTypename<Report>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    reason?: GraphCacheResolver<
      WithTypename<Report>,
      Record<string, never>,
      Scalars['String'] | string
    >
    targetAccountId?: GraphCacheResolver<
      WithTypename<Report>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    targetEventId?: GraphCacheResolver<
      WithTypename<Report>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    targetUploadId?: GraphCacheResolver<
      WithTypename<Report>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    uploadByTargetUploadId?: GraphCacheResolver<
      WithTypename<Report>,
      Record<string, never>,
      WithTypename<Upload> | string
    >
  }
  ReportsConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<ReportsConnection>,
      Record<string, never>,
      Array<WithTypename<ReportsEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<ReportsConnection>,
      Record<string, never>,
      Array<WithTypename<Report> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<ReportsConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<ReportsConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  ReportsEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<ReportsEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<ReportsEdge>,
      Record<string, never>,
      WithTypename<Report> | string
    >
  }
  UpdateAccountLocationPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<UpdateAccountLocationPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    query?: GraphCacheResolver<
      WithTypename<UpdateAccountLocationPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  UpdateAccountPayload?: {
    account?: GraphCacheResolver<
      WithTypename<UpdateAccountPayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    accountEdge?: GraphCacheResolver<
      WithTypename<UpdateAccountPayload>,
      UpdateAccountPayloadAccountEdgeArgs,
      WithTypename<AccountsEdge> | string
    >
    clientMutationId?: GraphCacheResolver<
      WithTypename<UpdateAccountPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    query?: GraphCacheResolver<
      WithTypename<UpdateAccountPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  UpdateAccountSocialNetworkPayload?: {
    accountByAccountId?: GraphCacheResolver<
      WithTypename<UpdateAccountSocialNetworkPayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    accountSocialNetwork?: GraphCacheResolver<
      WithTypename<UpdateAccountSocialNetworkPayload>,
      Record<string, never>,
      WithTypename<AccountSocialNetwork> | string
    >
    accountSocialNetworkEdge?: GraphCacheResolver<
      WithTypename<UpdateAccountSocialNetworkPayload>,
      UpdateAccountSocialNetworkPayloadAccountSocialNetworkEdgeArgs,
      WithTypename<AccountSocialNetworksEdge> | string
    >
    clientMutationId?: GraphCacheResolver<
      WithTypename<UpdateAccountSocialNetworkPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    query?: GraphCacheResolver<
      WithTypename<UpdateAccountSocialNetworkPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  UpdateAchievementPayload?: {
    accountByAccountId?: GraphCacheResolver<
      WithTypename<UpdateAchievementPayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    achievement?: GraphCacheResolver<
      WithTypename<UpdateAchievementPayload>,
      Record<string, never>,
      WithTypename<Achievement> | string
    >
    achievementEdge?: GraphCacheResolver<
      WithTypename<UpdateAchievementPayload>,
      UpdateAchievementPayloadAchievementEdgeArgs,
      WithTypename<AchievementsEdge> | string
    >
    clientMutationId?: GraphCacheResolver<
      WithTypename<UpdateAchievementPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    query?: GraphCacheResolver<
      WithTypename<UpdateAchievementPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  UpdateAddressPayload?: {
    accountByCreatedBy?: GraphCacheResolver<
      WithTypename<UpdateAddressPayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    accountByUpdatedBy?: GraphCacheResolver<
      WithTypename<UpdateAddressPayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    address?: GraphCacheResolver<
      WithTypename<UpdateAddressPayload>,
      Record<string, never>,
      WithTypename<Address> | string
    >
    addressEdge?: GraphCacheResolver<
      WithTypename<UpdateAddressPayload>,
      UpdateAddressPayloadAddressEdgeArgs,
      WithTypename<AddressesEdge> | string
    >
    clientMutationId?: GraphCacheResolver<
      WithTypename<UpdateAddressPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    query?: GraphCacheResolver<
      WithTypename<UpdateAddressPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  UpdateContactPayload?: {
    accountByAccountId?: GraphCacheResolver<
      WithTypename<UpdateContactPayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    accountByCreatedBy?: GraphCacheResolver<
      WithTypename<UpdateContactPayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    addressByAddressId?: GraphCacheResolver<
      WithTypename<UpdateContactPayload>,
      Record<string, never>,
      WithTypename<Address> | string
    >
    clientMutationId?: GraphCacheResolver<
      WithTypename<UpdateContactPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    contact?: GraphCacheResolver<
      WithTypename<UpdateContactPayload>,
      Record<string, never>,
      WithTypename<Contact> | string
    >
    contactEdge?: GraphCacheResolver<
      WithTypename<UpdateContactPayload>,
      UpdateContactPayloadContactEdgeArgs,
      WithTypename<ContactsEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<UpdateContactPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  UpdateDevicePayload?: {
    accountByCreatedBy?: GraphCacheResolver<
      WithTypename<UpdateDevicePayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    accountByUpdatedBy?: GraphCacheResolver<
      WithTypename<UpdateDevicePayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    clientMutationId?: GraphCacheResolver<
      WithTypename<UpdateDevicePayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    device?: GraphCacheResolver<
      WithTypename<UpdateDevicePayload>,
      Record<string, never>,
      WithTypename<Device> | string
    >
    deviceEdge?: GraphCacheResolver<
      WithTypename<UpdateDevicePayload>,
      UpdateDevicePayloadDeviceEdgeArgs,
      WithTypename<DevicesEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<UpdateDevicePayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  UpdateEventCategoryMappingPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<UpdateEventCategoryMappingPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    eventByEventId?: GraphCacheResolver<
      WithTypename<UpdateEventCategoryMappingPayload>,
      Record<string, never>,
      WithTypename<Event> | string
    >
    eventCategoryByCategoryId?: GraphCacheResolver<
      WithTypename<UpdateEventCategoryMappingPayload>,
      Record<string, never>,
      WithTypename<EventCategory> | string
    >
    eventCategoryMapping?: GraphCacheResolver<
      WithTypename<UpdateEventCategoryMappingPayload>,
      Record<string, never>,
      WithTypename<EventCategoryMapping> | string
    >
    eventCategoryMappingEdge?: GraphCacheResolver<
      WithTypename<UpdateEventCategoryMappingPayload>,
      UpdateEventCategoryMappingPayloadEventCategoryMappingEdgeArgs,
      WithTypename<EventCategoryMappingsEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<UpdateEventCategoryMappingPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  UpdateEventFormatMappingPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<UpdateEventFormatMappingPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    eventByEventId?: GraphCacheResolver<
      WithTypename<UpdateEventFormatMappingPayload>,
      Record<string, never>,
      WithTypename<Event> | string
    >
    eventFormatByFormatId?: GraphCacheResolver<
      WithTypename<UpdateEventFormatMappingPayload>,
      Record<string, never>,
      WithTypename<EventFormat> | string
    >
    eventFormatMapping?: GraphCacheResolver<
      WithTypename<UpdateEventFormatMappingPayload>,
      Record<string, never>,
      WithTypename<EventFormatMapping> | string
    >
    eventFormatMappingEdge?: GraphCacheResolver<
      WithTypename<UpdateEventFormatMappingPayload>,
      UpdateEventFormatMappingPayloadEventFormatMappingEdgeArgs,
      WithTypename<EventFormatMappingsEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<UpdateEventFormatMappingPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  UpdateEventPayload?: {
    accountByCreatedBy?: GraphCacheResolver<
      WithTypename<UpdateEventPayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    addressByAddressId?: GraphCacheResolver<
      WithTypename<UpdateEventPayload>,
      Record<string, never>,
      WithTypename<Address> | string
    >
    clientMutationId?: GraphCacheResolver<
      WithTypename<UpdateEventPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    event?: GraphCacheResolver<
      WithTypename<UpdateEventPayload>,
      Record<string, never>,
      WithTypename<Event> | string
    >
    eventEdge?: GraphCacheResolver<
      WithTypename<UpdateEventPayload>,
      UpdateEventPayloadEventEdgeArgs,
      WithTypename<EventsEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<UpdateEventPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  UpdateEventRecommendationPayload?: {
    accountByAccountId?: GraphCacheResolver<
      WithTypename<UpdateEventRecommendationPayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    clientMutationId?: GraphCacheResolver<
      WithTypename<UpdateEventRecommendationPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    eventByEventId?: GraphCacheResolver<
      WithTypename<UpdateEventRecommendationPayload>,
      Record<string, never>,
      WithTypename<Event> | string
    >
    eventRecommendation?: GraphCacheResolver<
      WithTypename<UpdateEventRecommendationPayload>,
      Record<string, never>,
      WithTypename<EventRecommendation> | string
    >
    eventRecommendationEdge?: GraphCacheResolver<
      WithTypename<UpdateEventRecommendationPayload>,
      UpdateEventRecommendationPayloadEventRecommendationEdgeArgs,
      WithTypename<EventRecommendationsEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<UpdateEventRecommendationPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  UpdateEventUploadPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<UpdateEventUploadPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    eventByEventId?: GraphCacheResolver<
      WithTypename<UpdateEventUploadPayload>,
      Record<string, never>,
      WithTypename<Event> | string
    >
    eventUpload?: GraphCacheResolver<
      WithTypename<UpdateEventUploadPayload>,
      Record<string, never>,
      WithTypename<EventUpload> | string
    >
    eventUploadEdge?: GraphCacheResolver<
      WithTypename<UpdateEventUploadPayload>,
      UpdateEventUploadPayloadEventUploadEdgeArgs,
      WithTypename<EventUploadsEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<UpdateEventUploadPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
    uploadByUploadId?: GraphCacheResolver<
      WithTypename<UpdateEventUploadPayload>,
      Record<string, never>,
      WithTypename<Upload> | string
    >
  }
  UpdateFriendshipPayload?: {
    accountByAAccountId?: GraphCacheResolver<
      WithTypename<UpdateFriendshipPayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    accountByBAccountId?: GraphCacheResolver<
      WithTypename<UpdateFriendshipPayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    accountByCreatedBy?: GraphCacheResolver<
      WithTypename<UpdateFriendshipPayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    accountByUpdatedBy?: GraphCacheResolver<
      WithTypename<UpdateFriendshipPayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    clientMutationId?: GraphCacheResolver<
      WithTypename<UpdateFriendshipPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    friendship?: GraphCacheResolver<
      WithTypename<UpdateFriendshipPayload>,
      Record<string, never>,
      WithTypename<Friendship> | string
    >
    friendshipEdge?: GraphCacheResolver<
      WithTypename<UpdateFriendshipPayload>,
      UpdateFriendshipPayloadFriendshipEdgeArgs,
      WithTypename<FriendshipsEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<UpdateFriendshipPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  UpdateGuestPayload?: {
    accountByUpdatedBy?: GraphCacheResolver<
      WithTypename<UpdateGuestPayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    clientMutationId?: GraphCacheResolver<
      WithTypename<UpdateGuestPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    contactByContactId?: GraphCacheResolver<
      WithTypename<UpdateGuestPayload>,
      Record<string, never>,
      WithTypename<Contact> | string
    >
    eventByEventId?: GraphCacheResolver<
      WithTypename<UpdateGuestPayload>,
      Record<string, never>,
      WithTypename<Event> | string
    >
    guest?: GraphCacheResolver<
      WithTypename<UpdateGuestPayload>,
      Record<string, never>,
      WithTypename<Guest> | string
    >
    guestEdge?: GraphCacheResolver<
      WithTypename<UpdateGuestPayload>,
      UpdateGuestPayloadGuestEdgeArgs,
      WithTypename<GuestsEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<UpdateGuestPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  UpdatePreferenceEventCategoryPayload?: {
    accountByAccountId?: GraphCacheResolver<
      WithTypename<UpdatePreferenceEventCategoryPayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    clientMutationId?: GraphCacheResolver<
      WithTypename<UpdatePreferenceEventCategoryPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    eventCategoryByCategoryId?: GraphCacheResolver<
      WithTypename<UpdatePreferenceEventCategoryPayload>,
      Record<string, never>,
      WithTypename<EventCategory> | string
    >
    preferenceEventCategory?: GraphCacheResolver<
      WithTypename<UpdatePreferenceEventCategoryPayload>,
      Record<string, never>,
      WithTypename<PreferenceEventCategory> | string
    >
    preferenceEventCategoryEdge?: GraphCacheResolver<
      WithTypename<UpdatePreferenceEventCategoryPayload>,
      UpdatePreferenceEventCategoryPayloadPreferenceEventCategoryEdgeArgs,
      WithTypename<PreferenceEventCategoriesEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<UpdatePreferenceEventCategoryPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  UpdatePreferenceEventFormatPayload?: {
    accountByAccountId?: GraphCacheResolver<
      WithTypename<UpdatePreferenceEventFormatPayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    clientMutationId?: GraphCacheResolver<
      WithTypename<UpdatePreferenceEventFormatPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    eventFormatByFormatId?: GraphCacheResolver<
      WithTypename<UpdatePreferenceEventFormatPayload>,
      Record<string, never>,
      WithTypename<EventFormat> | string
    >
    preferenceEventFormat?: GraphCacheResolver<
      WithTypename<UpdatePreferenceEventFormatPayload>,
      Record<string, never>,
      WithTypename<PreferenceEventFormat> | string
    >
    preferenceEventFormatEdge?: GraphCacheResolver<
      WithTypename<UpdatePreferenceEventFormatPayload>,
      UpdatePreferenceEventFormatPayloadPreferenceEventFormatEdgeArgs,
      WithTypename<PreferenceEventFormatsEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<UpdatePreferenceEventFormatPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  UpdatePreferenceEventLocationPayload?: {
    accountByCreatedBy?: GraphCacheResolver<
      WithTypename<UpdatePreferenceEventLocationPayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    clientMutationId?: GraphCacheResolver<
      WithTypename<UpdatePreferenceEventLocationPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    preferenceEventLocation?: GraphCacheResolver<
      WithTypename<UpdatePreferenceEventLocationPayload>,
      Record<string, never>,
      WithTypename<PreferenceEventLocation> | string
    >
    preferenceEventLocationEdge?: GraphCacheResolver<
      WithTypename<UpdatePreferenceEventLocationPayload>,
      UpdatePreferenceEventLocationPayloadPreferenceEventLocationEdgeArgs,
      WithTypename<PreferenceEventLocationsEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<UpdatePreferenceEventLocationPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  UpdatePreferenceEventSizePayload?: {
    accountByAccountId?: GraphCacheResolver<
      WithTypename<UpdatePreferenceEventSizePayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    clientMutationId?: GraphCacheResolver<
      WithTypename<UpdatePreferenceEventSizePayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    preferenceEventSize?: GraphCacheResolver<
      WithTypename<UpdatePreferenceEventSizePayload>,
      Record<string, never>,
      WithTypename<PreferenceEventSize> | string
    >
    preferenceEventSizeEdge?: GraphCacheResolver<
      WithTypename<UpdatePreferenceEventSizePayload>,
      UpdatePreferenceEventSizePayloadPreferenceEventSizeEdgeArgs,
      WithTypename<PreferenceEventSizesEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<UpdatePreferenceEventSizePayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  UpdateProfilePicturePayload?: {
    accountByAccountId?: GraphCacheResolver<
      WithTypename<UpdateProfilePicturePayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    clientMutationId?: GraphCacheResolver<
      WithTypename<UpdateProfilePicturePayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    profilePicture?: GraphCacheResolver<
      WithTypename<UpdateProfilePicturePayload>,
      Record<string, never>,
      WithTypename<ProfilePicture> | string
    >
    profilePictureEdge?: GraphCacheResolver<
      WithTypename<UpdateProfilePicturePayload>,
      UpdateProfilePicturePayloadProfilePictureEdgeArgs,
      WithTypename<ProfilePicturesEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<UpdateProfilePicturePayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
    uploadByUploadId?: GraphCacheResolver<
      WithTypename<UpdateProfilePicturePayload>,
      Record<string, never>,
      WithTypename<Upload> | string
    >
  }
  UpdateUploadPayload?: {
    accountByCreatedBy?: GraphCacheResolver<
      WithTypename<UpdateUploadPayload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    clientMutationId?: GraphCacheResolver<
      WithTypename<UpdateUploadPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    query?: GraphCacheResolver<
      WithTypename<UpdateUploadPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
    upload?: GraphCacheResolver<
      WithTypename<UpdateUploadPayload>,
      Record<string, never>,
      WithTypename<Upload> | string
    >
    uploadEdge?: GraphCacheResolver<
      WithTypename<UpdateUploadPayload>,
      UpdateUploadPayloadUploadEdgeArgs,
      WithTypename<UploadsEdge> | string
    >
  }
  Upload?: {
    accountByCreatedBy?: GraphCacheResolver<
      WithTypename<Upload>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    createdAt?: GraphCacheResolver<
      WithTypename<Upload>,
      Record<string, never>,
      Scalars['Datetime'] | string
    >
    createdBy?: GraphCacheResolver<
      WithTypename<Upload>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    eventUploadsByUploadId?: GraphCacheResolver<
      WithTypename<Upload>,
      UploadEventUploadsByUploadIdArgs,
      WithTypename<EventUploadsConnection> | string
    >
    id?: GraphCacheResolver<
      WithTypename<Upload>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    name?: GraphCacheResolver<
      WithTypename<Upload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    nodeId?: GraphCacheResolver<
      WithTypename<Upload>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    profilePicturesByUploadId?: GraphCacheResolver<
      WithTypename<Upload>,
      UploadProfilePicturesByUploadIdArgs,
      WithTypename<ProfilePicturesConnection> | string
    >
    reportsByTargetUploadId?: GraphCacheResolver<
      WithTypename<Upload>,
      UploadReportsByTargetUploadIdArgs,
      WithTypename<ReportsConnection> | string
    >
    sizeByte?: GraphCacheResolver<
      WithTypename<Upload>,
      Record<string, never>,
      Scalars['BigInt'] | string
    >
    storageKey?: GraphCacheResolver<
      WithTypename<Upload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    type?: GraphCacheResolver<
      WithTypename<Upload>,
      Record<string, never>,
      Scalars['String'] | string
    >
  }
  UploadsConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<UploadsConnection>,
      Record<string, never>,
      Array<WithTypename<UploadsEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<UploadsConnection>,
      Record<string, never>,
      Array<WithTypename<Upload> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<UploadsConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<UploadsConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  UploadsEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<UploadsEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<UploadsEdge>,
      Record<string, never>,
      WithTypename<Upload> | string
    >
  }
}

export type GraphCacheOptimisticUpdaters = {
  accountDelete?: GraphCacheOptimisticMutationResolver<
    MutationAccountDeleteArgs,
    Maybe<WithTypename<AccountDeletePayload>>
  >
  accountEmailAddressVerification?: GraphCacheOptimisticMutationResolver<
    MutationAccountEmailAddressVerificationArgs,
    Maybe<WithTypename<AccountEmailAddressVerificationPayload>>
  >
  accountPasswordChange?: GraphCacheOptimisticMutationResolver<
    MutationAccountPasswordChangeArgs,
    Maybe<WithTypename<AccountPasswordChangePayload>>
  >
  accountPasswordReset?: GraphCacheOptimisticMutationResolver<
    MutationAccountPasswordResetArgs,
    Maybe<WithTypename<AccountPasswordResetPayload>>
  >
  accountPasswordResetRequest?: GraphCacheOptimisticMutationResolver<
    MutationAccountPasswordResetRequestArgs,
    Maybe<WithTypename<AccountPasswordResetRequestPayload>>
  >
  accountRegistration?: GraphCacheOptimisticMutationResolver<
    MutationAccountRegistrationArgs,
    Maybe<WithTypename<AccountRegistrationPayload>>
  >
  accountRegistrationRefresh?: GraphCacheOptimisticMutationResolver<
    MutationAccountRegistrationRefreshArgs,
    Maybe<WithTypename<AccountRegistrationRefreshPayload>>
  >
  achievementUnlock?: GraphCacheOptimisticMutationResolver<
    MutationAchievementUnlockArgs,
    Maybe<WithTypename<AchievementUnlockPayload>>
  >
  authenticate?: GraphCacheOptimisticMutationResolver<
    MutationAuthenticateArgs,
    Maybe<WithTypename<AuthenticatePayload>>
  >
  createAccountBlock?: GraphCacheOptimisticMutationResolver<
    MutationCreateAccountBlockArgs,
    Maybe<WithTypename<CreateAccountBlockPayload>>
  >
  createAccountSocialNetwork?: GraphCacheOptimisticMutationResolver<
    MutationCreateAccountSocialNetworkArgs,
    Maybe<WithTypename<CreateAccountSocialNetworkPayload>>
  >
  createAchievement?: GraphCacheOptimisticMutationResolver<
    MutationCreateAchievementArgs,
    Maybe<WithTypename<CreateAchievementPayload>>
  >
  createAddress?: GraphCacheOptimisticMutationResolver<
    MutationCreateAddressArgs,
    Maybe<WithTypename<CreateAddressPayload>>
  >
  createContact?: GraphCacheOptimisticMutationResolver<
    MutationCreateContactArgs,
    Maybe<WithTypename<CreateContactPayload>>
  >
  createDevice?: GraphCacheOptimisticMutationResolver<
    MutationCreateDeviceArgs,
    Maybe<WithTypename<CreateDevicePayload>>
  >
  createEvent?: GraphCacheOptimisticMutationResolver<
    MutationCreateEventArgs,
    Maybe<WithTypename<CreateEventPayload>>
  >
  createEventCategoryMapping?: GraphCacheOptimisticMutationResolver<
    MutationCreateEventCategoryMappingArgs,
    Maybe<WithTypename<CreateEventCategoryMappingPayload>>
  >
  createEventFavorite?: GraphCacheOptimisticMutationResolver<
    MutationCreateEventFavoriteArgs,
    Maybe<WithTypename<CreateEventFavoritePayload>>
  >
  createEventFormatMapping?: GraphCacheOptimisticMutationResolver<
    MutationCreateEventFormatMappingArgs,
    Maybe<WithTypename<CreateEventFormatMappingPayload>>
  >
  createEventRecommendation?: GraphCacheOptimisticMutationResolver<
    MutationCreateEventRecommendationArgs,
    Maybe<WithTypename<CreateEventRecommendationPayload>>
  >
  createEventUpload?: GraphCacheOptimisticMutationResolver<
    MutationCreateEventUploadArgs,
    Maybe<WithTypename<CreateEventUploadPayload>>
  >
  createFriendship?: GraphCacheOptimisticMutationResolver<
    MutationCreateFriendshipArgs,
    Maybe<WithTypename<CreateFriendshipPayload>>
  >
  createGuest?: GraphCacheOptimisticMutationResolver<
    MutationCreateGuestArgs,
    Maybe<WithTypename<CreateGuestPayload>>
  >
  createGuests?: GraphCacheOptimisticMutationResolver<
    MutationCreateGuestsArgs,
    Maybe<WithTypename<CreateGuestsPayload>>
  >
  createLegalTermAcceptance?: GraphCacheOptimisticMutationResolver<
    MutationCreateLegalTermAcceptanceArgs,
    Maybe<WithTypename<CreateLegalTermAcceptancePayload>>
  >
  createPreferenceEventCategory?: GraphCacheOptimisticMutationResolver<
    MutationCreatePreferenceEventCategoryArgs,
    Maybe<WithTypename<CreatePreferenceEventCategoryPayload>>
  >
  createPreferenceEventFormat?: GraphCacheOptimisticMutationResolver<
    MutationCreatePreferenceEventFormatArgs,
    Maybe<WithTypename<CreatePreferenceEventFormatPayload>>
  >
  createPreferenceEventLocation?: GraphCacheOptimisticMutationResolver<
    MutationCreatePreferenceEventLocationArgs,
    Maybe<WithTypename<CreatePreferenceEventLocationPayload>>
  >
  createPreferenceEventSize?: GraphCacheOptimisticMutationResolver<
    MutationCreatePreferenceEventSizeArgs,
    Maybe<WithTypename<CreatePreferenceEventSizePayload>>
  >
  createProfilePicture?: GraphCacheOptimisticMutationResolver<
    MutationCreateProfilePictureArgs,
    Maybe<WithTypename<CreateProfilePicturePayload>>
  >
  createReport?: GraphCacheOptimisticMutationResolver<
    MutationCreateReportArgs,
    Maybe<WithTypename<CreateReportPayload>>
  >
  createUpload?: GraphCacheOptimisticMutationResolver<
    MutationCreateUploadArgs,
    Maybe<WithTypename<CreateUploadPayload>>
  >
  deleteAccountBlock?: GraphCacheOptimisticMutationResolver<
    MutationDeleteAccountBlockArgs,
    Maybe<WithTypename<DeleteAccountBlockPayload>>
  >
  deleteAccountBlockByCreatedByAndBlockedAccountId?: GraphCacheOptimisticMutationResolver<
    MutationDeleteAccountBlockByCreatedByAndBlockedAccountIdArgs,
    Maybe<WithTypename<DeleteAccountBlockPayload>>
  >
  deleteAccountBlockById?: GraphCacheOptimisticMutationResolver<
    MutationDeleteAccountBlockByIdArgs,
    Maybe<WithTypename<DeleteAccountBlockPayload>>
  >
  deleteAccountSocialNetwork?: GraphCacheOptimisticMutationResolver<
    MutationDeleteAccountSocialNetworkArgs,
    Maybe<WithTypename<DeleteAccountSocialNetworkPayload>>
  >
  deleteAccountSocialNetworkByAccountIdAndSocialNetwork?: GraphCacheOptimisticMutationResolver<
    MutationDeleteAccountSocialNetworkByAccountIdAndSocialNetworkArgs,
    Maybe<WithTypename<DeleteAccountSocialNetworkPayload>>
  >
  deleteAchievement?: GraphCacheOptimisticMutationResolver<
    MutationDeleteAchievementArgs,
    Maybe<WithTypename<DeleteAchievementPayload>>
  >
  deleteAchievementByAccountIdAndAchievement?: GraphCacheOptimisticMutationResolver<
    MutationDeleteAchievementByAccountIdAndAchievementArgs,
    Maybe<WithTypename<DeleteAchievementPayload>>
  >
  deleteAchievementById?: GraphCacheOptimisticMutationResolver<
    MutationDeleteAchievementByIdArgs,
    Maybe<WithTypename<DeleteAchievementPayload>>
  >
  deleteAddress?: GraphCacheOptimisticMutationResolver<
    MutationDeleteAddressArgs,
    Maybe<WithTypename<DeleteAddressPayload>>
  >
  deleteAddressById?: GraphCacheOptimisticMutationResolver<
    MutationDeleteAddressByIdArgs,
    Maybe<WithTypename<DeleteAddressPayload>>
  >
  deleteContact?: GraphCacheOptimisticMutationResolver<
    MutationDeleteContactArgs,
    Maybe<WithTypename<DeleteContactPayload>>
  >
  deleteContactByCreatedByAndAccountId?: GraphCacheOptimisticMutationResolver<
    MutationDeleteContactByCreatedByAndAccountIdArgs,
    Maybe<WithTypename<DeleteContactPayload>>
  >
  deleteContactById?: GraphCacheOptimisticMutationResolver<
    MutationDeleteContactByIdArgs,
    Maybe<WithTypename<DeleteContactPayload>>
  >
  deleteDevice?: GraphCacheOptimisticMutationResolver<
    MutationDeleteDeviceArgs,
    Maybe<WithTypename<DeleteDevicePayload>>
  >
  deleteDeviceByCreatedByAndFcmToken?: GraphCacheOptimisticMutationResolver<
    MutationDeleteDeviceByCreatedByAndFcmTokenArgs,
    Maybe<WithTypename<DeleteDevicePayload>>
  >
  deleteDeviceById?: GraphCacheOptimisticMutationResolver<
    MutationDeleteDeviceByIdArgs,
    Maybe<WithTypename<DeleteDevicePayload>>
  >
  deleteEvent?: GraphCacheOptimisticMutationResolver<
    MutationDeleteEventArgs,
    Maybe<WithTypename<DeleteEventPayload>>
  >
  deleteEventByCreatedByAndSlug?: GraphCacheOptimisticMutationResolver<
    MutationDeleteEventByCreatedByAndSlugArgs,
    Maybe<WithTypename<DeleteEventPayload>>
  >
  deleteEventById?: GraphCacheOptimisticMutationResolver<
    MutationDeleteEventByIdArgs,
    Maybe<WithTypename<DeleteEventPayload>>
  >
  deleteEventCategoryMapping?: GraphCacheOptimisticMutationResolver<
    MutationDeleteEventCategoryMappingArgs,
    Maybe<WithTypename<DeleteEventCategoryMappingPayload>>
  >
  deleteEventCategoryMappingByEventIdAndCategoryId?: GraphCacheOptimisticMutationResolver<
    MutationDeleteEventCategoryMappingByEventIdAndCategoryIdArgs,
    Maybe<WithTypename<DeleteEventCategoryMappingPayload>>
  >
  deleteEventFavorite?: GraphCacheOptimisticMutationResolver<
    MutationDeleteEventFavoriteArgs,
    Maybe<WithTypename<DeleteEventFavoritePayload>>
  >
  deleteEventFavoriteByCreatedByAndEventId?: GraphCacheOptimisticMutationResolver<
    MutationDeleteEventFavoriteByCreatedByAndEventIdArgs,
    Maybe<WithTypename<DeleteEventFavoritePayload>>
  >
  deleteEventFavoriteById?: GraphCacheOptimisticMutationResolver<
    MutationDeleteEventFavoriteByIdArgs,
    Maybe<WithTypename<DeleteEventFavoritePayload>>
  >
  deleteEventFormatMapping?: GraphCacheOptimisticMutationResolver<
    MutationDeleteEventFormatMappingArgs,
    Maybe<WithTypename<DeleteEventFormatMappingPayload>>
  >
  deleteEventFormatMappingByEventIdAndFormatId?: GraphCacheOptimisticMutationResolver<
    MutationDeleteEventFormatMappingByEventIdAndFormatIdArgs,
    Maybe<WithTypename<DeleteEventFormatMappingPayload>>
  >
  deleteEventRecommendation?: GraphCacheOptimisticMutationResolver<
    MutationDeleteEventRecommendationArgs,
    Maybe<WithTypename<DeleteEventRecommendationPayload>>
  >
  deleteEventRecommendationByAccountIdAndEventId?: GraphCacheOptimisticMutationResolver<
    MutationDeleteEventRecommendationByAccountIdAndEventIdArgs,
    Maybe<WithTypename<DeleteEventRecommendationPayload>>
  >
  deleteEventUpload?: GraphCacheOptimisticMutationResolver<
    MutationDeleteEventUploadArgs,
    Maybe<WithTypename<DeleteEventUploadPayload>>
  >
  deleteEventUploadByEventIdAndUploadId?: GraphCacheOptimisticMutationResolver<
    MutationDeleteEventUploadByEventIdAndUploadIdArgs,
    Maybe<WithTypename<DeleteEventUploadPayload>>
  >
  deleteEventUploadById?: GraphCacheOptimisticMutationResolver<
    MutationDeleteEventUploadByIdArgs,
    Maybe<WithTypename<DeleteEventUploadPayload>>
  >
  deleteFriendship?: GraphCacheOptimisticMutationResolver<
    MutationDeleteFriendshipArgs,
    Maybe<WithTypename<DeleteFriendshipPayload>>
  >
  deleteFriendshipByAAccountIdAndBAccountId?: GraphCacheOptimisticMutationResolver<
    MutationDeleteFriendshipByAAccountIdAndBAccountIdArgs,
    Maybe<WithTypename<DeleteFriendshipPayload>>
  >
  deleteFriendshipById?: GraphCacheOptimisticMutationResolver<
    MutationDeleteFriendshipByIdArgs,
    Maybe<WithTypename<DeleteFriendshipPayload>>
  >
  deleteGuest?: GraphCacheOptimisticMutationResolver<
    MutationDeleteGuestArgs,
    Maybe<WithTypename<DeleteGuestPayload>>
  >
  deleteGuestByEventIdAndContactId?: GraphCacheOptimisticMutationResolver<
    MutationDeleteGuestByEventIdAndContactIdArgs,
    Maybe<WithTypename<DeleteGuestPayload>>
  >
  deleteGuestById?: GraphCacheOptimisticMutationResolver<
    MutationDeleteGuestByIdArgs,
    Maybe<WithTypename<DeleteGuestPayload>>
  >
  deletePreferenceEventCategory?: GraphCacheOptimisticMutationResolver<
    MutationDeletePreferenceEventCategoryArgs,
    Maybe<WithTypename<DeletePreferenceEventCategoryPayload>>
  >
  deletePreferenceEventCategoryByAccountIdAndCategoryId?: GraphCacheOptimisticMutationResolver<
    MutationDeletePreferenceEventCategoryByAccountIdAndCategoryIdArgs,
    Maybe<WithTypename<DeletePreferenceEventCategoryPayload>>
  >
  deletePreferenceEventCategoryById?: GraphCacheOptimisticMutationResolver<
    MutationDeletePreferenceEventCategoryByIdArgs,
    Maybe<WithTypename<DeletePreferenceEventCategoryPayload>>
  >
  deletePreferenceEventFormat?: GraphCacheOptimisticMutationResolver<
    MutationDeletePreferenceEventFormatArgs,
    Maybe<WithTypename<DeletePreferenceEventFormatPayload>>
  >
  deletePreferenceEventFormatByAccountIdAndFormatId?: GraphCacheOptimisticMutationResolver<
    MutationDeletePreferenceEventFormatByAccountIdAndFormatIdArgs,
    Maybe<WithTypename<DeletePreferenceEventFormatPayload>>
  >
  deletePreferenceEventFormatById?: GraphCacheOptimisticMutationResolver<
    MutationDeletePreferenceEventFormatByIdArgs,
    Maybe<WithTypename<DeletePreferenceEventFormatPayload>>
  >
  deletePreferenceEventLocation?: GraphCacheOptimisticMutationResolver<
    MutationDeletePreferenceEventLocationArgs,
    Maybe<WithTypename<DeletePreferenceEventLocationPayload>>
  >
  deletePreferenceEventLocationByCreatedByAndLocationAndRadius?: GraphCacheOptimisticMutationResolver<
    MutationDeletePreferenceEventLocationByCreatedByAndLocationAndRadiusArgs,
    Maybe<WithTypename<DeletePreferenceEventLocationPayload>>
  >
  deletePreferenceEventLocationById?: GraphCacheOptimisticMutationResolver<
    MutationDeletePreferenceEventLocationByIdArgs,
    Maybe<WithTypename<DeletePreferenceEventLocationPayload>>
  >
  deletePreferenceEventSize?: GraphCacheOptimisticMutationResolver<
    MutationDeletePreferenceEventSizeArgs,
    Maybe<WithTypename<DeletePreferenceEventSizePayload>>
  >
  deletePreferenceEventSizeByAccountIdAndEventSize?: GraphCacheOptimisticMutationResolver<
    MutationDeletePreferenceEventSizeByAccountIdAndEventSizeArgs,
    Maybe<WithTypename<DeletePreferenceEventSizePayload>>
  >
  deletePreferenceEventSizeById?: GraphCacheOptimisticMutationResolver<
    MutationDeletePreferenceEventSizeByIdArgs,
    Maybe<WithTypename<DeletePreferenceEventSizePayload>>
  >
  deleteProfilePicture?: GraphCacheOptimisticMutationResolver<
    MutationDeleteProfilePictureArgs,
    Maybe<WithTypename<DeleteProfilePicturePayload>>
  >
  deleteProfilePictureByAccountId?: GraphCacheOptimisticMutationResolver<
    MutationDeleteProfilePictureByAccountIdArgs,
    Maybe<WithTypename<DeleteProfilePicturePayload>>
  >
  deleteProfilePictureById?: GraphCacheOptimisticMutationResolver<
    MutationDeleteProfilePictureByIdArgs,
    Maybe<WithTypename<DeleteProfilePicturePayload>>
  >
  deleteUpload?: GraphCacheOptimisticMutationResolver<
    MutationDeleteUploadArgs,
    Maybe<WithTypename<DeleteUploadPayload>>
  >
  deleteUploadById?: GraphCacheOptimisticMutationResolver<
    MutationDeleteUploadByIdArgs,
    Maybe<WithTypename<DeleteUploadPayload>>
  >
  deleteUploadByStorageKey?: GraphCacheOptimisticMutationResolver<
    MutationDeleteUploadByStorageKeyArgs,
    Maybe<WithTypename<DeleteUploadPayload>>
  >
  eventDelete?: GraphCacheOptimisticMutationResolver<
    MutationEventDeleteArgs,
    Maybe<WithTypename<EventDeletePayload>>
  >
  eventUnlock?: GraphCacheOptimisticMutationResolver<
    MutationEventUnlockArgs,
    Maybe<WithTypename<EventUnlockPayload>>
  >
  invite?: GraphCacheOptimisticMutationResolver<
    MutationInviteArgs,
    Maybe<WithTypename<InvitePayload>>
  >
  jwtRefresh?: GraphCacheOptimisticMutationResolver<
    MutationJwtRefreshArgs,
    Maybe<WithTypename<JwtRefreshPayload>>
  >
  notificationAcknowledge?: GraphCacheOptimisticMutationResolver<
    MutationNotificationAcknowledgeArgs,
    Maybe<WithTypename<NotificationAcknowledgePayload>>
  >
  profilePictureSet?: GraphCacheOptimisticMutationResolver<
    MutationProfilePictureSetArgs,
    Maybe<WithTypename<ProfilePictureSetPayload>>
  >
  updateAccount?: GraphCacheOptimisticMutationResolver<
    MutationUpdateAccountArgs,
    Maybe<WithTypename<UpdateAccountPayload>>
  >
  updateAccountById?: GraphCacheOptimisticMutationResolver<
    MutationUpdateAccountByIdArgs,
    Maybe<WithTypename<UpdateAccountPayload>>
  >
  updateAccountByUsername?: GraphCacheOptimisticMutationResolver<
    MutationUpdateAccountByUsernameArgs,
    Maybe<WithTypename<UpdateAccountPayload>>
  >
  updateAccountLocation?: GraphCacheOptimisticMutationResolver<
    MutationUpdateAccountLocationArgs,
    Maybe<WithTypename<UpdateAccountLocationPayload>>
  >
  updateAccountSocialNetwork?: GraphCacheOptimisticMutationResolver<
    MutationUpdateAccountSocialNetworkArgs,
    Maybe<WithTypename<UpdateAccountSocialNetworkPayload>>
  >
  updateAccountSocialNetworkByAccountIdAndSocialNetwork?: GraphCacheOptimisticMutationResolver<
    MutationUpdateAccountSocialNetworkByAccountIdAndSocialNetworkArgs,
    Maybe<WithTypename<UpdateAccountSocialNetworkPayload>>
  >
  updateAchievement?: GraphCacheOptimisticMutationResolver<
    MutationUpdateAchievementArgs,
    Maybe<WithTypename<UpdateAchievementPayload>>
  >
  updateAchievementByAccountIdAndAchievement?: GraphCacheOptimisticMutationResolver<
    MutationUpdateAchievementByAccountIdAndAchievementArgs,
    Maybe<WithTypename<UpdateAchievementPayload>>
  >
  updateAchievementById?: GraphCacheOptimisticMutationResolver<
    MutationUpdateAchievementByIdArgs,
    Maybe<WithTypename<UpdateAchievementPayload>>
  >
  updateAddress?: GraphCacheOptimisticMutationResolver<
    MutationUpdateAddressArgs,
    Maybe<WithTypename<UpdateAddressPayload>>
  >
  updateAddressById?: GraphCacheOptimisticMutationResolver<
    MutationUpdateAddressByIdArgs,
    Maybe<WithTypename<UpdateAddressPayload>>
  >
  updateContact?: GraphCacheOptimisticMutationResolver<
    MutationUpdateContactArgs,
    Maybe<WithTypename<UpdateContactPayload>>
  >
  updateContactByCreatedByAndAccountId?: GraphCacheOptimisticMutationResolver<
    MutationUpdateContactByCreatedByAndAccountIdArgs,
    Maybe<WithTypename<UpdateContactPayload>>
  >
  updateContactById?: GraphCacheOptimisticMutationResolver<
    MutationUpdateContactByIdArgs,
    Maybe<WithTypename<UpdateContactPayload>>
  >
  updateDevice?: GraphCacheOptimisticMutationResolver<
    MutationUpdateDeviceArgs,
    Maybe<WithTypename<UpdateDevicePayload>>
  >
  updateDeviceByCreatedByAndFcmToken?: GraphCacheOptimisticMutationResolver<
    MutationUpdateDeviceByCreatedByAndFcmTokenArgs,
    Maybe<WithTypename<UpdateDevicePayload>>
  >
  updateDeviceById?: GraphCacheOptimisticMutationResolver<
    MutationUpdateDeviceByIdArgs,
    Maybe<WithTypename<UpdateDevicePayload>>
  >
  updateEvent?: GraphCacheOptimisticMutationResolver<
    MutationUpdateEventArgs,
    Maybe<WithTypename<UpdateEventPayload>>
  >
  updateEventByCreatedByAndSlug?: GraphCacheOptimisticMutationResolver<
    MutationUpdateEventByCreatedByAndSlugArgs,
    Maybe<WithTypename<UpdateEventPayload>>
  >
  updateEventById?: GraphCacheOptimisticMutationResolver<
    MutationUpdateEventByIdArgs,
    Maybe<WithTypename<UpdateEventPayload>>
  >
  updateEventCategoryMapping?: GraphCacheOptimisticMutationResolver<
    MutationUpdateEventCategoryMappingArgs,
    Maybe<WithTypename<UpdateEventCategoryMappingPayload>>
  >
  updateEventCategoryMappingByEventIdAndCategoryId?: GraphCacheOptimisticMutationResolver<
    MutationUpdateEventCategoryMappingByEventIdAndCategoryIdArgs,
    Maybe<WithTypename<UpdateEventCategoryMappingPayload>>
  >
  updateEventFormatMapping?: GraphCacheOptimisticMutationResolver<
    MutationUpdateEventFormatMappingArgs,
    Maybe<WithTypename<UpdateEventFormatMappingPayload>>
  >
  updateEventFormatMappingByEventIdAndFormatId?: GraphCacheOptimisticMutationResolver<
    MutationUpdateEventFormatMappingByEventIdAndFormatIdArgs,
    Maybe<WithTypename<UpdateEventFormatMappingPayload>>
  >
  updateEventRecommendation?: GraphCacheOptimisticMutationResolver<
    MutationUpdateEventRecommendationArgs,
    Maybe<WithTypename<UpdateEventRecommendationPayload>>
  >
  updateEventRecommendationByAccountIdAndEventId?: GraphCacheOptimisticMutationResolver<
    MutationUpdateEventRecommendationByAccountIdAndEventIdArgs,
    Maybe<WithTypename<UpdateEventRecommendationPayload>>
  >
  updateEventUpload?: GraphCacheOptimisticMutationResolver<
    MutationUpdateEventUploadArgs,
    Maybe<WithTypename<UpdateEventUploadPayload>>
  >
  updateEventUploadByEventIdAndUploadId?: GraphCacheOptimisticMutationResolver<
    MutationUpdateEventUploadByEventIdAndUploadIdArgs,
    Maybe<WithTypename<UpdateEventUploadPayload>>
  >
  updateEventUploadById?: GraphCacheOptimisticMutationResolver<
    MutationUpdateEventUploadByIdArgs,
    Maybe<WithTypename<UpdateEventUploadPayload>>
  >
  updateFriendship?: GraphCacheOptimisticMutationResolver<
    MutationUpdateFriendshipArgs,
    Maybe<WithTypename<UpdateFriendshipPayload>>
  >
  updateFriendshipByAAccountIdAndBAccountId?: GraphCacheOptimisticMutationResolver<
    MutationUpdateFriendshipByAAccountIdAndBAccountIdArgs,
    Maybe<WithTypename<UpdateFriendshipPayload>>
  >
  updateFriendshipById?: GraphCacheOptimisticMutationResolver<
    MutationUpdateFriendshipByIdArgs,
    Maybe<WithTypename<UpdateFriendshipPayload>>
  >
  updateGuest?: GraphCacheOptimisticMutationResolver<
    MutationUpdateGuestArgs,
    Maybe<WithTypename<UpdateGuestPayload>>
  >
  updateGuestByEventIdAndContactId?: GraphCacheOptimisticMutationResolver<
    MutationUpdateGuestByEventIdAndContactIdArgs,
    Maybe<WithTypename<UpdateGuestPayload>>
  >
  updateGuestById?: GraphCacheOptimisticMutationResolver<
    MutationUpdateGuestByIdArgs,
    Maybe<WithTypename<UpdateGuestPayload>>
  >
  updatePreferenceEventCategory?: GraphCacheOptimisticMutationResolver<
    MutationUpdatePreferenceEventCategoryArgs,
    Maybe<WithTypename<UpdatePreferenceEventCategoryPayload>>
  >
  updatePreferenceEventCategoryByAccountIdAndCategoryId?: GraphCacheOptimisticMutationResolver<
    MutationUpdatePreferenceEventCategoryByAccountIdAndCategoryIdArgs,
    Maybe<WithTypename<UpdatePreferenceEventCategoryPayload>>
  >
  updatePreferenceEventCategoryById?: GraphCacheOptimisticMutationResolver<
    MutationUpdatePreferenceEventCategoryByIdArgs,
    Maybe<WithTypename<UpdatePreferenceEventCategoryPayload>>
  >
  updatePreferenceEventFormat?: GraphCacheOptimisticMutationResolver<
    MutationUpdatePreferenceEventFormatArgs,
    Maybe<WithTypename<UpdatePreferenceEventFormatPayload>>
  >
  updatePreferenceEventFormatByAccountIdAndFormatId?: GraphCacheOptimisticMutationResolver<
    MutationUpdatePreferenceEventFormatByAccountIdAndFormatIdArgs,
    Maybe<WithTypename<UpdatePreferenceEventFormatPayload>>
  >
  updatePreferenceEventFormatById?: GraphCacheOptimisticMutationResolver<
    MutationUpdatePreferenceEventFormatByIdArgs,
    Maybe<WithTypename<UpdatePreferenceEventFormatPayload>>
  >
  updatePreferenceEventLocation?: GraphCacheOptimisticMutationResolver<
    MutationUpdatePreferenceEventLocationArgs,
    Maybe<WithTypename<UpdatePreferenceEventLocationPayload>>
  >
  updatePreferenceEventLocationByCreatedByAndLocationAndRadius?: GraphCacheOptimisticMutationResolver<
    MutationUpdatePreferenceEventLocationByCreatedByAndLocationAndRadiusArgs,
    Maybe<WithTypename<UpdatePreferenceEventLocationPayload>>
  >
  updatePreferenceEventLocationById?: GraphCacheOptimisticMutationResolver<
    MutationUpdatePreferenceEventLocationByIdArgs,
    Maybe<WithTypename<UpdatePreferenceEventLocationPayload>>
  >
  updatePreferenceEventSize?: GraphCacheOptimisticMutationResolver<
    MutationUpdatePreferenceEventSizeArgs,
    Maybe<WithTypename<UpdatePreferenceEventSizePayload>>
  >
  updatePreferenceEventSizeByAccountIdAndEventSize?: GraphCacheOptimisticMutationResolver<
    MutationUpdatePreferenceEventSizeByAccountIdAndEventSizeArgs,
    Maybe<WithTypename<UpdatePreferenceEventSizePayload>>
  >
  updatePreferenceEventSizeById?: GraphCacheOptimisticMutationResolver<
    MutationUpdatePreferenceEventSizeByIdArgs,
    Maybe<WithTypename<UpdatePreferenceEventSizePayload>>
  >
  updateProfilePicture?: GraphCacheOptimisticMutationResolver<
    MutationUpdateProfilePictureArgs,
    Maybe<WithTypename<UpdateProfilePicturePayload>>
  >
  updateProfilePictureByAccountId?: GraphCacheOptimisticMutationResolver<
    MutationUpdateProfilePictureByAccountIdArgs,
    Maybe<WithTypename<UpdateProfilePicturePayload>>
  >
  updateProfilePictureById?: GraphCacheOptimisticMutationResolver<
    MutationUpdateProfilePictureByIdArgs,
    Maybe<WithTypename<UpdateProfilePicturePayload>>
  >
  updateUpload?: GraphCacheOptimisticMutationResolver<
    MutationUpdateUploadArgs,
    Maybe<WithTypename<UpdateUploadPayload>>
  >
  updateUploadById?: GraphCacheOptimisticMutationResolver<
    MutationUpdateUploadByIdArgs,
    Maybe<WithTypename<UpdateUploadPayload>>
  >
  updateUploadByStorageKey?: GraphCacheOptimisticMutationResolver<
    MutationUpdateUploadByStorageKeyArgs,
    Maybe<WithTypename<UpdateUploadPayload>>
  >
}

export type GraphCacheUpdaters = {
  Query?: {
    account?: GraphCacheUpdateResolver<
      { account: Maybe<WithTypename<Account>> },
      QueryAccountArgs
    >
    accountBlock?: GraphCacheUpdateResolver<
      { accountBlock: Maybe<WithTypename<AccountBlock>> },
      QueryAccountBlockArgs
    >
    accountBlockByCreatedByAndBlockedAccountId?: GraphCacheUpdateResolver<
      {
        accountBlockByCreatedByAndBlockedAccountId: Maybe<
          WithTypename<AccountBlock>
        >
      },
      QueryAccountBlockByCreatedByAndBlockedAccountIdArgs
    >
    accountBlockById?: GraphCacheUpdateResolver<
      { accountBlockById: Maybe<WithTypename<AccountBlock>> },
      QueryAccountBlockByIdArgs
    >
    accountById?: GraphCacheUpdateResolver<
      { accountById: Maybe<WithTypename<Account>> },
      QueryAccountByIdArgs
    >
    accountByUsername?: GraphCacheUpdateResolver<
      { accountByUsername: Maybe<WithTypename<Account>> },
      QueryAccountByUsernameArgs
    >
    accountSocialNetwork?: GraphCacheUpdateResolver<
      { accountSocialNetwork: Maybe<WithTypename<AccountSocialNetwork>> },
      QueryAccountSocialNetworkArgs
    >
    accountSocialNetworkByAccountIdAndSocialNetwork?: GraphCacheUpdateResolver<
      {
        accountSocialNetworkByAccountIdAndSocialNetwork: Maybe<
          WithTypename<AccountSocialNetwork>
        >
      },
      QueryAccountSocialNetworkByAccountIdAndSocialNetworkArgs
    >
    accountUploadQuotaBytes?: GraphCacheUpdateResolver<
      { accountUploadQuotaBytes: Maybe<Scalars['BigInt']> },
      Record<string, never>
    >
    achievement?: GraphCacheUpdateResolver<
      { achievement: Maybe<WithTypename<Achievement>> },
      QueryAchievementArgs
    >
    achievementByAccountIdAndAchievement?: GraphCacheUpdateResolver<
      {
        achievementByAccountIdAndAchievement: Maybe<WithTypename<Achievement>>
      },
      QueryAchievementByAccountIdAndAchievementArgs
    >
    achievementById?: GraphCacheUpdateResolver<
      { achievementById: Maybe<WithTypename<Achievement>> },
      QueryAchievementByIdArgs
    >
    address?: GraphCacheUpdateResolver<
      { address: Maybe<WithTypename<Address>> },
      QueryAddressArgs
    >
    addressById?: GraphCacheUpdateResolver<
      { addressById: Maybe<WithTypename<Address>> },
      QueryAddressByIdArgs
    >
    allAccountBlocks?: GraphCacheUpdateResolver<
      { allAccountBlocks: Maybe<WithTypename<AccountBlocksConnection>> },
      QueryAllAccountBlocksArgs
    >
    allAccountSocialNetworks?: GraphCacheUpdateResolver<
      {
        allAccountSocialNetworks: Maybe<
          WithTypename<AccountSocialNetworksConnection>
        >
      },
      QueryAllAccountSocialNetworksArgs
    >
    allAccounts?: GraphCacheUpdateResolver<
      { allAccounts: Maybe<WithTypename<AccountsConnection>> },
      QueryAllAccountsArgs
    >
    allAchievements?: GraphCacheUpdateResolver<
      { allAchievements: Maybe<WithTypename<AchievementsConnection>> },
      QueryAllAchievementsArgs
    >
    allAddresses?: GraphCacheUpdateResolver<
      { allAddresses: Maybe<WithTypename<AddressesConnection>> },
      QueryAllAddressesArgs
    >
    allContacts?: GraphCacheUpdateResolver<
      { allContacts: Maybe<WithTypename<ContactsConnection>> },
      QueryAllContactsArgs
    >
    allDevices?: GraphCacheUpdateResolver<
      { allDevices: Maybe<WithTypename<DevicesConnection>> },
      QueryAllDevicesArgs
    >
    allEventCategories?: GraphCacheUpdateResolver<
      { allEventCategories: Maybe<WithTypename<EventCategoriesConnection>> },
      QueryAllEventCategoriesArgs
    >
    allEventCategoryMappings?: GraphCacheUpdateResolver<
      {
        allEventCategoryMappings: Maybe<
          WithTypename<EventCategoryMappingsConnection>
        >
      },
      QueryAllEventCategoryMappingsArgs
    >
    allEventFavorites?: GraphCacheUpdateResolver<
      { allEventFavorites: Maybe<WithTypename<EventFavoritesConnection>> },
      QueryAllEventFavoritesArgs
    >
    allEventFormatMappings?: GraphCacheUpdateResolver<
      {
        allEventFormatMappings: Maybe<
          WithTypename<EventFormatMappingsConnection>
        >
      },
      QueryAllEventFormatMappingsArgs
    >
    allEventFormats?: GraphCacheUpdateResolver<
      { allEventFormats: Maybe<WithTypename<EventFormatsConnection>> },
      QueryAllEventFormatsArgs
    >
    allEventRecommendations?: GraphCacheUpdateResolver<
      {
        allEventRecommendations: Maybe<
          WithTypename<EventRecommendationsConnection>
        >
      },
      QueryAllEventRecommendationsArgs
    >
    allEventUploads?: GraphCacheUpdateResolver<
      { allEventUploads: Maybe<WithTypename<EventUploadsConnection>> },
      QueryAllEventUploadsArgs
    >
    allEvents?: GraphCacheUpdateResolver<
      { allEvents: Maybe<WithTypename<EventsConnection>> },
      QueryAllEventsArgs
    >
    allFriendships?: GraphCacheUpdateResolver<
      { allFriendships: Maybe<WithTypename<FriendshipsConnection>> },
      QueryAllFriendshipsArgs
    >
    allGuestFlats?: GraphCacheUpdateResolver<
      { allGuestFlats: Maybe<WithTypename<GuestFlatsConnection>> },
      QueryAllGuestFlatsArgs
    >
    allGuests?: GraphCacheUpdateResolver<
      { allGuests: Maybe<WithTypename<GuestsConnection>> },
      QueryAllGuestsArgs
    >
    allLegalTermAcceptances?: GraphCacheUpdateResolver<
      {
        allLegalTermAcceptances: Maybe<
          WithTypename<LegalTermAcceptancesConnection>
        >
      },
      QueryAllLegalTermAcceptancesArgs
    >
    allLegalTerms?: GraphCacheUpdateResolver<
      { allLegalTerms: Maybe<WithTypename<LegalTermsConnection>> },
      QueryAllLegalTermsArgs
    >
    allPreferenceEventCategories?: GraphCacheUpdateResolver<
      {
        allPreferenceEventCategories: Maybe<
          WithTypename<PreferenceEventCategoriesConnection>
        >
      },
      QueryAllPreferenceEventCategoriesArgs
    >
    allPreferenceEventFormats?: GraphCacheUpdateResolver<
      {
        allPreferenceEventFormats: Maybe<
          WithTypename<PreferenceEventFormatsConnection>
        >
      },
      QueryAllPreferenceEventFormatsArgs
    >
    allPreferenceEventLocations?: GraphCacheUpdateResolver<
      {
        allPreferenceEventLocations: Maybe<
          WithTypename<PreferenceEventLocationsConnection>
        >
      },
      QueryAllPreferenceEventLocationsArgs
    >
    allPreferenceEventSizes?: GraphCacheUpdateResolver<
      {
        allPreferenceEventSizes: Maybe<
          WithTypename<PreferenceEventSizesConnection>
        >
      },
      QueryAllPreferenceEventSizesArgs
    >
    allProfilePictures?: GraphCacheUpdateResolver<
      { allProfilePictures: Maybe<WithTypename<ProfilePicturesConnection>> },
      QueryAllProfilePicturesArgs
    >
    allReports?: GraphCacheUpdateResolver<
      { allReports: Maybe<WithTypename<ReportsConnection>> },
      QueryAllReportsArgs
    >
    allUploads?: GraphCacheUpdateResolver<
      { allUploads: Maybe<WithTypename<UploadsConnection>> },
      QueryAllUploadsArgs
    >
    contact?: GraphCacheUpdateResolver<
      { contact: Maybe<WithTypename<Contact>> },
      QueryContactArgs
    >
    contactByCreatedByAndAccountId?: GraphCacheUpdateResolver<
      { contactByCreatedByAndAccountId: Maybe<WithTypename<Contact>> },
      QueryContactByCreatedByAndAccountIdArgs
    >
    contactById?: GraphCacheUpdateResolver<
      { contactById: Maybe<WithTypename<Contact>> },
      QueryContactByIdArgs
    >
    device?: GraphCacheUpdateResolver<
      { device: Maybe<WithTypename<Device>> },
      QueryDeviceArgs
    >
    deviceByCreatedByAndFcmToken?: GraphCacheUpdateResolver<
      { deviceByCreatedByAndFcmToken: Maybe<WithTypename<Device>> },
      QueryDeviceByCreatedByAndFcmTokenArgs
    >
    deviceById?: GraphCacheUpdateResolver<
      { deviceById: Maybe<WithTypename<Device>> },
      QueryDeviceByIdArgs
    >
    event?: GraphCacheUpdateResolver<
      { event: Maybe<WithTypename<Event>> },
      QueryEventArgs
    >
    eventByCreatedByAndSlug?: GraphCacheUpdateResolver<
      { eventByCreatedByAndSlug: Maybe<WithTypename<Event>> },
      QueryEventByCreatedByAndSlugArgs
    >
    eventById?: GraphCacheUpdateResolver<
      { eventById: Maybe<WithTypename<Event>> },
      QueryEventByIdArgs
    >
    eventCategory?: GraphCacheUpdateResolver<
      { eventCategory: Maybe<WithTypename<EventCategory>> },
      QueryEventCategoryArgs
    >
    eventCategoryById?: GraphCacheUpdateResolver<
      { eventCategoryById: Maybe<WithTypename<EventCategory>> },
      QueryEventCategoryByIdArgs
    >
    eventCategoryByName?: GraphCacheUpdateResolver<
      { eventCategoryByName: Maybe<WithTypename<EventCategory>> },
      QueryEventCategoryByNameArgs
    >
    eventCategoryMapping?: GraphCacheUpdateResolver<
      { eventCategoryMapping: Maybe<WithTypename<EventCategoryMapping>> },
      QueryEventCategoryMappingArgs
    >
    eventCategoryMappingByEventIdAndCategoryId?: GraphCacheUpdateResolver<
      {
        eventCategoryMappingByEventIdAndCategoryId: Maybe<
          WithTypename<EventCategoryMapping>
        >
      },
      QueryEventCategoryMappingByEventIdAndCategoryIdArgs
    >
    eventFavorite?: GraphCacheUpdateResolver<
      { eventFavorite: Maybe<WithTypename<EventFavorite>> },
      QueryEventFavoriteArgs
    >
    eventFavoriteByCreatedByAndEventId?: GraphCacheUpdateResolver<
      {
        eventFavoriteByCreatedByAndEventId: Maybe<WithTypename<EventFavorite>>
      },
      QueryEventFavoriteByCreatedByAndEventIdArgs
    >
    eventFavoriteById?: GraphCacheUpdateResolver<
      { eventFavoriteById: Maybe<WithTypename<EventFavorite>> },
      QueryEventFavoriteByIdArgs
    >
    eventFormat?: GraphCacheUpdateResolver<
      { eventFormat: Maybe<WithTypename<EventFormat>> },
      QueryEventFormatArgs
    >
    eventFormatById?: GraphCacheUpdateResolver<
      { eventFormatById: Maybe<WithTypename<EventFormat>> },
      QueryEventFormatByIdArgs
    >
    eventFormatByName?: GraphCacheUpdateResolver<
      { eventFormatByName: Maybe<WithTypename<EventFormat>> },
      QueryEventFormatByNameArgs
    >
    eventFormatMapping?: GraphCacheUpdateResolver<
      { eventFormatMapping: Maybe<WithTypename<EventFormatMapping>> },
      QueryEventFormatMappingArgs
    >
    eventFormatMappingByEventIdAndFormatId?: GraphCacheUpdateResolver<
      {
        eventFormatMappingByEventIdAndFormatId: Maybe<
          WithTypename<EventFormatMapping>
        >
      },
      QueryEventFormatMappingByEventIdAndFormatIdArgs
    >
    eventGuestCountMaximum?: GraphCacheUpdateResolver<
      { eventGuestCountMaximum: Maybe<Scalars['Int']> },
      QueryEventGuestCountMaximumArgs
    >
    eventRecommendation?: GraphCacheUpdateResolver<
      { eventRecommendation: Maybe<WithTypename<EventRecommendation>> },
      QueryEventRecommendationArgs
    >
    eventRecommendationByAccountIdAndEventId?: GraphCacheUpdateResolver<
      {
        eventRecommendationByAccountIdAndEventId: Maybe<
          WithTypename<EventRecommendation>
        >
      },
      QueryEventRecommendationByAccountIdAndEventIdArgs
    >
    eventSearch?: GraphCacheUpdateResolver<
      { eventSearch: Maybe<WithTypename<EventsConnection>> },
      QueryEventSearchArgs
    >
    eventUpload?: GraphCacheUpdateResolver<
      { eventUpload: Maybe<WithTypename<EventUpload>> },
      QueryEventUploadArgs
    >
    eventUploadByEventIdAndUploadId?: GraphCacheUpdateResolver<
      { eventUploadByEventIdAndUploadId: Maybe<WithTypename<EventUpload>> },
      QueryEventUploadByEventIdAndUploadIdArgs
    >
    eventUploadById?: GraphCacheUpdateResolver<
      { eventUploadById: Maybe<WithTypename<EventUpload>> },
      QueryEventUploadByIdArgs
    >
    eventsOrganized?: GraphCacheUpdateResolver<
      { eventsOrganized: Maybe<WithTypename<EventsOrganizedConnection>> },
      QueryEventsOrganizedArgs
    >
    friendship?: GraphCacheUpdateResolver<
      { friendship: Maybe<WithTypename<Friendship>> },
      QueryFriendshipArgs
    >
    friendshipByAAccountIdAndBAccountId?: GraphCacheUpdateResolver<
      { friendshipByAAccountIdAndBAccountId: Maybe<WithTypename<Friendship>> },
      QueryFriendshipByAAccountIdAndBAccountIdArgs
    >
    friendshipById?: GraphCacheUpdateResolver<
      { friendshipById: Maybe<WithTypename<Friendship>> },
      QueryFriendshipByIdArgs
    >
    guest?: GraphCacheUpdateResolver<
      { guest: Maybe<WithTypename<Guest>> },
      QueryGuestArgs
    >
    guestByEventIdAndContactId?: GraphCacheUpdateResolver<
      { guestByEventIdAndContactId: Maybe<WithTypename<Guest>> },
      QueryGuestByEventIdAndContactIdArgs
    >
    guestById?: GraphCacheUpdateResolver<
      { guestById: Maybe<WithTypename<Guest>> },
      QueryGuestByIdArgs
    >
    guestClaimArray?: GraphCacheUpdateResolver<
      { guestClaimArray: Maybe<Array<Scalars['UUID']>> },
      Record<string, never>
    >
    guestContactIds?: GraphCacheUpdateResolver<
      { guestContactIds: Maybe<WithTypename<GuestContactIdsConnection>> },
      QueryGuestContactIdsArgs
    >
    guestCount?: GraphCacheUpdateResolver<
      { guestCount: Maybe<Scalars['Int']> },
      QueryGuestCountArgs
    >
    invokerAccountId?: GraphCacheUpdateResolver<
      { invokerAccountId: Maybe<Scalars['UUID']> },
      Record<string, never>
    >
    languageIsoFullTextSearch?: GraphCacheUpdateResolver<
      { languageIsoFullTextSearch: Maybe<Scalars['RegConfig']> },
      QueryLanguageIsoFullTextSearchArgs
    >
    legalTerm?: GraphCacheUpdateResolver<
      { legalTerm: Maybe<WithTypename<LegalTerm>> },
      QueryLegalTermArgs
    >
    legalTermAcceptance?: GraphCacheUpdateResolver<
      { legalTermAcceptance: Maybe<WithTypename<LegalTermAcceptance>> },
      QueryLegalTermAcceptanceArgs
    >
    legalTermAcceptanceById?: GraphCacheUpdateResolver<
      { legalTermAcceptanceById: Maybe<WithTypename<LegalTermAcceptance>> },
      QueryLegalTermAcceptanceByIdArgs
    >
    legalTermById?: GraphCacheUpdateResolver<
      { legalTermById: Maybe<WithTypename<LegalTerm>> },
      QueryLegalTermByIdArgs
    >
    legalTermByLanguageAndVersion?: GraphCacheUpdateResolver<
      { legalTermByLanguageAndVersion: Maybe<WithTypename<LegalTerm>> },
      QueryLegalTermByLanguageAndVersionArgs
    >
    node?: GraphCacheUpdateResolver<
      {
        node: Maybe<
          | WithTypename<Account>
          | WithTypename<AccountBlock>
          | WithTypename<AccountSocialNetwork>
          | WithTypename<Achievement>
          | WithTypename<Address>
          | WithTypename<Contact>
          | WithTypename<Device>
          | WithTypename<Event>
          | WithTypename<EventCategory>
          | WithTypename<EventCategoryMapping>
          | WithTypename<EventFavorite>
          | WithTypename<EventFormat>
          | WithTypename<EventFormatMapping>
          | WithTypename<EventRecommendation>
          | WithTypename<EventUpload>
          | WithTypename<Friendship>
          | WithTypename<Guest>
          | WithTypename<LegalTerm>
          | WithTypename<LegalTermAcceptance>
          | WithTypename<PreferenceEventCategory>
          | WithTypename<PreferenceEventFormat>
          | WithTypename<PreferenceEventLocation>
          | WithTypename<PreferenceEventSize>
          | WithTypename<ProfilePicture>
          | WithTypename<Query>
          | WithTypename<Report>
          | WithTypename<Upload>
        >
      },
      QueryNodeArgs
    >
    nodeId?: GraphCacheUpdateResolver<
      { nodeId: Scalars['ID'] },
      Record<string, never>
    >
    preferenceEventCategory?: GraphCacheUpdateResolver<
      { preferenceEventCategory: Maybe<WithTypename<PreferenceEventCategory>> },
      QueryPreferenceEventCategoryArgs
    >
    preferenceEventCategoryByAccountIdAndCategoryId?: GraphCacheUpdateResolver<
      {
        preferenceEventCategoryByAccountIdAndCategoryId: Maybe<
          WithTypename<PreferenceEventCategory>
        >
      },
      QueryPreferenceEventCategoryByAccountIdAndCategoryIdArgs
    >
    preferenceEventCategoryById?: GraphCacheUpdateResolver<
      {
        preferenceEventCategoryById: Maybe<
          WithTypename<PreferenceEventCategory>
        >
      },
      QueryPreferenceEventCategoryByIdArgs
    >
    preferenceEventFormat?: GraphCacheUpdateResolver<
      { preferenceEventFormat: Maybe<WithTypename<PreferenceEventFormat>> },
      QueryPreferenceEventFormatArgs
    >
    preferenceEventFormatByAccountIdAndFormatId?: GraphCacheUpdateResolver<
      {
        preferenceEventFormatByAccountIdAndFormatId: Maybe<
          WithTypename<PreferenceEventFormat>
        >
      },
      QueryPreferenceEventFormatByAccountIdAndFormatIdArgs
    >
    preferenceEventFormatById?: GraphCacheUpdateResolver<
      { preferenceEventFormatById: Maybe<WithTypename<PreferenceEventFormat>> },
      QueryPreferenceEventFormatByIdArgs
    >
    preferenceEventLocation?: GraphCacheUpdateResolver<
      { preferenceEventLocation: Maybe<WithTypename<PreferenceEventLocation>> },
      QueryPreferenceEventLocationArgs
    >
    preferenceEventLocationByCreatedByAndLocationAndRadius?: GraphCacheUpdateResolver<
      {
        preferenceEventLocationByCreatedByAndLocationAndRadius: Maybe<
          WithTypename<PreferenceEventLocation>
        >
      },
      QueryPreferenceEventLocationByCreatedByAndLocationAndRadiusArgs
    >
    preferenceEventLocationById?: GraphCacheUpdateResolver<
      {
        preferenceEventLocationById: Maybe<
          WithTypename<PreferenceEventLocation>
        >
      },
      QueryPreferenceEventLocationByIdArgs
    >
    preferenceEventSize?: GraphCacheUpdateResolver<
      { preferenceEventSize: Maybe<WithTypename<PreferenceEventSize>> },
      QueryPreferenceEventSizeArgs
    >
    preferenceEventSizeByAccountIdAndEventSize?: GraphCacheUpdateResolver<
      {
        preferenceEventSizeByAccountIdAndEventSize: Maybe<
          WithTypename<PreferenceEventSize>
        >
      },
      QueryPreferenceEventSizeByAccountIdAndEventSizeArgs
    >
    preferenceEventSizeById?: GraphCacheUpdateResolver<
      { preferenceEventSizeById: Maybe<WithTypename<PreferenceEventSize>> },
      QueryPreferenceEventSizeByIdArgs
    >
    profilePicture?: GraphCacheUpdateResolver<
      { profilePicture: Maybe<WithTypename<ProfilePicture>> },
      QueryProfilePictureArgs
    >
    profilePictureByAccountId?: GraphCacheUpdateResolver<
      { profilePictureByAccountId: Maybe<WithTypename<ProfilePicture>> },
      QueryProfilePictureByAccountIdArgs
    >
    profilePictureById?: GraphCacheUpdateResolver<
      { profilePictureById: Maybe<WithTypename<ProfilePicture>> },
      QueryProfilePictureByIdArgs
    >
    query?: GraphCacheUpdateResolver<
      { query: WithTypename<Query> },
      Record<string, never>
    >
    report?: GraphCacheUpdateResolver<
      { report: Maybe<WithTypename<Report>> },
      QueryReportArgs
    >
    reportByCreatedByAndTargetAccountIdAndTargetEventIdAndTargetUploadId?: GraphCacheUpdateResolver<
      {
        reportByCreatedByAndTargetAccountIdAndTargetEventIdAndTargetUploadId: Maybe<
          WithTypename<Report>
        >
      },
      QueryReportByCreatedByAndTargetAccountIdAndTargetEventIdAndTargetUploadIdArgs
    >
    reportById?: GraphCacheUpdateResolver<
      { reportById: Maybe<WithTypename<Report>> },
      QueryReportByIdArgs
    >
    upload?: GraphCacheUpdateResolver<
      { upload: Maybe<WithTypename<Upload>> },
      QueryUploadArgs
    >
    uploadById?: GraphCacheUpdateResolver<
      { uploadById: Maybe<WithTypename<Upload>> },
      QueryUploadByIdArgs
    >
    uploadByStorageKey?: GraphCacheUpdateResolver<
      { uploadByStorageKey: Maybe<WithTypename<Upload>> },
      QueryUploadByStorageKeyArgs
    >
  }
  Mutation?: {
    accountDelete?: GraphCacheUpdateResolver<
      { accountDelete: Maybe<WithTypename<AccountDeletePayload>> },
      MutationAccountDeleteArgs
    >
    accountEmailAddressVerification?: GraphCacheUpdateResolver<
      {
        accountEmailAddressVerification: Maybe<
          WithTypename<AccountEmailAddressVerificationPayload>
        >
      },
      MutationAccountEmailAddressVerificationArgs
    >
    accountPasswordChange?: GraphCacheUpdateResolver<
      {
        accountPasswordChange: Maybe<WithTypename<AccountPasswordChangePayload>>
      },
      MutationAccountPasswordChangeArgs
    >
    accountPasswordReset?: GraphCacheUpdateResolver<
      {
        accountPasswordReset: Maybe<WithTypename<AccountPasswordResetPayload>>
      },
      MutationAccountPasswordResetArgs
    >
    accountPasswordResetRequest?: GraphCacheUpdateResolver<
      {
        accountPasswordResetRequest: Maybe<
          WithTypename<AccountPasswordResetRequestPayload>
        >
      },
      MutationAccountPasswordResetRequestArgs
    >
    accountRegistration?: GraphCacheUpdateResolver<
      { accountRegistration: Maybe<WithTypename<AccountRegistrationPayload>> },
      MutationAccountRegistrationArgs
    >
    accountRegistrationRefresh?: GraphCacheUpdateResolver<
      {
        accountRegistrationRefresh: Maybe<
          WithTypename<AccountRegistrationRefreshPayload>
        >
      },
      MutationAccountRegistrationRefreshArgs
    >
    achievementUnlock?: GraphCacheUpdateResolver<
      { achievementUnlock: Maybe<WithTypename<AchievementUnlockPayload>> },
      MutationAchievementUnlockArgs
    >
    authenticate?: GraphCacheUpdateResolver<
      { authenticate: Maybe<WithTypename<AuthenticatePayload>> },
      MutationAuthenticateArgs
    >
    createAccountBlock?: GraphCacheUpdateResolver<
      { createAccountBlock: Maybe<WithTypename<CreateAccountBlockPayload>> },
      MutationCreateAccountBlockArgs
    >
    createAccountSocialNetwork?: GraphCacheUpdateResolver<
      {
        createAccountSocialNetwork: Maybe<
          WithTypename<CreateAccountSocialNetworkPayload>
        >
      },
      MutationCreateAccountSocialNetworkArgs
    >
    createAchievement?: GraphCacheUpdateResolver<
      { createAchievement: Maybe<WithTypename<CreateAchievementPayload>> },
      MutationCreateAchievementArgs
    >
    createAddress?: GraphCacheUpdateResolver<
      { createAddress: Maybe<WithTypename<CreateAddressPayload>> },
      MutationCreateAddressArgs
    >
    createContact?: GraphCacheUpdateResolver<
      { createContact: Maybe<WithTypename<CreateContactPayload>> },
      MutationCreateContactArgs
    >
    createDevice?: GraphCacheUpdateResolver<
      { createDevice: Maybe<WithTypename<CreateDevicePayload>> },
      MutationCreateDeviceArgs
    >
    createEvent?: GraphCacheUpdateResolver<
      { createEvent: Maybe<WithTypename<CreateEventPayload>> },
      MutationCreateEventArgs
    >
    createEventCategoryMapping?: GraphCacheUpdateResolver<
      {
        createEventCategoryMapping: Maybe<
          WithTypename<CreateEventCategoryMappingPayload>
        >
      },
      MutationCreateEventCategoryMappingArgs
    >
    createEventFavorite?: GraphCacheUpdateResolver<
      { createEventFavorite: Maybe<WithTypename<CreateEventFavoritePayload>> },
      MutationCreateEventFavoriteArgs
    >
    createEventFormatMapping?: GraphCacheUpdateResolver<
      {
        createEventFormatMapping: Maybe<
          WithTypename<CreateEventFormatMappingPayload>
        >
      },
      MutationCreateEventFormatMappingArgs
    >
    createEventRecommendation?: GraphCacheUpdateResolver<
      {
        createEventRecommendation: Maybe<
          WithTypename<CreateEventRecommendationPayload>
        >
      },
      MutationCreateEventRecommendationArgs
    >
    createEventUpload?: GraphCacheUpdateResolver<
      { createEventUpload: Maybe<WithTypename<CreateEventUploadPayload>> },
      MutationCreateEventUploadArgs
    >
    createFriendship?: GraphCacheUpdateResolver<
      { createFriendship: Maybe<WithTypename<CreateFriendshipPayload>> },
      MutationCreateFriendshipArgs
    >
    createGuest?: GraphCacheUpdateResolver<
      { createGuest: Maybe<WithTypename<CreateGuestPayload>> },
      MutationCreateGuestArgs
    >
    createGuests?: GraphCacheUpdateResolver<
      { createGuests: Maybe<WithTypename<CreateGuestsPayload>> },
      MutationCreateGuestsArgs
    >
    createLegalTermAcceptance?: GraphCacheUpdateResolver<
      {
        createLegalTermAcceptance: Maybe<
          WithTypename<CreateLegalTermAcceptancePayload>
        >
      },
      MutationCreateLegalTermAcceptanceArgs
    >
    createPreferenceEventCategory?: GraphCacheUpdateResolver<
      {
        createPreferenceEventCategory: Maybe<
          WithTypename<CreatePreferenceEventCategoryPayload>
        >
      },
      MutationCreatePreferenceEventCategoryArgs
    >
    createPreferenceEventFormat?: GraphCacheUpdateResolver<
      {
        createPreferenceEventFormat: Maybe<
          WithTypename<CreatePreferenceEventFormatPayload>
        >
      },
      MutationCreatePreferenceEventFormatArgs
    >
    createPreferenceEventLocation?: GraphCacheUpdateResolver<
      {
        createPreferenceEventLocation: Maybe<
          WithTypename<CreatePreferenceEventLocationPayload>
        >
      },
      MutationCreatePreferenceEventLocationArgs
    >
    createPreferenceEventSize?: GraphCacheUpdateResolver<
      {
        createPreferenceEventSize: Maybe<
          WithTypename<CreatePreferenceEventSizePayload>
        >
      },
      MutationCreatePreferenceEventSizeArgs
    >
    createProfilePicture?: GraphCacheUpdateResolver<
      {
        createProfilePicture: Maybe<WithTypename<CreateProfilePicturePayload>>
      },
      MutationCreateProfilePictureArgs
    >
    createReport?: GraphCacheUpdateResolver<
      { createReport: Maybe<WithTypename<CreateReportPayload>> },
      MutationCreateReportArgs
    >
    createUpload?: GraphCacheUpdateResolver<
      { createUpload: Maybe<WithTypename<CreateUploadPayload>> },
      MutationCreateUploadArgs
    >
    deleteAccountBlock?: GraphCacheUpdateResolver<
      { deleteAccountBlock: Maybe<WithTypename<DeleteAccountBlockPayload>> },
      MutationDeleteAccountBlockArgs
    >
    deleteAccountBlockByCreatedByAndBlockedAccountId?: GraphCacheUpdateResolver<
      {
        deleteAccountBlockByCreatedByAndBlockedAccountId: Maybe<
          WithTypename<DeleteAccountBlockPayload>
        >
      },
      MutationDeleteAccountBlockByCreatedByAndBlockedAccountIdArgs
    >
    deleteAccountBlockById?: GraphCacheUpdateResolver<
      {
        deleteAccountBlockById: Maybe<WithTypename<DeleteAccountBlockPayload>>
      },
      MutationDeleteAccountBlockByIdArgs
    >
    deleteAccountSocialNetwork?: GraphCacheUpdateResolver<
      {
        deleteAccountSocialNetwork: Maybe<
          WithTypename<DeleteAccountSocialNetworkPayload>
        >
      },
      MutationDeleteAccountSocialNetworkArgs
    >
    deleteAccountSocialNetworkByAccountIdAndSocialNetwork?: GraphCacheUpdateResolver<
      {
        deleteAccountSocialNetworkByAccountIdAndSocialNetwork: Maybe<
          WithTypename<DeleteAccountSocialNetworkPayload>
        >
      },
      MutationDeleteAccountSocialNetworkByAccountIdAndSocialNetworkArgs
    >
    deleteAchievement?: GraphCacheUpdateResolver<
      { deleteAchievement: Maybe<WithTypename<DeleteAchievementPayload>> },
      MutationDeleteAchievementArgs
    >
    deleteAchievementByAccountIdAndAchievement?: GraphCacheUpdateResolver<
      {
        deleteAchievementByAccountIdAndAchievement: Maybe<
          WithTypename<DeleteAchievementPayload>
        >
      },
      MutationDeleteAchievementByAccountIdAndAchievementArgs
    >
    deleteAchievementById?: GraphCacheUpdateResolver<
      { deleteAchievementById: Maybe<WithTypename<DeleteAchievementPayload>> },
      MutationDeleteAchievementByIdArgs
    >
    deleteAddress?: GraphCacheUpdateResolver<
      { deleteAddress: Maybe<WithTypename<DeleteAddressPayload>> },
      MutationDeleteAddressArgs
    >
    deleteAddressById?: GraphCacheUpdateResolver<
      { deleteAddressById: Maybe<WithTypename<DeleteAddressPayload>> },
      MutationDeleteAddressByIdArgs
    >
    deleteContact?: GraphCacheUpdateResolver<
      { deleteContact: Maybe<WithTypename<DeleteContactPayload>> },
      MutationDeleteContactArgs
    >
    deleteContactByCreatedByAndAccountId?: GraphCacheUpdateResolver<
      {
        deleteContactByCreatedByAndAccountId: Maybe<
          WithTypename<DeleteContactPayload>
        >
      },
      MutationDeleteContactByCreatedByAndAccountIdArgs
    >
    deleteContactById?: GraphCacheUpdateResolver<
      { deleteContactById: Maybe<WithTypename<DeleteContactPayload>> },
      MutationDeleteContactByIdArgs
    >
    deleteDevice?: GraphCacheUpdateResolver<
      { deleteDevice: Maybe<WithTypename<DeleteDevicePayload>> },
      MutationDeleteDeviceArgs
    >
    deleteDeviceByCreatedByAndFcmToken?: GraphCacheUpdateResolver<
      {
        deleteDeviceByCreatedByAndFcmToken: Maybe<
          WithTypename<DeleteDevicePayload>
        >
      },
      MutationDeleteDeviceByCreatedByAndFcmTokenArgs
    >
    deleteDeviceById?: GraphCacheUpdateResolver<
      { deleteDeviceById: Maybe<WithTypename<DeleteDevicePayload>> },
      MutationDeleteDeviceByIdArgs
    >
    deleteEvent?: GraphCacheUpdateResolver<
      { deleteEvent: Maybe<WithTypename<DeleteEventPayload>> },
      MutationDeleteEventArgs
    >
    deleteEventByCreatedByAndSlug?: GraphCacheUpdateResolver<
      {
        deleteEventByCreatedByAndSlug: Maybe<WithTypename<DeleteEventPayload>>
      },
      MutationDeleteEventByCreatedByAndSlugArgs
    >
    deleteEventById?: GraphCacheUpdateResolver<
      { deleteEventById: Maybe<WithTypename<DeleteEventPayload>> },
      MutationDeleteEventByIdArgs
    >
    deleteEventCategoryMapping?: GraphCacheUpdateResolver<
      {
        deleteEventCategoryMapping: Maybe<
          WithTypename<DeleteEventCategoryMappingPayload>
        >
      },
      MutationDeleteEventCategoryMappingArgs
    >
    deleteEventCategoryMappingByEventIdAndCategoryId?: GraphCacheUpdateResolver<
      {
        deleteEventCategoryMappingByEventIdAndCategoryId: Maybe<
          WithTypename<DeleteEventCategoryMappingPayload>
        >
      },
      MutationDeleteEventCategoryMappingByEventIdAndCategoryIdArgs
    >
    deleteEventFavorite?: GraphCacheUpdateResolver<
      { deleteEventFavorite: Maybe<WithTypename<DeleteEventFavoritePayload>> },
      MutationDeleteEventFavoriteArgs
    >
    deleteEventFavoriteByCreatedByAndEventId?: GraphCacheUpdateResolver<
      {
        deleteEventFavoriteByCreatedByAndEventId: Maybe<
          WithTypename<DeleteEventFavoritePayload>
        >
      },
      MutationDeleteEventFavoriteByCreatedByAndEventIdArgs
    >
    deleteEventFavoriteById?: GraphCacheUpdateResolver<
      {
        deleteEventFavoriteById: Maybe<WithTypename<DeleteEventFavoritePayload>>
      },
      MutationDeleteEventFavoriteByIdArgs
    >
    deleteEventFormatMapping?: GraphCacheUpdateResolver<
      {
        deleteEventFormatMapping: Maybe<
          WithTypename<DeleteEventFormatMappingPayload>
        >
      },
      MutationDeleteEventFormatMappingArgs
    >
    deleteEventFormatMappingByEventIdAndFormatId?: GraphCacheUpdateResolver<
      {
        deleteEventFormatMappingByEventIdAndFormatId: Maybe<
          WithTypename<DeleteEventFormatMappingPayload>
        >
      },
      MutationDeleteEventFormatMappingByEventIdAndFormatIdArgs
    >
    deleteEventRecommendation?: GraphCacheUpdateResolver<
      {
        deleteEventRecommendation: Maybe<
          WithTypename<DeleteEventRecommendationPayload>
        >
      },
      MutationDeleteEventRecommendationArgs
    >
    deleteEventRecommendationByAccountIdAndEventId?: GraphCacheUpdateResolver<
      {
        deleteEventRecommendationByAccountIdAndEventId: Maybe<
          WithTypename<DeleteEventRecommendationPayload>
        >
      },
      MutationDeleteEventRecommendationByAccountIdAndEventIdArgs
    >
    deleteEventUpload?: GraphCacheUpdateResolver<
      { deleteEventUpload: Maybe<WithTypename<DeleteEventUploadPayload>> },
      MutationDeleteEventUploadArgs
    >
    deleteEventUploadByEventIdAndUploadId?: GraphCacheUpdateResolver<
      {
        deleteEventUploadByEventIdAndUploadId: Maybe<
          WithTypename<DeleteEventUploadPayload>
        >
      },
      MutationDeleteEventUploadByEventIdAndUploadIdArgs
    >
    deleteEventUploadById?: GraphCacheUpdateResolver<
      { deleteEventUploadById: Maybe<WithTypename<DeleteEventUploadPayload>> },
      MutationDeleteEventUploadByIdArgs
    >
    deleteFriendship?: GraphCacheUpdateResolver<
      { deleteFriendship: Maybe<WithTypename<DeleteFriendshipPayload>> },
      MutationDeleteFriendshipArgs
    >
    deleteFriendshipByAAccountIdAndBAccountId?: GraphCacheUpdateResolver<
      {
        deleteFriendshipByAAccountIdAndBAccountId: Maybe<
          WithTypename<DeleteFriendshipPayload>
        >
      },
      MutationDeleteFriendshipByAAccountIdAndBAccountIdArgs
    >
    deleteFriendshipById?: GraphCacheUpdateResolver<
      { deleteFriendshipById: Maybe<WithTypename<DeleteFriendshipPayload>> },
      MutationDeleteFriendshipByIdArgs
    >
    deleteGuest?: GraphCacheUpdateResolver<
      { deleteGuest: Maybe<WithTypename<DeleteGuestPayload>> },
      MutationDeleteGuestArgs
    >
    deleteGuestByEventIdAndContactId?: GraphCacheUpdateResolver<
      {
        deleteGuestByEventIdAndContactId: Maybe<
          WithTypename<DeleteGuestPayload>
        >
      },
      MutationDeleteGuestByEventIdAndContactIdArgs
    >
    deleteGuestById?: GraphCacheUpdateResolver<
      { deleteGuestById: Maybe<WithTypename<DeleteGuestPayload>> },
      MutationDeleteGuestByIdArgs
    >
    deletePreferenceEventCategory?: GraphCacheUpdateResolver<
      {
        deletePreferenceEventCategory: Maybe<
          WithTypename<DeletePreferenceEventCategoryPayload>
        >
      },
      MutationDeletePreferenceEventCategoryArgs
    >
    deletePreferenceEventCategoryByAccountIdAndCategoryId?: GraphCacheUpdateResolver<
      {
        deletePreferenceEventCategoryByAccountIdAndCategoryId: Maybe<
          WithTypename<DeletePreferenceEventCategoryPayload>
        >
      },
      MutationDeletePreferenceEventCategoryByAccountIdAndCategoryIdArgs
    >
    deletePreferenceEventCategoryById?: GraphCacheUpdateResolver<
      {
        deletePreferenceEventCategoryById: Maybe<
          WithTypename<DeletePreferenceEventCategoryPayload>
        >
      },
      MutationDeletePreferenceEventCategoryByIdArgs
    >
    deletePreferenceEventFormat?: GraphCacheUpdateResolver<
      {
        deletePreferenceEventFormat: Maybe<
          WithTypename<DeletePreferenceEventFormatPayload>
        >
      },
      MutationDeletePreferenceEventFormatArgs
    >
    deletePreferenceEventFormatByAccountIdAndFormatId?: GraphCacheUpdateResolver<
      {
        deletePreferenceEventFormatByAccountIdAndFormatId: Maybe<
          WithTypename<DeletePreferenceEventFormatPayload>
        >
      },
      MutationDeletePreferenceEventFormatByAccountIdAndFormatIdArgs
    >
    deletePreferenceEventFormatById?: GraphCacheUpdateResolver<
      {
        deletePreferenceEventFormatById: Maybe<
          WithTypename<DeletePreferenceEventFormatPayload>
        >
      },
      MutationDeletePreferenceEventFormatByIdArgs
    >
    deletePreferenceEventLocation?: GraphCacheUpdateResolver<
      {
        deletePreferenceEventLocation: Maybe<
          WithTypename<DeletePreferenceEventLocationPayload>
        >
      },
      MutationDeletePreferenceEventLocationArgs
    >
    deletePreferenceEventLocationByCreatedByAndLocationAndRadius?: GraphCacheUpdateResolver<
      {
        deletePreferenceEventLocationByCreatedByAndLocationAndRadius: Maybe<
          WithTypename<DeletePreferenceEventLocationPayload>
        >
      },
      MutationDeletePreferenceEventLocationByCreatedByAndLocationAndRadiusArgs
    >
    deletePreferenceEventLocationById?: GraphCacheUpdateResolver<
      {
        deletePreferenceEventLocationById: Maybe<
          WithTypename<DeletePreferenceEventLocationPayload>
        >
      },
      MutationDeletePreferenceEventLocationByIdArgs
    >
    deletePreferenceEventSize?: GraphCacheUpdateResolver<
      {
        deletePreferenceEventSize: Maybe<
          WithTypename<DeletePreferenceEventSizePayload>
        >
      },
      MutationDeletePreferenceEventSizeArgs
    >
    deletePreferenceEventSizeByAccountIdAndEventSize?: GraphCacheUpdateResolver<
      {
        deletePreferenceEventSizeByAccountIdAndEventSize: Maybe<
          WithTypename<DeletePreferenceEventSizePayload>
        >
      },
      MutationDeletePreferenceEventSizeByAccountIdAndEventSizeArgs
    >
    deletePreferenceEventSizeById?: GraphCacheUpdateResolver<
      {
        deletePreferenceEventSizeById: Maybe<
          WithTypename<DeletePreferenceEventSizePayload>
        >
      },
      MutationDeletePreferenceEventSizeByIdArgs
    >
    deleteProfilePicture?: GraphCacheUpdateResolver<
      {
        deleteProfilePicture: Maybe<WithTypename<DeleteProfilePicturePayload>>
      },
      MutationDeleteProfilePictureArgs
    >
    deleteProfilePictureByAccountId?: GraphCacheUpdateResolver<
      {
        deleteProfilePictureByAccountId: Maybe<
          WithTypename<DeleteProfilePicturePayload>
        >
      },
      MutationDeleteProfilePictureByAccountIdArgs
    >
    deleteProfilePictureById?: GraphCacheUpdateResolver<
      {
        deleteProfilePictureById: Maybe<
          WithTypename<DeleteProfilePicturePayload>
        >
      },
      MutationDeleteProfilePictureByIdArgs
    >
    deleteUpload?: GraphCacheUpdateResolver<
      { deleteUpload: Maybe<WithTypename<DeleteUploadPayload>> },
      MutationDeleteUploadArgs
    >
    deleteUploadById?: GraphCacheUpdateResolver<
      { deleteUploadById: Maybe<WithTypename<DeleteUploadPayload>> },
      MutationDeleteUploadByIdArgs
    >
    deleteUploadByStorageKey?: GraphCacheUpdateResolver<
      { deleteUploadByStorageKey: Maybe<WithTypename<DeleteUploadPayload>> },
      MutationDeleteUploadByStorageKeyArgs
    >
    eventDelete?: GraphCacheUpdateResolver<
      { eventDelete: Maybe<WithTypename<EventDeletePayload>> },
      MutationEventDeleteArgs
    >
    eventUnlock?: GraphCacheUpdateResolver<
      { eventUnlock: Maybe<WithTypename<EventUnlockPayload>> },
      MutationEventUnlockArgs
    >
    invite?: GraphCacheUpdateResolver<
      { invite: Maybe<WithTypename<InvitePayload>> },
      MutationInviteArgs
    >
    jwtRefresh?: GraphCacheUpdateResolver<
      { jwtRefresh: Maybe<WithTypename<JwtRefreshPayload>> },
      MutationJwtRefreshArgs
    >
    notificationAcknowledge?: GraphCacheUpdateResolver<
      {
        notificationAcknowledge: Maybe<
          WithTypename<NotificationAcknowledgePayload>
        >
      },
      MutationNotificationAcknowledgeArgs
    >
    profilePictureSet?: GraphCacheUpdateResolver<
      { profilePictureSet: Maybe<WithTypename<ProfilePictureSetPayload>> },
      MutationProfilePictureSetArgs
    >
    updateAccount?: GraphCacheUpdateResolver<
      { updateAccount: Maybe<WithTypename<UpdateAccountPayload>> },
      MutationUpdateAccountArgs
    >
    updateAccountById?: GraphCacheUpdateResolver<
      { updateAccountById: Maybe<WithTypename<UpdateAccountPayload>> },
      MutationUpdateAccountByIdArgs
    >
    updateAccountByUsername?: GraphCacheUpdateResolver<
      { updateAccountByUsername: Maybe<WithTypename<UpdateAccountPayload>> },
      MutationUpdateAccountByUsernameArgs
    >
    updateAccountLocation?: GraphCacheUpdateResolver<
      {
        updateAccountLocation: Maybe<WithTypename<UpdateAccountLocationPayload>>
      },
      MutationUpdateAccountLocationArgs
    >
    updateAccountSocialNetwork?: GraphCacheUpdateResolver<
      {
        updateAccountSocialNetwork: Maybe<
          WithTypename<UpdateAccountSocialNetworkPayload>
        >
      },
      MutationUpdateAccountSocialNetworkArgs
    >
    updateAccountSocialNetworkByAccountIdAndSocialNetwork?: GraphCacheUpdateResolver<
      {
        updateAccountSocialNetworkByAccountIdAndSocialNetwork: Maybe<
          WithTypename<UpdateAccountSocialNetworkPayload>
        >
      },
      MutationUpdateAccountSocialNetworkByAccountIdAndSocialNetworkArgs
    >
    updateAchievement?: GraphCacheUpdateResolver<
      { updateAchievement: Maybe<WithTypename<UpdateAchievementPayload>> },
      MutationUpdateAchievementArgs
    >
    updateAchievementByAccountIdAndAchievement?: GraphCacheUpdateResolver<
      {
        updateAchievementByAccountIdAndAchievement: Maybe<
          WithTypename<UpdateAchievementPayload>
        >
      },
      MutationUpdateAchievementByAccountIdAndAchievementArgs
    >
    updateAchievementById?: GraphCacheUpdateResolver<
      { updateAchievementById: Maybe<WithTypename<UpdateAchievementPayload>> },
      MutationUpdateAchievementByIdArgs
    >
    updateAddress?: GraphCacheUpdateResolver<
      { updateAddress: Maybe<WithTypename<UpdateAddressPayload>> },
      MutationUpdateAddressArgs
    >
    updateAddressById?: GraphCacheUpdateResolver<
      { updateAddressById: Maybe<WithTypename<UpdateAddressPayload>> },
      MutationUpdateAddressByIdArgs
    >
    updateContact?: GraphCacheUpdateResolver<
      { updateContact: Maybe<WithTypename<UpdateContactPayload>> },
      MutationUpdateContactArgs
    >
    updateContactByCreatedByAndAccountId?: GraphCacheUpdateResolver<
      {
        updateContactByCreatedByAndAccountId: Maybe<
          WithTypename<UpdateContactPayload>
        >
      },
      MutationUpdateContactByCreatedByAndAccountIdArgs
    >
    updateContactById?: GraphCacheUpdateResolver<
      { updateContactById: Maybe<WithTypename<UpdateContactPayload>> },
      MutationUpdateContactByIdArgs
    >
    updateDevice?: GraphCacheUpdateResolver<
      { updateDevice: Maybe<WithTypename<UpdateDevicePayload>> },
      MutationUpdateDeviceArgs
    >
    updateDeviceByCreatedByAndFcmToken?: GraphCacheUpdateResolver<
      {
        updateDeviceByCreatedByAndFcmToken: Maybe<
          WithTypename<UpdateDevicePayload>
        >
      },
      MutationUpdateDeviceByCreatedByAndFcmTokenArgs
    >
    updateDeviceById?: GraphCacheUpdateResolver<
      { updateDeviceById: Maybe<WithTypename<UpdateDevicePayload>> },
      MutationUpdateDeviceByIdArgs
    >
    updateEvent?: GraphCacheUpdateResolver<
      { updateEvent: Maybe<WithTypename<UpdateEventPayload>> },
      MutationUpdateEventArgs
    >
    updateEventByCreatedByAndSlug?: GraphCacheUpdateResolver<
      {
        updateEventByCreatedByAndSlug: Maybe<WithTypename<UpdateEventPayload>>
      },
      MutationUpdateEventByCreatedByAndSlugArgs
    >
    updateEventById?: GraphCacheUpdateResolver<
      { updateEventById: Maybe<WithTypename<UpdateEventPayload>> },
      MutationUpdateEventByIdArgs
    >
    updateEventCategoryMapping?: GraphCacheUpdateResolver<
      {
        updateEventCategoryMapping: Maybe<
          WithTypename<UpdateEventCategoryMappingPayload>
        >
      },
      MutationUpdateEventCategoryMappingArgs
    >
    updateEventCategoryMappingByEventIdAndCategoryId?: GraphCacheUpdateResolver<
      {
        updateEventCategoryMappingByEventIdAndCategoryId: Maybe<
          WithTypename<UpdateEventCategoryMappingPayload>
        >
      },
      MutationUpdateEventCategoryMappingByEventIdAndCategoryIdArgs
    >
    updateEventFormatMapping?: GraphCacheUpdateResolver<
      {
        updateEventFormatMapping: Maybe<
          WithTypename<UpdateEventFormatMappingPayload>
        >
      },
      MutationUpdateEventFormatMappingArgs
    >
    updateEventFormatMappingByEventIdAndFormatId?: GraphCacheUpdateResolver<
      {
        updateEventFormatMappingByEventIdAndFormatId: Maybe<
          WithTypename<UpdateEventFormatMappingPayload>
        >
      },
      MutationUpdateEventFormatMappingByEventIdAndFormatIdArgs
    >
    updateEventRecommendation?: GraphCacheUpdateResolver<
      {
        updateEventRecommendation: Maybe<
          WithTypename<UpdateEventRecommendationPayload>
        >
      },
      MutationUpdateEventRecommendationArgs
    >
    updateEventRecommendationByAccountIdAndEventId?: GraphCacheUpdateResolver<
      {
        updateEventRecommendationByAccountIdAndEventId: Maybe<
          WithTypename<UpdateEventRecommendationPayload>
        >
      },
      MutationUpdateEventRecommendationByAccountIdAndEventIdArgs
    >
    updateEventUpload?: GraphCacheUpdateResolver<
      { updateEventUpload: Maybe<WithTypename<UpdateEventUploadPayload>> },
      MutationUpdateEventUploadArgs
    >
    updateEventUploadByEventIdAndUploadId?: GraphCacheUpdateResolver<
      {
        updateEventUploadByEventIdAndUploadId: Maybe<
          WithTypename<UpdateEventUploadPayload>
        >
      },
      MutationUpdateEventUploadByEventIdAndUploadIdArgs
    >
    updateEventUploadById?: GraphCacheUpdateResolver<
      { updateEventUploadById: Maybe<WithTypename<UpdateEventUploadPayload>> },
      MutationUpdateEventUploadByIdArgs
    >
    updateFriendship?: GraphCacheUpdateResolver<
      { updateFriendship: Maybe<WithTypename<UpdateFriendshipPayload>> },
      MutationUpdateFriendshipArgs
    >
    updateFriendshipByAAccountIdAndBAccountId?: GraphCacheUpdateResolver<
      {
        updateFriendshipByAAccountIdAndBAccountId: Maybe<
          WithTypename<UpdateFriendshipPayload>
        >
      },
      MutationUpdateFriendshipByAAccountIdAndBAccountIdArgs
    >
    updateFriendshipById?: GraphCacheUpdateResolver<
      { updateFriendshipById: Maybe<WithTypename<UpdateFriendshipPayload>> },
      MutationUpdateFriendshipByIdArgs
    >
    updateGuest?: GraphCacheUpdateResolver<
      { updateGuest: Maybe<WithTypename<UpdateGuestPayload>> },
      MutationUpdateGuestArgs
    >
    updateGuestByEventIdAndContactId?: GraphCacheUpdateResolver<
      {
        updateGuestByEventIdAndContactId: Maybe<
          WithTypename<UpdateGuestPayload>
        >
      },
      MutationUpdateGuestByEventIdAndContactIdArgs
    >
    updateGuestById?: GraphCacheUpdateResolver<
      { updateGuestById: Maybe<WithTypename<UpdateGuestPayload>> },
      MutationUpdateGuestByIdArgs
    >
    updatePreferenceEventCategory?: GraphCacheUpdateResolver<
      {
        updatePreferenceEventCategory: Maybe<
          WithTypename<UpdatePreferenceEventCategoryPayload>
        >
      },
      MutationUpdatePreferenceEventCategoryArgs
    >
    updatePreferenceEventCategoryByAccountIdAndCategoryId?: GraphCacheUpdateResolver<
      {
        updatePreferenceEventCategoryByAccountIdAndCategoryId: Maybe<
          WithTypename<UpdatePreferenceEventCategoryPayload>
        >
      },
      MutationUpdatePreferenceEventCategoryByAccountIdAndCategoryIdArgs
    >
    updatePreferenceEventCategoryById?: GraphCacheUpdateResolver<
      {
        updatePreferenceEventCategoryById: Maybe<
          WithTypename<UpdatePreferenceEventCategoryPayload>
        >
      },
      MutationUpdatePreferenceEventCategoryByIdArgs
    >
    updatePreferenceEventFormat?: GraphCacheUpdateResolver<
      {
        updatePreferenceEventFormat: Maybe<
          WithTypename<UpdatePreferenceEventFormatPayload>
        >
      },
      MutationUpdatePreferenceEventFormatArgs
    >
    updatePreferenceEventFormatByAccountIdAndFormatId?: GraphCacheUpdateResolver<
      {
        updatePreferenceEventFormatByAccountIdAndFormatId: Maybe<
          WithTypename<UpdatePreferenceEventFormatPayload>
        >
      },
      MutationUpdatePreferenceEventFormatByAccountIdAndFormatIdArgs
    >
    updatePreferenceEventFormatById?: GraphCacheUpdateResolver<
      {
        updatePreferenceEventFormatById: Maybe<
          WithTypename<UpdatePreferenceEventFormatPayload>
        >
      },
      MutationUpdatePreferenceEventFormatByIdArgs
    >
    updatePreferenceEventLocation?: GraphCacheUpdateResolver<
      {
        updatePreferenceEventLocation: Maybe<
          WithTypename<UpdatePreferenceEventLocationPayload>
        >
      },
      MutationUpdatePreferenceEventLocationArgs
    >
    updatePreferenceEventLocationByCreatedByAndLocationAndRadius?: GraphCacheUpdateResolver<
      {
        updatePreferenceEventLocationByCreatedByAndLocationAndRadius: Maybe<
          WithTypename<UpdatePreferenceEventLocationPayload>
        >
      },
      MutationUpdatePreferenceEventLocationByCreatedByAndLocationAndRadiusArgs
    >
    updatePreferenceEventLocationById?: GraphCacheUpdateResolver<
      {
        updatePreferenceEventLocationById: Maybe<
          WithTypename<UpdatePreferenceEventLocationPayload>
        >
      },
      MutationUpdatePreferenceEventLocationByIdArgs
    >
    updatePreferenceEventSize?: GraphCacheUpdateResolver<
      {
        updatePreferenceEventSize: Maybe<
          WithTypename<UpdatePreferenceEventSizePayload>
        >
      },
      MutationUpdatePreferenceEventSizeArgs
    >
    updatePreferenceEventSizeByAccountIdAndEventSize?: GraphCacheUpdateResolver<
      {
        updatePreferenceEventSizeByAccountIdAndEventSize: Maybe<
          WithTypename<UpdatePreferenceEventSizePayload>
        >
      },
      MutationUpdatePreferenceEventSizeByAccountIdAndEventSizeArgs
    >
    updatePreferenceEventSizeById?: GraphCacheUpdateResolver<
      {
        updatePreferenceEventSizeById: Maybe<
          WithTypename<UpdatePreferenceEventSizePayload>
        >
      },
      MutationUpdatePreferenceEventSizeByIdArgs
    >
    updateProfilePicture?: GraphCacheUpdateResolver<
      {
        updateProfilePicture: Maybe<WithTypename<UpdateProfilePicturePayload>>
      },
      MutationUpdateProfilePictureArgs
    >
    updateProfilePictureByAccountId?: GraphCacheUpdateResolver<
      {
        updateProfilePictureByAccountId: Maybe<
          WithTypename<UpdateProfilePicturePayload>
        >
      },
      MutationUpdateProfilePictureByAccountIdArgs
    >
    updateProfilePictureById?: GraphCacheUpdateResolver<
      {
        updateProfilePictureById: Maybe<
          WithTypename<UpdateProfilePicturePayload>
        >
      },
      MutationUpdateProfilePictureByIdArgs
    >
    updateUpload?: GraphCacheUpdateResolver<
      { updateUpload: Maybe<WithTypename<UpdateUploadPayload>> },
      MutationUpdateUploadArgs
    >
    updateUploadById?: GraphCacheUpdateResolver<
      { updateUploadById: Maybe<WithTypename<UpdateUploadPayload>> },
      MutationUpdateUploadByIdArgs
    >
    updateUploadByStorageKey?: GraphCacheUpdateResolver<
      { updateUploadByStorageKey: Maybe<WithTypename<UpdateUploadPayload>> },
      MutationUpdateUploadByStorageKeyArgs
    >
  }
  Subscription?: {}
  Account?: {
    accountBlocksByBlockedAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Account>>,
      AccountAccountBlocksByBlockedAccountIdArgs
    >
    accountBlocksByCreatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Account>>,
      AccountAccountBlocksByCreatedByArgs
    >
    accountSocialNetworksByAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Account>>,
      AccountAccountSocialNetworksByAccountIdArgs
    >
    achievementsByAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Account>>,
      AccountAchievementsByAccountIdArgs
    >
    addressesByCreatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Account>>,
      AccountAddressesByCreatedByArgs
    >
    addressesByUpdatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Account>>,
      AccountAddressesByUpdatedByArgs
    >
    contactsByAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Account>>,
      AccountContactsByAccountIdArgs
    >
    contactsByCreatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Account>>,
      AccountContactsByCreatedByArgs
    >
    description?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Account>>,
      Record<string, never>
    >
    devicesByCreatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Account>>,
      AccountDevicesByCreatedByArgs
    >
    devicesByUpdatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Account>>,
      AccountDevicesByUpdatedByArgs
    >
    eventFavoritesByCreatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Account>>,
      AccountEventFavoritesByCreatedByArgs
    >
    eventRecommendationsByAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Account>>,
      AccountEventRecommendationsByAccountIdArgs
    >
    eventsByCreatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Account>>,
      AccountEventsByCreatedByArgs
    >
    friendshipsByAAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Account>>,
      AccountFriendshipsByAAccountIdArgs
    >
    friendshipsByBAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Account>>,
      AccountFriendshipsByBAccountIdArgs
    >
    friendshipsByCreatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Account>>,
      AccountFriendshipsByCreatedByArgs
    >
    friendshipsByUpdatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Account>>,
      AccountFriendshipsByUpdatedByArgs
    >
    guestsByUpdatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Account>>,
      AccountGuestsByUpdatedByArgs
    >
    id?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Account>>,
      Record<string, never>
    >
    imprint?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Account>>,
      Record<string, never>
    >
    legalTermAcceptancesByAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Account>>,
      AccountLegalTermAcceptancesByAccountIdArgs
    >
    nodeId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Account>>,
      Record<string, never>
    >
    preferenceEventCategoriesByAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Account>>,
      AccountPreferenceEventCategoriesByAccountIdArgs
    >
    preferenceEventFormatsByAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Account>>,
      AccountPreferenceEventFormatsByAccountIdArgs
    >
    preferenceEventLocationsByCreatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Account>>,
      AccountPreferenceEventLocationsByCreatedByArgs
    >
    preferenceEventSizesByAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Account>>,
      AccountPreferenceEventSizesByAccountIdArgs
    >
    profilePictureByAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Account>>,
      Record<string, never>
    >
    profilePicturesByAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Account>>,
      AccountProfilePicturesByAccountIdArgs
    >
    reportsByCreatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Account>>,
      AccountReportsByCreatedByArgs
    >
    reportsByTargetAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Account>>,
      AccountReportsByTargetAccountIdArgs
    >
    uploadsByCreatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Account>>,
      AccountUploadsByCreatedByArgs
    >
    username?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Account>>,
      Record<string, never>
    >
  }
  AccountBlock?: {
    accountByBlockedAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountBlock>>,
      Record<string, never>
    >
    accountByCreatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountBlock>>,
      Record<string, never>
    >
    blockedAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountBlock>>,
      Record<string, never>
    >
    createdAt?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountBlock>>,
      Record<string, never>
    >
    createdBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountBlock>>,
      Record<string, never>
    >
    id?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountBlock>>,
      Record<string, never>
    >
    nodeId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountBlock>>,
      Record<string, never>
    >
  }
  AccountBlocksConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountBlocksConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountBlocksConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountBlocksConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountBlocksConnection>>,
      Record<string, never>
    >
  }
  AccountBlocksEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountBlocksEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountBlocksEdge>>,
      Record<string, never>
    >
  }
  AccountDeletePayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountDeletePayload>>,
      Record<string, never>
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountDeletePayload>>,
      Record<string, never>
    >
  }
  AccountEmailAddressVerificationPayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountEmailAddressVerificationPayload>>,
      Record<string, never>
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountEmailAddressVerificationPayload>>,
      Record<string, never>
    >
  }
  AccountPasswordChangePayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountPasswordChangePayload>>,
      Record<string, never>
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountPasswordChangePayload>>,
      Record<string, never>
    >
  }
  AccountPasswordResetPayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountPasswordResetPayload>>,
      Record<string, never>
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountPasswordResetPayload>>,
      Record<string, never>
    >
  }
  AccountPasswordResetRequestPayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountPasswordResetRequestPayload>>,
      Record<string, never>
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountPasswordResetRequestPayload>>,
      Record<string, never>
    >
  }
  AccountRegistrationPayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountRegistrationPayload>>,
      Record<string, never>
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountRegistrationPayload>>,
      Record<string, never>
    >
  }
  AccountRegistrationRefreshPayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountRegistrationRefreshPayload>>,
      Record<string, never>
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountRegistrationRefreshPayload>>,
      Record<string, never>
    >
  }
  AccountSocialNetwork?: {
    accountByAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountSocialNetwork>>,
      Record<string, never>
    >
    accountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountSocialNetwork>>,
      Record<string, never>
    >
    nodeId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountSocialNetwork>>,
      Record<string, never>
    >
    socialNetwork?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountSocialNetwork>>,
      Record<string, never>
    >
    socialNetworkUsername?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountSocialNetwork>>,
      Record<string, never>
    >
  }
  AccountSocialNetworksConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountSocialNetworksConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountSocialNetworksConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountSocialNetworksConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountSocialNetworksConnection>>,
      Record<string, never>
    >
  }
  AccountSocialNetworksEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountSocialNetworksEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountSocialNetworksEdge>>,
      Record<string, never>
    >
  }
  AccountsConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountsConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountsConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountsConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountsConnection>>,
      Record<string, never>
    >
  }
  AccountsEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountsEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountsEdge>>,
      Record<string, never>
    >
  }
  Achievement?: {
    accountByAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Achievement>>,
      Record<string, never>
    >
    accountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Achievement>>,
      Record<string, never>
    >
    achievement?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Achievement>>,
      Record<string, never>
    >
    id?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Achievement>>,
      Record<string, never>
    >
    level?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Achievement>>,
      Record<string, never>
    >
    nodeId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Achievement>>,
      Record<string, never>
    >
  }
  AchievementUnlockPayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AchievementUnlockPayload>>,
      Record<string, never>
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AchievementUnlockPayload>>,
      Record<string, never>
    >
    uuid?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AchievementUnlockPayload>>,
      Record<string, never>
    >
  }
  AchievementsConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AchievementsConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AchievementsConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AchievementsConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AchievementsConnection>>,
      Record<string, never>
    >
  }
  AchievementsEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AchievementsEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AchievementsEdge>>,
      Record<string, never>
    >
  }
  Address?: {
    accountByCreatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Address>>,
      Record<string, never>
    >
    accountByUpdatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Address>>,
      Record<string, never>
    >
    city?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Address>>,
      Record<string, never>
    >
    contactsByAddressId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Address>>,
      AddressContactsByAddressIdArgs
    >
    country?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Address>>,
      Record<string, never>
    >
    createdAt?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Address>>,
      Record<string, never>
    >
    createdBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Address>>,
      Record<string, never>
    >
    eventsByAddressId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Address>>,
      AddressEventsByAddressIdArgs
    >
    id?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Address>>,
      Record<string, never>
    >
    line1?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Address>>,
      Record<string, never>
    >
    line2?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Address>>,
      Record<string, never>
    >
    location?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Address>>,
      Record<string, never>
    >
    name?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Address>>,
      Record<string, never>
    >
    nodeId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Address>>,
      Record<string, never>
    >
    postalCode?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Address>>,
      Record<string, never>
    >
    region?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Address>>,
      Record<string, never>
    >
    updatedAt?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Address>>,
      Record<string, never>
    >
    updatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Address>>,
      Record<string, never>
    >
  }
  AddressesConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AddressesConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AddressesConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AddressesConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AddressesConnection>>,
      Record<string, never>
    >
  }
  AddressesEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AddressesEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AddressesEdge>>,
      Record<string, never>
    >
  }
  AuthenticatePayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AuthenticatePayload>>,
      Record<string, never>
    >
    jwt?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AuthenticatePayload>>,
      Record<string, never>
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AuthenticatePayload>>,
      Record<string, never>
    >
  }
  Contact?: {
    accountByAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Contact>>,
      Record<string, never>
    >
    accountByCreatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Contact>>,
      Record<string, never>
    >
    accountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Contact>>,
      Record<string, never>
    >
    addressByAddressId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Contact>>,
      Record<string, never>
    >
    addressId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Contact>>,
      Record<string, never>
    >
    createdAt?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Contact>>,
      Record<string, never>
    >
    createdBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Contact>>,
      Record<string, never>
    >
    emailAddress?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Contact>>,
      Record<string, never>
    >
    emailAddressHash?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Contact>>,
      Record<string, never>
    >
    firstName?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Contact>>,
      Record<string, never>
    >
    guestsByContactId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Contact>>,
      ContactGuestsByContactIdArgs
    >
    id?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Contact>>,
      Record<string, never>
    >
    language?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Contact>>,
      Record<string, never>
    >
    lastName?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Contact>>,
      Record<string, never>
    >
    nickname?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Contact>>,
      Record<string, never>
    >
    nodeId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Contact>>,
      Record<string, never>
    >
    note?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Contact>>,
      Record<string, never>
    >
    phoneNumber?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Contact>>,
      Record<string, never>
    >
    timezone?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Contact>>,
      Record<string, never>
    >
    url?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Contact>>,
      Record<string, never>
    >
  }
  ContactsConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ContactsConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ContactsConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ContactsConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ContactsConnection>>,
      Record<string, never>
    >
  }
  ContactsEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ContactsEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ContactsEdge>>,
      Record<string, never>
    >
  }
  CreateAccountBlockPayload?: {
    accountBlock?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateAccountBlockPayload>>,
      Record<string, never>
    >
    accountBlockEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateAccountBlockPayload>>,
      CreateAccountBlockPayloadAccountBlockEdgeArgs
    >
    accountByBlockedAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateAccountBlockPayload>>,
      Record<string, never>
    >
    accountByCreatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateAccountBlockPayload>>,
      Record<string, never>
    >
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateAccountBlockPayload>>,
      Record<string, never>
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateAccountBlockPayload>>,
      Record<string, never>
    >
  }
  CreateAccountSocialNetworkPayload?: {
    accountByAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateAccountSocialNetworkPayload>>,
      Record<string, never>
    >
    accountSocialNetwork?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateAccountSocialNetworkPayload>>,
      Record<string, never>
    >
    accountSocialNetworkEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateAccountSocialNetworkPayload>>,
      CreateAccountSocialNetworkPayloadAccountSocialNetworkEdgeArgs
    >
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateAccountSocialNetworkPayload>>,
      Record<string, never>
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateAccountSocialNetworkPayload>>,
      Record<string, never>
    >
  }
  CreateAchievementPayload?: {
    accountByAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateAchievementPayload>>,
      Record<string, never>
    >
    achievement?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateAchievementPayload>>,
      Record<string, never>
    >
    achievementEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateAchievementPayload>>,
      CreateAchievementPayloadAchievementEdgeArgs
    >
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateAchievementPayload>>,
      Record<string, never>
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateAchievementPayload>>,
      Record<string, never>
    >
  }
  CreateAddressPayload?: {
    accountByCreatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateAddressPayload>>,
      Record<string, never>
    >
    accountByUpdatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateAddressPayload>>,
      Record<string, never>
    >
    address?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateAddressPayload>>,
      Record<string, never>
    >
    addressEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateAddressPayload>>,
      CreateAddressPayloadAddressEdgeArgs
    >
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateAddressPayload>>,
      Record<string, never>
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateAddressPayload>>,
      Record<string, never>
    >
  }
  CreateContactPayload?: {
    accountByAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateContactPayload>>,
      Record<string, never>
    >
    accountByCreatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateContactPayload>>,
      Record<string, never>
    >
    addressByAddressId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateContactPayload>>,
      Record<string, never>
    >
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateContactPayload>>,
      Record<string, never>
    >
    contact?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateContactPayload>>,
      Record<string, never>
    >
    contactEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateContactPayload>>,
      CreateContactPayloadContactEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateContactPayload>>,
      Record<string, never>
    >
  }
  CreateDevicePayload?: {
    accountByCreatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateDevicePayload>>,
      Record<string, never>
    >
    accountByUpdatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateDevicePayload>>,
      Record<string, never>
    >
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateDevicePayload>>,
      Record<string, never>
    >
    device?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateDevicePayload>>,
      Record<string, never>
    >
    deviceEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateDevicePayload>>,
      CreateDevicePayloadDeviceEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateDevicePayload>>,
      Record<string, never>
    >
  }
  CreateEventCategoryMappingPayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateEventCategoryMappingPayload>>,
      Record<string, never>
    >
    eventByEventId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateEventCategoryMappingPayload>>,
      Record<string, never>
    >
    eventCategoryByCategoryId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateEventCategoryMappingPayload>>,
      Record<string, never>
    >
    eventCategoryMapping?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateEventCategoryMappingPayload>>,
      Record<string, never>
    >
    eventCategoryMappingEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateEventCategoryMappingPayload>>,
      CreateEventCategoryMappingPayloadEventCategoryMappingEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateEventCategoryMappingPayload>>,
      Record<string, never>
    >
  }
  CreateEventFavoritePayload?: {
    accountByCreatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateEventFavoritePayload>>,
      Record<string, never>
    >
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateEventFavoritePayload>>,
      Record<string, never>
    >
    eventByEventId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateEventFavoritePayload>>,
      Record<string, never>
    >
    eventFavorite?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateEventFavoritePayload>>,
      Record<string, never>
    >
    eventFavoriteEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateEventFavoritePayload>>,
      CreateEventFavoritePayloadEventFavoriteEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateEventFavoritePayload>>,
      Record<string, never>
    >
  }
  CreateEventFormatMappingPayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateEventFormatMappingPayload>>,
      Record<string, never>
    >
    eventByEventId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateEventFormatMappingPayload>>,
      Record<string, never>
    >
    eventFormatByFormatId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateEventFormatMappingPayload>>,
      Record<string, never>
    >
    eventFormatMapping?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateEventFormatMappingPayload>>,
      Record<string, never>
    >
    eventFormatMappingEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateEventFormatMappingPayload>>,
      CreateEventFormatMappingPayloadEventFormatMappingEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateEventFormatMappingPayload>>,
      Record<string, never>
    >
  }
  CreateEventPayload?: {
    accountByCreatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateEventPayload>>,
      Record<string, never>
    >
    addressByAddressId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateEventPayload>>,
      Record<string, never>
    >
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateEventPayload>>,
      Record<string, never>
    >
    event?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateEventPayload>>,
      Record<string, never>
    >
    eventEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateEventPayload>>,
      CreateEventPayloadEventEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateEventPayload>>,
      Record<string, never>
    >
  }
  CreateEventRecommendationPayload?: {
    accountByAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateEventRecommendationPayload>>,
      Record<string, never>
    >
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateEventRecommendationPayload>>,
      Record<string, never>
    >
    eventByEventId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateEventRecommendationPayload>>,
      Record<string, never>
    >
    eventRecommendation?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateEventRecommendationPayload>>,
      Record<string, never>
    >
    eventRecommendationEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateEventRecommendationPayload>>,
      CreateEventRecommendationPayloadEventRecommendationEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateEventRecommendationPayload>>,
      Record<string, never>
    >
  }
  CreateEventUploadPayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateEventUploadPayload>>,
      Record<string, never>
    >
    eventByEventId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateEventUploadPayload>>,
      Record<string, never>
    >
    eventUpload?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateEventUploadPayload>>,
      Record<string, never>
    >
    eventUploadEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateEventUploadPayload>>,
      CreateEventUploadPayloadEventUploadEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateEventUploadPayload>>,
      Record<string, never>
    >
    uploadByUploadId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateEventUploadPayload>>,
      Record<string, never>
    >
  }
  CreateFriendshipPayload?: {
    accountByAAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateFriendshipPayload>>,
      Record<string, never>
    >
    accountByBAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateFriendshipPayload>>,
      Record<string, never>
    >
    accountByCreatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateFriendshipPayload>>,
      Record<string, never>
    >
    accountByUpdatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateFriendshipPayload>>,
      Record<string, never>
    >
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateFriendshipPayload>>,
      Record<string, never>
    >
    friendship?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateFriendshipPayload>>,
      Record<string, never>
    >
    friendshipEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateFriendshipPayload>>,
      CreateFriendshipPayloadFriendshipEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateFriendshipPayload>>,
      Record<string, never>
    >
  }
  CreateGuestPayload?: {
    accountByUpdatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateGuestPayload>>,
      Record<string, never>
    >
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateGuestPayload>>,
      Record<string, never>
    >
    contactByContactId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateGuestPayload>>,
      Record<string, never>
    >
    eventByEventId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateGuestPayload>>,
      Record<string, never>
    >
    guest?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateGuestPayload>>,
      Record<string, never>
    >
    guestEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateGuestPayload>>,
      CreateGuestPayloadGuestEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateGuestPayload>>,
      Record<string, never>
    >
  }
  CreateGuestsPayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateGuestsPayload>>,
      Record<string, never>
    >
    guests?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateGuestsPayload>>,
      Record<string, never>
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateGuestsPayload>>,
      Record<string, never>
    >
  }
  CreateLegalTermAcceptancePayload?: {
    accountByAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateLegalTermAcceptancePayload>>,
      Record<string, never>
    >
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateLegalTermAcceptancePayload>>,
      Record<string, never>
    >
    legalTermAcceptance?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateLegalTermAcceptancePayload>>,
      Record<string, never>
    >
    legalTermAcceptanceEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateLegalTermAcceptancePayload>>,
      CreateLegalTermAcceptancePayloadLegalTermAcceptanceEdgeArgs
    >
    legalTermByLegalTermId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateLegalTermAcceptancePayload>>,
      Record<string, never>
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateLegalTermAcceptancePayload>>,
      Record<string, never>
    >
  }
  CreatePreferenceEventCategoryPayload?: {
    accountByAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreatePreferenceEventCategoryPayload>>,
      Record<string, never>
    >
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreatePreferenceEventCategoryPayload>>,
      Record<string, never>
    >
    eventCategoryByCategoryId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreatePreferenceEventCategoryPayload>>,
      Record<string, never>
    >
    preferenceEventCategory?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreatePreferenceEventCategoryPayload>>,
      Record<string, never>
    >
    preferenceEventCategoryEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreatePreferenceEventCategoryPayload>>,
      CreatePreferenceEventCategoryPayloadPreferenceEventCategoryEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreatePreferenceEventCategoryPayload>>,
      Record<string, never>
    >
  }
  CreatePreferenceEventFormatPayload?: {
    accountByAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreatePreferenceEventFormatPayload>>,
      Record<string, never>
    >
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreatePreferenceEventFormatPayload>>,
      Record<string, never>
    >
    eventFormatByFormatId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreatePreferenceEventFormatPayload>>,
      Record<string, never>
    >
    preferenceEventFormat?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreatePreferenceEventFormatPayload>>,
      Record<string, never>
    >
    preferenceEventFormatEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreatePreferenceEventFormatPayload>>,
      CreatePreferenceEventFormatPayloadPreferenceEventFormatEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreatePreferenceEventFormatPayload>>,
      Record<string, never>
    >
  }
  CreatePreferenceEventLocationPayload?: {
    accountByCreatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreatePreferenceEventLocationPayload>>,
      Record<string, never>
    >
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreatePreferenceEventLocationPayload>>,
      Record<string, never>
    >
    preferenceEventLocation?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreatePreferenceEventLocationPayload>>,
      Record<string, never>
    >
    preferenceEventLocationEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreatePreferenceEventLocationPayload>>,
      CreatePreferenceEventLocationPayloadPreferenceEventLocationEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreatePreferenceEventLocationPayload>>,
      Record<string, never>
    >
  }
  CreatePreferenceEventSizePayload?: {
    accountByAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreatePreferenceEventSizePayload>>,
      Record<string, never>
    >
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreatePreferenceEventSizePayload>>,
      Record<string, never>
    >
    preferenceEventSize?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreatePreferenceEventSizePayload>>,
      Record<string, never>
    >
    preferenceEventSizeEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreatePreferenceEventSizePayload>>,
      CreatePreferenceEventSizePayloadPreferenceEventSizeEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreatePreferenceEventSizePayload>>,
      Record<string, never>
    >
  }
  CreateProfilePicturePayload?: {
    accountByAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateProfilePicturePayload>>,
      Record<string, never>
    >
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateProfilePicturePayload>>,
      Record<string, never>
    >
    profilePicture?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateProfilePicturePayload>>,
      Record<string, never>
    >
    profilePictureEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateProfilePicturePayload>>,
      CreateProfilePicturePayloadProfilePictureEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateProfilePicturePayload>>,
      Record<string, never>
    >
    uploadByUploadId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateProfilePicturePayload>>,
      Record<string, never>
    >
  }
  CreateReportPayload?: {
    accountByCreatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateReportPayload>>,
      Record<string, never>
    >
    accountByTargetAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateReportPayload>>,
      Record<string, never>
    >
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateReportPayload>>,
      Record<string, never>
    >
    eventByTargetEventId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateReportPayload>>,
      Record<string, never>
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateReportPayload>>,
      Record<string, never>
    >
    report?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateReportPayload>>,
      Record<string, never>
    >
    reportEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateReportPayload>>,
      CreateReportPayloadReportEdgeArgs
    >
    uploadByTargetUploadId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateReportPayload>>,
      Record<string, never>
    >
  }
  CreateUploadPayload?: {
    accountByCreatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateUploadPayload>>,
      Record<string, never>
    >
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateUploadPayload>>,
      Record<string, never>
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateUploadPayload>>,
      Record<string, never>
    >
    upload?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateUploadPayload>>,
      Record<string, never>
    >
    uploadEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateUploadPayload>>,
      CreateUploadPayloadUploadEdgeArgs
    >
  }
  DeleteAccountBlockPayload?: {
    accountBlock?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteAccountBlockPayload>>,
      Record<string, never>
    >
    accountBlockEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteAccountBlockPayload>>,
      DeleteAccountBlockPayloadAccountBlockEdgeArgs
    >
    accountByBlockedAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteAccountBlockPayload>>,
      Record<string, never>
    >
    accountByCreatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteAccountBlockPayload>>,
      Record<string, never>
    >
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteAccountBlockPayload>>,
      Record<string, never>
    >
    deletedAccountBlockId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteAccountBlockPayload>>,
      Record<string, never>
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteAccountBlockPayload>>,
      Record<string, never>
    >
  }
  DeleteAccountSocialNetworkPayload?: {
    accountByAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteAccountSocialNetworkPayload>>,
      Record<string, never>
    >
    accountSocialNetwork?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteAccountSocialNetworkPayload>>,
      Record<string, never>
    >
    accountSocialNetworkEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteAccountSocialNetworkPayload>>,
      DeleteAccountSocialNetworkPayloadAccountSocialNetworkEdgeArgs
    >
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteAccountSocialNetworkPayload>>,
      Record<string, never>
    >
    deletedAccountSocialNetworkId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteAccountSocialNetworkPayload>>,
      Record<string, never>
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteAccountSocialNetworkPayload>>,
      Record<string, never>
    >
  }
  DeleteAchievementPayload?: {
    accountByAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteAchievementPayload>>,
      Record<string, never>
    >
    achievement?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteAchievementPayload>>,
      Record<string, never>
    >
    achievementEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteAchievementPayload>>,
      DeleteAchievementPayloadAchievementEdgeArgs
    >
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteAchievementPayload>>,
      Record<string, never>
    >
    deletedAchievementId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteAchievementPayload>>,
      Record<string, never>
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteAchievementPayload>>,
      Record<string, never>
    >
  }
  DeleteAddressPayload?: {
    accountByCreatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteAddressPayload>>,
      Record<string, never>
    >
    accountByUpdatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteAddressPayload>>,
      Record<string, never>
    >
    address?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteAddressPayload>>,
      Record<string, never>
    >
    addressEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteAddressPayload>>,
      DeleteAddressPayloadAddressEdgeArgs
    >
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteAddressPayload>>,
      Record<string, never>
    >
    deletedAddressId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteAddressPayload>>,
      Record<string, never>
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteAddressPayload>>,
      Record<string, never>
    >
  }
  DeleteContactPayload?: {
    accountByAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteContactPayload>>,
      Record<string, never>
    >
    accountByCreatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteContactPayload>>,
      Record<string, never>
    >
    addressByAddressId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteContactPayload>>,
      Record<string, never>
    >
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteContactPayload>>,
      Record<string, never>
    >
    contact?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteContactPayload>>,
      Record<string, never>
    >
    contactEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteContactPayload>>,
      DeleteContactPayloadContactEdgeArgs
    >
    deletedContactId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteContactPayload>>,
      Record<string, never>
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteContactPayload>>,
      Record<string, never>
    >
  }
  DeleteDevicePayload?: {
    accountByCreatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteDevicePayload>>,
      Record<string, never>
    >
    accountByUpdatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteDevicePayload>>,
      Record<string, never>
    >
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteDevicePayload>>,
      Record<string, never>
    >
    deletedDeviceId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteDevicePayload>>,
      Record<string, never>
    >
    device?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteDevicePayload>>,
      Record<string, never>
    >
    deviceEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteDevicePayload>>,
      DeleteDevicePayloadDeviceEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteDevicePayload>>,
      Record<string, never>
    >
  }
  DeleteEventCategoryMappingPayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteEventCategoryMappingPayload>>,
      Record<string, never>
    >
    deletedEventCategoryMappingId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteEventCategoryMappingPayload>>,
      Record<string, never>
    >
    eventByEventId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteEventCategoryMappingPayload>>,
      Record<string, never>
    >
    eventCategoryByCategoryId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteEventCategoryMappingPayload>>,
      Record<string, never>
    >
    eventCategoryMapping?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteEventCategoryMappingPayload>>,
      Record<string, never>
    >
    eventCategoryMappingEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteEventCategoryMappingPayload>>,
      DeleteEventCategoryMappingPayloadEventCategoryMappingEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteEventCategoryMappingPayload>>,
      Record<string, never>
    >
  }
  DeleteEventFavoritePayload?: {
    accountByCreatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteEventFavoritePayload>>,
      Record<string, never>
    >
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteEventFavoritePayload>>,
      Record<string, never>
    >
    deletedEventFavoriteId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteEventFavoritePayload>>,
      Record<string, never>
    >
    eventByEventId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteEventFavoritePayload>>,
      Record<string, never>
    >
    eventFavorite?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteEventFavoritePayload>>,
      Record<string, never>
    >
    eventFavoriteEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteEventFavoritePayload>>,
      DeleteEventFavoritePayloadEventFavoriteEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteEventFavoritePayload>>,
      Record<string, never>
    >
  }
  DeleteEventFormatMappingPayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteEventFormatMappingPayload>>,
      Record<string, never>
    >
    deletedEventFormatMappingId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteEventFormatMappingPayload>>,
      Record<string, never>
    >
    eventByEventId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteEventFormatMappingPayload>>,
      Record<string, never>
    >
    eventFormatByFormatId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteEventFormatMappingPayload>>,
      Record<string, never>
    >
    eventFormatMapping?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteEventFormatMappingPayload>>,
      Record<string, never>
    >
    eventFormatMappingEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteEventFormatMappingPayload>>,
      DeleteEventFormatMappingPayloadEventFormatMappingEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteEventFormatMappingPayload>>,
      Record<string, never>
    >
  }
  DeleteEventPayload?: {
    accountByCreatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteEventPayload>>,
      Record<string, never>
    >
    addressByAddressId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteEventPayload>>,
      Record<string, never>
    >
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteEventPayload>>,
      Record<string, never>
    >
    deletedEventId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteEventPayload>>,
      Record<string, never>
    >
    event?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteEventPayload>>,
      Record<string, never>
    >
    eventEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteEventPayload>>,
      DeleteEventPayloadEventEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteEventPayload>>,
      Record<string, never>
    >
  }
  DeleteEventRecommendationPayload?: {
    accountByAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteEventRecommendationPayload>>,
      Record<string, never>
    >
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteEventRecommendationPayload>>,
      Record<string, never>
    >
    deletedEventRecommendationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteEventRecommendationPayload>>,
      Record<string, never>
    >
    eventByEventId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteEventRecommendationPayload>>,
      Record<string, never>
    >
    eventRecommendation?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteEventRecommendationPayload>>,
      Record<string, never>
    >
    eventRecommendationEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteEventRecommendationPayload>>,
      DeleteEventRecommendationPayloadEventRecommendationEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteEventRecommendationPayload>>,
      Record<string, never>
    >
  }
  DeleteEventUploadPayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteEventUploadPayload>>,
      Record<string, never>
    >
    deletedEventUploadId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteEventUploadPayload>>,
      Record<string, never>
    >
    eventByEventId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteEventUploadPayload>>,
      Record<string, never>
    >
    eventUpload?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteEventUploadPayload>>,
      Record<string, never>
    >
    eventUploadEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteEventUploadPayload>>,
      DeleteEventUploadPayloadEventUploadEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteEventUploadPayload>>,
      Record<string, never>
    >
    uploadByUploadId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteEventUploadPayload>>,
      Record<string, never>
    >
  }
  DeleteFriendshipPayload?: {
    accountByAAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteFriendshipPayload>>,
      Record<string, never>
    >
    accountByBAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteFriendshipPayload>>,
      Record<string, never>
    >
    accountByCreatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteFriendshipPayload>>,
      Record<string, never>
    >
    accountByUpdatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteFriendshipPayload>>,
      Record<string, never>
    >
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteFriendshipPayload>>,
      Record<string, never>
    >
    deletedFriendshipId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteFriendshipPayload>>,
      Record<string, never>
    >
    friendship?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteFriendshipPayload>>,
      Record<string, never>
    >
    friendshipEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteFriendshipPayload>>,
      DeleteFriendshipPayloadFriendshipEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteFriendshipPayload>>,
      Record<string, never>
    >
  }
  DeleteGuestPayload?: {
    accountByUpdatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteGuestPayload>>,
      Record<string, never>
    >
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteGuestPayload>>,
      Record<string, never>
    >
    contactByContactId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteGuestPayload>>,
      Record<string, never>
    >
    deletedGuestId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteGuestPayload>>,
      Record<string, never>
    >
    eventByEventId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteGuestPayload>>,
      Record<string, never>
    >
    guest?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteGuestPayload>>,
      Record<string, never>
    >
    guestEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteGuestPayload>>,
      DeleteGuestPayloadGuestEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteGuestPayload>>,
      Record<string, never>
    >
  }
  DeletePreferenceEventCategoryPayload?: {
    accountByAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeletePreferenceEventCategoryPayload>>,
      Record<string, never>
    >
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeletePreferenceEventCategoryPayload>>,
      Record<string, never>
    >
    deletedPreferenceEventCategoryId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeletePreferenceEventCategoryPayload>>,
      Record<string, never>
    >
    eventCategoryByCategoryId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeletePreferenceEventCategoryPayload>>,
      Record<string, never>
    >
    preferenceEventCategory?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeletePreferenceEventCategoryPayload>>,
      Record<string, never>
    >
    preferenceEventCategoryEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeletePreferenceEventCategoryPayload>>,
      DeletePreferenceEventCategoryPayloadPreferenceEventCategoryEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeletePreferenceEventCategoryPayload>>,
      Record<string, never>
    >
  }
  DeletePreferenceEventFormatPayload?: {
    accountByAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeletePreferenceEventFormatPayload>>,
      Record<string, never>
    >
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeletePreferenceEventFormatPayload>>,
      Record<string, never>
    >
    deletedPreferenceEventFormatId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeletePreferenceEventFormatPayload>>,
      Record<string, never>
    >
    eventFormatByFormatId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeletePreferenceEventFormatPayload>>,
      Record<string, never>
    >
    preferenceEventFormat?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeletePreferenceEventFormatPayload>>,
      Record<string, never>
    >
    preferenceEventFormatEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeletePreferenceEventFormatPayload>>,
      DeletePreferenceEventFormatPayloadPreferenceEventFormatEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeletePreferenceEventFormatPayload>>,
      Record<string, never>
    >
  }
  DeletePreferenceEventLocationPayload?: {
    accountByCreatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeletePreferenceEventLocationPayload>>,
      Record<string, never>
    >
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeletePreferenceEventLocationPayload>>,
      Record<string, never>
    >
    deletedPreferenceEventLocationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeletePreferenceEventLocationPayload>>,
      Record<string, never>
    >
    preferenceEventLocation?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeletePreferenceEventLocationPayload>>,
      Record<string, never>
    >
    preferenceEventLocationEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeletePreferenceEventLocationPayload>>,
      DeletePreferenceEventLocationPayloadPreferenceEventLocationEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeletePreferenceEventLocationPayload>>,
      Record<string, never>
    >
  }
  DeletePreferenceEventSizePayload?: {
    accountByAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeletePreferenceEventSizePayload>>,
      Record<string, never>
    >
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeletePreferenceEventSizePayload>>,
      Record<string, never>
    >
    deletedPreferenceEventSizeId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeletePreferenceEventSizePayload>>,
      Record<string, never>
    >
    preferenceEventSize?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeletePreferenceEventSizePayload>>,
      Record<string, never>
    >
    preferenceEventSizeEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeletePreferenceEventSizePayload>>,
      DeletePreferenceEventSizePayloadPreferenceEventSizeEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeletePreferenceEventSizePayload>>,
      Record<string, never>
    >
  }
  DeleteProfilePicturePayload?: {
    accountByAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteProfilePicturePayload>>,
      Record<string, never>
    >
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteProfilePicturePayload>>,
      Record<string, never>
    >
    deletedProfilePictureId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteProfilePicturePayload>>,
      Record<string, never>
    >
    profilePicture?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteProfilePicturePayload>>,
      Record<string, never>
    >
    profilePictureEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteProfilePicturePayload>>,
      DeleteProfilePicturePayloadProfilePictureEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteProfilePicturePayload>>,
      Record<string, never>
    >
    uploadByUploadId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteProfilePicturePayload>>,
      Record<string, never>
    >
  }
  DeleteUploadPayload?: {
    accountByCreatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteUploadPayload>>,
      Record<string, never>
    >
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteUploadPayload>>,
      Record<string, never>
    >
    deletedUploadId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteUploadPayload>>,
      Record<string, never>
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteUploadPayload>>,
      Record<string, never>
    >
    upload?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteUploadPayload>>,
      Record<string, never>
    >
    uploadEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteUploadPayload>>,
      DeleteUploadPayloadUploadEdgeArgs
    >
  }
  Device?: {
    accountByCreatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Device>>,
      Record<string, never>
    >
    accountByUpdatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Device>>,
      Record<string, never>
    >
    createdAt?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Device>>,
      Record<string, never>
    >
    createdBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Device>>,
      Record<string, never>
    >
    fcmToken?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Device>>,
      Record<string, never>
    >
    id?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Device>>,
      Record<string, never>
    >
    nodeId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Device>>,
      Record<string, never>
    >
    updatedAt?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Device>>,
      Record<string, never>
    >
    updatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Device>>,
      Record<string, never>
    >
  }
  DevicesConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DevicesConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DevicesConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DevicesConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DevicesConnection>>,
      Record<string, never>
    >
  }
  DevicesEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DevicesEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DevicesEdge>>,
      Record<string, never>
    >
  }
  Event?: {
    accountByCreatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Event>>,
      Record<string, never>
    >
    addressByAddressId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Event>>,
      Record<string, never>
    >
    addressId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Event>>,
      Record<string, never>
    >
    createdAt?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Event>>,
      Record<string, never>
    >
    createdBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Event>>,
      Record<string, never>
    >
    description?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Event>>,
      Record<string, never>
    >
    end?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Event>>,
      Record<string, never>
    >
    eventCategoryMappingsByEventId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Event>>,
      EventEventCategoryMappingsByEventIdArgs
    >
    eventFavoritesByEventId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Event>>,
      EventEventFavoritesByEventIdArgs
    >
    eventFormatMappingsByEventId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Event>>,
      EventEventFormatMappingsByEventIdArgs
    >
    eventRecommendationsByEventId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Event>>,
      EventEventRecommendationsByEventIdArgs
    >
    eventUploadsByEventId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Event>>,
      EventEventUploadsByEventIdArgs
    >
    guestCountMaximum?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Event>>,
      Record<string, never>
    >
    guestsByEventId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Event>>,
      EventGuestsByEventIdArgs
    >
    id?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Event>>,
      Record<string, never>
    >
    isArchived?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Event>>,
      Record<string, never>
    >
    isInPerson?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Event>>,
      Record<string, never>
    >
    isRemote?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Event>>,
      Record<string, never>
    >
    language?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Event>>,
      Record<string, never>
    >
    name?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Event>>,
      Record<string, never>
    >
    nodeId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Event>>,
      Record<string, never>
    >
    reportsByTargetEventId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Event>>,
      EventReportsByTargetEventIdArgs
    >
    slug?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Event>>,
      Record<string, never>
    >
    start?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Event>>,
      Record<string, never>
    >
    url?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Event>>,
      Record<string, never>
    >
    visibility?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Event>>,
      Record<string, never>
    >
  }
  EventCategoriesConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventCategoriesConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventCategoriesConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventCategoriesConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventCategoriesConnection>>,
      Record<string, never>
    >
  }
  EventCategoriesEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventCategoriesEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventCategoriesEdge>>,
      Record<string, never>
    >
  }
  EventCategory?: {
    eventCategoryMappingsByCategoryId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventCategory>>,
      EventCategoryEventCategoryMappingsByCategoryIdArgs
    >
    id?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventCategory>>,
      Record<string, never>
    >
    name?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventCategory>>,
      Record<string, never>
    >
    nodeId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventCategory>>,
      Record<string, never>
    >
    preferenceEventCategoriesByCategoryId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventCategory>>,
      EventCategoryPreferenceEventCategoriesByCategoryIdArgs
    >
  }
  EventCategoryMapping?: {
    categoryId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventCategoryMapping>>,
      Record<string, never>
    >
    eventByEventId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventCategoryMapping>>,
      Record<string, never>
    >
    eventCategoryByCategoryId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventCategoryMapping>>,
      Record<string, never>
    >
    eventId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventCategoryMapping>>,
      Record<string, never>
    >
    nodeId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventCategoryMapping>>,
      Record<string, never>
    >
  }
  EventCategoryMappingsConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventCategoryMappingsConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventCategoryMappingsConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventCategoryMappingsConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventCategoryMappingsConnection>>,
      Record<string, never>
    >
  }
  EventCategoryMappingsEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventCategoryMappingsEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventCategoryMappingsEdge>>,
      Record<string, never>
    >
  }
  EventDeletePayload?: {
    accountByCreatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventDeletePayload>>,
      Record<string, never>
    >
    addressByAddressId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventDeletePayload>>,
      Record<string, never>
    >
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventDeletePayload>>,
      Record<string, never>
    >
    event?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventDeletePayload>>,
      Record<string, never>
    >
    eventEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventDeletePayload>>,
      EventDeletePayloadEventEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventDeletePayload>>,
      Record<string, never>
    >
  }
  EventFavorite?: {
    accountByCreatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventFavorite>>,
      Record<string, never>
    >
    createdAt?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventFavorite>>,
      Record<string, never>
    >
    createdBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventFavorite>>,
      Record<string, never>
    >
    eventByEventId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventFavorite>>,
      Record<string, never>
    >
    eventId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventFavorite>>,
      Record<string, never>
    >
    id?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventFavorite>>,
      Record<string, never>
    >
    nodeId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventFavorite>>,
      Record<string, never>
    >
  }
  EventFavoritesConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventFavoritesConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventFavoritesConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventFavoritesConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventFavoritesConnection>>,
      Record<string, never>
    >
  }
  EventFavoritesEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventFavoritesEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventFavoritesEdge>>,
      Record<string, never>
    >
  }
  EventFormat?: {
    eventFormatMappingsByFormatId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventFormat>>,
      EventFormatEventFormatMappingsByFormatIdArgs
    >
    id?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventFormat>>,
      Record<string, never>
    >
    name?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventFormat>>,
      Record<string, never>
    >
    nodeId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventFormat>>,
      Record<string, never>
    >
    preferenceEventFormatsByFormatId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventFormat>>,
      EventFormatPreferenceEventFormatsByFormatIdArgs
    >
  }
  EventFormatMapping?: {
    eventByEventId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventFormatMapping>>,
      Record<string, never>
    >
    eventFormatByFormatId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventFormatMapping>>,
      Record<string, never>
    >
    eventId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventFormatMapping>>,
      Record<string, never>
    >
    formatId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventFormatMapping>>,
      Record<string, never>
    >
    nodeId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventFormatMapping>>,
      Record<string, never>
    >
  }
  EventFormatMappingsConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventFormatMappingsConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventFormatMappingsConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventFormatMappingsConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventFormatMappingsConnection>>,
      Record<string, never>
    >
  }
  EventFormatMappingsEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventFormatMappingsEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventFormatMappingsEdge>>,
      Record<string, never>
    >
  }
  EventFormatsConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventFormatsConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventFormatsConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventFormatsConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventFormatsConnection>>,
      Record<string, never>
    >
  }
  EventFormatsEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventFormatsEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventFormatsEdge>>,
      Record<string, never>
    >
  }
  EventRecommendation?: {
    accountByAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventRecommendation>>,
      Record<string, never>
    >
    accountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventRecommendation>>,
      Record<string, never>
    >
    eventByEventId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventRecommendation>>,
      Record<string, never>
    >
    eventId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventRecommendation>>,
      Record<string, never>
    >
    nodeId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventRecommendation>>,
      Record<string, never>
    >
    predictedScore?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventRecommendation>>,
      Record<string, never>
    >
    score?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventRecommendation>>,
      Record<string, never>
    >
  }
  EventRecommendationsConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventRecommendationsConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventRecommendationsConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventRecommendationsConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventRecommendationsConnection>>,
      Record<string, never>
    >
  }
  EventRecommendationsEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventRecommendationsEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventRecommendationsEdge>>,
      Record<string, never>
    >
  }
  EventUnlockPayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventUnlockPayload>>,
      Record<string, never>
    >
    eventUnlockResponse?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventUnlockPayload>>,
      Record<string, never>
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventUnlockPayload>>,
      Record<string, never>
    >
  }
  EventUnlockResponse?: {
    creatorUsername?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventUnlockResponse>>,
      Record<string, never>
    >
    eventSlug?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventUnlockResponse>>,
      Record<string, never>
    >
    jwt?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventUnlockResponse>>,
      Record<string, never>
    >
  }
  EventUpload?: {
    eventByEventId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventUpload>>,
      Record<string, never>
    >
    eventId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventUpload>>,
      Record<string, never>
    >
    id?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventUpload>>,
      Record<string, never>
    >
    isHeaderImage?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventUpload>>,
      Record<string, never>
    >
    nodeId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventUpload>>,
      Record<string, never>
    >
    uploadByUploadId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventUpload>>,
      Record<string, never>
    >
    uploadId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventUpload>>,
      Record<string, never>
    >
  }
  EventUploadsConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventUploadsConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventUploadsConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventUploadsConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventUploadsConnection>>,
      Record<string, never>
    >
  }
  EventUploadsEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventUploadsEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventUploadsEdge>>,
      Record<string, never>
    >
  }
  EventsConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventsConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventsConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventsConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventsConnection>>,
      Record<string, never>
    >
  }
  EventsEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventsEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventsEdge>>,
      Record<string, never>
    >
  }
  EventsOrganizedConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventsOrganizedConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventsOrganizedConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventsOrganizedConnection>>,
      Record<string, never>
    >
  }
  EventsOrganizedEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventsOrganizedEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventsOrganizedEdge>>,
      Record<string, never>
    >
  }
  Friendship?: {
    aAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Friendship>>,
      Record<string, never>
    >
    accountByAAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Friendship>>,
      Record<string, never>
    >
    accountByBAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Friendship>>,
      Record<string, never>
    >
    accountByCreatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Friendship>>,
      Record<string, never>
    >
    accountByUpdatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Friendship>>,
      Record<string, never>
    >
    bAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Friendship>>,
      Record<string, never>
    >
    createdAt?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Friendship>>,
      Record<string, never>
    >
    createdBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Friendship>>,
      Record<string, never>
    >
    id?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Friendship>>,
      Record<string, never>
    >
    nodeId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Friendship>>,
      Record<string, never>
    >
    status?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Friendship>>,
      Record<string, never>
    >
    updatedAt?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Friendship>>,
      Record<string, never>
    >
    updatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Friendship>>,
      Record<string, never>
    >
  }
  FriendshipsConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<FriendshipsConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<FriendshipsConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<FriendshipsConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<FriendshipsConnection>>,
      Record<string, never>
    >
  }
  FriendshipsEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<FriendshipsEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<FriendshipsEdge>>,
      Record<string, never>
    >
  }
  GeographyPoint?: {
    geojson?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GeographyPoint>>,
      Record<string, never>
    >
    latitude?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GeographyPoint>>,
      Record<string, never>
    >
    longitude?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GeographyPoint>>,
      Record<string, never>
    >
    srid?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GeographyPoint>>,
      Record<string, never>
    >
  }
  Guest?: {
    accountByUpdatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Guest>>,
      Record<string, never>
    >
    contactByContactId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Guest>>,
      Record<string, never>
    >
    contactId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Guest>>,
      Record<string, never>
    >
    createdAt?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Guest>>,
      Record<string, never>
    >
    eventByEventId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Guest>>,
      Record<string, never>
    >
    eventId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Guest>>,
      Record<string, never>
    >
    feedback?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Guest>>,
      Record<string, never>
    >
    feedbackPaper?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Guest>>,
      Record<string, never>
    >
    id?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Guest>>,
      Record<string, never>
    >
    nodeId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Guest>>,
      Record<string, never>
    >
    updatedAt?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Guest>>,
      Record<string, never>
    >
    updatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Guest>>,
      Record<string, never>
    >
  }
  GuestContactIdEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GuestContactIdEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GuestContactIdEdge>>,
      Record<string, never>
    >
  }
  GuestContactIdsConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GuestContactIdsConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GuestContactIdsConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GuestContactIdsConnection>>,
      Record<string, never>
    >
  }
  GuestFlat?: {
    contactAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GuestFlat>>,
      Record<string, never>
    >
    contactAddressId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GuestFlat>>,
      Record<string, never>
    >
    contactCreatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GuestFlat>>,
      Record<string, never>
    >
    contactEmailAddress?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GuestFlat>>,
      Record<string, never>
    >
    contactEmailAddressHash?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GuestFlat>>,
      Record<string, never>
    >
    contactFirstName?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GuestFlat>>,
      Record<string, never>
    >
    contactId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GuestFlat>>,
      Record<string, never>
    >
    contactLastName?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GuestFlat>>,
      Record<string, never>
    >
    contactPhoneNumber?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GuestFlat>>,
      Record<string, never>
    >
    contactUrl?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GuestFlat>>,
      Record<string, never>
    >
    eventAddressId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GuestFlat>>,
      Record<string, never>
    >
    eventCreatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GuestFlat>>,
      Record<string, never>
    >
    eventDescription?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GuestFlat>>,
      Record<string, never>
    >
    eventEnd?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GuestFlat>>,
      Record<string, never>
    >
    eventGuestCountMaximum?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GuestFlat>>,
      Record<string, never>
    >
    eventId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GuestFlat>>,
      Record<string, never>
    >
    eventIsArchived?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GuestFlat>>,
      Record<string, never>
    >
    eventIsInPerson?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GuestFlat>>,
      Record<string, never>
    >
    eventIsRemote?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GuestFlat>>,
      Record<string, never>
    >
    eventName?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GuestFlat>>,
      Record<string, never>
    >
    eventSlug?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GuestFlat>>,
      Record<string, never>
    >
    eventStart?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GuestFlat>>,
      Record<string, never>
    >
    eventUrl?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GuestFlat>>,
      Record<string, never>
    >
    eventVisibility?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GuestFlat>>,
      Record<string, never>
    >
    guestContactId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GuestFlat>>,
      Record<string, never>
    >
    guestEventId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GuestFlat>>,
      Record<string, never>
    >
    guestFeedback?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GuestFlat>>,
      Record<string, never>
    >
    guestFeedbackPaper?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GuestFlat>>,
      Record<string, never>
    >
    guestId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GuestFlat>>,
      Record<string, never>
    >
  }
  GuestFlatsConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GuestFlatsConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GuestFlatsConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GuestFlatsConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GuestFlatsConnection>>,
      Record<string, never>
    >
  }
  GuestFlatsEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GuestFlatsEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GuestFlatsEdge>>,
      Record<string, never>
    >
  }
  GuestsConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GuestsConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GuestsConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GuestsConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GuestsConnection>>,
      Record<string, never>
    >
  }
  GuestsEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GuestsEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GuestsEdge>>,
      Record<string, never>
    >
  }
  InvitePayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<InvitePayload>>,
      Record<string, never>
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<InvitePayload>>,
      Record<string, never>
    >
  }
  JwtRefreshPayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<JwtRefreshPayload>>,
      Record<string, never>
    >
    jwt?: GraphCacheUpdateResolver<
      Maybe<WithTypename<JwtRefreshPayload>>,
      Record<string, never>
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<JwtRefreshPayload>>,
      Record<string, never>
    >
  }
  LegalTerm?: {
    createdAt?: GraphCacheUpdateResolver<
      Maybe<WithTypename<LegalTerm>>,
      Record<string, never>
    >
    id?: GraphCacheUpdateResolver<
      Maybe<WithTypename<LegalTerm>>,
      Record<string, never>
    >
    language?: GraphCacheUpdateResolver<
      Maybe<WithTypename<LegalTerm>>,
      Record<string, never>
    >
    legalTermAcceptancesByLegalTermId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<LegalTerm>>,
      LegalTermLegalTermAcceptancesByLegalTermIdArgs
    >
    nodeId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<LegalTerm>>,
      Record<string, never>
    >
    term?: GraphCacheUpdateResolver<
      Maybe<WithTypename<LegalTerm>>,
      Record<string, never>
    >
    version?: GraphCacheUpdateResolver<
      Maybe<WithTypename<LegalTerm>>,
      Record<string, never>
    >
  }
  LegalTermAcceptance?: {
    accountByAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<LegalTermAcceptance>>,
      Record<string, never>
    >
    accountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<LegalTermAcceptance>>,
      Record<string, never>
    >
    createdAt?: GraphCacheUpdateResolver<
      Maybe<WithTypename<LegalTermAcceptance>>,
      Record<string, never>
    >
    id?: GraphCacheUpdateResolver<
      Maybe<WithTypename<LegalTermAcceptance>>,
      Record<string, never>
    >
    legalTermByLegalTermId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<LegalTermAcceptance>>,
      Record<string, never>
    >
    legalTermId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<LegalTermAcceptance>>,
      Record<string, never>
    >
    nodeId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<LegalTermAcceptance>>,
      Record<string, never>
    >
  }
  LegalTermAcceptancesConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<LegalTermAcceptancesConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<LegalTermAcceptancesConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<LegalTermAcceptancesConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<LegalTermAcceptancesConnection>>,
      Record<string, never>
    >
  }
  LegalTermAcceptancesEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<LegalTermAcceptancesEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<LegalTermAcceptancesEdge>>,
      Record<string, never>
    >
  }
  LegalTermsConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<LegalTermsConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<LegalTermsConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<LegalTermsConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<LegalTermsConnection>>,
      Record<string, never>
    >
  }
  LegalTermsEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<LegalTermsEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<LegalTermsEdge>>,
      Record<string, never>
    >
  }
  NotificationAcknowledgePayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<NotificationAcknowledgePayload>>,
      Record<string, never>
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<NotificationAcknowledgePayload>>,
      Record<string, never>
    >
  }
  PageInfo?: {
    endCursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PageInfo>>,
      Record<string, never>
    >
    hasNextPage?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PageInfo>>,
      Record<string, never>
    >
    hasPreviousPage?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PageInfo>>,
      Record<string, never>
    >
    startCursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PageInfo>>,
      Record<string, never>
    >
  }
  PreferenceEventCategoriesConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventCategoriesConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventCategoriesConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventCategoriesConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventCategoriesConnection>>,
      Record<string, never>
    >
  }
  PreferenceEventCategoriesEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventCategoriesEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventCategoriesEdge>>,
      Record<string, never>
    >
  }
  PreferenceEventCategory?: {
    accountByAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventCategory>>,
      Record<string, never>
    >
    accountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventCategory>>,
      Record<string, never>
    >
    categoryId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventCategory>>,
      Record<string, never>
    >
    createdAt?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventCategory>>,
      Record<string, never>
    >
    eventCategoryByCategoryId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventCategory>>,
      Record<string, never>
    >
    id?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventCategory>>,
      Record<string, never>
    >
    nodeId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventCategory>>,
      Record<string, never>
    >
  }
  PreferenceEventFormat?: {
    accountByAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventFormat>>,
      Record<string, never>
    >
    accountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventFormat>>,
      Record<string, never>
    >
    createdAt?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventFormat>>,
      Record<string, never>
    >
    eventFormatByFormatId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventFormat>>,
      Record<string, never>
    >
    formatId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventFormat>>,
      Record<string, never>
    >
    id?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventFormat>>,
      Record<string, never>
    >
    nodeId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventFormat>>,
      Record<string, never>
    >
  }
  PreferenceEventFormatsConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventFormatsConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventFormatsConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventFormatsConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventFormatsConnection>>,
      Record<string, never>
    >
  }
  PreferenceEventFormatsEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventFormatsEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventFormatsEdge>>,
      Record<string, never>
    >
  }
  PreferenceEventLocation?: {
    accountByCreatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventLocation>>,
      Record<string, never>
    >
    createdAt?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventLocation>>,
      Record<string, never>
    >
    createdBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventLocation>>,
      Record<string, never>
    >
    id?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventLocation>>,
      Record<string, never>
    >
    location?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventLocation>>,
      Record<string, never>
    >
    nodeId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventLocation>>,
      Record<string, never>
    >
    radius?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventLocation>>,
      Record<string, never>
    >
  }
  PreferenceEventLocationsConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventLocationsConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventLocationsConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventLocationsConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventLocationsConnection>>,
      Record<string, never>
    >
  }
  PreferenceEventLocationsEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventLocationsEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventLocationsEdge>>,
      Record<string, never>
    >
  }
  PreferenceEventSize?: {
    accountByAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventSize>>,
      Record<string, never>
    >
    accountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventSize>>,
      Record<string, never>
    >
    createdAt?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventSize>>,
      Record<string, never>
    >
    eventSize?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventSize>>,
      Record<string, never>
    >
    id?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventSize>>,
      Record<string, never>
    >
    nodeId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventSize>>,
      Record<string, never>
    >
  }
  PreferenceEventSizesConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventSizesConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventSizesConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventSizesConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventSizesConnection>>,
      Record<string, never>
    >
  }
  PreferenceEventSizesEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventSizesEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventSizesEdge>>,
      Record<string, never>
    >
  }
  ProfilePicture?: {
    accountByAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ProfilePicture>>,
      Record<string, never>
    >
    accountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ProfilePicture>>,
      Record<string, never>
    >
    id?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ProfilePicture>>,
      Record<string, never>
    >
    nodeId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ProfilePicture>>,
      Record<string, never>
    >
    uploadByUploadId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ProfilePicture>>,
      Record<string, never>
    >
    uploadId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ProfilePicture>>,
      Record<string, never>
    >
  }
  ProfilePictureSetPayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ProfilePictureSetPayload>>,
      Record<string, never>
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ProfilePictureSetPayload>>,
      Record<string, never>
    >
  }
  ProfilePicturesConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ProfilePicturesConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ProfilePicturesConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ProfilePicturesConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ProfilePicturesConnection>>,
      Record<string, never>
    >
  }
  ProfilePicturesEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ProfilePicturesEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ProfilePicturesEdge>>,
      Record<string, never>
    >
  }
  Report?: {
    accountByCreatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Report>>,
      Record<string, never>
    >
    accountByTargetAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Report>>,
      Record<string, never>
    >
    createdAt?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Report>>,
      Record<string, never>
    >
    createdBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Report>>,
      Record<string, never>
    >
    eventByTargetEventId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Report>>,
      Record<string, never>
    >
    id?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Report>>,
      Record<string, never>
    >
    nodeId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Report>>,
      Record<string, never>
    >
    reason?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Report>>,
      Record<string, never>
    >
    targetAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Report>>,
      Record<string, never>
    >
    targetEventId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Report>>,
      Record<string, never>
    >
    targetUploadId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Report>>,
      Record<string, never>
    >
    uploadByTargetUploadId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Report>>,
      Record<string, never>
    >
  }
  ReportsConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ReportsConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ReportsConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ReportsConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ReportsConnection>>,
      Record<string, never>
    >
  }
  ReportsEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ReportsEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ReportsEdge>>,
      Record<string, never>
    >
  }
  UpdateAccountLocationPayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateAccountLocationPayload>>,
      Record<string, never>
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateAccountLocationPayload>>,
      Record<string, never>
    >
  }
  UpdateAccountPayload?: {
    account?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateAccountPayload>>,
      Record<string, never>
    >
    accountEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateAccountPayload>>,
      UpdateAccountPayloadAccountEdgeArgs
    >
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateAccountPayload>>,
      Record<string, never>
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateAccountPayload>>,
      Record<string, never>
    >
  }
  UpdateAccountSocialNetworkPayload?: {
    accountByAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateAccountSocialNetworkPayload>>,
      Record<string, never>
    >
    accountSocialNetwork?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateAccountSocialNetworkPayload>>,
      Record<string, never>
    >
    accountSocialNetworkEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateAccountSocialNetworkPayload>>,
      UpdateAccountSocialNetworkPayloadAccountSocialNetworkEdgeArgs
    >
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateAccountSocialNetworkPayload>>,
      Record<string, never>
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateAccountSocialNetworkPayload>>,
      Record<string, never>
    >
  }
  UpdateAchievementPayload?: {
    accountByAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateAchievementPayload>>,
      Record<string, never>
    >
    achievement?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateAchievementPayload>>,
      Record<string, never>
    >
    achievementEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateAchievementPayload>>,
      UpdateAchievementPayloadAchievementEdgeArgs
    >
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateAchievementPayload>>,
      Record<string, never>
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateAchievementPayload>>,
      Record<string, never>
    >
  }
  UpdateAddressPayload?: {
    accountByCreatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateAddressPayload>>,
      Record<string, never>
    >
    accountByUpdatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateAddressPayload>>,
      Record<string, never>
    >
    address?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateAddressPayload>>,
      Record<string, never>
    >
    addressEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateAddressPayload>>,
      UpdateAddressPayloadAddressEdgeArgs
    >
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateAddressPayload>>,
      Record<string, never>
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateAddressPayload>>,
      Record<string, never>
    >
  }
  UpdateContactPayload?: {
    accountByAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateContactPayload>>,
      Record<string, never>
    >
    accountByCreatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateContactPayload>>,
      Record<string, never>
    >
    addressByAddressId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateContactPayload>>,
      Record<string, never>
    >
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateContactPayload>>,
      Record<string, never>
    >
    contact?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateContactPayload>>,
      Record<string, never>
    >
    contactEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateContactPayload>>,
      UpdateContactPayloadContactEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateContactPayload>>,
      Record<string, never>
    >
  }
  UpdateDevicePayload?: {
    accountByCreatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateDevicePayload>>,
      Record<string, never>
    >
    accountByUpdatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateDevicePayload>>,
      Record<string, never>
    >
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateDevicePayload>>,
      Record<string, never>
    >
    device?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateDevicePayload>>,
      Record<string, never>
    >
    deviceEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateDevicePayload>>,
      UpdateDevicePayloadDeviceEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateDevicePayload>>,
      Record<string, never>
    >
  }
  UpdateEventCategoryMappingPayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateEventCategoryMappingPayload>>,
      Record<string, never>
    >
    eventByEventId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateEventCategoryMappingPayload>>,
      Record<string, never>
    >
    eventCategoryByCategoryId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateEventCategoryMappingPayload>>,
      Record<string, never>
    >
    eventCategoryMapping?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateEventCategoryMappingPayload>>,
      Record<string, never>
    >
    eventCategoryMappingEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateEventCategoryMappingPayload>>,
      UpdateEventCategoryMappingPayloadEventCategoryMappingEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateEventCategoryMappingPayload>>,
      Record<string, never>
    >
  }
  UpdateEventFormatMappingPayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateEventFormatMappingPayload>>,
      Record<string, never>
    >
    eventByEventId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateEventFormatMappingPayload>>,
      Record<string, never>
    >
    eventFormatByFormatId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateEventFormatMappingPayload>>,
      Record<string, never>
    >
    eventFormatMapping?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateEventFormatMappingPayload>>,
      Record<string, never>
    >
    eventFormatMappingEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateEventFormatMappingPayload>>,
      UpdateEventFormatMappingPayloadEventFormatMappingEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateEventFormatMappingPayload>>,
      Record<string, never>
    >
  }
  UpdateEventPayload?: {
    accountByCreatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateEventPayload>>,
      Record<string, never>
    >
    addressByAddressId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateEventPayload>>,
      Record<string, never>
    >
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateEventPayload>>,
      Record<string, never>
    >
    event?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateEventPayload>>,
      Record<string, never>
    >
    eventEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateEventPayload>>,
      UpdateEventPayloadEventEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateEventPayload>>,
      Record<string, never>
    >
  }
  UpdateEventRecommendationPayload?: {
    accountByAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateEventRecommendationPayload>>,
      Record<string, never>
    >
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateEventRecommendationPayload>>,
      Record<string, never>
    >
    eventByEventId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateEventRecommendationPayload>>,
      Record<string, never>
    >
    eventRecommendation?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateEventRecommendationPayload>>,
      Record<string, never>
    >
    eventRecommendationEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateEventRecommendationPayload>>,
      UpdateEventRecommendationPayloadEventRecommendationEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateEventRecommendationPayload>>,
      Record<string, never>
    >
  }
  UpdateEventUploadPayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateEventUploadPayload>>,
      Record<string, never>
    >
    eventByEventId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateEventUploadPayload>>,
      Record<string, never>
    >
    eventUpload?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateEventUploadPayload>>,
      Record<string, never>
    >
    eventUploadEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateEventUploadPayload>>,
      UpdateEventUploadPayloadEventUploadEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateEventUploadPayload>>,
      Record<string, never>
    >
    uploadByUploadId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateEventUploadPayload>>,
      Record<string, never>
    >
  }
  UpdateFriendshipPayload?: {
    accountByAAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateFriendshipPayload>>,
      Record<string, never>
    >
    accountByBAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateFriendshipPayload>>,
      Record<string, never>
    >
    accountByCreatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateFriendshipPayload>>,
      Record<string, never>
    >
    accountByUpdatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateFriendshipPayload>>,
      Record<string, never>
    >
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateFriendshipPayload>>,
      Record<string, never>
    >
    friendship?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateFriendshipPayload>>,
      Record<string, never>
    >
    friendshipEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateFriendshipPayload>>,
      UpdateFriendshipPayloadFriendshipEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateFriendshipPayload>>,
      Record<string, never>
    >
  }
  UpdateGuestPayload?: {
    accountByUpdatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateGuestPayload>>,
      Record<string, never>
    >
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateGuestPayload>>,
      Record<string, never>
    >
    contactByContactId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateGuestPayload>>,
      Record<string, never>
    >
    eventByEventId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateGuestPayload>>,
      Record<string, never>
    >
    guest?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateGuestPayload>>,
      Record<string, never>
    >
    guestEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateGuestPayload>>,
      UpdateGuestPayloadGuestEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateGuestPayload>>,
      Record<string, never>
    >
  }
  UpdatePreferenceEventCategoryPayload?: {
    accountByAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdatePreferenceEventCategoryPayload>>,
      Record<string, never>
    >
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdatePreferenceEventCategoryPayload>>,
      Record<string, never>
    >
    eventCategoryByCategoryId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdatePreferenceEventCategoryPayload>>,
      Record<string, never>
    >
    preferenceEventCategory?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdatePreferenceEventCategoryPayload>>,
      Record<string, never>
    >
    preferenceEventCategoryEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdatePreferenceEventCategoryPayload>>,
      UpdatePreferenceEventCategoryPayloadPreferenceEventCategoryEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdatePreferenceEventCategoryPayload>>,
      Record<string, never>
    >
  }
  UpdatePreferenceEventFormatPayload?: {
    accountByAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdatePreferenceEventFormatPayload>>,
      Record<string, never>
    >
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdatePreferenceEventFormatPayload>>,
      Record<string, never>
    >
    eventFormatByFormatId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdatePreferenceEventFormatPayload>>,
      Record<string, never>
    >
    preferenceEventFormat?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdatePreferenceEventFormatPayload>>,
      Record<string, never>
    >
    preferenceEventFormatEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdatePreferenceEventFormatPayload>>,
      UpdatePreferenceEventFormatPayloadPreferenceEventFormatEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdatePreferenceEventFormatPayload>>,
      Record<string, never>
    >
  }
  UpdatePreferenceEventLocationPayload?: {
    accountByCreatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdatePreferenceEventLocationPayload>>,
      Record<string, never>
    >
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdatePreferenceEventLocationPayload>>,
      Record<string, never>
    >
    preferenceEventLocation?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdatePreferenceEventLocationPayload>>,
      Record<string, never>
    >
    preferenceEventLocationEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdatePreferenceEventLocationPayload>>,
      UpdatePreferenceEventLocationPayloadPreferenceEventLocationEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdatePreferenceEventLocationPayload>>,
      Record<string, never>
    >
  }
  UpdatePreferenceEventSizePayload?: {
    accountByAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdatePreferenceEventSizePayload>>,
      Record<string, never>
    >
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdatePreferenceEventSizePayload>>,
      Record<string, never>
    >
    preferenceEventSize?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdatePreferenceEventSizePayload>>,
      Record<string, never>
    >
    preferenceEventSizeEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdatePreferenceEventSizePayload>>,
      UpdatePreferenceEventSizePayloadPreferenceEventSizeEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdatePreferenceEventSizePayload>>,
      Record<string, never>
    >
  }
  UpdateProfilePicturePayload?: {
    accountByAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateProfilePicturePayload>>,
      Record<string, never>
    >
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateProfilePicturePayload>>,
      Record<string, never>
    >
    profilePicture?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateProfilePicturePayload>>,
      Record<string, never>
    >
    profilePictureEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateProfilePicturePayload>>,
      UpdateProfilePicturePayloadProfilePictureEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateProfilePicturePayload>>,
      Record<string, never>
    >
    uploadByUploadId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateProfilePicturePayload>>,
      Record<string, never>
    >
  }
  UpdateUploadPayload?: {
    accountByCreatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateUploadPayload>>,
      Record<string, never>
    >
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateUploadPayload>>,
      Record<string, never>
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateUploadPayload>>,
      Record<string, never>
    >
    upload?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateUploadPayload>>,
      Record<string, never>
    >
    uploadEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateUploadPayload>>,
      UpdateUploadPayloadUploadEdgeArgs
    >
  }
  Upload?: {
    accountByCreatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Upload>>,
      Record<string, never>
    >
    createdAt?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Upload>>,
      Record<string, never>
    >
    createdBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Upload>>,
      Record<string, never>
    >
    eventUploadsByUploadId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Upload>>,
      UploadEventUploadsByUploadIdArgs
    >
    id?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Upload>>,
      Record<string, never>
    >
    name?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Upload>>,
      Record<string, never>
    >
    nodeId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Upload>>,
      Record<string, never>
    >
    profilePicturesByUploadId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Upload>>,
      UploadProfilePicturesByUploadIdArgs
    >
    reportsByTargetUploadId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Upload>>,
      UploadReportsByTargetUploadIdArgs
    >
    sizeByte?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Upload>>,
      Record<string, never>
    >
    storageKey?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Upload>>,
      Record<string, never>
    >
    type?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Upload>>,
      Record<string, never>
    >
  }
  UploadsConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UploadsConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UploadsConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UploadsConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UploadsConnection>>,
      Record<string, never>
    >
  }
  UploadsEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UploadsEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UploadsEdge>>,
      Record<string, never>
    >
  }
}

export type GraphCacheConfig = Parameters<typeof cacheExchange>[0] & {
  updates?: GraphCacheUpdaters
  keys?: GraphCacheKeysConfig
  optimistic?: GraphCacheOptimisticUpdaters
  resolvers?: GraphCacheResolvers
}
