<template>
  <section :aria-labelledby="templateIdTitle" class="flex flex-1 flex-col">
    <LayoutTopBar>
      <span :id="templateIdTitle">
        {{ title }}
      </span>
    </LayoutTopBar>
    <AppStep v-slot="attributes" :is-active="step === 'error'">
      <LayoutPage v-bind="attributes">
        <LayoutPageResult type="error">
          <slot name="error" />
          <template #description>
            {{ errorDescription }}
          </template>
        </LayoutPageResult>
        <template #bottom>
          <ButtonColored
            :aria-label="errorButton"
            class="w-full max-w-md"
            variant="primary-critical"
            @click="error = undefined"
          >
            {{ errorButton }}
          </ButtonColored>
        </template>
      </LayoutPage>
    </AppStep>
    <AppStep v-slot="attributes" :is-active="step === 'default'">
      <LayoutPage v-bind="attributes">
        <slot />
        <template #bottom>
          <ButtonColored
            :aria-label="formButton"
            class="w-full max-w-md"
            @click="emit('submit')"
          >
            {{ formButton }}
          </ButtonColored>
        </template>
      </LayoutPage>
    </AppStep>
    <AppStep v-slot="attributes" :is-active="step === 'success'">
      <LayoutPage v-bind="attributes">
        <LayoutPageResult type="success">
          <template #description>
            {{ successDescription }}
          </template>
          <template #title>
            {{ successTitle }}
          </template>
        </LayoutPageResult>
        <template #bottom>
          <ButtonColored
            :aria-label="successButton"
            class="w-full max-w-md"
            @click="store.navigateBack"
          >
            {{ successButton }}
          </ButtonColored>
        </template>
      </LayoutPage>
    </AppStep>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  errorButton: string
  errorDescription: string
  formButton: string
  successButton: string
  successDescription: string
  successTitle: string
  title: string
}>()

const emit = defineEmits<{
  submit: []
}>()

const error = defineModel<Error>('error')
const step = defineModel<string>('step', { required: true })

const store = useStore()
const templateIdTitle = useId()
</script>
