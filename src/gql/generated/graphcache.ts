/* eslint-disable @typescript-eslint/no-explicit-any */
import type { GeoJSON } from 'geojson'
import type {
  cacheExchange,
  Resolver as GraphCacheResolver,
  UpdateResolver as GraphCacheUpdateResolver,
  OptimisticMutationResolver as GraphCacheOptimisticMutationResolver,
} from '@urql/exchange-graphcache'

export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  BigInt: { input: number; output: number }
  Cursor: { input: string; output: string }
  Date: { input: string; output: string }
  Datetime: { input: string; output: string }
  EmailAddress: { input: string; output: string }
  GeoJSON: { input: GeoJSON; output: GeoJSON }
  Jwt: { input: string; output: string }
  RegConfig: { input: unknown; output: unknown }
  UUID: { input: string; output: string }
}

/** Public account data. */
export type Account = Node & {
  readonly __typename?: 'Account'
  /** Reads and enables pagination through a set of `AccountBlock`. */
  readonly accountBlocksByBlockedAccountId: AccountBlockConnection
  /** Reads and enables pagination through a set of `AccountBlock`. */
  readonly accountBlocksByCreatedBy: AccountBlockConnection
  /** Reads and enables pagination through a set of `AccountSocialNetwork`. */
  readonly accountSocialNetworksByAccountId: AccountSocialNetworkConnection
  /** Reads and enables pagination through a set of `Achievement`. */
  readonly achievementsByAccountId: AchievementConnection
  /** Reads and enables pagination through a set of `Address`. */
  readonly addressesByCreatedBy: AddressConnection
  /** Reads and enables pagination through a set of `Address`. */
  readonly addressesByUpdatedBy: AddressConnection
  /** Reads and enables pagination through a set of `App`. */
  readonly appsByCreatedBy: AppConnection
  /** Reads and enables pagination through a set of `Attendance`. */
  readonly attendancesByUpdatedBy: AttendanceConnection
  /** Reads and enables pagination through a set of `ContactGroup`. */
  readonly contactGroupsByCreatedBy: ContactGroupConnection
  /** Reads and enables pagination through a set of `Contact`. */
  readonly contactsByAccountId: ContactConnection
  /** Reads and enables pagination through a set of `Contact`. */
  readonly contactsByCreatedBy: ContactConnection
  /** The account's description. Must not exceed 1,000 characters. */
  readonly description?: Maybe<Scalars['String']['output']>
  /** Reads and enables pagination through a set of `Device`. */
  readonly devicesByCreatedBy: DeviceConnection
  /** Reads and enables pagination through a set of `Device`. */
  readonly devicesByUpdatedBy: DeviceConnection
  /** The account's display name, shown in place of the username where set. Must be between 1 and 100 characters. */
  readonly displayName?: Maybe<Scalars['String']['output']>
  /** Reads and enables pagination through a set of `EventApp`. */
  readonly eventAppsByCreatedBy: EventAppConnection
  /** Reads and enables pagination through a set of `EventFavorite`. */
  readonly eventFavoritesByCreatedBy: EventFavoriteConnection
  /** Reads and enables pagination through a set of `EventRecommendation`. */
  readonly eventRecommendationsByAccountId: EventRecommendationConnection
  /** Reads and enables pagination through a set of `Event`. */
  readonly eventsByCreatedBy: EventConnection
  /** Reads and enables pagination through a set of `Friendship`. */
  readonly friendshipsByAAccountId: FriendshipConnection
  /** Reads and enables pagination through a set of `Friendship`. */
  readonly friendshipsByBAccountId: FriendshipConnection
  /** Reads and enables pagination through a set of `Friendship`. */
  readonly friendshipsByCreatedBy: FriendshipConnection
  /** Reads and enables pagination through a set of `Friendship`. */
  readonly friendshipsByUpdatedBy: FriendshipConnection
  /** Reads and enables pagination through a set of `Guest`. */
  readonly guestsByUpdatedBy: GuestConnection
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly id: Scalars['ID']['output']
  /** The account's imprint URL. Must start with "https://" and not exceed 2,000 characters. */
  readonly imprintUrl?: Maybe<Scalars['String']['output']>
  /** Reads and enables pagination through a set of `LegalTermAcceptance`. */
  readonly legalTermAcceptancesByAccountId: LegalTermAcceptanceConnection
  /** Reads and enables pagination through a set of `PreferenceEventCategory`. */
  readonly preferenceEventCategoriesByAccountId: PreferenceEventCategoryConnection
  /** Reads and enables pagination through a set of `PreferenceEventFormat`. */
  readonly preferenceEventFormatsByAccountId: PreferenceEventFormatConnection
  /** Reads and enables pagination through a set of `PreferenceEventLocation`. */
  readonly preferenceEventLocationsByCreatedBy: PreferenceEventLocationConnection
  /** Reads and enables pagination through a set of `PreferenceEventSize`. */
  readonly preferenceEventSizesByAccountId: PreferenceEventSizeConnection
  /** Reads a single `ProfilePicture` that is related to this `Account`. */
  readonly profilePictureByAccountId?: Maybe<ProfilePicture>
  /** Reads and enables pagination through a set of `Report`. */
  readonly reportsByCreatedBy: ReportConnection
  /** Reads and enables pagination through a set of `Report`. */
  readonly reportsByTargetAccountId: ReportConnection
  /** The account's internal id. */
  readonly rowId: Scalars['UUID']['output']
  /** Reads and enables pagination through a set of `Upload`. */
  readonly uploadsByCreatedBy: UploadConnection
  /** The account's username. Must be alphanumeric with hyphens and not exceed 100 characters. */
  readonly username: Scalars['String']['output']
}

/** Public account data. */
export type AccountAccountBlocksByBlockedAccountIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<AccountBlockCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<AccountBlockOrderBy>>
}

/** Public account data. */
export type AccountAccountBlocksByCreatedByArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<AccountBlockCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<AccountBlockOrderBy>>
}

/** Public account data. */
export type AccountAccountSocialNetworksByAccountIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<AccountSocialNetworkCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<AccountSocialNetworkOrderBy>>
}

/** Public account data. */
export type AccountAchievementsByAccountIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<AchievementCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<AchievementOrderBy>>
}

/** Public account data. */
export type AccountAddressesByCreatedByArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<AddressCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<AddressOrderBy>>
}

/** Public account data. */
export type AccountAddressesByUpdatedByArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<AddressCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<AddressOrderBy>>
}

/** Public account data. */
export type AccountAppsByCreatedByArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<AppCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<AppOrderBy>>
}

/** Public account data. */
export type AccountAttendancesByUpdatedByArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<AttendanceCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<AttendanceOrderBy>>
}

/** Public account data. */
export type AccountContactGroupsByCreatedByArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<ContactGroupCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<ContactGroupOrderBy>>
}

/** Public account data. */
export type AccountContactsByAccountIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<ContactCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<ContactOrderBy>>
}

/** Public account data. */
export type AccountContactsByCreatedByArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<ContactCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<ContactOrderBy>>
}

/** Public account data. */
export type AccountDevicesByCreatedByArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<DeviceCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<DeviceOrderBy>>
}

/** Public account data. */
export type AccountDevicesByUpdatedByArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<DeviceCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<DeviceOrderBy>>
}

/** Public account data. */
export type AccountEventAppsByCreatedByArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventAppCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<EventAppOrderBy>>
}

/** Public account data. */
export type AccountEventFavoritesByCreatedByArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventFavoriteCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<EventFavoriteOrderBy>>
}

/** Public account data. */
export type AccountEventRecommendationsByAccountIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventRecommendationCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<EventRecommendationOrderBy>>
}

/** Public account data. */
export type AccountEventsByCreatedByArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<EventOrderBy>>
}

/** Public account data. */
export type AccountFriendshipsByAAccountIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<FriendshipCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<FriendshipOrderBy>>
}

/** Public account data. */
export type AccountFriendshipsByBAccountIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<FriendshipCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<FriendshipOrderBy>>
}

/** Public account data. */
export type AccountFriendshipsByCreatedByArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<FriendshipCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<FriendshipOrderBy>>
}

/** Public account data. */
export type AccountFriendshipsByUpdatedByArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<FriendshipCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<FriendshipOrderBy>>
}

/** Public account data. */
export type AccountGuestsByUpdatedByArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<GuestCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<GuestOrderBy>>
}

/** Public account data. */
export type AccountLegalTermAcceptancesByAccountIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<LegalTermAcceptanceCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<LegalTermAcceptanceOrderBy>>
}

/** Public account data. */
export type AccountPreferenceEventCategoriesByAccountIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<PreferenceEventCategoryCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<PreferenceEventCategoryOrderBy>>
}

/** Public account data. */
export type AccountPreferenceEventFormatsByAccountIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<PreferenceEventFormatCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<PreferenceEventFormatOrderBy>>
}

/** Public account data. */
export type AccountPreferenceEventLocationsByCreatedByArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<PreferenceEventLocationCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<PreferenceEventLocationOrderBy>>
}

/** Public account data. */
export type AccountPreferenceEventSizesByAccountIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<PreferenceEventSizeCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<PreferenceEventSizeOrderBy>>
}

/** Public account data. */
export type AccountReportsByCreatedByArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<ReportCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<ReportOrderBy>>
}

/** Public account data. */
export type AccountReportsByTargetAccountIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<ReportCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<ReportOrderBy>>
}

/** Public account data. */
export type AccountUploadsByCreatedByArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<UploadCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<UploadOrderBy>>
}

/** Blocking of one account by another. */
export type AccountBlock = Node & {
  readonly __typename?: 'AccountBlock'
  /** Reads a single `Account` that is related to this `AccountBlock`. */
  readonly accountByBlockedAccountId?: Maybe<Account>
  /** Reads a single `Account` that is related to this `AccountBlock`. */
  readonly accountByCreatedBy?: Maybe<Account>
  /** The account id of the user who is blocked. */
  readonly blockedAccountId: Scalars['UUID']['output']
  /** Timestamp of when the account block was created. */
  readonly createdAt: Scalars['Datetime']['output']
  /** The account id of the user who created the account block. */
  readonly createdBy: Scalars['UUID']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly id: Scalars['ID']['output']
  /** The account block's internal id. */
  readonly rowId: Scalars['UUID']['output']
}

/** A connection to a list of `AccountBlockAccountsRecord` values. */
export type AccountBlockAccountsConnection = {
  readonly __typename?: 'AccountBlockAccountsConnection'
  /** A list of edges which contains the `AccountBlockAccountsRecord` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<AccountBlockAccountsEdge>
  /** A list of `AccountBlockAccountsRecord` objects. */
  readonly nodes: ReadonlyArray<AccountBlockAccountsRecord>
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo
  /** The count of *all* `AccountBlockAccountsRecord` you could get from the connection. */
  readonly totalCount: Scalars['Int']['output']
}

/** A `AccountBlockAccountsRecord` edge in the connection. */
export type AccountBlockAccountsEdge = {
  readonly __typename?: 'AccountBlockAccountsEdge'
  /** A cursor for use in pagination. */
  readonly cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `AccountBlockAccountsRecord` at the end of the edge. */
  readonly node: AccountBlockAccountsRecord
}

export type AccountBlockAccountsRecord = {
  readonly __typename?: 'AccountBlockAccountsRecord'
  readonly id?: Maybe<Scalars['UUID']['output']>
  readonly storageKey?: Maybe<Scalars['String']['output']>
  readonly username?: Maybe<Scalars['String']['output']>
}

/**
 * A condition to be used against `AccountBlock` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type AccountBlockCondition = {
  /** Checks for equality with the object’s `blockedAccountId` field. */
  readonly blockedAccountId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `createdBy` field. */
  readonly createdBy?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `rowId` field. */
  readonly rowId?: InputMaybe<Scalars['UUID']['input']>
}

/** A connection to a list of `AccountBlock` values. */
export type AccountBlockConnection = {
  readonly __typename?: 'AccountBlockConnection'
  /** A list of edges which contains the `AccountBlock` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<AccountBlockEdge>
  /** A list of `AccountBlock` objects. */
  readonly nodes: ReadonlyArray<AccountBlock>
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo
  /** The count of *all* `AccountBlock` you could get from the connection. */
  readonly totalCount: Scalars['Int']['output']
}

/** A `AccountBlock` edge in the connection. */
export type AccountBlockEdge = {
  readonly __typename?: 'AccountBlockEdge'
  /** A cursor for use in pagination. */
  readonly cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `AccountBlock` at the end of the edge. */
  readonly node: AccountBlock
}

/** An input for mutations affecting `AccountBlock` */
export type AccountBlockInput = {
  /** The account id of the user who is blocked. */
  readonly blockedAccountId: Scalars['UUID']['input']
  /** The account id of the user who created the account block. */
  readonly createdBy: Scalars['UUID']['input']
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
  readonly rowId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `username` field. */
  readonly username?: InputMaybe<Scalars['String']['input']>
}

/** A connection to a list of `Account` values. */
export type AccountConnection = {
  readonly __typename?: 'AccountConnection'
  /** A list of edges which contains the `Account` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<AccountEdge>
  /** A list of `Account` objects. */
  readonly nodes: ReadonlyArray<Account>
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo
  /** The count of *all* `Account` you could get from the connection. */
  readonly totalCount: Scalars['Int']['output']
}

/** All input for the `accountDelete` mutation. */
export type AccountDeleteInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  readonly password: Scalars['String']['input']
}

/** The output of our `accountDelete` mutation. */
export type AccountDeletePayload = {
  readonly __typename?: 'AccountDeletePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
}

/** A `Account` edge in the connection. */
export type AccountEdge = {
  readonly __typename?: 'AccountEdge'
  /** A cursor for use in pagination. */
  readonly cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `Account` at the end of the edge. */
  readonly node: Account
}

/** All input for the `accountEmailAddressVerification` mutation. */
export type AccountEmailAddressVerificationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  readonly code: Scalars['UUID']['input']
}

/** The output of our `accountEmailAddressVerification` mutation. */
export type AccountEmailAddressVerificationPayload = {
  readonly __typename?: 'AccountEmailAddressVerificationPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
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
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  readonly passwordCurrent: Scalars['String']['input']
  readonly passwordNew: Scalars['String']['input']
}

/** The output of our `accountPasswordChange` mutation. */
export type AccountPasswordChangePayload = {
  readonly __typename?: 'AccountPasswordChangePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
}

/** All input for the `accountPasswordReset` mutation. */
export type AccountPasswordResetInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  readonly code: Scalars['UUID']['input']
  readonly password: Scalars['String']['input']
}

/** The output of our `accountPasswordReset` mutation. */
export type AccountPasswordResetPayload = {
  readonly __typename?: 'AccountPasswordResetPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
}

/** All input for the `accountPasswordResetRequest` mutation. */
export type AccountPasswordResetRequestInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  readonly emailAddress: Scalars['String']['input']
  readonly language: Scalars['String']['input']
  readonly timeZone?: InputMaybe<Scalars['String']['input']>
}

/** The output of our `accountPasswordResetRequest` mutation. */
export type AccountPasswordResetRequestPayload = {
  readonly __typename?: 'AccountPasswordResetRequestPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
}

/** Represents an update to a `Account`. Fields that are set will be updated. */
export type AccountPatch = {
  /** The account's description. Must not exceed 1,000 characters. */
  readonly description?: InputMaybe<Scalars['String']['input']>
  /** The account's display name, shown in place of the username where set. Must be between 1 and 100 characters. */
  readonly displayName?: InputMaybe<Scalars['String']['input']>
  /** The account's imprint URL. Must start with "https://" and not exceed 2,000 characters. */
  readonly imprintUrl?: InputMaybe<Scalars['String']['input']>
}

/** All input for the `accountRegistration` mutation. */
export type AccountRegistrationInput = {
  readonly birthDate: Scalars['Date']['input']
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  readonly emailAddress: Scalars['String']['input']
  readonly language: Scalars['String']['input']
  readonly legalTermId: Scalars['UUID']['input']
  readonly password: Scalars['String']['input']
  readonly timeZone?: InputMaybe<Scalars['String']['input']>
  readonly username: Scalars['String']['input']
}

/** The output of our `accountRegistration` mutation. */
export type AccountRegistrationPayload = {
  readonly __typename?: 'AccountRegistrationPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
}

/** All input for the `accountRegistrationRefresh` mutation. */
export type AccountRegistrationRefreshInput = {
  readonly accountId: Scalars['UUID']['input']
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  readonly language: Scalars['String']['input']
}

/** The output of our `accountRegistrationRefresh` mutation. */
export type AccountRegistrationRefreshPayload = {
  readonly __typename?: 'AccountRegistrationRefreshPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
}

/** Links accounts to their social media profiles. Each entry represents a specific social network and associated username for an account. */
export type AccountSocialNetwork = Node & {
  readonly __typename?: 'AccountSocialNetwork'
  /** Reads a single `Account` that is related to this `AccountSocialNetwork`. */
  readonly accountByAccountId?: Maybe<Account>
  /** The unique identifier of the account. */
  readonly accountId: Scalars['UUID']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly id: Scalars['ID']['output']
  /** The social network to which the account is linked. */
  readonly socialNetwork: SocialNetwork
  /** The username of the account on the specified social network. */
  readonly socialNetworkUsername: Scalars['String']['output']
}

/**
 * A condition to be used against `AccountSocialNetwork` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type AccountSocialNetworkCondition = {
  /** Checks for equality with the object’s `accountId` field. */
  readonly accountId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `socialNetwork` field. */
  readonly socialNetwork?: InputMaybe<SocialNetwork>
}

/** A connection to a list of `AccountSocialNetwork` values. */
export type AccountSocialNetworkConnection = {
  readonly __typename?: 'AccountSocialNetworkConnection'
  /** A list of edges which contains the `AccountSocialNetwork` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<AccountSocialNetworkEdge>
  /** A list of `AccountSocialNetwork` objects. */
  readonly nodes: ReadonlyArray<AccountSocialNetwork>
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo
  /** The count of *all* `AccountSocialNetwork` you could get from the connection. */
  readonly totalCount: Scalars['Int']['output']
}

/** A `AccountSocialNetwork` edge in the connection. */
export type AccountSocialNetworkEdge = {
  readonly __typename?: 'AccountSocialNetworkEdge'
  /** A cursor for use in pagination. */
  readonly cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `AccountSocialNetwork` at the end of the edge. */
  readonly node: AccountSocialNetwork
}

/** An input for mutations affecting `AccountSocialNetwork` */
export type AccountSocialNetworkInput = {
  /** The unique identifier of the account. */
  readonly accountId: Scalars['UUID']['input']
  /** The social network to which the account is linked. */
  readonly socialNetwork: SocialNetwork
  /** The username of the account on the specified social network. */
  readonly socialNetworkUsername: Scalars['String']['input']
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
  readonly accountId?: InputMaybe<Scalars['UUID']['input']>
  /** The social network to which the account is linked. */
  readonly socialNetwork?: InputMaybe<SocialNetwork>
  /** The username of the account on the specified social network. */
  readonly socialNetworkUsername?: InputMaybe<Scalars['String']['input']>
}

/** Achievements unlocked by users. */
export type Achievement = Node & {
  readonly __typename?: 'Achievement'
  /** Reads a single `Account` that is related to this `Achievement`. */
  readonly accountByAccountId?: Maybe<Account>
  /** The account which unlocked the achievement. */
  readonly accountId: Scalars['UUID']['output']
  /** The unlock's achievement. */
  readonly achievement: AchievementType
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly id: Scalars['ID']['output']
  /** The achievement unlock's level. */
  readonly level: Scalars['Int']['output']
  /** The achievement unlock's internal id. */
  readonly rowId: Scalars['UUID']['output']
}

/**
 * A condition to be used against `Achievement` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type AchievementCondition = {
  /** Checks for equality with the object’s `accountId` field. */
  readonly accountId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `achievement` field. */
  readonly achievement?: InputMaybe<AchievementType>
  /** Checks for equality with the object’s `rowId` field. */
  readonly rowId?: InputMaybe<Scalars['UUID']['input']>
}

/** A connection to a list of `Achievement` values. */
export type AchievementConnection = {
  readonly __typename?: 'AchievementConnection'
  /** A list of edges which contains the `Achievement` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<AchievementEdge>
  /** A list of `Achievement` objects. */
  readonly nodes: ReadonlyArray<Achievement>
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo
  /** The count of *all* `Achievement` you could get from the connection. */
  readonly totalCount: Scalars['Int']['output']
}

/** A `Achievement` edge in the connection. */
export type AchievementEdge = {
  readonly __typename?: 'AchievementEdge'
  /** A cursor for use in pagination. */
  readonly cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `Achievement` at the end of the edge. */
  readonly node: Achievement
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
  readonly alias: Scalars['String']['input']
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  readonly code: Scalars['UUID']['input']
}

/** The output of our `achievementUnlock` mutation. */
export type AchievementUnlockPayload = {
  readonly __typename?: 'AchievementUnlockPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
  readonly result?: Maybe<Scalars['UUID']['output']>
}

/** Stores detailed address information, including lines, city, state, country, and metadata. */
export type Address = Node & {
  readonly __typename?: 'Address'
  /** Reads a single `Account` that is related to this `Address`. */
  readonly accountByCreatedBy?: Maybe<Account>
  /** Reads a single `Account` that is related to this `Address`. */
  readonly accountByUpdatedBy?: Maybe<Account>
  /** City of the address. Must be between 1 and 300 characters. */
  readonly city?: Maybe<Scalars['String']['output']>
  /** Reads and enables pagination through a set of `Contact`. */
  readonly contactsByAddressId: ContactConnection
  /** Country of the address. Must be between 1 and 300 characters. */
  readonly country?: Maybe<Scalars['String']['output']>
  /** Timestamp when the address was created. Defaults to the current timestamp. */
  readonly createdAt: Scalars['Datetime']['output']
  /** Reference to the account that created the address. */
  readonly createdBy: Scalars['UUID']['output']
  /** Reads and enables pagination through a set of `Event`. */
  readonly eventsByAddressId: EventConnection
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly id: Scalars['ID']['output']
  /** First line of the address (e.g., street address). Must be between 1 and 300 characters. */
  readonly line1?: Maybe<Scalars['String']['output']>
  /** Second line of the address, if needed. Must be between 1 and 300 characters. */
  readonly line2?: Maybe<Scalars['String']['output']>
  /** The geographic location of the address. */
  readonly location?: Maybe<GeographyPoint>
  /** Person or company name. Must be between 1 and 300 characters. */
  readonly name: Scalars['String']['output']
  /** Postal or ZIP code for the address. Must be between 1 and 20 characters. */
  readonly postalCode?: Maybe<Scalars['String']['output']>
  /** Region of the address (e.g., state, province, county, department or territory). Must be between 1 and 300 characters. */
  readonly region?: Maybe<Scalars['String']['output']>
  /** Primary key, uniquely identifies each address. */
  readonly rowId: Scalars['UUID']['output']
  /** Timestamp when the address was last updated. */
  readonly updatedAt?: Maybe<Scalars['Datetime']['output']>
  /** Reference to the account that last updated the address. */
  readonly updatedBy?: Maybe<Scalars['UUID']['output']>
}

/** Stores detailed address information, including lines, city, state, country, and metadata. */
export type AddressContactsByAddressIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<ContactCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<ContactOrderBy>>
}

/** Stores detailed address information, including lines, city, state, country, and metadata. */
export type AddressEventsByAddressIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<EventOrderBy>>
}

/** A condition to be used against `Address` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type AddressCondition = {
  /** Checks for equality with the object’s `createdBy` field. */
  readonly createdBy?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `rowId` field. */
  readonly rowId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `updatedBy` field. */
  readonly updatedBy?: InputMaybe<Scalars['UUID']['input']>
}

/** A connection to a list of `Address` values. */
export type AddressConnection = {
  readonly __typename?: 'AddressConnection'
  /** A list of edges which contains the `Address` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<AddressEdge>
  /** A list of `Address` objects. */
  readonly nodes: ReadonlyArray<Address>
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo
  /** The count of *all* `Address` you could get from the connection. */
  readonly totalCount: Scalars['Int']['output']
}

/** A `Address` edge in the connection. */
export type AddressEdge = {
  readonly __typename?: 'AddressEdge'
  /** A cursor for use in pagination. */
  readonly cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `Address` at the end of the edge. */
  readonly node: Address
}

/** An input for mutations affecting `Address` */
export type AddressInput = {
  /** City of the address. Must be between 1 and 300 characters. */
  readonly city?: InputMaybe<Scalars['String']['input']>
  /** Country of the address. Must be between 1 and 300 characters. */
  readonly country?: InputMaybe<Scalars['String']['input']>
  /** Reference to the account that created the address. */
  readonly createdBy: Scalars['UUID']['input']
  /** First line of the address (e.g., street address). Must be between 1 and 300 characters. */
  readonly line1?: InputMaybe<Scalars['String']['input']>
  /** Second line of the address, if needed. Must be between 1 and 300 characters. */
  readonly line2?: InputMaybe<Scalars['String']['input']>
  /** The geographic location of the address. */
  readonly location?: InputMaybe<Scalars['GeoJSON']['input']>
  /** Person or company name. Must be between 1 and 300 characters. */
  readonly name: Scalars['String']['input']
  /** Postal or ZIP code for the address. Must be between 1 and 20 characters. */
  readonly postalCode?: InputMaybe<Scalars['String']['input']>
  /** Region of the address (e.g., state, province, county, department or territory). Must be between 1 and 300 characters. */
  readonly region?: InputMaybe<Scalars['String']['input']>
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
  readonly city?: InputMaybe<Scalars['String']['input']>
  /** Country of the address. Must be between 1 and 300 characters. */
  readonly country?: InputMaybe<Scalars['String']['input']>
  /** First line of the address (e.g., street address). Must be between 1 and 300 characters. */
  readonly line1?: InputMaybe<Scalars['String']['input']>
  /** Second line of the address, if needed. Must be between 1 and 300 characters. */
  readonly line2?: InputMaybe<Scalars['String']['input']>
  /** The geographic location of the address. */
  readonly location?: InputMaybe<Scalars['GeoJSON']['input']>
  /** Person or company name. Must be between 1 and 300 characters. */
  readonly name?: InputMaybe<Scalars['String']['input']>
  /** Postal or ZIP code for the address. Must be between 1 and 20 characters. */
  readonly postalCode?: InputMaybe<Scalars['String']['input']>
  /** Region of the address (e.g., state, province, county, department or territory). Must be between 1 and 300 characters. */
  readonly region?: InputMaybe<Scalars['String']['input']>
}

/** Integrations that can be added to events. Each app has a name, icon, and an endpoint for attendance management. */
export type App = Node & {
  readonly __typename?: 'App'
  /** Reads a single `Account` that is related to this `App`. */
  readonly accountByCreatedBy?: Maybe<Account>
  /** When the app was created. */
  readonly createdAt: Scalars['Datetime']['output']
  /** Who created this app. */
  readonly createdBy: Scalars['UUID']['output']
  /** Reads and enables pagination through a set of `EventApp`. */
  readonly eventAppsByAppId: EventAppConnection
  /** An SVG icon for displaying the app. */
  readonly iconSvg: Scalars['String']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly id: Scalars['ID']['output']
  /** The name of the app. */
  readonly name: Scalars['String']['output']
  /** A unique reference for this app. */
  readonly rowId: Scalars['UUID']['output']
  /** The main URL of the app. */
  readonly url: Scalars['String']['output']
  /** The URL endpoint for managing attendance. */
  readonly urlAttendance: Scalars['String']['output']
}

/** Integrations that can be added to events. Each app has a name, icon, and an endpoint for attendance management. */
export type AppEventAppsByAppIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventAppCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<EventAppOrderBy>>
}

/** A condition to be used against `App` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type AppCondition = {
  /** Checks for equality with the object’s `createdBy` field. */
  readonly createdBy?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `name` field. */
  readonly name?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `rowId` field. */
  readonly rowId?: InputMaybe<Scalars['UUID']['input']>
}

/** A connection to a list of `App` values. */
export type AppConnection = {
  readonly __typename?: 'AppConnection'
  /** A list of edges which contains the `App` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<AppEdge>
  /** A list of `App` objects. */
  readonly nodes: ReadonlyArray<App>
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo
  /** The count of *all* `App` you could get from the connection. */
  readonly totalCount: Scalars['Int']['output']
}

/** A `App` edge in the connection. */
export type AppEdge = {
  readonly __typename?: 'AppEdge'
  /** A cursor for use in pagination. */
  readonly cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `App` at the end of the edge. */
  readonly node: App
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
  readonly __typename?: 'Attendance'
  /** Reads a single `Account` that is related to this `Attendance`. */
  readonly accountByUpdatedBy?: Maybe<Account>
  /** Shows if the person has left. When this turns on, the time is saved automatically. */
  readonly checkedOut?: Maybe<Scalars['Boolean']['output']>
  /** Reads a single `Contact` that is related to this `Attendance`. */
  readonly contactByContactId?: Maybe<Contact>
  /** The contact information available to anyone with access to this attendance entry. This may differ from the guest information if the guest provided different details at check-in. */
  readonly contactId?: Maybe<Scalars['UUID']['output']>
  /** When the entry was created (the check-in time). */
  readonly createdAt: Scalars['Datetime']['output']
  /** Reads a single `Guest` that is related to this `Attendance`. */
  readonly guestByGuestId?: Maybe<Guest>
  /** Who this entry is for. */
  readonly guestId: Scalars['UUID']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly id: Scalars['ID']['output']
  /** A unique reference for this entry. */
  readonly rowId: Scalars['UUID']['output']
  /** The serial number of the physical tag written for this entry, which tells a tag apart from a copy that carries the same link. */
  readonly tagSerialNumber?: Maybe<Scalars['String']['output']>
  /** When this entry was last changed. If someone checks out, this shows the checkout time. */
  readonly updatedAt?: Maybe<Scalars['Datetime']['output']>
  /** Who last changed this entry. This may be empty if done without signing in. */
  readonly updatedBy?: Maybe<Scalars['UUID']['output']>
}

/**
 * A condition to be used against `Attendance` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type AttendanceCondition = {
  /** Checks for equality with the object’s `contactId` field. */
  readonly contactId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `guestId` field. */
  readonly guestId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `rowId` field. */
  readonly rowId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `updatedBy` field. */
  readonly updatedBy?: InputMaybe<Scalars['UUID']['input']>
}

/** A connection to a list of `Attendance` values. */
export type AttendanceConnection = {
  readonly __typename?: 'AttendanceConnection'
  /** A list of edges which contains the `Attendance` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<AttendanceEdge>
  /** A list of `Attendance` objects. */
  readonly nodes: ReadonlyArray<Attendance>
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo
  /** The count of *all* `Attendance` you could get from the connection. */
  readonly totalCount: Scalars['Int']['output']
}

/** A `Attendance` edge in the connection. */
export type AttendanceEdge = {
  readonly __typename?: 'AttendanceEdge'
  /** A cursor for use in pagination. */
  readonly cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `Attendance` at the end of the edge. */
  readonly node: Attendance
}

/** An input for mutations affecting `Attendance` */
export type AttendanceInput = {
  /** The contact information available to anyone with access to this attendance entry. This may differ from the guest information if the guest provided different details at check-in. */
  readonly contactId?: InputMaybe<Scalars['UUID']['input']>
  /** Who this entry is for. */
  readonly guestId: Scalars['UUID']['input']
  /** The serial number of the physical tag written for this entry, which tells a tag apart from a copy that carries the same link. */
  readonly tagSerialNumber?: InputMaybe<Scalars['String']['input']>
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
  readonly checkedOut?: InputMaybe<Scalars['Boolean']['input']>
  /** The serial number of the physical tag written for this entry, which tells a tag apart from a copy that carries the same link. */
  readonly tagSerialNumber?: InputMaybe<Scalars['String']['input']>
}

/** Stores contact information related to accounts, including personal details, communication preferences, and metadata. */
export type Contact = Node & {
  readonly __typename?: 'Contact'
  /** Reads a single `Account` that is related to this `Contact`. */
  readonly accountByAccountId?: Maybe<Account>
  /** Reads a single `Account` that is related to this `Contact`. */
  readonly accountByCreatedBy?: Maybe<Account>
  /** Optional reference to an associated account. */
  readonly accountId?: Maybe<Scalars['UUID']['output']>
  /** Reads a single `Address` that is related to this `Contact`. */
  readonly addressByAddressId?: Maybe<Address>
  /** Optional reference to the physical address of the contact. */
  readonly addressId?: Maybe<Scalars['UUID']['output']>
  /** Reads and enables pagination through a set of `Attendance`. */
  readonly attendancesByContactId: AttendanceConnection
  /** Reads and enables pagination through a set of `ContactGroupMember`. */
  readonly contactGroupMembersByContactId: ContactGroupMemberConnection
  /** Timestamp when the contact was created. Defaults to the current timestamp. */
  readonly createdAt: Scalars['Datetime']['output']
  /** Reference to the account that created this contact. Enforces cascading deletion. */
  readonly createdBy: Scalars['UUID']['output']
  /** Hash of the primary email address, generated using md5 on the lowercased trimmed version of the email. Useful to display a profile picture from Gravatar. */
  readonly emailAddressHash?: Maybe<Scalars['String']['output']>
  /** Email addresses of the contact, between 1 and 10 when set. The first one is the primary address, which invitations are sent to. */
  readonly emailAddresses?: Maybe<
    ReadonlyArray<Scalars['EmailAddress']['output']>
  >
  /** First name of the contact. Must be between 1 and 100 characters. */
  readonly firstName?: Maybe<Scalars['String']['output']>
  /** Reads and enables pagination through a set of `Guest`. */
  readonly guestsByContactId: GuestConnection
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly id: Scalars['ID']['output']
  /** Reference to the preferred language of the contact. */
  readonly language?: Maybe<Language>
  /** Last name of the contact. Must be between 1 and 100 characters. */
  readonly lastName?: Maybe<Scalars['String']['output']>
  /** Nickname of the contact. Must be between 1 and 100 characters. Useful when the contact is not commonly referred to by their legal name. */
  readonly nickname?: Maybe<Scalars['String']['output']>
  /** Additional notes about the contact. Must be between 1 and 1,000 characters. Useful for providing context or distinguishing details if the name alone is insufficient. */
  readonly note?: Maybe<Scalars['String']['output']>
  /** The international phone number of the contact, formatted according to E.164 (https://wikipedia.org/wiki/E.164). */
  readonly phoneNumber?: Maybe<Scalars['String']['output']>
  /** Primary key, uniquely identifies each contact. */
  readonly rowId: Scalars['UUID']['output']
  /** Time zone of the contact in IANA format, e.g., `Europe/Berlin` or `America/New_York`. */
  readonly timeZone?: Maybe<Scalars['String']['output']>
  /** URL associated with the contact, must start with "https://" and not exceed 2,000 characters. */
  readonly url?: Maybe<Scalars['String']['output']>
}

/** Stores contact information related to accounts, including personal details, communication preferences, and metadata. */
export type ContactAttendancesByContactIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<AttendanceCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<AttendanceOrderBy>>
}

/** Stores contact information related to accounts, including personal details, communication preferences, and metadata. */
export type ContactContactGroupMembersByContactIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<ContactGroupMemberCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<ContactGroupMemberOrderBy>>
}

/** Stores contact information related to accounts, including personal details, communication preferences, and metadata. */
export type ContactGuestsByContactIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<GuestCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<GuestOrderBy>>
}

/** A condition to be used against `Contact` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type ContactCondition = {
  /** Checks for equality with the object’s `accountId` field. */
  readonly accountId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `addressId` field. */
  readonly addressId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `createdBy` field. */
  readonly createdBy?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `firstName` field. */
  readonly firstName?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `lastName` field. */
  readonly lastName?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `rowId` field. */
  readonly rowId?: InputMaybe<Scalars['UUID']['input']>
}

/** A connection to a list of `Contact` values. */
export type ContactConnection = {
  readonly __typename?: 'ContactConnection'
  /** A list of edges which contains the `Contact` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<ContactEdge>
  /** A list of `Contact` objects. */
  readonly nodes: ReadonlyArray<Contact>
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo
  /** The count of *all* `Contact` you could get from the connection. */
  readonly totalCount: Scalars['Int']['output']
}

/** A `Contact` edge in the connection. */
export type ContactEdge = {
  readonly __typename?: 'ContactEdge'
  /** A cursor for use in pagination. */
  readonly cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `Contact` at the end of the edge. */
  readonly node: Contact
}

/** A private group an account sorts its contacts into, e.g. to filter the invitation contact picker. */
export type ContactGroup = Node & {
  readonly __typename?: 'ContactGroup'
  /** Reads a single `Account` that is related to this `ContactGroup`. */
  readonly accountByCreatedBy?: Maybe<Account>
  /** Reads and enables pagination through a set of `ContactGroupMember`. */
  readonly contactGroupMembersByContactGroupId: ContactGroupMemberConnection
  /** Timestamp when the group was created. Defaults to the current timestamp. */
  readonly createdAt: Scalars['Datetime']['output']
  /** Reference to the account that created this group. Enforces cascading deletion. */
  readonly createdBy: Scalars['UUID']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly id: Scalars['ID']['output']
  /** Name of the group. Must be between 1 and 100 characters and unique per account, ignoring case. */
  readonly name: Scalars['String']['output']
  /** Primary key, uniquely identifies each contact group. */
  readonly rowId: Scalars['UUID']['output']
}

/** A private group an account sorts its contacts into, e.g. to filter the invitation contact picker. */
export type ContactGroupContactGroupMembersByContactGroupIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<ContactGroupMemberCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<ContactGroupMemberOrderBy>>
}

/**
 * A condition to be used against `ContactGroup` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type ContactGroupCondition = {
  /** Checks for equality with the object’s `createdBy` field. */
  readonly createdBy?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `rowId` field. */
  readonly rowId?: InputMaybe<Scalars['UUID']['input']>
}

/** A connection to a list of `ContactGroup` values. */
export type ContactGroupConnection = {
  readonly __typename?: 'ContactGroupConnection'
  /** A list of edges which contains the `ContactGroup` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<ContactGroupEdge>
  /** A list of `ContactGroup` objects. */
  readonly nodes: ReadonlyArray<ContactGroup>
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo
  /** The count of *all* `ContactGroup` you could get from the connection. */
  readonly totalCount: Scalars['Int']['output']
}

