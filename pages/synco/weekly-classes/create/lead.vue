<template>
  <NuxtLayout name="syncolayout" page-title="Lead Database">
    <div class="card bg-secondary rounded-4">
      <div
        class="card-body d-flex align-items-center justify-content-between p-3"
      >
        <NuxtLink class="h4 text-light m-0" to="/synco/weekly-classes/leads">
          <Icon name="material-symbols:arrow-back" class="me-2" />Add a new lead
        </NuxtLink>

        <div class="d-flex align-items-center">
          <div class="indicator rounded-circle bg-light h4 mb-0">
            <Icon name="mingcute:currency-pound-2-fill" />
          </div>
          <div class="indicator rounded-circle bg-light h4 mb-0 ms-3">
            <Icon name="ion:calendar" />
          </div>
          <div class="indicator rounded-circle bg-light h4 mb-0 ms-3">
            <Icon name="mdi:document" />
          </div>
        </div>
      </div>
    </div>
    <template v-if="!createParent">
      <div class="card rounded-4 mt-4">
        <div
          class="card-body d-flex flex-column align-items-start justify-content-start p-3"
        >
          <h4 class="mb-3"><strong>Parent information</strong></h4>

          <div class="row w-100">
            <div class="col-12 col-md-7">
              <div class="d-flex align-items-center w-100">
                <div class="form-group w-100 mb-3">
                  <label for="parentName" class="form-labelform-label-light"
                    >Parent name</label
                  >
                  <input
                    id="parentName"
                    type="text"
                    class="form-control form-control-lg"
                    v-model="parentName"
                  />
                </div>
                <button
                  class="btn btn-primary text-light btn-lg mx-4"
                  @click="search"
                >
                  Search
                </button>
              </div>
            </div>
          </div>

          <template v-if="searched && parentExists">
            <div
              v-for="(parent, pindex) in searchedParent"
              class="card rounded-4 w-100 mb-4 border"
              :key="pindex"
            >
              <SyncoWeeklyClassesParentListItem
                :parent="parent"
                @select-parent="selectParent"
              />
            </div>
          </template>
          <div v-else-if="!parentExists && searched" class="row w-100 m-0 mt-2">
            <div class="mt-4 p-0">
              <h4>Parent not found. Do you want to create a new parent?</h4>
              <button
                class="btn btn-primary text-light btn-lg my-2"
                @click="create"
              >
                Yes, create new parent
              </button>
            </div>
          </div>
        </div>
      </div>
      <div v-if="parentExists" class="row w-100 m-0 mt-4">
        <div class="mt-4 p-0">
          <h4>
            Didn't find what you were looking for? Create a new parent with the
            button below.
          </h4>
          <button
            class="btn btn-primary text-light btn-lg my-2"
            @click="create"
          >
            Create new parent
          </button>
        </div>
      </div>
    </template>

    <div v-else :key="updateKey">
      <SyncoWeeklyClassesFormsParentForm :parent="parent">
        <template v-slot:external_title>
          <h4 class="mt-4"><strong>Parents</strong></h4>
        </template>
        <template v-slot:internal_title>
          <h5 class="py-4"><strong>Parent information</strong></h5>
        </template>
        <!-- <template v-slot:footer>
          <div class="card rounded-4 mt-4 px-3">
            <div class="d-flex justify-content-between my-4">
              <button
                class="btn btn-primary text-light btn-lg"
                @click="addParent"
              >
                + Add new parent
              </button>
            </div>
          </div>
        </template> -->
      </SyncoWeeklyClassesFormsParentForm>

      <SyncoWeeklyClassesFormsStudentForm :student="student">
        <template v-slot:external_title>
          <h4 class="mt-4"><strong>Students</strong></h4>
        </template>
        <template v-slot:internal_title>
          <h5 class="py-4"><strong>Student information</strong></h5>
        </template>
        <template v-slot:additional_rows>
          <div class="row">
            <div class="col-6">
              <div class="form-group w-100 mb-3">
                <label for="studentAoI" class="form-labelform-label-light"
                  >Activity of interest</label
                >
                <select
                  id="studentAoI"
                  class="form-control form-control-lg"
                  v-model="weekly_class_id"
                >
                  <option value="0">Select a class</option>
                  <option
                    v-for="(activity, index) in activities"
                    :value="activity.value"
                    :key="index"
                  >
                    {{ activity.label }}
                  </option>
                </select>
              </div>
            </div>
            <div class="col-6"></div>
          </div>
        </template>
        <!-- <template v-slot:footer>
          <div class="card rounded-4 mt-4 px-3">
            <div class="d-flex justify-content-between my-4">
              <button
                class="btn btn-primary text-light btn-lg"
                @click="addStudent"
              >
                + Add new student
              </button>
            </div>
          </div>
        </template> -->
      </SyncoWeeklyClassesFormsStudentForm>

      <SyncoWeeklyClassesFormsEmergencyContactForm
        :emergencyContact="emergency_contact"
      >
        <template v-slot:external_title>
          <h4 class="mt-4"><strong>Emergency contact</strong></h4>
        </template>
        <template v-slot:internal_title>
          <h5 class="py-4"><strong>Emergency contact details</strong></h5>
          <div class="row mb-4">
            <div class="col-12">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="sameAsAbove"
                  @input="copyParentInformation"
                />
                <label class="form-check-label" for="sameAsAbove">
                  Fill same as above
                </label>
              </div>
            </div>
          </div>
        </template>
        <template v-slot:footer>
          <div class="row mt-4 px-3">
            <div class="col-12 d-flex my-4 flex-row">
              <div class="">
                <button
                  class="btn btn-outline-secondary btn-lg"
                  @click="cancel"
                >
                  Cancel
                </button>
              </div>
              <div class="px-4">
                <button
                  class="btn btn-primary text-light btn-lg"
                  @click="addLead"
                >
                  Add Lead
                </button>
              </div>
            </div>
          </div>
        </template>
      </SyncoWeeklyClassesFormsEmergencyContactForm>

      <SyncoWeeklyClassesFormsCommentFormList
        :comments="comments"
        @add-comment="addComment"
      />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useToast } from 'vue-toast-notification'
