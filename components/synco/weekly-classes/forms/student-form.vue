<script setup lang="ts">
import { ref } from 'vue'
import type { IStudentCreate } from '~/types/synco/index'
import { generalStore } from '~/stores'
const store = generalStore()

const props = defineProps<{
  student: IStudentCreate
  noBorder?: boolean | null
}>()

const isLoading = ref<boolean>(false)
const blockButtons = ref<boolean>(false)
const changeLoadingState = (state: boolean) => {
  isLoading.value = state
  blockButtons.value = state
}

const student = ref<IStudentCreate>(props.student)
const noBorder = ref<boolean>(props.noBorder ?? false)

const gender = store.gender
const medicalInformation = store.medicalInformation

watch(
  () => student.value.dob,
  (newValue: string, oldValue: string) => {
    const dob = new Date(newValue)
    const today = new Date()
    const ageDifference = today.getTime() - dob.getTime()
    const ageDate = new Date(ageDifference)
    const age = Math.abs(ageDate.getUTCFullYear() - 1970)
    student.value.age = age
  },
)

onMounted(async () => {
  console.log('components/synco/weekly-classes/forms/student-form.vue')
  await store.fetchAllData()
})
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
            v-model="student.first_name"
            type="text"
            class="form-control form-control-lg"
            placeholder="Enter first name"
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
            v-model="student.last_name"
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
          <label for="studentDoB" class="form-labelform-label-light"
            >Date of Birth</label
          >
          <input
            id="studentDoB"
            v-model="student.dob"
            type="date"
            class="form-control form-control-lg"
            placeholder="Enter date of birth"
          />
        </div>
      </div>
      <div class="col-6">
        <div class="form-group w-100 mb-3">
          <label for="studentAge" class="form-labelform-label-light">Age</label>
          <input
            id="studentAge"
            v-model="student.age"
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
        <div v-if="gender.length > 0" class="form-group w-100 mb-3">
          <label for="studentGender" class="form-labelform-label-light"
            >Gender</label
          >
          <select
            id="studentGender"
            v-model="student.gender_id"
            class="form-control form-control-lg"
          >
            <option :value="0">Select option</option>
            <option
              v-for="(item, index) in gender"
              :key="index"
              :value="item.id"
            >
              {{ item.title }}
            </option>
          </select>
        </div>
      </div>
      <div class="col-6">
        <div class="form-studentMedicalInformation w-100 mb-3">
          <label for="studentAge" class="form-labelform-label-light"
            >Medical information</label
          >
          <input
            id="studentMedicalInformation"
            v-model="student.medical_information"
            type="text"
            class="form-control form-control-lg"
            placeholder="Medical information"
          />
        </div>
        <!-- <div class="form-group w-100 mb-3" v-if="medicalInformation.length > 0">
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
        </div> -->
      </div>
    </div>
    <slot name="additional_rows"></slot>
  </div>
  <slot name="footer"></slot>
</template>
