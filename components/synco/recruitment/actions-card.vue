<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps<{
  noBorder?: boolean | null
}>()
let noBorder = ref<boolean>(props.noBorder ?? false).value
</script>
<template>
  <div class="card rounded-4 p-4" :class="noBorder ? 'border-0' : ''">
    <slot name="internal_title"></slot>
    <div class="row">
      <div class="col-6 my-2">
        <button type="button" class="btn btn-light w-100 mx-2 border bg-white">
          <span
            class="d-flex align-items-center justify-content-center flex-row"
            ><Icon name="ph:envelope-simple" /><span class="mx-2"
              >Send Email</span
            ></span
          >
        </button>
      </div>
      <div class="col-6 my-2">
        <button type="button" class="btn btn-light w-100 mx-2 border bg-white">
          <span
            class="d-flex align-items-center justify-content-center flex-row"
            ><Icon name="ph:text-a-underline" /><span class="mx-2"
              >Send Text</span
            ></span
          >
        </button>
      </div>
      <div class="col-12 my-2">
        <slot name="before_reject"></slot>
      </div>
      <div class="col-12 my-2">
        <button type="button" class="btn btn-primary w-100 text-light mx-2">
          <span class="d-flex align-items-center flex-column"
            >Reject Candidate</span
          >
        </button>
      </div>
      <div class="col-12 my-2">
        <slot name="after_reject"></slot>
      </div>
    </div>
    <slot name="additional_rows"></slot>
  </div>
</template>