/** A `ContactGroup` edge in the connection. */
export type ContactGroupEdge = {
  readonly __typename?: 'ContactGroupEdge'
  /** A cursor for use in pagination. */
  readonly cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `ContactGroup` at the end of the edge. */
  readonly node: ContactGroup
}

/** An input for mutations affecting `ContactGroup` */
export type ContactGroupInput = {
  /** Reference to the account that created this group. Enforces cascading deletion. */
  readonly createdBy: Scalars['UUID']['input']
  /** Name of the group. Must be between 1 and 100 characters and unique per account, ignoring case. */
  readonly name: Scalars['String']['input']
}

/** Mapping contacts to contact groups (M:N relationship). */
export type ContactGroupMember = Node & {
  readonly __typename?: 'ContactGroupMember'
  /** Reads a single `Contact` that is related to this `ContactGroupMember`. */
  readonly contactByContactId?: Maybe<Contact>
  /** Reads a single `ContactGroup` that is related to this `ContactGroupMember`. */
  readonly contactGroupByContactGroupId?: Maybe<ContactGroup>
  /** A contact group id. */
  readonly contactGroupId: Scalars['UUID']['output']
  /** A contact id. */
  readonly contactId: Scalars['UUID']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly id: Scalars['ID']['output']
}

/**
 * A condition to be used against `ContactGroupMember` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type ContactGroupMemberCondition = {
  /** Checks for equality with the object’s `contactGroupId` field. */
  readonly contactGroupId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `contactId` field. */
  readonly contactId?: InputMaybe<Scalars['UUID']['input']>
}

/** A connection to a list of `ContactGroupMember` values. */
export type ContactGroupMemberConnection = {
  readonly __typename?: 'ContactGroupMemberConnection'
  /** A list of edges which contains the `ContactGroupMember` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<ContactGroupMemberEdge>
  /** A list of `ContactGroupMember` objects. */
  readonly nodes: ReadonlyArray<ContactGroupMember>
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo
  /** The count of *all* `ContactGroupMember` you could get from the connection. */
  readonly totalCount: Scalars['Int']['output']
}

/** A `ContactGroupMember` edge in the connection. */
export type ContactGroupMemberEdge = {
  readonly __typename?: 'ContactGroupMemberEdge'
  /** A cursor for use in pagination. */
  readonly cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `ContactGroupMember` at the end of the edge. */
  readonly node: ContactGroupMember
}

/** An input for mutations affecting `ContactGroupMember` */
export type ContactGroupMemberInput = {
  /** A contact group id. */
  readonly contactGroupId: Scalars['UUID']['input']
  /** A contact id. */
  readonly contactId: Scalars['UUID']['input']
}

/** Methods to use when ordering `ContactGroupMember`. */
export enum ContactGroupMemberOrderBy {
  ContactGroupIdAsc = 'CONTACT_GROUP_ID_ASC',
  ContactGroupIdDesc = 'CONTACT_GROUP_ID_DESC',
  ContactIdAsc = 'CONTACT_ID_ASC',
  ContactIdDesc = 'CONTACT_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
}

/** Methods to use when ordering `ContactGroup`. */
export enum ContactGroupOrderBy {
  CreatedByAsc = 'CREATED_BY_ASC',
  CreatedByDesc = 'CREATED_BY_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC',
}

/** Represents an update to a `ContactGroup`. Fields that are set will be updated. */
export type ContactGroupPatch = {
  /** Name of the group. Must be between 1 and 100 characters and unique per account, ignoring case. */
  readonly name?: InputMaybe<Scalars['String']['input']>
}

/** An input for mutations affecting `Contact` */
export type ContactInput = {
  /** Optional reference to an associated account. */
  readonly accountId?: InputMaybe<Scalars['UUID']['input']>
  /** Optional reference to the physical address of the contact. */
  readonly addressId?: InputMaybe<Scalars['UUID']['input']>
  /** Reference to the account that created this contact. Enforces cascading deletion. */
  readonly createdBy: Scalars['UUID']['input']
  /** Email addresses of the contact, between 1 and 10 when set. The first one is the primary address, which invitations are sent to. */
  readonly emailAddresses?: InputMaybe<
    ReadonlyArray<InputMaybe<Scalars['EmailAddress']['input']>>
  >
  /** First name of the contact. Must be between 1 and 100 characters. */
  readonly firstName?: InputMaybe<Scalars['String']['input']>
  /** Reference to the preferred language of the contact. */
  readonly language?: InputMaybe<Language>
  /** Last name of the contact. Must be between 1 and 100 characters. */
  readonly lastName?: InputMaybe<Scalars['String']['input']>
  /** Nickname of the contact. Must be between 1 and 100 characters. Useful when the contact is not commonly referred to by their legal name. */
  readonly nickname?: InputMaybe<Scalars['String']['input']>
  /** Additional notes about the contact. Must be between 1 and 1,000 characters. Useful for providing context or distinguishing details if the name alone is insufficient. */
  readonly note?: InputMaybe<Scalars['String']['input']>
  /** The international phone number of the contact, formatted according to E.164 (https://wikipedia.org/wiki/E.164). */
  readonly phoneNumber?: InputMaybe<Scalars['String']['input']>
  /** Time zone of the contact in IANA format, e.g., `Europe/Berlin` or `America/New_York`. */
  readonly timeZone?: InputMaybe<Scalars['String']['input']>
  /** URL associated with the contact, must start with "https://" and not exceed 2,000 characters. */
  readonly url?: InputMaybe<Scalars['String']['input']>
}

/** All input for the `contactMerge` mutation. */
export type ContactMergeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  readonly contact: ContactInput
  readonly contactId: Scalars['UUID']['input']
  readonly contactIdMerged: Scalars['UUID']['input']
}

/** The output of our `contactMerge` mutation. */
export type ContactMergePayload = {
  readonly __typename?: 'ContactMergePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  /** An edge for our `Contact`. May be used by Relay 1. */
  readonly contactEdge?: Maybe<ContactEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
  readonly result?: Maybe<Contact>
}

/** The output of our `contactMerge` mutation. */
export type ContactMergePayloadContactEdgeArgs = {
  orderBy?: ReadonlyArray<ContactOrderBy>
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
  readonly accountId?: InputMaybe<Scalars['UUID']['input']>
  /** Optional reference to the physical address of the contact. */
  readonly addressId?: InputMaybe<Scalars['UUID']['input']>
  /** Reference to the account that created this contact. Enforces cascading deletion. */
  readonly createdBy?: InputMaybe<Scalars['UUID']['input']>
  /** Email addresses of the contact, between 1 and 10 when set. The first one is the primary address, which invitations are sent to. */
  readonly emailAddresses?: InputMaybe<
    ReadonlyArray<InputMaybe<Scalars['EmailAddress']['input']>>
  >
  /** First name of the contact. Must be between 1 and 100 characters. */
  readonly firstName?: InputMaybe<Scalars['String']['input']>
  /** Reference to the preferred language of the contact. */
  readonly language?: InputMaybe<Language>
  /** Last name of the contact. Must be between 1 and 100 characters. */
  readonly lastName?: InputMaybe<Scalars['String']['input']>
  /** Nickname of the contact. Must be between 1 and 100 characters. Useful when the contact is not commonly referred to by their legal name. */
  readonly nickname?: InputMaybe<Scalars['String']['input']>
  /** Additional notes about the contact. Must be between 1 and 1,000 characters. Useful for providing context or distinguishing details if the name alone is insufficient. */
  readonly note?: InputMaybe<Scalars['String']['input']>
  /** The international phone number of the contact, formatted according to E.164 (https://wikipedia.org/wiki/E.164). */
  readonly phoneNumber?: InputMaybe<Scalars['String']['input']>
  /** Time zone of the contact in IANA format, e.g., `Europe/Berlin` or `America/New_York`. */
  readonly timeZone?: InputMaybe<Scalars['String']['input']>
  /** URL associated with the contact, must start with "https://" and not exceed 2,000 characters. */
  readonly url?: InputMaybe<Scalars['String']['input']>
}

/** All input for the create `AccountBlock` mutation. */
export type CreateAccountBlockInput = {
  /** The `AccountBlock` to be created by this mutation. */
  readonly accountBlock: AccountBlockInput
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
}

/** The output of our create `AccountBlock` mutation. */
export type CreateAccountBlockPayload = {
  readonly __typename?: 'CreateAccountBlockPayload'
  /** The `AccountBlock` that was created by this mutation. */
  readonly accountBlock?: Maybe<AccountBlock>
  /** An edge for our `AccountBlock`. May be used by Relay 1. */
  readonly accountBlockEdge?: Maybe<AccountBlockEdge>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
}

/** The output of our create `AccountBlock` mutation. */
export type CreateAccountBlockPayloadAccountBlockEdgeArgs = {
  orderBy?: ReadonlyArray<AccountBlockOrderBy>
}

/** All input for the create `AccountSocialNetwork` mutation. */
export type CreateAccountSocialNetworkInput = {
  /** The `AccountSocialNetwork` to be created by this mutation. */
  readonly accountSocialNetwork: AccountSocialNetworkInput
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
}

/** The output of our create `AccountSocialNetwork` mutation. */
export type CreateAccountSocialNetworkPayload = {
  readonly __typename?: 'CreateAccountSocialNetworkPayload'
  /** The `AccountSocialNetwork` that was created by this mutation. */
  readonly accountSocialNetwork?: Maybe<AccountSocialNetwork>
  /** An edge for our `AccountSocialNetwork`. May be used by Relay 1. */
  readonly accountSocialNetworkEdge?: Maybe<AccountSocialNetworkEdge>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
}

/** The output of our create `AccountSocialNetwork` mutation. */
export type CreateAccountSocialNetworkPayloadAccountSocialNetworkEdgeArgs = {
  orderBy?: ReadonlyArray<AccountSocialNetworkOrderBy>
}

/** All input for the create `Address` mutation. */
export type CreateAddressInput = {
  /** The `Address` to be created by this mutation. */
  readonly address: AddressInput
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
}

/** The output of our create `Address` mutation. */
export type CreateAddressPayload = {
  readonly __typename?: 'CreateAddressPayload'
  /** The `Address` that was created by this mutation. */
  readonly address?: Maybe<Address>
  /** An edge for our `Address`. May be used by Relay 1. */
  readonly addressEdge?: Maybe<AddressEdge>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
}

/** The output of our create `Address` mutation. */
export type CreateAddressPayloadAddressEdgeArgs = {
  orderBy?: ReadonlyArray<AddressOrderBy>
}

/** All input for the create `Attendance` mutation. */
export type CreateAttendanceInput = {
  /** The `Attendance` to be created by this mutation. */
  readonly attendance: AttendanceInput
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
}

/** The output of our create `Attendance` mutation. */
export type CreateAttendancePayload = {
  readonly __typename?: 'CreateAttendancePayload'
  /** The `Attendance` that was created by this mutation. */
  readonly attendance?: Maybe<Attendance>
  /** An edge for our `Attendance`. May be used by Relay 1. */
  readonly attendanceEdge?: Maybe<AttendanceEdge>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
}

/** The output of our create `Attendance` mutation. */
export type CreateAttendancePayloadAttendanceEdgeArgs = {
  orderBy?: ReadonlyArray<AttendanceOrderBy>
}

/** All input for the create `ContactGroup` mutation. */
export type CreateContactGroupInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The `ContactGroup` to be created by this mutation. */
  readonly contactGroup: ContactGroupInput
}

/** All input for the create `ContactGroupMember` mutation. */
export type CreateContactGroupMemberInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The `ContactGroupMember` to be created by this mutation. */
  readonly contactGroupMember: ContactGroupMemberInput
}

/** The output of our create `ContactGroupMember` mutation. */
export type CreateContactGroupMemberPayload = {
  readonly __typename?: 'CreateContactGroupMemberPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `ContactGroupMember` that was created by this mutation. */
  readonly contactGroupMember?: Maybe<ContactGroupMember>
  /** An edge for our `ContactGroupMember`. May be used by Relay 1. */
  readonly contactGroupMemberEdge?: Maybe<ContactGroupMemberEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
}

/** The output of our create `ContactGroupMember` mutation. */
export type CreateContactGroupMemberPayloadContactGroupMemberEdgeArgs = {
  orderBy?: ReadonlyArray<ContactGroupMemberOrderBy>
}

/** All input for the `createContactGroupMembers` mutation. */
export type CreateContactGroupMembersInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  readonly contactGroupIds: ReadonlyArray<InputMaybe<Scalars['UUID']['input']>>
  readonly contactIds: ReadonlyArray<InputMaybe<Scalars['UUID']['input']>>
}

/** The output of our `createContactGroupMembers` mutation. */
export type CreateContactGroupMembersPayload = {
  readonly __typename?: 'CreateContactGroupMembersPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
  readonly result?: Maybe<ReadonlyArray<ContactGroupMember>>
}

/** The output of our create `ContactGroup` mutation. */
export type CreateContactGroupPayload = {
  readonly __typename?: 'CreateContactGroupPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `ContactGroup` that was created by this mutation. */
  readonly contactGroup?: Maybe<ContactGroup>
  /** An edge for our `ContactGroup`. May be used by Relay 1. */
  readonly contactGroupEdge?: Maybe<ContactGroupEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
}

/** The output of our create `ContactGroup` mutation. */
export type CreateContactGroupPayloadContactGroupEdgeArgs = {
  orderBy?: ReadonlyArray<ContactGroupOrderBy>
}

/** All input for the `createContactGroups` mutation. */
export type CreateContactGroupsInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  readonly names: ReadonlyArray<InputMaybe<Scalars['String']['input']>>
}

/** The output of our `createContactGroups` mutation. */
export type CreateContactGroupsPayload = {
  readonly __typename?: 'CreateContactGroupsPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
  readonly result?: Maybe<ReadonlyArray<ContactGroup>>
}

/** All input for the create `Contact` mutation. */
export type CreateContactInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The `Contact` to be created by this mutation. */
  readonly contact: ContactInput
}

/** The output of our create `Contact` mutation. */
export type CreateContactPayload = {
  readonly __typename?: 'CreateContactPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `Contact` that was created by this mutation. */
  readonly contact?: Maybe<Contact>
  /** An edge for our `Contact`. May be used by Relay 1. */
  readonly contactEdge?: Maybe<ContactEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
}

/** The output of our create `Contact` mutation. */
export type CreateContactPayloadContactEdgeArgs = {
  orderBy?: ReadonlyArray<ContactOrderBy>
}

/** All input for the `createContacts` mutation. */
export type CreateContactsInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  readonly contacts: ReadonlyArray<InputMaybe<ContactInput>>
}

/** The output of our `createContacts` mutation. */
export type CreateContactsPayload = {
  readonly __typename?: 'CreateContactsPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
  readonly result?: Maybe<ReadonlyArray<Contact>>
}

/** All input for the create `Device` mutation. */
export type CreateDeviceInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The `Device` to be created by this mutation. */
  readonly device: DeviceInput
}

/** The output of our create `Device` mutation. */
export type CreateDevicePayload = {
  readonly __typename?: 'CreateDevicePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `Device` that was created by this mutation. */
  readonly device?: Maybe<Device>
  /** An edge for our `Device`. May be used by Relay 1. */
  readonly deviceEdge?: Maybe<DeviceEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
}

/** The output of our create `Device` mutation. */
export type CreateDevicePayloadDeviceEdgeArgs = {
  orderBy?: ReadonlyArray<DeviceOrderBy>
}

/** All input for the create `EventCategoryMapping` mutation. */
export type CreateEventCategoryMappingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The `EventCategoryMapping` to be created by this mutation. */
  readonly eventCategoryMapping: EventCategoryMappingInput
}

/** The output of our create `EventCategoryMapping` mutation. */
export type CreateEventCategoryMappingPayload = {
  readonly __typename?: 'CreateEventCategoryMappingPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `EventCategoryMapping` that was created by this mutation. */
  readonly eventCategoryMapping?: Maybe<EventCategoryMapping>
  /** An edge for our `EventCategoryMapping`. May be used by Relay 1. */
  readonly eventCategoryMappingEdge?: Maybe<EventCategoryMappingEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
}

/** The output of our create `EventCategoryMapping` mutation. */
export type CreateEventCategoryMappingPayloadEventCategoryMappingEdgeArgs = {
  orderBy?: ReadonlyArray<EventCategoryMappingOrderBy>
}

/** All input for the create `EventFavorite` mutation. */
export type CreateEventFavoriteInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The `EventFavorite` to be created by this mutation. */
  readonly eventFavorite: EventFavoriteInput
}

/** The output of our create `EventFavorite` mutation. */
export type CreateEventFavoritePayload = {
  readonly __typename?: 'CreateEventFavoritePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `EventFavorite` that was created by this mutation. */
  readonly eventFavorite?: Maybe<EventFavorite>
  /** An edge for our `EventFavorite`. May be used by Relay 1. */
  readonly eventFavoriteEdge?: Maybe<EventFavoriteEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
}

/** The output of our create `EventFavorite` mutation. */
export type CreateEventFavoritePayloadEventFavoriteEdgeArgs = {
  orderBy?: ReadonlyArray<EventFavoriteOrderBy>
}

/** All input for the create `EventFormatMapping` mutation. */
export type CreateEventFormatMappingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The `EventFormatMapping` to be created by this mutation. */
  readonly eventFormatMapping: EventFormatMappingInput
}

/** The output of our create `EventFormatMapping` mutation. */
export type CreateEventFormatMappingPayload = {
  readonly __typename?: 'CreateEventFormatMappingPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `EventFormatMapping` that was created by this mutation. */
  readonly eventFormatMapping?: Maybe<EventFormatMapping>
  /** An edge for our `EventFormatMapping`. May be used by Relay 1. */
  readonly eventFormatMappingEdge?: Maybe<EventFormatMappingEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
}

/** The output of our create `EventFormatMapping` mutation. */
export type CreateEventFormatMappingPayloadEventFormatMappingEdgeArgs = {
  orderBy?: ReadonlyArray<EventFormatMappingOrderBy>
}

/** All input for the create `Event` mutation. */
export type CreateEventInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The `Event` to be created by this mutation. */
  readonly event: EventInput
}

/** All input for the create `EventInvitationLink` mutation. */
export type CreateEventInvitationLinkInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The `EventInvitationLink` to be created by this mutation. */
  readonly eventInvitationLink: EventInvitationLinkInput
}

/** The output of our create `EventInvitationLink` mutation. */
export type CreateEventInvitationLinkPayload = {
  readonly __typename?: 'CreateEventInvitationLinkPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `EventInvitationLink` that was created by this mutation. */
  readonly eventInvitationLink?: Maybe<EventInvitationLink>
  /** An edge for our `EventInvitationLink`. May be used by Relay 1. */
  readonly eventInvitationLinkEdge?: Maybe<EventInvitationLinkEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
}

/** The output of our create `EventInvitationLink` mutation. */
export type CreateEventInvitationLinkPayloadEventInvitationLinkEdgeArgs = {
  orderBy?: ReadonlyArray<EventInvitationLinkOrderBy>
}

/** The output of our create `Event` mutation. */
export type CreateEventPayload = {
  readonly __typename?: 'CreateEventPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `Event` that was created by this mutation. */
  readonly event?: Maybe<Event>
  /** An edge for our `Event`. May be used by Relay 1. */
  readonly eventEdge?: Maybe<EventEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
}

/** The output of our create `Event` mutation. */
export type CreateEventPayloadEventEdgeArgs = {
  orderBy?: ReadonlyArray<EventOrderBy>
}

/** All input for the create `EventUpload` mutation. */
export type CreateEventUploadInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The `EventUpload` to be created by this mutation. */
  readonly eventUpload: EventUploadInput
}

/** The output of our create `EventUpload` mutation. */
export type CreateEventUploadPayload = {
  readonly __typename?: 'CreateEventUploadPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `EventUpload` that was created by this mutation. */
  readonly eventUpload?: Maybe<EventUpload>
  /** An edge for our `EventUpload`. May be used by Relay 1. */
  readonly eventUploadEdge?: Maybe<EventUploadEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
}

/** The output of our create `EventUpload` mutation. */
export type CreateEventUploadPayloadEventUploadEdgeArgs = {
  orderBy?: ReadonlyArray<EventUploadOrderBy>
}

/** All input for the create `Friendship` mutation. */
export type CreateFriendshipInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The `Friendship` to be created by this mutation. */
  readonly friendship: FriendshipInput
}

/** The output of our create `Friendship` mutation. */
export type CreateFriendshipPayload = {
  readonly __typename?: 'CreateFriendshipPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `Friendship` that was created by this mutation. */
  readonly friendship?: Maybe<Friendship>
  /** An edge for our `Friendship`. May be used by Relay 1. */
  readonly friendshipEdge?: Maybe<FriendshipEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
}

/** The output of our create `Friendship` mutation. */
export type CreateFriendshipPayloadFriendshipEdgeArgs = {
  orderBy?: ReadonlyArray<FriendshipOrderBy>
}

/** All input for the create `Guest` mutation. */
export type CreateGuestInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The `Guest` to be created by this mutation. */
  readonly guest: GuestInput
}

/** The output of our create `Guest` mutation. */
export type CreateGuestPayload = {
  readonly __typename?: 'CreateGuestPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `Guest` that was created by this mutation. */
  readonly guest?: Maybe<Guest>
  /** An edge for our `Guest`. May be used by Relay 1. */
  readonly guestEdge?: Maybe<GuestEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
}

/** The output of our create `Guest` mutation. */
export type CreateGuestPayloadGuestEdgeArgs = {
  orderBy?: ReadonlyArray<GuestOrderBy>
}

/** All input for the `createGuests` mutation. */
export type CreateGuestsInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  readonly contactIds: ReadonlyArray<InputMaybe<Scalars['UUID']['input']>>
  readonly eventId: Scalars['UUID']['input']
}

/** The output of our `createGuests` mutation. */
export type CreateGuestsPayload = {
  readonly __typename?: 'CreateGuestsPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
  readonly result?: Maybe<ReadonlyArray<Guest>>
}

/** All input for the create `LegalTermAcceptance` mutation. */
export type CreateLegalTermAcceptanceInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The `LegalTermAcceptance` to be created by this mutation. */
  readonly legalTermAcceptance: LegalTermAcceptanceInput
}

/** The output of our create `LegalTermAcceptance` mutation. */
export type CreateLegalTermAcceptancePayload = {
  readonly __typename?: 'CreateLegalTermAcceptancePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `LegalTermAcceptance` that was created by this mutation. */
  readonly legalTermAcceptance?: Maybe<LegalTermAcceptance>
  /** An edge for our `LegalTermAcceptance`. May be used by Relay 1. */
  readonly legalTermAcceptanceEdge?: Maybe<LegalTermAcceptanceEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
}

/** The output of our create `LegalTermAcceptance` mutation. */
export type CreateLegalTermAcceptancePayloadLegalTermAcceptanceEdgeArgs = {
  orderBy?: ReadonlyArray<LegalTermAcceptanceOrderBy>
}

/** All input for the create `PreferenceEventCategory` mutation. */
export type CreatePreferenceEventCategoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The `PreferenceEventCategory` to be created by this mutation. */
  readonly preferenceEventCategory: PreferenceEventCategoryInput
}

/** The output of our create `PreferenceEventCategory` mutation. */
export type CreatePreferenceEventCategoryPayload = {
  readonly __typename?: 'CreatePreferenceEventCategoryPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `PreferenceEventCategory` that was created by this mutation. */
  readonly preferenceEventCategory?: Maybe<PreferenceEventCategory>
  /** An edge for our `PreferenceEventCategory`. May be used by Relay 1. */
  readonly preferenceEventCategoryEdge?: Maybe<PreferenceEventCategoryEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
}

/** The output of our create `PreferenceEventCategory` mutation. */
export type CreatePreferenceEventCategoryPayloadPreferenceEventCategoryEdgeArgs =
  {
    orderBy?: ReadonlyArray<PreferenceEventCategoryOrderBy>
  }

/** All input for the create `PreferenceEventFormat` mutation. */
export type CreatePreferenceEventFormatInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The `PreferenceEventFormat` to be created by this mutation. */
  readonly preferenceEventFormat: PreferenceEventFormatInput
}

/** The output of our create `PreferenceEventFormat` mutation. */
export type CreatePreferenceEventFormatPayload = {
  readonly __typename?: 'CreatePreferenceEventFormatPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `PreferenceEventFormat` that was created by this mutation. */
  readonly preferenceEventFormat?: Maybe<PreferenceEventFormat>
  /** An edge for our `PreferenceEventFormat`. May be used by Relay 1. */
  readonly preferenceEventFormatEdge?: Maybe<PreferenceEventFormatEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
}

/** The output of our create `PreferenceEventFormat` mutation. */
export type CreatePreferenceEventFormatPayloadPreferenceEventFormatEdgeArgs = {
  orderBy?: ReadonlyArray<PreferenceEventFormatOrderBy>
}

/** All input for the create `PreferenceEventLocation` mutation. */
export type CreatePreferenceEventLocationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The `PreferenceEventLocation` to be created by this mutation. */
  readonly preferenceEventLocation: PreferenceEventLocationInput
}

/** The output of our create `PreferenceEventLocation` mutation. */
export type CreatePreferenceEventLocationPayload = {
  readonly __typename?: 'CreatePreferenceEventLocationPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `PreferenceEventLocation` that was created by this mutation. */
  readonly preferenceEventLocation?: Maybe<PreferenceEventLocation>
  /** An edge for our `PreferenceEventLocation`. May be used by Relay 1. */
  readonly preferenceEventLocationEdge?: Maybe<PreferenceEventLocationEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
}

/** The output of our create `PreferenceEventLocation` mutation. */
export type CreatePreferenceEventLocationPayloadPreferenceEventLocationEdgeArgs =
  {
    orderBy?: ReadonlyArray<PreferenceEventLocationOrderBy>
  }

/** All input for the create `PreferenceEventSize` mutation. */
export type CreatePreferenceEventSizeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The `PreferenceEventSize` to be created by this mutation. */
  readonly preferenceEventSize: PreferenceEventSizeInput
}

/** The output of our create `PreferenceEventSize` mutation. */
export type CreatePreferenceEventSizePayload = {
  readonly __typename?: 'CreatePreferenceEventSizePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `PreferenceEventSize` that was created by this mutation. */
  readonly preferenceEventSize?: Maybe<PreferenceEventSize>
  /** An edge for our `PreferenceEventSize`. May be used by Relay 1. */
  readonly preferenceEventSizeEdge?: Maybe<PreferenceEventSizeEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
}

/** The output of our create `PreferenceEventSize` mutation. */
export type CreatePreferenceEventSizePayloadPreferenceEventSizeEdgeArgs = {
  orderBy?: ReadonlyArray<PreferenceEventSizeOrderBy>
}

/** All input for the create `ProfilePicture` mutation. */
export type CreateProfilePictureInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The `ProfilePicture` to be created by this mutation. */
  readonly profilePicture: ProfilePictureInput
}

/** The output of our create `ProfilePicture` mutation. */
export type CreateProfilePicturePayload = {
  readonly __typename?: 'CreateProfilePicturePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `ProfilePicture` that was created by this mutation. */
  readonly profilePicture?: Maybe<ProfilePicture>
  /** An edge for our `ProfilePicture`. May be used by Relay 1. */
  readonly profilePictureEdge?: Maybe<ProfilePictureEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
}

/** The output of our create `ProfilePicture` mutation. */
export type CreateProfilePicturePayloadProfilePictureEdgeArgs = {
  orderBy?: ReadonlyArray<ProfilePictureOrderBy>
}

/** All input for the create `Report` mutation. */
export type CreateReportInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The `Report` to be created by this mutation. */
  readonly report: ReportInput
}

/** The output of our create `Report` mutation. */
export type CreateReportPayload = {
  readonly __typename?: 'CreateReportPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
  /** The `Report` that was created by this mutation. */
  readonly report?: Maybe<Report>
  /** An edge for our `Report`. May be used by Relay 1. */
  readonly reportEdge?: Maybe<ReportEdge>
}

/** The output of our create `Report` mutation. */
export type CreateReportPayloadReportEdgeArgs = {
  orderBy?: ReadonlyArray<ReportOrderBy>
}

/** All input for the create `Upload` mutation. */
export type CreateUploadInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The `Upload` to be created by this mutation. */
  readonly upload: UploadInput
}

/** The output of our create `Upload` mutation. */
export type CreateUploadPayload = {
  readonly __typename?: 'CreateUploadPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
  /** The `Upload` that was created by this mutation. */
  readonly upload?: Maybe<Upload>
  /** An edge for our `Upload`. May be used by Relay 1. */
  readonly uploadEdge?: Maybe<UploadEdge>
}

/** The output of our create `Upload` mutation. */
export type CreateUploadPayloadUploadEdgeArgs = {
  orderBy?: ReadonlyArray<UploadOrderBy>
}

/** All input for the `deleteAccountBlockByCreatedByAndBlockedAccountId` mutation. */
export type DeleteAccountBlockByCreatedByAndBlockedAccountIdInput = {
  /** The account id of the user who is blocked. */
  readonly blockedAccountId: Scalars['UUID']['input']
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The account id of the user who created the account block. */
  readonly createdBy: Scalars['UUID']['input']
}

/** All input for the `deleteAccountBlockByRowId` mutation. */
export type DeleteAccountBlockByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The account block's internal id. */
  readonly rowId: Scalars['UUID']['input']
}

/** All input for the `deleteAccountBlock` mutation. */
export type DeleteAccountBlockInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `AccountBlock` to be deleted. */
  readonly id: Scalars['ID']['input']
}

/** The output of our delete `AccountBlock` mutation. */
export type DeleteAccountBlockPayload = {
  readonly __typename?: 'DeleteAccountBlockPayload'
  /** The `AccountBlock` that was deleted by this mutation. */
  readonly accountBlock?: Maybe<AccountBlock>
  /** An edge for our `AccountBlock`. May be used by Relay 1. */
  readonly accountBlockEdge?: Maybe<AccountBlockEdge>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  readonly deletedAccountBlockId?: Maybe<Scalars['ID']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
}

/** The output of our delete `AccountBlock` mutation. */
export type DeleteAccountBlockPayloadAccountBlockEdgeArgs = {
  orderBy?: ReadonlyArray<AccountBlockOrderBy>
}

/** All input for the `deleteAccountSocialNetworkByAccountIdAndSocialNetwork` mutation. */
export type DeleteAccountSocialNetworkByAccountIdAndSocialNetworkInput = {
  /** The unique identifier of the account. */
  readonly accountId: Scalars['UUID']['input']
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The social network to which the account is linked. */
  readonly socialNetwork: SocialNetwork
}

/** All input for the `deleteAccountSocialNetwork` mutation. */
export type DeleteAccountSocialNetworkInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `AccountSocialNetwork` to be deleted. */
  readonly id: Scalars['ID']['input']
}

/** The output of our delete `AccountSocialNetwork` mutation. */
export type DeleteAccountSocialNetworkPayload = {
  readonly __typename?: 'DeleteAccountSocialNetworkPayload'
  /** The `AccountSocialNetwork` that was deleted by this mutation. */
  readonly accountSocialNetwork?: Maybe<AccountSocialNetwork>
  /** An edge for our `AccountSocialNetwork`. May be used by Relay 1. */
  readonly accountSocialNetworkEdge?: Maybe<AccountSocialNetworkEdge>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  readonly deletedAccountSocialNetworkId?: Maybe<Scalars['ID']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
}

/** The output of our delete `AccountSocialNetwork` mutation. */
export type DeleteAccountSocialNetworkPayloadAccountSocialNetworkEdgeArgs = {
  orderBy?: ReadonlyArray<AccountSocialNetworkOrderBy>
}

/** All input for the `deleteAddressByRowId` mutation. */
export type DeleteAddressByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Primary key, uniquely identifies each address. */
  readonly rowId: Scalars['UUID']['input']
}

/** All input for the `deleteAddress` mutation. */
export type DeleteAddressInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `Address` to be deleted. */
  readonly id: Scalars['ID']['input']
}

/** The output of our delete `Address` mutation. */
export type DeleteAddressPayload = {
  readonly __typename?: 'DeleteAddressPayload'
  /** The `Address` that was deleted by this mutation. */
  readonly address?: Maybe<Address>
  /** An edge for our `Address`. May be used by Relay 1. */
  readonly addressEdge?: Maybe<AddressEdge>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  readonly deletedAddressId?: Maybe<Scalars['ID']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
}

/** The output of our delete `Address` mutation. */
export type DeleteAddressPayloadAddressEdgeArgs = {
  orderBy?: ReadonlyArray<AddressOrderBy>
}

/** All input for the `deleteContactByCreatedByAndAccountId` mutation. */
export type DeleteContactByCreatedByAndAccountIdInput = {
  /** Optional reference to an associated account. */
  readonly accountId: Scalars['UUID']['input']
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Reference to the account that created this contact. Enforces cascading deletion. */
  readonly createdBy: Scalars['UUID']['input']
}

/** All input for the `deleteContactByRowId` mutation. */
export type DeleteContactByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Primary key, uniquely identifies each contact. */
  readonly rowId: Scalars['UUID']['input']
}

/** All input for the `deleteContactGroupByRowId` mutation. */
export type DeleteContactGroupByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Primary key, uniquely identifies each contact group. */
  readonly rowId: Scalars['UUID']['input']
}

/** All input for the `deleteContactGroup` mutation. */
export type DeleteContactGroupInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `ContactGroup` to be deleted. */
  readonly id: Scalars['ID']['input']
}

/** All input for the `deleteContactGroupMemberByContactGroupIdAndContactId` mutation. */
export type DeleteContactGroupMemberByContactGroupIdAndContactIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** A contact group id. */
  readonly contactGroupId: Scalars['UUID']['input']
  /** A contact id. */
  readonly contactId: Scalars['UUID']['input']
}

/** All input for the `deleteContactGroupMember` mutation. */
export type DeleteContactGroupMemberInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `ContactGroupMember` to be deleted. */
  readonly id: Scalars['ID']['input']
}

/** The output of our delete `ContactGroupMember` mutation. */
export type DeleteContactGroupMemberPayload = {
  readonly __typename?: 'DeleteContactGroupMemberPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `ContactGroupMember` that was deleted by this mutation. */
  readonly contactGroupMember?: Maybe<ContactGroupMember>
  /** An edge for our `ContactGroupMember`. May be used by Relay 1. */
  readonly contactGroupMemberEdge?: Maybe<ContactGroupMemberEdge>
  readonly deletedContactGroupMemberId?: Maybe<Scalars['ID']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
}

/** The output of our delete `ContactGroupMember` mutation. */
export type DeleteContactGroupMemberPayloadContactGroupMemberEdgeArgs = {
  orderBy?: ReadonlyArray<ContactGroupMemberOrderBy>
}

/** The output of our delete `ContactGroup` mutation. */
export type DeleteContactGroupPayload = {
  readonly __typename?: 'DeleteContactGroupPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `ContactGroup` that was deleted by this mutation. */
  readonly contactGroup?: Maybe<ContactGroup>
  /** An edge for our `ContactGroup`. May be used by Relay 1. */
  readonly contactGroupEdge?: Maybe<ContactGroupEdge>
  readonly deletedContactGroupId?: Maybe<Scalars['ID']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
}

/** The output of our delete `ContactGroup` mutation. */
export type DeleteContactGroupPayloadContactGroupEdgeArgs = {
  orderBy?: ReadonlyArray<ContactGroupOrderBy>
}

/** All input for the `deleteContact` mutation. */
export type DeleteContactInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `Contact` to be deleted. */
  readonly id: Scalars['ID']['input']
}

/** The output of our delete `Contact` mutation. */
export type DeleteContactPayload = {
  readonly __typename?: 'DeleteContactPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `Contact` that was deleted by this mutation. */
  readonly contact?: Maybe<Contact>
  /** An edge for our `Contact`. May be used by Relay 1. */
  readonly contactEdge?: Maybe<ContactEdge>
  readonly deletedContactId?: Maybe<Scalars['ID']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
}

/** The output of our delete `Contact` mutation. */
export type DeleteContactPayloadContactEdgeArgs = {
  orderBy?: ReadonlyArray<ContactOrderBy>
}

/** All input for the `deleteDeviceByCreatedByAndFcmToken` mutation. */
export type DeleteDeviceByCreatedByAndFcmTokenInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Reference to the account that created the device. */
  readonly createdBy: Scalars['UUID']['input']
  /** The Firebase Cloud Messaging token of the device that's used to deliver notifications. Must be non-empty and not exceed 300 characters. */
  readonly fcmToken: Scalars['String']['input']
}

/** All input for the `deleteDeviceByRowId` mutation. */
export type DeleteDeviceByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The internal id of the device. */
  readonly rowId: Scalars['UUID']['input']
}

/** All input for the `deleteDevice` mutation. */
export type DeleteDeviceInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `Device` to be deleted. */
  readonly id: Scalars['ID']['input']
}

/** The output of our delete `Device` mutation. */
export type DeleteDevicePayload = {
  readonly __typename?: 'DeleteDevicePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  readonly deletedDeviceId?: Maybe<Scalars['ID']['output']>
  /** The `Device` that was deleted by this mutation. */
  readonly device?: Maybe<Device>
  /** An edge for our `Device`. May be used by Relay 1. */
  readonly deviceEdge?: Maybe<DeviceEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
}

/** The output of our delete `Device` mutation. */
export type DeleteDevicePayloadDeviceEdgeArgs = {
  orderBy?: ReadonlyArray<DeviceOrderBy>
}

/** All input for the `deleteEventByCreatedByAndSlug` mutation. */
export type DeleteEventByCreatedByAndSlugInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The event creator's id. */
  readonly createdBy: Scalars['UUID']['input']
  /** The event's name, slugified. Must be alphanumeric with hyphens and not exceed 100 characters. */
  readonly slug: Scalars['String']['input']
}

