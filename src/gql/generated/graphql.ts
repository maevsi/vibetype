/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
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
  /**
   * A signed eight-byte integer. The upper big integer values are greater than the
   * max value for a JavaScript number. Therefore all big integers will be output as
   * strings and not numbers.
   */
  BigInt: { input: any; output: any }
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: { input: any; output: any }
  /** The day, does not include a time. */
  Date: { input: any; output: any }
  /**
   * A point in time as described by the [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone.
   */
  Datetime: { input: any; output: any }
  /** The `GeoJSON` scalar type represents GeoJSON values as specified by[RFC 7946](https://tools.ietf.org/html/rfc7946). */
  GeoJSON: { input: any; output: any }
  /**
   * A JSON Web Token defined by [RFC 7519](https://tools.ietf.org/html/rfc7519)
   * which securely represents claims between two parties.
   */
  Jwt: { input: any; output: any }
  /** A builtin object identifier type for a text search configuration */
  RegConfig: { input: any; output: any }
  /** A universally unique identifier as defined by [RFC 4122](https://tools.ietf.org/html/rfc4122). */
  UUID: { input: any; output: any }
}

/** Public account data. */
export type Account = Node & {
  __typename?: 'Account'
  /** Reads and enables pagination through a set of `AccountBlock`. */
  accountBlocksByBlockedAccountId: AccountBlocksConnection
  /** Reads and enables pagination through a set of `AccountBlock`. */
  accountBlocksByCreatedBy: AccountBlocksConnection
  /** Reads and enables pagination through a set of `AccountPreferenceEventCategory`. */
  accountPreferenceEventCategoriesByAccountId: AccountPreferenceEventCategoriesConnection
  /** Reads and enables pagination through a set of `AccountPreferenceEventFormat`. */
  accountPreferenceEventFormatsByAccountId: AccountPreferenceEventFormatsConnection
  /** Reads and enables pagination through a set of `AccountPreferenceEventLocation`. */
  accountPreferenceEventLocationsByCreatedBy: AccountPreferenceEventLocationsConnection
  /** Reads and enables pagination through a set of `AccountPreferenceEventSize`. */
  accountPreferenceEventSizesByAccountId: AccountPreferenceEventSizesConnection
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
export type AccountAccountPreferenceEventCategoriesByAccountIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<AccountPreferenceEventCategoryCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<AccountPreferenceEventCategoriesOrderBy>>
}

/** Public account data. */
export type AccountAccountPreferenceEventFormatsByAccountIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<AccountPreferenceEventFormatCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<AccountPreferenceEventFormatsOrderBy>>
}

/** Public account data. */
export type AccountAccountPreferenceEventLocationsByCreatedByArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<AccountPreferenceEventLocationCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<AccountPreferenceEventLocationsOrderBy>>
}

/** Public account data. */
export type AccountAccountPreferenceEventSizesByAccountIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<AccountPreferenceEventSizeCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<AccountPreferenceEventSizesOrderBy>>
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
  id?: InputMaybe<Scalars['UUID']['input']>
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

/** An input for mutations affecting `Account` */
export type AccountInput = {
  /** The account's description. */
  description?: InputMaybe<Scalars['String']['input']>
  /** The account's internal id. */
  id: Scalars['UUID']['input']
  /** The account's imprint. */
  imprint?: InputMaybe<Scalars['String']['input']>
  /** The account's username. */
  username: Scalars['String']['input']
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
  /** The account's internal id. */
  id?: InputMaybe<Scalars['UUID']['input']>
  /** The account's imprint. */
  imprint?: InputMaybe<Scalars['String']['input']>
  /** The account's username. */
  username?: InputMaybe<Scalars['String']['input']>
}

