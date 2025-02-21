<template>
  <div class="card rounded-4 bg-secondary mb-3 p-2">
    <div
      class="card rounded-4 border-0 p-3 px-4"
      :style="`background-color: ${headerColor};`"
    >
      <span class="h5 m-0"><strong>Account Status</strong></span>
      <span>{{ accountStatus }}</span>
    </div>
    <div class="d-flex align-items-center flex-row p-3">
      <img
        src="@/src/assets/img-avatar-small.png"
        alt="Avatar"
        class="me-3"
        style="width: 102px; height: 102px"
      />
      <div class="d-flex flex-column text-light">
        <span class="h4 m-0"><strong>Account Holder</strong></span>
        <span>{{ `${holder[0].first_name} ${holder[0].last_name}` }}</span>
      </div>
    </div>
    <div class="d-flex flex-column text-light px-3">
      <slot name="body"></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  headerColor: string
  accountStatus: string
  holder: any
}>()

const headerColor = ref<string>(props.headerColor).value
const accountStatus = ref<string>(props.accountStatus).value
const holder = ref<any>(props.holder).value
</script>
