<template>
  <NuxtLayout name="syncolayout" page-title="Booking Form">
    <div class="card bg-secondary rounded-4">
      <div
        class="card-body d-flex align-items-center justify-content-between p-3"
      >
        <NuxtLink class="h4 text-light m-0" to="/synco/weekly-classes/leads">
          <Icon name="material-symbols:arrow-back" class="me-2" />Book a
          Membership
        </NuxtLink>
      </div>
    </div>
    <div class="row">
      <div class="col-4">
        <div class="card rounded-4 mt-4 px-3">
          <h5 class="py-4"><strong>Membership plan</strong></h5>
          <div class="row">
            <!-- <div class="col-12">
              <div class="w-100 mb-3">
                <label for="venueInfo" class="form-labelform-label-light"
                  >Venue</label
                >
                <div class="input-group input-group-lg">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <Icon name="ph:magnifying-glass" class="indicator"
                    /></span>
                  </div>
                  <input
                    id="venueInfo"
                    type="text"
                    class="form-control"
                    placeholder="Enter venue"
                  />
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="form-group w-100 mb-3">
                <label
                  for="studentsNumberInfo"
                  class="form-labelform-label-light"
                  >Number of students</label
                >
                <input
                  id="studentsNumberInfo"
                  type="number"
                  class="form-control form-control-lg"
                  placeholder="Choose number of students"
                  min="0"
                  step="1"
                />
              </div>
            </div> -->

            <div class="col-12">
              <div class="form-group w-100 mb-3">
                <label for="planInfo" class="form-labelform-label-light"
                  >Membership plan</label
                >
                <select
                  id="planInfo"
                  class="form-control form-control-lg"
                  v-model="selectedPlan"
                >
                  <option value="0">Choose plan</option>
                  <option v-for="plan in subscriptionPlans" :value="plan.id">
                    {{ plan.name }}
                  </option>
                </select>
              </div>
            </div>
            <!-- <div class="col-12">
              <div class="form-group w-100 mb-3">
                <label for="feeInfo" class="form-labelform-label-light"
                  >Joining fee</label
                >
                <select id="feeInfo" class="form-control form-control-lg">
                  <option>Choose joining fee</option>
                </select>
              </div>
            </div> -->
          </div>
        </div>
        <div class="card rounded-4 mt-4 px-3">
          <h5 class="py-4"><strong>Select start date</strong></h5>
          <input
            id="startDate"
            type="date"
            class="form-control form-control-lg"
            placeholder=""
            v-model="startDate"
          />
          <!-- <SyncoFilterByCalendar :classDate="classDate" /> -->
        </div>
        <div class="mt-4">
          <button
            class="btn btn-primary text-light btn-lg w-100"
            @click="togglePlanBreakdown"
          >
            Membership Plan Breakdown {{ !showPlanBreakdown ? '+' : '-' }}
          </button>
        </div>
        <div class="card rounded-4 mt-4 p-3" v-if="showPlanBreakdown">
          <div class="d-flex justify-content-between mb-3 flex-row">
            <span>Name</span>
            <span
              ><strong>{{ getSelectedPlan()?.name }}</strong></span
            >
          </div>
          <hr />
        </div>
      </div>
      <div class="col-8">
        <SyncoWeeklyClassesFormsParentForm :parent="parent">
          <template v-slot:internal_title>
            <div
              class="d-flex justify-content-between align-items-center flex-row"
            >
              <h5 class="m-0 py-4">
                <strong>Parent information</strong>
              </h5>
              <!-- <button
                type="button"
                class="btn btn-primary text-light"
                @click="addParent"
              >
                Add Parent
              </button> -->
            </div>
          </template>
        </SyncoWeeklyClassesFormsParentForm>

        <SyncoWeeklyClassesFormsStudentForm :student="student">
          <template v-slot:internal_title>
            <h5 class="py-4"><strong>Student information</strong></h5>
          </template>
          <template v-slot:additional_rows>
            <!-- <div class="row">
              <div class="col-6">
                <div class="form-group w-100 mb-3">
                  <label for="studentClass" class="form-labelform-label-light"
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
                  <label for="studentTime" class="form-labelform-label-light"
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
            </div> -->
          </template>
        </SyncoWeeklyClassesFormsStudentForm>

        <SyncoWeeklyClassesFormsEmergencyContactForm
          :emergencyContact="emergency_contact"
        >
          <template v-slot:internal_title>
            <h5 class="py-4">
              <strong>Emergency contact details</strong>
              <!-- <Icon name="ph:pencil-simple-line" /> -->
            </h5>
          </template>
        </SyncoWeeklyClassesFormsEmergencyContactForm>
        <!-- <div class="card rounded-4 mt-4 px-3">
          <div
            class="d-flex justify-content-between align-items-center flex-row"
          >
            <h5 class="m-0 py-4">
              <strong>Key information</strong>
            </h5>
          </div>
        </div> -->

        <div class="row mt-4 px-3">
          <div class="col-12 d-flex justify-content-end my-4 flex-row">
            <div class="">
              <button class="btn btn-outline-secondary btn-lg" @click="cancel">
                Cancel
              </button>
            </div>
            <div class="px-4">
              <button class="btn btn-primary text-light btn-lg" @click="book">
                Book Member
              </button>
              <!-- <button
                class="btn btn-primary text-light btn-lg"
                @click="toggleDirectDebit"
                data-bs-toggle="modal"
                data-bs-target="#directDebit"
              >
                Setup Direct Debit
              </button> -->
              <!-- <div
                id="directDebit"
                class="modal fade centered"
                tabindex="-1"
                aria-labelledby="setupDirectDebit"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header px-4">
                      <button
                        type="button"
                        class="btn btn-light bg-transparent"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                      <span id="setupDirectDebit" class="h4 modal-title">
                        <strong>Student Information</strong>
                      </span>
                      <div></div>
                    </div>
                    <div class="modal-body p-0">
                      <SyncoWeeklyClassesComponentsDirectDebit
                        :direct-debit="directDebit"
                        @toggle-direct-debit="toggleDirectDebit"
                      />
                    </div>
                    <div class="modal-footer border-0 px-4">
                      <button
                        type="button"
                        class="btn btn-primary text-light w-100"
                        data-bs-dismiss="modal"
                        aria-label="Set up Direct Debit"
                      >
                        Set up Direct Debit
                      </button>
                    </div>
                  </div>
                </div>
              </div> -->
            </div>
          </div>
        </div>
        <SyncoWeeklyClassesFormsCommentFormList
          :comments="comments"
          @add-comment="addComment"
        />
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useToast } from 'vue-toast-notification'
import { generalStore } from '~/stores'
import type { IComment } from '~/types/index'
import type {
  IGuardianCreate,
  IStudentCreate,
  IEmregencyContactCreate,
  IWeeklyClassesMemberCreate,
  ISubscriptionPlan,
} from '~/types/synco/index'

