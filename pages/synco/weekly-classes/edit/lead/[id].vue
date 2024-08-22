<template>
  <NuxtLayout name="syncolayout" page-title="Lead Database">
    <div class="card bg-secondary rounded-4">
      <div
        class="card-body d-flex align-items-center justify-content-between p-3"
      >
        <NuxtLink class="h4 text-light m-0" to="/synco/weekly-classes/leads">
          <Icon name="material-symbols:arrow-back" class="me-2" />Update lead
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

    <div>
      <template v-if="!!parent">
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
      </template>

      <template v-if="!!student">
        <SyncoWeeklyClassesFormsStudentForm :student="student">
          <template v-slot:external_title>
            <h4 class="mt-4"><strong>Students</strong></h4>
          </template>
          <template v-slot:internal_title>
            <h5 class="py-4"><strong>Student information</strong></h5>
          </template>
          <!-- <template v-slot:additional_rows>
            <div class="row">
              <div class="col-6">
                <div class="form-group w-100 mb-3">
                  <label for="studentAoI" class="form-labelform-label-light"
                    >Activity of interest</label
                  >
                  <select
                    id="studentAoI"
                    class="form-control form-control-lg"
                    v-model="student.activityOfInterest"
                  >
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
          <template v-slot:footer>
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
      </template>

      <template v-if="!!emergency_contact">
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
                    @click="editLead"
                  >
                    Update Lead
                  </button>
                </div>
              </div>
            </div>
          </template>
        </SyncoWeeklyClassesFormsEmergencyContactForm>
      </template>

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
} from '~/types/synco/index'

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
let leadId = ref<number>(-1)
let createParent = ref<boolean>(false)
let parentName = ref<string>('')
let newComment = ref<string>('')
let parentExists = ref<boolean>(false)
let searched = ref<boolean>(false)
let searchedParent = ref<IGuardianByName[]>([])
let parent = ref<IGuardianCreate | null>(null)
let student = ref<IStudentCreate | null>(null)
let emergency_contact = ref<IEmregencyContactCreate | null>(null)
let comments = ref<Array<IComment>>([])
let activities = ref<IService[]>([])

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
  parentExists.value = !!parentInfo && parentInfo.length > 0
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

const editLead = async () => {
  if (!parent.value || !student.value || !emergency_contact.value) return
  let newLead: IWeeklyClassesLeadCreate = {
    weekly_class_id: leadId.value,
    guardians: [parent.value],
    students: [student.value],
    emergency_contacts: [emergency_contact.value],
    comments: [newComment.value],
  }
  console.log('add lead', newLead)
  await updateLead(newLead)
}
const cancel = () => {
  console.log('cancel')
}

onMounted(async () => {
  console.log('pages/synco/weekly-classes/create/lead.vue')
  let queryLeadId = router.currentRoute.value.params.id
  leadId.value = !!queryLeadId ? +queryLeadId : -1
  await getLeadById()
})

const getLeadById = async () => {
  try {
    changeLoadingState(true)
    const response = await $api.wcLeads.getById(leadId.value)
    console.log(response)
    let data = response?.data
    console.log(data)
    parent.value = {
      id: data.guardian.id,
      first_name: data.guardian.first_name,
      last_name: data.guardian.last_name,
      email: data.guardian.email,
      phone_number: data.guardian.phone_number,
      relationship_id: 0, //data.guardian.relationship.id,
      referral_source_id: 0, //data.guardian.referral_source.id,
    }
    student.value = {
      id: data.students[0].id,
      first_name: data.students[0].first_name,
      last_name: data.students[0].last_name,
      dob: '', //data.students[0].dob.split('T')[0],
      age: 0, //data.students[0].age,
      gender_id: 0, //data.students[0].gender.id,
      medical_information_id: 0, //data.students[0].medical_information.id,
    }
    emergency_contact.value = {
      id: data.emergencyContacts[0].id,
      first_name: data.emergencyContacts[0].first_name,
      last_name: data.emergencyContacts[0].last_name,
      phone_number: data.emergencyContacts[0].phone_number,
      relationship_id: data.emergencyContacts[0].relationship.id,
    }

    data.comments.forEach((x) => {
      comments.value.push({
        text: x.message,
        avatar: x.user.avatar_image.url,
        name: `${x.user.first_name} ${x.user.last_name}`,
        created: `${x.created_at}`,
      })
    })
  } catch (error: any) {
    console.log(error)
    toast.error(error?.data?.messages ?? 'Error')
  } finally {
    changeLoadingState(false)
  }
}

const updateLead = async (newLead: IWeeklyClassesLeadCreate) => {
  try {
    changeLoadingState(true)
    console.log(newLead)
    const response = await $api.wcLeads.update(leadId.value, newLead)
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

<!-- <script>
const activities = ref([
  { label: 'Select from drop down', value: '' },
  { label: 'Weekly classes', value: 'Weekly classes' },
  { label: 'One to one', value: 'One to one' },
  { label: 'Holiday camps', value: 'Holiday camps' },
  { label: 'Clubs', value: 'Clubs' },
  { label: 'Merchandise', value: 'Merchandise' },
])
const parentInformation = ref([
  {
    'First Name': 'John',
    'Last Name': 'Doe',
    Status: 'Active',
    Email: 'john.doe@gmail.com',
    'Gocardless ID': '123456789',
    Created: '01/01/2023',
    Address: 'The king Fahad Academy, East Acton Lane,London W3 7HD',
    'Phone number': '123 456 789',
  },
  {
    'First Name': 'John',
    'Last Name': 'Doe',
    Status: 'Active',
    Email: 'john.doe@gmail.com',
    'Gocardless ID': '123456789',
    Created: '01/01/2023',
    Address: 'The king Fahad Academy, East Acton Lane,London W3 7HD',
    'Phone number': '123 456 789',
    Students: [
      {
        'First Name': 'Erik',
        'Last Name': 'Doe',
        Age: '8',
        Gender: 'Masculine',
        'Date of Birth': '22/09/2016',
        'Activity of interest': 'Weekly classes',
      },
      {
        'First Name': 'Mark',
        'Last Name': 'Doe',
        Age: '10',
        Gender: 'Masculine',
        'Date of Birth': '24/03/2014',
        'Activity of interest': 'Weekly classes',
      },
    ],
  },
])
export default {
  data: () => ({
    parentName: '',
    parentExists: false,
    searched: false,
    parentInformation: parentInformation,
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
      activityOfInterest: '',
    },
    emergencyContact: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      relationToChild: '',
    },
    activities: activities,
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
    search() {
      this.searched = false
      if (!this.parentName) return
      this.searched = true
      let parentInfo = this.parentInformation.filter((pi) =>
        `${pi['First Name']} ${pi['Last Name']}`
          .toLowerCase()
          .includes(this.parentName.toLowerCase()),
      )
      this.parentExists = parentInfo.length > 0
    },
    addParent() {
      console.log('add parent')
    },
    addStudent() {
      console.log('add student')
    },
    create() {
      this.createParent = true
    },
    addLead() {
      console.log('add lead')
    },
    cancel() {
      console.log('cancel')
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
