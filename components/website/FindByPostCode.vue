<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps<{
  noBorder?: boolean | null
  row?: boolean | null
}>()
let noBorder = ref<boolean>(props.noBorder ?? false).value
let row = ref<boolean>(props.row ?? false).value
</script>

<template>
  <div class="card rounded-5 border-0 shadow-lg">
    <div class="card-body px-5 pt-0">
      <div class="w-100 mb-4" :class="noBorder ? '' : 'custom-border'"></div>
      <form action="/find-a-class">
        <div class="row">
          <div class="my-2" :class="!row ? 'col-12 col-md-6' : 'col-12'">
            <input
              type="text"
              placeholder="Enter your postcode"
              class="form-control w-100"
            />
          </div>
          <div class="my-2" :class="!row ? 'col-12 col-md-6' : 'col-12'">
            <select
              id=""
              name=""
              placeholder="Or select a venue"
              class="form-select w-100"
            >
              <option value="">Or select a venue</option>
            </select>
          </div>
        </div>
        <div class="d-grid pb-4 pt-4">
          <button
            class="btn btn-success rounded-5 btn-lg text-white"
            type="submit"
          >
            <strong>Search</strong>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/web/web.scss';

.custom-border {
  border-width: 10px;
  border-top: 0.7rem solid $success;
}
</style>
