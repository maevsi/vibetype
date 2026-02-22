/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = T | null | undefined
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
  Cursor: { input: string; output: string }
  /** A calendar date in YYYY-MM-DD format. */
  Date: { input: any; output: any }
  /**
   * A point in time as described by the [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) and, if it has a timezone, [RFC
   * 3339](https://datatracker.ietf.org/doc/html/rfc3339) standards. Input values
   * that do not conform to both ISO 8601 and RFC 3339 may be coerced, which may lead
   * to unexpected results.
   */
  Datetime: { input: any; output: any }
  /** The `GeoJSON` scalar type represents GeoJSON values as specified by[RFC 7946](https://tools.ietf.org/html/rfc7946). */
  GeoJSON: { input: any; output: any }
  /**
   * A JSON Web Token defined by [RFC 7519](https://tools.ietf.org/html/rfc7519)
   * which securely represents claims between two parties.
   */
  Jwt: { input: string; output: string }
  /** A builtin object identifier type for a text search configuration */
  RegConfig: { input: any; output: any }
  /** A PostgreSQL full-text search document (`tsvector`). See https://www.postgresql.org/docs/current/datatype-textsearch.html */
  TsVector: { input: any; output: any }
  /** A universally unique identifier as defined by [RFC 4122](https://tools.ietf.org/html/rfc4122). */
  UUID: { input: string; output: string }
}

/** Public account data. */
export type Account = Node & {
  __typename?: 'Account'
  /** Reads and enables pagination through a set of `AccountBlock`. */
  accountBlocksByBlockedAccountId: AccountBlockConnection
  /** Reads and enables pagination through a set of `AccountBlock`. */
  accountBlocksByCreatedBy: AccountBlockConnection
  /** Reads and enables pagination through a set of `AccountSocialNetwork`. */
  accountSocialNetworksByAccountId: AccountSocialNetworkConnection
  /** Reads and enables pagination through a set of `Achievement`. */
  achievementsByAccountId: AchievementConnection
  /** Reads and enables pagination through a set of `Address`. */
  addressesByCreatedBy: AddressConnection
  /** Reads and enables pagination through a set of `Address`. */
  addressesByUpdatedBy: AddressConnection
  /** Reads and enables pagination through a set of `App`. */
  appsByCreatedBy: AppConnection
  /** Reads and enables pagination through a set of `Attendance`. */
  attendancesByUpdatedBy: AttendanceConnection
  /** Reads and enables pagination through a set of `Contact`. */
  contactsByAccountId: ContactConnection
  /** Reads and enables pagination through a set of `Contact`. */
  contactsByCreatedBy: ContactConnection
  /** The account's description. Must not exceed 1,000 characters. */
  description?: Maybe<Scalars['String']['output']>
  /** Reads and enables pagination through a set of `Device`. */
  devicesByCreatedBy: DeviceConnection
  /** Reads and enables pagination through a set of `Device`. */
  devicesByUpdatedBy: DeviceConnection
  /** Reads and enables pagination through a set of `EventApp`. */
  eventAppsByCreatedBy: EventAppConnection
  /** Reads and enables pagination through a set of `EventFavorite`. */
  eventFavoritesByCreatedBy: EventFavoriteConnection
  /** Reads and enables pagination through a set of `EventRecommendation`. */
  eventRecommendationsByAccountId: EventRecommendationConnection
  /** Reads and enables pagination through a set of `Event`. */
  eventsByCreatedBy: EventConnection
  /** Reads and enables pagination through a set of `Friendship`. */
  friendshipsByAAccountId: FriendshipConnection
  /** Reads and enables pagination through a set of `Friendship`. */
  friendshipsByBAccountId: FriendshipConnection
  /** Reads and enables pagination through a set of `Friendship`. */
  friendshipsByCreatedBy: FriendshipConnection
  /** Reads and enables pagination through a set of `Friendship`. */
  friendshipsByUpdatedBy: FriendshipConnection
  /** Reads and enables pagination through a set of `Guest`. */
  guestsByUpdatedBy: GuestConnection
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output']
  /** The account's imprint URL. Must start with "https://" and not exceed 2,000 characters. */
  imprintUrl?: Maybe<Scalars['String']['output']>
  /** Reads and enables pagination through a set of `LegalTermAcceptance`. */
  legalTermAcceptancesByAccountId: LegalTermAcceptanceConnection
  /** Reads and enables pagination through a set of `PreferenceEventCategory`. */
  preferenceEventCategoriesByAccountId: PreferenceEventCategoryConnection
  /** Reads and enables pagination through a set of `PreferenceEventFormat`. */
  preferenceEventFormatsByAccountId: PreferenceEventFormatConnection
  /** Reads and enables pagination through a set of `PreferenceEventLocation`. */
  preferenceEventLocationsByCreatedBy: PreferenceEventLocationConnection
  /** Reads and enables pagination through a set of `PreferenceEventSize`. */
  preferenceEventSizesByAccountId: PreferenceEventSizeConnection
  /** Reads a single `ProfilePicture` that is related to this `Account`. */
  profilePictureByAccountId?: Maybe<ProfilePicture>
  /** Reads and enables pagination through a set of `Report`. */
  reportsByCreatedBy: ReportConnection
  /** Reads and enables pagination through a set of `Report`. */
  reportsByTargetAccountId: ReportConnection
  /** The account's internal id. */
  rowId: Scalars['UUID']['output']
  /** Reads and enables pagination through a set of `Upload`. */
  uploadsByCreatedBy: UploadConnection
  /** The account's username. Must be alphanumeric with hyphens and not exceed 100 characters. */
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
  orderBy?: InputMaybe<Array<AccountBlockOrderBy>>
}

/** Public account data. */
export type AccountAccountBlocksByCreatedByArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<AccountBlockCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<AccountBlockOrderBy>>
}

/** Public account data. */
export type AccountAccountSocialNetworksByAccountIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<AccountSocialNetworkCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<AccountSocialNetworkOrderBy>>
}

/** Public account data. */
export type AccountAchievementsByAccountIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<AchievementCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<AchievementOrderBy>>
}

/** Public account data. */
export type AccountAddressesByCreatedByArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<AddressCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<AddressOrderBy>>
}

/** Public account data. */
export type AccountAddressesByUpdatedByArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<AddressCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<AddressOrderBy>>
}

/** Public account data. */
export type AccountAppsByCreatedByArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<AppCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<AppOrderBy>>
}

/** Public account data. */
export type AccountAttendancesByUpdatedByArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<AttendanceCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<AttendanceOrderBy>>
}

/** Public account data. */
export type AccountContactsByAccountIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<ContactCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<ContactOrderBy>>
}

/** Public account data. */
export type AccountContactsByCreatedByArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<ContactCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<ContactOrderBy>>
}

/** Public account data. */
export type AccountDevicesByCreatedByArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<DeviceCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<DeviceOrderBy>>
}

/** Public account data. */
export type AccountDevicesByUpdatedByArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<DeviceCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<DeviceOrderBy>>
}

/** Public account data. */
export type AccountEventAppsByCreatedByArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventAppCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<EventAppOrderBy>>
}

/** Public account data. */
export type AccountEventFavoritesByCreatedByArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventFavoriteCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<EventFavoriteOrderBy>>
}

/** Public account data. */
export type AccountEventRecommendationsByAccountIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventRecommendationCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<EventRecommendationOrderBy>>
}

/** Public account data. */
export type AccountEventsByCreatedByArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<EventOrderBy>>
}

/** Public account data. */
export type AccountFriendshipsByAAccountIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<FriendshipCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<FriendshipOrderBy>>
}

/** Public account data. */
export type AccountFriendshipsByBAccountIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<FriendshipCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<FriendshipOrderBy>>
}

/** Public account data. */
export type AccountFriendshipsByCreatedByArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<FriendshipCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<FriendshipOrderBy>>
}

/** Public account data. */
export type AccountFriendshipsByUpdatedByArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<FriendshipCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<FriendshipOrderBy>>
}

/** Public account data. */
export type AccountGuestsByUpdatedByArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<GuestCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<GuestOrderBy>>
}

/** Public account data. */
export type AccountLegalTermAcceptancesByAccountIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<LegalTermAcceptanceCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<LegalTermAcceptanceOrderBy>>
}

/** Public account data. */
export type AccountPreferenceEventCategoriesByAccountIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<PreferenceEventCategoryCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<PreferenceEventCategoryOrderBy>>
}

/** Public account data. */
export type AccountPreferenceEventFormatsByAccountIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<PreferenceEventFormatCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<PreferenceEventFormatOrderBy>>
}

/** Public account data. */
export type AccountPreferenceEventLocationsByCreatedByArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<PreferenceEventLocationCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<PreferenceEventLocationOrderBy>>
}

/** Public account data. */
export type AccountPreferenceEventSizesByAccountIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<PreferenceEventSizeCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<PreferenceEventSizeOrderBy>>
}

/** Public account data. */
export type AccountReportsByCreatedByArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<ReportCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<ReportOrderBy>>
}

/** Public account data. */
export type AccountReportsByTargetAccountIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<ReportCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<ReportOrderBy>>
}

/** Public account data. */
export type AccountUploadsByCreatedByArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<UploadCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<UploadOrderBy>>
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
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output']
  /** The account block's internal id. */
  rowId: Scalars['UUID']['output']
}

/** A connection to a list of `AccountBlockAccountsRecord` values. */
export type AccountBlockAccountsConnection = {
  __typename?: 'AccountBlockAccountsConnection'
  /** A list of edges which contains the `AccountBlockAccountsRecord` and cursor to aid in pagination. */
  edges: Array<AccountBlockAccountsEdge>
  /** A list of `AccountBlockAccountsRecord` objects. */
  nodes: Array<AccountBlockAccountsRecord>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `AccountBlockAccountsRecord` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `AccountBlockAccountsRecord` edge in the connection. */
export type AccountBlockAccountsEdge = {
  __typename?: 'AccountBlockAccountsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `AccountBlockAccountsRecord` at the end of the edge. */
  node: AccountBlockAccountsRecord
}

export type AccountBlockAccountsRecord = {
  __typename?: 'AccountBlockAccountsRecord'
  id?: Maybe<Scalars['UUID']['output']>
  storageKey?: Maybe<Scalars['String']['output']>
  username?: Maybe<Scalars['String']['output']>
}

/**
 * A condition to be used against `AccountBlock` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type AccountBlockCondition = {
  /** Checks for equality with the object’s `blockedAccountId` field. */
  blockedAccountId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `createdBy` field. */
  createdBy?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['UUID']['input']>
}

/** A connection to a list of `AccountBlock` values. */
export type AccountBlockConnection = {
  __typename?: 'AccountBlockConnection'
  /** A list of edges which contains the `AccountBlock` and cursor to aid in pagination. */
  edges: Array<AccountBlockEdge>
  /** A list of `AccountBlock` objects. */
  nodes: Array<AccountBlock>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `AccountBlock` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `AccountBlock` edge in the connection. */
export type AccountBlockEdge = {
  __typename?: 'AccountBlockEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `AccountBlock` at the end of the edge. */
  node: AccountBlock
}

/** An input for mutations affecting `AccountBlock` */
export type AccountBlockInput = {
  /** The account id of the user who is blocked. */
  blockedAccountId: Scalars['UUID']['input']
  /** The account id of the user who created the account block. */
  createdBy: Scalars['UUID']['input']
}

/** Methods to use when ordering `AccountBlock`. */
export enum AccountBlockOrderBy {
  BlockedAccountIdAsc = 'BLOCKED_ACCOUNT_ID_ASC',
  BlockedAccountIdDesc = 'BLOCKED_ACCOUNT_ID_DESC',
  CreatedByAsc = 'CREATED_BY_ASC',
  CreatedByDesc = 'CREATED_BY_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC',
}

/** A condition to be used against `Account` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type AccountCondition = {
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `username` field. */
  username?: InputMaybe<Scalars['String']['input']>
}

