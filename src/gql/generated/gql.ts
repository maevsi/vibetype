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
  '\n    mutation AccountDelete($input: AccountDeleteInput!) {\n      accountDelete(input: $input) {\n        clientMutationId\n      }\n    }\n  ': typeof types.AccountDeleteDocument
  '\n    query AccountByRowId($id: UUID!) {\n      accountByRowId(rowId: $id) {\n        id\n        profilePictureByAccountId {\n          id\n          rowId\n          uploadByUploadId {\n            id\n            rowId\n            storageKey\n          }\n        }\n        rowId\n        username\n      }\n    }\n  ': typeof types.AccountByRowIdDocument
  '\n  query AccountSearch($after: Cursor, $first: Int, $username: String) {\n    allAccounts(\n      after: $after\n      condition: { username: $username }\n      first: $first\n      orderBy: USERNAME_ASC\n    ) {\n      nodes {\n        id\n        rowId\n        username\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n': typeof types.AccountSearchDocument
  '\n    mutation CreateAccountBlock($input: CreateAccountBlockInput!) {\n      createAccountBlock(input: $input) {\n        clientMutationId\n      }\n    }\n  ': typeof types.CreateAccountBlockDocument
  '\n    mutation DeleteAccountBlock(\n      $input: DeleteAccountBlockByCreatedByAndBlockedAccountIdInput!\n    ) {\n      deleteAccountBlockByCreatedByAndBlockedAccountId(input: $input) {\n        clientMutationId\n      }\n    }\n  ': typeof types.DeleteAccountBlockDocument
  '\n    query AttendanceGuest($id: UUID!) {\n      guestByRowId(rowId: $id) {\n        contactByContactId {\n          accountByAccountId {\n            id\n            rowId\n            username\n          }\n          firstName\n          id\n          lastName\n          language\n          nickname\n          rowId\n        }\n        attendanceByGuestId {\n          checkedOut\n          id\n          rowId\n          updatedAt\n        }\n        feedback\n        id\n        rowId\n      }\n    }\n  ': typeof types.AttendanceGuestDocument
  '\n    query AllContacts($after: Cursor, $createdBy: UUID, $first: Int!) {\n      allContacts(\n        after: $after\n        condition: { createdBy: $createdBy }\n        first: $first\n        orderBy: [FIRST_NAME_ASC, LAST_NAME_ASC]\n      ) {\n        nodes {\n          ...ContactItem\n        }\n        pageInfo {\n          hasNextPage\n          endCursor\n        }\n        totalCount\n      }\n    }\n  ': typeof types.AllContactsDocument
  '\n    mutation DeleteContactByRowId($input: DeleteContactByRowIdInput!) {\n      deleteContactByRowId(input: $input) {\n        clientMutationId\n      }\n    }\n  ': typeof types.DeleteContactByRowIdDocument
  '\n  query AllLegalTerms($language: String) {\n    allLegalTerms(condition: { language: $language }) {\n      nodes {\n        id\n        rowId\n        term\n      }\n    }\n  }\n': typeof types.AllLegalTermsDocument
  '\n  query EventList($after: Cursor, $first: Int!) {\n    allEvents(after: $after, first: $first, orderBy: START_ASC) {\n      nodes {\n        accountByCreatedBy {\n          id\n          rowId\n          username\n        }\n        addressByAddressId {\n          id\n          location {\n            latitude\n            longitude\n          }\n          rowId\n        }\n        eventFavoritesByEventId(first: 1) {\n          nodes {\n            id\n            createdBy\n            rowId\n          }\n        }\n        guestsByEventId(first: 1) {\n          nodes {\n            contactByContactId {\n              accountId\n              id\n              rowId\n            }\n            id\n            rowId\n          }\n        }\n        id\n        name\n        rowId\n        slug\n        start\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      totalCount\n    }\n  }\n': typeof types.EventListDocument
  '\n  query EventSearch(\n    $after: Cursor\n    $first: Int\n    $language: Language\n    $query: String\n  ) {\n    eventSearch(\n      after: $after\n      first: $first\n      language: $language\n      query: $query\n    ) {\n      nodes {\n        accountByCreatedBy {\n          id\n          rowId\n          username\n        }\n        addressByAddressId {\n          id\n          location {\n            latitude\n            longitude\n          }\n          rowId\n        }\n        eventFavoritesByEventId(first: 1) {\n          nodes {\n            createdBy\n            id\n            rowId\n          }\n        }\n        guestsByEventId(first: 1) {\n          nodes {\n            contactByContactId {\n              accountId\n              id\n              rowId\n            }\n            id\n            rowId\n          }\n        }\n        id\n        name\n        rowId\n        slug\n        start\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      totalCount\n    }\n  }\n': typeof types.EventSearchDocument
  '\n    mutation CreateEventFavorite($input: CreateEventFavoriteInput!) {\n      createEventFavorite(input: $input) {\n        eventFavorite {\n          createdBy\n          eventByEventId {\n            id\n          }\n          eventId\n          id\n          rowId\n        }\n      }\n    }\n  ': typeof types.CreateEventFavoriteDocument
  '\n    mutation DeleteEventFavoriteByRowId(\n      $input: DeleteEventFavoriteByRowIdInput!\n    ) {\n      deleteEventFavoriteByRowId(input: $input) {\n        clientMutationId\n      }\n    }\n  ': typeof types.DeleteEventFavoriteByRowIdDocument
  '\n    mutation CreateReport($input: CreateReportInput!) {\n      createReport(input: $input) {\n        clientMutationId\n      }\n    }\n  ': typeof types.CreateReportDocument
  '\n    mutation CreateContact($input: CreateContactInput!) {\n      createContact(input: $input) {\n        contact {\n          id\n        }\n      }\n    }\n  ': typeof types.CreateContactDocument
  '\n    mutation UpdateContactByRowId($input: UpdateContactByRowIdInput!) {\n      updateContactByRowId(input: $input) {\n        contact {\n          ...ContactItem\n        }\n      }\n    }\n  ': typeof types.UpdateContactByRowIdDocument
  '\n    mutation CreateEvent($input: CreateEventInput!) {\n      createEvent(input: $input) {\n        event {\n          id\n        }\n      }\n    }\n  ': typeof types.CreateEventDocument
  '\n    mutation updateEventByRowId($input: UpdateEventByRowIdInput!) {\n      updateEventByRowId(input: $input) {\n        event {\n          id\n        }\n      }\n    }\n  ': typeof types.UpdateEventByRowIdDocument
  '\n    mutation CreateGuests($createGuestsInput: CreateGuestsInput!) {\n      createGuests(input: $createGuestsInput) {\n        result {\n          id\n          rowId\n        }\n      }\n    }\n  ': typeof types.CreateGuestsDocument
  '\n    mutation AccountPasswordChange($input: AccountPasswordChangeInput!) {\n      accountPasswordChange(input: $input) {\n        clientMutationId\n      }\n    }\n  ': typeof types.AccountPasswordChangeDocument
  '\n    mutation AccountPasswordReset($input: AccountPasswordResetInput!) {\n      accountPasswordReset(input: $input) {\n        clientMutationId\n      }\n    }\n  ': typeof types.AccountPasswordResetDocument
  '\n    mutation AccountPasswordResetRequest(\n      $input: AccountPasswordResetRequestInput!\n    ) {\n      accountPasswordResetRequest(input: $input) {\n        clientMutationId\n      }\n    }\n  ': typeof types.AccountPasswordResetRequestDocument
  '\n    query AllGuests($after: Cursor, $eventId: UUID!, $first: Int!) {\n      allGuests(\n        after: $after\n        condition: { eventId: $eventId }\n        first: $first\n      ) {\n        nodes {\n          ...GuestItem\n        }\n        pageInfo {\n          hasNextPage\n          endCursor\n        }\n        totalCount\n      }\n    }\n  ': typeof types.AllGuestsDocument
  '\n    mutation DeleteGuestByRowId($input: DeleteGuestByRowIdInput!) {\n      deleteGuestByRowId(input: $input) {\n        clientMutationId\n      }\n    }\n  ': typeof types.DeleteGuestByRowIdDocument
  '\n    mutation Invite($input: InviteInput!) {\n      invite(input: $input) {\n        clientMutationId\n      }\n    }\n  ': typeof types.InviteDocument
  '\n    query AllPreferenceEventSizes {\n      allPreferenceEventSizes {\n        nodes {\n          eventSize\n          id\n          rowId\n        }\n      }\n    }\n  ': typeof types.AllPreferenceEventSizesDocument
  '\n    mutation CreatePreferenceEventSize(\n      $input: CreatePreferenceEventSizeInput!\n    ) {\n      createPreferenceEventSize(input: $input) {\n        clientMutationId\n      }\n    }\n  ': typeof types.CreatePreferenceEventSizeDocument
  '\n    mutation DeletePreferenceEventSizeByAccountIdAndEventSize(\n      $input: DeletePreferenceEventSizeByAccountIdAndEventSizeInput!\n    ) {\n      deletePreferenceEventSizeByAccountIdAndEventSize(input: $input) {\n        clientMutationId\n      }\n    }\n  ': typeof types.DeletePreferenceEventSizeByAccountIdAndEventSizeDocument
  '\n    query AllEventCategories {\n      allEventCategories {\n        nodes {\n          id\n          name\n          rowId\n        }\n      }\n    }\n  ': typeof types.AllEventCategoriesDocument
  '\n    mutation CreatePreferenceEventCategory(\n      $input: CreatePreferenceEventCategoryInput!\n    ) {\n      createPreferenceEventCategory(input: $input) {\n        preferenceEventCategory {\n          ...PreferenceEventCategoryItem\n        }\n      }\n    }\n  ': typeof types.CreatePreferenceEventCategoryDocument
  '\n      mutation DeletePreferenceEventCategoryByAccountIdAndCategoryId(\n        $input: DeletePreferenceEventCategoryByAccountIdAndCategoryIdInput!\n      ) {\n        deletePreferenceEventCategoryByAccountIdAndCategoryId(input: $input) {\n          deletedPreferenceEventCategoryId\n        }\n      }\n    ': typeof types.DeletePreferenceEventCategoryByAccountIdAndCategoryIdDocument
  '\n    query AllEventFormats {\n      allEventFormats {\n        nodes {\n          id\n          name\n          rowId\n        }\n      }\n    }\n  ': typeof types.AllEventFormatsDocument
  '\n    mutation CreatePreferenceEventFormat(\n      $input: CreatePreferenceEventFormatInput!\n    ) {\n      createPreferenceEventFormat(input: $input) {\n        preferenceEventFormat {\n          ...PreferenceEventFormatItem\n        }\n      }\n    }\n  ': typeof types.CreatePreferenceEventFormatDocument
  '\n    mutation DeletePreferenceEventFormatByAccountIdAndFormatId(\n      $input: DeletePreferenceEventFormatByAccountIdAndFormatIdInput!\n    ) {\n      deletePreferenceEventFormatByAccountIdAndFormatId(input: $input) {\n        deletedPreferenceEventFormatId\n      }\n    }\n  ': typeof types.DeletePreferenceEventFormatByAccountIdAndFormatIdDocument
  '\n    mutation CreatePreferenceEventLocation(\n      $input: CreatePreferenceEventLocationInput!\n    ) {\n      createPreferenceEventLocation(input: $input) {\n        preferenceEventLocation {\n          ...PreferenceEventLocationItem\n        }\n      }\n    }\n  ': typeof types.CreatePreferenceEventLocationDocument
  '\n    mutation DeletePreferenceEventLocationByRowId(\n      $input: DeletePreferenceEventLocationByRowIdInput!\n    ) {\n      deletePreferenceEventLocationByRowId(input: $input) {\n        deletedPreferenceEventLocationId\n      }\n    }\n  ': typeof types.DeletePreferenceEventLocationByRowIdDocument
  '\n    query AccountUploadQuotaBytes {\n      accountUploadQuotaBytes\n    }\n  ': typeof types.AccountUploadQuotaBytesDocument
  '\n    query AllUploads($after: Cursor, $first: Int!, $createdBy: UUID) {\n      allUploads(\n        after: $after\n        condition: { createdBy: $createdBy }\n        first: $first\n      ) {\n        nodes {\n          id\n          rowId\n          sizeByte\n          storageKey\n        }\n        pageInfo {\n          hasNextPage\n          endCursor\n        }\n        totalCount\n      }\n    }\n  ': typeof types.AllUploadsDocument
  '\n    mutation DeleteUploadByRowId($input: DeleteUploadByRowIdInput!) {\n      deleteUploadByRowId(input: $input) {\n        clientMutationId\n      }\n    }\n  ': typeof types.DeleteUploadByRowIdDocument
  '\n    mutation CreateUpload($input: CreateUploadInput!) {\n      createUpload(input: $input) {\n        clientMutationId\n        upload {\n          id\n          rowId\n        }\n      }\n    }\n  ': typeof types.CreateUploadDocument
  '\n    mutation JwtUpdateGuestAddGuest($input: JwtUpdateGuestAddInput!) {\n      jwtUpdateGuestAdd(input: $input) {\n        result\n      }\n    }\n  ': typeof types.JwtUpdateGuestAddGuestDocument
  '\n    query AccountEdit($username: String!) {\n      accountByUsername(username: $username) {\n        description\n        id\n        imprintUrl\n        profilePictureByAccountId {\n          id\n          rowId\n          uploadByUploadId {\n            id\n            rowId\n            storageKey\n          }\n        }\n        rowId\n        username\n      }\n    }\n  ': typeof types.AccountEditDocument
  '\n    mutation CreateProfilePicture($input: CreateProfilePictureInput!) {\n      createProfilePicture(input: $input) {\n        profilePicture {\n          accountByAccountId {\n            id\n            profilePictureByAccountId {\n              id\n              rowId\n            }\n            rowId\n          }\n          id\n          rowId\n          uploadId\n        }\n      }\n    }\n  ': typeof types.CreateProfilePictureDocument
  '\n    mutation DeleteProfilePictureByRowIdMutation(\n      $input: DeleteProfilePictureByRowIdInput!\n    ) {\n      deleteProfilePictureByRowId(input: $input) {\n        clientMutationId\n      }\n    }\n  ': typeof types.DeleteProfilePictureByRowIdMutationDocument
  '\n    mutation UpdateAccountByRowId($input: UpdateAccountByRowIdInput!) {\n      updateAccountByRowId(input: $input) {\n        account {\n          description\n          id\n          imprintUrl\n          rowId\n        }\n      }\n    }\n  ': typeof types.UpdateAccountByRowIdDocument
  '\n    mutation AccountEmailAddressVerification(\n      $input: AccountEmailAddressVerificationInput!\n    ) {\n      accountEmailAddressVerification(input: $input) {\n        clientMutationId\n      }\n    }\n  ': typeof types.AccountEmailAddressVerificationDocument
  '\n    query AccountBlockAccounts {\n      accountBlockAccounts {\n        nodes {\n          id\n          storageKey\n          username\n        }\n      }\n    }\n  ': typeof types.AccountBlockAccountsDocument
  '\n  query Account($username: String!) {\n    accountByUsername(username: $username) {\n      achievementsByAccountId(first: 5) {\n        nodes {\n          achievement\n          id\n          rowId\n        }\n      }\n      description\n      eventsByCreatedBy(first: 3, orderBy: START_DESC) {\n        nodes {\n          eventFavoritesByEventId(first: 1) {\n            nodes {\n              createdBy\n              id\n              rowId\n            }\n          }\n          guestsByEventId(first: 1) {\n            nodes {\n              contactByContactId {\n                accountId\n                id\n                rowId\n              }\n              id\n              rowId\n            }\n          }\n          id\n          name\n          rowId\n          slug\n          start\n        }\n        totalCount\n      }\n      id\n      imprintUrl\n      rowId\n    }\n  }\n': typeof types.AccountDocument
  '\n    query Attendance($id: UUID!) {\n      attendanceByRowId(rowId: $id) {\n        checkedOut\n        contactByContactId {\n          accountByAccountId {\n            id\n            rowId\n            username\n          }\n          firstName\n          id\n          lastName\n          language\n          nickname\n          rowId\n        }\n        guestByGuestId {\n          id\n          rowId\n        }\n        id\n        rowId\n        updatedAt\n      }\n      eventByAttendanceId(attendanceId: $id) {\n        id\n        name\n        eventAppsByEventId {\n          nodes {\n            id\n            appByAppId {\n              iconSvg\n              id\n              name\n              rowId\n              url\n              urlAttendance\n            }\n            rowId\n          }\n        }\n        rowId\n      }\n    }\n  ': typeof types.AttendanceDocument
  '\n    mutation AttendanceCheckOut(\n      $id: UUID!\n      $attendancePatch: AttendancePatch!\n    ) {\n      updateAttendanceByRowId(\n        input: { rowId: $id, attendancePatch: $attendancePatch }\n      ) {\n        attendance {\n          id\n          checkedOut\n          rowId\n        }\n      }\n    }\n  ': typeof types.AttendanceCheckOutDocument
  '\n  query DashboardEventRecommendations($id: UUID!) {\n    eventByRowId(rowId: $id) {\n      accountByCreatedBy {\n        id\n        rowId\n        username\n      }\n      addressByAddressId {\n        id\n        location {\n          latitude\n          longitude\n        }\n        rowId\n      }\n      eventFavoritesByEventId(first: 1) {\n        nodes {\n          createdBy\n          id\n          rowId\n        }\n      }\n      guestsByEventId(first: 1) {\n        nodes {\n          contactByContactId {\n            accountId\n            id\n            rowId\n          }\n          id\n          rowId\n        }\n      }\n      id\n      name\n      rowId\n      slug\n      start\n    }\n  }\n': typeof types.DashboardEventRecommendationsDocument
  '\n  query DashboardEventUpcoming($createdBy: UUID!) {\n    allEvents(condition: { createdBy: $createdBy }) {\n      nodes {\n        accountByCreatedBy {\n          id\n          rowId\n          username\n        }\n        end\n        id\n        name\n        rowId\n        slug\n        start\n      }\n    }\n  }\n': typeof types.DashboardEventUpcomingDocument
  '\n    query EventEdit($slug: String!, $username: String!) {\n      accountByUsername(username: $username) {\n        eventsByCreatedBy(condition: { slug: $slug }) {\n          nodes {\n            createdBy\n            description\n            end\n            id\n            guestCountMaximum\n            isArchived\n            isInPerson\n            isRemote\n            name\n            rowId\n            slug\n            start\n            url\n            visibility\n          }\n        }\n        id\n        rowId\n        username\n      }\n    }\n  ': typeof types.EventEditDocument
  '\n    mutation EventDelete($input: EventDeleteInput!) {\n      eventDelete(input: $input) {\n        clientMutationId\n      }\n    }\n  ': typeof types.EventDeleteDocument
  '\n    query EventAttendance($slug: String!, $username: String!) {\n      accountByUsername(username: $username) {\n        eventsByCreatedBy(condition: { slug: $slug }) {\n          nodes {\n            id\n            name\n            rowId\n            slug\n          }\n        }\n        id\n      }\n    }\n  ': typeof types.EventAttendanceDocument
  '\n    mutation AttendanceCreate($input: CreateAttendanceInput!) {\n      createAttendance(input: $input) {\n        attendance {\n          id\n          rowId\n        }\n      }\n    }\n  ': typeof types.AttendanceCreateDocument
  '\n    query EventGuests($slug: String!, $username: String!) {\n      accountByUsername(username: $username) {\n        eventsByCreatedBy(condition: { slug: $slug }) {\n          nodes {\n            accountByCreatedBy {\n              id\n              rowId\n              username\n            }\n            createdBy\n            guestCountMaximum\n            guestsByEventId {\n              nodes {\n                contactByContactId {\n                  accountId\n                  id\n                  rowId\n                }\n                id\n                rowId\n              }\n              pageInfo {\n                hasNextPage\n                endCursor\n              }\n              totalCount\n            }\n            id\n            name\n            rowId\n            slug\n          }\n        }\n        id\n        rowId\n      }\n    }\n  ': typeof types.EventGuestsDocument
  '\n    query Event($slug: String!, $username: String!) {\n      accountByUsername(username: $username) {\n        eventsByCreatedBy(condition: { slug: $slug }) {\n          nodes {\n            accountByCreatedBy {\n              id\n              rowId\n              username\n            }\n            addressByAddressId {\n              id\n              location {\n                latitude\n                longitude\n              }\n              name\n              rowId\n            }\n            createdBy\n            description\n            end\n            id\n            isArchived\n            isInPerson\n            isRemote\n            name\n            rowId\n            slug\n            start\n            url\n            visibility\n          }\n        }\n        id\n        rowId\n        username\n      }\n    }\n  ': typeof types.EventDocument
  '\n  query EventListAccount($after: Cursor, $first: Int!, $username: String!) {\n    accountByUsername(username: $username) {\n      eventsByCreatedBy(after: $after, first: $first, orderBy: START_DESC) {\n        nodes {\n          eventFavoritesByEventId(first: 1) {\n            nodes {\n              createdBy\n              id\n              rowId\n            }\n          }\n          guestsByEventId(first: 1) {\n            nodes {\n              contactByContactId {\n                accountId\n                id\n                rowId\n              }\n              id\n              rowId\n            }\n          }\n          id\n          name\n          rowId\n          slug\n          start\n        }\n        pageInfo {\n          hasNextPage\n          endCursor\n        }\n        totalCount\n      }\n      id\n      rowId\n    }\n  }\n': typeof types.EventListAccountDocument
  '\n    mutation UpdateGuestByRowId($input: UpdateGuestByRowIdInput!) {\n      updateGuestByRowId(input: $input) {\n        guest {\n          id\n          feedback\n        }\n      }\n    }\n  ': typeof types.UpdateGuestByRowIdDocument
  '\n    query GuestEvent($id: UUID!) {\n      guestByRowId(rowId: $id) {\n        contactByContactId {\n          accountByAccountId {\n            id\n            rowId\n            username\n          }\n          createdBy\n          firstName\n          id\n          lastName\n          nickname\n          rowId\n        }\n        eventByEventId {\n          accountByCreatedBy {\n            id\n            rowId\n            username\n          }\n          addressByAddressId {\n            id\n            location {\n              latitude\n              longitude\n            }\n            name\n            rowId\n          }\n          createdBy\n          description\n          end\n          id\n          isArchived\n          isInPerson\n          isRemote\n          name\n          rowId\n          slug\n          start\n          url\n          visibility\n        }\n        feedback\n        id\n        rowId\n      }\n    }\n  ': typeof types.GuestEventDocument
  '\n    mutation AchievementUnlock($input: AchievementUnlockInput!) {\n      achievementUnlock(input: $input) {\n        clientMutationId\n        result\n      }\n    }\n  ': typeof types.AchievementUnlockDocument
  '\n  query DeviceByCreatedByAndFcmToken($createdBy: UUID!, $fcmToken: String!) {\n    deviceByCreatedByAndFcmToken(createdBy: $createdBy, fcmToken: $fcmToken) {\n      id\n    }\n  }\n': typeof types.DeviceByCreatedByAndFcmTokenDocument
  '\n  mutation CreateDevice($input: CreateDeviceInput!) {\n    createDevice(input: $input) {\n      clientMutationId\n    }\n  }\n': typeof types.CreateDeviceDocument
  '\n  mutation DeleteDeviceByCreatedByAndFcmToken(\n    $input: DeleteDeviceByCreatedByAndFcmTokenInput!\n  ) {\n    deleteDeviceByCreatedByAndFcmToken(input: $input) {\n      clientMutationId\n    }\n  }\n': typeof types.DeleteDeviceByCreatedByAndFcmTokenDocument
  '\n  query AccountByUsername($username: String!) {\n    accountByUsername(username: $username) {\n      id\n      rowId\n    }\n  }\n': typeof types.AccountByUsernameDocument
  '\n  query EventByCreatedByAndSlug($createdBy: UUID!, $slug: String!) {\n    eventByCreatedByAndSlug(createdBy: $createdBy, slug: $slug) {\n      id\n    }\n  }\n': typeof types.EventByCreatedByAndSlugDocument
  '\n  mutation JwtCreate($input: JwtCreateInput!) {\n    jwtCreate(input: $input) {\n      clientMutationId\n      result\n    }\n  }\n': typeof types.JwtCreateDocument
  '\n  mutation JwtUpdate($input: JwtUpdateInput!) {\n    jwtUpdate(input: $input) {\n      clientMutationId\n      result\n    }\n  }\n': typeof types.JwtUpdateDocument
  '\n  mutation JwtUpdateAttendanceAdd($input: JwtUpdateAttendanceAddInput!) {\n    jwtUpdateAttendanceAdd(input: $input) {\n      result\n    }\n  }\n': typeof types.JwtUpdateAttendanceAddDocument
  '\n  mutation JwtUpdateGuestAdd($input: JwtUpdateGuestAddInput!) {\n    jwtUpdateGuestAdd(input: $input) {\n      result\n    }\n  }\n': typeof types.JwtUpdateGuestAddDocument
  '\n  mutation AccountRegistration($input: AccountRegistrationInput!) {\n    accountRegistration(input: $input) {\n      clientMutationId\n    }\n  }\n': typeof types.AccountRegistrationDocument
  '\n  fragment ContactItem on Contact {\n    accountId\n    accountByAccountId {\n      id\n      rowId\n      username\n    }\n    accountByCreatedBy {\n      id\n      rowId\n      username\n    }\n    createdBy\n    emailAddress\n    emailAddressHash\n    firstName\n    id\n    lastName\n    nickname\n    note\n    phoneNumber\n    rowId\n    url\n  }\n': typeof types.ContactItemFragmentDoc
  '\n  fragment EventItem on Event {\n    accountByCreatedBy {\n      id\n      rowId\n      username\n    }\n    createdBy\n    description\n    end\n    guestCountMaximum\n    id\n    isArchived\n    isInPerson\n    isRemote\n    name\n    rowId\n    slug\n    start\n    url\n    visibility\n  }\n': typeof types.EventItemFragmentDoc
  '\n  fragment GuestItem on Guest {\n    contactByContactId {\n      ...ContactItem\n    }\n    contactId\n    feedback\n    id\n    rowId\n  }\n': typeof types.GuestItemFragmentDoc
  '\n  fragment PreferenceEventCategoryItem on PreferenceEventCategory {\n    categoryId\n    id\n  }\n': typeof types.PreferenceEventCategoryItemFragmentDoc
  '\n  query AllPreferenceEventCategories {\n    allPreferenceEventCategories {\n      nodes {\n        ...PreferenceEventCategoryItem\n      }\n    }\n  }\n': typeof types.AllPreferenceEventCategoriesDocument
  '\n  fragment PreferenceEventFormatItem on PreferenceEventFormat {\n    formatId\n    id\n  }\n': typeof types.PreferenceEventFormatItemFragmentDoc
  '\n  query AllPreferenceEventFormats {\n    allPreferenceEventFormats {\n      nodes {\n        ...PreferenceEventFormatItem\n      }\n    }\n  }\n': typeof types.AllPreferenceEventFormatsDocument
  '\n  fragment PreferenceEventLocationItem on PreferenceEventLocation {\n    id\n    location {\n      latitude\n      longitude\n    }\n    radius\n    rowId\n  }\n': typeof types.PreferenceEventLocationItemFragmentDoc
  '\n  query AllPreferenceEventLocations {\n    allPreferenceEventLocations {\n      nodes {\n        ...PreferenceEventLocationItem\n      }\n    }\n  }\n': typeof types.AllPreferenceEventLocationsDocument
}
const documents: Documents = {
  '\n    mutation AccountDelete($input: AccountDeleteInput!) {\n      accountDelete(input: $input) {\n        clientMutationId\n      }\n    }\n  ':
    types.AccountDeleteDocument,
  '\n    query AccountByRowId($id: UUID!) {\n      accountByRowId(rowId: $id) {\n        id\n        profilePictureByAccountId {\n          id\n          rowId\n          uploadByUploadId {\n            id\n            rowId\n            storageKey\n          }\n        }\n        rowId\n        username\n      }\n    }\n  ':
    types.AccountByRowIdDocument,
  '\n  query AccountSearch($after: Cursor, $first: Int, $username: String) {\n    allAccounts(\n      after: $after\n      condition: { username: $username }\n      first: $first\n      orderBy: USERNAME_ASC\n    ) {\n      nodes {\n        id\n        rowId\n        username\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n':
    types.AccountSearchDocument,
  '\n    mutation CreateAccountBlock($input: CreateAccountBlockInput!) {\n      createAccountBlock(input: $input) {\n        clientMutationId\n      }\n    }\n  ':
    types.CreateAccountBlockDocument,
  '\n    mutation DeleteAccountBlock(\n      $input: DeleteAccountBlockByCreatedByAndBlockedAccountIdInput!\n    ) {\n      deleteAccountBlockByCreatedByAndBlockedAccountId(input: $input) {\n        clientMutationId\n      }\n    }\n  ':
    types.DeleteAccountBlockDocument,
  '\n    query AttendanceGuest($id: UUID!) {\n      guestByRowId(rowId: $id) {\n        contactByContactId {\n          accountByAccountId {\n            id\n            rowId\n            username\n          }\n          firstName\n          id\n          lastName\n          language\n          nickname\n          rowId\n        }\n        attendanceByGuestId {\n          checkedOut\n          id\n          rowId\n          updatedAt\n        }\n        feedback\n        id\n        rowId\n      }\n    }\n  ':
    types.AttendanceGuestDocument,
  '\n    query AllContacts($after: Cursor, $createdBy: UUID, $first: Int!) {\n      allContacts(\n        after: $after\n        condition: { createdBy: $createdBy }\n        first: $first\n        orderBy: [FIRST_NAME_ASC, LAST_NAME_ASC]\n      ) {\n        nodes {\n          ...ContactItem\n        }\n        pageInfo {\n          hasNextPage\n          endCursor\n        }\n        totalCount\n      }\n    }\n  ':
    types.AllContactsDocument,
  '\n    mutation DeleteContactByRowId($input: DeleteContactByRowIdInput!) {\n      deleteContactByRowId(input: $input) {\n        clientMutationId\n      }\n    }\n  ':
    types.DeleteContactByRowIdDocument,
  '\n  query AllLegalTerms($language: String) {\n    allLegalTerms(condition: { language: $language }) {\n      nodes {\n        id\n        rowId\n        term\n      }\n    }\n  }\n':
    types.AllLegalTermsDocument,
  '\n  query EventList($after: Cursor, $first: Int!) {\n    allEvents(after: $after, first: $first, orderBy: START_ASC) {\n      nodes {\n        accountByCreatedBy {\n          id\n          rowId\n          username\n        }\n        addressByAddressId {\n          id\n          location {\n            latitude\n            longitude\n          }\n          rowId\n        }\n        eventFavoritesByEventId(first: 1) {\n          nodes {\n            id\n            createdBy\n            rowId\n          }\n        }\n        guestsByEventId(first: 1) {\n          nodes {\n            contactByContactId {\n              accountId\n              id\n              rowId\n            }\n            id\n            rowId\n          }\n        }\n        id\n        name\n        rowId\n        slug\n        start\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      totalCount\n    }\n  }\n':
    types.EventListDocument,
  '\n  query EventSearch(\n    $after: Cursor\n    $first: Int\n    $language: Language\n    $query: String\n  ) {\n    eventSearch(\n      after: $after\n      first: $first\n      language: $language\n      query: $query\n    ) {\n      nodes {\n        accountByCreatedBy {\n          id\n          rowId\n          username\n        }\n        addressByAddressId {\n          id\n          location {\n            latitude\n            longitude\n          }\n          rowId\n        }\n        eventFavoritesByEventId(first: 1) {\n          nodes {\n            createdBy\n            id\n            rowId\n          }\n        }\n        guestsByEventId(first: 1) {\n          nodes {\n            contactByContactId {\n              accountId\n              id\n              rowId\n            }\n            id\n            rowId\n          }\n        }\n        id\n        name\n        rowId\n        slug\n        start\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      totalCount\n    }\n  }\n':
    types.EventSearchDocument,
  '\n    mutation CreateEventFavorite($input: CreateEventFavoriteInput!) {\n      createEventFavorite(input: $input) {\n        eventFavorite {\n          createdBy\n          eventByEventId {\n            id\n          }\n          eventId\n          id\n          rowId\n        }\n      }\n    }\n  ':
    types.CreateEventFavoriteDocument,
  '\n    mutation DeleteEventFavoriteByRowId(\n      $input: DeleteEventFavoriteByRowIdInput!\n    ) {\n      deleteEventFavoriteByRowId(input: $input) {\n        clientMutationId\n      }\n    }\n  ':
    types.DeleteEventFavoriteByRowIdDocument,
  '\n    mutation CreateReport($input: CreateReportInput!) {\n      createReport(input: $input) {\n        clientMutationId\n      }\n    }\n  ':
    types.CreateReportDocument,
  '\n    mutation CreateContact($input: CreateContactInput!) {\n      createContact(input: $input) {\n        contact {\n          id\n        }\n      }\n    }\n  ':
    types.CreateContactDocument,
  '\n    mutation UpdateContactByRowId($input: UpdateContactByRowIdInput!) {\n      updateContactByRowId(input: $input) {\n        contact {\n          ...ContactItem\n        }\n      }\n    }\n  ':
    types.UpdateContactByRowIdDocument,
  '\n    mutation CreateEvent($input: CreateEventInput!) {\n      createEvent(input: $input) {\n        event {\n          id\n        }\n      }\n    }\n  ':
    types.CreateEventDocument,
  '\n    mutation updateEventByRowId($input: UpdateEventByRowIdInput!) {\n      updateEventByRowId(input: $input) {\n        event {\n          id\n        }\n      }\n    }\n  ':
    types.UpdateEventByRowIdDocument,
  '\n    mutation CreateGuests($createGuestsInput: CreateGuestsInput!) {\n      createGuests(input: $createGuestsInput) {\n        result {\n          id\n          rowId\n        }\n      }\n    }\n  ':
    types.CreateGuestsDocument,
  '\n    mutation AccountPasswordChange($input: AccountPasswordChangeInput!) {\n      accountPasswordChange(input: $input) {\n        clientMutationId\n      }\n    }\n  ':
    types.AccountPasswordChangeDocument,
  '\n    mutation AccountPasswordReset($input: AccountPasswordResetInput!) {\n      accountPasswordReset(input: $input) {\n        clientMutationId\n      }\n    }\n  ':
    types.AccountPasswordResetDocument,
  '\n    mutation AccountPasswordResetRequest(\n      $input: AccountPasswordResetRequestInput!\n    ) {\n      accountPasswordResetRequest(input: $input) {\n        clientMutationId\n      }\n    }\n  ':
    types.AccountPasswordResetRequestDocument,
  '\n    query AllGuests($after: Cursor, $eventId: UUID!, $first: Int!) {\n      allGuests(\n        after: $after\n        condition: { eventId: $eventId }\n        first: $first\n      ) {\n        nodes {\n          ...GuestItem\n        }\n        pageInfo {\n          hasNextPage\n          endCursor\n        }\n        totalCount\n      }\n    }\n  ':
    types.AllGuestsDocument,
  '\n    mutation DeleteGuestByRowId($input: DeleteGuestByRowIdInput!) {\n      deleteGuestByRowId(input: $input) {\n        clientMutationId\n      }\n    }\n  ':
    types.DeleteGuestByRowIdDocument,
  '\n    mutation Invite($input: InviteInput!) {\n      invite(input: $input) {\n        clientMutationId\n      }\n    }\n  ':
    types.InviteDocument,
  '\n    query AllPreferenceEventSizes {\n      allPreferenceEventSizes {\n        nodes {\n          eventSize\n          id\n          rowId\n        }\n      }\n    }\n  ':
    types.AllPreferenceEventSizesDocument,
  '\n    mutation CreatePreferenceEventSize(\n      $input: CreatePreferenceEventSizeInput!\n    ) {\n      createPreferenceEventSize(input: $input) {\n        clientMutationId\n      }\n    }\n  ':
    types.CreatePreferenceEventSizeDocument,
  '\n    mutation DeletePreferenceEventSizeByAccountIdAndEventSize(\n      $input: DeletePreferenceEventSizeByAccountIdAndEventSizeInput!\n    ) {\n      deletePreferenceEventSizeByAccountIdAndEventSize(input: $input) {\n        clientMutationId\n      }\n    }\n  ':
    types.DeletePreferenceEventSizeByAccountIdAndEventSizeDocument,
  '\n    query AllEventCategories {\n      allEventCategories {\n        nodes {\n          id\n          name\n          rowId\n        }\n      }\n    }\n  ':
    types.AllEventCategoriesDocument,
  '\n    mutation CreatePreferenceEventCategory(\n      $input: CreatePreferenceEventCategoryInput!\n    ) {\n      createPreferenceEventCategory(input: $input) {\n        preferenceEventCategory {\n          ...PreferenceEventCategoryItem\n        }\n      }\n    }\n  ':
    types.CreatePreferenceEventCategoryDocument,
  '\n      mutation DeletePreferenceEventCategoryByAccountIdAndCategoryId(\n        $input: DeletePreferenceEventCategoryByAccountIdAndCategoryIdInput!\n      ) {\n        deletePreferenceEventCategoryByAccountIdAndCategoryId(input: $input) {\n          deletedPreferenceEventCategoryId\n        }\n      }\n    ':
    types.DeletePreferenceEventCategoryByAccountIdAndCategoryIdDocument,
  '\n    query AllEventFormats {\n      allEventFormats {\n        nodes {\n          id\n          name\n          rowId\n        }\n      }\n    }\n  ':
    types.AllEventFormatsDocument,
  '\n    mutation CreatePreferenceEventFormat(\n      $input: CreatePreferenceEventFormatInput!\n    ) {\n      createPreferenceEventFormat(input: $input) {\n        preferenceEventFormat {\n          ...PreferenceEventFormatItem\n        }\n      }\n    }\n  ':
    types.CreatePreferenceEventFormatDocument,
  '\n    mutation DeletePreferenceEventFormatByAccountIdAndFormatId(\n      $input: DeletePreferenceEventFormatByAccountIdAndFormatIdInput!\n    ) {\n      deletePreferenceEventFormatByAccountIdAndFormatId(input: $input) {\n        deletedPreferenceEventFormatId\n      }\n    }\n  ':
    types.DeletePreferenceEventFormatByAccountIdAndFormatIdDocument,
  '\n    mutation CreatePreferenceEventLocation(\n      $input: CreatePreferenceEventLocationInput!\n    ) {\n      createPreferenceEventLocation(input: $input) {\n        preferenceEventLocation {\n          ...PreferenceEventLocationItem\n        }\n      }\n    }\n  ':
    types.CreatePreferenceEventLocationDocument,
  '\n    mutation DeletePreferenceEventLocationByRowId(\n      $input: DeletePreferenceEventLocationByRowIdInput!\n    ) {\n      deletePreferenceEventLocationByRowId(input: $input) {\n        deletedPreferenceEventLocationId\n      }\n    }\n  ':
    types.DeletePreferenceEventLocationByRowIdDocument,
  '\n    query AccountUploadQuotaBytes {\n      accountUploadQuotaBytes\n    }\n  ':
    types.AccountUploadQuotaBytesDocument,
  '\n    query AllUploads($after: Cursor, $first: Int!, $createdBy: UUID) {\n      allUploads(\n        after: $after\n        condition: { createdBy: $createdBy }\n        first: $first\n      ) {\n        nodes {\n          id\n          rowId\n          sizeByte\n          storageKey\n        }\n        pageInfo {\n          hasNextPage\n          endCursor\n        }\n        totalCount\n      }\n    }\n  ':
    types.AllUploadsDocument,
  '\n    mutation DeleteUploadByRowId($input: DeleteUploadByRowIdInput!) {\n      deleteUploadByRowId(input: $input) {\n        clientMutationId\n      }\n    }\n  ':
    types.DeleteUploadByRowIdDocument,
  '\n    mutation CreateUpload($input: CreateUploadInput!) {\n      createUpload(input: $input) {\n        clientMutationId\n        upload {\n          id\n          rowId\n        }\n      }\n    }\n  ':
    types.CreateUploadDocument,
  '\n    mutation JwtUpdateGuestAddGuest($input: JwtUpdateGuestAddInput!) {\n      jwtUpdateGuestAdd(input: $input) {\n        result\n      }\n    }\n  ':
    types.JwtUpdateGuestAddGuestDocument,
  '\n    query AccountEdit($username: String!) {\n      accountByUsername(username: $username) {\n        description\n        id\n        imprintUrl\n        profilePictureByAccountId {\n          id\n          rowId\n          uploadByUploadId {\n            id\n            rowId\n            storageKey\n          }\n        }\n        rowId\n        username\n      }\n    }\n  ':
    types.AccountEditDocument,
  '\n    mutation CreateProfilePicture($input: CreateProfilePictureInput!) {\n      createProfilePicture(input: $input) {\n        profilePicture {\n          accountByAccountId {\n            id\n            profilePictureByAccountId {\n              id\n              rowId\n            }\n            rowId\n          }\n          id\n          rowId\n          uploadId\n        }\n      }\n    }\n  ':
    types.CreateProfilePictureDocument,
  '\n    mutation DeleteProfilePictureByRowIdMutation(\n      $input: DeleteProfilePictureByRowIdInput!\n    ) {\n      deleteProfilePictureByRowId(input: $input) {\n        clientMutationId\n      }\n    }\n  ':
    types.DeleteProfilePictureByRowIdMutationDocument,
  '\n    mutation UpdateAccountByRowId($input: UpdateAccountByRowIdInput!) {\n      updateAccountByRowId(input: $input) {\n        account {\n          description\n          id\n          imprintUrl\n          rowId\n        }\n      }\n    }\n  ':
    types.UpdateAccountByRowIdDocument,
  '\n    mutation AccountEmailAddressVerification(\n      $input: AccountEmailAddressVerificationInput!\n    ) {\n      accountEmailAddressVerification(input: $input) {\n        clientMutationId\n      }\n    }\n  ':
    types.AccountEmailAddressVerificationDocument,
  '\n    query AccountBlockAccounts {\n      accountBlockAccounts {\n        nodes {\n          id\n          storageKey\n          username\n        }\n      }\n    }\n  ':
    types.AccountBlockAccountsDocument,
  '\n  query Account($username: String!) {\n    accountByUsername(username: $username) {\n      achievementsByAccountId(first: 5) {\n        nodes {\n          achievement\n          id\n          rowId\n        }\n      }\n      description\n      eventsByCreatedBy(first: 3, orderBy: START_DESC) {\n        nodes {\n          eventFavoritesByEventId(first: 1) {\n            nodes {\n              createdBy\n              id\n              rowId\n            }\n          }\n          guestsByEventId(first: 1) {\n            nodes {\n              contactByContactId {\n                accountId\n                id\n                rowId\n              }\n              id\n              rowId\n            }\n          }\n          id\n          name\n          rowId\n          slug\n          start\n        }\n        totalCount\n      }\n      id\n      imprintUrl\n      rowId\n    }\n  }\n':
    types.AccountDocument,
  '\n    query Attendance($id: UUID!) {\n      attendanceByRowId(rowId: $id) {\n        checkedOut\n        contactByContactId {\n          accountByAccountId {\n            id\n            rowId\n            username\n          }\n          firstName\n          id\n          lastName\n          language\n          nickname\n          rowId\n        }\n        guestByGuestId {\n          id\n          rowId\n        }\n        id\n        rowId\n        updatedAt\n      }\n      eventByAttendanceId(attendanceId: $id) {\n        id\n        name\n        eventAppsByEventId {\n          nodes {\n            id\n            appByAppId {\n              iconSvg\n              id\n              name\n              rowId\n              url\n              urlAttendance\n            }\n            rowId\n          }\n        }\n        rowId\n      }\n    }\n  ':
    types.AttendanceDocument,
  '\n    mutation AttendanceCheckOut(\n      $id: UUID!\n      $attendancePatch: AttendancePatch!\n    ) {\n      updateAttendanceByRowId(\n        input: { rowId: $id, attendancePatch: $attendancePatch }\n      ) {\n        attendance {\n          id\n          checkedOut\n          rowId\n        }\n      }\n    }\n  ':
    types.AttendanceCheckOutDocument,
  '\n  query DashboardEventRecommendations($id: UUID!) {\n    eventByRowId(rowId: $id) {\n      accountByCreatedBy {\n        id\n        rowId\n        username\n      }\n      addressByAddressId {\n        id\n        location {\n          latitude\n          longitude\n        }\n        rowId\n      }\n      eventFavoritesByEventId(first: 1) {\n        nodes {\n          createdBy\n          id\n          rowId\n        }\n      }\n      guestsByEventId(first: 1) {\n        nodes {\n          contactByContactId {\n            accountId\n            id\n            rowId\n          }\n          id\n          rowId\n        }\n      }\n      id\n      name\n      rowId\n      slug\n      start\n    }\n  }\n':
    types.DashboardEventRecommendationsDocument,
  '\n  query DashboardEventUpcoming($createdBy: UUID!) {\n    allEvents(condition: { createdBy: $createdBy }) {\n      nodes {\n        accountByCreatedBy {\n          id\n          rowId\n          username\n        }\n        end\n        id\n        name\n        rowId\n        slug\n        start\n      }\n    }\n  }\n':
    types.DashboardEventUpcomingDocument,
  '\n    query EventEdit($slug: String!, $username: String!) {\n      accountByUsername(username: $username) {\n        eventsByCreatedBy(condition: { slug: $slug }) {\n          nodes {\n            createdBy\n            description\n            end\n            id\n            guestCountMaximum\n            isArchived\n            isInPerson\n            isRemote\n            name\n            rowId\n            slug\n            start\n            url\n            visibility\n          }\n        }\n        id\n        rowId\n        username\n      }\n    }\n  ':
    types.EventEditDocument,
  '\n    mutation EventDelete($input: EventDeleteInput!) {\n      eventDelete(input: $input) {\n        clientMutationId\n      }\n    }\n  ':
    types.EventDeleteDocument,
  '\n    query EventAttendance($slug: String!, $username: String!) {\n      accountByUsername(username: $username) {\n        eventsByCreatedBy(condition: { slug: $slug }) {\n          nodes {\n            id\n            name\n            rowId\n            slug\n          }\n        }\n        id\n      }\n    }\n  ':
    types.EventAttendanceDocument,
  '\n    mutation AttendanceCreate($input: CreateAttendanceInput!) {\n      createAttendance(input: $input) {\n        attendance {\n          id\n          rowId\n        }\n      }\n    }\n  ':
    types.AttendanceCreateDocument,
  '\n    query EventGuests($slug: String!, $username: String!) {\n      accountByUsername(username: $username) {\n        eventsByCreatedBy(condition: { slug: $slug }) {\n          nodes {\n            accountByCreatedBy {\n              id\n              rowId\n              username\n            }\n            createdBy\n            guestCountMaximum\n            guestsByEventId {\n              nodes {\n                contactByContactId {\n                  accountId\n                  id\n                  rowId\n                }\n                id\n                rowId\n              }\n              pageInfo {\n                hasNextPage\n                endCursor\n              }\n              totalCount\n            }\n            id\n            name\n            rowId\n            slug\n          }\n        }\n        id\n        rowId\n      }\n    }\n  ':
    types.EventGuestsDocument,
  '\n    query Event($slug: String!, $username: String!) {\n      accountByUsername(username: $username) {\n        eventsByCreatedBy(condition: { slug: $slug }) {\n          nodes {\n            accountByCreatedBy {\n              id\n              rowId\n              username\n            }\n            addressByAddressId {\n              id\n              location {\n                latitude\n                longitude\n              }\n              name\n              rowId\n            }\n            createdBy\n            description\n            end\n            id\n            isArchived\n            isInPerson\n            isRemote\n            name\n            rowId\n            slug\n            start\n            url\n            visibility\n          }\n        }\n        id\n        rowId\n        username\n      }\n    }\n  ':
    types.EventDocument,
  '\n  query EventListAccount($after: Cursor, $first: Int!, $username: String!) {\n    accountByUsername(username: $username) {\n      eventsByCreatedBy(after: $after, first: $first, orderBy: START_DESC) {\n        nodes {\n          eventFavoritesByEventId(first: 1) {\n            nodes {\n              createdBy\n              id\n              rowId\n            }\n          }\n          guestsByEventId(first: 1) {\n            nodes {\n              contactByContactId {\n                accountId\n                id\n                rowId\n              }\n              id\n              rowId\n            }\n          }\n          id\n          name\n          rowId\n          slug\n          start\n        }\n        pageInfo {\n          hasNextPage\n          endCursor\n        }\n        totalCount\n      }\n      id\n      rowId\n    }\n  }\n':
    types.EventListAccountDocument,
  '\n    mutation UpdateGuestByRowId($input: UpdateGuestByRowIdInput!) {\n      updateGuestByRowId(input: $input) {\n        guest {\n          id\n          feedback\n        }\n      }\n    }\n  ':
    types.UpdateGuestByRowIdDocument,
  '\n    query GuestEvent($id: UUID!) {\n      guestByRowId(rowId: $id) {\n        contactByContactId {\n          accountByAccountId {\n            id\n            rowId\n            username\n          }\n          createdBy\n          firstName\n          id\n          lastName\n          nickname\n          rowId\n        }\n        eventByEventId {\n          accountByCreatedBy {\n            id\n            rowId\n            username\n          }\n          addressByAddressId {\n            id\n            location {\n              latitude\n              longitude\n            }\n            name\n            rowId\n          }\n          createdBy\n          description\n          end\n          id\n          isArchived\n          isInPerson\n          isRemote\n          name\n          rowId\n          slug\n          start\n          url\n          visibility\n        }\n        feedback\n        id\n        rowId\n      }\n    }\n  ':
    types.GuestEventDocument,
  '\n    mutation AchievementUnlock($input: AchievementUnlockInput!) {\n      achievementUnlock(input: $input) {\n        clientMutationId\n        result\n      }\n    }\n  ':
    types.AchievementUnlockDocument,
  '\n  query DeviceByCreatedByAndFcmToken($createdBy: UUID!, $fcmToken: String!) {\n    deviceByCreatedByAndFcmToken(createdBy: $createdBy, fcmToken: $fcmToken) {\n      id\n    }\n  }\n':
    types.DeviceByCreatedByAndFcmTokenDocument,
  '\n  mutation CreateDevice($input: CreateDeviceInput!) {\n    createDevice(input: $input) {\n      clientMutationId\n    }\n  }\n':
    types.CreateDeviceDocument,
  '\n  mutation DeleteDeviceByCreatedByAndFcmToken(\n    $input: DeleteDeviceByCreatedByAndFcmTokenInput!\n  ) {\n    deleteDeviceByCreatedByAndFcmToken(input: $input) {\n      clientMutationId\n    }\n  }\n':
    types.DeleteDeviceByCreatedByAndFcmTokenDocument,
  '\n  query AccountByUsername($username: String!) {\n    accountByUsername(username: $username) {\n      id\n      rowId\n    }\n  }\n':
    types.AccountByUsernameDocument,
  '\n  query EventByCreatedByAndSlug($createdBy: UUID!, $slug: String!) {\n    eventByCreatedByAndSlug(createdBy: $createdBy, slug: $slug) {\n      id\n    }\n  }\n':
    types.EventByCreatedByAndSlugDocument,
  '\n  mutation JwtCreate($input: JwtCreateInput!) {\n    jwtCreate(input: $input) {\n      clientMutationId\n      result\n    }\n  }\n':
    types.JwtCreateDocument,
  '\n  mutation JwtUpdate($input: JwtUpdateInput!) {\n    jwtUpdate(input: $input) {\n      clientMutationId\n      result\n    }\n  }\n':
    types.JwtUpdateDocument,
  '\n  mutation JwtUpdateAttendanceAdd($input: JwtUpdateAttendanceAddInput!) {\n    jwtUpdateAttendanceAdd(input: $input) {\n      result\n    }\n  }\n':
    types.JwtUpdateAttendanceAddDocument,
  '\n  mutation JwtUpdateGuestAdd($input: JwtUpdateGuestAddInput!) {\n    jwtUpdateGuestAdd(input: $input) {\n      result\n    }\n  }\n':
    types.JwtUpdateGuestAddDocument,
  '\n  mutation AccountRegistration($input: AccountRegistrationInput!) {\n    accountRegistration(input: $input) {\n      clientMutationId\n    }\n  }\n':
    types.AccountRegistrationDocument,
  '\n  fragment ContactItem on Contact {\n    accountId\n    accountByAccountId {\n      id\n      rowId\n      username\n    }\n    accountByCreatedBy {\n      id\n      rowId\n      username\n    }\n    createdBy\n    emailAddress\n    emailAddressHash\n    firstName\n    id\n    lastName\n    nickname\n    note\n    phoneNumber\n    rowId\n    url\n  }\n':
    types.ContactItemFragmentDoc,
  '\n  fragment EventItem on Event {\n    accountByCreatedBy {\n      id\n      rowId\n      username\n    }\n    createdBy\n    description\n    end\n    guestCountMaximum\n    id\n    isArchived\n    isInPerson\n    isRemote\n    name\n    rowId\n    slug\n    start\n    url\n    visibility\n  }\n':
    types.EventItemFragmentDoc,
  '\n  fragment GuestItem on Guest {\n    contactByContactId {\n      ...ContactItem\n    }\n    contactId\n    feedback\n    id\n    rowId\n  }\n':
    types.GuestItemFragmentDoc,
  '\n  fragment PreferenceEventCategoryItem on PreferenceEventCategory {\n    categoryId\n    id\n  }\n':
    types.PreferenceEventCategoryItemFragmentDoc,
  '\n  query AllPreferenceEventCategories {\n    allPreferenceEventCategories {\n      nodes {\n        ...PreferenceEventCategoryItem\n      }\n    }\n  }\n':
    types.AllPreferenceEventCategoriesDocument,
  '\n  fragment PreferenceEventFormatItem on PreferenceEventFormat {\n    formatId\n    id\n  }\n':
    types.PreferenceEventFormatItemFragmentDoc,
  '\n  query AllPreferenceEventFormats {\n    allPreferenceEventFormats {\n      nodes {\n        ...PreferenceEventFormatItem\n      }\n    }\n  }\n':
    types.AllPreferenceEventFormatsDocument,
  '\n  fragment PreferenceEventLocationItem on PreferenceEventLocation {\n    id\n    location {\n      latitude\n      longitude\n    }\n    radius\n    rowId\n  }\n':
    types.PreferenceEventLocationItemFragmentDoc,
  '\n  query AllPreferenceEventLocations {\n    allPreferenceEventLocations {\n      nodes {\n        ...PreferenceEventLocationItem\n      }\n    }\n  }\n':
    types.AllPreferenceEventLocationsDocument,
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
  source: '\n    mutation AccountDelete($input: AccountDeleteInput!) {\n      accountDelete(input: $input) {\n        clientMutationId\n      }\n    }\n  ',
): (typeof documents)['\n    mutation AccountDelete($input: AccountDeleteInput!) {\n      accountDelete(input: $input) {\n        clientMutationId\n      }\n    }\n  ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    query AccountByRowId($id: UUID!) {\n      accountByRowId(rowId: $id) {\n        id\n        profilePictureByAccountId {\n          id\n          rowId\n          uploadByUploadId {\n            id\n            rowId\n            storageKey\n          }\n        }\n        rowId\n        username\n      }\n    }\n  ',
): (typeof documents)['\n    query AccountByRowId($id: UUID!) {\n      accountByRowId(rowId: $id) {\n        id\n        profilePictureByAccountId {\n          id\n          rowId\n          uploadByUploadId {\n            id\n            rowId\n            storageKey\n          }\n        }\n        rowId\n        username\n      }\n    }\n  ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query AccountSearch($after: Cursor, $first: Int, $username: String) {\n    allAccounts(\n      after: $after\n      condition: { username: $username }\n      first: $first\n      orderBy: USERNAME_ASC\n    ) {\n      nodes {\n        id\n        rowId\n        username\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n',
): (typeof documents)['\n  query AccountSearch($after: Cursor, $first: Int, $username: String) {\n    allAccounts(\n      after: $after\n      condition: { username: $username }\n      first: $first\n      orderBy: USERNAME_ASC\n    ) {\n      nodes {\n        id\n        rowId\n        username\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    mutation CreateAccountBlock($input: CreateAccountBlockInput!) {\n      createAccountBlock(input: $input) {\n        clientMutationId\n      }\n    }\n  ',
): (typeof documents)['\n    mutation CreateAccountBlock($input: CreateAccountBlockInput!) {\n      createAccountBlock(input: $input) {\n        clientMutationId\n      }\n    }\n  ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    mutation DeleteAccountBlock(\n      $input: DeleteAccountBlockByCreatedByAndBlockedAccountIdInput!\n    ) {\n      deleteAccountBlockByCreatedByAndBlockedAccountId(input: $input) {\n        clientMutationId\n      }\n    }\n  ',
): (typeof documents)['\n    mutation DeleteAccountBlock(\n      $input: DeleteAccountBlockByCreatedByAndBlockedAccountIdInput!\n    ) {\n      deleteAccountBlockByCreatedByAndBlockedAccountId(input: $input) {\n        clientMutationId\n      }\n    }\n  ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    query AttendanceGuest($id: UUID!) {\n      guestByRowId(rowId: $id) {\n        contactByContactId {\n          accountByAccountId {\n            id\n            rowId\n            username\n          }\n          firstName\n          id\n          lastName\n          language\n          nickname\n          rowId\n        }\n        attendanceByGuestId {\n          checkedOut\n          id\n          rowId\n          updatedAt\n        }\n        feedback\n        id\n        rowId\n      }\n    }\n  ',
): (typeof documents)['\n    query AttendanceGuest($id: UUID!) {\n      guestByRowId(rowId: $id) {\n        contactByContactId {\n          accountByAccountId {\n            id\n            rowId\n            username\n          }\n          firstName\n          id\n          lastName\n          language\n          nickname\n          rowId\n        }\n        attendanceByGuestId {\n          checkedOut\n          id\n          rowId\n          updatedAt\n        }\n        feedback\n        id\n        rowId\n      }\n    }\n  ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    query AllContacts($after: Cursor, $createdBy: UUID, $first: Int!) {\n      allContacts(\n        after: $after\n        condition: { createdBy: $createdBy }\n        first: $first\n        orderBy: [FIRST_NAME_ASC, LAST_NAME_ASC]\n      ) {\n        nodes {\n          ...ContactItem\n        }\n        pageInfo {\n          hasNextPage\n          endCursor\n        }\n        totalCount\n      }\n    }\n  ',
): (typeof documents)['\n    query AllContacts($after: Cursor, $createdBy: UUID, $first: Int!) {\n      allContacts(\n        after: $after\n        condition: { createdBy: $createdBy }\n        first: $first\n        orderBy: [FIRST_NAME_ASC, LAST_NAME_ASC]\n      ) {\n        nodes {\n          ...ContactItem\n        }\n        pageInfo {\n          hasNextPage\n          endCursor\n        }\n        totalCount\n      }\n    }\n  ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    mutation DeleteContactByRowId($input: DeleteContactByRowIdInput!) {\n      deleteContactByRowId(input: $input) {\n        clientMutationId\n      }\n    }\n  ',
): (typeof documents)['\n    mutation DeleteContactByRowId($input: DeleteContactByRowIdInput!) {\n      deleteContactByRowId(input: $input) {\n        clientMutationId\n      }\n    }\n  ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query AllLegalTerms($language: String) {\n    allLegalTerms(condition: { language: $language }) {\n      nodes {\n        id\n        rowId\n        term\n      }\n    }\n  }\n',
): (typeof documents)['\n  query AllLegalTerms($language: String) {\n    allLegalTerms(condition: { language: $language }) {\n      nodes {\n        id\n        rowId\n        term\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query EventList($after: Cursor, $first: Int!) {\n    allEvents(after: $after, first: $first, orderBy: START_ASC) {\n      nodes {\n        accountByCreatedBy {\n          id\n          rowId\n          username\n        }\n        addressByAddressId {\n          id\n          location {\n            latitude\n            longitude\n          }\n          rowId\n        }\n        eventFavoritesByEventId(first: 1) {\n          nodes {\n            id\n            createdBy\n            rowId\n          }\n        }\n        guestsByEventId(first: 1) {\n          nodes {\n            contactByContactId {\n              accountId\n              id\n              rowId\n            }\n            id\n            rowId\n          }\n        }\n        id\n        name\n        rowId\n        slug\n        start\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      totalCount\n    }\n  }\n',
): (typeof documents)['\n  query EventList($after: Cursor, $first: Int!) {\n    allEvents(after: $after, first: $first, orderBy: START_ASC) {\n      nodes {\n        accountByCreatedBy {\n          id\n          rowId\n          username\n        }\n        addressByAddressId {\n          id\n          location {\n            latitude\n            longitude\n          }\n          rowId\n        }\n        eventFavoritesByEventId(first: 1) {\n          nodes {\n            id\n            createdBy\n            rowId\n          }\n        }\n        guestsByEventId(first: 1) {\n          nodes {\n            contactByContactId {\n              accountId\n              id\n              rowId\n            }\n            id\n            rowId\n          }\n        }\n        id\n        name\n        rowId\n        slug\n        start\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      totalCount\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query EventSearch(\n    $after: Cursor\n    $first: Int\n    $language: Language\n    $query: String\n  ) {\n    eventSearch(\n      after: $after\n      first: $first\n      language: $language\n      query: $query\n    ) {\n      nodes {\n        accountByCreatedBy {\n          id\n          rowId\n          username\n        }\n        addressByAddressId {\n          id\n          location {\n            latitude\n            longitude\n          }\n          rowId\n        }\n        eventFavoritesByEventId(first: 1) {\n          nodes {\n            createdBy\n            id\n            rowId\n          }\n        }\n        guestsByEventId(first: 1) {\n          nodes {\n            contactByContactId {\n              accountId\n              id\n              rowId\n            }\n            id\n            rowId\n          }\n        }\n        id\n        name\n        rowId\n        slug\n        start\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      totalCount\n    }\n  }\n',
): (typeof documents)['\n  query EventSearch(\n    $after: Cursor\n    $first: Int\n    $language: Language\n    $query: String\n  ) {\n    eventSearch(\n      after: $after\n      first: $first\n      language: $language\n      query: $query\n    ) {\n      nodes {\n        accountByCreatedBy {\n          id\n          rowId\n          username\n        }\n        addressByAddressId {\n          id\n          location {\n            latitude\n            longitude\n          }\n          rowId\n        }\n        eventFavoritesByEventId(first: 1) {\n          nodes {\n            createdBy\n            id\n            rowId\n          }\n        }\n        guestsByEventId(first: 1) {\n          nodes {\n            contactByContactId {\n              accountId\n              id\n              rowId\n            }\n            id\n            rowId\n          }\n        }\n        id\n        name\n        rowId\n        slug\n        start\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      totalCount\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    mutation CreateEventFavorite($input: CreateEventFavoriteInput!) {\n      createEventFavorite(input: $input) {\n        eventFavorite {\n          createdBy\n          eventByEventId {\n            id\n          }\n          eventId\n          id\n          rowId\n        }\n      }\n    }\n  ',
): (typeof documents)['\n    mutation CreateEventFavorite($input: CreateEventFavoriteInput!) {\n      createEventFavorite(input: $input) {\n        eventFavorite {\n          createdBy\n          eventByEventId {\n            id\n          }\n          eventId\n          id\n          rowId\n        }\n      }\n    }\n  ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    mutation DeleteEventFavoriteByRowId(\n      $input: DeleteEventFavoriteByRowIdInput!\n    ) {\n      deleteEventFavoriteByRowId(input: $input) {\n        clientMutationId\n      }\n    }\n  ',
): (typeof documents)['\n    mutation DeleteEventFavoriteByRowId(\n      $input: DeleteEventFavoriteByRowIdInput!\n    ) {\n      deleteEventFavoriteByRowId(input: $input) {\n        clientMutationId\n      }\n    }\n  ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    mutation CreateReport($input: CreateReportInput!) {\n      createReport(input: $input) {\n        clientMutationId\n      }\n    }\n  ',
): (typeof documents)['\n    mutation CreateReport($input: CreateReportInput!) {\n      createReport(input: $input) {\n        clientMutationId\n      }\n    }\n  ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    mutation CreateContact($input: CreateContactInput!) {\n      createContact(input: $input) {\n        contact {\n          id\n        }\n      }\n    }\n  ',
): (typeof documents)['\n    mutation CreateContact($input: CreateContactInput!) {\n      createContact(input: $input) {\n        contact {\n          id\n        }\n      }\n    }\n  ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    mutation UpdateContactByRowId($input: UpdateContactByRowIdInput!) {\n      updateContactByRowId(input: $input) {\n        contact {\n          ...ContactItem\n        }\n      }\n    }\n  ',
): (typeof documents)['\n    mutation UpdateContactByRowId($input: UpdateContactByRowIdInput!) {\n      updateContactByRowId(input: $input) {\n        contact {\n          ...ContactItem\n        }\n      }\n    }\n  ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    mutation CreateEvent($input: CreateEventInput!) {\n      createEvent(input: $input) {\n        event {\n          id\n        }\n      }\n    }\n  ',
): (typeof documents)['\n    mutation CreateEvent($input: CreateEventInput!) {\n      createEvent(input: $input) {\n        event {\n          id\n        }\n      }\n    }\n  ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    mutation updateEventByRowId($input: UpdateEventByRowIdInput!) {\n      updateEventByRowId(input: $input) {\n        event {\n          id\n        }\n      }\n    }\n  ',
): (typeof documents)['\n    mutation updateEventByRowId($input: UpdateEventByRowIdInput!) {\n      updateEventByRowId(input: $input) {\n        event {\n          id\n        }\n      }\n    }\n  ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    mutation CreateGuests($createGuestsInput: CreateGuestsInput!) {\n      createGuests(input: $createGuestsInput) {\n        result {\n          id\n          rowId\n        }\n      }\n    }\n  ',
): (typeof documents)['\n    mutation CreateGuests($createGuestsInput: CreateGuestsInput!) {\n      createGuests(input: $createGuestsInput) {\n        result {\n          id\n          rowId\n        }\n      }\n    }\n  ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    mutation AccountPasswordChange($input: AccountPasswordChangeInput!) {\n      accountPasswordChange(input: $input) {\n        clientMutationId\n      }\n    }\n  ',
): (typeof documents)['\n    mutation AccountPasswordChange($input: AccountPasswordChangeInput!) {\n      accountPasswordChange(input: $input) {\n        clientMutationId\n      }\n    }\n  ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    mutation AccountPasswordReset($input: AccountPasswordResetInput!) {\n      accountPasswordReset(input: $input) {\n        clientMutationId\n      }\n    }\n  ',
): (typeof documents)['\n    mutation AccountPasswordReset($input: AccountPasswordResetInput!) {\n      accountPasswordReset(input: $input) {\n        clientMutationId\n      }\n    }\n  ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    mutation AccountPasswordResetRequest(\n      $input: AccountPasswordResetRequestInput!\n    ) {\n      accountPasswordResetRequest(input: $input) {\n        clientMutationId\n      }\n    }\n  ',
): (typeof documents)['\n    mutation AccountPasswordResetRequest(\n      $input: AccountPasswordResetRequestInput!\n    ) {\n      accountPasswordResetRequest(input: $input) {\n        clientMutationId\n      }\n    }\n  ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    query AllGuests($after: Cursor, $eventId: UUID!, $first: Int!) {\n      allGuests(\n        after: $after\n        condition: { eventId: $eventId }\n        first: $first\n      ) {\n        nodes {\n          ...GuestItem\n        }\n        pageInfo {\n          hasNextPage\n          endCursor\n        }\n        totalCount\n      }\n    }\n  ',
): (typeof documents)['\n    query AllGuests($after: Cursor, $eventId: UUID!, $first: Int!) {\n      allGuests(\n        after: $after\n        condition: { eventId: $eventId }\n        first: $first\n      ) {\n        nodes {\n          ...GuestItem\n        }\n        pageInfo {\n          hasNextPage\n          endCursor\n        }\n        totalCount\n      }\n    }\n  ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    mutation DeleteGuestByRowId($input: DeleteGuestByRowIdInput!) {\n      deleteGuestByRowId(input: $input) {\n        clientMutationId\n      }\n    }\n  ',
): (typeof documents)['\n    mutation DeleteGuestByRowId($input: DeleteGuestByRowIdInput!) {\n      deleteGuestByRowId(input: $input) {\n        clientMutationId\n      }\n    }\n  ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    mutation Invite($input: InviteInput!) {\n      invite(input: $input) {\n        clientMutationId\n      }\n    }\n  ',
): (typeof documents)['\n    mutation Invite($input: InviteInput!) {\n      invite(input: $input) {\n        clientMutationId\n      }\n    }\n  ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    query AllPreferenceEventSizes {\n      allPreferenceEventSizes {\n        nodes {\n          eventSize\n          id\n          rowId\n        }\n      }\n    }\n  ',
): (typeof documents)['\n    query AllPreferenceEventSizes {\n      allPreferenceEventSizes {\n        nodes {\n          eventSize\n          id\n          rowId\n        }\n      }\n    }\n  ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    mutation CreatePreferenceEventSize(\n      $input: CreatePreferenceEventSizeInput!\n    ) {\n      createPreferenceEventSize(input: $input) {\n        clientMutationId\n      }\n    }\n  ',
): (typeof documents)['\n    mutation CreatePreferenceEventSize(\n      $input: CreatePreferenceEventSizeInput!\n    ) {\n      createPreferenceEventSize(input: $input) {\n        clientMutationId\n      }\n    }\n  ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    mutation DeletePreferenceEventSizeByAccountIdAndEventSize(\n      $input: DeletePreferenceEventSizeByAccountIdAndEventSizeInput!\n    ) {\n      deletePreferenceEventSizeByAccountIdAndEventSize(input: $input) {\n        clientMutationId\n      }\n    }\n  ',
): (typeof documents)['\n    mutation DeletePreferenceEventSizeByAccountIdAndEventSize(\n      $input: DeletePreferenceEventSizeByAccountIdAndEventSizeInput!\n    ) {\n      deletePreferenceEventSizeByAccountIdAndEventSize(input: $input) {\n        clientMutationId\n      }\n    }\n  ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    query AllEventCategories {\n      allEventCategories {\n        nodes {\n          id\n          name\n          rowId\n        }\n      }\n    }\n  ',
): (typeof documents)['\n    query AllEventCategories {\n      allEventCategories {\n        nodes {\n          id\n          name\n          rowId\n        }\n      }\n    }\n  ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    mutation CreatePreferenceEventCategory(\n      $input: CreatePreferenceEventCategoryInput!\n    ) {\n      createPreferenceEventCategory(input: $input) {\n        preferenceEventCategory {\n          ...PreferenceEventCategoryItem\n        }\n      }\n    }\n  ',
): (typeof documents)['\n    mutation CreatePreferenceEventCategory(\n      $input: CreatePreferenceEventCategoryInput!\n    ) {\n      createPreferenceEventCategory(input: $input) {\n        preferenceEventCategory {\n          ...PreferenceEventCategoryItem\n        }\n      }\n    }\n  ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n      mutation DeletePreferenceEventCategoryByAccountIdAndCategoryId(\n        $input: DeletePreferenceEventCategoryByAccountIdAndCategoryIdInput!\n      ) {\n        deletePreferenceEventCategoryByAccountIdAndCategoryId(input: $input) {\n          deletedPreferenceEventCategoryId\n        }\n      }\n    ',
): (typeof documents)['\n      mutation DeletePreferenceEventCategoryByAccountIdAndCategoryId(\n        $input: DeletePreferenceEventCategoryByAccountIdAndCategoryIdInput!\n      ) {\n        deletePreferenceEventCategoryByAccountIdAndCategoryId(input: $input) {\n          deletedPreferenceEventCategoryId\n        }\n      }\n    ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    query AllEventFormats {\n      allEventFormats {\n        nodes {\n          id\n          name\n          rowId\n        }\n      }\n    }\n  ',
): (typeof documents)['\n    query AllEventFormats {\n      allEventFormats {\n        nodes {\n          id\n          name\n          rowId\n        }\n      }\n    }\n  ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    mutation CreatePreferenceEventFormat(\n      $input: CreatePreferenceEventFormatInput!\n    ) {\n      createPreferenceEventFormat(input: $input) {\n        preferenceEventFormat {\n          ...PreferenceEventFormatItem\n        }\n      }\n    }\n  ',
): (typeof documents)['\n    mutation CreatePreferenceEventFormat(\n      $input: CreatePreferenceEventFormatInput!\n    ) {\n      createPreferenceEventFormat(input: $input) {\n        preferenceEventFormat {\n          ...PreferenceEventFormatItem\n        }\n      }\n    }\n  ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    mutation DeletePreferenceEventFormatByAccountIdAndFormatId(\n      $input: DeletePreferenceEventFormatByAccountIdAndFormatIdInput!\n    ) {\n      deletePreferenceEventFormatByAccountIdAndFormatId(input: $input) {\n        deletedPreferenceEventFormatId\n      }\n    }\n  ',
): (typeof documents)['\n    mutation DeletePreferenceEventFormatByAccountIdAndFormatId(\n      $input: DeletePreferenceEventFormatByAccountIdAndFormatIdInput!\n    ) {\n      deletePreferenceEventFormatByAccountIdAndFormatId(input: $input) {\n        deletedPreferenceEventFormatId\n      }\n    }\n  ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    mutation CreatePreferenceEventLocation(\n      $input: CreatePreferenceEventLocationInput!\n    ) {\n      createPreferenceEventLocation(input: $input) {\n        preferenceEventLocation {\n          ...PreferenceEventLocationItem\n        }\n      }\n    }\n  ',
): (typeof documents)['\n    mutation CreatePreferenceEventLocation(\n      $input: CreatePreferenceEventLocationInput!\n    ) {\n      createPreferenceEventLocation(input: $input) {\n        preferenceEventLocation {\n          ...PreferenceEventLocationItem\n        }\n      }\n    }\n  ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    mutation DeletePreferenceEventLocationByRowId(\n      $input: DeletePreferenceEventLocationByRowIdInput!\n    ) {\n      deletePreferenceEventLocationByRowId(input: $input) {\n        deletedPreferenceEventLocationId\n      }\n    }\n  ',
): (typeof documents)['\n    mutation DeletePreferenceEventLocationByRowId(\n      $input: DeletePreferenceEventLocationByRowIdInput!\n    ) {\n      deletePreferenceEventLocationByRowId(input: $input) {\n        deletedPreferenceEventLocationId\n      }\n    }\n  ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    query AccountUploadQuotaBytes {\n      accountUploadQuotaBytes\n    }\n  ',
): (typeof documents)['\n    query AccountUploadQuotaBytes {\n      accountUploadQuotaBytes\n    }\n  ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    query AllUploads($after: Cursor, $first: Int!, $createdBy: UUID) {\n      allUploads(\n        after: $after\n        condition: { createdBy: $createdBy }\n        first: $first\n      ) {\n        nodes {\n          id\n          rowId\n          sizeByte\n          storageKey\n        }\n        pageInfo {\n          hasNextPage\n          endCursor\n        }\n        totalCount\n      }\n    }\n  ',
): (typeof documents)['\n    query AllUploads($after: Cursor, $first: Int!, $createdBy: UUID) {\n      allUploads(\n        after: $after\n        condition: { createdBy: $createdBy }\n        first: $first\n      ) {\n        nodes {\n          id\n          rowId\n          sizeByte\n          storageKey\n        }\n        pageInfo {\n          hasNextPage\n          endCursor\n        }\n        totalCount\n      }\n    }\n  ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    mutation DeleteUploadByRowId($input: DeleteUploadByRowIdInput!) {\n      deleteUploadByRowId(input: $input) {\n        clientMutationId\n      }\n    }\n  ',
): (typeof documents)['\n    mutation DeleteUploadByRowId($input: DeleteUploadByRowIdInput!) {\n      deleteUploadByRowId(input: $input) {\n        clientMutationId\n      }\n    }\n  ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    mutation CreateUpload($input: CreateUploadInput!) {\n      createUpload(input: $input) {\n        clientMutationId\n        upload {\n          id\n          rowId\n        }\n      }\n    }\n  ',
): (typeof documents)['\n    mutation CreateUpload($input: CreateUploadInput!) {\n      createUpload(input: $input) {\n        clientMutationId\n        upload {\n          id\n          rowId\n        }\n      }\n    }\n  ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    mutation JwtUpdateGuestAddGuest($input: JwtUpdateGuestAddInput!) {\n      jwtUpdateGuestAdd(input: $input) {\n        result\n      }\n    }\n  ',
): (typeof documents)['\n    mutation JwtUpdateGuestAddGuest($input: JwtUpdateGuestAddInput!) {\n      jwtUpdateGuestAdd(input: $input) {\n        result\n      }\n    }\n  ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    query AccountEdit($username: String!) {\n      accountByUsername(username: $username) {\n        description\n        id\n        imprintUrl\n        profilePictureByAccountId {\n          id\n          rowId\n          uploadByUploadId {\n            id\n            rowId\n            storageKey\n          }\n        }\n        rowId\n        username\n      }\n    }\n  ',
): (typeof documents)['\n    query AccountEdit($username: String!) {\n      accountByUsername(username: $username) {\n        description\n        id\n        imprintUrl\n        profilePictureByAccountId {\n          id\n          rowId\n          uploadByUploadId {\n            id\n            rowId\n            storageKey\n          }\n        }\n        rowId\n        username\n      }\n    }\n  ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    mutation CreateProfilePicture($input: CreateProfilePictureInput!) {\n      createProfilePicture(input: $input) {\n        profilePicture {\n          accountByAccountId {\n            id\n            profilePictureByAccountId {\n              id\n              rowId\n            }\n            rowId\n          }\n          id\n          rowId\n          uploadId\n        }\n      }\n    }\n  ',
): (typeof documents)['\n    mutation CreateProfilePicture($input: CreateProfilePictureInput!) {\n      createProfilePicture(input: $input) {\n        profilePicture {\n          accountByAccountId {\n            id\n            profilePictureByAccountId {\n              id\n              rowId\n            }\n            rowId\n          }\n          id\n          rowId\n          uploadId\n        }\n      }\n    }\n  ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    mutation DeleteProfilePictureByRowIdMutation(\n      $input: DeleteProfilePictureByRowIdInput!\n    ) {\n      deleteProfilePictureByRowId(input: $input) {\n        clientMutationId\n      }\n    }\n  ',
): (typeof documents)['\n    mutation DeleteProfilePictureByRowIdMutation(\n      $input: DeleteProfilePictureByRowIdInput!\n    ) {\n      deleteProfilePictureByRowId(input: $input) {\n        clientMutationId\n      }\n    }\n  ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    mutation UpdateAccountByRowId($input: UpdateAccountByRowIdInput!) {\n      updateAccountByRowId(input: $input) {\n        account {\n          description\n          id\n          imprintUrl\n          rowId\n        }\n      }\n    }\n  ',
): (typeof documents)['\n    mutation UpdateAccountByRowId($input: UpdateAccountByRowIdInput!) {\n      updateAccountByRowId(input: $input) {\n        account {\n          description\n          id\n          imprintUrl\n          rowId\n        }\n      }\n    }\n  ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    mutation AccountEmailAddressVerification(\n      $input: AccountEmailAddressVerificationInput!\n    ) {\n      accountEmailAddressVerification(input: $input) {\n        clientMutationId\n      }\n    }\n  ',
): (typeof documents)['\n    mutation AccountEmailAddressVerification(\n      $input: AccountEmailAddressVerificationInput!\n    ) {\n      accountEmailAddressVerification(input: $input) {\n        clientMutationId\n      }\n    }\n  ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    query AccountBlockAccounts {\n      accountBlockAccounts {\n        nodes {\n          id\n          storageKey\n          username\n        }\n      }\n    }\n  ',
): (typeof documents)['\n    query AccountBlockAccounts {\n      accountBlockAccounts {\n        nodes {\n          id\n          storageKey\n          username\n        }\n      }\n    }\n  ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query Account($username: String!) {\n    accountByUsername(username: $username) {\n      achievementsByAccountId(first: 5) {\n        nodes {\n          achievement\n          id\n          rowId\n        }\n      }\n      description\n      eventsByCreatedBy(first: 3, orderBy: START_DESC) {\n        nodes {\n          eventFavoritesByEventId(first: 1) {\n            nodes {\n              createdBy\n              id\n              rowId\n            }\n          }\n          guestsByEventId(first: 1) {\n            nodes {\n              contactByContactId {\n                accountId\n                id\n                rowId\n              }\n              id\n              rowId\n            }\n          }\n          id\n          name\n          rowId\n          slug\n          start\n        }\n        totalCount\n      }\n      id\n      imprintUrl\n      rowId\n    }\n  }\n',
): (typeof documents)['\n  query Account($username: String!) {\n    accountByUsername(username: $username) {\n      achievementsByAccountId(first: 5) {\n        nodes {\n          achievement\n          id\n          rowId\n        }\n      }\n      description\n      eventsByCreatedBy(first: 3, orderBy: START_DESC) {\n        nodes {\n          eventFavoritesByEventId(first: 1) {\n            nodes {\n              createdBy\n              id\n              rowId\n            }\n          }\n          guestsByEventId(first: 1) {\n            nodes {\n              contactByContactId {\n                accountId\n                id\n                rowId\n              }\n              id\n              rowId\n            }\n          }\n          id\n          name\n          rowId\n          slug\n          start\n        }\n        totalCount\n      }\n      id\n      imprintUrl\n      rowId\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    query Attendance($id: UUID!) {\n      attendanceByRowId(rowId: $id) {\n        checkedOut\n        contactByContactId {\n          accountByAccountId {\n            id\n            rowId\n            username\n          }\n          firstName\n          id\n          lastName\n          language\n          nickname\n          rowId\n        }\n        guestByGuestId {\n          id\n          rowId\n        }\n        id\n        rowId\n        updatedAt\n      }\n      eventByAttendanceId(attendanceId: $id) {\n        id\n        name\n        eventAppsByEventId {\n          nodes {\n            id\n            appByAppId {\n              iconSvg\n              id\n              name\n              rowId\n              url\n              urlAttendance\n            }\n            rowId\n          }\n        }\n        rowId\n      }\n    }\n  ',
): (typeof documents)['\n    query Attendance($id: UUID!) {\n      attendanceByRowId(rowId: $id) {\n        checkedOut\n        contactByContactId {\n          accountByAccountId {\n            id\n            rowId\n            username\n          }\n          firstName\n          id\n          lastName\n          language\n          nickname\n          rowId\n        }\n        guestByGuestId {\n          id\n          rowId\n        }\n        id\n        rowId\n        updatedAt\n      }\n      eventByAttendanceId(attendanceId: $id) {\n        id\n        name\n        eventAppsByEventId {\n          nodes {\n            id\n            appByAppId {\n              iconSvg\n              id\n              name\n              rowId\n              url\n              urlAttendance\n            }\n            rowId\n          }\n        }\n        rowId\n      }\n    }\n  ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    mutation AttendanceCheckOut(\n      $id: UUID!\n      $attendancePatch: AttendancePatch!\n    ) {\n      updateAttendanceByRowId(\n        input: { rowId: $id, attendancePatch: $attendancePatch }\n      ) {\n        attendance {\n          id\n          checkedOut\n          rowId\n        }\n      }\n    }\n  ',
): (typeof documents)['\n    mutation AttendanceCheckOut(\n      $id: UUID!\n      $attendancePatch: AttendancePatch!\n    ) {\n      updateAttendanceByRowId(\n        input: { rowId: $id, attendancePatch: $attendancePatch }\n      ) {\n        attendance {\n          id\n          checkedOut\n          rowId\n        }\n      }\n    }\n  ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query DashboardEventRecommendations($id: UUID!) {\n    eventByRowId(rowId: $id) {\n      accountByCreatedBy {\n        id\n        rowId\n        username\n      }\n      addressByAddressId {\n        id\n        location {\n          latitude\n          longitude\n        }\n        rowId\n      }\n      eventFavoritesByEventId(first: 1) {\n        nodes {\n          createdBy\n          id\n          rowId\n        }\n      }\n      guestsByEventId(first: 1) {\n        nodes {\n          contactByContactId {\n            accountId\n            id\n            rowId\n          }\n          id\n          rowId\n        }\n      }\n      id\n      name\n      rowId\n      slug\n      start\n    }\n  }\n',
): (typeof documents)['\n  query DashboardEventRecommendations($id: UUID!) {\n    eventByRowId(rowId: $id) {\n      accountByCreatedBy {\n        id\n        rowId\n        username\n      }\n      addressByAddressId {\n        id\n        location {\n          latitude\n          longitude\n        }\n        rowId\n      }\n      eventFavoritesByEventId(first: 1) {\n        nodes {\n          createdBy\n          id\n          rowId\n        }\n      }\n      guestsByEventId(first: 1) {\n        nodes {\n          contactByContactId {\n            accountId\n            id\n            rowId\n          }\n          id\n          rowId\n        }\n      }\n      id\n      name\n      rowId\n      slug\n      start\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query DashboardEventUpcoming($createdBy: UUID!) {\n    allEvents(condition: { createdBy: $createdBy }) {\n      nodes {\n        accountByCreatedBy {\n          id\n          rowId\n          username\n        }\n        end\n        id\n        name\n        rowId\n        slug\n        start\n      }\n    }\n  }\n',
): (typeof documents)['\n  query DashboardEventUpcoming($createdBy: UUID!) {\n    allEvents(condition: { createdBy: $createdBy }) {\n      nodes {\n        accountByCreatedBy {\n          id\n          rowId\n          username\n        }\n        end\n        id\n        name\n        rowId\n        slug\n        start\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    query EventEdit($slug: String!, $username: String!) {\n      accountByUsername(username: $username) {\n        eventsByCreatedBy(condition: { slug: $slug }) {\n          nodes {\n            createdBy\n            description\n            end\n            id\n            guestCountMaximum\n            isArchived\n            isInPerson\n            isRemote\n            name\n            rowId\n            slug\n            start\n            url\n            visibility\n          }\n        }\n        id\n        rowId\n        username\n      }\n    }\n  ',
): (typeof documents)['\n    query EventEdit($slug: String!, $username: String!) {\n      accountByUsername(username: $username) {\n        eventsByCreatedBy(condition: { slug: $slug }) {\n          nodes {\n            createdBy\n            description\n            end\n            id\n            guestCountMaximum\n            isArchived\n            isInPerson\n            isRemote\n            name\n            rowId\n            slug\n            start\n            url\n            visibility\n          }\n        }\n        id\n        rowId\n        username\n      }\n    }\n  ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    mutation EventDelete($input: EventDeleteInput!) {\n      eventDelete(input: $input) {\n        clientMutationId\n      }\n    }\n  ',
): (typeof documents)['\n    mutation EventDelete($input: EventDeleteInput!) {\n      eventDelete(input: $input) {\n        clientMutationId\n      }\n    }\n  ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    query EventAttendance($slug: String!, $username: String!) {\n      accountByUsername(username: $username) {\n        eventsByCreatedBy(condition: { slug: $slug }) {\n          nodes {\n            id\n            name\n            rowId\n            slug\n          }\n        }\n        id\n      }\n    }\n  ',
): (typeof documents)['\n    query EventAttendance($slug: String!, $username: String!) {\n      accountByUsername(username: $username) {\n        eventsByCreatedBy(condition: { slug: $slug }) {\n          nodes {\n            id\n            name\n            rowId\n            slug\n          }\n        }\n        id\n      }\n    }\n  ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    mutation AttendanceCreate($input: CreateAttendanceInput!) {\n      createAttendance(input: $input) {\n        attendance {\n          id\n          rowId\n        }\n      }\n    }\n  ',
): (typeof documents)['\n    mutation AttendanceCreate($input: CreateAttendanceInput!) {\n      createAttendance(input: $input) {\n        attendance {\n          id\n          rowId\n        }\n      }\n    }\n  ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    query EventGuests($slug: String!, $username: String!) {\n      accountByUsername(username: $username) {\n        eventsByCreatedBy(condition: { slug: $slug }) {\n          nodes {\n            accountByCreatedBy {\n              id\n              rowId\n              username\n            }\n            createdBy\n            guestCountMaximum\n            guestsByEventId {\n              nodes {\n                contactByContactId {\n                  accountId\n                  id\n                  rowId\n                }\n                id\n                rowId\n              }\n              pageInfo {\n                hasNextPage\n                endCursor\n              }\n              totalCount\n            }\n            id\n            name\n            rowId\n            slug\n          }\n        }\n        id\n        rowId\n      }\n    }\n  ',
): (typeof documents)['\n    query EventGuests($slug: String!, $username: String!) {\n      accountByUsername(username: $username) {\n        eventsByCreatedBy(condition: { slug: $slug }) {\n          nodes {\n            accountByCreatedBy {\n              id\n              rowId\n              username\n            }\n            createdBy\n            guestCountMaximum\n            guestsByEventId {\n              nodes {\n                contactByContactId {\n                  accountId\n                  id\n                  rowId\n                }\n                id\n                rowId\n              }\n              pageInfo {\n                hasNextPage\n                endCursor\n              }\n              totalCount\n            }\n            id\n            name\n            rowId\n            slug\n          }\n        }\n        id\n        rowId\n      }\n    }\n  ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    query Event($slug: String!, $username: String!) {\n      accountByUsername(username: $username) {\n        eventsByCreatedBy(condition: { slug: $slug }) {\n          nodes {\n            accountByCreatedBy {\n              id\n              rowId\n              username\n            }\n            addressByAddressId {\n              id\n              location {\n                latitude\n                longitude\n              }\n              name\n              rowId\n            }\n            createdBy\n            description\n            end\n            id\n            isArchived\n            isInPerson\n            isRemote\n            name\n            rowId\n            slug\n            start\n            url\n            visibility\n          }\n        }\n        id\n        rowId\n        username\n      }\n    }\n  ',
): (typeof documents)['\n    query Event($slug: String!, $username: String!) {\n      accountByUsername(username: $username) {\n        eventsByCreatedBy(condition: { slug: $slug }) {\n          nodes {\n            accountByCreatedBy {\n              id\n              rowId\n              username\n            }\n            addressByAddressId {\n              id\n              location {\n                latitude\n                longitude\n              }\n              name\n              rowId\n            }\n            createdBy\n            description\n            end\n            id\n            isArchived\n            isInPerson\n            isRemote\n            name\n            rowId\n            slug\n            start\n            url\n            visibility\n          }\n        }\n        id\n        rowId\n        username\n      }\n    }\n  ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query EventListAccount($after: Cursor, $first: Int!, $username: String!) {\n    accountByUsername(username: $username) {\n      eventsByCreatedBy(after: $after, first: $first, orderBy: START_DESC) {\n        nodes {\n          eventFavoritesByEventId(first: 1) {\n            nodes {\n              createdBy\n              id\n              rowId\n            }\n          }\n          guestsByEventId(first: 1) {\n            nodes {\n              contactByContactId {\n                accountId\n                id\n                rowId\n              }\n              id\n              rowId\n            }\n          }\n          id\n          name\n          rowId\n          slug\n          start\n        }\n        pageInfo {\n          hasNextPage\n          endCursor\n        }\n        totalCount\n      }\n      id\n      rowId\n    }\n  }\n',
): (typeof documents)['\n  query EventListAccount($after: Cursor, $first: Int!, $username: String!) {\n    accountByUsername(username: $username) {\n      eventsByCreatedBy(after: $after, first: $first, orderBy: START_DESC) {\n        nodes {\n          eventFavoritesByEventId(first: 1) {\n            nodes {\n              createdBy\n              id\n              rowId\n            }\n          }\n          guestsByEventId(first: 1) {\n            nodes {\n              contactByContactId {\n                accountId\n                id\n                rowId\n              }\n              id\n              rowId\n            }\n          }\n          id\n          name\n          rowId\n          slug\n          start\n        }\n        pageInfo {\n          hasNextPage\n          endCursor\n        }\n        totalCount\n      }\n      id\n      rowId\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    mutation UpdateGuestByRowId($input: UpdateGuestByRowIdInput!) {\n      updateGuestByRowId(input: $input) {\n        guest {\n          id\n          feedback\n        }\n      }\n    }\n  ',
): (typeof documents)['\n    mutation UpdateGuestByRowId($input: UpdateGuestByRowIdInput!) {\n      updateGuestByRowId(input: $input) {\n        guest {\n          id\n          feedback\n        }\n      }\n    }\n  ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    query GuestEvent($id: UUID!) {\n      guestByRowId(rowId: $id) {\n        contactByContactId {\n          accountByAccountId {\n            id\n            rowId\n            username\n          }\n          createdBy\n          firstName\n          id\n          lastName\n          nickname\n          rowId\n        }\n        eventByEventId {\n          accountByCreatedBy {\n            id\n            rowId\n            username\n          }\n          addressByAddressId {\n            id\n            location {\n              latitude\n              longitude\n            }\n            name\n            rowId\n          }\n          createdBy\n          description\n          end\n          id\n          isArchived\n          isInPerson\n          isRemote\n          name\n          rowId\n          slug\n          start\n          url\n          visibility\n        }\n        feedback\n        id\n        rowId\n      }\n    }\n  ',
): (typeof documents)['\n    query GuestEvent($id: UUID!) {\n      guestByRowId(rowId: $id) {\n        contactByContactId {\n          accountByAccountId {\n            id\n            rowId\n            username\n          }\n          createdBy\n          firstName\n          id\n          lastName\n          nickname\n          rowId\n        }\n        eventByEventId {\n          accountByCreatedBy {\n            id\n            rowId\n            username\n          }\n          addressByAddressId {\n            id\n            location {\n              latitude\n              longitude\n            }\n            name\n            rowId\n          }\n          createdBy\n          description\n          end\n          id\n          isArchived\n          isInPerson\n          isRemote\n          name\n          rowId\n          slug\n          start\n          url\n          visibility\n        }\n        feedback\n        id\n        rowId\n      }\n    }\n  ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    mutation AchievementUnlock($input: AchievementUnlockInput!) {\n      achievementUnlock(input: $input) {\n        clientMutationId\n        result\n      }\n    }\n  ',
): (typeof documents)['\n    mutation AchievementUnlock($input: AchievementUnlockInput!) {\n      achievementUnlock(input: $input) {\n        clientMutationId\n        result\n      }\n    }\n  ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query DeviceByCreatedByAndFcmToken($createdBy: UUID!, $fcmToken: String!) {\n    deviceByCreatedByAndFcmToken(createdBy: $createdBy, fcmToken: $fcmToken) {\n      id\n    }\n  }\n',
): (typeof documents)['\n  query DeviceByCreatedByAndFcmToken($createdBy: UUID!, $fcmToken: String!) {\n    deviceByCreatedByAndFcmToken(createdBy: $createdBy, fcmToken: $fcmToken) {\n      id\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation CreateDevice($input: CreateDeviceInput!) {\n    createDevice(input: $input) {\n      clientMutationId\n    }\n  }\n',
): (typeof documents)['\n  mutation CreateDevice($input: CreateDeviceInput!) {\n    createDevice(input: $input) {\n      clientMutationId\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation DeleteDeviceByCreatedByAndFcmToken(\n    $input: DeleteDeviceByCreatedByAndFcmTokenInput!\n  ) {\n    deleteDeviceByCreatedByAndFcmToken(input: $input) {\n      clientMutationId\n    }\n  }\n',
): (typeof documents)['\n  mutation DeleteDeviceByCreatedByAndFcmToken(\n    $input: DeleteDeviceByCreatedByAndFcmTokenInput!\n  ) {\n    deleteDeviceByCreatedByAndFcmToken(input: $input) {\n      clientMutationId\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query AccountByUsername($username: String!) {\n    accountByUsername(username: $username) {\n      id\n      rowId\n    }\n  }\n',
): (typeof documents)['\n  query AccountByUsername($username: String!) {\n    accountByUsername(username: $username) {\n      id\n      rowId\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query EventByCreatedByAndSlug($createdBy: UUID!, $slug: String!) {\n    eventByCreatedByAndSlug(createdBy: $createdBy, slug: $slug) {\n      id\n    }\n  }\n',
): (typeof documents)['\n  query EventByCreatedByAndSlug($createdBy: UUID!, $slug: String!) {\n    eventByCreatedByAndSlug(createdBy: $createdBy, slug: $slug) {\n      id\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation JwtCreate($input: JwtCreateInput!) {\n    jwtCreate(input: $input) {\n      clientMutationId\n      result\n    }\n  }\n',
): (typeof documents)['\n  mutation JwtCreate($input: JwtCreateInput!) {\n    jwtCreate(input: $input) {\n      clientMutationId\n      result\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation JwtUpdate($input: JwtUpdateInput!) {\n    jwtUpdate(input: $input) {\n      clientMutationId\n      result\n    }\n  }\n',
): (typeof documents)['\n  mutation JwtUpdate($input: JwtUpdateInput!) {\n    jwtUpdate(input: $input) {\n      clientMutationId\n      result\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation JwtUpdateAttendanceAdd($input: JwtUpdateAttendanceAddInput!) {\n    jwtUpdateAttendanceAdd(input: $input) {\n      result\n    }\n  }\n',
): (typeof documents)['\n  mutation JwtUpdateAttendanceAdd($input: JwtUpdateAttendanceAddInput!) {\n    jwtUpdateAttendanceAdd(input: $input) {\n      result\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation JwtUpdateGuestAdd($input: JwtUpdateGuestAddInput!) {\n    jwtUpdateGuestAdd(input: $input) {\n      result\n    }\n  }\n',
): (typeof documents)['\n  mutation JwtUpdateGuestAdd($input: JwtUpdateGuestAddInput!) {\n    jwtUpdateGuestAdd(input: $input) {\n      result\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation AccountRegistration($input: AccountRegistrationInput!) {\n    accountRegistration(input: $input) {\n      clientMutationId\n    }\n  }\n',
): (typeof documents)['\n  mutation AccountRegistration($input: AccountRegistrationInput!) {\n    accountRegistration(input: $input) {\n      clientMutationId\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment ContactItem on Contact {\n    accountId\n    accountByAccountId {\n      id\n      rowId\n      username\n    }\n    accountByCreatedBy {\n      id\n      rowId\n      username\n    }\n    createdBy\n    emailAddress\n    emailAddressHash\n    firstName\n    id\n    lastName\n    nickname\n    note\n    phoneNumber\n    rowId\n    url\n  }\n',
): (typeof documents)['\n  fragment ContactItem on Contact {\n    accountId\n    accountByAccountId {\n      id\n      rowId\n      username\n    }\n    accountByCreatedBy {\n      id\n      rowId\n      username\n    }\n    createdBy\n    emailAddress\n    emailAddressHash\n    firstName\n    id\n    lastName\n    nickname\n    note\n    phoneNumber\n    rowId\n    url\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment EventItem on Event {\n    accountByCreatedBy {\n      id\n      rowId\n      username\n    }\n    createdBy\n    description\n    end\n    guestCountMaximum\n    id\n    isArchived\n    isInPerson\n    isRemote\n    name\n    rowId\n    slug\n    start\n    url\n    visibility\n  }\n',
): (typeof documents)['\n  fragment EventItem on Event {\n    accountByCreatedBy {\n      id\n      rowId\n      username\n    }\n    createdBy\n    description\n    end\n    guestCountMaximum\n    id\n    isArchived\n    isInPerson\n    isRemote\n    name\n    rowId\n    slug\n    start\n    url\n    visibility\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment GuestItem on Guest {\n    contactByContactId {\n      ...ContactItem\n    }\n    contactId\n    feedback\n    id\n    rowId\n  }\n',
): (typeof documents)['\n  fragment GuestItem on Guest {\n    contactByContactId {\n      ...ContactItem\n    }\n    contactId\n    feedback\n    id\n    rowId\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment PreferenceEventCategoryItem on PreferenceEventCategory {\n    categoryId\n    id\n  }\n',
): (typeof documents)['\n  fragment PreferenceEventCategoryItem on PreferenceEventCategory {\n    categoryId\n    id\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query AllPreferenceEventCategories {\n    allPreferenceEventCategories {\n      nodes {\n        ...PreferenceEventCategoryItem\n      }\n    }\n  }\n',
): (typeof documents)['\n  query AllPreferenceEventCategories {\n    allPreferenceEventCategories {\n      nodes {\n        ...PreferenceEventCategoryItem\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment PreferenceEventFormatItem on PreferenceEventFormat {\n    formatId\n    id\n  }\n',
): (typeof documents)['\n  fragment PreferenceEventFormatItem on PreferenceEventFormat {\n    formatId\n    id\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query AllPreferenceEventFormats {\n    allPreferenceEventFormats {\n      nodes {\n        ...PreferenceEventFormatItem\n      }\n    }\n  }\n',
): (typeof documents)['\n  query AllPreferenceEventFormats {\n    allPreferenceEventFormats {\n      nodes {\n        ...PreferenceEventFormatItem\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment PreferenceEventLocationItem on PreferenceEventLocation {\n    id\n    location {\n      latitude\n      longitude\n    }\n    radius\n    rowId\n  }\n',
): (typeof documents)['\n  fragment PreferenceEventLocationItem on PreferenceEventLocation {\n    id\n    location {\n      latitude\n      longitude\n    }\n    radius\n    rowId\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query AllPreferenceEventLocations {\n    allPreferenceEventLocations {\n      nodes {\n        ...PreferenceEventLocationItem\n      }\n    }\n  }\n',
): (typeof documents)['\n  query AllPreferenceEventLocations {\n    allPreferenceEventLocations {\n      nodes {\n        ...PreferenceEventLocationItem\n      }\n    }\n  }\n']

export function graphql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
