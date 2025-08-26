<template>
  <Loader
    :api="api"
    :error-pg-ids="{
      postgres53100: t('postgres53100'),
    }"
  >
    <Card>
      <ul class="flex flex-wrap items-center justify-center">
        <template v-if="uploads?.length">
          <li
            v-for="upload in uploads"
            :id="upload.id"
            :key="upload.id"
            :class="[
              ...(pending.deletions.includes(upload.id)
                ? ['animate-pulse']
                : []),
              ...(isSelectable && upload === selectedItem
                ? ['border-red-600']
                : ['border-transparent']),
            ]"
            class="relative box-border border-4"
            :disabled="pending.deletions.includes(upload.id)"
            @click="toggleSelect(upload)"
          >
            <LoaderImage
              :alt="upload.storageKey ? t('uploadAlt') : t('uploadAltFailed')"
              aspect="aspect-square"
              class="size-32"
              height="128"
              :src="getUploadImageSrc(upload.storageKey || '')"
              :title="t('uploadSize', { size: bytesToString(upload.sizeByte) })"
              width="128"
            />
            <div
              v-if="!isReadonly"
              class="absolute top-0 right-0 flex rounded-bl-lg bg-red-600/75"
            >
              <AppButton
                :aria-label="t('iconTrashLabel')"
                class="flex h-full justify-center"
                @click="deleteUpload(upload.id)"
              >
                <IHeroiconsTrash
                  class="text-text-bright m-1"
                  :title="t('iconTrash')"
                />
              </AppButton>
            </div>
          </li>
        </template>
        <li class="relative box-border border-4 border-transparent">
          <AppButton
            :aria-label="
              t('iconAdd', {
                sizeUsed: bytesToString(sizeByteTotal),
                sizeTotal: bytesToString(accountUploadQuotaBytes),
              })
            "
            class="flex size-32 justify-center bg-gray-300 dark:bg-gray-200"
            :title="
              t('iconAdd', {
                sizeUsed: bytesToString(sizeByteTotal),
                sizeTotal: bytesToString(accountUploadQuotaBytes),
              })
            "
            @click="selectProfilePicture"
          >
            <IHeroiconsPlusSolid
              class="text-gray-500"
              width="3em"
              height="3em"
            />
          </AppButton>
          <input
            ref="inputProfilePicture"
            accept="image/*"
            hidden
            name="input-profile-picture"
            type="file"
            @change="loadProfilePicture"
          />
        </li>
      </ul>
      <div
        v-if="api.data.allUploads?.pageInfo.hasNextPage"
        class="flex justify-center"
      >
        <ButtonColored
          :aria-label="t('globalShowMore')"
          @click="after = api.data.allUploads?.pageInfo.endCursor"
        >
          {{ t('globalShowMore') }}
        </ButtonColored>
      </div>
    </Card>
    <Modal
      id="ModalUploadGallery"
      :submit-name="t('upload')"
      :submit-task-provider="getUploadBlobPromise"
    >
      <Cropper
        ref="cropper"
        :init-stretcher="initStretcher"
        :src="fileSelectedUrl"
        :stencil-props="{
          aspectRatio: 1,
        }"
      />
      <template #header>{{ t('uploadNew') }}</template>
      <template #submit-icon><IHeroiconsArrowUpTray /></template>
    </Modal>
  </Loader>
</template>

<script setup lang="ts">
import { Uppy } from '@uppy/core'
import Tus from '@uppy/tus'
import { consola } from 'consola'
import prettyBytes from 'pretty-bytes'
import type { UnwrapRef } from 'vue'
import { Cropper } from 'vue-advanced-cropper'
import type { CropperResult, Size } from 'vue-advanced-cropper'

import { useCreateUploadMutation } from '~~/gql/documents/mutations/upload/uploadCreate'
import { useAccountUploadQuotaBytesQuery } from '~~/gql/documents/queries/account/accountUploadQuotaBytes'
import { useAllUploadsQuery } from '~~/gql/documents/queries/upload/uploadsAll'
import { getUploadItem } from '~~/gql/documents/fragments/uploadItem'
import { useDeleteUploadByIdMutation } from '~~/gql/documents/mutations/upload/uploadDeleteById'

