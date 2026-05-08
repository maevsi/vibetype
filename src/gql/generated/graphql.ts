/* eslint-disable */
/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
/** An input for mutations affecting `AccountBlock` */
export type AccountBlockInput = {
  /** The account id of the user who is blocked. */
  blockedAccountId: string
  /** The account id of the user who created the account block. */
  createdBy: string
}

/** All input for the `accountDelete` mutation. */
export type AccountDeleteInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: string | null | undefined
  password: string
}

/** All input for the `accountEmailAddressVerification` mutation. */
export type AccountEmailAddressVerificationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: string | null | undefined
  code: string
}

/** All input for the `accountPasswordChange` mutation. */
export type AccountPasswordChangeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: string | null | undefined
  passwordCurrent: string
  passwordNew: string
}

/** All input for the `accountPasswordReset` mutation. */
export type AccountPasswordResetInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: string | null | undefined
  code: string
  password: string
}

/** All input for the `accountPasswordResetRequest` mutation. */
export type AccountPasswordResetRequestInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: string | null | undefined
  emailAddress: string
  language: string
}

/** Represents an update to a `Account`. Fields that are set will be updated. */
export type AccountPatch = {
  /** The account's description. Must not exceed 1,000 characters. */
  description?: string | null | undefined
  /** The account's imprint URL. Must start with "https://" and not exceed 2,000 characters. */
  imprintUrl?: string | null | undefined
}

/** All input for the `accountRegistration` mutation. */
export type AccountRegistrationInput = {
  birthDate: string
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: string | null | undefined
  emailAddress: string
  language: string
  legalTermId: string
  password: string
  username: string
}

/** All input for the `accountRegistrationRefresh` mutation. */
export type AccountRegistrationRefreshInput = {
  accountId: string
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: string | null | undefined
  language: string
}

/** Achievements that can be unlocked by users. */
export type AchievementType = 'early_bird' | 'meet_the_team'

/** All input for the `achievementUnlock` mutation. */
export type AchievementUnlockInput = {
  alias: string
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: string | null | undefined
  code: string
}

/** An input for mutations affecting `Attendance` */
export type AttendanceInput = {
  /** The contact information available to anyone with access to this attendance entry. This may differ from the guest information if the guest provided different details at check-in. */
  contactId?: string | null | undefined
  /** Who this entry is for. */
  guestId: string
}

/** Represents an update to a `Attendance`. Fields that are set will be updated. */
export type AttendancePatch = {
  /** Shows if the person has left. When this turns on, the time is saved automatically. */
  checkedOut?: boolean | null | undefined
}

/** An input for mutations affecting `Contact` */
export type ContactInput = {
  /** Optional reference to an associated account. */
  accountId?: string | null | undefined
  /** Optional reference to the physical address of the contact. */
  addressId?: string | null | undefined
  /** Reference to the account that created this contact. Enforces cascading deletion. */
  createdBy: string
  /** Email address of the contact. Must not exceed 254 characters (RFC 5321). */
  emailAddress?: string | null | undefined
  /** First name of the contact. Must be between 1 and 100 characters. */
  firstName?: string | null | undefined
  /** Reference to the preferred language of the contact. */
  language?: Language | null | undefined
  /** Last name of the contact. Must be between 1 and 100 characters. */
  lastName?: string | null | undefined
  /** Nickname of the contact. Must be between 1 and 100 characters. Useful when the contact is not commonly referred to by their legal name. */
  nickname?: string | null | undefined
  /** Additional notes about the contact. Must be between 1 and 1,000 characters. Useful for providing context or distinguishing details if the name alone is insufficient. */
  note?: string | null | undefined
  /** The international phone number of the contact, formatted according to E.164 (https://wikipedia.org/wiki/E.164). */
  phoneNumber?: string | null | undefined
  /** Time zone of the contact in IANA format, e.g., `Europe/Berlin` or `America/New_York`. */
  timeZone?: string | null | undefined
  /** URL associated with the contact, must start with "https://" and not exceed 2,000 characters. */
  url?: string | null | undefined
}

/** Represents an update to a `Contact`. Fields that are set will be updated. */
export type ContactPatch = {
  /** Optional reference to an associated account. */
  accountId?: string | null | undefined
  /** Optional reference to the physical address of the contact. */
  addressId?: string | null | undefined
  /** Reference to the account that created this contact. Enforces cascading deletion. */
  createdBy?: string | null | undefined
  /** Email address of the contact. Must not exceed 254 characters (RFC 5321). */
  emailAddress?: string | null | undefined
  /** First name of the contact. Must be between 1 and 100 characters. */
  firstName?: string | null | undefined
  /** Reference to the preferred language of the contact. */
  language?: Language | null | undefined
  /** Last name of the contact. Must be between 1 and 100 characters. */
  lastName?: string | null | undefined
  /** Nickname of the contact. Must be between 1 and 100 characters. Useful when the contact is not commonly referred to by their legal name. */
  nickname?: string | null | undefined
  /** Additional notes about the contact. Must be between 1 and 1,000 characters. Useful for providing context or distinguishing details if the name alone is insufficient. */
  note?: string | null | undefined
  /** The international phone number of the contact, formatted according to E.164 (https://wikipedia.org/wiki/E.164). */
  phoneNumber?: string | null | undefined
  /** Time zone of the contact in IANA format, e.g., `Europe/Berlin` or `America/New_York`. */
  timeZone?: string | null | undefined
  /** URL associated with the contact, must start with "https://" and not exceed 2,000 characters. */
  url?: string | null | undefined
}

/** All input for the create `AccountBlock` mutation. */
export type CreateAccountBlockInput = {
  /** The `AccountBlock` to be created by this mutation. */
  accountBlock: AccountBlockInput
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: string | null | undefined
}

/** All input for the create `Attendance` mutation. */
export type CreateAttendanceInput = {
  /** The `Attendance` to be created by this mutation. */
  attendance: AttendanceInput
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: string | null | undefined
}

/** All input for the create `Contact` mutation. */
export type CreateContactInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: string | null | undefined
  /** The `Contact` to be created by this mutation. */
  contact: ContactInput
}

/** All input for the create `EventFavorite` mutation. */
export type CreateEventFavoriteInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: string | null | undefined
  /** The `EventFavorite` to be created by this mutation. */
  eventFavorite: EventFavoriteInput
}

/** All input for the create `Event` mutation. */
export type CreateEventInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: string | null | undefined
  /** The `Event` to be created by this mutation. */
  event: EventInput
}

/** All input for the `createGuests` mutation. */
export type CreateGuestsInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: string | null | undefined
  contactIds: Array<string | null | undefined>
  eventId: string
}

