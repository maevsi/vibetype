<template>
  <div>
    <LayoutPageTitle :title="title" />
    <LayoutProse>
      <h2>{{ t('provider') }}</h2>
      <p>
        {{ t('providerAddressName') }}<br />
        {{ t('providerAddressStreet') }}<br />
        {{ t('providerAddressCity') }}
      </p>
      <p>
        {{ t('providerRepresentation') }}<br />
        {{ t('providerRepresentationManagement') }}
      </p>

      <h2>{{ t('contact') }}</h2>
      <p>{{ t('contactEmail') }}</p>
      <p>
        <i18n-t keypath="contactForm">
          <template #link>
            <AppLink is-external :to="t('contactFormLink')">
              {{ t('contactFormLink') }}
            </AppLink>
          </template>
        </i18n-t>
      </p>

      <h2>{{ t('register') }}</h2>
      <p>{{ t('registerCommercial') }}</p>
      <p>{{ t('registerCourt') }}</p>

      <h2>{{ t('liabilityContentTitle') }}</h2>
      <p>{{ t('liabilityContentDescription1') }}</p>
      <p>{{ t('liabilityContentDescription2') }}</p>

      <h2>{{ t('dataProtection') }}</h2>
      <p>
        <i18n-t keypath="dataProtectionDescription">
          <template #link>
            <AppLink is-external :to="t('dataProtectionDescriptionLink')">
              {{ t('dataProtectionDescriptionLink') }}
            </AppLink>
          </template>
        </i18n-t>
      </p>

      <h2>{{ t('copyrightTitle') }}</h2>
      <p>{{ t('copyrightDescription1') }}</p>

      <h2>{{ t('socialMediaTitle') }}</h2>
      <p>{{ t('socialMediaDescription') }}</p>
      <p>
        <i18n-t keypath="socialMediaInstagram">
          <template #link>
            <AppLink is-external :to="t('socialMediaInstagramLink')">
              {{ t('socialMediaInstagramLink') }}
            </AppLink>
          </template>
        </i18n-t>
      </p>
      <p>
        <i18n-t keypath="socialMediaFacebook">
          <template #link>
            <AppLink is-external :to="t('socialMediaFacebookLink')">
              {{ t('socialMediaFacebookLink') }}
            </AppLink>
          </template>
        </i18n-t>
      </p>
      <p>
        <i18n-t keypath="socialMediaTikTok">
          <template #link>
            <AppLink is-external :to="t('socialMediaTikTokLink')">
              {{ t('socialMediaTikTokLink') }}
            </AppLink>
          </template>
        </i18n-t>
      </p>
      <p>
        <i18n-t keypath="socialMediaLinkedIn">
          <template #link>
            <AppLink is-external :to="t('socialMediaLinkedInLink')">
              {{ t('socialMediaLinkedInLink') }}
            </AppLink>
          </template>
        </i18n-t>
      </p>
    </LayoutProse>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

// data
const title = t('title')

// initialization
useHeadDefault({ title })
</script>

