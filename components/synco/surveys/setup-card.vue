<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  noBorder?: boolean | null
}>()

let noBorder = ref<boolean>(props.noBorder ?? false).value
</script>

<template>
  <slot name="external_title"></slot>
  <div class="card rounded-4 mt-4 px-3" :class="noBorder ? 'border-0' : ''">
    <slot name="internal_title"></slot>

    <div class="row">
      <div class="col-12">
        <div class="form-group w-100 mb-3">
          <label for="Title" class="form-labelform-label-light"> Title </label>
          <input id="Title" type="text" class="form-control form-control-lg" />
        </div>
      </div>
      <div class="col-12">
        <div class="form-group w-100 mb-3">
          <label for="Category" class="form-labelform-label-light">
            Survey Category
          </label>
          <select id="Category" class="form-control form-control-lg">
            <option>Select option</option>
          </select>
        </div>
      </div>
      <div class="col-12">
        <div class="form-group w-100 mb-3">
          <label for="Audience" class="form-labelform-label-light">
            Audience
          </label>
          <select id="Audience" class="form-control form-control-lg">
            <option>Select option</option>
          </select>
        </div>
      </div>
      <div class="col-12">
        <div class="form-group w-100 mb-3">
          <label for="date" class="form-labelform-label-light">
            Schedule date for publication
          </label>
          <select id="date" class="form-control form-control-lg">
            <option>Select option</option>
          </select>
        </div>
      </div>
      <div class="col-12">
        <div class="form-group w-100 mb-3">
          <label for="Manager" class="form-labelform-label-light">
            Administer by
          </label>
          <select id="Manager" class="form-control form-control-lg">
            <option>Select option</option>
          </select>
        </div>
      </div>
    </div>
    <slot name="additional_rows"></slot>
  </div>
  <slot name="footer"></slot>
</template>