/** All input for the create `PreferenceEventCategory` mutation. */
export type CreatePreferenceEventCategoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: string | null | undefined
  /** The `PreferenceEventCategory` to be created by this mutation. */
  preferenceEventCategory: PreferenceEventCategoryInput
}

/** All input for the create `PreferenceEventFormat` mutation. */
export type CreatePreferenceEventFormatInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: string | null | undefined
  /** The `PreferenceEventFormat` to be created by this mutation. */
  preferenceEventFormat: PreferenceEventFormatInput
}

/** All input for the create `PreferenceEventLocation` mutation. */
export type CreatePreferenceEventLocationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: string | null | undefined
  /** The `PreferenceEventLocation` to be created by this mutation. */
  preferenceEventLocation: PreferenceEventLocationInput
}

/** All input for the create `PreferenceEventSize` mutation. */
export type CreatePreferenceEventSizeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: string | null | undefined
  /** The `PreferenceEventSize` to be created by this mutation. */
  preferenceEventSize: PreferenceEventSizeInput
}

/** All input for the create `ProfilePicture` mutation. */
export type CreateProfilePictureInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: string | null | undefined
  /** The `ProfilePicture` to be created by this mutation. */
  profilePicture: ProfilePictureInput
}

/** All input for the create `Report` mutation. */
export type CreateReportInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: string | null | undefined
  /** The `Report` to be created by this mutation. */
  report: ReportInput
}

/** All input for the create `Upload` mutation. */
export type CreateUploadInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: string | null | undefined
  /** The `Upload` to be created by this mutation. */
  upload: UploadInput
}

/** All input for the `deleteAccountBlockByCreatedByAndBlockedAccountId` mutation. */
export type DeleteAccountBlockByCreatedByAndBlockedAccountIdInput = {
  /** The account id of the user who is blocked. */
  blockedAccountId: string
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: string | null | undefined
  /** The account id of the user who created the account block. */
  createdBy: string
}

/** All input for the `deleteContactByRowId` mutation. */
export type DeleteContactByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: string | null | undefined
  /** Primary key, uniquely identifies each contact. */
  rowId: string
}

/** All input for the `deleteEventFavoriteByRowId` mutation. */
export type DeleteEventFavoriteByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: string | null | undefined
  /** Primary key, uniquely identifies each favorite entry. */
  rowId: string
}

/** All input for the `deleteGuestByRowId` mutation. */
export type DeleteGuestByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: string | null | undefined
  /** The guest's internal id. */
  rowId: string
}

/** All input for the `deletePreferenceEventCategoryByAccountIdAndCategoryId` mutation. */
export type DeletePreferenceEventCategoryByAccountIdAndCategoryIdInput = {
  /** A user account id. */
  accountId: string
  /** An event category id. */
  categoryId: string
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: string | null | undefined
}

/** All input for the `deletePreferenceEventFormatByAccountIdAndFormatId` mutation. */
export type DeletePreferenceEventFormatByAccountIdAndFormatIdInput = {
  /** A user account id. */
  accountId: string
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: string | null | undefined
  /** The id of an event format. */
  formatId: string
}

/** All input for the `deletePreferenceEventLocationByRowId` mutation. */
export type DeletePreferenceEventLocationByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: string | null | undefined
  /** Unique identifier for the preference record. */
  rowId: string
}

/** All input for the `deletePreferenceEventSizeByAccountIdAndEventSize` mutation. */
export type DeletePreferenceEventSizeByAccountIdAndEventSizeInput = {
  /** The account's internal id. */
  accountId: string
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: string | null | undefined
  /** A preferred event size. */
  eventSize: EventSize
}

/** All input for the `deleteProfilePictureByRowId` mutation. */
export type DeleteProfilePictureByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: string | null | undefined
  /** The profile picture's internal id. */
  rowId: string
}

/** All input for the `deleteUploadByRowId` mutation. */
export type DeleteUploadByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: string | null | undefined
  /** The upload's internal id. */
  rowId: string
}

/** All input for the `eventDelete` mutation. */
export type EventDeleteInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: string | null | undefined
  id: string
  password: string
}

/** An input for mutations affecting `EventFavorite` */
export type EventFavoriteInput = {
  /** Reference to the account that created the event favorite. */
  createdBy: string
  /** Reference to the event that is marked as a favorite. */
  eventId: string
}

/** An input for mutations affecting `Event` */
export type EventInput = {
  /** Optional reference to the physical address of the event. */
  addressId?: string | null | undefined
  /** The event creator's id. */
  createdBy: string
  /** The event's description. Must be non-empty and not exceed 10,000 characters. */
  description?: string | null | undefined
  /** The event's end date and time, with time zone. */
  end?: string | null | undefined
  /** The event's maximum guest count. Must be greater than 0. */
  guestCountMaximum?: number | null | undefined
  /** Indicates whether the event is archived. */
  isArchived?: boolean | null | undefined
  /** Indicates whether the event takes place in person. */
  isInPerson?: boolean | null | undefined
  /** Indicates whether the event takes place remotely. */
  isRemote?: boolean | null | undefined
  language?: Language | null | undefined
  /** The event's name. Must be non-empty and not exceed 100 characters. */
  name: string
  /** The event's name, slugified. Must be alphanumeric with hyphens and not exceed 100 characters. */
  slug: string
  /** The event's start date and time, with time zone. */
  start: string
  /** The event's unified resource locator. Must start with "https://" and not exceed 2,000 characters. */
  url?: string | null | undefined
  /** The event's visibility. */
  visibility: EventVisibility
}

/** Represents an update to a `Event`. Fields that are set will be updated. */
export type EventPatch = {
  /** Optional reference to the physical address of the event. */
  addressId?: string | null | undefined
  /** The event creator's id. */
  createdBy?: string | null | undefined
  /** The event's description. Must be non-empty and not exceed 10,000 characters. */
  description?: string | null | undefined
  /** The event's end date and time, with time zone. */
  end?: string | null | undefined
  /** The event's maximum guest count. Must be greater than 0. */
  guestCountMaximum?: number | null | undefined
  /** Indicates whether the event is archived. */
  isArchived?: boolean | null | undefined
  /** Indicates whether the event takes place in person. */
  isInPerson?: boolean | null | undefined
  /** Indicates whether the event takes place remotely. */
  isRemote?: boolean | null | undefined
  language?: Language | null | undefined
  /** The event's name. Must be non-empty and not exceed 100 characters. */
  name?: string | null | undefined
  /** The event's name, slugified. Must be alphanumeric with hyphens and not exceed 100 characters. */
  slug?: string | null | undefined
  /** The event's start date and time, with time zone. */
  start?: string | null | undefined
  /** The event's unified resource locator. Must start with "https://" and not exceed 2,000 characters. */
  url?: string | null | undefined
  /** The event's visibility. */
  visibility?: EventVisibility | null | undefined
}

