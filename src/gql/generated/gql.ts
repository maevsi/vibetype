/* eslint-disable */
import * as types from './graphql'
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
  '\n  fragment AccountItem on Account {\n    nodeId\n    id\n    username\n  }\n': typeof types.AccountItemFragmentDoc
  '\n  fragment AchievementItem on Achievement {\n    nodeId\n    id\n    accountId\n    achievement\n    level\n  }\n': typeof types.AchievementItemFragmentDoc
  '\n  fragment AddressItem on Address {\n    id\n    city\n    country\n    line1\n    line2\n    location {\n      latitude\n      longitude\n    }\n    name\n    postalCode\n    region\n  }\n': typeof types.AddressItemFragmentDoc
  '\n  fragment ContactItem on Contact {\n    nodeId\n    id\n    accountId\n    accountByAccountId {\n      id\n      username\n    }\n    accountByCreatedBy {\n      id\n      username\n    }\n    addressByAddressId {\n      ...AddressItem\n    }\n    createdBy\n    emailAddress\n    emailAddressHash\n    firstName\n    lastName\n    phoneNumber\n    url\n  }\n': typeof types.ContactItemFragmentDoc
  '\n  fragment EventCategoryItem on EventCategory {\n    id\n    name\n  }\n': typeof types.EventCategoryItemFragmentDoc
  '\n  fragment EventFormatItem on EventFormat {\n    id\n    name\n  }\n': typeof types.EventFormatItemFragmentDoc
  '\n  fragment EventItem on Event {\n    id\n    nodeId\n    accountByCreatedBy {\n      id\n      username\n    }\n    addressByAddressId {\n      ...AddressItem\n    }\n    createdBy\n    description\n    end\n    guestCountMaximum\n    isArchived\n    isInPerson\n    isRemote\n    name\n    slug\n    start\n    url\n    visibility\n  }\n': typeof types.EventItemFragmentDoc
  '\n  fragment GuestItem on Guest {\n    id\n    nodeId\n    contactId\n    eventId\n    feedback\n    feedbackPaper\n    contactByContactId {\n      ...ContactItem\n    }\n  }\n': typeof types.GuestItemFragmentDoc
  '\n  fragment LegalTermItem on LegalTerm {\n    id\n    term\n  }\n': typeof types.LegalTermItemFragmentDoc
  '\n  fragment PreferenceEventCategoryItem on AccountPreferenceEventCategory {\n    nodeId\n    accountId\n    categoryId\n  }\n': typeof types.PreferenceEventCategoryItemFragmentDoc
  '\n  fragment PreferenceEventFormatItem on AccountPreferenceEventFormat {\n    nodeId\n    accountId\n    formatId\n  }\n': typeof types.PreferenceEventFormatItemFragmentDoc
  '\n  fragment PreferenceEventLocationItem on AccountPreferenceEventLocation {\n    createdAt\n    createdBy\n    id\n    nodeId\n    radius\n    location {\n      latitude\n      longitude\n    }\n  }\n': typeof types.PreferenceEventLocationItemFragmentDoc
  '\n  fragment ProfilePictureItem on ProfilePicture {\n    id\n    nodeId\n    accountId\n    uploadByUploadId {\n      ...UploadItem\n    }\n  }\n': typeof types.ProfilePictureItemFragmentDoc
  '\n  fragment UploadItem on Upload {\n    id\n    nodeId\n    sizeByte\n    storageKey\n    createdBy\n  }\n': typeof types.UploadItemFragmentDoc
  '\n  mutation Authenticate($password: String!, $username: String!) {\n    authenticate(input: { password: $password, username: $username }) {\n      clientMutationId\n      jwt\n    }\n  }\n': typeof types.AuthenticateDocument
  '\n  mutation UpdateAccountBirthDate($input: UpdateAccountBirthDateInput!) {\n    updateAccountBirthDate(input: $input) {\n      clientMutationId\n    }\n  }\n': typeof types.UpdateAccountBirthDateDocument
  '\n  mutation AccountDelete($password: String!) {\n    accountDelete(input: { password: $password }) {\n      clientMutationId\n    }\n  }\n': typeof types.AccountDeleteDocument
  '\n  mutation AccountEmailAddressVerification($code: UUID!) {\n    accountEmailAddressVerification(input: { code: $code }) {\n      clientMutationId\n    }\n  }\n': typeof types.AccountEmailAddressVerificationDocument
  '\n  mutation JwtRefresh($id: UUID!) {\n    jwtRefresh(input: { jwtId: $id }) {\n      clientMutationId\n      jwt\n    }\n  }\n': typeof types.JwtRefreshDocument
  '\n  mutation UpdateAccountLocation($input: UpdateAccountLocationInput!) {\n    updateAccountLocation(input: $input) {\n      clientMutationId\n    }\n  }\n': typeof types.UpdateAccountLocationDocument
  '\n  mutation AccountPasswordChange(\n    $passwordCurrent: String!\n    $passwordNew: String!\n  ) {\n    accountPasswordChange(\n      input: { passwordCurrent: $passwordCurrent, passwordNew: $passwordNew }\n    ) {\n      clientMutationId\n    }\n  }\n': typeof types.AccountPasswordChangeDocument
  '\n  mutation AccountPasswordReset($code: UUID!, $password: String!) {\n    accountPasswordReset(input: { code: $code, password: $password }) {\n      clientMutationId\n    }\n  }\n': typeof types.AccountPasswordResetDocument
  '\n  mutation AccountPasswordResetRequest(\n    $emailAddress: String!\n    $language: String!\n  ) {\n    accountPasswordResetRequest(\n      input: { emailAddress: $emailAddress, language: $language }\n    ) {\n      clientMutationId\n    }\n  }\n': typeof types.AccountPasswordResetRequestDocument
  '\n  mutation AccountRegistration(\n    $emailAddress: String!\n    $password: String!\n    $username: String!\n    $language: String!\n    $legalTermId: UUID!\n  ) {\n    accountRegistration(\n      input: {\n        emailAddress: $emailAddress\n        password: $password\n        username: $username\n        language: $language\n        legalTermId: $legalTermId\n      }\n    ) {\n      clientMutationId\n    }\n  }\n': typeof types.AccountRegistrationDocument
  '\n  mutation AccountRegistrationRefresh($accountId: UUID!, $language: String!) {\n    accountRegistrationRefresh(\n      input: { language: $language, accountId: $accountId }\n    ) {\n      clientMutationId\n    }\n  }\n': typeof types.AccountRegistrationRefreshDocument
  '\n  mutation CreateAccountBlock($accountBlockInput: AccountBlockInput!) {\n    createAccountBlock(input: { accountBlock: $accountBlockInput }) {\n      clientMutationId\n    }\n  }\n': typeof types.CreateAccountBlockDocument
  '\n  mutation AchievementUnlock($code: UUID!, $alias: String!) {\n    achievementUnlock(input: { code: $code, alias: $alias }) {\n      clientMutationId\n      uuid\n    }\n  }\n': typeof types.AchievementUnlockDocument
  '\n  mutation CreateContact($contactInput: ContactInput!) {\n    createContact(input: { contact: $contactInput }) {\n      contact {\n        ...ContactItem\n      }\n    }\n  }\n': typeof types.CreateContactDocument
  '\n  mutation DeleteContactById($id: UUID!) {\n    deleteContactById(input: { id: $id }) {\n      clientMutationId\n      contact {\n        ...ContactItem\n      }\n    }\n  }\n': typeof types.DeleteContactByIdDocument
  '\n  mutation UpdateContactById($id: UUID!, $contactPatch: ContactPatch!) {\n    updateContactById(input: { id: $id, contactPatch: $contactPatch }) {\n      contact {\n        ...ContactItem\n      }\n    }\n  }\n': typeof types.UpdateContactByIdDocument
  '\n  mutation CreateEvent($input: EventInput!) {\n    createEvent(input: { event: $input }) {\n      event {\n        ...EventItem\n      }\n    }\n  }\n': typeof types.CreateEventDocument
  '\n  mutation EventDelete($id: UUID!, $password: String!) {\n    eventDelete(input: { id: $id, password: $password }) {\n      clientMutationId\n      event {\n        ...EventItem\n      }\n    }\n  }\n': typeof types.EventDeleteDocument
  '\n  mutation EventUnlock($guestId: UUID!) {\n    eventUnlock(input: { guestId: $guestId }) {\n      eventUnlockResponse {\n        creatorUsername\n        eventSlug\n        jwt\n      }\n    }\n  }\n': typeof types.EventUnlockDocument
  '\n  mutation UpdateEventById($id: UUID!, $eventPatch: EventPatch!) {\n    updateEventById(input: { id: $id, eventPatch: $eventPatch }) {\n      event {\n        ...EventItem\n      }\n    }\n  }\n': typeof types.UpdateEventByIdDocument
  '\n  mutation CreateGuest($guestInput: GuestInput!) {\n    createGuest(input: { guest: $guestInput }) {\n      guest {\n        contactByContactId {\n          ...ContactItem\n        }\n        id\n      }\n    }\n  }\n': typeof types.CreateGuestDocument
  '\n  mutation DeleteGuestById($id: UUID!) {\n    deleteGuestById(input: { id: $id }) {\n      clientMutationId\n    }\n  }\n': typeof types.DeleteGuestByIdDocument
  '\n  mutation UpdateGuestById($id: UUID!, $guestPatch: GuestPatch!) {\n    updateGuestById(input: { id: $id, guestPatch: $guestPatch }) {\n      guest {\n        ...GuestItem\n        contactByContactId {\n          ...ContactItem\n        }\n      }\n    }\n  }\n': typeof types.UpdateGuestByIdDocument
  '\n  mutation Invite($guestId: UUID!, $language: String!) {\n    invite(input: { guestId: $guestId, language: $language }) {\n      clientMutationId\n    }\n  }\n': typeof types.InviteDocument
  '\n  mutation CreatePreferenceEventCategory(\n    $input: AccountPreferenceEventCategoryInput!\n  ) {\n    createAccountPreferenceEventCategory(\n      input: { accountPreferenceEventCategory: $input }\n    ) {\n      accountPreferenceEventCategory {\n        ...PreferenceEventCategoryItem\n      }\n    }\n  }\n': typeof types.CreatePreferenceEventCategoryDocument
  '\n    mutation DeletePreferenceEventCategoryByAccountIdAndCategoryId(\n      $input: DeleteAccountPreferenceEventCategoryByAccountIdAndCategoryIdInput!\n    ) {\n      deleteAccountPreferenceEventCategoryByAccountIdAndCategoryId(\n        input: $input\n      ) {\n        deletedAccountPreferenceEventCategoryId\n      }\n    }\n  ': typeof types.DeletePreferenceEventCategoryByAccountIdAndCategoryIdDocument
  '\n  mutation CreatePreferenceEventFormat(\n    $input: AccountPreferenceEventFormatInput!\n  ) {\n    createAccountPreferenceEventFormat(\n      input: { accountPreferenceEventFormat: $input }\n    ) {\n      accountPreferenceEventFormat {\n        ...PreferenceEventFormatItem\n      }\n    }\n  }\n': typeof types.CreatePreferenceEventFormatDocument
  '\n    mutation DeletePreferenceEventFormatByAccountIdAndFormatId(\n      $input: DeleteAccountPreferenceEventFormatByAccountIdAndFormatIdInput!\n    ) {\n      deleteAccountPreferenceEventFormatByAccountIdAndFormatId(input: $input) {\n        deletedAccountPreferenceEventFormatId\n      }\n    }\n  ': typeof types.DeletePreferenceEventFormatByAccountIdAndFormatIdDocument
  '\n  mutation CreatePreferenceEventLocation(\n    $input: AccountPreferenceEventLocationInput!\n  ) {\n    createAccountPreferenceEventLocation(\n      input: { accountPreferenceEventLocation: $input }\n    ) {\n      accountPreferenceEventLocation {\n        ...PreferenceEventLocationItem\n      }\n    }\n  }\n': typeof types.CreatePreferenceEventLocationDocument
  '\n  mutation DeletePreferenceEventLocationById(\n    $input: DeleteAccountPreferenceEventLocationByIdInput!\n  ) {\n    deleteAccountPreferenceEventLocationById(input: $input) {\n      deletedAccountPreferenceEventLocationId\n    }\n  }\n': typeof types.DeletePreferenceEventLocationByIdDocument
  '\n  mutation CreatePreferenceEventSize($input: AccountPreferenceEventSizeInput!) {\n    createAccountPreferenceEventSize(\n      input: { accountPreferenceEventSize: $input }\n    ) {\n      clientMutationId\n    }\n  }\n': typeof types.CreatePreferenceEventSizeDocument
  '\n    mutation DeletePreferenceEventSizeByAccountIdAndEventSize(\n      $input: DeleteAccountPreferenceEventSizeByAccountIdAndEventSizeInput!\n    ) {\n      deleteAccountPreferenceEventSizeByAccountIdAndEventSize(input: $input) {\n        clientMutationId\n      }\n    }\n  ': typeof types.DeletePreferenceEventSizeByAccountIdAndEventSizeDocument
  '\n  mutation ProfilePictureSet($uploadId: UUID!) {\n    profilePictureSet(input: { uploadId: $uploadId }) {\n      clientMutationId\n    }\n  }\n': typeof types.ProfilePictureSetDocument
  '\n  mutation CreateReport($reportInput: ReportInput!) {\n    createReport(input: { report: $reportInput }) {\n      clientMutationId\n    }\n  }\n': typeof types.CreateReportDocument
  '\n  mutation CreateUpload($input: UploadInput!) {\n    createUpload(input: { upload: $input }) {\n      clientMutationId\n      upload {\n        id\n      }\n    }\n  }\n': typeof types.CreateUploadDocument
  '\n  mutation DeleteUploadById($id: UUID!) {\n    deleteUploadById(input: { id: $id }) {\n      clientMutationId\n      upload {\n        ...UploadItem\n      }\n    }\n  }\n': typeof types.DeleteUploadByIdDocument
  '\n  query AccountById($id: UUID!) {\n    accountById(id: $id) {\n      ...AccountItem\n    }\n  }\n': typeof types.AccountByIdDocument
  '\n  query AccountByUsername($username: String!) {\n    accountByUsername(username: $username) {\n      ...AccountItem\n    }\n  }\n': typeof types.AccountByUsernameDocument
  '\n  query AccountUploadQuotaBytes {\n    accountUploadQuotaBytes\n  }\n': typeof types.AccountUploadQuotaBytesDocument
  '\n  query AllAchievements($accountId: UUID) {\n    allAchievements(condition: { accountId: $accountId }) {\n      nodes {\n        ...AchievementItem\n      }\n    }\n  }\n': typeof types.AllAchievementsDocument
  '\n  query AllContacts($after: Cursor, $createdBy: UUID, $first: Int!) {\n    allContacts(\n      after: $after\n      condition: { createdBy: $createdBy }\n      first: $first\n      orderBy: [FIRST_NAME_ASC, LAST_NAME_ASC]\n    ) {\n      nodes {\n        ...ContactItem\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      totalCount\n    }\n  }\n': typeof types.AllContactsDocument
  '\n  query EventByCreatedByAndSlug(\n    $createdBy: UUID!\n    $guestId: UUID\n    $slug: String!\n  ) {\n    eventByCreatedByAndSlug(createdBy: $createdBy, slug: $slug) {\n      ...EventItem\n      guestsByEventId(condition: { id: $guestId }) {\n        nodes {\n          ...GuestItem\n          contactByContactId {\n            ...ContactItem\n          }\n        }\n      }\n    }\n  }\n': typeof types.EventByCreatedByAndSlugDocument
  '\n  query AllEventCategories {\n    allEventCategories {\n      nodes {\n        ...EventCategoryItem\n      }\n    }\n  }\n': typeof types.AllEventCategoriesDocument
  '\n  query AllEventFormats {\n    allEventFormats {\n      nodes {\n        ...EventFormatItem\n      }\n    }\n  }\n': typeof types.AllEventFormatsDocument
  '\n  query EventSearch(\n    $after: Cursor\n    $first: Int!\n    $language: Language\n    $query: String\n  ) {\n    eventSearch(\n      after: $after\n      first: $first\n      language: $language\n      query: $query\n    ) {\n      nodes {\n        ...EventItem\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      totalCount\n    }\n  }\n': typeof types.EventSearchDocument
  '\n  query AllEvents($after: Cursor, $createdBy: UUID, $first: Int!) {\n    allEvents(\n      after: $after\n      condition: { createdBy: $createdBy }\n      first: $first\n      orderBy: START_DESC\n    ) {\n      nodes {\n        ...EventItem\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      totalCount\n    }\n  }\n': typeof types.AllEventsDocument
  '\n  query AllGuests($after: Cursor, $eventId: UUID!, $first: Int!) {\n    allGuests(after: $after, condition: { eventId: $eventId }, first: $first) {\n      nodes {\n        ...GuestItem\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      totalCount\n    }\n  }\n': typeof types.AllGuestsDocument
  '\n  query AllLegalTerms($language: String) {\n    allLegalTerms(condition: { language: $language }) {\n      nodes {\n        ...LegalTermItem\n      }\n    }\n  }\n': typeof types.AllLegalTermsDocument
  '\n  query AllPreferenceEventCategories {\n    allAccountPreferenceEventCategories {\n      nodes {\n        ...PreferenceEventCategoryItem\n      }\n    }\n  }\n': typeof types.AllPreferenceEventCategoriesDocument
  '\n  query AllPreferenceEventFormats {\n    allAccountPreferenceEventFormats {\n      nodes {\n        ...PreferenceEventFormatItem\n      }\n    }\n  }\n': typeof types.AllPreferenceEventFormatsDocument
  '\n  query AllPreferenceEventLocations {\n    allAccountPreferenceEventLocations {\n      nodes {\n        ...PreferenceEventLocationItem\n      }\n    }\n  }\n': typeof types.AllPreferenceEventLocationsDocument
  '\n  query AllPreferenceEventSizes {\n    allAccountPreferenceEventSizes {\n      nodes {\n        nodeId\n        eventSize\n      }\n    }\n  }\n': typeof types.AllPreferenceEventSizesDocument
  '\n  query ProfilePictureByAccountId($accountId: UUID!) {\n    profilePictureByAccountId(accountId: $accountId) {\n      ...ProfilePictureItem\n    }\n  }\n': typeof types.ProfilePictureByAccountIdDocument
  '\n  query AllUploads($after: Cursor, $first: Int!, $createdBy: UUID) {\n    allUploads(\n      after: $after\n      condition: { createdBy: $createdBy }\n      first: $first\n    ) {\n      nodes {\n        ...UploadItem\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      totalCount\n    }\n  }\n': typeof types.AllUploadsDocument
}
const documents: Documents = {
  '\n  fragment AccountItem on Account {\n    nodeId\n    id\n    username\n  }\n':
    types.AccountItemFragmentDoc,
  '\n  fragment AchievementItem on Achievement {\n    nodeId\n    id\n    accountId\n    achievement\n    level\n  }\n':
    types.AchievementItemFragmentDoc,
  '\n  fragment AddressItem on Address {\n    id\n    city\n    country\n    line1\n    line2\n    location {\n      latitude\n      longitude\n    }\n    name\n    postalCode\n    region\n  }\n':
    types.AddressItemFragmentDoc,
  '\n  fragment ContactItem on Contact {\n    nodeId\n    id\n    accountId\n    accountByAccountId {\n      id\n      username\n    }\n    accountByCreatedBy {\n      id\n      username\n    }\n    addressByAddressId {\n      ...AddressItem\n    }\n    createdBy\n    emailAddress\n    emailAddressHash\n    firstName\n    lastName\n    phoneNumber\n    url\n  }\n':
    types.ContactItemFragmentDoc,
  '\n  fragment EventCategoryItem on EventCategory {\n    id\n    name\n  }\n':
    types.EventCategoryItemFragmentDoc,
  '\n  fragment EventFormatItem on EventFormat {\n    id\n    name\n  }\n':
    types.EventFormatItemFragmentDoc,
  '\n  fragment EventItem on Event {\n    id\n    nodeId\n    accountByCreatedBy {\n      id\n      username\n    }\n    addressByAddressId {\n      ...AddressItem\n    }\n    createdBy\n    description\n    end\n    guestCountMaximum\n    isArchived\n    isInPerson\n    isRemote\n    name\n    slug\n    start\n    url\n    visibility\n  }\n':
    types.EventItemFragmentDoc,
  '\n  fragment GuestItem on Guest {\n    id\n    nodeId\n    contactId\n    eventId\n    feedback\n    feedbackPaper\n    contactByContactId {\n      ...ContactItem\n    }\n  }\n':
    types.GuestItemFragmentDoc,
  '\n  fragment LegalTermItem on LegalTerm {\n    id\n    term\n  }\n':
    types.LegalTermItemFragmentDoc,
  '\n  fragment PreferenceEventCategoryItem on AccountPreferenceEventCategory {\n    nodeId\n    accountId\n    categoryId\n  }\n':
    types.PreferenceEventCategoryItemFragmentDoc,
  '\n  fragment PreferenceEventFormatItem on AccountPreferenceEventFormat {\n    nodeId\n    accountId\n    formatId\n  }\n':
    types.PreferenceEventFormatItemFragmentDoc,
  '\n  fragment PreferenceEventLocationItem on AccountPreferenceEventLocation {\n    createdAt\n    createdBy\n    id\n    nodeId\n    radius\n    location {\n      latitude\n      longitude\n    }\n  }\n':
    types.PreferenceEventLocationItemFragmentDoc,
  '\n  fragment ProfilePictureItem on ProfilePicture {\n    id\n    nodeId\n    accountId\n    uploadByUploadId {\n      ...UploadItem\n    }\n  }\n':
    types.ProfilePictureItemFragmentDoc,
  '\n  fragment UploadItem on Upload {\n    id\n    nodeId\n    sizeByte\n    storageKey\n    createdBy\n  }\n':
    types.UploadItemFragmentDoc,
  '\n  mutation Authenticate($password: String!, $username: String!) {\n    authenticate(input: { password: $password, username: $username }) {\n      clientMutationId\n      jwt\n    }\n  }\n':
    types.AuthenticateDocument,
  '\n  mutation UpdateAccountBirthDate($input: UpdateAccountBirthDateInput!) {\n    updateAccountBirthDate(input: $input) {\n      clientMutationId\n    }\n  }\n':
    types.UpdateAccountBirthDateDocument,
  '\n  mutation AccountDelete($password: String!) {\n    accountDelete(input: { password: $password }) {\n      clientMutationId\n    }\n  }\n':
    types.AccountDeleteDocument,
  '\n  mutation AccountEmailAddressVerification($code: UUID!) {\n    accountEmailAddressVerification(input: { code: $code }) {\n      clientMutationId\n    }\n  }\n':
    types.AccountEmailAddressVerificationDocument,
  '\n  mutation JwtRefresh($id: UUID!) {\n    jwtRefresh(input: { jwtId: $id }) {\n      clientMutationId\n      jwt\n    }\n  }\n':
    types.JwtRefreshDocument,
  '\n  mutation UpdateAccountLocation($input: UpdateAccountLocationInput!) {\n    updateAccountLocation(input: $input) {\n      clientMutationId\n    }\n  }\n':
    types.UpdateAccountLocationDocument,
  '\n  mutation AccountPasswordChange(\n    $passwordCurrent: String!\n    $passwordNew: String!\n  ) {\n    accountPasswordChange(\n      input: { passwordCurrent: $passwordCurrent, passwordNew: $passwordNew }\n    ) {\n      clientMutationId\n    }\n  }\n':
    types.AccountPasswordChangeDocument,
  '\n  mutation AccountPasswordReset($code: UUID!, $password: String!) {\n    accountPasswordReset(input: { code: $code, password: $password }) {\n      clientMutationId\n    }\n  }\n':
    types.AccountPasswordResetDocument,
  '\n  mutation AccountPasswordResetRequest(\n    $emailAddress: String!\n    $language: String!\n  ) {\n    accountPasswordResetRequest(\n      input: { emailAddress: $emailAddress, language: $language }\n    ) {\n      clientMutationId\n    }\n  }\n':
    types.AccountPasswordResetRequestDocument,
  '\n  mutation AccountRegistration(\n    $emailAddress: String!\n    $password: String!\n    $username: String!\n    $language: String!\n    $legalTermId: UUID!\n  ) {\n    accountRegistration(\n      input: {\n        emailAddress: $emailAddress\n        password: $password\n        username: $username\n        language: $language\n        legalTermId: $legalTermId\n      }\n    ) {\n      clientMutationId\n    }\n  }\n':
    types.AccountRegistrationDocument,
  '\n  mutation AccountRegistrationRefresh($accountId: UUID!, $language: String!) {\n    accountRegistrationRefresh(\n      input: { language: $language, accountId: $accountId }\n    ) {\n      clientMutationId\n    }\n  }\n':
    types.AccountRegistrationRefreshDocument,
  '\n  mutation CreateAccountBlock($accountBlockInput: AccountBlockInput!) {\n    createAccountBlock(input: { accountBlock: $accountBlockInput }) {\n      clientMutationId\n    }\n  }\n':
    types.CreateAccountBlockDocument,
  '\n  mutation AchievementUnlock($code: UUID!, $alias: String!) {\n    achievementUnlock(input: { code: $code, alias: $alias }) {\n      clientMutationId\n      uuid\n    }\n  }\n':
    types.AchievementUnlockDocument,
  '\n  mutation CreateContact($contactInput: ContactInput!) {\n    createContact(input: { contact: $contactInput }) {\n      contact {\n        ...ContactItem\n      }\n    }\n  }\n':
    types.CreateContactDocument,
  '\n  mutation DeleteContactById($id: UUID!) {\n    deleteContactById(input: { id: $id }) {\n      clientMutationId\n      contact {\n        ...ContactItem\n      }\n    }\n  }\n':
    types.DeleteContactByIdDocument,
  '\n  mutation UpdateContactById($id: UUID!, $contactPatch: ContactPatch!) {\n    updateContactById(input: { id: $id, contactPatch: $contactPatch }) {\n      contact {\n        ...ContactItem\n      }\n    }\n  }\n':
    types.UpdateContactByIdDocument,
  '\n  mutation CreateEvent($input: EventInput!) {\n    createEvent(input: { event: $input }) {\n      event {\n        ...EventItem\n      }\n    }\n  }\n':
    types.CreateEventDocument,
  '\n  mutation EventDelete($id: UUID!, $password: String!) {\n    eventDelete(input: { id: $id, password: $password }) {\n      clientMutationId\n      event {\n        ...EventItem\n      }\n    }\n  }\n':
    types.EventDeleteDocument,
  '\n  mutation EventUnlock($guestId: UUID!) {\n    eventUnlock(input: { guestId: $guestId }) {\n      eventUnlockResponse {\n        creatorUsername\n        eventSlug\n        jwt\n      }\n    }\n  }\n':
    types.EventUnlockDocument,
  '\n  mutation UpdateEventById($id: UUID!, $eventPatch: EventPatch!) {\n    updateEventById(input: { id: $id, eventPatch: $eventPatch }) {\n      event {\n        ...EventItem\n      }\n    }\n  }\n':
    types.UpdateEventByIdDocument,
  '\n  mutation CreateGuest($guestInput: GuestInput!) {\n    createGuest(input: { guest: $guestInput }) {\n      guest {\n        contactByContactId {\n          ...ContactItem\n        }\n        id\n      }\n    }\n  }\n':
    types.CreateGuestDocument,
  '\n  mutation DeleteGuestById($id: UUID!) {\n    deleteGuestById(input: { id: $id }) {\n      clientMutationId\n    }\n  }\n':
    types.DeleteGuestByIdDocument,
  '\n  mutation UpdateGuestById($id: UUID!, $guestPatch: GuestPatch!) {\n    updateGuestById(input: { id: $id, guestPatch: $guestPatch }) {\n      guest {\n        ...GuestItem\n        contactByContactId {\n          ...ContactItem\n        }\n      }\n    }\n  }\n':
    types.UpdateGuestByIdDocument,
  '\n  mutation Invite($guestId: UUID!, $language: String!) {\n    invite(input: { guestId: $guestId, language: $language }) {\n      clientMutationId\n    }\n  }\n':
    types.InviteDocument,
  '\n  mutation CreatePreferenceEventCategory(\n    $input: AccountPreferenceEventCategoryInput!\n  ) {\n    createAccountPreferenceEventCategory(\n      input: { accountPreferenceEventCategory: $input }\n    ) {\n      accountPreferenceEventCategory {\n        ...PreferenceEventCategoryItem\n      }\n    }\n  }\n':
    types.CreatePreferenceEventCategoryDocument,
  '\n    mutation DeletePreferenceEventCategoryByAccountIdAndCategoryId(\n      $input: DeleteAccountPreferenceEventCategoryByAccountIdAndCategoryIdInput!\n    ) {\n      deleteAccountPreferenceEventCategoryByAccountIdAndCategoryId(\n        input: $input\n      ) {\n        deletedAccountPreferenceEventCategoryId\n      }\n    }\n  ':
    types.DeletePreferenceEventCategoryByAccountIdAndCategoryIdDocument,
  '\n  mutation CreatePreferenceEventFormat(\n    $input: AccountPreferenceEventFormatInput!\n  ) {\n    createAccountPreferenceEventFormat(\n      input: { accountPreferenceEventFormat: $input }\n    ) {\n      accountPreferenceEventFormat {\n        ...PreferenceEventFormatItem\n      }\n    }\n  }\n':
    types.CreatePreferenceEventFormatDocument,
  '\n    mutation DeletePreferenceEventFormatByAccountIdAndFormatId(\n      $input: DeleteAccountPreferenceEventFormatByAccountIdAndFormatIdInput!\n    ) {\n      deleteAccountPreferenceEventFormatByAccountIdAndFormatId(input: $input) {\n        deletedAccountPreferenceEventFormatId\n      }\n    }\n  ':
    types.DeletePreferenceEventFormatByAccountIdAndFormatIdDocument,
  '\n  mutation CreatePreferenceEventLocation(\n    $input: AccountPreferenceEventLocationInput!\n  ) {\n    createAccountPreferenceEventLocation(\n      input: { accountPreferenceEventLocation: $input }\n    ) {\n      accountPreferenceEventLocation {\n        ...PreferenceEventLocationItem\n      }\n    }\n  }\n':
    types.CreatePreferenceEventLocationDocument,
  '\n  mutation DeletePreferenceEventLocationById(\n    $input: DeleteAccountPreferenceEventLocationByIdInput!\n  ) {\n    deleteAccountPreferenceEventLocationById(input: $input) {\n      deletedAccountPreferenceEventLocationId\n    }\n  }\n':
    types.DeletePreferenceEventLocationByIdDocument,
  '\n  mutation CreatePreferenceEventSize($input: AccountPreferenceEventSizeInput!) {\n    createAccountPreferenceEventSize(\n      input: { accountPreferenceEventSize: $input }\n    ) {\n      clientMutationId\n    }\n  }\n':
    types.CreatePreferenceEventSizeDocument,
  '\n    mutation DeletePreferenceEventSizeByAccountIdAndEventSize(\n      $input: DeleteAccountPreferenceEventSizeByAccountIdAndEventSizeInput!\n    ) {\n      deleteAccountPreferenceEventSizeByAccountIdAndEventSize(input: $input) {\n        clientMutationId\n      }\n    }\n  ':
    types.DeletePreferenceEventSizeByAccountIdAndEventSizeDocument,
  '\n  mutation ProfilePictureSet($uploadId: UUID!) {\n    profilePictureSet(input: { uploadId: $uploadId }) {\n      clientMutationId\n    }\n  }\n':
    types.ProfilePictureSetDocument,
  '\n  mutation CreateReport($reportInput: ReportInput!) {\n    createReport(input: { report: $reportInput }) {\n      clientMutationId\n    }\n  }\n':
    types.CreateReportDocument,
  '\n  mutation CreateUpload($input: UploadInput!) {\n    createUpload(input: { upload: $input }) {\n      clientMutationId\n      upload {\n        id\n      }\n    }\n  }\n':
    types.CreateUploadDocument,
  '\n  mutation DeleteUploadById($id: UUID!) {\n    deleteUploadById(input: { id: $id }) {\n      clientMutationId\n      upload {\n        ...UploadItem\n      }\n    }\n  }\n':
    types.DeleteUploadByIdDocument,
  '\n  query AccountById($id: UUID!) {\n    accountById(id: $id) {\n      ...AccountItem\n    }\n  }\n':
    types.AccountByIdDocument,
  '\n  query AccountByUsername($username: String!) {\n    accountByUsername(username: $username) {\n      ...AccountItem\n    }\n  }\n':
    types.AccountByUsernameDocument,
  '\n  query AccountUploadQuotaBytes {\n    accountUploadQuotaBytes\n  }\n':
    types.AccountUploadQuotaBytesDocument,
  '\n  query AllAchievements($accountId: UUID) {\n    allAchievements(condition: { accountId: $accountId }) {\n      nodes {\n        ...AchievementItem\n      }\n    }\n  }\n':
    types.AllAchievementsDocument,
  '\n  query AllContacts($after: Cursor, $createdBy: UUID, $first: Int!) {\n    allContacts(\n      after: $after\n      condition: { createdBy: $createdBy }\n      first: $first\n      orderBy: [FIRST_NAME_ASC, LAST_NAME_ASC]\n    ) {\n      nodes {\n        ...ContactItem\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      totalCount\n    }\n  }\n':
    types.AllContactsDocument,
  '\n  query EventByCreatedByAndSlug(\n    $createdBy: UUID!\n    $guestId: UUID\n    $slug: String!\n  ) {\n    eventByCreatedByAndSlug(createdBy: $createdBy, slug: $slug) {\n      ...EventItem\n      guestsByEventId(condition: { id: $guestId }) {\n        nodes {\n          ...GuestItem\n          contactByContactId {\n            ...ContactItem\n          }\n        }\n      }\n    }\n  }\n':
    types.EventByCreatedByAndSlugDocument,
  '\n  query AllEventCategories {\n    allEventCategories {\n      nodes {\n        ...EventCategoryItem\n      }\n    }\n  }\n':
    types.AllEventCategoriesDocument,
  '\n  query AllEventFormats {\n    allEventFormats {\n      nodes {\n        ...EventFormatItem\n      }\n    }\n  }\n':
    types.AllEventFormatsDocument,
  '\n  query EventSearch(\n    $after: Cursor\n    $first: Int!\n    $language: Language\n    $query: String\n  ) {\n    eventSearch(\n      after: $after\n      first: $first\n      language: $language\n      query: $query\n    ) {\n      nodes {\n        ...EventItem\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      totalCount\n    }\n  }\n':
    types.EventSearchDocument,
  '\n  query AllEvents($after: Cursor, $createdBy: UUID, $first: Int!) {\n    allEvents(\n      after: $after\n      condition: { createdBy: $createdBy }\n      first: $first\n      orderBy: START_DESC\n    ) {\n      nodes {\n        ...EventItem\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      totalCount\n    }\n  }\n':
    types.AllEventsDocument,
  '\n  query AllGuests($after: Cursor, $eventId: UUID!, $first: Int!) {\n    allGuests(after: $after, condition: { eventId: $eventId }, first: $first) {\n      nodes {\n        ...GuestItem\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      totalCount\n    }\n  }\n':
    types.AllGuestsDocument,
  '\n  query AllLegalTerms($language: String) {\n    allLegalTerms(condition: { language: $language }) {\n      nodes {\n        ...LegalTermItem\n      }\n    }\n  }\n':
    types.AllLegalTermsDocument,
  '\n  query AllPreferenceEventCategories {\n    allAccountPreferenceEventCategories {\n      nodes {\n        ...PreferenceEventCategoryItem\n      }\n    }\n  }\n':
    types.AllPreferenceEventCategoriesDocument,
  '\n  query AllPreferenceEventFormats {\n    allAccountPreferenceEventFormats {\n      nodes {\n        ...PreferenceEventFormatItem\n      }\n    }\n  }\n':
    types.AllPreferenceEventFormatsDocument,
  '\n  query AllPreferenceEventLocations {\n    allAccountPreferenceEventLocations {\n      nodes {\n        ...PreferenceEventLocationItem\n      }\n    }\n  }\n':
    types.AllPreferenceEventLocationsDocument,
  '\n  query AllPreferenceEventSizes {\n    allAccountPreferenceEventSizes {\n      nodes {\n        nodeId\n        eventSize\n      }\n    }\n  }\n':
    types.AllPreferenceEventSizesDocument,
  '\n  query ProfilePictureByAccountId($accountId: UUID!) {\n    profilePictureByAccountId(accountId: $accountId) {\n      ...ProfilePictureItem\n    }\n  }\n':
    types.ProfilePictureByAccountIdDocument,
  '\n  query AllUploads($after: Cursor, $first: Int!, $createdBy: UUID) {\n    allUploads(\n      after: $after\n      condition: { createdBy: $createdBy }\n      first: $first\n    ) {\n      nodes {\n        ...UploadItem\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      totalCount\n    }\n  }\n':
    types.AllUploadsDocument,
}

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment AccountItem on Account {\n    nodeId\n    id\n    username\n  }\n',
): (typeof documents)['\n  fragment AccountItem on Account {\n    nodeId\n    id\n    username\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment AchievementItem on Achievement {\n    nodeId\n    id\n    accountId\n    achievement\n    level\n  }\n',
): (typeof documents)['\n  fragment AchievementItem on Achievement {\n    nodeId\n    id\n    accountId\n    achievement\n    level\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment AddressItem on Address {\n    id\n    city\n    country\n    line1\n    line2\n    location {\n      latitude\n      longitude\n    }\n    name\n    postalCode\n    region\n  }\n',
): (typeof documents)['\n  fragment AddressItem on Address {\n    id\n    city\n    country\n    line1\n    line2\n    location {\n      latitude\n      longitude\n    }\n    name\n    postalCode\n    region\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment ContactItem on Contact {\n    nodeId\n    id\n    accountId\n    accountByAccountId {\n      id\n      username\n    }\n    accountByCreatedBy {\n      id\n      username\n    }\n    addressByAddressId {\n      ...AddressItem\n    }\n    createdBy\n    emailAddress\n    emailAddressHash\n    firstName\n    lastName\n    phoneNumber\n    url\n  }\n',
): (typeof documents)['\n  fragment ContactItem on Contact {\n    nodeId\n    id\n    accountId\n    accountByAccountId {\n      id\n      username\n    }\n    accountByCreatedBy {\n      id\n      username\n    }\n    addressByAddressId {\n      ...AddressItem\n    }\n    createdBy\n    emailAddress\n    emailAddressHash\n    firstName\n    lastName\n    phoneNumber\n    url\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment EventCategoryItem on EventCategory {\n    id\n    name\n  }\n',
): (typeof documents)['\n  fragment EventCategoryItem on EventCategory {\n    id\n    name\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment EventFormatItem on EventFormat {\n    id\n    name\n  }\n',
): (typeof documents)['\n  fragment EventFormatItem on EventFormat {\n    id\n    name\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment EventItem on Event {\n    id\n    nodeId\n    accountByCreatedBy {\n      id\n      username\n    }\n    addressByAddressId {\n      ...AddressItem\n    }\n    createdBy\n    description\n    end\n    guestCountMaximum\n    isArchived\n    isInPerson\n    isRemote\n    name\n    slug\n    start\n    url\n    visibility\n  }\n',
): (typeof documents)['\n  fragment EventItem on Event {\n    id\n    nodeId\n    accountByCreatedBy {\n      id\n      username\n    }\n    addressByAddressId {\n      ...AddressItem\n    }\n    createdBy\n    description\n    end\n    guestCountMaximum\n    isArchived\n    isInPerson\n    isRemote\n    name\n    slug\n    start\n    url\n    visibility\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment GuestItem on Guest {\n    id\n    nodeId\n    contactId\n    eventId\n    feedback\n    feedbackPaper\n    contactByContactId {\n      ...ContactItem\n    }\n  }\n',
): (typeof documents)['\n  fragment GuestItem on Guest {\n    id\n    nodeId\n    contactId\n    eventId\n    feedback\n    feedbackPaper\n    contactByContactId {\n      ...ContactItem\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment LegalTermItem on LegalTerm {\n    id\n    term\n  }\n',
): (typeof documents)['\n  fragment LegalTermItem on LegalTerm {\n    id\n    term\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment PreferenceEventCategoryItem on AccountPreferenceEventCategory {\n    nodeId\n    accountId\n    categoryId\n  }\n',
): (typeof documents)['\n  fragment PreferenceEventCategoryItem on AccountPreferenceEventCategory {\n    nodeId\n    accountId\n    categoryId\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment PreferenceEventFormatItem on AccountPreferenceEventFormat {\n    nodeId\n    accountId\n    formatId\n  }\n',
): (typeof documents)['\n  fragment PreferenceEventFormatItem on AccountPreferenceEventFormat {\n    nodeId\n    accountId\n    formatId\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment PreferenceEventLocationItem on AccountPreferenceEventLocation {\n    createdAt\n    createdBy\n    id\n    nodeId\n    radius\n    location {\n      latitude\n      longitude\n    }\n  }\n',
): (typeof documents)['\n  fragment PreferenceEventLocationItem on AccountPreferenceEventLocation {\n    createdAt\n    createdBy\n    id\n    nodeId\n    radius\n    location {\n      latitude\n      longitude\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment ProfilePictureItem on ProfilePicture {\n    id\n    nodeId\n    accountId\n    uploadByUploadId {\n      ...UploadItem\n    }\n  }\n',
): (typeof documents)['\n  fragment ProfilePictureItem on ProfilePicture {\n    id\n    nodeId\n    accountId\n    uploadByUploadId {\n      ...UploadItem\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment UploadItem on Upload {\n    id\n    nodeId\n    sizeByte\n    storageKey\n    createdBy\n  }\n',
): (typeof documents)['\n  fragment UploadItem on Upload {\n    id\n    nodeId\n    sizeByte\n    storageKey\n    createdBy\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation Authenticate($password: String!, $username: String!) {\n    authenticate(input: { password: $password, username: $username }) {\n      clientMutationId\n      jwt\n    }\n  }\n',
): (typeof documents)['\n  mutation Authenticate($password: String!, $username: String!) {\n    authenticate(input: { password: $password, username: $username }) {\n      clientMutationId\n      jwt\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation UpdateAccountBirthDate($input: UpdateAccountBirthDateInput!) {\n    updateAccountBirthDate(input: $input) {\n      clientMutationId\n    }\n  }\n',
): (typeof documents)['\n  mutation UpdateAccountBirthDate($input: UpdateAccountBirthDateInput!) {\n    updateAccountBirthDate(input: $input) {\n      clientMutationId\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation AccountDelete($password: String!) {\n    accountDelete(input: { password: $password }) {\n      clientMutationId\n    }\n  }\n',
): (typeof documents)['\n  mutation AccountDelete($password: String!) {\n    accountDelete(input: { password: $password }) {\n      clientMutationId\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation AccountEmailAddressVerification($code: UUID!) {\n    accountEmailAddressVerification(input: { code: $code }) {\n      clientMutationId\n    }\n  }\n',
): (typeof documents)['\n  mutation AccountEmailAddressVerification($code: UUID!) {\n    accountEmailAddressVerification(input: { code: $code }) {\n      clientMutationId\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation JwtRefresh($id: UUID!) {\n    jwtRefresh(input: { jwtId: $id }) {\n      clientMutationId\n      jwt\n    }\n  }\n',
): (typeof documents)['\n  mutation JwtRefresh($id: UUID!) {\n    jwtRefresh(input: { jwtId: $id }) {\n      clientMutationId\n      jwt\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation UpdateAccountLocation($input: UpdateAccountLocationInput!) {\n    updateAccountLocation(input: $input) {\n      clientMutationId\n    }\n  }\n',
): (typeof documents)['\n  mutation UpdateAccountLocation($input: UpdateAccountLocationInput!) {\n    updateAccountLocation(input: $input) {\n      clientMutationId\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation AccountPasswordChange(\n    $passwordCurrent: String!\n    $passwordNew: String!\n  ) {\n    accountPasswordChange(\n      input: { passwordCurrent: $passwordCurrent, passwordNew: $passwordNew }\n    ) {\n      clientMutationId\n    }\n  }\n',
): (typeof documents)['\n  mutation AccountPasswordChange(\n    $passwordCurrent: String!\n    $passwordNew: String!\n  ) {\n    accountPasswordChange(\n      input: { passwordCurrent: $passwordCurrent, passwordNew: $passwordNew }\n    ) {\n      clientMutationId\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation AccountPasswordReset($code: UUID!, $password: String!) {\n    accountPasswordReset(input: { code: $code, password: $password }) {\n      clientMutationId\n    }\n  }\n',
): (typeof documents)['\n  mutation AccountPasswordReset($code: UUID!, $password: String!) {\n    accountPasswordReset(input: { code: $code, password: $password }) {\n      clientMutationId\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation AccountPasswordResetRequest(\n    $emailAddress: String!\n    $language: String!\n  ) {\n    accountPasswordResetRequest(\n      input: { emailAddress: $emailAddress, language: $language }\n    ) {\n      clientMutationId\n    }\n  }\n',
): (typeof documents)['\n  mutation AccountPasswordResetRequest(\n    $emailAddress: String!\n    $language: String!\n  ) {\n    accountPasswordResetRequest(\n      input: { emailAddress: $emailAddress, language: $language }\n    ) {\n      clientMutationId\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation AccountRegistration(\n    $emailAddress: String!\n    $password: String!\n    $username: String!\n    $language: String!\n    $legalTermId: UUID!\n  ) {\n    accountRegistration(\n      input: {\n        emailAddress: $emailAddress\n        password: $password\n        username: $username\n        language: $language\n        legalTermId: $legalTermId\n      }\n    ) {\n      clientMutationId\n    }\n  }\n',
): (typeof documents)['\n  mutation AccountRegistration(\n    $emailAddress: String!\n    $password: String!\n    $username: String!\n    $language: String!\n    $legalTermId: UUID!\n  ) {\n    accountRegistration(\n      input: {\n        emailAddress: $emailAddress\n        password: $password\n        username: $username\n        language: $language\n        legalTermId: $legalTermId\n      }\n    ) {\n      clientMutationId\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation AccountRegistrationRefresh($accountId: UUID!, $language: String!) {\n    accountRegistrationRefresh(\n      input: { language: $language, accountId: $accountId }\n    ) {\n      clientMutationId\n    }\n  }\n',
): (typeof documents)['\n  mutation AccountRegistrationRefresh($accountId: UUID!, $language: String!) {\n    accountRegistrationRefresh(\n      input: { language: $language, accountId: $accountId }\n    ) {\n      clientMutationId\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation CreateAccountBlock($accountBlockInput: AccountBlockInput!) {\n    createAccountBlock(input: { accountBlock: $accountBlockInput }) {\n      clientMutationId\n    }\n  }\n',
): (typeof documents)['\n  mutation CreateAccountBlock($accountBlockInput: AccountBlockInput!) {\n    createAccountBlock(input: { accountBlock: $accountBlockInput }) {\n      clientMutationId\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation AchievementUnlock($code: UUID!, $alias: String!) {\n    achievementUnlock(input: { code: $code, alias: $alias }) {\n      clientMutationId\n      uuid\n    }\n  }\n',
): (typeof documents)['\n  mutation AchievementUnlock($code: UUID!, $alias: String!) {\n    achievementUnlock(input: { code: $code, alias: $alias }) {\n      clientMutationId\n      uuid\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation CreateContact($contactInput: ContactInput!) {\n    createContact(input: { contact: $contactInput }) {\n      contact {\n        ...ContactItem\n      }\n    }\n  }\n',
): (typeof documents)['\n  mutation CreateContact($contactInput: ContactInput!) {\n    createContact(input: { contact: $contactInput }) {\n      contact {\n        ...ContactItem\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation DeleteContactById($id: UUID!) {\n    deleteContactById(input: { id: $id }) {\n      clientMutationId\n      contact {\n        ...ContactItem\n      }\n    }\n  }\n',
): (typeof documents)['\n  mutation DeleteContactById($id: UUID!) {\n    deleteContactById(input: { id: $id }) {\n      clientMutationId\n      contact {\n        ...ContactItem\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation UpdateContactById($id: UUID!, $contactPatch: ContactPatch!) {\n    updateContactById(input: { id: $id, contactPatch: $contactPatch }) {\n      contact {\n        ...ContactItem\n      }\n    }\n  }\n',
): (typeof documents)['\n  mutation UpdateContactById($id: UUID!, $contactPatch: ContactPatch!) {\n    updateContactById(input: { id: $id, contactPatch: $contactPatch }) {\n      contact {\n        ...ContactItem\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation CreateEvent($input: EventInput!) {\n    createEvent(input: { event: $input }) {\n      event {\n        ...EventItem\n      }\n    }\n  }\n',
): (typeof documents)['\n  mutation CreateEvent($input: EventInput!) {\n    createEvent(input: { event: $input }) {\n      event {\n        ...EventItem\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation EventDelete($id: UUID!, $password: String!) {\n    eventDelete(input: { id: $id, password: $password }) {\n      clientMutationId\n      event {\n        ...EventItem\n      }\n    }\n  }\n',
): (typeof documents)['\n  mutation EventDelete($id: UUID!, $password: String!) {\n    eventDelete(input: { id: $id, password: $password }) {\n      clientMutationId\n      event {\n        ...EventItem\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation EventUnlock($guestId: UUID!) {\n    eventUnlock(input: { guestId: $guestId }) {\n      eventUnlockResponse {\n        creatorUsername\n        eventSlug\n        jwt\n      }\n    }\n  }\n',
): (typeof documents)['\n  mutation EventUnlock($guestId: UUID!) {\n    eventUnlock(input: { guestId: $guestId }) {\n      eventUnlockResponse {\n        creatorUsername\n        eventSlug\n        jwt\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation UpdateEventById($id: UUID!, $eventPatch: EventPatch!) {\n    updateEventById(input: { id: $id, eventPatch: $eventPatch }) {\n      event {\n        ...EventItem\n      }\n    }\n  }\n',
): (typeof documents)['\n  mutation UpdateEventById($id: UUID!, $eventPatch: EventPatch!) {\n    updateEventById(input: { id: $id, eventPatch: $eventPatch }) {\n      event {\n        ...EventItem\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation CreateGuest($guestInput: GuestInput!) {\n    createGuest(input: { guest: $guestInput }) {\n      guest {\n        contactByContactId {\n          ...ContactItem\n        }\n        id\n      }\n    }\n  }\n',
): (typeof documents)['\n  mutation CreateGuest($guestInput: GuestInput!) {\n    createGuest(input: { guest: $guestInput }) {\n      guest {\n        contactByContactId {\n          ...ContactItem\n        }\n        id\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation DeleteGuestById($id: UUID!) {\n    deleteGuestById(input: { id: $id }) {\n      clientMutationId\n    }\n  }\n',
): (typeof documents)['\n  mutation DeleteGuestById($id: UUID!) {\n    deleteGuestById(input: { id: $id }) {\n      clientMutationId\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation UpdateGuestById($id: UUID!, $guestPatch: GuestPatch!) {\n    updateGuestById(input: { id: $id, guestPatch: $guestPatch }) {\n      guest {\n        ...GuestItem\n        contactByContactId {\n          ...ContactItem\n        }\n      }\n    }\n  }\n',
): (typeof documents)['\n  mutation UpdateGuestById($id: UUID!, $guestPatch: GuestPatch!) {\n    updateGuestById(input: { id: $id, guestPatch: $guestPatch }) {\n      guest {\n        ...GuestItem\n        contactByContactId {\n          ...ContactItem\n        }\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation Invite($guestId: UUID!, $language: String!) {\n    invite(input: { guestId: $guestId, language: $language }) {\n      clientMutationId\n    }\n  }\n',
): (typeof documents)['\n  mutation Invite($guestId: UUID!, $language: String!) {\n    invite(input: { guestId: $guestId, language: $language }) {\n      clientMutationId\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation CreatePreferenceEventCategory(\n    $input: AccountPreferenceEventCategoryInput!\n  ) {\n    createAccountPreferenceEventCategory(\n      input: { accountPreferenceEventCategory: $input }\n    ) {\n      accountPreferenceEventCategory {\n        ...PreferenceEventCategoryItem\n      }\n    }\n  }\n',
): (typeof documents)['\n  mutation CreatePreferenceEventCategory(\n    $input: AccountPreferenceEventCategoryInput!\n  ) {\n    createAccountPreferenceEventCategory(\n      input: { accountPreferenceEventCategory: $input }\n    ) {\n      accountPreferenceEventCategory {\n        ...PreferenceEventCategoryItem\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    mutation DeletePreferenceEventCategoryByAccountIdAndCategoryId(\n      $input: DeleteAccountPreferenceEventCategoryByAccountIdAndCategoryIdInput!\n    ) {\n      deleteAccountPreferenceEventCategoryByAccountIdAndCategoryId(\n        input: $input\n      ) {\n        deletedAccountPreferenceEventCategoryId\n      }\n    }\n  ',
): (typeof documents)['\n    mutation DeletePreferenceEventCategoryByAccountIdAndCategoryId(\n      $input: DeleteAccountPreferenceEventCategoryByAccountIdAndCategoryIdInput!\n    ) {\n      deleteAccountPreferenceEventCategoryByAccountIdAndCategoryId(\n        input: $input\n      ) {\n        deletedAccountPreferenceEventCategoryId\n      }\n    }\n  ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation CreatePreferenceEventFormat(\n    $input: AccountPreferenceEventFormatInput!\n  ) {\n    createAccountPreferenceEventFormat(\n      input: { accountPreferenceEventFormat: $input }\n    ) {\n      accountPreferenceEventFormat {\n        ...PreferenceEventFormatItem\n      }\n    }\n  }\n',
): (typeof documents)['\n  mutation CreatePreferenceEventFormat(\n    $input: AccountPreferenceEventFormatInput!\n  ) {\n    createAccountPreferenceEventFormat(\n      input: { accountPreferenceEventFormat: $input }\n    ) {\n      accountPreferenceEventFormat {\n        ...PreferenceEventFormatItem\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    mutation DeletePreferenceEventFormatByAccountIdAndFormatId(\n      $input: DeleteAccountPreferenceEventFormatByAccountIdAndFormatIdInput!\n    ) {\n      deleteAccountPreferenceEventFormatByAccountIdAndFormatId(input: $input) {\n        deletedAccountPreferenceEventFormatId\n      }\n    }\n  ',
): (typeof documents)['\n    mutation DeletePreferenceEventFormatByAccountIdAndFormatId(\n      $input: DeleteAccountPreferenceEventFormatByAccountIdAndFormatIdInput!\n    ) {\n      deleteAccountPreferenceEventFormatByAccountIdAndFormatId(input: $input) {\n        deletedAccountPreferenceEventFormatId\n      }\n    }\n  ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation CreatePreferenceEventLocation(\n    $input: AccountPreferenceEventLocationInput!\n  ) {\n    createAccountPreferenceEventLocation(\n      input: { accountPreferenceEventLocation: $input }\n    ) {\n      accountPreferenceEventLocation {\n        ...PreferenceEventLocationItem\n      }\n    }\n  }\n',
): (typeof documents)['\n  mutation CreatePreferenceEventLocation(\n    $input: AccountPreferenceEventLocationInput!\n  ) {\n    createAccountPreferenceEventLocation(\n      input: { accountPreferenceEventLocation: $input }\n    ) {\n      accountPreferenceEventLocation {\n        ...PreferenceEventLocationItem\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation DeletePreferenceEventLocationById(\n    $input: DeleteAccountPreferenceEventLocationByIdInput!\n  ) {\n    deleteAccountPreferenceEventLocationById(input: $input) {\n      deletedAccountPreferenceEventLocationId\n    }\n  }\n',
): (typeof documents)['\n  mutation DeletePreferenceEventLocationById(\n    $input: DeleteAccountPreferenceEventLocationByIdInput!\n  ) {\n    deleteAccountPreferenceEventLocationById(input: $input) {\n      deletedAccountPreferenceEventLocationId\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation CreatePreferenceEventSize($input: AccountPreferenceEventSizeInput!) {\n    createAccountPreferenceEventSize(\n      input: { accountPreferenceEventSize: $input }\n    ) {\n      clientMutationId\n    }\n  }\n',
): (typeof documents)['\n  mutation CreatePreferenceEventSize($input: AccountPreferenceEventSizeInput!) {\n    createAccountPreferenceEventSize(\n      input: { accountPreferenceEventSize: $input }\n    ) {\n      clientMutationId\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    mutation DeletePreferenceEventSizeByAccountIdAndEventSize(\n      $input: DeleteAccountPreferenceEventSizeByAccountIdAndEventSizeInput!\n    ) {\n      deleteAccountPreferenceEventSizeByAccountIdAndEventSize(input: $input) {\n        clientMutationId\n      }\n    }\n  ',
): (typeof documents)['\n    mutation DeletePreferenceEventSizeByAccountIdAndEventSize(\n      $input: DeleteAccountPreferenceEventSizeByAccountIdAndEventSizeInput!\n    ) {\n      deleteAccountPreferenceEventSizeByAccountIdAndEventSize(input: $input) {\n        clientMutationId\n      }\n    }\n  ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation ProfilePictureSet($uploadId: UUID!) {\n    profilePictureSet(input: { uploadId: $uploadId }) {\n      clientMutationId\n    }\n  }\n',
): (typeof documents)['\n  mutation ProfilePictureSet($uploadId: UUID!) {\n    profilePictureSet(input: { uploadId: $uploadId }) {\n      clientMutationId\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation CreateReport($reportInput: ReportInput!) {\n    createReport(input: { report: $reportInput }) {\n      clientMutationId\n    }\n  }\n',
): (typeof documents)['\n  mutation CreateReport($reportInput: ReportInput!) {\n    createReport(input: { report: $reportInput }) {\n      clientMutationId\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation CreateUpload($input: UploadInput!) {\n    createUpload(input: { upload: $input }) {\n      clientMutationId\n      upload {\n        id\n      }\n    }\n  }\n',
): (typeof documents)['\n  mutation CreateUpload($input: UploadInput!) {\n    createUpload(input: { upload: $input }) {\n      clientMutationId\n      upload {\n        id\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation DeleteUploadById($id: UUID!) {\n    deleteUploadById(input: { id: $id }) {\n      clientMutationId\n      upload {\n        ...UploadItem\n      }\n    }\n  }\n',
): (typeof documents)['\n  mutation DeleteUploadById($id: UUID!) {\n    deleteUploadById(input: { id: $id }) {\n      clientMutationId\n      upload {\n        ...UploadItem\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query AccountById($id: UUID!) {\n    accountById(id: $id) {\n      ...AccountItem\n    }\n  }\n',
): (typeof documents)['\n  query AccountById($id: UUID!) {\n    accountById(id: $id) {\n      ...AccountItem\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query AccountByUsername($username: String!) {\n    accountByUsername(username: $username) {\n      ...AccountItem\n    }\n  }\n',
): (typeof documents)['\n  query AccountByUsername($username: String!) {\n    accountByUsername(username: $username) {\n      ...AccountItem\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query AccountUploadQuotaBytes {\n    accountUploadQuotaBytes\n  }\n',
): (typeof documents)['\n  query AccountUploadQuotaBytes {\n    accountUploadQuotaBytes\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query AllAchievements($accountId: UUID) {\n    allAchievements(condition: { accountId: $accountId }) {\n      nodes {\n        ...AchievementItem\n      }\n    }\n  }\n',
): (typeof documents)['\n  query AllAchievements($accountId: UUID) {\n    allAchievements(condition: { accountId: $accountId }) {\n      nodes {\n        ...AchievementItem\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query AllContacts($after: Cursor, $createdBy: UUID, $first: Int!) {\n    allContacts(\n      after: $after\n      condition: { createdBy: $createdBy }\n      first: $first\n      orderBy: [FIRST_NAME_ASC, LAST_NAME_ASC]\n    ) {\n      nodes {\n        ...ContactItem\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      totalCount\n    }\n  }\n',
): (typeof documents)['\n  query AllContacts($after: Cursor, $createdBy: UUID, $first: Int!) {\n    allContacts(\n      after: $after\n      condition: { createdBy: $createdBy }\n      first: $first\n      orderBy: [FIRST_NAME_ASC, LAST_NAME_ASC]\n    ) {\n      nodes {\n        ...ContactItem\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      totalCount\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query EventByCreatedByAndSlug(\n    $createdBy: UUID!\n    $guestId: UUID\n    $slug: String!\n  ) {\n    eventByCreatedByAndSlug(createdBy: $createdBy, slug: $slug) {\n      ...EventItem\n      guestsByEventId(condition: { id: $guestId }) {\n        nodes {\n          ...GuestItem\n          contactByContactId {\n            ...ContactItem\n          }\n        }\n      }\n    }\n  }\n',
): (typeof documents)['\n  query EventByCreatedByAndSlug(\n    $createdBy: UUID!\n    $guestId: UUID\n    $slug: String!\n  ) {\n    eventByCreatedByAndSlug(createdBy: $createdBy, slug: $slug) {\n      ...EventItem\n      guestsByEventId(condition: { id: $guestId }) {\n        nodes {\n          ...GuestItem\n          contactByContactId {\n            ...ContactItem\n          }\n        }\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query AllEventCategories {\n    allEventCategories {\n      nodes {\n        ...EventCategoryItem\n      }\n    }\n  }\n',
): (typeof documents)['\n  query AllEventCategories {\n    allEventCategories {\n      nodes {\n        ...EventCategoryItem\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query AllEventFormats {\n    allEventFormats {\n      nodes {\n        ...EventFormatItem\n      }\n    }\n  }\n',
): (typeof documents)['\n  query AllEventFormats {\n    allEventFormats {\n      nodes {\n        ...EventFormatItem\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query EventSearch(\n    $after: Cursor\n    $first: Int!\n    $language: Language\n    $query: String\n  ) {\n    eventSearch(\n      after: $after\n      first: $first\n      language: $language\n      query: $query\n    ) {\n      nodes {\n        ...EventItem\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      totalCount\n    }\n  }\n',
): (typeof documents)['\n  query EventSearch(\n    $after: Cursor\n    $first: Int!\n    $language: Language\n    $query: String\n  ) {\n    eventSearch(\n      after: $after\n      first: $first\n      language: $language\n      query: $query\n    ) {\n      nodes {\n        ...EventItem\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      totalCount\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query AllEvents($after: Cursor, $createdBy: UUID, $first: Int!) {\n    allEvents(\n      after: $after\n      condition: { createdBy: $createdBy }\n      first: $first\n      orderBy: START_DESC\n    ) {\n      nodes {\n        ...EventItem\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      totalCount\n    }\n  }\n',
): (typeof documents)['\n  query AllEvents($after: Cursor, $createdBy: UUID, $first: Int!) {\n    allEvents(\n      after: $after\n      condition: { createdBy: $createdBy }\n      first: $first\n      orderBy: START_DESC\n    ) {\n      nodes {\n        ...EventItem\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      totalCount\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query AllGuests($after: Cursor, $eventId: UUID!, $first: Int!) {\n    allGuests(after: $after, condition: { eventId: $eventId }, first: $first) {\n      nodes {\n        ...GuestItem\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      totalCount\n    }\n  }\n',
): (typeof documents)['\n  query AllGuests($after: Cursor, $eventId: UUID!, $first: Int!) {\n    allGuests(after: $after, condition: { eventId: $eventId }, first: $first) {\n      nodes {\n        ...GuestItem\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      totalCount\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query AllLegalTerms($language: String) {\n    allLegalTerms(condition: { language: $language }) {\n      nodes {\n        ...LegalTermItem\n      }\n    }\n  }\n',
): (typeof documents)['\n  query AllLegalTerms($language: String) {\n    allLegalTerms(condition: { language: $language }) {\n      nodes {\n        ...LegalTermItem\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query AllPreferenceEventCategories {\n    allAccountPreferenceEventCategories {\n      nodes {\n        ...PreferenceEventCategoryItem\n      }\n    }\n  }\n',
): (typeof documents)['\n  query AllPreferenceEventCategories {\n    allAccountPreferenceEventCategories {\n      nodes {\n        ...PreferenceEventCategoryItem\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query AllPreferenceEventFormats {\n    allAccountPreferenceEventFormats {\n      nodes {\n        ...PreferenceEventFormatItem\n      }\n    }\n  }\n',
): (typeof documents)['\n  query AllPreferenceEventFormats {\n    allAccountPreferenceEventFormats {\n      nodes {\n        ...PreferenceEventFormatItem\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query AllPreferenceEventLocations {\n    allAccountPreferenceEventLocations {\n      nodes {\n        ...PreferenceEventLocationItem\n      }\n    }\n  }\n',
): (typeof documents)['\n  query AllPreferenceEventLocations {\n    allAccountPreferenceEventLocations {\n      nodes {\n        ...PreferenceEventLocationItem\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query AllPreferenceEventSizes {\n    allAccountPreferenceEventSizes {\n      nodes {\n        nodeId\n        eventSize\n      }\n    }\n  }\n',
): (typeof documents)['\n  query AllPreferenceEventSizes {\n    allAccountPreferenceEventSizes {\n      nodes {\n        nodeId\n        eventSize\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query ProfilePictureByAccountId($accountId: UUID!) {\n    profilePictureByAccountId(accountId: $accountId) {\n      ...ProfilePictureItem\n    }\n  }\n',
): (typeof documents)['\n  query ProfilePictureByAccountId($accountId: UUID!) {\n    profilePictureByAccountId(accountId: $accountId) {\n      ...ProfilePictureItem\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query AllUploads($after: Cursor, $first: Int!, $createdBy: UUID) {\n    allUploads(\n      after: $after\n      condition: { createdBy: $createdBy }\n      first: $first\n    ) {\n      nodes {\n        ...UploadItem\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      totalCount\n    }\n  }\n',
): (typeof documents)['\n  query AllUploads($after: Cursor, $first: Int!, $createdBy: UUID) {\n    allUploads(\n      after: $after\n      condition: { createdBy: $createdBy }\n      first: $first\n    ) {\n      nodes {\n        ...UploadItem\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      totalCount\n    }\n  }\n']

export function graphql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