const router = useRouter()
const { $api } = useNuxtApp()
const toast = useToast()
const store = generalStore()
let isLoading = ref<boolean>(false)
let blockButtons = ref<boolean>(false)
const changeLoadingState = (state: boolean) => {
  isLoading.value = state
  blockButtons.value = state
}

let weekly_class_id = ref<number>(0)
let agent_id = ref<string>('')
let showPlanBreakdown = ref<boolean>(false)
let showSubscriptionCard = ref<boolean>(false)
let showCalculatorCard = ref<boolean>(false)
let showScriptCard = ref<boolean>(false)
let newComment = ref<string>('')

let parent = ref<IGuardianCreate>({
  id: '',
  first_name: '',
  last_name: '',
  email: '',
  phone_number: '',
  relationship_id: 0,
  referral_source_id: 0,
})
let student = ref<IStudentCreate>({
  id: '',
  first_name: '',
  last_name: '',
  dob: '',
  age: 0,
  gender_id: 0,
  medical_information_id: 0,
})
let emergency_contact = ref<IEmregencyContactCreate>({
  id: 0,
  first_name: '',
  last_name: '',
  phone_number: '',
  relationship_id: 0,
})
let comments = ref<Array<IComment>>([
  // {
  //   text: '',
  //   avatar: '',
  //   name: '',
  //   created: '',
  // },
])
let selectedPlan = ref<number>(0)
let startDate = ref<string>('')

let subscriptionPlans = ref<ISubscriptionPlan[]>(store.subscriptionPlans)

onMounted(async () => {
  console.log('pages/synco/weekly-classes/create/membership.vue')
  let queryClassId = router.currentRoute.value.query.class_id
  weekly_class_id.value = queryClassId
  let agentId = store.user?.id
  agent_id.value = agentId
  if (store.subscriptionPlans.length == 0) {
    store.getSubscriptionPlan().then(() => {
      subscriptionPlans.value = store.subscriptionPlans
    })
  }
})

