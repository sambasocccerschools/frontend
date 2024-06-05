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
      <div class="col-6">
        <div
          class="d-flex flex-column justify-content-center align-items-center"
        >
          <div style="height: 75px">Chart</div>
          <span class="text-muted">Work ethic</span>
          <span class="display-6"><strong>70%</strong></span>
        </div>
      </div>
      <div class="col-6">
        <div
          class="d-flex flex-column justify-content-center align-items-center"
        >
          <div style="height: 75px">Chart</div>
          <span class="text-muted">Funds</span>
          <span class="display-6"><strong>45%</strong></span>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <div
          class="d-flex flex-column justify-content-center align-items-center"
        >
          <div style="height: 75px">Chart</div>
          <span class="text-muted">Passion</span>
          <span class="display-6"><strong>85%</strong></span>
        </div>
      </div>
      <div class="col-6">
        <div
          class="d-flex flex-column justify-content-center align-items-center"
        >
          <div style="height: 75px">Chart</div>
          <span class="text-muted">Funds</span>
          <span class="display-6"><strong>25%</strong></span>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <div
          class="d-flex flex-column justify-content-center align-items-center"
        >
          <div style="height: 75px">Chart</div>
          <span class="text-muted">Work ethic</span>
          <span class="display-6"><strong>40%</strong></span>
        </div>
      </div>
      <div class="col-6">
        <div
          class="d-flex flex-column justify-content-center align-items-center"
        >
          <div style="height: 75px">Chart</div>
          <span class="text-muted">Funds</span>
          <span class="display-6"><strong>10%</strong></span>
        </div>
      </div>
    </div>
  </div>
</template>
