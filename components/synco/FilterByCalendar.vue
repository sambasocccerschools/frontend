<template>
  <div style="max-width: 500px">
    <VDatePicker
      v-model="classDate"
      :attributes="attrs"
      expanded
      color="green"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps<{
  classDate?: Date | null
}>()

let classDate = ref<Date>(props.classDate ?? new Date())
const attrs = ref([
  {
    key: 'today',
    highlight: {
      color: '#0DD180',
      fillMode: 'solid',
    },
  },
])
const today = ref(new Date())
</script>