const toggleSubscriptionCard = () => {
  showSubscriptionCard.value = !showSubscriptionCard.value
  showCalculatorCard.value = false
  showScriptCard.value = false
}
const toggleCalculatorCard = () => {
  showCalculatorCard.value = !showCalculatorCard.value
  showSubscriptionCard.value = false
  showScriptCard.value = false
}
const toggleScriptCard = () => {
  showScriptCard.value = !showScriptCard.value
  showSubscriptionCard.value = false
  showCalculatorCard.value = false
}
const togglePlanBreakdown = () => {
  showPlanBreakdown.value = !showPlanBreakdown.value
}

const cancel = () => {}

const book = () => {
  createData()
}

const addComment = (comment: string) => {
  newComment.value = comment
}

const createData = async () => {
  let data: IWeeklyClassesMemberCreate = {
    weekly_class_id: weekly_class_id.value,
    subscription_plan_price_id: selectedPlan.value,
    start_date: startDate.value,
    agent_id: agent_id.value,
    guardians: [
      {
        first_name: parent.value.first_name,
        last_name: parent.value.last_name,
        email: parent.value.email,
        phone_number: parent.value.phone_number,
        relationship_id: parent.value.relationship_id,
        referral_source_id: parent.value.referral_source_id,
      },
    ],
    students: [
      {
        first_name: student.value.first_name,
        last_name: student.value.last_name,
        dob: student.value.dob,
        age: student.value.age,
        gender_id: student.value.gender_id,
        medical_information_id: student.value.medical_information_id,
      },
    ],
    emergency_contact: [
      {
        first_name: emergency_contact.value.first_name,
        last_name: emergency_contact.value.last_name,
        phone_number: emergency_contact.value.phone_number,
        relationship_id: emergency_contact.value.relationship_id,
      },
    ],
    comments: [newComment.value],
  }
  console.log('data', data)
  try {
    changeLoadingState(true)
    const response = await $api.wcMembers.create(data)
    await router.push({ path: `/synco/weekly-classes/members` })
    console.log(response)
  } catch (error: any) {
    console.log(error)
    toast.error(error?.data?.messages ?? 'Error')
  } finally {
    changeLoadingState(false)
  }
}

const getSelectedPlan = (): ISubscriptionPlan | null => {
  let selected = subscriptionPlans.value.find((x) => x.id == selectedPlan.value)
  return !selected ? null : selected
}
</script>
<!-- <script>
const classes = ref([
  { label: 'Select from drop down', value: '' },
  { label: '4-7 years', value: 'Merchandise' },
])
const times = ref([
  { label: 'Automatic entry', value: '' },
  { label: '4-6', value: '4-6' },
])
const planBreakdown = ref([
  { label: 'Membership Plan', value: '12 Months' },
  { label: 'Monthly Subscription Fee', value: '£39.33 p/m' },
  { label: 'One-off Joining Fee', value: '£35.00' },
  { label: 'Number of lessons pro-rate', value: '2' },
  { label: 'Price per class per child', value: '£11.33' },
  { label: 'Cost of pro-rate lessons', value: '£23.66' },
])
export default {
  data: () => ({
    classes: classes,
    times: times,
    planBreakdown: planBreakdown,
    showPlanBreakdown: false,
    showDirectDebit: false,
    parent: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      relationToChild: '',
      marketingChannel: '',
    },
    student: {
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      age: '',
      gender: '',
      medicalInformation: '',
      class: '',
      time: '',
    },
    emergencyContact: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      relationToChild: '',
    },
    directDebit: {
      Product: {
        Name: '12 month membership plan (1 student)',
        Price: 39.99,
      },
      PersonalDetails: {
        FirstName: '',
        LastName: '',
        EmailAddress: '',
        BillingAddress: '',
      },
      BankDetails: {
        AccountHolderName: '',
        SortCode: null,
        AccountNumber: null,
        CanAuthoriseDirectDebits: false,
      },
    },
    classDate: new Date(),
  }),
  watch: {
    'student.dateOfBirth'(newDate, oldDate) {
      let dob = new Date(newDate)
      let today = new Date()
      let ageDifference = today.getTime() - dob.getTime()
      var ageDate = new Date(ageDifference)
      let age = Math.abs(ageDate.getUTCFullYear() - 1970)
      this.student.age = age
    },
  },
  methods: {
    addParent() {
      console.log('add parent')
    },
    addStudent() {
      console.log('add student')
    },
    toggleDirectDebit() {
      this.showDirectDebit = !this.showDirectDebit
    },
    cancel() {
      console.log('cancel')
    },
    togglePlanBreakdown() {
      this.showPlanBreakdown = !this.showPlanBreakdown
    },
  },
}
</script> -->
<style lang="scss" scoped>
.indicator {
  height: 2rem;
  width: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
