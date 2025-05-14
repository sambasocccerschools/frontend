<template>
  <div class="card rounded-4 border">
    <div class="card-header d-flex flex-column">
      <span
        ><strong>{{ planName }}</strong></span
      >
      <span
        ><strong class="h4"
          ><Icon name="mingcute:currency-pound-2-fill" />{{ planPrice }}</strong
        >/month</span
      >
    </div>
    <div class="px-3">
      <hr />
    </div>
    <div class="card-body">
      <p v-for="benefit in benefits" :key="benefit">
        <span class="btn btn-primary text-light rounded-circle fixed-size p-0"
          ><Icon name="ph:check"
        /></span>
        {{ benefit }}
      </p>
    </div>
    <div class="card-footer">
      <button type="button" class="btn btn-primary text-light w-100">
        <Icon name="mingcute:currency-pound-2-fill" />35 Joining Fee
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  planName: string
  planPrice: number
  benefits: string[]
}>()

const planName = ref(props.planName).value
const planPrice = ref(props.planPrice).value
const benefits = ref(props.benefits).value
</script>
<style scoped>
.fixed-size {
  height: 1.5rem;
  width: 1.5rem;
}
</style>