/** Possible event sizes: small, medium, large, huge. */
export type EventSize = 'huge' | 'large' | 'medium' | 'small'

/** Possible visibilities of events and event groups: public, private and unlisted. */
export type EventVisibility = 'private' | 'public' | 'unlisted'

/** Represents an update to a `Guest`. Fields that are set will be updated. */
export type GuestPatch = {
  /** The internal id of the guest's contact. */
  contactId?: string | null | undefined
  /** The internal id of the guest's event. */
  eventId?: string | null | undefined
  /** The guest's general feedback status. */
  feedback?: InvitationFeedback | null | undefined
  /** The guest's paper feedback status. */
  feedbackPaper?: InvitationFeedbackPaper | null | undefined
}

/** Possible answers to an invitation: accepted, canceled. */
export type InvitationFeedback = 'accepted' | 'canceled'

/** Possible choices on how to receive a paper invitation: none, paper, digital. */
export type InvitationFeedbackPaper = 'digital' | 'none' | 'paper'

/** All input for the `invite` mutation. */
export type InviteInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: string | null | undefined
  guestId: string
  language: string
}

/** All input for the `jwtCreate` mutation. */
export type JwtCreateInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: string | null | undefined
  password: string
  username: string
}

/** All input for the `jwtUpdateAttendanceAdd` mutation. */
export type JwtUpdateAttendanceAddInput = {
  attendanceId: string
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: string | null | undefined
}

/** All input for the `jwtUpdateGuestAdd` mutation. */
export type JwtUpdateGuestAddInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: string | null | undefined
  guestId: string
}

/** All input for the `jwtUpdate` mutation. */
export type JwtUpdateInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: string | null | undefined
  jwtId: string
}

/** Supported ISO 639 language codes. */
export type Language = 'de' | 'en'

/** An input for mutations affecting `PreferenceEventCategory` */
export type PreferenceEventCategoryInput = {
  /** A user account id. */
  accountId: string
  /** An event category id. */
  categoryId: string
  createdAt?: string | null | undefined
  rowId?: string | null | undefined
}

/** An input for mutations affecting `PreferenceEventFormat` */
export type PreferenceEventFormatInput = {
  /** A user account id. */
  accountId: string
  /** The timestammp when the record was created.. */
  createdAt?: string | null | undefined
  /** The id of an event format. */
  formatId: string
  rowId?: string | null | undefined
}

/** An input for mutations affecting `PreferenceEventLocation` */
export type PreferenceEventLocationInput = {
  /** Reference to the account that created the location preference. */
  createdBy: string
  /** Geographical point representing the preferred location, derived from latitude and longitude. */
  location: unknown
  /** Search radius in meters around the location where events are preferred. Must be positive. */
  radius: number
}

/** An input for mutations affecting `PreferenceEventSize` */
export type PreferenceEventSizeInput = {
  /** The account's internal id. */
  accountId: string
  /** A preferred event size. */
  eventSize: EventSize
  rowId?: string | null | undefined
}

/** An input for mutations affecting `ProfilePicture` */
export type ProfilePictureInput = {
  /** The account's id. */
  accountId: string
  /** The upload's id. */
  uploadId: string
}

/** An input for mutations affecting `Report` */
export type ReportInput = {
  /** The ID of the user who created the report. */
  createdBy: string
  /** The reason for the report, provided by the reporting user. Must be non-empty and not exceed 2,000 characters. */
  reason: string
  /** The ID of the account being reported, if applicable. */
  targetAccountId?: string | null | undefined
  /** The ID of the event being reported, if applicable. */
  targetEventId?: string | null | undefined
  /** The ID of the upload being reported, if applicable. */
  targetUploadId?: string | null | undefined
}

/** All input for the `updateAccountByRowId` mutation. */
export type UpdateAccountByRowIdInput = {
  /** An object where the defined keys will be set on the `Account` being updated. */
  accountPatch: AccountPatch
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: string | null | undefined
  /** The account's internal id. */
  rowId: string
}

/** All input for the `updateAccountLocation` mutation. */
export type UpdateAccountLocationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: string | null | undefined
  latitude: number
  longitude: number
}

/** All input for the `updateContactByRowId` mutation. */
export type UpdateContactByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: string | null | undefined
  /** An object where the defined keys will be set on the `Contact` being updated. */
  contactPatch: ContactPatch
  /** Primary key, uniquely identifies each contact. */
  rowId: string
}

/** All input for the `updateEventByRowId` mutation. */
export type UpdateEventByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: string | null | undefined
  /** An object where the defined keys will be set on the `Event` being updated. */
  eventPatch: EventPatch
  /** The event's internal id. */
  rowId: string
}

/** All input for the `updateGuestByRowId` mutation. */
export type UpdateGuestByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: string | null | undefined
  /** An object where the defined keys will be set on the `Guest` being updated. */
  guestPatch: GuestPatch
  /** The guest's internal id. */
  rowId: string
}

/** An input for mutations affecting `Upload` */
export type UploadInput = {
  /** The uploader's account id. */
  createdBy: string
  /** The name of the uploaded file. Must be non-empty and not exceed 300 characters. */
  name?: string | null | undefined
  /** The upload's size in bytes. */
  sizeByte: number
}

export type AccountDeleteMutationVariables = Exact<{
  input: AccountDeleteInput
}>

export type AccountDeleteMutation = {
  accountDelete: { clientMutationId: string | null } | null
}

export type AccountByRowIdQueryVariables = Exact<{
  id: string
}>

export type AccountByRowIdQuery = {
  accountByRowId: {
    id: string
    rowId: string
    username: string
    profilePictureByAccountId: {
      id: string
      rowId: string
      uploadByUploadId: {
        id: string
        rowId: string
        storageKey: string | null
      } | null
    } | null
  } | null
}

export type AccountSearchQueryVariables = Exact<{
  after?: string | null | undefined
  first?: number | null | undefined
  username?: string | null | undefined
}>

export type AccountSearchQuery = {
  allAccounts: {
    nodes: Array<{ id: string; rowId: string; username: string }>
    pageInfo: { endCursor: string | null; hasNextPage: boolean }
  } | null
}

export type DeleteAccountBlockMutationVariables = Exact<{
  input: DeleteAccountBlockByCreatedByAndBlockedAccountIdInput
}>

export type DeleteAccountBlockMutation = {
  deleteAccountBlockByCreatedByAndBlockedAccountId: {
    clientMutationId: string | null
  } | null
}

export type AttendanceGuestQueryVariables = Exact<{
  id: string
}>