/** A connection to a list of `AccountPreferenceEventCategory` values. */
export type AccountPreferenceEventCategoriesConnection = {
  __typename?: 'AccountPreferenceEventCategoriesConnection'
  /** A list of edges which contains the `AccountPreferenceEventCategory` and cursor to aid in pagination. */
  edges: Array<AccountPreferenceEventCategoriesEdge>
  /** A list of `AccountPreferenceEventCategory` objects. */
  nodes: Array<AccountPreferenceEventCategory>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `AccountPreferenceEventCategory` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `AccountPreferenceEventCategory` edge in the connection. */
export type AccountPreferenceEventCategoriesEdge = {
  __typename?: 'AccountPreferenceEventCategoriesEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `AccountPreferenceEventCategory` at the end of the edge. */
  node: AccountPreferenceEventCategory
}

/** Methods to use when ordering `AccountPreferenceEventCategory`. */
export enum AccountPreferenceEventCategoriesOrderBy {
  AccountIdAsc = 'ACCOUNT_ID_ASC',
  AccountIdDesc = 'ACCOUNT_ID_DESC',
  CategoryIdAsc = 'CATEGORY_ID_ASC',
  CategoryIdDesc = 'CATEGORY_ID_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
}

/** Event categories a user account is interested in (M:N relationship). */
export type AccountPreferenceEventCategory = Node & {
  __typename?: 'AccountPreferenceEventCategory'
  /** Reads a single `Account` that is related to this `AccountPreferenceEventCategory`. */
  accountByAccountId?: Maybe<Account>
  /** A user account id. */
  accountId: Scalars['UUID']['output']
  /** An event category id. */
  categoryId: Scalars['UUID']['output']
  createdAt: Scalars['Datetime']['output']
  /** Reads a single `EventCategory` that is related to this `AccountPreferenceEventCategory`. */
  eventCategoryByCategoryId?: Maybe<EventCategory>
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output']
}

/**
 * A condition to be used against `AccountPreferenceEventCategory` object types.
 * All fields are tested for equality and combined with a logical ‘and.’
 */
export type AccountPreferenceEventCategoryCondition = {
  /** Checks for equality with the object’s `accountId` field. */
  accountId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `categoryId` field. */
  categoryId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>
}

/** An input for mutations affecting `AccountPreferenceEventCategory` */
export type AccountPreferenceEventCategoryInput = {
  /** A user account id. */
  accountId: Scalars['UUID']['input']
  /** An event category id. */
  categoryId: Scalars['UUID']['input']
  createdAt?: InputMaybe<Scalars['Datetime']['input']>
}

/** Represents an update to a `AccountPreferenceEventCategory`. Fields that are set will be updated. */
export type AccountPreferenceEventCategoryPatch = {
  /** A user account id. */
  accountId?: InputMaybe<Scalars['UUID']['input']>
  /** An event category id. */
  categoryId?: InputMaybe<Scalars['UUID']['input']>
  createdAt?: InputMaybe<Scalars['Datetime']['input']>
}

/** Event formats a user account is interested in (M:N relationship). */
export type AccountPreferenceEventFormat = Node & {
  __typename?: 'AccountPreferenceEventFormat'
  /** Reads a single `Account` that is related to this `AccountPreferenceEventFormat`. */
  accountByAccountId?: Maybe<Account>
  /** A user account id. */
  accountId: Scalars['UUID']['output']
  /** The timestammp when the record was created.. */
  createdAt: Scalars['Datetime']['output']
  /** Reads a single `EventFormat` that is related to this `AccountPreferenceEventFormat`. */
  eventFormatByFormatId?: Maybe<EventFormat>
  /** The id of an event format. */
  formatId: Scalars['UUID']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output']
}

/**
 * A condition to be used against `AccountPreferenceEventFormat` object types. All
 * fields are tested for equality and combined with a logical ‘and.’
 */
export type AccountPreferenceEventFormatCondition = {
  /** Checks for equality with the object’s `accountId` field. */
  accountId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>
  /** Checks for equality with the object’s `formatId` field. */
  formatId?: InputMaybe<Scalars['UUID']['input']>
}

/** An input for mutations affecting `AccountPreferenceEventFormat` */
export type AccountPreferenceEventFormatInput = {
  /** A user account id. */
  accountId: Scalars['UUID']['input']
  /** The timestammp when the record was created.. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>
  /** The id of an event format. */
  formatId: Scalars['UUID']['input']
}

/** Represents an update to a `AccountPreferenceEventFormat`. Fields that are set will be updated. */
export type AccountPreferenceEventFormatPatch = {
  /** A user account id. */
  accountId?: InputMaybe<Scalars['UUID']['input']>
  /** The timestammp when the record was created.. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>
  /** The id of an event format. */
  formatId?: InputMaybe<Scalars['UUID']['input']>
}

/** A connection to a list of `AccountPreferenceEventFormat` values. */
export type AccountPreferenceEventFormatsConnection = {
  __typename?: 'AccountPreferenceEventFormatsConnection'
  /** A list of edges which contains the `AccountPreferenceEventFormat` and cursor to aid in pagination. */
  edges: Array<AccountPreferenceEventFormatsEdge>
  /** A list of `AccountPreferenceEventFormat` objects. */
  nodes: Array<AccountPreferenceEventFormat>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `AccountPreferenceEventFormat` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `AccountPreferenceEventFormat` edge in the connection. */
export type AccountPreferenceEventFormatsEdge = {
  __typename?: 'AccountPreferenceEventFormatsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `AccountPreferenceEventFormat` at the end of the edge. */
  node: AccountPreferenceEventFormat
}

/** Methods to use when ordering `AccountPreferenceEventFormat`. */
export enum AccountPreferenceEventFormatsOrderBy {
  AccountIdAsc = 'ACCOUNT_ID_ASC',
  AccountIdDesc = 'ACCOUNT_ID_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  FormatIdAsc = 'FORMAT_ID_ASC',
  FormatIdDesc = 'FORMAT_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
}

/** Stores preferred event locations for user accounts, including coordinates and search radius. */
export type AccountPreferenceEventLocation = Node & {
  __typename?: 'AccountPreferenceEventLocation'
  /** Reads a single `Account` that is related to this `AccountPreferenceEventLocation`. */
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
 * A condition to be used against `AccountPreferenceEventLocation` object types.
 * All fields are tested for equality and combined with a logical ‘and.’
 */
export type AccountPreferenceEventLocationCondition = {
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

/** An input for mutations affecting `AccountPreferenceEventLocation` */
export type AccountPreferenceEventLocationInput = {
  /** Reference to the account that created the location preference. */
  createdBy: Scalars['UUID']['input']
  /** Geographical point representing the preferred location, derived from latitude and longitude. */
  location: Scalars['GeoJSON']['input']
  /** Search radius in meters around the location where events are preferred. Must be positive. */
  radius: Scalars['Float']['input']
}

/** Represents an update to a `AccountPreferenceEventLocation`. Fields that are set will be updated. */
export type AccountPreferenceEventLocationPatch = {
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

/** A connection to a list of `AccountPreferenceEventLocation` values. */
export type AccountPreferenceEventLocationsConnection = {
  __typename?: 'AccountPreferenceEventLocationsConnection'
  /** A list of edges which contains the `AccountPreferenceEventLocation` and cursor to aid in pagination. */
  edges: Array<AccountPreferenceEventLocationsEdge>
  /** A list of `AccountPreferenceEventLocation` objects. */
  nodes: Array<AccountPreferenceEventLocation>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `AccountPreferenceEventLocation` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `AccountPreferenceEventLocation` edge in the connection. */
export type AccountPreferenceEventLocationsEdge = {
  __typename?: 'AccountPreferenceEventLocationsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `AccountPreferenceEventLocation` at the end of the edge. */
  node: AccountPreferenceEventLocation
}

/** Methods to use when ordering `AccountPreferenceEventLocation`. */
export enum AccountPreferenceEventLocationsOrderBy {
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
export type AccountPreferenceEventSize = Node & {
  __typename?: 'AccountPreferenceEventSize'
  /** Reads a single `Account` that is related to this `AccountPreferenceEventSize`. */
  accountByAccountId?: Maybe<Account>
  /** The account's internal id. */
  accountId: Scalars['UUID']['output']
  /** Timestamp of when the event size preference was created, defaults to the current timestamp. */
  createdAt: Scalars['Datetime']['output']
  /** A preferred event sized */
  eventSize: EventSize
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output']
}

/**
 * A condition to be used against `AccountPreferenceEventSize` object types. All
 * fields are tested for equality and combined with a logical ‘and.’
 */
export type AccountPreferenceEventSizeCondition = {
  /** Checks for equality with the object’s `accountId` field. */
  accountId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>
  /** Checks for equality with the object’s `eventSize` field. */
  eventSize?: InputMaybe<EventSize>
}

/** An input for mutations affecting `AccountPreferenceEventSize` */
export type AccountPreferenceEventSizeInput = {
  /** The account's internal id. */
  accountId: Scalars['UUID']['input']
  /** A preferred event sized */
  eventSize: EventSize
}

/** Represents an update to a `AccountPreferenceEventSize`. Fields that are set will be updated. */
export type AccountPreferenceEventSizePatch = {
  /** The account's internal id. */
  accountId?: InputMaybe<Scalars['UUID']['input']>
  /** A preferred event sized */
  eventSize?: InputMaybe<EventSize>
}

/** A connection to a list of `AccountPreferenceEventSize` values. */
export type AccountPreferenceEventSizesConnection = {
  __typename?: 'AccountPreferenceEventSizesConnection'
  /** A list of edges which contains the `AccountPreferenceEventSize` and cursor to aid in pagination. */
  edges: Array<AccountPreferenceEventSizesEdge>
  /** A list of `AccountPreferenceEventSize` objects. */
  nodes: Array<AccountPreferenceEventSize>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `AccountPreferenceEventSize` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `AccountPreferenceEventSize` edge in the connection. */
export type AccountPreferenceEventSizesEdge = {
  __typename?: 'AccountPreferenceEventSizesEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `AccountPreferenceEventSize` at the end of the edge. */
  node: AccountPreferenceEventSize
}

/** Methods to use when ordering `AccountPreferenceEventSize`. */
export enum AccountPreferenceEventSizesOrderBy {
  AccountIdAsc = 'ACCOUNT_ID_ASC',
  AccountIdDesc = 'ACCOUNT_ID_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  EventSizeAsc = 'EVENT_SIZE_ASC',
  EventSizeDesc = 'EVENT_SIZE_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
}

/** All input for the `accountRegistration` mutation. */
export type AccountRegistrationInput = {
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

/** All input for the create `Account` mutation. */
export type CreateAccountInput = {
  /** The `Account` to be created by this mutation. */
  account: AccountInput
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
}

/** The output of our create `Account` mutation. */
export type CreateAccountPayload = {
  __typename?: 'CreateAccountPayload'
  /** The `Account` that was created by this mutation. */
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

/** The output of our create `Account` mutation. */
export type CreateAccountPayloadAccountEdgeArgs = {
  orderBy?: InputMaybe<Array<AccountsOrderBy>>
}

/** All input for the create `AccountPreferenceEventCategory` mutation. */
export type CreateAccountPreferenceEventCategoryInput = {
  /** The `AccountPreferenceEventCategory` to be created by this mutation. */
  accountPreferenceEventCategory: AccountPreferenceEventCategoryInput
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
}

/** The output of our create `AccountPreferenceEventCategory` mutation. */
export type CreateAccountPreferenceEventCategoryPayload = {
  __typename?: 'CreateAccountPreferenceEventCategoryPayload'
  /** Reads a single `Account` that is related to this `AccountPreferenceEventCategory`. */
  accountByAccountId?: Maybe<Account>
  /** The `AccountPreferenceEventCategory` that was created by this mutation. */
  accountPreferenceEventCategory?: Maybe<AccountPreferenceEventCategory>
  /** An edge for our `AccountPreferenceEventCategory`. May be used by Relay 1. */
  accountPreferenceEventCategoryEdge?: Maybe<AccountPreferenceEventCategoriesEdge>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Reads a single `EventCategory` that is related to this `AccountPreferenceEventCategory`. */
  eventCategoryByCategoryId?: Maybe<EventCategory>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `AccountPreferenceEventCategory` mutation. */
export type CreateAccountPreferenceEventCategoryPayloadAccountPreferenceEventCategoryEdgeArgs =
  {
    orderBy?: InputMaybe<Array<AccountPreferenceEventCategoriesOrderBy>>
  }

/** All input for the create `AccountPreferenceEventFormat` mutation. */
export type CreateAccountPreferenceEventFormatInput = {
  /** The `AccountPreferenceEventFormat` to be created by this mutation. */
  accountPreferenceEventFormat: AccountPreferenceEventFormatInput
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
}

/** The output of our create `AccountPreferenceEventFormat` mutation. */
export type CreateAccountPreferenceEventFormatPayload = {
  __typename?: 'CreateAccountPreferenceEventFormatPayload'
  /** Reads a single `Account` that is related to this `AccountPreferenceEventFormat`. */
  accountByAccountId?: Maybe<Account>
  /** The `AccountPreferenceEventFormat` that was created by this mutation. */
  accountPreferenceEventFormat?: Maybe<AccountPreferenceEventFormat>
  /** An edge for our `AccountPreferenceEventFormat`. May be used by Relay 1. */
  accountPreferenceEventFormatEdge?: Maybe<AccountPreferenceEventFormatsEdge>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Reads a single `EventFormat` that is related to this `AccountPreferenceEventFormat`. */
  eventFormatByFormatId?: Maybe<EventFormat>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `AccountPreferenceEventFormat` mutation. */
export type CreateAccountPreferenceEventFormatPayloadAccountPreferenceEventFormatEdgeArgs =
  {
    orderBy?: InputMaybe<Array<AccountPreferenceEventFormatsOrderBy>>
  }

/** All input for the create `AccountPreferenceEventLocation` mutation. */
export type CreateAccountPreferenceEventLocationInput = {
  /** The `AccountPreferenceEventLocation` to be created by this mutation. */
  accountPreferenceEventLocation: AccountPreferenceEventLocationInput
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
}

/** The output of our create `AccountPreferenceEventLocation` mutation. */
export type CreateAccountPreferenceEventLocationPayload = {
  __typename?: 'CreateAccountPreferenceEventLocationPayload'
  /** Reads a single `Account` that is related to this `AccountPreferenceEventLocation`. */
  accountByCreatedBy?: Maybe<Account>
  /** The `AccountPreferenceEventLocation` that was created by this mutation. */
  accountPreferenceEventLocation?: Maybe<AccountPreferenceEventLocation>
  /** An edge for our `AccountPreferenceEventLocation`. May be used by Relay 1. */
  accountPreferenceEventLocationEdge?: Maybe<AccountPreferenceEventLocationsEdge>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `AccountPreferenceEventLocation` mutation. */
export type CreateAccountPreferenceEventLocationPayloadAccountPreferenceEventLocationEdgeArgs =
  {
    orderBy?: InputMaybe<Array<AccountPreferenceEventLocationsOrderBy>>
  }

/** All input for the create `AccountPreferenceEventSize` mutation. */
export type CreateAccountPreferenceEventSizeInput = {
  /** The `AccountPreferenceEventSize` to be created by this mutation. */
  accountPreferenceEventSize: AccountPreferenceEventSizeInput
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
}

/** The output of our create `AccountPreferenceEventSize` mutation. */
export type CreateAccountPreferenceEventSizePayload = {
  __typename?: 'CreateAccountPreferenceEventSizePayload'
  /** Reads a single `Account` that is related to this `AccountPreferenceEventSize`. */
  accountByAccountId?: Maybe<Account>
  /** The `AccountPreferenceEventSize` that was created by this mutation. */
  accountPreferenceEventSize?: Maybe<AccountPreferenceEventSize>
  /** An edge for our `AccountPreferenceEventSize`. May be used by Relay 1. */
  accountPreferenceEventSizeEdge?: Maybe<AccountPreferenceEventSizesEdge>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `AccountPreferenceEventSize` mutation. */
export type CreateAccountPreferenceEventSizePayloadAccountPreferenceEventSizeEdgeArgs =
  {
    orderBy?: InputMaybe<Array<AccountPreferenceEventSizesOrderBy>>
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

/** All input for the create `EventCategory` mutation. */
export type CreateEventCategoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The `EventCategory` to be created by this mutation. */
  eventCategory: EventCategoryInput
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

/** The output of our create `EventCategory` mutation. */
export type CreateEventCategoryPayload = {
  __typename?: 'CreateEventCategoryPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `EventCategory` that was created by this mutation. */
  eventCategory?: Maybe<EventCategory>
  /** An edge for our `EventCategory`. May be used by Relay 1. */
  eventCategoryEdge?: Maybe<EventCategoriesEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `EventCategory` mutation. */
export type CreateEventCategoryPayloadEventCategoryEdgeArgs = {
  orderBy?: InputMaybe<Array<EventCategoriesOrderBy>>
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

/** All input for the create `EventFormat` mutation. */
export type CreateEventFormatInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The `EventFormat` to be created by this mutation. */
  eventFormat: EventFormatInput
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

/** The output of our create `EventFormat` mutation. */
export type CreateEventFormatPayload = {
  __typename?: 'CreateEventFormatPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `EventFormat` that was created by this mutation. */
  eventFormat?: Maybe<EventFormat>
  /** An edge for our `EventFormat`. May be used by Relay 1. */
  eventFormatEdge?: Maybe<EventFormatsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `EventFormat` mutation. */
export type CreateEventFormatPayloadEventFormatEdgeArgs = {
  orderBy?: InputMaybe<Array<EventFormatsOrderBy>>
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

/** All input for the `deleteAccountById` mutation. */
export type DeleteAccountByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The account's internal id. */
  id: Scalars['UUID']['input']
}

/** All input for the `deleteAccountByUsername` mutation. */
export type DeleteAccountByUsernameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The account's username. */
  username: Scalars['String']['input']
}

/** All input for the `deleteAccount` mutation. */
export type DeleteAccountInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `Account` to be deleted. */
  nodeId: Scalars['ID']['input']
}

/** The output of our delete `Account` mutation. */
export type DeleteAccountPayload = {
  __typename?: 'DeleteAccountPayload'
  /** The `Account` that was deleted by this mutation. */
  account?: Maybe<Account>
  /** An edge for our `Account`. May be used by Relay 1. */
  accountEdge?: Maybe<AccountsEdge>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  deletedAccountId?: Maybe<Scalars['ID']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `Account` mutation. */
export type DeleteAccountPayloadAccountEdgeArgs = {
  orderBy?: InputMaybe<Array<AccountsOrderBy>>
}

/** All input for the `deleteAccountPreferenceEventCategoryByAccountIdAndCategoryId` mutation. */
export type DeleteAccountPreferenceEventCategoryByAccountIdAndCategoryIdInput =
  {
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

/** All input for the `deleteAccountPreferenceEventCategory` mutation. */
export type DeleteAccountPreferenceEventCategoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `AccountPreferenceEventCategory` to be deleted. */
  nodeId: Scalars['ID']['input']
}

/** The output of our delete `AccountPreferenceEventCategory` mutation. */
export type DeleteAccountPreferenceEventCategoryPayload = {
  __typename?: 'DeleteAccountPreferenceEventCategoryPayload'
  /** Reads a single `Account` that is related to this `AccountPreferenceEventCategory`. */
  accountByAccountId?: Maybe<Account>
  /** The `AccountPreferenceEventCategory` that was deleted by this mutation. */
  accountPreferenceEventCategory?: Maybe<AccountPreferenceEventCategory>
  /** An edge for our `AccountPreferenceEventCategory`. May be used by Relay 1. */
  accountPreferenceEventCategoryEdge?: Maybe<AccountPreferenceEventCategoriesEdge>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  deletedAccountPreferenceEventCategoryId?: Maybe<Scalars['ID']['output']>
  /** Reads a single `EventCategory` that is related to this `AccountPreferenceEventCategory`. */
  eventCategoryByCategoryId?: Maybe<EventCategory>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `AccountPreferenceEventCategory` mutation. */
export type DeleteAccountPreferenceEventCategoryPayloadAccountPreferenceEventCategoryEdgeArgs =
  {
    orderBy?: InputMaybe<Array<AccountPreferenceEventCategoriesOrderBy>>
  }

/** All input for the `deleteAccountPreferenceEventFormatByAccountIdAndFormatId` mutation. */
export type DeleteAccountPreferenceEventFormatByAccountIdAndFormatIdInput = {
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

/** All input for the `deleteAccountPreferenceEventFormat` mutation. */
export type DeleteAccountPreferenceEventFormatInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `AccountPreferenceEventFormat` to be deleted. */
  nodeId: Scalars['ID']['input']
}

/** The output of our delete `AccountPreferenceEventFormat` mutation. */
export type DeleteAccountPreferenceEventFormatPayload = {
  __typename?: 'DeleteAccountPreferenceEventFormatPayload'
  /** Reads a single `Account` that is related to this `AccountPreferenceEventFormat`. */
  accountByAccountId?: Maybe<Account>
  /** The `AccountPreferenceEventFormat` that was deleted by this mutation. */
  accountPreferenceEventFormat?: Maybe<AccountPreferenceEventFormat>
  /** An edge for our `AccountPreferenceEventFormat`. May be used by Relay 1. */
  accountPreferenceEventFormatEdge?: Maybe<AccountPreferenceEventFormatsEdge>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  deletedAccountPreferenceEventFormatId?: Maybe<Scalars['ID']['output']>
  /** Reads a single `EventFormat` that is related to this `AccountPreferenceEventFormat`. */
  eventFormatByFormatId?: Maybe<EventFormat>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `AccountPreferenceEventFormat` mutation. */
export type DeleteAccountPreferenceEventFormatPayloadAccountPreferenceEventFormatEdgeArgs =
  {
    orderBy?: InputMaybe<Array<AccountPreferenceEventFormatsOrderBy>>
  }

/** All input for the `deleteAccountPreferenceEventLocationByCreatedByAndLocationAndRadius` mutation. */
export type DeleteAccountPreferenceEventLocationByCreatedByAndLocationAndRadiusInput =
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

/** All input for the `deleteAccountPreferenceEventLocationById` mutation. */
export type DeleteAccountPreferenceEventLocationByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Unique identifier for the preference record. */
  id: Scalars['UUID']['input']
}

/** All input for the `deleteAccountPreferenceEventLocation` mutation. */
export type DeleteAccountPreferenceEventLocationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `AccountPreferenceEventLocation` to be deleted. */
  nodeId: Scalars['ID']['input']
}

/** The output of our delete `AccountPreferenceEventLocation` mutation. */
export type DeleteAccountPreferenceEventLocationPayload = {
  __typename?: 'DeleteAccountPreferenceEventLocationPayload'
  /** Reads a single `Account` that is related to this `AccountPreferenceEventLocation`. */
  accountByCreatedBy?: Maybe<Account>
  /** The `AccountPreferenceEventLocation` that was deleted by this mutation. */
  accountPreferenceEventLocation?: Maybe<AccountPreferenceEventLocation>
  /** An edge for our `AccountPreferenceEventLocation`. May be used by Relay 1. */
  accountPreferenceEventLocationEdge?: Maybe<AccountPreferenceEventLocationsEdge>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  deletedAccountPreferenceEventLocationId?: Maybe<Scalars['ID']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `AccountPreferenceEventLocation` mutation. */
export type DeleteAccountPreferenceEventLocationPayloadAccountPreferenceEventLocationEdgeArgs =
  {
    orderBy?: InputMaybe<Array<AccountPreferenceEventLocationsOrderBy>>
  }

/** All input for the `deleteAccountPreferenceEventSizeByAccountIdAndEventSize` mutation. */
export type DeleteAccountPreferenceEventSizeByAccountIdAndEventSizeInput = {
  /** The account's internal id. */
  accountId: Scalars['UUID']['input']
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** A preferred event sized */
  eventSize: EventSize
}

/** All input for the `deleteAccountPreferenceEventSize` mutation. */
export type DeleteAccountPreferenceEventSizeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `AccountPreferenceEventSize` to be deleted. */
  nodeId: Scalars['ID']['input']
}

/** The output of our delete `AccountPreferenceEventSize` mutation. */
export type DeleteAccountPreferenceEventSizePayload = {
  __typename?: 'DeleteAccountPreferenceEventSizePayload'
  /** Reads a single `Account` that is related to this `AccountPreferenceEventSize`. */
  accountByAccountId?: Maybe<Account>
  /** The `AccountPreferenceEventSize` that was deleted by this mutation. */
  accountPreferenceEventSize?: Maybe<AccountPreferenceEventSize>
  /** An edge for our `AccountPreferenceEventSize`. May be used by Relay 1. */
  accountPreferenceEventSizeEdge?: Maybe<AccountPreferenceEventSizesEdge>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  deletedAccountPreferenceEventSizeId?: Maybe<Scalars['ID']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `AccountPreferenceEventSize` mutation. */
export type DeleteAccountPreferenceEventSizePayloadAccountPreferenceEventSizeEdgeArgs =
  {
    orderBy?: InputMaybe<Array<AccountPreferenceEventSizesOrderBy>>
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

/** All input for the `deleteEventCategoryById` mutation. */
export type DeleteEventCategoryByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The id of the event category. */
  id: Scalars['UUID']['input']
}

/** All input for the `deleteEventCategoryByName` mutation. */
export type DeleteEventCategoryByNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** A category name. */
  name: Scalars['String']['input']
}

/** All input for the `deleteEventCategory` mutation. */
export type DeleteEventCategoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `EventCategory` to be deleted. */
  nodeId: Scalars['ID']['input']
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

/** The output of our delete `EventCategory` mutation. */
export type DeleteEventCategoryPayload = {
  __typename?: 'DeleteEventCategoryPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  deletedEventCategoryId?: Maybe<Scalars['ID']['output']>
  /** The `EventCategory` that was deleted by this mutation. */
  eventCategory?: Maybe<EventCategory>
  /** An edge for our `EventCategory`. May be used by Relay 1. */
  eventCategoryEdge?: Maybe<EventCategoriesEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `EventCategory` mutation. */
export type DeleteEventCategoryPayloadEventCategoryEdgeArgs = {
  orderBy?: InputMaybe<Array<EventCategoriesOrderBy>>
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

/** All input for the `deleteEventFormatById` mutation. */
export type DeleteEventFormatByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The id of the event format. */
  id: Scalars['UUID']['input']
}

/** All input for the `deleteEventFormatByName` mutation. */
export type DeleteEventFormatByNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The name of the event format. */
  name: Scalars['String']['input']
}

/** All input for the `deleteEventFormat` mutation. */
export type DeleteEventFormatInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `EventFormat` to be deleted. */
  nodeId: Scalars['ID']['input']
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

/** The output of our delete `EventFormat` mutation. */
export type DeleteEventFormatPayload = {
  __typename?: 'DeleteEventFormatPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  deletedEventFormatId?: Maybe<Scalars['ID']['output']>
  /** The `EventFormat` that was deleted by this mutation. */
  eventFormat?: Maybe<EventFormat>
  /** An edge for our `EventFormat`. May be used by Relay 1. */
  eventFormatEdge?: Maybe<EventFormatsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `EventFormat` mutation. */
export type DeleteEventFormatPayloadEventFormatEdgeArgs = {
  orderBy?: InputMaybe<Array<EventFormatsOrderBy>>
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

/** All input for the `deleteLegalTermAcceptanceById` mutation. */
export type DeleteLegalTermAcceptanceByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Unique identifier for this legal term acceptance record. Automatically generated for each new acceptance. */
  id: Scalars['UUID']['input']
}

/** All input for the `deleteLegalTermAcceptance` mutation. */
export type DeleteLegalTermAcceptanceInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `LegalTermAcceptance` to be deleted. */
  nodeId: Scalars['ID']['input']
}

/** The output of our delete `LegalTermAcceptance` mutation. */
export type DeleteLegalTermAcceptancePayload = {
  __typename?: 'DeleteLegalTermAcceptancePayload'
  /** Reads a single `Account` that is related to this `LegalTermAcceptance`. */
  accountByAccountId?: Maybe<Account>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  deletedLegalTermAcceptanceId?: Maybe<Scalars['ID']['output']>
  /** The `LegalTermAcceptance` that was deleted by this mutation. */
  legalTermAcceptance?: Maybe<LegalTermAcceptance>
  /** An edge for our `LegalTermAcceptance`. May be used by Relay 1. */
  legalTermAcceptanceEdge?: Maybe<LegalTermAcceptancesEdge>
  /** Reads a single `LegalTerm` that is related to this `LegalTermAcceptance`. */
  legalTermByLegalTermId?: Maybe<LegalTerm>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `LegalTermAcceptance` mutation. */
export type DeleteLegalTermAcceptancePayloadLegalTermAcceptanceEdgeArgs = {
  orderBy?: InputMaybe<Array<LegalTermAcceptancesOrderBy>>
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
  /** Reads and enables pagination through a set of `AccountPreferenceEventCategory`. */
  accountPreferenceEventCategoriesByCategoryId: AccountPreferenceEventCategoriesConnection
  /** Reads and enables pagination through a set of `EventCategoryMapping`. */
  eventCategoryMappingsByCategoryId: EventCategoryMappingsConnection
  /** The id of the event category. */
  id: Scalars['UUID']['output']
  /** A category name. */
  name: Scalars['String']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output']
}

/** Event categories. */
export type EventCategoryAccountPreferenceEventCategoriesByCategoryIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<AccountPreferenceEventCategoryCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<AccountPreferenceEventCategoriesOrderBy>>
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

/** An input for mutations affecting `EventCategory` */
export type EventCategoryInput = {
  /** The id of the event category. */
  id?: InputMaybe<Scalars['UUID']['input']>
  /** A category name. */
  name: Scalars['String']['input']
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

/** Represents an update to a `EventCategory`. Fields that are set will be updated. */
export type EventCategoryPatch = {
  /** The id of the event category. */
  id?: InputMaybe<Scalars['UUID']['input']>
  /** A category name. */
  name?: InputMaybe<Scalars['String']['input']>
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
  eventId?: Maybe<Scalars['UUID']['output']>
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
  eventId?: InputMaybe<Scalars['UUID']['input']>
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
  /** Reads and enables pagination through a set of `AccountPreferenceEventFormat`. */
  accountPreferenceEventFormatsByFormatId: AccountPreferenceEventFormatsConnection
  /** Reads and enables pagination through a set of `EventFormatMapping`. */
  eventFormatMappingsByFormatId: EventFormatMappingsConnection
  /** The id of the event format. */
  id: Scalars['UUID']['output']
  /** The name of the event format. */
  name: Scalars['String']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output']
}

/** Event formats. */
export type EventFormatAccountPreferenceEventFormatsByFormatIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<AccountPreferenceEventFormatCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<AccountPreferenceEventFormatsOrderBy>>
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

/** An input for mutations affecting `EventFormat` */
export type EventFormatInput = {
  /** The id of the event format. */
  id?: InputMaybe<Scalars['UUID']['input']>
  /** The name of the event format. */
  name: Scalars['String']['input']
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

/** Represents an update to a `EventFormat`. Fields that are set will be updated. */
export type EventFormatPatch = {
  /** The id of the event format. */
  id?: InputMaybe<Scalars['UUID']['input']>
  /** The name of the event format. */
  name?: InputMaybe<Scalars['String']['input']>
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
  /** Creates a contact and registers an account referencing it. */
  accountRegistration?: Maybe<AccountRegistrationPayload>
  /** Refreshes an account's email address verification validity period. */
  accountRegistrationRefresh?: Maybe<AccountRegistrationRefreshPayload>
  /** Inserts an achievement unlock for the user that gave an existing achievement code. */
  achievementUnlock?: Maybe<AchievementUnlockPayload>
  /** Creates a JWT token that will securely identify an account and give it certain permissions. */
  authenticate?: Maybe<AuthenticatePayload>
  /** Creates a single `Account`. */
  createAccount?: Maybe<CreateAccountPayload>
  /** Creates a single `AccountBlock`. */
  createAccountBlock?: Maybe<CreateAccountBlockPayload>
  /** Creates a single `AccountPreferenceEventCategory`. */
  createAccountPreferenceEventCategory?: Maybe<CreateAccountPreferenceEventCategoryPayload>
  /** Creates a single `AccountPreferenceEventFormat`. */
  createAccountPreferenceEventFormat?: Maybe<CreateAccountPreferenceEventFormatPayload>
  /** Creates a single `AccountPreferenceEventLocation`. */
  createAccountPreferenceEventLocation?: Maybe<CreateAccountPreferenceEventLocationPayload>
  /** Creates a single `AccountPreferenceEventSize`. */
  createAccountPreferenceEventSize?: Maybe<CreateAccountPreferenceEventSizePayload>
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
  /** Creates a single `EventCategory`. */
  createEventCategory?: Maybe<CreateEventCategoryPayload>
  /** Creates a single `EventCategoryMapping`. */
  createEventCategoryMapping?: Maybe<CreateEventCategoryMappingPayload>
  /** Creates a single `EventFavorite`. */
  createEventFavorite?: Maybe<CreateEventFavoritePayload>
  /** Creates a single `EventFormat`. */
  createEventFormat?: Maybe<CreateEventFormatPayload>
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
  /** Creates a single `ProfilePicture`. */
  createProfilePicture?: Maybe<CreateProfilePicturePayload>
  /** Creates a single `Report`. */
  createReport?: Maybe<CreateReportPayload>
  /** Creates a single `Upload`. */
  createUpload?: Maybe<CreateUploadPayload>
  /** Deletes a single `Account` using its globally unique id. */
  deleteAccount?: Maybe<DeleteAccountPayload>
  /** Deletes a single `AccountBlock` using its globally unique id. */
  deleteAccountBlock?: Maybe<DeleteAccountBlockPayload>
  /** Deletes a single `AccountBlock` using a unique key. */
  deleteAccountBlockByCreatedByAndBlockedAccountId?: Maybe<DeleteAccountBlockPayload>
  /** Deletes a single `AccountBlock` using a unique key. */
  deleteAccountBlockById?: Maybe<DeleteAccountBlockPayload>
  /** Deletes a single `Account` using a unique key. */
  deleteAccountById?: Maybe<DeleteAccountPayload>
  /** Deletes a single `Account` using a unique key. */
  deleteAccountByUsername?: Maybe<DeleteAccountPayload>
  /** Deletes a single `AccountPreferenceEventCategory` using its globally unique id. */
  deleteAccountPreferenceEventCategory?: Maybe<DeleteAccountPreferenceEventCategoryPayload>
  /** Deletes a single `AccountPreferenceEventCategory` using a unique key. */
  deleteAccountPreferenceEventCategoryByAccountIdAndCategoryId?: Maybe<DeleteAccountPreferenceEventCategoryPayload>
  /** Deletes a single `AccountPreferenceEventFormat` using its globally unique id. */
  deleteAccountPreferenceEventFormat?: Maybe<DeleteAccountPreferenceEventFormatPayload>
  /** Deletes a single `AccountPreferenceEventFormat` using a unique key. */
  deleteAccountPreferenceEventFormatByAccountIdAndFormatId?: Maybe<DeleteAccountPreferenceEventFormatPayload>
  /** Deletes a single `AccountPreferenceEventLocation` using its globally unique id. */
  deleteAccountPreferenceEventLocation?: Maybe<DeleteAccountPreferenceEventLocationPayload>
  /** Deletes a single `AccountPreferenceEventLocation` using a unique key. */
  deleteAccountPreferenceEventLocationByCreatedByAndLocationAndRadius?: Maybe<DeleteAccountPreferenceEventLocationPayload>
  /** Deletes a single `AccountPreferenceEventLocation` using a unique key. */
  deleteAccountPreferenceEventLocationById?: Maybe<DeleteAccountPreferenceEventLocationPayload>
  /** Deletes a single `AccountPreferenceEventSize` using its globally unique id. */
  deleteAccountPreferenceEventSize?: Maybe<DeleteAccountPreferenceEventSizePayload>
  /** Deletes a single `AccountPreferenceEventSize` using a unique key. */
  deleteAccountPreferenceEventSizeByAccountIdAndEventSize?: Maybe<DeleteAccountPreferenceEventSizePayload>
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
  /** Deletes a single `EventCategory` using its globally unique id. */
  deleteEventCategory?: Maybe<DeleteEventCategoryPayload>
  /** Deletes a single `EventCategory` using a unique key. */
  deleteEventCategoryById?: Maybe<DeleteEventCategoryPayload>
  /** Deletes a single `EventCategory` using a unique key. */
  deleteEventCategoryByName?: Maybe<DeleteEventCategoryPayload>
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
  /** Deletes a single `EventFormat` using its globally unique id. */
  deleteEventFormat?: Maybe<DeleteEventFormatPayload>
  /** Deletes a single `EventFormat` using a unique key. */
  deleteEventFormatById?: Maybe<DeleteEventFormatPayload>
  /** Deletes a single `EventFormat` using a unique key. */
  deleteEventFormatByName?: Maybe<DeleteEventFormatPayload>
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
  /** Deletes a single `LegalTermAcceptance` using its globally unique id. */
  deleteLegalTermAcceptance?: Maybe<DeleteLegalTermAcceptancePayload>
  /** Deletes a single `LegalTermAcceptance` using a unique key. */
  deleteLegalTermAcceptanceById?: Maybe<DeleteLegalTermAcceptancePayload>
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
  /**
   * Sets the birth date for the invoker's account.
   *
   * Error codes:
   * - **P0002** when no record was updated
   * - **23514** when the birth date is already set
   */
  updateAccountBirthDate?: Maybe<UpdateAccountBirthDatePayload>
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
  /** Updates a single `AccountPreferenceEventCategory` using its globally unique id and a patch. */
  updateAccountPreferenceEventCategory?: Maybe<UpdateAccountPreferenceEventCategoryPayload>
  /** Updates a single `AccountPreferenceEventCategory` using a unique key and a patch. */
  updateAccountPreferenceEventCategoryByAccountIdAndCategoryId?: Maybe<UpdateAccountPreferenceEventCategoryPayload>
  /** Updates a single `AccountPreferenceEventFormat` using its globally unique id and a patch. */
  updateAccountPreferenceEventFormat?: Maybe<UpdateAccountPreferenceEventFormatPayload>
  /** Updates a single `AccountPreferenceEventFormat` using a unique key and a patch. */
  updateAccountPreferenceEventFormatByAccountIdAndFormatId?: Maybe<UpdateAccountPreferenceEventFormatPayload>
  /** Updates a single `AccountPreferenceEventLocation` using its globally unique id and a patch. */
  updateAccountPreferenceEventLocation?: Maybe<UpdateAccountPreferenceEventLocationPayload>
  /** Updates a single `AccountPreferenceEventLocation` using a unique key and a patch. */
  updateAccountPreferenceEventLocationByCreatedByAndLocationAndRadius?: Maybe<UpdateAccountPreferenceEventLocationPayload>
  /** Updates a single `AccountPreferenceEventLocation` using a unique key and a patch. */
  updateAccountPreferenceEventLocationById?: Maybe<UpdateAccountPreferenceEventLocationPayload>
  /** Updates a single `AccountPreferenceEventSize` using its globally unique id and a patch. */
  updateAccountPreferenceEventSize?: Maybe<UpdateAccountPreferenceEventSizePayload>
  /** Updates a single `AccountPreferenceEventSize` using a unique key and a patch. */
  updateAccountPreferenceEventSizeByAccountIdAndEventSize?: Maybe<UpdateAccountPreferenceEventSizePayload>
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
  /** Updates a single `EventCategory` using its globally unique id and a patch. */
  updateEventCategory?: Maybe<UpdateEventCategoryPayload>
  /** Updates a single `EventCategory` using a unique key and a patch. */
  updateEventCategoryById?: Maybe<UpdateEventCategoryPayload>
  /** Updates a single `EventCategory` using a unique key and a patch. */
  updateEventCategoryByName?: Maybe<UpdateEventCategoryPayload>
  /** Updates a single `EventCategoryMapping` using its globally unique id and a patch. */
  updateEventCategoryMapping?: Maybe<UpdateEventCategoryMappingPayload>
  /** Updates a single `EventCategoryMapping` using a unique key and a patch. */
  updateEventCategoryMappingByEventIdAndCategoryId?: Maybe<UpdateEventCategoryMappingPayload>
  /** Updates a single `EventFormat` using its globally unique id and a patch. */
  updateEventFormat?: Maybe<UpdateEventFormatPayload>
  /** Updates a single `EventFormat` using a unique key and a patch. */
  updateEventFormatById?: Maybe<UpdateEventFormatPayload>
  /** Updates a single `EventFormat` using a unique key and a patch. */
  updateEventFormatByName?: Maybe<UpdateEventFormatPayload>
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
export type MutationCreateAccountArgs = {
  input: CreateAccountInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateAccountBlockArgs = {
  input: CreateAccountBlockInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateAccountPreferenceEventCategoryArgs = {
  input: CreateAccountPreferenceEventCategoryInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateAccountPreferenceEventFormatArgs = {
  input: CreateAccountPreferenceEventFormatInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateAccountPreferenceEventLocationArgs = {
  input: CreateAccountPreferenceEventLocationInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateAccountPreferenceEventSizeArgs = {
  input: CreateAccountPreferenceEventSizeInput
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
export type MutationCreateEventCategoryArgs = {
  input: CreateEventCategoryInput
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
export type MutationCreateEventFormatArgs = {
  input: CreateEventFormatInput
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
export type MutationDeleteAccountArgs = {
  input: DeleteAccountInput
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
export type MutationDeleteAccountByIdArgs = {
  input: DeleteAccountByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAccountByUsernameArgs = {
  input: DeleteAccountByUsernameInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAccountPreferenceEventCategoryArgs = {
  input: DeleteAccountPreferenceEventCategoryInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAccountPreferenceEventCategoryByAccountIdAndCategoryIdArgs =
  {
    input: DeleteAccountPreferenceEventCategoryByAccountIdAndCategoryIdInput
  }

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAccountPreferenceEventFormatArgs = {
  input: DeleteAccountPreferenceEventFormatInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAccountPreferenceEventFormatByAccountIdAndFormatIdArgs =
  {
    input: DeleteAccountPreferenceEventFormatByAccountIdAndFormatIdInput
  }

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAccountPreferenceEventLocationArgs = {
  input: DeleteAccountPreferenceEventLocationInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAccountPreferenceEventLocationByCreatedByAndLocationAndRadiusArgs =
  {
    input: DeleteAccountPreferenceEventLocationByCreatedByAndLocationAndRadiusInput
  }

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAccountPreferenceEventLocationByIdArgs = {
  input: DeleteAccountPreferenceEventLocationByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAccountPreferenceEventSizeArgs = {
  input: DeleteAccountPreferenceEventSizeInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAccountPreferenceEventSizeByAccountIdAndEventSizeArgs =
  {
    input: DeleteAccountPreferenceEventSizeByAccountIdAndEventSizeInput
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
export type MutationDeleteEventCategoryArgs = {
  input: DeleteEventCategoryInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEventCategoryByIdArgs = {
  input: DeleteEventCategoryByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEventCategoryByNameArgs = {
  input: DeleteEventCategoryByNameInput
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
export type MutationDeleteEventFormatArgs = {
  input: DeleteEventFormatInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEventFormatByIdArgs = {
  input: DeleteEventFormatByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEventFormatByNameArgs = {
  input: DeleteEventFormatByNameInput
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
export type MutationDeleteLegalTermAcceptanceArgs = {
  input: DeleteLegalTermAcceptanceInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteLegalTermAcceptanceByIdArgs = {
  input: DeleteLegalTermAcceptanceByIdInput
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
export type MutationUpdateAccountBirthDateArgs = {
  input: UpdateAccountBirthDateInput
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
export type MutationUpdateAccountPreferenceEventCategoryArgs = {
  input: UpdateAccountPreferenceEventCategoryInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAccountPreferenceEventCategoryByAccountIdAndCategoryIdArgs =
  {
    input: UpdateAccountPreferenceEventCategoryByAccountIdAndCategoryIdInput
  }

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAccountPreferenceEventFormatArgs = {
  input: UpdateAccountPreferenceEventFormatInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAccountPreferenceEventFormatByAccountIdAndFormatIdArgs =
  {
    input: UpdateAccountPreferenceEventFormatByAccountIdAndFormatIdInput
  }

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAccountPreferenceEventLocationArgs = {
  input: UpdateAccountPreferenceEventLocationInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAccountPreferenceEventLocationByCreatedByAndLocationAndRadiusArgs =
  {
    input: UpdateAccountPreferenceEventLocationByCreatedByAndLocationAndRadiusInput
  }

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAccountPreferenceEventLocationByIdArgs = {
  input: UpdateAccountPreferenceEventLocationByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAccountPreferenceEventSizeArgs = {
  input: UpdateAccountPreferenceEventSizeInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAccountPreferenceEventSizeByAccountIdAndEventSizeArgs =
  {
    input: UpdateAccountPreferenceEventSizeByAccountIdAndEventSizeInput
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
export type MutationUpdateEventCategoryArgs = {
  input: UpdateEventCategoryInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateEventCategoryByIdArgs = {
  input: UpdateEventCategoryByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateEventCategoryByNameArgs = {
  input: UpdateEventCategoryByNameInput
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
export type MutationUpdateEventFormatArgs = {
  input: UpdateEventFormatInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateEventFormatByIdArgs = {
  input: UpdateEventFormatByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateEventFormatByNameArgs = {
  input: UpdateEventFormatByNameInput
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
  /** Reads a single `AccountPreferenceEventCategory` using its globally unique `ID`. */
  accountPreferenceEventCategory?: Maybe<AccountPreferenceEventCategory>
  accountPreferenceEventCategoryByAccountIdAndCategoryId?: Maybe<AccountPreferenceEventCategory>
  /** Reads a single `AccountPreferenceEventFormat` using its globally unique `ID`. */
  accountPreferenceEventFormat?: Maybe<AccountPreferenceEventFormat>
  accountPreferenceEventFormatByAccountIdAndFormatId?: Maybe<AccountPreferenceEventFormat>
  /** Reads a single `AccountPreferenceEventLocation` using its globally unique `ID`. */
  accountPreferenceEventLocation?: Maybe<AccountPreferenceEventLocation>
  accountPreferenceEventLocationByCreatedByAndLocationAndRadius?: Maybe<AccountPreferenceEventLocation>
  accountPreferenceEventLocationById?: Maybe<AccountPreferenceEventLocation>
  /** Reads a single `AccountPreferenceEventSize` using its globally unique `ID`. */
  accountPreferenceEventSize?: Maybe<AccountPreferenceEventSize>
  accountPreferenceEventSizeByAccountIdAndEventSize?: Maybe<AccountPreferenceEventSize>
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
  /** Reads and enables pagination through a set of `AccountPreferenceEventCategory`. */
  allAccountPreferenceEventCategories?: Maybe<AccountPreferenceEventCategoriesConnection>
  /** Reads and enables pagination through a set of `AccountPreferenceEventFormat`. */
  allAccountPreferenceEventFormats?: Maybe<AccountPreferenceEventFormatsConnection>
  /** Reads and enables pagination through a set of `AccountPreferenceEventLocation`. */
  allAccountPreferenceEventLocations?: Maybe<AccountPreferenceEventLocationsConnection>
  /** Reads and enables pagination through a set of `AccountPreferenceEventSize`. */
  allAccountPreferenceEventSizes?: Maybe<AccountPreferenceEventSizesConnection>
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
export type QueryAccountPreferenceEventCategoryArgs = {
  nodeId: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryAccountPreferenceEventCategoryByAccountIdAndCategoryIdArgs = {
  accountId: Scalars['UUID']['input']
  categoryId: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryAccountPreferenceEventFormatArgs = {
  nodeId: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryAccountPreferenceEventFormatByAccountIdAndFormatIdArgs = {
  accountId: Scalars['UUID']['input']
  formatId: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryAccountPreferenceEventLocationArgs = {
  nodeId: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryAccountPreferenceEventLocationByCreatedByAndLocationAndRadiusArgs =
  {
    createdBy: Scalars['UUID']['input']
    location: Scalars['GeoJSON']['input']
    radius: Scalars['Float']['input']
  }

/** The root query type which gives access points into the data universe. */
export type QueryAccountPreferenceEventLocationByIdArgs = {
  id: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryAccountPreferenceEventSizeArgs = {
  nodeId: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryAccountPreferenceEventSizeByAccountIdAndEventSizeArgs = {
  accountId: Scalars['UUID']['input']
  eventSize: EventSize
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
export type QueryAllAccountPreferenceEventCategoriesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<AccountPreferenceEventCategoryCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<AccountPreferenceEventCategoriesOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllAccountPreferenceEventFormatsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<AccountPreferenceEventFormatCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<AccountPreferenceEventFormatsOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllAccountPreferenceEventLocationsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<AccountPreferenceEventLocationCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<AccountPreferenceEventLocationsOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllAccountPreferenceEventSizesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<AccountPreferenceEventSizeCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<AccountPreferenceEventSizesOrderBy>>
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

/** All input for the `updateAccountBirthDate` mutation. */
export type UpdateAccountBirthDateInput = {
  birthDate: Scalars['Date']['input']
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
}

/** The output of our `updateAccountBirthDate` mutation. */
export type UpdateAccountBirthDatePayload = {
  __typename?: 'UpdateAccountBirthDatePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
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

/** All input for the `updateAccountPreferenceEventCategoryByAccountIdAndCategoryId` mutation. */
export type UpdateAccountPreferenceEventCategoryByAccountIdAndCategoryIdInput =
  {
    /** A user account id. */
    accountId: Scalars['UUID']['input']
    /** An object where the defined keys will be set on the `AccountPreferenceEventCategory` being updated. */
    accountPreferenceEventCategoryPatch: AccountPreferenceEventCategoryPatch
    /** An event category id. */
    categoryId: Scalars['UUID']['input']
    /**
     * An arbitrary string value with no semantic meaning. Will be included in the
     * payload verbatim. May be used to track mutations by the client.
     */
    clientMutationId?: InputMaybe<Scalars['String']['input']>
  }

/** All input for the `updateAccountPreferenceEventCategory` mutation. */
export type UpdateAccountPreferenceEventCategoryInput = {
  /** An object where the defined keys will be set on the `AccountPreferenceEventCategory` being updated. */
  accountPreferenceEventCategoryPatch: AccountPreferenceEventCategoryPatch
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `AccountPreferenceEventCategory` to be updated. */
  nodeId: Scalars['ID']['input']
}

/** The output of our update `AccountPreferenceEventCategory` mutation. */
export type UpdateAccountPreferenceEventCategoryPayload = {
  __typename?: 'UpdateAccountPreferenceEventCategoryPayload'
  /** Reads a single `Account` that is related to this `AccountPreferenceEventCategory`. */
  accountByAccountId?: Maybe<Account>
  /** The `AccountPreferenceEventCategory` that was updated by this mutation. */
  accountPreferenceEventCategory?: Maybe<AccountPreferenceEventCategory>
  /** An edge for our `AccountPreferenceEventCategory`. May be used by Relay 1. */
  accountPreferenceEventCategoryEdge?: Maybe<AccountPreferenceEventCategoriesEdge>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Reads a single `EventCategory` that is related to this `AccountPreferenceEventCategory`. */
  eventCategoryByCategoryId?: Maybe<EventCategory>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our update `AccountPreferenceEventCategory` mutation. */
export type UpdateAccountPreferenceEventCategoryPayloadAccountPreferenceEventCategoryEdgeArgs =
  {
    orderBy?: InputMaybe<Array<AccountPreferenceEventCategoriesOrderBy>>
  }

/** All input for the `updateAccountPreferenceEventFormatByAccountIdAndFormatId` mutation. */
export type UpdateAccountPreferenceEventFormatByAccountIdAndFormatIdInput = {
  /** A user account id. */
  accountId: Scalars['UUID']['input']
  /** An object where the defined keys will be set on the `AccountPreferenceEventFormat` being updated. */
  accountPreferenceEventFormatPatch: AccountPreferenceEventFormatPatch
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The id of an event format. */
  formatId: Scalars['UUID']['input']
}

/** All input for the `updateAccountPreferenceEventFormat` mutation. */
export type UpdateAccountPreferenceEventFormatInput = {
  /** An object where the defined keys will be set on the `AccountPreferenceEventFormat` being updated. */
  accountPreferenceEventFormatPatch: AccountPreferenceEventFormatPatch
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `AccountPreferenceEventFormat` to be updated. */
  nodeId: Scalars['ID']['input']
}

/** The output of our update `AccountPreferenceEventFormat` mutation. */
export type UpdateAccountPreferenceEventFormatPayload = {
  __typename?: 'UpdateAccountPreferenceEventFormatPayload'
  /** Reads a single `Account` that is related to this `AccountPreferenceEventFormat`. */
  accountByAccountId?: Maybe<Account>
  /** The `AccountPreferenceEventFormat` that was updated by this mutation. */
  accountPreferenceEventFormat?: Maybe<AccountPreferenceEventFormat>
  /** An edge for our `AccountPreferenceEventFormat`. May be used by Relay 1. */
  accountPreferenceEventFormatEdge?: Maybe<AccountPreferenceEventFormatsEdge>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Reads a single `EventFormat` that is related to this `AccountPreferenceEventFormat`. */
  eventFormatByFormatId?: Maybe<EventFormat>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our update `AccountPreferenceEventFormat` mutation. */
export type UpdateAccountPreferenceEventFormatPayloadAccountPreferenceEventFormatEdgeArgs =
  {
    orderBy?: InputMaybe<Array<AccountPreferenceEventFormatsOrderBy>>
  }

/** All input for the `updateAccountPreferenceEventLocationByCreatedByAndLocationAndRadius` mutation. */
export type UpdateAccountPreferenceEventLocationByCreatedByAndLocationAndRadiusInput =
  {
    /** An object where the defined keys will be set on the `AccountPreferenceEventLocation` being updated. */
    accountPreferenceEventLocationPatch: AccountPreferenceEventLocationPatch
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

/** All input for the `updateAccountPreferenceEventLocationById` mutation. */
export type UpdateAccountPreferenceEventLocationByIdInput = {
  /** An object where the defined keys will be set on the `AccountPreferenceEventLocation` being updated. */
  accountPreferenceEventLocationPatch: AccountPreferenceEventLocationPatch
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Unique identifier for the preference record. */
  id: Scalars['UUID']['input']
}

/** All input for the `updateAccountPreferenceEventLocation` mutation. */
export type UpdateAccountPreferenceEventLocationInput = {
  /** An object where the defined keys will be set on the `AccountPreferenceEventLocation` being updated. */
  accountPreferenceEventLocationPatch: AccountPreferenceEventLocationPatch
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `AccountPreferenceEventLocation` to be updated. */
  nodeId: Scalars['ID']['input']
}

/** The output of our update `AccountPreferenceEventLocation` mutation. */
export type UpdateAccountPreferenceEventLocationPayload = {
  __typename?: 'UpdateAccountPreferenceEventLocationPayload'
  /** Reads a single `Account` that is related to this `AccountPreferenceEventLocation`. */
  accountByCreatedBy?: Maybe<Account>
  /** The `AccountPreferenceEventLocation` that was updated by this mutation. */
  accountPreferenceEventLocation?: Maybe<AccountPreferenceEventLocation>
  /** An edge for our `AccountPreferenceEventLocation`. May be used by Relay 1. */
  accountPreferenceEventLocationEdge?: Maybe<AccountPreferenceEventLocationsEdge>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our update `AccountPreferenceEventLocation` mutation. */
export type UpdateAccountPreferenceEventLocationPayloadAccountPreferenceEventLocationEdgeArgs =
  {
    orderBy?: InputMaybe<Array<AccountPreferenceEventLocationsOrderBy>>
  }

/** All input for the `updateAccountPreferenceEventSizeByAccountIdAndEventSize` mutation. */
export type UpdateAccountPreferenceEventSizeByAccountIdAndEventSizeInput = {
  /** The account's internal id. */
  accountId: Scalars['UUID']['input']
  /** An object where the defined keys will be set on the `AccountPreferenceEventSize` being updated. */
  accountPreferenceEventSizePatch: AccountPreferenceEventSizePatch
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** A preferred event sized */
  eventSize: EventSize
}

/** All input for the `updateAccountPreferenceEventSize` mutation. */
export type UpdateAccountPreferenceEventSizeInput = {
  /** An object where the defined keys will be set on the `AccountPreferenceEventSize` being updated. */
  accountPreferenceEventSizePatch: AccountPreferenceEventSizePatch
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `AccountPreferenceEventSize` to be updated. */
  nodeId: Scalars['ID']['input']
}

/** The output of our update `AccountPreferenceEventSize` mutation. */
export type UpdateAccountPreferenceEventSizePayload = {
  __typename?: 'UpdateAccountPreferenceEventSizePayload'
  /** Reads a single `Account` that is related to this `AccountPreferenceEventSize`. */
  accountByAccountId?: Maybe<Account>
  /** The `AccountPreferenceEventSize` that was updated by this mutation. */
  accountPreferenceEventSize?: Maybe<AccountPreferenceEventSize>
  /** An edge for our `AccountPreferenceEventSize`. May be used by Relay 1. */
  accountPreferenceEventSizeEdge?: Maybe<AccountPreferenceEventSizesEdge>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our update `AccountPreferenceEventSize` mutation. */
export type UpdateAccountPreferenceEventSizePayloadAccountPreferenceEventSizeEdgeArgs =
  {
    orderBy?: InputMaybe<Array<AccountPreferenceEventSizesOrderBy>>
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

/** All input for the `updateEventCategoryById` mutation. */
export type UpdateEventCategoryByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `EventCategory` being updated. */
  eventCategoryPatch: EventCategoryPatch
  /** The id of the event category. */
  id: Scalars['UUID']['input']
}

/** All input for the `updateEventCategoryByName` mutation. */
export type UpdateEventCategoryByNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `EventCategory` being updated. */
  eventCategoryPatch: EventCategoryPatch
  /** A category name. */
  name: Scalars['String']['input']
}

/** All input for the `updateEventCategory` mutation. */
export type UpdateEventCategoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `EventCategory` being updated. */
  eventCategoryPatch: EventCategoryPatch
  /** The globally unique `ID` which will identify a single `EventCategory` to be updated. */
  nodeId: Scalars['ID']['input']
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

/** The output of our update `EventCategory` mutation. */
export type UpdateEventCategoryPayload = {
  __typename?: 'UpdateEventCategoryPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `EventCategory` that was updated by this mutation. */
  eventCategory?: Maybe<EventCategory>
  /** An edge for our `EventCategory`. May be used by Relay 1. */
  eventCategoryEdge?: Maybe<EventCategoriesEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our update `EventCategory` mutation. */
export type UpdateEventCategoryPayloadEventCategoryEdgeArgs = {
  orderBy?: InputMaybe<Array<EventCategoriesOrderBy>>
}

/** All input for the `updateEventFormatById` mutation. */
export type UpdateEventFormatByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `EventFormat` being updated. */
  eventFormatPatch: EventFormatPatch
  /** The id of the event format. */
  id: Scalars['UUID']['input']
}

/** All input for the `updateEventFormatByName` mutation. */
export type UpdateEventFormatByNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `EventFormat` being updated. */
  eventFormatPatch: EventFormatPatch
  /** The name of the event format. */
  name: Scalars['String']['input']
}

/** All input for the `updateEventFormat` mutation. */
export type UpdateEventFormatInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `EventFormat` being updated. */
  eventFormatPatch: EventFormatPatch
  /** The globally unique `ID` which will identify a single `EventFormat` to be updated. */
  nodeId: Scalars['ID']['input']
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

/** The output of our update `EventFormat` mutation. */
export type UpdateEventFormatPayload = {
  __typename?: 'UpdateEventFormatPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `EventFormat` that was updated by this mutation. */
  eventFormat?: Maybe<EventFormat>
  /** An edge for our `EventFormat`. May be used by Relay 1. */
  eventFormatEdge?: Maybe<EventFormatsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our update `EventFormat` mutation. */
export type UpdateEventFormatPayloadEventFormatEdgeArgs = {
  orderBy?: InputMaybe<Array<EventFormatsOrderBy>>
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

export type AccountItemFragment = {
  __typename?: 'Account'
  nodeId: string
  id: any
  username: string
} & { ' $fragmentName'?: 'AccountItemFragment' }

export type AchievementItemFragment = {
  __typename?: 'Achievement'
  nodeId: string
  id: any
  accountId: any
  achievement: AchievementType
  level: number
} & { ' $fragmentName'?: 'AchievementItemFragment' }

export type AddressItemFragment = {
  __typename?: 'Address'
  id: any
  city?: string | null
  country?: string | null
  line1?: string | null
  line2?: string | null
  name: string
  postalCode?: string | null
  region?: string | null
  location?: {
    __typename?: 'GeographyPoint'
    latitude: number
    longitude: number
  } | null
} & { ' $fragmentName'?: 'AddressItemFragment' }

export type ContactItemFragment = {
  __typename?: 'Contact'
  nodeId: string
  id: any
  accountId?: any | null
  createdBy: any
  emailAddress?: string | null
  emailAddressHash?: string | null
  firstName?: string | null
  lastName?: string | null
  phoneNumber?: string | null
  url?: string | null
  accountByAccountId?: {
    __typename?: 'Account'
    id: any
    username: string
  } | null
  accountByCreatedBy?: {
    __typename?: 'Account'
    id: any
    username: string
  } | null
  addressByAddressId?:
    | ({ __typename?: 'Address' } & {
        ' $fragmentRefs'?: { AddressItemFragment: AddressItemFragment }
      })
    | null
} & { ' $fragmentName'?: 'ContactItemFragment' }

export type EventCategoryItemFragment = {
  __typename?: 'EventCategory'
  id: any
  name: string
} & { ' $fragmentName'?: 'EventCategoryItemFragment' }

export type EventFormatItemFragment = {
  __typename?: 'EventFormat'
  id: any
  name: string
} & { ' $fragmentName'?: 'EventFormatItemFragment' }

export type EventItemFragment = {
  __typename?: 'Event'
  id: any
  nodeId: string
  createdBy: any
  description?: string | null
  end?: any | null
  guestCountMaximum?: number | null
  isArchived: boolean
  isInPerson?: boolean | null
  isRemote?: boolean | null
  name: string
  slug: string
  start: any
  url?: string | null
  visibility: EventVisibility
  accountByCreatedBy?: {
    __typename?: 'Account'
    id: any
    username: string
  } | null
  addressByAddressId?:
    | ({ __typename?: 'Address' } & {
        ' $fragmentRefs'?: { AddressItemFragment: AddressItemFragment }
      })
    | null
} & { ' $fragmentName'?: 'EventItemFragment' }

export type GuestItemFragment = {
  __typename?: 'Guest'
  id: any
  nodeId: string
  contactId: any
  eventId: any
  feedback?: InvitationFeedback | null
  feedbackPaper?: InvitationFeedbackPaper | null
  contactByContactId?:
    | ({ __typename?: 'Contact' } & {
        ' $fragmentRefs'?: { ContactItemFragment: ContactItemFragment }
      })
    | null
} & { ' $fragmentName'?: 'GuestItemFragment' }

export type LegalTermItemFragment = {
  __typename?: 'LegalTerm'
  id: any
  term: string
} & { ' $fragmentName'?: 'LegalTermItemFragment' }

export type PreferenceEventCategoryItemFragment = {
  __typename?: 'AccountPreferenceEventCategory'
  nodeId: string
  accountId: any
  categoryId: any
} & { ' $fragmentName'?: 'PreferenceEventCategoryItemFragment' }

export type PreferenceEventFormatItemFragment = {
  __typename?: 'AccountPreferenceEventFormat'
  nodeId: string
  accountId: any
  formatId: any
} & { ' $fragmentName'?: 'PreferenceEventFormatItemFragment' }

export type PreferenceEventLocationItemFragment = {
  __typename?: 'AccountPreferenceEventLocation'
  createdAt: any
  createdBy: any
  id: any
  nodeId: string
  radius: number
  location: {
    __typename?: 'GeographyPoint'
    latitude: number
    longitude: number
  }
} & { ' $fragmentName'?: 'PreferenceEventLocationItemFragment' }

export type ProfilePictureItemFragment = {
  __typename?: 'ProfilePicture'
  id: any
  nodeId: string
  accountId: any
  uploadByUploadId?:
    | ({ __typename?: 'Upload' } & {
        ' $fragmentRefs'?: { UploadItemFragment: UploadItemFragment }
      })
    | null
} & { ' $fragmentName'?: 'ProfilePictureItemFragment' }

export type UploadItemFragment = {
  __typename?: 'Upload'
  id: any
  nodeId: string
  sizeByte: any
  storageKey?: string | null
  createdBy: any
} & { ' $fragmentName'?: 'UploadItemFragment' }

export type AuthenticateMutationVariables = Exact<{
  password: Scalars['String']['input']
  username: Scalars['String']['input']
}>

export type AuthenticateMutation = {
  __typename?: 'Mutation'
  authenticate?: {
    __typename?: 'AuthenticatePayload'
    clientMutationId?: string | null
    jwt?: any | null
  } | null
}

export type UpdateAccountBirthDateMutationVariables = Exact<{
  input: UpdateAccountBirthDateInput
}>

export type UpdateAccountBirthDateMutation = {
  __typename?: 'Mutation'
  updateAccountBirthDate?: {
    __typename?: 'UpdateAccountBirthDatePayload'
    clientMutationId?: string | null
  } | null
}

export type AccountDeleteMutationVariables = Exact<{
  password: Scalars['String']['input']
}>

export type AccountDeleteMutation = {
  __typename?: 'Mutation'
  accountDelete?: {
    __typename?: 'AccountDeletePayload'
    clientMutationId?: string | null
  } | null
}

export type AccountEmailAddressVerificationMutationVariables = Exact<{
  code: Scalars['UUID']['input']
}>

export type AccountEmailAddressVerificationMutation = {
  __typename?: 'Mutation'
  accountEmailAddressVerification?: {
    __typename?: 'AccountEmailAddressVerificationPayload'
    clientMutationId?: string | null
  } | null
}

export type JwtRefreshMutationVariables = Exact<{
  id: Scalars['UUID']['input']
}>

export type JwtRefreshMutation = {
  __typename?: 'Mutation'
  jwtRefresh?: {
    __typename?: 'JwtRefreshPayload'
    clientMutationId?: string | null
    jwt?: any | null
  } | null
}

export type UpdateAccountLocationMutationVariables = Exact<{
  input: UpdateAccountLocationInput
}>

export type UpdateAccountLocationMutation = {
  __typename?: 'Mutation'
  updateAccountLocation?: {
    __typename?: 'UpdateAccountLocationPayload'
    clientMutationId?: string | null
  } | null
}

export type AccountPasswordChangeMutationVariables = Exact<{
  passwordCurrent: Scalars['String']['input']
  passwordNew: Scalars['String']['input']
}>

export type AccountPasswordChangeMutation = {
  __typename?: 'Mutation'
  accountPasswordChange?: {
    __typename?: 'AccountPasswordChangePayload'
    clientMutationId?: string | null
  } | null
}

export type AccountPasswordResetMutationVariables = Exact<{
  code: Scalars['UUID']['input']
  password: Scalars['String']['input']
}>

export type AccountPasswordResetMutation = {
  __typename?: 'Mutation'
  accountPasswordReset?: {
    __typename?: 'AccountPasswordResetPayload'
    clientMutationId?: string | null
  } | null
}

export type AccountPasswordResetRequestMutationVariables = Exact<{
  emailAddress: Scalars['String']['input']
  language: Scalars['String']['input']
}>

export type AccountPasswordResetRequestMutation = {
  __typename?: 'Mutation'
  accountPasswordResetRequest?: {
    __typename?: 'AccountPasswordResetRequestPayload'
    clientMutationId?: string | null
  } | null
}

export type AccountRegistrationMutationVariables = Exact<{
  emailAddress: Scalars['String']['input']
  password: Scalars['String']['input']
  username: Scalars['String']['input']
  language: Scalars['String']['input']
  legalTermId: Scalars['UUID']['input']
}>

export type AccountRegistrationMutation = {
  __typename?: 'Mutation'
  accountRegistration?: {
    __typename?: 'AccountRegistrationPayload'
    clientMutationId?: string | null
  } | null
}

export type AccountRegistrationRefreshMutationVariables = Exact<{
  accountId: Scalars['UUID']['input']
  language: Scalars['String']['input']
}>

export type AccountRegistrationRefreshMutation = {
  __typename?: 'Mutation'
  accountRegistrationRefresh?: {
    __typename?: 'AccountRegistrationRefreshPayload'
    clientMutationId?: string | null
  } | null
}

export type CreateAccountBlockMutationVariables = Exact<{
  accountBlockInput: AccountBlockInput
}>

export type CreateAccountBlockMutation = {
  __typename?: 'Mutation'
  createAccountBlock?: {
    __typename?: 'CreateAccountBlockPayload'
    clientMutationId?: string | null
  } | null
}

export type AchievementUnlockMutationVariables = Exact<{
  code: Scalars['UUID']['input']
  alias: Scalars['String']['input']
}>

export type AchievementUnlockMutation = {
  __typename?: 'Mutation'
  achievementUnlock?: {
    __typename?: 'AchievementUnlockPayload'
    clientMutationId?: string | null
    uuid?: any | null
  } | null
}

export type CreateContactMutationVariables = Exact<{
  contactInput: ContactInput
}>

export type CreateContactMutation = {
  __typename?: 'Mutation'
  createContact?: {
    __typename?: 'CreateContactPayload'
    contact?:
      | ({ __typename?: 'Contact' } & {
          ' $fragmentRefs'?: { ContactItemFragment: ContactItemFragment }
        })
      | null
  } | null
}

export type DeleteContactByIdMutationVariables = Exact<{
  id: Scalars['UUID']['input']
}>

export type DeleteContactByIdMutation = {
  __typename?: 'Mutation'
  deleteContactById?: {
    __typename?: 'DeleteContactPayload'
    clientMutationId?: string | null
    contact?:
      | ({ __typename?: 'Contact' } & {
          ' $fragmentRefs'?: { ContactItemFragment: ContactItemFragment }
        })
      | null
  } | null
}

export type UpdateContactByIdMutationVariables = Exact<{
  id: Scalars['UUID']['input']
  contactPatch: ContactPatch
}>

export type UpdateContactByIdMutation = {
  __typename?: 'Mutation'
  updateContactById?: {
    __typename?: 'UpdateContactPayload'
    contact?:
      | ({ __typename?: 'Contact' } & {
          ' $fragmentRefs'?: { ContactItemFragment: ContactItemFragment }
        })
      | null
  } | null
}

export type CreateEventMutationVariables = Exact<{
  input: EventInput
}>

export type CreateEventMutation = {
  __typename?: 'Mutation'
  createEvent?: {
    __typename?: 'CreateEventPayload'
    event?:
      | ({ __typename?: 'Event' } & {
          ' $fragmentRefs'?: { EventItemFragment: EventItemFragment }
        })
      | null
  } | null
}

export type EventDeleteMutationVariables = Exact<{
  id: Scalars['UUID']['input']
  password: Scalars['String']['input']
}>

export type EventDeleteMutation = {
  __typename?: 'Mutation'
  eventDelete?: {
    __typename?: 'EventDeletePayload'
    clientMutationId?: string | null
    event?:
      | ({ __typename?: 'Event' } & {
          ' $fragmentRefs'?: { EventItemFragment: EventItemFragment }
        })
      | null
  } | null
}

export type EventUnlockMutationVariables = Exact<{
  guestId: Scalars['UUID']['input']
}>

export type EventUnlockMutation = {
  __typename?: 'Mutation'
  eventUnlock?: {
    __typename?: 'EventUnlockPayload'
    eventUnlockResponse?: {
      __typename?: 'EventUnlockResponse'
      creatorUsername?: string | null
      eventSlug?: string | null
      jwt?: any | null
    } | null
  } | null
}

export type UpdateEventByIdMutationVariables = Exact<{
  id: Scalars['UUID']['input']
  eventPatch: EventPatch
}>

export type UpdateEventByIdMutation = {
  __typename?: 'Mutation'
  updateEventById?: {
    __typename?: 'UpdateEventPayload'
    event?:
      | ({ __typename?: 'Event' } & {
          ' $fragmentRefs'?: { EventItemFragment: EventItemFragment }
        })
      | null
  } | null
}

export type CreateGuestMutationVariables = Exact<{
  guestInput: GuestInput
}>

export type CreateGuestMutation = {
  __typename?: 'Mutation'
  createGuest?: {
    __typename?: 'CreateGuestPayload'
    guest?: {
      __typename?: 'Guest'
      id: any
      contactByContactId?:
        | ({ __typename?: 'Contact' } & {
            ' $fragmentRefs'?: { ContactItemFragment: ContactItemFragment }
          })
        | null
    } | null
  } | null
}

export type DeleteGuestByIdMutationVariables = Exact<{
  id: Scalars['UUID']['input']
}>

export type DeleteGuestByIdMutation = {
  __typename?: 'Mutation'
  deleteGuestById?: {
    __typename?: 'DeleteGuestPayload'
    clientMutationId?: string | null
  } | null
}

export type UpdateGuestByIdMutationVariables = Exact<{
  id: Scalars['UUID']['input']
  guestPatch: GuestPatch
}>

export type UpdateGuestByIdMutation = {
  __typename?: 'Mutation'
  updateGuestById?: {
    __typename?: 'UpdateGuestPayload'
    guest?:
      | ({
          __typename?: 'Guest'
          contactByContactId?:
            | ({ __typename?: 'Contact' } & {
                ' $fragmentRefs'?: { ContactItemFragment: ContactItemFragment }
              })
            | null
        } & { ' $fragmentRefs'?: { GuestItemFragment: GuestItemFragment } })
      | null
  } | null
}

export type InviteMutationVariables = Exact<{
  guestId: Scalars['UUID']['input']
  language: Scalars['String']['input']
}>

export type InviteMutation = {
  __typename?: 'Mutation'
  invite?: {
    __typename?: 'InvitePayload'
    clientMutationId?: string | null
  } | null
}

export type CreatePreferenceEventCategoryMutationVariables = Exact<{
  input: AccountPreferenceEventCategoryInput
}>

export type CreatePreferenceEventCategoryMutation = {
  __typename?: 'Mutation'
  createAccountPreferenceEventCategory?: {
    __typename?: 'CreateAccountPreferenceEventCategoryPayload'
    accountPreferenceEventCategory?:
      | ({ __typename?: 'AccountPreferenceEventCategory' } & {
          ' $fragmentRefs'?: {
            PreferenceEventCategoryItemFragment: PreferenceEventCategoryItemFragment
          }
        })
      | null
  } | null
}

export type DeletePreferenceEventCategoryByAccountIdAndCategoryIdMutationVariables =
  Exact<{
    input: DeleteAccountPreferenceEventCategoryByAccountIdAndCategoryIdInput
  }>

export type DeletePreferenceEventCategoryByAccountIdAndCategoryIdMutation = {
  __typename?: 'Mutation'
  deleteAccountPreferenceEventCategoryByAccountIdAndCategoryId?: {
    __typename?: 'DeleteAccountPreferenceEventCategoryPayload'
    deletedAccountPreferenceEventCategoryId?: string | null
  } | null
}

export type CreatePreferenceEventFormatMutationVariables = Exact<{
  input: AccountPreferenceEventFormatInput
}>

export type CreatePreferenceEventFormatMutation = {
  __typename?: 'Mutation'
  createAccountPreferenceEventFormat?: {
    __typename?: 'CreateAccountPreferenceEventFormatPayload'
    accountPreferenceEventFormat?:
      | ({ __typename?: 'AccountPreferenceEventFormat' } & {
          ' $fragmentRefs'?: {
            PreferenceEventFormatItemFragment: PreferenceEventFormatItemFragment
          }
        })
      | null
  } | null
}

export type DeletePreferenceEventFormatByAccountIdAndFormatIdMutationVariables =
  Exact<{
    input: DeleteAccountPreferenceEventFormatByAccountIdAndFormatIdInput
  }>

export type DeletePreferenceEventFormatByAccountIdAndFormatIdMutation = {
  __typename?: 'Mutation'
  deleteAccountPreferenceEventFormatByAccountIdAndFormatId?: {
    __typename?: 'DeleteAccountPreferenceEventFormatPayload'
    deletedAccountPreferenceEventFormatId?: string | null
  } | null
}

export type CreatePreferenceEventLocationMutationVariables = Exact<{
  input: AccountPreferenceEventLocationInput
}>

export type CreatePreferenceEventLocationMutation = {
  __typename?: 'Mutation'
  createAccountPreferenceEventLocation?: {
    __typename?: 'CreateAccountPreferenceEventLocationPayload'
    accountPreferenceEventLocation?:
      | ({ __typename?: 'AccountPreferenceEventLocation' } & {
          ' $fragmentRefs'?: {
            PreferenceEventLocationItemFragment: PreferenceEventLocationItemFragment
          }
        })
      | null
  } | null
}

export type DeletePreferenceEventLocationByIdMutationVariables = Exact<{
  input: DeleteAccountPreferenceEventLocationByIdInput
}>

export type DeletePreferenceEventLocationByIdMutation = {
  __typename?: 'Mutation'
  deleteAccountPreferenceEventLocationById?: {
    __typename?: 'DeleteAccountPreferenceEventLocationPayload'
    deletedAccountPreferenceEventLocationId?: string | null
  } | null
}

export type CreatePreferenceEventSizeMutationVariables = Exact<{
  input: AccountPreferenceEventSizeInput
}>

export type CreatePreferenceEventSizeMutation = {
  __typename?: 'Mutation'
  createAccountPreferenceEventSize?: {
    __typename?: 'CreateAccountPreferenceEventSizePayload'
    clientMutationId?: string | null
  } | null
}

export type DeletePreferenceEventSizeByAccountIdAndEventSizeMutationVariables =
  Exact<{
    input: DeleteAccountPreferenceEventSizeByAccountIdAndEventSizeInput
  }>

export type DeletePreferenceEventSizeByAccountIdAndEventSizeMutation = {
  __typename?: 'Mutation'
  deleteAccountPreferenceEventSizeByAccountIdAndEventSize?: {
    __typename?: 'DeleteAccountPreferenceEventSizePayload'
    clientMutationId?: string | null
  } | null
}

export type ProfilePictureSetMutationVariables = Exact<{
  uploadId: Scalars['UUID']['input']
}>

export type ProfilePictureSetMutation = {
  __typename?: 'Mutation'
  profilePictureSet?: {
    __typename?: 'ProfilePictureSetPayload'
    clientMutationId?: string | null
  } | null
}

export type CreateReportMutationVariables = Exact<{
  reportInput: ReportInput
}>

export type CreateReportMutation = {
  __typename?: 'Mutation'
  createReport?: {
    __typename?: 'CreateReportPayload'
    clientMutationId?: string | null
  } | null
}

export type CreateUploadMutationVariables = Exact<{
  input: UploadInput
}>

export type CreateUploadMutation = {
  __typename?: 'Mutation'
  createUpload?: {
    __typename?: 'CreateUploadPayload'
    clientMutationId?: string | null
    upload?: { __typename?: 'Upload'; id: any } | null
  } | null
}

export type DeleteUploadByIdMutationVariables = Exact<{
  id: Scalars['UUID']['input']
}>

export type DeleteUploadByIdMutation = {
  __typename?: 'Mutation'
  deleteUploadById?: {
    __typename?: 'DeleteUploadPayload'
    clientMutationId?: string | null
    upload?:
      | ({ __typename?: 'Upload' } & {
          ' $fragmentRefs'?: { UploadItemFragment: UploadItemFragment }
        })
      | null
  } | null
}

export type AccountByIdQueryVariables = Exact<{
  id: Scalars['UUID']['input']
}>

export type AccountByIdQuery = {
  __typename?: 'Query'
  accountById?:
    | ({ __typename?: 'Account' } & {
        ' $fragmentRefs'?: { AccountItemFragment: AccountItemFragment }
      })
    | null
}

export type AccountByUsernameQueryVariables = Exact<{
  username: Scalars['String']['input']
}>

export type AccountByUsernameQuery = {
  __typename?: 'Query'
  accountByUsername?:
    | ({ __typename?: 'Account' } & {
        ' $fragmentRefs'?: { AccountItemFragment: AccountItemFragment }
      })
    | null
}

export type AccountUploadQuotaBytesQueryVariables = Exact<{
  [key: string]: never
}>

export type AccountUploadQuotaBytesQuery = {
  __typename?: 'Query'
  accountUploadQuotaBytes?: any | null
}

export type AllAchievementsQueryVariables = Exact<{
  accountId?: InputMaybe<Scalars['UUID']['input']>
}>

export type AllAchievementsQuery = {
  __typename?: 'Query'
  allAchievements?: {
    __typename?: 'AchievementsConnection'
    nodes: Array<
      { __typename?: 'Achievement' } & {
        ' $fragmentRefs'?: { AchievementItemFragment: AchievementItemFragment }
      }
    >
  } | null
}

export type AllContactsQueryVariables = Exact<{
  after?: InputMaybe<Scalars['Cursor']['input']>
  createdBy?: InputMaybe<Scalars['UUID']['input']>
  first: Scalars['Int']['input']
}>

export type AllContactsQuery = {
  __typename?: 'Query'
  allContacts?: {
    __typename?: 'ContactsConnection'
    totalCount: number
    nodes: Array<
      { __typename?: 'Contact' } & {
        ' $fragmentRefs'?: { ContactItemFragment: ContactItemFragment }
      }
    >
    pageInfo: {
      __typename?: 'PageInfo'
      hasNextPage: boolean
      endCursor?: any | null
    }
  } | null
}

export type EventByCreatedByAndSlugQueryVariables = Exact<{
  createdBy: Scalars['UUID']['input']
  guestId?: InputMaybe<Scalars['UUID']['input']>
  slug: Scalars['String']['input']
}>

export type EventByCreatedByAndSlugQuery = {
  __typename?: 'Query'
  eventByCreatedByAndSlug?:
    | ({
        __typename?: 'Event'
        guestsByEventId: {
          __typename?: 'GuestsConnection'
          nodes: Array<
            {
              __typename?: 'Guest'
              contactByContactId?:
                | ({ __typename?: 'Contact' } & {
                    ' $fragmentRefs'?: {
                      ContactItemFragment: ContactItemFragment
                    }
                  })
                | null
            } & { ' $fragmentRefs'?: { GuestItemFragment: GuestItemFragment } }
          >
        }
      } & { ' $fragmentRefs'?: { EventItemFragment: EventItemFragment } })
    | null
}

export type AllEventCategoriesQueryVariables = Exact<{ [key: string]: never }>

export type AllEventCategoriesQuery = {
  __typename?: 'Query'
  allEventCategories?: {
    __typename?: 'EventCategoriesConnection'
    nodes: Array<
      { __typename?: 'EventCategory' } & {
        ' $fragmentRefs'?: {
          EventCategoryItemFragment: EventCategoryItemFragment
        }
      }
    >
  } | null
}

export type AllEventFormatsQueryVariables = Exact<{ [key: string]: never }>

export type AllEventFormatsQuery = {
  __typename?: 'Query'
  allEventFormats?: {
    __typename?: 'EventFormatsConnection'
    nodes: Array<
      { __typename?: 'EventFormat' } & {
        ' $fragmentRefs'?: { EventFormatItemFragment: EventFormatItemFragment }
      }
    >
  } | null
}

export type EventSearchQueryVariables = Exact<{
  after?: InputMaybe<Scalars['Cursor']['input']>
  first: Scalars['Int']['input']
  language?: InputMaybe<Language>
  query?: InputMaybe<Scalars['String']['input']>
}>

export type EventSearchQuery = {
  __typename?: 'Query'
  eventSearch?: {
    __typename?: 'EventsConnection'
    totalCount: number
    nodes: Array<
      { __typename?: 'Event' } & {
        ' $fragmentRefs'?: { EventItemFragment: EventItemFragment }
      }
    >
    pageInfo: {
      __typename?: 'PageInfo'
      hasNextPage: boolean
      endCursor?: any | null
    }
  } | null
}

export type AllEventsQueryVariables = Exact<{
  after?: InputMaybe<Scalars['Cursor']['input']>
  createdBy?: InputMaybe<Scalars['UUID']['input']>
  first: Scalars['Int']['input']
}>

export type AllEventsQuery = {
  __typename?: 'Query'
  allEvents?: {
    __typename?: 'EventsConnection'
    totalCount: number
    nodes: Array<
      { __typename?: 'Event' } & {
        ' $fragmentRefs'?: { EventItemFragment: EventItemFragment }
      }
    >
    pageInfo: {
      __typename?: 'PageInfo'
      hasNextPage: boolean
      endCursor?: any | null
    }
  } | null
}

export type AllGuestsQueryVariables = Exact<{
  after?: InputMaybe<Scalars['Cursor']['input']>
  eventId: Scalars['UUID']['input']
  first: Scalars['Int']['input']
}>

export type AllGuestsQuery = {
  __typename?: 'Query'
  allGuests?: {
    __typename?: 'GuestsConnection'
    totalCount: number
    nodes: Array<
      { __typename?: 'Guest' } & {
        ' $fragmentRefs'?: { GuestItemFragment: GuestItemFragment }
      }
    >
    pageInfo: {
      __typename?: 'PageInfo'
      hasNextPage: boolean
      endCursor?: any | null
    }
  } | null
}

export type AllLegalTermsQueryVariables = Exact<{
  language?: InputMaybe<Scalars['String']['input']>
}>

export type AllLegalTermsQuery = {
  __typename?: 'Query'
  allLegalTerms?: {
    __typename?: 'LegalTermsConnection'
    nodes: Array<
      { __typename?: 'LegalTerm' } & {
        ' $fragmentRefs'?: { LegalTermItemFragment: LegalTermItemFragment }
      }
    >
  } | null
}

export type AllPreferenceEventCategoriesQueryVariables = Exact<{
  [key: string]: never
}>

export type AllPreferenceEventCategoriesQuery = {
  __typename?: 'Query'
  allAccountPreferenceEventCategories?: {
    __typename?: 'AccountPreferenceEventCategoriesConnection'
    nodes: Array<
      { __typename?: 'AccountPreferenceEventCategory' } & {
        ' $fragmentRefs'?: {
          PreferenceEventCategoryItemFragment: PreferenceEventCategoryItemFragment
        }
      }
    >
  } | null
}

export type AllPreferenceEventFormatsQueryVariables = Exact<{
  [key: string]: never
}>

export type AllPreferenceEventFormatsQuery = {
  __typename?: 'Query'
  allAccountPreferenceEventFormats?: {
    __typename?: 'AccountPreferenceEventFormatsConnection'
    nodes: Array<
      { __typename?: 'AccountPreferenceEventFormat' } & {
        ' $fragmentRefs'?: {
          PreferenceEventFormatItemFragment: PreferenceEventFormatItemFragment
        }
      }
    >
  } | null
}

export type AllPreferenceEventLocationsQueryVariables = Exact<{
  [key: string]: never
}>

export type AllPreferenceEventLocationsQuery = {
  __typename?: 'Query'
  allAccountPreferenceEventLocations?: {
    __typename?: 'AccountPreferenceEventLocationsConnection'
    nodes: Array<
      { __typename?: 'AccountPreferenceEventLocation' } & {
        ' $fragmentRefs'?: {
          PreferenceEventLocationItemFragment: PreferenceEventLocationItemFragment
        }
      }
    >
  } | null
}

export type AllPreferenceEventSizesQueryVariables = Exact<{
  [key: string]: never
}>

export type AllPreferenceEventSizesQuery = {
  __typename?: 'Query'
  allAccountPreferenceEventSizes?: {
    __typename?: 'AccountPreferenceEventSizesConnection'
    nodes: Array<{
      __typename?: 'AccountPreferenceEventSize'
      nodeId: string
      eventSize: EventSize
    }>
  } | null
}

export type ProfilePictureByAccountIdQueryVariables = Exact<{
  accountId: Scalars['UUID']['input']
}>

export type ProfilePictureByAccountIdQuery = {
  __typename?: 'Query'
  profilePictureByAccountId?:
    | ({ __typename?: 'ProfilePicture' } & {
        ' $fragmentRefs'?: {
          ProfilePictureItemFragment: ProfilePictureItemFragment
        }
      })
    | null
}

export type AllUploadsQueryVariables = Exact<{
  after?: InputMaybe<Scalars['Cursor']['input']>
  first: Scalars['Int']['input']
  createdBy?: InputMaybe<Scalars['UUID']['input']>
}>

export type AllUploadsQuery = {
  __typename?: 'Query'
  allUploads?: {
    __typename?: 'UploadsConnection'
    totalCount: number
    nodes: Array<
      { __typename?: 'Upload' } & {
        ' $fragmentRefs'?: { UploadItemFragment: UploadItemFragment }
      }
    >
    pageInfo: {
      __typename?: 'PageInfo'
      hasNextPage: boolean
      endCursor?: any | null
    }
  } | null
}

export const AccountItemFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AccountItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Account' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'username' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AccountItemFragment, unknown>
export const AchievementItemFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AchievementItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Achievement' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'accountId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'achievement' } },
          { kind: 'Field', name: { kind: 'Name', value: 'level' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AchievementItemFragment, unknown>
export const EventCategoryItemFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'EventCategoryItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'EventCategory' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<EventCategoryItemFragment, unknown>
export const EventFormatItemFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'EventFormatItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'EventFormat' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<EventFormatItemFragment, unknown>
export const AddressItemFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AddressItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Address' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'city' } },
          { kind: 'Field', name: { kind: 'Name', value: 'country' } },
          { kind: 'Field', name: { kind: 'Name', value: 'line1' } },
          { kind: 'Field', name: { kind: 'Name', value: 'line2' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'location' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'latitude' } },
                { kind: 'Field', name: { kind: 'Name', value: 'longitude' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'postalCode' } },
          { kind: 'Field', name: { kind: 'Name', value: 'region' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AddressItemFragment, unknown>
export const EventItemFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'EventItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Event' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'accountByCreatedBy' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'username' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'addressByAddressId' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'AddressItem' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'createdBy' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'end' } },
          { kind: 'Field', name: { kind: 'Name', value: 'guestCountMaximum' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isArchived' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isInPerson' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isRemote' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
          { kind: 'Field', name: { kind: 'Name', value: 'start' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'visibility' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AddressItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Address' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'city' } },
          { kind: 'Field', name: { kind: 'Name', value: 'country' } },
          { kind: 'Field', name: { kind: 'Name', value: 'line1' } },
          { kind: 'Field', name: { kind: 'Name', value: 'line2' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'location' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'latitude' } },
                { kind: 'Field', name: { kind: 'Name', value: 'longitude' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'postalCode' } },
          { kind: 'Field', name: { kind: 'Name', value: 'region' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<EventItemFragment, unknown>
export const ContactItemFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ContactItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Contact' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'accountId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'accountByAccountId' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'username' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'accountByCreatedBy' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'username' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'addressByAddressId' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'AddressItem' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'createdBy' } },
          { kind: 'Field', name: { kind: 'Name', value: 'emailAddress' } },
          { kind: 'Field', name: { kind: 'Name', value: 'emailAddressHash' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phoneNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AddressItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Address' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'city' } },
          { kind: 'Field', name: { kind: 'Name', value: 'country' } },
          { kind: 'Field', name: { kind: 'Name', value: 'line1' } },
          { kind: 'Field', name: { kind: 'Name', value: 'line2' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'location' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'latitude' } },
                { kind: 'Field', name: { kind: 'Name', value: 'longitude' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'postalCode' } },
          { kind: 'Field', name: { kind: 'Name', value: 'region' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ContactItemFragment, unknown>
export const GuestItemFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'GuestItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Guest' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'contactId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'eventId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'feedback' } },
          { kind: 'Field', name: { kind: 'Name', value: 'feedbackPaper' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'contactByContactId' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ContactItem' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AddressItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Address' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'city' } },
          { kind: 'Field', name: { kind: 'Name', value: 'country' } },
          { kind: 'Field', name: { kind: 'Name', value: 'line1' } },
          { kind: 'Field', name: { kind: 'Name', value: 'line2' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'location' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'latitude' } },
                { kind: 'Field', name: { kind: 'Name', value: 'longitude' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'postalCode' } },
          { kind: 'Field', name: { kind: 'Name', value: 'region' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ContactItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Contact' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'accountId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'accountByAccountId' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'username' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'accountByCreatedBy' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'username' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'addressByAddressId' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'AddressItem' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'createdBy' } },
          { kind: 'Field', name: { kind: 'Name', value: 'emailAddress' } },
          { kind: 'Field', name: { kind: 'Name', value: 'emailAddressHash' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phoneNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GuestItemFragment, unknown>
export const LegalTermItemFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'LegalTermItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LegalTerm' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'term' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LegalTermItemFragment, unknown>
export const PreferenceEventCategoryItemFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PreferenceEventCategoryItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'AccountPreferenceEventCategory' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'accountId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'categoryId' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PreferenceEventCategoryItemFragment, unknown>
export const PreferenceEventFormatItemFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PreferenceEventFormatItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'AccountPreferenceEventFormat' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'accountId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'formatId' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PreferenceEventFormatItemFragment, unknown>
export const PreferenceEventLocationItemFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PreferenceEventLocationItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'AccountPreferenceEventLocation' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdBy' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'radius' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'location' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'latitude' } },
                { kind: 'Field', name: { kind: 'Name', value: 'longitude' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PreferenceEventLocationItemFragment, unknown>
export const UploadItemFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UploadItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Upload' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizeByte' } },
          { kind: 'Field', name: { kind: 'Name', value: 'storageKey' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdBy' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UploadItemFragment, unknown>
export const ProfilePictureItemFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ProfilePictureItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ProfilePicture' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'accountId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'uploadByUploadId' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'UploadItem' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UploadItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Upload' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizeByte' } },
          { kind: 'Field', name: { kind: 'Name', value: 'storageKey' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdBy' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ProfilePictureItemFragment, unknown>
export const AuthenticateDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'Authenticate' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'password' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'username' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'authenticate' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'password' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'password' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'username' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'username' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'clientMutationId' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'jwt' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  AuthenticateMutation,
  AuthenticateMutationVariables
>
export const UpdateAccountBirthDateDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateAccountBirthDate' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UpdateAccountBirthDateInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateAccountBirthDate' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'clientMutationId' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateAccountBirthDateMutation,
  UpdateAccountBirthDateMutationVariables
>
export const AccountDeleteDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'AccountDelete' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'password' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'accountDelete' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'password' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'password' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'clientMutationId' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  AccountDeleteMutation,
  AccountDeleteMutationVariables
>
export const AccountEmailAddressVerificationDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'AccountEmailAddressVerification' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'code' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'UUID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'accountEmailAddressVerification' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'code' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'code' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'clientMutationId' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  AccountEmailAddressVerificationMutation,
  AccountEmailAddressVerificationMutationVariables
>
export const JwtRefreshDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'JwtRefresh' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'UUID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'jwtRefresh' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'jwtId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'id' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'clientMutationId' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'jwt' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<JwtRefreshMutation, JwtRefreshMutationVariables>
export const UpdateAccountLocationDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateAccountLocation' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UpdateAccountLocationInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateAccountLocation' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'clientMutationId' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateAccountLocationMutation,
  UpdateAccountLocationMutationVariables
>
export const AccountPasswordChangeDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'AccountPasswordChange' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'passwordCurrent' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'passwordNew' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'accountPasswordChange' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'passwordCurrent' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'passwordCurrent' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'passwordNew' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'passwordNew' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'clientMutationId' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  AccountPasswordChangeMutation,
  AccountPasswordChangeMutationVariables
>
export const AccountPasswordResetDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'AccountPasswordReset' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'code' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'UUID' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'password' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'accountPasswordReset' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'code' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'code' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'password' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'password' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'clientMutationId' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  AccountPasswordResetMutation,
  AccountPasswordResetMutationVariables
>
export const AccountPasswordResetRequestDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'AccountPasswordResetRequest' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'emailAddress' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'language' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'accountPasswordResetRequest' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'emailAddress' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'emailAddress' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'language' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'language' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'clientMutationId' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  AccountPasswordResetRequestMutation,
  AccountPasswordResetRequestMutationVariables
>
export const AccountRegistrationDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'AccountRegistration' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'emailAddress' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'password' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'username' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'language' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'legalTermId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'UUID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'accountRegistration' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'emailAddress' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'emailAddress' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'password' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'password' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'username' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'username' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'language' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'language' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'legalTermId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'legalTermId' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'clientMutationId' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  AccountRegistrationMutation,
  AccountRegistrationMutationVariables
>
export const AccountRegistrationRefreshDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'AccountRegistrationRefresh' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'accountId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'UUID' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'language' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'accountRegistrationRefresh' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'language' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'language' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'accountId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'accountId' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'clientMutationId' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  AccountRegistrationRefreshMutation,
  AccountRegistrationRefreshMutationVariables
>
export const CreateAccountBlockDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateAccountBlock' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'accountBlockInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'AccountBlockInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createAccountBlock' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'accountBlock' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'accountBlockInput' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'clientMutationId' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateAccountBlockMutation,
  CreateAccountBlockMutationVariables
>
export const AchievementUnlockDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'AchievementUnlock' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'code' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'UUID' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'alias' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'achievementUnlock' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'code' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'code' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'alias' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'alias' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'clientMutationId' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'uuid' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  AchievementUnlockMutation,
  AchievementUnlockMutationVariables
>
export const CreateContactDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateContact' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'contactInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ContactInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createContact' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'contact' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'contactInput' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'contact' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'ContactItem' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AddressItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Address' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'city' } },
          { kind: 'Field', name: { kind: 'Name', value: 'country' } },
          { kind: 'Field', name: { kind: 'Name', value: 'line1' } },
          { kind: 'Field', name: { kind: 'Name', value: 'line2' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'location' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'latitude' } },
                { kind: 'Field', name: { kind: 'Name', value: 'longitude' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'postalCode' } },
          { kind: 'Field', name: { kind: 'Name', value: 'region' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ContactItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Contact' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'accountId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'accountByAccountId' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'username' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'accountByCreatedBy' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'username' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'addressByAddressId' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'AddressItem' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'createdBy' } },
          { kind: 'Field', name: { kind: 'Name', value: 'emailAddress' } },
          { kind: 'Field', name: { kind: 'Name', value: 'emailAddressHash' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phoneNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateContactMutation,
  CreateContactMutationVariables
>
export const DeleteContactByIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'DeleteContactById' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'UUID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'deleteContactById' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'id' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'clientMutationId' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'contact' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'ContactItem' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AddressItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Address' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'city' } },
          { kind: 'Field', name: { kind: 'Name', value: 'country' } },
          { kind: 'Field', name: { kind: 'Name', value: 'line1' } },
          { kind: 'Field', name: { kind: 'Name', value: 'line2' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'location' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'latitude' } },
                { kind: 'Field', name: { kind: 'Name', value: 'longitude' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'postalCode' } },
          { kind: 'Field', name: { kind: 'Name', value: 'region' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ContactItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Contact' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'accountId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'accountByAccountId' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'username' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'accountByCreatedBy' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'username' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'addressByAddressId' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'AddressItem' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'createdBy' } },
          { kind: 'Field', name: { kind: 'Name', value: 'emailAddress' } },
          { kind: 'Field', name: { kind: 'Name', value: 'emailAddressHash' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phoneNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeleteContactByIdMutation,
  DeleteContactByIdMutationVariables
>
export const UpdateContactByIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateContactById' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'UUID' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'contactPatch' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ContactPatch' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateContactById' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'id' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'contactPatch' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'contactPatch' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'contact' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'ContactItem' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AddressItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Address' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'city' } },
          { kind: 'Field', name: { kind: 'Name', value: 'country' } },
          { kind: 'Field', name: { kind: 'Name', value: 'line1' } },
          { kind: 'Field', name: { kind: 'Name', value: 'line2' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'location' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'latitude' } },
                { kind: 'Field', name: { kind: 'Name', value: 'longitude' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'postalCode' } },
          { kind: 'Field', name: { kind: 'Name', value: 'region' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ContactItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Contact' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'accountId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'accountByAccountId' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'username' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'accountByCreatedBy' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'username' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'addressByAddressId' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'AddressItem' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'createdBy' } },
          { kind: 'Field', name: { kind: 'Name', value: 'emailAddress' } },
          { kind: 'Field', name: { kind: 'Name', value: 'emailAddressHash' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phoneNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateContactByIdMutation,
  UpdateContactByIdMutationVariables
>
export const CreateEventDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateEvent' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'EventInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createEvent' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'event' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'input' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'event' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'EventItem' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AddressItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Address' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'city' } },
          { kind: 'Field', name: { kind: 'Name', value: 'country' } },
          { kind: 'Field', name: { kind: 'Name', value: 'line1' } },
          { kind: 'Field', name: { kind: 'Name', value: 'line2' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'location' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'latitude' } },
                { kind: 'Field', name: { kind: 'Name', value: 'longitude' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'postalCode' } },
          { kind: 'Field', name: { kind: 'Name', value: 'region' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'EventItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Event' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'accountByCreatedBy' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'username' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'addressByAddressId' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'AddressItem' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'createdBy' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'end' } },
          { kind: 'Field', name: { kind: 'Name', value: 'guestCountMaximum' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isArchived' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isInPerson' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isRemote' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
          { kind: 'Field', name: { kind: 'Name', value: 'start' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'visibility' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateEventMutation, CreateEventMutationVariables>
export const EventDeleteDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'EventDelete' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'UUID' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'password' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'eventDelete' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'id' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'password' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'password' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'clientMutationId' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'event' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'EventItem' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AddressItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Address' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'city' } },
          { kind: 'Field', name: { kind: 'Name', value: 'country' } },
          { kind: 'Field', name: { kind: 'Name', value: 'line1' } },
          { kind: 'Field', name: { kind: 'Name', value: 'line2' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'location' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'latitude' } },
                { kind: 'Field', name: { kind: 'Name', value: 'longitude' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'postalCode' } },
          { kind: 'Field', name: { kind: 'Name', value: 'region' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'EventItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Event' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'accountByCreatedBy' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'username' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'addressByAddressId' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'AddressItem' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'createdBy' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'end' } },
          { kind: 'Field', name: { kind: 'Name', value: 'guestCountMaximum' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isArchived' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isInPerson' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isRemote' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
          { kind: 'Field', name: { kind: 'Name', value: 'start' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'visibility' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<EventDeleteMutation, EventDeleteMutationVariables>
export const EventUnlockDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'EventUnlock' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'guestId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'UUID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'eventUnlock' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'guestId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'guestId' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'eventUnlockResponse' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'creatorUsername' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'eventSlug' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'jwt' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<EventUnlockMutation, EventUnlockMutationVariables>
export const UpdateEventByIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateEventById' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'UUID' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'eventPatch' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'EventPatch' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateEventById' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'id' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'eventPatch' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'eventPatch' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'event' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'EventItem' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AddressItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Address' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'city' } },
          { kind: 'Field', name: { kind: 'Name', value: 'country' } },
          { kind: 'Field', name: { kind: 'Name', value: 'line1' } },
          { kind: 'Field', name: { kind: 'Name', value: 'line2' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'location' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'latitude' } },
                { kind: 'Field', name: { kind: 'Name', value: 'longitude' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'postalCode' } },
          { kind: 'Field', name: { kind: 'Name', value: 'region' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'EventItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Event' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'accountByCreatedBy' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'username' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'addressByAddressId' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'AddressItem' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'createdBy' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'end' } },
          { kind: 'Field', name: { kind: 'Name', value: 'guestCountMaximum' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isArchived' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isInPerson' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isRemote' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
          { kind: 'Field', name: { kind: 'Name', value: 'start' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'visibility' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateEventByIdMutation,
  UpdateEventByIdMutationVariables
>
export const CreateGuestDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateGuest' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'guestInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'GuestInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createGuest' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'guest' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'guestInput' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'guest' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'contactByContactId' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'ContactItem' },
                            },
                          ],
                        },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AddressItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Address' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'city' } },
          { kind: 'Field', name: { kind: 'Name', value: 'country' } },
          { kind: 'Field', name: { kind: 'Name', value: 'line1' } },
          { kind: 'Field', name: { kind: 'Name', value: 'line2' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'location' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'latitude' } },
                { kind: 'Field', name: { kind: 'Name', value: 'longitude' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'postalCode' } },
          { kind: 'Field', name: { kind: 'Name', value: 'region' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ContactItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Contact' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'accountId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'accountByAccountId' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'username' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'accountByCreatedBy' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'username' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'addressByAddressId' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'AddressItem' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'createdBy' } },
          { kind: 'Field', name: { kind: 'Name', value: 'emailAddress' } },
          { kind: 'Field', name: { kind: 'Name', value: 'emailAddressHash' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phoneNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateGuestMutation, CreateGuestMutationVariables>
export const DeleteGuestByIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'DeleteGuestById' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'UUID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'deleteGuestById' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'id' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'clientMutationId' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeleteGuestByIdMutation,
  DeleteGuestByIdMutationVariables
>
export const UpdateGuestByIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateGuestById' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'UUID' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'guestPatch' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'GuestPatch' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateGuestById' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'id' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'guestPatch' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'guestPatch' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'guest' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'GuestItem' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'contactByContactId' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'ContactItem' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AddressItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Address' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'city' } },
          { kind: 'Field', name: { kind: 'Name', value: 'country' } },
          { kind: 'Field', name: { kind: 'Name', value: 'line1' } },
          { kind: 'Field', name: { kind: 'Name', value: 'line2' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'location' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'latitude' } },
                { kind: 'Field', name: { kind: 'Name', value: 'longitude' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'postalCode' } },
          { kind: 'Field', name: { kind: 'Name', value: 'region' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ContactItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Contact' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'accountId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'accountByAccountId' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'username' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'accountByCreatedBy' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'username' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'addressByAddressId' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'AddressItem' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'createdBy' } },
          { kind: 'Field', name: { kind: 'Name', value: 'emailAddress' } },
          { kind: 'Field', name: { kind: 'Name', value: 'emailAddressHash' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phoneNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'GuestItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Guest' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'contactId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'eventId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'feedback' } },
          { kind: 'Field', name: { kind: 'Name', value: 'feedbackPaper' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'contactByContactId' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ContactItem' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateGuestByIdMutation,
  UpdateGuestByIdMutationVariables
>
export const InviteDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'Invite' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'guestId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'UUID' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'language' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'invite' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'guestId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'guestId' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'language' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'language' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'clientMutationId' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<InviteMutation, InviteMutationVariables>
export const CreatePreferenceEventCategoryDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreatePreferenceEventCategory' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'AccountPreferenceEventCategoryInput',
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'createAccountPreferenceEventCategory',
            },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: {
                        kind: 'Name',
                        value: 'accountPreferenceEventCategory',
                      },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'input' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'accountPreferenceEventCategory',
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: {
                          kind: 'Name',
                          value: 'PreferenceEventCategoryItem',
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PreferenceEventCategoryItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'AccountPreferenceEventCategory' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'accountId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'categoryId' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreatePreferenceEventCategoryMutation,
  CreatePreferenceEventCategoryMutationVariables
>
export const DeletePreferenceEventCategoryByAccountIdAndCategoryIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: {
        kind: 'Name',
        value: 'DeletePreferenceEventCategoryByAccountIdAndCategoryId',
      },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value:
                  'DeleteAccountPreferenceEventCategoryByAccountIdAndCategoryIdInput',
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value:
                'deleteAccountPreferenceEventCategoryByAccountIdAndCategoryId',
            },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'deletedAccountPreferenceEventCategoryId',
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeletePreferenceEventCategoryByAccountIdAndCategoryIdMutation,
  DeletePreferenceEventCategoryByAccountIdAndCategoryIdMutationVariables
>
export const CreatePreferenceEventFormatDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreatePreferenceEventFormat' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'AccountPreferenceEventFormatInput',
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createAccountPreferenceEventFormat' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: {
                        kind: 'Name',
                        value: 'accountPreferenceEventFormat',
                      },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'input' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'accountPreferenceEventFormat' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: {
                          kind: 'Name',
                          value: 'PreferenceEventFormatItem',
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PreferenceEventFormatItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'AccountPreferenceEventFormat' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'accountId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'formatId' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreatePreferenceEventFormatMutation,
  CreatePreferenceEventFormatMutationVariables
>
export const DeletePreferenceEventFormatByAccountIdAndFormatIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: {
        kind: 'Name',
        value: 'DeletePreferenceEventFormatByAccountIdAndFormatId',
      },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value:
                  'DeleteAccountPreferenceEventFormatByAccountIdAndFormatIdInput',
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'deleteAccountPreferenceEventFormatByAccountIdAndFormatId',
            },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'deletedAccountPreferenceEventFormatId',
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeletePreferenceEventFormatByAccountIdAndFormatIdMutation,
  DeletePreferenceEventFormatByAccountIdAndFormatIdMutationVariables
>
export const CreatePreferenceEventLocationDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreatePreferenceEventLocation' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'AccountPreferenceEventLocationInput',
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'createAccountPreferenceEventLocation',
            },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: {
                        kind: 'Name',
                        value: 'accountPreferenceEventLocation',
                      },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'input' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'accountPreferenceEventLocation',
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: {
                          kind: 'Name',
                          value: 'PreferenceEventLocationItem',
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PreferenceEventLocationItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'AccountPreferenceEventLocation' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdBy' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'radius' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'location' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'latitude' } },
                { kind: 'Field', name: { kind: 'Name', value: 'longitude' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreatePreferenceEventLocationMutation,
  CreatePreferenceEventLocationMutationVariables
>
export const DeletePreferenceEventLocationByIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'DeletePreferenceEventLocationById' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'DeleteAccountPreferenceEventLocationByIdInput',
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'deleteAccountPreferenceEventLocationById',
            },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'deletedAccountPreferenceEventLocationId',
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeletePreferenceEventLocationByIdMutation,
  DeletePreferenceEventLocationByIdMutationVariables
>
export const CreatePreferenceEventSizeDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreatePreferenceEventSize' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'AccountPreferenceEventSizeInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createAccountPreferenceEventSize' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: {
                        kind: 'Name',
                        value: 'accountPreferenceEventSize',
                      },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'input' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'clientMutationId' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreatePreferenceEventSizeMutation,
  CreatePreferenceEventSizeMutationVariables
>
export const DeletePreferenceEventSizeByAccountIdAndEventSizeDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: {
        kind: 'Name',
        value: 'DeletePreferenceEventSizeByAccountIdAndEventSize',
      },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value:
                  'DeleteAccountPreferenceEventSizeByAccountIdAndEventSizeInput',
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'deleteAccountPreferenceEventSizeByAccountIdAndEventSize',
            },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'clientMutationId' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeletePreferenceEventSizeByAccountIdAndEventSizeMutation,
  DeletePreferenceEventSizeByAccountIdAndEventSizeMutationVariables
>
export const ProfilePictureSetDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'ProfilePictureSet' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'uploadId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'UUID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'profilePictureSet' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'uploadId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'uploadId' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'clientMutationId' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ProfilePictureSetMutation,
  ProfilePictureSetMutationVariables
>
export const CreateReportDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateReport' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'reportInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ReportInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createReport' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'report' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'reportInput' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'clientMutationId' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateReportMutation,
  CreateReportMutationVariables
>
export const CreateUploadDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateUpload' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UploadInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createUpload' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'upload' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'input' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'clientMutationId' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'upload' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateUploadMutation,
  CreateUploadMutationVariables
>
export const DeleteUploadByIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'DeleteUploadById' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'UUID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'deleteUploadById' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'id' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'clientMutationId' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'upload' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'UploadItem' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UploadItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Upload' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizeByte' } },
          { kind: 'Field', name: { kind: 'Name', value: 'storageKey' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdBy' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeleteUploadByIdMutation,
  DeleteUploadByIdMutationVariables
>
export const AccountByIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'AccountById' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'UUID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'accountById' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'AccountItem' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AccountItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Account' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'username' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AccountByIdQuery, AccountByIdQueryVariables>
export const AccountByUsernameDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'AccountByUsername' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'username' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'accountByUsername' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'username' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'username' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'AccountItem' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AccountItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Account' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'username' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  AccountByUsernameQuery,
  AccountByUsernameQueryVariables
>
export const AccountUploadQuotaBytesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'AccountUploadQuotaBytes' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'accountUploadQuotaBytes' },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  AccountUploadQuotaBytesQuery,
  AccountUploadQuotaBytesQueryVariables
>
export const AllAchievementsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'AllAchievements' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'accountId' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'UUID' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allAchievements' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'condition' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'accountId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'accountId' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nodes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'AchievementItem' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AchievementItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Achievement' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'accountId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'achievement' } },
          { kind: 'Field', name: { kind: 'Name', value: 'level' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  AllAchievementsQuery,
  AllAchievementsQueryVariables
>
export const AllContactsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'AllContacts' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'after' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Cursor' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'createdBy' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'UUID' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'first' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allContacts' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'after' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'after' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'condition' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'createdBy' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'createdBy' },
                      },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'first' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'first' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'ListValue',
                  values: [
                    { kind: 'EnumValue', value: 'FIRST_NAME_ASC' },
                    { kind: 'EnumValue', value: 'LAST_NAME_ASC' },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nodes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'ContactItem' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'hasNextPage' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'endCursor' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'totalCount' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AddressItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Address' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'city' } },
          { kind: 'Field', name: { kind: 'Name', value: 'country' } },
          { kind: 'Field', name: { kind: 'Name', value: 'line1' } },
          { kind: 'Field', name: { kind: 'Name', value: 'line2' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'location' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'latitude' } },
                { kind: 'Field', name: { kind: 'Name', value: 'longitude' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'postalCode' } },
          { kind: 'Field', name: { kind: 'Name', value: 'region' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ContactItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Contact' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'accountId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'accountByAccountId' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'username' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'accountByCreatedBy' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'username' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'addressByAddressId' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'AddressItem' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'createdBy' } },
          { kind: 'Field', name: { kind: 'Name', value: 'emailAddress' } },
          { kind: 'Field', name: { kind: 'Name', value: 'emailAddressHash' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phoneNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AllContactsQuery, AllContactsQueryVariables>
export const EventByCreatedByAndSlugDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'EventByCreatedByAndSlug' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'createdBy' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'UUID' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'guestId' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'UUID' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'eventByCreatedByAndSlug' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'createdBy' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'createdBy' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'slug' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'slug' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'EventItem' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'guestsByEventId' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'condition' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'id' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'guestId' },
                            },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'nodes' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'GuestItem' },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'contactByContactId',
                              },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'FragmentSpread',
                                    name: {
                                      kind: 'Name',
                                      value: 'ContactItem',
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AddressItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Address' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'city' } },
          { kind: 'Field', name: { kind: 'Name', value: 'country' } },
          { kind: 'Field', name: { kind: 'Name', value: 'line1' } },
          { kind: 'Field', name: { kind: 'Name', value: 'line2' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'location' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'latitude' } },
                { kind: 'Field', name: { kind: 'Name', value: 'longitude' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'postalCode' } },
          { kind: 'Field', name: { kind: 'Name', value: 'region' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ContactItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Contact' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'accountId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'accountByAccountId' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'username' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'accountByCreatedBy' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'username' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'addressByAddressId' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'AddressItem' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'createdBy' } },
          { kind: 'Field', name: { kind: 'Name', value: 'emailAddress' } },
          { kind: 'Field', name: { kind: 'Name', value: 'emailAddressHash' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phoneNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'EventItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Event' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'accountByCreatedBy' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'username' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'addressByAddressId' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'AddressItem' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'createdBy' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'end' } },
          { kind: 'Field', name: { kind: 'Name', value: 'guestCountMaximum' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isArchived' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isInPerson' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isRemote' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
          { kind: 'Field', name: { kind: 'Name', value: 'start' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'visibility' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'GuestItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Guest' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'contactId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'eventId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'feedback' } },
          { kind: 'Field', name: { kind: 'Name', value: 'feedbackPaper' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'contactByContactId' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ContactItem' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  EventByCreatedByAndSlugQuery,
  EventByCreatedByAndSlugQueryVariables
>
export const AllEventCategoriesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'AllEventCategories' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allEventCategories' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nodes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'EventCategoryItem' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'EventCategoryItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'EventCategory' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  AllEventCategoriesQuery,
  AllEventCategoriesQueryVariables
>
export const AllEventFormatsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'AllEventFormats' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allEventFormats' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nodes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'EventFormatItem' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'EventFormatItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'EventFormat' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  AllEventFormatsQuery,
  AllEventFormatsQueryVariables
>
export const EventSearchDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'EventSearch' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'after' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Cursor' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'first' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'language' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Language' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'query' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'eventSearch' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'after' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'after' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'first' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'first' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'language' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'language' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'query' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'query' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nodes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'EventItem' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'hasNextPage' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'endCursor' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'totalCount' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AddressItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Address' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'city' } },
          { kind: 'Field', name: { kind: 'Name', value: 'country' } },
          { kind: 'Field', name: { kind: 'Name', value: 'line1' } },
          { kind: 'Field', name: { kind: 'Name', value: 'line2' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'location' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'latitude' } },
                { kind: 'Field', name: { kind: 'Name', value: 'longitude' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'postalCode' } },
          { kind: 'Field', name: { kind: 'Name', value: 'region' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'EventItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Event' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'accountByCreatedBy' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'username' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'addressByAddressId' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'AddressItem' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'createdBy' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'end' } },
          { kind: 'Field', name: { kind: 'Name', value: 'guestCountMaximum' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isArchived' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isInPerson' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isRemote' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
          { kind: 'Field', name: { kind: 'Name', value: 'start' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'visibility' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<EventSearchQuery, EventSearchQueryVariables>
export const AllEventsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'AllEvents' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'after' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Cursor' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'createdBy' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'UUID' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'first' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allEvents' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'after' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'after' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'condition' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'createdBy' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'createdBy' },
                      },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'first' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'first' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: { kind: 'EnumValue', value: 'START_DESC' },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nodes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'EventItem' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'hasNextPage' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'endCursor' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'totalCount' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AddressItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Address' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'city' } },
          { kind: 'Field', name: { kind: 'Name', value: 'country' } },
          { kind: 'Field', name: { kind: 'Name', value: 'line1' } },
          { kind: 'Field', name: { kind: 'Name', value: 'line2' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'location' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'latitude' } },
                { kind: 'Field', name: { kind: 'Name', value: 'longitude' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'postalCode' } },
          { kind: 'Field', name: { kind: 'Name', value: 'region' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'EventItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Event' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'accountByCreatedBy' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'username' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'addressByAddressId' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'AddressItem' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'createdBy' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'end' } },
          { kind: 'Field', name: { kind: 'Name', value: 'guestCountMaximum' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isArchived' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isInPerson' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isRemote' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
          { kind: 'Field', name: { kind: 'Name', value: 'start' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'visibility' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AllEventsQuery, AllEventsQueryVariables>
export const AllGuestsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'AllGuests' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'after' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Cursor' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'eventId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'UUID' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'first' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allGuests' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'after' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'after' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'condition' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'eventId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'eventId' },
                      },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'first' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'first' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nodes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'GuestItem' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'hasNextPage' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'endCursor' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'totalCount' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AddressItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Address' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'city' } },
          { kind: 'Field', name: { kind: 'Name', value: 'country' } },
          { kind: 'Field', name: { kind: 'Name', value: 'line1' } },
          { kind: 'Field', name: { kind: 'Name', value: 'line2' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'location' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'latitude' } },
                { kind: 'Field', name: { kind: 'Name', value: 'longitude' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'postalCode' } },
          { kind: 'Field', name: { kind: 'Name', value: 'region' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ContactItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Contact' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'accountId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'accountByAccountId' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'username' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'accountByCreatedBy' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'username' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'addressByAddressId' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'AddressItem' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'createdBy' } },
          { kind: 'Field', name: { kind: 'Name', value: 'emailAddress' } },
          { kind: 'Field', name: { kind: 'Name', value: 'emailAddressHash' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phoneNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'GuestItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Guest' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'contactId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'eventId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'feedback' } },
          { kind: 'Field', name: { kind: 'Name', value: 'feedbackPaper' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'contactByContactId' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ContactItem' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AllGuestsQuery, AllGuestsQueryVariables>
export const AllLegalTermsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'AllLegalTerms' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'language' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allLegalTerms' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'condition' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'language' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'language' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nodes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'LegalTermItem' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'LegalTermItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LegalTerm' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'term' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AllLegalTermsQuery, AllLegalTermsQueryVariables>
export const AllPreferenceEventCategoriesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'AllPreferenceEventCategories' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'allAccountPreferenceEventCategories',
            },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nodes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: {
                          kind: 'Name',
                          value: 'PreferenceEventCategoryItem',
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PreferenceEventCategoryItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'AccountPreferenceEventCategory' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'accountId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'categoryId' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  AllPreferenceEventCategoriesQuery,
  AllPreferenceEventCategoriesQueryVariables
>
export const AllPreferenceEventFormatsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'AllPreferenceEventFormats' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allAccountPreferenceEventFormats' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nodes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: {
                          kind: 'Name',
                          value: 'PreferenceEventFormatItem',
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PreferenceEventFormatItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'AccountPreferenceEventFormat' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'accountId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'formatId' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  AllPreferenceEventFormatsQuery,
  AllPreferenceEventFormatsQueryVariables
>
export const AllPreferenceEventLocationsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'AllPreferenceEventLocations' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allAccountPreferenceEventLocations' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nodes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: {
                          kind: 'Name',
                          value: 'PreferenceEventLocationItem',
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PreferenceEventLocationItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'AccountPreferenceEventLocation' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdBy' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'radius' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'location' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'latitude' } },
                { kind: 'Field', name: { kind: 'Name', value: 'longitude' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  AllPreferenceEventLocationsQuery,
  AllPreferenceEventLocationsQueryVariables
>
export const AllPreferenceEventSizesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'AllPreferenceEventSizes' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allAccountPreferenceEventSizes' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nodes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'nodeId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'eventSize' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  AllPreferenceEventSizesQuery,
  AllPreferenceEventSizesQueryVariables
>
export const ProfilePictureByAccountIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'ProfilePictureByAccountId' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'accountId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'UUID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'profilePictureByAccountId' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'accountId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'accountId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ProfilePictureItem' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UploadItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Upload' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizeByte' } },
          { kind: 'Field', name: { kind: 'Name', value: 'storageKey' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdBy' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ProfilePictureItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ProfilePicture' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'accountId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'uploadByUploadId' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'UploadItem' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ProfilePictureByAccountIdQuery,
  ProfilePictureByAccountIdQueryVariables
>
export const AllUploadsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'AllUploads' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'after' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Cursor' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'first' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'createdBy' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'UUID' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allUploads' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'after' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'after' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'condition' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'createdBy' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'createdBy' },
                      },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'first' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'first' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nodes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'UploadItem' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'hasNextPage' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'endCursor' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'totalCount' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UploadItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Upload' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizeByte' } },
          { kind: 'Field', name: { kind: 'Name', value: 'storageKey' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdBy' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AllUploadsQuery, AllUploadsQueryVariables>
