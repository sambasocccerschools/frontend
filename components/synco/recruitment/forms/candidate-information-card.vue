<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps<{
  noBorder?: boolean | null
}>()
let noBorder = ref<boolean>(props.noBorder ?? false).value
const marketingChannels = ref([
  { label: 'Select from drop down', value: '' },
  { label: 'Social Media', value: 'Social Media' },
  { label: 'TV', value: 'TV' },
  { label: 'Newspaper', value: 'Newspaper' },
])
</script>
<template>
  <div class="card rounded-4 p-4" :class="noBorder ? 'border-0' : ''">
    <slot name="internal_title"></slot>
    <div class="row">
      <div class="col-6">
        <div class="form-group w-100 mb-3">
          <label for="firstName" class="form-labelform-label-light"
            >First name</label
          >
          <input
            id="firstName"
            type="text"
            class="form-control form-control-lg"
            placeholder="Enter first name"
          />
        </div>
      </div>
      <div class="col-6">
        <div class="form-group w-100 mb-3">
          <label for="surname" class="form-labelform-label-light"
            >Surname</label
          >
          <input
            id="surname"
            type="text"
            class="form-control form-control-lg"
            placeholder="Enter last name"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <div class="form-group w-100 mb-3">
          <label for="DoB" class="form-labelform-label-light"
            >Date of Birth</label
          >
          <input
            id="DoB"
            type="date"
            class="form-control form-control-lg"
            placeholder="Enter date of birth"
          />
        </div>
      </div>
      <div class="col-6">
        <div class="form-group w-100 mb-3">
          <label for="age" class="form-labelform-label-light">Age</label>
          <input
            id="age"
            type="text"
            class="form-control form-control-lg"
            placeholder="Automatic entry"
            readonly
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <div class="form-group w-100 mb-3">
          <label for="email" class="form-labelform-label-light">Email</label>
          <input
            id="email"
            type="text"
            class="form-control form-control-lg"
            placeholder="Enter email address"
          />
        </div>
      </div>
      <div class="col-6">
        <div class="form-group w-100 mb-3">
          <label for="phoneNumber" class="form-labelform-label-light"
            >Phone number</label
          >
          <input
            id="phoneNumber"
            type="phone"
            class="form-control form-control-lg"
            placeholder="+44"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <div class="form-group w-100 mb-3">
          <label for="postcode" class="form-labelform-label-light"
            >London Postcode</label
          >
          <input
            id="postcode"
            type="text"
            class="form-control form-control-lg"
            placeholder="Enter Postcode"
          />
        </div>
      </div>
      <div class="col-6">
        <div class="form-group w-100 mb-3">
          <label for="parentMarketingChannel" class="form-labelform-label-light"
            >How did you hear about us?</label
          >
          <select
            id="parentMarketingChannel"
            class="form-control form-control-lg"
          >
            <option
              v-for="(channel, index) in marketingChannels"
              :value="channel.value"
              :key="index"
            >
              {{ channel.label }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <slot name="additional_rows"></slot>
  </div>
</template>