/** All input for the `deleteEventByRowId` mutation. */
export type DeleteEventByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The event's internal id. */
  readonly rowId: Scalars['UUID']['input']
}

/** All input for the `deleteEventCategoryMappingByEventIdAndCategoryId` mutation. */
export type DeleteEventCategoryMappingByEventIdAndCategoryIdInput = {
  /** A category id. */
  readonly categoryId: Scalars['UUID']['input']
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An event id. */
  readonly eventId: Scalars['UUID']['input']
}

/** All input for the `deleteEventCategoryMapping` mutation. */
export type DeleteEventCategoryMappingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `EventCategoryMapping` to be deleted. */
  readonly id: Scalars['ID']['input']
}

/** The output of our delete `EventCategoryMapping` mutation. */
export type DeleteEventCategoryMappingPayload = {
  readonly __typename?: 'DeleteEventCategoryMappingPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  readonly deletedEventCategoryMappingId?: Maybe<Scalars['ID']['output']>
  /** The `EventCategoryMapping` that was deleted by this mutation. */
  readonly eventCategoryMapping?: Maybe<EventCategoryMapping>
  /** An edge for our `EventCategoryMapping`. May be used by Relay 1. */
  readonly eventCategoryMappingEdge?: Maybe<EventCategoryMappingEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
}

/** The output of our delete `EventCategoryMapping` mutation. */
export type DeleteEventCategoryMappingPayloadEventCategoryMappingEdgeArgs = {
  orderBy?: ReadonlyArray<EventCategoryMappingOrderBy>
}

/** All input for the `deleteEventFavoriteByCreatedByAndEventId` mutation. */
export type DeleteEventFavoriteByCreatedByAndEventIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Reference to the account that created the event favorite. */
  readonly createdBy: Scalars['UUID']['input']
  /** Reference to the event that is marked as a favorite. */
  readonly eventId: Scalars['UUID']['input']
}

/** All input for the `deleteEventFavoriteByRowId` mutation. */
export type DeleteEventFavoriteByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Primary key, uniquely identifies each favorite entry. */
  readonly rowId: Scalars['UUID']['input']
}

/** All input for the `deleteEventFavorite` mutation. */
export type DeleteEventFavoriteInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `EventFavorite` to be deleted. */
  readonly id: Scalars['ID']['input']
}

/** The output of our delete `EventFavorite` mutation. */
export type DeleteEventFavoritePayload = {
  readonly __typename?: 'DeleteEventFavoritePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  readonly deletedEventFavoriteId?: Maybe<Scalars['ID']['output']>
  /** The `EventFavorite` that was deleted by this mutation. */
  readonly eventFavorite?: Maybe<EventFavorite>
  /** An edge for our `EventFavorite`. May be used by Relay 1. */
  readonly eventFavoriteEdge?: Maybe<EventFavoriteEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
}

/** The output of our delete `EventFavorite` mutation. */
export type DeleteEventFavoritePayloadEventFavoriteEdgeArgs = {
  orderBy?: ReadonlyArray<EventFavoriteOrderBy>
}

/** All input for the `deleteEventFormatMappingByEventIdAndFormatId` mutation. */
export type DeleteEventFormatMappingByEventIdAndFormatIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An event id. */
  readonly eventId: Scalars['UUID']['input']
  /** A format id. */
  readonly formatId: Scalars['UUID']['input']
}

/** All input for the `deleteEventFormatMapping` mutation. */
export type DeleteEventFormatMappingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `EventFormatMapping` to be deleted. */
  readonly id: Scalars['ID']['input']
}

/** The output of our delete `EventFormatMapping` mutation. */
export type DeleteEventFormatMappingPayload = {
  readonly __typename?: 'DeleteEventFormatMappingPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  readonly deletedEventFormatMappingId?: Maybe<Scalars['ID']['output']>
  /** The `EventFormatMapping` that was deleted by this mutation. */
  readonly eventFormatMapping?: Maybe<EventFormatMapping>
  /** An edge for our `EventFormatMapping`. May be used by Relay 1. */
  readonly eventFormatMappingEdge?: Maybe<EventFormatMappingEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
}

/** The output of our delete `EventFormatMapping` mutation. */
export type DeleteEventFormatMappingPayloadEventFormatMappingEdgeArgs = {
  orderBy?: ReadonlyArray<EventFormatMappingOrderBy>
}

/** All input for the `deleteEvent` mutation. */
export type DeleteEventInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `Event` to be deleted. */
  readonly id: Scalars['ID']['input']
}

/** All input for the `deleteEventInvitationLinkByEventId` mutation. */
export type DeleteEventInvitationLinkByEventIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Reference to the event the link invites to. */
  readonly eventId: Scalars['UUID']['input']
}

/** All input for the `deleteEventInvitationLinkByRowId` mutation. */
export type DeleteEventInvitationLinkByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The link's secret code and primary key. */
  readonly rowId: Scalars['UUID']['input']
}

/** All input for the `deleteEventInvitationLink` mutation. */
export type DeleteEventInvitationLinkInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `EventInvitationLink` to be deleted. */
  readonly id: Scalars['ID']['input']
}

/** The output of our delete `EventInvitationLink` mutation. */
export type DeleteEventInvitationLinkPayload = {
  readonly __typename?: 'DeleteEventInvitationLinkPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  readonly deletedEventInvitationLinkId?: Maybe<Scalars['ID']['output']>
  /** The `EventInvitationLink` that was deleted by this mutation. */
  readonly eventInvitationLink?: Maybe<EventInvitationLink>
  /** An edge for our `EventInvitationLink`. May be used by Relay 1. */
  readonly eventInvitationLinkEdge?: Maybe<EventInvitationLinkEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
}

/** The output of our delete `EventInvitationLink` mutation. */
export type DeleteEventInvitationLinkPayloadEventInvitationLinkEdgeArgs = {
  orderBy?: ReadonlyArray<EventInvitationLinkOrderBy>
}

/** The output of our delete `Event` mutation. */
export type DeleteEventPayload = {
  readonly __typename?: 'DeleteEventPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  readonly deletedEventId?: Maybe<Scalars['ID']['output']>
  /** The `Event` that was deleted by this mutation. */
  readonly event?: Maybe<Event>
  /** An edge for our `Event`. May be used by Relay 1. */
  readonly eventEdge?: Maybe<EventEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
}

/** The output of our delete `Event` mutation. */
export type DeleteEventPayloadEventEdgeArgs = {
  orderBy?: ReadonlyArray<EventOrderBy>
}

/** All input for the `deleteEventUploadByEventIdAndUploadId` mutation. */
export type DeleteEventUploadByEventIdAndUploadIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Reference to the event associated with the upload. */
  readonly eventId: Scalars['UUID']['input']
  /** Reference to the uploaded file. */
  readonly uploadId: Scalars['UUID']['input']
}

/** All input for the `deleteEventUploadByRowId` mutation. */
export type DeleteEventUploadByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Primary key, uniquely identifies each event-upload association. */
  readonly rowId: Scalars['UUID']['input']
}

/** All input for the `deleteEventUpload` mutation. */
export type DeleteEventUploadInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `EventUpload` to be deleted. */
  readonly id: Scalars['ID']['input']
}

/** The output of our delete `EventUpload` mutation. */
export type DeleteEventUploadPayload = {
  readonly __typename?: 'DeleteEventUploadPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  readonly deletedEventUploadId?: Maybe<Scalars['ID']['output']>
  /** The `EventUpload` that was deleted by this mutation. */
  readonly eventUpload?: Maybe<EventUpload>
  /** An edge for our `EventUpload`. May be used by Relay 1. */
  readonly eventUploadEdge?: Maybe<EventUploadEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
}

/** The output of our delete `EventUpload` mutation. */
export type DeleteEventUploadPayloadEventUploadEdgeArgs = {
  orderBy?: ReadonlyArray<EventUploadOrderBy>
}

/** All input for the `deleteFriendshipByAAccountIdAndBAccountId` mutation. */
export type DeleteFriendshipByAAccountIdAndBAccountIdInput = {
  /** The 'left' side of the friend relation. It must be lexically less than the 'right' side. */
  readonly aAccountId: Scalars['UUID']['input']
  /** The 'right' side of the friend relation. It must be lexically greater than the 'left' side. */
  readonly bAccountId: Scalars['UUID']['input']
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
}

/** All input for the `deleteFriendshipByRowId` mutation. */
export type DeleteFriendshipByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The friend relation's internal id. */
  readonly rowId: Scalars['UUID']['input']
}

/** All input for the `deleteFriendship` mutation. */
export type DeleteFriendshipInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `Friendship` to be deleted. */
  readonly id: Scalars['ID']['input']
}

/** The output of our delete `Friendship` mutation. */
export type DeleteFriendshipPayload = {
  readonly __typename?: 'DeleteFriendshipPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  readonly deletedFriendshipId?: Maybe<Scalars['ID']['output']>
  /** The `Friendship` that was deleted by this mutation. */
  readonly friendship?: Maybe<Friendship>
  /** An edge for our `Friendship`. May be used by Relay 1. */
  readonly friendshipEdge?: Maybe<FriendshipEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
}

/** The output of our delete `Friendship` mutation. */
export type DeleteFriendshipPayloadFriendshipEdgeArgs = {
  orderBy?: ReadonlyArray<FriendshipOrderBy>
}

/** All input for the `deleteGuestByEventIdAndContactId` mutation. */
export type DeleteGuestByEventIdAndContactIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The internal id of the guest's contact. */
  readonly contactId: Scalars['UUID']['input']
  /** The internal id of the guest's event. */
  readonly eventId: Scalars['UUID']['input']
}

/** All input for the `deleteGuestByRowId` mutation. */
export type DeleteGuestByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The guest's internal id. */
  readonly rowId: Scalars['UUID']['input']
}

/** All input for the `deleteGuest` mutation. */
export type DeleteGuestInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `Guest` to be deleted. */
  readonly id: Scalars['ID']['input']
}

/** The output of our delete `Guest` mutation. */
export type DeleteGuestPayload = {
  readonly __typename?: 'DeleteGuestPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  readonly deletedGuestId?: Maybe<Scalars['ID']['output']>
  /** The `Guest` that was deleted by this mutation. */
  readonly guest?: Maybe<Guest>
  /** An edge for our `Guest`. May be used by Relay 1. */
  readonly guestEdge?: Maybe<GuestEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
}

/** The output of our delete `Guest` mutation. */
export type DeleteGuestPayloadGuestEdgeArgs = {
  orderBy?: ReadonlyArray<GuestOrderBy>
}

/** All input for the `deletePreferenceEventCategoryByAccountIdAndCategoryId` mutation. */
export type DeletePreferenceEventCategoryByAccountIdAndCategoryIdInput = {
  /** A user account id. */
  readonly accountId: Scalars['UUID']['input']
  /** An event category id. */
  readonly categoryId: Scalars['UUID']['input']
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
}

/** All input for the `deletePreferenceEventCategoryByRowId` mutation. */
export type DeletePreferenceEventCategoryByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  readonly rowId: Scalars['UUID']['input']
}

/** All input for the `deletePreferenceEventCategory` mutation. */
export type DeletePreferenceEventCategoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `PreferenceEventCategory` to be deleted. */
  readonly id: Scalars['ID']['input']
}

/** The output of our delete `PreferenceEventCategory` mutation. */
export type DeletePreferenceEventCategoryPayload = {
  readonly __typename?: 'DeletePreferenceEventCategoryPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  readonly deletedPreferenceEventCategoryId?: Maybe<Scalars['ID']['output']>
  /** The `PreferenceEventCategory` that was deleted by this mutation. */
  readonly preferenceEventCategory?: Maybe<PreferenceEventCategory>
  /** An edge for our `PreferenceEventCategory`. May be used by Relay 1. */
  readonly preferenceEventCategoryEdge?: Maybe<PreferenceEventCategoryEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
}

/** The output of our delete `PreferenceEventCategory` mutation. */
export type DeletePreferenceEventCategoryPayloadPreferenceEventCategoryEdgeArgs =
  {
    orderBy?: ReadonlyArray<PreferenceEventCategoryOrderBy>
  }

/** All input for the `deletePreferenceEventFormatByAccountIdAndFormatId` mutation. */
export type DeletePreferenceEventFormatByAccountIdAndFormatIdInput = {
  /** A user account id. */
  readonly accountId: Scalars['UUID']['input']
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The id of an event format. */
  readonly formatId: Scalars['UUID']['input']
}

/** All input for the `deletePreferenceEventFormatByRowId` mutation. */
export type DeletePreferenceEventFormatByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  readonly rowId: Scalars['UUID']['input']
}

/** All input for the `deletePreferenceEventFormat` mutation. */
export type DeletePreferenceEventFormatInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `PreferenceEventFormat` to be deleted. */
  readonly id: Scalars['ID']['input']
}

/** The output of our delete `PreferenceEventFormat` mutation. */
export type DeletePreferenceEventFormatPayload = {
  readonly __typename?: 'DeletePreferenceEventFormatPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  readonly deletedPreferenceEventFormatId?: Maybe<Scalars['ID']['output']>
  /** The `PreferenceEventFormat` that was deleted by this mutation. */
  readonly preferenceEventFormat?: Maybe<PreferenceEventFormat>
  /** An edge for our `PreferenceEventFormat`. May be used by Relay 1. */
  readonly preferenceEventFormatEdge?: Maybe<PreferenceEventFormatEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
}

/** The output of our delete `PreferenceEventFormat` mutation. */
export type DeletePreferenceEventFormatPayloadPreferenceEventFormatEdgeArgs = {
  orderBy?: ReadonlyArray<PreferenceEventFormatOrderBy>
}

/** All input for the `deletePreferenceEventLocationByCreatedByAndLocationAndRadius` mutation. */
export type DeletePreferenceEventLocationByCreatedByAndLocationAndRadiusInput =
  {
    /**
     * An arbitrary string value with no semantic meaning. Will be included in the
     * payload verbatim. May be used to track mutations by the client.
     */
    readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
    /** Reference to the account that created the location preference. */
    readonly createdBy: Scalars['UUID']['input']
    /** Geographical point representing the preferred location, derived from latitude and longitude. */
    readonly location: Scalars['GeoJSON']['input']
    /** Search radius in meters around the location where events are preferred. Must be positive. */
    readonly radius: Scalars['Float']['input']
  }

/** All input for the `deletePreferenceEventLocationByRowId` mutation. */
export type DeletePreferenceEventLocationByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Unique identifier for the preference record. */
  readonly rowId: Scalars['UUID']['input']
}

/** All input for the `deletePreferenceEventLocation` mutation. */
export type DeletePreferenceEventLocationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `PreferenceEventLocation` to be deleted. */
  readonly id: Scalars['ID']['input']
}

/** The output of our delete `PreferenceEventLocation` mutation. */
export type DeletePreferenceEventLocationPayload = {
  readonly __typename?: 'DeletePreferenceEventLocationPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  readonly deletedPreferenceEventLocationId?: Maybe<Scalars['ID']['output']>
  /** The `PreferenceEventLocation` that was deleted by this mutation. */
  readonly preferenceEventLocation?: Maybe<PreferenceEventLocation>
  /** An edge for our `PreferenceEventLocation`. May be used by Relay 1. */
  readonly preferenceEventLocationEdge?: Maybe<PreferenceEventLocationEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
}

/** The output of our delete `PreferenceEventLocation` mutation. */
export type DeletePreferenceEventLocationPayloadPreferenceEventLocationEdgeArgs =
  {
    orderBy?: ReadonlyArray<PreferenceEventLocationOrderBy>
  }

/** All input for the `deletePreferenceEventSizeByAccountIdAndEventSize` mutation. */
export type DeletePreferenceEventSizeByAccountIdAndEventSizeInput = {
  /** The account's internal id. */
  readonly accountId: Scalars['UUID']['input']
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** A preferred event size. */
  readonly eventSize: EventSize
}

/** All input for the `deletePreferenceEventSizeByRowId` mutation. */
export type DeletePreferenceEventSizeByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  readonly rowId: Scalars['UUID']['input']
}

/** All input for the `deletePreferenceEventSize` mutation. */
export type DeletePreferenceEventSizeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `PreferenceEventSize` to be deleted. */
  readonly id: Scalars['ID']['input']
}

/** The output of our delete `PreferenceEventSize` mutation. */
export type DeletePreferenceEventSizePayload = {
  readonly __typename?: 'DeletePreferenceEventSizePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  readonly deletedPreferenceEventSizeId?: Maybe<Scalars['ID']['output']>
  /** The `PreferenceEventSize` that was deleted by this mutation. */
  readonly preferenceEventSize?: Maybe<PreferenceEventSize>
  /** An edge for our `PreferenceEventSize`. May be used by Relay 1. */
  readonly preferenceEventSizeEdge?: Maybe<PreferenceEventSizeEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
}

/** The output of our delete `PreferenceEventSize` mutation. */
export type DeletePreferenceEventSizePayloadPreferenceEventSizeEdgeArgs = {
  orderBy?: ReadonlyArray<PreferenceEventSizeOrderBy>
}

/** All input for the `deleteProfilePictureByAccountId` mutation. */
export type DeleteProfilePictureByAccountIdInput = {
  /** The account's id. */
  readonly accountId: Scalars['UUID']['input']
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
}

/** All input for the `deleteProfilePictureByRowId` mutation. */
export type DeleteProfilePictureByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The profile picture's internal id. */
  readonly rowId: Scalars['UUID']['input']
}

/** All input for the `deleteProfilePicture` mutation. */
export type DeleteProfilePictureInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `ProfilePicture` to be deleted. */
  readonly id: Scalars['ID']['input']
}

/** The output of our delete `ProfilePicture` mutation. */
export type DeleteProfilePicturePayload = {
  readonly __typename?: 'DeleteProfilePicturePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  readonly deletedProfilePictureId?: Maybe<Scalars['ID']['output']>
  /** The `ProfilePicture` that was deleted by this mutation. */
  readonly profilePicture?: Maybe<ProfilePicture>
  /** An edge for our `ProfilePicture`. May be used by Relay 1. */
  readonly profilePictureEdge?: Maybe<ProfilePictureEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
}

/** The output of our delete `ProfilePicture` mutation. */
export type DeleteProfilePicturePayloadProfilePictureEdgeArgs = {
  orderBy?: ReadonlyArray<ProfilePictureOrderBy>
}

/** All input for the `deleteUploadByRowId` mutation. */
export type DeleteUploadByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The upload's internal id. */
  readonly rowId: Scalars['UUID']['input']
}

/** All input for the `deleteUploadByStorageKey` mutation. */
export type DeleteUploadByStorageKeyInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The upload's storage key. */
  readonly storageKey: Scalars['String']['input']
}

/** All input for the `deleteUpload` mutation. */
export type DeleteUploadInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `Upload` to be deleted. */
  readonly id: Scalars['ID']['input']
}

/** The output of our delete `Upload` mutation. */
export type DeleteUploadPayload = {
  readonly __typename?: 'DeleteUploadPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  readonly deletedUploadId?: Maybe<Scalars['ID']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
  /** The `Upload` that was deleted by this mutation. */
  readonly upload?: Maybe<Upload>
  /** An edge for our `Upload`. May be used by Relay 1. */
  readonly uploadEdge?: Maybe<UploadEdge>
}

/** The output of our delete `Upload` mutation. */
export type DeleteUploadPayloadUploadEdgeArgs = {
  orderBy?: ReadonlyArray<UploadOrderBy>
}

/** A device that's assigned to an account. */
export type Device = Node & {
  readonly __typename?: 'Device'
  /** Reads a single `Account` that is related to this `Device`. */
  readonly accountByCreatedBy?: Maybe<Account>
  /** Reads a single `Account` that is related to this `Device`. */
  readonly accountByUpdatedBy?: Maybe<Account>
  /** Timestamp when the device was created. Defaults to the current timestamp. */
  readonly createdAt: Scalars['Datetime']['output']
  /** Reference to the account that created the device. */
  readonly createdBy: Scalars['UUID']['output']
  /** The Firebase Cloud Messaging token of the device that's used to deliver notifications. Must be non-empty and not exceed 300 characters. */
  readonly fcmToken: Scalars['String']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly id: Scalars['ID']['output']
  /** The internal id of the device. */
  readonly rowId: Scalars['UUID']['output']
  /** Timestamp when the device was last updated. */
  readonly updatedAt?: Maybe<Scalars['Datetime']['output']>
  /** Reference to the account that last updated the device. */
  readonly updatedBy?: Maybe<Scalars['UUID']['output']>
}

/** A condition to be used against `Device` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type DeviceCondition = {
  /** Checks for equality with the object’s `createdBy` field. */
  readonly createdBy?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `fcmToken` field. */
  readonly fcmToken?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `rowId` field. */
  readonly rowId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `updatedBy` field. */
  readonly updatedBy?: InputMaybe<Scalars['UUID']['input']>
}

/** A connection to a list of `Device` values. */
export type DeviceConnection = {
  readonly __typename?: 'DeviceConnection'
  /** A list of edges which contains the `Device` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<DeviceEdge>
  /** A list of `Device` objects. */
  readonly nodes: ReadonlyArray<Device>
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo
  /** The count of *all* `Device` you could get from the connection. */
  readonly totalCount: Scalars['Int']['output']
}

/** A `Device` edge in the connection. */
export type DeviceEdge = {
  readonly __typename?: 'DeviceEdge'
  /** A cursor for use in pagination. */
  readonly cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `Device` at the end of the edge. */
  readonly node: Device
}

/** An input for mutations affecting `Device` */
export type DeviceInput = {
  /** Reference to the account that created the device. */
  readonly createdBy: Scalars['UUID']['input']
  /** The Firebase Cloud Messaging token of the device that's used to deliver notifications. Must be non-empty and not exceed 300 characters. */
  readonly fcmToken: Scalars['String']['input']
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
  readonly fcmToken?: InputMaybe<Scalars['String']['input']>
}

/** An event. */
export type Event = Node & {
  readonly __typename?: 'Event'
  /** Reads a single `Account` that is related to this `Event`. */
  readonly accountByCreatedBy?: Maybe<Account>
  /** Reads a single `Address` that is related to this `Event`. */
  readonly addressByAddressId?: Maybe<Address>
  /** Optional reference to the physical address of the event. */
  readonly addressId?: Maybe<Scalars['UUID']['output']>
  /** Timestamp of when the event was created, defaults to the current timestamp. */
  readonly createdAt: Scalars['Datetime']['output']
  /** The event creator's id. */
  readonly createdBy: Scalars['UUID']['output']
  /** The event's description. Must be non-empty and not exceed 10,000 characters. */
  readonly description?: Maybe<Scalars['String']['output']>
  /** The event's end date and time, with time zone. */
  readonly end?: Maybe<Scalars['Datetime']['output']>
  /** Reads and enables pagination through a set of `EventApp`. */
  readonly eventAppsByEventId: EventAppConnection
  /** Reads and enables pagination through a set of `EventCategoryMapping`. */
  readonly eventCategoryMappingsByEventId: EventCategoryMappingConnection
  /** Reads and enables pagination through a set of `EventFavorite`. */
  readonly eventFavoritesByEventId: EventFavoriteConnection
  /** Reads and enables pagination through a set of `EventFormatMapping`. */
  readonly eventFormatMappingsByEventId: EventFormatMappingConnection
  /** Reads a single `EventInvitationLink` that is related to this `Event`. */
  readonly eventInvitationLinkByEventId?: Maybe<EventInvitationLink>
  /** Reads and enables pagination through a set of `EventRecommendation`. */
  readonly eventRecommendationsByEventId: EventRecommendationConnection
  /** Reads and enables pagination through a set of `EventUpload`. */
  readonly eventUploadsByEventId: EventUploadConnection
  /** The point in time from which on only the organizer can change the feedback of the event's guests. No deadline when `NULL`. */
  readonly feedbackDeadline?: Maybe<Scalars['Datetime']['output']>
  /** The number of seats taken at the event, each guest taking one plus their approved companions, maintained by triggers on the guest table. */
  readonly guestCount: Scalars['Int']['output']
  /** The number of seats taken by guests whose effective feedback is accepted, the organizer's override taking precedence, each such guest taking one plus their approved companions, maintained by triggers on the guest table. */
  readonly guestCountAccepted: Scalars['Int']['output']
  /** The event's maximum guest count. Must be greater than 0. */
  readonly guestCountMaximum?: Maybe<Scalars['Int']['output']>
  /** Reads and enables pagination through a set of `Guest`. */
  readonly guestsByEventId: GuestConnection
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly id: Scalars['ID']['output']
  /** Indicates whether the event is archived. */
  readonly isArchived: Scalars['Boolean']['output']
  /** Indicates whether the event takes place in person. */
  readonly isInPerson?: Maybe<Scalars['Boolean']['output']>
  /** Indicates whether the event takes place remotely. */
  readonly isRemote?: Maybe<Scalars['Boolean']['output']>
  readonly language?: Maybe<Language>
  /** The event's name. Must be non-empty and not exceed 100 characters. */
  readonly name: Scalars['String']['output']
  /** The timestamp from which the event is published. An event without one is a draft and one with a future timestamp is scheduled; until then only its organizer can see it. */
  readonly publishedAt?: Maybe<Scalars['Datetime']['output']>
  /** Reads and enables pagination through a set of `Report`. */
  readonly reportsByTargetEventId: ReportConnection
  /** The event's internal id. */
  readonly rowId: Scalars['UUID']['output']
  /** The event's name, slugified. Must be alphanumeric with hyphens and not exceed 100 characters. */
  readonly slug: Scalars['String']['output']
  /** The event's start date and time, with time zone. */
  readonly start: Scalars['Datetime']['output']
  /** The event's unified resource locator. Must start with "https://" and not exceed 2,000 characters. */
  readonly url?: Maybe<Scalars['String']['output']>
  /** The event's visibility. */
  readonly visibility: EventVisibility
}

/** An event. */
export type EventEventAppsByEventIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventAppCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<EventAppOrderBy>>
}

/** An event. */
export type EventEventCategoryMappingsByEventIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventCategoryMappingCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<EventCategoryMappingOrderBy>>
}

/** An event. */
export type EventEventFavoritesByEventIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventFavoriteCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<EventFavoriteOrderBy>>
}

/** An event. */
export type EventEventFormatMappingsByEventIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventFormatMappingCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<EventFormatMappingOrderBy>>
}

/** An event. */
export type EventEventRecommendationsByEventIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventRecommendationCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<EventRecommendationOrderBy>>
}

/** An event. */
export type EventEventUploadsByEventIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventUploadCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<EventUploadOrderBy>>
}

/** An event. */
export type EventGuestsByEventIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<GuestCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<GuestOrderBy>>
}

/** An event. */
export type EventReportsByTargetEventIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<ReportCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<ReportOrderBy>>
}

/** Records which apps are installed on which events. */
export type EventApp = Node & {
  readonly __typename?: 'EventApp'
  /** Reads a single `Account` that is related to this `EventApp`. */
  readonly accountByCreatedBy?: Maybe<Account>
  /** Reads a single `App` that is related to this `EventApp`. */
  readonly appByAppId?: Maybe<App>
  /** The app that is installed. */
  readonly appId: Scalars['UUID']['output']
  /** When the app was installed. */
  readonly createdAt: Scalars['Datetime']['output']
  /** Who installed this app. */
  readonly createdBy: Scalars['UUID']['output']
  /** Reads a single `Event` that is related to this `EventApp`. */
  readonly eventByEventId?: Maybe<Event>
  /** The event the app is installed on. */
  readonly eventId: Scalars['UUID']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly id: Scalars['ID']['output']
  /** A unique reference for this installation. */
  readonly rowId: Scalars['UUID']['output']
}

/**
 * A condition to be used against `EventApp` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type EventAppCondition = {
  /** Checks for equality with the object’s `appId` field. */
  readonly appId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `createdBy` field. */
  readonly createdBy?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `eventId` field. */
  readonly eventId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `rowId` field. */
  readonly rowId?: InputMaybe<Scalars['UUID']['input']>
}

/** A connection to a list of `EventApp` values. */
export type EventAppConnection = {
  readonly __typename?: 'EventAppConnection'
  /** A list of edges which contains the `EventApp` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<EventAppEdge>
  /** A list of `EventApp` objects. */
  readonly nodes: ReadonlyArray<EventApp>
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo
  /** The count of *all* `EventApp` you could get from the connection. */
  readonly totalCount: Scalars['Int']['output']
}

/** A `EventApp` edge in the connection. */
export type EventAppEdge = {
  readonly __typename?: 'EventAppEdge'
  /** A cursor for use in pagination. */
  readonly cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `EventApp` at the end of the edge. */
  readonly node: EventApp
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
  readonly __typename?: 'EventCategory'
  /** Reads and enables pagination through a set of `EventCategoryMapping`. */
  readonly eventCategoryMappingsByCategoryId: EventCategoryMappingConnection
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly id: Scalars['ID']['output']
  /** A category name. */
  readonly name: Scalars['String']['output']
  /** Reads and enables pagination through a set of `PreferenceEventCategory`. */
  readonly preferenceEventCategoriesByCategoryId: PreferenceEventCategoryConnection
  /** The id of the event category. */
  readonly rowId: Scalars['UUID']['output']
}

/** Event categories. */
export type EventCategoryEventCategoryMappingsByCategoryIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventCategoryMappingCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<EventCategoryMappingOrderBy>>
}

/** Event categories. */
export type EventCategoryPreferenceEventCategoriesByCategoryIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<PreferenceEventCategoryCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<PreferenceEventCategoryOrderBy>>
}

/**
 * A condition to be used against `EventCategory` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type EventCategoryCondition = {
  /** Checks for equality with the object’s `name` field. */
  readonly name?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `rowId` field. */
  readonly rowId?: InputMaybe<Scalars['UUID']['input']>
}

/** A connection to a list of `EventCategory` values. */
export type EventCategoryConnection = {
  readonly __typename?: 'EventCategoryConnection'
  /** A list of edges which contains the `EventCategory` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<EventCategoryEdge>
  /** A list of `EventCategory` objects. */
  readonly nodes: ReadonlyArray<EventCategory>
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo
  /** The count of *all* `EventCategory` you could get from the connection. */
  readonly totalCount: Scalars['Int']['output']
}

/** A `EventCategory` edge in the connection. */
export type EventCategoryEdge = {
  readonly __typename?: 'EventCategoryEdge'
  /** A cursor for use in pagination. */
  readonly cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `EventCategory` at the end of the edge. */
  readonly node: EventCategory
}

/** Mapping events to categories (M:N relationship). */
export type EventCategoryMapping = Node & {
  readonly __typename?: 'EventCategoryMapping'
  /** A category id. */
  readonly categoryId: Scalars['UUID']['output']
  /** Reads a single `Event` that is related to this `EventCategoryMapping`. */
  readonly eventByEventId?: Maybe<Event>
  /** Reads a single `EventCategory` that is related to this `EventCategoryMapping`. */
  readonly eventCategoryByCategoryId?: Maybe<EventCategory>
  /** An event id. */
  readonly eventId: Scalars['UUID']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly id: Scalars['ID']['output']
}

/**
 * A condition to be used against `EventCategoryMapping` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type EventCategoryMappingCondition = {
  /** Checks for equality with the object’s `categoryId` field. */
  readonly categoryId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `eventId` field. */
  readonly eventId?: InputMaybe<Scalars['UUID']['input']>
}

/** A connection to a list of `EventCategoryMapping` values. */
export type EventCategoryMappingConnection = {
  readonly __typename?: 'EventCategoryMappingConnection'
  /** A list of edges which contains the `EventCategoryMapping` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<EventCategoryMappingEdge>
  /** A list of `EventCategoryMapping` objects. */
  readonly nodes: ReadonlyArray<EventCategoryMapping>
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo
  /** The count of *all* `EventCategoryMapping` you could get from the connection. */
  readonly totalCount: Scalars['Int']['output']
}

/** A `EventCategoryMapping` edge in the connection. */
export type EventCategoryMappingEdge = {
  readonly __typename?: 'EventCategoryMappingEdge'
  /** A cursor for use in pagination. */
  readonly cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `EventCategoryMapping` at the end of the edge. */
  readonly node: EventCategoryMapping
}

/** An input for mutations affecting `EventCategoryMapping` */
export type EventCategoryMappingInput = {
  /** A category id. */
  readonly categoryId: Scalars['UUID']['input']
  /** An event id. */
  readonly eventId: Scalars['UUID']['input']
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
  readonly addressId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `createdBy` field. */
  readonly createdBy?: InputMaybe<Scalars['UUID']['input']>
  /** Events ending before this instant, exclusive, where an event without an end ends at its start. */
  readonly endsBefore?: InputMaybe<Scalars['Datetime']['input']>
  /** Events ending at or after this instant, inclusive, where an event without an end ends at its start. */
  readonly endsFrom?: InputMaybe<Scalars['Datetime']['input']>
  /** Whether the event has ended, judged by its end, or by its start if it has no end, against the database clock. */
  readonly hasEnded?: InputMaybe<Scalars['Boolean']['input']>
  /** Whether the invoker attends the event, that is whether one of their contacts accepted a guest invitation to it. Combine with `hasEnded` to split upcoming from past events. */
  readonly isAttending?: InputMaybe<Scalars['Boolean']['input']>
  /** Whether the invoker is invited to the event, that is whether they claimed one of its guest invitations or one of their contacts was invited to it, whatever the feedback. Combine with `hasEnded` to split upcoming from past invitations. */
  readonly isInvited?: InputMaybe<Scalars['Boolean']['input']>
  /** Checks for equality with the object’s `name` field. */
  readonly name?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `rowId` field. */
  readonly rowId?: InputMaybe<Scalars['UUID']['input']>
  /** Events matching the search text by prefix on their name and description, or by similarity to their name. A blank text matches every event. Combine with other conditions such as `createdBy` to search within a subset. */
  readonly search?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `slug` field. */
  readonly slug?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `start` field. */
  readonly start?: InputMaybe<Scalars['Datetime']['input']>
  /** Events starting before this instant, exclusive. */
  readonly startsBefore?: InputMaybe<Scalars['Datetime']['input']>
  /** Events starting at or after this instant, inclusive. */
  readonly startsFrom?: InputMaybe<Scalars['Datetime']['input']>
}

/** A connection to a list of `Event` values. */
export type EventConnection = {
  readonly __typename?: 'EventConnection'
  /** A list of edges which contains the `Event` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<EventEdge>
  /** A list of `Event` objects. */
  readonly nodes: ReadonlyArray<Event>
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo
  /** The count of *all* `Event` you could get from the connection. */
  readonly totalCount: Scalars['Int']['output']
}

/** All input for the `eventDelete` mutation. */
export type EventDeleteInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  readonly id: Scalars['UUID']['input']
  readonly password: Scalars['String']['input']
}

/** The output of our `eventDelete` mutation. */
export type EventDeletePayload = {
  readonly __typename?: 'EventDeletePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  /** An edge for our `Event`. May be used by Relay 1. */
  readonly eventEdge?: Maybe<EventEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
  readonly result?: Maybe<Event>
}

/** The output of our `eventDelete` mutation. */
export type EventDeletePayloadEventEdgeArgs = {
  orderBy?: ReadonlyArray<EventOrderBy>
}

/** A `Event` edge in the connection. */
export type EventEdge = {
  readonly __typename?: 'EventEdge'
  /** A cursor for use in pagination. */
  readonly cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `Event` at the end of the edge. */
  readonly node: Event
}

/** Stores user-specific event favorites, linking an event to the account that marked it as a favorite. */
export type EventFavorite = Node & {
  readonly __typename?: 'EventFavorite'
  /** Reads a single `Account` that is related to this `EventFavorite`. */
  readonly accountByCreatedBy?: Maybe<Account>
  /** Timestamp when the favorite was created. Defaults to the current timestamp. */
  readonly createdAt: Scalars['Datetime']['output']
  /** Reference to the account that created the event favorite. */
  readonly createdBy: Scalars['UUID']['output']
  /** Reads a single `Event` that is related to this `EventFavorite`. */
  readonly eventByEventId?: Maybe<Event>
  /** Reference to the event that is marked as a favorite. */
  readonly eventId: Scalars['UUID']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly id: Scalars['ID']['output']
  /** Primary key, uniquely identifies each favorite entry. */
  readonly rowId: Scalars['UUID']['output']
}

/**
 * A condition to be used against `EventFavorite` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type EventFavoriteCondition = {
  /** Checks for equality with the object’s `createdBy` field. */
  readonly createdBy?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `eventId` field. */
  readonly eventId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `rowId` field. */
  readonly rowId?: InputMaybe<Scalars['UUID']['input']>
}

/** A connection to a list of `EventFavorite` values. */
export type EventFavoriteConnection = {
  readonly __typename?: 'EventFavoriteConnection'
  /** A list of edges which contains the `EventFavorite` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<EventFavoriteEdge>
  /** A list of `EventFavorite` objects. */
  readonly nodes: ReadonlyArray<EventFavorite>
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo
  /** The count of *all* `EventFavorite` you could get from the connection. */
  readonly totalCount: Scalars['Int']['output']
}

/** A `EventFavorite` edge in the connection. */
export type EventFavoriteEdge = {
  readonly __typename?: 'EventFavoriteEdge'
  /** A cursor for use in pagination. */
  readonly cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `EventFavorite` at the end of the edge. */
  readonly node: EventFavorite
}

/** An input for mutations affecting `EventFavorite` */
export type EventFavoriteInput = {
  /** Reference to the account that created the event favorite. */
  readonly createdBy: Scalars['UUID']['input']
  /** Reference to the event that is marked as a favorite. */
  readonly eventId: Scalars['UUID']['input']
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
  readonly __typename?: 'EventFormat'
  /** Reads and enables pagination through a set of `EventFormatMapping`. */
  readonly eventFormatMappingsByFormatId: EventFormatMappingConnection
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly id: Scalars['ID']['output']
  /** The name of the event format. */
  readonly name: Scalars['String']['output']
  /** Reads and enables pagination through a set of `PreferenceEventFormat`. */
  readonly preferenceEventFormatsByFormatId: PreferenceEventFormatConnection
  /** The id of the event format. */
  readonly rowId: Scalars['UUID']['output']
}

