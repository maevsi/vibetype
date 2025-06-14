<template>
  <div class="flex flex-col items-center">
    <div class="mb-8 flex justify-center space-x-4">
      <UnderConstruction>
        <div class="flex flex-col items-center">
          <button
            :aria-label="t('iconAltInstagram')"
            class="flex flex-col items-center"
            @click="shareToInstagram"
          >
            <IVibetypeColoredInstagram class="size-12" />
            <span class="mt-2 text-sm">{{ t('instagram') }}</span>
          </button>
        </div>
      </UnderConstruction>
      <div class="flex flex-col items-center">
        <button
          :aria-label="t('iconAltFacebook')"
          class="flex flex-col items-center"
          @click="shareToFacebook"
        >
          <IVibetypeColoredFacebook class="size-12" />
          <span class="mt-2 text-sm">{{ t('facebook') }}</span>
        </button>
      </div>
      <div class="flex flex-col items-center">
        <button
          :aria-label="t('iconAltTelegram')"
          class="flex flex-col items-center"
          @click="shareToTelegram"
        >
          <IVibetypeColoredTelegram class="size-12" />
          <span class="mt-2 text-sm">{{ t('telegram') }}</span>
        </button>
      </div>
      <div class="flex flex-col items-center">
        <button
          :aria-label="t('iconAltWhatsapp')"
          class="flex flex-col items-center"
          @click="shareToWhatsapp"
        >
          <IVibetypeColoredWhatsapp class="size-12" />
          <span class="mt-2 text-sm">{{ t('whatsapp') }}</span>
        </button>
      </div>
    </div>
    <div class="flex justify-center space-x-8">
      <div class="flex flex-col items-center">
        <button
          :aria-label="t('iconAltCopyLink')"
          class="flex flex-col items-center"
          @click="copyToClipboard"
        >
          <IVibetypeColoredCopyLink class="size-12" />
          <span class="mt-2 text-sm">{{ copyButtonText }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n()
const props = defineProps({
  shareUrl: {
    type: String,
    default: () => window.location.href,
  },
  shareTitle: {
    type: String,
    default: 'Check out this event!',
  },
})

const copyButtonText = ref(t('copyLink'))

const openShareWindow = (url, width = 600, height = 400) => {
  const left = (window.innerWidth - width) / 2
  const top = (window.innerHeight - height) / 2
  const features = `width=${width},height=${height},left=${left},top=${top}`
  window.open(url, 'share', features)
}

const shareToFacebook = () => {
  const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(props.shareUrl)}`
  openShareWindow(url)
}

const shareToWhatsapp = () => {
  const text = `${props.shareTitle} ${props.shareUrl}`
  const url = `https://wa.me/?text=${encodeURIComponent(text)}`
  window.open(url, '_blank')
}

const shareToTelegram = () => {
  const url = `https://t.me/share/url?url=${encodeURIComponent(props.shareUrl)}&text=${encodeURIComponent(props.shareTitle)}`
  openShareWindow(url)
}

// const shareToInstagram = () => {
//   if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
//     window.location.href = `instagram://share?text=${encodeURIComponent(props.shareTitle + ' ' + props.shareUrl)}`
//   } else {
//     alert(t('shareFailed'))
//   }
// }

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(props.shareUrl)
    copyButtonText.value = t('copied')
    setTimeout(() => {
      copyButtonText.value = t('copyLink')
    }, 2000)
  } catch (err) {
    console.error('Failed to copy: ', err)
  }
}
</script>

<i18n lang="yaml">
de:
  copyLink: Link kopieren
  copied: Kopiert!
  facebook: Facebook
  iconAltCopyLink: Link kopieren
  iconAltFacebook: Auf Facebook teilen
  iconAltInstagram: Auf Instagram teilen
  iconAltTelegram: Auf Telegram teilen
  iconAltWhatsapp: Auf WhatsApp teilen
  instagram: Instagram
  telegram: Telegram
  whatsapp: WhatsApp
en:
  copyLink: Copy link
  copied: Copied!
  facebook: Facebook
  iconAltCopyLink: Copy link
  iconAltFacebook: Share on Facebook
  iconAltInstagram: Share on Instagram
  iconAltTelegram: Share on Telegram
  iconAltWhatsapp: Share on WhatsApp
  instagram: Instagram
  telegram: Telegram
  whatsapp: WhatsApp
</i18n>
