<script setup lang="ts">
import { ref } from 'vue'
import { useToast } from 'vue-toast-notification'

import type { IGender, IMedicalInformation } from '~/types/index'
import type { IStudentCreate } from '~/types/synco/index'
const props = defineProps<{
  student: IStudentCreate
  noBorder?: boolean | null
}>()

const { $api } = useNuxtApp()
const toast = useToast()
let isLoading = ref<boolean>(false)
let blockButtons = ref<boolean>(false)
const changeLoadingState = (state: boolean) => {
  isLoading.value = state
  blockButtons.value = state
}

let student = ref<IStudentCreate>(props.student)
let noBorder = ref<boolean>(props.noBorder ?? false)

let gender = ref<IGender[]>([])
let medicalInformation = ref<IMedicalInformation[]>([])

watch(
  () => student.value.dob,
  (newValue: string, oldValue: string) => {
    let dob = new Date(newValue)
    let today = new Date()
    let ageDifference = today.getTime() - dob.getTime()
    var ageDate = new Date(ageDifference)
    let age = Math.abs(ageDate.getUTCFullYear() - 1970)
    student.value.age = age
  },
)

onMounted(async () => {
  console.log('components/synco/weekly-classes/forms/student-form.vue')
  await getGender()
  await getMedicalInformation()
})
const getGender = async () => {
  try {
    changeLoadingState(true)
    const response = await $api.datasets.getGender()
    console.log(response)
    gender.value = response?.data
  } catch (error: any) {
    console.log(error)
    toast.error(error?.data?.messages ?? 'Error')
    gender.value = []
  } finally {
    changeLoadingState(false)
  }
}
const getMedicalInformation = async () => {
  try {
    changeLoadingState(true)
    const response = await $api.datasets.getMedicalInformation()
    console.log(response)
    medicalInformation.value = response?.data
  } catch (error: any) {
    console.log(error)
    toast.error(error?.data?.messages ?? 'Error')
    medicalInformation.value = []
  } finally {
    changeLoadingState(false)
  }
}
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
            v-model="student.first_name"
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
            v-model="student.last_name"
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
            v-model="student.dob"
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
          <select
            id="studentGender"
            class="form-control form-control-lg"
            v-model="student.gender_id"
          >
            <option :value="0">Select option</option>
            <option
              v-for="(item, index) in gender"
              :value="item.id"
              :key="index"
            >
              {{ item.title }}
            </option>
          </select>
        </div>
      </div>
      <div class="col-6">
        <div class="form-group w-100 mb-3">
          <label
            for="studentMedicalInformation"
            class="form-labelform-label-light"
            >Medical information</label
          >
          <select
            id="studentMedicalInformation"
            class="form-control form-control-lg"
            v-model="student.medical_information_id"
          >
            <option :value="0">Select option</option>
            <option
              v-for="(item, index) in medicalInformation"
              :value="item.id"
              :key="index"
            >
              {{ item.title }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <slot name="additional_rows"></slot>
  </div>
  <slot name="footer"></slot>
</template>