export type AttendanceGuestQuery = {
  guestByRowId: {
    feedback: InvitationFeedback | null
    id: string
    rowId: string
    contactByContactId: {
      firstName: string | null
      id: string
      lastName: string | null
      language: Language | null
      nickname: string | null
      rowId: string
      accountByAccountId: { id: string; rowId: string; username: string } | null
    } | null
    attendanceByGuestId: {
      checkedOut: boolean | null
      id: string
      rowId: string
      updatedAt: string | null
    } | null
  } | null
}

export type AllLegalTermsQueryVariables = Exact<{
  language?: string | null | undefined
}>

export type AllLegalTermsQuery = {
  allLegalTerms: {
    nodes: Array<{ id: string; rowId: string; term: string }>
  } | null
}

export type EventListQueryVariables = Exact<{
  after?: string | null | undefined
  first: number
}>

export type EventListQuery = {
  allEvents: {
    totalCount: number
    nodes: Array<{
      id: string
      name: string
      rowId: string
      slug: string
      start: string
      accountByCreatedBy: { id: string; rowId: string; username: string } | null
      addressByAddressId: {
        id: string
        rowId: string
        location: { latitude: number; longitude: number } | null
      } | null
      eventFavoritesByEventId: {
        nodes: Array<{ id: string; createdBy: string; rowId: string }>
      }
      guestsByEventId: {
        nodes: Array<{
          id: string
          rowId: string
          contactByContactId: {
            accountId: string | null
            id: string
            rowId: string
          } | null
        }>
      }
    }>
    pageInfo: { hasNextPage: boolean; endCursor: string | null }
  } | null
}

export type EventSearchQueryVariables = Exact<{
  after?: string | null | undefined
  first?: number | null | undefined
  language?: Language | null | undefined
  query?: string | null | undefined
}>

export type EventSearchQuery = {
  eventSearch: {
    totalCount: number
    nodes: Array<{
      id: string
      name: string
      rowId: string
      slug: string
      start: string
      accountByCreatedBy: { id: string; rowId: string; username: string } | null
      addressByAddressId: {
        id: string
        rowId: string
        location: { latitude: number; longitude: number } | null
      } | null
      eventFavoritesByEventId: {
        nodes: Array<{ createdBy: string; id: string; rowId: string }>
      }
      guestsByEventId: {
        nodes: Array<{
          id: string
          rowId: string
          contactByContactId: {
            accountId: string | null
            id: string
            rowId: string
          } | null
        }>
      }
    }>
    pageInfo: { hasNextPage: boolean; endCursor: string | null }
  } | null
}

export type CreateEventFavoriteMutationVariables = Exact<{
  input: CreateEventFavoriteInput
}>

export type CreateEventFavoriteMutation = {
  createEventFavorite: {
    eventFavorite: {
      createdBy: string
      eventId: string
      id: string
      rowId: string
    } | null
  } | null
}

export type DeleteEventFavoriteByRowIdMutationVariables = Exact<{
  input: DeleteEventFavoriteByRowIdInput
}>

export type DeleteEventFavoriteByRowIdMutation = {
  deleteEventFavoriteByRowId: { clientMutationId: string | null } | null
}

export type AllPreferenceEventSizesQueryVariables = Exact<{
  [key: string]: never
}>

export type AllPreferenceEventSizesQuery = {
  allPreferenceEventSizes: {
    nodes: Array<{ eventSize: EventSize; id: string; rowId: string }>
  } | null
}

export type JwtUpdateGuestAddGuestMutationVariables = Exact<{
  input: JwtUpdateGuestAddInput
}>

export type JwtUpdateGuestAddGuestMutation = {
  jwtUpdateGuestAdd: { result: string | null } | null
}

export type AccountEditQueryVariables = Exact<{
  username: string
}>

export type AccountEditQuery = {
  accountByUsername: {
    description: string | null
    id: string
    imprintUrl: string | null
    rowId: string
    username: string
    profilePictureByAccountId: {
      id: string
      rowId: string
      uploadByUploadId: {
        id: string
        rowId: string
        storageKey: string | null
      } | null
    } | null
  } | null
}

export type CreateProfilePictureMutationVariables = Exact<{
  input: CreateProfilePictureInput
}>

export type CreateProfilePictureMutation = {
  createProfilePicture: {
    profilePicture: {
      id: string
      rowId: string
      uploadId: string
      accountByAccountId: {
        id: string
        rowId: string
        profilePictureByAccountId: { id: string; rowId: string } | null
      } | null
    } | null
  } | null
}

export type DeleteProfilePictureByRowIdMutationMutationVariables = Exact<{
  input: DeleteProfilePictureByRowIdInput
}>

export type DeleteProfilePictureByRowIdMutationMutation = {
  deleteProfilePictureByRowId: { clientMutationId: string | null } | null
}

export type UpdateAccountByRowIdMutationVariables = Exact<{
  input: UpdateAccountByRowIdInput
}>

export type UpdateAccountByRowIdMutation = {
  updateAccountByRowId: {
    account: {
      description: string | null
      id: string
      imprintUrl: string | null
      rowId: string
    } | null
  } | null
}

export type AccountEmailAddressVerificationMutationVariables = Exact<{
  input: AccountEmailAddressVerificationInput
}>

export type AccountEmailAddressVerificationMutation = {
  accountEmailAddressVerification: { clientMutationId: string | null } | null
}

export type AccountBlockAccountsQueryVariables = Exact<{ [key: string]: never }>

export type AccountBlockAccountsQuery = {
  accountBlockAccounts: {
    nodes: Array<{
      id: string | null
      storageKey: string | null
      username: string | null
    }>
  } | null
}

export type AccountQueryVariables = Exact<{
  username: string
}>