/** Event formats. */
export type EventFormatEventFormatMappingsByFormatIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventFormatMappingCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<EventFormatMappingOrderBy>>
}

/** Event formats. */
export type EventFormatPreferenceEventFormatsByFormatIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<PreferenceEventFormatCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<PreferenceEventFormatOrderBy>>
}

/**
 * A condition to be used against `EventFormat` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type EventFormatCondition = {
  /** Checks for equality with the object’s `name` field. */
  readonly name?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `rowId` field. */
  readonly rowId?: InputMaybe<Scalars['UUID']['input']>
}

/** A connection to a list of `EventFormat` values. */
export type EventFormatConnection = {
  readonly __typename?: 'EventFormatConnection'
  /** A list of edges which contains the `EventFormat` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<EventFormatEdge>
  /** A list of `EventFormat` objects. */
  readonly nodes: ReadonlyArray<EventFormat>
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo
  /** The count of *all* `EventFormat` you could get from the connection. */
  readonly totalCount: Scalars['Int']['output']
}

/** A `EventFormat` edge in the connection. */
export type EventFormatEdge = {
  readonly __typename?: 'EventFormatEdge'
  /** A cursor for use in pagination. */
  readonly cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `EventFormat` at the end of the edge. */
  readonly node: EventFormat
}

/** Mapping events to formats (M:N relationship). */
export type EventFormatMapping = Node & {
  readonly __typename?: 'EventFormatMapping'
  /** Reads a single `Event` that is related to this `EventFormatMapping`. */
  readonly eventByEventId?: Maybe<Event>
  /** Reads a single `EventFormat` that is related to this `EventFormatMapping`. */
  readonly eventFormatByFormatId?: Maybe<EventFormat>
  /** An event id. */
  readonly eventId: Scalars['UUID']['output']
  /** A format id. */
  readonly formatId: Scalars['UUID']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly id: Scalars['ID']['output']
}

/**
 * A condition to be used against `EventFormatMapping` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type EventFormatMappingCondition = {
  /** Checks for equality with the object’s `eventId` field. */
  readonly eventId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `formatId` field. */
  readonly formatId?: InputMaybe<Scalars['UUID']['input']>
}

/** A connection to a list of `EventFormatMapping` values. */
export type EventFormatMappingConnection = {
  readonly __typename?: 'EventFormatMappingConnection'
  /** A list of edges which contains the `EventFormatMapping` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<EventFormatMappingEdge>
  /** A list of `EventFormatMapping` objects. */
  readonly nodes: ReadonlyArray<EventFormatMapping>
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo
  /** The count of *all* `EventFormatMapping` you could get from the connection. */
  readonly totalCount: Scalars['Int']['output']
}

/** A `EventFormatMapping` edge in the connection. */
export type EventFormatMappingEdge = {
  readonly __typename?: 'EventFormatMappingEdge'
  /** A cursor for use in pagination. */
  readonly cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `EventFormatMapping` at the end of the edge. */
  readonly node: EventFormatMapping
}

/** An input for mutations affecting `EventFormatMapping` */
export type EventFormatMappingInput = {
  /** An event id. */
  readonly eventId: Scalars['UUID']['input']
  /** A format id. */
  readonly formatId: Scalars['UUID']['input']
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
  readonly addressId?: InputMaybe<Scalars['UUID']['input']>
  /** The event creator's id. */
  readonly createdBy: Scalars['UUID']['input']
  /** The event's description. Must be non-empty and not exceed 10,000 characters. */
  readonly description?: InputMaybe<Scalars['String']['input']>
  /** The event's end date and time, with time zone. */
  readonly end?: InputMaybe<Scalars['Datetime']['input']>
  /** The point in time from which on only the organizer can change the feedback of the event's guests. No deadline when `NULL`. */
  readonly feedbackDeadline?: InputMaybe<Scalars['Datetime']['input']>
  /** The event's maximum guest count. Must be greater than 0. */
  readonly guestCountMaximum?: InputMaybe<Scalars['Int']['input']>
  /** Indicates whether the event is archived. */
  readonly isArchived?: InputMaybe<Scalars['Boolean']['input']>
  /** Indicates whether the event takes place in person. */
  readonly isInPerson?: InputMaybe<Scalars['Boolean']['input']>
  /** Indicates whether the event takes place remotely. */
  readonly isRemote?: InputMaybe<Scalars['Boolean']['input']>
  readonly language?: InputMaybe<Language>
  /** The event's name. Must be non-empty and not exceed 100 characters. */
  readonly name: Scalars['String']['input']
  /** The timestamp from which the event is published. An event without one is a draft and one with a future timestamp is scheduled; until then only its organizer can see it. */
  readonly publishedAt?: InputMaybe<Scalars['Datetime']['input']>
  /** The event's name, slugified. Must be alphanumeric with hyphens and not exceed 100 characters. */
  readonly slug: Scalars['String']['input']
  /** The event's start date and time, with time zone. */
  readonly start: Scalars['Datetime']['input']
  /** The event's unified resource locator. Must start with "https://" and not exceed 2,000 characters. */
  readonly url?: InputMaybe<Scalars['String']['input']>
  /** The event's visibility. */
  readonly visibility: EventVisibility
}

/** A general invitation link that lets anyone holding it join an event as a guest. Deleting it pauses the link, and creating a new one resets it. */
export type EventInvitationLink = Node & {
  readonly __typename?: 'EventInvitationLink'
  /** Timestamp when the link was created. Defaults to the current timestamp. */
  readonly createdAt: Scalars['Datetime']['output']
  /** Reads a single `Event` that is related to this `EventInvitationLink`. */
  readonly eventByEventId?: Maybe<Event>
  /** Reference to the event the link invites to. */
  readonly eventId: Scalars['UUID']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly id: Scalars['ID']['output']
  /** The link's secret code and primary key. */
  readonly rowId: Scalars['UUID']['output']
}

/**
 * A condition to be used against `EventInvitationLink` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type EventInvitationLinkCondition = {
  /** Checks for equality with the object’s `eventId` field. */
  readonly eventId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `rowId` field. */
  readonly rowId?: InputMaybe<Scalars['UUID']['input']>
}

/** A connection to a list of `EventInvitationLink` values. */
export type EventInvitationLinkConnection = {
  readonly __typename?: 'EventInvitationLinkConnection'
  /** A list of edges which contains the `EventInvitationLink` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<EventInvitationLinkEdge>
  /** A list of `EventInvitationLink` objects. */
  readonly nodes: ReadonlyArray<EventInvitationLink>
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo
  /** The count of *all* `EventInvitationLink` you could get from the connection. */
  readonly totalCount: Scalars['Int']['output']
}

/** A `EventInvitationLink` edge in the connection. */
export type EventInvitationLinkEdge = {
  readonly __typename?: 'EventInvitationLinkEdge'
  /** A cursor for use in pagination. */
  readonly cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `EventInvitationLink` at the end of the edge. */
  readonly node: EventInvitationLink
}

/** An input for mutations affecting `EventInvitationLink` */
export type EventInvitationLinkInput = {
  /** Reference to the event the link invites to. */
  readonly eventId: Scalars['UUID']['input']
}

/** Methods to use when ordering `EventInvitationLink`. */
export enum EventInvitationLinkOrderBy {
  EventIdAsc = 'EVENT_ID_ASC',
  EventIdDesc = 'EVENT_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC',
}

/** All input for the `eventInvitationLinkRedeem` mutation. */
export type EventInvitationLinkRedeemInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  readonly emailAddress?: InputMaybe<Scalars['String']['input']>
  readonly firstName?: InputMaybe<Scalars['String']['input']>
  readonly invitationLinkId?: InputMaybe<Scalars['UUID']['input']>
}

/** The output of our `eventInvitationLinkRedeem` mutation. */
export type EventInvitationLinkRedeemPayload = {
  readonly __typename?: 'EventInvitationLinkRedeemPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
  readonly result?: Maybe<Scalars['UUID']['output']>
}

/** Methods to use when ordering `Event`. */
export enum EventOrderBy {
  AddressIdAsc = 'ADDRESS_ID_ASC',
  AddressIdDesc = 'ADDRESS_ID_DESC',
  CreatedByAsc = 'CREATED_BY_ASC',
  CreatedByDesc = 'CREATED_BY_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC',
  SlugAsc = 'SLUG_ASC',
  SlugDesc = 'SLUG_DESC',
  StartAsc = 'START_ASC',
  StartDesc = 'START_DESC',
}

/** Represents an update to a `Event`. Fields that are set will be updated. */
export type EventPatch = {
  /** Optional reference to the physical address of the event. */
  readonly addressId?: InputMaybe<Scalars['UUID']['input']>
  /** The event creator's id. */
  readonly createdBy?: InputMaybe<Scalars['UUID']['input']>
  /** The event's description. Must be non-empty and not exceed 10,000 characters. */
  readonly description?: InputMaybe<Scalars['String']['input']>
  /** The event's end date and time, with time zone. */
  readonly end?: InputMaybe<Scalars['Datetime']['input']>
  /** The point in time from which on only the organizer can change the feedback of the event's guests. No deadline when `NULL`. */
  readonly feedbackDeadline?: InputMaybe<Scalars['Datetime']['input']>
  /** The event's maximum guest count. Must be greater than 0. */
  readonly guestCountMaximum?: InputMaybe<Scalars['Int']['input']>
  /** Indicates whether the event is archived. */
  readonly isArchived?: InputMaybe<Scalars['Boolean']['input']>
  /** Indicates whether the event takes place in person. */
  readonly isInPerson?: InputMaybe<Scalars['Boolean']['input']>
  /** Indicates whether the event takes place remotely. */
  readonly isRemote?: InputMaybe<Scalars['Boolean']['input']>
  readonly language?: InputMaybe<Language>
  /** The event's name. Must be non-empty and not exceed 100 characters. */
  readonly name?: InputMaybe<Scalars['String']['input']>
  /** The timestamp from which the event is published. An event without one is a draft and one with a future timestamp is scheduled; until then only its organizer can see it. */
  readonly publishedAt?: InputMaybe<Scalars['Datetime']['input']>
  /** The event's name, slugified. Must be alphanumeric with hyphens and not exceed 100 characters. */
  readonly slug?: InputMaybe<Scalars['String']['input']>
  /** The event's start date and time, with time zone. */
  readonly start?: InputMaybe<Scalars['Datetime']['input']>
  /** The event's unified resource locator. Must start with "https://" and not exceed 2,000 characters. */
  readonly url?: InputMaybe<Scalars['String']['input']>
  /** The event's visibility. */
  readonly visibility?: InputMaybe<EventVisibility>
}

/** Events recommended to a user account (M:N relationship). */
export type EventRecommendation = Node & {
  readonly __typename?: 'EventRecommendation'
  /** Reads a single `Account` that is related to this `EventRecommendation`. */
  readonly accountByAccountId?: Maybe<Account>
  /** A user account id. */
  readonly accountId: Scalars['UUID']['output']
  /** Reads a single `Event` that is related to this `EventRecommendation`. */
  readonly eventByEventId?: Maybe<Event>
  /** The predicted score of the recommendation. */
  readonly eventId: Scalars['UUID']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly id: Scalars['ID']['output']
  /** The score of the recommendation. */
  readonly predictedScore?: Maybe<Scalars['Float']['output']>
  /** An event id. */
  readonly score?: Maybe<Scalars['Float']['output']>
}

/**
 * A condition to be used against `EventRecommendation` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type EventRecommendationCondition = {
  /** Checks for equality with the object’s `accountId` field. */
  readonly accountId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `eventId` field. */
  readonly eventId?: InputMaybe<Scalars['UUID']['input']>
}

/** A connection to a list of `EventRecommendation` values. */
export type EventRecommendationConnection = {
  readonly __typename?: 'EventRecommendationConnection'
  /** A list of edges which contains the `EventRecommendation` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<EventRecommendationEdge>
  /** A list of `EventRecommendation` objects. */
  readonly nodes: ReadonlyArray<EventRecommendation>
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo
  /** The count of *all* `EventRecommendation` you could get from the connection. */
  readonly totalCount: Scalars['Int']['output']
}

/** A `EventRecommendation` edge in the connection. */
export type EventRecommendationEdge = {
  readonly __typename?: 'EventRecommendationEdge'
  /** A cursor for use in pagination. */
  readonly cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `EventRecommendation` at the end of the edge. */
  readonly node: EventRecommendation
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

/** Associates uploaded files with events. */
export type EventUpload = Node & {
  readonly __typename?: 'EventUpload'
  /** Reads a single `Event` that is related to this `EventUpload`. */
  readonly eventByEventId?: Maybe<Event>
  /** Reference to the event associated with the upload. */
  readonly eventId: Scalars['UUID']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly id: Scalars['ID']['output']
  /** Optional boolean flag indicating if the upload is the header image for the event. */
  readonly isHeaderImage?: Maybe<Scalars['Boolean']['output']>
  /** Primary key, uniquely identifies each event-upload association. */
  readonly rowId: Scalars['UUID']['output']
  /** Reads a single `Upload` that is related to this `EventUpload`. */
  readonly uploadByUploadId?: Maybe<Upload>
  /** Reference to the uploaded file. */
  readonly uploadId: Scalars['UUID']['output']
}

/**
 * A condition to be used against `EventUpload` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type EventUploadCondition = {
  /** Checks for equality with the object’s `eventId` field. */
  readonly eventId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `rowId` field. */
  readonly rowId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `uploadId` field. */
  readonly uploadId?: InputMaybe<Scalars['UUID']['input']>
}

/** A connection to a list of `EventUpload` values. */
export type EventUploadConnection = {
  readonly __typename?: 'EventUploadConnection'
  /** A list of edges which contains the `EventUpload` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<EventUploadEdge>
  /** A list of `EventUpload` objects. */
  readonly nodes: ReadonlyArray<EventUpload>
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo
  /** The count of *all* `EventUpload` you could get from the connection. */
  readonly totalCount: Scalars['Int']['output']
}

/** A `EventUpload` edge in the connection. */
export type EventUploadEdge = {
  readonly __typename?: 'EventUploadEdge'
  /** A cursor for use in pagination. */
  readonly cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `EventUpload` at the end of the edge. */
  readonly node: EventUpload
}

/** An input for mutations affecting `EventUpload` */
export type EventUploadInput = {
  /** Reference to the event associated with the upload. */
  readonly eventId: Scalars['UUID']['input']
  /** Optional boolean flag indicating if the upload is the header image for the event. */
  readonly isHeaderImage?: InputMaybe<Scalars['Boolean']['input']>
  /** Reference to the uploaded file. */
  readonly uploadId: Scalars['UUID']['input']
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

/** Possible visibilities of events and event groups: public and private. */
export enum EventVisibility {
  Private = 'private',
  Public = 'public',
}

/** A friend relation together with its status. */
export type Friendship = Node & {
  readonly __typename?: 'Friendship'
  /** The 'left' side of the friend relation. It must be lexically less than the 'right' side. */
  readonly aAccountId: Scalars['UUID']['output']
  /** Reads a single `Account` that is related to this `Friendship`. */
  readonly accountByAAccountId?: Maybe<Account>
  /** Reads a single `Account` that is related to this `Friendship`. */
  readonly accountByBAccountId?: Maybe<Account>
  /** Reads a single `Account` that is related to this `Friendship`. */
  readonly accountByCreatedBy?: Maybe<Account>
  /** Reads a single `Account` that is related to this `Friendship`. */
  readonly accountByUpdatedBy?: Maybe<Account>
  /** The 'right' side of the friend relation. It must be lexically greater than the 'left' side. */
  readonly bAccountId: Scalars['UUID']['output']
  /** The timestamp when the friend relation was created. */
  readonly createdAt: Scalars['Datetime']['output']
  /** The account that created the friend relation. */
  readonly createdBy: Scalars['UUID']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly id: Scalars['ID']['output']
  /** The friend relation's internal id. */
  readonly rowId: Scalars['UUID']['output']
  /** The status of the friend relation. */
  readonly status: FriendshipStatus
  /** The timestamp when the friend relation's status was updated. */
  readonly updatedAt?: Maybe<Scalars['Datetime']['output']>
  /** The account that updated the friend relation's status. */
  readonly updatedBy?: Maybe<Scalars['UUID']['output']>
}

/**
 * A condition to be used against `Friendship` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type FriendshipCondition = {
  /** Checks for equality with the object’s `aAccountId` field. */
  readonly aAccountId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `bAccountId` field. */
  readonly bAccountId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `createdBy` field. */
  readonly createdBy?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `rowId` field. */
  readonly rowId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `updatedBy` field. */
  readonly updatedBy?: InputMaybe<Scalars['UUID']['input']>
}

/** A connection to a list of `Friendship` values. */
export type FriendshipConnection = {
  readonly __typename?: 'FriendshipConnection'
  /** A list of edges which contains the `Friendship` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<FriendshipEdge>
  /** A list of `Friendship` objects. */
  readonly nodes: ReadonlyArray<Friendship>
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo
  /** The count of *all* `Friendship` you could get from the connection. */
  readonly totalCount: Scalars['Int']['output']
}

/** A `Friendship` edge in the connection. */
export type FriendshipEdge = {
  readonly __typename?: 'FriendshipEdge'
  /** A cursor for use in pagination. */
  readonly cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `Friendship` at the end of the edge. */
  readonly node: Friendship
}

/** An input for mutations affecting `Friendship` */
export type FriendshipInput = {
  /** The 'left' side of the friend relation. It must be lexically less than the 'right' side. */
  readonly aAccountId: Scalars['UUID']['input']
  /** The 'right' side of the friend relation. It must be lexically greater than the 'left' side. */
  readonly bAccountId: Scalars['UUID']['input']
  /** The account that created the friend relation. */
  readonly createdBy: Scalars['UUID']['input']
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
  readonly status?: InputMaybe<FriendshipStatus>
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
  readonly geojson?: Maybe<Scalars['GeoJSON']['output']>
  /** Spatial reference identifier (SRID) */
  readonly srid: Scalars['Int']['output']
}

/** All geography types implement this interface */
export type GeographyInterface = {
  /** Converts the object to GeoJSON */
  readonly geojson?: Maybe<Scalars['GeoJSON']['output']>
  /** Spatial reference identifier (SRID) */
  readonly srid: Scalars['Int']['output']
}

export type GeographyPoint = GeographyGeometry &
  GeographyInterface & {
    readonly __typename?: 'GeographyPoint'
    readonly geojson?: Maybe<Scalars['GeoJSON']['output']>
    readonly latitude: Scalars['Float']['output']
    readonly longitude: Scalars['Float']['output']
    readonly srid: Scalars['Int']['output']
  }

/** A guest for a contact. A bidirectional mapping between an event and a contact. */
export type Guest = Node & {
  readonly __typename?: 'Guest'
  /** Reads a single `Account` that is related to this `Guest`. */
  readonly accountByUpdatedBy?: Maybe<Account>
  /** Reads a single `Attendance` that is related to this `Guest`. */
  readonly attendanceByGuestId?: Maybe<Attendance>
  /** The number of additional guests the organizer approved for the guest, each of whom takes a seat of the event. The organizer can raise it up to the request, the guest can only lower it. Setting it fails with error code **VTGCM** when the event's maximum guest count would be exceeded. Resets to 0 when the guest's effective feedback is `canceled`. */
  readonly companionCount: Scalars['Int']['output']
  /** The number of additional guests the guest asks the organizer to approve in total. `NULL` when there is no pending request, which also holds for a request that does not exceed the approved companion count. The organizer clears it by approving or rejecting. Resets to `NULL` when the guest's effective feedback is `canceled`. */
  readonly companionCountRequested?: Maybe<Scalars['Int']['output']>
  /** Reads a single `Contact` that is related to this `Guest`. */
  readonly contactByContactId?: Maybe<Contact>
  /** The internal id of the guest's contact. */
  readonly contactId: Scalars['UUID']['output']
  /** Timestamp of when the guest was created, defaults to the current timestamp. */
  readonly createdAt: Scalars['Datetime']['output']
  /** Reads a single `Event` that is related to this `Guest`. */
  readonly eventByEventId?: Maybe<Event>
  /** The internal id of the guest's event. */
  readonly eventId: Scalars['UUID']['output']
  /** The guest's own feedback status. Only the guest can set it. */
  readonly feedback?: Maybe<InvitationFeedback>
  /** The organizer's correction of the guest's feedback, which takes precedence over it. Only the event's organizer can set it, so the guest's own feedback stays as given. */
  readonly feedbackOverride?: Maybe<InvitationFeedback>
  /** The guest's optional reason for their feedback, e.g. why they declined. Only the guest can set it. */
  readonly feedbackReason?: Maybe<Scalars['String']['output']>
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly id: Scalars['ID']['output']
  /** The guest's internal id. */
  readonly rowId: Scalars['UUID']['output']
  /** Timestamp of when the guest was last updated. */
  readonly updatedAt?: Maybe<Scalars['Datetime']['output']>
  /** The id of the account which last updated the guest. `NULL` if the guest was updated by an anonymous user. */
  readonly updatedBy?: Maybe<Scalars['UUID']['output']>
}

/** A condition to be used against `Guest` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type GuestCondition = {
  /** Checks for equality with the object’s `contactId` field. */
  readonly contactId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `eventId` field. */
  readonly eventId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `rowId` field. */
  readonly rowId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `updatedBy` field. */
  readonly updatedBy?: InputMaybe<Scalars['UUID']['input']>
}

/** A connection to a list of `Guest` values. */
export type GuestConnection = {
  readonly __typename?: 'GuestConnection'
  /** A list of edges which contains the `Guest` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<GuestEdge>
  /** A list of `Guest` objects. */
  readonly nodes: ReadonlyArray<Guest>
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo
  /** The count of *all* `Guest` you could get from the connection. */
  readonly totalCount: Scalars['Int']['output']
}

/** A connection to a list of `UUID` values. */
export type GuestContactIdsConnection = {
  readonly __typename?: 'GuestContactIdsConnection'
  /** A list of edges which contains the `UUID` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<Maybe<GuestContactIdsEdge>>
  /** A list of `UUID` objects. */
  readonly nodes: ReadonlyArray<Maybe<Scalars['UUID']['output']>>
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo
  /** The count of *all* `UUID` you could get from the connection. */
  readonly totalCount: Scalars['Int']['output']
}

/** A `UUID` edge in the connection. */
export type GuestContactIdsEdge = {
  readonly __typename?: 'GuestContactIdsEdge'
  /** A cursor for use in pagination. */
  readonly cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `UUID` at the end of the edge. */
  readonly node?: Maybe<Scalars['UUID']['output']>
}

/** A `Guest` edge in the connection. */
export type GuestEdge = {
  readonly __typename?: 'GuestEdge'
  /** A cursor for use in pagination. */
  readonly cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `Guest` at the end of the edge. */
  readonly node: Guest
}

/** An input for mutations affecting `Guest` */
export type GuestInput = {
  /** The internal id of the guest's contact. */
  readonly contactId: Scalars['UUID']['input']
  /** The internal id of the guest's event. */
  readonly eventId: Scalars['UUID']['input']
  /** The guest's own feedback status. Only the guest can set it. */
  readonly feedback?: InputMaybe<InvitationFeedback>
  /** The organizer's correction of the guest's feedback, which takes precedence over it. Only the event's organizer can set it, so the guest's own feedback stays as given. */
  readonly feedbackOverride?: InputMaybe<InvitationFeedback>
  /** The guest's optional reason for their feedback, e.g. why they declined. Only the guest can set it. */
  readonly feedbackReason?: InputMaybe<Scalars['String']['input']>
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
  /** The number of additional guests the organizer approved for the guest, each of whom takes a seat of the event. The organizer can raise it up to the request, the guest can only lower it. Setting it fails with error code **VTGCM** when the event's maximum guest count would be exceeded. Resets to 0 when the guest's effective feedback is `canceled`. */
  readonly companionCount?: InputMaybe<Scalars['Int']['input']>
  /** The number of additional guests the guest asks the organizer to approve in total. `NULL` when there is no pending request, which also holds for a request that does not exceed the approved companion count. The organizer clears it by approving or rejecting. Resets to `NULL` when the guest's effective feedback is `canceled`. */
  readonly companionCountRequested?: InputMaybe<Scalars['Int']['input']>
  /** The guest's own feedback status. Only the guest can set it. */
  readonly feedback?: InputMaybe<InvitationFeedback>
  /** The organizer's correction of the guest's feedback, which takes precedence over it. Only the event's organizer can set it, so the guest's own feedback stays as given. */
  readonly feedbackOverride?: InputMaybe<InvitationFeedback>
  /** The guest's optional reason for their feedback, e.g. why they declined. Only the guest can set it. */
  readonly feedbackReason?: InputMaybe<Scalars['String']['input']>
}

/** Possible answers to an invitation: accepted, canceled. */
export enum InvitationFeedback {
  Accepted = 'accepted',
  Canceled = 'canceled',
}

/** All input for the `invite` mutation. */
export type InviteInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  readonly guestId: Scalars['UUID']['input']
  readonly language: Scalars['String']['input']
}

/** The output of our `invite` mutation. */
export type InvitePayload = {
  readonly __typename?: 'InvitePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
}

/** All input for the `jwtCreate` mutation. */
export type JwtCreateInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  readonly password: Scalars['String']['input']
  readonly username: Scalars['String']['input']
}

/** The output of our `jwtCreate` mutation. */
export type JwtCreatePayload = {
  readonly __typename?: 'JwtCreatePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
  readonly result?: Maybe<Scalars['Jwt']['output']>
}

/** All input for the `jwtUpdateAttendanceAdd` mutation. */
export type JwtUpdateAttendanceAddInput = {
  readonly attendanceId: Scalars['UUID']['input']
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
}

/** The output of our `jwtUpdateAttendanceAdd` mutation. */
export type JwtUpdateAttendanceAddPayload = {
  readonly __typename?: 'JwtUpdateAttendanceAddPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
  readonly result?: Maybe<Scalars['Jwt']['output']>
}

/** All input for the `jwtUpdateGuestAdd` mutation. */
export type JwtUpdateGuestAddInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  readonly guestId: Scalars['UUID']['input']
}

/** The output of our `jwtUpdateGuestAdd` mutation. */
export type JwtUpdateGuestAddPayload = {
  readonly __typename?: 'JwtUpdateGuestAddPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
  readonly result?: Maybe<Scalars['Jwt']['output']>
}

/** All input for the `jwtUpdate` mutation. */
export type JwtUpdateInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  readonly jwtId: Scalars['UUID']['input']
}

/** The output of our `jwtUpdate` mutation. */
export type JwtUpdatePayload = {
  readonly __typename?: 'JwtUpdatePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
  readonly result?: Maybe<Scalars['Jwt']['output']>
}

/** Supported ISO 639 language codes. */
export enum Language {
  De = 'de',
  En = 'en',
}

/** Legal terms like privacy policies or terms of service. */
export type LegalTerm = Node & {
  readonly __typename?: 'LegalTerm'
  /** Timestamp when the term was created. Set to the current time by default. */
  readonly createdAt: Scalars['Datetime']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly id: Scalars['ID']['output']
  /** Language code in ISO 639-1 format with optional region (e.g., `en` for English, `en_GB` for British English) */
  readonly language: Scalars['String']['output']
  /** Reads and enables pagination through a set of `LegalTermAcceptance`. */
  readonly legalTermAcceptancesByLegalTermId: LegalTermAcceptanceConnection
  /** Unique identifier for each legal term. */
  readonly rowId: Scalars['UUID']['output']
  /** Text of the legal term. Markdown is expected to be used. It must be non-empty and cannot exceed 500,000 characters. */
  readonly term: Scalars['String']['output']
  /** Semantic versioning string to track changes to the legal terms (format: `X.Y.Z`). */
  readonly version: Scalars['String']['output']
}

/** Legal terms like privacy policies or terms of service. */
export type LegalTermLegalTermAcceptancesByLegalTermIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<LegalTermAcceptanceCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<LegalTermAcceptanceOrderBy>>
}

/** Tracks each user account's acceptance of legal terms and conditions. */
export type LegalTermAcceptance = Node & {
  readonly __typename?: 'LegalTermAcceptance'
  /** Reads a single `Account` that is related to this `LegalTermAcceptance`. */
  readonly accountByAccountId?: Maybe<Account>
  /** The user account ID that accepted the legal terms. If the account is deleted, this acceptance record will also be deleted. */
  readonly accountId: Scalars['UUID']['output']
  /** Timestamp showing when the legal terms were accepted, set automatically at the time of acceptance. */
  readonly createdAt: Scalars['Datetime']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly id: Scalars['ID']['output']
  /** Reads a single `LegalTerm` that is related to this `LegalTermAcceptance`. */
  readonly legalTermByLegalTermId?: Maybe<LegalTerm>
  /** The ID of the legal terms that were accepted. Deletion of these legal terms is restricted while they are still referenced in this table. */
  readonly legalTermId: Scalars['UUID']['output']
  /** Unique identifier for this legal term acceptance record. Automatically generated for each new acceptance. */
  readonly rowId: Scalars['UUID']['output']
}

/**
 * A condition to be used against `LegalTermAcceptance` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type LegalTermAcceptanceCondition = {
  /** Checks for equality with the object’s `accountId` field. */
  readonly accountId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `legalTermId` field. */
  readonly legalTermId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `rowId` field. */
  readonly rowId?: InputMaybe<Scalars['UUID']['input']>
}

/** A connection to a list of `LegalTermAcceptance` values. */
export type LegalTermAcceptanceConnection = {
  readonly __typename?: 'LegalTermAcceptanceConnection'
  /** A list of edges which contains the `LegalTermAcceptance` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<LegalTermAcceptanceEdge>
  /** A list of `LegalTermAcceptance` objects. */
  readonly nodes: ReadonlyArray<LegalTermAcceptance>
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo
  /** The count of *all* `LegalTermAcceptance` you could get from the connection. */
  readonly totalCount: Scalars['Int']['output']
}

/** A `LegalTermAcceptance` edge in the connection. */
export type LegalTermAcceptanceEdge = {
  readonly __typename?: 'LegalTermAcceptanceEdge'
  /** A cursor for use in pagination. */
  readonly cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `LegalTermAcceptance` at the end of the edge. */
  readonly node: LegalTermAcceptance
}

/** An input for mutations affecting `LegalTermAcceptance` */
export type LegalTermAcceptanceInput = {
  /** The user account ID that accepted the legal terms. If the account is deleted, this acceptance record will also be deleted. */
  readonly accountId: Scalars['UUID']['input']
  /** The ID of the legal terms that were accepted. Deletion of these legal terms is restricted while they are still referenced in this table. */
  readonly legalTermId: Scalars['UUID']['input']
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
  readonly language?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `rowId` field. */
  readonly rowId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `version` field. */
  readonly version?: InputMaybe<Scalars['String']['input']>
}

/** A connection to a list of `LegalTerm` values. */
export type LegalTermConnection = {
  readonly __typename?: 'LegalTermConnection'
  /** A list of edges which contains the `LegalTerm` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<LegalTermEdge>
  /** A list of `LegalTerm` objects. */
  readonly nodes: ReadonlyArray<LegalTerm>
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo
  /** The count of *all* `LegalTerm` you could get from the connection. */
  readonly totalCount: Scalars['Int']['output']
}

