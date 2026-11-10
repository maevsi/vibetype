<template>
  <div v-if="editor" class="flex flex-col gap-2">
    <div class="flex flex-wrap gap-x-4 gap-y-2 xl:gap-6">
      <div class="flex gap-1">
        <ButtonIcon
          :aria-label="t('undo')"
          class="rounded-small p-1"
          :title="t('undo')"
          @click="editor.chain().focus().undo().run()"
        >
          <AppIconArrowRotateLeft />
        </ButtonIcon>
        <ButtonIcon
          :aria-label="t('redo')"
          class="rounded-small p-1"
          :title="t('redo')"
          @click="editor.chain().focus().redo().run()"
        >
          <AppIconArrowRotateRight />
        </ButtonIcon>
      </div>
      <div class="flex gap-1">
        <!-- <ButtonIcon
          :aria-label="t('paragraph')"
          :title="t('paragraph')"
          @click="editor.chain().focus().setParagraph().run()"
        >
          <AppIconParagraph />
        </ButtonIcon /> -->
        <ButtonIcon
          :aria-label="t('heading1')"
          :class="[
            'rounded-small p-1',
            ...(isActive.heading1 ? ['bg-surface'] : []),
          ]"
          :title="t('heading1')"
          @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
        >
          <span class="align-end flex">
            <AppIconHeading />
            <span>{{ t('number1') }}</span>
          </span>
        </ButtonIcon>
        <ButtonIcon
          :aria-label="t('heading2')"
          :class="[
            'rounded-small p-1',
            ...(isActive.heading2 ? ['bg-surface'] : []),
          ]"
          :title="t('heading2')"
          @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
        >
          <span class="align-end flex">
            <AppIconHeading />
            <span>{{ t('number2') }}</span>
          </span>
        </ButtonIcon>
        <ButtonIcon
          :aria-label="t('heading3')"
          :class="[
            'rounded-small p-1',
            ...(isActive.heading3 ? ['bg-surface'] : []),
          ]"
          :title="t('heading3')"
          @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
        >
          <span class="align-end flex">
            <AppIconHeading />
            <span>{{ t('number3') }}</span>
          </span>
        </ButtonIcon>
      </div>
      <div class="flex gap-1">
        <ButtonIcon
          :aria-label="t('bold')"
          :class="[
            'rounded-small p-1',
            ...(isActive.bold ? ['bg-surface'] : []),
          ]"
          :title="t('bold')"
          @click="editor.chain().focus().toggleBold().run()"
        >
          <AppIconBold />
        </ButtonIcon>
        <ButtonIcon
          :aria-label="t('italic')"
          :class="[
            'rounded-small p-1',
            ...(isActive.italic ? ['bg-surface'] : []),
          ]"
          :title="t('italic')"
          @click="editor.chain().focus().toggleItalic().run()"
        >
          <AppIconItalic />
        </ButtonIcon>
        <ButtonIcon
          :aria-label="t('strike')"
          :class="[
            'rounded-small p-1',
            ...(isActive.strike ? ['bg-surface'] : []),
          ]"
          :title="t('strike')"
          @click="editor.chain().focus().toggleStrike().run()"
        >
          <AppIconStrikethrough />
        </ButtonIcon>
      </div>
      <div class="flex gap-1">
        <ButtonIcon
          :aria-label="t('formatAlignLeft')"
          :class="[
            'rounded-small p-1',
            ...(isActive.textAlignLeft ? ['bg-surface'] : []),
          ]"
          :title="t('formatAlignLeft')"
          @click="editor.chain().focus().setTextAlign('left').run()"
        >
          <AppIconAlignLeft />
        </ButtonIcon>
        <ButtonIcon
          :aria-label="t('formatAlignCenter')"
          :class="[
            'rounded-small p-1',
            ...(isActive.textAlignCenter ? ['bg-surface'] : []),
          ]"
          :title="t('formatAlignCenter')"
          @click="editor.chain().focus().setTextAlign('center').run()"
        >
          <AppIconAlignCenter />
        </ButtonIcon>
        <ButtonIcon
          :aria-label="t('formatAlignRight')"
          :class="[
            'rounded-small p-1',
            ...(isActive.textAlignRight ? ['bg-surface'] : []),
          ]"
          :title="t('formatAlignRight')"
          @click="editor.chain().focus().setTextAlign('right').run()"
        >
          <AppIconAlignRight />
        </ButtonIcon>
        <ButtonIcon
          :aria-label="t('formatAlignJustify')"
          :class="[
            'rounded-small p-1',
            ...(isActive.textAlignJustify ? ['bg-surface'] : []),
          ]"
          :title="t('formatAlignJustify')"
          @click="editor.chain().focus().setTextAlign('justify').run()"
        >
          <AppIconAlignJustify />
        </ButtonIcon>
      </div>
      <div class="flex gap-1">
        <ButtonIcon
          :aria-label="t('listUl')"
          :class="[
            'rounded-small p-1',
            ...(isActive.bulletList ? ['bg-surface'] : []),
          ]"
          :title="t('listUl')"
          @click="editor.chain().focus().toggleBulletList().run()"
        >
          <AppIconListUl />
        </ButtonIcon>
        <ButtonIcon
          :aria-label="t('listOl')"
          :class="[
            'rounded-small p-1',
            ...(isActive.orderedList ? ['bg-surface'] : []),
          ]"
          :title="t('listOl')"
          @click="editor.chain().focus().toggleOrderedList().run()"
        >
          <AppIconListOl />
        </ButtonIcon>
      </div>
      <div class="flex gap-1">
        <ButtonIcon
          :aria-label="t('link')"
          :class="[
            'rounded-small p-1',
            ...(isActive.link ? ['bg-surface'] : []),
          ]"
          :title="t('link')"
          @click="setLink"
        >
          <IFa6SolidLink />
        </ButtonIcon>
        <ButtonIcon
          :aria-label="t('linkRemove')"
          class="rounded-small p-1"
          :disabled="!isActive.link"
          :title="t('linkRemove')"
          @click="editor.chain().focus().unsetLink().run()"
        >
          <AppIconLinkSlash />
        </ButtonIcon>
        <ButtonIcon
          :aria-label="t('blockquote')"
          :class="[
            'rounded-small p-1',
            ...(isActive.blockquote ? ['bg-surface'] : []),
          ]"
          :title="t('blockquote')"
          @click="editor.chain().focus().toggleBlockquote().run()"
        >
          <AppIconQuoteLeft />
        </ButtonIcon>
        <ButtonIcon
          :aria-label="t('code')"
          :class="[
            'rounded-small p-1',
            ...(isActive.code ? ['bg-surface'] : []),
          ]"
          :title="t('code')"
          @click="editor.chain().focus().toggleCode().run()"
        >
          <AppIconCode />
        </ButtonIcon>
      </div>
      <div class="flex gap-1">
        <ButtonIcon
          :aria-label="t('horizontalRule')"
          :class="[
            'rounded-small p-1',
            ...(isActive.horizontalRule ? ['bg-surface'] : []),
          ]"
          :title="t('horizontalRule')"
          @click="editor.chain().focus().setHorizontalRule().run()"
        >
          <AppIconMinus />
        </ButtonIcon>
      </div>
      <!--
      <AppButton
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
