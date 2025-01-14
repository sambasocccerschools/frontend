<template>
  <NuxtLayout name="syncolayout" page-title="Booking Form">
    <div class="card bg-secondary rounded-4">
      <div
        class="card-body d-flex align-items-center justify-content-between p-3"
      >
        <NuxtLink class="h4 text-light m-0" to="/synco/weekly-classes/leads">
          <Icon name="material-symbols:arrow-back" class="me-2" />Book a Free
          Trial
        </NuxtLink>

        <div class="d-flex align-items-center">
          <div class="dropdown">
            <button
              class="btn dropdown-toggle btn-light rounded-circle bg-light indicator h4 mb-0 p-0"
              type="button"
              data-toggle="dropdown"
              :aria-expanded="showSubscriptionCard"
              @click="toggleSubscriptionCard"
            >
              <Icon name="mingcute:currency-pound-2-fill" />
            </button>
            <template v-if="showSubscriptionCard">
              <!-- <SyncoWeeklyClassesComponentsSubscriptionPlanCard
                @toggleSubscriptionCard="toggleSubscriptionCard"
              /> -->
            </template>
          </div>
          <div class="dropdown ms-3">
            <button
              class="btn dropdown-toggle btn-light rounded-circle bg-light indicator h4 mb-0 p-0"
              type="button"
              data-toggle="dropdown"
              :aria-expanded="showCalculatorCard"
              @click="toggleCalculatorCard"
            >
              <Icon name="ph:calculator" />
            </button>
            <template v-if="showCalculatorCard">
              <div
                class="dropdown-menu dropdown-menu-right card rounded-4 bg-secondary position-absolute p-2 shadow-lg"
                style="right: -50px; top: 45px"
              >
                <!-- <SyncoCalculator /> -->
              </div>
            </template>
          </div>
          <div class="dropdown ms-3">
            <button
              class="btn dropdown-toggle btn-light rounded-circle bg-light indicator h4 mb-0 p-0"
              type="button"
              data-toggle="dropdown"
              :aria-expanded="showScriptCard"
              @click="toggleScriptCard"
            >
              <Icon name="mdi:document" />
            </button>
            <template v-if="showScriptCard">
              <!-- <div
                class="dropdown-menu dropdown-menu-right card rounded-4 position-absolute shadow-lg"
                style="width: 360px; right: 0px; top: 45px"
              >
                <div
                  class="d-flex align-items-center justify-content-center h-100 flex-row"
                >
                  <div
                    class="card-header d-flex flex-column justify-content-between"
                  >
                    <span class="h5 card-title"
                      ><strong>Phone Script</strong></span
                    >
                    <p class="card-body">
                      In publishing and graphic design, Lorem ipsum is a
                      placeholder text commonly used to demonstrate the visual
                      form of a document or a typeface.
                    </p>
                  </div>
                </div>
              </div> -->
            </template>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-4">
        <div class="card rounded-4 mt-4 px-3">
          <h5 class="py-4"><strong>Enter information</strong></h5>
          <div class="row">
            <div class="col-12">
              <div class="form-group w-100 mb-3">
                <label for="venueInfo" class="form-labelform-label-light"
                  >Venue</label
                >
                <select
                  id="venueInfo"
                  v-model="venue_id"
                  class="form-control form-control-lg"
                >
                  <option value="0">Choose venue</option>
                  <option
                    v-for="venue in venues"
                    :key="venue.id"
                    :value="venue.id"
                  >
                    {{ venue.name }}
                  </option>
                </select>
              </div>
            </div>
            <!-- <div class="col-12">
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
          </div>
        </div>
        <div class="card rounded-4 mt-4 px-3 pb-3">
          <h5 class="py-4"><strong>Select trial date</strong></h5>
          <p>{{ startDate }}</p>
          <SyncoCustomCalendar
            :allowed-day="1"
            @update:start-date="startDate = $event"
          />
        </div>
      </div>

      <div class="col-8">
        <SyncoWeeklyClassesFormsStudentForm :student="student">
          <template #internal_title>
            <h5 class="py-4"><strong>Student information</strong></h5>
          </template>
          <!-- <template #additional_rows>
            <div class="row">
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
            </div>
          </template> -->
        </SyncoWeeklyClassesFormsStudentForm>

        <SyncoWeeklyClassesFormsParentForm :parent="parent">
          <template #internal_title>
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

        <SyncoWeeklyClassesFormsEmergencyContactForm
          :emergency-contact="emergency_contact"
        >
          <template #internal_title>
            <h5 class="py-4"><strong>Emergency contact details</strong></h5>
            <div class="row mb-4">
              <div class="col-12">
                <div class="form-check">
                  <input
                    id="sameAsAbove"
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    :disabled="!filledParentInfo"
                    @input="copyParentInformation"
                  />
                  <label class="form-check-label" for="sameAsAbove">
                    Fill same as above
                  </label>
                </div>
              </div>
            </div>
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
              <button
                class="btn btn-primary text-light btn-lg"
                @click="bookTrial"
              >
                Book FREE Trial
              </button>
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
  IAvailableVenueObject,
} from '~/types/synco/index'

