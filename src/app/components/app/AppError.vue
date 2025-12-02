<template>
  <div class="flex flex-1 flex-col">
    <LayoutTopBar>
      <span>
        {{ statusName }}
      </span>
    </LayoutTopBar>
    <LayoutPage>
      <div class="flex flex-1 flex-col gap-8">
        <LayoutPageResult type="error">
          <template v-if="!error.data?.vibetype" #default>
            <span v-if="error.statusCode === 403">
              {{ t('error403Hint') }}
            </span>
            <span v-else-if="error.statusCode === 404">
              {{ t('error404Hint') }}
            </span>
            <span v-else-if="error.statusCode === 429">
              {{ t('error429Hint') }}
            </span>
            <span v-else-if="error.statusCode === 500">
              {{ t('error500Hint') }}
            </span>
            <span v-else>
              {{ t('errorHint') }}
            </span>
          </template>
          <template #description>
            <span v-if="error.data?.vibetype">
              {{ error.data.vibetype }}
            </span>
            <span v-else-if="error.statusCode === 400">
              {{ t('error400Description') }}
            </span>
            <span v-else-if="error.statusCode === 403">
              {{ t('error403Description') }}
            </span>
            <span v-else-if="error.statusCode === 404">
              {{ t('error404Description') }}
            </span>
            <span v-else-if="error.statusCode === 418">
              {{ t('error418Description') }}
            </span>
            <span v-else-if="error.statusCode === 429">
              {{ t('error429Description') }}
            </span>
            <span v-else-if="error.statusCode === 500">
              {{ t('error500Description') }}
            </span>
            <span v-else>
              {{ t('errorDescription') }}
            </span>
          </template>
          <!-- <template #title>{{ statusName }}</template> -->
        </LayoutPageResult>
        <Collapsible v-model:open="detailsIsOpen" class="flex flex-col gap-2">
          <CollapsibleTrigger as-child>
            <ButtonColored
              v-if="!detailsIsOpen"
              :aria-label="t('detailsMore')"
              class="w-full"
              size="small"
              variant="tertiary"
            >
              <TypographyLabel>
                {{ t('detailsMore') }}
              </TypographyLabel>
              <AppIconChevronDown class="size-4" />
            </ButtonColored>
            <ButtonColored
              v-else
              :aria-label="t('detailsLess')"
              class="w-full"
              size="small"
              variant="tertiary"
            >
              <TypographyLabel>
                {{ t('detailsLess') }}
              </TypographyLabel>
              <AppIconChevronUp class="size-4" />
            </ButtonColored>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <Card>
              <section
                :aria-labelledby="templateIdDetails"
                class="flex flex-col gap-4 p-2"
              >
                <h2 :id="templateIdDetails">{{ t('details') }}</h2>
                <div>
                  <span class="font-bold">
                    {{ error.statusMessage }}
                  </span>
                  <!-- eslint-disable vue/no-v-html -->
                  <div v-if="error.stack" v-html="error.stack" />
                  <!-- eslint-enable vue/no-v-html -->
                </div>
              </section>
            </Card>
          </CollapsibleContent>
        </Collapsible>
        <ButtonColored
          :aria-label="t('support')"
          size="small"
          :to="
            localePath({
              name: 'support-contact',
            })
          "
          variant="tertiary"
        >
          {{ t('support') }}
          <template #prefix>
            <AppIconHelp class="size-4" />
          </template>
        </ButtonColored>
      </div>
      <template #bottom>
        <ButtonList>
          <ButtonSignIn v-if="[403, 404].includes(error.statusCode)" />
          <ButtonHome />
        </ButtonList>
      </template>
    </LayoutPage>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

const { error } = defineProps<{
  error: Partial<NuxtError> &
    Required<Pick<NuxtError, 'statusCode'>> & {
      data?: { vibetype?: string }
    }
}>()

// status code
const { ssrContext } = useNuxtApp()
if (ssrContext && error.statusCode) {
  ssrContext.event.node.res.statusCode = error.statusCode
}
const { statusName } = await useHttpStatusCode({ statusCode: error.statusCode })

// template
const { t } = useI18n()
const localePath = useLocalePath()
const detailsIsOpen = ref<boolean>()
const templateIdDetails = useId()
</script>

<i18n lang="yaml">
de:
  details: Technische Details
  detailsLess: Ausblenden
  detailsMore: Technische Details anzeigen
  errorDescription: Sieht so aus als wäre etwas nicht so wie es sein sollte.
  errorHint: Bitte versuche es noch einmal und melde @.upper:{'globalSiteName'} diesen Fehler, wenn er weiterhin auftritt.
  error400Description: "@.upper:{'globalSiteName'} hat andere Daten empfangen als erwartet."
  error403Description: Du bist aktuell nicht berechtigt, auf diese Seite zuzugreifen.
  error403Hint: Bist du richtig angemeldet? Wenn dich ein Link zu dieser Seite geführt hat, kann er abgelaufen sein. Du kannst in diesem Fall einen neuen Link von der Person erfragen, die dir den Link gesendet hat.
  error404Description: "@.upper:{'globalSiteName'} kann nicht finden, wonach du suchst. Vielleicht wurde der Inhalt gelöscht oder dir fehlen Zugriffsberechtigungen."
  error404Hint: Du kannst überprüfen, ob du richtig angemeldet bist, und versuchen, über die Startseite an dein Ziel zu gelangen.
  error418Description: Ich werd' keinen Kaffee machen.
  error429Description: Es scheint so als wärst du schneller unterwegs, als @.upper:{'globalSiteName'} erlaubt! 👮
  error429Hint: Lehn dich einen Moment zurück und versuch es erneut – oder melde @.upper:{'globalSiteName'} den Fehler, wenn du glaubst, dass er unbegründet ist.
  error500Description: Sieht so aus als wäre etwas bei @.upper:{'globalSiteName'} nicht so wie es sein sollte.
  error500Hint: Bitte melde diesen Fehler.
  support: Support kontaktieren
en:
  details: Technical details
  detailsLess: Hide
  detailsMore: View technical details
  errorDescription: Looks like something went not the way it should.
  errorHint: Please try again and report this issue to @.upper:{'globalSiteName'} if it keeps happening.
  error400Description: "@.upper:{'globalSiteName'} received unexpected data."
  error403Description: You're not authorized to access this page.
  error403Hint: Are you signed in correctly? If a link led you to this page, it may have expired. In that case, you can request a new link from the person who provided it to you.
  error404Description: "@.upper:{'globalSiteName'} couldn't find what you're looking for. The content may have been deleted or you might lack the necessary permissions."
  error404Hint: Make sure you're logged in and try reaching your destination via the homepage.
  error418Description: I won't make coffee.
  error429Description: It appears you're going faster than @.upper:{'globalSiteName'} allows! 👮
  error429Hint: Take a short break and try again – or report this issue to @.upper:{'globalSiteName'} if you think it shouldn't have occurred.
  error500Description: Looks like something went not the way it should at @.upper:{'globalSiteName'}.
  error500Hint: Please report this issue.
  support: Contact support
</i18n>
