<template>
  <div v-if="editor" class="flex flex-col gap-2">
    <div class="flex flex-wrap gap-x-4 gap-y-2 xl:gap-6">
      <div class="flex gap-1">
        <AppButton
          :aria-label="t('undo')"
          class="rounded-small p-1"
          size="none"
          :title="t('undo')"
          variant="ghost"
          @click="editor.chain().focus().undo().run()"
        >
          <AppIconArrowRotateLeft />
        </AppButton>
        <AppButton
          :aria-label="t('redo')"
          class="rounded-small p-1"
          size="none"
          :title="t('redo')"
          variant="ghost"
          @click="editor.chain().focus().redo().run()"
        >
          <AppIconArrowRotateRight />
        </AppButton>
      </div>
      <div class="flex gap-1">
        <!-- <AppButton
          size="none" variant="ghost"
          :aria-label="t('paragraph')"
          :title="t('paragraph')"
          @click="editor.chain().focus().setParagraph().run()"
        >
          <AppIconParagraph />
        </ButtonIcon /> -->
        <AppButton
          :aria-label="t('heading1')"
          :class="[
            'rounded-small p-1',
            ...(isActive.heading1 ? ['bg-surface'] : []),
          ]"
          size="none"
          :title="t('heading1')"
          variant="ghost"
          @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
        >
          <span class="align-end flex">
            <AppIconHeading />
            <span>{{ t('number1') }}</span>
          </span>
        </AppButton>
        <AppButton
          :aria-label="t('heading2')"
          :class="[
            'rounded-small p-1',
            ...(isActive.heading2 ? ['bg-surface'] : []),
          ]"
          size="none"
          :title="t('heading2')"
          variant="ghost"
          @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
        >
          <span class="align-end flex">
            <AppIconHeading />
            <span>{{ t('number2') }}</span>
          </span>
        </AppButton>
        <AppButton
          :aria-label="t('heading3')"
          :class="[
            'rounded-small p-1',
            ...(isActive.heading3 ? ['bg-surface'] : []),
          ]"
          size="none"
          :title="t('heading3')"
          variant="ghost"
          @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
        >
          <span class="align-end flex">
            <AppIconHeading />
            <span>{{ t('number3') }}</span>
          </span>
        </AppButton>
      </div>
      <div class="flex gap-1">
        <AppButton
          :aria-label="t('bold')"
          :class="[
            'rounded-small p-1',
            ...(isActive.bold ? ['bg-surface'] : []),
          ]"
          size="none"
          :title="t('bold')"
          variant="ghost"
          @click="editor.chain().focus().toggleBold().run()"
        >
          <AppIconBold />
        </AppButton>
        <AppButton
          :aria-label="t('italic')"
          :class="[
            'rounded-small p-1',
            ...(isActive.italic ? ['bg-surface'] : []),
          ]"
          size="none"
          :title="t('italic')"
          variant="ghost"
          @click="editor.chain().focus().toggleItalic().run()"
        >
          <AppIconItalic />
        </AppButton>
        <AppButton
          :aria-label="t('strike')"
          :class="[
            'rounded-small p-1',
            ...(isActive.strike ? ['bg-surface'] : []),
          ]"
          size="none"
          :title="t('strike')"
          variant="ghost"
          @click="editor.chain().focus().toggleStrike().run()"
        >
          <AppIconStrikethrough />
        </AppButton>
      </div>
      <div class="flex gap-1">
        <AppButton
          :aria-label="t('formatAlignLeft')"
          :class="[
            'rounded-small p-1',
            ...(isActive.textAlignLeft ? ['bg-surface'] : []),
          ]"
          size="none"
          :title="t('formatAlignLeft')"
          variant="ghost"
          @click="editor.chain().focus().setTextAlign('left').run()"
        >
          <AppIconAlignLeft />
        </AppButton>
        <AppButton
          :aria-label="t('formatAlignCenter')"
          :class="[
            'rounded-small p-1',
            ...(isActive.textAlignCenter ? ['bg-surface'] : []),
          ]"
          size="none"
          :title="t('formatAlignCenter')"
          variant="ghost"
          @click="editor.chain().focus().setTextAlign('center').run()"
        >
          <AppIconAlignCenter />
        </AppButton>
        <AppButton
          :aria-label="t('formatAlignRight')"
          :class="[
            'rounded-small p-1',
            ...(isActive.textAlignRight ? ['bg-surface'] : []),
          ]"
          size="none"
          :title="t('formatAlignRight')"
          variant="ghost"
          @click="editor.chain().focus().setTextAlign('right').run()"
        >
          <AppIconAlignRight />
        </AppButton>
        <AppButton
          :aria-label="t('formatAlignJustify')"
          :class="[
            'rounded-small p-1',
            ...(isActive.textAlignJustify ? ['bg-surface'] : []),
          ]"
          size="none"
          :title="t('formatAlignJustify')"
          variant="ghost"
          @click="editor.chain().focus().setTextAlign('justify').run()"
        >
          <AppIconAlignJustify />
        </AppButton>
      </div>
      <div class="flex gap-1">
        <AppButton
          :aria-label="t('listUl')"
          :class="[
            'rounded-small p-1',
            ...(isActive.bulletList ? ['bg-surface'] : []),
          ]"
          size="none"
          :title="t('listUl')"
          variant="ghost"
          @click="editor.chain().focus().toggleBulletList().run()"
        >
          <AppIconListUl />
        </AppButton>
        <AppButton
          :aria-label="t('listOl')"
          :class="[
            'rounded-small p-1',
            ...(isActive.orderedList ? ['bg-surface'] : []),
          ]"
          size="none"
          :title="t('listOl')"
          variant="ghost"
          @click="editor.chain().focus().toggleOrderedList().run()"
        >
          <AppIconListOl />
        </AppButton>
      </div>
      <div class="flex gap-1">
        <AppButton
          :aria-label="t('link')"
          :class="[
            'rounded-small p-1',
            ...(isActive.link ? ['bg-surface'] : []),
          ]"
          size="none"
          :title="t('link')"
          variant="ghost"
          @click="setLink"
        >
          <IFa6SolidLink />
        </AppButton>
        <AppButton
          :aria-label="t('linkRemove')"
          class="rounded-small p-1"
          :disabled="!isActive.link"
          size="none"
          :title="t('linkRemove')"
          variant="ghost"
          @click="editor.chain().focus().unsetLink().run()"
        >
          <AppIconLinkSlash />
        </AppButton>
        <AppButton
          :aria-label="t('blockquote')"
          :class="[
            'rounded-small p-1',
            ...(isActive.blockquote ? ['bg-surface'] : []),
          ]"
          size="none"
          :title="t('blockquote')"
          variant="ghost"
          @click="editor.chain().focus().toggleBlockquote().run()"
        >
          <AppIconQuoteLeft />
        </AppButton>
        <AppButton
          :aria-label="t('code')"
          :class="[
            'rounded-small p-1',
            ...(isActive.code ? ['bg-surface'] : []),
          ]"
          size="none"
          :title="t('code')"
          variant="ghost"
          @click="editor.chain().focus().toggleCode().run()"
        >
          <AppIconCode />
        </AppButton>
      </div>
      <div class="flex gap-1">
        <AppButton
          :aria-label="t('horizontalRule')"
          :class="[
            'rounded-small p-1',
            ...(isActive.horizontalRule ? ['bg-surface'] : []),
          ]"
          size="none"
          :title="t('horizontalRule')"
          variant="ghost"
          @click="editor.chain().focus().setHorizontalRule().run()"
        >
          <AppIconMinus />
        </AppButton>
      </div>
      <!--
      <AppButton
        size="none" variant="ghost"
        :class="{ 'bg-surface': isActive.codeBlock }"
        @click="editor.chain().focus().toggleCodeBlock().run()"
      >
        code block
      </AppButton> -->
    </div>
    <EditorContent :editor />
  </div>
