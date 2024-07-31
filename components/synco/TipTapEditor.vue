<template>
  <div class="body">
    <div v-if="editor" class="header">
      <button
        @click="editor.chain().focus().toggleBold().run()"
        :disabled="!editor.can().chain().focus().toggleBold().run()"
        :class="{ 'is-active': editor.isActive('bold') }"
      >
        <Icon name="ph:text-b" />
      </button>
      <button
        @click="editor.chain().focus().toggleItalic().run()"
        :disabled="!editor.can().chain().focus().toggleItalic().run()"
        :class="{ 'is-active': editor.isActive('italic') }"
      >
        <Icon name="ph:text-italic" />
      </button>
      <button
        @click="editor.chain().focus().toggleUnderline().run()"
        :disabled="!editor.can().chain().focus().toggleUnderline().run()"
        :class="{ 'is-active': editor.isActive('underline') }"
      >
        <Icon name="ph:text-underline" />
      </button>
      <button
        @click="editor.chain().focus().toggleStrike().run()"
        :disabled="!editor.can().chain().focus().toggleStrike().run()"
        :class="{ 'is-active': editor.isActive('strike') }"
      >
        <Icon name="ph:text-strikethrough" />
      </button>
      <!-- <button
        @click="editor.chain().focus().toggleCode().run()"
        :disabled="!editor.can().chain().focus().toggleCode().run()"
        :class="{ 'is-active': editor.isActive('code') }"
      >
        code
      </button> -->
      <!-- <button @click="editor.chain().focus().unsetAllMarks().run()">
        clear marks
      </button> -->
      <!-- <button @click="editor.chain().focus().clearNodes().run()">
        clear nodes
      </button> -->
      <button
        @click="editor.chain().focus().setParagraph().run()"
        :class="{ 'is-active': editor.isActive('paragraph') }"
      >
        <Icon name="ph:paragraph" />
      </button>
      <button
        @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
      >
        <Icon name="ph:text-h-one" />
      </button>
      <button
        @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
      >
        <Icon name="ph:text-h-two" />
      </button>
      <button
        @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }"
      >
        <Icon name="ph:text-h-three" />
      </button>
      <!-- <button
        @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }"
      >
        h4
      </button> -->
      <!-- <button
        @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }"
      >
        h5
      </button> -->
      <!-- <button
        @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }"
      >
        h6
      </button> -->
      <button
        @click="editor.chain().focus().toggleBulletList().run()"
        :class="{ 'is-active': editor.isActive('bulletList') }"
      >
        <Icon name="ph:list-bullets" />
      </button>
      <button
        @click="editor.chain().focus().toggleOrderedList().run()"
        :class="{ 'is-active': editor.isActive('orderedList') }"
      >
        <Icon name="ph:list-numbers" />
      </button>

      <button
        @click="editor.chain().focus().setTextAlign('left').run()"
        :class="{ 'is-active': editor.isActive({ textAlign: 'left' }) }"
      >
        <Icon name="ph:text-align-left" />
      </button>
      <button
        @click="editor.chain().focus().setTextAlign('center').run()"
        :class="{ 'is-active': editor.isActive({ textAlign: 'center' }) }"
      >
        <Icon name="ph:text-align-center" />
      </button>
      <button
        @click="editor.chain().focus().setTextAlign('right').run()"
        :class="{ 'is-active': editor.isActive({ textAlign: 'right' }) }"
      >
        <Icon name="ph:text-align-right" />
      </button>
      <button
        @click="editor.chain().focus().setTextAlign('justify').run()"
        :class="{ 'is-active': editor.isActive({ textAlign: 'justify' }) }"
      >
        <Icon name="ph:text-align-justify" />
      </button>

      <!-- <button
        @click="editor.chain().focus().toggleCodeBlock().run()"
        :class="{ 'is-active': editor.isActive('codeBlock') }"
      >
        code block
      </button> -->
      <!-- <button
        @click="editor.chain().focus().toggleBlockquote().run()"
        :class="{ 'is-active': editor.isActive('blockquote') }"
      >
        <Icon name="ph:quotes" />
      </button> -->
      <button @click="editor.chain().focus().setHorizontalRule().run()">
        <Icon name="ph:minus" />
      </button>
      <!-- <button @click="editor.chain().focus().setHardBreak().run()">
        hard break
      </button> -->
      <!-- <button
        @click="editor.chain().focus().undo().run()"
        :disabled="!editor.can().chain().focus().undo().run()"
      >
        undo
      </button> -->
      <!-- <button
        @click="editor.chain().focus().redo().run()"
        :disabled="!editor.can().chain().focus().redo().run()"
      >
        redo
      </button> -->
    </div>
    <TiptapEditorContent :editor="editor" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TextAlign } from '@tiptap/extension-text-align'
import { Underline } from '@tiptap/extension-underline'

const props = defineProps<{
  data: string
}>()

const editor = useEditor({
  content: props.data,
  extensions: [
    TiptapStarterKit,
    TextAlign.configure({
      types: ['heading', 'paragraph'],
    }),
    Underline,
  ],
  onUpdate({ editor }) {
    updateDescription(editor.getHTML())
  },
})

onMounted(() => {
  console.log('components/synco/TipTapEditor.vue')
})

const emit = defineEmits(['updateDescription'])

const updateDescription = (value: any) => {
  emit('updateDescription', value)
}

onBeforeUnmount(() => {
  unref(editor)!.destroy()
})
</script>

<style>
div.body div.header button {
  border: none;
  border-radius: 0.5rem;
  background-color: transparent;
  margin: 1px;
  padding: 2px 5px;
}
div.body div.header button:hover {
  background-color: #237fea;
  color: #f3fafd;
}
div.body div.header button.is-active {
  color: #237fea;
}
div.header {
  background-color: #b0c4de20;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}
div.body {
  min-height: 20vh;
  border: 1px solid #b0c4de20;
  border-radius: 0.5rem;
}
div div.tiptap.ProseMirror {
  min-height: 20vh;
}
</style>
