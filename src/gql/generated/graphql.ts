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
  /** Reads and enables pagination through a set of `AccountInterest`. */
  accountInterestsByAccountId: AccountInterestsConnection
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
  /** Reads and enables pagination through a set of `Device`. */
  devicesByCreatedBy: DevicesConnection
  /** Reads and enables pagination through a set of `Device`. */
  devicesByUpdatedBy: DevicesConnection
  /** Reads and enables pagination through a set of `EventFavorite`. */
  eventFavoritesByCreatedBy: EventFavoritesConnection
  /** Reads and enables pagination through a set of `EventGroup`. */
  eventGroupsByAuthorAccountId: EventGroupsConnection
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
  uploadsByAccountId: UploadsConnection
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
export type AccountAccountBlocksByAuthorAccountIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<AccountBlockCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<AccountBlocksOrderBy>>
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
export type AccountEventGroupsByCreatedByArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventGroupCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<EventGroupsOrderBy>>
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
export type AccountInvitationsByUpdatedByArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<InvitationCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<InvitationsOrderBy>>
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
export type AccountUploadsByAccountIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<UploadCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<UploadsOrderBy>>
}

/** A condition to be used against `Account` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type AccountCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>
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
  /** The account's internal id. */
  id: Scalars['UUID']['input']
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
  /** The account's internal id. */
  id?: InputMaybe<Scalars['UUID']['input']>
  /** The account's username. */
  username?: InputMaybe<Scalars['String']['input']>
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
  uuid?: Maybe<Scalars['UUID']['output']>
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
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
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
  /** The contact's physical address. */
  address?: Maybe<Scalars['String']['output']>
  /** The contact author's id. */
  authorAccountId: Scalars['UUID']['output']
  /** Timestamp of when the contact was created, defaults to the current timestamp. */
  createdAt: Scalars['Datetime']['output']
  /** The contact's email address. */
  emailAddress?: Maybe<Scalars['String']['output']>
  /** Hash of the email address, generated using md5 on the lowercased trimmed version of the email. Useful to display a profile picture from Gravatar. */
  emailAddressHash?: Maybe<Scalars['String']['output']>
  /** First name of the contact. Must be between 1 and 100 characters. */
  firstName?: Maybe<Scalars['String']['output']>
  /** Reads and enables pagination through a set of `Guest`. */
  guestsByContactId: GuestsConnection
  /** Primary key, uniquely identifies each contact. */
  id: Scalars['UUID']['output']
  /** Reads and enables pagination through a set of `Invitation`. */
  invitationsByContactId: InvitationsConnection
  /** The contact's language. */
  language?: Maybe<Language>
  /** The contact's last name. */
  lastName?: Maybe<Scalars['String']['output']>
  /** The contact's nickname. */
  nickname?: Maybe<Scalars['String']['output']>
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output']
  /** The contact's international phone number in E.164 format (https://wikipedia.org/wiki/E.164). */
  phoneNumber?: Maybe<Scalars['String']['output']>
  /** The contact's ISO 8601 timezone, e.g. `+02:00`, `-05:30` or `Z`. */
  timezone?: Maybe<Scalars['String']['output']>
  /** The contact's website url. */
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
  /** Checks for equality with the object’s `address` field. */
  address?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `authorAccountId` field. */
  authorAccountId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>
  /** Checks for equality with the object’s `emailAddress` field. */
  emailAddress?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `emailAddressHash` field. */
  emailAddressHash?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `firstName` field. */
  firstName?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `lastName` field. */
  lastName?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `nickname` field. */
  nickname?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `phoneNumber` field. */
  phoneNumber?: InputMaybe<Scalars['String']['input']>
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
  /** The contact's language. */
  language?: InputMaybe<Language>
  /** The contact's last name. */
  lastName?: InputMaybe<Scalars['String']['input']>
  /** The contact's nickname. */
  nickname?: InputMaybe<Scalars['String']['input']>
  /** The contact's international phone number in E.164 format (https://wikipedia.org/wiki/E.164). */
  phoneNumber?: InputMaybe<Scalars['String']['input']>
  /** The contact's ISO 8601 timezone, e.g. `+02:00`, `-05:30` or `Z`. */
  timezone?: InputMaybe<Scalars['String']['input']>
  /** The contact's website url. */
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
  /** The contact's language. */
  language?: InputMaybe<Language>
  /** The contact's last name. */
  lastName?: InputMaybe<Scalars['String']['input']>
  /** The contact's nickname. */
  nickname?: InputMaybe<Scalars['String']['input']>
  /** The contact's international phone number in E.164 format (https://wikipedia.org/wiki/E.164). */
  phoneNumber?: InputMaybe<Scalars['String']['input']>
  /** The contact's ISO 8601 timezone, e.g. `+02:00`, `-05:30` or `Z`. */
  timezone?: InputMaybe<Scalars['String']['input']>
  /** The contact's website url. */
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
  AddressAsc = 'ADDRESS_ASC',
  AddressDesc = 'ADDRESS_DESC',
  AuthorAccountIdAsc = 'AUTHOR_ACCOUNT_ID_ASC',
  AuthorAccountIdDesc = 'AUTHOR_ACCOUNT_ID_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  EmailAddressAsc = 'EMAIL_ADDRESS_ASC',
  EmailAddressDesc = 'EMAIL_ADDRESS_DESC',
  EmailAddressHashAsc = 'EMAIL_ADDRESS_HASH_ASC',
  EmailAddressHashDesc = 'EMAIL_ADDRESS_HASH_DESC',
  FirstNameAsc = 'FIRST_NAME_ASC',
  FirstNameDesc = 'FIRST_NAME_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  LastNameAsc = 'LAST_NAME_ASC',
  LastNameDesc = 'LAST_NAME_DESC',
  Natural = 'NATURAL',
  NicknameAsc = 'NICKNAME_ASC',
  NicknameDesc = 'NICKNAME_DESC',
  PhoneNumberAsc = 'PHONE_NUMBER_ASC',
  PhoneNumberDesc = 'PHONE_NUMBER_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
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
  accountByAuthorAccountId?: Maybe<Account>
  /** Reads a single `Account` that is related to this `AccountBlock`. */
  accountByBlockedAccountId?: Maybe<Account>
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
  eventCategoryByCategory?: Maybe<EventCategory>
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

/** All input for the create `EventGroup` mutation. */
export type CreateEventGroupInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The `EventGroup` to be created by this mutation. */
  eventGroup: EventGroupInput
}

/** The output of our create `EventGroup` mutation. */
export type CreateEventGroupPayload = {
  __typename?: 'CreateEventGroupPayload'
  /** Reads a single `Account` that is related to this `EventGroup`. */
  accountByCreatedBy?: Maybe<Account>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `EventGroup` that was created by this mutation. */
  eventGroup?: Maybe<EventGroup>
  /** An edge for our `EventGroup`. May be used by Relay 1. */
  eventGroupEdge?: Maybe<EventGroupsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `EventGroup` mutation. */
export type CreateEventGroupPayloadEventGroupEdgeArgs = {
  orderBy?: InputMaybe<Array<EventGroupsOrderBy>>
}

/** All input for the create `EventGrouping` mutation. */
export type CreateEventGroupingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The `EventGrouping` to be created by this mutation. */
  eventGrouping: EventGroupingInput
}

