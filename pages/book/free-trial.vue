<template>
  <NuxtLayout :name="layout">
    <WebsiteBookBookingBase
      title="Book a Free Trial"
      :step="step"
      returnPath="/book"
    >
      <template v-slot:header>
        <div class="d-flex justify-content-center m-4 flex-row">
          <div>
            <span
              class="rounded-circle text-success border-success border"
              style="padding: 2px 8px"
            >
              <span v-if="step == 1">1</span>
              <Icon v-else name="ph:check" class="m-0" />
            </span>
            <span class="ms-2">Free Trial Information</span>
          </div>
          <hr style="width: 100px" class="mx-4" />
          <div>
            <span
              class="rounded-circle border"
              :class="step < 2 ? 'text-muted' : 'text-success border-success'"
              style="padding: 2px 8px"
            >
              <span v-if="step <= 2">2</span>
              <Icon v-else name="ph:check" class="m-0"
            /></span>
            <span class="ms-2" :class="step < 2 ? 'text-muted' : ''"
              >Parent/Student Information</span
            >
          </div>
        </div>
      </template>
      <template v-slot:body>
        <div
          v-if="formStep == 1"
          class="d-flex align-items-center flex-column m-4"
        >
          <span class="h5">
            <strong>When would you like to try our classes?</strong>
          </span>
          <div class="mt-4" style="width: 500px">
            <VDatePicker
              v-model="classDate"
              :attributes="attrs"
              expanded
              color="green"
              :min-date="today"
            />
          </div>
        </div>
        <div
          v-else-if="formStep == 2"
          class="d-flex align-items-center flex-column m-4"
        >
          <span class="h5">
            <strong>How many children would you like to book?</strong>
          </span>
          <div class="mt-4" style="width: 500px">
            <div class="form-group">
              <label for="childrenQuantity"
                >Please select the number of children you'd like to book</label
              >
              <input
                type="number"
                class="form-control"
                id="childrenQuantity"
                min="1"
                max="100"
                v-model="childrenQuantity"
              />
            </div>
          </div>
        </div>
        <div v-else-if="formStep == 3">
          <div class="accordion">
            <template v-for="(student, index) in students">
              <div class="w-100 p-3">
                <a
                  class="d-flex w-100 h5 m-0"
                  type="button"
                  data-bs-toggle="collapse"
                  :data-bs-target="`#studenet${index}`"
                  aria-expanded="true"
                  :aria-controls="`#studenet${index}`"
                >
                  <strong>
                    Student{{
                      students.length > 1 ? ` ${index + 1}` : ' information'
                    }}
                  </strong>
                </a>
              </div>
              <div
                class="badge badge-danger d-flex align-items-center mx-3 flex-row p-2"
                v-if="student.firstName == ''"
              >
                <div
                  class="rounded-circle me-2 p-1"
                  style="background-color: #fee4e2; color: #d92d20"
                >
                  <Icon
                    name="ph:warning-circle"
                    style="height: 24px; width: 24px"
                  />
                </div>
                <div class="d-flex flex-column align-items-start">
                  <span>
                    You cannot continue if you have not completed the
                    information for student {{ index + 1 }}.
                  </span>
                  <span>
                    You must complete all the information in order to continue.
                  </span>
                </div>
              </div>
              <div :id="`studenet${index}`" class="show collapse">
                <SyncoWeeklyClassesFormsStudentForm
                  :student="student"
                  :noBorder="true"
                >
                  <template v-slot:additional_rows>
                    <div class="row">
                      <div class="col-6">
                        <div class="form-group w-100 mb-3">
                          <label
                            for="studentClass"
                            class="form-labelform-label-light"
                            >Class</label
                          >
                          <select
                            id="studentClass"
                            class="form-control form-control-lg"
                            v-model="student.class"
                          >
                            <option
                              v-for="(cls, index) in classes"
                              :value="cls.value"
                              :key="index"
                            >
                              {{ cls.label }}
                            </option>
                          </select>
                        </div>
                      </div>
                      <div class="col-6">
                        <div class="form-group w-100 mb-3">
                          <label
                            for="studentTime"
                            class="form-labelform-label-light"
                            >Time</label
                          >
                          <select
                            id="studentTime"
                            class="form-control form-control-lg"
                            v-model="student.time"
                          >
                            <option
                              v-for="(time, index) in times"
                              :value="time.value"
                              :key="index"
                            >
                              {{ time.label }}
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </template>
                </SyncoWeeklyClassesFormsStudentForm>
              </div>
              <div
                class="px-3"
                v-if="students.length > 1 && index + 1 < students.length"
              >
                <hr />
              </div>
            </template>
          </div>
        </div>
        <div v-else-if="formStep == 4">
          <SyncoWeeklyClassesFormsParentForm :parent="parent" :noBorder="true">
            <template v-slot:internal_title>
              <div
                class="d-flex justify-content-between align-items-center flex-row"
              >
                <h5 class="m-0 py-4">
                  <strong>Parent information</strong>
                </h5>
              </div>
            </template>
            <template v-slot:additional_rows>
              <div class="my-2">
                <button
                  type="button"
                  class="btn btn-primary text-light"
                  @click="addParent"
                >
                  Add Parent
                </button>
              </div>
            </template>
          </SyncoWeeklyClassesFormsParentForm>
        </div>
        <div v-else-if="formStep == 5">
          <span>Login</span>
        </div>
        <div
          v-else-if="formStep == 6"
          class="d-flex align-items-center flex-column m-4"
        >
          <span class="h5">
            <strong>Confirm your booking</strong>
          </span>
          <span>Please review your details below and confirm your booking</span>
          <div class="mt-4" style="width: 700px">
            <div class="card rounded-4 my-4">
              <div
                class="rounded-4 text-light mx-3 my-2 p-3"
                style="background-color: #00a6e3"
              >
                <span>
                  <strong><Icon name="ph:map-pin" /> Venue:</strong> The King
                  Fahad Academy, East Acton Lane, London W3 7HD
                </span>
              </div>
              <div
                class="rounded-4 mx-3 mb-2 p-3"
                style="background-color: #fcf9f6"
              >
                <div class="row">
                  <div class="col-4 d-flex flex-column align-items-end px-4">
                    <strong>Acton</strong>
                  </div>
                  <div class="col-4 d-flex flex-column align-items-center px-4">
                    <strong>Saturday</strong><span>Outdoor</span>
                  </div>
                  <div class="col-4 d-flex flex-column align-items-start px-4">
                    <strong>Date</strong><span>09/09/2023</span>
                  </div>
                </div>
                <template v-for="student in students">
                  <div class="row">
                    <div
                      class="col-4 d-flex justify-content-end align-items-center flex-row"
                    >
                      <Icon
                        name="ph:user"
                        style="color: #00a6e3"
                        class="me-2"
                      />
                      {{ `${student.firstName} ${student.lastName}` }}
                    </div>
                    <div
                      class="col-4 d-flex justify-content-center align-items-center flex-row"
                    >
                      <Icon
                        name="ph:notepad"
                        style="color: #00a6e3"
                        class="me-2"
                      />
                      {{ student.class }}
                    </div>
                    <div
                      class="col-4 d-flex justify-content-start align-items-center flex-row"
                    >
                      <Icon
                        name="ph:clock"
                        style="color: #00a6e3"
                        class="me-2"
                      />
                      {{ student.time }}
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
        <div
          id="successCard"
          class="modal fade centered"
          tabindex="-1"
          aria-labelledby="setupDirectDebit"
          aria-hidden="true"
        >
          <div class="modal-dialog rounded-4 bg-white p-4">
            <div class="modal-content border-0">
              <div class="modal-body d-flex flex-column align-items-center">
                <span style="height: 250px">
                  <img src="@/src/assets/img-trophy.png" alt="Trophy" />
                </span>
                <span class="text-success h4">
                  <strong>Congratulations John!</strong>
                </span>
                <span class="text-primary">
                  <strong>Your Free Trial Booking has been successful</strong>
                </span>
                <span>
                  We'll send you an email confirming your free trial session.
                </span>
              </div>
              <div class="modal-footer border-0">
                <div class="row w-100">
                  <div class="col-6">
                    <button class="btn btn-outline-primary w-100">
                      Go Home
                    </button>
                  </div>
                  <div class="col-6">
                    <button
                      class="btn btn-primary text-light w-100"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="cancelCard"
          class="modal fade centered"
          tabindex="-1"
          aria-labelledby="setupDirectDebit"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header d-flex flex-column align-items-end">
                <button
                  type="button"
                  class="btn btn-light bg-transparent"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body d-flex flex-column align-items-center">
                <span>
                  <strong>Cancel Book a Free Trial</strong>
                </span>
                <span> Are you sure you want to cancel this booking? </span>
              </div>
              <div class="modal-footer border-0">
                <div class="row w-100">
                  <div class="col-6">
                    <button
                      class="btn btn-outline-secondary w-100"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      No, go back
                    </button>
                  </div>
                  <div class="col-6">
                    <button class="btn btn-danger text-light w-100">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template v-slot:footer>
        <div class="d-flex justify-content-end m-4 flex-row">
          <button
            class="btn btn-outline-danger mx-2"
            @click="cancel"
            v-if="formStep == 6"
            data-bs-toggle="modal"
            data-bs-target="#cancelCard"
          >
            Cancel
          </button>
          <button
            class="btn btn-outline-primary mx-2"
            :disabled="formStep == 1"
            @click="moveStep('back')"
          >
            Back
          </button>
          <button
            class="btn btn-primary text-light mx-2"
            @click="moveStep('next')"
            v-if="formStep < 6"
          >
            Next
          </button>
          <button
            class="btn btn-primary text-light mx-2"
            @click="book"
            v-if="formStep == 6"
            data-bs-toggle="modal"
            data-bs-target="#successCard"
          >
            Book FREE Trial
          </button>
        </div>
      </template>
    </WebsiteBookBookingBase>
  </NuxtLayout>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
