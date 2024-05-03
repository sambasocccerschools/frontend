<script setup lang="ts">
import { ref } from 'vue'

import type { IStudent } from '~/types/index'
const props = defineProps<{
  student: IStudent
  noBorder?: boolean | null
}>()

let student = ref<IStudent>(props.student).value
let noBorder = ref<boolean>(props.noBorder ?? false).value
</script>

<template>
  <slot name="external_title"></slot>
  <div class="card rounded-4 mt-4 px-3" :class="noBorder ? 'border-0' : ''">
    <slot name="internal_title"></slot>
    <div class="row">
      <div class="col-6">
        <div class="form-group w-100 mb-3">
          <label for="studentFirstName" class="form-labelform-label-light"
            >First name</label
          >
          <input
            id="studentFirstName"
            type="text"
            class="form-control form-control-lg"
            placeholder="Enter first name"
            v-model="student.firstName"
          />
        </div>
      </div>
      <div class="col-6">
        <div class="form-group w-100 mb-3">
          <label for="studentLastName" class="form-labelform-label-light"
            >Last name</label
          >
          <input
            id="studentLastName"
            type="text"
            class="form-control form-control-lg"
            placeholder="Enter last name"
            v-model="student.lastName"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <div class="form-group w-100 mb-3">
          <label for="studentDoB" class="form-labelform-label-light"
            >Date of Birth</label
          >
          <input
            id="studentDoB"
            type="date"
            class="form-control form-control-lg"
            placeholder="Enter date of birth"
            v-model="student.dateOfBirth"
          />
        </div>
      </div>
      <div class="col-6">
        <div class="form-group w-100 mb-3">
          <label for="studentAge" class="form-labelform-label-light">Age</label>
          <input
            id="studentAge"
            type="text"
            class="form-control form-control-lg"
            placeholder="Automatic entry"
            v-model="student.age"
            readonly
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <div class="form-group w-100 mb-3">
          <label for="studentGender" class="form-labelform-label-light"
            >Gender</label
          >
          <input
            id="studentGender"
            type="text"
            class="form-control form-control-lg"
            placeholder="Enter gender"
            v-model="student.gender"
          />
        </div>
      </div>
      <div class="col-6">
        <div class="form-group w-100 mb-3">
          <label
            for="studentMedicalInformation"
            class="form-labelform-label-light"
            >Medical information</label
          >
          <input
            id="studentMedicalInformation"
            type="text"
            class="form-control form-control-lg"
            placeholder="Enter medical information"
            v-model="student.medicalInformation"
          />
        </div>
      </div>
    </div>
    <slot name="additional_rows"></slot>
  </div>
  <slot name="footer"></slot>
</template>