/** A `LegalTerm` edge in the connection. */
export type LegalTermEdge = {
  readonly __typename?: 'LegalTermEdge'
  /** A cursor for use in pagination. */
  readonly cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `LegalTerm` at the end of the edge. */
  readonly node: LegalTerm
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
  readonly __typename?: 'Mutation'
  /**
   * Allows to delete an account.
   *
   * Error codes:
   * - **28P01** when the password is invalid.
   *
   * Deleting an account that organizes many events can take several seconds.
   */
  readonly accountDelete?: Maybe<AccountDeletePayload>
  /** Sets the account's email address verification code to `NULL` for which the email address verification code equals the one passed and is up to date.\n\nError codes:\n- **P0002** when the verification code is unknown.\n- **55000** when the verification code has expired. */
  readonly accountEmailAddressVerification?: Maybe<AccountEmailAddressVerificationPayload>
  /** Allows to change an account's password.\n\nError codes:\n- **22023** when the new password is too short.\n- **28P01** when an account with the given password is not found. */
  readonly accountPasswordChange?: Maybe<AccountPasswordChangePayload>
  /** Sets a new password for an account if there was a request to do so before that's still up to date.\n\nError codes:\n- **22023** when the password is too short.\n- **P0002** when the reset code is unknown.\n- **55000** when the reset code has expired. */
  readonly accountPasswordReset?: Maybe<AccountPasswordResetPayload>
  /** Sets a new password reset verification code for an account. */
  readonly accountPasswordResetRequest?: Maybe<AccountPasswordResetRequestPayload>
  /**
   * Creates a contact and registers an account referencing it.
   *
   * Error codes:
   * - **VTBDA** when the birth date is not at least 18 years old.
   * - **VTPLL** when the password length does not reach its minimum.
   * - **VTAUV** when an account with the given username already exists.
   */
  readonly accountRegistration?: Maybe<AccountRegistrationPayload>
  /** Refreshes an account's email address verification validity period.\n\nError codes:\n- **01P01** in all cases right now as refreshing registrations is currently not available due to missing rate limiting.\n- **22023** when an account with this account id does not exist. */
  readonly accountRegistrationRefresh?: Maybe<AccountRegistrationRefreshPayload>
  /** Inserts an achievement unlock for the user that gave an existing achievement code.\n\nError codes:\n- **P0002** when the achievement or the account is unknown. */
  readonly achievementUnlock?: Maybe<AchievementUnlockPayload>
  /**
   * Merges a contact into another one of yours and returns the kept contact. The kept contact takes over the given contact's account, address, email addresses, names, language, note, phone number, time zone and URL, so the caller picks each value. The merged contact's guests, attendances and group memberships move to the kept contact, so existing invitations stay valid, and the merged contact is deleted.
   *
   * Error codes:
   * - **VTCMN** when either contact is not one of yours or both are the same.
   * - **VTCMS** when either contact is your own account's contact.
   * - **VTCMA** when the contacts refer to two different accounts.
   * - **VTCMV** when the account or address is not taken from either contact.
   * - **VTCMG** when both contacts are guests of the same event.
   */
  readonly contactMerge?: Maybe<ContactMergePayload>
  /** Creates a single `AccountBlock`. */
  readonly createAccountBlock?: Maybe<CreateAccountBlockPayload>
  /** Creates a single `AccountSocialNetwork`. */
  readonly createAccountSocialNetwork?: Maybe<CreateAccountSocialNetworkPayload>
  /** Creates a single `Address`. */
  readonly createAddress?: Maybe<CreateAddressPayload>
  /** Creates a single `Attendance`. */
  readonly createAttendance?: Maybe<CreateAttendancePayload>
  /** Creates a single `Contact`. */
  readonly createContact?: Maybe<CreateContactPayload>
  /** Creates a single `ContactGroup`. */
  readonly createContactGroup?: Maybe<CreateContactGroupPayload>
  /** Creates a single `ContactGroupMember`. */
  readonly createContactGroupMember?: Maybe<CreateContactGroupMemberPayload>
  /** Pairs the group ids and contact ids by position and inserts the memberships that do not exist yet. Arrays of different lengths pad with NULL, which fails the whole call. */
  readonly createContactGroupMembers?: Maybe<CreateContactGroupMembersPayload>
  /** Creates the contact groups of the invoker that do not exist yet, ignoring case, and returns all groups matching the names, existing ones included. */
  readonly createContactGroups?: Maybe<CreateContactGroupsPayload>
  /** Inserts multiple contacts for the invoker. Ids, timestamps and the creator passed in are ignored. Rows are not returned in input order. */
  readonly createContacts?: Maybe<CreateContactsPayload>
  /** Creates a single `Device`. */
  readonly createDevice?: Maybe<CreateDevicePayload>
  /** Creates a single `Event`. */
  readonly createEvent?: Maybe<CreateEventPayload>
  /** Creates a single `EventCategoryMapping`. */
  readonly createEventCategoryMapping?: Maybe<CreateEventCategoryMappingPayload>
  /** Creates a single `EventFavorite`. */
  readonly createEventFavorite?: Maybe<CreateEventFavoritePayload>
  /** Creates a single `EventFormatMapping`. */
  readonly createEventFormatMapping?: Maybe<CreateEventFormatMappingPayload>
  /** Creates a single `EventInvitationLink`. */
  readonly createEventInvitationLink?: Maybe<CreateEventInvitationLinkPayload>
  /** Creates a single `EventUpload`. */
  readonly createEventUpload?: Maybe<CreateEventUploadPayload>
  /** Creates a single `Friendship`. */
  readonly createFriendship?: Maybe<CreateFriendshipPayload>
  /** Creates a single `Guest`. */
  readonly createGuest?: Maybe<CreateGuestPayload>
  /** Function for inserting multiple guest records. */
  readonly createGuests?: Maybe<CreateGuestsPayload>
  /** Creates a single `LegalTermAcceptance`. */
  readonly createLegalTermAcceptance?: Maybe<CreateLegalTermAcceptancePayload>
  /** Creates a single `PreferenceEventCategory`. */
  readonly createPreferenceEventCategory?: Maybe<CreatePreferenceEventCategoryPayload>
  /** Creates a single `PreferenceEventFormat`. */
  readonly createPreferenceEventFormat?: Maybe<CreatePreferenceEventFormatPayload>
  /** Creates a single `PreferenceEventLocation`. */
  readonly createPreferenceEventLocation?: Maybe<CreatePreferenceEventLocationPayload>
  /** Creates a single `PreferenceEventSize`. */
  readonly createPreferenceEventSize?: Maybe<CreatePreferenceEventSizePayload>
  /** Creates a single `ProfilePicture`. */
  readonly createProfilePicture?: Maybe<CreateProfilePicturePayload>
  /** Creates a single `Report`. */
  readonly createReport?: Maybe<CreateReportPayload>
  /** Creates a single `Upload`. */
  readonly createUpload?: Maybe<CreateUploadPayload>
  /** Deletes a single `AccountBlock` using its globally unique id. */
  readonly deleteAccountBlock?: Maybe<DeleteAccountBlockPayload>
  /** Deletes a single `AccountBlock` using a unique key. */
  readonly deleteAccountBlockByCreatedByAndBlockedAccountId?: Maybe<DeleteAccountBlockPayload>
  /** Deletes a single `AccountBlock` using a unique key. */
  readonly deleteAccountBlockByRowId?: Maybe<DeleteAccountBlockPayload>
  /** Deletes a single `AccountSocialNetwork` using its globally unique id. */
  readonly deleteAccountSocialNetwork?: Maybe<DeleteAccountSocialNetworkPayload>
  /** Deletes a single `AccountSocialNetwork` using a unique key. */
  readonly deleteAccountSocialNetworkByAccountIdAndSocialNetwork?: Maybe<DeleteAccountSocialNetworkPayload>
  /** Deletes a single `Address` using its globally unique id. */
  readonly deleteAddress?: Maybe<DeleteAddressPayload>
  /** Deletes a single `Address` using a unique key. */
  readonly deleteAddressByRowId?: Maybe<DeleteAddressPayload>
  /** Deletes a single `Contact` using its globally unique id. */
  readonly deleteContact?: Maybe<DeleteContactPayload>
  /** Deletes a single `Contact` using a unique key. */
  readonly deleteContactByCreatedByAndAccountId?: Maybe<DeleteContactPayload>
  /** Deletes a single `Contact` using a unique key. */
  readonly deleteContactByRowId?: Maybe<DeleteContactPayload>
  /** Deletes a single `ContactGroup` using its globally unique id. */
  readonly deleteContactGroup?: Maybe<DeleteContactGroupPayload>
  /** Deletes a single `ContactGroup` using a unique key. */
  readonly deleteContactGroupByRowId?: Maybe<DeleteContactGroupPayload>
  /** Deletes a single `ContactGroupMember` using its globally unique id. */
  readonly deleteContactGroupMember?: Maybe<DeleteContactGroupMemberPayload>
  /** Deletes a single `ContactGroupMember` using a unique key. */
  readonly deleteContactGroupMemberByContactGroupIdAndContactId?: Maybe<DeleteContactGroupMemberPayload>
  /** Deletes a single `Device` using its globally unique id. */
  readonly deleteDevice?: Maybe<DeleteDevicePayload>
  /** Deletes a single `Device` using a unique key. */
  readonly deleteDeviceByCreatedByAndFcmToken?: Maybe<DeleteDevicePayload>
  /** Deletes a single `Device` using a unique key. */
  readonly deleteDeviceByRowId?: Maybe<DeleteDevicePayload>
  /** Deletes a single `Event` using its globally unique id. */
  readonly deleteEvent?: Maybe<DeleteEventPayload>
  /** Deletes a single `Event` using a unique key. */
  readonly deleteEventByCreatedByAndSlug?: Maybe<DeleteEventPayload>
  /** Deletes a single `Event` using a unique key. */
  readonly deleteEventByRowId?: Maybe<DeleteEventPayload>
  /** Deletes a single `EventCategoryMapping` using its globally unique id. */
  readonly deleteEventCategoryMapping?: Maybe<DeleteEventCategoryMappingPayload>
  /** Deletes a single `EventCategoryMapping` using a unique key. */
  readonly deleteEventCategoryMappingByEventIdAndCategoryId?: Maybe<DeleteEventCategoryMappingPayload>
  /** Deletes a single `EventFavorite` using its globally unique id. */
  readonly deleteEventFavorite?: Maybe<DeleteEventFavoritePayload>
  /** Deletes a single `EventFavorite` using a unique key. */
  readonly deleteEventFavoriteByCreatedByAndEventId?: Maybe<DeleteEventFavoritePayload>
  /** Deletes a single `EventFavorite` using a unique key. */
  readonly deleteEventFavoriteByRowId?: Maybe<DeleteEventFavoritePayload>
  /** Deletes a single `EventFormatMapping` using its globally unique id. */
  readonly deleteEventFormatMapping?: Maybe<DeleteEventFormatMappingPayload>
  /** Deletes a single `EventFormatMapping` using a unique key. */
  readonly deleteEventFormatMappingByEventIdAndFormatId?: Maybe<DeleteEventFormatMappingPayload>
  /** Deletes a single `EventInvitationLink` using its globally unique id. */
  readonly deleteEventInvitationLink?: Maybe<DeleteEventInvitationLinkPayload>
  /** Deletes a single `EventInvitationLink` using a unique key. */
  readonly deleteEventInvitationLinkByEventId?: Maybe<DeleteEventInvitationLinkPayload>
  /** Deletes a single `EventInvitationLink` using a unique key. */
  readonly deleteEventInvitationLinkByRowId?: Maybe<DeleteEventInvitationLinkPayload>
  /** Deletes a single `EventUpload` using its globally unique id. */
  readonly deleteEventUpload?: Maybe<DeleteEventUploadPayload>
  /** Deletes a single `EventUpload` using a unique key. */
  readonly deleteEventUploadByEventIdAndUploadId?: Maybe<DeleteEventUploadPayload>
  /** Deletes a single `EventUpload` using a unique key. */
  readonly deleteEventUploadByRowId?: Maybe<DeleteEventUploadPayload>
  /** Deletes a single `Friendship` using its globally unique id. */
  readonly deleteFriendship?: Maybe<DeleteFriendshipPayload>
  /** Deletes a single `Friendship` using a unique key. */
  readonly deleteFriendshipByAAccountIdAndBAccountId?: Maybe<DeleteFriendshipPayload>
  /** Deletes a single `Friendship` using a unique key. */
  readonly deleteFriendshipByRowId?: Maybe<DeleteFriendshipPayload>
  /** Deletes a single `Guest` using its globally unique id. */
  readonly deleteGuest?: Maybe<DeleteGuestPayload>
  /** Deletes a single `Guest` using a unique key. */
  readonly deleteGuestByEventIdAndContactId?: Maybe<DeleteGuestPayload>
  /** Deletes a single `Guest` using a unique key. */
  readonly deleteGuestByRowId?: Maybe<DeleteGuestPayload>
  /** Deletes a single `PreferenceEventCategory` using its globally unique id. */
  readonly deletePreferenceEventCategory?: Maybe<DeletePreferenceEventCategoryPayload>
  /** Deletes a single `PreferenceEventCategory` using a unique key. */
  readonly deletePreferenceEventCategoryByAccountIdAndCategoryId?: Maybe<DeletePreferenceEventCategoryPayload>
  /** Deletes a single `PreferenceEventCategory` using a unique key. */
  readonly deletePreferenceEventCategoryByRowId?: Maybe<DeletePreferenceEventCategoryPayload>
  /** Deletes a single `PreferenceEventFormat` using its globally unique id. */
  readonly deletePreferenceEventFormat?: Maybe<DeletePreferenceEventFormatPayload>
  /** Deletes a single `PreferenceEventFormat` using a unique key. */
  readonly deletePreferenceEventFormatByAccountIdAndFormatId?: Maybe<DeletePreferenceEventFormatPayload>
  /** Deletes a single `PreferenceEventFormat` using a unique key. */
  readonly deletePreferenceEventFormatByRowId?: Maybe<DeletePreferenceEventFormatPayload>
  /** Deletes a single `PreferenceEventLocation` using its globally unique id. */
  readonly deletePreferenceEventLocation?: Maybe<DeletePreferenceEventLocationPayload>
  /** Deletes a single `PreferenceEventLocation` using a unique key. */
  readonly deletePreferenceEventLocationByCreatedByAndLocationAndRadius?: Maybe<DeletePreferenceEventLocationPayload>
  /** Deletes a single `PreferenceEventLocation` using a unique key. */
  readonly deletePreferenceEventLocationByRowId?: Maybe<DeletePreferenceEventLocationPayload>
  /** Deletes a single `PreferenceEventSize` using its globally unique id. */
  readonly deletePreferenceEventSize?: Maybe<DeletePreferenceEventSizePayload>
  /** Deletes a single `PreferenceEventSize` using a unique key. */
  readonly deletePreferenceEventSizeByAccountIdAndEventSize?: Maybe<DeletePreferenceEventSizePayload>
  /** Deletes a single `PreferenceEventSize` using a unique key. */
  readonly deletePreferenceEventSizeByRowId?: Maybe<DeletePreferenceEventSizePayload>
  /** Deletes a single `ProfilePicture` using its globally unique id. */
  readonly deleteProfilePicture?: Maybe<DeleteProfilePicturePayload>
  /** Deletes a single `ProfilePicture` using a unique key. */
  readonly deleteProfilePictureByAccountId?: Maybe<DeleteProfilePicturePayload>
  /** Deletes a single `ProfilePicture` using a unique key. */
  readonly deleteProfilePictureByRowId?: Maybe<DeleteProfilePicturePayload>
  /** Deletes a single `Upload` using its globally unique id. */
  readonly deleteUpload?: Maybe<DeleteUploadPayload>
  /** Deletes a single `Upload` using a unique key. */
  readonly deleteUploadByRowId?: Maybe<DeleteUploadPayload>
  /** Deletes a single `Upload` using a unique key. */
  readonly deleteUploadByStorageKey?: Maybe<DeleteUploadPayload>
  /** Allows to delete an event.\n\nError codes:\n- **P0002** when the event was not found.\n- **28P01** when the account with the given password was not found. */
  readonly eventDelete?: Maybe<EventDeletePayload>
  /**
   * Joins the event of a general invitation link as a guest who accepted, and returns the guest's id. An account joins with its own contact and gets its existing guest back if it already joined. Without an account, the email address and first name become a new contact of the organizer.
   *
   * Error codes:
   * - **VTILN** when the invitation link does not exist or its event is a draft or not yet published.
   * - **VTEEN** when the event has ended.
   * - **VTFDP** when the event's feedback deadline has passed.
   * - **VTIDM** when an email address or first name is missing without an account.
   * - **VTGCM** when the event's maximum guest count is reached.
   */
  readonly eventInvitationLinkRedeem?: Maybe<EventInvitationLinkRedeemPayload>
  /** Adds a notification for the invitation channel.\n\nError codes:\n- **P0002** when the guest, event, contact, the contact email address, or the account email address is not accessible.\n- **VTEUP** when the event is a draft or not yet published. */
  readonly invite?: Maybe<InvitePayload>
  /** Creates a JWT token that will securely identify an account and give it certain permissions. */
  readonly jwtCreate?: Maybe<JwtCreatePayload>
  /** Refreshes a JWT. */
  readonly jwtUpdate?: Maybe<JwtUpdatePayload>
  /** Adds an attendance claim to the current session. */
  readonly jwtUpdateAttendanceAdd?: Maybe<JwtUpdateAttendanceAddPayload>
  /** Adds a guest claim to the current session. */
  readonly jwtUpdateGuestAdd?: Maybe<JwtUpdateGuestAddPayload>
  /** Allows to set the acknowledgement state of a notification.\n\nError codes:\n- **P0002** when no notification with the given id is found. */
  readonly notificationAcknowledge?: Maybe<NotificationAcknowledgePayload>
  /** Sets the picture with the given upload id as the invoker's profile picture. */
  readonly profilePictureSet?: Maybe<ProfilePictureSetPayload>
  /** Updates a single `Account` using its globally unique id and a patch. */
  readonly updateAccount?: Maybe<UpdateAccountPayload>
  /** Updates a single `Account` using a unique key and a patch. */
  readonly updateAccountByRowId?: Maybe<UpdateAccountPayload>
  /** Updates a single `Account` using a unique key and a patch. */
  readonly updateAccountByUsername?: Maybe<UpdateAccountPayload>
  /** Updates a single `AccountSocialNetwork` using its globally unique id and a patch. */
  readonly updateAccountSocialNetwork?: Maybe<UpdateAccountSocialNetworkPayload>
  /** Updates a single `AccountSocialNetwork` using a unique key and a patch. */
  readonly updateAccountSocialNetworkByAccountIdAndSocialNetwork?: Maybe<UpdateAccountSocialNetworkPayload>
  /** Updates a single `Address` using its globally unique id and a patch. */
  readonly updateAddress?: Maybe<UpdateAddressPayload>
  /** Updates a single `Address` using a unique key and a patch. */
  readonly updateAddressByRowId?: Maybe<UpdateAddressPayload>
  /** Updates a single `Attendance` using its globally unique id and a patch. */
  readonly updateAttendance?: Maybe<UpdateAttendancePayload>
  /** Updates a single `Attendance` using a unique key and a patch. */
  readonly updateAttendanceByGuestId?: Maybe<UpdateAttendancePayload>
  /** Updates a single `Attendance` using a unique key and a patch. */
  readonly updateAttendanceByRowId?: Maybe<UpdateAttendancePayload>
  /** Updates a single `Contact` using its globally unique id and a patch. */
  readonly updateContact?: Maybe<UpdateContactPayload>
  /** Updates a single `Contact` using a unique key and a patch. */
  readonly updateContactByCreatedByAndAccountId?: Maybe<UpdateContactPayload>
  /** Updates a single `Contact` using a unique key and a patch. */
  readonly updateContactByRowId?: Maybe<UpdateContactPayload>
  /** Updates a single `ContactGroup` using its globally unique id and a patch. */
  readonly updateContactGroup?: Maybe<UpdateContactGroupPayload>
  /** Updates a single `ContactGroup` using a unique key and a patch. */
  readonly updateContactGroupByRowId?: Maybe<UpdateContactGroupPayload>
  /** Updates a single `Device` using its globally unique id and a patch. */
  readonly updateDevice?: Maybe<UpdateDevicePayload>
  /** Updates a single `Device` using a unique key and a patch. */
  readonly updateDeviceByCreatedByAndFcmToken?: Maybe<UpdateDevicePayload>
  /** Updates a single `Device` using a unique key and a patch. */
  readonly updateDeviceByRowId?: Maybe<UpdateDevicePayload>
  /** Updates a single `Event` using its globally unique id and a patch. */
  readonly updateEvent?: Maybe<UpdateEventPayload>
  /** Updates a single `Event` using a unique key and a patch. */
  readonly updateEventByCreatedByAndSlug?: Maybe<UpdateEventPayload>
  /** Updates a single `Event` using a unique key and a patch. */
  readonly updateEventByRowId?: Maybe<UpdateEventPayload>
  /** Updates a single `Friendship` using its globally unique id and a patch. */
  readonly updateFriendship?: Maybe<UpdateFriendshipPayload>
  /** Updates a single `Friendship` using a unique key and a patch. */
  readonly updateFriendshipByAAccountIdAndBAccountId?: Maybe<UpdateFriendshipPayload>
  /** Updates a single `Friendship` using a unique key and a patch. */
  readonly updateFriendshipByRowId?: Maybe<UpdateFriendshipPayload>
  /** Updates a single `Guest` using its globally unique id and a patch. */
  readonly updateGuest?: Maybe<UpdateGuestPayload>
  /** Updates a single `Guest` using a unique key and a patch. */
  readonly updateGuestByEventIdAndContactId?: Maybe<UpdateGuestPayload>
  /** Updates a single `Guest` using a unique key and a patch. */
  readonly updateGuestByRowId?: Maybe<UpdateGuestPayload>
  /** Updates a single `ProfilePicture` using its globally unique id and a patch. */
  readonly updateProfilePicture?: Maybe<UpdateProfilePicturePayload>
  /** Updates a single `ProfilePicture` using a unique key and a patch. */
  readonly updateProfilePictureByAccountId?: Maybe<UpdateProfilePicturePayload>
  /** Updates a single `ProfilePicture` using a unique key and a patch. */
  readonly updateProfilePictureByRowId?: Maybe<UpdateProfilePicturePayload>
  /** Updates a single `Upload` using its globally unique id and a patch. */
  readonly updateUpload?: Maybe<UpdateUploadPayload>
  /** Updates a single `Upload` using a unique key and a patch. */
  readonly updateUploadByRowId?: Maybe<UpdateUploadPayload>
  /** Updates a single `Upload` using a unique key and a patch. */
  readonly updateUploadByStorageKey?: Maybe<UpdateUploadPayload>
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
export type MutationContactMergeArgs = {
  input: ContactMergeInput
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
export type MutationCreateContactGroupArgs = {
  input: CreateContactGroupInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateContactGroupMemberArgs = {
  input: CreateContactGroupMemberInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateContactGroupMembersArgs = {
  input: CreateContactGroupMembersInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateContactGroupsArgs = {
  input: CreateContactGroupsInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateContactsArgs = {
  input: CreateContactsInput
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
export type MutationCreateEventInvitationLinkArgs = {
  input: CreateEventInvitationLinkInput
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
export type MutationDeleteContactGroupArgs = {
  input: DeleteContactGroupInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteContactGroupByRowIdArgs = {
  input: DeleteContactGroupByRowIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteContactGroupMemberArgs = {
  input: DeleteContactGroupMemberInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteContactGroupMemberByContactGroupIdAndContactIdArgs = {
  input: DeleteContactGroupMemberByContactGroupIdAndContactIdInput
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
export type MutationDeleteEventInvitationLinkArgs = {
  input: DeleteEventInvitationLinkInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEventInvitationLinkByEventIdArgs = {
  input: DeleteEventInvitationLinkByEventIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEventInvitationLinkByRowIdArgs = {
  input: DeleteEventInvitationLinkByRowIdInput
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
export type MutationEventInvitationLinkRedeemArgs = {
  input: EventInvitationLinkRedeemInput
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
export type MutationJwtUpdateGuestAddArgs = {
  input: JwtUpdateGuestAddInput
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
export type MutationUpdateContactGroupArgs = {
  input: UpdateContactGroupInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateContactGroupByRowIdArgs = {
  input: UpdateContactGroupByRowIdInput
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
  readonly id: Scalars['ID']['output']
}

/** All input for the `notificationAcknowledge` mutation. */
export type NotificationAcknowledgeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  readonly id: Scalars['UUID']['input']
  readonly isAcknowledged: Scalars['Boolean']['input']
}

/** The output of our `notificationAcknowledge` mutation. */
export type NotificationAcknowledgePayload = {
  readonly __typename?: 'NotificationAcknowledgePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
}

/** Information about pagination in a connection. */
export type PageInfo = {
  readonly __typename?: 'PageInfo'
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor?: Maybe<Scalars['Cursor']['output']>
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output']
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output']
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor?: Maybe<Scalars['Cursor']['output']>
}

/** Event categories a user account is interested in (M:N relationship). */
export type PreferenceEventCategory = Node & {
  readonly __typename?: 'PreferenceEventCategory'
  /** Reads a single `Account` that is related to this `PreferenceEventCategory`. */
  readonly accountByAccountId?: Maybe<Account>
  /** A user account id. */
  readonly accountId: Scalars['UUID']['output']
  /** An event category id. */
  readonly categoryId: Scalars['UUID']['output']
  readonly createdAt: Scalars['Datetime']['output']
  /** Reads a single `EventCategory` that is related to this `PreferenceEventCategory`. */
  readonly eventCategoryByCategoryId?: Maybe<EventCategory>
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly id: Scalars['ID']['output']
  readonly rowId: Scalars['UUID']['output']
}

/**
 * A condition to be used against `PreferenceEventCategory` object types. All
 * fields are tested for equality and combined with a logical ‘and.’
 */
export type PreferenceEventCategoryCondition = {
  /** Checks for equality with the object’s `accountId` field. */
  readonly accountId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `categoryId` field. */
  readonly categoryId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `rowId` field. */
  readonly rowId?: InputMaybe<Scalars['UUID']['input']>
}

/** A connection to a list of `PreferenceEventCategory` values. */
export type PreferenceEventCategoryConnection = {
  readonly __typename?: 'PreferenceEventCategoryConnection'
  /** A list of edges which contains the `PreferenceEventCategory` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<PreferenceEventCategoryEdge>
  /** A list of `PreferenceEventCategory` objects. */
  readonly nodes: ReadonlyArray<PreferenceEventCategory>
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo
  /** The count of *all* `PreferenceEventCategory` you could get from the connection. */
  readonly totalCount: Scalars['Int']['output']
}

/** A `PreferenceEventCategory` edge in the connection. */
export type PreferenceEventCategoryEdge = {
  readonly __typename?: 'PreferenceEventCategoryEdge'
  /** A cursor for use in pagination. */
  readonly cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `PreferenceEventCategory` at the end of the edge. */
  readonly node: PreferenceEventCategory
}

/** An input for mutations affecting `PreferenceEventCategory` */
export type PreferenceEventCategoryInput = {
  /** A user account id. */
  readonly accountId: Scalars['UUID']['input']
  /** An event category id. */
  readonly categoryId: Scalars['UUID']['input']
  readonly createdAt?: InputMaybe<Scalars['Datetime']['input']>
  readonly rowId?: InputMaybe<Scalars['UUID']['input']>
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
  readonly __typename?: 'PreferenceEventFormat'
  /** Reads a single `Account` that is related to this `PreferenceEventFormat`. */
  readonly accountByAccountId?: Maybe<Account>
  /** A user account id. */
  readonly accountId: Scalars['UUID']['output']
  /** The timestammp when the record was created.. */
  readonly createdAt: Scalars['Datetime']['output']
  /** Reads a single `EventFormat` that is related to this `PreferenceEventFormat`. */
  readonly eventFormatByFormatId?: Maybe<EventFormat>
  /** The id of an event format. */
  readonly formatId: Scalars['UUID']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly id: Scalars['ID']['output']
  readonly rowId: Scalars['UUID']['output']
}

/**
 * A condition to be used against `PreferenceEventFormat` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type PreferenceEventFormatCondition = {
  /** Checks for equality with the object’s `accountId` field. */
  readonly accountId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `formatId` field. */
  readonly formatId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `rowId` field. */
  readonly rowId?: InputMaybe<Scalars['UUID']['input']>
}

/** A connection to a list of `PreferenceEventFormat` values. */
export type PreferenceEventFormatConnection = {
  readonly __typename?: 'PreferenceEventFormatConnection'
  /** A list of edges which contains the `PreferenceEventFormat` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<PreferenceEventFormatEdge>
  /** A list of `PreferenceEventFormat` objects. */
  readonly nodes: ReadonlyArray<PreferenceEventFormat>
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo
  /** The count of *all* `PreferenceEventFormat` you could get from the connection. */
  readonly totalCount: Scalars['Int']['output']
}

/** A `PreferenceEventFormat` edge in the connection. */
export type PreferenceEventFormatEdge = {
  readonly __typename?: 'PreferenceEventFormatEdge'
  /** A cursor for use in pagination. */
  readonly cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `PreferenceEventFormat` at the end of the edge. */
  readonly node: PreferenceEventFormat
}

/** An input for mutations affecting `PreferenceEventFormat` */
export type PreferenceEventFormatInput = {
  /** A user account id. */
  readonly accountId: Scalars['UUID']['input']
  /** The timestammp when the record was created.. */
  readonly createdAt?: InputMaybe<Scalars['Datetime']['input']>
  /** The id of an event format. */
  readonly formatId: Scalars['UUID']['input']
  readonly rowId?: InputMaybe<Scalars['UUID']['input']>
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
  readonly __typename?: 'PreferenceEventLocation'
  /** Reads a single `Account` that is related to this `PreferenceEventLocation`. */
  readonly accountByCreatedBy?: Maybe<Account>
  /** Timestamp of when the event location preference was created, defaults to the current timestamp. */
  readonly createdAt: Scalars['Datetime']['output']
  /** Reference to the account that created the location preference. */
  readonly createdBy: Scalars['UUID']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly id: Scalars['ID']['output']
  /** Geographical point representing the preferred location, derived from latitude and longitude. */
  readonly location: GeographyPoint
  /** Search radius in meters around the location where events are preferred. Must be positive. */
  readonly radius: Scalars['Float']['output']
  /** Unique identifier for the preference record. */
  readonly rowId: Scalars['UUID']['output']
}

/**
 * A condition to be used against `PreferenceEventLocation` object types. All
 * fields are tested for equality and combined with a logical ‘and.’
 */
export type PreferenceEventLocationCondition = {
  /** Checks for equality with the object’s `createdBy` field. */
  readonly createdBy?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `radius` field. */
  readonly radius?: InputMaybe<Scalars['Float']['input']>
  /** Checks for equality with the object’s `rowId` field. */
  readonly rowId?: InputMaybe<Scalars['UUID']['input']>
}

/** A connection to a list of `PreferenceEventLocation` values. */
export type PreferenceEventLocationConnection = {
  readonly __typename?: 'PreferenceEventLocationConnection'
  /** A list of edges which contains the `PreferenceEventLocation` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<PreferenceEventLocationEdge>
  /** A list of `PreferenceEventLocation` objects. */
  readonly nodes: ReadonlyArray<PreferenceEventLocation>
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo
  /** The count of *all* `PreferenceEventLocation` you could get from the connection. */
  readonly totalCount: Scalars['Int']['output']
}

/** A `PreferenceEventLocation` edge in the connection. */
export type PreferenceEventLocationEdge = {
  readonly __typename?: 'PreferenceEventLocationEdge'
  /** A cursor for use in pagination. */
  readonly cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `PreferenceEventLocation` at the end of the edge. */
  readonly node: PreferenceEventLocation
}

/** An input for mutations affecting `PreferenceEventLocation` */
export type PreferenceEventLocationInput = {
  /** Reference to the account that created the location preference. */
  readonly createdBy: Scalars['UUID']['input']
  /** Geographical point representing the preferred location, derived from latitude and longitude. */
  readonly location: Scalars['GeoJSON']['input']
  /** Search radius in meters around the location where events are preferred. Must be positive. */
  readonly radius: Scalars['Float']['input']
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
  readonly __typename?: 'PreferenceEventSize'
  /** Reads a single `Account` that is related to this `PreferenceEventSize`. */
  readonly accountByAccountId?: Maybe<Account>
  /** The account's internal id. */
  readonly accountId: Scalars['UUID']['output']
  /** Timestamp of when the event size preference was created, defaults to the current timestamp. */
  readonly createdAt: Scalars['Datetime']['output']
  /** A preferred event size. */
  readonly eventSize: EventSize
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly id: Scalars['ID']['output']
  readonly rowId: Scalars['UUID']['output']
}

/**
 * A condition to be used against `PreferenceEventSize` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type PreferenceEventSizeCondition = {
  /** Checks for equality with the object’s `accountId` field. */
  readonly accountId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `eventSize` field. */
  readonly eventSize?: InputMaybe<EventSize>
  /** Checks for equality with the object’s `rowId` field. */
  readonly rowId?: InputMaybe<Scalars['UUID']['input']>
}

/** A connection to a list of `PreferenceEventSize` values. */
export type PreferenceEventSizeConnection = {
  readonly __typename?: 'PreferenceEventSizeConnection'
  /** A list of edges which contains the `PreferenceEventSize` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<PreferenceEventSizeEdge>
  /** A list of `PreferenceEventSize` objects. */
  readonly nodes: ReadonlyArray<PreferenceEventSize>
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo
  /** The count of *all* `PreferenceEventSize` you could get from the connection. */
  readonly totalCount: Scalars['Int']['output']
}

/** A `PreferenceEventSize` edge in the connection. */
export type PreferenceEventSizeEdge = {
  readonly __typename?: 'PreferenceEventSizeEdge'
  /** A cursor for use in pagination. */
  readonly cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `PreferenceEventSize` at the end of the edge. */
  readonly node: PreferenceEventSize
}

/** An input for mutations affecting `PreferenceEventSize` */
export type PreferenceEventSizeInput = {
  /** The account's internal id. */
  readonly accountId: Scalars['UUID']['input']
  /** A preferred event size. */
  readonly eventSize: EventSize
  readonly rowId?: InputMaybe<Scalars['UUID']['input']>
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
  readonly __typename?: 'ProfilePicture'
  /** Reads a single `Account` that is related to this `ProfilePicture`. */
  readonly accountByAccountId?: Maybe<Account>
  /** The account's id. */
  readonly accountId: Scalars['UUID']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly id: Scalars['ID']['output']
  /** The profile picture's internal id. */
  readonly rowId: Scalars['UUID']['output']
  /** Reads a single `Upload` that is related to this `ProfilePicture`. */
  readonly uploadByUploadId?: Maybe<Upload>
  /** The upload's id. */
  readonly uploadId: Scalars['UUID']['output']
}

/**
 * A condition to be used against `ProfilePicture` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type ProfilePictureCondition = {
  /** Checks for equality with the object’s `accountId` field. */
  readonly accountId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `rowId` field. */
  readonly rowId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `uploadId` field. */
  readonly uploadId?: InputMaybe<Scalars['UUID']['input']>
}

/** A connection to a list of `ProfilePicture` values. */
export type ProfilePictureConnection = {
  readonly __typename?: 'ProfilePictureConnection'
  /** A list of edges which contains the `ProfilePicture` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<ProfilePictureEdge>
  /** A list of `ProfilePicture` objects. */
  readonly nodes: ReadonlyArray<ProfilePicture>
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo
  /** The count of *all* `ProfilePicture` you could get from the connection. */
  readonly totalCount: Scalars['Int']['output']
}

/** A `ProfilePicture` edge in the connection. */
export type ProfilePictureEdge = {
  readonly __typename?: 'ProfilePictureEdge'
  /** A cursor for use in pagination. */
  readonly cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `ProfilePicture` at the end of the edge. */
  readonly node: ProfilePicture
}

/** An input for mutations affecting `ProfilePicture` */
export type ProfilePictureInput = {
  /** The account's id. */
  readonly accountId: Scalars['UUID']['input']
  /** The upload's id. */
  readonly uploadId: Scalars['UUID']['input']
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
  readonly accountId?: InputMaybe<Scalars['UUID']['input']>
  /** The upload's id. */
  readonly uploadId?: InputMaybe<Scalars['UUID']['input']>
}

/** All input for the `profilePictureSet` mutation. */
export type ProfilePictureSetInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  readonly uploadId: Scalars['UUID']['input']
}

/** The output of our `profilePictureSet` mutation. */
export type ProfilePictureSetPayload = {
  readonly __typename?: 'ProfilePictureSetPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
}

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  readonly __typename?: 'Query'
  /** Reads a single `Account` using its globally unique `ID`. */
  readonly account?: Maybe<Account>
  /** Reads a single `AccountBlock` using its globally unique `ID`. */
  readonly accountBlock?: Maybe<AccountBlock>
  /** Returns the id, username, and storage key of the profile picture, if it exists, of all accounts blocked by the invoker account. */
  readonly accountBlockAccounts?: Maybe<AccountBlockAccountsConnection>
  /** Get a single `AccountBlock`. */
  readonly accountBlockByCreatedByAndBlockedAccountId?: Maybe<AccountBlock>
  /** Get a single `AccountBlock`. */
  readonly accountBlockByRowId?: Maybe<AccountBlock>
  /** Get a single `Account`. */
  readonly accountByRowId?: Maybe<Account>
  /** Get a single `Account`. */
  readonly accountByUsername?: Maybe<Account>
  /**
   * Returns accounts with a username containing a given substring, closest matches first.
   * Ordering is fully deterministic, so paginate through results via the GraphQL connection arguments rather than assuming a fixed result size.
   * Queries under 3 characters match few trigrams and so scan a larger share of the index; keep that in mind if this backs search-as-you-type.
   */
  readonly accountSearch?: Maybe<AccountConnection>
  /** Reads a single `AccountSocialNetwork` using its globally unique `ID`. */
  readonly accountSocialNetwork?: Maybe<AccountSocialNetwork>
  /** Get a single `AccountSocialNetwork`. */
  readonly accountSocialNetworkByAccountIdAndSocialNetwork?: Maybe<AccountSocialNetwork>
  /** Gets the total upload quota in bytes for the invoking account. */
  readonly accountUploadQuotaBytes?: Maybe<Scalars['BigInt']['output']>
  /** Reads a single `Achievement` using its globally unique `ID`. */
  readonly achievement?: Maybe<Achievement>
  /** Get a single `Achievement`. */
  readonly achievementByAccountIdAndAchievement?: Maybe<Achievement>
  /** Get a single `Achievement`. */
  readonly achievementByRowId?: Maybe<Achievement>
  /** Reads a single `Address` using its globally unique `ID`. */
  readonly address?: Maybe<Address>
  /** Get a single `Address`. */
  readonly addressByRowId?: Maybe<Address>
  /** Reads and enables pagination through a set of `AccountBlock`. */
  readonly allAccountBlocks?: Maybe<AccountBlockConnection>
  /** Reads and enables pagination through a set of `AccountSocialNetwork`. */
  readonly allAccountSocialNetworks?: Maybe<AccountSocialNetworkConnection>
  /** Reads and enables pagination through a set of `Account`. */
  readonly allAccounts?: Maybe<AccountConnection>
  /** Reads and enables pagination through a set of `Achievement`. */
  readonly allAchievements?: Maybe<AchievementConnection>
  /** Reads and enables pagination through a set of `Address`. */
  readonly allAddresses?: Maybe<AddressConnection>
  /** Reads and enables pagination through a set of `App`. */
  readonly allApps?: Maybe<AppConnection>
  /** Reads and enables pagination through a set of `Attendance`. */
  readonly allAttendances?: Maybe<AttendanceConnection>
  /** Reads and enables pagination through a set of `ContactGroupMember`. */
  readonly allContactGroupMembers?: Maybe<ContactGroupMemberConnection>
  /** Reads and enables pagination through a set of `ContactGroup`. */
  readonly allContactGroups?: Maybe<ContactGroupConnection>
  /** Reads and enables pagination through a set of `Contact`. */
  readonly allContacts?: Maybe<ContactConnection>
  /** Reads and enables pagination through a set of `Device`. */
  readonly allDevices?: Maybe<DeviceConnection>
  /** Reads and enables pagination through a set of `EventApp`. */
  readonly allEventApps?: Maybe<EventAppConnection>
  /** Reads and enables pagination through a set of `EventCategory`. */
  readonly allEventCategories?: Maybe<EventCategoryConnection>
  /** Reads and enables pagination through a set of `EventCategoryMapping`. */
  readonly allEventCategoryMappings?: Maybe<EventCategoryMappingConnection>
  /** Reads and enables pagination through a set of `EventFavorite`. */
  readonly allEventFavorites?: Maybe<EventFavoriteConnection>
  /** Reads and enables pagination through a set of `EventFormatMapping`. */
  readonly allEventFormatMappings?: Maybe<EventFormatMappingConnection>
  /** Reads and enables pagination through a set of `EventFormat`. */
  readonly allEventFormats?: Maybe<EventFormatConnection>
  /** Reads and enables pagination through a set of `EventInvitationLink`. */
  readonly allEventInvitationLinks?: Maybe<EventInvitationLinkConnection>
  /** Reads and enables pagination through a set of `EventRecommendation`. */
  readonly allEventRecommendations?: Maybe<EventRecommendationConnection>
  /** Reads and enables pagination through a set of `EventUpload`. */
  readonly allEventUploads?: Maybe<EventUploadConnection>
  /** Reads and enables pagination through a set of `Event`. */
  readonly allEvents?: Maybe<EventConnection>
  /** Reads and enables pagination through a set of `Friendship`. */
  readonly allFriendships?: Maybe<FriendshipConnection>
  /** Reads and enables pagination through a set of `Guest`. */
  readonly allGuests?: Maybe<GuestConnection>
  /** Reads and enables pagination through a set of `LegalTermAcceptance`. */
  readonly allLegalTermAcceptances?: Maybe<LegalTermAcceptanceConnection>
  /** Reads and enables pagination through a set of `LegalTerm`. */
  readonly allLegalTerms?: Maybe<LegalTermConnection>
  /** Reads and enables pagination through a set of `PreferenceEventCategory`. */
  readonly allPreferenceEventCategories?: Maybe<PreferenceEventCategoryConnection>
  /** Reads and enables pagination through a set of `PreferenceEventFormat`. */
  readonly allPreferenceEventFormats?: Maybe<PreferenceEventFormatConnection>
  /** Reads and enables pagination through a set of `PreferenceEventLocation`. */
  readonly allPreferenceEventLocations?: Maybe<PreferenceEventLocationConnection>
  /** Reads and enables pagination through a set of `PreferenceEventSize`. */
  readonly allPreferenceEventSizes?: Maybe<PreferenceEventSizeConnection>
  /** Reads and enables pagination through a set of `ProfilePicture`. */
  readonly allProfilePictures?: Maybe<ProfilePictureConnection>
  /** Reads and enables pagination through a set of `Report`. */
  readonly allReports?: Maybe<ReportConnection>
  /** Reads and enables pagination through a set of `Upload`. */
  readonly allUploads?: Maybe<UploadConnection>
  /** Reads a single `App` using its globally unique `ID`. */
  readonly app?: Maybe<App>
  /** Get a single `App`. */
  readonly appByName?: Maybe<App>
  /** Get a single `App`. */
  readonly appByRowId?: Maybe<App>
  /** Reads a single `Attendance` using its globally unique `ID`. */
  readonly attendance?: Maybe<Attendance>
  /** Get a single `Attendance`. */
  readonly attendanceByGuestId?: Maybe<Attendance>
  /** Get a single `Attendance`. */
  readonly attendanceByRowId?: Maybe<Attendance>
  /** Returns the current attendance claims as UUID array. */
  readonly attendanceClaimArray?: Maybe<
    ReadonlyArray<Maybe<Scalars['UUID']['output']>>
  >
  /** Reads a single `Contact` using its globally unique `ID`. */
  readonly contact?: Maybe<Contact>
  /** Get a single `Contact`. */
  readonly contactByCreatedByAndAccountId?: Maybe<Contact>
  /** Get a single `Contact`. */
  readonly contactByRowId?: Maybe<Contact>
  /** Reads a single `ContactGroup` using its globally unique `ID`. */
  readonly contactGroup?: Maybe<ContactGroup>
  /** Get a single `ContactGroup`. */
  readonly contactGroupByRowId?: Maybe<ContactGroup>
  /** Reads a single `ContactGroupMember` using its globally unique `ID`. */
  readonly contactGroupMember?: Maybe<ContactGroupMember>
  /** Get a single `ContactGroupMember`. */
  readonly contactGroupMemberByContactGroupIdAndContactId?: Maybe<ContactGroupMember>
  /** Reads a single `Device` using its globally unique `ID`. */
  readonly device?: Maybe<Device>
  /** Get a single `Device`. */
  readonly deviceByCreatedByAndFcmToken?: Maybe<Device>
  /** Get a single `Device`. */
  readonly deviceByRowId?: Maybe<Device>
  /** Reads a single `Event` using its globally unique `ID`. */
  readonly event?: Maybe<Event>
  /** Reads a single `EventApp` using its globally unique `ID`. */
  readonly eventApp?: Maybe<EventApp>
  /** Get a single `EventApp`. */
  readonly eventAppByEventIdAndAppId?: Maybe<EventApp>
  /** Get a single `EventApp`. */
  readonly eventAppByRowId?: Maybe<EventApp>
  /** Returns the event associated with the given attendance ID, unless it is a draft or scheduled and not organized by the invoker. */
  readonly eventByAttendanceId?: Maybe<Event>
  /** Get a single `Event`. */
  readonly eventByCreatedByAndSlug?: Maybe<Event>
  /** Returns the event a general invitation link invites to, also when it is private, unless the link was deleted, the event is a draft or scheduled and not organized by the invoker, or its organizer is involved in a block with the invoker. */
  readonly eventByInvitationLink?: Maybe<Event>
  /** Get a single `Event`. */
  readonly eventByRowId?: Maybe<Event>
  /** Reads a single `EventCategory` using its globally unique `ID`. */
  readonly eventCategory?: Maybe<EventCategory>
  /** Get a single `EventCategory`. */
  readonly eventCategoryByName?: Maybe<EventCategory>
  /** Get a single `EventCategory`. */
  readonly eventCategoryByRowId?: Maybe<EventCategory>
  /** Reads a single `EventCategoryMapping` using its globally unique `ID`. */
  readonly eventCategoryMapping?: Maybe<EventCategoryMapping>
  /** Get a single `EventCategoryMapping`. */
  readonly eventCategoryMappingByEventIdAndCategoryId?: Maybe<EventCategoryMapping>
  /** Reads a single `EventFavorite` using its globally unique `ID`. */
  readonly eventFavorite?: Maybe<EventFavorite>
  /** Get a single `EventFavorite`. */
  readonly eventFavoriteByCreatedByAndEventId?: Maybe<EventFavorite>
  /** Get a single `EventFavorite`. */
  readonly eventFavoriteByRowId?: Maybe<EventFavorite>
  /** Reads a single `EventFormat` using its globally unique `ID`. */
  readonly eventFormat?: Maybe<EventFormat>
  /** Get a single `EventFormat`. */
  readonly eventFormatByName?: Maybe<EventFormat>
  /** Get a single `EventFormat`. */
  readonly eventFormatByRowId?: Maybe<EventFormat>
  /** Reads a single `EventFormatMapping` using its globally unique `ID`. */
  readonly eventFormatMapping?: Maybe<EventFormatMapping>
  /** Get a single `EventFormatMapping`. */
  readonly eventFormatMappingByEventIdAndFormatId?: Maybe<EventFormatMapping>
  /** Add a function that returns the maximum guest count of an accessible event. */
  readonly eventGuestCountMaximum?: Maybe<Scalars['Int']['output']>
  /** Reads a single `EventInvitationLink` using its globally unique `ID`. */
  readonly eventInvitationLink?: Maybe<EventInvitationLink>
  /** Get a single `EventInvitationLink`. */
  readonly eventInvitationLinkByEventId?: Maybe<EventInvitationLink>
  /** Get a single `EventInvitationLink`. */
  readonly eventInvitationLinkByRowId?: Maybe<EventInvitationLink>
  /** Lists public, published (not draft or scheduled), non-archived in-person events within the given radius in meters around the given coordinates, nearest first. Events that have ended are left out unless `include_ended` is true. Following RFC 5545, an event without an end ends at its start. Ordering is fully deterministic, so paginate through results via the GraphQL connection arguments rather than assuming a fixed result size. */
  readonly eventNearby?: Maybe<EventConnection>
  /** Reads a single `EventRecommendation` using its globally unique `ID`. */
  readonly eventRecommendation?: Maybe<EventRecommendation>
  /** Get a single `EventRecommendation`. */
  readonly eventRecommendationByAccountIdAndEventId?: Maybe<EventRecommendation>
  /** Searches events by name and description. Matches by prefix so partial words match as the user types, and falls back to trigram similarity on the name for typo tolerance. Events that have ended are left out unless `include_ended` is true. Following RFC 5545, an event without an end ends at its start. Ordering is fully deterministic, so paginate through results via the GraphQL connection arguments rather than assuming a fixed result size. */
  readonly eventSearch?: Maybe<EventConnection>
  /** Reads a single `EventUpload` using its globally unique `ID`. */
  readonly eventUpload?: Maybe<EventUpload>
  /** Get a single `EventUpload`. */
  readonly eventUploadByEventIdAndUploadId?: Maybe<EventUpload>
  /** Get a single `EventUpload`. */
  readonly eventUploadByRowId?: Maybe<EventUpload>
  /** Reads a single `Friendship` using its globally unique `ID`. */
  readonly friendship?: Maybe<Friendship>
  /** Get a single `Friendship`. */
  readonly friendshipByAAccountIdAndBAccountId?: Maybe<Friendship>
  /** Get a single `Friendship`. */
  readonly friendshipByRowId?: Maybe<Friendship>
  /** Reads a single `Guest` using its globally unique `ID`. */
  readonly guest?: Maybe<Guest>
  /** Get a single `Guest`. */
  readonly guestByEventIdAndContactId?: Maybe<Guest>
  /** Get a single `Guest`. */
  readonly guestByRowId?: Maybe<Guest>
  /** Returns the current guest claims as UUID array. */
  readonly guestClaimArray?: Maybe<
    ReadonlyArray<Maybe<Scalars['UUID']['output']>>
  >
  /** Returns contact ids that are accessible through guests. */
  readonly guestContactIds?: Maybe<GuestContactIdsConnection>
  /** Returns the number of seats taken for an event: each guest plus their approved companions. */
  readonly guestCount?: Maybe<Scalars['Int']['output']>
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  readonly id: Scalars['ID']['output']
  /** Returns the session's account id. */
  readonly invokerAccountId?: Maybe<Scalars['UUID']['output']>
  /** Maps an ISO language code to the corresponding PostgreSQL text search configuration. This function returns the appropriate text search configuration for supported languages, such as "german" for "de" and "english" for "en". If the language code is not explicitly handled, the function defaults to the "simple" configuration, which is a basic tokenizer that does not perform stemming or handle stop words. This ensures that full-text search can work with a wide range of languages even if specific optimizations are not available for some. */
  readonly languageIsoFullTextSearch?: Maybe<Scalars['RegConfig']['output']>
  /** Reads a single `LegalTerm` using its globally unique `ID`. */
  readonly legalTerm?: Maybe<LegalTerm>
  /** Reads a single `LegalTermAcceptance` using its globally unique `ID`. */
  readonly legalTermAcceptance?: Maybe<LegalTermAcceptance>
  /** Get a single `LegalTermAcceptance`. */
  readonly legalTermAcceptanceByRowId?: Maybe<LegalTermAcceptance>
  /** Get a single `LegalTerm`. */
  readonly legalTermByLanguageAndVersion?: Maybe<LegalTerm>
  /** Get a single `LegalTerm`. */
  readonly legalTermByRowId?: Maybe<LegalTerm>
  /** Fetches an object given its globally unique `ID`. */
  readonly node?: Maybe<Node>
  /** Reads a single `PreferenceEventCategory` using its globally unique `ID`. */
  readonly preferenceEventCategory?: Maybe<PreferenceEventCategory>
  /** Get a single `PreferenceEventCategory`. */
  readonly preferenceEventCategoryByAccountIdAndCategoryId?: Maybe<PreferenceEventCategory>
  /** Get a single `PreferenceEventCategory`. */
  readonly preferenceEventCategoryByRowId?: Maybe<PreferenceEventCategory>
  /** Reads a single `PreferenceEventFormat` using its globally unique `ID`. */
  readonly preferenceEventFormat?: Maybe<PreferenceEventFormat>
  /** Get a single `PreferenceEventFormat`. */
  readonly preferenceEventFormatByAccountIdAndFormatId?: Maybe<PreferenceEventFormat>
  /** Get a single `PreferenceEventFormat`. */
  readonly preferenceEventFormatByRowId?: Maybe<PreferenceEventFormat>
  /** Reads a single `PreferenceEventLocation` using its globally unique `ID`. */
  readonly preferenceEventLocation?: Maybe<PreferenceEventLocation>
  /** Get a single `PreferenceEventLocation`. */
  readonly preferenceEventLocationByCreatedByAndLocationAndRadius?: Maybe<PreferenceEventLocation>
  /** Get a single `PreferenceEventLocation`. */
  readonly preferenceEventLocationByRowId?: Maybe<PreferenceEventLocation>
  /** Reads a single `PreferenceEventSize` using its globally unique `ID`. */
  readonly preferenceEventSize?: Maybe<PreferenceEventSize>
  /** Get a single `PreferenceEventSize`. */
  readonly preferenceEventSizeByAccountIdAndEventSize?: Maybe<PreferenceEventSize>
  /** Get a single `PreferenceEventSize`. */
  readonly preferenceEventSizeByRowId?: Maybe<PreferenceEventSize>
  /** Reads a single `ProfilePicture` using its globally unique `ID`. */
  readonly profilePicture?: Maybe<ProfilePicture>
  /** Get a single `ProfilePicture`. */
  readonly profilePictureByAccountId?: Maybe<ProfilePicture>
  /** Get a single `ProfilePicture`. */
  readonly profilePictureByRowId?: Maybe<ProfilePicture>
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  readonly query: Query
  /** Reads a single `Report` using its globally unique `ID`. */
  readonly report?: Maybe<Report>
  /** Get a single `Report`. */
  readonly reportByCreatedByAndTargetAccountIdAndTargetEventIdAndTargetUploadId?: Maybe<Report>
  /** Get a single `Report`. */
  readonly reportByRowId?: Maybe<Report>
  /** Reads a single `Upload` using its globally unique `ID`. */
  readonly upload?: Maybe<Upload>
  /** Get a single `Upload`. */
  readonly uploadByRowId?: Maybe<Upload>
  /** Get a single `Upload`. */
  readonly uploadByStorageKey?: Maybe<Upload>
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
  query?: InputMaybe<Scalars['String']['input']>
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
  orderBy?: InputMaybe<ReadonlyArray<AccountBlockOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllAccountSocialNetworksArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<AccountSocialNetworkCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<AccountSocialNetworkOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllAccountsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<AccountCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<AccountOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllAchievementsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<AchievementCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<AchievementOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllAddressesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<AddressCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<AddressOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllAppsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<AppCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<AppOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllAttendancesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<AttendanceCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<AttendanceOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllContactGroupMembersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<ContactGroupMemberCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<ContactGroupMemberOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllContactGroupsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<ContactGroupCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<ContactGroupOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllContactsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<ContactCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<ContactOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllDevicesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<DeviceCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<DeviceOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllEventAppsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventAppCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<EventAppOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllEventCategoriesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventCategoryCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<EventCategoryOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllEventCategoryMappingsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventCategoryMappingCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<EventCategoryMappingOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllEventFavoritesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventFavoriteCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<EventFavoriteOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllEventFormatMappingsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventFormatMappingCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<EventFormatMappingOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllEventFormatsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventFormatCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<EventFormatOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllEventInvitationLinksArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventInvitationLinkCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<EventInvitationLinkOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllEventRecommendationsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventRecommendationCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<EventRecommendationOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllEventUploadsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventUploadCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<EventUploadOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllEventsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<EventOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllFriendshipsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<FriendshipCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<FriendshipOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllGuestsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<GuestCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<GuestOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllLegalTermAcceptancesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<LegalTermAcceptanceCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<LegalTermAcceptanceOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllLegalTermsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<LegalTermCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<LegalTermOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllPreferenceEventCategoriesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<PreferenceEventCategoryCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<PreferenceEventCategoryOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllPreferenceEventFormatsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<PreferenceEventFormatCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<PreferenceEventFormatOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllPreferenceEventLocationsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<PreferenceEventLocationCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<PreferenceEventLocationOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllPreferenceEventSizesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<PreferenceEventSizeCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<PreferenceEventSizeOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllProfilePicturesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<ProfilePictureCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<ProfilePictureOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllReportsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<ReportCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<ReportOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllUploadsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<UploadCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<UploadOrderBy>>
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
export type QueryContactGroupArgs = {
  id: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryContactGroupByRowIdArgs = {
  rowId: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryContactGroupMemberArgs = {
  id: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryContactGroupMemberByContactGroupIdAndContactIdArgs = {
  contactGroupId: Scalars['UUID']['input']
  contactId: Scalars['UUID']['input']
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
export type QueryEventByInvitationLinkArgs = {
  invitationLinkId: Scalars['UUID']['input']
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
export type QueryEventInvitationLinkArgs = {
  id: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventInvitationLinkByEventIdArgs = {
  eventId: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventInvitationLinkByRowIdArgs = {
  rowId: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventNearbyArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  includeEnded?: InputMaybe<Scalars['Boolean']['input']>
  latitude?: InputMaybe<Scalars['Float']['input']>
  longitude?: InputMaybe<Scalars['Float']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  radius?: InputMaybe<Scalars['Float']['input']>
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
  includeEnded?: InputMaybe<Scalars['Boolean']['input']>
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
  readonly __typename?: 'Report'
  /** Reads a single `Account` that is related to this `Report`. */
  readonly accountByCreatedBy?: Maybe<Account>
  /** Reads a single `Account` that is related to this `Report`. */
  readonly accountByTargetAccountId?: Maybe<Account>
  /** Timestamp of when the report was created, defaults to the current timestamp. */
  readonly createdAt: Scalars['Datetime']['output']
  /** The ID of the user who created the report. */
  readonly createdBy: Scalars['UUID']['output']
  /** Reads a single `Event` that is related to this `Report`. */
  readonly eventByTargetEventId?: Maybe<Event>
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly id: Scalars['ID']['output']
  /** The reason for the report, provided by the reporting user. Must be non-empty and not exceed 2,000 characters. */
  readonly reason: Scalars['String']['output']
  /** Unique identifier for the report, generated randomly using UUIDs. */
  readonly rowId: Scalars['UUID']['output']
  /** The ID of the account being reported, if applicable. */
  readonly targetAccountId?: Maybe<Scalars['UUID']['output']>
  /** The ID of the event being reported, if applicable. */
  readonly targetEventId?: Maybe<Scalars['UUID']['output']>
  /** The ID of the upload being reported, if applicable. */
  readonly targetUploadId?: Maybe<Scalars['UUID']['output']>
  /** Reads a single `Upload` that is related to this `Report`. */
  readonly uploadByTargetUploadId?: Maybe<Upload>
}

/** A condition to be used against `Report` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type ReportCondition = {
  /** Checks for equality with the object’s `createdBy` field. */
  readonly createdBy?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `rowId` field. */
  readonly rowId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `targetAccountId` field. */
  readonly targetAccountId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `targetEventId` field. */
  readonly targetEventId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `targetUploadId` field. */
  readonly targetUploadId?: InputMaybe<Scalars['UUID']['input']>
}

/** A connection to a list of `Report` values. */
export type ReportConnection = {
  readonly __typename?: 'ReportConnection'
  /** A list of edges which contains the `Report` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<ReportEdge>
  /** A list of `Report` objects. */
  readonly nodes: ReadonlyArray<Report>
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo
  /** The count of *all* `Report` you could get from the connection. */
  readonly totalCount: Scalars['Int']['output']
}

/** A `Report` edge in the connection. */
export type ReportEdge = {
  readonly __typename?: 'ReportEdge'
  /** A cursor for use in pagination. */
  readonly cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `Report` at the end of the edge. */
  readonly node: Report
}

/** An input for mutations affecting `Report` */
export type ReportInput = {
  /** The ID of the user who created the report. */
  readonly createdBy: Scalars['UUID']['input']
  /** The reason for the report, provided by the reporting user. Must be non-empty and not exceed 2,000 characters. */
  readonly reason: Scalars['String']['input']
  /** The ID of the account being reported, if applicable. */
  readonly targetAccountId?: InputMaybe<Scalars['UUID']['input']>
  /** The ID of the event being reported, if applicable. */
  readonly targetEventId?: InputMaybe<Scalars['UUID']['input']>
  /** The ID of the upload being reported, if applicable. */
  readonly targetUploadId?: InputMaybe<Scalars['UUID']['input']>
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
  readonly accountPatch: AccountPatch
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The account's internal id. */
  readonly rowId: Scalars['UUID']['input']
}

/** All input for the `updateAccountByUsername` mutation. */
export type UpdateAccountByUsernameInput = {
  /** An object where the defined keys will be set on the `Account` being updated. */
  readonly accountPatch: AccountPatch
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The account's username. Must be alphanumeric with hyphens and not exceed 100 characters. */
  readonly username: Scalars['String']['input']
}

/** All input for the `updateAccount` mutation. */
export type UpdateAccountInput = {
  /** An object where the defined keys will be set on the `Account` being updated. */
  readonly accountPatch: AccountPatch
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `Account` to be updated. */
  readonly id: Scalars['ID']['input']
}

/** The output of our update `Account` mutation. */
export type UpdateAccountPayload = {
  readonly __typename?: 'UpdateAccountPayload'
  /** The `Account` that was updated by this mutation. */
  readonly account?: Maybe<Account>
  /** An edge for our `Account`. May be used by Relay 1. */
  readonly accountEdge?: Maybe<AccountEdge>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
}

/** The output of our update `Account` mutation. */
export type UpdateAccountPayloadAccountEdgeArgs = {
  orderBy?: ReadonlyArray<AccountOrderBy>
}

/** All input for the `updateAccountSocialNetworkByAccountIdAndSocialNetwork` mutation. */
export type UpdateAccountSocialNetworkByAccountIdAndSocialNetworkInput = {
  /** The unique identifier of the account. */
  readonly accountId: Scalars['UUID']['input']
  /** An object where the defined keys will be set on the `AccountSocialNetwork` being updated. */
  readonly accountSocialNetworkPatch: AccountSocialNetworkPatch
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The social network to which the account is linked. */
  readonly socialNetwork: SocialNetwork
}

/** All input for the `updateAccountSocialNetwork` mutation. */
export type UpdateAccountSocialNetworkInput = {
  /** An object where the defined keys will be set on the `AccountSocialNetwork` being updated. */
  readonly accountSocialNetworkPatch: AccountSocialNetworkPatch
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `AccountSocialNetwork` to be updated. */
  readonly id: Scalars['ID']['input']
}

/** The output of our update `AccountSocialNetwork` mutation. */
export type UpdateAccountSocialNetworkPayload = {
  readonly __typename?: 'UpdateAccountSocialNetworkPayload'
  /** The `AccountSocialNetwork` that was updated by this mutation. */
  readonly accountSocialNetwork?: Maybe<AccountSocialNetwork>
  /** An edge for our `AccountSocialNetwork`. May be used by Relay 1. */
  readonly accountSocialNetworkEdge?: Maybe<AccountSocialNetworkEdge>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
}

/** The output of our update `AccountSocialNetwork` mutation. */
export type UpdateAccountSocialNetworkPayloadAccountSocialNetworkEdgeArgs = {
  orderBy?: ReadonlyArray<AccountSocialNetworkOrderBy>
}

/** All input for the `updateAddressByRowId` mutation. */
export type UpdateAddressByRowIdInput = {
  /** An object where the defined keys will be set on the `Address` being updated. */
  readonly addressPatch: AddressPatch
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Primary key, uniquely identifies each address. */
  readonly rowId: Scalars['UUID']['input']
}

/** All input for the `updateAddress` mutation. */
export type UpdateAddressInput = {
  /** An object where the defined keys will be set on the `Address` being updated. */
  readonly addressPatch: AddressPatch
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `Address` to be updated. */
  readonly id: Scalars['ID']['input']
}

/** The output of our update `Address` mutation. */
export type UpdateAddressPayload = {
  readonly __typename?: 'UpdateAddressPayload'
  /** The `Address` that was updated by this mutation. */
  readonly address?: Maybe<Address>
  /** An edge for our `Address`. May be used by Relay 1. */
  readonly addressEdge?: Maybe<AddressEdge>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
}

/** The output of our update `Address` mutation. */
export type UpdateAddressPayloadAddressEdgeArgs = {
  orderBy?: ReadonlyArray<AddressOrderBy>
}

/** All input for the `updateAttendanceByGuestId` mutation. */
export type UpdateAttendanceByGuestIdInput = {
  /** An object where the defined keys will be set on the `Attendance` being updated. */
  readonly attendancePatch: AttendancePatch
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Who this entry is for. */
  readonly guestId: Scalars['UUID']['input']
}

/** All input for the `updateAttendanceByRowId` mutation. */
export type UpdateAttendanceByRowIdInput = {
  /** An object where the defined keys will be set on the `Attendance` being updated. */
  readonly attendancePatch: AttendancePatch
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** A unique reference for this entry. */
  readonly rowId: Scalars['UUID']['input']
}

/** All input for the `updateAttendance` mutation. */
export type UpdateAttendanceInput = {
  /** An object where the defined keys will be set on the `Attendance` being updated. */
  readonly attendancePatch: AttendancePatch
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `Attendance` to be updated. */
  readonly id: Scalars['ID']['input']
}

/** The output of our update `Attendance` mutation. */
export type UpdateAttendancePayload = {
  readonly __typename?: 'UpdateAttendancePayload'
  /** The `Attendance` that was updated by this mutation. */
  readonly attendance?: Maybe<Attendance>
  /** An edge for our `Attendance`. May be used by Relay 1. */
  readonly attendanceEdge?: Maybe<AttendanceEdge>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
}

/** The output of our update `Attendance` mutation. */
export type UpdateAttendancePayloadAttendanceEdgeArgs = {
  orderBy?: ReadonlyArray<AttendanceOrderBy>
}

/** All input for the `updateContactByCreatedByAndAccountId` mutation. */
export type UpdateContactByCreatedByAndAccountIdInput = {
  /** Optional reference to an associated account. */
  readonly accountId: Scalars['UUID']['input']
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `Contact` being updated. */
  readonly contactPatch: ContactPatch
  /** Reference to the account that created this contact. Enforces cascading deletion. */
  readonly createdBy: Scalars['UUID']['input']
}

/** All input for the `updateContactByRowId` mutation. */
export type UpdateContactByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `Contact` being updated. */
  readonly contactPatch: ContactPatch
  /** Primary key, uniquely identifies each contact. */
  readonly rowId: Scalars['UUID']['input']
}

/** All input for the `updateContactGroupByRowId` mutation. */
export type UpdateContactGroupByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `ContactGroup` being updated. */
  readonly contactGroupPatch: ContactGroupPatch
  /** Primary key, uniquely identifies each contact group. */
  readonly rowId: Scalars['UUID']['input']
}

/** All input for the `updateContactGroup` mutation. */
export type UpdateContactGroupInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `ContactGroup` being updated. */
  readonly contactGroupPatch: ContactGroupPatch
  /** The globally unique `ID` which will identify a single `ContactGroup` to be updated. */
  readonly id: Scalars['ID']['input']
}

/** The output of our update `ContactGroup` mutation. */
export type UpdateContactGroupPayload = {
  readonly __typename?: 'UpdateContactGroupPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `ContactGroup` that was updated by this mutation. */
  readonly contactGroup?: Maybe<ContactGroup>
  /** An edge for our `ContactGroup`. May be used by Relay 1. */
  readonly contactGroupEdge?: Maybe<ContactGroupEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
}

/** The output of our update `ContactGroup` mutation. */
export type UpdateContactGroupPayloadContactGroupEdgeArgs = {
  orderBy?: ReadonlyArray<ContactGroupOrderBy>
}

/** All input for the `updateContact` mutation. */
export type UpdateContactInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `Contact` being updated. */
  readonly contactPatch: ContactPatch
  /** The globally unique `ID` which will identify a single `Contact` to be updated. */
  readonly id: Scalars['ID']['input']
}

/** The output of our update `Contact` mutation. */
export type UpdateContactPayload = {
  readonly __typename?: 'UpdateContactPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `Contact` that was updated by this mutation. */
  readonly contact?: Maybe<Contact>
  /** An edge for our `Contact`. May be used by Relay 1. */
  readonly contactEdge?: Maybe<ContactEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
}

/** The output of our update `Contact` mutation. */
export type UpdateContactPayloadContactEdgeArgs = {
  orderBy?: ReadonlyArray<ContactOrderBy>
}

/** All input for the `updateDeviceByCreatedByAndFcmToken` mutation. */
export type UpdateDeviceByCreatedByAndFcmTokenInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Reference to the account that created the device. */
  readonly createdBy: Scalars['UUID']['input']
  /** An object where the defined keys will be set on the `Device` being updated. */
  readonly devicePatch: DevicePatch
  /** The Firebase Cloud Messaging token of the device that's used to deliver notifications. Must be non-empty and not exceed 300 characters. */
  readonly fcmToken: Scalars['String']['input']
}

/** All input for the `updateDeviceByRowId` mutation. */
export type UpdateDeviceByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `Device` being updated. */
  readonly devicePatch: DevicePatch
  /** The internal id of the device. */
  readonly rowId: Scalars['UUID']['input']
}

/** All input for the `updateDevice` mutation. */
export type UpdateDeviceInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `Device` being updated. */
  readonly devicePatch: DevicePatch
  /** The globally unique `ID` which will identify a single `Device` to be updated. */
  readonly id: Scalars['ID']['input']
}

/** The output of our update `Device` mutation. */
export type UpdateDevicePayload = {
  readonly __typename?: 'UpdateDevicePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `Device` that was updated by this mutation. */
  readonly device?: Maybe<Device>
  /** An edge for our `Device`. May be used by Relay 1. */
  readonly deviceEdge?: Maybe<DeviceEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
}

/** The output of our update `Device` mutation. */
export type UpdateDevicePayloadDeviceEdgeArgs = {
  orderBy?: ReadonlyArray<DeviceOrderBy>
}

/** All input for the `updateEventByCreatedByAndSlug` mutation. */
export type UpdateEventByCreatedByAndSlugInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The event creator's id. */
  readonly createdBy: Scalars['UUID']['input']
  /** An object where the defined keys will be set on the `Event` being updated. */
  readonly eventPatch: EventPatch
  /** The event's name, slugified. Must be alphanumeric with hyphens and not exceed 100 characters. */
  readonly slug: Scalars['String']['input']
}

/** All input for the `updateEventByRowId` mutation. */
export type UpdateEventByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `Event` being updated. */
  readonly eventPatch: EventPatch
  /** The event's internal id. */
  readonly rowId: Scalars['UUID']['input']
}

/** All input for the `updateEvent` mutation. */
export type UpdateEventInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `Event` being updated. */
  readonly eventPatch: EventPatch
  /** The globally unique `ID` which will identify a single `Event` to be updated. */
  readonly id: Scalars['ID']['input']
}

/** The output of our update `Event` mutation. */
export type UpdateEventPayload = {
  readonly __typename?: 'UpdateEventPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `Event` that was updated by this mutation. */
  readonly event?: Maybe<Event>
  /** An edge for our `Event`. May be used by Relay 1. */
  readonly eventEdge?: Maybe<EventEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
}

/** The output of our update `Event` mutation. */
export type UpdateEventPayloadEventEdgeArgs = {
  orderBy?: ReadonlyArray<EventOrderBy>
}

/** All input for the `updateFriendshipByAAccountIdAndBAccountId` mutation. */
export type UpdateFriendshipByAAccountIdAndBAccountIdInput = {
  /** The 'left' side of the friend relation. It must be lexically less than the 'right' side. */
  readonly aAccountId: Scalars['UUID']['input']
  /** The 'right' side of the friend relation. It must be lexically greater than the 'left' side. */
  readonly bAccountId: Scalars['UUID']['input']
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `Friendship` being updated. */
  readonly friendshipPatch: FriendshipPatch
}

/** All input for the `updateFriendshipByRowId` mutation. */
export type UpdateFriendshipByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `Friendship` being updated. */
  readonly friendshipPatch: FriendshipPatch
  /** The friend relation's internal id. */
  readonly rowId: Scalars['UUID']['input']
}

/** All input for the `updateFriendship` mutation. */
export type UpdateFriendshipInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `Friendship` being updated. */
  readonly friendshipPatch: FriendshipPatch
  /** The globally unique `ID` which will identify a single `Friendship` to be updated. */
  readonly id: Scalars['ID']['input']
}

/** The output of our update `Friendship` mutation. */
export type UpdateFriendshipPayload = {
  readonly __typename?: 'UpdateFriendshipPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `Friendship` that was updated by this mutation. */
  readonly friendship?: Maybe<Friendship>
  /** An edge for our `Friendship`. May be used by Relay 1. */
  readonly friendshipEdge?: Maybe<FriendshipEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
}

/** The output of our update `Friendship` mutation. */
export type UpdateFriendshipPayloadFriendshipEdgeArgs = {
  orderBy?: ReadonlyArray<FriendshipOrderBy>
}

/** All input for the `updateGuestByEventIdAndContactId` mutation. */
export type UpdateGuestByEventIdAndContactIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The internal id of the guest's contact. */
  readonly contactId: Scalars['UUID']['input']
  /** The internal id of the guest's event. */
  readonly eventId: Scalars['UUID']['input']
  /** An object where the defined keys will be set on the `Guest` being updated. */
  readonly guestPatch: GuestPatch
}

/** All input for the `updateGuestByRowId` mutation. */
export type UpdateGuestByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `Guest` being updated. */
  readonly guestPatch: GuestPatch
  /** The guest's internal id. */
  readonly rowId: Scalars['UUID']['input']
}

/** All input for the `updateGuest` mutation. */
export type UpdateGuestInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `Guest` being updated. */
  readonly guestPatch: GuestPatch
  /** The globally unique `ID` which will identify a single `Guest` to be updated. */
  readonly id: Scalars['ID']['input']
}

/** The output of our update `Guest` mutation. */
export type UpdateGuestPayload = {
  readonly __typename?: 'UpdateGuestPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `Guest` that was updated by this mutation. */
  readonly guest?: Maybe<Guest>
  /** An edge for our `Guest`. May be used by Relay 1. */
  readonly guestEdge?: Maybe<GuestEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
}

/** The output of our update `Guest` mutation. */
export type UpdateGuestPayloadGuestEdgeArgs = {
  orderBy?: ReadonlyArray<GuestOrderBy>
}

/** All input for the `updateProfilePictureByAccountId` mutation. */
export type UpdateProfilePictureByAccountIdInput = {
  /** The account's id. */
  readonly accountId: Scalars['UUID']['input']
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `ProfilePicture` being updated. */
  readonly profilePicturePatch: ProfilePicturePatch
}

/** All input for the `updateProfilePictureByRowId` mutation. */
export type UpdateProfilePictureByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `ProfilePicture` being updated. */
  readonly profilePicturePatch: ProfilePicturePatch
  /** The profile picture's internal id. */
  readonly rowId: Scalars['UUID']['input']
}

/** All input for the `updateProfilePicture` mutation. */
export type UpdateProfilePictureInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `ProfilePicture` to be updated. */
  readonly id: Scalars['ID']['input']
  /** An object where the defined keys will be set on the `ProfilePicture` being updated. */
  readonly profilePicturePatch: ProfilePicturePatch
}

/** The output of our update `ProfilePicture` mutation. */
export type UpdateProfilePicturePayload = {
  readonly __typename?: 'UpdateProfilePicturePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `ProfilePicture` that was updated by this mutation. */
  readonly profilePicture?: Maybe<ProfilePicture>
  /** An edge for our `ProfilePicture`. May be used by Relay 1. */
  readonly profilePictureEdge?: Maybe<ProfilePictureEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
}

/** The output of our update `ProfilePicture` mutation. */
export type UpdateProfilePicturePayloadProfilePictureEdgeArgs = {
  orderBy?: ReadonlyArray<ProfilePictureOrderBy>
}

/** All input for the `updateUploadByRowId` mutation. */
export type UpdateUploadByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The upload's internal id. */
  readonly rowId: Scalars['UUID']['input']
  /** An object where the defined keys will be set on the `Upload` being updated. */
  readonly uploadPatch: UploadPatch
}

/** All input for the `updateUploadByStorageKey` mutation. */
export type UpdateUploadByStorageKeyInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The upload's storage key. */
  readonly storageKey: Scalars['String']['input']
  /** An object where the defined keys will be set on the `Upload` being updated. */
  readonly uploadPatch: UploadPatch
}

