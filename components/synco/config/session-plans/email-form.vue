<template>
  <div class="d-flex flex-column">
    <div class="form-group w-100 my-2">
      <label for="template" class="form-labelform-label-light">
        Select cancellation template {{ to }}
      </label>
      <select id="template" class="form-control form-control-lg">
        <option>Weather Members</option>
      </select>
    </div>

    <div class="form-group w-100 my-2">
      <label for="subject" class="form-labelform-label-light">
        Subject Line
      </label>
      <input
        id="subject"
        type="text"
        class="form-control form-control-lg"
        placeholder="Class cancellation"
      />
    </div>

    <div class="form-group w-100 my-2">
      <label for="email" class="form-labelform-label-light"> Email </label>
      <textarea
        id="email"
        class="form-control form-control-lg"
        rows="8"
        placeholder=""
      ></textarea>
    </div>

    <div class="d-flex my-3 flex-row">
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          name="emailType"
          id="emailType-email"
          value="email"
        />
        <label class="form-check-label" for="emailType-email"> Email </label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          name="emailType"
          id="emailType-text"
          value="text"
        />
        <label class="form-check-label" for="emailType-text"> Text </label>
      </div>
    </div>
    <div class="d-flex justify-content-end mt-4 flex-row">
      <button type="button" class="btn btn-primary text-light">Save</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps<{
  to: string
}>()

let to = ref<string>(props.to).value
</script>