</template>

<script setup lang="ts">
import { useEditor, EditorContent } from '@tiptap/vue-3'
import { TextAlign } from '@tiptap/extension-text-align'
import { StarterKit } from '@tiptap/starter-kit'
import { debounce } from 'lodash-es'

const { ariaLabel, value } = defineProps<{
  ariaLabel: string
  value: string | undefined
}>()

const emit = defineEmits<{
  input: [input: string]
}>()

const host = useHost()
const { t } = useI18n()
const editor = useEditor({
  content: value,
  editorProps: {
    attributes: {
      'aria-label': ariaLabel,
      class:
        'min-h-28 flex-1 rounded-medium bg-surface-raised px-6 py-4 text-body placeholder-fg-3 outline-none',
    },
  },
  extensions: [
    StarterKit,
    TextAlign.configure({ types: ['heading', 'paragraph'] }),
  ],
  onUpdate: () => {
    updateIsActive()
    updateDebounced()
  },
  onSelectionUpdate: () => {
    updateIsActive()
  },
})

watch(
  () => value,
  (newValue) => {
    if (!editor.value) return
    if ((newValue ?? '') === editor.value.getHTML()) return

    editor.value.commands.setContent(newValue ?? '', { emitUpdate: false })
  },
)

// data
const isActive = reactive({
  heading1: false,
  heading2: false,
  heading3: false,
  bold: false,
  italic: false,
  strike: false,
  textAlignLeft: false,
  textAlignRight: false,
  textAlignCenter: false,
  textAlignJustify: false,
  bulletList: false,
  orderedList: false,
  link: false,
  blockquote: false,
  code: false,
  horizontalRule: false,
})

