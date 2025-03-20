<template>
  <Dialog :open="modelValue" @update:open="emit('update:modelValue', $event)">
    <DialogContent
      class="max-h-[90vh] max-w-4xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-0 text-[hsl(var(--card-foreground))] shadow-lg"
    >
      <DialogHeader
        class="border-b border-[hsl(var(--border))] bg-[hsl(var(--card))] px-6 py-4"
      >
        <div class="flex items-center">
          <DialogClose as-child>
            <IVibetypeColoredBack
              class="h-6 w-6"
              :alt="t('iconAltBack')"
              @click="handleBack"
            />
          </DialogClose>
          <DialogTitle
            class="mx-auto text-lg font-semibold text-[hsl(var(--card-foreground))]"
          >
            {{ t('title') }}
          </DialogTitle>
        </div>
      </DialogHeader>
      <div class="max-h-[60vh] overflow-auto p-6">
        <div class="vio-prose-scheme">
          <p>{{ legalTerms }}</p>
        </div>
      </div>
      <div class="border-t border-[hsl(var(--border))] p-6">
        <div
          class="mb-4 flex items-center space-x-2 rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--muted))] p-4"
        >
          <input
            id="accept-gtc"
            v-model="accepted"
            type="checkbox"
            class="h-4 w-4 cursor-pointer"
          />
          <label
            for="accept-gtc"
            class="cursor-pointer text-[hsl(var(--foreground))]"
          >
            {{ t('acceptTerms') }}
          </label>
        </div>
        <ButtonColored
          :aria-label="t('confirmButtonText')"
          variant="primary"
          :disabled="!accepted"
          class="w-full rounded-lg"
          @click="handleAccept"
        >
          {{ t('confirmButtonText') }}
        </ButtonColored>
      </div>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/scn/dialog'
import { useAllLegalTermsQuery } from '~~/gql/documents/queries/legalTerms/allLegalTerms'

const { t } = useI18n()
const { data: legalTermsQuery } = useAllLegalTermsQuery({})

const legalTerms = computed(() => {
  return (
    legalTermsQuery.value?.allLegalTerms?.nodes
      ?.map((node) => node.term)
      .filter(isNeitherNullNorUndefined)
      .join(' ') || ''
  )
})

const model = defineModel<boolean>()
const emit = defineEmits(['accepted', 'update:modelValue', 'handle-back'])
const accepted = ref(false)

// methods
const handleAccept = () => {
  const termId = legalTermsQuery.value?.allLegalTerms?.nodes[0]?.id
  if (accepted.value && termId) {
    emit('accepted', termId)
    model.value = false
  }
}
const handleBack = () => emit('handle-back')
</script>

<i18n lang="yaml">
de:
  acceptTerms: 'Ich akzeptiere die AGB'
  confirmButtonText: Weiter
  iconAltBack: Zurück-Icon
  title: Allgemeine Geschäftsbedingungen
en:
  acceptTerms: 'I accept the GTC'
  confirmButtonText: Next
  iconAltBack: Back Icon
  title: General Terms and Conditions
</i18n>