/** The output of our create `EventGrouping` mutation. */
export type CreateEventGroupingPayload = {
  __typename?: 'CreateEventGroupingPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Reads a single `Event` that is related to this `EventGrouping`. */
  eventByEventId?: Maybe<Event>
  /** Reads a single `EventGroup` that is related to this `EventGrouping`. */
  eventGroupByEventGroupId?: Maybe<EventGroup>
  /** The `EventGrouping` that was created by this mutation. */
  eventGrouping?: Maybe<EventGrouping>
  /** An edge for our `EventGrouping`. May be used by Relay 1. */
  eventGroupingEdge?: Maybe<EventGroupingsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `EventGrouping` mutation. */
export type CreateEventGroupingPayloadEventGroupingEdgeArgs = {
  orderBy?: InputMaybe<Array<EventGroupingsOrderBy>>
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

/** The output of our create `Invitation` mutation. */
export type CreateInvitationPayload = {
  __typename?: 'CreateInvitationPayload'
  /** Reads a single `Account` that is related to this `Invitation`. */
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
  accountByAccountId?: Maybe<Account>
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

/** All input for the `deleteEventGroupByCreatedByAndSlug` mutation. */
export type DeleteEventGroupByCreatedByAndSlugInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The event group creator's id. */
  createdBy: Scalars['UUID']['input']
  /** The event group's name, slugified. */
  slug: Scalars['String']['input']
}

/** All input for the `deleteEventGroupById` mutation. */
export type DeleteEventGroupByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The event group's internal id. */
  id: Scalars['UUID']['input']
}

/** All input for the `deleteEventGroup` mutation. */
export type DeleteEventGroupInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `EventGroup` to be deleted. */
  nodeId: Scalars['ID']['input']
}

/** The output of our delete `EventGroup` mutation. */
export type DeleteEventGroupPayload = {
  __typename?: 'DeleteEventGroupPayload'
  /** Reads a single `Account` that is related to this `EventGroup`. */
  accountByCreatedBy?: Maybe<Account>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  deletedEventGroupId?: Maybe<Scalars['ID']['output']>
  /** The `EventGroup` that was deleted by this mutation. */
  eventGroup?: Maybe<EventGroup>
  /** An edge for our `EventGroup`. May be used by Relay 1. */
  eventGroupEdge?: Maybe<EventGroupsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `EventGroup` mutation. */
export type DeleteEventGroupPayloadEventGroupEdgeArgs = {
  orderBy?: InputMaybe<Array<EventGroupsOrderBy>>
}

/** All input for the `deleteEventGroupingByEventIdAndEventGroupId` mutation. */
export type DeleteEventGroupingByEventIdAndEventGroupIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The event grouping's internal event group id. */
  eventGroupId: Scalars['UUID']['input']
  /** The event grouping's internal event id. */
  eventId: Scalars['UUID']['input']
}

/** All input for the `deleteEventGroupingById` mutation. */
export type DeleteEventGroupingByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The event grouping's internal id. */
  id: Scalars['UUID']['input']
}

/** All input for the `deleteEventGrouping` mutation. */
export type DeleteEventGroupingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `EventGrouping` to be deleted. */
  nodeId: Scalars['ID']['input']
}

/** The output of our delete `EventGrouping` mutation. */
export type DeleteEventGroupingPayload = {
  __typename?: 'DeleteEventGroupingPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  deletedEventGroupingId?: Maybe<Scalars['ID']['output']>
  /** Reads a single `Event` that is related to this `EventGrouping`. */
  eventByEventId?: Maybe<Event>
  /** Reads a single `EventGroup` that is related to this `EventGrouping`. */
  eventGroupByEventGroupId?: Maybe<EventGroup>
  /** The `EventGrouping` that was deleted by this mutation. */
  eventGrouping?: Maybe<EventGrouping>
  /** An edge for our `EventGrouping`. May be used by Relay 1. */
  eventGroupingEdge?: Maybe<EventGroupingsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `EventGrouping` mutation. */
export type DeleteEventGroupingPayloadEventGroupingEdgeArgs = {
  orderBy?: InputMaybe<Array<EventGroupingsOrderBy>>
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
  /** The event's internal id for which the invitation is valid. */
  eventId: Scalars['UUID']['input']
  /** The internal id of the uploaded content. */
  uploadId: Scalars['UUID']['input']
}

/** All input for the `deleteEventUploadById` mutation. */
export type DeleteEventUploadByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The event's internal id for which the invitation is valid. */
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

/** The output of our delete `Invitation` mutation. */
export type DeleteInvitationPayload = {
  __typename?: 'DeleteInvitationPayload'
  /** Reads a single `Account` that is related to this `Invitation`. */
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
  accountByAccountId?: Maybe<Account>
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
  accountByAuthorAccountId?: Maybe<Account>
  /** The event author's id. */
  authorAccountId: Scalars['UUID']['output']
  /** Timestamp of when the event was created, defaults to the current timestamp. */
  createdAt: Scalars['Datetime']['output']
  /** The event's description. */
  description?: Maybe<Scalars['String']['output']>
  /** The event's end date and time, with timezone. */
  end?: Maybe<Scalars['Datetime']['output']>
  /** Reads and enables pagination through a set of `EventCategoryMapping`. */
  eventCategoryMappingsByEventId: EventCategoryMappingsConnection
  /** Reads and enables pagination through a set of `EventGrouping`. */
  eventGroupingsByEventId: EventGroupingsConnection
  /** Reads and enables pagination through a set of `EventRecommendation`. */
  eventRecommendationsByEventId: EventRecommendationsConnection
  /** Reads and enables pagination through a set of `EventUpload`. */
  eventUploadsByEventId: EventUploadsConnection
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
export type EventEventGroupingsByEventIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventGroupingCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<EventGroupingsOrderBy>>
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

/** A condition to be used against `Event` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type EventCondition = {
  /** Checks for equality with the object’s `authorAccountId` field. */
  authorAccountId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>
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
  /** Reference to the event that is marked as a favorite. */
  eventId?: InputMaybe<Scalars['UUID']['input']>
}

/** Represents an update to a `EventFavorite`. Fields that are set will be updated. */
export type EventFavoritePatch = {
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

/** A group of events. */
export type EventGroup = Node & {
  __typename?: 'EventGroup'
  /** Reads a single `Account` that is related to this `EventGroup`. */
  accountByAuthorAccountId?: Maybe<Account>
  /** The event group author's id. */
  authorAccountId: Scalars['UUID']['output']
  /** Timestamp of when the event group was created, defaults to the current timestamp. */
  createdAt: Scalars['Datetime']['output']
  /** The event group's description. */
  description?: Maybe<Scalars['String']['output']>
  /** Reads and enables pagination through a set of `EventGrouping`. */
  eventGroupingsByEventGroupId: EventGroupingsConnection
  /** The event group's internal id. */
  id: Scalars['UUID']['output']
  /** Indicates whether the event group is archived. */
  isArchived: Scalars['Boolean']['output']
  /** The event group's name. */
  name: Scalars['String']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output']
  /** The event group's name, slugified. */
  slug: Scalars['String']['output']
}

/** A group of events. */
export type EventGroupEventGroupingsByEventGroupIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventGroupingCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<EventGroupingsOrderBy>>
}

/**
 * A condition to be used against `EventGroup` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type EventGroupCondition = {
  /** Checks for equality with the object’s `authorAccountId` field. */
  authorAccountId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `isArchived` field. */
  isArchived?: InputMaybe<Scalars['Boolean']['input']>
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `slug` field. */
  slug?: InputMaybe<Scalars['String']['input']>
}