import type { IStudent, IParent } from '~/types/index'

const layout = 'weblayout'

let step = ref<number>(1)
let formStep = ref<number>(1)
let classDate = ref<Date>(new Date())
let childrenQuantity = ref<number>(1)

let students = ref<IStudent[]>([
  {
    firstName: '',
    lastName: '',
    age: 0,
    dateOfBirth: '',
    gender: '',
    medicalInformation: '',
    activityOfInterest: null,
    class: '',
    time: '',
  },
])

let parent = ref<IParent>({
  email: '',
  firstName: '',
  lastName: '',
  marketingChannel: '',
  phoneNumber: '',
  relationToChild: '',
}).value

const attrs = ref([
  {
    key: 'today',
    highlight: {
      color: '#0DD180',
      fillMode: 'solid',
    },
  },
])
const today = ref(new Date())

const classes = ref([
  { label: 'Select from drop down', value: '' },
  { label: '4-7 years', value: '4-7 years' },
])
const times = ref([
  { label: 'Automatic entry', value: '' },
  { label: '4-6', value: '4-6' },
])

const moveStep = (direction: string) => {
  if (direction == 'next') {
    formStep.value += 1
    if (formStep.value == 3 || formStep.value == 5) {
      step.value += 1
    }
  } else if (direction == 'back' && formStep.value > 1) {
    formStep.value -= 1
    if (formStep.value == 2 || formStep.value == 4) {
      step.value -= 1
    }
  }
}

watch(childrenQuantity, (newValue, oldValue) => {
  if (newValue > oldValue) {
    students.value.push({
      firstName: '',
      lastName: '',
      age: 0,
      dateOfBirth: '',
      gender: '',
      medicalInformation: '',
      activityOfInterest: null,
      class: '',
      time: '',
    })
  } else if (newValue < oldValue) {
    students.value.pop()
  }
})

let addParent = () => {
  console.log('addParent')
}

let book = () => {
  console.log('book')
}

let cancel = () => {
  console.log('cancel')
}
</script>
<style>
.booking-base {
  margin: auto;
  width: 1040px;
}
.card-base {
  min-height: 620px;
}
.vc-green {
  --vc-accent-50: #0dd180;
  --vc-accent-100: #0dd180;
  --vc-accent-200: #0dd180;
  --vc-accent-300: #0dd180;
  --vc-accent-400: #0dd180;
  --vc-accent-500: #0dd180;
  --vc-accent-600: #0dd180;
  --vc-accent-700: #0dd180;
  --vc-accent-800: #0dd180;
  --vc-accent-900: #0dd180;
}
</style>
