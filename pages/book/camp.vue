<template>
  <NuxtLayout :name="layout">
    <WebsiteBookBookingBase
      title="Book a Camp"
      :step="step"
      returnPath="/book/holiday-camps"
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
            <span class="ms-2">Camp Information</span>
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
            <span class="ms-2" :class="step < 2 ? 'text-muted' : ''">
              Parent/Student Information
            </span>
          </div>
          <hr style="width: 100px" class="mx-4" />
          <div>
            <span
              class="rounded-circle border"
              :class="step < 3 ? 'text-muted' : 'text-success border-success'"
              style="padding: 2px 8px"
            >
              <span v-if="step <= 3">3</span>
              <Icon v-else name="ph:check" class="m-0"
            /></span>
            <span class="ms-2" :class="step < 3 ? 'text-muted' : ''">
              Payment
            </span>
          </div>
        </div>
      </template>
      <template v-slot:body>
        <div
          v-if="formStep == 1"
          class="d-flex align-items-center flex-column m-4"
        >
          <span class="h5">
            <strong>How many children would you like to book?</strong>
          </span>
          <div class="mt-4" style="width: 500px">
            <div class="form-group">
              <label for="childrenQuantity">
                Please select the number of children you'd like to book
              </label>
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
        <div v-else-if="formStep == 2">
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
        <div v-else-if="formStep == 3">
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
        <div v-else-if="formStep == 4">
          <SyncoWeeklyClassesFormsEmergencyContactForm
            :emergencyContact="emergencyContact"
            :noBorder="true"
          >
            <template v-slot:internal_title>
              <h5 class="py-4">
                <strong>Emergency contact details</strong>
              </h5>
            </template>
          </SyncoWeeklyClassesFormsEmergencyContactForm>
        </div>
        <div v-else-if="formStep == 5">
          <div class="col-6 mx-auto">
            <ParentsComponentsLoginRegister></ParentsComponentsLoginRegister>
          </div>
        </div>
        <div
          v-else-if="formStep == 6"
          class="d-flex align-items-center flex-column m-4"
        >
          <div class="row w-100">
            <div class="col-5">
              <div
                class="card rounded-4 d-flex flex-column p-3"
                style="background-color: #f1f4fc"
              >
                <span class="h4 text-primary">Summary</span>
                <span>
                  <strong class="text-primary">Holiday Camp</strong>
                  <br /><strong
                    >X{{ students.length }} Student{{
                      students.length > 1 ? 's' : ''
                    }}</strong
                  >
                </span>
                <span><strong>Start Date:</strong> 17th Aug 2023</span>
                <span> <strong>End Date:</strong> 17th Aug 2023 </span>
                <hr />
                <template v-if="students.length > 1">
                  <span class="text-primary">
                    <strong>Sibling Discount</strong>
                  </span>
                  <div class="d-flex justify-content-between flex-row">
                    <span>
                      <strong> X{{ students.length }} student discount </strong>
                    </span>
                    <span>-£35.00</span>
                  </div>
                  <hr />
                </template>
                <span class="text-primary">
                  <strong>Discount Code</strong>
                </span>

                <div class="form-group mt-2">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter discount code here"
                  />
                </div>

                <hr />
                <div
                  class="d-flex justify-content-between text-primary flex-row"
                >
                  <span><strong>Total to pay now</strong></span>
                  <span class="h5"><strong>£120.00</strong></span>
                </div>
              </div>
            </div>
            <div class="col-7">
              <div class="d-flex flex-column">
                <div class="d-flex flex-column">
                  <span class="h4">Checkout</span>
                  <span class="text-muted">
                    Fill out your card details below to pay for the Joining Fee
                    and Pro-Rata lessons.
                  </span>
                </div>
                <div class="row my-4">
                  <div class="col-12 py-1">
                    <div class="form-group">
                      <label for="cardName"> Name on card </label>
                      <input
                        type="text"
                        class="form-control"
                        id="cardName"
                        v-model="directDebit.CardName"
                      />
                    </div>
                  </div>
                  <div class="col-12 py-1">
                    <div class="form-group">
                      <label for="cardNumber"> Card information </label>
                      <input
                        type="text"
                        class="form-control"
                        id="cardNumber"
                        v-model="directDebit.CardNumber"
                      />
                    </div>
                  </div>
                  <div class="col-6 py-1">
                    <div class="form-group">
                      <label for="cardExpiration">Expiration date</label>
                      <input
                        type="text"
                        class="form-control"
                        id="cardExpiration"
                        placeholder="MM/YY"
                        v-model="directDebit.CardExpirationDate"
                      />
                    </div>
                  </div>
                  <div class="col-6 py-1">
                    <div class="form-group">
                      <label for="CardCVC">CVC</label>
                      <input
                        type="text"
                        class="form-control"
                        id="CardCVC"
                        placeholder="CVC"
                        v-model="directDebit.CardCVC"
                      />
                    </div>
                  </div>
                  <div class="col-6 py-1">
                    <div class="form-group">
                      <label for="cardCountry"> Country or region </label>

                      <select
                        id="cardCountry"
                        class="form-control"
                        v-model="directDebit.CardCountry"
                      >
                        <option
                          v-for="(country, index) in countries"
                          :value="country.value"
                          :key="index"
                        >
                          {{ country.label }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="col-6 py-1">
                    <div class="form-group">
                      <label for="cardZip">Zip</label>
                      <input
                        type="text"
                        class="form-control"
                        id="cardZip"
                        placeholder="Zipcode"
                        v-model="directDebit.CardZip"
                      />
                    </div>
                  </div>
                </div>
                <div class="d-flex flex-column">
                  <span class="d-flex w-100 flex-row">
                    <hr class="fill-available" />
                    <strong style="width: 210px">Or pay with</strong>
                    <hr class="fill-available" />
                  </span>
                  <div class="w-100">
                    <button
                      type="button"
                      class="btn w-100 text-light"
                      style="background-color: #1b1b1e"
                    >
                      <Icon name="ph:apple-logo" /> Pay
                    </button>
                  </div>
                </div>
                <div
                  class="d-flex text-primary justify-content-between my-4 flex-row"
                >
                  <span><strong>Total to pay now</strong></span>
                  <span class="h4"><strong>£120.00</strong></span>
                </div>
                <div class="row">
                  <div class="col-12 py-1">
                    <div class="form-group text-end">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="canAuthorizeTerms"
                        v-model="directDebit.AuthorizeTermsConditions"
                      />
                      <label for="canAuthorizeTerms" class="ms-2">
                        You agree to the Terms Conditions and Privacy Policy.
                      </label>
                    </div>
                  </div>
                  <div class="col-12 py-1">
                    <div class="form-group text-end">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="canAuthorize"
                        v-model="directDebit.AuthorizeChildPhotos"
                      />
                      <label for="canAuthorize" class="ms-2">
                        You provide consent for your child to be included in
                        photos.
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          v-else-if="formStep == 7"
          class="d-flex align-items-center flex-column m-4"
        >
          <span class="h5">
            <strong>Thanks, you are all set!</strong>
          </span>
          <span>Please see below for a summary of your booking</span>
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
          <div class="mt-4">
            <div class="card rounded-4 bg-yellow d-flex uniform-card flex-row">
              <div>
                <img src="@/src/assets/img-waves-light-blue.png" alt="waves" />
              </div>
              <div class="d-flex flex-column p-4" style="width: 400px">
                <span class="d-flex flex-column h2 font-custom mt-3">
                  <strong style="color: #042c89">Order your</strong>
                  <strong style="color: #00a6e3">Uniform today</strong>
                </span>
                <span class="mt-3">
                  Uniform is compulsory. Use your discount code below and get
                  50% off.
                </span>
                <div class="mt-3">
                  <button
                    class="btn rounded-5 font-custom me-2 bg-white px-4"
                    style="color: #00a6e3; border: 1px dashed #00a6e3"
                  >
                    SAMBA10
                  </button>
                  <button
                    class="btn rounded-5 text-light px-4"
                    style="background-color: #00a6e3"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
              <div>
                <img
                  src="@/src/assets/img-kids-picture-2.png"
                  class="img-fluid"
                  alt="Kids Samba Soccer Schools"
                  style="max-height: 320px"
                />
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
                <span style="height: 250px">img</span>
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
            v-if="formStep <= 6"
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
            v-if="formStep == 6"
            @click="moveStep('next')"
          >
            Complete Booking
          </button>
        </div>
      </template>
    </WebsiteBookBookingBase>
  </NuxtLayout>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
import type {
  IStudent,
  IParent,
  IEmergencyContact,
  IDirectDebitSetup,
} from '~/types/index'

const layout = 'weblayout'

let step = ref<number>(1)
let formStep = ref<number>(1)
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

let emergencyContact = ref<IEmergencyContact>({
  firstName: '',
  lastName: '',
  phoneNumber: '',
  relationToChild: '',
})

let directDebit = ref<IDirectDebitSetup>({
  AuthorizeChildPhotos: false,
  AuthorizeTermsConditions: false,
  CardCountry: '',
  CardCVC: '',
  CardExpirationDate: '',
  CardNumber: '',
  CardName: '',
  CardZip: '',
  AccountHolderName: '',
  ApplePay: '',
  AccountNumber: null,
  SortCode: null,
})

const classes = ref([
  { label: 'Select from drop down', value: '' },
  { label: '4-7 years', value: '4-7 years' },
])
const times = ref([
  { label: 'Automatic entry', value: '' },
  { label: '4-6', value: '4-6' },
])
const countries = ref([{ label: 'UK', value: 'UK' }])

const moveStep = (direction: string) => {
  if (direction == 'next') {
    formStep.value += 1
    if (formStep.value == 2 || formStep.value == 5 || formStep.value == 7) {
      step.value += 1
    }
  } else if (direction == 'back' && formStep.value > 1) {
    formStep.value -= 1
    if (formStep.value == 1 || formStep.value == 4 || formStep.value == 6) {
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

let cancel = () => {
  console.log('cancel')
}
</script>
<style scoped>
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
.bg-yellow {
  background-color: #ffde14;
}
.uniform-card {
  height: 320px;
}
.fill-available {
  width: -webkit-fill-available;
  width: -moz-available;
}
</style>