/** All input for the `updateUpload` mutation. */
export type UpdateUploadInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `Upload` to be updated. */
  readonly id: Scalars['ID']['input']
  /** An object where the defined keys will be set on the `Upload` being updated. */
  readonly uploadPatch: UploadPatch
}

/** The output of our update `Upload` mutation. */
export type UpdateUploadPayload = {
  readonly __typename?: 'UpdateUploadPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>
  /** The `Upload` that was updated by this mutation. */
  readonly upload?: Maybe<Upload>
  /** An edge for our `Upload`. May be used by Relay 1. */
  readonly uploadEdge?: Maybe<UploadEdge>
}

/** The output of our update `Upload` mutation. */
export type UpdateUploadPayloadUploadEdgeArgs = {
  orderBy?: ReadonlyArray<UploadOrderBy>
}

/** An upload. */
export type Upload = Node & {
  readonly __typename?: 'Upload'
  /** Reads a single `Account` that is related to this `Upload`. */
  readonly accountByCreatedBy?: Maybe<Account>
  /** Timestamp of when the upload was created, defaults to the current timestamp. */
  readonly createdAt: Scalars['Datetime']['output']
  /** The uploader's account id. */
  readonly createdBy: Scalars['UUID']['output']
  /** Reads and enables pagination through a set of `EventUpload`. */
  readonly eventUploadsByUploadId: EventUploadConnection
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly id: Scalars['ID']['output']
  /** The name of the uploaded file. Must be non-empty and not exceed 300 characters. */
  readonly name?: Maybe<Scalars['String']['output']>
  /** Reads and enables pagination through a set of `ProfilePicture`. */
  readonly profilePicturesByUploadId: ProfilePictureConnection
  /** Reads and enables pagination through a set of `Report`. */
  readonly reportsByTargetUploadId: ReportConnection
  /** The upload's internal id. */
  readonly rowId: Scalars['UUID']['output']
  /** The upload's size in bytes. */
  readonly sizeByte: Scalars['BigInt']['output']
  /** The upload's storage key. */
  readonly storageKey?: Maybe<Scalars['String']['output']>
  /** The type of the uploaded file, default is 'image'. */
  readonly type: Scalars['String']['output']
}

/** An upload. */
export type UploadEventUploadsByUploadIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventUploadCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<EventUploadOrderBy>>
}

/** An upload. */
export type UploadProfilePicturesByUploadIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<ProfilePictureCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<ProfilePictureOrderBy>>
}

/** An upload. */
export type UploadReportsByTargetUploadIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<ReportCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<ReportOrderBy>>
}

/** A condition to be used against `Upload` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type UploadCondition = {
  /** Checks for equality with the object’s `createdBy` field. */
  readonly createdBy?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `rowId` field. */
  readonly rowId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `storageKey` field. */
  readonly storageKey?: InputMaybe<Scalars['String']['input']>
}

/** A connection to a list of `Upload` values. */
export type UploadConnection = {
  readonly __typename?: 'UploadConnection'
  /** A list of edges which contains the `Upload` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<UploadEdge>
  /** A list of `Upload` objects. */
  readonly nodes: ReadonlyArray<Upload>
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo
  /** The count of *all* `Upload` you could get from the connection. */
  readonly totalCount: Scalars['Int']['output']
}

/** A `Upload` edge in the connection. */
export type UploadEdge = {
  readonly __typename?: 'UploadEdge'
  /** A cursor for use in pagination. */
  readonly cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `Upload` at the end of the edge. */
  readonly node: Upload
}

