<template>
  <div class="d-flex flex-column booking-base" :key="step">
    <div class="d-flex flex-row p-4">
      <NuxtLink class="h5 m-0" :to="returnPath">
        <Icon name="material-symbols:arrow-back" class="me-2" />
      </NuxtLink>
      <span class="h5 text-primary"
        ><strong>{{ title }}</strong></span
      >
    </div>
    <div class="card rounded-4 card-base my-4">
      <slot name="header"></slot>
      <slot name="body"></slot>
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  title: string
  step: number
  returnPath: string
}>()

let returnPath = ref<string>(props.returnPath)
let title = ref<string>(props.title)
let step = ref<number>(props.step).value
</script>
<style>
.booking-base {
  margin: auto;
  width: 1040px;
}
.card-base {
  min-height: 620px;
}
.vc-green {
  --vc-accent-50: #0dd180;
  --vc-accent-100: #0dd180;
  --vc-accent-200: #0dd180;
  --vc-accent-300: #0dd180;
  --vc-accent-400: #0dd180;
  --vc-accent-500: #0dd180;
  --vc-accent-600: #0dd180;
  --vc-accent-700: #0dd180;
  --vc-accent-800: #0dd180;
  --vc-accent-900: #0dd180;
}
</style>