// methods
const getLocation = (href: string) => {
  const link = document.createElement('a')
  link.href = href
  return link
}
const updateIsActive = debounce(
  () => {
    isActive.heading1 = editor.value?.isActive('heading', { level: 1 }) || false
    isActive.heading2 = editor.value?.isActive('heading', { level: 2 }) || false
    isActive.heading3 = editor.value?.isActive('heading', { level: 3 }) || false
    isActive.bold = editor.value?.isActive('bold') || false
    isActive.italic = editor.value?.isActive('italic') || false
    isActive.strike = editor.value?.isActive('strike') || false
    isActive.textAlignLeft =
      editor.value?.isActive({ textAlign: 'left' }) || false
    isActive.textAlignCenter =
      editor.value?.isActive({ textAlign: 'center' }) || false
    isActive.textAlignRight =
      editor.value?.isActive({ textAlign: 'right' }) || false
    isActive.textAlignJustify =
      editor.value?.isActive({ textAlign: 'justify' }) || false
    isActive.bulletList = editor.value?.isActive('bulletList') || false
    isActive.orderedList = editor.value?.isActive('orderedList') || false
    isActive.link = editor.value?.isActive('link') || false
    isActive.blockquote = editor.value?.isActive('blockquote') || false
    isActive.code = editor.value?.isActive('code') || false
    isActive.horizontalRule = editor.value?.isActive('horizontalRule') || false
  },
  100,
  {
    leading: true,
    maxWait: 100,
  },
)
const setLink = () => {
  if (!editor.value) return

  const previousUrl = editor.value.getAttributes('link').href
  const url = window.prompt('URL', previousUrl)

  // cancelled
  if (url === null) {
    return
  }

  // empty
  if (url === '') {
    editor.value.chain().focus().extendMarkRange('link').unsetLink().run()

    return
  }

  const location = getLocation(url)
  const urlHost = location.port
    ? `${location.hostname}:${location.port}`
    : location.hostname

  // update link
  editor.value
    .chain()
    .focus()
    .extendMarkRange('link')
    .setLink({ href: url, target: urlHost !== host ? '_blank' : null })
    .run()
}
const updateDebounced = debounce(
  () => {
    if (!editor.value) return
    emit('input', editor.value.isEmpty ? '' : editor.value.getHTML())
  },
  1000,
  { leading: true },
)

onBeforeUnmount(() => {
  updateIsActive.cancel()
  updateDebounced.cancel()
})
</script>

<i18n lang="yaml">
de:
  blockquote: Zitat
  bold: Fett
  code: Code
  formatAlignCenter: Mittig ausrichten
  formatAlignLeft: Links ausrichten
  formatAlignRight: Rechts ausrichten
  formatAlignJustify: Blocksatz
  heading1: Überschrift 1 (groß)
  heading2: Überschrift 2 (mittelgroß)
  heading3: Überschrift 3 (klein)
  horizontalRule: Horizontaler Trennstrich
  italic: Kursiv
  link: Link
  linkRemove: Link entfernen
  listOl: Aufzählung
  listUl: Liste
  number1: '1'
  number2: '2'
  number3: '3'
  # paragraph: Absatz
  redo: Wiederholen
  strike: Durchgestrichen
  undo: Rückgängig machen
en:
  blockquote: Blockquote
  bold: Bold
  code: Code
  formatAlignCenter: Align center
  formatAlignLeft: Align left
  formatAlignRight: Align right
  formatAlignJustify: Justified
  heading1: Heading 1 (large)
  heading2: Heading 2 (medium)
  heading3: Heading 3 (small)
  horizontalRule: Horizontal rule
  italic: Italic
  link: Link
  linkRemove: Remove link
  listOl: Enumeration
  listUl: List
  number1: '1'
  number2: '2'
  number3: '3'
  # paragraph: Paragraph
  redo: Redo
  strike: Strikethrough
  undo: Undo
</i18n>