const { isReadonly, isSelectable } = defineProps<{
  isReadonly?: boolean
  isSelectable?: boolean
}>()

const emit = defineEmits<{
  selection: [uploadId?: string | null]
}>()

const { t } = useI18n()
const route = useRoute()
const store = useStore()
const runtimeConfig = useRuntimeConfig()
const TUSD_FILES_URL = useTusdFilesUrl()
const localePath = useLocalePath()
const fireAlert = useFireAlert()
const templateCropper = useTemplateRef('cropper')
const templateInputProfilePicture = useTemplateRef('inputProfilePicture')

// data
const after = ref<string>()
const fileSelectedUrl = ref<string>()
const fileSelectedMimeType = ref<string>()
const pending = reactive({
  deletions: ref<string[]>([]),
})
const selectedItem = ref<{
  id?: string | null
}>()

// api data
const accountUploadQuotaBytesQuery = useAccountUploadQuotaBytesQuery({})
const allUploadsQuery = useAllUploadsQuery(
  computed(() => ({
    after: after.value,
    first: ITEMS_PER_PAGE,
    createdBy: store.signedInAccountId,
  })),
)
const deleteUploadByIdMutation = useDeleteUploadByIdMutation()
const uploadCreateMutation = useCreateUploadMutation()
const api = await useApiData([
  accountUploadQuotaBytesQuery,
  allUploadsQuery,
  deleteUploadByIdMutation,
  uploadCreateMutation,
])
const uploads = computed(
  () =>
    api.value.data.allUploads?.nodes
      .map((x) => getUploadItem(x))
      .filter(isNeitherNullNorUndefined) || [],
)
const accountUploadQuotaBytes = computed(
  () => api.value.data.accountUploadQuotaBytes,
)

// computations
const sizeByteTotal = computed(
  () => uploads.value?.reduce((p, c) => p + +c.sizeByte, 0) || 0,
)

// methods
const bytesToString = (bytes?: number | string | null) =>
  bytes ? prettyBytes(+bytes) : undefined
const initStretcher = ({
  cropper,
  stretcher,
  imageSize,
}: {
  cropper: HTMLElement
  stretcher: HTMLElement
  imageSize: Size
}) => {
  stretcher.style.width = `${imageSize.width}px`
  stretcher.style.height = `${imageSize.height}px`

  stretcher.style.height = `${cropper.parentElement?.clientHeight}px`
  stretcher.style.width = `${cropper.parentElement?.clientWidth}px`
}
const selectProfilePicture = async () => {
  const pathUpload = localePath('upload')

  if (route.path === pathUpload.toString()) {
    templateInputProfilePicture.value?.click()
  } else {
    await navigateTo(pathUpload)
  }
}
const deleteUpload = async (uploadId: string) => {
  pending.deletions.push(uploadId)
  const result = await deleteUploadByIdMutation.executeMutation({
    id: uploadId,
  })
  pending.deletions.splice(pending.deletions.indexOf(uploadId), 1)

  allUploadsQuery.executeQuery()

  if (result.error || !result.data) {
    await fireAlert({ level: 'error', text: t('uploadDeleteFailed') })
    return
  }
}
const getMimeType = (file: ArrayBuffer, fallback?: string) => {
  const byteArray = new Uint8Array(file).subarray(0, 4)
  const header = byteArray.reduce((p, c) => p + c.toString(16), '')

  switch (header) {
    case '89504e47':
      return 'image/png'
    case '47494638':
      return 'image/gif'
    case 'ffd8ffe0':
    case 'ffd8ffe1':
    case 'ffd8ffe2':
    case 'ffd8ffe3':
    case 'ffd8ffe8':
      return 'image/jpeg'
    default:
      return fallback
  }
}
const getUploadImageSrc = (uploadStorageKey: string) =>
  TUSD_FILES_URL + uploadStorageKey