import type {
  IGender,
  IMedicalInformation,
  IRelationship,
  IReferralSource,
  ILeadStatus,
  IStudentByName,
  IGuardianByName,
  IEmregencyContactByName,
  IService,
  IComment,
} from '~/types/index'
import type {
  IGuardianCreate,
  IStudentCreate,
  IEmregencyContactCreate,
  IWeeklyClassesLeadCreate,
  IAutoCompleteObject,
} from '~/types/synco/index'

import { generalStore } from '~/stores'
const store = generalStore()

const router = useRouter()
const { $api } = useNuxtApp()
const toast = useToast()
let isLoading = ref<boolean>(false)
let blockButtons = ref<boolean>(false)
const changeLoadingState = (state: boolean) => {
  isLoading.value = state
  blockButtons.value = state
}

let updateKey = ref<number>(0)
let weekly_class_id = ref<number>(0)
let createParent = ref<boolean>(false)
let parentName = ref<string>('')
let newComment = ref<string>('')
let parentExists = ref<boolean>(false)
let searched = ref<boolean>(false)
let searchedParent = ref<IGuardianByName[]>([])
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
  medical_information: '',
})
let emergency_contact = ref<IEmregencyContactCreate>({
  id: 0,
  first_name: '',
  last_name: '',
  phone_number: '',
  relationship_id: 0,
})
let comments = ref<Array<IComment>>([
  {
    text: '',
    avatar: '',
    name: '',
    created: '',
  },
])
// let activities = ref<IService[]>([])

const search = async () => {
  searched.value = false
  if (!parentName.value) return
  searched.value = true
  console.log('1')
  await getGuardianByName(parentName.value)
  console.log('2')
  let parentInfo = searchedParent.value.filter((pi) =>
    `${pi.first_name} ${pi.last_name}`
      .toLowerCase()
      .includes(parentName.value.toLowerCase()),
  )
  console.log('3', parentInfo)
  parentExists.value = !!parentInfo && parentInfo.length
}

const selectParent = (guardian: IGuardianByName) => {
  parent.value = {
    id: guardian.id,
    email: guardian.email,
    first_name: guardian.first_name,
    last_name: guardian.last_name,
    phone_number: guardian.phone_number,
    referral_source_id: guardian.referral_source.id,
    relationship_id: guardian.relationship.id,
  }
  createParent.value = true
}

const addParent = () => {
  console.log('add parent')
}
const addStudent = () => {
  console.log('add student')
}

const copyParentInformation = (event: Event) => {
  console.log(event.target?.checked)
  if (event.target?.checked) {
    let guardian = parent.value
    emergency_contact.value = {
      id: 0,
      first_name: guardian.first_name,
      last_name: guardian.last_name,
      phone_number: guardian.phone_number,
      relationship_id: guardian.relationship_id,
    }
  } else {
    emergency_contact.value = {
      id: 0,
      first_name: '',
      last_name: '',
      phone_number: '',
      relationship_id: 0,
    }
  }
  updateKey.value++
}

const create = () => {
  createParent.value = true
}
const addLead = async () => {
  let newLead: IWeeklyClassesLeadCreate = {
    weekly_class_id: null,
    guardians: [parent.value],
    students: [student.value],
    emergency_contacts: [emergency_contact.value],
    comments: [newComment.value],
  }
  console.log('add lead', newLead)
  await createLead(newLead)
}
const cancel = async () => {
  await router.push({ path: `/synco/weekly-classes/leads` })
}
let venues = store.availableVenues

const activities = computed(() => {
  console.log(venues)
  let classes: IAutoCompleteObject[] = []
  venues.forEach((venue) => {
    if (!venue.classesByYear) return
    venue.classesByYear.forEach((years) => {
      if (!years.classes) return
      years.classes.forEach((yearClass) => {
        classes.push({
          label: `${years.year} - ${yearClass.name}`,
          value: `${yearClass.id}`,
        })
      })
    })
  })
  console.log(classes)
  return classes
})

onMounted(async () => {
  console.log('pages/synco/weekly-classes/create/lead.vue')
  // await getWeeklyClasses()
  // await getSeasons()

  await store.fetchAllData()
  await store.getAvailableVenues('weekly-classes')
})

const getGuardianByName = async (name: string) => {
  try {
    changeLoadingState(true)
    const response = await $api.datasets.getGuardianByName(name)
    console.log(response)
    searchedParent.value = response?.data
  } catch (error: any) {
    console.log(error)
    toast.error(error?.data?.messages ?? 'Error')
    searchedParent.value = []
  } finally {
    changeLoadingState(false)
  }
}

const createLead = async (newLead: IWeeklyClassesLeadCreate) => {
  try {
    changeLoadingState(true)
    newLead.weekly_class_id = weekly_class_id.value
    const response = await $api.wcLeads.create(newLead)
    await router.push({ path: `/synco/weekly-classes/leads` })
    console.log(response)
  } catch (error: any) {
    console.log(error)
    toast.error(error?.data?.messages ?? 'Error')
  } finally {
    changeLoadingState(false)
  }
}

const addComment = (comment: string) => {
  newComment.value = comment
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