<i18n lang="yaml">
de:
  contact: Kontakt
  contactEmail: "E-Mail: contact+legal-notice{'@'}maev.si"
  contactForm: 'Formular: {link}'
  contactFormLink: https://forms.monday.com/forms/74204ae8168ecb1dd44c15b502854a5a?r=euc1
  copyrightDescription1: Die auf unserer Internetseite vorhandenen Texte, Bilder, Fotos, Videos oder Grafiken unterliegen in der Regel dem Schutz des Urheberrechts. Jede unberechtigte Verwendung (insbesondere die Vervielfältigung, Bearbeitung oder Verbreitung) dieser urheberrechtsgeschützten Inhalte ist daher untersagt. Wenn Sie beabsichtigen, diese Inhalte oder Teile davon zu verwenden, kontaktieren Sie uns bitte im Voraus unter den oben stehenden Angaben. Soweit wir nicht selbst Inhaber der benötigten urheberrechtlichen Nutzungsrechte sein sollten, bemühen wir uns, einen Kontakt zum Berechtigten zu vermitteln.
  copyrightTitle: Urheberrechtshinweis
  dataProtection: Datenschutzhinweis
  dataProtectionDescription: 'Unsere Datenschutzerklärung finden Sie unter: {link}'
  dataProtectionDescriptionLink: https://vibetype.app/de/privacy-policy
  liabilityContentDescription1: Wir sind für die Inhalte unserer Internetseiten nach den Maßgaben der allgemeinen Gesetzen verantwortlich. Alle Inhalte werden mit der gebotenen Sorgfalt und nach bestem Wissen erstellt. Soweit wir auf unseren Internetseiten mittels Hyperlink auf Internetseiten Dritter verweisen, können wir keine Gewähr für die fortwährende Aktualität, Richtigkeit und Vollständigkeit der verlinkten Inhalte übernehmen, da diese Inhalte außerhalb unseres Verantwortungsbereichs liegen und wir auf die zukünftige Gestaltung keinen Einfluss haben. Sollten aus Ihrer Sicht Inhalte gegen geltendes Recht verstoßen oder unangemessen sein, teilen Sie uns dies bitte mit.
  liabilityContentDescription2: Die rechtlichen Hinweise auf dieser Seite sowie alle Fragen und Streitigkeiten im Zusammenhang mit der Gestaltung dieser Internetseite unterliegen dem Recht der Bundesrepublik Deutschland.
  liabilityContentTitle: Haftungsausschluss
  provider: Anbieter
  providerAddressCity: 34121 Kassel
  providerAddressName: maevsi UG (haftungsbeschränkt)
  providerAddressStreet: Virchowstraße 4
  providerRepresentation: 'Vertreten durch:'
  providerRepresentationManagement: 'Geschäftsführung: Jonas Thelemann, Tony Krieger, Alexander Gensicke'
  register: Registereintrag
  registerCommercial: 'Handelsregister: HRB 20135'
  registerCourt: 'Registergericht: Amtsgericht Kassel'
  socialMediaDescription: 'Dieses Impressum gilt auch für folgende Social-Media-Profile:'
  socialMediaFacebook: 'Facebook: {link}'
  socialMediaFacebookLink: https://www.facebook.com/profile.php?id=61573494951867
  socialMediaInstagram: 'Instagram: {link}'
  socialMediaInstagramLink: https://www.instagram.com/vibetype.app/
  socialMediaLinkedIn: 'LinkedIn: {link}'
  socialMediaLinkedInLink: https://www.linkedin.com/company/92700414/
  socialMediaTikTok: 'TikTok: {link}'
  socialMediaTikTokLink: https://www.tiktok.com/{'@'}vibetype
  socialMediaTitle: Social-Media-Profile
  title: Impressum
en:
  contact: Contact
  contactEmail: "Email: contact+legal-notice{'@'}maev.si"
  contactForm: 'Form: {link}'
  contactFormLink: https://forms.monday.com/forms/74204ae8168ecb1dd44c15b502854a5a?r=euc1
  copyrightDescription1: The texts, images, photos, videos or graphics on our website are generally protected by copyright. Any unauthorized use (in particular the reproduction, editing or distribution) of this copyright-protected content is therefore prohibited. If you intend to use this content or parts thereof, please contact us in advance using the details above. If we are not ourselves the owner of the required copyright usage rights, we will endeavor to arrange contact with the entitled party.
  copyrightTitle: Copyright notice
  dataProtection: Data protection notice
  dataProtectionDescription: 'You can find our privacy policy at: {link}'
  dataProtectionDescriptionLink: https://vibetype.app/privacy-policy
  liabilityContentDescription1: We are responsible for the content of our website in accordance with the provisions of general law. All content is created with due care and to the best of our knowledge. Insofar as we refer to third-party websites on our Internet pages by means of hyperlinks, we cannot assume any liability for the continued topicality, correctness and completeness of the linked content, as this content is outside our area of responsibility and we have no influence on its future design. Should you consider any content to be in breach of applicable law or inappropriate, please let us know.
  liabilityContentDescription2: The legal information on this page as well as all questions and disputes in connection with the design of this website are subject to the law of the Federal Republic of Germany.
  liabilityContentTitle: Disclaimer
  provider: Provider
  providerAddressCity: 34121 Kassel
  providerAddressName: maevsi UG (with limited liability)
  providerAddressStreet: Virchowstraße 4
  providerRepresentation: 'Represented by:'
  providerRepresentationManagement: 'Management: Jonas Thelemann, Tony Krieger, Alexander Gensicke'
  register: Register entry
  registerCommercial: 'Commercial register: HRB 20135'
  registerCourt: 'Register court: Amtsgericht Kassel'
  socialMediaDescription: 'This legal notice also applies to the following social media profiles'
  socialMediaFacebook: 'Facebook: {link}'
  socialMediaFacebookLink: https://www.facebook.com/profile.php?id=61573494951867
  socialMediaInstagram: 'Instagram: {link}'
  socialMediaInstagramLink: https://www.instagram.com/vibetype.app/
  socialMediaLinkedIn: 'LinkedIn: {link}'
  socialMediaLinkedInLink: https://www.linkedin.com/company/92700414/
  socialMediaTikTok: 'TikTok: {link}'
  socialMediaTikTokLink: https://www.tiktok.com/{'@'}vibetype
  socialMediaTitle: Social media profiles
  title: Legal notice
</i18n>