export type AccountQuery = {
  accountByUsername: {
    description: string | null
    id: string
    imprintUrl: string | null
    rowId: string
    achievementsByAccountId: {
      nodes: Array<{ achievement: AchievementType; id: string; rowId: string }>
    }
    eventsByCreatedBy: {
      totalCount: number
      nodes: Array<{
        id: string
        name: string
        rowId: string
        slug: string
        start: string
        eventFavoritesByEventId: {
          nodes: Array<{ createdBy: string; id: string; rowId: string }>
        }
        guestsByEventId: {
          nodes: Array<{
            id: string
            rowId: string
            contactByContactId: {
              accountId: string | null
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
  id: string
}>

export type AttendanceQuery = {
  attendanceByRowId: {
    checkedOut: boolean | null
    id: string
    rowId: string
    updatedAt: string | null
    contactByContactId: {
      firstName: string | null
      id: string
      lastName: string | null
      language: Language | null
      nickname: string | null
      rowId: string
      accountByAccountId: { id: string; rowId: string; username: string } | null
    } | null
    guestByGuestId: { id: string; rowId: string } | null
  } | null
  eventByAttendanceId: {
    id: string
    name: string
    rowId: string
    eventAppsByEventId: {
      nodes: Array<{
        id: string
        rowId: string
        appByAppId: {
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
  id: string
  attendancePatch: AttendancePatch
}>

export type AttendanceCheckOutMutation = {
  updateAttendanceByRowId: {
    attendance: { id: string; checkedOut: boolean | null; rowId: string } | null
  } | null
}

export type DashboardEventRecommendationsQueryVariables = Exact<{
  id: string
}>

export type DashboardEventRecommendationsQuery = {
  eventByRowId: {
    id: string
    name: string
    rowId: string
    slug: string
    start: string
    accountByCreatedBy: { id: string; rowId: string; username: string } | null
    addressByAddressId: {
      id: string
      rowId: string
      location: { latitude: number; longitude: number } | null
    } | null
    eventFavoritesByEventId: {
      nodes: Array<{ createdBy: string; id: string; rowId: string }>
    }
    guestsByEventId: {
      nodes: Array<{
        id: string
        rowId: string
        contactByContactId: {
          accountId: string | null
          id: string
          rowId: string
        } | null
      }>
    }
  } | null
}

export type DashboardEventUpcomingQueryVariables = Exact<{
  createdBy: string
}>

export type DashboardEventUpcomingQuery = {
  allEvents: {
    nodes: Array<{
      end: string | null
      id: string
      name: string
      rowId: string
      slug: string
      start: string
      accountByCreatedBy: { id: string; rowId: string; username: string } | null
    }>
  } | null
}

export type EventEditQueryVariables = Exact<{
  slug: string
  username: string
}>

export type EventEditQuery = {
  accountByUsername: {
    id: string
    rowId: string
    username: string
    eventsByCreatedBy: {
      nodes: Array<{
        createdBy: string
        description: string | null
        end: string | null
        id: string
        guestCountMaximum: number | null
        isArchived: boolean
        isInPerson: boolean | null
        isRemote: boolean | null
        name: string
        rowId: string
        slug: string
        start: string
        url: string | null
        visibility: EventVisibility
      }>
    }
  } | null
}

export type EventAttendanceQueryVariables = Exact<{
  slug: string
  username: string
}>

export type EventAttendanceQuery = {
  accountByUsername: {
    id: string
    eventsByCreatedBy: {
      nodes: Array<{ id: string; name: string; rowId: string; slug: string }>
    }
  } | null
}

export type AttendanceCreateMutationVariables = Exact<{
  input: CreateAttendanceInput
}>

export type AttendanceCreateMutation = {
  createAttendance: { attendance: { id: string; rowId: string } | null } | null
}

export type EventGuestsQueryVariables = Exact<{
  slug: string
  username: string
}>

export type EventGuestsQuery = {
  accountByUsername: {
    id: string
    rowId: string
    eventsByCreatedBy: {
      nodes: Array<{
        createdBy: string
        guestCountMaximum: number | null
        id: string
        name: string
        rowId: string
        slug: string
        accountByCreatedBy: {
          id: string
          rowId: string
          username: string
        } | null
        guestsByEventId: {
          totalCount: number
          nodes: Array<{
            id: string
            rowId: string
            contactByContactId: {
              accountId: string | null
              id: string
              rowId: string
            } | null
          }>
          pageInfo: { hasNextPage: boolean; endCursor: string | null }
        }
      }>
    }
  } | null
}

export type EventQueryVariables = Exact<{
  slug: string
  username: string
}>

export type EventQuery = {
  accountByUsername: {
    id: string
    rowId: string
    username: string
    eventsByCreatedBy: {
      nodes: Array<{
        createdBy: string
        description: string | null
        end: string | null
        id: string
        isArchived: boolean
        isInPerson: boolean | null
        isRemote: boolean | null
        name: string
        rowId: string
        slug: string
        start: string
        url: string | null
        visibility: EventVisibility
        accountByCreatedBy: {
          id: string
          rowId: string
          username: string
        } | null
        addressByAddressId: {
          id: string
          name: string
          rowId: string
          location: { latitude: number; longitude: number } | null
        } | null
      }>
    }
  } | null
}

export type EventListAccountQueryVariables = Exact<{
  after?: string | null | undefined
  first: number
  username: string
}>

export type EventListAccountQuery = {
  accountByUsername: {
    id: string
    rowId: string
    eventsByCreatedBy: {
      totalCount: number
      nodes: Array<{
        id: string
        name: string
        rowId: string
        slug: string
        start: string
        eventFavoritesByEventId: {
          nodes: Array<{ createdBy: string; id: string; rowId: string }>
        }
        guestsByEventId: {
          nodes: Array<{
            id: string
            rowId: string
            contactByContactId: {
              accountId: string | null
              id: string
              rowId: string
            } | null
          }>
        }
      }>
      pageInfo: { hasNextPage: boolean; endCursor: string | null }
    }
  } | null
}

export type GuestEventQueryVariables = Exact<{
  id: string
}>

export type GuestEventQuery = {
  guestByRowId: {
    feedback: InvitationFeedback | null
    id: string
    rowId: string
    contactByContactId: {
      createdBy: string
      firstName: string | null
      id: string
      lastName: string | null
      nickname: string | null
      rowId: string
      accountByAccountId: { id: string; rowId: string; username: string } | null
    } | null
    eventByEventId: {
      createdBy: string
      description: string | null
      end: string | null
      id: string
      isArchived: boolean
      isInPerson: boolean | null
      isRemote: boolean | null
      name: string
      rowId: string
      slug: string
      start: string
      url: string | null
      visibility: EventVisibility
      accountByCreatedBy: { id: string; rowId: string; username: string } | null
      addressByAddressId: {
        id: string
        name: string
        rowId: string
        location: { latitude: number; longitude: number } | null
      } | null
    } | null
  } | null
}

export type AchievementUnlockMutationVariables = Exact<{
  input: AchievementUnlockInput
}>

export type AchievementUnlockMutation = {
  achievementUnlock: {
    clientMutationId: string | null
    result: string | null
  } | null
}

export type AccountItemFragment = {
  description: string | null
  id: string
  rowId: string
  username: string
} & { ' $fragmentName'?: 'AccountItemFragment' }

export type AchievementItemFragment = {
  accountId: string
  achievement: AchievementType
  id: string
  level: number
  rowId: string
} & { ' $fragmentName'?: 'AchievementItemFragment' }

export type AddressItemFragment = {
  city: string | null
  country: string | null
  id: string
  line1: string | null
  line2: string | null
  name: string
  postalCode: string | null
  region: string | null
  rowId: string
  location: { latitude: number; longitude: number } | null
} & { ' $fragmentName'?: 'AddressItemFragment' }

export type ContactItemFragment = {
  accountId: string | null
  createdBy: string
  emailAddress: string | null
  emailAddressHash: string | null
  firstName: string | null
  id: string
  lastName: string | null
  nickname: string | null
  note: string | null
  phoneNumber: string | null
  rowId: string
  url: string | null
  accountByAccountId: { id: string; rowId: string; username: string } | null
  accountByCreatedBy: { id: string; rowId: string; username: string } | null
  addressByAddressId: {
    ' $fragmentRefs'?: { AddressItemFragment: AddressItemFragment }
  } | null
} & { ' $fragmentName'?: 'ContactItemFragment' }

export type EventCategoryItemFragment = {
  id: string
  name: string
  rowId: string
} & { ' $fragmentName'?: 'EventCategoryItemFragment' }

export type EventFormatItemFragment = {
  id: string
  name: string
  rowId: string
} & { ' $fragmentName'?: 'EventFormatItemFragment' }

export type EventItemFragment = {
  createdBy: string
  description: string | null
  end: string | null
  guestCountMaximum: number | null
  id: string
  isArchived: boolean
  isInPerson: boolean | null
  isRemote: boolean | null
  name: string
  rowId: string
  slug: string
  start: string
  url: string | null
  visibility: EventVisibility
  accountByCreatedBy: { id: string; rowId: string; username: string } | null
  addressByAddressId: {
    ' $fragmentRefs'?: { AddressItemFragment: AddressItemFragment }
  } | null
} & { ' $fragmentName'?: 'EventItemFragment' }

export type GuestItemFragment = {
  contactId: string
  eventId: string
  feedback: InvitationFeedback | null
  feedbackPaper: InvitationFeedbackPaper | null
  id: string
  rowId: string
  contactByContactId: {
    ' $fragmentRefs'?: { ContactItemFragment: ContactItemFragment }
  } | null
} & { ' $fragmentName'?: 'GuestItemFragment' }

export type PreferenceEventCategoryItemFragment = {
  accountId: string
  categoryId: string
  id: string
  rowId: string
} & { ' $fragmentName'?: 'PreferenceEventCategoryItemFragment' }

export type PreferenceEventFormatItemFragment = {
  accountId: string
  formatId: string
  id: string
  rowId: string
} & { ' $fragmentName'?: 'PreferenceEventFormatItemFragment' }

export type PreferenceEventLocationItemFragment = {
  createdAt: string
  createdBy: string
  id: string
  radius: number
  rowId: string
  location: { latitude: number; longitude: number }
} & { ' $fragmentName'?: 'PreferenceEventLocationItemFragment' }

export type ProfilePictureItemFragment = {
  accountId: string
  id: string
  rowId: string
  uploadByUploadId: {
    ' $fragmentRefs'?: { UploadItemFragment: UploadItemFragment }
  } | null
} & { ' $fragmentName'?: 'ProfilePictureItemFragment' }

export type UploadItemFragment = {
  createdBy: string
  id: string
  rowId: string
  sizeByte: number
  storageKey: string | null
} & { ' $fragmentName'?: 'UploadItemFragment' }

export type UpdateAccountLocationMutationVariables = Exact<{
  input: UpdateAccountLocationInput
}>

export type UpdateAccountLocationMutation = {
  updateAccountLocation: { clientMutationId: string | null } | null
}

export type AccountPasswordChangeMutationVariables = Exact<{
  input: AccountPasswordChangeInput
}>

export type AccountPasswordChangeMutation = {
  accountPasswordChange: { clientMutationId: string | null } | null
}

export type AccountPasswordResetMutationVariables = Exact<{
  input: AccountPasswordResetInput
}>

export type AccountPasswordResetMutation = {
  accountPasswordReset: { clientMutationId: string | null } | null
}

export type AccountPasswordResetRequestMutationVariables = Exact<{
  input: AccountPasswordResetRequestInput
}>

export type AccountPasswordResetRequestMutation = {
  accountPasswordResetRequest: { clientMutationId: string | null } | null
}

export type AccountRegistrationMutationVariables = Exact<{
  input: AccountRegistrationInput
}>

export type AccountRegistrationMutation = {
  accountRegistration: { clientMutationId: string | null } | null
}

export type AccountRegistrationRefreshMutationVariables = Exact<{
  input: AccountRegistrationRefreshInput
}>

export type AccountRegistrationRefreshMutation = {
  accountRegistrationRefresh: { clientMutationId: string | null } | null
}

export type CreateAccountBlockMutationVariables = Exact<{
  input: CreateAccountBlockInput
}>

export type CreateAccountBlockMutation = {
  createAccountBlock: { clientMutationId: string | null } | null
}

export type CreateContactMutationVariables = Exact<{
  input: CreateContactInput
}>

export type CreateContactMutation = {
  createContact: {
    contact: {
      ' $fragmentRefs'?: { ContactItemFragment: ContactItemFragment }
    } | null
  } | null
}

export type DeleteContactByRowIdMutationVariables = Exact<{
  input: DeleteContactByRowIdInput
}>

export type DeleteContactByRowIdMutation = {
  deleteContactByRowId: {
    clientMutationId: string | null
    contact: {
      ' $fragmentRefs'?: { ContactItemFragment: ContactItemFragment }
    } | null
  } | null
}

export type UpdateContactByRowIdMutationVariables = Exact<{
  input: UpdateContactByRowIdInput
}>

export type UpdateContactByRowIdMutation = {
  updateContactByRowId: {
    contact: {
      ' $fragmentRefs'?: { ContactItemFragment: ContactItemFragment }
    } | null
  } | null
}

export type CreateEventMutationVariables = Exact<{
  input: CreateEventInput
}>

export type CreateEventMutation = {
  createEvent: {
    event: {
      ' $fragmentRefs'?: { EventItemFragment: EventItemFragment }
    } | null
  } | null
}

export type EventDeleteMutationVariables = Exact<{
  input: EventDeleteInput
}>

export type EventDeleteMutation = {
  eventDelete: {
    clientMutationId: string | null
    result: {
      ' $fragmentRefs'?: { EventItemFragment: EventItemFragment }
    } | null
  } | null
}

export type UpdateEventByRowIdMutationVariables = Exact<{
  input: UpdateEventByRowIdInput
}>

export type UpdateEventByRowIdMutation = {
  updateEventByRowId: {
    event: {
      ' $fragmentRefs'?: { EventItemFragment: EventItemFragment }
    } | null
  } | null
}

export type CreateGuestsMutationVariables = Exact<{
  createGuestsInput: CreateGuestsInput
}>

export type CreateGuestsMutation = {
  createGuests: {
    result: Array<{
      id: string
      rowId: string
      contactByContactId: {
        ' $fragmentRefs'?: { ContactItemFragment: ContactItemFragment }
      } | null
    }> | null
  } | null
}

export type DeleteGuestByRowIdMutationVariables = Exact<{
  input: DeleteGuestByRowIdInput
}>

export type DeleteGuestByRowIdMutation = {
  deleteGuestByRowId: { clientMutationId: string | null } | null
}

export type UpdateGuestByRowIdMutationVariables = Exact<{
  input: UpdateGuestByRowIdInput
}>

export type UpdateGuestByRowIdMutation = {
  updateGuestByRowId: {
    guest:
      | ({
          contactByContactId: {
            ' $fragmentRefs'?: { ContactItemFragment: ContactItemFragment }
          } | null
        } & { ' $fragmentRefs'?: { GuestItemFragment: GuestItemFragment } })
      | null
  } | null
}

export type InviteMutationVariables = Exact<{
  input: InviteInput
}>

export type InviteMutation = {
  invite: { clientMutationId: string | null } | null
}

export type CreatePreferenceEventCategoryMutationVariables = Exact<{
  input: CreatePreferenceEventCategoryInput
}>

export type CreatePreferenceEventCategoryMutation = {
  createPreferenceEventCategory: {
    preferenceEventCategory: {
      ' $fragmentRefs'?: {
        PreferenceEventCategoryItemFragment: PreferenceEventCategoryItemFragment
      }
    } | null
  } | null
}

export type DeletePreferenceEventCategoryByAccountIdAndCategoryIdMutationVariables =
  Exact<{
    input: DeletePreferenceEventCategoryByAccountIdAndCategoryIdInput
  }>

export type DeletePreferenceEventCategoryByAccountIdAndCategoryIdMutation = {
  deletePreferenceEventCategoryByAccountIdAndCategoryId: {
    deletedPreferenceEventCategoryId: string | null
  } | null
}

export type CreatePreferenceEventFormatMutationVariables = Exact<{
  input: CreatePreferenceEventFormatInput
}>

export type CreatePreferenceEventFormatMutation = {
  createPreferenceEventFormat: {
    preferenceEventFormat: {
      ' $fragmentRefs'?: {
        PreferenceEventFormatItemFragment: PreferenceEventFormatItemFragment
      }
    } | null
  } | null
}

export type DeletePreferenceEventFormatByAccountIdAndFormatIdMutationVariables =
  Exact<{
    input: DeletePreferenceEventFormatByAccountIdAndFormatIdInput
  }>

export type DeletePreferenceEventFormatByAccountIdAndFormatIdMutation = {
  deletePreferenceEventFormatByAccountIdAndFormatId: {
    deletedPreferenceEventFormatId: string | null
  } | null
}

export type CreatePreferenceEventLocationMutationVariables = Exact<{
  input: CreatePreferenceEventLocationInput
}>

export type CreatePreferenceEventLocationMutation = {
  createPreferenceEventLocation: {
    preferenceEventLocation: {
      ' $fragmentRefs'?: {
        PreferenceEventLocationItemFragment: PreferenceEventLocationItemFragment
      }
    } | null
  } | null
}

export type DeletePreferenceEventLocationByRowIdMutationVariables = Exact<{
  input: DeletePreferenceEventLocationByRowIdInput
}>

export type DeletePreferenceEventLocationByRowIdMutation = {
  deletePreferenceEventLocationByRowId: {
    deletedPreferenceEventLocationId: string | null
  } | null
}

export type CreatePreferenceEventSizeMutationVariables = Exact<{
  input: CreatePreferenceEventSizeInput
}>

export type CreatePreferenceEventSizeMutation = {
  createPreferenceEventSize: { clientMutationId: string | null } | null
}

export type DeletePreferenceEventSizeByAccountIdAndEventSizeMutationVariables =
  Exact<{
    input: DeletePreferenceEventSizeByAccountIdAndEventSizeInput
  }>

export type DeletePreferenceEventSizeByAccountIdAndEventSizeMutation = {
  deletePreferenceEventSizeByAccountIdAndEventSize: {
    clientMutationId: string | null
  } | null
}

export type CreateReportMutationVariables = Exact<{
  input: CreateReportInput
}>

export type CreateReportMutation = {
  createReport: { clientMutationId: string | null } | null
}

export type CreateUploadMutationVariables = Exact<{
  input: CreateUploadInput
}>

export type CreateUploadMutation = {
  createUpload: {
    clientMutationId: string | null
    upload: { id: string; rowId: string } | null
  } | null
}

export type DeleteUploadByRowIdMutationVariables = Exact<{
  input: DeleteUploadByRowIdInput
}>

export type DeleteUploadByRowIdMutation = {
  deleteUploadByRowId: {
    clientMutationId: string | null
    upload: {
      ' $fragmentRefs'?: { UploadItemFragment: UploadItemFragment }
    } | null
  } | null
}

export type AccountByUsernameQueryVariables = Exact<{
  username: string
}>

export type AccountByUsernameQuery = {
  accountByUsername: {
    ' $fragmentRefs'?: { AccountItemFragment: AccountItemFragment }
  } | null
}

export type AccountUploadQuotaBytesQueryVariables = Exact<{
  [key: string]: never
}>

export type AccountUploadQuotaBytesQuery = {
  accountUploadQuotaBytes: number | null
}

export type AllAchievementsQueryVariables = Exact<{
  accountId?: string | null | undefined
}>

export type AllAchievementsQuery = {
  allAchievements: {
    nodes: Array<{
      ' $fragmentRefs'?: { AchievementItemFragment: AchievementItemFragment }
    }>
  } | null
}

export type AllContactsQueryVariables = Exact<{
  after?: string | null | undefined
  createdBy?: string | null | undefined
  first: number
}>

export type AllContactsQuery = {
  allContacts: {
    totalCount: number
    nodes: Array<{
      ' $fragmentRefs'?: { ContactItemFragment: ContactItemFragment }
    }>
    pageInfo: { hasNextPage: boolean; endCursor: string | null }
  } | null
}

export type EventByCreatedByAndSlugQueryVariables = Exact<{
  createdBy: string
  guestId?: string | null | undefined
  slug: string
}>

export type EventByCreatedByAndSlugQuery = {
  eventByCreatedByAndSlug:
    | ({
        guestsByEventId: {
          nodes: Array<
            {
              contactByContactId: {
                ' $fragmentRefs'?: { ContactItemFragment: ContactItemFragment }
              } | null
            } & { ' $fragmentRefs'?: { GuestItemFragment: GuestItemFragment } }
          >
        }
      } & { ' $fragmentRefs'?: { EventItemFragment: EventItemFragment } })
    | null
}

export type AllEventCategoriesQueryVariables = Exact<{ [key: string]: never }>

export type AllEventCategoriesQuery = {
  allEventCategories: {
    nodes: Array<{
      ' $fragmentRefs'?: {
        EventCategoryItemFragment: EventCategoryItemFragment
      }
    }>
  } | null
}

export type AllEventFormatsQueryVariables = Exact<{ [key: string]: never }>

export type AllEventFormatsQuery = {
  allEventFormats: {
    nodes: Array<{
      ' $fragmentRefs'?: { EventFormatItemFragment: EventFormatItemFragment }
    }>
  } | null
}

export type EventFavoriteByCreatedByAndEventIdQueryVariables = Exact<{
  createdBy: string
  eventId: string
}>

export type EventFavoriteByCreatedByAndEventIdQuery = {
  eventFavoriteByCreatedByAndEventId: {
    eventId: string
    id: string
    rowId: string
  } | null
}

export type AllGuestsQueryVariables = Exact<{
  after?: string | null | undefined
  eventId: string
  first: number
}>

export type AllGuestsQuery = {
  allGuests: {
    totalCount: number
    nodes: Array<{
      ' $fragmentRefs'?: { GuestItemFragment: GuestItemFragment }
    }>
    pageInfo: { hasNextPage: boolean; endCursor: string | null }
  } | null
}

export type AllPreferenceEventCategoriesQueryVariables = Exact<{
  [key: string]: never
}>

export type AllPreferenceEventCategoriesQuery = {
  allPreferenceEventCategories: {
    nodes: Array<{
      ' $fragmentRefs'?: {
        PreferenceEventCategoryItemFragment: PreferenceEventCategoryItemFragment
      }
    }>
  } | null
}

export type AllPreferenceEventFormatsQueryVariables = Exact<{
  [key: string]: never
}>

export type AllPreferenceEventFormatsQuery = {
  allPreferenceEventFormats: {
    nodes: Array<{
      ' $fragmentRefs'?: {
        PreferenceEventFormatItemFragment: PreferenceEventFormatItemFragment
      }
    }>
  } | null
}

export type AllPreferenceEventLocationsQueryVariables = Exact<{
  [key: string]: never
}>

export type AllPreferenceEventLocationsQuery = {
  allPreferenceEventLocations: {
    nodes: Array<{
      ' $fragmentRefs'?: {
        PreferenceEventLocationItemFragment: PreferenceEventLocationItemFragment
      }
    }>
  } | null
}

export type ProfilePictureByAccountIdQueryVariables = Exact<{
  accountId: string
}>

export type ProfilePictureByAccountIdQuery = {
  profilePictureByAccountId: {
    ' $fragmentRefs'?: {
      ProfilePictureItemFragment: ProfilePictureItemFragment
    }
  } | null
}

export type AllUploadsQueryVariables = Exact<{
  after?: string | null | undefined
  first: number
  createdBy?: string | null | undefined
}>

export type AllUploadsQuery = {
  allUploads: {
    totalCount: number
    nodes: Array<{
      ' $fragmentRefs'?: { UploadItemFragment: UploadItemFragment }
    }>
    pageInfo: { hasNextPage: boolean; endCursor: string | null }
  } | null
}

export type JwtCreateMutationVariables = Exact<{
  input: JwtCreateInput
}>

export type JwtCreateMutation = {
  jwtCreate: { clientMutationId: string | null; result: string | null } | null
}

export type JwtUpdateMutationVariables = Exact<{
  input: JwtUpdateInput
}>

export type JwtUpdateMutation = {
  jwtUpdate: { clientMutationId: string | null; result: string | null } | null
}

export type JwtUpdateAttendanceAddMutationVariables = Exact<{
  input: JwtUpdateAttendanceAddInput
}>

export type JwtUpdateAttendanceAddMutation = {
  jwtUpdateAttendanceAdd: { result: string | null } | null
}

export type JwtUpdateGuestAddMutationVariables = Exact<{
  input: JwtUpdateGuestAddInput
}>

export type JwtUpdateGuestAddMutation = {
  jwtUpdateGuestAdd: { result: string | null } | null
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
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'AccountDeleteInput' },
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
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'DeleteAccountBlockByCreatedByAndBlockedAccountIdInput',
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
              value: 'deleteAccountBlockByCreatedByAndBlockedAccountId',
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
                value: { kind: 'EnumValue', value: 'START_ASC' },
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
              name: { kind: 'Name', value: 'CreateEventFavoriteInput' },
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
              name: { kind: 'Name', value: 'DeleteEventFavoriteByRowIdInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'deleteEventFavoriteByRowId' },
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
export const JwtUpdateGuestAddGuestDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'JwtUpdateGuestAddGuest' },
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
              name: { kind: 'Name', value: 'JwtUpdateGuestAddInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'jwtUpdateGuestAdd' },
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
  JwtUpdateGuestAddGuestMutation,
  JwtUpdateGuestAddGuestMutationVariables
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
              name: { kind: 'Name', value: 'CreateProfilePictureInput' },
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
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'DeleteProfilePictureByRowIdInput' },
            },
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
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UpdateAccountByRowIdInput' },
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
                value: 'AccountEmailAddressVerificationInput',
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
            name: { kind: 'Name', value: 'accountEmailAddressVerification' },
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
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateAttendanceInput' },
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
                              name: {
                                kind: 'Name',
                                value: 'guestCountMaximum',
                              },
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
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'AchievementUnlockInput' },
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
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'AccountPasswordChangeInput' },
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
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'AccountPasswordResetInput' },
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
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'AccountPasswordResetRequestInput' },
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
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'AccountRegistrationInput' },
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
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'AccountRegistrationRefreshInput' },
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
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateAccountBlockInput' },
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
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateContactInput' },
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
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'DeleteContactByRowIdInput' },
            },
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
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UpdateContactByRowIdInput' },
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
                  name: { kind: 'Name', value: 'input' },
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
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'EventDeleteInput' },
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
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UpdateEventByRowIdInput' },
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
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'DeleteGuestByRowIdInput' },
            },
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
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UpdateGuestByRowIdInput' },
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
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'InviteInput' },
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
                value: 'CreatePreferenceEventCategoryInput',
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
            name: { kind: 'Name', value: 'createPreferenceEventCategory' },
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
              name: { kind: 'Name', value: 'CreatePreferenceEventFormatInput' },
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
              name: {
                kind: 'Name',
                value: 'CreatePreferenceEventLocationInput',
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
            name: { kind: 'Name', value: 'createPreferenceEventLocation' },
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
              name: { kind: 'Name', value: 'CreatePreferenceEventSizeInput' },
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
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateReportInput' },
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
              name: { kind: 'Name', value: 'CreateUploadInput' },
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
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'DeleteUploadByRowIdInput' },
            },
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
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'JwtCreateInput' },
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
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'JwtUpdateInput' },
            },
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
export const JwtUpdateGuestAddDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'JwtUpdateGuestAdd' },
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
              name: { kind: 'Name', value: 'JwtUpdateGuestAddInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'jwtUpdateGuestAdd' },
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
  JwtUpdateGuestAddMutation,
  JwtUpdateGuestAddMutationVariables
>