const router = useRouter()
const { $api } = useNuxtApp()
const toast = useToast()
const store = generalStore()
const isLoading = ref<boolean>(false)
const blockButtons = ref<boolean>(false)
const changeLoadingState = (state: boolean) => {
  isLoading.value = state
  blockButtons.value = state
}

const weekly_class_id = ref<number>(0)
const venue_id = ref<string>('')
const agent_id = ref<string>('')
const showSubscriptionCard = ref<boolean>(false)
const showCalculatorCard = ref<boolean>(false)
const showScriptCard = ref<boolean>(false)
const newComment = ref<string>('')
const filledParentInfo = ref<boolean>(false)

const parent = ref<IGuardianCreate>({
  id: '',
  first_name: '',
  last_name: '',
  email: '',
  phone_number: '',
  relationship_code: 0,
  referral_source_code: 0,
})
const student = ref<IStudentCreate>({
  id: '',
  first_name: '',
  last_name: '',
  dob: '',
  age: 0,
  gender_id: 0,
  medical_information: '',
})
const emergency_contact = ref<IEmregencyContactCreate>({
  id: 0,
  first_name: '',
  last_name: '',
  phone_number: '',
  relationship_id: 0,
})
const comments = ref<Array<IComment>>([
  // {
  //   text: '',
  //   avatar: '',
  //   name: '',
  //   created: '',
  // },
])

const startDate = ref<string>('')

const venues = ref<IAvailableVenueObject[]>(store.availableVenues)
console.log(venues)

onMounted(async () => {
  console.log('pages/synco/weekly-classes/create/free-trial.vue')
  const queryClassId = router.currentRoute.value.query.class_id
  if (queryClassId) weekly_class_id.value = +queryClassId
  const queryVenueId = router.currentRoute.value.query.venue_id
  if (queryVenueId) venue_id.value = queryVenueId.toString()
  const agentId = store.user?.id
  if (agentId) agent_id.value = agentId

  filledParentInfo.value = isParentInfoFilled()
})

watch(
  parent,
  () => {
    filledParentInfo.value = isParentInfoFilled()
  },
  { deep: true },
)

const updateStartDate = (date: string) => {
  startDate.value = date
}

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

const cancel = () => {}

const bookTrial = () => {
  createData()
}

const addComment = (comment: string) => {
  newComment.value = comment
}

const copyParentInformation = () => {
  emergency_contact.value.first_name = parent.value.first_name
  emergency_contact.value.last_name = parent.value.last_name
  emergency_contact.value.phone_number = parent.value.phone_number
  emergency_contact.value.relationship_id = parent.value.relationship_code
}

const isParentInfoFilled = (): boolean => {
  const requiredFields: Array<keyof typeof parent.value> = [
    'first_name',
    'last_name',
    'email',
    'phone_number',
    'relationship_code',
  ]

  return requiredFields.every((field) => Boolean(parent.value[field]))
}

const createData = async () => {
  const data: any = {
    weekly_class_id: weekly_class_id.value,
    // agent_id: agent_id.value,
    free_trial_status_code: 'PENDING_FTS',
    trial_date: startDate.value,
    students: [
      {
        first_name: student.value.first_name,
        last_name: student.value.last_name,
        dob: student.value.dob,
        age: student.value.age,
        gender: student.value.gender_id,
        medical_information: student.value.medical_information,
      },
    ],
    guardians: [
      {
        first_name: parent.value.first_name,
        last_name: parent.value.last_name,
        email: parent.value.email,
        phone_number: parent.value.phone_number,
        relationship_code: parent.value.relationship_code,
        referral_source_code: parent.value.referral_source_code,
      },
    ],
    emergency_contacts: [
      {
        first_name: emergency_contact.value.first_name,
        last_name: emergency_contact.value.last_name,
        phone_number: emergency_contact.value.phone_number,
        relationship_id: emergency_contact.value.relationship_id,
      },
    ],
    // comments: [newComment.value],
  }
  try {
    changeLoadingState(true)
    console.log(data)
    const response = await $api.wcFreeTrials.createFromFindAClass(data)
    await router.push({ path: `/synco/weekly-classes/trials` })
    console.log(response)
  } catch (error: any) {
    console.log(error)
    toast.error(error?.data?.messages ?? 'Error')
  } finally {
    changeLoadingState(false)
  }
}
</script>

<style lang="scss" scoped>
.indicator {
  height: 2rem;
  width: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