/** An input for mutations affecting `EventGroup` */
export type EventGroupInput = {
  /** The event group creator's id. */
  createdBy: Scalars['UUID']['input']
  /** The event group's description. */
  description?: InputMaybe<Scalars['String']['input']>
  /** Indicates whether the event group is archived. */
  isArchived?: InputMaybe<Scalars['Boolean']['input']>
  /** The event group's name. */
  name: Scalars['String']['input']
}

/** Represents an update to a `EventGroup`. Fields that are set will be updated. */
export type EventGroupPatch = {
  /** The event group creator's id. */
  createdBy?: InputMaybe<Scalars['UUID']['input']>
  /** The event group's description. */
  description?: InputMaybe<Scalars['String']['input']>
  /** Indicates whether the event group is archived. */
  isArchived?: InputMaybe<Scalars['Boolean']['input']>
  /** The event group's name. */
  name?: InputMaybe<Scalars['String']['input']>
}

/** A bidirectional mapping between an event and an event group. */
export type EventGrouping = Node & {
  __typename?: 'EventGrouping'
  /** Reads a single `Event` that is related to this `EventGrouping`. */
  eventByEventId?: Maybe<Event>
  /** Reads a single `EventGroup` that is related to this `EventGrouping`. */
  eventGroupByEventGroupId?: Maybe<EventGroup>
  /** The event grouping's internal event group id. */
  eventGroupId: Scalars['UUID']['output']
  /** The event grouping's internal event id. */
  eventId: Scalars['UUID']['output']
  /** The event grouping's internal id. */
  id: Scalars['UUID']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output']
}

/**
 * A condition to be used against `EventGrouping` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type EventGroupingCondition = {
  /** Checks for equality with the object’s `eventGroupId` field. */
  eventGroupId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `eventId` field. */
  eventId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>
}

/** An input for mutations affecting `EventGrouping` */
export type EventGroupingInput = {
  /** The event grouping's internal event group id. */
  eventGroupId: Scalars['UUID']['input']
  /** The event grouping's internal event id. */
  eventId: Scalars['UUID']['input']
}

/** Represents an update to a `EventGrouping`. Fields that are set will be updated. */
export type EventGroupingPatch = {
  /** The event grouping's internal event group id. */
  eventGroupId?: InputMaybe<Scalars['UUID']['input']>
  /** The event grouping's internal event id. */
  eventId?: InputMaybe<Scalars['UUID']['input']>
}

