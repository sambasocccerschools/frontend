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
    <div class="row my-2">
      <div class="col-12">
        <button type="button" class="btn btn-primary text-light">
          Download CV
        </button>
      </div>
    </div>
    <div class="row my-2">
      <div class="col-12">
        <div class="form-group mb-3">
          <label for="coverNote" class="form-label">Cover Note</label>
          <textarea
            id="coverNote"
            type="text"
            class="form-control"
            rows="5"
          ></textarea>
        </div>
      </div>
    </div>
    <slot name="additional_rows"></slot>
  </div>
</template>