const loadProfilePicture = (event: Event) => {
  const target = event.target as HTMLInputElement
  const files = Array.from(target.files ?? [])

  if (files.length !== 1) return

  const file = files[0]

  if (!file) return

  if (fileSelectedUrl.value) {
    URL.revokeObjectURL(fileSelectedUrl.value)
  }

  try {
    const fileReader = new FileReader()

    fileReader.onload = (e) => {
      fileSelectedUrl.value = e.target?.result as string
      fileSelectedMimeType.value = getMimeType(
        e.target?.result as ArrayBuffer,
        file.type,
      )
      store.modals.push({ id: 'ModalUploadGallery' })
    }
    fileReader.readAsDataURL(file)
  } catch (error) {
    consola.error(error)
  }
}
const toggleSelect = (upload: UnwrapRef<typeof selectedItem>) => {
  if (selectedItem.value === upload) {
    selectedItem.value = undefined
    emit('selection', undefined)
  } else {
    selectedItem.value = upload
    emit('selection', selectedItem.value?.id)
  }
}
const getUploadBlobPromise = () =>
  new Promise<void>((resolve, reject) => {
    ;(templateCropper.value?.getResult() as CropperResult).canvas?.toBlob(
      async (blob) => {
        if (!blob || !templateInputProfilePicture.value?.files?.[0]) return

        const result = await uploadCreateMutation.executeMutation({
          input: {
            createdBy: store.signedInAccountId,
            sizeByte: blob.size,
          },
        })

        if (result.error) return reject(result.error)
        if (!result.data) return

        const uppy = new Uppy({
          id: 'profile-picture',
          debug: !runtimeConfig.public.vio.isInProduction,
          restrictions: {
            maxFileSize: 1048576,
            maxNumberOfFiles: 1,
            minNumberOfFiles: 1,
            allowedFileTypes: ['image/*'],
          },
          meta: {
            id: result.data.createUpload?.upload?.id,
          },
          onBeforeUpload: (files) =>
            Object.fromEntries(
              Object.entries(files).map(([key, value]) => [
                key,
                {
                  ...value,
                  name: `/profile-pictures/${value.name}`,
                },
              ]),
            ),
        })

        uppy.on('restriction-failed', (_file, error: Error) => {
          return reject(error.message)
        })

        uppy.use(Tus, {
          endpoint: TUSD_FILES_URL,
          limit: 1,
          removeFingerprintOnSuccess: true,
        })

        uppy.addFile({
          source: 'cropper',
          name: templateInputProfilePicture.value.files[0].name,
          type: blob.type,
          data: blob,
        })

        const uploadResult = await uppy.upload()

        allUploadsQuery.executeQuery()

        if (!uploadResult?.failed || uploadResult.failed.length > 0) {
          return reject(t('uploadError'))
        } else {
          return resolve()
        }
      },
      'image/jpeg',
    )
  })
</script>

<style>
@import url('~~/node_modules/vue-advanced-cropper/dist/style.css');
</style>

<i18n lang="yaml">
de:
  iconAdd: 'Ein neues Bild hochladen. Genutzter Speicherplatz: {sizeUsed}/{sizeTotal}.'
  iconTrash: löschen
  iconTrashLabel: Dieses hochgeladene Bild löschen.
  postgres53100: Der Speicherplatz deines Accounts ist aufgebraucht!
  upload: Hochladen
  uploadAlt: Ein hochgeladenes Bild.
  uploadAltFailed: Ein Bild, das nicht vollständig hochgeladen wurde.
  uploadDeleteFailed: Das Löschen des Elements ist fehlgeschlagen!
  uploadError: 'Fehler: Dateien wurden nicht erfolgreich hochgeladen!'
  uploadNew: Lade ein neues Bild hoch
  uploadSize: 'Größe: {size}'
en:
  iconAdd: 'Upload a new image. Used storage space: {sizeUsed}/{sizeTotal}.'
  iconTrash: trash
  iconTrashLabel: Delete this image upload.
  postgres53100: Your account storage space has been used up!
  upload: Upload
  uploadAlt: An uploaded image.
  uploadAltFailed: "An image which hasn't been fully uploaded."
  uploadDeleteFailed: Deleting upload failed!
  uploadError: 'Error: Upload failed!'
  uploadNew: Upload a new image
  uploadSize: 'Size: {size}'
</i18n>