/** A connection to a list of `EventGrouping` values. */
export type EventGroupingsConnection = {
  __typename?: 'EventGroupingsConnection'
  /** A list of edges which contains the `EventGrouping` and cursor to aid in pagination. */
  edges: Array<EventGroupingsEdge>
  /** A list of `EventGrouping` objects. */
  nodes: Array<EventGrouping>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `EventGrouping` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `EventGrouping` edge in the connection. */
export type EventGroupingsEdge = {
  __typename?: 'EventGroupingsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `EventGrouping` at the end of the edge. */
  node: EventGrouping
}

/** Methods to use when ordering `EventGrouping`. */
export enum EventGroupingsOrderBy {
  EventGroupIdAsc = 'EVENT_GROUP_ID_ASC',
  EventGroupIdDesc = 'EVENT_GROUP_ID_DESC',
  EventIdAsc = 'EVENT_ID_ASC',
  EventIdDesc = 'EVENT_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
}

/** A connection to a list of `EventGroup` values. */
export type EventGroupsConnection = {
  __typename?: 'EventGroupsConnection'
  /** A list of edges which contains the `EventGroup` and cursor to aid in pagination. */
  edges: Array<EventGroupsEdge>
  /** A list of `EventGroup` objects. */
  nodes: Array<EventGroup>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `EventGroup` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `EventGroup` edge in the connection. */
export type EventGroupsEdge = {
  __typename?: 'EventGroupsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `EventGroup` at the end of the edge. */
  node: EventGroup
}

/** Methods to use when ordering `EventGroup`. */
export enum EventGroupsOrderBy {
  AuthorAccountIdAsc = 'AUTHOR_ACCOUNT_ID_ASC',
  AuthorAccountIdDesc = 'AUTHOR_ACCOUNT_ID_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  IsArchivedAsc = 'IS_ARCHIVED_ASC',
  IsArchivedDesc = 'IS_ARCHIVED_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SlugAsc = 'SLUG_ASC',
  SlugDesc = 'SLUG_DESC',
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

/** An assignment of an uploaded content (e.g. an image) to an event. */
export type EventUpload = Node & {
  __typename?: 'EventUpload'
  /** Reads a single `Event` that is related to this `EventUpload`. */
  eventByEventId?: Maybe<Event>
  /** The event's internal id for which the invitation is valid. */
  eventId: Scalars['UUID']['output']
  /** The event's internal id for which the invitation is valid. */
  id: Scalars['UUID']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output']
  /** Reads a single `Upload` that is related to this `EventUpload`. */
  uploadByUploadId?: Maybe<Upload>
  /** The internal id of the uploaded content. */
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
  /** Checks for equality with the object’s `uploadId` field. */
  uploadId?: InputMaybe<Scalars['UUID']['input']>
}

/** An input for mutations affecting `EventUpload` */
export type EventUploadInput = {
  /** The event's internal id for which the invitation is valid. */
  eventId: Scalars['UUID']['input']
  /** The internal id of the uploaded content. */
  uploadId: Scalars['UUID']['input']
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
  AuthorAccountIdAsc = 'AUTHOR_ACCOUNT_ID_ASC',
  AuthorAccountIdDesc = 'AUTHOR_ACCOUNT_ID_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
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

/** An invitation for a contact. A bidirectional mapping between an event and a contact. */
export type Invitation = Node & {
  __typename?: 'Invitation'
  /** Reads a single `Account` that is related to this `Invitation`. */
  accountByUpdatedBy?: Maybe<Account>
  /** Reads a single `Contact` that is related to this `Invitation`. */
  contactByContactId?: Maybe<Contact>
  /** The internal id of the guest's contact. */
  contactId: Scalars['UUID']['output']
  /** Timestamp of when the invitation was created, defaults to the current timestamp. */
  createdAt: Scalars['Datetime']['output']
  /** Reads a single `Event` that is related to this `Invitation`. */
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
  /** Timestamp of when the invitation was last updated. */
  updatedAt?: Maybe<Scalars['Datetime']['output']>
  /** The id of the account which last updated the invitation. `NULL` if the invitation was updated by an anonymous user. */
  updatedBy?: Maybe<Scalars['UUID']['output']>
}

/** A condition to be used against `Guest` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type GuestCondition = {
  /** Checks for equality with the object’s `contactId` field. */
  contactId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `eventId` field. */
  eventId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `feedback` field. */
  feedback?: InputMaybe<InvitationFeedback>
  /** Checks for equality with the object’s `feedbackPaper` field. */
  feedbackPaper?: InputMaybe<InvitationFeedbackPaper>
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>
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

/** View returning flattened invitations. */
export type InvitationFlat = {
  __typename?: 'InvitationFlat'
  contactAccountId?: Maybe<Scalars['UUID']['output']>
  contactAddress?: Maybe<Scalars['String']['output']>
  contactAuthorAccountId?: Maybe<Scalars['UUID']['output']>
  contactEmailAddress?: Maybe<Scalars['String']['output']>
  contactEmailAddressHash?: Maybe<Scalars['String']['output']>
  contactFirstName?: Maybe<Scalars['String']['output']>
  contactId?: Maybe<Scalars['UUID']['output']>
  contactLastName?: Maybe<Scalars['String']['output']>
  contactPhoneNumber?: Maybe<Scalars['String']['output']>
  contactUrl?: Maybe<Scalars['String']['output']>
  eventAuthorAccountId?: Maybe<Scalars['UUID']['output']>
  eventDescription?: Maybe<Scalars['String']['output']>
  eventEnd?: Maybe<Scalars['Datetime']['output']>
  eventId?: Maybe<Scalars['UUID']['output']>
  eventInviteeCountMaximum?: Maybe<Scalars['Int']['output']>
  eventIsArchived?: Maybe<Scalars['Boolean']['output']>
  eventIsInPerson?: Maybe<Scalars['Boolean']['output']>
  eventIsRemote?: Maybe<Scalars['Boolean']['output']>
  eventLocation?: Maybe<Scalars['String']['output']>
  eventName?: Maybe<Scalars['String']['output']>
  eventSlug?: Maybe<Scalars['String']['output']>
  eventStart?: Maybe<Scalars['Datetime']['output']>
  eventUrl?: Maybe<Scalars['String']['output']>
  eventVisibility?: Maybe<EventVisibility>
  invitationContactId?: Maybe<Scalars['UUID']['output']>
  invitationEventId?: Maybe<Scalars['UUID']['output']>
  invitationFeedback?: Maybe<InvitationFeedback>
  invitationFeedbackPaper?: Maybe<InvitationFeedbackPaper>
  invitationId?: Maybe<Scalars['UUID']['output']>
}

/**
 * A condition to be used against `InvitationFlat` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type InvitationFlatCondition = {
  /** Checks for equality with the object’s `contactAccountId` field. */
  contactAccountId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `contactAddress` field. */
  contactAddress?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `contactAuthorAccountId` field. */
  contactAuthorAccountId?: InputMaybe<Scalars['UUID']['input']>
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
  /** Checks for equality with the object’s `eventAuthorAccountId` field. */
  eventAuthorAccountId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `eventDescription` field. */
  eventDescription?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `eventEnd` field. */
  eventEnd?: InputMaybe<Scalars['Datetime']['input']>
  /** Checks for equality with the object’s `eventId` field. */
  eventId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `eventInviteeCountMaximum` field. */
  eventInviteeCountMaximum?: InputMaybe<Scalars['Int']['input']>
  /** Checks for equality with the object’s `eventIsArchived` field. */
  eventIsArchived?: InputMaybe<Scalars['Boolean']['input']>
  /** Checks for equality with the object’s `eventIsInPerson` field. */
  eventIsInPerson?: InputMaybe<Scalars['Boolean']['input']>
  /** Checks for equality with the object’s `eventIsRemote` field. */
  eventIsRemote?: InputMaybe<Scalars['Boolean']['input']>
  /** Checks for equality with the object’s `eventLocation` field. */
  eventLocation?: InputMaybe<Scalars['String']['input']>
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
  /** Checks for equality with the object’s `invitationContactId` field. */
  invitationContactId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `invitationEventId` field. */
  invitationEventId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `invitationFeedback` field. */
  invitationFeedback?: InputMaybe<InvitationFeedback>
  /** Checks for equality with the object’s `invitationFeedbackPaper` field. */
  invitationFeedbackPaper?: InputMaybe<InvitationFeedbackPaper>
  /** Checks for equality with the object’s `invitationId` field. */
  invitationId?: InputMaybe<Scalars['UUID']['input']>
}

/** A connection to a list of `InvitationFlat` values. */
export type InvitationFlatsConnection = {
  __typename?: 'InvitationFlatsConnection'
  /** A list of edges which contains the `InvitationFlat` and cursor to aid in pagination. */
  edges: Array<InvitationFlatsEdge>
  /** A list of `InvitationFlat` objects. */
  nodes: Array<InvitationFlat>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `InvitationFlat` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `InvitationFlat` edge in the connection. */
export type InvitationFlatsEdge = {
  __typename?: 'InvitationFlatsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `InvitationFlat` at the end of the edge. */
  node: InvitationFlat
}

/** Methods to use when ordering `InvitationFlat`. */
export enum InvitationFlatsOrderBy {
  ContactAccountIdAsc = 'CONTACT_ACCOUNT_ID_ASC',
  ContactAccountIdDesc = 'CONTACT_ACCOUNT_ID_DESC',
  ContactAddressAsc = 'CONTACT_ADDRESS_ASC',
  ContactAddressDesc = 'CONTACT_ADDRESS_DESC',
  ContactAuthorAccountIdAsc = 'CONTACT_AUTHOR_ACCOUNT_ID_ASC',
  ContactAuthorAccountIdDesc = 'CONTACT_AUTHOR_ACCOUNT_ID_DESC',
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
  EventAuthorAccountIdAsc = 'EVENT_AUTHOR_ACCOUNT_ID_ASC',
  EventAuthorAccountIdDesc = 'EVENT_AUTHOR_ACCOUNT_ID_DESC',
  EventDescriptionAsc = 'EVENT_DESCRIPTION_ASC',
  EventDescriptionDesc = 'EVENT_DESCRIPTION_DESC',
  EventEndAsc = 'EVENT_END_ASC',
  EventEndDesc = 'EVENT_END_DESC',
  EventIdAsc = 'EVENT_ID_ASC',
  EventIdDesc = 'EVENT_ID_DESC',
  EventInviteeCountMaximumAsc = 'EVENT_INVITEE_COUNT_MAXIMUM_ASC',
  EventInviteeCountMaximumDesc = 'EVENT_INVITEE_COUNT_MAXIMUM_DESC',
  EventIsArchivedAsc = 'EVENT_IS_ARCHIVED_ASC',
  EventIsArchivedDesc = 'EVENT_IS_ARCHIVED_DESC',
  EventIsInPersonAsc = 'EVENT_IS_IN_PERSON_ASC',
  EventIsInPersonDesc = 'EVENT_IS_IN_PERSON_DESC',
  EventIsRemoteAsc = 'EVENT_IS_REMOTE_ASC',
  EventIsRemoteDesc = 'EVENT_IS_REMOTE_DESC',
  EventLocationAsc = 'EVENT_LOCATION_ASC',
  EventLocationDesc = 'EVENT_LOCATION_DESC',
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
  InvitationContactIdAsc = 'INVITATION_CONTACT_ID_ASC',
  InvitationContactIdDesc = 'INVITATION_CONTACT_ID_DESC',
  InvitationEventIdAsc = 'INVITATION_EVENT_ID_ASC',
  InvitationEventIdDesc = 'INVITATION_EVENT_ID_DESC',
  InvitationFeedbackAsc = 'INVITATION_FEEDBACK_ASC',
  InvitationFeedbackDesc = 'INVITATION_FEEDBACK_DESC',
  InvitationFeedbackPaperAsc = 'INVITATION_FEEDBACK_PAPER_ASC',
  InvitationFeedbackPaperDesc = 'INVITATION_FEEDBACK_PAPER_DESC',
  InvitationIdAsc = 'INVITATION_ID_ASC',
  InvitationIdDesc = 'INVITATION_ID_DESC',
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

/** Represents an update to a `LegalTermAcceptance`. Fields that are set will be updated. */
export type LegalTermAcceptancePatch = {
  /** The user account ID that accepted the legal terms. If the account is deleted, this acceptance record will also be deleted. */
  accountId?: InputMaybe<Scalars['UUID']['input']>
  /** Timestamp showing when the legal terms were accepted, set automatically at the time of acceptance. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>
  /** Unique identifier for this legal term acceptance record. Automatically generated for each new acceptance. */
  id?: InputMaybe<Scalars['UUID']['input']>
  /** The ID of the legal terms that were accepted. Deletion of these legal terms is restricted while they are still referenced in this table. */
  legalTermId?: InputMaybe<Scalars['UUID']['input']>
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
  /** Creates a single `AccountInterest`. */
  createAccountInterest?: Maybe<CreateAccountInterestPayload>
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
  /** Creates a single `EventGroup`. */
  createEventGroup?: Maybe<CreateEventGroupPayload>
  /** Creates a single `EventGrouping`. */
  createEventGrouping?: Maybe<CreateEventGroupingPayload>
  /** Creates a single `EventRecommendation`. */
  createEventRecommendation?: Maybe<CreateEventRecommendationPayload>
  /** Creates a single `EventUpload`. */
  createEventUpload?: Maybe<CreateEventUploadPayload>
  /** Creates a single `Invitation`. */
  createInvitation?: Maybe<CreateInvitationPayload>
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
  deleteEventCategoryByCategory?: Maybe<DeleteEventCategoryPayload>
  /** Deletes a single `EventCategoryMapping` using its globally unique id. */
  deleteEventCategoryMapping?: Maybe<DeleteEventCategoryMappingPayload>
  /** Deletes a single `EventCategoryMapping` using a unique key. */
  deleteEventCategoryMappingByEventIdAndCategory?: Maybe<DeleteEventCategoryMappingPayload>
  /** Deletes a single `EventGroup` using its globally unique id. */
  deleteEventGroup?: Maybe<DeleteEventGroupPayload>
  /** Deletes a single `EventGroup` using a unique key. */
  deleteEventGroupByCreatedByAndSlug?: Maybe<DeleteEventGroupPayload>
  /** Deletes a single `EventGroup` using a unique key. */
  deleteEventGroupById?: Maybe<DeleteEventGroupPayload>
  /** Deletes a single `EventGrouping` using its globally unique id. */
  deleteEventGrouping?: Maybe<DeleteEventGroupingPayload>
  /** Deletes a single `EventGrouping` using a unique key. */
  deleteEventGroupingByEventIdAndEventGroupId?: Maybe<DeleteEventGroupingPayload>
  /** Deletes a single `EventGrouping` using a unique key. */
  deleteEventGroupingById?: Maybe<DeleteEventGroupingPayload>
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
  /** Deletes a single `Invitation` using its globally unique id. */
  deleteInvitation?: Maybe<DeleteInvitationPayload>
  /** Deletes a single `Invitation` using a unique key. */
  deleteInvitationByEventIdAndContactId?: Maybe<DeleteInvitationPayload>
  /** Deletes a single `Invitation` using a unique key. */
  deleteInvitationById?: Maybe<DeleteInvitationPayload>
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
  /** Updates a single `Account` using a unique key and a patch. */
  updateAccountById?: Maybe<UpdateAccountPayload>
  /** Updates a single `Account` using a unique key and a patch. */
  updateAccountByUsername?: Maybe<UpdateAccountPayload>
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
  updateEventCategoryByCategory?: Maybe<UpdateEventCategoryPayload>
  /** Updates a single `EventCategoryMapping` using its globally unique id and a patch. */
  updateEventCategoryMapping?: Maybe<UpdateEventCategoryMappingPayload>
  /** Updates a single `EventCategoryMapping` using a unique key and a patch. */
  updateEventCategoryMappingByEventIdAndCategory?: Maybe<UpdateEventCategoryMappingPayload>
  /** Updates a single `EventGroup` using its globally unique id and a patch. */
  updateEventGroup?: Maybe<UpdateEventGroupPayload>
  /** Updates a single `EventGroup` using a unique key and a patch. */
  updateEventGroupByCreatedByAndSlug?: Maybe<UpdateEventGroupPayload>
  /** Updates a single `EventGroup` using a unique key and a patch. */
  updateEventGroupById?: Maybe<UpdateEventGroupPayload>
  /** Updates a single `EventGrouping` using its globally unique id and a patch. */
  updateEventGrouping?: Maybe<UpdateEventGroupingPayload>
  /** Updates a single `EventGrouping` using a unique key and a patch. */
  updateEventGroupingByEventIdAndEventGroupId?: Maybe<UpdateEventGroupingPayload>
  /** Updates a single `EventGrouping` using a unique key and a patch. */
  updateEventGroupingById?: Maybe<UpdateEventGroupingPayload>
  /** Updates a single `EventRecommendation` using its globally unique id and a patch. */
  updateEventRecommendation?: Maybe<UpdateEventRecommendationPayload>
  /** Updates a single `EventRecommendation` using a unique key and a patch. */
  updateEventRecommendationByAccountIdAndEventId?: Maybe<UpdateEventRecommendationPayload>
  /** Updates a single `Invitation` using its globally unique id and a patch. */
  updateInvitation?: Maybe<UpdateInvitationPayload>
  /** Updates a single `Invitation` using a unique key and a patch. */
  updateInvitationByEventIdAndContactId?: Maybe<UpdateInvitationPayload>
  /** Updates a single `Invitation` using a unique key and a patch. */
  updateInvitationById?: Maybe<UpdateInvitationPayload>
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
  /** Creates an upload with the given size if quota is available. */
  uploadCreate?: Maybe<UploadCreatePayload>
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
export type MutationCreateAccountBlockArgs = {
  input: CreateAccountBlockInput
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
export type MutationCreateEventGroupArgs = {
  input: CreateEventGroupInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateEventGroupingArgs = {
  input: CreateEventGroupingInput
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
export type MutationDeleteEventCategoryByCategoryArgs = {
  input: DeleteEventCategoryByCategoryInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEventCategoryMappingArgs = {
  input: DeleteEventCategoryMappingInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEventCategoryMappingByEventIdAndCategoryArgs = {
  input: DeleteEventCategoryMappingByEventIdAndCategoryInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEventGroupArgs = {
  input: DeleteEventGroupInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEventGroupByCreatedByAndSlugArgs = {
  input: DeleteEventGroupByCreatedByAndSlugInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEventGroupByIdArgs = {
  input: DeleteEventGroupByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEventGroupingArgs = {
  input: DeleteEventGroupingInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEventGroupingByEventIdAndEventGroupIdArgs = {
  input: DeleteEventGroupingByEventIdAndEventGroupIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEventGroupingByIdArgs = {
  input: DeleteEventGroupingByIdInput
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
export type MutationUpdateAccountByIdArgs = {
  input: UpdateAccountByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAccountByUsernameArgs = {
  input: UpdateAccountByUsernameInput
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
export type MutationUpdateEventCategoryByCategoryArgs = {
  input: UpdateEventCategoryByCategoryInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateEventCategoryMappingArgs = {
  input: UpdateEventCategoryMappingInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateEventCategoryMappingByEventIdAndCategoryArgs = {
  input: UpdateEventCategoryMappingByEventIdAndCategoryInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateEventGroupArgs = {
  input: UpdateEventGroupInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateEventGroupByCreatedByAndSlugArgs = {
  input: UpdateEventGroupByCreatedByAndSlugInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateEventGroupByIdArgs = {
  input: UpdateEventGroupByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateEventGroupingArgs = {
  input: UpdateEventGroupingInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateEventGroupingByEventIdAndEventGroupIdArgs = {
  input: UpdateEventGroupingByEventIdAndEventGroupIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateEventGroupingByIdArgs = {
  input: UpdateEventGroupingByIdInput
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
export type MutationUpdateLegalTermAcceptanceArgs = {
  input: UpdateLegalTermAcceptanceInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateLegalTermAcceptanceByIdArgs = {
  input: UpdateLegalTermAcceptanceByIdInput
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

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUploadCreateArgs = {
  input: UploadCreateInput
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
  accountById?: Maybe<Account>
  accountByUsername?: Maybe<Account>
  /** Gets the total upload quota in bytes for the invoking account. */
  accountUploadQuotaBytes?: Maybe<Scalars['BigInt']['output']>
  /** Reads a single `Achievement` using its globally unique `ID`. */
  achievement?: Maybe<Achievement>
  achievementByAccountIdAndAchievement?: Maybe<Achievement>
  achievementById?: Maybe<Achievement>
  /** Reads and enables pagination through a set of `AccountInterest`. */
  allAccountInterests?: Maybe<AccountInterestsConnection>
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
  /** Reads and enables pagination through a set of `EventCategory`. */
  allEventCategories?: Maybe<EventCategoriesConnection>
  /** Reads and enables pagination through a set of `EventCategoryMapping`. */
  allEventCategoryMappings?: Maybe<EventCategoryMappingsConnection>
  /** Reads and enables pagination through a set of `EventGrouping`. */
  allEventGroupings?: Maybe<EventGroupingsConnection>
  /** Reads and enables pagination through a set of `EventGroup`. */
  allEventGroups?: Maybe<EventGroupsConnection>
  /** Reads and enables pagination through a set of `Event`. */
  allEvents?: Maybe<EventsConnection>
  /** Reads and enables pagination through a set of `InvitationFlat`. */
  allInvitationFlats?: Maybe<InvitationFlatsConnection>
  /** Reads and enables pagination through a set of `Invitation`. */
  allInvitations?: Maybe<InvitationsConnection>
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
  eventCategoryByCategory?: Maybe<EventCategory>
  /** Reads a single `EventCategoryMapping` using its globally unique `ID`. */
  eventCategoryMapping?: Maybe<EventCategoryMapping>
  eventCategoryMappingByEventIdAndCategory?: Maybe<EventCategoryMapping>
  /** Reads a single `EventGroup` using its globally unique `ID`. */
  eventGroup?: Maybe<EventGroup>
  eventGroupByCreatedByAndSlug?: Maybe<EventGroup>
  eventGroupById?: Maybe<EventGroup>
  /** Reads a single `EventGrouping` using its globally unique `ID`. */
  eventGrouping?: Maybe<EventGrouping>
  eventGroupingByEventIdAndEventGroupId?: Maybe<EventGrouping>
  eventGroupingById?: Maybe<EventGrouping>
  /** Add a function that returns the maximum guest count of an accessible event. */
  eventGuestCountMaximum?: Maybe<Scalars['Int']['output']>
  /** Shows if an event exists. */
  eventIsExisting?: Maybe<Scalars['Boolean']['output']>
  /** Reads a single `EventRecommendation` using its globally unique `ID`. */
  eventRecommendation?: Maybe<EventRecommendation>
  eventRecommendationByAccountIdAndEventId?: Maybe<EventRecommendation>
  /** Reads a single `EventUpload` using its globally unique `ID`. */
  eventUpload?: Maybe<EventUpload>
  eventUploadByEventIdAndUploadId?: Maybe<EventUpload>
  eventUploadById?: Maybe<EventUpload>
  /** Add a function that returns all event ids for which the invoker is the author. */
  eventsOrganized?: Maybe<EventsOrganizedConnection>
  /** Reads a single `Invitation` using its globally unique `ID`. */
  invitation?: Maybe<Invitation>
  invitationByEventIdAndContactId?: Maybe<Invitation>
  invitationById?: Maybe<Invitation>
  /** Returns the current invitation claims as UUID array. */
  invitationClaimArray?: Maybe<Array<Maybe<Scalars['UUID']['output']>>>
  /** Returns contact ids that are accessible through invitations. */
  invitationContactIds?: Maybe<InvitationContactIdsConnection>
  /** Returns the invitee count for an event. */
  inviteeCount?: Maybe<Scalars['Int']['output']>
  /** Returns the session's account id. */
  invokerAccountId?: Maybe<Scalars['UUID']['output']>
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
export type QueryAccountBlockArgs = {
  nodeId: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryAccountBlockByAuthorAccountIdAndBlockedAccountIdArgs = {
  authorAccountId: Scalars['UUID']['input']
  blockedAccountId: Scalars['UUID']['input']
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
export type QueryAllEventGroupingsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventGroupingCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<EventGroupingsOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllEventGroupsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventGroupCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<EventGroupsOrderBy>>
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
export type QueryAllInvitationFlatsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<InvitationFlatCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<InvitationFlatsOrderBy>>
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
export type QueryEventCategoryByCategoryArgs = {
  category: Scalars['String']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventCategoryMappingArgs = {
  nodeId: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventCategoryMappingByEventIdAndCategoryArgs = {
  category: Scalars['String']['input']
  eventId: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventGroupArgs = {
  nodeId: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventGroupByCreatedByAndSlugArgs = {
  createdBy: Scalars['UUID']['input']
  slug: Scalars['String']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventGroupByIdArgs = {
  id: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventGroupingArgs = {
  nodeId: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventGroupingByEventIdAndEventGroupIdArgs = {
  eventGroupId: Scalars['UUID']['input']
  eventId: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventGroupingByIdArgs = {
  id: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventGuestCountMaximumArgs = {
  eventId: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventIsExistingArgs = {
  createdBy: Scalars['UUID']['input']
  slug: Scalars['String']['input']
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

/** All input for the `updateEventFavoriteByCreatedByAndEventId` mutation. */
export type UpdateEventFavoriteByCreatedByAndEventIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Reference to the account that created the event favorite. */
  createdBy: Scalars['UUID']['input']
  /** An object where the defined keys will be set on the `EventFavorite` being updated. */
  eventFavoritePatch: EventFavoritePatch
  /** Reference to the event that is marked as a favorite. */
  eventId: Scalars['UUID']['input']
}

/** All input for the `updateEventFavoriteById` mutation. */
export type UpdateEventFavoriteByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `EventFavorite` being updated. */
  eventFavoritePatch: EventFavoritePatch
  /** Primary key, uniquely identifies each favorite entry. */
  id: Scalars['UUID']['input']
}

/** All input for the `updateEventFavorite` mutation. */
export type UpdateEventFavoriteInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `EventFavorite` being updated. */
  eventFavoritePatch: EventFavoritePatch
  /** The globally unique `ID` which will identify a single `EventFavorite` to be updated. */
  nodeId: Scalars['ID']['input']
}

/** The output of our update `EventFavorite` mutation. */
export type UpdateEventFavoritePayload = {
  __typename?: 'UpdateEventFavoritePayload'
  /** Reads a single `Account` that is related to this `EventFavorite`. */
  accountByCreatedBy?: Maybe<Account>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Reads a single `Event` that is related to this `EventFavorite`. */
  eventByEventId?: Maybe<Event>
  /** The `EventFavorite` that was updated by this mutation. */
  eventFavorite?: Maybe<EventFavorite>
  /** An edge for our `EventFavorite`. May be used by Relay 1. */
  eventFavoriteEdge?: Maybe<EventFavoritesEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our update `EventFavorite` mutation. */
export type UpdateEventFavoritePayloadEventFavoriteEdgeArgs = {
  orderBy?: InputMaybe<Array<EventFavoritesOrderBy>>
}

/** All input for the `updateEventGroupByCreatedByAndSlug` mutation. */
export type UpdateEventGroupByCreatedByAndSlugInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The event group creator's id. */
  createdBy: Scalars['UUID']['input']
  /** An object where the defined keys will be set on the `EventGroup` being updated. */
  eventGroupPatch: EventGroupPatch
  /** The event group's name, slugified. */
  slug: Scalars['String']['input']
}

/** All input for the `updateEventGroupById` mutation. */
export type UpdateEventGroupByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `EventGroup` being updated. */
  eventGroupPatch: EventGroupPatch
  /** The event group's internal id. */
  id: Scalars['UUID']['input']
}

/** All input for the `updateEventGroup` mutation. */
export type UpdateEventGroupInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `EventGroup` being updated. */
  eventGroupPatch: EventGroupPatch
  /** The globally unique `ID` which will identify a single `EventGroup` to be updated. */
  nodeId: Scalars['ID']['input']
}

/** The output of our update `EventGroup` mutation. */
export type UpdateEventGroupPayload = {
  __typename?: 'UpdateEventGroupPayload'
  /** Reads a single `Account` that is related to this `EventGroup`. */
  accountByCreatedBy?: Maybe<Account>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `EventGroup` that was updated by this mutation. */
  eventGroup?: Maybe<EventGroup>
  /** An edge for our `EventGroup`. May be used by Relay 1. */
  eventGroupEdge?: Maybe<EventGroupsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our update `EventGroup` mutation. */
export type UpdateEventGroupPayloadEventGroupEdgeArgs = {
  orderBy?: InputMaybe<Array<EventGroupsOrderBy>>
}

/** All input for the `updateEventGroupingByEventIdAndEventGroupId` mutation. */
export type UpdateEventGroupingByEventIdAndEventGroupIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The event grouping's internal event group id. */
  eventGroupId: Scalars['UUID']['input']
  /** An object where the defined keys will be set on the `EventGrouping` being updated. */
  eventGroupingPatch: EventGroupingPatch
  /** The event grouping's internal event id. */
  eventId: Scalars['UUID']['input']
}

/** All input for the `updateEventGroupingById` mutation. */
export type UpdateEventGroupingByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `EventGrouping` being updated. */
  eventGroupingPatch: EventGroupingPatch
  /** The event grouping's internal id. */
  id: Scalars['UUID']['input']
}

/** All input for the `updateEventGrouping` mutation. */
export type UpdateEventGroupingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `EventGrouping` being updated. */
  eventGroupingPatch: EventGroupingPatch
  /** The globally unique `ID` which will identify a single `EventGrouping` to be updated. */
  nodeId: Scalars['ID']['input']
}

/** The output of our update `EventGrouping` mutation. */
export type UpdateEventGroupingPayload = {
  __typename?: 'UpdateEventGroupingPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Reads a single `Event` that is related to this `EventGrouping`. */
  eventByEventId?: Maybe<Event>
  /** Reads a single `EventGroup` that is related to this `EventGrouping`. */
  eventGroupByEventGroupId?: Maybe<EventGroup>
  /** The `EventGrouping` that was updated by this mutation. */
  eventGrouping?: Maybe<EventGrouping>
  /** An edge for our `EventGrouping`. May be used by Relay 1. */
  eventGroupingEdge?: Maybe<EventGroupingsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our update `EventGrouping` mutation. */
export type UpdateEventGroupingPayloadEventGroupingEdgeArgs = {
  orderBy?: InputMaybe<Array<EventGroupingsOrderBy>>
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

/** The output of our update `Invitation` mutation. */
export type UpdateInvitationPayload = {
  __typename?: 'UpdateInvitationPayload'
  /** Reads a single `Account` that is related to this `Invitation`. */
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

/** All input for the `updateLegalTermAcceptanceById` mutation. */
export type UpdateLegalTermAcceptanceByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Unique identifier for this legal term acceptance record. Automatically generated for each new acceptance. */
  id: Scalars['UUID']['input']
  /** An object where the defined keys will be set on the `LegalTermAcceptance` being updated. */
  legalTermAcceptancePatch: LegalTermAcceptancePatch
}

/** All input for the `updateLegalTermAcceptance` mutation. */
export type UpdateLegalTermAcceptanceInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `LegalTermAcceptance` being updated. */
  legalTermAcceptancePatch: LegalTermAcceptancePatch
  /** The globally unique `ID` which will identify a single `LegalTermAcceptance` to be updated. */
  nodeId: Scalars['ID']['input']
}

/** The output of our update `LegalTermAcceptance` mutation. */
export type UpdateLegalTermAcceptancePayload = {
  __typename?: 'UpdateLegalTermAcceptancePayload'
  /** Reads a single `Account` that is related to this `LegalTermAcceptance`. */
  accountByAccountId?: Maybe<Account>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `LegalTermAcceptance` that was updated by this mutation. */
  legalTermAcceptance?: Maybe<LegalTermAcceptance>
  /** An edge for our `LegalTermAcceptance`. May be used by Relay 1. */
  legalTermAcceptanceEdge?: Maybe<LegalTermAcceptancesEdge>
  /** Reads a single `LegalTerm` that is related to this `LegalTermAcceptance`. */
  legalTermByLegalTermId?: Maybe<LegalTerm>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our update `LegalTermAcceptance` mutation. */
export type UpdateLegalTermAcceptancePayloadLegalTermAcceptanceEdgeArgs = {
  orderBy?: InputMaybe<Array<LegalTermAcceptancesOrderBy>>
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
  accountByAccountId?: Maybe<Account>
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
  accountByAccountId?: Maybe<Account>
  /** The uploader's account id. */
  accountId: Scalars['UUID']['output']
  /** The upload's internal id. */
  id: Scalars['UUID']['output']
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
  /** Checks for equality with the object’s `accountId` field. */
  accountId?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `sizeByte` field. */
  sizeByte?: InputMaybe<Scalars['BigInt']['input']>
  /** Checks for equality with the object’s `storageKey` field. */
  storageKey?: InputMaybe<Scalars['String']['input']>
}

/** All input for the `uploadCreate` mutation. */
export type UploadCreateInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  sizeByte: Scalars['BigInt']['input']
}

/** The output of our `uploadCreate` mutation. */
export type UploadCreatePayload = {
  __typename?: 'UploadCreatePayload'
  /** Reads a single `Account` that is related to this `Upload`. */
  accountByAccountId?: Maybe<Account>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  upload?: Maybe<Upload>
  /** An edge for our `Upload`. May be used by Relay 1. */
  uploadEdge?: Maybe<UploadsEdge>
}

/** The output of our `uploadCreate` mutation. */
export type UploadCreatePayloadUploadEdgeArgs = {
  orderBy?: InputMaybe<Array<UploadsOrderBy>>
}

/** An input for mutations affecting `Upload` */
export type UploadInput = {
  /** The uploader's account id. */
  accountId: Scalars['UUID']['input']
  /** The upload's size in bytes. */
  sizeByte: Scalars['BigInt']['input']
  /** The upload's storage key. */
  storageKey?: InputMaybe<Scalars['String']['input']>
}

/** Represents an update to a `Upload`. Fields that are set will be updated. */
export type UploadPatch = {
  /** The uploader's account id. */
  accountId?: InputMaybe<Scalars['UUID']['input']>
  /** The upload's size in bytes. */
  sizeByte?: InputMaybe<Scalars['BigInt']['input']>
  /** The upload's storage key. */
  storageKey?: InputMaybe<Scalars['String']['input']>
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
  AccountIdAsc = 'ACCOUNT_ID_ASC',
  AccountIdDesc = 'ACCOUNT_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SizeByteAsc = 'SIZE_BYTE_ASC',
  SizeByteDesc = 'SIZE_BYTE_DESC',
  StorageKeyAsc = 'STORAGE_KEY_ASC',
  StorageKeyDesc = 'STORAGE_KEY_DESC',
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
  accountId: any
  sizeByte: any
  storageKey?: string | null
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

export type CreateLegalTermAcceptanceMutationVariables = Exact<{
  input: CreateLegalTermAcceptanceInput
}>

export type CreateLegalTermAcceptanceMutation = {
  __typename?: 'Mutation'
  createLegalTermAcceptance?: {
    __typename?: 'CreateLegalTermAcceptancePayload'
    legalTermAcceptance?: {
      __typename?: 'LegalTermAcceptance'
      id: any
      accountId: any
      createdAt: any
      legalTermId: any
    } | null
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
}>

export type AccountRegistrationMutation = {
  __typename?: 'Mutation'
  accountRegistration?: {
    __typename?: 'AccountRegistrationPayload'
    clientMutationId?: string | null
    uuid?: any | null
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
  createEventInput: CreateEventInput
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

export type UploadCreateMutationVariables = Exact<{
  uploadCreateInput: UploadCreateInput
}>

export type UploadCreateMutation = {
  __typename?: 'Mutation'
  uploadCreate?: {
    __typename?: 'UploadCreatePayload'
    clientMutationId?: string | null
    upload?: { __typename?: 'Upload'; id: any } | null
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

export type EventIsExistingQueryVariables = Exact<{
  createdBy: Scalars['UUID']['input']
  slug: Scalars['String']['input']
}>

export type EventIsExistingQuery = {
  __typename?: 'Query'
  eventIsExisting?: boolean | null
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

export type AllLegalTermsQueryVariables = Exact<{ [key: string]: never }>

export type AllLegalTermsQuery = {
  __typename?: 'Query'
  allLegalTerms?: {
    __typename?: 'LegalTermsConnection'
    edges: Array<{
      __typename?: 'LegalTermsEdge'
      node: { __typename?: 'LegalTerm'; id: any; term: string }
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
  accountId?: InputMaybe<Scalars['UUID']['input']>
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
          { kind: 'Field', name: { kind: 'Name', value: 'accountId' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'accountId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizeByte' } },
          { kind: 'Field', name: { kind: 'Name', value: 'storageKey' } },
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
      name: { kind: 'Name', value: 'authenticate' },
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
export const AccountDeleteDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'accountDelete' },
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
      name: { kind: 'Name', value: 'accountEmailAddressVerification' },
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
      name: { kind: 'Name', value: 'jwtRefresh' },
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
export const CreateLegalTermAcceptanceDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateLegalTermAcceptance' },
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
              name: { kind: 'Name', value: 'CreateLegalTermAcceptanceInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createLegalTermAcceptance' },
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
                  name: { kind: 'Name', value: 'legalTermAcceptance' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'accountId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'legalTermId' },
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
  CreateLegalTermAcceptanceMutation,
  CreateLegalTermAcceptanceMutationVariables
>
export const AccountPasswordChangeDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'accountPasswordChange' },
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
      name: { kind: 'Name', value: 'accountPasswordReset' },
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
      name: { kind: 'Name', value: 'accountPasswordResetRequest' },
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
      name: { kind: 'Name', value: 'accountRegistration' },
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
  AccountRegistrationMutation,
  AccountRegistrationMutationVariables
>
export const AccountRegistrationRefreshDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'accountRegistrationRefresh' },
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
export const AchievementUnlockDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'achievementUnlock' },
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
      name: { kind: 'Name', value: 'createContact' },
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
      name: { kind: 'Name', value: 'deleteContactById' },
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
      name: { kind: 'Name', value: 'updateContactById' },
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
      name: { kind: 'Name', value: 'createEvent' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'createEventInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateEventInput' },
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
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'createEventInput' },
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
      name: { kind: 'Name', value: 'eventDelete' },
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
      name: { kind: 'Name', value: 'eventUnlock' },
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
      name: { kind: 'Name', value: 'updateEventById' },
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
      name: { kind: 'Name', value: 'createGuest' },
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
      name: { kind: 'Name', value: 'deleteGuestById' },
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
      name: { kind: 'Name', value: 'updateGuestById' },
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
      name: { kind: 'Name', value: 'invite' },
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
export const ProfilePictureSetDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'profilePictureSet' },
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
export const UploadCreateDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'uploadCreate' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'uploadCreateInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UploadCreateInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'uploadCreate' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'uploadCreateInput' },
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
  UploadCreateMutation,
  UploadCreateMutationVariables
>
export const AccountByIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'accountById' },
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
      name: { kind: 'Name', value: 'accountByUsername' },
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
      name: { kind: 'Name', value: 'accountUploadQuotaBytes' },
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
      name: { kind: 'Name', value: 'allAchievements' },
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
      name: { kind: 'Name', value: 'allContacts' },
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
      name: { kind: 'Name', value: 'eventByCreatedByAndSlug' },
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
export const EventIsExistingDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'eventIsExisting' },
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
            name: { kind: 'Name', value: 'eventIsExisting' },
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
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  EventIsExistingQuery,
  EventIsExistingQueryVariables
>
export const AllEventsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'allEvents' },
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
      name: { kind: 'Name', value: 'allGuests' },
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
} as unknown as DocumentNode<AllInvitationsQuery, AllInvitationsQueryVariables>
export const ProfilePictureByAccountIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'profilePictureByAccountId' },
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
          { kind: 'Field', name: { kind: 'Name', value: 'accountId' } },
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
      name: { kind: 'Name', value: 'allUploads' },
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
                      name: { kind: 'Name', value: 'accountId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'accountId' },
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
          { kind: 'Field', name: { kind: 'Name', value: 'accountId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizeByte' } },
          { kind: 'Field', name: { kind: 'Name', value: 'storageKey' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AllUploadsQuery, AllUploadsQueryVariables>