/** An input for mutations affecting `Upload` */
export type UploadInput = {
  /** The uploader's account id. */
  readonly createdBy: Scalars['UUID']['input']
  /** The name of the uploaded file. Must be non-empty and not exceed 300 characters. */
  readonly name?: InputMaybe<Scalars['String']['input']>
  /** The upload's size in bytes. */
  readonly sizeByte: Scalars['BigInt']['input']
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
  readonly createdBy?: InputMaybe<Scalars['UUID']['input']>
  /** The name of the uploaded file. Must be non-empty and not exceed 300 characters. */
  readonly name?: InputMaybe<Scalars['String']['input']>
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
  ContactGroup?: (data: WithTypename<ContactGroup>) => null | string
  ContactGroupConnection?: (
    data: WithTypename<ContactGroupConnection>,
  ) => null | string
  ContactGroupEdge?: (data: WithTypename<ContactGroupEdge>) => null | string
  ContactGroupMember?: (data: WithTypename<ContactGroupMember>) => null | string
  ContactGroupMemberConnection?: (
    data: WithTypename<ContactGroupMemberConnection>,
  ) => null | string
  ContactGroupMemberEdge?: (
    data: WithTypename<ContactGroupMemberEdge>,
  ) => null | string
  ContactMergePayload?: (
    data: WithTypename<ContactMergePayload>,
  ) => null | string
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
  CreateContactGroupMemberPayload?: (
    data: WithTypename<CreateContactGroupMemberPayload>,
  ) => null | string
  CreateContactGroupMembersPayload?: (
    data: WithTypename<CreateContactGroupMembersPayload>,
  ) => null | string
  CreateContactGroupPayload?: (
    data: WithTypename<CreateContactGroupPayload>,
  ) => null | string
  CreateContactGroupsPayload?: (
    data: WithTypename<CreateContactGroupsPayload>,
  ) => null | string
  CreateContactPayload?: (
    data: WithTypename<CreateContactPayload>,
  ) => null | string
  CreateContactsPayload?: (
    data: WithTypename<CreateContactsPayload>,
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
  CreateEventInvitationLinkPayload?: (
    data: WithTypename<CreateEventInvitationLinkPayload>,
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
  DeleteContactGroupMemberPayload?: (
    data: WithTypename<DeleteContactGroupMemberPayload>,
  ) => null | string
  DeleteContactGroupPayload?: (
    data: WithTypename<DeleteContactGroupPayload>,
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
  DeleteEventInvitationLinkPayload?: (
    data: WithTypename<DeleteEventInvitationLinkPayload>,
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
  EventInvitationLink?: (
    data: WithTypename<EventInvitationLink>,
  ) => null | string
  EventInvitationLinkConnection?: (
    data: WithTypename<EventInvitationLinkConnection>,
  ) => null | string
  EventInvitationLinkEdge?: (
    data: WithTypename<EventInvitationLinkEdge>,
  ) => null | string
  EventInvitationLinkRedeemPayload?: (
    data: WithTypename<EventInvitationLinkRedeemPayload>,
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
  InvitePayload?: (data: WithTypename<InvitePayload>) => null | string
  JwtCreatePayload?: (data: WithTypename<JwtCreatePayload>) => null | string
  JwtUpdateAttendanceAddPayload?: (
    data: WithTypename<JwtUpdateAttendanceAddPayload>,
  ) => null | string
  JwtUpdateGuestAddPayload?: (
    data: WithTypename<JwtUpdateGuestAddPayload>,
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
  UpdateContactGroupPayload?: (
    data: WithTypename<UpdateContactGroupPayload>,
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
      Scalars['BigInt']['output'] | string
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
    allContactGroupMembers?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllContactGroupMembersArgs,
      WithTypename<ContactGroupMemberConnection> | string
    >
    allContactGroups?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllContactGroupsArgs,
      WithTypename<ContactGroupConnection> | string
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
    allEventInvitationLinks?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllEventInvitationLinksArgs,
      WithTypename<EventInvitationLinkConnection> | string
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
      Array<Scalars['UUID']['output'] | string>
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
    contactGroup?: GraphCacheResolver<
      WithTypename<Query>,
      QueryContactGroupArgs,
      WithTypename<ContactGroup> | string
    >
    contactGroupByRowId?: GraphCacheResolver<
      WithTypename<Query>,
      QueryContactGroupByRowIdArgs,
      WithTypename<ContactGroup> | string
    >
    contactGroupMember?: GraphCacheResolver<
      WithTypename<Query>,
      QueryContactGroupMemberArgs,
      WithTypename<ContactGroupMember> | string
    >
    contactGroupMemberByContactGroupIdAndContactId?: GraphCacheResolver<
      WithTypename<Query>,
      QueryContactGroupMemberByContactGroupIdAndContactIdArgs,
      WithTypename<ContactGroupMember> | string
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
    eventByInvitationLink?: GraphCacheResolver<
      WithTypename<Query>,
      QueryEventByInvitationLinkArgs,
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
      Scalars['Int']['output'] | string
    >
    eventInvitationLink?: GraphCacheResolver<
      WithTypename<Query>,
      QueryEventInvitationLinkArgs,
      WithTypename<EventInvitationLink> | string
    >
    eventInvitationLinkByEventId?: GraphCacheResolver<
      WithTypename<Query>,
      QueryEventInvitationLinkByEventIdArgs,
      WithTypename<EventInvitationLink> | string
    >
    eventInvitationLinkByRowId?: GraphCacheResolver<
      WithTypename<Query>,
      QueryEventInvitationLinkByRowIdArgs,
      WithTypename<EventInvitationLink> | string
    >
    eventNearby?: GraphCacheResolver<
      WithTypename<Query>,
      QueryEventNearbyArgs,
      WithTypename<EventConnection> | string
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
      Array<Scalars['UUID']['output'] | string>
    >
    guestContactIds?: GraphCacheResolver<
      WithTypename<Query>,
      QueryGuestContactIdsArgs,
      WithTypename<GuestContactIdsConnection> | string
    >
    guestCount?: GraphCacheResolver<
      WithTypename<Query>,
      QueryGuestCountArgs,
      Scalars['Int']['output'] | string
    >
    id?: GraphCacheResolver<
      WithTypename<Query>,
      Record<string, never>,
      Scalars['ID']['output'] | string
    >
    invokerAccountId?: GraphCacheResolver<
      WithTypename<Query>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
    >
    languageIsoFullTextSearch?: GraphCacheResolver<
      WithTypename<Query>,
      QueryLanguageIsoFullTextSearchArgs,
      Scalars['RegConfig']['output'] | string
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
      | WithTypename<ContactGroup>
      | WithTypename<ContactGroupMember>
      | WithTypename<Device>
      | WithTypename<Event>
      | WithTypename<EventApp>
      | WithTypename<EventCategory>
      | WithTypename<EventCategoryMapping>
      | WithTypename<EventFavorite>
      | WithTypename<EventFormat>
      | WithTypename<EventFormatMapping>
      | WithTypename<EventInvitationLink>
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
    contactGroupsByCreatedBy?: GraphCacheResolver<
      WithTypename<Account>,
      AccountContactGroupsByCreatedByArgs,
      WithTypename<ContactGroupConnection> | string
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
      Scalars['String']['output'] | string
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
    displayName?: GraphCacheResolver<
      WithTypename<Account>,
      Record<string, never>,
      Scalars['String']['output'] | string
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
      Scalars['ID']['output'] | string
    >
    imprintUrl?: GraphCacheResolver<
      WithTypename<Account>,
      Record<string, never>,
      Scalars['String']['output'] | string
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
      Scalars['UUID']['output'] | string
    >
    uploadsByCreatedBy?: GraphCacheResolver<
      WithTypename<Account>,
      AccountUploadsByCreatedByArgs,
      WithTypename<UploadConnection> | string
    >
    username?: GraphCacheResolver<
      WithTypename<Account>,
      Record<string, never>,
      Scalars['String']['output'] | string
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
      Scalars['UUID']['output'] | string
    >
    createdAt?: GraphCacheResolver<
      WithTypename<AccountBlock>,
      Record<string, never>,
      Scalars['Datetime']['output'] | string
    >
    createdBy?: GraphCacheResolver<
      WithTypename<AccountBlock>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
    >
    id?: GraphCacheResolver<
      WithTypename<AccountBlock>,
      Record<string, never>,
      Scalars['ID']['output'] | string
    >
    rowId?: GraphCacheResolver<
      WithTypename<AccountBlock>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
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
      Scalars['Int']['output'] | string
    >
  }
  AccountBlockAccountsEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<AccountBlockAccountsEdge>,
      Record<string, never>,
      Scalars['Cursor']['output'] | string
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
      Scalars['UUID']['output'] | string
    >
    storageKey?: GraphCacheResolver<
      WithTypename<AccountBlockAccountsRecord>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    username?: GraphCacheResolver<
      WithTypename<AccountBlockAccountsRecord>,
      Record<string, never>,
      Scalars['String']['output'] | string
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
      Scalars['Int']['output'] | string
    >
  }
  AccountBlockEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<AccountBlockEdge>,
      Record<string, never>,
      Scalars['Cursor']['output'] | string
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
      Scalars['Int']['output'] | string
    >
  }
  AccountDeletePayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<AccountDeletePayload>,
      Record<string, never>,
      Scalars['String']['output'] | string
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
      Scalars['Cursor']['output'] | string
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
      Scalars['String']['output'] | string
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
      Scalars['String']['output'] | string
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
      Scalars['String']['output'] | string
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
      Scalars['String']['output'] | string
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
      Scalars['String']['output'] | string
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
      Scalars['String']['output'] | string
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
      Scalars['UUID']['output'] | string
    >
    id?: GraphCacheResolver<
      WithTypename<AccountSocialNetwork>,
      Record<string, never>,
      Scalars['ID']['output'] | string
    >
    socialNetwork?: GraphCacheResolver<
      WithTypename<AccountSocialNetwork>,
      Record<string, never>,
      SocialNetwork | string
    >
    socialNetworkUsername?: GraphCacheResolver<
      WithTypename<AccountSocialNetwork>,
      Record<string, never>,
      Scalars['String']['output'] | string
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
      Scalars['Int']['output'] | string
    >
  }
  AccountSocialNetworkEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<AccountSocialNetworkEdge>,
      Record<string, never>,
      Scalars['Cursor']['output'] | string
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
      Scalars['UUID']['output'] | string
    >
    achievement?: GraphCacheResolver<
      WithTypename<Achievement>,
      Record<string, never>,
      AchievementType | string
    >
    id?: GraphCacheResolver<
      WithTypename<Achievement>,
      Record<string, never>,
      Scalars['ID']['output'] | string
    >
    level?: GraphCacheResolver<
      WithTypename<Achievement>,
      Record<string, never>,
      Scalars['Int']['output'] | string
    >
    rowId?: GraphCacheResolver<
      WithTypename<Achievement>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
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
      Scalars['Int']['output'] | string
    >
  }
  AchievementEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<AchievementEdge>,
      Record<string, never>,
      Scalars['Cursor']['output'] | string
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
      Scalars['String']['output'] | string
    >
    query?: GraphCacheResolver<
      WithTypename<AchievementUnlockPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
    result?: GraphCacheResolver<
      WithTypename<AchievementUnlockPayload>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
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
      Scalars['String']['output'] | string
    >
    contactsByAddressId?: GraphCacheResolver<
      WithTypename<Address>,
      AddressContactsByAddressIdArgs,
      WithTypename<ContactConnection> | string
    >
    country?: GraphCacheResolver<
      WithTypename<Address>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    createdAt?: GraphCacheResolver<
      WithTypename<Address>,
      Record<string, never>,
      Scalars['Datetime']['output'] | string
    >
    createdBy?: GraphCacheResolver<
      WithTypename<Address>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
    >
    eventsByAddressId?: GraphCacheResolver<
      WithTypename<Address>,
      AddressEventsByAddressIdArgs,
      WithTypename<EventConnection> | string
    >
    id?: GraphCacheResolver<
      WithTypename<Address>,
      Record<string, never>,
      Scalars['ID']['output'] | string
    >
    line1?: GraphCacheResolver<
      WithTypename<Address>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    line2?: GraphCacheResolver<
      WithTypename<Address>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    location?: GraphCacheResolver<
      WithTypename<Address>,
      Record<string, never>,
      WithTypename<GeographyPoint> | string
    >
    name?: GraphCacheResolver<
      WithTypename<Address>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    postalCode?: GraphCacheResolver<
      WithTypename<Address>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    region?: GraphCacheResolver<
      WithTypename<Address>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    rowId?: GraphCacheResolver<
      WithTypename<Address>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
    >
    updatedAt?: GraphCacheResolver<
      WithTypename<Address>,
      Record<string, never>,
      Scalars['Datetime']['output'] | string
    >
    updatedBy?: GraphCacheResolver<
      WithTypename<Address>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
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
      Scalars['Int']['output'] | string
    >
  }
  AddressEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<AddressEdge>,
      Record<string, never>,
      Scalars['Cursor']['output'] | string
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
      Scalars['Datetime']['output'] | string
    >
    createdBy?: GraphCacheResolver<
      WithTypename<App>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
    >
    eventAppsByAppId?: GraphCacheResolver<
      WithTypename<App>,
      AppEventAppsByAppIdArgs,
      WithTypename<EventAppConnection> | string
    >
    iconSvg?: GraphCacheResolver<
      WithTypename<App>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    id?: GraphCacheResolver<
      WithTypename<App>,
      Record<string, never>,
      Scalars['ID']['output'] | string
    >
    name?: GraphCacheResolver<
      WithTypename<App>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    rowId?: GraphCacheResolver<
      WithTypename<App>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
    >
    url?: GraphCacheResolver<
      WithTypename<App>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    urlAttendance?: GraphCacheResolver<
      WithTypename<App>,
      Record<string, never>,
      Scalars['String']['output'] | string
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
      Scalars['Int']['output'] | string
    >
  }
  AppEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<AppEdge>,
      Record<string, never>,
      Scalars['Cursor']['output'] | string
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
      Scalars['Boolean']['output'] | string
    >
    contactByContactId?: GraphCacheResolver<
      WithTypename<Attendance>,
      Record<string, never>,
      WithTypename<Contact> | string
    >
    contactId?: GraphCacheResolver<
      WithTypename<Attendance>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
    >
    createdAt?: GraphCacheResolver<
      WithTypename<Attendance>,
      Record<string, never>,
      Scalars['Datetime']['output'] | string
    >
    guestByGuestId?: GraphCacheResolver<
      WithTypename<Attendance>,
      Record<string, never>,
      WithTypename<Guest> | string
    >
    guestId?: GraphCacheResolver<
      WithTypename<Attendance>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
    >
    id?: GraphCacheResolver<
      WithTypename<Attendance>,
      Record<string, never>,
      Scalars['ID']['output'] | string
    >
    rowId?: GraphCacheResolver<
      WithTypename<Attendance>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
    >
    tagSerialNumber?: GraphCacheResolver<
      WithTypename<Attendance>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    updatedAt?: GraphCacheResolver<
      WithTypename<Attendance>,
      Record<string, never>,
      Scalars['Datetime']['output'] | string
    >
    updatedBy?: GraphCacheResolver<
      WithTypename<Attendance>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
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
      Scalars['Int']['output'] | string
    >
  }
  AttendanceEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<AttendanceEdge>,
      Record<string, never>,
      Scalars['Cursor']['output'] | string
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
      Scalars['UUID']['output'] | string
    >
    addressByAddressId?: GraphCacheResolver<
      WithTypename<Contact>,
      Record<string, never>,
      WithTypename<Address> | string
    >
    addressId?: GraphCacheResolver<
      WithTypename<Contact>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
    >
    attendancesByContactId?: GraphCacheResolver<
      WithTypename<Contact>,
      ContactAttendancesByContactIdArgs,
      WithTypename<AttendanceConnection> | string
    >
    contactGroupMembersByContactId?: GraphCacheResolver<
      WithTypename<Contact>,
      ContactContactGroupMembersByContactIdArgs,
      WithTypename<ContactGroupMemberConnection> | string
    >
    createdAt?: GraphCacheResolver<
      WithTypename<Contact>,
      Record<string, never>,
      Scalars['Datetime']['output'] | string
    >
    createdBy?: GraphCacheResolver<
      WithTypename<Contact>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
    >
    emailAddressHash?: GraphCacheResolver<
      WithTypename<Contact>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    emailAddresses?: GraphCacheResolver<
      WithTypename<Contact>,
      Record<string, never>,
      Array<Scalars['EmailAddress']['output'] | string>
    >
    firstName?: GraphCacheResolver<
      WithTypename<Contact>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    guestsByContactId?: GraphCacheResolver<
      WithTypename<Contact>,
      ContactGuestsByContactIdArgs,
      WithTypename<GuestConnection> | string
    >
    id?: GraphCacheResolver<
      WithTypename<Contact>,
      Record<string, never>,
      Scalars['ID']['output'] | string
    >
    language?: GraphCacheResolver<
      WithTypename<Contact>,
      Record<string, never>,
      Language | string
    >
    lastName?: GraphCacheResolver<
      WithTypename<Contact>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    nickname?: GraphCacheResolver<
      WithTypename<Contact>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    note?: GraphCacheResolver<
      WithTypename<Contact>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    phoneNumber?: GraphCacheResolver<
      WithTypename<Contact>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    rowId?: GraphCacheResolver<
      WithTypename<Contact>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
    >
    timeZone?: GraphCacheResolver<
      WithTypename<Contact>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    url?: GraphCacheResolver<
      WithTypename<Contact>,
      Record<string, never>,
      Scalars['String']['output'] | string
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
      Scalars['Int']['output'] | string
    >
  }
  ContactEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<ContactEdge>,
      Record<string, never>,
      Scalars['Cursor']['output'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<ContactEdge>,
      Record<string, never>,
      WithTypename<Contact> | string
    >
  }
  ContactGroup?: {
    accountByCreatedBy?: GraphCacheResolver<
      WithTypename<ContactGroup>,
      Record<string, never>,
      WithTypename<Account> | string
    >
    contactGroupMembersByContactGroupId?: GraphCacheResolver<
      WithTypename<ContactGroup>,
      ContactGroupContactGroupMembersByContactGroupIdArgs,
      WithTypename<ContactGroupMemberConnection> | string
    >
    createdAt?: GraphCacheResolver<
      WithTypename<ContactGroup>,
      Record<string, never>,
      Scalars['Datetime']['output'] | string
    >
    createdBy?: GraphCacheResolver<
      WithTypename<ContactGroup>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
    >
    id?: GraphCacheResolver<
      WithTypename<ContactGroup>,
      Record<string, never>,
      Scalars['ID']['output'] | string
    >
    name?: GraphCacheResolver<
      WithTypename<ContactGroup>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    rowId?: GraphCacheResolver<
      WithTypename<ContactGroup>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
    >
  }
  ContactGroupConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<ContactGroupConnection>,
      Record<string, never>,
      Array<WithTypename<ContactGroupEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<ContactGroupConnection>,
      Record<string, never>,
      Array<WithTypename<ContactGroup> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<ContactGroupConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<ContactGroupConnection>,
      Record<string, never>,
      Scalars['Int']['output'] | string
    >
  }
  ContactGroupEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<ContactGroupEdge>,
      Record<string, never>,
      Scalars['Cursor']['output'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<ContactGroupEdge>,
      Record<string, never>,
      WithTypename<ContactGroup> | string
    >
  }
  ContactGroupMember?: {
    contactByContactId?: GraphCacheResolver<
      WithTypename<ContactGroupMember>,
      Record<string, never>,
      WithTypename<Contact> | string
    >
    contactGroupByContactGroupId?: GraphCacheResolver<
      WithTypename<ContactGroupMember>,
      Record<string, never>,
      WithTypename<ContactGroup> | string
    >
    contactGroupId?: GraphCacheResolver<
      WithTypename<ContactGroupMember>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
    >
    contactId?: GraphCacheResolver<
      WithTypename<ContactGroupMember>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
    >
    id?: GraphCacheResolver<
      WithTypename<ContactGroupMember>,
      Record<string, never>,
      Scalars['ID']['output'] | string
    >
  }
  ContactGroupMemberConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<ContactGroupMemberConnection>,
      Record<string, never>,
      Array<WithTypename<ContactGroupMemberEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<ContactGroupMemberConnection>,
      Record<string, never>,
      Array<WithTypename<ContactGroupMember> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<ContactGroupMemberConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<ContactGroupMemberConnection>,
      Record<string, never>,
      Scalars['Int']['output'] | string
    >
  }
  ContactGroupMemberEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<ContactGroupMemberEdge>,
      Record<string, never>,
      Scalars['Cursor']['output'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<ContactGroupMemberEdge>,
      Record<string, never>,
      WithTypename<ContactGroupMember> | string
    >
  }
  ContactMergePayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<ContactMergePayload>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    contactEdge?: GraphCacheResolver<
      WithTypename<ContactMergePayload>,
      ContactMergePayloadContactEdgeArgs,
      WithTypename<ContactEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<ContactMergePayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
    result?: GraphCacheResolver<
      WithTypename<ContactMergePayload>,
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
      Scalars['String']['output'] | string
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
      Scalars['String']['output'] | string
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
      Scalars['String']['output'] | string
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
      Scalars['String']['output'] | string
    >
    query?: GraphCacheResolver<
      WithTypename<CreateAttendancePayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  CreateContactGroupMemberPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<CreateContactGroupMemberPayload>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    contactGroupMember?: GraphCacheResolver<
      WithTypename<CreateContactGroupMemberPayload>,
      Record<string, never>,
      WithTypename<ContactGroupMember> | string
    >
    contactGroupMemberEdge?: GraphCacheResolver<
      WithTypename<CreateContactGroupMemberPayload>,
      CreateContactGroupMemberPayloadContactGroupMemberEdgeArgs,
      WithTypename<ContactGroupMemberEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<CreateContactGroupMemberPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  CreateContactGroupMembersPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<CreateContactGroupMembersPayload>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    query?: GraphCacheResolver<
      WithTypename<CreateContactGroupMembersPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
    result?: GraphCacheResolver<
      WithTypename<CreateContactGroupMembersPayload>,
      Record<string, never>,
      Array<WithTypename<ContactGroupMember> | string>
    >
  }
  CreateContactGroupPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<CreateContactGroupPayload>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    contactGroup?: GraphCacheResolver<
      WithTypename<CreateContactGroupPayload>,
      Record<string, never>,
      WithTypename<ContactGroup> | string
    >
    contactGroupEdge?: GraphCacheResolver<
      WithTypename<CreateContactGroupPayload>,
      CreateContactGroupPayloadContactGroupEdgeArgs,
      WithTypename<ContactGroupEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<CreateContactGroupPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  CreateContactGroupsPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<CreateContactGroupsPayload>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    query?: GraphCacheResolver<
      WithTypename<CreateContactGroupsPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
    result?: GraphCacheResolver<
      WithTypename<CreateContactGroupsPayload>,
      Record<string, never>,
      Array<WithTypename<ContactGroup> | string>
    >
  }
  CreateContactPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<CreateContactPayload>,
      Record<string, never>,
      Scalars['String']['output'] | string
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
  CreateContactsPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<CreateContactsPayload>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    query?: GraphCacheResolver<
      WithTypename<CreateContactsPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
    result?: GraphCacheResolver<
      WithTypename<CreateContactsPayload>,
      Record<string, never>,
      Array<WithTypename<Contact> | string>
    >
  }
  CreateDevicePayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<CreateDevicePayload>,
      Record<string, never>,
      Scalars['String']['output'] | string
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
      Scalars['String']['output'] | string
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
      Scalars['String']['output'] | string
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
      Scalars['String']['output'] | string
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
  CreateEventInvitationLinkPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<CreateEventInvitationLinkPayload>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    eventInvitationLink?: GraphCacheResolver<
      WithTypename<CreateEventInvitationLinkPayload>,
      Record<string, never>,
      WithTypename<EventInvitationLink> | string
    >
    eventInvitationLinkEdge?: GraphCacheResolver<
      WithTypename<CreateEventInvitationLinkPayload>,
      CreateEventInvitationLinkPayloadEventInvitationLinkEdgeArgs,
      WithTypename<EventInvitationLinkEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<CreateEventInvitationLinkPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  CreateEventPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<CreateEventPayload>,
      Record<string, never>,
      Scalars['String']['output'] | string
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
      Scalars['String']['output'] | string
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
      Scalars['String']['output'] | string
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
      Scalars['String']['output'] | string
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
      Scalars['String']['output'] | string
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
      Scalars['String']['output'] | string
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
      Scalars['String']['output'] | string
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
      Scalars['String']['output'] | string
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
      Scalars['String']['output'] | string
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
      Scalars['String']['output'] | string
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
      Scalars['String']['output'] | string
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
      Scalars['String']['output'] | string
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
      Scalars['String']['output'] | string
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
      Scalars['String']['output'] | string
    >
    deletedAccountBlockId?: GraphCacheResolver<
      WithTypename<DeleteAccountBlockPayload>,
      Record<string, never>,
      Scalars['ID']['output'] | string
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
      Scalars['String']['output'] | string
    >
    deletedAccountSocialNetworkId?: GraphCacheResolver<
      WithTypename<DeleteAccountSocialNetworkPayload>,
      Record<string, never>,
      Scalars['ID']['output'] | string
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
      Scalars['String']['output'] | string
    >
    deletedAddressId?: GraphCacheResolver<
      WithTypename<DeleteAddressPayload>,
      Record<string, never>,
      Scalars['ID']['output'] | string
    >
    query?: GraphCacheResolver<
      WithTypename<DeleteAddressPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  DeleteContactGroupMemberPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<DeleteContactGroupMemberPayload>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    contactGroupMember?: GraphCacheResolver<
      WithTypename<DeleteContactGroupMemberPayload>,
      Record<string, never>,
      WithTypename<ContactGroupMember> | string
    >
    contactGroupMemberEdge?: GraphCacheResolver<
      WithTypename<DeleteContactGroupMemberPayload>,
      DeleteContactGroupMemberPayloadContactGroupMemberEdgeArgs,
      WithTypename<ContactGroupMemberEdge> | string
    >
    deletedContactGroupMemberId?: GraphCacheResolver<
      WithTypename<DeleteContactGroupMemberPayload>,
      Record<string, never>,
      Scalars['ID']['output'] | string
    >
    query?: GraphCacheResolver<
      WithTypename<DeleteContactGroupMemberPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  DeleteContactGroupPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<DeleteContactGroupPayload>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    contactGroup?: GraphCacheResolver<
      WithTypename<DeleteContactGroupPayload>,
      Record<string, never>,
      WithTypename<ContactGroup> | string
    >
    contactGroupEdge?: GraphCacheResolver<
      WithTypename<DeleteContactGroupPayload>,
      DeleteContactGroupPayloadContactGroupEdgeArgs,
      WithTypename<ContactGroupEdge> | string
    >
    deletedContactGroupId?: GraphCacheResolver<
      WithTypename<DeleteContactGroupPayload>,
      Record<string, never>,
      Scalars['ID']['output'] | string
    >
    query?: GraphCacheResolver<
      WithTypename<DeleteContactGroupPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  DeleteContactPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<DeleteContactPayload>,
      Record<string, never>,
      Scalars['String']['output'] | string
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
      Scalars['ID']['output'] | string
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
      Scalars['String']['output'] | string
    >
    deletedDeviceId?: GraphCacheResolver<
      WithTypename<DeleteDevicePayload>,
      Record<string, never>,
      Scalars['ID']['output'] | string
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
      Scalars['String']['output'] | string
    >
    deletedEventCategoryMappingId?: GraphCacheResolver<
      WithTypename<DeleteEventCategoryMappingPayload>,
      Record<string, never>,
      Scalars['ID']['output'] | string
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
      Scalars['String']['output'] | string
    >
    deletedEventFavoriteId?: GraphCacheResolver<
      WithTypename<DeleteEventFavoritePayload>,
      Record<string, never>,
      Scalars['ID']['output'] | string
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
      Scalars['String']['output'] | string
    >
    deletedEventFormatMappingId?: GraphCacheResolver<
      WithTypename<DeleteEventFormatMappingPayload>,
      Record<string, never>,
      Scalars['ID']['output'] | string
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
  DeleteEventInvitationLinkPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<DeleteEventInvitationLinkPayload>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    deletedEventInvitationLinkId?: GraphCacheResolver<
      WithTypename<DeleteEventInvitationLinkPayload>,
      Record<string, never>,
      Scalars['ID']['output'] | string
    >
    eventInvitationLink?: GraphCacheResolver<
      WithTypename<DeleteEventInvitationLinkPayload>,
      Record<string, never>,
      WithTypename<EventInvitationLink> | string
    >
    eventInvitationLinkEdge?: GraphCacheResolver<
      WithTypename<DeleteEventInvitationLinkPayload>,
      DeleteEventInvitationLinkPayloadEventInvitationLinkEdgeArgs,
      WithTypename<EventInvitationLinkEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<DeleteEventInvitationLinkPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  DeleteEventPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<DeleteEventPayload>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    deletedEventId?: GraphCacheResolver<
      WithTypename<DeleteEventPayload>,
      Record<string, never>,
      Scalars['ID']['output'] | string
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
      Scalars['String']['output'] | string
    >
    deletedEventUploadId?: GraphCacheResolver<
      WithTypename<DeleteEventUploadPayload>,
      Record<string, never>,
      Scalars['ID']['output'] | string
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
      Scalars['String']['output'] | string
    >
    deletedFriendshipId?: GraphCacheResolver<
      WithTypename<DeleteFriendshipPayload>,
      Record<string, never>,
      Scalars['ID']['output'] | string
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
      Scalars['String']['output'] | string
    >
    deletedGuestId?: GraphCacheResolver<
      WithTypename<DeleteGuestPayload>,
      Record<string, never>,
      Scalars['ID']['output'] | string
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
      Scalars['String']['output'] | string
    >
    deletedPreferenceEventCategoryId?: GraphCacheResolver<
      WithTypename<DeletePreferenceEventCategoryPayload>,
      Record<string, never>,
      Scalars['ID']['output'] | string
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
      Scalars['String']['output'] | string
    >
    deletedPreferenceEventFormatId?: GraphCacheResolver<
      WithTypename<DeletePreferenceEventFormatPayload>,
      Record<string, never>,
      Scalars['ID']['output'] | string
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
      Scalars['String']['output'] | string
    >
    deletedPreferenceEventLocationId?: GraphCacheResolver<
      WithTypename<DeletePreferenceEventLocationPayload>,
      Record<string, never>,
      Scalars['ID']['output'] | string
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
      Scalars['String']['output'] | string
    >
    deletedPreferenceEventSizeId?: GraphCacheResolver<
      WithTypename<DeletePreferenceEventSizePayload>,
      Record<string, never>,
      Scalars['ID']['output'] | string
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
      Scalars['String']['output'] | string
    >
    deletedProfilePictureId?: GraphCacheResolver<
      WithTypename<DeleteProfilePicturePayload>,
      Record<string, never>,
      Scalars['ID']['output'] | string
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
      Scalars['String']['output'] | string
    >
    deletedUploadId?: GraphCacheResolver<
      WithTypename<DeleteUploadPayload>,
      Record<string, never>,
      Scalars['ID']['output'] | string
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
      Scalars['Datetime']['output'] | string
    >
    createdBy?: GraphCacheResolver<
      WithTypename<Device>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
    >
    fcmToken?: GraphCacheResolver<
      WithTypename<Device>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    id?: GraphCacheResolver<
      WithTypename<Device>,
      Record<string, never>,
      Scalars['ID']['output'] | string
    >
    rowId?: GraphCacheResolver<
      WithTypename<Device>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
    >
    updatedAt?: GraphCacheResolver<
      WithTypename<Device>,
      Record<string, never>,
      Scalars['Datetime']['output'] | string
    >
    updatedBy?: GraphCacheResolver<
      WithTypename<Device>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
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
      Scalars['Int']['output'] | string
    >
  }
  DeviceEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<DeviceEdge>,
      Record<string, never>,
      Scalars['Cursor']['output'] | string
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
      Scalars['UUID']['output'] | string
    >
    createdAt?: GraphCacheResolver<
      WithTypename<Event>,
      Record<string, never>,
      Scalars['Datetime']['output'] | string
    >
    createdBy?: GraphCacheResolver<
      WithTypename<Event>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
    >
    description?: GraphCacheResolver<
      WithTypename<Event>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    end?: GraphCacheResolver<
      WithTypename<Event>,
      Record<string, never>,
      Scalars['Datetime']['output'] | string
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
    eventInvitationLinkByEventId?: GraphCacheResolver<
      WithTypename<Event>,
      Record<string, never>,
      WithTypename<EventInvitationLink> | string
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
    feedbackDeadline?: GraphCacheResolver<
      WithTypename<Event>,
      Record<string, never>,
      Scalars['Datetime']['output'] | string
    >
    guestCount?: GraphCacheResolver<
      WithTypename<Event>,
      Record<string, never>,
      Scalars['Int']['output'] | string
    >
    guestCountAccepted?: GraphCacheResolver<
      WithTypename<Event>,
      Record<string, never>,
      Scalars['Int']['output'] | string
    >
    guestCountMaximum?: GraphCacheResolver<
      WithTypename<Event>,
      Record<string, never>,
      Scalars['Int']['output'] | string
    >
    guestsByEventId?: GraphCacheResolver<
      WithTypename<Event>,
      EventGuestsByEventIdArgs,
      WithTypename<GuestConnection> | string
    >
    id?: GraphCacheResolver<
      WithTypename<Event>,
      Record<string, never>,
      Scalars['ID']['output'] | string
    >
    isArchived?: GraphCacheResolver<
      WithTypename<Event>,
      Record<string, never>,
      Scalars['Boolean']['output'] | string
    >
    isInPerson?: GraphCacheResolver<
      WithTypename<Event>,
      Record<string, never>,
      Scalars['Boolean']['output'] | string
    >
    isRemote?: GraphCacheResolver<
      WithTypename<Event>,
      Record<string, never>,
      Scalars['Boolean']['output'] | string
    >
    language?: GraphCacheResolver<
      WithTypename<Event>,
      Record<string, never>,
      Language | string
    >
    name?: GraphCacheResolver<
      WithTypename<Event>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    publishedAt?: GraphCacheResolver<
      WithTypename<Event>,
      Record<string, never>,
      Scalars['Datetime']['output'] | string
    >
    reportsByTargetEventId?: GraphCacheResolver<
      WithTypename<Event>,
      EventReportsByTargetEventIdArgs,
      WithTypename<ReportConnection> | string
    >
    rowId?: GraphCacheResolver<
      WithTypename<Event>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
    >
    slug?: GraphCacheResolver<
      WithTypename<Event>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    start?: GraphCacheResolver<
      WithTypename<Event>,
      Record<string, never>,
      Scalars['Datetime']['output'] | string
    >
    url?: GraphCacheResolver<
      WithTypename<Event>,
      Record<string, never>,
      Scalars['String']['output'] | string
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
      Scalars['UUID']['output'] | string
    >
    createdAt?: GraphCacheResolver<
      WithTypename<EventApp>,
      Record<string, never>,
      Scalars['Datetime']['output'] | string
    >
    createdBy?: GraphCacheResolver<
      WithTypename<EventApp>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
    >
    eventByEventId?: GraphCacheResolver<
      WithTypename<EventApp>,
      Record<string, never>,
      WithTypename<Event> | string
    >
    eventId?: GraphCacheResolver<
      WithTypename<EventApp>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
    >
    id?: GraphCacheResolver<
      WithTypename<EventApp>,
      Record<string, never>,
      Scalars['ID']['output'] | string
    >
    rowId?: GraphCacheResolver<
      WithTypename<EventApp>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
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
      Scalars['Int']['output'] | string
    >
  }
  EventAppEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<EventAppEdge>,
      Record<string, never>,
      Scalars['Cursor']['output'] | string
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
      Scalars['ID']['output'] | string
    >
    name?: GraphCacheResolver<
      WithTypename<EventCategory>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    preferenceEventCategoriesByCategoryId?: GraphCacheResolver<
      WithTypename<EventCategory>,
      EventCategoryPreferenceEventCategoriesByCategoryIdArgs,
      WithTypename<PreferenceEventCategoryConnection> | string
    >
    rowId?: GraphCacheResolver<
      WithTypename<EventCategory>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
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
      Scalars['Int']['output'] | string
    >
  }
  EventCategoryEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<EventCategoryEdge>,
      Record<string, never>,
      Scalars['Cursor']['output'] | string
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
      Scalars['UUID']['output'] | string
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
      Scalars['UUID']['output'] | string
    >
    id?: GraphCacheResolver<
      WithTypename<EventCategoryMapping>,
      Record<string, never>,
      Scalars['ID']['output'] | string
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
      Scalars['Int']['output'] | string
    >
  }
  EventCategoryMappingEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<EventCategoryMappingEdge>,
      Record<string, never>,
      Scalars['Cursor']['output'] | string
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
      Scalars['Int']['output'] | string
    >
  }
  EventDeletePayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<EventDeletePayload>,
      Record<string, never>,
      Scalars['String']['output'] | string
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
      Scalars['Cursor']['output'] | string
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
      Scalars['Datetime']['output'] | string
    >
    createdBy?: GraphCacheResolver<
      WithTypename<EventFavorite>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
    >
    eventByEventId?: GraphCacheResolver<
      WithTypename<EventFavorite>,
      Record<string, never>,
      WithTypename<Event> | string
    >
    eventId?: GraphCacheResolver<
      WithTypename<EventFavorite>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
    >
    id?: GraphCacheResolver<
      WithTypename<EventFavorite>,
      Record<string, never>,
      Scalars['ID']['output'] | string
    >
    rowId?: GraphCacheResolver<
      WithTypename<EventFavorite>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
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
      Scalars['Int']['output'] | string
    >
  }
  EventFavoriteEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<EventFavoriteEdge>,
      Record<string, never>,
      Scalars['Cursor']['output'] | string
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
      Scalars['ID']['output'] | string
    >
    name?: GraphCacheResolver<
      WithTypename<EventFormat>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    preferenceEventFormatsByFormatId?: GraphCacheResolver<
      WithTypename<EventFormat>,
      EventFormatPreferenceEventFormatsByFormatIdArgs,
      WithTypename<PreferenceEventFormatConnection> | string
    >
    rowId?: GraphCacheResolver<
      WithTypename<EventFormat>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
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
      Scalars['Int']['output'] | string
    >
  }
  EventFormatEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<EventFormatEdge>,
      Record<string, never>,
      Scalars['Cursor']['output'] | string
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
      Scalars['UUID']['output'] | string
    >
    formatId?: GraphCacheResolver<
      WithTypename<EventFormatMapping>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
    >
    id?: GraphCacheResolver<
      WithTypename<EventFormatMapping>,
      Record<string, never>,
      Scalars['ID']['output'] | string
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
      Scalars['Int']['output'] | string
    >
  }
  EventFormatMappingEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<EventFormatMappingEdge>,
      Record<string, never>,
      Scalars['Cursor']['output'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<EventFormatMappingEdge>,
      Record<string, never>,
      WithTypename<EventFormatMapping> | string
    >
  }
  EventInvitationLink?: {
    createdAt?: GraphCacheResolver<
      WithTypename<EventInvitationLink>,
      Record<string, never>,
      Scalars['Datetime']['output'] | string
    >
    eventByEventId?: GraphCacheResolver<
      WithTypename<EventInvitationLink>,
      Record<string, never>,
      WithTypename<Event> | string
    >
    eventId?: GraphCacheResolver<
      WithTypename<EventInvitationLink>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
    >
    id?: GraphCacheResolver<
      WithTypename<EventInvitationLink>,
      Record<string, never>,
      Scalars['ID']['output'] | string
    >
    rowId?: GraphCacheResolver<
      WithTypename<EventInvitationLink>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
    >
  }
  EventInvitationLinkConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<EventInvitationLinkConnection>,
      Record<string, never>,
      Array<WithTypename<EventInvitationLinkEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<EventInvitationLinkConnection>,
      Record<string, never>,
      Array<WithTypename<EventInvitationLink> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<EventInvitationLinkConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<EventInvitationLinkConnection>,
      Record<string, never>,
      Scalars['Int']['output'] | string
    >
  }
  EventInvitationLinkEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<EventInvitationLinkEdge>,
      Record<string, never>,
      Scalars['Cursor']['output'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<EventInvitationLinkEdge>,
      Record<string, never>,
      WithTypename<EventInvitationLink> | string
    >
  }
  EventInvitationLinkRedeemPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<EventInvitationLinkRedeemPayload>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    query?: GraphCacheResolver<
      WithTypename<EventInvitationLinkRedeemPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
    result?: GraphCacheResolver<
      WithTypename<EventInvitationLinkRedeemPayload>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
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
      Scalars['UUID']['output'] | string
    >
    eventByEventId?: GraphCacheResolver<
      WithTypename<EventRecommendation>,
      Record<string, never>,
      WithTypename<Event> | string
    >
    eventId?: GraphCacheResolver<
      WithTypename<EventRecommendation>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
    >
    id?: GraphCacheResolver<
      WithTypename<EventRecommendation>,
      Record<string, never>,
      Scalars['ID']['output'] | string
    >
    predictedScore?: GraphCacheResolver<
      WithTypename<EventRecommendation>,
      Record<string, never>,
      Scalars['Float']['output'] | string
    >
    score?: GraphCacheResolver<
      WithTypename<EventRecommendation>,
      Record<string, never>,
      Scalars['Float']['output'] | string
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
      Scalars['Int']['output'] | string
    >
  }
  EventRecommendationEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<EventRecommendationEdge>,
      Record<string, never>,
      Scalars['Cursor']['output'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<EventRecommendationEdge>,
      Record<string, never>,
      WithTypename<EventRecommendation> | string
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
      Scalars['UUID']['output'] | string
    >
    id?: GraphCacheResolver<
      WithTypename<EventUpload>,
      Record<string, never>,
      Scalars['ID']['output'] | string
    >
    isHeaderImage?: GraphCacheResolver<
      WithTypename<EventUpload>,
      Record<string, never>,
      Scalars['Boolean']['output'] | string
    >
    rowId?: GraphCacheResolver<
      WithTypename<EventUpload>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
    >
    uploadByUploadId?: GraphCacheResolver<
      WithTypename<EventUpload>,
      Record<string, never>,
      WithTypename<Upload> | string
    >
    uploadId?: GraphCacheResolver<
      WithTypename<EventUpload>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
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
      Scalars['Int']['output'] | string
    >
  }
  EventUploadEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<EventUploadEdge>,
      Record<string, never>,
      Scalars['Cursor']['output'] | string
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
      Scalars['UUID']['output'] | string
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
      Scalars['UUID']['output'] | string
    >
    createdAt?: GraphCacheResolver<
      WithTypename<Friendship>,
      Record<string, never>,
      Scalars['Datetime']['output'] | string
    >
    createdBy?: GraphCacheResolver<
      WithTypename<Friendship>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
    >
    id?: GraphCacheResolver<
      WithTypename<Friendship>,
      Record<string, never>,
      Scalars['ID']['output'] | string
    >
    rowId?: GraphCacheResolver<
      WithTypename<Friendship>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
    >
    status?: GraphCacheResolver<
      WithTypename<Friendship>,
      Record<string, never>,
      FriendshipStatus | string
    >
    updatedAt?: GraphCacheResolver<
      WithTypename<Friendship>,
      Record<string, never>,
      Scalars['Datetime']['output'] | string
    >
    updatedBy?: GraphCacheResolver<
      WithTypename<Friendship>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
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
      Scalars['Int']['output'] | string
    >
  }
  FriendshipEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<FriendshipEdge>,
      Record<string, never>,
      Scalars['Cursor']['output'] | string
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
      Scalars['GeoJSON']['output'] | string
    >
    latitude?: GraphCacheResolver<
      WithTypename<GeographyPoint>,
      Record<string, never>,
      Scalars['Float']['output'] | string
    >
    longitude?: GraphCacheResolver<
      WithTypename<GeographyPoint>,
      Record<string, never>,
      Scalars['Float']['output'] | string
    >
    srid?: GraphCacheResolver<
      WithTypename<GeographyPoint>,
      Record<string, never>,
      Scalars['Int']['output'] | string
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
    companionCount?: GraphCacheResolver<
      WithTypename<Guest>,
      Record<string, never>,
      Scalars['Int']['output'] | string
    >
    companionCountRequested?: GraphCacheResolver<
      WithTypename<Guest>,
      Record<string, never>,
      Scalars['Int']['output'] | string
    >
    contactByContactId?: GraphCacheResolver<
      WithTypename<Guest>,
      Record<string, never>,
      WithTypename<Contact> | string
    >
    contactId?: GraphCacheResolver<
      WithTypename<Guest>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
    >
    createdAt?: GraphCacheResolver<
      WithTypename<Guest>,
      Record<string, never>,
      Scalars['Datetime']['output'] | string
    >
    eventByEventId?: GraphCacheResolver<
      WithTypename<Guest>,
      Record<string, never>,
      WithTypename<Event> | string
    >
    eventId?: GraphCacheResolver<
      WithTypename<Guest>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
    >
    feedback?: GraphCacheResolver<
      WithTypename<Guest>,
      Record<string, never>,
      InvitationFeedback | string
    >
    feedbackOverride?: GraphCacheResolver<
      WithTypename<Guest>,
      Record<string, never>,
      InvitationFeedback | string
    >
    feedbackReason?: GraphCacheResolver<
      WithTypename<Guest>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    id?: GraphCacheResolver<
      WithTypename<Guest>,
      Record<string, never>,
      Scalars['ID']['output'] | string
    >
    rowId?: GraphCacheResolver<
      WithTypename<Guest>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
    >
    updatedAt?: GraphCacheResolver<
      WithTypename<Guest>,
      Record<string, never>,
      Scalars['Datetime']['output'] | string
    >
    updatedBy?: GraphCacheResolver<
      WithTypename<Guest>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
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
      Scalars['Int']['output'] | string
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
      Array<Scalars['UUID']['output'] | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<GuestContactIdsConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<GuestContactIdsConnection>,
      Record<string, never>,
      Scalars['Int']['output'] | string
    >
  }
  GuestContactIdsEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<GuestContactIdsEdge>,
      Record<string, never>,
      Scalars['Cursor']['output'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<GuestContactIdsEdge>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
    >
  }
  GuestEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<GuestEdge>,
      Record<string, never>,
      Scalars['Cursor']['output'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<GuestEdge>,
      Record<string, never>,
      WithTypename<Guest> | string
    >
  }
  InvitePayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<InvitePayload>,
      Record<string, never>,
      Scalars['String']['output'] | string
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
      Scalars['String']['output'] | string
    >
    query?: GraphCacheResolver<
      WithTypename<JwtCreatePayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
    result?: GraphCacheResolver<
      WithTypename<JwtCreatePayload>,
      Record<string, never>,
      Scalars['Jwt']['output'] | string
    >
  }
  JwtUpdateAttendanceAddPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<JwtUpdateAttendanceAddPayload>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    query?: GraphCacheResolver<
      WithTypename<JwtUpdateAttendanceAddPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
    result?: GraphCacheResolver<
      WithTypename<JwtUpdateAttendanceAddPayload>,
      Record<string, never>,
      Scalars['Jwt']['output'] | string
    >
  }
  JwtUpdateGuestAddPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<JwtUpdateGuestAddPayload>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    query?: GraphCacheResolver<
      WithTypename<JwtUpdateGuestAddPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
    result?: GraphCacheResolver<
      WithTypename<JwtUpdateGuestAddPayload>,
      Record<string, never>,
      Scalars['Jwt']['output'] | string
    >
  }
  JwtUpdatePayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<JwtUpdatePayload>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    query?: GraphCacheResolver<
      WithTypename<JwtUpdatePayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
    result?: GraphCacheResolver<
      WithTypename<JwtUpdatePayload>,
      Record<string, never>,
      Scalars['Jwt']['output'] | string
    >
  }
  LegalTerm?: {
    createdAt?: GraphCacheResolver<
      WithTypename<LegalTerm>,
      Record<string, never>,
      Scalars['Datetime']['output'] | string
    >
    id?: GraphCacheResolver<
      WithTypename<LegalTerm>,
      Record<string, never>,
      Scalars['ID']['output'] | string
    >
    language?: GraphCacheResolver<
      WithTypename<LegalTerm>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    legalTermAcceptancesByLegalTermId?: GraphCacheResolver<
      WithTypename<LegalTerm>,
      LegalTermLegalTermAcceptancesByLegalTermIdArgs,
      WithTypename<LegalTermAcceptanceConnection> | string
    >
    rowId?: GraphCacheResolver<
      WithTypename<LegalTerm>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
    >
    term?: GraphCacheResolver<
      WithTypename<LegalTerm>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    version?: GraphCacheResolver<
      WithTypename<LegalTerm>,
      Record<string, never>,
      Scalars['String']['output'] | string
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
      Scalars['UUID']['output'] | string
    >
    createdAt?: GraphCacheResolver<
      WithTypename<LegalTermAcceptance>,
      Record<string, never>,
      Scalars['Datetime']['output'] | string
    >
    id?: GraphCacheResolver<
      WithTypename<LegalTermAcceptance>,
      Record<string, never>,
      Scalars['ID']['output'] | string
    >
    legalTermByLegalTermId?: GraphCacheResolver<
      WithTypename<LegalTermAcceptance>,
      Record<string, never>,
      WithTypename<LegalTerm> | string
    >
    legalTermId?: GraphCacheResolver<
      WithTypename<LegalTermAcceptance>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
    >
    rowId?: GraphCacheResolver<
      WithTypename<LegalTermAcceptance>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
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
      Scalars['Int']['output'] | string
    >
  }
  LegalTermAcceptanceEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<LegalTermAcceptanceEdge>,
      Record<string, never>,
      Scalars['Cursor']['output'] | string
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
      Scalars['Int']['output'] | string
    >
  }
  LegalTermEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<LegalTermEdge>,
      Record<string, never>,
      Scalars['Cursor']['output'] | string
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
      Scalars['String']['output'] | string
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
      Scalars['Cursor']['output'] | string
    >
    hasNextPage?: GraphCacheResolver<
      WithTypename<PageInfo>,
      Record<string, never>,
      Scalars['Boolean']['output'] | string
    >
    hasPreviousPage?: GraphCacheResolver<
      WithTypename<PageInfo>,
      Record<string, never>,
      Scalars['Boolean']['output'] | string
    >
    startCursor?: GraphCacheResolver<
      WithTypename<PageInfo>,
      Record<string, never>,
      Scalars['Cursor']['output'] | string
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
      Scalars['UUID']['output'] | string
    >
    categoryId?: GraphCacheResolver<
      WithTypename<PreferenceEventCategory>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
    >
    createdAt?: GraphCacheResolver<
      WithTypename<PreferenceEventCategory>,
      Record<string, never>,
      Scalars['Datetime']['output'] | string
    >
    eventCategoryByCategoryId?: GraphCacheResolver<
      WithTypename<PreferenceEventCategory>,
      Record<string, never>,
      WithTypename<EventCategory> | string
    >
    id?: GraphCacheResolver<
      WithTypename<PreferenceEventCategory>,
      Record<string, never>,
      Scalars['ID']['output'] | string
    >
    rowId?: GraphCacheResolver<
      WithTypename<PreferenceEventCategory>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
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
      Scalars['Int']['output'] | string
    >
  }
  PreferenceEventCategoryEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<PreferenceEventCategoryEdge>,
      Record<string, never>,
      Scalars['Cursor']['output'] | string
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
      Scalars['UUID']['output'] | string
    >
    createdAt?: GraphCacheResolver<
      WithTypename<PreferenceEventFormat>,
      Record<string, never>,
      Scalars['Datetime']['output'] | string
    >
    eventFormatByFormatId?: GraphCacheResolver<
      WithTypename<PreferenceEventFormat>,
      Record<string, never>,
      WithTypename<EventFormat> | string
    >
    formatId?: GraphCacheResolver<
      WithTypename<PreferenceEventFormat>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
    >
    id?: GraphCacheResolver<
      WithTypename<PreferenceEventFormat>,
      Record<string, never>,
      Scalars['ID']['output'] | string
    >
    rowId?: GraphCacheResolver<
      WithTypename<PreferenceEventFormat>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
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
      Scalars['Int']['output'] | string
    >
  }
  PreferenceEventFormatEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<PreferenceEventFormatEdge>,
      Record<string, never>,
      Scalars['Cursor']['output'] | string
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
      Scalars['Datetime']['output'] | string
    >
    createdBy?: GraphCacheResolver<
      WithTypename<PreferenceEventLocation>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
    >
    id?: GraphCacheResolver<
      WithTypename<PreferenceEventLocation>,
      Record<string, never>,
      Scalars['ID']['output'] | string
    >
    location?: GraphCacheResolver<
      WithTypename<PreferenceEventLocation>,
      Record<string, never>,
      WithTypename<GeographyPoint> | string
    >
    radius?: GraphCacheResolver<
      WithTypename<PreferenceEventLocation>,
      Record<string, never>,
      Scalars['Float']['output'] | string
    >
    rowId?: GraphCacheResolver<
      WithTypename<PreferenceEventLocation>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
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
      Scalars['Int']['output'] | string
    >
  }
  PreferenceEventLocationEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<PreferenceEventLocationEdge>,
      Record<string, never>,
      Scalars['Cursor']['output'] | string
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
      Scalars['UUID']['output'] | string
    >
    createdAt?: GraphCacheResolver<
      WithTypename<PreferenceEventSize>,
      Record<string, never>,
      Scalars['Datetime']['output'] | string
    >
    eventSize?: GraphCacheResolver<
      WithTypename<PreferenceEventSize>,
      Record<string, never>,
      EventSize | string
    >
    id?: GraphCacheResolver<
      WithTypename<PreferenceEventSize>,
      Record<string, never>,
      Scalars['ID']['output'] | string
    >
    rowId?: GraphCacheResolver<
      WithTypename<PreferenceEventSize>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
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
      Scalars['Int']['output'] | string
    >
  }
  PreferenceEventSizeEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<PreferenceEventSizeEdge>,
      Record<string, never>,
      Scalars['Cursor']['output'] | string
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
      Scalars['UUID']['output'] | string
    >
    id?: GraphCacheResolver<
      WithTypename<ProfilePicture>,
      Record<string, never>,
      Scalars['ID']['output'] | string
    >
    rowId?: GraphCacheResolver<
      WithTypename<ProfilePicture>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
    >
    uploadByUploadId?: GraphCacheResolver<
      WithTypename<ProfilePicture>,
      Record<string, never>,
      WithTypename<Upload> | string
    >
    uploadId?: GraphCacheResolver<
      WithTypename<ProfilePicture>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
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
      Scalars['Int']['output'] | string
    >
  }
  ProfilePictureEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<ProfilePictureEdge>,
      Record<string, never>,
      Scalars['Cursor']['output'] | string
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
      Scalars['String']['output'] | string
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
      Scalars['Datetime']['output'] | string
    >
    createdBy?: GraphCacheResolver<
      WithTypename<Report>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
    >
    eventByTargetEventId?: GraphCacheResolver<
      WithTypename<Report>,
      Record<string, never>,
      WithTypename<Event> | string
    >
    id?: GraphCacheResolver<
      WithTypename<Report>,
      Record<string, never>,
      Scalars['ID']['output'] | string
    >
    reason?: GraphCacheResolver<
      WithTypename<Report>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    rowId?: GraphCacheResolver<
      WithTypename<Report>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
    >
    targetAccountId?: GraphCacheResolver<
      WithTypename<Report>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
    >
    targetEventId?: GraphCacheResolver<
      WithTypename<Report>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
    >
    targetUploadId?: GraphCacheResolver<
      WithTypename<Report>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
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
      Scalars['Int']['output'] | string
    >
  }
  ReportEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<ReportEdge>,
      Record<string, never>,
      Scalars['Cursor']['output'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<ReportEdge>,
      Record<string, never>,
      WithTypename<Report> | string
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
      Scalars['String']['output'] | string
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
      Scalars['String']['output'] | string
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
      Scalars['String']['output'] | string
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
      Scalars['String']['output'] | string
    >
    query?: GraphCacheResolver<
      WithTypename<UpdateAttendancePayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  UpdateContactGroupPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<UpdateContactGroupPayload>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    contactGroup?: GraphCacheResolver<
      WithTypename<UpdateContactGroupPayload>,
      Record<string, never>,
      WithTypename<ContactGroup> | string
    >
    contactGroupEdge?: GraphCacheResolver<
      WithTypename<UpdateContactGroupPayload>,
      UpdateContactGroupPayloadContactGroupEdgeArgs,
      WithTypename<ContactGroupEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<UpdateContactGroupPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  UpdateContactPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<UpdateContactPayload>,
      Record<string, never>,
      Scalars['String']['output'] | string
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
      Scalars['String']['output'] | string
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
      Scalars['String']['output'] | string
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
      Scalars['String']['output'] | string
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
      Scalars['String']['output'] | string
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
      Scalars['String']['output'] | string
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
      Scalars['String']['output'] | string
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
      Scalars['Datetime']['output'] | string
    >
    createdBy?: GraphCacheResolver<
      WithTypename<Upload>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
    >
    eventUploadsByUploadId?: GraphCacheResolver<
      WithTypename<Upload>,
      UploadEventUploadsByUploadIdArgs,
      WithTypename<EventUploadConnection> | string
    >
    id?: GraphCacheResolver<
      WithTypename<Upload>,
      Record<string, never>,
      Scalars['ID']['output'] | string
    >
    name?: GraphCacheResolver<
      WithTypename<Upload>,
      Record<string, never>,
      Scalars['String']['output'] | string
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
      Scalars['UUID']['output'] | string
    >
    sizeByte?: GraphCacheResolver<
      WithTypename<Upload>,
      Record<string, never>,
      Scalars['BigInt']['output'] | string
    >
    storageKey?: GraphCacheResolver<
      WithTypename<Upload>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    type?: GraphCacheResolver<
      WithTypename<Upload>,
      Record<string, never>,
      Scalars['String']['output'] | string
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
      Scalars['Int']['output'] | string
    >
  }
  UploadEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<UploadEdge>,
      Record<string, never>,
      Scalars['Cursor']['output'] | string
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
  contactMerge?: GraphCacheOptimisticMutationResolver<
    MutationContactMergeArgs,
    Maybe<WithTypename<ContactMergePayload>>
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
  createContactGroup?: GraphCacheOptimisticMutationResolver<
    MutationCreateContactGroupArgs,
    Maybe<WithTypename<CreateContactGroupPayload>>
  >
  createContactGroupMember?: GraphCacheOptimisticMutationResolver<
    MutationCreateContactGroupMemberArgs,
    Maybe<WithTypename<CreateContactGroupMemberPayload>>
  >
  createContactGroupMembers?: GraphCacheOptimisticMutationResolver<
    MutationCreateContactGroupMembersArgs,
    Maybe<WithTypename<CreateContactGroupMembersPayload>>
  >
  createContactGroups?: GraphCacheOptimisticMutationResolver<
    MutationCreateContactGroupsArgs,
    Maybe<WithTypename<CreateContactGroupsPayload>>
  >
  createContacts?: GraphCacheOptimisticMutationResolver<
    MutationCreateContactsArgs,
    Maybe<WithTypename<CreateContactsPayload>>
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
  createEventInvitationLink?: GraphCacheOptimisticMutationResolver<
    MutationCreateEventInvitationLinkArgs,
    Maybe<WithTypename<CreateEventInvitationLinkPayload>>
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
  deleteContactGroup?: GraphCacheOptimisticMutationResolver<
    MutationDeleteContactGroupArgs,
    Maybe<WithTypename<DeleteContactGroupPayload>>
  >
  deleteContactGroupByRowId?: GraphCacheOptimisticMutationResolver<
    MutationDeleteContactGroupByRowIdArgs,
    Maybe<WithTypename<DeleteContactGroupPayload>>
  >
  deleteContactGroupMember?: GraphCacheOptimisticMutationResolver<
    MutationDeleteContactGroupMemberArgs,
    Maybe<WithTypename<DeleteContactGroupMemberPayload>>
  >
  deleteContactGroupMemberByContactGroupIdAndContactId?: GraphCacheOptimisticMutationResolver<
    MutationDeleteContactGroupMemberByContactGroupIdAndContactIdArgs,
    Maybe<WithTypename<DeleteContactGroupMemberPayload>>
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
  deleteEventInvitationLink?: GraphCacheOptimisticMutationResolver<
    MutationDeleteEventInvitationLinkArgs,
    Maybe<WithTypename<DeleteEventInvitationLinkPayload>>
  >
  deleteEventInvitationLinkByEventId?: GraphCacheOptimisticMutationResolver<
    MutationDeleteEventInvitationLinkByEventIdArgs,
    Maybe<WithTypename<DeleteEventInvitationLinkPayload>>
  >
  deleteEventInvitationLinkByRowId?: GraphCacheOptimisticMutationResolver<
    MutationDeleteEventInvitationLinkByRowIdArgs,
    Maybe<WithTypename<DeleteEventInvitationLinkPayload>>
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
  eventInvitationLinkRedeem?: GraphCacheOptimisticMutationResolver<
    MutationEventInvitationLinkRedeemArgs,
    Maybe<WithTypename<EventInvitationLinkRedeemPayload>>
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
  jwtUpdateGuestAdd?: GraphCacheOptimisticMutationResolver<
    MutationJwtUpdateGuestAddArgs,
    Maybe<WithTypename<JwtUpdateGuestAddPayload>>
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
  updateContactGroup?: GraphCacheOptimisticMutationResolver<
    MutationUpdateContactGroupArgs,
    Maybe<WithTypename<UpdateContactGroupPayload>>
  >
  updateContactGroupByRowId?: GraphCacheOptimisticMutationResolver<
    MutationUpdateContactGroupByRowIdArgs,
    Maybe<WithTypename<UpdateContactGroupPayload>>
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
      { accountUploadQuotaBytes: Maybe<Scalars['BigInt']['output']> },
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
    allContactGroupMembers?: GraphCacheUpdateResolver<
      {
        allContactGroupMembers: Maybe<
          WithTypename<ContactGroupMemberConnection>
        >
      },
      QueryAllContactGroupMembersArgs
    >
    allContactGroups?: GraphCacheUpdateResolver<
      { allContactGroups: Maybe<WithTypename<ContactGroupConnection>> },
      QueryAllContactGroupsArgs
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
    allEventInvitationLinks?: GraphCacheUpdateResolver<
      {
        allEventInvitationLinks: Maybe<
          WithTypename<EventInvitationLinkConnection>
        >
      },
      QueryAllEventInvitationLinksArgs
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
      { attendanceClaimArray: Maybe<Array<Scalars['UUID']['output']>> },
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
    contactGroup?: GraphCacheUpdateResolver<
      { contactGroup: Maybe<WithTypename<ContactGroup>> },
      QueryContactGroupArgs
    >
    contactGroupByRowId?: GraphCacheUpdateResolver<
      { contactGroupByRowId: Maybe<WithTypename<ContactGroup>> },
      QueryContactGroupByRowIdArgs
    >
    contactGroupMember?: GraphCacheUpdateResolver<
      { contactGroupMember: Maybe<WithTypename<ContactGroupMember>> },
      QueryContactGroupMemberArgs
    >
    contactGroupMemberByContactGroupIdAndContactId?: GraphCacheUpdateResolver<
      {
        contactGroupMemberByContactGroupIdAndContactId: Maybe<
          WithTypename<ContactGroupMember>
        >
      },
      QueryContactGroupMemberByContactGroupIdAndContactIdArgs
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
    eventByInvitationLink?: GraphCacheUpdateResolver<
      { eventByInvitationLink: Maybe<WithTypename<Event>> },
      QueryEventByInvitationLinkArgs
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
      { eventGuestCountMaximum: Maybe<Scalars['Int']['output']> },
      QueryEventGuestCountMaximumArgs
    >
    eventInvitationLink?: GraphCacheUpdateResolver<
      { eventInvitationLink: Maybe<WithTypename<EventInvitationLink>> },
      QueryEventInvitationLinkArgs
    >
    eventInvitationLinkByEventId?: GraphCacheUpdateResolver<
      {
        eventInvitationLinkByEventId: Maybe<WithTypename<EventInvitationLink>>
      },
      QueryEventInvitationLinkByEventIdArgs
    >
    eventInvitationLinkByRowId?: GraphCacheUpdateResolver<
      { eventInvitationLinkByRowId: Maybe<WithTypename<EventInvitationLink>> },
      QueryEventInvitationLinkByRowIdArgs
    >
    eventNearby?: GraphCacheUpdateResolver<
      { eventNearby: Maybe<WithTypename<EventConnection>> },
      QueryEventNearbyArgs
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
      { guestClaimArray: Maybe<Array<Scalars['UUID']['output']>> },
      Record<string, never>
    >
    guestContactIds?: GraphCacheUpdateResolver<
      { guestContactIds: Maybe<WithTypename<GuestContactIdsConnection>> },
      QueryGuestContactIdsArgs
    >
    guestCount?: GraphCacheUpdateResolver<
      { guestCount: Maybe<Scalars['Int']['output']> },
      QueryGuestCountArgs
    >
    id?: GraphCacheUpdateResolver<
      { id: Scalars['ID']['output'] },
      Record<string, never>
    >
    invokerAccountId?: GraphCacheUpdateResolver<
      { invokerAccountId: Maybe<Scalars['UUID']['output']> },
      Record<string, never>
    >
    languageIsoFullTextSearch?: GraphCacheUpdateResolver<
      { languageIsoFullTextSearch: Maybe<Scalars['RegConfig']['output']> },
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
          | WithTypename<ContactGroup>
          | WithTypename<ContactGroupMember>
          | WithTypename<Device>
          | WithTypename<Event>
          | WithTypename<EventApp>
          | WithTypename<EventCategory>
          | WithTypename<EventCategoryMapping>
          | WithTypename<EventFavorite>
          | WithTypename<EventFormat>
          | WithTypename<EventFormatMapping>
          | WithTypename<EventInvitationLink>
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
    contactMerge?: GraphCacheUpdateResolver<
      { contactMerge: Maybe<WithTypename<ContactMergePayload>> },
      MutationContactMergeArgs
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
    createContactGroup?: GraphCacheUpdateResolver<
      { createContactGroup: Maybe<WithTypename<CreateContactGroupPayload>> },
      MutationCreateContactGroupArgs
    >
    createContactGroupMember?: GraphCacheUpdateResolver<
      {
        createContactGroupMember: Maybe<
          WithTypename<CreateContactGroupMemberPayload>
        >
      },
      MutationCreateContactGroupMemberArgs
    >
    createContactGroupMembers?: GraphCacheUpdateResolver<
      {
        createContactGroupMembers: Maybe<
          WithTypename<CreateContactGroupMembersPayload>
        >
      },
      MutationCreateContactGroupMembersArgs
    >
    createContactGroups?: GraphCacheUpdateResolver<
      { createContactGroups: Maybe<WithTypename<CreateContactGroupsPayload>> },
      MutationCreateContactGroupsArgs
    >
    createContacts?: GraphCacheUpdateResolver<
      { createContacts: Maybe<WithTypename<CreateContactsPayload>> },
      MutationCreateContactsArgs
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
    createEventInvitationLink?: GraphCacheUpdateResolver<
      {
        createEventInvitationLink: Maybe<
          WithTypename<CreateEventInvitationLinkPayload>
        >
      },
      MutationCreateEventInvitationLinkArgs
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
    deleteContactGroup?: GraphCacheUpdateResolver<
      { deleteContactGroup: Maybe<WithTypename<DeleteContactGroupPayload>> },
      MutationDeleteContactGroupArgs
    >
    deleteContactGroupByRowId?: GraphCacheUpdateResolver<
      {
        deleteContactGroupByRowId: Maybe<
          WithTypename<DeleteContactGroupPayload>
        >
      },
      MutationDeleteContactGroupByRowIdArgs
    >
    deleteContactGroupMember?: GraphCacheUpdateResolver<
      {
        deleteContactGroupMember: Maybe<
          WithTypename<DeleteContactGroupMemberPayload>
        >
      },
      MutationDeleteContactGroupMemberArgs
    >
    deleteContactGroupMemberByContactGroupIdAndContactId?: GraphCacheUpdateResolver<
      {
        deleteContactGroupMemberByContactGroupIdAndContactId: Maybe<
          WithTypename<DeleteContactGroupMemberPayload>
        >
      },
      MutationDeleteContactGroupMemberByContactGroupIdAndContactIdArgs
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
    deleteEventInvitationLink?: GraphCacheUpdateResolver<
      {
        deleteEventInvitationLink: Maybe<
          WithTypename<DeleteEventInvitationLinkPayload>
        >
      },
      MutationDeleteEventInvitationLinkArgs
    >
    deleteEventInvitationLinkByEventId?: GraphCacheUpdateResolver<
      {
        deleteEventInvitationLinkByEventId: Maybe<
          WithTypename<DeleteEventInvitationLinkPayload>
        >
      },
      MutationDeleteEventInvitationLinkByEventIdArgs
    >
    deleteEventInvitationLinkByRowId?: GraphCacheUpdateResolver<
      {
        deleteEventInvitationLinkByRowId: Maybe<
          WithTypename<DeleteEventInvitationLinkPayload>
        >
      },
      MutationDeleteEventInvitationLinkByRowIdArgs
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
    eventInvitationLinkRedeem?: GraphCacheUpdateResolver<
      {
        eventInvitationLinkRedeem: Maybe<
          WithTypename<EventInvitationLinkRedeemPayload>
        >
      },
      MutationEventInvitationLinkRedeemArgs
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
    jwtUpdateGuestAdd?: GraphCacheUpdateResolver<
      { jwtUpdateGuestAdd: Maybe<WithTypename<JwtUpdateGuestAddPayload>> },
      MutationJwtUpdateGuestAddArgs
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
    updateContactGroup?: GraphCacheUpdateResolver<
      { updateContactGroup: Maybe<WithTypename<UpdateContactGroupPayload>> },
      MutationUpdateContactGroupArgs
    >
    updateContactGroupByRowId?: GraphCacheUpdateResolver<
      {
        updateContactGroupByRowId: Maybe<
          WithTypename<UpdateContactGroupPayload>
        >
      },
      MutationUpdateContactGroupByRowIdArgs
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
  Subscription?: object
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
    contactGroupsByCreatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Account>>,
      AccountContactGroupsByCreatedByArgs
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
    displayName?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Account>>,
      Record<string, never>
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
    tagSerialNumber?: GraphCacheUpdateResolver<
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
    contactGroupMembersByContactId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Contact>>,
      ContactContactGroupMembersByContactIdArgs
    >
    createdAt?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Contact>>,
      Record<string, never>
    >
    createdBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Contact>>,
      Record<string, never>
    >
    emailAddressHash?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Contact>>,
      Record<string, never>
    >
    emailAddresses?: GraphCacheUpdateResolver<
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
  ContactGroup?: {
    accountByCreatedBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ContactGroup>>,
      Record<string, never>
    >
    contactGroupMembersByContactGroupId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ContactGroup>>,
      ContactGroupContactGroupMembersByContactGroupIdArgs
    >
    createdAt?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ContactGroup>>,
      Record<string, never>
    >
    createdBy?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ContactGroup>>,
      Record<string, never>
    >
    id?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ContactGroup>>,
      Record<string, never>
    >
    name?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ContactGroup>>,
      Record<string, never>
    >
    rowId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ContactGroup>>,
      Record<string, never>
    >
  }
  ContactGroupConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ContactGroupConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ContactGroupConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ContactGroupConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ContactGroupConnection>>,
      Record<string, never>
    >
  }
  ContactGroupEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ContactGroupEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ContactGroupEdge>>,
      Record<string, never>
    >
  }
  ContactGroupMember?: {
    contactByContactId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ContactGroupMember>>,
      Record<string, never>
    >
    contactGroupByContactGroupId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ContactGroupMember>>,
      Record<string, never>
    >
    contactGroupId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ContactGroupMember>>,
      Record<string, never>
    >
    contactId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ContactGroupMember>>,
      Record<string, never>
    >
    id?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ContactGroupMember>>,
      Record<string, never>
    >
  }
  ContactGroupMemberConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ContactGroupMemberConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ContactGroupMemberConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ContactGroupMemberConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ContactGroupMemberConnection>>,
      Record<string, never>
    >
  }
  ContactGroupMemberEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ContactGroupMemberEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ContactGroupMemberEdge>>,
      Record<string, never>
    >
  }
  ContactMergePayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ContactMergePayload>>,
      Record<string, never>
    >
    contactEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ContactMergePayload>>,
      ContactMergePayloadContactEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ContactMergePayload>>,
      Record<string, never>
    >
    result?: GraphCacheUpdateResolver<
      Maybe<WithTypename<ContactMergePayload>>,
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
  CreateContactGroupMemberPayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateContactGroupMemberPayload>>,
      Record<string, never>
    >
    contactGroupMember?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateContactGroupMemberPayload>>,
      Record<string, never>
    >
    contactGroupMemberEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateContactGroupMemberPayload>>,
      CreateContactGroupMemberPayloadContactGroupMemberEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateContactGroupMemberPayload>>,
      Record<string, never>
    >
  }
  CreateContactGroupMembersPayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateContactGroupMembersPayload>>,
      Record<string, never>
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateContactGroupMembersPayload>>,
      Record<string, never>
    >
    result?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateContactGroupMembersPayload>>,
      Record<string, never>
    >
  }
  CreateContactGroupPayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateContactGroupPayload>>,
      Record<string, never>
    >
    contactGroup?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateContactGroupPayload>>,
      Record<string, never>
    >
    contactGroupEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateContactGroupPayload>>,
      CreateContactGroupPayloadContactGroupEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateContactGroupPayload>>,
      Record<string, never>
    >
  }
  CreateContactGroupsPayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateContactGroupsPayload>>,
      Record<string, never>
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateContactGroupsPayload>>,
      Record<string, never>
    >
    result?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateContactGroupsPayload>>,
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
  CreateContactsPayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateContactsPayload>>,
      Record<string, never>
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateContactsPayload>>,
      Record<string, never>
    >
    result?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateContactsPayload>>,
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
  CreateEventInvitationLinkPayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateEventInvitationLinkPayload>>,
      Record<string, never>
    >
    eventInvitationLink?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateEventInvitationLinkPayload>>,
      Record<string, never>
    >
    eventInvitationLinkEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateEventInvitationLinkPayload>>,
      CreateEventInvitationLinkPayloadEventInvitationLinkEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateEventInvitationLinkPayload>>,
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
  DeleteContactGroupMemberPayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteContactGroupMemberPayload>>,
      Record<string, never>
    >
    contactGroupMember?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteContactGroupMemberPayload>>,
      Record<string, never>
    >
    contactGroupMemberEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteContactGroupMemberPayload>>,
      DeleteContactGroupMemberPayloadContactGroupMemberEdgeArgs
    >
    deletedContactGroupMemberId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteContactGroupMemberPayload>>,
      Record<string, never>
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteContactGroupMemberPayload>>,
      Record<string, never>
    >
  }
  DeleteContactGroupPayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteContactGroupPayload>>,
      Record<string, never>
    >
    contactGroup?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteContactGroupPayload>>,
      Record<string, never>
    >
    contactGroupEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteContactGroupPayload>>,
      DeleteContactGroupPayloadContactGroupEdgeArgs
    >
    deletedContactGroupId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteContactGroupPayload>>,
      Record<string, never>
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteContactGroupPayload>>,
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
  DeleteEventInvitationLinkPayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteEventInvitationLinkPayload>>,
      Record<string, never>
    >
    deletedEventInvitationLinkId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteEventInvitationLinkPayload>>,
      Record<string, never>
    >
    eventInvitationLink?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteEventInvitationLinkPayload>>,
      Record<string, never>
    >
    eventInvitationLinkEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteEventInvitationLinkPayload>>,
      DeleteEventInvitationLinkPayloadEventInvitationLinkEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteEventInvitationLinkPayload>>,
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
    eventInvitationLinkByEventId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Event>>,
      Record<string, never>
    >
    eventRecommendationsByEventId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Event>>,
      EventEventRecommendationsByEventIdArgs
    >
    eventUploadsByEventId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Event>>,
      EventEventUploadsByEventIdArgs
    >
    feedbackDeadline?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Event>>,
      Record<string, never>
    >
    guestCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Event>>,
      Record<string, never>
    >
    guestCountAccepted?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Event>>,
      Record<string, never>
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
    publishedAt?: GraphCacheUpdateResolver<
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
  EventInvitationLink?: {
    createdAt?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventInvitationLink>>,
      Record<string, never>
    >
    eventByEventId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventInvitationLink>>,
      Record<string, never>
    >
    eventId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventInvitationLink>>,
      Record<string, never>
    >
    id?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventInvitationLink>>,
      Record<string, never>
    >
    rowId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventInvitationLink>>,
      Record<string, never>
    >
  }
  EventInvitationLinkConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventInvitationLinkConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventInvitationLinkConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventInvitationLinkConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventInvitationLinkConnection>>,
      Record<string, never>
    >
  }
  EventInvitationLinkEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventInvitationLinkEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventInvitationLinkEdge>>,
      Record<string, never>
    >
  }
  EventInvitationLinkRedeemPayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventInvitationLinkRedeemPayload>>,
      Record<string, never>
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventInvitationLinkRedeemPayload>>,
      Record<string, never>
    >
    result?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventInvitationLinkRedeemPayload>>,
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
    companionCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Guest>>,
      Record<string, never>
    >
    companionCountRequested?: GraphCacheUpdateResolver<
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
    feedbackOverride?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Guest>>,
      Record<string, never>
    >
    feedbackReason?: GraphCacheUpdateResolver<
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
  JwtUpdateGuestAddPayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<JwtUpdateGuestAddPayload>>,
      Record<string, never>
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<JwtUpdateGuestAddPayload>>,
      Record<string, never>
    >
    result?: GraphCacheUpdateResolver<
      Maybe<WithTypename<JwtUpdateGuestAddPayload>>,
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
  UpdateContactGroupPayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateContactGroupPayload>>,
      Record<string, never>
    >
    contactGroup?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateContactGroupPayload>>,
      Record<string, never>
    >
    contactGroupEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateContactGroupPayload>>,
      UpdateContactGroupPayloadContactGroupEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateContactGroupPayload>>,
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
