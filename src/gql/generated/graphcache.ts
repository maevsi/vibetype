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
  Cursor: { input: string; output: string }
  Date: { input: any; output: any }
  Datetime: { input: any; output: any }
  GeoJSON: { input: any; output: any }
  Jwt: { input: string; output: string }
  RegConfig: { input: any; output: any }
  TsVector: { input: any; output: any }
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

export type WithTypename<T extends { __typename?: any }> = Partial<T> & {
  __typename: NonNullable<T['__typename']>
}

export type GraphCacheKeysConfig = {
  Account?: (data: WithTypename<Account>) => null | string
  AccountBlock?: (data: WithTypename<AccountBlock>) => null | string
  AccountBlockAccountsConnection?: (
    data: WithTypename<AccountBlockAccountsConnection>,
  ) => null | string
  AccountBlockAccountsEdge?: (
    data: WithTypename<AccountBlockAccountsEdge>,
  ) => null | string
  AccountBlockAccountsRecord?: (
    data: WithTypename<AccountBlockAccountsRecord>,
  ) => null | string
  AccountBlockConnection?: (
    data: WithTypename<AccountBlockConnection>,
  ) => null | string
  AccountBlockEdge?: (data: WithTypename<AccountBlockEdge>) => null | string
  AccountConnection?: (data: WithTypename<AccountConnection>) => null | string
  AccountDeletePayload?: (
    data: WithTypename<AccountDeletePayload>,
  ) => null | string
  AccountEdge?: (data: WithTypename<AccountEdge>) => null | string
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
  AccountSocialNetworkConnection?: (
    data: WithTypename<AccountSocialNetworkConnection>,
  ) => null | string
  AccountSocialNetworkEdge?: (
    data: WithTypename<AccountSocialNetworkEdge>,
  ) => null | string
  Achievement?: (data: WithTypename<Achievement>) => null | string
  AchievementConnection?: (
    data: WithTypename<AchievementConnection>,
  ) => null | string
  AchievementEdge?: (data: WithTypename<AchievementEdge>) => null | string
  AchievementUnlockPayload?: (
    data: WithTypename<AchievementUnlockPayload>,
  ) => null | string
  Address?: (data: WithTypename<Address>) => null | string
  AddressConnection?: (data: WithTypename<AddressConnection>) => null | string
  AddressEdge?: (data: WithTypename<AddressEdge>) => null | string
  App?: (data: WithTypename<App>) => null | string
  AppConnection?: (data: WithTypename<AppConnection>) => null | string
  AppEdge?: (data: WithTypename<AppEdge>) => null | string
  Attendance?: (data: WithTypename<Attendance>) => null | string
  AttendanceConnection?: (
    data: WithTypename<AttendanceConnection>,
  ) => null | string
  AttendanceEdge?: (data: WithTypename<AttendanceEdge>) => null | string
  Contact?: (data: WithTypename<Contact>) => null | string
  ContactConnection?: (data: WithTypename<ContactConnection>) => null | string
  ContactEdge?: (data: WithTypename<ContactEdge>) => null | string
  CreateAccountBlockPayload?: (
    data: WithTypename<CreateAccountBlockPayload>,
  ) => null | string
  CreateAccountSocialNetworkPayload?: (
    data: WithTypename<CreateAccountSocialNetworkPayload>,
  ) => null | string
  CreateAddressPayload?: (
    data: WithTypename<CreateAddressPayload>,
  ) => null | string
  CreateAttendancePayload?: (
    data: WithTypename<CreateAttendancePayload>,
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
  DeviceConnection?: (data: WithTypename<DeviceConnection>) => null | string
  DeviceEdge?: (data: WithTypename<DeviceEdge>) => null | string
  Event?: (data: WithTypename<Event>) => null | string
  EventApp?: (data: WithTypename<EventApp>) => null | string
  EventAppConnection?: (data: WithTypename<EventAppConnection>) => null | string
  EventAppEdge?: (data: WithTypename<EventAppEdge>) => null | string
  EventCategory?: (data: WithTypename<EventCategory>) => null | string
  EventCategoryConnection?: (
    data: WithTypename<EventCategoryConnection>,
  ) => null | string
  EventCategoryEdge?: (data: WithTypename<EventCategoryEdge>) => null | string
  EventCategoryMapping?: (
    data: WithTypename<EventCategoryMapping>,
  ) => null | string
  EventCategoryMappingConnection?: (
    data: WithTypename<EventCategoryMappingConnection>,
  ) => null | string
  EventCategoryMappingEdge?: (
    data: WithTypename<EventCategoryMappingEdge>,
  ) => null | string
  EventConnection?: (data: WithTypename<EventConnection>) => null | string
  EventDeletePayload?: (data: WithTypename<EventDeletePayload>) => null | string
  EventEdge?: (data: WithTypename<EventEdge>) => null | string
  EventFavorite?: (data: WithTypename<EventFavorite>) => null | string
  EventFavoriteConnection?: (
    data: WithTypename<EventFavoriteConnection>,
  ) => null | string
  EventFavoriteEdge?: (data: WithTypename<EventFavoriteEdge>) => null | string
  EventFormat?: (data: WithTypename<EventFormat>) => null | string
  EventFormatConnection?: (
    data: WithTypename<EventFormatConnection>,
  ) => null | string
  EventFormatEdge?: (data: WithTypename<EventFormatEdge>) => null | string
  EventFormatMapping?: (data: WithTypename<EventFormatMapping>) => null | string
  EventFormatMappingConnection?: (
    data: WithTypename<EventFormatMappingConnection>,
  ) => null | string
  EventFormatMappingEdge?: (
    data: WithTypename<EventFormatMappingEdge>,
  ) => null | string
  EventRecommendation?: (
    data: WithTypename<EventRecommendation>,
  ) => null | string
  EventRecommendationConnection?: (
    data: WithTypename<EventRecommendationConnection>,
  ) => null | string
  EventRecommendationEdge?: (
    data: WithTypename<EventRecommendationEdge>,
  ) => null | string
  EventUnlockPayload?: (data: WithTypename<EventUnlockPayload>) => null | string
  EventUnlockRecord?: (data: WithTypename<EventUnlockRecord>) => null | string
  EventUpload?: (data: WithTypename<EventUpload>) => null | string
  EventUploadConnection?: (
    data: WithTypename<EventUploadConnection>,
  ) => null | string
  EventUploadEdge?: (data: WithTypename<EventUploadEdge>) => null | string
  Friendship?: (data: WithTypename<Friendship>) => null | string
  FriendshipConnection?: (
    data: WithTypename<FriendshipConnection>,
  ) => null | string
  FriendshipEdge?: (data: WithTypename<FriendshipEdge>) => null | string
  GeographyPoint?: (data: WithTypename<GeographyPoint>) => null | string
  Guest?: (data: WithTypename<Guest>) => null | string
  GuestConnection?: (data: WithTypename<GuestConnection>) => null | string
  GuestContactIdsConnection?: (
    data: WithTypename<GuestContactIdsConnection>,
  ) => null | string
  GuestContactIdsEdge?: (
    data: WithTypename<GuestContactIdsEdge>,
  ) => null | string
  GuestEdge?: (data: WithTypename<GuestEdge>) => null | string
  GuestFlat?: (data: WithTypename<GuestFlat>) => null | string
  GuestFlatConnection?: (
    data: WithTypename<GuestFlatConnection>,
  ) => null | string
  GuestFlatEdge?: (data: WithTypename<GuestFlatEdge>) => null | string
  InvitePayload?: (data: WithTypename<InvitePayload>) => null | string
  JwtCreatePayload?: (data: WithTypename<JwtCreatePayload>) => null | string
  JwtUpdateAttendanceAddPayload?: (
    data: WithTypename<JwtUpdateAttendanceAddPayload>,
  ) => null | string
  JwtUpdatePayload?: (data: WithTypename<JwtUpdatePayload>) => null | string
  LegalTerm?: (data: WithTypename<LegalTerm>) => null | string
  LegalTermAcceptance?: (
    data: WithTypename<LegalTermAcceptance>,
  ) => null | string
  LegalTermAcceptanceConnection?: (
    data: WithTypename<LegalTermAcceptanceConnection>,
  ) => null | string
  LegalTermAcceptanceEdge?: (
    data: WithTypename<LegalTermAcceptanceEdge>,
  ) => null | string
  LegalTermConnection?: (
    data: WithTypename<LegalTermConnection>,
  ) => null | string
  LegalTermEdge?: (data: WithTypename<LegalTermEdge>) => null | string
  NotificationAcknowledgePayload?: (
    data: WithTypename<NotificationAcknowledgePayload>,
  ) => null | string
  PageInfo?: (data: WithTypename<PageInfo>) => null | string
  PreferenceEventCategory?: (
    data: WithTypename<PreferenceEventCategory>,
  ) => null | string
  PreferenceEventCategoryConnection?: (
    data: WithTypename<PreferenceEventCategoryConnection>,
  ) => null | string
  PreferenceEventCategoryEdge?: (
    data: WithTypename<PreferenceEventCategoryEdge>,
  ) => null | string
  PreferenceEventFormat?: (
    data: WithTypename<PreferenceEventFormat>,
  ) => null | string
  PreferenceEventFormatConnection?: (
    data: WithTypename<PreferenceEventFormatConnection>,
  ) => null | string
  PreferenceEventFormatEdge?: (
    data: WithTypename<PreferenceEventFormatEdge>,
  ) => null | string
  PreferenceEventLocation?: (
    data: WithTypename<PreferenceEventLocation>,
  ) => null | string
  PreferenceEventLocationConnection?: (
    data: WithTypename<PreferenceEventLocationConnection>,
  ) => null | string
  PreferenceEventLocationEdge?: (
    data: WithTypename<PreferenceEventLocationEdge>,
  ) => null | string
  PreferenceEventSize?: (
    data: WithTypename<PreferenceEventSize>,
  ) => null | string
  PreferenceEventSizeConnection?: (
    data: WithTypename<PreferenceEventSizeConnection>,
  ) => null | string
  PreferenceEventSizeEdge?: (
    data: WithTypename<PreferenceEventSizeEdge>,
  ) => null | string
  ProfilePicture?: (data: WithTypename<ProfilePicture>) => null | string
  ProfilePictureConnection?: (
    data: WithTypename<ProfilePictureConnection>,
  ) => null | string
  ProfilePictureEdge?: (data: WithTypename<ProfilePictureEdge>) => null | string
  ProfilePictureSetPayload?: (
    data: WithTypename<ProfilePictureSetPayload>,
  ) => null | string
  Report?: (data: WithTypename<Report>) => null | string
  ReportConnection?: (data: WithTypename<ReportConnection>) => null | string
  ReportEdge?: (data: WithTypename<ReportEdge>) => null | string
  UpdateAccountLocationPayload?: (
    data: WithTypename<UpdateAccountLocationPayload>,
  ) => null | string
  UpdateAccountPayload?: (
    data: WithTypename<UpdateAccountPayload>,
  ) => null | string
  UpdateAccountSocialNetworkPayload?: (
    data: WithTypename<UpdateAccountSocialNetworkPayload>,
  ) => null | string
  UpdateAddressPayload?: (
    data: WithTypename<UpdateAddressPayload>,
  ) => null | string
  UpdateAttendancePayload?: (
    data: WithTypename<UpdateAttendancePayload>,
  ) => null | string
  UpdateContactPayload?: (
    data: WithTypename<UpdateContactPayload>,
  ) => null | string
  UpdateDevicePayload?: (
    data: WithTypename<UpdateDevicePayload>,
  ) => null | string
  UpdateEventPayload?: (data: WithTypename<UpdateEventPayload>) => null | string
  UpdateFriendshipPayload?: (
    data: WithTypename<UpdateFriendshipPayload>,
  ) => null | string
  UpdateGuestPayload?: (data: WithTypename<UpdateGuestPayload>) => null | string
  UpdateProfilePicturePayload?: (
    data: WithTypename<UpdateProfilePicturePayload>,
  ) => null | string
  UpdateUploadPayload?: (
    data: WithTypename<UpdateUploadPayload>,
  ) => null | string
  Upload?: (data: WithTypename<Upload>) => null | string
  UploadConnection?: (data: WithTypename<UploadConnection>) => null | string
  UploadEdge?: (data: WithTypename<UploadEdge>) => null | string
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
    accountBlockAccounts?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAccountBlockAccountsArgs,
      WithTypename<AccountBlockAccountsConnection> | string
    >
    accountBlockByCreatedByAndBlockedAccountId?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAccountBlockByCreatedByAndBlockedAccountIdArgs,
      WithTypename<AccountBlock> | string
    >
    accountBlockByRowId?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAccountBlockByRowIdArgs,
      WithTypename<AccountBlock> | string
    >
    accountByRowId?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAccountByRowIdArgs,
      WithTypename<Account> | string
    >
    accountByUsername?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAccountByUsernameArgs,
      WithTypename<Account> | string
    >
    accountSearch?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAccountSearchArgs,
      WithTypename<AccountConnection> | string
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
    achievementByRowId?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAchievementByRowIdArgs,
      WithTypename<Achievement> | string
    >
    address?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAddressArgs,
      WithTypename<Address> | string
    >
    addressByRowId?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAddressByRowIdArgs,
      WithTypename<Address> | string
    >
    allAccountBlocks?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllAccountBlocksArgs,
      WithTypename<AccountBlockConnection> | string
    >
    allAccountSocialNetworks?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllAccountSocialNetworksArgs,
      WithTypename<AccountSocialNetworkConnection> | string
    >
    allAccounts?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllAccountsArgs,
      WithTypename<AccountConnection> | string
    >
    allAchievements?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllAchievementsArgs,
      WithTypename<AchievementConnection> | string
    >
    allAddresses?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllAddressesArgs,
      WithTypename<AddressConnection> | string
    >
    allApps?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllAppsArgs,
      WithTypename<AppConnection> | string
    >
    allAttendances?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllAttendancesArgs,
      WithTypename<AttendanceConnection> | string
    >
    allContacts?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllContactsArgs,
      WithTypename<ContactConnection> | string
    >
    allDevices?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllDevicesArgs,
      WithTypename<DeviceConnection> | string
    >
    allEventApps?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllEventAppsArgs,
      WithTypename<EventAppConnection> | string
    >
    allEventCategories?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllEventCategoriesArgs,
      WithTypename<EventCategoryConnection> | string
    >
    allEventCategoryMappings?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllEventCategoryMappingsArgs,
      WithTypename<EventCategoryMappingConnection> | string
    >
    allEventFavorites?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllEventFavoritesArgs,
      WithTypename<EventFavoriteConnection> | string
    >
    allEventFormatMappings?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllEventFormatMappingsArgs,
      WithTypename<EventFormatMappingConnection> | string
    >
    allEventFormats?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllEventFormatsArgs,
      WithTypename<EventFormatConnection> | string
    >
    allEventRecommendations?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllEventRecommendationsArgs,
      WithTypename<EventRecommendationConnection> | string
    >
    allEventUploads?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllEventUploadsArgs,
      WithTypename<EventUploadConnection> | string
    >
    allEvents?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllEventsArgs,
      WithTypename<EventConnection> | string
    >
    allFriendships?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllFriendshipsArgs,
      WithTypename<FriendshipConnection> | string
    >
    allGuestFlats?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllGuestFlatsArgs,
      WithTypename<GuestFlatConnection> | string
    >
    allGuests?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllGuestsArgs,
      WithTypename<GuestConnection> | string
    >
    allLegalTermAcceptances?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllLegalTermAcceptancesArgs,
      WithTypename<LegalTermAcceptanceConnection> | string
    >
    allLegalTerms?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllLegalTermsArgs,
      WithTypename<LegalTermConnection> | string
    >
    allPreferenceEventCategories?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllPreferenceEventCategoriesArgs,
      WithTypename<PreferenceEventCategoryConnection> | string
    >
    allPreferenceEventFormats?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllPreferenceEventFormatsArgs,
      WithTypename<PreferenceEventFormatConnection> | string
    >
    allPreferenceEventLocations?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllPreferenceEventLocationsArgs,
      WithTypename<PreferenceEventLocationConnection> | string
    >
    allPreferenceEventSizes?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllPreferenceEventSizesArgs,
      WithTypename<PreferenceEventSizeConnection> | string
    >
    allProfilePictures?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllProfilePicturesArgs,
      WithTypename<ProfilePictureConnection> | string
    >
    allReports?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllReportsArgs,
      WithTypename<ReportConnection> | string
    >
    allUploads?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllUploadsArgs,
      WithTypename<UploadConnection> | string
    >
    app?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAppArgs,
      WithTypename<App> | string
    >
    appByName?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAppByNameArgs,
      WithTypename<App> | string
    >
    appByRowId?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAppByRowIdArgs,
      WithTypename<App> | string
    >
    attendance?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAttendanceArgs,
      WithTypename<Attendance> | string
    >
    attendanceByGuestId?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAttendanceByGuestIdArgs,
      WithTypename<Attendance> | string
    >
    attendanceByRowId?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAttendanceByRowIdArgs,
      WithTypename<Attendance> | string
    >
    attendanceClaimArray?: GraphCacheResolver<
      WithTypename<Query>,
      Record<string, never>,
      Array<Scalars['UUID'] | string>
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
    contactByRowId?: GraphCacheResolver<
      WithTypename<Query>,
      QueryContactByRowIdArgs,
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
    deviceByRowId?: GraphCacheResolver<
      WithTypename<Query>,
      QueryDeviceByRowIdArgs,
      WithTypename<Device> | string
    >
    event?: GraphCacheResolver<
      WithTypename<Query>,
      QueryEventArgs,
      WithTypename<Event> | string
    >
    eventApp?: GraphCacheResolver<
      WithTypename<Query>,
      QueryEventAppArgs,
      WithTypename<EventApp> | string
    >
    eventAppByEventIdAndAppId?: GraphCacheResolver<
      WithTypename<Query>,
      QueryEventAppByEventIdAndAppIdArgs,
      WithTypename<EventApp> | string
    >
    eventAppByRowId?: GraphCacheResolver<
      WithTypename<Query>,
      QueryEventAppByRowIdArgs,
      WithTypename<EventApp> | string
    >
    eventByAttendanceId?: GraphCacheResolver<
      WithTypename<Query>,
      QueryEventByAttendanceIdArgs,
      WithTypename<Event> | string
    >
    eventByCreatedByAndSlug?: GraphCacheResolver<
      WithTypename<Query>,
      QueryEventByCreatedByAndSlugArgs,
      WithTypename<Event> | string
    >
    eventByRowId?: GraphCacheResolver<
      WithTypename<Query>,
      QueryEventByRowIdArgs,
      WithTypename<Event> | string
    >
    eventCategory?: GraphCacheResolver<
      WithTypename<Query>,
      QueryEventCategoryArgs,
      WithTypename<EventCategory> | string
    >
    eventCategoryByName?: GraphCacheResolver<
      WithTypename<Query>,
      QueryEventCategoryByNameArgs,
      WithTypename<EventCategory> | string
    >
    eventCategoryByRowId?: GraphCacheResolver<
      WithTypename<Query>,
      QueryEventCategoryByRowIdArgs,
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
    eventFavoriteByRowId?: GraphCacheResolver<
      WithTypename<Query>,
      QueryEventFavoriteByRowIdArgs,
      WithTypename<EventFavorite> | string
    >
    eventFormat?: GraphCacheResolver<
      WithTypename<Query>,
      QueryEventFormatArgs,
      WithTypename<EventFormat> | string
    >
    eventFormatByName?: GraphCacheResolver<
      WithTypename<Query>,
      QueryEventFormatByNameArgs,
      WithTypename<EventFormat> | string
    >
    eventFormatByRowId?: GraphCacheResolver<
      WithTypename<Query>,
      QueryEventFormatByRowIdArgs,
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
      WithTypename<EventConnection> | string
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
    eventUploadByRowId?: GraphCacheResolver<
      WithTypename<Query>,
      QueryEventUploadByRowIdArgs,
      WithTypename<EventUpload> | string
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
    friendshipByRowId?: GraphCacheResolver<
      WithTypename<Query>,
      QueryFriendshipByRowIdArgs,
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
    guestByRowId?: GraphCacheResolver<
      WithTypename<Query>,
      QueryGuestByRowIdArgs,
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
    id?: GraphCacheResolver<
      WithTypename<Query>,
      Record<string, never>,
      Scalars['ID'] | string
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
    legalTermAcceptanceByRowId?: GraphCacheResolver<
      WithTypename<Query>,
      QueryLegalTermAcceptanceByRowIdArgs,
      WithTypename<LegalTermAcceptance> | string
    >
    legalTermByLanguageAndVersion?: GraphCacheResolver<
      WithTypename<Query>,
      QueryLegalTermByLanguageAndVersionArgs,
      WithTypename<LegalTerm> | string
    >
    legalTermByRowId?: GraphCacheResolver<
      WithTypename<Query>,
      QueryLegalTermByRowIdArgs,
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
      | WithTypename<App>
      | WithTypename<Attendance>
      | WithTypename<Contact>
      | WithTypename<Device>
      | WithTypename<Event>
      | WithTypename<EventApp>
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
    preferenceEventCategoryByRowId?: GraphCacheResolver<
      WithTypename<Query>,
      QueryPreferenceEventCategoryByRowIdArgs,
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
    preferenceEventFormatByRowId?: GraphCacheResolver<
      WithTypename<Query>,
      QueryPreferenceEventFormatByRowIdArgs,
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
    preferenceEventLocationByRowId?: GraphCacheResolver<
      WithTypename<Query>,
      QueryPreferenceEventLocationByRowIdArgs,
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
    preferenceEventSizeByRowId?: GraphCacheResolver<
      WithTypename<Query>,
      QueryPreferenceEventSizeByRowIdArgs,
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
    profilePictureByRowId?: GraphCacheResolver<
      WithTypename<Query>,
      QueryProfilePictureByRowIdArgs,
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
    reportByRowId?: GraphCacheResolver<
      WithTypename<Query>,
      QueryReportByRowIdArgs,
      WithTypename<Report> | string
    >
    upload?: GraphCacheResolver<
      WithTypename<Query>,
      QueryUploadArgs,
      WithTypename<Upload> | string
    >
    uploadByRowId?: GraphCacheResolver<
      WithTypename<Query>,
      QueryUploadByRowIdArgs,
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
      WithTypename<AccountBlockConnection> | string
    >
    accountBlocksByCreatedBy?: GraphCacheResolver<
      WithTypename<Account>,
      AccountAccountBlocksByCreatedByArgs,
      WithTypename<AccountBlockConnection> | string
    >
    accountSocialNetworksByAccountId?: GraphCacheResolver<
      WithTypename<Account>,
      AccountAccountSocialNetworksByAccountIdArgs,
      WithTypename<AccountSocialNetworkConnection> | string
    >
    achievementsByAccountId?: GraphCacheResolver<
      WithTypename<Account>,
      AccountAchievementsByAccountIdArgs,
      WithTypename<AchievementConnection> | string
    >
    addressesByCreatedBy?: GraphCacheResolver<
      WithTypename<Account>,
      AccountAddressesByCreatedByArgs,
      WithTypename<AddressConnection> | string
    >
    addressesByUpdatedBy?: GraphCacheResolver<
      WithTypename<Account>,
      AccountAddressesByUpdatedByArgs,
      WithTypename<AddressConnection> | string
    >
    appsByCreatedBy?: GraphCacheResolver<
      WithTypename<Account>,
      AccountAppsByCreatedByArgs,
      WithTypename<AppConnection> | string
    >
    attendancesByUpdatedBy?: GraphCacheResolver<
      WithTypename<Account>,
      AccountAttendancesByUpdatedByArgs,
      WithTypename<AttendanceConnection> | string
    >
    contactsByAccountId?: GraphCacheResolver<
      WithTypename<Account>,
      AccountContactsByAccountIdArgs,
      WithTypename<ContactConnection> | string
    >
    contactsByCreatedBy?: GraphCacheResolver<
      WithTypename<Account>,
      AccountContactsByCreatedByArgs,
      WithTypename<ContactConnection> | string
    >
    description?: GraphCacheResolver<
      WithTypename<Account>,
      Record<string, never>,
      Scalars['String'] | string
    >
    devicesByCreatedBy?: GraphCacheResolver<
      WithTypename<Account>,
      AccountDevicesByCreatedByArgs,
      WithTypename<DeviceConnection> | string
    >
    devicesByUpdatedBy?: GraphCacheResolver<
      WithTypename<Account>,
      AccountDevicesByUpdatedByArgs,
      WithTypename<DeviceConnection> | string
    >
    eventAppsByCreatedBy?: GraphCacheResolver<
      WithTypename<Account>,
      AccountEventAppsByCreatedByArgs,
      WithTypename<EventAppConnection> | string
    >
    eventFavoritesByCreatedBy?: GraphCacheResolver<
      WithTypename<Account>,
      AccountEventFavoritesByCreatedByArgs,
      WithTypename<EventFavoriteConnection> | string
    >
    eventRecommendationsByAccountId?: GraphCacheResolver<
      WithTypename<Account>,
      AccountEventRecommendationsByAccountIdArgs,
      WithTypename<EventRecommendationConnection> | string
    >
    eventsByCreatedBy?: GraphCacheResolver<
      WithTypename<Account>,
      AccountEventsByCreatedByArgs,
      WithTypename<EventConnection> | string
    >
    friendshipsByAAccountId?: GraphCacheResolver<
      WithTypename<Account>,
      AccountFriendshipsByAAccountIdArgs,
      WithTypename<FriendshipConnection> | string
    >
    friendshipsByBAccountId?: GraphCacheResolver<
      WithTypename<Account>,
      AccountFriendshipsByBAccountIdArgs,
      WithTypename<FriendshipConnection> | string
    >
    friendshipsByCreatedBy?: GraphCacheResolver<
      WithTypename<Account>,
      AccountFriendshipsByCreatedByArgs,
      WithTypename<FriendshipConnection> | string
    >
    friendshipsByUpdatedBy?: GraphCacheResolver<
      WithTypename<Account>,
      AccountFriendshipsByUpdatedByArgs,
      WithTypename<FriendshipConnection> | string
    >
    guestsByUpdatedBy?: GraphCacheResolver<
      WithTypename<Account>,
      AccountGuestsByUpdatedByArgs,
      WithTypename<GuestConnection> | string
    >
    id?: GraphCacheResolver<
      WithTypename<Account>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    imprintUrl?: GraphCacheResolver<
      WithTypename<Account>,
      Record<string, never>,
      Scalars['String'] | string
    >
    legalTermAcceptancesByAccountId?: GraphCacheResolver<
      WithTypename<Account>,
      AccountLegalTermAcceptancesByAccountIdArgs,
      WithTypename<LegalTermAcceptanceConnection> | string
    >
    preferenceEventCategoriesByAccountId?: GraphCacheResolver<
      WithTypename<Account>,
      AccountPreferenceEventCategoriesByAccountIdArgs,
      WithTypename<PreferenceEventCategoryConnection> | string
    >
    preferenceEventFormatsByAccountId?: GraphCacheResolver<
      WithTypename<Account>,
      AccountPreferenceEventFormatsByAccountIdArgs,
      WithTypename<PreferenceEventFormatConnection> | string
    >
    preferenceEventLocationsByCreatedBy?: GraphCacheResolver<
      WithTypename<Account>,
      AccountPreferenceEventLocationsByCreatedByArgs,
      WithTypename<PreferenceEventLocationConnection> | string
    >
    preferenceEventSizesByAccountId?: GraphCacheResolver<
      WithTypename<Account>,
      AccountPreferenceEventSizesByAccountIdArgs,
      WithTypename<PreferenceEventSizeConnection> | string
    >
    profilePictureByAccountId?: GraphCacheResolver<
      WithTypename<Account>,
      Record<string, never>,
      WithTypename<ProfilePicture> | string
    >
    reportsByCreatedBy?: GraphCacheResolver<
      WithTypename<Account>,
      AccountReportsByCreatedByArgs,
      WithTypename<ReportConnection> | string
    >
    reportsByTargetAccountId?: GraphCacheResolver<
      WithTypename<Account>,
      AccountReportsByTargetAccountIdArgs,
      WithTypename<ReportConnection> | string
    >
    rowId?: GraphCacheResolver<
      WithTypename<Account>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    uploadsByCreatedBy?: GraphCacheResolver<
      WithTypename<Account>,
      AccountUploadsByCreatedByArgs,
      WithTypename<UploadConnection> | string
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
      Scalars['ID'] | string
    >
    rowId?: GraphCacheResolver<
      WithTypename<AccountBlock>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
  }
  AccountBlockAccountsConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<AccountBlockAccountsConnection>,
      Record<string, never>,
      Array<WithTypename<AccountBlockAccountsEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<AccountBlockAccountsConnection>,
      Record<string, never>,
      Array<WithTypename<AccountBlockAccountsRecord> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<AccountBlockAccountsConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<AccountBlockAccountsConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  AccountBlockAccountsEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<AccountBlockAccountsEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<AccountBlockAccountsEdge>,
      Record<string, never>,
      WithTypename<AccountBlockAccountsRecord> | string
    >
  }
  AccountBlockAccountsRecord?: {
    id?: GraphCacheResolver<
      WithTypename<AccountBlockAccountsRecord>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    storageKey?: GraphCacheResolver<
      WithTypename<AccountBlockAccountsRecord>,
      Record<string, never>,
      Scalars['String'] | string
    >
    username?: GraphCacheResolver<
      WithTypename<AccountBlockAccountsRecord>,
      Record<string, never>,
      Scalars['String'] | string
    >
  }
  AccountBlockConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<AccountBlockConnection>,
      Record<string, never>,
      Array<WithTypename<AccountBlockEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<AccountBlockConnection>,
      Record<string, never>,
      Array<WithTypename<AccountBlock> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<AccountBlockConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<AccountBlockConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  AccountBlockEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<AccountBlockEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<AccountBlockEdge>,
      Record<string, never>,
      WithTypename<AccountBlock> | string
    >
  }
  AccountConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<AccountConnection>,
      Record<string, never>,
      Array<WithTypename<AccountEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<AccountConnection>,
      Record<string, never>,
      Array<WithTypename<Account> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<AccountConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<AccountConnection>,
      Record<string, never>,
      Scalars['Int'] | string
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
  AccountEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<AccountEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<AccountEdge>,
      Record<string, never>,
      WithTypename<Account> | string
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
    id?: GraphCacheResolver<
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
  AccountSocialNetworkConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<AccountSocialNetworkConnection>,
      Record<string, never>,
      Array<WithTypename<AccountSocialNetworkEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<AccountSocialNetworkConnection>,
      Record<string, never>,
      Array<WithTypename<AccountSocialNetwork> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<AccountSocialNetworkConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<AccountSocialNetworkConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  AccountSocialNetworkEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<AccountSocialNetworkEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<AccountSocialNetworkEdge>,
      Record<string, never>,
      WithTypename<AccountSocialNetwork> | string
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
      Scalars['ID'] | string
    >
    level?: GraphCacheResolver<
      WithTypename<Achievement>,
      Record<string, never>,
      Scalars['Int'] | string
    >
    rowId?: GraphCacheResolver<
      WithTypename<Achievement>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
  }
  AchievementConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<AchievementConnection>,
      Record<string, never>,
      Array<WithTypename<AchievementEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<AchievementConnection>,
      Record<string, never>,
      Array<WithTypename<Achievement> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<AchievementConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<AchievementConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  AchievementEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<AchievementEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<AchievementEdge>,
      Record<string, never>,
      WithTypename<Achievement> | string
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
    result?: GraphCacheResolver<
      WithTypename<AchievementUnlockPayload>,
      Record<string, never>,
      Scalars['UUID'] | string
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
      WithTypename<ContactConnection> | string
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
      WithTypename<EventConnection> | string
    >
    id?: GraphCacheResolver<
      WithTypename<Address>,
      Record<string, never>,
      Scalars['ID'] | string
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
    rowId?: GraphCacheResolver<
      WithTypename<Address>,
      Record<string, never>,
      Scalars['UUID'] | string
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
  AddressConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<AddressConnection>,
      Record<string, never>,
      Array<WithTypename<AddressEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<AddressConnection>,
      Record<string, never>,
      Array<WithTypename<Address> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<AddressConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<AddressConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  AddressEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<AddressEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<AddressEdge>,
      Record<string, never>,
      WithTypename<Address> | string
    >
  }
  App?: {
    accountByCreatedBy?: GraphCacheResolver<
      WithTypename<App>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    createdAt?: GraphCacheResolver<
      WithTypename<App>,
      Record<string, never>,
      Scalars['Datetime'] | string
    >
    createdBy?: GraphCacheResolver<
      WithTypename<App>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    eventAppsByAppId?: GraphCacheResolver<
      WithTypename<App>,
      AppEventAppsByAppIdArgs,
      WithTypename<EventAppConnection> | string
    >
    iconSvg?: GraphCacheResolver<
      WithTypename<App>,
      Record<string, never>,
      Scalars['String'] | string
    >
    id?: GraphCacheResolver<
      WithTypename<App>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    name?: GraphCacheResolver<
      WithTypename<App>,
      Record<string, never>,
      Scalars['String'] | string
    >
    rowId?: GraphCacheResolver<
      WithTypename<App>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    url?: GraphCacheResolver<
      WithTypename<App>,
      Record<string, never>,
      Scalars['String'] | string
    >
    urlAttendance?: GraphCacheResolver<
      WithTypename<App>,
      Record<string, never>,
      Scalars['String'] | string
    >
  }
  AppConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<AppConnection>,
      Record<string, never>,
      Array<WithTypename<AppEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<AppConnection>,
      Record<string, never>,
      Array<WithTypename<App> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<AppConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<AppConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  AppEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<AppEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<AppEdge>,
      Record<string, never>,
      WithTypename<App> | string
    >
  }
  Attendance?: {
    accountByUpdatedBy?: GraphCacheResolver<
      WithTypename<Attendance>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    checkedOut?: GraphCacheResolver<
      WithTypename<Attendance>,
      Record<string, never>,
      Scalars['Boolean'] | string
    >
    contactByContactId?: GraphCacheResolver<
      WithTypename<Attendance>,
      Record<string, never>,
      WithTypename<Contact> | string
    >
    contactId?: GraphCacheResolver<
      WithTypename<Attendance>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    createdAt?: GraphCacheResolver<
      WithTypename<Attendance>,
      Record<string, never>,
      Scalars['Datetime'] | string
    >
    guestByGuestId?: GraphCacheResolver<
      WithTypename<Attendance>,
      Record<string, never>,
      WithTypename<Guest> | string
    >
    guestId?: GraphCacheResolver<
      WithTypename<Attendance>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    id?: GraphCacheResolver<
      WithTypename<Attendance>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    rowId?: GraphCacheResolver<
      WithTypename<Attendance>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    updatedAt?: GraphCacheResolver<
      WithTypename<Attendance>,
      Record<string, never>,
      Scalars['Datetime'] | string
    >
    updatedBy?: GraphCacheResolver<
      WithTypename<Attendance>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
  }
  AttendanceConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<AttendanceConnection>,
      Record<string, never>,
      Array<WithTypename<AttendanceEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<AttendanceConnection>,
      Record<string, never>,
      Array<WithTypename<Attendance> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<AttendanceConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<AttendanceConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  AttendanceEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<AttendanceEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<AttendanceEdge>,
      Record<string, never>,
      WithTypename<Attendance> | string
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
    attendancesByContactId?: GraphCacheResolver<
      WithTypename<Contact>,
      ContactAttendancesByContactIdArgs,
      WithTypename<AttendanceConnection> | string
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
      WithTypename<GuestConnection> | string
    >
    id?: GraphCacheResolver<
      WithTypename<Contact>,
      Record<string, never>,
      Scalars['ID'] | string
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
    rowId?: GraphCacheResolver<
      WithTypename<Contact>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    timeZone?: GraphCacheResolver<
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
  ContactConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<ContactConnection>,
      Record<string, never>,
      Array<WithTypename<ContactEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<ContactConnection>,
      Record<string, never>,
      Array<WithTypename<Contact> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<ContactConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<ContactConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  ContactEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<ContactEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<ContactEdge>,
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
      WithTypename<AccountBlockEdge> | string
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
    accountSocialNetwork?: GraphCacheResolver<
      WithTypename<CreateAccountSocialNetworkPayload>,
      Record<string, never>,
      WithTypename<AccountSocialNetwork> | string
    >
    accountSocialNetworkEdge?: GraphCacheResolver<
      WithTypename<CreateAccountSocialNetworkPayload>,
      CreateAccountSocialNetworkPayloadAccountSocialNetworkEdgeArgs,
      WithTypename<AccountSocialNetworkEdge> | string
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
  CreateAddressPayload?: {
    address?: GraphCacheResolver<
      WithTypename<CreateAddressPayload>,
      Record<string, never>,
      WithTypename<Address> | string
    >
    addressEdge?: GraphCacheResolver<
      WithTypename<CreateAddressPayload>,
      CreateAddressPayloadAddressEdgeArgs,
      WithTypename<AddressEdge> | string
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
  CreateAttendancePayload?: {
    attendance?: GraphCacheResolver<
      WithTypename<CreateAttendancePayload>,
      Record<string, never>,
      WithTypename<Attendance> | string
    >
    attendanceEdge?: GraphCacheResolver<
      WithTypename<CreateAttendancePayload>,
      CreateAttendancePayloadAttendanceEdgeArgs,
      WithTypename<AttendanceEdge> | string
    >
    clientMutationId?: GraphCacheResolver<
      WithTypename<CreateAttendancePayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    query?: GraphCacheResolver<
      WithTypename<CreateAttendancePayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  CreateContactPayload?: {
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
      WithTypename<ContactEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<CreateContactPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  CreateDevicePayload?: {
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
      WithTypename<DeviceEdge> | string
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
    eventCategoryMapping?: GraphCacheResolver<
      WithTypename<CreateEventCategoryMappingPayload>,
      Record<string, never>,
      WithTypename<EventCategoryMapping> | string
    >
    eventCategoryMappingEdge?: GraphCacheResolver<
      WithTypename<CreateEventCategoryMappingPayload>,
      CreateEventCategoryMappingPayloadEventCategoryMappingEdgeArgs,
      WithTypename<EventCategoryMappingEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<CreateEventCategoryMappingPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  CreateEventFavoritePayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<CreateEventFavoritePayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    eventFavorite?: GraphCacheResolver<
      WithTypename<CreateEventFavoritePayload>,
      Record<string, never>,
      WithTypename<EventFavorite> | string
    >
    eventFavoriteEdge?: GraphCacheResolver<
      WithTypename<CreateEventFavoritePayload>,
      CreateEventFavoritePayloadEventFavoriteEdgeArgs,
      WithTypename<EventFavoriteEdge> | string
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
    eventFormatMapping?: GraphCacheResolver<
      WithTypename<CreateEventFormatMappingPayload>,
      Record<string, never>,
      WithTypename<EventFormatMapping> | string
    >
    eventFormatMappingEdge?: GraphCacheResolver<
      WithTypename<CreateEventFormatMappingPayload>,
      CreateEventFormatMappingPayloadEventFormatMappingEdgeArgs,
      WithTypename<EventFormatMappingEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<CreateEventFormatMappingPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  CreateEventPayload?: {
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
      WithTypename<EventEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<CreateEventPayload>,
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
    eventUpload?: GraphCacheResolver<
      WithTypename<CreateEventUploadPayload>,
      Record<string, never>,
      WithTypename<EventUpload> | string
    >
    eventUploadEdge?: GraphCacheResolver<
      WithTypename<CreateEventUploadPayload>,
      CreateEventUploadPayloadEventUploadEdgeArgs,
      WithTypename<EventUploadEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<CreateEventUploadPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  CreateFriendshipPayload?: {
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
      WithTypename<FriendshipEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<CreateFriendshipPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  CreateGuestPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<CreateGuestPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    guest?: GraphCacheResolver<
      WithTypename<CreateGuestPayload>,
      Record<string, never>,
      WithTypename<Guest> | string
    >
    guestEdge?: GraphCacheResolver<
      WithTypename<CreateGuestPayload>,
      CreateGuestPayloadGuestEdgeArgs,
      WithTypename<GuestEdge> | string
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
    query?: GraphCacheResolver<
      WithTypename<CreateGuestsPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
    result?: GraphCacheResolver<
      WithTypename<CreateGuestsPayload>,
      Record<string, never>,
      Array<WithTypename<Guest> | string>
    >
  }
  CreateLegalTermAcceptancePayload?: {
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
      WithTypename<LegalTermAcceptanceEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<CreateLegalTermAcceptancePayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  CreatePreferenceEventCategoryPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<CreatePreferenceEventCategoryPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    preferenceEventCategory?: GraphCacheResolver<
      WithTypename<CreatePreferenceEventCategoryPayload>,
      Record<string, never>,
      WithTypename<PreferenceEventCategory> | string
    >
    preferenceEventCategoryEdge?: GraphCacheResolver<
      WithTypename<CreatePreferenceEventCategoryPayload>,
      CreatePreferenceEventCategoryPayloadPreferenceEventCategoryEdgeArgs,
      WithTypename<PreferenceEventCategoryEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<CreatePreferenceEventCategoryPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  CreatePreferenceEventFormatPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<CreatePreferenceEventFormatPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    preferenceEventFormat?: GraphCacheResolver<
      WithTypename<CreatePreferenceEventFormatPayload>,
      Record<string, never>,
      WithTypename<PreferenceEventFormat> | string
    >
    preferenceEventFormatEdge?: GraphCacheResolver<
      WithTypename<CreatePreferenceEventFormatPayload>,
      CreatePreferenceEventFormatPayloadPreferenceEventFormatEdgeArgs,
      WithTypename<PreferenceEventFormatEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<CreatePreferenceEventFormatPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  CreatePreferenceEventLocationPayload?: {
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
      WithTypename<PreferenceEventLocationEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<CreatePreferenceEventLocationPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  CreatePreferenceEventSizePayload?: {
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
      WithTypename<PreferenceEventSizeEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<CreatePreferenceEventSizePayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  CreateProfilePicturePayload?: {
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
      WithTypename<ProfilePictureEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<CreateProfilePicturePayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  CreateReportPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<CreateReportPayload>,
      Record<string, never>,
      Scalars['String'] | string
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
      WithTypename<ReportEdge> | string
    >
  }
  CreateUploadPayload?: {
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
      WithTypename<UploadEdge> | string
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
      WithTypename<AccountBlockEdge> | string
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
    accountSocialNetwork?: GraphCacheResolver<
      WithTypename<DeleteAccountSocialNetworkPayload>,
      Record<string, never>,
      WithTypename<AccountSocialNetwork> | string
    >
    accountSocialNetworkEdge?: GraphCacheResolver<
      WithTypename<DeleteAccountSocialNetworkPayload>,
      DeleteAccountSocialNetworkPayloadAccountSocialNetworkEdgeArgs,
      WithTypename<AccountSocialNetworkEdge> | string
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
  DeleteAddressPayload?: {
    address?: GraphCacheResolver<
      WithTypename<DeleteAddressPayload>,
      Record<string, never>,
      WithTypename<Address> | string
    >
    addressEdge?: GraphCacheResolver<
      WithTypename<DeleteAddressPayload>,
      DeleteAddressPayloadAddressEdgeArgs,
      WithTypename<AddressEdge> | string
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
      WithTypename<ContactEdge> | string
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
      WithTypename<DeviceEdge> | string
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
    eventCategoryMapping?: GraphCacheResolver<
      WithTypename<DeleteEventCategoryMappingPayload>,
      Record<string, never>,
      WithTypename<EventCategoryMapping> | string
    >
    eventCategoryMappingEdge?: GraphCacheResolver<
      WithTypename<DeleteEventCategoryMappingPayload>,
      DeleteEventCategoryMappingPayloadEventCategoryMappingEdgeArgs,
      WithTypename<EventCategoryMappingEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<DeleteEventCategoryMappingPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  DeleteEventFavoritePayload?: {
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
    eventFavorite?: GraphCacheResolver<
      WithTypename<DeleteEventFavoritePayload>,
      Record<string, never>,
      WithTypename<EventFavorite> | string
    >
    eventFavoriteEdge?: GraphCacheResolver<
      WithTypename<DeleteEventFavoritePayload>,
      DeleteEventFavoritePayloadEventFavoriteEdgeArgs,
      WithTypename<EventFavoriteEdge> | string
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
    eventFormatMapping?: GraphCacheResolver<
      WithTypename<DeleteEventFormatMappingPayload>,
      Record<string, never>,
      WithTypename<EventFormatMapping> | string
    >
    eventFormatMappingEdge?: GraphCacheResolver<
      WithTypename<DeleteEventFormatMappingPayload>,
      DeleteEventFormatMappingPayloadEventFormatMappingEdgeArgs,
      WithTypename<EventFormatMappingEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<DeleteEventFormatMappingPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  DeleteEventPayload?: {
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
      WithTypename<EventEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<DeleteEventPayload>,
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
    eventUpload?: GraphCacheResolver<
      WithTypename<DeleteEventUploadPayload>,
      Record<string, never>,
      WithTypename<EventUpload> | string
    >
    eventUploadEdge?: GraphCacheResolver<
      WithTypename<DeleteEventUploadPayload>,
      DeleteEventUploadPayloadEventUploadEdgeArgs,
      WithTypename<EventUploadEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<DeleteEventUploadPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  DeleteFriendshipPayload?: {
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
      WithTypename<FriendshipEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<DeleteFriendshipPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  DeleteGuestPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<DeleteGuestPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    deletedGuestId?: GraphCacheResolver<
      WithTypename<DeleteGuestPayload>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    guest?: GraphCacheResolver<
      WithTypename<DeleteGuestPayload>,
      Record<string, never>,
      WithTypename<Guest> | string
    >
    guestEdge?: GraphCacheResolver<
      WithTypename<DeleteGuestPayload>,
      DeleteGuestPayloadGuestEdgeArgs,
      WithTypename<GuestEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<DeleteGuestPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  DeletePreferenceEventCategoryPayload?: {
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
    preferenceEventCategory?: GraphCacheResolver<
      WithTypename<DeletePreferenceEventCategoryPayload>,
      Record<string, never>,
      WithTypename<PreferenceEventCategory> | string
    >
    preferenceEventCategoryEdge?: GraphCacheResolver<
      WithTypename<DeletePreferenceEventCategoryPayload>,
      DeletePreferenceEventCategoryPayloadPreferenceEventCategoryEdgeArgs,
      WithTypename<PreferenceEventCategoryEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<DeletePreferenceEventCategoryPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  DeletePreferenceEventFormatPayload?: {
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
    preferenceEventFormat?: GraphCacheResolver<
      WithTypename<DeletePreferenceEventFormatPayload>,
      Record<string, never>,
      WithTypename<PreferenceEventFormat> | string
    >
    preferenceEventFormatEdge?: GraphCacheResolver<
      WithTypename<DeletePreferenceEventFormatPayload>,
      DeletePreferenceEventFormatPayloadPreferenceEventFormatEdgeArgs,
      WithTypename<PreferenceEventFormatEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<DeletePreferenceEventFormatPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  DeletePreferenceEventLocationPayload?: {
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
      WithTypename<PreferenceEventLocationEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<DeletePreferenceEventLocationPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  DeletePreferenceEventSizePayload?: {
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
      WithTypename<PreferenceEventSizeEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<DeletePreferenceEventSizePayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  DeleteProfilePicturePayload?: {
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
      WithTypename<ProfilePictureEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<DeleteProfilePicturePayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  DeleteUploadPayload?: {
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
      WithTypename<UploadEdge> | string
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
      Scalars['ID'] | string
    >
    rowId?: GraphCacheResolver<
      WithTypename<Device>,
      Record<string, never>,
      Scalars['UUID'] | string
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
  DeviceConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<DeviceConnection>,
      Record<string, never>,
      Array<WithTypename<DeviceEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<DeviceConnection>,
      Record<string, never>,
      Array<WithTypename<Device> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<DeviceConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<DeviceConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  DeviceEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<DeviceEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<DeviceEdge>,
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
    eventAppsByEventId?: GraphCacheResolver<
      WithTypename<Event>,
      EventEventAppsByEventIdArgs,
      WithTypename<EventAppConnection> | string
    >
    eventCategoryMappingsByEventId?: GraphCacheResolver<
      WithTypename<Event>,
      EventEventCategoryMappingsByEventIdArgs,
      WithTypename<EventCategoryMappingConnection> | string
    >
    eventFavoritesByEventId?: GraphCacheResolver<
      WithTypename<Event>,
      EventEventFavoritesByEventIdArgs,
      WithTypename<EventFavoriteConnection> | string
    >
    eventFormatMappingsByEventId?: GraphCacheResolver<
      WithTypename<Event>,
      EventEventFormatMappingsByEventIdArgs,
      WithTypename<EventFormatMappingConnection> | string
    >
    eventRecommendationsByEventId?: GraphCacheResolver<
      WithTypename<Event>,
      EventEventRecommendationsByEventIdArgs,
      WithTypename<EventRecommendationConnection> | string
    >
    eventUploadsByEventId?: GraphCacheResolver<
      WithTypename<Event>,
      EventEventUploadsByEventIdArgs,
      WithTypename<EventUploadConnection> | string
    >
    guestCountMaximum?: GraphCacheResolver<
      WithTypename<Event>,
      Record<string, never>,
      Scalars['Int'] | string
    >
    guestsByEventId?: GraphCacheResolver<
      WithTypename<Event>,
      EventGuestsByEventIdArgs,
      WithTypename<GuestConnection> | string
    >
    id?: GraphCacheResolver<
      WithTypename<Event>,
      Record<string, never>,
      Scalars['ID'] | string
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
    reportsByTargetEventId?: GraphCacheResolver<
      WithTypename<Event>,
      EventReportsByTargetEventIdArgs,
      WithTypename<ReportConnection> | string
    >
    rowId?: GraphCacheResolver<
      WithTypename<Event>,
      Record<string, never>,
      Scalars['UUID'] | string
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
  EventApp?: {
    accountByCreatedBy?: GraphCacheResolver<
      WithTypename<EventApp>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    appByAppId?: GraphCacheResolver<
      WithTypename<EventApp>,
      Record<string, never>,
      WithTypename<App> | string
    >
    appId?: GraphCacheResolver<
      WithTypename<EventApp>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    createdAt?: GraphCacheResolver<
      WithTypename<EventApp>,
      Record<string, never>,
      Scalars['Datetime'] | string
    >
    createdBy?: GraphCacheResolver<
      WithTypename<EventApp>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    eventByEventId?: GraphCacheResolver<
      WithTypename<EventApp>,
      Record<string, never>,
      WithTypename<Event> | string
    >
    eventId?: GraphCacheResolver<
      WithTypename<EventApp>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    id?: GraphCacheResolver<
      WithTypename<EventApp>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    rowId?: GraphCacheResolver<
      WithTypename<EventApp>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
  }
  EventAppConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<EventAppConnection>,
      Record<string, never>,
      Array<WithTypename<EventAppEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<EventAppConnection>,
      Record<string, never>,
      Array<WithTypename<EventApp> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<EventAppConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<EventAppConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  EventAppEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<EventAppEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<EventAppEdge>,
      Record<string, never>,
      WithTypename<EventApp> | string
    >
  }
  EventCategory?: {
    eventCategoryMappingsByCategoryId?: GraphCacheResolver<
      WithTypename<EventCategory>,
      EventCategoryEventCategoryMappingsByCategoryIdArgs,
      WithTypename<EventCategoryMappingConnection> | string
    >
    id?: GraphCacheResolver<
      WithTypename<EventCategory>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    name?: GraphCacheResolver<
      WithTypename<EventCategory>,
      Record<string, never>,
      Scalars['String'] | string
    >
    preferenceEventCategoriesByCategoryId?: GraphCacheResolver<
      WithTypename<EventCategory>,
      EventCategoryPreferenceEventCategoriesByCategoryIdArgs,
      WithTypename<PreferenceEventCategoryConnection> | string
    >
    rowId?: GraphCacheResolver<
      WithTypename<EventCategory>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
  }
  EventCategoryConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<EventCategoryConnection>,
      Record<string, never>,
      Array<WithTypename<EventCategoryEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<EventCategoryConnection>,
      Record<string, never>,
      Array<WithTypename<EventCategory> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<EventCategoryConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<EventCategoryConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  EventCategoryEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<EventCategoryEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<EventCategoryEdge>,
      Record<string, never>,
      WithTypename<EventCategory> | string
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
    id?: GraphCacheResolver<
      WithTypename<EventCategoryMapping>,
      Record<string, never>,
      Scalars['ID'] | string
    >
  }
  EventCategoryMappingConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<EventCategoryMappingConnection>,
      Record<string, never>,
      Array<WithTypename<EventCategoryMappingEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<EventCategoryMappingConnection>,
      Record<string, never>,
      Array<WithTypename<EventCategoryMapping> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<EventCategoryMappingConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<EventCategoryMappingConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  EventCategoryMappingEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<EventCategoryMappingEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<EventCategoryMappingEdge>,
      Record<string, never>,
      WithTypename<EventCategoryMapping> | string
    >
  }
  EventConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<EventConnection>,
      Record<string, never>,
      Array<WithTypename<EventEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<EventConnection>,
      Record<string, never>,
      Array<WithTypename<Event> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<EventConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<EventConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  EventDeletePayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<EventDeletePayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    eventEdge?: GraphCacheResolver<
      WithTypename<EventDeletePayload>,
      EventDeletePayloadEventEdgeArgs,
      WithTypename<EventEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<EventDeletePayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
    result?: GraphCacheResolver<
      WithTypename<EventDeletePayload>,
      Record<string, never>,
      WithTypename<Event> | string
    >
  }
  EventEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<EventEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<EventEdge>,
      Record<string, never>,
      WithTypename<Event> | string
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
      Scalars['ID'] | string
    >
    rowId?: GraphCacheResolver<
      WithTypename<EventFavorite>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
  }
  EventFavoriteConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<EventFavoriteConnection>,
      Record<string, never>,
      Array<WithTypename<EventFavoriteEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<EventFavoriteConnection>,
      Record<string, never>,
      Array<WithTypename<EventFavorite> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<EventFavoriteConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<EventFavoriteConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  EventFavoriteEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<EventFavoriteEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<EventFavoriteEdge>,
      Record<string, never>,
      WithTypename<EventFavorite> | string
    >
  }
  EventFormat?: {
    eventFormatMappingsByFormatId?: GraphCacheResolver<
      WithTypename<EventFormat>,
      EventFormatEventFormatMappingsByFormatIdArgs,
      WithTypename<EventFormatMappingConnection> | string
    >
    id?: GraphCacheResolver<
      WithTypename<EventFormat>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    name?: GraphCacheResolver<
      WithTypename<EventFormat>,
      Record<string, never>,
      Scalars['String'] | string
    >
    preferenceEventFormatsByFormatId?: GraphCacheResolver<
      WithTypename<EventFormat>,
      EventFormatPreferenceEventFormatsByFormatIdArgs,
      WithTypename<PreferenceEventFormatConnection> | string
    >
    rowId?: GraphCacheResolver<
      WithTypename<EventFormat>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
  }
  EventFormatConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<EventFormatConnection>,
      Record<string, never>,
      Array<WithTypename<EventFormatEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<EventFormatConnection>,
      Record<string, never>,
      Array<WithTypename<EventFormat> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<EventFormatConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<EventFormatConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  EventFormatEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<EventFormatEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<EventFormatEdge>,
      Record<string, never>,
      WithTypename<EventFormat> | string
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
    id?: GraphCacheResolver<
      WithTypename<EventFormatMapping>,
      Record<string, never>,
      Scalars['ID'] | string
    >
  }
  EventFormatMappingConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<EventFormatMappingConnection>,
      Record<string, never>,
      Array<WithTypename<EventFormatMappingEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<EventFormatMappingConnection>,
      Record<string, never>,
      Array<WithTypename<EventFormatMapping> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<EventFormatMappingConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<EventFormatMappingConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  EventFormatMappingEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<EventFormatMappingEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<EventFormatMappingEdge>,
      Record<string, never>,
      WithTypename<EventFormatMapping> | string
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
    id?: GraphCacheResolver<
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
  EventRecommendationConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<EventRecommendationConnection>,
      Record<string, never>,
      Array<WithTypename<EventRecommendationEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<EventRecommendationConnection>,
      Record<string, never>,
      Array<WithTypename<EventRecommendation> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<EventRecommendationConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<EventRecommendationConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  EventRecommendationEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<EventRecommendationEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<EventRecommendationEdge>,
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
    query?: GraphCacheResolver<
      WithTypename<EventUnlockPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
    result?: GraphCacheResolver<
      WithTypename<EventUnlockPayload>,
      Record<string, never>,
      Array<WithTypename<EventUnlockRecord> | string>
    >
  }
  EventUnlockRecord?: {
    creatorUsername?: GraphCacheResolver<
      WithTypename<EventUnlockRecord>,
      Record<string, never>,
      Scalars['String'] | string
    >
    eventSlug?: GraphCacheResolver<
      WithTypename<EventUnlockRecord>,
      Record<string, never>,
      Scalars['String'] | string
    >
    jwt?: GraphCacheResolver<
      WithTypename<EventUnlockRecord>,
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
      Scalars['ID'] | string
    >
    isHeaderImage?: GraphCacheResolver<
      WithTypename<EventUpload>,
      Record<string, never>,
      Scalars['Boolean'] | string
    >
    rowId?: GraphCacheResolver<
      WithTypename<EventUpload>,
      Record<string, never>,
      Scalars['UUID'] | string
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
  EventUploadConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<EventUploadConnection>,
      Record<string, never>,
      Array<WithTypename<EventUploadEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<EventUploadConnection>,
      Record<string, never>,
      Array<WithTypename<EventUpload> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<EventUploadConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<EventUploadConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  EventUploadEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<EventUploadEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<EventUploadEdge>,
      Record<string, never>,
      WithTypename<EventUpload> | string
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
      Scalars['ID'] | string
    >
    rowId?: GraphCacheResolver<
      WithTypename<Friendship>,
      Record<string, never>,
      Scalars['UUID'] | string
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
  FriendshipConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<FriendshipConnection>,
      Record<string, never>,
      Array<WithTypename<FriendshipEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<FriendshipConnection>,
      Record<string, never>,
      Array<WithTypename<Friendship> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<FriendshipConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<FriendshipConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  FriendshipEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<FriendshipEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<FriendshipEdge>,
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
    attendanceByGuestId?: GraphCacheResolver<
      WithTypename<Guest>,
      Record<string, never>,
      WithTypename<Attendance> | string
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
      Scalars['ID'] | string
    >
    rowId?: GraphCacheResolver<
      WithTypename<Guest>,
      Record<string, never>,
      Scalars['UUID'] | string
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
  GuestConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<GuestConnection>,
      Record<string, never>,
      Array<WithTypename<GuestEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<GuestConnection>,
      Record<string, never>,
      Array<WithTypename<Guest> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<GuestConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<GuestConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  GuestContactIdsConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<GuestContactIdsConnection>,
      Record<string, never>,
      Array<WithTypename<GuestContactIdsEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<GuestContactIdsConnection>,
      Record<string, never>,
      Array<Scalars['UUID'] | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<GuestContactIdsConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<GuestContactIdsConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  GuestContactIdsEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<GuestContactIdsEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<GuestContactIdsEdge>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
  }
  GuestEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<GuestEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<GuestEdge>,
      Record<string, never>,
      WithTypename<Guest> | string
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
  GuestFlatConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<GuestFlatConnection>,
      Record<string, never>,
      Array<WithTypename<GuestFlatEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<GuestFlatConnection>,
      Record<string, never>,
      Array<WithTypename<GuestFlat> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<GuestFlatConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<GuestFlatConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  GuestFlatEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<GuestFlatEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<GuestFlatEdge>,
      Record<string, never>,
      WithTypename<GuestFlat> | string
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
  JwtCreatePayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<JwtCreatePayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    query?: GraphCacheResolver<
      WithTypename<JwtCreatePayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
    result?: GraphCacheResolver<
      WithTypename<JwtCreatePayload>,
      Record<string, never>,
      Scalars['Jwt'] | string
    >
  }
  JwtUpdateAttendanceAddPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<JwtUpdateAttendanceAddPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    query?: GraphCacheResolver<
      WithTypename<JwtUpdateAttendanceAddPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
    result?: GraphCacheResolver<
      WithTypename<JwtUpdateAttendanceAddPayload>,
      Record<string, never>,
      Scalars['Jwt'] | string
    >
  }
  JwtUpdatePayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<JwtUpdatePayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    query?: GraphCacheResolver<
      WithTypename<JwtUpdatePayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
    result?: GraphCacheResolver<
      WithTypename<JwtUpdatePayload>,
      Record<string, never>,
      Scalars['Jwt'] | string
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
      Scalars['ID'] | string
    >
    language?: GraphCacheResolver<
      WithTypename<LegalTerm>,
      Record<string, never>,
      Scalars['String'] | string
    >
    legalTermAcceptancesByLegalTermId?: GraphCacheResolver<
      WithTypename<LegalTerm>,
      LegalTermLegalTermAcceptancesByLegalTermIdArgs,
      WithTypename<LegalTermAcceptanceConnection> | string
    >
    rowId?: GraphCacheResolver<
      WithTypename<LegalTerm>,
      Record<string, never>,
      Scalars['UUID'] | string
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
      Scalars['ID'] | string
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
    rowId?: GraphCacheResolver<
      WithTypename<LegalTermAcceptance>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
  }
  LegalTermAcceptanceConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<LegalTermAcceptanceConnection>,
      Record<string, never>,
      Array<WithTypename<LegalTermAcceptanceEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<LegalTermAcceptanceConnection>,
      Record<string, never>,
      Array<WithTypename<LegalTermAcceptance> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<LegalTermAcceptanceConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<LegalTermAcceptanceConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  LegalTermAcceptanceEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<LegalTermAcceptanceEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<LegalTermAcceptanceEdge>,
      Record<string, never>,
      WithTypename<LegalTermAcceptance> | string
    >
  }
  LegalTermConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<LegalTermConnection>,
      Record<string, never>,
      Array<WithTypename<LegalTermEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<LegalTermConnection>,
      Record<string, never>,
      Array<WithTypename<LegalTerm> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<LegalTermConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<LegalTermConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  LegalTermEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<LegalTermEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<LegalTermEdge>,
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
      Scalars['ID'] | string
    >
    rowId?: GraphCacheResolver<
      WithTypename<PreferenceEventCategory>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
  }
  PreferenceEventCategoryConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<PreferenceEventCategoryConnection>,
      Record<string, never>,
      Array<WithTypename<PreferenceEventCategoryEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<PreferenceEventCategoryConnection>,
      Record<string, never>,
      Array<WithTypename<PreferenceEventCategory> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<PreferenceEventCategoryConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<PreferenceEventCategoryConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  PreferenceEventCategoryEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<PreferenceEventCategoryEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<PreferenceEventCategoryEdge>,
      Record<string, never>,
      WithTypename<PreferenceEventCategory> | string
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
      Scalars['ID'] | string
    >
    rowId?: GraphCacheResolver<
      WithTypename<PreferenceEventFormat>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
  }
  PreferenceEventFormatConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<PreferenceEventFormatConnection>,
      Record<string, never>,
      Array<WithTypename<PreferenceEventFormatEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<PreferenceEventFormatConnection>,
      Record<string, never>,
      Array<WithTypename<PreferenceEventFormat> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<PreferenceEventFormatConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<PreferenceEventFormatConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  PreferenceEventFormatEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<PreferenceEventFormatEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<PreferenceEventFormatEdge>,
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
      Scalars['ID'] | string
    >
    location?: GraphCacheResolver<
      WithTypename<PreferenceEventLocation>,
      Record<string, never>,
      WithTypename<GeographyPoint> | string
    >
    radius?: GraphCacheResolver<
      WithTypename<PreferenceEventLocation>,
      Record<string, never>,
      Scalars['Float'] | string
    >
    rowId?: GraphCacheResolver<
      WithTypename<PreferenceEventLocation>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
  }
  PreferenceEventLocationConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<PreferenceEventLocationConnection>,
      Record<string, never>,
      Array<WithTypename<PreferenceEventLocationEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<PreferenceEventLocationConnection>,
      Record<string, never>,
      Array<WithTypename<PreferenceEventLocation> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<PreferenceEventLocationConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<PreferenceEventLocationConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  PreferenceEventLocationEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<PreferenceEventLocationEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<PreferenceEventLocationEdge>,
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
      Scalars['ID'] | string
    >
    rowId?: GraphCacheResolver<
      WithTypename<PreferenceEventSize>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
  }
  PreferenceEventSizeConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<PreferenceEventSizeConnection>,
      Record<string, never>,
      Array<WithTypename<PreferenceEventSizeEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<PreferenceEventSizeConnection>,
      Record<string, never>,
      Array<WithTypename<PreferenceEventSize> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<PreferenceEventSizeConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<PreferenceEventSizeConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  PreferenceEventSizeEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<PreferenceEventSizeEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<PreferenceEventSizeEdge>,
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
      Scalars['ID'] | string
    >
    rowId?: GraphCacheResolver<
      WithTypename<ProfilePicture>,
      Record<string, never>,
      Scalars['UUID'] | string
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
  ProfilePictureConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<ProfilePictureConnection>,
      Record<string, never>,
      Array<WithTypename<ProfilePictureEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<ProfilePictureConnection>,
      Record<string, never>,
      Array<WithTypename<ProfilePicture> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<ProfilePictureConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<ProfilePictureConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  ProfilePictureEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<ProfilePictureEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<ProfilePictureEdge>,
      Record<string, never>,
      WithTypename<ProfilePicture> | string
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
      Scalars['ID'] | string
    >
    reason?: GraphCacheResolver<
      WithTypename<Report>,
      Record<string, never>,
      Scalars['String'] | string
    >
    rowId?: GraphCacheResolver<
      WithTypename<Report>,
      Record<string, never>,
      Scalars['UUID'] | string
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
  ReportConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<ReportConnection>,
      Record<string, never>,
      Array<WithTypename<ReportEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<ReportConnection>,
      Record<string, never>,
      Array<WithTypename<Report> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<ReportConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<ReportConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  ReportEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<ReportEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<ReportEdge>,
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
      WithTypename<AccountEdge> | string
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
    accountSocialNetwork?: GraphCacheResolver<
      WithTypename<UpdateAccountSocialNetworkPayload>,
      Record<string, never>,
      WithTypename<AccountSocialNetwork> | string
    >
    accountSocialNetworkEdge?: GraphCacheResolver<
      WithTypename<UpdateAccountSocialNetworkPayload>,
      UpdateAccountSocialNetworkPayloadAccountSocialNetworkEdgeArgs,
      WithTypename<AccountSocialNetworkEdge> | string
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
  UpdateAddressPayload?: {
    address?: GraphCacheResolver<
      WithTypename<UpdateAddressPayload>,
      Record<string, never>,
      WithTypename<Address> | string
    >
    addressEdge?: GraphCacheResolver<
      WithTypename<UpdateAddressPayload>,
      UpdateAddressPayloadAddressEdgeArgs,
      WithTypename<AddressEdge> | string
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
  UpdateAttendancePayload?: {
    attendance?: GraphCacheResolver<
      WithTypename<UpdateAttendancePayload>,
      Record<string, never>,
      WithTypename<Attendance> | string
    >
    attendanceEdge?: GraphCacheResolver<
      WithTypename<UpdateAttendancePayload>,
      UpdateAttendancePayloadAttendanceEdgeArgs,
      WithTypename<AttendanceEdge> | string
    >
    clientMutationId?: GraphCacheResolver<
      WithTypename<UpdateAttendancePayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    query?: GraphCacheResolver<
      WithTypename<UpdateAttendancePayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  UpdateContactPayload?: {
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
      WithTypename<ContactEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<UpdateContactPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  UpdateDevicePayload?: {
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
      WithTypename<DeviceEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<UpdateDevicePayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  UpdateEventPayload?: {
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
      WithTypename<EventEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<UpdateEventPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  UpdateFriendshipPayload?: {
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
      WithTypename<FriendshipEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<UpdateFriendshipPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  UpdateGuestPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<UpdateGuestPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    guest?: GraphCacheResolver<
      WithTypename<UpdateGuestPayload>,
      Record<string, never>,
      WithTypename<Guest> | string
    >
    guestEdge?: GraphCacheResolver<
      WithTypename<UpdateGuestPayload>,
      UpdateGuestPayloadGuestEdgeArgs,
      WithTypename<GuestEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<UpdateGuestPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  UpdateProfilePicturePayload?: {
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
      WithTypename<ProfilePictureEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<UpdateProfilePicturePayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  UpdateUploadPayload?: {
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
      WithTypename<UploadEdge> | string
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
      WithTypename<EventUploadConnection> | string
    >
    id?: GraphCacheResolver<
      WithTypename<Upload>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    name?: GraphCacheResolver<
      WithTypename<Upload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    profilePicturesByUploadId?: GraphCacheResolver<
      WithTypename<Upload>,
      UploadProfilePicturesByUploadIdArgs,
      WithTypename<ProfilePictureConnection> | string
    >
    reportsByTargetUploadId?: GraphCacheResolver<
      WithTypename<Upload>,
      UploadReportsByTargetUploadIdArgs,
      WithTypename<ReportConnection> | string
    >
    rowId?: GraphCacheResolver<
      WithTypename<Upload>,
      Record<string, never>,
      Scalars['UUID'] | string
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
  UploadConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<UploadConnection>,
      Record<string, never>,
      Array<WithTypename<UploadEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<UploadConnection>,
      Record<string, never>,
      Array<WithTypename<Upload> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<UploadConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<UploadConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  UploadEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<UploadEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<UploadEdge>,
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
  createAccountBlock?: GraphCacheOptimisticMutationResolver<
    MutationCreateAccountBlockArgs,
    Maybe<WithTypename<CreateAccountBlockPayload>>
  >
  createAccountSocialNetwork?: GraphCacheOptimisticMutationResolver<
    MutationCreateAccountSocialNetworkArgs,
    Maybe<WithTypename<CreateAccountSocialNetworkPayload>>
  >
  createAddress?: GraphCacheOptimisticMutationResolver<
    MutationCreateAddressArgs,
    Maybe<WithTypename<CreateAddressPayload>>
  >
  createAttendance?: GraphCacheOptimisticMutationResolver<
    MutationCreateAttendanceArgs,
    Maybe<WithTypename<CreateAttendancePayload>>
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
  deleteAccountBlockByRowId?: GraphCacheOptimisticMutationResolver<
    MutationDeleteAccountBlockByRowIdArgs,
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
  deleteAddress?: GraphCacheOptimisticMutationResolver<
    MutationDeleteAddressArgs,
    Maybe<WithTypename<DeleteAddressPayload>>
  >
  deleteAddressByRowId?: GraphCacheOptimisticMutationResolver<
    MutationDeleteAddressByRowIdArgs,
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
  deleteContactByRowId?: GraphCacheOptimisticMutationResolver<
    MutationDeleteContactByRowIdArgs,
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
  deleteDeviceByRowId?: GraphCacheOptimisticMutationResolver<
    MutationDeleteDeviceByRowIdArgs,
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
  deleteEventByRowId?: GraphCacheOptimisticMutationResolver<
    MutationDeleteEventByRowIdArgs,
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
  deleteEventFavoriteByRowId?: GraphCacheOptimisticMutationResolver<
    MutationDeleteEventFavoriteByRowIdArgs,
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
  deleteEventUpload?: GraphCacheOptimisticMutationResolver<
    MutationDeleteEventUploadArgs,
    Maybe<WithTypename<DeleteEventUploadPayload>>
  >
  deleteEventUploadByEventIdAndUploadId?: GraphCacheOptimisticMutationResolver<
    MutationDeleteEventUploadByEventIdAndUploadIdArgs,
    Maybe<WithTypename<DeleteEventUploadPayload>>
  >
  deleteEventUploadByRowId?: GraphCacheOptimisticMutationResolver<
    MutationDeleteEventUploadByRowIdArgs,
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
  deleteFriendshipByRowId?: GraphCacheOptimisticMutationResolver<
    MutationDeleteFriendshipByRowIdArgs,
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
  deleteGuestByRowId?: GraphCacheOptimisticMutationResolver<
    MutationDeleteGuestByRowIdArgs,
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
  deletePreferenceEventCategoryByRowId?: GraphCacheOptimisticMutationResolver<
    MutationDeletePreferenceEventCategoryByRowIdArgs,
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
  deletePreferenceEventFormatByRowId?: GraphCacheOptimisticMutationResolver<
    MutationDeletePreferenceEventFormatByRowIdArgs,
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
  deletePreferenceEventLocationByRowId?: GraphCacheOptimisticMutationResolver<
    MutationDeletePreferenceEventLocationByRowIdArgs,
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
  deletePreferenceEventSizeByRowId?: GraphCacheOptimisticMutationResolver<
    MutationDeletePreferenceEventSizeByRowIdArgs,
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
  deleteProfilePictureByRowId?: GraphCacheOptimisticMutationResolver<
    MutationDeleteProfilePictureByRowIdArgs,
    Maybe<WithTypename<DeleteProfilePicturePayload>>
  >
  deleteUpload?: GraphCacheOptimisticMutationResolver<
    MutationDeleteUploadArgs,
    Maybe<WithTypename<DeleteUploadPayload>>
  >
  deleteUploadByRowId?: GraphCacheOptimisticMutationResolver<
    MutationDeleteUploadByRowIdArgs,
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
  jwtCreate?: GraphCacheOptimisticMutationResolver<
    MutationJwtCreateArgs,
    Maybe<WithTypename<JwtCreatePayload>>
  >
  jwtUpdate?: GraphCacheOptimisticMutationResolver<
    MutationJwtUpdateArgs,
    Maybe<WithTypename<JwtUpdatePayload>>
  >
  jwtUpdateAttendanceAdd?: GraphCacheOptimisticMutationResolver<
    MutationJwtUpdateAttendanceAddArgs,
    Maybe<WithTypename<JwtUpdateAttendanceAddPayload>>
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
  updateAccountByRowId?: GraphCacheOptimisticMutationResolver<
    MutationUpdateAccountByRowIdArgs,
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
  updateAddress?: GraphCacheOptimisticMutationResolver<
    MutationUpdateAddressArgs,
    Maybe<WithTypename<UpdateAddressPayload>>
  >
  updateAddressByRowId?: GraphCacheOptimisticMutationResolver<
    MutationUpdateAddressByRowIdArgs,
    Maybe<WithTypename<UpdateAddressPayload>>
  >
  updateAttendance?: GraphCacheOptimisticMutationResolver<
    MutationUpdateAttendanceArgs,
    Maybe<WithTypename<UpdateAttendancePayload>>
  >
  updateAttendanceByGuestId?: GraphCacheOptimisticMutationResolver<
    MutationUpdateAttendanceByGuestIdArgs,
    Maybe<WithTypename<UpdateAttendancePayload>>
  >
  updateAttendanceByRowId?: GraphCacheOptimisticMutationResolver<
    MutationUpdateAttendanceByRowIdArgs,
    Maybe<WithTypename<UpdateAttendancePayload>>
  >
  updateContact?: GraphCacheOptimisticMutationResolver<
    MutationUpdateContactArgs,
    Maybe<WithTypename<UpdateContactPayload>>
  >
  updateContactByCreatedByAndAccountId?: GraphCacheOptimisticMutationResolver<
    MutationUpdateContactByCreatedByAndAccountIdArgs,
    Maybe<WithTypename<UpdateContactPayload>>
  >
  updateContactByRowId?: GraphCacheOptimisticMutationResolver<
    MutationUpdateContactByRowIdArgs,
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
  updateDeviceByRowId?: GraphCacheOptimisticMutationResolver<
    MutationUpdateDeviceByRowIdArgs,
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
  updateEventByRowId?: GraphCacheOptimisticMutationResolver<
    MutationUpdateEventByRowIdArgs,
    Maybe<WithTypename<UpdateEventPayload>>
  >
  updateFriendship?: GraphCacheOptimisticMutationResolver<
    MutationUpdateFriendshipArgs,
    Maybe<WithTypename<UpdateFriendshipPayload>>
  >
  updateFriendshipByAAccountIdAndBAccountId?: GraphCacheOptimisticMutationResolver<
    MutationUpdateFriendshipByAAccountIdAndBAccountIdArgs,
    Maybe<WithTypename<UpdateFriendshipPayload>>
  >
  updateFriendshipByRowId?: GraphCacheOptimisticMutationResolver<
    MutationUpdateFriendshipByRowIdArgs,
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
  updateGuestByRowId?: GraphCacheOptimisticMutationResolver<
    MutationUpdateGuestByRowIdArgs,
    Maybe<WithTypename<UpdateGuestPayload>>
  >
  updateProfilePicture?: GraphCacheOptimisticMutationResolver<
    MutationUpdateProfilePictureArgs,
    Maybe<WithTypename<UpdateProfilePicturePayload>>
  >
  updateProfilePictureByAccountId?: GraphCacheOptimisticMutationResolver<
    MutationUpdateProfilePictureByAccountIdArgs,
    Maybe<WithTypename<UpdateProfilePicturePayload>>
  >
  updateProfilePictureByRowId?: GraphCacheOptimisticMutationResolver<
    MutationUpdateProfilePictureByRowIdArgs,
    Maybe<WithTypename<UpdateProfilePicturePayload>>
  >
  updateUpload?: GraphCacheOptimisticMutationResolver<
    MutationUpdateUploadArgs,
    Maybe<WithTypename<UpdateUploadPayload>>
  >
  updateUploadByRowId?: GraphCacheOptimisticMutationResolver<
    MutationUpdateUploadByRowIdArgs,
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
    accountBlockAccounts?: GraphCacheUpdateResolver<
      {
        accountBlockAccounts: Maybe<
          WithTypename<AccountBlockAccountsConnection>
        >
      },
      QueryAccountBlockAccountsArgs
    >
    accountBlockByCreatedByAndBlockedAccountId?: GraphCacheUpdateResolver<
      {
        accountBlockByCreatedByAndBlockedAccountId: Maybe<
          WithTypename<AccountBlock>
        >
      },
      QueryAccountBlockByCreatedByAndBlockedAccountIdArgs
    >
    accountBlockByRowId?: GraphCacheUpdateResolver<
      { accountBlockByRowId: Maybe<WithTypename<AccountBlock>> },
      QueryAccountBlockByRowIdArgs
    >
    accountByRowId?: GraphCacheUpdateResolver<
      { accountByRowId: Maybe<WithTypename<Account>> },
      QueryAccountByRowIdArgs
    >
    accountByUsername?: GraphCacheUpdateResolver<
      { accountByUsername: Maybe<WithTypename<Account>> },
      QueryAccountByUsernameArgs
    >
    accountSearch?: GraphCacheUpdateResolver<
      { accountSearch: Maybe<WithTypename<AccountConnection>> },
      QueryAccountSearchArgs
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
    achievementByRowId?: GraphCacheUpdateResolver<
      { achievementByRowId: Maybe<WithTypename<Achievement>> },
      QueryAchievementByRowIdArgs
    >
    address?: GraphCacheUpdateResolver<
      { address: Maybe<WithTypename<Address>> },
      QueryAddressArgs
    >
    addressByRowId?: GraphCacheUpdateResolver<
      { addressByRowId: Maybe<WithTypename<Address>> },
      QueryAddressByRowIdArgs
    >
    allAccountBlocks?: GraphCacheUpdateResolver<
      { allAccountBlocks: Maybe<WithTypename<AccountBlockConnection>> },
      QueryAllAccountBlocksArgs
    >
    allAccountSocialNetworks?: GraphCacheUpdateResolver<
      {
        allAccountSocialNetworks: Maybe<
          WithTypename<AccountSocialNetworkConnection>
        >
      },
      QueryAllAccountSocialNetworksArgs
    >
    allAccounts?: GraphCacheUpdateResolver<
      { allAccounts: Maybe<WithTypename<AccountConnection>> },
      QueryAllAccountsArgs
    >
    allAchievements?: GraphCacheUpdateResolver<
      { allAchievements: Maybe<WithTypename<AchievementConnection>> },
      QueryAllAchievementsArgs
    >
    allAddresses?: GraphCacheUpdateResolver<
      { allAddresses: Maybe<WithTypename<AddressConnection>> },
      QueryAllAddressesArgs
    >
    allApps?: GraphCacheUpdateResolver<
      { allApps: Maybe<WithTypename<AppConnection>> },
      QueryAllAppsArgs
    >
    allAttendances?: GraphCacheUpdateResolver<
      { allAttendances: Maybe<WithTypename<AttendanceConnection>> },
      QueryAllAttendancesArgs
    >
    allContacts?: GraphCacheUpdateResolver<
      { allContacts: Maybe<WithTypename<ContactConnection>> },
      QueryAllContactsArgs
    >
    allDevices?: GraphCacheUpdateResolver<
      { allDevices: Maybe<WithTypename<DeviceConnection>> },
      QueryAllDevicesArgs
    >
    allEventApps?: GraphCacheUpdateResolver<
      { allEventApps: Maybe<WithTypename<EventAppConnection>> },
      QueryAllEventAppsArgs
    >
    allEventCategories?: GraphCacheUpdateResolver<
      { allEventCategories: Maybe<WithTypename<EventCategoryConnection>> },
      QueryAllEventCategoriesArgs
    >
    allEventCategoryMappings?: GraphCacheUpdateResolver<
      {
        allEventCategoryMappings: Maybe<
          WithTypename<EventCategoryMappingConnection>
        >
      },
      QueryAllEventCategoryMappingsArgs
    >
    allEventFavorites?: GraphCacheUpdateResolver<
      { allEventFavorites: Maybe<WithTypename<EventFavoriteConnection>> },
      QueryAllEventFavoritesArgs
    >
    allEventFormatMappings?: GraphCacheUpdateResolver<
      {
        allEventFormatMappings: Maybe<
          WithTypename<EventFormatMappingConnection>
        >
      },
      QueryAllEventFormatMappingsArgs
    >
    allEventFormats?: GraphCacheUpdateResolver<
      { allEventFormats: Maybe<WithTypename<EventFormatConnection>> },
      QueryAllEventFormatsArgs
    >
    allEventRecommendations?: GraphCacheUpdateResolver<
      {
        allEventRecommendations: Maybe<
          WithTypename<EventRecommendationConnection>
        >
      },
      QueryAllEventRecommendationsArgs
    >
    allEventUploads?: GraphCacheUpdateResolver<
      { allEventUploads: Maybe<WithTypename<EventUploadConnection>> },
      QueryAllEventUploadsArgs
    >
    allEvents?: GraphCacheUpdateResolver<
      { allEvents: Maybe<WithTypename<EventConnection>> },
      QueryAllEventsArgs
    >
    allFriendships?: GraphCacheUpdateResolver<
      { allFriendships: Maybe<WithTypename<FriendshipConnection>> },
      QueryAllFriendshipsArgs
    >
    allGuestFlats?: GraphCacheUpdateResolver<
      { allGuestFlats: Maybe<WithTypename<GuestFlatConnection>> },
      QueryAllGuestFlatsArgs
    >
    allGuests?: GraphCacheUpdateResolver<
      { allGuests: Maybe<WithTypename<GuestConnection>> },
      QueryAllGuestsArgs
    >
    allLegalTermAcceptances?: GraphCacheUpdateResolver<
      {
        allLegalTermAcceptances: Maybe<
          WithTypename<LegalTermAcceptanceConnection>
        >
      },
      QueryAllLegalTermAcceptancesArgs
    >
    allLegalTerms?: GraphCacheUpdateResolver<
      { allLegalTerms: Maybe<WithTypename<LegalTermConnection>> },
      QueryAllLegalTermsArgs
    >
    allPreferenceEventCategories?: GraphCacheUpdateResolver<
      {
        allPreferenceEventCategories: Maybe<
          WithTypename<PreferenceEventCategoryConnection>
        >
      },
      QueryAllPreferenceEventCategoriesArgs
    >
    allPreferenceEventFormats?: GraphCacheUpdateResolver<
      {
        allPreferenceEventFormats: Maybe<
          WithTypename<PreferenceEventFormatConnection>
        >
      },
      QueryAllPreferenceEventFormatsArgs
    >
    allPreferenceEventLocations?: GraphCacheUpdateResolver<
      {
        allPreferenceEventLocations: Maybe<
          WithTypename<PreferenceEventLocationConnection>
        >
      },
      QueryAllPreferenceEventLocationsArgs
    >
    allPreferenceEventSizes?: GraphCacheUpdateResolver<
      {
        allPreferenceEventSizes: Maybe<
          WithTypename<PreferenceEventSizeConnection>
        >
      },
      QueryAllPreferenceEventSizesArgs
    >
    allProfilePictures?: GraphCacheUpdateResolver<
      { allProfilePictures: Maybe<WithTypename<ProfilePictureConnection>> },
      QueryAllProfilePicturesArgs
    >
    allReports?: GraphCacheUpdateResolver<
      { allReports: Maybe<WithTypename<ReportConnection>> },
      QueryAllReportsArgs
    >
    allUploads?: GraphCacheUpdateResolver<
      { allUploads: Maybe<WithTypename<UploadConnection>> },
      QueryAllUploadsArgs
    >
    app?: GraphCacheUpdateResolver<
      { app: Maybe<WithTypename<App>> },
      QueryAppArgs
    >
    appByName?: GraphCacheUpdateResolver<
      { appByName: Maybe<WithTypename<App>> },
      QueryAppByNameArgs
    >
    appByRowId?: GraphCacheUpdateResolver<
      { appByRowId: Maybe<WithTypename<App>> },
      QueryAppByRowIdArgs
    >
    attendance?: GraphCacheUpdateResolver<
      { attendance: Maybe<WithTypename<Attendance>> },
      QueryAttendanceArgs
    >
    attendanceByGuestId?: GraphCacheUpdateResolver<
      { attendanceByGuestId: Maybe<WithTypename<Attendance>> },
      QueryAttendanceByGuestIdArgs
    >
    attendanceByRowId?: GraphCacheUpdateResolver<
      { attendanceByRowId: Maybe<WithTypename<Attendance>> },
      QueryAttendanceByRowIdArgs
    >
    attendanceClaimArray?: GraphCacheUpdateResolver<
      { attendanceClaimArray: Maybe<Array<Scalars['UUID']>> },
      Record<string, never>
    >
    contact?: GraphCacheUpdateResolver<
      { contact: Maybe<WithTypename<Contact>> },
      QueryContactArgs
    >
    contactByCreatedByAndAccountId?: GraphCacheUpdateResolver<
      { contactByCreatedByAndAccountId: Maybe<WithTypename<Contact>> },
      QueryContactByCreatedByAndAccountIdArgs
    >
    contactByRowId?: GraphCacheUpdateResolver<
      { contactByRowId: Maybe<WithTypename<Contact>> },
      QueryContactByRowIdArgs
    >
    device?: GraphCacheUpdateResolver<
      { device: Maybe<WithTypename<Device>> },
      QueryDeviceArgs
    >
    deviceByCreatedByAndFcmToken?: GraphCacheUpdateResolver<
      { deviceByCreatedByAndFcmToken: Maybe<WithTypename<Device>> },
      QueryDeviceByCreatedByAndFcmTokenArgs
    >
    deviceByRowId?: GraphCacheUpdateResolver<
      { deviceByRowId: Maybe<WithTypename<Device>> },
      QueryDeviceByRowIdArgs
    >
    event?: GraphCacheUpdateResolver<
      { event: Maybe<WithTypename<Event>> },
      QueryEventArgs
    >
    eventApp?: GraphCacheUpdateResolver<
      { eventApp: Maybe<WithTypename<EventApp>> },
      QueryEventAppArgs
    >
    eventAppByEventIdAndAppId?: GraphCacheUpdateResolver<
      { eventAppByEventIdAndAppId: Maybe<WithTypename<EventApp>> },
      QueryEventAppByEventIdAndAppIdArgs
    >
    eventAppByRowId?: GraphCacheUpdateResolver<
      { eventAppByRowId: Maybe<WithTypename<EventApp>> },
      QueryEventAppByRowIdArgs
    >
    eventByAttendanceId?: GraphCacheUpdateResolver<
      { eventByAttendanceId: Maybe<WithTypename<Event>> },
      QueryEventByAttendanceIdArgs
    >
    eventByCreatedByAndSlug?: GraphCacheUpdateResolver<
      { eventByCreatedByAndSlug: Maybe<WithTypename<Event>> },
      QueryEventByCreatedByAndSlugArgs
    >
    eventByRowId?: GraphCacheUpdateResolver<
      { eventByRowId: Maybe<WithTypename<Event>> },
      QueryEventByRowIdArgs
    >
    eventCategory?: GraphCacheUpdateResolver<
      { eventCategory: Maybe<WithTypename<EventCategory>> },
      QueryEventCategoryArgs
    >
    eventCategoryByName?: GraphCacheUpdateResolver<
      { eventCategoryByName: Maybe<WithTypename<EventCategory>> },
      QueryEventCategoryByNameArgs
    >
    eventCategoryByRowId?: GraphCacheUpdateResolver<
      { eventCategoryByRowId: Maybe<WithTypename<EventCategory>> },
      QueryEventCategoryByRowIdArgs
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
    eventFavoriteByRowId?: GraphCacheUpdateResolver<
      { eventFavoriteByRowId: Maybe<WithTypename<EventFavorite>> },
      QueryEventFavoriteByRowIdArgs
    >
    eventFormat?: GraphCacheUpdateResolver<
      { eventFormat: Maybe<WithTypename<EventFormat>> },
      QueryEventFormatArgs
    >
    eventFormatByName?: GraphCacheUpdateResolver<
      { eventFormatByName: Maybe<WithTypename<EventFormat>> },
      QueryEventFormatByNameArgs
    >
    eventFormatByRowId?: GraphCacheUpdateResolver<
      { eventFormatByRowId: Maybe<WithTypename<EventFormat>> },
      QueryEventFormatByRowIdArgs
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
      { eventSearch: Maybe<WithTypename<EventConnection>> },
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
    eventUploadByRowId?: GraphCacheUpdateResolver<
      { eventUploadByRowId: Maybe<WithTypename<EventUpload>> },
      QueryEventUploadByRowIdArgs
    >
    friendship?: GraphCacheUpdateResolver<
      { friendship: Maybe<WithTypename<Friendship>> },
      QueryFriendshipArgs
    >
    friendshipByAAccountIdAndBAccountId?: GraphCacheUpdateResolver<
      { friendshipByAAccountIdAndBAccountId: Maybe<WithTypename<Friendship>> },
      QueryFriendshipByAAccountIdAndBAccountIdArgs
    >
    friendshipByRowId?: GraphCacheUpdateResolver<
      { friendshipByRowId: Maybe<WithTypename<Friendship>> },
      QueryFriendshipByRowIdArgs
    >
    guest?: GraphCacheUpdateResolver<
      { guest: Maybe<WithTypename<Guest>> },
      QueryGuestArgs
    >
    guestByEventIdAndContactId?: GraphCacheUpdateResolver<
      { guestByEventIdAndContactId: Maybe<WithTypename<Guest>> },
      QueryGuestByEventIdAndContactIdArgs
    >
    guestByRowId?: GraphCacheUpdateResolver<
      { guestByRowId: Maybe<WithTypename<Guest>> },
      QueryGuestByRowIdArgs
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
    id?: GraphCacheUpdateResolver<{ id: Scalars['ID'] }, Record<string, never>>
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
    legalTermAcceptanceByRowId?: GraphCacheUpdateResolver<
      { legalTermAcceptanceByRowId: Maybe<WithTypename<LegalTermAcceptance>> },
      QueryLegalTermAcceptanceByRowIdArgs
    >
    legalTermByLanguageAndVersion?: GraphCacheUpdateResolver<
      { legalTermByLanguageAndVersion: Maybe<WithTypename<LegalTerm>> },
      QueryLegalTermByLanguageAndVersionArgs
    >
    legalTermByRowId?: GraphCacheUpdateResolver<
      { legalTermByRowId: Maybe<WithTypename<LegalTerm>> },
      QueryLegalTermByRowIdArgs
    >
    node?: GraphCacheUpdateResolver<
      {
        node: Maybe<
          | WithTypename<Account>
          | WithTypename<AccountBlock>
          | WithTypename<AccountSocialNetwork>
          | WithTypename<Achievement>
          | WithTypename<Address>
          | WithTypename<App>
          | WithTypename<Attendance>
          | WithTypename<Contact>
          | WithTypename<Device>
          | WithTypename<Event>
          | WithTypename<EventApp>
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
    preferenceEventCategoryByRowId?: GraphCacheUpdateResolver<
      {
        preferenceEventCategoryByRowId: Maybe<
          WithTypename<PreferenceEventCategory>
        >
      },
      QueryPreferenceEventCategoryByRowIdArgs
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
    preferenceEventFormatByRowId?: GraphCacheUpdateResolver<
      {
        preferenceEventFormatByRowId: Maybe<WithTypename<PreferenceEventFormat>>
      },
      QueryPreferenceEventFormatByRowIdArgs
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
    preferenceEventLocationByRowId?: GraphCacheUpdateResolver<
      {
        preferenceEventLocationByRowId: Maybe<
          WithTypename<PreferenceEventLocation>
        >
      },
      QueryPreferenceEventLocationByRowIdArgs
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
    preferenceEventSizeByRowId?: GraphCacheUpdateResolver<
      { preferenceEventSizeByRowId: Maybe<WithTypename<PreferenceEventSize>> },
      QueryPreferenceEventSizeByRowIdArgs
    >
    profilePicture?: GraphCacheUpdateResolver<
      { profilePicture: Maybe<WithTypename<ProfilePicture>> },
      QueryProfilePictureArgs
    >
    profilePictureByAccountId?: GraphCacheUpdateResolver<
      { profilePictureByAccountId: Maybe<WithTypename<ProfilePicture>> },
      QueryProfilePictureByAccountIdArgs
    >
    profilePictureByRowId?: GraphCacheUpdateResolver<
      { profilePictureByRowId: Maybe<WithTypename<ProfilePicture>> },
      QueryProfilePictureByRowIdArgs
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
    reportByRowId?: GraphCacheUpdateResolver<
      { reportByRowId: Maybe<WithTypename<Report>> },
      QueryReportByRowIdArgs
    >
    upload?: GraphCacheUpdateResolver<
      { upload: Maybe<WithTypename<Upload>> },
      QueryUploadArgs
    >
    uploadByRowId?: GraphCacheUpdateResolver<
      { uploadByRowId: Maybe<WithTypename<Upload>> },
      QueryUploadByRowIdArgs
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
    createAddress?: GraphCacheUpdateResolver<
      { createAddress: Maybe<WithTypename<CreateAddressPayload>> },
      MutationCreateAddressArgs
    >
    createAttendance?: GraphCacheUpdateResolver<
      { createAttendance: Maybe<WithTypename<CreateAttendancePayload>> },
      MutationCreateAttendanceArgs
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
    deleteAccountBlockByRowId?: GraphCacheUpdateResolver<
      {
        deleteAccountBlockByRowId: Maybe<
          WithTypename<DeleteAccountBlockPayload>
        >
      },
      MutationDeleteAccountBlockByRowIdArgs
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
    deleteAddress?: GraphCacheUpdateResolver<
      { deleteAddress: Maybe<WithTypename<DeleteAddressPayload>> },
      MutationDeleteAddressArgs
    >
    deleteAddressByRowId?: GraphCacheUpdateResolver<
      { deleteAddressByRowId: Maybe<WithTypename<DeleteAddressPayload>> },
      MutationDeleteAddressByRowIdArgs
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
    deleteContactByRowId?: GraphCacheUpdateResolver<
      { deleteContactByRowId: Maybe<WithTypename<DeleteContactPayload>> },
      MutationDeleteContactByRowIdArgs
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
    deleteDeviceByRowId?: GraphCacheUpdateResolver<
      { deleteDeviceByRowId: Maybe<WithTypename<DeleteDevicePayload>> },
      MutationDeleteDeviceByRowIdArgs
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
    deleteEventByRowId?: GraphCacheUpdateResolver<
      { deleteEventByRowId: Maybe<WithTypename<DeleteEventPayload>> },
      MutationDeleteEventByRowIdArgs
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
    deleteEventFavoriteByRowId?: GraphCacheUpdateResolver<
      {
        deleteEventFavoriteByRowId: Maybe<
          WithTypename<DeleteEventFavoritePayload>
        >
      },
      MutationDeleteEventFavoriteByRowIdArgs
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
    deleteEventUploadByRowId?: GraphCacheUpdateResolver<
      {
        deleteEventUploadByRowId: Maybe<WithTypename<DeleteEventUploadPayload>>
      },
      MutationDeleteEventUploadByRowIdArgs
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
    deleteFriendshipByRowId?: GraphCacheUpdateResolver<
      { deleteFriendshipByRowId: Maybe<WithTypename<DeleteFriendshipPayload>> },
      MutationDeleteFriendshipByRowIdArgs
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
    deleteGuestByRowId?: GraphCacheUpdateResolver<
      { deleteGuestByRowId: Maybe<WithTypename<DeleteGuestPayload>> },
      MutationDeleteGuestByRowIdArgs
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
    deletePreferenceEventCategoryByRowId?: GraphCacheUpdateResolver<
      {
        deletePreferenceEventCategoryByRowId: Maybe<
          WithTypename<DeletePreferenceEventCategoryPayload>
        >
      },
      MutationDeletePreferenceEventCategoryByRowIdArgs
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
    deletePreferenceEventFormatByRowId?: GraphCacheUpdateResolver<
      {
        deletePreferenceEventFormatByRowId: Maybe<
          WithTypename<DeletePreferenceEventFormatPayload>
        >
      },
      MutationDeletePreferenceEventFormatByRowIdArgs
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
    deletePreferenceEventLocationByRowId?: GraphCacheUpdateResolver<
      {
        deletePreferenceEventLocationByRowId: Maybe<
          WithTypename<DeletePreferenceEventLocationPayload>
        >
      },
      MutationDeletePreferenceEventLocationByRowIdArgs
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
    deletePreferenceEventSizeByRowId?: GraphCacheUpdateResolver<
      {
        deletePreferenceEventSizeByRowId: Maybe<
          WithTypename<DeletePreferenceEventSizePayload>
        >
      },
      MutationDeletePreferenceEventSizeByRowIdArgs
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
    deleteProfilePictureByRowId?: GraphCacheUpdateResolver<
      {
        deleteProfilePictureByRowId: Maybe<
          WithTypename<DeleteProfilePicturePayload>
        >
      },
      MutationDeleteProfilePictureByRowIdArgs
    >
    deleteUpload?: GraphCacheUpdateResolver<
      { deleteUpload: Maybe<WithTypename<DeleteUploadPayload>> },
      MutationDeleteUploadArgs
    >
    deleteUploadByRowId?: GraphCacheUpdateResolver<
      { deleteUploadByRowId: Maybe<WithTypename<DeleteUploadPayload>> },
      MutationDeleteUploadByRowIdArgs
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
    jwtCreate?: GraphCacheUpdateResolver<
      { jwtCreate: Maybe<WithTypename<JwtCreatePayload>> },
      MutationJwtCreateArgs
    >
    jwtUpdate?: GraphCacheUpdateResolver<
      { jwtUpdate: Maybe<WithTypename<JwtUpdatePayload>> },
      MutationJwtUpdateArgs
    >
    jwtUpdateAttendanceAdd?: GraphCacheUpdateResolver<
      {
        jwtUpdateAttendanceAdd: Maybe<
          WithTypename<JwtUpdateAttendanceAddPayload>
        >
      },
      MutationJwtUpdateAttendanceAddArgs
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
    updateAccountByRowId?: GraphCacheUpdateResolver<
      { updateAccountByRowId: Maybe<WithTypename<UpdateAccountPayload>> },
      MutationUpdateAccountByRowIdArgs
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
    updateAddress?: GraphCacheUpdateResolver<
      { updateAddress: Maybe<WithTypename<UpdateAddressPayload>> },
      MutationUpdateAddressArgs
    >
    updateAddressByRowId?: GraphCacheUpdateResolver<
      { updateAddressByRowId: Maybe<WithTypename<UpdateAddressPayload>> },
      MutationUpdateAddressByRowIdArgs
    >
    updateAttendance?: GraphCacheUpdateResolver<
      { updateAttendance: Maybe<WithTypename<UpdateAttendancePayload>> },
      MutationUpdateAttendanceArgs
    >
    updateAttendanceByGuestId?: GraphCacheUpdateResolver<
      {
        updateAttendanceByGuestId: Maybe<WithTypename<UpdateAttendancePayload>>
      },
      MutationUpdateAttendanceByGuestIdArgs
    >
    updateAttendanceByRowId?: GraphCacheUpdateResolver<
      { updateAttendanceByRowId: Maybe<WithTypename<UpdateAttendancePayload>> },
      MutationUpdateAttendanceByRowIdArgs
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
    updateContactByRowId?: GraphCacheUpdateResolver<
      { updateContactByRowId: Maybe<WithTypename<UpdateContactPayload>> },
      MutationUpdateContactByRowIdArgs
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
    updateDeviceByRowId?: GraphCacheUpdateResolver<
      { updateDeviceByRowId: Maybe<WithTypename<UpdateDevicePayload>> },
      MutationUpdateDeviceByRowIdArgs
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
    updateEventByRowId?: GraphCacheUpdateResolver<
      { updateEventByRowId: Maybe<WithTypename<UpdateEventPayload>> },
      MutationUpdateEventByRowIdArgs
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
    updateFriendshipByRowId?: GraphCacheUpdateResolver<
      { updateFriendshipByRowId: Maybe<WithTypename<UpdateFriendshipPayload>> },
      MutationUpdateFriendshipByRowIdArgs
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
    updateGuestByRowId?: GraphCacheUpdateResolver<
      { updateGuestByRowId: Maybe<WithTypename<UpdateGuestPayload>> },
      MutationUpdateGuestByRowIdArgs
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
    updateProfilePictureByRowId?: GraphCacheUpdateResolver<
      {
        updateProfilePictureByRowId: Maybe<
          WithTypename<UpdateProfilePicturePayload>
        >
      },
      MutationUpdateProfilePictureByRowIdArgs
    >
    updateUpload?: GraphCacheUpdateResolver<
      { updateUpload: Maybe<WithTypename<UpdateUploadPayload>> },
      MutationUpdateUploadArgs
    >
    updateUploadByRowId?: GraphCacheUpdateResolver<
      { updateUploadByRowId: Maybe<WithTypename<UpdateUploadPayload>> },
      MutationUpdateUploadByRowIdArgs
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
    appsByCreatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Account>>,
      AccountAppsByCreatedByArgs
    >
    attendancesByUpdatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Account>>,
      AccountAttendancesByUpdatedByArgs
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
    eventAppsByCreatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Account>>,
      AccountEventAppsByCreatedByArgs
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
    imprintUrl?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Account>>,
      Record<string, never>
    >
    legalTermAcceptancesByAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Account>>,
      AccountLegalTermAcceptancesByAccountIdArgs
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
    reportsByCreatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Account>>,
      AccountReportsByCreatedByArgs
    >
    reportsByTargetAccountId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Account>>,
      AccountReportsByTargetAccountIdArgs
    >
    rowId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Account>>,
      Record<string, never>
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
    rowId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountBlock>>,
      Record<string, never>
    >
  }
  AccountBlockAccountsConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountBlockAccountsConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountBlockAccountsConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountBlockAccountsConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountBlockAccountsConnection>>,
      Record<string, never>
    >
  }
  AccountBlockAccountsEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountBlockAccountsEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountBlockAccountsEdge>>,
      Record<string, never>
    >
  }
  AccountBlockAccountsRecord?: {
    id?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountBlockAccountsRecord>>,
      Record<string, never>
    >
    storageKey?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountBlockAccountsRecord>>,
      Record<string, never>
    >
    username?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountBlockAccountsRecord>>,
      Record<string, never>
    >
  }
  AccountBlockConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountBlockConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountBlockConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountBlockConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountBlockConnection>>,
      Record<string, never>
    >
  }
  AccountBlockEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountBlockEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountBlockEdge>>,
      Record<string, never>
    >
  }
  AccountConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountConnection>>,
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
  AccountEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountEdge>>,
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
    id?: GraphCacheUpdateResolver<
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
  AccountSocialNetworkConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountSocialNetworkConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountSocialNetworkConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountSocialNetworkConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountSocialNetworkConnection>>,
      Record<string, never>
    >
  }
  AccountSocialNetworkEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountSocialNetworkEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AccountSocialNetworkEdge>>,
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
    rowId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Achievement>>,
      Record<string, never>
    >
  }
  AchievementConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AchievementConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AchievementConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AchievementConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AchievementConnection>>,
      Record<string, never>
    >
  }
  AchievementEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AchievementEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AchievementEdge>>,
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
    result?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AchievementUnlockPayload>>,
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
    postalCode?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Address>>,
      Record<string, never>
    >
    region?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Address>>,
      Record<string, never>
    >
    rowId?: GraphCacheUpdateResolver<
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
  AddressConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AddressConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AddressConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AddressConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AddressConnection>>,
      Record<string, never>
    >
  }
  AddressEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AddressEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AddressEdge>>,
      Record<string, never>
    >
  }
  App?: {
    accountByCreatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<App>>,
      Record<string, never>
    >
    createdAt?: GraphCacheUpdateResolver<
      Maybe<WithTypename<App>>,
      Record<string, never>
    >
    createdBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<App>>,
      Record<string, never>
    >
    eventAppsByAppId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<App>>,
      AppEventAppsByAppIdArgs
    >
    iconSvg?: GraphCacheUpdateResolver<
      Maybe<WithTypename<App>>,
      Record<string, never>
    >
    id?: GraphCacheUpdateResolver<
      Maybe<WithTypename<App>>,
      Record<string, never>
    >
    name?: GraphCacheUpdateResolver<
      Maybe<WithTypename<App>>,
      Record<string, never>
    >
    rowId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<App>>,
      Record<string, never>
    >
    url?: GraphCacheUpdateResolver<
      Maybe<WithTypename<App>>,
      Record<string, never>
    >
    urlAttendance?: GraphCacheUpdateResolver<
      Maybe<WithTypename<App>>,
      Record<string, never>
    >
  }
  AppConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AppConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AppConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AppConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AppConnection>>,
      Record<string, never>
    >
  }
  AppEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AppEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AppEdge>>,
      Record<string, never>
    >
  }
  Attendance?: {
    accountByUpdatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Attendance>>,
      Record<string, never>
    >
    checkedOut?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Attendance>>,
      Record<string, never>
    >
    contactByContactId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Attendance>>,
      Record<string, never>
    >
    contactId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Attendance>>,
      Record<string, never>
    >
    createdAt?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Attendance>>,
      Record<string, never>
    >
    guestByGuestId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Attendance>>,
      Record<string, never>
    >
    guestId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Attendance>>,
      Record<string, never>
    >
    id?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Attendance>>,
      Record<string, never>
    >
    rowId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Attendance>>,
      Record<string, never>
    >
    updatedAt?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Attendance>>,
      Record<string, never>
    >
    updatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Attendance>>,
      Record<string, never>
    >
  }
  AttendanceConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AttendanceConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AttendanceConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AttendanceConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AttendanceConnection>>,
      Record<string, never>
    >
  }
  AttendanceEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AttendanceEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<AttendanceEdge>>,
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
    attendancesByContactId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Contact>>,
      ContactAttendancesByContactIdArgs
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
    note?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Contact>>,
      Record<string, never>
    >
    phoneNumber?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Contact>>,
      Record<string, never>
    >
    rowId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Contact>>,
      Record<string, never>
    >
    timeZone?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Contact>>,
      Record<string, never>
    >
    url?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Contact>>,
      Record<string, never>
    >
  }
  ContactConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ContactConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ContactConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ContactConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ContactConnection>>,
      Record<string, never>
    >
  }
  ContactEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ContactEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ContactEdge>>,
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
  CreateAddressPayload?: {
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
  CreateAttendancePayload?: {
    attendance?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateAttendancePayload>>,
      Record<string, never>
    >
    attendanceEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateAttendancePayload>>,
      CreateAttendancePayloadAttendanceEdgeArgs
    >
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateAttendancePayload>>,
      Record<string, never>
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateAttendancePayload>>,
      Record<string, never>
    >
  }
  CreateContactPayload?: {
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
    clientMutationId?: GraphCacheUpdateResolver<
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
  CreateEventUploadPayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
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
  }
  CreateFriendshipPayload?: {
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
    clientMutationId?: GraphCacheUpdateResolver<
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
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateGuestsPayload>>,
      Record<string, never>
    >
    result?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateGuestsPayload>>,
      Record<string, never>
    >
  }
  CreateLegalTermAcceptancePayload?: {
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
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateLegalTermAcceptancePayload>>,
      Record<string, never>
    >
  }
  CreatePreferenceEventCategoryPayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
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
    clientMutationId?: GraphCacheUpdateResolver<
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
  }
  CreateReportPayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
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
  }
  CreateUploadPayload?: {
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
  DeleteAddressPayload?: {
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
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteEventFavoritePayload>>,
      Record<string, never>
    >
    deletedEventFavoriteId?: GraphCacheUpdateResolver<
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
  DeleteEventUploadPayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteEventUploadPayload>>,
      Record<string, never>
    >
    deletedEventUploadId?: GraphCacheUpdateResolver<
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
  }
  DeleteFriendshipPayload?: {
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
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteGuestPayload>>,
      Record<string, never>
    >
    deletedGuestId?: GraphCacheUpdateResolver<
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
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeletePreferenceEventCategoryPayload>>,
      Record<string, never>
    >
    deletedPreferenceEventCategoryId?: GraphCacheUpdateResolver<
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
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeletePreferenceEventFormatPayload>>,
      Record<string, never>
    >
    deletedPreferenceEventFormatId?: GraphCacheUpdateResolver<
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
  }
  DeleteUploadPayload?: {
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
    rowId?: GraphCacheUpdateResolver<
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
  DeviceConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeviceConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeviceConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeviceConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeviceConnection>>,
      Record<string, never>
    >
  }
  DeviceEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeviceEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeviceEdge>>,
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
    eventAppsByEventId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Event>>,
      EventEventAppsByEventIdArgs
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
    reportsByTargetEventId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Event>>,
      EventReportsByTargetEventIdArgs
    >
    rowId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Event>>,
      Record<string, never>
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
  EventApp?: {
    accountByCreatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventApp>>,
      Record<string, never>
    >
    appByAppId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventApp>>,
      Record<string, never>
    >
    appId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventApp>>,
      Record<string, never>
    >
    createdAt?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventApp>>,
      Record<string, never>
    >
    createdBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventApp>>,
      Record<string, never>
    >
    eventByEventId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventApp>>,
      Record<string, never>
    >
    eventId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventApp>>,
      Record<string, never>
    >
    id?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventApp>>,
      Record<string, never>
    >
    rowId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventApp>>,
      Record<string, never>
    >
  }
  EventAppConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventAppConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventAppConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventAppConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventAppConnection>>,
      Record<string, never>
    >
  }
  EventAppEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventAppEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventAppEdge>>,
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
    preferenceEventCategoriesByCategoryId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventCategory>>,
      EventCategoryPreferenceEventCategoriesByCategoryIdArgs
    >
    rowId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventCategory>>,
      Record<string, never>
    >
  }
  EventCategoryConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventCategoryConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventCategoryConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventCategoryConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventCategoryConnection>>,
      Record<string, never>
    >
  }
  EventCategoryEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventCategoryEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventCategoryEdge>>,
      Record<string, never>
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
    id?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventCategoryMapping>>,
      Record<string, never>
    >
  }
  EventCategoryMappingConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventCategoryMappingConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventCategoryMappingConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventCategoryMappingConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventCategoryMappingConnection>>,
      Record<string, never>
    >
  }
  EventCategoryMappingEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventCategoryMappingEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventCategoryMappingEdge>>,
      Record<string, never>
    >
  }
  EventConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventConnection>>,
      Record<string, never>
    >
  }
  EventDeletePayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
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
    result?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventDeletePayload>>,
      Record<string, never>
    >
  }
  EventEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventEdge>>,
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
    rowId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventFavorite>>,
      Record<string, never>
    >
  }
  EventFavoriteConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventFavoriteConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventFavoriteConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventFavoriteConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventFavoriteConnection>>,
      Record<string, never>
    >
  }
  EventFavoriteEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventFavoriteEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventFavoriteEdge>>,
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
    preferenceEventFormatsByFormatId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventFormat>>,
      EventFormatPreferenceEventFormatsByFormatIdArgs
    >
    rowId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventFormat>>,
      Record<string, never>
    >
  }
  EventFormatConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventFormatConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventFormatConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventFormatConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventFormatConnection>>,
      Record<string, never>
    >
  }
  EventFormatEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventFormatEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventFormatEdge>>,
      Record<string, never>
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
    id?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventFormatMapping>>,
      Record<string, never>
    >
  }
  EventFormatMappingConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventFormatMappingConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventFormatMappingConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventFormatMappingConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventFormatMappingConnection>>,
      Record<string, never>
    >
  }
  EventFormatMappingEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventFormatMappingEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventFormatMappingEdge>>,
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
    id?: GraphCacheUpdateResolver<
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
  EventRecommendationConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventRecommendationConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventRecommendationConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventRecommendationConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventRecommendationConnection>>,
      Record<string, never>
    >
  }
  EventRecommendationEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventRecommendationEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventRecommendationEdge>>,
      Record<string, never>
    >
  }
  EventUnlockPayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventUnlockPayload>>,
      Record<string, never>
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventUnlockPayload>>,
      Record<string, never>
    >
    result?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventUnlockPayload>>,
      Record<string, never>
    >
  }
  EventUnlockRecord?: {
    creatorUsername?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventUnlockRecord>>,
      Record<string, never>
    >
    eventSlug?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventUnlockRecord>>,
      Record<string, never>
    >
    jwt?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventUnlockRecord>>,
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
    rowId?: GraphCacheUpdateResolver<
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
  EventUploadConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventUploadConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventUploadConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventUploadConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventUploadConnection>>,
      Record<string, never>
    >
  }
  EventUploadEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventUploadEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventUploadEdge>>,
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
    rowId?: GraphCacheUpdateResolver<
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
  FriendshipConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<FriendshipConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<FriendshipConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<FriendshipConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<FriendshipConnection>>,
      Record<string, never>
    >
  }
  FriendshipEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<FriendshipEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<FriendshipEdge>>,
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
    attendanceByGuestId?: GraphCacheUpdateResolver<
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
    rowId?: GraphCacheUpdateResolver<
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
  GuestConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GuestConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GuestConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GuestConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GuestConnection>>,
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
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GuestContactIdsConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GuestContactIdsConnection>>,
      Record<string, never>
    >
  }
  GuestContactIdsEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GuestContactIdsEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GuestContactIdsEdge>>,
      Record<string, never>
    >
  }
  GuestEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GuestEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GuestEdge>>,
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
  GuestFlatConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GuestFlatConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GuestFlatConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GuestFlatConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GuestFlatConnection>>,
      Record<string, never>
    >
  }
  GuestFlatEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GuestFlatEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GuestFlatEdge>>,
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
  JwtCreatePayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<JwtCreatePayload>>,
      Record<string, never>
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<JwtCreatePayload>>,
      Record<string, never>
    >
    result?: GraphCacheUpdateResolver<
      Maybe<WithTypename<JwtCreatePayload>>,
      Record<string, never>
    >
  }
  JwtUpdateAttendanceAddPayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<JwtUpdateAttendanceAddPayload>>,
      Record<string, never>
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<JwtUpdateAttendanceAddPayload>>,
      Record<string, never>
    >
    result?: GraphCacheUpdateResolver<
      Maybe<WithTypename<JwtUpdateAttendanceAddPayload>>,
      Record<string, never>
    >
  }
  JwtUpdatePayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<JwtUpdatePayload>>,
      Record<string, never>
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<JwtUpdatePayload>>,
      Record<string, never>
    >
    result?: GraphCacheUpdateResolver<
      Maybe<WithTypename<JwtUpdatePayload>>,
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
    rowId?: GraphCacheUpdateResolver<
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
    rowId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<LegalTermAcceptance>>,
      Record<string, never>
    >
  }
  LegalTermAcceptanceConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<LegalTermAcceptanceConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<LegalTermAcceptanceConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<LegalTermAcceptanceConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<LegalTermAcceptanceConnection>>,
      Record<string, never>
    >
  }
  LegalTermAcceptanceEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<LegalTermAcceptanceEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<LegalTermAcceptanceEdge>>,
      Record<string, never>
    >
  }
  LegalTermConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<LegalTermConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<LegalTermConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<LegalTermConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<LegalTermConnection>>,
      Record<string, never>
    >
  }
  LegalTermEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<LegalTermEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<LegalTermEdge>>,
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
    rowId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventCategory>>,
      Record<string, never>
    >
  }
  PreferenceEventCategoryConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventCategoryConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventCategoryConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventCategoryConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventCategoryConnection>>,
      Record<string, never>
    >
  }
  PreferenceEventCategoryEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventCategoryEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventCategoryEdge>>,
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
    rowId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventFormat>>,
      Record<string, never>
    >
  }
  PreferenceEventFormatConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventFormatConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventFormatConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventFormatConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventFormatConnection>>,
      Record<string, never>
    >
  }
  PreferenceEventFormatEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventFormatEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventFormatEdge>>,
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
    radius?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventLocation>>,
      Record<string, never>
    >
    rowId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventLocation>>,
      Record<string, never>
    >
  }
  PreferenceEventLocationConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventLocationConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventLocationConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventLocationConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventLocationConnection>>,
      Record<string, never>
    >
  }
  PreferenceEventLocationEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventLocationEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventLocationEdge>>,
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
    rowId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventSize>>,
      Record<string, never>
    >
  }
  PreferenceEventSizeConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventSizeConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventSizeConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventSizeConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventSizeConnection>>,
      Record<string, never>
    >
  }
  PreferenceEventSizeEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventSizeEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PreferenceEventSizeEdge>>,
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
    rowId?: GraphCacheUpdateResolver<
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
  ProfilePictureConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ProfilePictureConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ProfilePictureConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ProfilePictureConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ProfilePictureConnection>>,
      Record<string, never>
    >
  }
  ProfilePictureEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ProfilePictureEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ProfilePictureEdge>>,
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
    reason?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Report>>,
      Record<string, never>
    >
    rowId?: GraphCacheUpdateResolver<
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
  ReportConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ReportConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ReportConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ReportConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ReportConnection>>,
      Record<string, never>
    >
  }
  ReportEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ReportEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ReportEdge>>,
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
  UpdateAddressPayload?: {
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
  UpdateAttendancePayload?: {
    attendance?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateAttendancePayload>>,
      Record<string, never>
    >
    attendanceEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateAttendancePayload>>,
      UpdateAttendancePayloadAttendanceEdgeArgs
    >
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateAttendancePayload>>,
      Record<string, never>
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateAttendancePayload>>,
      Record<string, never>
    >
  }
  UpdateContactPayload?: {
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
  UpdateEventPayload?: {
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
  UpdateFriendshipPayload?: {
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
    clientMutationId?: GraphCacheUpdateResolver<
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
  UpdateProfilePicturePayload?: {
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
  }
  UpdateUploadPayload?: {
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
    profilePicturesByUploadId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Upload>>,
      UploadProfilePicturesByUploadIdArgs
    >
    reportsByTargetUploadId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Upload>>,
      UploadReportsByTargetUploadIdArgs
    >
    rowId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Upload>>,
      Record<string, never>
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
  UploadConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UploadConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UploadConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UploadConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UploadConnection>>,
      Record<string, never>
    >
  }
  UploadEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UploadEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UploadEdge>>,
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