/** A connection to a list of `Account` values. */
export type AccountConnection = {
  __typename?: 'AccountConnection'
  /** A list of edges which contains the `Account` and cursor to aid in pagination. */
  edges: Array<AccountEdge>
  /** A list of `Account` objects. */
  nodes: Array<Account>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `Account` you could get from the connection. */
  totalCount: Scalars['Int']['output']
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

/** A `Account` edge in the connection. */
export type AccountEdge = {
  __typename?: 'AccountEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `Account` at the end of the edge. */
  node: Account
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

/** Methods to use when ordering `Account`. */
export enum AccountOrderBy {
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC',
  UsernameAsc = 'USERNAME_ASC',
  UsernameDesc = 'USERNAME_DESC',
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
  /** The account's description. Must not exceed 1,000 characters. */
  description?: InputMaybe<Scalars['String']['input']>
  /** The account's imprint URL. Must start with "https://" and not exceed 2,000 characters. */
  imprintUrl?: InputMaybe<Scalars['String']['input']>
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
  id: Scalars['ID']['output']
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
}

/** A connection to a list of `AccountSocialNetwork` values. */
export type AccountSocialNetworkConnection = {
  __typename?: 'AccountSocialNetworkConnection'
  /** A list of edges which contains the `AccountSocialNetwork` and cursor to aid in pagination. */
  edges: Array<AccountSocialNetworkEdge>
  /** A list of `AccountSocialNetwork` objects. */
  nodes: Array<AccountSocialNetwork>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `AccountSocialNetwork` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `AccountSocialNetwork` edge in the connection. */
export type AccountSocialNetworkEdge = {
  __typename?: 'AccountSocialNetworkEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `AccountSocialNetwork` at the end of the edge. */
  node: AccountSocialNetwork
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

/** Methods to use when ordering `AccountSocialNetwork`. */
export enum AccountSocialNetworkOrderBy {
  AccountIdAsc = 'ACCOUNT_ID_ASC',
  AccountIdDesc = 'ACCOUNT_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
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

/** Achievements unlocked by users. */
export type Achievement = Node & {
  __typename?: 'Achievement'
  /** Reads a single `Account` that is related to this `Achievement`. */
  accountByAccountId?: Maybe<Account>
  /** The account which unlocked the achievement. */
  accountId: Scalars['UUID']['output']
  /** The unlock's achievement. */
  achievement: AchievementType
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output']
  /** The achievement unlock's level. */
  level: Scalars['Int']['output']
  /** The achievement unlock's internal id. */
  rowId: Scalars['UUID']['output']
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
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['UUID']['input']>
}

/** A connection to a list of `Achievement` values. */
export type AchievementConnection = {
  __typename?: 'AchievementConnection'
  /** A list of edges which contains the `Achievement` and cursor to aid in pagination. */
  edges: Array<AchievementEdge>
  /** A list of `Achievement` objects. */
  nodes: Array<Achievement>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `Achievement` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `Achievement` edge in the connection. */
export type AchievementEdge = {
  __typename?: 'AchievementEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `Achievement` at the end of the edge. */
  node: Achievement
}

/** Methods to use when ordering `Achievement`. */
export enum AchievementOrderBy {
  AccountIdAsc = 'ACCOUNT_ID_ASC',
  AccountIdDesc = 'ACCOUNT_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC',
}

/** Achievements that can be unlocked by users. */
export enum AchievementType {
  EarlyBird = 'early_bird',
  MeetTheTeam = 'meet_the_team',
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
  result?: Maybe<Scalars['UUID']['output']>
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
  contactsByAddressId: ContactConnection
  /** Country of the address. Must be between 1 and 300 characters. */
  country?: Maybe<Scalars['String']['output']>
  /** Timestamp when the address was created. Defaults to the current timestamp. */
  createdAt: Scalars['Datetime']['output']
  /** Reference to the account that created the address. */
  createdBy: Scalars['UUID']['output']
  /** Reads and enables pagination through a set of `Event`. */
  eventsByAddressId: EventConnection
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output']
  /** First line of the address (e.g., street address). Must be between 1 and 300 characters. */
  line1?: Maybe<Scalars['String']['output']>
  /** Second line of the address, if needed. Must be between 1 and 300 characters. */
  line2?: Maybe<Scalars['String']['output']>
  /** The geographic location of the address. */
  location?: Maybe<GeographyPoint>
  /** Person or company name. Must be between 1 and 300 characters. */
  name: Scalars['String']['output']
  /** Postal or ZIP code for the address. Must be between 1 and 20 characters. */
  postalCode?: Maybe<Scalars['String']['output']>
  /** Region of the address (e.g., state, province, county, department or territory). Must be between 1 and 300 characters. */
  region?: Maybe<Scalars['String']['output']>
  /** Primary key, uniquely identifies each address. */
  rowId: Scalars['UUID']['output']
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
  orderBy?: InputMaybe<Array<ContactOrderBy>>
}

/** Stores detailed address information, including lines, city, state, country, and metadata. */
export type AddressEventsByAddressIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<EventOrderBy>>
}

/** A condition to be used against `Address` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type AddressCondition = {
  /** Checks for equality with the object’s `createdBy` field. */
  createdBy?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `updatedBy` field. */
  updatedBy?: InputMaybe<Scalars['UUID']['input']>
}

/** A connection to a list of `Address` values. */
export type AddressConnection = {
  __typename?: 'AddressConnection'
  /** A list of edges which contains the `Address` and cursor to aid in pagination. */
  edges: Array<AddressEdge>
  /** A list of `Address` objects. */
  nodes: Array<Address>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `Address` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `Address` edge in the connection. */
export type AddressEdge = {
  __typename?: 'AddressEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `Address` at the end of the edge. */
  node: Address
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

/** Methods to use when ordering `Address`. */
export enum AddressOrderBy {
  CreatedByAsc = 'CREATED_BY_ASC',
  CreatedByDesc = 'CREATED_BY_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC',
  UpdatedByAsc = 'UPDATED_BY_ASC',
  UpdatedByDesc = 'UPDATED_BY_DESC',
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

/** Integrations that can be added to events. Each app has a name, icon, and an endpoint for attendance management. */
export type App = Node & {
  __typename?: 'App'
  /** Reads a single `Account` that is related to this `App`. */
  accountByCreatedBy?: Maybe<Account>
  /** When the app was created. */
  createdAt: Scalars['Datetime']['output']
  /** Who created this app. */
  createdBy: Scalars['UUID']['output']
  /** Reads and enables pagination through a set of `EventApp`. */
  eventAppsByAppId: EventAppConnection
  /** An SVG icon for displaying the app. */
  iconSvg: Scalars['String']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output']
  /** The name of the app. */
  name: Scalars['String']['output']
  /** A unique reference for this app. */
  rowId: Scalars['UUID']['output']
  /** The main URL of the app. */
  url: Scalars['String']['output']
  /** The URL endpoint for managing attendance. */
  urlAttendance: Scalars['String']['output']
}

/** Integrations that can be added to events. Each app has a name, icon, and an endpoint for attendance management. */
export type AppEventAppsByAppIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventAppCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<EventAppOrderBy>>
}

/** A condition to be used against `App` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type AppCondition = {
  /** Checks for equality with the object’s `createdBy` field. */
  createdBy?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['UUID']['input']>
}

/** A connection to a list of `App` values. */
export type AppConnection = {
  __typename?: 'AppConnection'
  /** A list of edges which contains the `App` and cursor to aid in pagination. */
  edges: Array<AppEdge>
  /** A list of `App` objects. */
  nodes: Array<App>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `App` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `App` edge in the connection. */
export type AppEdge = {
  __typename?: 'AppEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `App` at the end of the edge. */
  node: App
}

/** Methods to use when ordering `App`. */
export enum AppOrderBy {
  CreatedByAsc = 'CREATED_BY_ASC',
  CreatedByDesc = 'CREATED_BY_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC',
}

/** Keeps track of when someone arrives and leaves an event. Each person can only be checked in once. */
export type Attendance = Node & {
  __typename?: 'Attendance'
  /** Reads a single `Account` that is related to this `Attendance`. */
  accountByUpdatedBy?: Maybe<Account>
  /** Shows if the person has left. When this turns on, the time is saved automatically. */
  checkedOut?: Maybe<Scalars['Boolean']['output']>
  /** Reads a single `Contact` that is related to this `Attendance`. */
  contactByContactId?: Maybe<Contact>
  /** The contact information available to anyone with access to this attendance entry. This may differ from the guest information if the guest provided different details at check-in. */
  contactId?: Maybe<Scalars['UUID']['output']>
  /** When the entry was created (the check-in time). */
  createdAt: Scalars['Datetime']['output']
  /** Reads a single `Guest` that is related to this `Attendance`. */
  guestByGuestId?: Maybe<Guest>
  /** Who this entry is for. */
  guestId: Scalars['UUID']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output']
  /** A unique reference for this entry. */
  rowId: Scalars['UUID']['output']
  /** When this entry was last changed. If someone checks out, this shows the checkout time. */
  updatedAt?: Maybe<Scalars['Datetime']['output']>
  /** Who last changed this entry. This may be empty if done without signing in. */
  updatedBy?: Maybe<Scalars['UUID']['output']>
}

/**
 * A condition to be used against `Attendance` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type AttendanceCondition = {
  /** Checks for equality with the object’s `contactId` field. */
  contactId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `guestId` field. */
  guestId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `updatedBy` field. */
  updatedBy?: InputMaybe<Scalars['UUID']['input']>
}

/** A connection to a list of `Attendance` values. */
export type AttendanceConnection = {
  __typename?: 'AttendanceConnection'
  /** A list of edges which contains the `Attendance` and cursor to aid in pagination. */
  edges: Array<AttendanceEdge>
  /** A list of `Attendance` objects. */
  nodes: Array<Attendance>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `Attendance` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `Attendance` edge in the connection. */
export type AttendanceEdge = {
  __typename?: 'AttendanceEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `Attendance` at the end of the edge. */
  node: Attendance
}

/** An input for mutations affecting `Attendance` */
export type AttendanceInput = {
  /** The contact information available to anyone with access to this attendance entry. This may differ from the guest information if the guest provided different details at check-in. */
  contactId?: InputMaybe<Scalars['UUID']['input']>
  /** Who this entry is for. */
  guestId: Scalars['UUID']['input']
}

/** Methods to use when ordering `Attendance`. */
export enum AttendanceOrderBy {
  ContactIdAsc = 'CONTACT_ID_ASC',
  ContactIdDesc = 'CONTACT_ID_DESC',
  GuestIdAsc = 'GUEST_ID_ASC',
  GuestIdDesc = 'GUEST_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC',
  UpdatedByAsc = 'UPDATED_BY_ASC',
  UpdatedByDesc = 'UPDATED_BY_DESC',
}

/** Represents an update to a `Attendance`. Fields that are set will be updated. */
export type AttendancePatch = {
  /** Shows if the person has left. When this turns on, the time is saved automatically. */
  checkedOut?: InputMaybe<Scalars['Boolean']['input']>
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
  /** Reads and enables pagination through a set of `Attendance`. */
  attendancesByContactId: AttendanceConnection
  /** Timestamp when the contact was created. Defaults to the current timestamp. */
  createdAt: Scalars['Datetime']['output']
  /** Reference to the account that created this contact. Enforces cascading deletion. */
  createdBy: Scalars['UUID']['output']
  /** Email address of the contact. Must not exceed 254 characters (RFC 5321). */
  emailAddress?: Maybe<Scalars['String']['output']>
  /** Hash of the email address, generated using md5 on the lowercased trimmed version of the email. Useful to display a profile picture from Gravatar. */
  emailAddressHash?: Maybe<Scalars['String']['output']>
  /** First name of the contact. Must be between 1 and 100 characters. */
  firstName?: Maybe<Scalars['String']['output']>
  /** Reads and enables pagination through a set of `Guest`. */
  guestsByContactId: GuestConnection
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output']
  /** Reference to the preferred language of the contact. */
  language?: Maybe<Language>
  /** Last name of the contact. Must be between 1 and 100 characters. */
  lastName?: Maybe<Scalars['String']['output']>
  /** Nickname of the contact. Must be between 1 and 100 characters. Useful when the contact is not commonly referred to by their legal name. */
  nickname?: Maybe<Scalars['String']['output']>
  /** Additional notes about the contact. Must be between 1 and 1,000 characters. Useful for providing context or distinguishing details if the name alone is insufficient. */
  note?: Maybe<Scalars['String']['output']>
  /** The international phone number of the contact, formatted according to E.164 (https://wikipedia.org/wiki/E.164). */
  phoneNumber?: Maybe<Scalars['String']['output']>
  /** Primary key, uniquely identifies each contact. */
  rowId: Scalars['UUID']['output']
  /** Time zone of the contact in IANA format, e.g., `Europe/Berlin` or `America/New_York`. */
  timeZone?: Maybe<Scalars['String']['output']>
  /** URL associated with the contact, must start with "https://" and not exceed 2,000 characters. */
  url?: Maybe<Scalars['String']['output']>
}

/** Stores contact information related to accounts, including personal details, communication preferences, and metadata. */
export type ContactAttendancesByContactIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<AttendanceCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<AttendanceOrderBy>>
}

/** Stores contact information related to accounts, including personal details, communication preferences, and metadata. */
export type ContactGuestsByContactIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<GuestCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<GuestOrderBy>>
}

/** A condition to be used against `Contact` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type ContactCondition = {
  /** Checks for equality with the object’s `accountId` field. */
  accountId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `addressId` field. */
  addressId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `createdBy` field. */
  createdBy?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `firstName` field. */
  firstName?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `lastName` field. */
  lastName?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['UUID']['input']>
}

/** A connection to a list of `Contact` values. */
export type ContactConnection = {
  __typename?: 'ContactConnection'
  /** A list of edges which contains the `Contact` and cursor to aid in pagination. */
  edges: Array<ContactEdge>
  /** A list of `Contact` objects. */
  nodes: Array<Contact>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `Contact` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `Contact` edge in the connection. */
export type ContactEdge = {
  __typename?: 'ContactEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `Contact` at the end of the edge. */
  node: Contact
}

/** An input for mutations affecting `Contact` */
export type ContactInput = {
  /** Optional reference to an associated account. */
  accountId?: InputMaybe<Scalars['UUID']['input']>
  /** Optional reference to the physical address of the contact. */
  addressId?: InputMaybe<Scalars['UUID']['input']>
  /** Reference to the account that created this contact. Enforces cascading deletion. */
  createdBy: Scalars['UUID']['input']
  /** Email address of the contact. Must not exceed 254 characters (RFC 5321). */
  emailAddress?: InputMaybe<Scalars['String']['input']>
  /** First name of the contact. Must be between 1 and 100 characters. */
  firstName?: InputMaybe<Scalars['String']['input']>
  /** Reference to the preferred language of the contact. */
  language?: InputMaybe<Language>
  /** Last name of the contact. Must be between 1 and 100 characters. */
  lastName?: InputMaybe<Scalars['String']['input']>
  /** Nickname of the contact. Must be between 1 and 100 characters. Useful when the contact is not commonly referred to by their legal name. */
  nickname?: InputMaybe<Scalars['String']['input']>
  /** Additional notes about the contact. Must be between 1 and 1,000 characters. Useful for providing context or distinguishing details if the name alone is insufficient. */
  note?: InputMaybe<Scalars['String']['input']>
  /** The international phone number of the contact, formatted according to E.164 (https://wikipedia.org/wiki/E.164). */
  phoneNumber?: InputMaybe<Scalars['String']['input']>
  /** Time zone of the contact in IANA format, e.g., `Europe/Berlin` or `America/New_York`. */
  timeZone?: InputMaybe<Scalars['String']['input']>
  /** URL associated with the contact, must start with "https://" and not exceed 2,000 characters. */
  url?: InputMaybe<Scalars['String']['input']>
}

/** Methods to use when ordering `Contact`. */
export enum ContactOrderBy {
  AccountIdAsc = 'ACCOUNT_ID_ASC',
  AccountIdDesc = 'ACCOUNT_ID_DESC',
  AddressIdAsc = 'ADDRESS_ID_ASC',
  AddressIdDesc = 'ADDRESS_ID_DESC',
  CreatedByAsc = 'CREATED_BY_ASC',
  CreatedByDesc = 'CREATED_BY_DESC',
  FirstNameAsc = 'FIRST_NAME_ASC',
  FirstNameDesc = 'FIRST_NAME_DESC',
  LastNameAsc = 'LAST_NAME_ASC',
  LastNameDesc = 'LAST_NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC',
}

/** Represents an update to a `Contact`. Fields that are set will be updated. */
export type ContactPatch = {
  /** Optional reference to an associated account. */
  accountId?: InputMaybe<Scalars['UUID']['input']>
  /** Optional reference to the physical address of the contact. */
  addressId?: InputMaybe<Scalars['UUID']['input']>
  /** Reference to the account that created this contact. Enforces cascading deletion. */
  createdBy?: InputMaybe<Scalars['UUID']['input']>
  /** Email address of the contact. Must not exceed 254 characters (RFC 5321). */
  emailAddress?: InputMaybe<Scalars['String']['input']>
  /** First name of the contact. Must be between 1 and 100 characters. */
  firstName?: InputMaybe<Scalars['String']['input']>
  /** Reference to the preferred language of the contact. */
  language?: InputMaybe<Language>
  /** Last name of the contact. Must be between 1 and 100 characters. */
  lastName?: InputMaybe<Scalars['String']['input']>
  /** Nickname of the contact. Must be between 1 and 100 characters. Useful when the contact is not commonly referred to by their legal name. */
  nickname?: InputMaybe<Scalars['String']['input']>
  /** Additional notes about the contact. Must be between 1 and 1,000 characters. Useful for providing context or distinguishing details if the name alone is insufficient. */
  note?: InputMaybe<Scalars['String']['input']>
  /** The international phone number of the contact, formatted according to E.164 (https://wikipedia.org/wiki/E.164). */
  phoneNumber?: InputMaybe<Scalars['String']['input']>
  /** Time zone of the contact in IANA format, e.g., `Europe/Berlin` or `America/New_York`. */
  timeZone?: InputMaybe<Scalars['String']['input']>
  /** URL associated with the contact, must start with "https://" and not exceed 2,000 characters. */
  url?: InputMaybe<Scalars['String']['input']>
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
  accountBlockEdge?: Maybe<AccountBlockEdge>
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
  orderBy?: Array<AccountBlockOrderBy>
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
  /** The `AccountSocialNetwork` that was created by this mutation. */
  accountSocialNetwork?: Maybe<AccountSocialNetwork>
  /** An edge for our `AccountSocialNetwork`. May be used by Relay 1. */
  accountSocialNetworkEdge?: Maybe<AccountSocialNetworkEdge>
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
  orderBy?: Array<AccountSocialNetworkOrderBy>
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
  /** The `Address` that was created by this mutation. */
  address?: Maybe<Address>
  /** An edge for our `Address`. May be used by Relay 1. */
  addressEdge?: Maybe<AddressEdge>
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
  orderBy?: Array<AddressOrderBy>
}

/** All input for the create `Attendance` mutation. */
export type CreateAttendanceInput = {
  /** The `Attendance` to be created by this mutation. */
  attendance: AttendanceInput
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
}

/** The output of our create `Attendance` mutation. */
export type CreateAttendancePayload = {
  __typename?: 'CreateAttendancePayload'
  /** The `Attendance` that was created by this mutation. */
  attendance?: Maybe<Attendance>
  /** An edge for our `Attendance`. May be used by Relay 1. */
  attendanceEdge?: Maybe<AttendanceEdge>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `Attendance` mutation. */
export type CreateAttendancePayloadAttendanceEdgeArgs = {
  orderBy?: Array<AttendanceOrderBy>
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
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `Contact` that was created by this mutation. */
  contact?: Maybe<Contact>
  /** An edge for our `Contact`. May be used by Relay 1. */
  contactEdge?: Maybe<ContactEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `Contact` mutation. */
export type CreateContactPayloadContactEdgeArgs = {
  orderBy?: Array<ContactOrderBy>
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
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `Device` that was created by this mutation. */
  device?: Maybe<Device>
  /** An edge for our `Device`. May be used by Relay 1. */
  deviceEdge?: Maybe<DeviceEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `Device` mutation. */
export type CreateDevicePayloadDeviceEdgeArgs = {
  orderBy?: Array<DeviceOrderBy>
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
  /** The `EventCategoryMapping` that was created by this mutation. */
  eventCategoryMapping?: Maybe<EventCategoryMapping>
  /** An edge for our `EventCategoryMapping`. May be used by Relay 1. */
  eventCategoryMappingEdge?: Maybe<EventCategoryMappingEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `EventCategoryMapping` mutation. */
export type CreateEventCategoryMappingPayloadEventCategoryMappingEdgeArgs = {
  orderBy?: Array<EventCategoryMappingOrderBy>
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
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `EventFavorite` that was created by this mutation. */
  eventFavorite?: Maybe<EventFavorite>
  /** An edge for our `EventFavorite`. May be used by Relay 1. */
  eventFavoriteEdge?: Maybe<EventFavoriteEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `EventFavorite` mutation. */
export type CreateEventFavoritePayloadEventFavoriteEdgeArgs = {
  orderBy?: Array<EventFavoriteOrderBy>
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
  /** The `EventFormatMapping` that was created by this mutation. */
  eventFormatMapping?: Maybe<EventFormatMapping>
  /** An edge for our `EventFormatMapping`. May be used by Relay 1. */
  eventFormatMappingEdge?: Maybe<EventFormatMappingEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `EventFormatMapping` mutation. */
export type CreateEventFormatMappingPayloadEventFormatMappingEdgeArgs = {
  orderBy?: Array<EventFormatMappingOrderBy>
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
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `Event` that was created by this mutation. */
  event?: Maybe<Event>
  /** An edge for our `Event`. May be used by Relay 1. */
  eventEdge?: Maybe<EventEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `Event` mutation. */
export type CreateEventPayloadEventEdgeArgs = {
  orderBy?: Array<EventOrderBy>
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
  /** The `EventUpload` that was created by this mutation. */
  eventUpload?: Maybe<EventUpload>
  /** An edge for our `EventUpload`. May be used by Relay 1. */
  eventUploadEdge?: Maybe<EventUploadEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `EventUpload` mutation. */
export type CreateEventUploadPayloadEventUploadEdgeArgs = {
  orderBy?: Array<EventUploadOrderBy>
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
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `Friendship` that was created by this mutation. */
  friendship?: Maybe<Friendship>
  /** An edge for our `Friendship`. May be used by Relay 1. */
  friendshipEdge?: Maybe<FriendshipEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `Friendship` mutation. */
export type CreateFriendshipPayloadFriendshipEdgeArgs = {
  orderBy?: Array<FriendshipOrderBy>
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
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `Guest` that was created by this mutation. */
  guest?: Maybe<Guest>
  /** An edge for our `Guest`. May be used by Relay 1. */
  guestEdge?: Maybe<GuestEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `Guest` mutation. */
export type CreateGuestPayloadGuestEdgeArgs = {
  orderBy?: Array<GuestOrderBy>
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
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  result?: Maybe<Array<Guest>>
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
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `LegalTermAcceptance` that was created by this mutation. */
  legalTermAcceptance?: Maybe<LegalTermAcceptance>
  /** An edge for our `LegalTermAcceptance`. May be used by Relay 1. */
  legalTermAcceptanceEdge?: Maybe<LegalTermAcceptanceEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `LegalTermAcceptance` mutation. */
export type CreateLegalTermAcceptancePayloadLegalTermAcceptanceEdgeArgs = {
  orderBy?: Array<LegalTermAcceptanceOrderBy>
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
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `PreferenceEventCategory` that was created by this mutation. */
  preferenceEventCategory?: Maybe<PreferenceEventCategory>
  /** An edge for our `PreferenceEventCategory`. May be used by Relay 1. */
  preferenceEventCategoryEdge?: Maybe<PreferenceEventCategoryEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `PreferenceEventCategory` mutation. */
export type CreatePreferenceEventCategoryPayloadPreferenceEventCategoryEdgeArgs =
  {
    orderBy?: Array<PreferenceEventCategoryOrderBy>
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
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `PreferenceEventFormat` that was created by this mutation. */
  preferenceEventFormat?: Maybe<PreferenceEventFormat>
  /** An edge for our `PreferenceEventFormat`. May be used by Relay 1. */
  preferenceEventFormatEdge?: Maybe<PreferenceEventFormatEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `PreferenceEventFormat` mutation. */
export type CreatePreferenceEventFormatPayloadPreferenceEventFormatEdgeArgs = {
  orderBy?: Array<PreferenceEventFormatOrderBy>
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
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `PreferenceEventLocation` that was created by this mutation. */
  preferenceEventLocation?: Maybe<PreferenceEventLocation>
  /** An edge for our `PreferenceEventLocation`. May be used by Relay 1. */
  preferenceEventLocationEdge?: Maybe<PreferenceEventLocationEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `PreferenceEventLocation` mutation. */
export type CreatePreferenceEventLocationPayloadPreferenceEventLocationEdgeArgs =
  {
    orderBy?: Array<PreferenceEventLocationOrderBy>
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
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `PreferenceEventSize` that was created by this mutation. */
  preferenceEventSize?: Maybe<PreferenceEventSize>
  /** An edge for our `PreferenceEventSize`. May be used by Relay 1. */
  preferenceEventSizeEdge?: Maybe<PreferenceEventSizeEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `PreferenceEventSize` mutation. */
export type CreatePreferenceEventSizePayloadPreferenceEventSizeEdgeArgs = {
  orderBy?: Array<PreferenceEventSizeOrderBy>
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
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `ProfilePicture` that was created by this mutation. */
  profilePicture?: Maybe<ProfilePicture>
  /** An edge for our `ProfilePicture`. May be used by Relay 1. */
  profilePictureEdge?: Maybe<ProfilePictureEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `ProfilePicture` mutation. */
export type CreateProfilePicturePayloadProfilePictureEdgeArgs = {
  orderBy?: Array<ProfilePictureOrderBy>
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
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** The `Report` that was created by this mutation. */
  report?: Maybe<Report>
  /** An edge for our `Report`. May be used by Relay 1. */
  reportEdge?: Maybe<ReportEdge>
}

/** The output of our create `Report` mutation. */
export type CreateReportPayloadReportEdgeArgs = {
  orderBy?: Array<ReportOrderBy>
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
  uploadEdge?: Maybe<UploadEdge>
}

/** The output of our create `Upload` mutation. */
export type CreateUploadPayloadUploadEdgeArgs = {
  orderBy?: Array<UploadOrderBy>
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

/** All input for the `deleteAccountBlockByRowId` mutation. */
export type DeleteAccountBlockByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The account block's internal id. */
  rowId: Scalars['UUID']['input']
}

/** All input for the `deleteAccountBlock` mutation. */
export type DeleteAccountBlockInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `AccountBlock` to be deleted. */
  id: Scalars['ID']['input']
}

/** The output of our delete `AccountBlock` mutation. */
export type DeleteAccountBlockPayload = {
  __typename?: 'DeleteAccountBlockPayload'
  /** The `AccountBlock` that was deleted by this mutation. */
  accountBlock?: Maybe<AccountBlock>
  /** An edge for our `AccountBlock`. May be used by Relay 1. */
  accountBlockEdge?: Maybe<AccountBlockEdge>
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
  orderBy?: Array<AccountBlockOrderBy>
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
  id: Scalars['ID']['input']
}

/** The output of our delete `AccountSocialNetwork` mutation. */
export type DeleteAccountSocialNetworkPayload = {
  __typename?: 'DeleteAccountSocialNetworkPayload'
  /** The `AccountSocialNetwork` that was deleted by this mutation. */
  accountSocialNetwork?: Maybe<AccountSocialNetwork>
  /** An edge for our `AccountSocialNetwork`. May be used by Relay 1. */
  accountSocialNetworkEdge?: Maybe<AccountSocialNetworkEdge>
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
  orderBy?: Array<AccountSocialNetworkOrderBy>
}

/** All input for the `deleteAddressByRowId` mutation. */
export type DeleteAddressByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Primary key, uniquely identifies each address. */
  rowId: Scalars['UUID']['input']
}

/** All input for the `deleteAddress` mutation. */
export type DeleteAddressInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `Address` to be deleted. */
  id: Scalars['ID']['input']
}

/** The output of our delete `Address` mutation. */
export type DeleteAddressPayload = {
  __typename?: 'DeleteAddressPayload'
  /** The `Address` that was deleted by this mutation. */
  address?: Maybe<Address>
  /** An edge for our `Address`. May be used by Relay 1. */
  addressEdge?: Maybe<AddressEdge>
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
  orderBy?: Array<AddressOrderBy>
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

/** All input for the `deleteContactByRowId` mutation. */
export type DeleteContactByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Primary key, uniquely identifies each contact. */
  rowId: Scalars['UUID']['input']
}

/** All input for the `deleteContact` mutation. */
export type DeleteContactInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `Contact` to be deleted. */
  id: Scalars['ID']['input']
}

/** The output of our delete `Contact` mutation. */
export type DeleteContactPayload = {
  __typename?: 'DeleteContactPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `Contact` that was deleted by this mutation. */
  contact?: Maybe<Contact>
  /** An edge for our `Contact`. May be used by Relay 1. */
  contactEdge?: Maybe<ContactEdge>
  deletedContactId?: Maybe<Scalars['ID']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `Contact` mutation. */
export type DeleteContactPayloadContactEdgeArgs = {
  orderBy?: Array<ContactOrderBy>
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
  /** The Firebase Cloud Messaging token of the device that's used to deliver notifications. Must be non-empty and not exceed 300 characters. */
  fcmToken: Scalars['String']['input']
}

/** All input for the `deleteDeviceByRowId` mutation. */
export type DeleteDeviceByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The internal id of the device. */
  rowId: Scalars['UUID']['input']
}

/** All input for the `deleteDevice` mutation. */
export type DeleteDeviceInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `Device` to be deleted. */
  id: Scalars['ID']['input']
}

/** The output of our delete `Device` mutation. */
export type DeleteDevicePayload = {
  __typename?: 'DeleteDevicePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  deletedDeviceId?: Maybe<Scalars['ID']['output']>
  /** The `Device` that was deleted by this mutation. */
  device?: Maybe<Device>
  /** An edge for our `Device`. May be used by Relay 1. */
  deviceEdge?: Maybe<DeviceEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `Device` mutation. */
export type DeleteDevicePayloadDeviceEdgeArgs = {
  orderBy?: Array<DeviceOrderBy>
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
  /** The event's name, slugified. Must be alphanumeric with hyphens and not exceed 100 characters. */
  slug: Scalars['String']['input']
}

/** All input for the `deleteEventByRowId` mutation. */
export type DeleteEventByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The event's internal id. */
  rowId: Scalars['UUID']['input']
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
  id: Scalars['ID']['input']
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
  /** The `EventCategoryMapping` that was deleted by this mutation. */
  eventCategoryMapping?: Maybe<EventCategoryMapping>
  /** An edge for our `EventCategoryMapping`. May be used by Relay 1. */
  eventCategoryMappingEdge?: Maybe<EventCategoryMappingEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `EventCategoryMapping` mutation. */
export type DeleteEventCategoryMappingPayloadEventCategoryMappingEdgeArgs = {
  orderBy?: Array<EventCategoryMappingOrderBy>
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

/** All input for the `deleteEventFavoriteByRowId` mutation. */
export type DeleteEventFavoriteByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Primary key, uniquely identifies each favorite entry. */
  rowId: Scalars['UUID']['input']
}

/** All input for the `deleteEventFavorite` mutation. */
export type DeleteEventFavoriteInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `EventFavorite` to be deleted. */
  id: Scalars['ID']['input']
}

/** The output of our delete `EventFavorite` mutation. */
export type DeleteEventFavoritePayload = {
  __typename?: 'DeleteEventFavoritePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  deletedEventFavoriteId?: Maybe<Scalars['ID']['output']>
  /** The `EventFavorite` that was deleted by this mutation. */
  eventFavorite?: Maybe<EventFavorite>
  /** An edge for our `EventFavorite`. May be used by Relay 1. */
  eventFavoriteEdge?: Maybe<EventFavoriteEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `EventFavorite` mutation. */
export type DeleteEventFavoritePayloadEventFavoriteEdgeArgs = {
  orderBy?: Array<EventFavoriteOrderBy>
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
  id: Scalars['ID']['input']
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
  /** The `EventFormatMapping` that was deleted by this mutation. */
  eventFormatMapping?: Maybe<EventFormatMapping>
  /** An edge for our `EventFormatMapping`. May be used by Relay 1. */
  eventFormatMappingEdge?: Maybe<EventFormatMappingEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `EventFormatMapping` mutation. */
export type DeleteEventFormatMappingPayloadEventFormatMappingEdgeArgs = {
  orderBy?: Array<EventFormatMappingOrderBy>
}

/** All input for the `deleteEvent` mutation. */
export type DeleteEventInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `Event` to be deleted. */
  id: Scalars['ID']['input']
}

/** The output of our delete `Event` mutation. */
export type DeleteEventPayload = {
  __typename?: 'DeleteEventPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  deletedEventId?: Maybe<Scalars['ID']['output']>
  /** The `Event` that was deleted by this mutation. */
  event?: Maybe<Event>
  /** An edge for our `Event`. May be used by Relay 1. */
  eventEdge?: Maybe<EventEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `Event` mutation. */
export type DeleteEventPayloadEventEdgeArgs = {
  orderBy?: Array<EventOrderBy>
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

/** All input for the `deleteEventUploadByRowId` mutation. */
export type DeleteEventUploadByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Primary key, uniquely identifies each event-upload association. */
  rowId: Scalars['UUID']['input']
}

/** All input for the `deleteEventUpload` mutation. */
export type DeleteEventUploadInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `EventUpload` to be deleted. */
  id: Scalars['ID']['input']
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
  /** The `EventUpload` that was deleted by this mutation. */
  eventUpload?: Maybe<EventUpload>
  /** An edge for our `EventUpload`. May be used by Relay 1. */
  eventUploadEdge?: Maybe<EventUploadEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `EventUpload` mutation. */
export type DeleteEventUploadPayloadEventUploadEdgeArgs = {
  orderBy?: Array<EventUploadOrderBy>
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

/** All input for the `deleteFriendshipByRowId` mutation. */
export type DeleteFriendshipByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The friend relation's internal id. */
  rowId: Scalars['UUID']['input']
}

/** All input for the `deleteFriendship` mutation. */
export type DeleteFriendshipInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `Friendship` to be deleted. */
  id: Scalars['ID']['input']
}

/** The output of our delete `Friendship` mutation. */
export type DeleteFriendshipPayload = {
  __typename?: 'DeleteFriendshipPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  deletedFriendshipId?: Maybe<Scalars['ID']['output']>
  /** The `Friendship` that was deleted by this mutation. */
  friendship?: Maybe<Friendship>
  /** An edge for our `Friendship`. May be used by Relay 1. */
  friendshipEdge?: Maybe<FriendshipEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `Friendship` mutation. */
export type DeleteFriendshipPayloadFriendshipEdgeArgs = {
  orderBy?: Array<FriendshipOrderBy>
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

/** All input for the `deleteGuestByRowId` mutation. */
export type DeleteGuestByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The guest's internal id. */
  rowId: Scalars['UUID']['input']
}

/** All input for the `deleteGuest` mutation. */
export type DeleteGuestInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `Guest` to be deleted. */
  id: Scalars['ID']['input']
}

/** The output of our delete `Guest` mutation. */
export type DeleteGuestPayload = {
  __typename?: 'DeleteGuestPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  deletedGuestId?: Maybe<Scalars['ID']['output']>
  /** The `Guest` that was deleted by this mutation. */
  guest?: Maybe<Guest>
  /** An edge for our `Guest`. May be used by Relay 1. */
  guestEdge?: Maybe<GuestEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `Guest` mutation. */
export type DeleteGuestPayloadGuestEdgeArgs = {
  orderBy?: Array<GuestOrderBy>
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

/** All input for the `deletePreferenceEventCategoryByRowId` mutation. */
export type DeletePreferenceEventCategoryByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  rowId: Scalars['UUID']['input']
}

/** All input for the `deletePreferenceEventCategory` mutation. */
export type DeletePreferenceEventCategoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `PreferenceEventCategory` to be deleted. */
  id: Scalars['ID']['input']
}

/** The output of our delete `PreferenceEventCategory` mutation. */
export type DeletePreferenceEventCategoryPayload = {
  __typename?: 'DeletePreferenceEventCategoryPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  deletedPreferenceEventCategoryId?: Maybe<Scalars['ID']['output']>
  /** The `PreferenceEventCategory` that was deleted by this mutation. */
  preferenceEventCategory?: Maybe<PreferenceEventCategory>
  /** An edge for our `PreferenceEventCategory`. May be used by Relay 1. */
  preferenceEventCategoryEdge?: Maybe<PreferenceEventCategoryEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `PreferenceEventCategory` mutation. */
export type DeletePreferenceEventCategoryPayloadPreferenceEventCategoryEdgeArgs =
  {
    orderBy?: Array<PreferenceEventCategoryOrderBy>
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

/** All input for the `deletePreferenceEventFormatByRowId` mutation. */
export type DeletePreferenceEventFormatByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  rowId: Scalars['UUID']['input']
}

/** All input for the `deletePreferenceEventFormat` mutation. */
export type DeletePreferenceEventFormatInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `PreferenceEventFormat` to be deleted. */
  id: Scalars['ID']['input']
}

/** The output of our delete `PreferenceEventFormat` mutation. */
export type DeletePreferenceEventFormatPayload = {
  __typename?: 'DeletePreferenceEventFormatPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  deletedPreferenceEventFormatId?: Maybe<Scalars['ID']['output']>
  /** The `PreferenceEventFormat` that was deleted by this mutation. */
  preferenceEventFormat?: Maybe<PreferenceEventFormat>
  /** An edge for our `PreferenceEventFormat`. May be used by Relay 1. */
  preferenceEventFormatEdge?: Maybe<PreferenceEventFormatEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `PreferenceEventFormat` mutation. */
export type DeletePreferenceEventFormatPayloadPreferenceEventFormatEdgeArgs = {
  orderBy?: Array<PreferenceEventFormatOrderBy>
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

/** All input for the `deletePreferenceEventLocationByRowId` mutation. */
export type DeletePreferenceEventLocationByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Unique identifier for the preference record. */
  rowId: Scalars['UUID']['input']
}

/** All input for the `deletePreferenceEventLocation` mutation. */
export type DeletePreferenceEventLocationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `PreferenceEventLocation` to be deleted. */
  id: Scalars['ID']['input']
}

/** The output of our delete `PreferenceEventLocation` mutation. */
export type DeletePreferenceEventLocationPayload = {
  __typename?: 'DeletePreferenceEventLocationPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  deletedPreferenceEventLocationId?: Maybe<Scalars['ID']['output']>
  /** The `PreferenceEventLocation` that was deleted by this mutation. */
  preferenceEventLocation?: Maybe<PreferenceEventLocation>
  /** An edge for our `PreferenceEventLocation`. May be used by Relay 1. */
  preferenceEventLocationEdge?: Maybe<PreferenceEventLocationEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `PreferenceEventLocation` mutation. */
export type DeletePreferenceEventLocationPayloadPreferenceEventLocationEdgeArgs =
  {
    orderBy?: Array<PreferenceEventLocationOrderBy>
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

/** All input for the `deletePreferenceEventSizeByRowId` mutation. */
export type DeletePreferenceEventSizeByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  rowId: Scalars['UUID']['input']
}

/** All input for the `deletePreferenceEventSize` mutation. */
export type DeletePreferenceEventSizeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `PreferenceEventSize` to be deleted. */
  id: Scalars['ID']['input']
}

/** The output of our delete `PreferenceEventSize` mutation. */
export type DeletePreferenceEventSizePayload = {
  __typename?: 'DeletePreferenceEventSizePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  deletedPreferenceEventSizeId?: Maybe<Scalars['ID']['output']>
  /** The `PreferenceEventSize` that was deleted by this mutation. */
  preferenceEventSize?: Maybe<PreferenceEventSize>
  /** An edge for our `PreferenceEventSize`. May be used by Relay 1. */
  preferenceEventSizeEdge?: Maybe<PreferenceEventSizeEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `PreferenceEventSize` mutation. */
export type DeletePreferenceEventSizePayloadPreferenceEventSizeEdgeArgs = {
  orderBy?: Array<PreferenceEventSizeOrderBy>
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

/** All input for the `deleteProfilePictureByRowId` mutation. */
export type DeleteProfilePictureByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The profile picture's internal id. */
  rowId: Scalars['UUID']['input']
}

/** All input for the `deleteProfilePicture` mutation. */
export type DeleteProfilePictureInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `ProfilePicture` to be deleted. */
  id: Scalars['ID']['input']
}

/** The output of our delete `ProfilePicture` mutation. */
export type DeleteProfilePicturePayload = {
  __typename?: 'DeleteProfilePicturePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  deletedProfilePictureId?: Maybe<Scalars['ID']['output']>
  /** The `ProfilePicture` that was deleted by this mutation. */
  profilePicture?: Maybe<ProfilePicture>
  /** An edge for our `ProfilePicture`. May be used by Relay 1. */
  profilePictureEdge?: Maybe<ProfilePictureEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `ProfilePicture` mutation. */
export type DeleteProfilePicturePayloadProfilePictureEdgeArgs = {
  orderBy?: Array<ProfilePictureOrderBy>
}

/** All input for the `deleteUploadByRowId` mutation. */
export type DeleteUploadByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The upload's internal id. */
  rowId: Scalars['UUID']['input']
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
  id: Scalars['ID']['input']
}

/** The output of our delete `Upload` mutation. */
export type DeleteUploadPayload = {
  __typename?: 'DeleteUploadPayload'
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
  uploadEdge?: Maybe<UploadEdge>
}

/** The output of our delete `Upload` mutation. */
export type DeleteUploadPayloadUploadEdgeArgs = {
  orderBy?: Array<UploadOrderBy>
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
  /** The Firebase Cloud Messaging token of the device that's used to deliver notifications. Must be non-empty and not exceed 300 characters. */
  fcmToken: Scalars['String']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output']
  /** The internal id of the device. */
  rowId: Scalars['UUID']['output']
  /** Timestamp when the device was last updated. */
  updatedAt?: Maybe<Scalars['Datetime']['output']>
  /** Reference to the account that last updated the device. */
  updatedBy?: Maybe<Scalars['UUID']['output']>
}

/** A condition to be used against `Device` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type DeviceCondition = {
  /** Checks for equality with the object’s `createdBy` field. */
  createdBy?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `fcmToken` field. */
  fcmToken?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `updatedBy` field. */
  updatedBy?: InputMaybe<Scalars['UUID']['input']>
}

/** A connection to a list of `Device` values. */
export type DeviceConnection = {
  __typename?: 'DeviceConnection'
  /** A list of edges which contains the `Device` and cursor to aid in pagination. */
  edges: Array<DeviceEdge>
  /** A list of `Device` objects. */
  nodes: Array<Device>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `Device` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `Device` edge in the connection. */
export type DeviceEdge = {
  __typename?: 'DeviceEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `Device` at the end of the edge. */
  node: Device
}

/** An input for mutations affecting `Device` */
export type DeviceInput = {
  /** Reference to the account that created the device. */
  createdBy: Scalars['UUID']['input']
  /** The Firebase Cloud Messaging token of the device that's used to deliver notifications. Must be non-empty and not exceed 300 characters. */
  fcmToken: Scalars['String']['input']
}

/** Methods to use when ordering `Device`. */
export enum DeviceOrderBy {
  CreatedByAsc = 'CREATED_BY_ASC',
  CreatedByDesc = 'CREATED_BY_DESC',
  FcmTokenAsc = 'FCM_TOKEN_ASC',
  FcmTokenDesc = 'FCM_TOKEN_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC',
  UpdatedByAsc = 'UPDATED_BY_ASC',
  UpdatedByDesc = 'UPDATED_BY_DESC',
}

/** Represents an update to a `Device`. Fields that are set will be updated. */
export type DevicePatch = {
  /** The Firebase Cloud Messaging token of the device that's used to deliver notifications. Must be non-empty and not exceed 300 characters. */
  fcmToken?: InputMaybe<Scalars['String']['input']>
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
  /** The event's description. Must be non-empty and not exceed 10,000 characters. */
  description?: Maybe<Scalars['String']['output']>
  /** The event's end date and time, with time zone. */
  end?: Maybe<Scalars['Datetime']['output']>
  /** Reads and enables pagination through a set of `EventApp`. */
  eventAppsByEventId: EventAppConnection
  /** Reads and enables pagination through a set of `EventCategoryMapping`. */
  eventCategoryMappingsByEventId: EventCategoryMappingConnection
  /** Reads and enables pagination through a set of `EventFavorite`. */
  eventFavoritesByEventId: EventFavoriteConnection
  /** Reads and enables pagination through a set of `EventFormatMapping`. */
  eventFormatMappingsByEventId: EventFormatMappingConnection
  /** Reads and enables pagination through a set of `EventRecommendation`. */
  eventRecommendationsByEventId: EventRecommendationConnection
  /** Reads and enables pagination through a set of `EventUpload`. */
  eventUploadsByEventId: EventUploadConnection
  /** The event's maximum guest count. Must be greater than 0. */
  guestCountMaximum?: Maybe<Scalars['Int']['output']>
  /** Reads and enables pagination through a set of `Guest`. */
  guestsByEventId: GuestConnection
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output']
  /** Indicates whether the event is archived. */
  isArchived: Scalars['Boolean']['output']
  /** Indicates whether the event takes place in person. */
  isInPerson?: Maybe<Scalars['Boolean']['output']>
  /** Indicates whether the event takes place remotely. */
  isRemote?: Maybe<Scalars['Boolean']['output']>
  language?: Maybe<Language>
  /** The event's name. Must be non-empty and not exceed 100 characters. */
  name: Scalars['String']['output']
  /** Reads and enables pagination through a set of `Report`. */
  reportsByTargetEventId: ReportConnection
  /** The event's internal id. */
  rowId: Scalars['UUID']['output']
  /** The event's name, slugified. Must be alphanumeric with hyphens and not exceed 100 characters. */
  slug: Scalars['String']['output']
  /** The event's start date and time, with time zone. */
  start: Scalars['Datetime']['output']
  /** The event's unified resource locator. Must start with "https://" and not exceed 2,000 characters. */
  url?: Maybe<Scalars['String']['output']>
  /** The event's visibility. */
  visibility: EventVisibility
}

/** An event. */
export type EventEventAppsByEventIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventAppCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<EventAppOrderBy>>
}

/** An event. */
export type EventEventCategoryMappingsByEventIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventCategoryMappingCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<EventCategoryMappingOrderBy>>
}

/** An event. */
export type EventEventFavoritesByEventIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventFavoriteCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<EventFavoriteOrderBy>>
}

/** An event. */
export type EventEventFormatMappingsByEventIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventFormatMappingCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<EventFormatMappingOrderBy>>
}

/** An event. */
export type EventEventRecommendationsByEventIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventRecommendationCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<EventRecommendationOrderBy>>
}

/** An event. */
export type EventEventUploadsByEventIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventUploadCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<EventUploadOrderBy>>
}

/** An event. */
export type EventGuestsByEventIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<GuestCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<GuestOrderBy>>
}

/** An event. */
export type EventReportsByTargetEventIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<ReportCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<ReportOrderBy>>
}

/** Records which apps are installed on which events. */
export type EventApp = Node & {
  __typename?: 'EventApp'
  /** Reads a single `Account` that is related to this `EventApp`. */
  accountByCreatedBy?: Maybe<Account>
  /** Reads a single `App` that is related to this `EventApp`. */
  appByAppId?: Maybe<App>
  /** The app that is installed. */
  appId: Scalars['UUID']['output']
  /** When the app was installed. */
  createdAt: Scalars['Datetime']['output']
  /** Who installed this app. */
  createdBy: Scalars['UUID']['output']
  /** Reads a single `Event` that is related to this `EventApp`. */
  eventByEventId?: Maybe<Event>
  /** The event the app is installed on. */
  eventId: Scalars['UUID']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output']
  /** A unique reference for this installation. */
  rowId: Scalars['UUID']['output']
}

/**
 * A condition to be used against `EventApp` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type EventAppCondition = {
  /** Checks for equality with the object’s `appId` field. */
  appId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `createdBy` field. */
  createdBy?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `eventId` field. */
  eventId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['UUID']['input']>
}

/** A connection to a list of `EventApp` values. */
export type EventAppConnection = {
  __typename?: 'EventAppConnection'
  /** A list of edges which contains the `EventApp` and cursor to aid in pagination. */
  edges: Array<EventAppEdge>
  /** A list of `EventApp` objects. */
  nodes: Array<EventApp>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `EventApp` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `EventApp` edge in the connection. */
export type EventAppEdge = {
  __typename?: 'EventAppEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `EventApp` at the end of the edge. */
  node: EventApp
}

/** Methods to use when ordering `EventApp`. */
export enum EventAppOrderBy {
  AppIdAsc = 'APP_ID_ASC',
  AppIdDesc = 'APP_ID_DESC',
  CreatedByAsc = 'CREATED_BY_ASC',
  CreatedByDesc = 'CREATED_BY_DESC',
  EventIdAsc = 'EVENT_ID_ASC',
  EventIdDesc = 'EVENT_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC',
}

/** Event categories. */
export type EventCategory = Node & {
  __typename?: 'EventCategory'
  /** Reads and enables pagination through a set of `EventCategoryMapping`. */
  eventCategoryMappingsByCategoryId: EventCategoryMappingConnection
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output']
  /** A category name. */
  name: Scalars['String']['output']
  /** Reads and enables pagination through a set of `PreferenceEventCategory`. */
  preferenceEventCategoriesByCategoryId: PreferenceEventCategoryConnection
  /** The id of the event category. */
  rowId: Scalars['UUID']['output']
}

/** Event categories. */
export type EventCategoryEventCategoryMappingsByCategoryIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventCategoryMappingCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<EventCategoryMappingOrderBy>>
}

/** Event categories. */
export type EventCategoryPreferenceEventCategoriesByCategoryIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<PreferenceEventCategoryCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<PreferenceEventCategoryOrderBy>>
}

/**
 * A condition to be used against `EventCategory` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type EventCategoryCondition = {
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['UUID']['input']>
}

/** A connection to a list of `EventCategory` values. */
export type EventCategoryConnection = {
  __typename?: 'EventCategoryConnection'
  /** A list of edges which contains the `EventCategory` and cursor to aid in pagination. */
  edges: Array<EventCategoryEdge>
  /** A list of `EventCategory` objects. */
  nodes: Array<EventCategory>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `EventCategory` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `EventCategory` edge in the connection. */
export type EventCategoryEdge = {
  __typename?: 'EventCategoryEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `EventCategory` at the end of the edge. */
  node: EventCategory
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
  id: Scalars['ID']['output']
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

/** A connection to a list of `EventCategoryMapping` values. */
export type EventCategoryMappingConnection = {
  __typename?: 'EventCategoryMappingConnection'
  /** A list of edges which contains the `EventCategoryMapping` and cursor to aid in pagination. */
  edges: Array<EventCategoryMappingEdge>
  /** A list of `EventCategoryMapping` objects. */
  nodes: Array<EventCategoryMapping>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `EventCategoryMapping` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `EventCategoryMapping` edge in the connection. */
export type EventCategoryMappingEdge = {
  __typename?: 'EventCategoryMappingEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `EventCategoryMapping` at the end of the edge. */
  node: EventCategoryMapping
}

/** An input for mutations affecting `EventCategoryMapping` */
export type EventCategoryMappingInput = {
  /** A category id. */
  categoryId: Scalars['UUID']['input']
  /** An event id. */
  eventId: Scalars['UUID']['input']
}

/** Methods to use when ordering `EventCategoryMapping`. */
export enum EventCategoryMappingOrderBy {
  CategoryIdAsc = 'CATEGORY_ID_ASC',
  CategoryIdDesc = 'CATEGORY_ID_DESC',
  EventIdAsc = 'EVENT_ID_ASC',
  EventIdDesc = 'EVENT_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
}

/** Methods to use when ordering `EventCategory`. */
export enum EventCategoryOrderBy {
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC',
}

/** A condition to be used against `Event` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type EventCondition = {
  /** Checks for equality with the object’s `addressId` field. */
  addressId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `createdBy` field. */
  createdBy?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `searchVector` field. */
  searchVector?: InputMaybe<Scalars['TsVector']['input']>
  /** Checks for equality with the object’s `slug` field. */
  slug?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `start` field. */
  start?: InputMaybe<Scalars['Datetime']['input']>
}

/** A connection to a list of `Event` values. */
export type EventConnection = {
  __typename?: 'EventConnection'
  /** A list of edges which contains the `Event` and cursor to aid in pagination. */
  edges: Array<EventEdge>
  /** A list of `Event` objects. */
  nodes: Array<Event>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `Event` you could get from the connection. */
  totalCount: Scalars['Int']['output']
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
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** An edge for our `Event`. May be used by Relay 1. */
  eventEdge?: Maybe<EventEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  result?: Maybe<Event>
}

/** The output of our `eventDelete` mutation. */
export type EventDeletePayloadEventEdgeArgs = {
  orderBy?: Array<EventOrderBy>
}

/** A `Event` edge in the connection. */
export type EventEdge = {
  __typename?: 'EventEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `Event` at the end of the edge. */
  node: Event
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
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output']
  /** Primary key, uniquely identifies each favorite entry. */
  rowId: Scalars['UUID']['output']
}

/**
 * A condition to be used against `EventFavorite` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type EventFavoriteCondition = {
  /** Checks for equality with the object’s `createdBy` field. */
  createdBy?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `eventId` field. */
  eventId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['UUID']['input']>
}

/** A connection to a list of `EventFavorite` values. */
export type EventFavoriteConnection = {
  __typename?: 'EventFavoriteConnection'
  /** A list of edges which contains the `EventFavorite` and cursor to aid in pagination. */
  edges: Array<EventFavoriteEdge>
  /** A list of `EventFavorite` objects. */
  nodes: Array<EventFavorite>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `EventFavorite` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `EventFavorite` edge in the connection. */
export type EventFavoriteEdge = {
  __typename?: 'EventFavoriteEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `EventFavorite` at the end of the edge. */
  node: EventFavorite
}

/** An input for mutations affecting `EventFavorite` */
export type EventFavoriteInput = {
  /** Reference to the account that created the event favorite. */
  createdBy: Scalars['UUID']['input']
  /** Reference to the event that is marked as a favorite. */
  eventId: Scalars['UUID']['input']
}

/** Methods to use when ordering `EventFavorite`. */
export enum EventFavoriteOrderBy {
  CreatedByAsc = 'CREATED_BY_ASC',
  CreatedByDesc = 'CREATED_BY_DESC',
  EventIdAsc = 'EVENT_ID_ASC',
  EventIdDesc = 'EVENT_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC',
}

/** Event formats. */
export type EventFormat = Node & {
  __typename?: 'EventFormat'
  /** Reads and enables pagination through a set of `EventFormatMapping`. */
  eventFormatMappingsByFormatId: EventFormatMappingConnection
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output']
  /** The name of the event format. */
  name: Scalars['String']['output']
  /** Reads and enables pagination through a set of `PreferenceEventFormat`. */
  preferenceEventFormatsByFormatId: PreferenceEventFormatConnection
  /** The id of the event format. */
  rowId: Scalars['UUID']['output']
}

/** Event formats. */
export type EventFormatEventFormatMappingsByFormatIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventFormatMappingCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<EventFormatMappingOrderBy>>
}

/** Event formats. */
export type EventFormatPreferenceEventFormatsByFormatIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<PreferenceEventFormatCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<PreferenceEventFormatOrderBy>>
}

/**
 * A condition to be used against `EventFormat` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type EventFormatCondition = {
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['UUID']['input']>
}

/** A connection to a list of `EventFormat` values. */
export type EventFormatConnection = {
  __typename?: 'EventFormatConnection'
  /** A list of edges which contains the `EventFormat` and cursor to aid in pagination. */
  edges: Array<EventFormatEdge>
  /** A list of `EventFormat` objects. */
  nodes: Array<EventFormat>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `EventFormat` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `EventFormat` edge in the connection. */
export type EventFormatEdge = {
  __typename?: 'EventFormatEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `EventFormat` at the end of the edge. */
  node: EventFormat
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
  id: Scalars['ID']['output']
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

/** A connection to a list of `EventFormatMapping` values. */
export type EventFormatMappingConnection = {
  __typename?: 'EventFormatMappingConnection'
  /** A list of edges which contains the `EventFormatMapping` and cursor to aid in pagination. */
  edges: Array<EventFormatMappingEdge>
  /** A list of `EventFormatMapping` objects. */
  nodes: Array<EventFormatMapping>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `EventFormatMapping` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `EventFormatMapping` edge in the connection. */
export type EventFormatMappingEdge = {
  __typename?: 'EventFormatMappingEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `EventFormatMapping` at the end of the edge. */
  node: EventFormatMapping
}

/** An input for mutations affecting `EventFormatMapping` */
export type EventFormatMappingInput = {
  /** An event id. */
  eventId: Scalars['UUID']['input']
  /** A format id. */
  formatId: Scalars['UUID']['input']
}

/** Methods to use when ordering `EventFormatMapping`. */
export enum EventFormatMappingOrderBy {
  EventIdAsc = 'EVENT_ID_ASC',
  EventIdDesc = 'EVENT_ID_DESC',
  FormatIdAsc = 'FORMAT_ID_ASC',
  FormatIdDesc = 'FORMAT_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
}

/** Methods to use when ordering `EventFormat`. */
export enum EventFormatOrderBy {
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC',
}

/** An input for mutations affecting `Event` */
export type EventInput = {
  /** Optional reference to the physical address of the event. */
  addressId?: InputMaybe<Scalars['UUID']['input']>
  /** The event creator's id. */
  createdBy: Scalars['UUID']['input']
  /** The event's description. Must be non-empty and not exceed 10,000 characters. */
  description?: InputMaybe<Scalars['String']['input']>
  /** The event's end date and time, with time zone. */
  end?: InputMaybe<Scalars['Datetime']['input']>
  /** The event's maximum guest count. Must be greater than 0. */
  guestCountMaximum?: InputMaybe<Scalars['Int']['input']>
  /** Indicates whether the event is archived. */
  isArchived?: InputMaybe<Scalars['Boolean']['input']>
  /** Indicates whether the event takes place in person. */
  isInPerson?: InputMaybe<Scalars['Boolean']['input']>
  /** Indicates whether the event takes place remotely. */
  isRemote?: InputMaybe<Scalars['Boolean']['input']>
  language?: InputMaybe<Language>
  /** The event's name. Must be non-empty and not exceed 100 characters. */
  name: Scalars['String']['input']
  /** The event's name, slugified. Must be alphanumeric with hyphens and not exceed 100 characters. */
  slug: Scalars['String']['input']
  /** The event's start date and time, with time zone. */
  start: Scalars['Datetime']['input']
  /** The event's unified resource locator. Must start with "https://" and not exceed 2,000 characters. */
  url?: InputMaybe<Scalars['String']['input']>
  /** The event's visibility. */
  visibility: EventVisibility
}

/** Methods to use when ordering `Event`. */
export enum EventOrderBy {
  AddressIdAsc = 'ADDRESS_ID_ASC',
  AddressIdDesc = 'ADDRESS_ID_DESC',
  CreatedByAsc = 'CREATED_BY_ASC',
  CreatedByDesc = 'CREATED_BY_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC',
  SearchVectorAsc = 'SEARCH_VECTOR_ASC',
  SearchVectorDesc = 'SEARCH_VECTOR_DESC',
  SlugAsc = 'SLUG_ASC',
  SlugDesc = 'SLUG_DESC',
  StartAsc = 'START_ASC',
  StartDesc = 'START_DESC',
}

/** Represents an update to a `Event`. Fields that are set will be updated. */
export type EventPatch = {
  /** Optional reference to the physical address of the event. */
  addressId?: InputMaybe<Scalars['UUID']['input']>
  /** The event creator's id. */
  createdBy?: InputMaybe<Scalars['UUID']['input']>
  /** The event's description. Must be non-empty and not exceed 10,000 characters. */
  description?: InputMaybe<Scalars['String']['input']>
  /** The event's end date and time, with time zone. */
  end?: InputMaybe<Scalars['Datetime']['input']>
  /** The event's maximum guest count. Must be greater than 0. */
  guestCountMaximum?: InputMaybe<Scalars['Int']['input']>
  /** Indicates whether the event is archived. */
  isArchived?: InputMaybe<Scalars['Boolean']['input']>
  /** Indicates whether the event takes place in person. */
  isInPerson?: InputMaybe<Scalars['Boolean']['input']>
  /** Indicates whether the event takes place remotely. */
  isRemote?: InputMaybe<Scalars['Boolean']['input']>
  language?: InputMaybe<Language>
  /** The event's name. Must be non-empty and not exceed 100 characters. */
  name?: InputMaybe<Scalars['String']['input']>
  /** The event's name, slugified. Must be alphanumeric with hyphens and not exceed 100 characters. */
  slug?: InputMaybe<Scalars['String']['input']>
  /** The event's start date and time, with time zone. */
  start?: InputMaybe<Scalars['Datetime']['input']>
  /** The event's unified resource locator. Must start with "https://" and not exceed 2,000 characters. */
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
  id: Scalars['ID']['output']
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
}

/** A connection to a list of `EventRecommendation` values. */
export type EventRecommendationConnection = {
  __typename?: 'EventRecommendationConnection'
  /** A list of edges which contains the `EventRecommendation` and cursor to aid in pagination. */
  edges: Array<EventRecommendationEdge>
  /** A list of `EventRecommendation` objects. */
  nodes: Array<EventRecommendation>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `EventRecommendation` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `EventRecommendation` edge in the connection. */
export type EventRecommendationEdge = {
  __typename?: 'EventRecommendationEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `EventRecommendation` at the end of the edge. */
  node: EventRecommendation
}

/** Methods to use when ordering `EventRecommendation`. */
export enum EventRecommendationOrderBy {
  AccountIdAsc = 'ACCOUNT_ID_ASC',
  AccountIdDesc = 'ACCOUNT_ID_DESC',
  EventIdAsc = 'EVENT_ID_ASC',
  EventIdDesc = 'EVENT_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
}

/** Possible event sizes: small, medium, large, huge. */
export enum EventSize {
  Huge = 'huge',
  Large = 'large',
  Medium = 'medium',
  Small = 'small',
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
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  result?: Maybe<Array<EventUnlockRecord>>
}

export type EventUnlockRecord = {
  __typename?: 'EventUnlockRecord'
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
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output']
  /** Optional boolean flag indicating if the upload is the header image for the event. */
  isHeaderImage?: Maybe<Scalars['Boolean']['output']>
  /** Primary key, uniquely identifies each event-upload association. */
  rowId: Scalars['UUID']['output']
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
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `uploadId` field. */
  uploadId?: InputMaybe<Scalars['UUID']['input']>
}

/** A connection to a list of `EventUpload` values. */
export type EventUploadConnection = {
  __typename?: 'EventUploadConnection'
  /** A list of edges which contains the `EventUpload` and cursor to aid in pagination. */
  edges: Array<EventUploadEdge>
  /** A list of `EventUpload` objects. */
  nodes: Array<EventUpload>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `EventUpload` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `EventUpload` edge in the connection. */
export type EventUploadEdge = {
  __typename?: 'EventUploadEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `EventUpload` at the end of the edge. */
  node: EventUpload
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

/** Methods to use when ordering `EventUpload`. */
export enum EventUploadOrderBy {
  EventIdAsc = 'EVENT_ID_ASC',
  EventIdDesc = 'EVENT_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC',
  UploadIdAsc = 'UPLOAD_ID_ASC',
  UploadIdDesc = 'UPLOAD_ID_DESC',
}

/** Possible visibilities of events and event groups: public, private and unlisted. */
export enum EventVisibility {
  Private = 'private',
  Public = 'public',
  Unlisted = 'unlisted',
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
  /** The account that created the friend relation. */
  createdBy: Scalars['UUID']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output']
  /** The friend relation's internal id. */
  rowId: Scalars['UUID']['output']
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
  /** Checks for equality with the object’s `createdBy` field. */
  createdBy?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `updatedBy` field. */
  updatedBy?: InputMaybe<Scalars['UUID']['input']>
}

/** A connection to a list of `Friendship` values. */
export type FriendshipConnection = {
  __typename?: 'FriendshipConnection'
  /** A list of edges which contains the `Friendship` and cursor to aid in pagination. */
  edges: Array<FriendshipEdge>
  /** A list of `Friendship` objects. */
  nodes: Array<Friendship>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `Friendship` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `Friendship` edge in the connection. */
export type FriendshipEdge = {
  __typename?: 'FriendshipEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `Friendship` at the end of the edge. */
  node: Friendship
}

/** An input for mutations affecting `Friendship` */
export type FriendshipInput = {
  /** The 'left' side of the friend relation. It must be lexically less than the 'right' side. */
  aAccountId: Scalars['UUID']['input']
  /** The 'right' side of the friend relation. It must be lexically greater than the 'left' side. */
  bAccountId: Scalars['UUID']['input']
  /** The account that created the friend relation. */
  createdBy: Scalars['UUID']['input']
}

/** Methods to use when ordering `Friendship`. */
export enum FriendshipOrderBy {
  AAccountIdAsc = 'A_ACCOUNT_ID_ASC',
  AAccountIdDesc = 'A_ACCOUNT_ID_DESC',
  BAccountIdAsc = 'B_ACCOUNT_ID_ASC',
  BAccountIdDesc = 'B_ACCOUNT_ID_DESC',
  CreatedByAsc = 'CREATED_BY_ASC',
  CreatedByDesc = 'CREATED_BY_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC',
  UpdatedByAsc = 'UPDATED_BY_ASC',
  UpdatedByDesc = 'UPDATED_BY_DESC',
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
  Accepted = 'accepted',
  Requested = 'requested',
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
  /** Reads a single `Attendance` that is related to this `Guest`. */
  attendanceByGuestId?: Maybe<Attendance>
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
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output']
  /** The guest's internal id. */
  rowId: Scalars['UUID']['output']
  /** Timestamp of when the guest was last updated. */
  updatedAt?: Maybe<Scalars['Datetime']['output']>
  /** The id of the account which last updated the guest. `NULL` if the guest was updated by an anonymous user. */
  updatedBy?: Maybe<Scalars['UUID']['output']>
}

/** A condition to be used against `Guest` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type GuestCondition = {
  /** Checks for equality with the object’s `contactId` field. */
  contactId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `eventId` field. */
  eventId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `updatedBy` field. */
  updatedBy?: InputMaybe<Scalars['UUID']['input']>
}

/** A connection to a list of `Guest` values. */
export type GuestConnection = {
  __typename?: 'GuestConnection'
  /** A list of edges which contains the `Guest` and cursor to aid in pagination. */
  edges: Array<GuestEdge>
  /** A list of `Guest` objects. */
  nodes: Array<Guest>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `Guest` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A connection to a list of `UUID` values. */
export type GuestContactIdsConnection = {
  __typename?: 'GuestContactIdsConnection'
  /** A list of edges which contains the `UUID` and cursor to aid in pagination. */
  edges: Array<Maybe<GuestContactIdsEdge>>
  /** A list of `UUID` objects. */
  nodes: Array<Maybe<Scalars['UUID']['output']>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `UUID` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `UUID` edge in the connection. */
export type GuestContactIdsEdge = {
  __typename?: 'GuestContactIdsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `UUID` at the end of the edge. */
  node?: Maybe<Scalars['UUID']['output']>
}

/** A `Guest` edge in the connection. */
export type GuestEdge = {
  __typename?: 'GuestEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `Guest` at the end of the edge. */
  node: Guest
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
export type GuestFlatConnection = {
  __typename?: 'GuestFlatConnection'
  /** A list of edges which contains the `GuestFlat` and cursor to aid in pagination. */
  edges: Array<GuestFlatEdge>
  /** A list of `GuestFlat` objects. */
  nodes: Array<GuestFlat>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `GuestFlat` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `GuestFlat` edge in the connection. */
export type GuestFlatEdge = {
  __typename?: 'GuestFlatEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `GuestFlat` at the end of the edge. */
  node: GuestFlat
}

/** Methods to use when ordering `GuestFlat`. */
export enum GuestFlatOrderBy {
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
  GuestContactIdAsc = 'GUEST_CONTACT_ID_ASC',
  GuestContactIdDesc = 'GUEST_CONTACT_ID_DESC',
  GuestEventIdAsc = 'GUEST_EVENT_ID_ASC',
  GuestEventIdDesc = 'GUEST_EVENT_ID_DESC',
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

/** Methods to use when ordering `Guest`. */
export enum GuestOrderBy {
  ContactIdAsc = 'CONTACT_ID_ASC',
  ContactIdDesc = 'CONTACT_ID_DESC',
  EventIdAsc = 'EVENT_ID_ASC',
  EventIdDesc = 'EVENT_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC',
  UpdatedByAsc = 'UPDATED_BY_ASC',
  UpdatedByDesc = 'UPDATED_BY_DESC',
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

/** Possible answers to an invitation: accepted, canceled. */
export enum InvitationFeedback {
  Accepted = 'accepted',
  Canceled = 'canceled',
}

/** Possible choices on how to receive a paper invitation: none, paper, digital. */
export enum InvitationFeedbackPaper {
  Digital = 'digital',
  None = 'none',
  Paper = 'paper',
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

/** All input for the `jwtCreate` mutation. */
export type JwtCreateInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  password: Scalars['String']['input']
  username: Scalars['String']['input']
}

/** The output of our `jwtCreate` mutation. */
export type JwtCreatePayload = {
  __typename?: 'JwtCreatePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  result?: Maybe<Scalars['Jwt']['output']>
}

/** All input for the `jwtUpdateAttendanceAdd` mutation. */
export type JwtUpdateAttendanceAddInput = {
  attendanceId: Scalars['UUID']['input']
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
}

/** The output of our `jwtUpdateAttendanceAdd` mutation. */
export type JwtUpdateAttendanceAddPayload = {
  __typename?: 'JwtUpdateAttendanceAddPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  result?: Maybe<Scalars['Jwt']['output']>
}

/** All input for the `jwtUpdate` mutation. */
export type JwtUpdateInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  jwtId: Scalars['UUID']['input']
}

/** The output of our `jwtUpdate` mutation. */
export type JwtUpdatePayload = {
  __typename?: 'JwtUpdatePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  result?: Maybe<Scalars['Jwt']['output']>
}

/** Supported ISO 639 language codes. */
export enum Language {
  De = 'de',
  En = 'en',
}

/** Legal terms like privacy policies or terms of service. */
export type LegalTerm = Node & {
  __typename?: 'LegalTerm'
  /** Timestamp when the term was created. Set to the current time by default. */
  createdAt: Scalars['Datetime']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output']
  /** Language code in ISO 639-1 format with optional region (e.g., `en` for English, `en_GB` for British English) */
  language: Scalars['String']['output']
  /** Reads and enables pagination through a set of `LegalTermAcceptance`. */
  legalTermAcceptancesByLegalTermId: LegalTermAcceptanceConnection
  /** Unique identifier for each legal term. */
  rowId: Scalars['UUID']['output']
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
  orderBy?: InputMaybe<Array<LegalTermAcceptanceOrderBy>>
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
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output']
  /** Reads a single `LegalTerm` that is related to this `LegalTermAcceptance`. */
  legalTermByLegalTermId?: Maybe<LegalTerm>
  /** The ID of the legal terms that were accepted. Deletion of these legal terms is restricted while they are still referenced in this table. */
  legalTermId: Scalars['UUID']['output']
  /** Unique identifier for this legal term acceptance record. Automatically generated for each new acceptance. */
  rowId: Scalars['UUID']['output']
}

/**
 * A condition to be used against `LegalTermAcceptance` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type LegalTermAcceptanceCondition = {
  /** Checks for equality with the object’s `accountId` field. */
  accountId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `legalTermId` field. */
  legalTermId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['UUID']['input']>
}

/** A connection to a list of `LegalTermAcceptance` values. */
export type LegalTermAcceptanceConnection = {
  __typename?: 'LegalTermAcceptanceConnection'
  /** A list of edges which contains the `LegalTermAcceptance` and cursor to aid in pagination. */
  edges: Array<LegalTermAcceptanceEdge>
  /** A list of `LegalTermAcceptance` objects. */
  nodes: Array<LegalTermAcceptance>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `LegalTermAcceptance` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `LegalTermAcceptance` edge in the connection. */
export type LegalTermAcceptanceEdge = {
  __typename?: 'LegalTermAcceptanceEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `LegalTermAcceptance` at the end of the edge. */
  node: LegalTermAcceptance
}

/** An input for mutations affecting `LegalTermAcceptance` */
export type LegalTermAcceptanceInput = {
  /** The user account ID that accepted the legal terms. If the account is deleted, this acceptance record will also be deleted. */
  accountId: Scalars['UUID']['input']
  /** The ID of the legal terms that were accepted. Deletion of these legal terms is restricted while they are still referenced in this table. */
  legalTermId: Scalars['UUID']['input']
}

/** Methods to use when ordering `LegalTermAcceptance`. */
export enum LegalTermAcceptanceOrderBy {
  AccountIdAsc = 'ACCOUNT_ID_ASC',
  AccountIdDesc = 'ACCOUNT_ID_DESC',
  LegalTermIdAsc = 'LEGAL_TERM_ID_ASC',
  LegalTermIdDesc = 'LEGAL_TERM_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC',
}

/**
 * A condition to be used against `LegalTerm` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type LegalTermCondition = {
  /** Checks for equality with the object’s `language` field. */
  language?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `version` field. */
  version?: InputMaybe<Scalars['String']['input']>
}

/** A connection to a list of `LegalTerm` values. */
export type LegalTermConnection = {
  __typename?: 'LegalTermConnection'
  /** A list of edges which contains the `LegalTerm` and cursor to aid in pagination. */
  edges: Array<LegalTermEdge>
  /** A list of `LegalTerm` objects. */
  nodes: Array<LegalTerm>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `LegalTerm` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `LegalTerm` edge in the connection. */
export type LegalTermEdge = {
  __typename?: 'LegalTermEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `LegalTerm` at the end of the edge. */
  node: LegalTerm
}

/** Methods to use when ordering `LegalTerm`. */
export enum LegalTermOrderBy {
  LanguageAsc = 'LANGUAGE_ASC',
  LanguageDesc = 'LANGUAGE_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC',
  VersionAsc = 'VERSION_ASC',
  VersionDesc = 'VERSION_DESC',
}

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation'
  /** Allows to delete an account.\n\nError codes:\n- **23503** when the account still has events.\n- **28P01** when the password is invalid. */
  accountDelete?: Maybe<AccountDeletePayload>
  /** Sets the account's email address verification code to `NULL` for which the email address verification code equals the one passed and is up to date.\n\nError codes:\n- **P0002** when the verification code is unknown.\n- **55000** when the verification code has expired. */
  accountEmailAddressVerification?: Maybe<AccountEmailAddressVerificationPayload>
  /** Allows to change an account's password.\n\nError codes:\n- **22023** when the new password is too short.\n- **28P01** when an account with the given password is not found. */
  accountPasswordChange?: Maybe<AccountPasswordChangePayload>
  /**
   * Sets a new password for an account if there was a request to do so before that's still up to date.\n\nError codes:\n- **22023** when the password is too short.\n- **P0002** when the reset code is unknown.\n- **55000** when the reset code has expired.
   *
   */
  accountPasswordReset?: Maybe<AccountPasswordResetPayload>
  /** Sets a new password reset verification code for an account. */
  accountPasswordResetRequest?: Maybe<AccountPasswordResetRequestPayload>
  /** Creates a contact and registers an account referencing it.\n\nError codes:\n- **VTBDA** when the birth date is not at least 18 years old.\n- **VTPLL** when the password length does not reach its minimum.\n- **VTAUV** when an account with the given username already exists. */
  accountRegistration?: Maybe<AccountRegistrationPayload>
  /** Refreshes an account's email address verification validity period.\n\nError codes:\n- **01P01** in all cases right now as refreshing registrations is currently not available due to missing rate limiting.\n- **22023** when an account with this account id does not exist. */
  accountRegistrationRefresh?: Maybe<AccountRegistrationRefreshPayload>
  /** Inserts an achievement unlock for the user that gave an existing achievement code.\n\nError codes:\n- **P0002** when the achievement or the account is unknown. */
  achievementUnlock?: Maybe<AchievementUnlockPayload>
  /** Creates a single `AccountBlock`. */
  createAccountBlock?: Maybe<CreateAccountBlockPayload>
  /** Creates a single `AccountSocialNetwork`. */
  createAccountSocialNetwork?: Maybe<CreateAccountSocialNetworkPayload>
  /** Creates a single `Address`. */
  createAddress?: Maybe<CreateAddressPayload>
  /** Creates a single `Attendance`. */
  createAttendance?: Maybe<CreateAttendancePayload>
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
  deleteAccountBlockByRowId?: Maybe<DeleteAccountBlockPayload>
  /** Deletes a single `AccountSocialNetwork` using its globally unique id. */
  deleteAccountSocialNetwork?: Maybe<DeleteAccountSocialNetworkPayload>
  /** Deletes a single `AccountSocialNetwork` using a unique key. */
  deleteAccountSocialNetworkByAccountIdAndSocialNetwork?: Maybe<DeleteAccountSocialNetworkPayload>
  /** Deletes a single `Address` using its globally unique id. */
  deleteAddress?: Maybe<DeleteAddressPayload>
  /** Deletes a single `Address` using a unique key. */
  deleteAddressByRowId?: Maybe<DeleteAddressPayload>
  /** Deletes a single `Contact` using its globally unique id. */
  deleteContact?: Maybe<DeleteContactPayload>
  /** Deletes a single `Contact` using a unique key. */
  deleteContactByCreatedByAndAccountId?: Maybe<DeleteContactPayload>
  /** Deletes a single `Contact` using a unique key. */
  deleteContactByRowId?: Maybe<DeleteContactPayload>
  /** Deletes a single `Device` using its globally unique id. */
  deleteDevice?: Maybe<DeleteDevicePayload>
  /** Deletes a single `Device` using a unique key. */
  deleteDeviceByCreatedByAndFcmToken?: Maybe<DeleteDevicePayload>
  /** Deletes a single `Device` using a unique key. */
  deleteDeviceByRowId?: Maybe<DeleteDevicePayload>
  /** Deletes a single `Event` using its globally unique id. */
  deleteEvent?: Maybe<DeleteEventPayload>
  /** Deletes a single `Event` using a unique key. */
  deleteEventByCreatedByAndSlug?: Maybe<DeleteEventPayload>
  /** Deletes a single `Event` using a unique key. */
  deleteEventByRowId?: Maybe<DeleteEventPayload>
  /** Deletes a single `EventCategoryMapping` using its globally unique id. */
  deleteEventCategoryMapping?: Maybe<DeleteEventCategoryMappingPayload>
  /** Deletes a single `EventCategoryMapping` using a unique key. */
  deleteEventCategoryMappingByEventIdAndCategoryId?: Maybe<DeleteEventCategoryMappingPayload>
  /** Deletes a single `EventFavorite` using its globally unique id. */
  deleteEventFavorite?: Maybe<DeleteEventFavoritePayload>
  /** Deletes a single `EventFavorite` using a unique key. */
  deleteEventFavoriteByCreatedByAndEventId?: Maybe<DeleteEventFavoritePayload>
  /** Deletes a single `EventFavorite` using a unique key. */
  deleteEventFavoriteByRowId?: Maybe<DeleteEventFavoritePayload>
  /** Deletes a single `EventFormatMapping` using its globally unique id. */
  deleteEventFormatMapping?: Maybe<DeleteEventFormatMappingPayload>
  /** Deletes a single `EventFormatMapping` using a unique key. */
  deleteEventFormatMappingByEventIdAndFormatId?: Maybe<DeleteEventFormatMappingPayload>
  /** Deletes a single `EventUpload` using its globally unique id. */
  deleteEventUpload?: Maybe<DeleteEventUploadPayload>
  /** Deletes a single `EventUpload` using a unique key. */
  deleteEventUploadByEventIdAndUploadId?: Maybe<DeleteEventUploadPayload>
  /** Deletes a single `EventUpload` using a unique key. */
  deleteEventUploadByRowId?: Maybe<DeleteEventUploadPayload>
  /** Deletes a single `Friendship` using its globally unique id. */
  deleteFriendship?: Maybe<DeleteFriendshipPayload>
  /** Deletes a single `Friendship` using a unique key. */
  deleteFriendshipByAAccountIdAndBAccountId?: Maybe<DeleteFriendshipPayload>
  /** Deletes a single `Friendship` using a unique key. */
  deleteFriendshipByRowId?: Maybe<DeleteFriendshipPayload>
  /** Deletes a single `Guest` using its globally unique id. */
  deleteGuest?: Maybe<DeleteGuestPayload>
  /** Deletes a single `Guest` using a unique key. */
  deleteGuestByEventIdAndContactId?: Maybe<DeleteGuestPayload>
  /** Deletes a single `Guest` using a unique key. */
  deleteGuestByRowId?: Maybe<DeleteGuestPayload>
  /** Deletes a single `PreferenceEventCategory` using its globally unique id. */
  deletePreferenceEventCategory?: Maybe<DeletePreferenceEventCategoryPayload>
  /** Deletes a single `PreferenceEventCategory` using a unique key. */
  deletePreferenceEventCategoryByAccountIdAndCategoryId?: Maybe<DeletePreferenceEventCategoryPayload>
  /** Deletes a single `PreferenceEventCategory` using a unique key. */
  deletePreferenceEventCategoryByRowId?: Maybe<DeletePreferenceEventCategoryPayload>
  /** Deletes a single `PreferenceEventFormat` using its globally unique id. */
  deletePreferenceEventFormat?: Maybe<DeletePreferenceEventFormatPayload>
  /** Deletes a single `PreferenceEventFormat` using a unique key. */
  deletePreferenceEventFormatByAccountIdAndFormatId?: Maybe<DeletePreferenceEventFormatPayload>
  /** Deletes a single `PreferenceEventFormat` using a unique key. */
  deletePreferenceEventFormatByRowId?: Maybe<DeletePreferenceEventFormatPayload>
  /** Deletes a single `PreferenceEventLocation` using its globally unique id. */
  deletePreferenceEventLocation?: Maybe<DeletePreferenceEventLocationPayload>
  /** Deletes a single `PreferenceEventLocation` using a unique key. */
  deletePreferenceEventLocationByCreatedByAndLocationAndRadius?: Maybe<DeletePreferenceEventLocationPayload>
  /** Deletes a single `PreferenceEventLocation` using a unique key. */
  deletePreferenceEventLocationByRowId?: Maybe<DeletePreferenceEventLocationPayload>
  /** Deletes a single `PreferenceEventSize` using its globally unique id. */
  deletePreferenceEventSize?: Maybe<DeletePreferenceEventSizePayload>
  /** Deletes a single `PreferenceEventSize` using a unique key. */
  deletePreferenceEventSizeByAccountIdAndEventSize?: Maybe<DeletePreferenceEventSizePayload>
  /** Deletes a single `PreferenceEventSize` using a unique key. */
  deletePreferenceEventSizeByRowId?: Maybe<DeletePreferenceEventSizePayload>
  /** Deletes a single `ProfilePicture` using its globally unique id. */
  deleteProfilePicture?: Maybe<DeleteProfilePicturePayload>
  /** Deletes a single `ProfilePicture` using a unique key. */
  deleteProfilePictureByAccountId?: Maybe<DeleteProfilePicturePayload>
  /** Deletes a single `ProfilePicture` using a unique key. */
  deleteProfilePictureByRowId?: Maybe<DeleteProfilePicturePayload>
  /** Deletes a single `Upload` using its globally unique id. */
  deleteUpload?: Maybe<DeleteUploadPayload>
  /** Deletes a single `Upload` using a unique key. */
  deleteUploadByRowId?: Maybe<DeleteUploadPayload>
  /** Deletes a single `Upload` using a unique key. */
  deleteUploadByStorageKey?: Maybe<DeleteUploadPayload>
  /** Allows to delete an event.\n\nError codes:\n- **P0002** when the event was not found.\n- **28P01** when the account with the given password was not found. */
  eventDelete?: Maybe<EventDeletePayload>
  /** Adds a guest claim to the current session.\n\nError codes:\n- **P0002** when no guest, no event, or no event creator username was found for this guest id. */
  eventUnlock?: Maybe<EventUnlockPayload>
  /** Adds a notification for the invitation channel.\n\nError codes:\n- **P0002** when the guest, event, contact, the contact email address, or the account email address is not accessible. */
  invite?: Maybe<InvitePayload>
  /** Creates a JWT token that will securely identify an account and give it certain permissions.\n\nError codes:\n- **P0002** when an account is not found or when the token could not be created.\n- **55000** when the account is not verified yet. */
  jwtCreate?: Maybe<JwtCreatePayload>
  /** Refreshes a JWT. */
  jwtUpdate?: Maybe<JwtUpdatePayload>
  /** Adds an attendance UUID to the current session JWT. */
  jwtUpdateAttendanceAdd?: Maybe<JwtUpdateAttendanceAddPayload>
  /** Allows to set the acknowledgement state of a notification.\n\nError codes:\n- **P0002** when no notification with the given id is found. */
  notificationAcknowledge?: Maybe<NotificationAcknowledgePayload>
  /** Sets the picture with the given upload id as the invoker's profile picture. */
  profilePictureSet?: Maybe<ProfilePictureSetPayload>
  /** Updates a single `Account` using its globally unique id and a patch. */
  updateAccount?: Maybe<UpdateAccountPayload>
  /** Updates a single `Account` using a unique key and a patch. */
  updateAccountByRowId?: Maybe<UpdateAccountPayload>
  /** Updates a single `Account` using a unique key and a patch. */
  updateAccountByUsername?: Maybe<UpdateAccountPayload>
  /**
   * Sets the location for the invoker's account.
   *
   * Error codes:
   * - **P0002** when the account is not found.
   */
  updateAccountLocation?: Maybe<UpdateAccountLocationPayload>
  /** Updates a single `AccountSocialNetwork` using its globally unique id and a patch. */
  updateAccountSocialNetwork?: Maybe<UpdateAccountSocialNetworkPayload>
  /** Updates a single `AccountSocialNetwork` using a unique key and a patch. */
  updateAccountSocialNetworkByAccountIdAndSocialNetwork?: Maybe<UpdateAccountSocialNetworkPayload>
  /** Updates a single `Address` using its globally unique id and a patch. */
  updateAddress?: Maybe<UpdateAddressPayload>
  /** Updates a single `Address` using a unique key and a patch. */
  updateAddressByRowId?: Maybe<UpdateAddressPayload>
  /** Updates a single `Attendance` using its globally unique id and a patch. */
  updateAttendance?: Maybe<UpdateAttendancePayload>
  /** Updates a single `Attendance` using a unique key and a patch. */
  updateAttendanceByGuestId?: Maybe<UpdateAttendancePayload>
  /** Updates a single `Attendance` using a unique key and a patch. */
  updateAttendanceByRowId?: Maybe<UpdateAttendancePayload>
  /** Updates a single `Contact` using its globally unique id and a patch. */
  updateContact?: Maybe<UpdateContactPayload>
  /** Updates a single `Contact` using a unique key and a patch. */
  updateContactByCreatedByAndAccountId?: Maybe<UpdateContactPayload>
  /** Updates a single `Contact` using a unique key and a patch. */
  updateContactByRowId?: Maybe<UpdateContactPayload>
  /** Updates a single `Device` using its globally unique id and a patch. */
  updateDevice?: Maybe<UpdateDevicePayload>
  /** Updates a single `Device` using a unique key and a patch. */
  updateDeviceByCreatedByAndFcmToken?: Maybe<UpdateDevicePayload>
  /** Updates a single `Device` using a unique key and a patch. */
  updateDeviceByRowId?: Maybe<UpdateDevicePayload>
  /** Updates a single `Event` using its globally unique id and a patch. */
  updateEvent?: Maybe<UpdateEventPayload>
  /** Updates a single `Event` using a unique key and a patch. */
  updateEventByCreatedByAndSlug?: Maybe<UpdateEventPayload>
  /** Updates a single `Event` using a unique key and a patch. */
  updateEventByRowId?: Maybe<UpdateEventPayload>
  /** Updates a single `Friendship` using its globally unique id and a patch. */
  updateFriendship?: Maybe<UpdateFriendshipPayload>
  /** Updates a single `Friendship` using a unique key and a patch. */
  updateFriendshipByAAccountIdAndBAccountId?: Maybe<UpdateFriendshipPayload>
  /** Updates a single `Friendship` using a unique key and a patch. */
  updateFriendshipByRowId?: Maybe<UpdateFriendshipPayload>
  /** Updates a single `Guest` using its globally unique id and a patch. */
  updateGuest?: Maybe<UpdateGuestPayload>
  /** Updates a single `Guest` using a unique key and a patch. */
  updateGuestByEventIdAndContactId?: Maybe<UpdateGuestPayload>
  /** Updates a single `Guest` using a unique key and a patch. */
  updateGuestByRowId?: Maybe<UpdateGuestPayload>
  /** Updates a single `ProfilePicture` using its globally unique id and a patch. */
  updateProfilePicture?: Maybe<UpdateProfilePicturePayload>
  /** Updates a single `ProfilePicture` using a unique key and a patch. */
  updateProfilePictureByAccountId?: Maybe<UpdateProfilePicturePayload>
  /** Updates a single `ProfilePicture` using a unique key and a patch. */
  updateProfilePictureByRowId?: Maybe<UpdateProfilePicturePayload>
  /** Updates a single `Upload` using its globally unique id and a patch. */
  updateUpload?: Maybe<UpdateUploadPayload>
  /** Updates a single `Upload` using a unique key and a patch. */
  updateUploadByRowId?: Maybe<UpdateUploadPayload>
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
export type MutationCreateAccountBlockArgs = {
  input: CreateAccountBlockInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateAccountSocialNetworkArgs = {
  input: CreateAccountSocialNetworkInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateAddressArgs = {
  input: CreateAddressInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateAttendanceArgs = {
  input: CreateAttendanceInput
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
export type MutationDeleteAccountBlockByRowIdArgs = {
  input: DeleteAccountBlockByRowIdInput
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
export type MutationDeleteAddressArgs = {
  input: DeleteAddressInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAddressByRowIdArgs = {
  input: DeleteAddressByRowIdInput
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
export type MutationDeleteContactByRowIdArgs = {
  input: DeleteContactByRowIdInput
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
export type MutationDeleteDeviceByRowIdArgs = {
  input: DeleteDeviceByRowIdInput
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
export type MutationDeleteEventByRowIdArgs = {
  input: DeleteEventByRowIdInput
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
export type MutationDeleteEventFavoriteByRowIdArgs = {
  input: DeleteEventFavoriteByRowIdInput
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
export type MutationDeleteEventUploadArgs = {
  input: DeleteEventUploadInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEventUploadByEventIdAndUploadIdArgs = {
  input: DeleteEventUploadByEventIdAndUploadIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEventUploadByRowIdArgs = {
  input: DeleteEventUploadByRowIdInput
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
export type MutationDeleteFriendshipByRowIdArgs = {
  input: DeleteFriendshipByRowIdInput
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
export type MutationDeleteGuestByRowIdArgs = {
  input: DeleteGuestByRowIdInput
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
export type MutationDeletePreferenceEventCategoryByRowIdArgs = {
  input: DeletePreferenceEventCategoryByRowIdInput
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
export type MutationDeletePreferenceEventFormatByRowIdArgs = {
  input: DeletePreferenceEventFormatByRowIdInput
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
export type MutationDeletePreferenceEventLocationByRowIdArgs = {
  input: DeletePreferenceEventLocationByRowIdInput
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
export type MutationDeletePreferenceEventSizeByRowIdArgs = {
  input: DeletePreferenceEventSizeByRowIdInput
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
export type MutationDeleteProfilePictureByRowIdArgs = {
  input: DeleteProfilePictureByRowIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUploadArgs = {
  input: DeleteUploadInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUploadByRowIdArgs = {
  input: DeleteUploadByRowIdInput
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
export type MutationJwtCreateArgs = {
  input: JwtCreateInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationJwtUpdateArgs = {
  input: JwtUpdateInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationJwtUpdateAttendanceAddArgs = {
  input: JwtUpdateAttendanceAddInput
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
export type MutationUpdateAccountByRowIdArgs = {
  input: UpdateAccountByRowIdInput
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
export type MutationUpdateAddressArgs = {
  input: UpdateAddressInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAddressByRowIdArgs = {
  input: UpdateAddressByRowIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAttendanceArgs = {
  input: UpdateAttendanceInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAttendanceByGuestIdArgs = {
  input: UpdateAttendanceByGuestIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAttendanceByRowIdArgs = {
  input: UpdateAttendanceByRowIdInput
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
export type MutationUpdateContactByRowIdArgs = {
  input: UpdateContactByRowIdInput
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
export type MutationUpdateDeviceByRowIdArgs = {
  input: UpdateDeviceByRowIdInput
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
export type MutationUpdateEventByRowIdArgs = {
  input: UpdateEventByRowIdInput
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
export type MutationUpdateFriendshipByRowIdArgs = {
  input: UpdateFriendshipByRowIdInput
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
export type MutationUpdateGuestByRowIdArgs = {
  input: UpdateGuestByRowIdInput
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
export type MutationUpdateProfilePictureByRowIdArgs = {
  input: UpdateProfilePictureByRowIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUploadArgs = {
  input: UpdateUploadInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUploadByRowIdArgs = {
  input: UpdateUploadByRowIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUploadByStorageKeyArgs = {
  input: UpdateUploadByStorageKeyInput
}

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output']
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
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output']
  rowId: Scalars['UUID']['output']
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
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['UUID']['input']>
}

/** A connection to a list of `PreferenceEventCategory` values. */
export type PreferenceEventCategoryConnection = {
  __typename?: 'PreferenceEventCategoryConnection'
  /** A list of edges which contains the `PreferenceEventCategory` and cursor to aid in pagination. */
  edges: Array<PreferenceEventCategoryEdge>
  /** A list of `PreferenceEventCategory` objects. */
  nodes: Array<PreferenceEventCategory>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `PreferenceEventCategory` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `PreferenceEventCategory` edge in the connection. */
export type PreferenceEventCategoryEdge = {
  __typename?: 'PreferenceEventCategoryEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `PreferenceEventCategory` at the end of the edge. */
  node: PreferenceEventCategory
}

/** An input for mutations affecting `PreferenceEventCategory` */
export type PreferenceEventCategoryInput = {
  /** A user account id. */
  accountId: Scalars['UUID']['input']
  /** An event category id. */
  categoryId: Scalars['UUID']['input']
  createdAt?: InputMaybe<Scalars['Datetime']['input']>
  rowId?: InputMaybe<Scalars['UUID']['input']>
}

/** Methods to use when ordering `PreferenceEventCategory`. */
export enum PreferenceEventCategoryOrderBy {
  AccountIdAsc = 'ACCOUNT_ID_ASC',
  AccountIdDesc = 'ACCOUNT_ID_DESC',
  CategoryIdAsc = 'CATEGORY_ID_ASC',
  CategoryIdDesc = 'CATEGORY_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC',
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
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output']
  rowId: Scalars['UUID']['output']
}

/**
 * A condition to be used against `PreferenceEventFormat` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type PreferenceEventFormatCondition = {
  /** Checks for equality with the object’s `accountId` field. */
  accountId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `formatId` field. */
  formatId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['UUID']['input']>
}

/** A connection to a list of `PreferenceEventFormat` values. */
export type PreferenceEventFormatConnection = {
  __typename?: 'PreferenceEventFormatConnection'
  /** A list of edges which contains the `PreferenceEventFormat` and cursor to aid in pagination. */
  edges: Array<PreferenceEventFormatEdge>
  /** A list of `PreferenceEventFormat` objects. */
  nodes: Array<PreferenceEventFormat>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `PreferenceEventFormat` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `PreferenceEventFormat` edge in the connection. */
export type PreferenceEventFormatEdge = {
  __typename?: 'PreferenceEventFormatEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `PreferenceEventFormat` at the end of the edge. */
  node: PreferenceEventFormat
}

/** An input for mutations affecting `PreferenceEventFormat` */
export type PreferenceEventFormatInput = {
  /** A user account id. */
  accountId: Scalars['UUID']['input']
  /** The timestammp when the record was created.. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>
  /** The id of an event format. */
  formatId: Scalars['UUID']['input']
  rowId?: InputMaybe<Scalars['UUID']['input']>
}

/** Methods to use when ordering `PreferenceEventFormat`. */
export enum PreferenceEventFormatOrderBy {
  AccountIdAsc = 'ACCOUNT_ID_ASC',
  AccountIdDesc = 'ACCOUNT_ID_DESC',
  FormatIdAsc = 'FORMAT_ID_ASC',
  FormatIdDesc = 'FORMAT_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC',
}

/** Stores preferred event locations for user accounts, including coordinates and search radius. */
export type PreferenceEventLocation = Node & {
  __typename?: 'PreferenceEventLocation'
  /** Reads a single `Account` that is related to this `PreferenceEventLocation`. */
  accountByCreatedBy?: Maybe<Account>
  /** Timestamp of when the event location preference was created, defaults to the current timestamp. */
  createdAt: Scalars['Datetime']['output']
  /** Reference to the account that created the location preference. */
  createdBy: Scalars['UUID']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output']
  /** Geographical point representing the preferred location, derived from latitude and longitude. */
  location: GeographyPoint
  /** Search radius in meters around the location where events are preferred. Must be positive. */
  radius: Scalars['Float']['output']
  /** Unique identifier for the preference record. */
  rowId: Scalars['UUID']['output']
}

/**
 * A condition to be used against `PreferenceEventLocation` object types. All
 * fields are tested for equality and combined with a logical ‘and.’
 */
export type PreferenceEventLocationCondition = {
  /** Checks for equality with the object’s `createdBy` field. */
  createdBy?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `radius` field. */
  radius?: InputMaybe<Scalars['Float']['input']>
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['UUID']['input']>
}

/** A connection to a list of `PreferenceEventLocation` values. */
export type PreferenceEventLocationConnection = {
  __typename?: 'PreferenceEventLocationConnection'
  /** A list of edges which contains the `PreferenceEventLocation` and cursor to aid in pagination. */
  edges: Array<PreferenceEventLocationEdge>
  /** A list of `PreferenceEventLocation` objects. */
  nodes: Array<PreferenceEventLocation>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `PreferenceEventLocation` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `PreferenceEventLocation` edge in the connection. */
export type PreferenceEventLocationEdge = {
  __typename?: 'PreferenceEventLocationEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `PreferenceEventLocation` at the end of the edge. */
  node: PreferenceEventLocation
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

/** Methods to use when ordering `PreferenceEventLocation`. */
export enum PreferenceEventLocationOrderBy {
  CreatedByAsc = 'CREATED_BY_ASC',
  CreatedByDesc = 'CREATED_BY_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RadiusAsc = 'RADIUS_ASC',
  RadiusDesc = 'RADIUS_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC',
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
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output']
  rowId: Scalars['UUID']['output']
}

/**
 * A condition to be used against `PreferenceEventSize` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type PreferenceEventSizeCondition = {
  /** Checks for equality with the object’s `accountId` field. */
  accountId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `eventSize` field. */
  eventSize?: InputMaybe<EventSize>
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['UUID']['input']>
}

/** A connection to a list of `PreferenceEventSize` values. */
export type PreferenceEventSizeConnection = {
  __typename?: 'PreferenceEventSizeConnection'
  /** A list of edges which contains the `PreferenceEventSize` and cursor to aid in pagination. */
  edges: Array<PreferenceEventSizeEdge>
  /** A list of `PreferenceEventSize` objects. */
  nodes: Array<PreferenceEventSize>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `PreferenceEventSize` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `PreferenceEventSize` edge in the connection. */
export type PreferenceEventSizeEdge = {
  __typename?: 'PreferenceEventSizeEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `PreferenceEventSize` at the end of the edge. */
  node: PreferenceEventSize
}

/** An input for mutations affecting `PreferenceEventSize` */
export type PreferenceEventSizeInput = {
  /** The account's internal id. */
  accountId: Scalars['UUID']['input']
  /** A preferred event size. */
  eventSize: EventSize
  rowId?: InputMaybe<Scalars['UUID']['input']>
}

/** Methods to use when ordering `PreferenceEventSize`. */
export enum PreferenceEventSizeOrderBy {
  AccountIdAsc = 'ACCOUNT_ID_ASC',
  AccountIdDesc = 'ACCOUNT_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC',
}

/** Mapping of account ids to upload ids. */
export type ProfilePicture = Node & {
  __typename?: 'ProfilePicture'
  /** Reads a single `Account` that is related to this `ProfilePicture`. */
  accountByAccountId?: Maybe<Account>
  /** The account's id. */
  accountId: Scalars['UUID']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output']
  /** The profile picture's internal id. */
  rowId: Scalars['UUID']['output']
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
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `uploadId` field. */
  uploadId?: InputMaybe<Scalars['UUID']['input']>
}

/** A connection to a list of `ProfilePicture` values. */
export type ProfilePictureConnection = {
  __typename?: 'ProfilePictureConnection'
  /** A list of edges which contains the `ProfilePicture` and cursor to aid in pagination. */
  edges: Array<ProfilePictureEdge>
  /** A list of `ProfilePicture` objects. */
  nodes: Array<ProfilePicture>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `ProfilePicture` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `ProfilePicture` edge in the connection. */
export type ProfilePictureEdge = {
  __typename?: 'ProfilePictureEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `ProfilePicture` at the end of the edge. */
  node: ProfilePicture
}

/** An input for mutations affecting `ProfilePicture` */
export type ProfilePictureInput = {
  /** The account's id. */
  accountId: Scalars['UUID']['input']
  /** The upload's id. */
  uploadId: Scalars['UUID']['input']
}

/** Methods to use when ordering `ProfilePicture`. */
export enum ProfilePictureOrderBy {
  AccountIdAsc = 'ACCOUNT_ID_ASC',
  AccountIdDesc = 'ACCOUNT_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC',
  UploadIdAsc = 'UPLOAD_ID_ASC',
  UploadIdDesc = 'UPLOAD_ID_DESC',
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

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: 'Query'
  /** Reads a single `Account` using its globally unique `ID`. */
  account?: Maybe<Account>
  /** Reads a single `AccountBlock` using its globally unique `ID`. */
  accountBlock?: Maybe<AccountBlock>
  /** Returns the id, username, and storage key of the profile picture, if it exists, of all accounts blocked by the invoker account. */
  accountBlockAccounts?: Maybe<AccountBlockAccountsConnection>
  /** Get a single `AccountBlock`. */
  accountBlockByCreatedByAndBlockedAccountId?: Maybe<AccountBlock>
  /** Get a single `AccountBlock`. */
  accountBlockByRowId?: Maybe<AccountBlock>
  /** Get a single `Account`. */
  accountByRowId?: Maybe<Account>
  /** Get a single `Account`. */
  accountByUsername?: Maybe<Account>
  /** Returns all accounts with a username containing a given substring. */
  accountSearch?: Maybe<AccountConnection>
  /** Reads a single `AccountSocialNetwork` using its globally unique `ID`. */
  accountSocialNetwork?: Maybe<AccountSocialNetwork>
  /** Get a single `AccountSocialNetwork`. */
  accountSocialNetworkByAccountIdAndSocialNetwork?: Maybe<AccountSocialNetwork>
  /** Gets the total upload quota in bytes for the invoking account. */
  accountUploadQuotaBytes?: Maybe<Scalars['BigInt']['output']>
  /** Reads a single `Achievement` using its globally unique `ID`. */
  achievement?: Maybe<Achievement>
  /** Get a single `Achievement`. */
  achievementByAccountIdAndAchievement?: Maybe<Achievement>
  /** Get a single `Achievement`. */
  achievementByRowId?: Maybe<Achievement>
  /** Reads a single `Address` using its globally unique `ID`. */
  address?: Maybe<Address>
  /** Get a single `Address`. */
  addressByRowId?: Maybe<Address>
  /** Reads and enables pagination through a set of `AccountBlock`. */
  allAccountBlocks?: Maybe<AccountBlockConnection>
  /** Reads and enables pagination through a set of `AccountSocialNetwork`. */
  allAccountSocialNetworks?: Maybe<AccountSocialNetworkConnection>
  /** Reads and enables pagination through a set of `Account`. */
  allAccounts?: Maybe<AccountConnection>
  /** Reads and enables pagination through a set of `Achievement`. */
  allAchievements?: Maybe<AchievementConnection>
  /** Reads and enables pagination through a set of `Address`. */
  allAddresses?: Maybe<AddressConnection>
  /** Reads and enables pagination through a set of `App`. */
  allApps?: Maybe<AppConnection>
  /** Reads and enables pagination through a set of `Attendance`. */
  allAttendances?: Maybe<AttendanceConnection>
  /** Reads and enables pagination through a set of `Contact`. */
  allContacts?: Maybe<ContactConnection>
  /** Reads and enables pagination through a set of `Device`. */
  allDevices?: Maybe<DeviceConnection>
  /** Reads and enables pagination through a set of `EventApp`. */
  allEventApps?: Maybe<EventAppConnection>
  /** Reads and enables pagination through a set of `EventCategory`. */
  allEventCategories?: Maybe<EventCategoryConnection>
  /** Reads and enables pagination through a set of `EventCategoryMapping`. */
  allEventCategoryMappings?: Maybe<EventCategoryMappingConnection>
  /** Reads and enables pagination through a set of `EventFavorite`. */
  allEventFavorites?: Maybe<EventFavoriteConnection>
  /** Reads and enables pagination through a set of `EventFormatMapping`. */
  allEventFormatMappings?: Maybe<EventFormatMappingConnection>
  /** Reads and enables pagination through a set of `EventFormat`. */
  allEventFormats?: Maybe<EventFormatConnection>
  /** Reads and enables pagination through a set of `EventRecommendation`. */
  allEventRecommendations?: Maybe<EventRecommendationConnection>
  /** Reads and enables pagination through a set of `EventUpload`. */
  allEventUploads?: Maybe<EventUploadConnection>
  /** Reads and enables pagination through a set of `Event`. */
  allEvents?: Maybe<EventConnection>
  /** Reads and enables pagination through a set of `Friendship`. */
  allFriendships?: Maybe<FriendshipConnection>
  /** Reads and enables pagination through a set of `GuestFlat`. */
  allGuestFlats?: Maybe<GuestFlatConnection>
  /** Reads and enables pagination through a set of `Guest`. */
  allGuests?: Maybe<GuestConnection>
  /** Reads and enables pagination through a set of `LegalTermAcceptance`. */
  allLegalTermAcceptances?: Maybe<LegalTermAcceptanceConnection>
  /** Reads and enables pagination through a set of `LegalTerm`. */
  allLegalTerms?: Maybe<LegalTermConnection>
  /** Reads and enables pagination through a set of `PreferenceEventCategory`. */
  allPreferenceEventCategories?: Maybe<PreferenceEventCategoryConnection>
  /** Reads and enables pagination through a set of `PreferenceEventFormat`. */
  allPreferenceEventFormats?: Maybe<PreferenceEventFormatConnection>
  /** Reads and enables pagination through a set of `PreferenceEventLocation`. */
  allPreferenceEventLocations?: Maybe<PreferenceEventLocationConnection>
  /** Reads and enables pagination through a set of `PreferenceEventSize`. */
  allPreferenceEventSizes?: Maybe<PreferenceEventSizeConnection>
  /** Reads and enables pagination through a set of `ProfilePicture`. */
  allProfilePictures?: Maybe<ProfilePictureConnection>
  /** Reads and enables pagination through a set of `Report`. */
  allReports?: Maybe<ReportConnection>
  /** Reads and enables pagination through a set of `Upload`. */
  allUploads?: Maybe<UploadConnection>
  /** Reads a single `App` using its globally unique `ID`. */
  app?: Maybe<App>
  /** Get a single `App`. */
  appByName?: Maybe<App>
  /** Get a single `App`. */
  appByRowId?: Maybe<App>
  /** Reads a single `Attendance` using its globally unique `ID`. */
  attendance?: Maybe<Attendance>
  /** Get a single `Attendance`. */
  attendanceByGuestId?: Maybe<Attendance>
  /** Get a single `Attendance`. */
  attendanceByRowId?: Maybe<Attendance>
  /** Returns the current attendance claims as UUID array. */
  attendanceClaimArray?: Maybe<Array<Maybe<Scalars['UUID']['output']>>>
  /** Reads a single `Contact` using its globally unique `ID`. */
  contact?: Maybe<Contact>
  /** Get a single `Contact`. */
  contactByCreatedByAndAccountId?: Maybe<Contact>
  /** Get a single `Contact`. */
  contactByRowId?: Maybe<Contact>
  /** Reads a single `Device` using its globally unique `ID`. */
  device?: Maybe<Device>
  /** Get a single `Device`. */
  deviceByCreatedByAndFcmToken?: Maybe<Device>
  /** Get a single `Device`. */
  deviceByRowId?: Maybe<Device>
  /** Reads a single `Event` using its globally unique `ID`. */
  event?: Maybe<Event>
  /** Reads a single `EventApp` using its globally unique `ID`. */
  eventApp?: Maybe<EventApp>
  /** Get a single `EventApp`. */
  eventAppByEventIdAndAppId?: Maybe<EventApp>
  /** Get a single `EventApp`. */
  eventAppByRowId?: Maybe<EventApp>
  /** Returns the event associated with the given attendance ID. */
  eventByAttendanceId?: Maybe<Event>
  /** Get a single `Event`. */
  eventByCreatedByAndSlug?: Maybe<Event>
  /** Get a single `Event`. */
  eventByRowId?: Maybe<Event>
  /** Reads a single `EventCategory` using its globally unique `ID`. */
  eventCategory?: Maybe<EventCategory>
  /** Get a single `EventCategory`. */
  eventCategoryByName?: Maybe<EventCategory>
  /** Get a single `EventCategory`. */
  eventCategoryByRowId?: Maybe<EventCategory>
  /** Reads a single `EventCategoryMapping` using its globally unique `ID`. */
  eventCategoryMapping?: Maybe<EventCategoryMapping>
  /** Get a single `EventCategoryMapping`. */
  eventCategoryMappingByEventIdAndCategoryId?: Maybe<EventCategoryMapping>
  /** Reads a single `EventFavorite` using its globally unique `ID`. */
  eventFavorite?: Maybe<EventFavorite>
  /** Get a single `EventFavorite`. */
  eventFavoriteByCreatedByAndEventId?: Maybe<EventFavorite>
  /** Get a single `EventFavorite`. */
  eventFavoriteByRowId?: Maybe<EventFavorite>
  /** Reads a single `EventFormat` using its globally unique `ID`. */
  eventFormat?: Maybe<EventFormat>
  /** Get a single `EventFormat`. */
  eventFormatByName?: Maybe<EventFormat>
  /** Get a single `EventFormat`. */
  eventFormatByRowId?: Maybe<EventFormat>
  /** Reads a single `EventFormatMapping` using its globally unique `ID`. */
  eventFormatMapping?: Maybe<EventFormatMapping>
  /** Get a single `EventFormatMapping`. */
  eventFormatMappingByEventIdAndFormatId?: Maybe<EventFormatMapping>
  /** Add a function that returns the maximum guest count of an accessible event. */
  eventGuestCountMaximum?: Maybe<Scalars['Int']['output']>
  /** Reads a single `EventRecommendation` using its globally unique `ID`. */
  eventRecommendation?: Maybe<EventRecommendation>
  /** Get a single `EventRecommendation`. */
  eventRecommendationByAccountIdAndEventId?: Maybe<EventRecommendation>
  /** Performs a full-text search on the event table based on the provided query and language, returning event IDs ordered by relevance. */
  eventSearch?: Maybe<EventConnection>
  /** Reads a single `EventUpload` using its globally unique `ID`. */
  eventUpload?: Maybe<EventUpload>
  /** Get a single `EventUpload`. */
  eventUploadByEventIdAndUploadId?: Maybe<EventUpload>
  /** Get a single `EventUpload`. */
  eventUploadByRowId?: Maybe<EventUpload>
  /** Reads a single `Friendship` using its globally unique `ID`. */
  friendship?: Maybe<Friendship>
  /** Get a single `Friendship`. */
  friendshipByAAccountIdAndBAccountId?: Maybe<Friendship>
  /** Get a single `Friendship`. */
  friendshipByRowId?: Maybe<Friendship>
  /** Reads a single `Guest` using its globally unique `ID`. */
  guest?: Maybe<Guest>
  /** Get a single `Guest`. */
  guestByEventIdAndContactId?: Maybe<Guest>
  /** Get a single `Guest`. */
  guestByRowId?: Maybe<Guest>
  /** Returns the current guest claims as UUID array. */
  guestClaimArray?: Maybe<Array<Maybe<Scalars['UUID']['output']>>>
  /** Returns contact ids that are accessible through guests. */
  guestContactIds?: Maybe<GuestContactIdsConnection>
  /** Returns the guest count for an event. */
  guestCount?: Maybe<Scalars['Int']['output']>
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  id: Scalars['ID']['output']
  /** Returns the session's account id. */
  invokerAccountId?: Maybe<Scalars['UUID']['output']>
  /** Maps an ISO language code to the corresponding PostgreSQL text search configuration. This function returns the appropriate text search configuration for supported languages, such as "german" for "de" and "english" for "en". If the language code is not explicitly handled, the function defaults to the "simple" configuration, which is a basic tokenizer that does not perform stemming or handle stop words. This ensures that full-text search can work with a wide range of languages even if specific optimizations are not available for some. */
  languageIsoFullTextSearch?: Maybe<Scalars['RegConfig']['output']>
  /** Reads a single `LegalTerm` using its globally unique `ID`. */
  legalTerm?: Maybe<LegalTerm>
  /** Reads a single `LegalTermAcceptance` using its globally unique `ID`. */
  legalTermAcceptance?: Maybe<LegalTermAcceptance>
  /** Get a single `LegalTermAcceptance`. */
  legalTermAcceptanceByRowId?: Maybe<LegalTermAcceptance>
  /** Get a single `LegalTerm`. */
  legalTermByLanguageAndVersion?: Maybe<LegalTerm>
  /** Get a single `LegalTerm`. */
  legalTermByRowId?: Maybe<LegalTerm>
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>
  /** Reads a single `PreferenceEventCategory` using its globally unique `ID`. */
  preferenceEventCategory?: Maybe<PreferenceEventCategory>
  /** Get a single `PreferenceEventCategory`. */
  preferenceEventCategoryByAccountIdAndCategoryId?: Maybe<PreferenceEventCategory>
  /** Get a single `PreferenceEventCategory`. */
  preferenceEventCategoryByRowId?: Maybe<PreferenceEventCategory>
  /** Reads a single `PreferenceEventFormat` using its globally unique `ID`. */
  preferenceEventFormat?: Maybe<PreferenceEventFormat>
  /** Get a single `PreferenceEventFormat`. */
  preferenceEventFormatByAccountIdAndFormatId?: Maybe<PreferenceEventFormat>
  /** Get a single `PreferenceEventFormat`. */
  preferenceEventFormatByRowId?: Maybe<PreferenceEventFormat>
  /** Reads a single `PreferenceEventLocation` using its globally unique `ID`. */
  preferenceEventLocation?: Maybe<PreferenceEventLocation>
  /** Get a single `PreferenceEventLocation`. */
  preferenceEventLocationByCreatedByAndLocationAndRadius?: Maybe<PreferenceEventLocation>
  /** Get a single `PreferenceEventLocation`. */
  preferenceEventLocationByRowId?: Maybe<PreferenceEventLocation>
  /** Reads a single `PreferenceEventSize` using its globally unique `ID`. */
  preferenceEventSize?: Maybe<PreferenceEventSize>
  /** Get a single `PreferenceEventSize`. */
  preferenceEventSizeByAccountIdAndEventSize?: Maybe<PreferenceEventSize>
  /** Get a single `PreferenceEventSize`. */
  preferenceEventSizeByRowId?: Maybe<PreferenceEventSize>
  /** Reads a single `ProfilePicture` using its globally unique `ID`. */
  profilePicture?: Maybe<ProfilePicture>
  /** Get a single `ProfilePicture`. */
  profilePictureByAccountId?: Maybe<ProfilePicture>
  /** Get a single `ProfilePicture`. */
  profilePictureByRowId?: Maybe<ProfilePicture>
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query
  /** Reads a single `Report` using its globally unique `ID`. */
  report?: Maybe<Report>
  /** Get a single `Report`. */
  reportByCreatedByAndTargetAccountIdAndTargetEventIdAndTargetUploadId?: Maybe<Report>
  /** Get a single `Report`. */
  reportByRowId?: Maybe<Report>
  /** Reads a single `Upload` using its globally unique `ID`. */
  upload?: Maybe<Upload>
  /** Get a single `Upload`. */
  uploadByRowId?: Maybe<Upload>
  /** Get a single `Upload`. */
  uploadByStorageKey?: Maybe<Upload>
}

/** The root query type which gives access points into the data universe. */
export type QueryAccountArgs = {
  id: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryAccountBlockArgs = {
  id: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryAccountBlockAccountsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
}

/** The root query type which gives access points into the data universe. */
export type QueryAccountBlockByCreatedByAndBlockedAccountIdArgs = {
  blockedAccountId: Scalars['UUID']['input']
  createdBy: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryAccountBlockByRowIdArgs = {
  rowId: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryAccountByRowIdArgs = {
  rowId: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryAccountByUsernameArgs = {
  username: Scalars['String']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryAccountSearchArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  searchString?: InputMaybe<Scalars['String']['input']>
}

/** The root query type which gives access points into the data universe. */
export type QueryAccountSocialNetworkArgs = {
  id: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryAccountSocialNetworkByAccountIdAndSocialNetworkArgs = {
  accountId: Scalars['UUID']['input']
  socialNetwork: SocialNetwork
}

/** The root query type which gives access points into the data universe. */
export type QueryAchievementArgs = {
  id: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryAchievementByAccountIdAndAchievementArgs = {
  accountId: Scalars['UUID']['input']
  achievement: AchievementType
}

/** The root query type which gives access points into the data universe. */
export type QueryAchievementByRowIdArgs = {
  rowId: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryAddressArgs = {
  id: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryAddressByRowIdArgs = {
  rowId: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryAllAccountBlocksArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<AccountBlockCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<AccountBlockOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllAccountSocialNetworksArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<AccountSocialNetworkCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<AccountSocialNetworkOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllAccountsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<AccountCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<AccountOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllAchievementsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<AchievementCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<AchievementOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllAddressesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<AddressCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<AddressOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllAppsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<AppCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<AppOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllAttendancesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<AttendanceCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<AttendanceOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllContactsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<ContactCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<ContactOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllDevicesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<DeviceCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<DeviceOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllEventAppsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventAppCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<EventAppOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllEventCategoriesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventCategoryCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<EventCategoryOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllEventCategoryMappingsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventCategoryMappingCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<EventCategoryMappingOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllEventFavoritesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventFavoriteCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<EventFavoriteOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllEventFormatMappingsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventFormatMappingCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<EventFormatMappingOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllEventFormatsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventFormatCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<EventFormatOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllEventRecommendationsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventRecommendationCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<EventRecommendationOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllEventUploadsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventUploadCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<EventUploadOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllEventsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<EventOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllFriendshipsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<FriendshipCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<FriendshipOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllGuestFlatsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<GuestFlatCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<GuestFlatOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllGuestsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<GuestCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<GuestOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllLegalTermAcceptancesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<LegalTermAcceptanceCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<LegalTermAcceptanceOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllLegalTermsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<LegalTermCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<LegalTermOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllPreferenceEventCategoriesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<PreferenceEventCategoryCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<PreferenceEventCategoryOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllPreferenceEventFormatsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<PreferenceEventFormatCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<PreferenceEventFormatOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllPreferenceEventLocationsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<PreferenceEventLocationCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<PreferenceEventLocationOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllPreferenceEventSizesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<PreferenceEventSizeCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<PreferenceEventSizeOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllProfilePicturesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<ProfilePictureCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<ProfilePictureOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllReportsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<ReportCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<ReportOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllUploadsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<UploadCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<UploadOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAppArgs = {
  id: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryAppByNameArgs = {
  name: Scalars['String']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryAppByRowIdArgs = {
  rowId: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryAttendanceArgs = {
  id: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryAttendanceByGuestIdArgs = {
  guestId: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryAttendanceByRowIdArgs = {
  rowId: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryContactArgs = {
  id: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryContactByCreatedByAndAccountIdArgs = {
  accountId: Scalars['UUID']['input']
  createdBy: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryContactByRowIdArgs = {
  rowId: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryDeviceArgs = {
  id: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryDeviceByCreatedByAndFcmTokenArgs = {
  createdBy: Scalars['UUID']['input']
  fcmToken: Scalars['String']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryDeviceByRowIdArgs = {
  rowId: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventArgs = {
  id: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventAppArgs = {
  id: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventAppByEventIdAndAppIdArgs = {
  appId: Scalars['UUID']['input']
  eventId: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventAppByRowIdArgs = {
  rowId: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventByAttendanceIdArgs = {
  attendanceId: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventByCreatedByAndSlugArgs = {
  createdBy: Scalars['UUID']['input']
  slug: Scalars['String']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventByRowIdArgs = {
  rowId: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventCategoryArgs = {
  id: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventCategoryByNameArgs = {
  name: Scalars['String']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventCategoryByRowIdArgs = {
  rowId: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventCategoryMappingArgs = {
  id: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventCategoryMappingByEventIdAndCategoryIdArgs = {
  categoryId: Scalars['UUID']['input']
  eventId: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventFavoriteArgs = {
  id: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventFavoriteByCreatedByAndEventIdArgs = {
  createdBy: Scalars['UUID']['input']
  eventId: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventFavoriteByRowIdArgs = {
  rowId: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventFormatArgs = {
  id: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventFormatByNameArgs = {
  name: Scalars['String']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventFormatByRowIdArgs = {
  rowId: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventFormatMappingArgs = {
  id: Scalars['ID']['input']
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
  id: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventRecommendationByAccountIdAndEventIdArgs = {
  accountId: Scalars['UUID']['input']
  eventId: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventSearchArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  language?: InputMaybe<Language>
  offset?: InputMaybe<Scalars['Int']['input']>
  query?: InputMaybe<Scalars['String']['input']>
}

/** The root query type which gives access points into the data universe. */
export type QueryEventUploadArgs = {
  id: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventUploadByEventIdAndUploadIdArgs = {
  eventId: Scalars['UUID']['input']
  uploadId: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventUploadByRowIdArgs = {
  rowId: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryFriendshipArgs = {
  id: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryFriendshipByAAccountIdAndBAccountIdArgs = {
  aAccountId: Scalars['UUID']['input']
  bAccountId: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryFriendshipByRowIdArgs = {
  rowId: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryGuestArgs = {
  id: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryGuestByEventIdAndContactIdArgs = {
  contactId: Scalars['UUID']['input']
  eventId: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryGuestByRowIdArgs = {
  rowId: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryGuestContactIdsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
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
  id: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryLegalTermAcceptanceArgs = {
  id: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryLegalTermAcceptanceByRowIdArgs = {
  rowId: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryLegalTermByLanguageAndVersionArgs = {
  language: Scalars['String']['input']
  version: Scalars['String']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryLegalTermByRowIdArgs = {
  rowId: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  id: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryPreferenceEventCategoryArgs = {
  id: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryPreferenceEventCategoryByAccountIdAndCategoryIdArgs = {
  accountId: Scalars['UUID']['input']
  categoryId: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryPreferenceEventCategoryByRowIdArgs = {
  rowId: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryPreferenceEventFormatArgs = {
  id: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryPreferenceEventFormatByAccountIdAndFormatIdArgs = {
  accountId: Scalars['UUID']['input']
  formatId: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryPreferenceEventFormatByRowIdArgs = {
  rowId: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryPreferenceEventLocationArgs = {
  id: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryPreferenceEventLocationByCreatedByAndLocationAndRadiusArgs = {
  createdBy: Scalars['UUID']['input']
  location: Scalars['GeoJSON']['input']
  radius: Scalars['Float']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryPreferenceEventLocationByRowIdArgs = {
  rowId: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryPreferenceEventSizeArgs = {
  id: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryPreferenceEventSizeByAccountIdAndEventSizeArgs = {
  accountId: Scalars['UUID']['input']
  eventSize: EventSize
}

/** The root query type which gives access points into the data universe. */
export type QueryPreferenceEventSizeByRowIdArgs = {
  rowId: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryProfilePictureArgs = {
  id: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryProfilePictureByAccountIdArgs = {
  accountId: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryProfilePictureByRowIdArgs = {
  rowId: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryReportArgs = {
  id: Scalars['ID']['input']
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
export type QueryReportByRowIdArgs = {
  rowId: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryUploadArgs = {
  id: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryUploadByRowIdArgs = {
  rowId: Scalars['UUID']['input']
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
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output']
  /** The reason for the report, provided by the reporting user. Must be non-empty and not exceed 2,000 characters. */
  reason: Scalars['String']['output']
  /** Unique identifier for the report, generated randomly using UUIDs. */
  rowId: Scalars['UUID']['output']
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
  /** Checks for equality with the object’s `createdBy` field. */
  createdBy?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `targetAccountId` field. */
  targetAccountId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `targetEventId` field. */
  targetEventId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `targetUploadId` field. */
  targetUploadId?: InputMaybe<Scalars['UUID']['input']>
}

/** A connection to a list of `Report` values. */
export type ReportConnection = {
  __typename?: 'ReportConnection'
  /** A list of edges which contains the `Report` and cursor to aid in pagination. */
  edges: Array<ReportEdge>
  /** A list of `Report` objects. */
  nodes: Array<Report>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `Report` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `Report` edge in the connection. */
export type ReportEdge = {
  __typename?: 'ReportEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `Report` at the end of the edge. */
  node: Report
}

/** An input for mutations affecting `Report` */
export type ReportInput = {
  /** The ID of the user who created the report. */
  createdBy: Scalars['UUID']['input']
  /** The reason for the report, provided by the reporting user. Must be non-empty and not exceed 2,000 characters. */
  reason: Scalars['String']['input']
  /** The ID of the account being reported, if applicable. */
  targetAccountId?: InputMaybe<Scalars['UUID']['input']>
  /** The ID of the event being reported, if applicable. */
  targetEventId?: InputMaybe<Scalars['UUID']['input']>
  /** The ID of the upload being reported, if applicable. */
  targetUploadId?: InputMaybe<Scalars['UUID']['input']>
}

/** Methods to use when ordering `Report`. */
export enum ReportOrderBy {
  CreatedByAsc = 'CREATED_BY_ASC',
  CreatedByDesc = 'CREATED_BY_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC',
  TargetAccountIdAsc = 'TARGET_ACCOUNT_ID_ASC',
  TargetAccountIdDesc = 'TARGET_ACCOUNT_ID_DESC',
  TargetEventIdAsc = 'TARGET_EVENT_ID_ASC',
  TargetEventIdDesc = 'TARGET_EVENT_ID_DESC',
  TargetUploadIdAsc = 'TARGET_UPLOAD_ID_ASC',
  TargetUploadIdDesc = 'TARGET_UPLOAD_ID_DESC',
}

/** Social networks. */
export enum SocialNetwork {
  Facebook = 'facebook',
  Instagram = 'instagram',
  Tiktok = 'tiktok',
  X = 'x',
}

/** All input for the `updateAccountByRowId` mutation. */
export type UpdateAccountByRowIdInput = {
  /** An object where the defined keys will be set on the `Account` being updated. */
  accountPatch: AccountPatch
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The account's internal id. */
  rowId: Scalars['UUID']['input']
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
  /** The account's username. Must be alphanumeric with hyphens and not exceed 100 characters. */
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
  id: Scalars['ID']['input']
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
  accountEdge?: Maybe<AccountEdge>
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
  orderBy?: Array<AccountOrderBy>
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
  id: Scalars['ID']['input']
}

/** The output of our update `AccountSocialNetwork` mutation. */
export type UpdateAccountSocialNetworkPayload = {
  __typename?: 'UpdateAccountSocialNetworkPayload'
  /** The `AccountSocialNetwork` that was updated by this mutation. */
  accountSocialNetwork?: Maybe<AccountSocialNetwork>
  /** An edge for our `AccountSocialNetwork`. May be used by Relay 1. */
  accountSocialNetworkEdge?: Maybe<AccountSocialNetworkEdge>
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
  orderBy?: Array<AccountSocialNetworkOrderBy>
}

/** All input for the `updateAddressByRowId` mutation. */
export type UpdateAddressByRowIdInput = {
  /** An object where the defined keys will be set on the `Address` being updated. */
  addressPatch: AddressPatch
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Primary key, uniquely identifies each address. */
  rowId: Scalars['UUID']['input']
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
  id: Scalars['ID']['input']
}

/** The output of our update `Address` mutation. */
export type UpdateAddressPayload = {
  __typename?: 'UpdateAddressPayload'
  /** The `Address` that was updated by this mutation. */
  address?: Maybe<Address>
  /** An edge for our `Address`. May be used by Relay 1. */
  addressEdge?: Maybe<AddressEdge>
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
  orderBy?: Array<AddressOrderBy>
}

/** All input for the `updateAttendanceByGuestId` mutation. */
export type UpdateAttendanceByGuestIdInput = {
  /** An object where the defined keys will be set on the `Attendance` being updated. */
  attendancePatch: AttendancePatch
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Who this entry is for. */
  guestId: Scalars['UUID']['input']
}

/** All input for the `updateAttendanceByRowId` mutation. */
export type UpdateAttendanceByRowIdInput = {
  /** An object where the defined keys will be set on the `Attendance` being updated. */
  attendancePatch: AttendancePatch
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** A unique reference for this entry. */
  rowId: Scalars['UUID']['input']
}

/** All input for the `updateAttendance` mutation. */
export type UpdateAttendanceInput = {
  /** An object where the defined keys will be set on the `Attendance` being updated. */
  attendancePatch: AttendancePatch
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `Attendance` to be updated. */
  id: Scalars['ID']['input']
}

/** The output of our update `Attendance` mutation. */
export type UpdateAttendancePayload = {
  __typename?: 'UpdateAttendancePayload'
  /** The `Attendance` that was updated by this mutation. */
  attendance?: Maybe<Attendance>
  /** An edge for our `Attendance`. May be used by Relay 1. */
  attendanceEdge?: Maybe<AttendanceEdge>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our update `Attendance` mutation. */
export type UpdateAttendancePayloadAttendanceEdgeArgs = {
  orderBy?: Array<AttendanceOrderBy>
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

/** All input for the `updateContactByRowId` mutation. */
export type UpdateContactByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `Contact` being updated. */
  contactPatch: ContactPatch
  /** Primary key, uniquely identifies each contact. */
  rowId: Scalars['UUID']['input']
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
  id: Scalars['ID']['input']
}

/** The output of our update `Contact` mutation. */
export type UpdateContactPayload = {
  __typename?: 'UpdateContactPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `Contact` that was updated by this mutation. */
  contact?: Maybe<Contact>
  /** An edge for our `Contact`. May be used by Relay 1. */
  contactEdge?: Maybe<ContactEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our update `Contact` mutation. */
export type UpdateContactPayloadContactEdgeArgs = {
  orderBy?: Array<ContactOrderBy>
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
  /** The Firebase Cloud Messaging token of the device that's used to deliver notifications. Must be non-empty and not exceed 300 characters. */
  fcmToken: Scalars['String']['input']
}

/** All input for the `updateDeviceByRowId` mutation. */
export type UpdateDeviceByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `Device` being updated. */
  devicePatch: DevicePatch
  /** The internal id of the device. */
  rowId: Scalars['UUID']['input']
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
  id: Scalars['ID']['input']
}

/** The output of our update `Device` mutation. */
export type UpdateDevicePayload = {
  __typename?: 'UpdateDevicePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `Device` that was updated by this mutation. */
  device?: Maybe<Device>
  /** An edge for our `Device`. May be used by Relay 1. */
  deviceEdge?: Maybe<DeviceEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our update `Device` mutation. */
export type UpdateDevicePayloadDeviceEdgeArgs = {
  orderBy?: Array<DeviceOrderBy>
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
  /** The event's name, slugified. Must be alphanumeric with hyphens and not exceed 100 characters. */
  slug: Scalars['String']['input']
}

/** All input for the `updateEventByRowId` mutation. */
export type UpdateEventByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `Event` being updated. */
  eventPatch: EventPatch
  /** The event's internal id. */
  rowId: Scalars['UUID']['input']
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
  id: Scalars['ID']['input']
}

/** The output of our update `Event` mutation. */
export type UpdateEventPayload = {
  __typename?: 'UpdateEventPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `Event` that was updated by this mutation. */
  event?: Maybe<Event>
  /** An edge for our `Event`. May be used by Relay 1. */
  eventEdge?: Maybe<EventEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our update `Event` mutation. */
export type UpdateEventPayloadEventEdgeArgs = {
  orderBy?: Array<EventOrderBy>
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

/** All input for the `updateFriendshipByRowId` mutation. */
export type UpdateFriendshipByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `Friendship` being updated. */
  friendshipPatch: FriendshipPatch
  /** The friend relation's internal id. */
  rowId: Scalars['UUID']['input']
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
  id: Scalars['ID']['input']
}

/** The output of our update `Friendship` mutation. */
export type UpdateFriendshipPayload = {
  __typename?: 'UpdateFriendshipPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `Friendship` that was updated by this mutation. */
  friendship?: Maybe<Friendship>
  /** An edge for our `Friendship`. May be used by Relay 1. */
  friendshipEdge?: Maybe<FriendshipEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our update `Friendship` mutation. */
export type UpdateFriendshipPayloadFriendshipEdgeArgs = {
  orderBy?: Array<FriendshipOrderBy>
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

/** All input for the `updateGuestByRowId` mutation. */
export type UpdateGuestByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `Guest` being updated. */
  guestPatch: GuestPatch
  /** The guest's internal id. */
  rowId: Scalars['UUID']['input']
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
  id: Scalars['ID']['input']
}

/** The output of our update `Guest` mutation. */
export type UpdateGuestPayload = {
  __typename?: 'UpdateGuestPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `Guest` that was updated by this mutation. */
  guest?: Maybe<Guest>
  /** An edge for our `Guest`. May be used by Relay 1. */
  guestEdge?: Maybe<GuestEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our update `Guest` mutation. */
export type UpdateGuestPayloadGuestEdgeArgs = {
  orderBy?: Array<GuestOrderBy>
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

/** All input for the `updateProfilePictureByRowId` mutation. */
export type UpdateProfilePictureByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `ProfilePicture` being updated. */
  profilePicturePatch: ProfilePicturePatch
  /** The profile picture's internal id. */
  rowId: Scalars['UUID']['input']
}

/** All input for the `updateProfilePicture` mutation. */
export type UpdateProfilePictureInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `ProfilePicture` to be updated. */
  id: Scalars['ID']['input']
  /** An object where the defined keys will be set on the `ProfilePicture` being updated. */
  profilePicturePatch: ProfilePicturePatch
}

/** The output of our update `ProfilePicture` mutation. */
export type UpdateProfilePicturePayload = {
  __typename?: 'UpdateProfilePicturePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `ProfilePicture` that was updated by this mutation. */
  profilePicture?: Maybe<ProfilePicture>
  /** An edge for our `ProfilePicture`. May be used by Relay 1. */
  profilePictureEdge?: Maybe<ProfilePictureEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our update `ProfilePicture` mutation. */
export type UpdateProfilePicturePayloadProfilePictureEdgeArgs = {
  orderBy?: Array<ProfilePictureOrderBy>
}

/** All input for the `updateUploadByRowId` mutation. */
export type UpdateUploadByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The upload's internal id. */
  rowId: Scalars['UUID']['input']
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
  id: Scalars['ID']['input']
  /** An object where the defined keys will be set on the `Upload` being updated. */
  uploadPatch: UploadPatch
}

/** The output of our update `Upload` mutation. */
export type UpdateUploadPayload = {
  __typename?: 'UpdateUploadPayload'
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
  uploadEdge?: Maybe<UploadEdge>
}

/** The output of our update `Upload` mutation. */
export type UpdateUploadPayloadUploadEdgeArgs = {
  orderBy?: Array<UploadOrderBy>
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
  eventUploadsByUploadId: EventUploadConnection
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output']
  /** The name of the uploaded file. Must be non-empty and not exceed 300 characters. */
  name?: Maybe<Scalars['String']['output']>
  /** Reads and enables pagination through a set of `ProfilePicture`. */
  profilePicturesByUploadId: ProfilePictureConnection
  /** Reads and enables pagination through a set of `Report`. */
  reportsByTargetUploadId: ReportConnection
  /** The upload's internal id. */
  rowId: Scalars['UUID']['output']
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
  orderBy?: InputMaybe<Array<EventUploadOrderBy>>
}

/** An upload. */
export type UploadProfilePicturesByUploadIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<ProfilePictureCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<ProfilePictureOrderBy>>
}

/** An upload. */
export type UploadReportsByTargetUploadIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<ReportCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<ReportOrderBy>>
}

/** A condition to be used against `Upload` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type UploadCondition = {
  /** Checks for equality with the object’s `createdBy` field. */
  createdBy?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `storageKey` field. */
  storageKey?: InputMaybe<Scalars['String']['input']>
}

/** A connection to a list of `Upload` values. */
export type UploadConnection = {
  __typename?: 'UploadConnection'
  /** A list of edges which contains the `Upload` and cursor to aid in pagination. */
  edges: Array<UploadEdge>
  /** A list of `Upload` objects. */
  nodes: Array<Upload>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `Upload` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `Upload` edge in the connection. */
export type UploadEdge = {
  __typename?: 'UploadEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `Upload` at the end of the edge. */
  node: Upload
}

/** An input for mutations affecting `Upload` */
export type UploadInput = {
  /** The uploader's account id. */
  createdBy: Scalars['UUID']['input']
  /** The name of the uploaded file. Must be non-empty and not exceed 300 characters. */
  name?: InputMaybe<Scalars['String']['input']>
  /** The upload's size in bytes. */
  sizeByte: Scalars['BigInt']['input']
}

/** Methods to use when ordering `Upload`. */
export enum UploadOrderBy {
  CreatedByAsc = 'CREATED_BY_ASC',
  CreatedByDesc = 'CREATED_BY_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC',
  StorageKeyAsc = 'STORAGE_KEY_ASC',
  StorageKeyDesc = 'STORAGE_KEY_DESC',
}

/** Represents an update to a `Upload`. Fields that are set will be updated. */
export type UploadPatch = {
  /** The uploader's account id. */
  createdBy?: InputMaybe<Scalars['UUID']['input']>
  /** The name of the uploaded file. Must be non-empty and not exceed 300 characters. */
  name?: InputMaybe<Scalars['String']['input']>
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

export type AccountByRowIdQueryVariables = Exact<{
  id: Scalars['UUID']['input']
}>

export type AccountByRowIdQuery = {
  __typename?: 'Query'
  accountByRowId?: {
    __typename?: 'Account'
    id: string
    rowId: string
    username: string
    profilePictureByAccountId?: {
      __typename?: 'ProfilePicture'
      id: string
      rowId: string
      uploadByUploadId?: {
        __typename?: 'Upload'
        id: string
        rowId: string
        storageKey?: string | null
      } | null
    } | null
  } | null
}

export type AccountSearchQueryVariables = Exact<{
  after?: InputMaybe<Scalars['Cursor']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  username?: InputMaybe<Scalars['String']['input']>
}>

export type AccountSearchQuery = {
  __typename?: 'Query'
  allAccounts?: {
    __typename?: 'AccountConnection'
    nodes: Array<{
      __typename?: 'Account'
      id: string
      rowId: string
      username: string
    }>
    pageInfo: {
      __typename?: 'PageInfo'
      endCursor?: string | null
      hasNextPage: boolean
    }
  } | null
}

export type DeleteAccountBlockMutationVariables = Exact<{
  blockedAccountId: Scalars['UUID']['input']
  createdBy: Scalars['UUID']['input']
}>

export type DeleteAccountBlockMutation = {
  __typename?: 'Mutation'
  deleteAccountBlockByCreatedByAndBlockedAccountId?: {
    __typename?: 'DeleteAccountBlockPayload'
    clientMutationId?: string | null
  } | null
}

export type AttendanceGuestQueryVariables = Exact<{
  id: Scalars['UUID']['input']
}>

export type AttendanceGuestQuery = {
  __typename?: 'Query'
  guestByRowId?: {
    __typename?: 'Guest'
    feedback?: InvitationFeedback | null
    id: string
    rowId: string
    contactByContactId?: {
      __typename?: 'Contact'
      firstName?: string | null
      id: string
      lastName?: string | null
      language?: Language | null
      nickname?: string | null
      rowId: string
      accountByAccountId?: {
        __typename?: 'Account'
        id: string
        rowId: string
        username: string
      } | null
    } | null
    attendanceByGuestId?: {
      __typename?: 'Attendance'
      checkedOut?: boolean | null
      id: string
      rowId: string
      updatedAt?: any | null
    } | null
  } | null
}

export type AllLegalTermsQueryVariables = Exact<{
  language?: InputMaybe<Scalars['String']['input']>
}>

export type AllLegalTermsQuery = {
  __typename?: 'Query'
  allLegalTerms?: {
    __typename?: 'LegalTermConnection'
    nodes: Array<{
      __typename?: 'LegalTerm'
      id: string
      rowId: string
      term: string
    }>
  } | null
}

export type EventListQueryVariables = Exact<{
  after?: InputMaybe<Scalars['Cursor']['input']>
  first: Scalars['Int']['input']
}>

export type EventListQuery = {
  __typename?: 'Query'
  allEvents?: {
    __typename?: 'EventConnection'
    totalCount: number
    nodes: Array<{
      __typename?: 'Event'
      id: string
      name: string
      rowId: string
      slug: string
      start: any
      accountByCreatedBy?: {
        __typename?: 'Account'
        id: string
        rowId: string
        username: string
      } | null
      addressByAddressId?: {
        __typename?: 'Address'
        id: string
        rowId: string
        location?: {
          __typename?: 'GeographyPoint'
          latitude: number
          longitude: number
        } | null
      } | null
      eventFavoritesByEventId: {
        __typename?: 'EventFavoriteConnection'
        nodes: Array<{
          __typename?: 'EventFavorite'
          id: string
          createdBy: string
          rowId: string
        }>
      }
      guestsByEventId: {
        __typename?: 'GuestConnection'
        nodes: Array<{
          __typename?: 'Guest'
          id: string
          rowId: string
          contactByContactId?: {
            __typename?: 'Contact'
            accountId?: string | null
            id: string
            rowId: string
          } | null
        }>
      }
    }>
    pageInfo: {
      __typename?: 'PageInfo'
      hasNextPage: boolean
      endCursor?: string | null
    }
  } | null
}

export type EventSearchQueryVariables = Exact<{
  after?: InputMaybe<Scalars['Cursor']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  language?: InputMaybe<Language>
  query?: InputMaybe<Scalars['String']['input']>
}>

export type EventSearchQuery = {
  __typename?: 'Query'
  eventSearch?: {
    __typename?: 'EventConnection'
    totalCount: number
    nodes: Array<{
      __typename?: 'Event'
      id: string
      name: string
      rowId: string
      slug: string
      start: any
      accountByCreatedBy?: {
        __typename?: 'Account'
        id: string
        rowId: string
        username: string
      } | null
      addressByAddressId?: {
        __typename?: 'Address'
        id: string
        rowId: string
        location?: {
          __typename?: 'GeographyPoint'
          latitude: number
          longitude: number
        } | null
      } | null
      eventFavoritesByEventId: {
        __typename?: 'EventFavoriteConnection'
        nodes: Array<{
          __typename?: 'EventFavorite'
          createdBy: string
          id: string
          rowId: string
        }>
      }
      guestsByEventId: {
        __typename?: 'GuestConnection'
        nodes: Array<{
          __typename?: 'Guest'
          id: string
          rowId: string
          contactByContactId?: {
            __typename?: 'Contact'
            accountId?: string | null
            id: string
            rowId: string
          } | null
        }>
      }
    }>
    pageInfo: {
      __typename?: 'PageInfo'
      hasNextPage: boolean
      endCursor?: string | null
    }
  } | null
}

export type CreateEventFavoriteMutationVariables = Exact<{
  input: EventFavoriteInput
}>

export type CreateEventFavoriteMutation = {
  __typename?: 'Mutation'
  createEventFavorite?: {
    __typename?: 'CreateEventFavoritePayload'
    eventFavorite?: {
      __typename?: 'EventFavorite'
      createdBy: string
      eventId: string
      id: string
      rowId: string
    } | null
  } | null
}

export type DeleteEventFavoriteByRowIdMutationVariables = Exact<{
  input: DeleteEventFavoriteInput
}>

export type DeleteEventFavoriteByRowIdMutation = {
  __typename?: 'Mutation'
  deleteEventFavorite?: {
    __typename?: 'DeleteEventFavoritePayload'
    clientMutationId?: string | null
  } | null
}

export type AllPreferenceEventSizesQueryVariables = Exact<{
  [key: string]: never
}>

export type AllPreferenceEventSizesQuery = {
  __typename?: 'Query'
  allPreferenceEventSizes?: {
    __typename?: 'PreferenceEventSizeConnection'
    nodes: Array<{
      __typename?: 'PreferenceEventSize'
      eventSize: EventSize
      id: string
      rowId: string
    }>
  } | null
}

export type AccountEditQueryVariables = Exact<{
  username: Scalars['String']['input']
}>

export type AccountEditQuery = {
  __typename?: 'Query'
  accountByUsername?: {
    __typename?: 'Account'
    description?: string | null
    id: string
    imprintUrl?: string | null
    rowId: string
    username: string
    profilePictureByAccountId?: {
      __typename?: 'ProfilePicture'
      id: string
      rowId: string
      uploadByUploadId?: {
        __typename?: 'Upload'
        id: string
        rowId: string
        storageKey?: string | null
      } | null
    } | null
  } | null
}

export type CreateProfilePictureMutationVariables = Exact<{
  input: ProfilePictureInput
}>

export type CreateProfilePictureMutation = {
  __typename?: 'Mutation'
  createProfilePicture?: {
    __typename?: 'CreateProfilePicturePayload'
    profilePicture?: {
      __typename?: 'ProfilePicture'
      id: string
      rowId: string
      uploadId: string
      accountByAccountId?: {
        __typename?: 'Account'
        id: string
        rowId: string
        profilePictureByAccountId?: {
          __typename?: 'ProfilePicture'
          id: string
          rowId: string
        } | null
      } | null
    } | null
  } | null
}

export type DeleteProfilePictureByRowIdMutationMutationVariables = Exact<{
  id: Scalars['UUID']['input']
}>

export type DeleteProfilePictureByRowIdMutationMutation = {
  __typename?: 'Mutation'
  deleteProfilePictureByRowId?: {
    __typename?: 'DeleteProfilePicturePayload'
    clientMutationId?: string | null
  } | null
}

export type UpdateAccountByRowIdMutationVariables = Exact<{
  id: Scalars['UUID']['input']
  accountPatch: AccountPatch
}>

export type UpdateAccountByRowIdMutation = {
  __typename?: 'Mutation'
  updateAccountByRowId?: {
    __typename?: 'UpdateAccountPayload'
    account?: {
      __typename?: 'Account'
      description?: string | null
      id: string
      imprintUrl?: string | null
      rowId: string
    } | null
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

export type AccountBlockAccountsQueryVariables = Exact<{ [key: string]: never }>

export type AccountBlockAccountsQuery = {
  __typename?: 'Query'
  accountBlockAccounts?: {
    __typename?: 'AccountBlockAccountsConnection'
    nodes: Array<{
      __typename?: 'AccountBlockAccountsRecord'
      id?: string | null
      storageKey?: string | null
      username?: string | null
    }>
  } | null
}

export type AccountQueryVariables = Exact<{
  username: Scalars['String']['input']
}>

export type AccountQuery = {
  __typename?: 'Query'
  accountByUsername?: {
    __typename?: 'Account'
    description?: string | null
    id: string
    imprintUrl?: string | null
    rowId: string
    achievementsByAccountId: {
      __typename?: 'AchievementConnection'
      nodes: Array<{
        __typename?: 'Achievement'
        achievement: AchievementType
        id: string
        rowId: string
      }>
    }
    eventsByCreatedBy: {
      __typename?: 'EventConnection'
      totalCount: number
      nodes: Array<{
        __typename?: 'Event'
        id: string
        name: string
        rowId: string
        slug: string
        start: any
        eventFavoritesByEventId: {
          __typename?: 'EventFavoriteConnection'
          nodes: Array<{
            __typename?: 'EventFavorite'
            createdBy: string
            id: string
            rowId: string
          }>
        }
        guestsByEventId: {
          __typename?: 'GuestConnection'
          nodes: Array<{
            __typename?: 'Guest'
            id: string
            rowId: string
            contactByContactId?: {
              __typename?: 'Contact'
              accountId?: string | null
              id: string
              rowId: string
            } | null
          }>
        }
      }>
    }
  } | null
}

export type AttendanceQueryVariables = Exact<{
  id: Scalars['UUID']['input']
}>

export type AttendanceQuery = {
  __typename?: 'Query'
  attendanceByRowId?: {
    __typename?: 'Attendance'
    checkedOut?: boolean | null
    id: string
    rowId: string
    updatedAt?: any | null
    contactByContactId?: {
      __typename?: 'Contact'
      firstName?: string | null
      id: string
      lastName?: string | null
      language?: Language | null
      nickname?: string | null
      rowId: string
      accountByAccountId?: {
        __typename?: 'Account'
        id: string
        rowId: string
        username: string
      } | null
    } | null
    guestByGuestId?: { __typename?: 'Guest'; id: string; rowId: string } | null
  } | null
  eventByAttendanceId?: {
    __typename?: 'Event'
    id: string
    name: string
    rowId: string
    eventAppsByEventId: {
      __typename?: 'EventAppConnection'
      nodes: Array<{
        __typename?: 'EventApp'
        id: string
        rowId: string
        appByAppId?: {
          __typename?: 'App'
          iconSvg: string
          id: string
          name: string
          rowId: string
          url: string
          urlAttendance: string
        } | null
      }>
    }
  } | null
}

export type AttendanceCheckOutMutationVariables = Exact<{
  id: Scalars['UUID']['input']
  attendancePatch: AttendancePatch
}>

export type AttendanceCheckOutMutation = {
  __typename?: 'Mutation'
  updateAttendanceByRowId?: {
    __typename?: 'UpdateAttendancePayload'
    attendance?: {
      __typename?: 'Attendance'
      id: string
      checkedOut?: boolean | null
      rowId: string
    } | null
  } | null
}

export type DashboardEventRecommendationsQueryVariables = Exact<{
  id: Scalars['UUID']['input']
}>

export type DashboardEventRecommendationsQuery = {
  __typename?: 'Query'
  eventByRowId?: {
    __typename?: 'Event'
    id: string
    name: string
    rowId: string
    slug: string
    start: any
    accountByCreatedBy?: {
      __typename?: 'Account'
      id: string
      rowId: string
      username: string
    } | null
    addressByAddressId?: {
      __typename?: 'Address'
      id: string
      rowId: string
      location?: {
        __typename?: 'GeographyPoint'
        latitude: number
        longitude: number
      } | null
    } | null
    eventFavoritesByEventId: {
      __typename?: 'EventFavoriteConnection'
      nodes: Array<{
        __typename?: 'EventFavorite'
        createdBy: string
        id: string
        rowId: string
      }>
    }
    guestsByEventId: {
      __typename?: 'GuestConnection'
      nodes: Array<{
        __typename?: 'Guest'
        id: string
        rowId: string
        contactByContactId?: {
          __typename?: 'Contact'
          accountId?: string | null
          id: string
          rowId: string
        } | null
      }>
    }
  } | null
}

export type DashboardEventUpcomingQueryVariables = Exact<{
  createdBy: Scalars['UUID']['input']
}>

export type DashboardEventUpcomingQuery = {
  __typename?: 'Query'
  allEvents?: {
    __typename?: 'EventConnection'
    nodes: Array<{
      __typename?: 'Event'
      end?: any | null
      id: string
      name: string
      rowId: string
      slug: string
      start: any
      accountByCreatedBy?: {
        __typename?: 'Account'
        id: string
        rowId: string
        username: string
      } | null
    }>
  } | null
}

export type EventEditQueryVariables = Exact<{
  slug: Scalars['String']['input']
  username: Scalars['String']['input']
}>

export type EventEditQuery = {
  __typename?: 'Query'
  accountByUsername?: {
    __typename?: 'Account'
    id: string
    rowId: string
    username: string
    eventsByCreatedBy: {
      __typename?: 'EventConnection'
      nodes: Array<{
        __typename?: 'Event'
        createdBy: string
        description?: string | null
        end?: any | null
        id: string
        guestCountMaximum?: number | null
        isArchived: boolean
        isInPerson?: boolean | null
        isRemote?: boolean | null
        name: string
        rowId: string
        slug: string
        start: any
        url?: string | null
        visibility: EventVisibility
      }>
    }
  } | null
}

export type EventAttendanceQueryVariables = Exact<{
  slug: Scalars['String']['input']
  username: Scalars['String']['input']
}>

export type EventAttendanceQuery = {
  __typename?: 'Query'
  accountByUsername?: {
    __typename?: 'Account'
    id: string
    eventsByCreatedBy: {
      __typename?: 'EventConnection'
      nodes: Array<{
        __typename?: 'Event'
        id: string
        name: string
        rowId: string
        slug: string
      }>
    }
  } | null
}

export type AttendanceCreateMutationVariables = Exact<{
  attendanceInput: AttendanceInput
}>

export type AttendanceCreateMutation = {
  __typename?: 'Mutation'
  createAttendance?: {
    __typename?: 'CreateAttendancePayload'
    attendance?: { __typename?: 'Attendance'; id: string; rowId: string } | null
  } | null
}

export type EventGuestsQueryVariables = Exact<{
  slug: Scalars['String']['input']
  username: Scalars['String']['input']
}>

export type EventGuestsQuery = {
  __typename?: 'Query'
  accountByUsername?: {
    __typename?: 'Account'
    id: string
    rowId: string
    eventsByCreatedBy: {
      __typename?: 'EventConnection'
      nodes: Array<{
        __typename?: 'Event'
        createdBy: string
        id: string
        name: string
        rowId: string
        slug: string
        accountByCreatedBy?: {
          __typename?: 'Account'
          id: string
          rowId: string
          username: string
        } | null
        guestsByEventId: {
          __typename?: 'GuestConnection'
          totalCount: number
          nodes: Array<{
            __typename?: 'Guest'
            id: string
            rowId: string
            contactByContactId?: {
              __typename?: 'Contact'
              accountId?: string | null
              id: string
              rowId: string
            } | null
          }>
          pageInfo: {
            __typename?: 'PageInfo'
            hasNextPage: boolean
            endCursor?: string | null
          }
        }
      }>
    }
  } | null
}

export type EventQueryVariables = Exact<{
  slug: Scalars['String']['input']
  username: Scalars['String']['input']
}>

export type EventQuery = {
  __typename?: 'Query'
  accountByUsername?: {
    __typename?: 'Account'
    id: string
    rowId: string
    username: string
    eventsByCreatedBy: {
      __typename?: 'EventConnection'
      nodes: Array<{
        __typename?: 'Event'
        createdBy: string
        description?: string | null
        end?: any | null
        id: string
        isArchived: boolean
        isInPerson?: boolean | null
        isRemote?: boolean | null
        name: string
        rowId: string
        slug: string
        start: any
        url?: string | null
        visibility: EventVisibility
        accountByCreatedBy?: {
          __typename?: 'Account'
          id: string
          rowId: string
          username: string
        } | null
        addressByAddressId?: {
          __typename?: 'Address'
          id: string
          name: string
          rowId: string
          location?: {
            __typename?: 'GeographyPoint'
            latitude: number
            longitude: number
          } | null
        } | null
      }>
    }
  } | null
}

export type EventListAccountQueryVariables = Exact<{
  after?: InputMaybe<Scalars['Cursor']['input']>
  first: Scalars['Int']['input']
  username: Scalars['String']['input']
}>

export type EventListAccountQuery = {
  __typename?: 'Query'
  accountByUsername?: {
    __typename?: 'Account'
    id: string
    rowId: string
    eventsByCreatedBy: {
      __typename?: 'EventConnection'
      totalCount: number
      nodes: Array<{
        __typename?: 'Event'
        id: string
        name: string
        rowId: string
        slug: string
        start: any
        eventFavoritesByEventId: {
          __typename?: 'EventFavoriteConnection'
          nodes: Array<{
            __typename?: 'EventFavorite'
            createdBy: string
            id: string
            rowId: string
          }>
        }
        guestsByEventId: {
          __typename?: 'GuestConnection'
          nodes: Array<{
            __typename?: 'Guest'
            id: string
            rowId: string
            contactByContactId?: {
              __typename?: 'Contact'
              accountId?: string | null
              id: string
              rowId: string
            } | null
          }>
        }
      }>
      pageInfo: {
        __typename?: 'PageInfo'
        hasNextPage: boolean
        endCursor?: string | null
      }
    }
  } | null
}

export type GuestEventQueryVariables = Exact<{
  id: Scalars['UUID']['input']
}>

export type GuestEventQuery = {
  __typename?: 'Query'
  guestByRowId?: {
    __typename?: 'Guest'
    feedback?: InvitationFeedback | null
    id: string
    rowId: string
    contactByContactId?: {
      __typename?: 'Contact'
      createdBy: string
      firstName?: string | null
      id: string
      lastName?: string | null
      nickname?: string | null
      rowId: string
      accountByAccountId?: {
        __typename?: 'Account'
        id: string
        rowId: string
        username: string
      } | null
    } | null
    eventByEventId?: {
      __typename?: 'Event'
      createdBy: string
      description?: string | null
      end?: any | null
      id: string
      isArchived: boolean
      isInPerson?: boolean | null
      isRemote?: boolean | null
      name: string
      rowId: string
      slug: string
      start: any
      url?: string | null
      visibility: EventVisibility
      accountByCreatedBy?: {
        __typename?: 'Account'
        id: string
        rowId: string
        username: string
      } | null
      addressByAddressId?: {
        __typename?: 'Address'
        id: string
        name: string
        rowId: string
        location?: {
          __typename?: 'GeographyPoint'
          latitude: number
          longitude: number
        } | null
      } | null
    } | null
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
    result?: string | null
  } | null
}

export type AccountItemFragment = {
  __typename?: 'Account'
  description?: string | null
  id: string
  rowId: string
  username: string
} & { ' $fragmentName'?: 'AccountItemFragment' }

export type AchievementItemFragment = {
  __typename?: 'Achievement'
  accountId: string
  achievement: AchievementType
  id: string
  level: number
  rowId: string
} & { ' $fragmentName'?: 'AchievementItemFragment' }

export type AddressItemFragment = {
  __typename?: 'Address'
  city?: string | null
  country?: string | null
  id: string
  line1?: string | null
  line2?: string | null
  name: string
  postalCode?: string | null
  region?: string | null
  rowId: string
  location?: {
    __typename?: 'GeographyPoint'
    latitude: number
    longitude: number
  } | null
} & { ' $fragmentName'?: 'AddressItemFragment' }

export type ContactItemFragment = {
  __typename?: 'Contact'
  accountId?: string | null
  createdBy: string
  emailAddress?: string | null
  emailAddressHash?: string | null
  firstName?: string | null
  id: string
  lastName?: string | null
  nickname?: string | null
  note?: string | null
  phoneNumber?: string | null
  rowId: string
  url?: string | null
  accountByAccountId?: {
    __typename?: 'Account'
    id: string
    rowId: string
    username: string
  } | null
  accountByCreatedBy?: {
    __typename?: 'Account'
    id: string
    rowId: string
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
  id: string
  name: string
  rowId: string
} & { ' $fragmentName'?: 'EventCategoryItemFragment' }

export type EventFormatItemFragment = {
  __typename?: 'EventFormat'
  id: string
  name: string
  rowId: string
} & { ' $fragmentName'?: 'EventFormatItemFragment' }

export type EventItemFragment = {
  __typename?: 'Event'
  createdBy: string
  description?: string | null
  end?: any | null
  guestCountMaximum?: number | null
  id: string
  isArchived: boolean
  isInPerson?: boolean | null
  isRemote?: boolean | null
  name: string
  rowId: string
  slug: string
  start: any
  url?: string | null
  visibility: EventVisibility
  accountByCreatedBy?: {
    __typename?: 'Account'
    id: string
    rowId: string
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
  contactId: string
  eventId: string
  feedback?: InvitationFeedback | null
  feedbackPaper?: InvitationFeedbackPaper | null
  id: string
  rowId: string
  contactByContactId?:
    | ({ __typename?: 'Contact' } & {
        ' $fragmentRefs'?: { ContactItemFragment: ContactItemFragment }
      })
    | null
} & { ' $fragmentName'?: 'GuestItemFragment' }

export type PreferenceEventCategoryItemFragment = {
  __typename?: 'PreferenceEventCategory'
  accountId: string
  categoryId: string
  id: string
  rowId: string
} & { ' $fragmentName'?: 'PreferenceEventCategoryItemFragment' }

export type PreferenceEventFormatItemFragment = {
  __typename?: 'PreferenceEventFormat'
  accountId: string
  formatId: string
  id: string
  rowId: string
} & { ' $fragmentName'?: 'PreferenceEventFormatItemFragment' }

export type PreferenceEventLocationItemFragment = {
  __typename?: 'PreferenceEventLocation'
  createdAt: any
  createdBy: string
  id: string
  radius: number
  rowId: string
  location: {
    __typename?: 'GeographyPoint'
    latitude: number
    longitude: number
  }
} & { ' $fragmentName'?: 'PreferenceEventLocationItemFragment' }

export type ProfilePictureItemFragment = {
  __typename?: 'ProfilePicture'
  accountId: string
  id: string
  rowId: string
  uploadByUploadId?:
    | ({ __typename?: 'Upload' } & {
        ' $fragmentRefs'?: { UploadItemFragment: UploadItemFragment }
      })
    | null
} & { ' $fragmentName'?: 'ProfilePictureItemFragment' }

export type UploadItemFragment = {
  __typename?: 'Upload'
  createdBy: string
  id: string
  rowId: string
  sizeByte: any
  storageKey?: string | null
} & { ' $fragmentName'?: 'UploadItemFragment' }

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
  birthDate: Scalars['Date']['input']
  emailAddress: Scalars['String']['input']
  language: Scalars['String']['input']
  legalTermId: Scalars['UUID']['input']
  password: Scalars['String']['input']
  username: Scalars['String']['input']
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

export type DeleteContactByRowIdMutationVariables = Exact<{
  id: Scalars['UUID']['input']
}>

export type DeleteContactByRowIdMutation = {
  __typename?: 'Mutation'
  deleteContactByRowId?: {
    __typename?: 'DeleteContactPayload'
    clientMutationId?: string | null
    contact?:
      | ({ __typename?: 'Contact' } & {
          ' $fragmentRefs'?: { ContactItemFragment: ContactItemFragment }
        })
      | null
  } | null
}

export type UpdateContactByRowIdMutationVariables = Exact<{
  id: Scalars['UUID']['input']
  contactPatch: ContactPatch
}>

export type UpdateContactByRowIdMutation = {
  __typename?: 'Mutation'
  updateContactByRowId?: {
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
    result?:
      | ({ __typename?: 'Event' } & {
          ' $fragmentRefs'?: { EventItemFragment: EventItemFragment }
        })
      | null
  } | null
}

export type UpdateEventByRowIdMutationVariables = Exact<{
  id: Scalars['UUID']['input']
  eventPatch: EventPatch
}>

export type UpdateEventByRowIdMutation = {
  __typename?: 'Mutation'
  updateEventByRowId?: {
    __typename?: 'UpdateEventPayload'
    event?:
      | ({ __typename?: 'Event' } & {
          ' $fragmentRefs'?: { EventItemFragment: EventItemFragment }
        })
      | null
  } | null
}

export type CreateGuestsMutationVariables = Exact<{
  createGuestsInput: CreateGuestsInput
}>

export type CreateGuestsMutation = {
  __typename?: 'Mutation'
  createGuests?: {
    __typename?: 'CreateGuestsPayload'
    result?: Array<{
      __typename?: 'Guest'
      id: string
      rowId: string
      contactByContactId?:
        | ({ __typename?: 'Contact' } & {
            ' $fragmentRefs'?: { ContactItemFragment: ContactItemFragment }
          })
        | null
    }> | null
  } | null
}

export type DeleteGuestByRowIdMutationVariables = Exact<{
  id: Scalars['UUID']['input']
}>

export type DeleteGuestByRowIdMutation = {
  __typename?: 'Mutation'
  deleteGuestByRowId?: {
    __typename?: 'DeleteGuestPayload'
    clientMutationId?: string | null
  } | null
}

export type UpdateGuestByRowIdMutationVariables = Exact<{
  id: Scalars['UUID']['input']
  guestPatch: GuestPatch
}>

export type UpdateGuestByRowIdMutation = {
  __typename?: 'Mutation'
  updateGuestByRowId?: {
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
  input: PreferenceEventCategoryInput
}>

export type CreatePreferenceEventCategoryMutation = {
  __typename?: 'Mutation'
  createPreferenceEventCategory?: {
    __typename?: 'CreatePreferenceEventCategoryPayload'
    preferenceEventCategory?:
      | ({ __typename?: 'PreferenceEventCategory' } & {
          ' $fragmentRefs'?: {
            PreferenceEventCategoryItemFragment: PreferenceEventCategoryItemFragment
          }
        })
      | null
  } | null
}

export type DeletePreferenceEventCategoryByAccountIdAndCategoryIdMutationVariables =
  Exact<{
    input: DeletePreferenceEventCategoryByAccountIdAndCategoryIdInput
  }>

export type DeletePreferenceEventCategoryByAccountIdAndCategoryIdMutation = {
  __typename?: 'Mutation'
  deletePreferenceEventCategoryByAccountIdAndCategoryId?: {
    __typename?: 'DeletePreferenceEventCategoryPayload'
    deletedPreferenceEventCategoryId?: string | null
  } | null
}

export type CreatePreferenceEventFormatMutationVariables = Exact<{
  input: PreferenceEventFormatInput
}>

export type CreatePreferenceEventFormatMutation = {
  __typename?: 'Mutation'
  createPreferenceEventFormat?: {
    __typename?: 'CreatePreferenceEventFormatPayload'
    preferenceEventFormat?:
      | ({ __typename?: 'PreferenceEventFormat' } & {
          ' $fragmentRefs'?: {
            PreferenceEventFormatItemFragment: PreferenceEventFormatItemFragment
          }
        })
      | null
  } | null
}

export type DeletePreferenceEventFormatByAccountIdAndFormatIdMutationVariables =
  Exact<{
    input: DeletePreferenceEventFormatByAccountIdAndFormatIdInput
  }>

export type DeletePreferenceEventFormatByAccountIdAndFormatIdMutation = {
  __typename?: 'Mutation'
  deletePreferenceEventFormatByAccountIdAndFormatId?: {
    __typename?: 'DeletePreferenceEventFormatPayload'
    deletedPreferenceEventFormatId?: string | null
  } | null
}

export type CreatePreferenceEventLocationMutationVariables = Exact<{
  input: PreferenceEventLocationInput
}>

export type CreatePreferenceEventLocationMutation = {
  __typename?: 'Mutation'
  createPreferenceEventLocation?: {
    __typename?: 'CreatePreferenceEventLocationPayload'
    preferenceEventLocation?:
      | ({ __typename?: 'PreferenceEventLocation' } & {
          ' $fragmentRefs'?: {
            PreferenceEventLocationItemFragment: PreferenceEventLocationItemFragment
          }
        })
      | null
  } | null
}

export type DeletePreferenceEventLocationByRowIdMutationVariables = Exact<{
  input: DeletePreferenceEventLocationByRowIdInput
}>

export type DeletePreferenceEventLocationByRowIdMutation = {
  __typename?: 'Mutation'
  deletePreferenceEventLocationByRowId?: {
    __typename?: 'DeletePreferenceEventLocationPayload'
    deletedPreferenceEventLocationId?: string | null
  } | null
}

export type CreatePreferenceEventSizeMutationVariables = Exact<{
  input: PreferenceEventSizeInput
}>

export type CreatePreferenceEventSizeMutation = {
  __typename?: 'Mutation'
  createPreferenceEventSize?: {
    __typename?: 'CreatePreferenceEventSizePayload'
    clientMutationId?: string | null
  } | null
}

export type DeletePreferenceEventSizeByAccountIdAndEventSizeMutationVariables =
  Exact<{
    input: DeletePreferenceEventSizeByAccountIdAndEventSizeInput
  }>

export type DeletePreferenceEventSizeByAccountIdAndEventSizeMutation = {
  __typename?: 'Mutation'
  deletePreferenceEventSizeByAccountIdAndEventSize?: {
    __typename?: 'DeletePreferenceEventSizePayload'
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
    upload?: { __typename?: 'Upload'; id: string; rowId: string } | null
  } | null
}

export type DeleteUploadByRowIdMutationVariables = Exact<{
  id: Scalars['UUID']['input']
}>

export type DeleteUploadByRowIdMutation = {
  __typename?: 'Mutation'
  deleteUploadByRowId?: {
    __typename?: 'DeleteUploadPayload'
    clientMutationId?: string | null
    upload?:
      | ({ __typename?: 'Upload' } & {
          ' $fragmentRefs'?: { UploadItemFragment: UploadItemFragment }
        })
      | null
  } | null
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
    __typename?: 'AchievementConnection'
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
    __typename?: 'ContactConnection'
    totalCount: number
    nodes: Array<
      { __typename?: 'Contact' } & {
        ' $fragmentRefs'?: { ContactItemFragment: ContactItemFragment }
      }
    >
    pageInfo: {
      __typename?: 'PageInfo'
      hasNextPage: boolean
      endCursor?: string | null
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
          __typename?: 'GuestConnection'
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
    __typename?: 'EventCategoryConnection'
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
    __typename?: 'EventFormatConnection'
    nodes: Array<
      { __typename?: 'EventFormat' } & {
        ' $fragmentRefs'?: { EventFormatItemFragment: EventFormatItemFragment }
      }
    >
  } | null
}

export type EventFavoriteByCreatedByAndEventIdQueryVariables = Exact<{
  createdBy: Scalars['UUID']['input']
  eventId: Scalars['UUID']['input']
}>

export type EventFavoriteByCreatedByAndEventIdQuery = {
  __typename?: 'Query'
  eventFavoriteByCreatedByAndEventId?: {
    __typename?: 'EventFavorite'
    eventId: string
    id: string
    rowId: string
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
    __typename?: 'GuestConnection'
    totalCount: number
    nodes: Array<
      { __typename?: 'Guest' } & {
        ' $fragmentRefs'?: { GuestItemFragment: GuestItemFragment }
      }
    >
    pageInfo: {
      __typename?: 'PageInfo'
      hasNextPage: boolean
      endCursor?: string | null
    }
  } | null
}

export type AllPreferenceEventCategoriesQueryVariables = Exact<{
  [key: string]: never
}>

export type AllPreferenceEventCategoriesQuery = {
  __typename?: 'Query'
  allPreferenceEventCategories?: {
    __typename?: 'PreferenceEventCategoryConnection'
    nodes: Array<
      { __typename?: 'PreferenceEventCategory' } & {
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
  allPreferenceEventFormats?: {
    __typename?: 'PreferenceEventFormatConnection'
    nodes: Array<
      { __typename?: 'PreferenceEventFormat' } & {
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
  allPreferenceEventLocations?: {
    __typename?: 'PreferenceEventLocationConnection'
    nodes: Array<
      { __typename?: 'PreferenceEventLocation' } & {
        ' $fragmentRefs'?: {
          PreferenceEventLocationItemFragment: PreferenceEventLocationItemFragment
        }
      }
    >
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
    __typename?: 'UploadConnection'
    totalCount: number
    nodes: Array<
      { __typename?: 'Upload' } & {
        ' $fragmentRefs'?: { UploadItemFragment: UploadItemFragment }
      }
    >
    pageInfo: {
      __typename?: 'PageInfo'
      hasNextPage: boolean
      endCursor?: string | null
    }
  } | null
}

export type JwtCreateMutationVariables = Exact<{
  password: Scalars['String']['input']
  username: Scalars['String']['input']
}>

export type JwtCreateMutation = {
  __typename?: 'Mutation'
  jwtCreate?: {
    __typename?: 'JwtCreatePayload'
    clientMutationId?: string | null
    result?: string | null
  } | null
}

export type JwtUpdateMutationVariables = Exact<{
  id: Scalars['UUID']['input']
}>

export type JwtUpdateMutation = {
  __typename?: 'Mutation'
  jwtUpdate?: {
    __typename?: 'JwtUpdatePayload'
    clientMutationId?: string | null
    result?: string | null
  } | null
}

export type JwtUpdateAttendanceAddMutationVariables = Exact<{
  input: JwtUpdateAttendanceAddInput
}>

export type JwtUpdateAttendanceAddMutation = {
  __typename?: 'Mutation'
  jwtUpdateAttendanceAdd?: {
    __typename?: 'JwtUpdateAttendanceAddPayload'
    result?: string | null
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
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'accountId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'achievement' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'level' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'city' } },
          { kind: 'Field', name: { kind: 'Name', value: 'country' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'accountByCreatedBy' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isArchived' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isInPerson' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isRemote' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'city' } },
          { kind: 'Field', name: { kind: 'Name', value: 'country' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'accountId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'accountByAccountId' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
                { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'nickname' } },
          { kind: 'Field', name: { kind: 'Name', value: 'note' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phoneNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'city' } },
          { kind: 'Field', name: { kind: 'Name', value: 'country' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'contactId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'eventId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'feedback' } },
          { kind: 'Field', name: { kind: 'Name', value: 'feedbackPaper' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'city' } },
          { kind: 'Field', name: { kind: 'Name', value: 'country' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'accountId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'accountByAccountId' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
                { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'nickname' } },
          { kind: 'Field', name: { kind: 'Name', value: 'note' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phoneNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GuestItemFragment, unknown>
export const PreferenceEventCategoryItemFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PreferenceEventCategoryItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PreferenceEventCategory' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'accountId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'categoryId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
        name: { kind: 'Name', value: 'PreferenceEventFormat' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'accountId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'formatId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
        name: { kind: 'Name', value: 'PreferenceEventLocation' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdBy' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'radius' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'createdBy' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizeByte' } },
          { kind: 'Field', name: { kind: 'Name', value: 'storageKey' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'accountId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'createdBy' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizeByte' } },
          { kind: 'Field', name: { kind: 'Name', value: 'storageKey' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ProfilePictureItemFragment, unknown>
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
export const AccountByRowIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'AccountByRowId' },
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
            name: { kind: 'Name', value: 'accountByRowId' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'rowId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'profilePictureByAccountId' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'uploadByUploadId' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'rowId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'storageKey' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'username' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AccountByRowIdQuery, AccountByRowIdQueryVariables>
export const AccountSearchDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'AccountSearch' },
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
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'username' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allAccounts' },
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
                      name: { kind: 'Name', value: 'username' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'username' },
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
                value: { kind: 'EnumValue', value: 'USERNAME_ASC' },
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
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'username' },
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
                        name: { kind: 'Name', value: 'endCursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'hasNextPage' },
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
} as unknown as DocumentNode<AccountSearchQuery, AccountSearchQueryVariables>
export const DeleteAccountBlockDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'DeleteAccountBlock' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'blockedAccountId' },
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
            name: { kind: 'Name', value: 'createdBy' },
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
            name: {
              kind: 'Name',
              value: 'deleteAccountBlockByCreatedByAndBlockedAccountId',
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
                      name: { kind: 'Name', value: 'blockedAccountId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'blockedAccountId' },
                      },
                    },
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
  DeleteAccountBlockMutation,
  DeleteAccountBlockMutationVariables
>
export const AttendanceGuestDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'AttendanceGuest' },
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
            name: { kind: 'Name', value: 'guestByRowId' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'rowId' },
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
                  kind: 'Field',
                  name: { kind: 'Name', value: 'contactByContactId' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'accountByAccountId' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'rowId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'username' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'firstName' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'lastName' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'language' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'nickname' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'attendanceByGuestId' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'checkedOut' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'updatedAt' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'feedback' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  AttendanceGuestQuery,
  AttendanceGuestQueryVariables
>
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
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'term' } },
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
} as unknown as DocumentNode<AllLegalTermsQuery, AllLegalTermsQueryVariables>
export const EventListDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'EventList' },
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
                        kind: 'Field',
                        name: { kind: 'Name', value: 'accountByCreatedBy' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'rowId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'username' },
                            },
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
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'location' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'latitude' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'longitude' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'rowId' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'eventFavoritesByEventId',
                        },
                        arguments: [
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'first' },
                            value: { kind: 'IntValue', value: '1' },
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
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdBy' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'rowId' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'guestsByEventId' },
                        arguments: [
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'first' },
                            value: { kind: 'IntValue', value: '1' },
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
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'contactByContactId',
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'accountId',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'id' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'rowId',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'rowId' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'start' } },
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
  ],
} as unknown as DocumentNode<EventListQuery, EventListQueryVariables>
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
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
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
                        kind: 'Field',
                        name: { kind: 'Name', value: 'accountByCreatedBy' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'rowId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'username' },
                            },
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
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'location' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'latitude' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'longitude' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'rowId' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'eventFavoritesByEventId',
                        },
                        arguments: [
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'first' },
                            value: { kind: 'IntValue', value: '1' },
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
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdBy' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'rowId' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'guestsByEventId' },
                        arguments: [
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'first' },
                            value: { kind: 'IntValue', value: '1' },
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
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'contactByContactId',
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'accountId',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'id' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'rowId',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'rowId' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'start' } },
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
  ],
} as unknown as DocumentNode<EventSearchQuery, EventSearchQueryVariables>
export const CreateEventFavoriteDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateEventFavorite' },
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
              name: { kind: 'Name', value: 'EventFavoriteInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createEventFavorite' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'eventFavorite' },
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
                  name: { kind: 'Name', value: 'eventFavorite' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdBy' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'eventId' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
  CreateEventFavoriteMutation,
  CreateEventFavoriteMutationVariables
>
export const DeleteEventFavoriteByRowIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'DeleteEventFavoriteByRowId' },
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
              name: { kind: 'Name', value: 'DeleteEventFavoriteInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'deleteEventFavorite' },
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
  DeleteEventFavoriteByRowIdMutation,
  DeleteEventFavoriteByRowIdMutationVariables
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
            name: { kind: 'Name', value: 'allPreferenceEventSizes' },
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
                        name: { kind: 'Name', value: 'eventSize' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
export const AccountEditDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'AccountEdit' },
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
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'imprintUrl' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'profilePictureByAccountId' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'uploadByUploadId' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'rowId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'storageKey' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'username' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AccountEditQuery, AccountEditQueryVariables>
export const CreateProfilePictureDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateProfilePicture' },
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
              name: { kind: 'Name', value: 'ProfilePictureInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createProfilePicture' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'profilePicture' },
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
                  name: { kind: 'Name', value: 'profilePicture' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'accountByAccountId' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'profilePictureByAccountId',
                              },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'rowId' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'rowId' },
                            },
                          ],
                        },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'uploadId' },
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
  CreateProfilePictureMutation,
  CreateProfilePictureMutationVariables
>
export const DeleteProfilePictureByRowIdMutationDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'DeleteProfilePictureByRowIdMutation' },
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
            name: { kind: 'Name', value: 'deleteProfilePictureByRowId' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'rowId' },
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
  DeleteProfilePictureByRowIdMutationMutation,
  DeleteProfilePictureByRowIdMutationMutationVariables
>
export const UpdateAccountByRowIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateAccountByRowId' },
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
            name: { kind: 'Name', value: 'accountPatch' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'AccountPatch' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateAccountByRowId' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'rowId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'id' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'accountPatch' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'accountPatch' },
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
                  name: { kind: 'Name', value: 'account' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'imprintUrl' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
  UpdateAccountByRowIdMutation,
  UpdateAccountByRowIdMutationVariables
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
export const AccountBlockAccountsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'AccountBlockAccounts' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'accountBlockAccounts' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nodes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'storageKey' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'username' },
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
  AccountBlockAccountsQuery,
  AccountBlockAccountsQueryVariables
>
export const AccountDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Account' },
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
                  kind: 'Field',
                  name: { kind: 'Name', value: 'achievementsByAccountId' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'first' },
                      value: { kind: 'IntValue', value: '5' },
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
                              kind: 'Field',
                              name: { kind: 'Name', value: 'achievement' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'rowId' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'eventsByCreatedBy' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'first' },
                      value: { kind: 'IntValue', value: '3' },
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
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'eventFavoritesByEventId',
                              },
                              arguments: [
                                {
                                  kind: 'Argument',
                                  name: { kind: 'Name', value: 'first' },
                                  value: { kind: 'IntValue', value: '1' },
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
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'createdBy',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'id' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'rowId',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'guestsByEventId' },
                              arguments: [
                                {
                                  kind: 'Argument',
                                  name: { kind: 'Name', value: 'first' },
                                  value: { kind: 'IntValue', value: '1' },
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
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'contactByContactId',
                                          },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'accountId',
                                                },
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'id',
                                                },
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'rowId',
                                                },
                                              },
                                            ],
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'id' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'rowId',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'rowId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'slug' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'start' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'totalCount' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'imprintUrl' } },
                { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AccountQuery, AccountQueryVariables>
export const AttendanceDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Attendance' },
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
            name: { kind: 'Name', value: 'attendanceByRowId' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'rowId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'checkedOut' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'contactByContactId' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'accountByAccountId' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'rowId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'username' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'firstName' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'lastName' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'language' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'nickname' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'guestByGuestId' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'eventByAttendanceId' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'attendanceId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'eventAppsByEventId' },
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
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'appByAppId' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'iconSvg' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'name' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'rowId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'url' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'urlAttendance',
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'rowId' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AttendanceQuery, AttendanceQueryVariables>
export const AttendanceCheckOutDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'AttendanceCheckOut' },
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
            name: { kind: 'Name', value: 'attendancePatch' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'AttendancePatch' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateAttendanceByRowId' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'rowId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'id' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'attendancePatch' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'attendancePatch' },
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
                  name: { kind: 'Name', value: 'attendance' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'checkedOut' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
  AttendanceCheckOutMutation,
  AttendanceCheckOutMutationVariables
>
export const DashboardEventRecommendationsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'DashboardEventRecommendations' },
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
            name: { kind: 'Name', value: 'eventByRowId' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'rowId' },
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
                  kind: 'Field',
                  name: { kind: 'Name', value: 'accountByCreatedBy' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'username' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'addressByAddressId' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'location' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'latitude' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'longitude' },
                            },
                          ],
                        },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'eventFavoritesByEventId' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'first' },
                      value: { kind: 'IntValue', value: '1' },
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
                              kind: 'Field',
                              name: { kind: 'Name', value: 'createdBy' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'rowId' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'guestsByEventId' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'first' },
                      value: { kind: 'IntValue', value: '1' },
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
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'contactByContactId',
                              },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'accountId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'rowId' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'rowId' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                { kind: 'Field', name: { kind: 'Name', value: 'start' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DashboardEventRecommendationsQuery,
  DashboardEventRecommendationsQueryVariables
>
export const DashboardEventUpcomingDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'DashboardEventUpcoming' },
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
                        kind: 'Field',
                        name: { kind: 'Name', value: 'accountByCreatedBy' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'rowId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'username' },
                            },
                          ],
                        },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'end' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'start' } },
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
  DashboardEventUpcomingQuery,
  DashboardEventUpcomingQueryVariables
>
export const EventEditDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'EventEdit' },
      variableDefinitions: [
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
                  kind: 'Field',
                  name: { kind: 'Name', value: 'eventsByCreatedBy' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'condition' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'slug' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'slug' },
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
                              kind: 'Field',
                              name: { kind: 'Name', value: 'createdBy' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'description' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'end' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'guestCountMaximum',
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'isArchived' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'isInPerson' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'isRemote' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'rowId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'slug' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'start' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'url' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'visibility' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'username' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<EventEditQuery, EventEditQueryVariables>
export const EventAttendanceDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'EventAttendance' },
      variableDefinitions: [
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
                  kind: 'Field',
                  name: { kind: 'Name', value: 'eventsByCreatedBy' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'condition' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'slug' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'slug' },
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
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'rowId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'slug' },
                            },
                          ],
                        },
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
} as unknown as DocumentNode<
  EventAttendanceQuery,
  EventAttendanceQueryVariables
>
export const AttendanceCreateDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'AttendanceCreate' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'attendanceInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'AttendanceInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createAttendance' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'attendance' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'attendanceInput' },
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
                  name: { kind: 'Name', value: 'attendance' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
  AttendanceCreateMutation,
  AttendanceCreateMutationVariables
>
export const EventGuestsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'EventGuests' },
      variableDefinitions: [
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
                  kind: 'Field',
                  name: { kind: 'Name', value: 'eventsByCreatedBy' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'condition' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'slug' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'slug' },
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
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'accountByCreatedBy',
                              },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'rowId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'username' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'createdBy' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'guestsByEventId' },
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
                                          name: {
                                            kind: 'Name',
                                            value: 'contactByContactId',
                                          },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'accountId',
                                                },
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'id',
                                                },
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'rowId',
                                                },
                                              },
                                            ],
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'id' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'rowId',
                                          },
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
                                          name: {
                                            kind: 'Name',
                                            value: 'hasNextPage',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'endCursor',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'totalCount' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'rowId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'slug' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<EventGuestsQuery, EventGuestsQueryVariables>
export const EventDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Event' },
      variableDefinitions: [
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
                  kind: 'Field',
                  name: { kind: 'Name', value: 'eventsByCreatedBy' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'condition' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'slug' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'slug' },
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
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'accountByCreatedBy',
                              },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'rowId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'username' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'addressByAddressId',
                              },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'location' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'latitude',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'longitude',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'name' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'rowId' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'createdBy' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'description' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'end' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'isArchived' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'isInPerson' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'isRemote' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'rowId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'slug' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'start' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'url' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'visibility' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'username' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<EventQuery, EventQueryVariables>
export const EventListAccountDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'EventListAccount' },
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
                  kind: 'Field',
                  name: { kind: 'Name', value: 'eventsByCreatedBy' },
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
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'eventFavoritesByEventId',
                              },
                              arguments: [
                                {
                                  kind: 'Argument',
                                  name: { kind: 'Name', value: 'first' },
                                  value: { kind: 'IntValue', value: '1' },
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
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'createdBy',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'id' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'rowId',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'guestsByEventId' },
                              arguments: [
                                {
                                  kind: 'Argument',
                                  name: { kind: 'Name', value: 'first' },
                                  value: { kind: 'IntValue', value: '1' },
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
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'contactByContactId',
                                          },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'accountId',
                                                },
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'id',
                                                },
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'rowId',
                                                },
                                              },
                                            ],
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'id' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'rowId',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'rowId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'slug' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'start' },
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
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'totalCount' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  EventListAccountQuery,
  EventListAccountQueryVariables
>
export const GuestEventDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GuestEvent' },
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
            name: { kind: 'Name', value: 'guestByRowId' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'rowId' },
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
                  kind: 'Field',
                  name: { kind: 'Name', value: 'contactByContactId' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'accountByAccountId' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'rowId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'username' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdBy' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'firstName' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'lastName' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'nickname' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'eventByEventId' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'accountByCreatedBy' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'rowId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'username' },
                            },
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
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'location' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'latitude' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'longitude' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'rowId' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdBy' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'end' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'isArchived' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'isInPerson' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'isRemote' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'start' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'visibility' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'feedback' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GuestEventQuery, GuestEventQueryVariables>
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
                { kind: 'Field', name: { kind: 'Name', value: 'result' } },
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
            name: { kind: 'Name', value: 'birthDate' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Date' } },
          },
        },
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
                      name: { kind: 'Name', value: 'birthDate' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'birthDate' },
                      },
                    },
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
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'legalTermId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'legalTermId' },
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
          { kind: 'Field', name: { kind: 'Name', value: 'city' } },
          { kind: 'Field', name: { kind: 'Name', value: 'country' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'accountId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'accountByAccountId' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
                { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'nickname' } },
          { kind: 'Field', name: { kind: 'Name', value: 'note' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phoneNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateContactMutation,
  CreateContactMutationVariables
>
export const DeleteContactByRowIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'DeleteContactByRowId' },
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
            name: { kind: 'Name', value: 'deleteContactByRowId' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'rowId' },
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
          { kind: 'Field', name: { kind: 'Name', value: 'city' } },
          { kind: 'Field', name: { kind: 'Name', value: 'country' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'accountId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'accountByAccountId' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
                { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'nickname' } },
          { kind: 'Field', name: { kind: 'Name', value: 'note' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phoneNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeleteContactByRowIdMutation,
  DeleteContactByRowIdMutationVariables
>
export const UpdateContactByRowIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateContactByRowId' },
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
            name: { kind: 'Name', value: 'updateContactByRowId' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'rowId' },
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
          { kind: 'Field', name: { kind: 'Name', value: 'city' } },
          { kind: 'Field', name: { kind: 'Name', value: 'country' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'accountId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'accountByAccountId' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
                { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'nickname' } },
          { kind: 'Field', name: { kind: 'Name', value: 'note' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phoneNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateContactByRowIdMutation,
  UpdateContactByRowIdMutationVariables
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
          { kind: 'Field', name: { kind: 'Name', value: 'city' } },
          { kind: 'Field', name: { kind: 'Name', value: 'country' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'accountByCreatedBy' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isArchived' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isInPerson' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isRemote' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
                  name: { kind: 'Name', value: 'result' },
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
          { kind: 'Field', name: { kind: 'Name', value: 'city' } },
          { kind: 'Field', name: { kind: 'Name', value: 'country' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'accountByCreatedBy' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isArchived' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isInPerson' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isRemote' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
          { kind: 'Field', name: { kind: 'Name', value: 'start' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'visibility' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<EventDeleteMutation, EventDeleteMutationVariables>
export const UpdateEventByRowIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'updateEventByRowId' },
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
            name: { kind: 'Name', value: 'updateEventByRowId' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'rowId' },
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
          { kind: 'Field', name: { kind: 'Name', value: 'city' } },
          { kind: 'Field', name: { kind: 'Name', value: 'country' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'accountByCreatedBy' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isArchived' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isInPerson' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isRemote' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
          { kind: 'Field', name: { kind: 'Name', value: 'start' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'visibility' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateEventByRowIdMutation,
  UpdateEventByRowIdMutationVariables
>
export const CreateGuestsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateGuests' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'createGuestsInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateGuestsInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createGuests' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'createGuestsInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'result' },
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
                      { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'city' } },
          { kind: 'Field', name: { kind: 'Name', value: 'country' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'accountId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'accountByAccountId' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
                { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'nickname' } },
          { kind: 'Field', name: { kind: 'Name', value: 'note' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phoneNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateGuestsMutation,
  CreateGuestsMutationVariables
>
export const DeleteGuestByRowIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'DeleteGuestByRowId' },
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
            name: { kind: 'Name', value: 'deleteGuestByRowId' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'rowId' },
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
  DeleteGuestByRowIdMutation,
  DeleteGuestByRowIdMutationVariables
>
export const UpdateGuestByRowIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateGuestByRowId' },
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
            name: { kind: 'Name', value: 'updateGuestByRowId' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'rowId' },
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
          { kind: 'Field', name: { kind: 'Name', value: 'city' } },
          { kind: 'Field', name: { kind: 'Name', value: 'country' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'accountId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'accountByAccountId' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
                { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'nickname' } },
          { kind: 'Field', name: { kind: 'Name', value: 'note' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phoneNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'contactId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'eventId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'feedback' } },
          { kind: 'Field', name: { kind: 'Name', value: 'feedbackPaper' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateGuestByRowIdMutation,
  UpdateGuestByRowIdMutationVariables
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
              name: { kind: 'Name', value: 'PreferenceEventCategoryInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createPreferenceEventCategory' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'preferenceEventCategory' },
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
                  name: { kind: 'Name', value: 'preferenceEventCategory' },
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
        name: { kind: 'Name', value: 'PreferenceEventCategory' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'accountId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'categoryId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
                  'DeletePreferenceEventCategoryByAccountIdAndCategoryIdInput',
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
              value: 'deletePreferenceEventCategoryByAccountIdAndCategoryId',
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
                    value: 'deletedPreferenceEventCategoryId',
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
              name: { kind: 'Name', value: 'PreferenceEventFormatInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createPreferenceEventFormat' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'preferenceEventFormat' },
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
                  name: { kind: 'Name', value: 'preferenceEventFormat' },
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
        name: { kind: 'Name', value: 'PreferenceEventFormat' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'accountId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'formatId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
                value: 'DeletePreferenceEventFormatByAccountIdAndFormatIdInput',
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
              value: 'deletePreferenceEventFormatByAccountIdAndFormatId',
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
                    value: 'deletedPreferenceEventFormatId',
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
              name: { kind: 'Name', value: 'PreferenceEventLocationInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createPreferenceEventLocation' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'preferenceEventLocation' },
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
                  name: { kind: 'Name', value: 'preferenceEventLocation' },
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
        name: { kind: 'Name', value: 'PreferenceEventLocation' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdBy' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'radius' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreatePreferenceEventLocationMutation,
  CreatePreferenceEventLocationMutationVariables
>
export const DeletePreferenceEventLocationByRowIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'DeletePreferenceEventLocationByRowId' },
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
                value: 'DeletePreferenceEventLocationByRowIdInput',
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
              value: 'deletePreferenceEventLocationByRowId',
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
                    value: 'deletedPreferenceEventLocationId',
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
  DeletePreferenceEventLocationByRowIdMutation,
  DeletePreferenceEventLocationByRowIdMutationVariables
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
              name: { kind: 'Name', value: 'PreferenceEventSizeInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createPreferenceEventSize' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'preferenceEventSize' },
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
                value: 'DeletePreferenceEventSizeByAccountIdAndEventSizeInput',
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
              value: 'deletePreferenceEventSizeByAccountIdAndEventSize',
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
                      { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
export const DeleteUploadByRowIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'DeleteUploadByRowId' },
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
            name: { kind: 'Name', value: 'deleteUploadByRowId' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'rowId' },
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
          { kind: 'Field', name: { kind: 'Name', value: 'createdBy' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizeByte' } },
          { kind: 'Field', name: { kind: 'Name', value: 'storageKey' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeleteUploadByRowIdMutation,
  DeleteUploadByRowIdMutationVariables
>
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
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'accountId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'achievement' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'level' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'city' } },
          { kind: 'Field', name: { kind: 'Name', value: 'country' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'accountId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'accountByAccountId' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
                { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'nickname' } },
          { kind: 'Field', name: { kind: 'Name', value: 'note' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phoneNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
                            name: { kind: 'Name', value: 'rowId' },
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
          { kind: 'Field', name: { kind: 'Name', value: 'city' } },
          { kind: 'Field', name: { kind: 'Name', value: 'country' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'accountId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'accountByAccountId' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
                { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'nickname' } },
          { kind: 'Field', name: { kind: 'Name', value: 'note' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phoneNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'accountByCreatedBy' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isArchived' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isInPerson' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isRemote' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'contactId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'eventId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'feedback' } },
          { kind: 'Field', name: { kind: 'Name', value: 'feedbackPaper' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  AllEventFormatsQuery,
  AllEventFormatsQueryVariables
>
export const EventFavoriteByCreatedByAndEventIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'eventFavoriteByCreatedByAndEventId' },
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
            name: { kind: 'Name', value: 'eventId' },
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
            name: { kind: 'Name', value: 'eventFavoriteByCreatedByAndEventId' },
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
                name: { kind: 'Name', value: 'eventId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'eventId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'eventId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  EventFavoriteByCreatedByAndEventIdQuery,
  EventFavoriteByCreatedByAndEventIdQueryVariables
>
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
          { kind: 'Field', name: { kind: 'Name', value: 'city' } },
          { kind: 'Field', name: { kind: 'Name', value: 'country' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'accountId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'accountByAccountId' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
                { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'nickname' } },
          { kind: 'Field', name: { kind: 'Name', value: 'note' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phoneNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'contactId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'eventId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'feedback' } },
          { kind: 'Field', name: { kind: 'Name', value: 'feedbackPaper' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AllGuestsQuery, AllGuestsQueryVariables>
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
            name: { kind: 'Name', value: 'allPreferenceEventCategories' },
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
        name: { kind: 'Name', value: 'PreferenceEventCategory' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'accountId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'categoryId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
            name: { kind: 'Name', value: 'allPreferenceEventFormats' },
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
        name: { kind: 'Name', value: 'PreferenceEventFormat' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'accountId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'formatId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
            name: { kind: 'Name', value: 'allPreferenceEventLocations' },
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
        name: { kind: 'Name', value: 'PreferenceEventLocation' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdBy' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'radius' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  AllPreferenceEventLocationsQuery,
  AllPreferenceEventLocationsQueryVariables
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
          { kind: 'Field', name: { kind: 'Name', value: 'createdBy' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizeByte' } },
          { kind: 'Field', name: { kind: 'Name', value: 'storageKey' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'accountId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'createdBy' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rowId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizeByte' } },
          { kind: 'Field', name: { kind: 'Name', value: 'storageKey' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AllUploadsQuery, AllUploadsQueryVariables>
export const JwtCreateDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'JwtCreate' },
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
            name: { kind: 'Name', value: 'jwtCreate' },
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
                { kind: 'Field', name: { kind: 'Name', value: 'result' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<JwtCreateMutation, JwtCreateMutationVariables>
export const JwtUpdateDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'JwtUpdate' },
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
            name: { kind: 'Name', value: 'jwtUpdate' },
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
                { kind: 'Field', name: { kind: 'Name', value: 'result' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<JwtUpdateMutation, JwtUpdateMutationVariables>
export const JwtUpdateAttendanceAddDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'JwtUpdateAttendanceAdd' },
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
              name: { kind: 'Name', value: 'JwtUpdateAttendanceAddInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'jwtUpdateAttendanceAdd' },
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
                { kind: 'Field', name: { kind: 'Name', value: 'result' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  JwtUpdateAttendanceAddMutation,
  JwtUpdateAttendanceAddMutationVariables
>
