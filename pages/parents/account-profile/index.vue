<script setup lang="ts">
import type {
  IStudent,
  IEmergencyContact,
  IParent,
  IFeedback,
  ISkillTrackerCard,
  ISkillItem,
} from '~/types/index'

const layout = 'parentlayout'

const router = useRouter()

let selection = ref<string>('Parent Profile')
let parent = ref<IParent>({
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  relationToChild: '',
  marketingChannel: '',
})
let emergencyContact = ref<IEmergencyContact>({
  firstName: '',
  lastName: '',
  phoneNumber: '',
  relationToChild: '',
})

let students = ref<IStudent[]>([
  {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    age: 0,
    gender: '',
    medicalInformation: '',
    activityOfInterest: '',
  },
  {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    age: 0,
    gender: '',
    medicalInformation: '',
    activityOfInterest: '',
  },
])

let feedbackItem = ref<IFeedback>({
  SubmittedDate: '01/06/2023',
  FeedbackType: 'Negative',
  Venue: 'Acton',
  Category: 'Time',
  Notes: 'I think is too much time for my kid',
  User: 'Jaffar',
  Status: 'In process',
}).value
let feedbackList = ref<IFeedback[]>([
  feedbackItem,
  feedbackItem,
  feedbackItem,
  feedbackItem,
  feedbackItem,
  feedbackItem,
  feedbackItem,
  feedbackItem,
  feedbackItem,
  feedbackItem,
])
let showFilter = ref<boolean>(false)
let showBookings = ref<boolean>(false)

let studentList = ref<string[]>(['John Smith', 'Michael Smith'])
let selectedStudent = ref<string>('John Smith')
let difficulty = ref<string>('Beginner')

let completedSkill = ref<ISkillItem>({
  Title: 'Video 1',
  Brief:
    'Lorem ipsum dolor sit amet consectetur. Maecenas dignissim euismod id ornare fringilla ut tincidunt venenatis eget. Adipiscing pellentesque nisi tincidunt pellentesque elit pellentesque.',
  Progress: 100,
  Duration: '45 min',
  Type: 'Ability',
  Difficulty: 'Easy',
  Abilities: [
    "Isn't good with the left foot",
    'Improve in control the ball with the left foot',
    'Shooting with the left foot',
  ],
  Status: 'Completed',
}).value
let pendingSkill = ref<ISkillItem>({
  Title: 'Video 2',
  Brief:
    'Lorem ipsum dolor sit amet consectetur. Maecenas dignissim euismod id ornare fringilla ut tincidunt venenatis eget. Adipiscing pellentesque nisi tincidunt pellentesque elit pellentesque.',
  Progress: 78,
  Duration: '45 min',
  Type: 'Ability',
  Difficulty: 'Easy',
  Abilities: [
    "Isn't good with the left foot",
    'Improve in control the ball with the left foot',
    'Shooting with the left foot',
  ],
  Status: 'Pending',
}).value
let newSkill = ref<ISkillItem>({
  Title: 'Video 3',
  Brief:
    'Lorem ipsum dolor sit amet consectetur. Maecenas dignissim euismod id ornare fringilla ut tincidunt venenatis eget. Adipiscing pellentesque nisi tincidunt pellentesque elit pellentesque.',
  Progress: 0,
  Duration: '45 min',
  Type: 'Ability',
  Difficulty: 'Easy',
  Abilities: [
    "Isn't good with the left foot",
    'Improve in control the ball with the left foot',
    'Shooting with the left foot',
  ],
  Status: 'Pending',
}).value

let skillItemComplete = ref<ISkillTrackerCard>({
  Title: 'Six ways to manipulate the ball with a left foot or your know',
  Duration: '45 min',
  Skills: [
    completedSkill,
    pendingSkill,
    newSkill,
    newSkill,
    newSkill,
    newSkill,
    newSkill,
  ],
  Difficulty: 'Beginner',
  Progress: 100,
  Status: 'Completed',
}).value
let skillItemPrending = ref<ISkillTrackerCard>({
  Title: 'Six ways to manipulate the ball with a left foot or your know',
  Duration: '45 min',
  Skills: [
    completedSkill,
    pendingSkill,
    newSkill,
    newSkill,
    newSkill,
    newSkill,
    newSkill,
  ],
  Difficulty: 'Beginner',
  Progress: 78,
  Status: 'Pending',
}).value
let skillsList = ref<ISkillTrackerCard[]>([
  skillItemComplete,
  skillItemPrending,
  skillItemComplete,
  skillItemComplete,
  skillItemComplete,
  skillItemPrending,
  skillItemComplete,
  skillItemComplete,
  skillItemComplete,
  skillItemComplete,
  skillItemPrending,
])

let selectedSkill = ref<ISkillTrackerCard | null>(null)

let ServiceHistoryAccountCardHeaders = [
  {
    Status: 'Active',
    Color: '#43BE4F',
  },
  {
    Status: 'Waiting List',
    Color: '#A4A5A6',
  },
]
const selectInformation = (selected: string) => {
  selection.value = selected
}

const toggleFilter = () => {
  showFilter.value = !showFilter.value
}
const toggleBooking = () => {
  showBookings.value = !showBookings.value
}

const addBooking = async (booking: string) => {
  let path = ''
  switch (booking) {
    case 'waiting-list':
      path = '/synco/weekly-classes/create/waiting-list'
      break
    case 'free-trial':
      path = '/synco/weekly-classes/create/free-trial'
      break
    case 'membership':
      path = '/synco/weekly-classes/create/membership'
      break
    default:
      break
  }
  // await router.push({ path: `${path}` })
}

const selectStudent = (selected: string) => {
  selectedStudent.value = selected
}
</script>
<template>
  <NuxtLayout :name="layout" page-title="Account Information">
    <!-- Some ID -->
    <div class="d-flex align-items-center justify-content-between flex-row">
      <div class="card rounded-3 d-flex flex-row p-1">
        <button
          type="button"
          class="btn mx-2"
          :class="selection == 'Parent Profile' ? 'btn-primary text-light' : ''"
          @click="selectInformation('Parent Profile')"
        >
          Parent Profile
        </button>
        <button
          type="button"
          class="btn mx-2"
          :class="
            selection == 'Student Profile' ? 'btn-primary text-light' : ''
          "
          @click="selectInformation('Student Profile')"
        >
          Child's Profile
        </button>
        <button
          type="button"
          class="btn mx-2"
          :class="
            selection == 'Service History' ? 'btn-primary text-light' : ''
          "
          @click="selectInformation('Service History')"
        >
          Service History
        </button>
        <button
          type="button"
          class="btn mx-2"
          :class="selection == 'Feedback' ? 'btn-primary text-light' : ''"
          @click="selectInformation('Feedback')"
        >
          Feedback
        </button>
        <button
          type="button"
          class="btn mx-2"
          :class="selection == 'Rewards' ? 'btn-primary text-light' : ''"
          @click="selectInformation('Skills')"
        >
          Skills tracker
        </button>
      </div>
      <template v-if="selection == 'Service History'">
        <div class="d-flex align-items-center flex-row p-1">
          <div
            class="card rounded-3 d-flex align-items-center mx-2 flex-row p-1"
          >
            <Icon
              name="ph:star"
              class="rounded-circle bg-success text-warning"
            />
            <span class="mx-1">You Collected 600 Points</span>
            <button type="button" class="btn btn-success text-light shadow-sm">
              See More Here
            </button>
          </div>
          <div class="d-flex flex-row p-1">
            <div class="dropdown">
              <button
                type="button"
                class="btn btn-light mx-2 border bg-white"
                @click="toggleFilter"
                data-toggle="dropdown"
                :aria-expanded="showFilter"
                data-display="static"
              >
                <Icon name="ph:faders" /> Filters
              </button>
              <div
                class="dropdown-menu dropdown-menu-right card rounded-3 position-absolute py-0 shadow-lg"
                v-if="showFilter"
                style="width: 510px; right: -100px; top: 70px"
              >
                <div
                  class="card-header d-flex justify-content-between align-items-center"
                >
                  <h5 class="card-title">Filter</h5>
                  <button class="btn btn-success text-light shadow-sm">
                    <Icon name="octicon:settings" class="me-2" />Apply Filter
                  </button>
                </div>
                <div class="card-body">
                  <!-- Choose Type -->
                  <div class="bg-light rounded-4 mb-5 px-3 py-2">
                    <label for="" class="form-label">Choose type</label>
                    <div class="container">
                      <div class="row row-cols-3">
                        <div class="form-check col">
                          <input
                            id="allTime"
                            class="form-check-input"
                            type="checkbox"
                            name="filter-type"
                          />
                          <label class="form-check-label" for="allTime">
                            All time
                          </label>
                        </div>
                        <div class="form-check col">
                          <input
                            id="allPurchases"
                            class="form-check-input"
                            type="checkbox"
                            name="filter-type"
                          />
                          <label class="form-check-label" for="allPurchases">
                            All purchases
                          </label>
                        </div>
                        <div class="form-check col">
                          <input
                            id="weeklyClasses"
                            class="form-check-input"
                            type="checkbox"
                            name="filter-type"
                          />
                          <label class="form-check-label" for="weeklyClasses">
                            Weekly Classes
                          </label>
                        </div>
                        <div class="form-check col">
                          <input
                            id="club"
                            class="form-check-input"
                            type="checkbox"
                            name="filter-type"
                          />
                          <label class="form-check-label" for="club">
                            Club
                          </label>
                        </div>
                        <div class="form-check col">
                          <input
                            id="oneToOne"
                            class="form-check-input"
                            type="checkbox"
                            name="filter-type"
                          />
                          <label class="form-check-label" for="oneToOne">
                            One to One
                          </label>
                        </div>
                        <div class="form-check col">
                          <input
                            id="merchandise"
                            class="form-check-input"
                            type="checkbox"
                            name="filter-type"
                          />
                          <label class="form-check-label" for="merchandise">
                            Merchandise
                          </label>
                        </div>
                        <div class="form-check col">
                          <input
                            id="birthday"
                            class="form-check-input"
                            type="checkbox"
                            name="filter-type"
                          />
                          <label class="form-check-label" for="birthday">
                            Birthday
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Calendar Selector  -->
                  <!-- <SyncoFilterByCalendar /> -->
                </div>
              </div>
            </div>
            <div class="dropdown">
              <button
                type="button"
                class="btn btn-success text-light dropdown-toggle mx-2"
                @click="toggleBooking"
                data-toggle="dropdown"
                :aria-expanded="showBookings"
                data-display="static"
              >
                + Add booking
              </button>
              <div
                class="position-absolute card rounded-4 bg-white p-4 shadow-lg"
                v-if="showBookings"
                style="right: 0px; top: 40px; z-index: 1000"
              >
                <button
                  class="dropdown-item my-2"
                  @click="addBooking('waiting-list')"
                >
                  Add to Waiting List
                </button>
                <button
                  class="dropdown-item my-2"
                  @click="addBooking('free-trial')"
                >
                  Book Free Trial
                </button>
                <button
                  class="dropdown-item my-2"
                  @click="addBooking('membership')"
                >
                  Book Membership
                </button>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template v-else-if="selection == 'Student Profile'">
        <div class="d-flex flex-row p-1" style="margin-left: auto">
          <button type="button" class="btn btn-success text-light mx-2">
            + Add new student
          </button>
        </div>
      </template>
      <template v-else-if="selection == 'Parent Profile'">
        <div class="d-flex flex-row p-1" style="margin-left: auto">
          <!-- <button type="button" class="btn btn-success text-light mx-2">
            + Add new Parent
          </button> -->
        </div>
      </template>
      <template v-else-if="selection == 'Feedback'">
        <div class="d-flex flex-row p-1" style="margin-left: auto">
          <button type="button" class="btn btn-success text-light mx-2">
            + Add Feedback
          </button>
        </div>
      </template>
    </div>

    <div>
      <template v-if="selection == 'Parent Profile'">
        <SyncoWeeklyClassesFormsParentForm :parent="parent">
          <template v-slot:internal_title>
            <div
              class="d-flex justify-content-between align-items-center flex-row"
            >
              <h5 class="m-0 py-4">
                <strong>Parent information</strong>
                <Icon name="ph:pencil-simple-line" />
              </h5>
            </div>
          </template>
        </SyncoWeeklyClassesFormsParentForm>
        <SyncoWeeklyClassesFormsEmergencyContactForm
          :emergencyContact="emergencyContact"
        >
          <template v-slot:internal_title>
            <h5 class="py-4">
              <strong>Emergency contact details</strong>
              <Icon name="ph:pencil-simple-line" />
            </h5>
          </template>
        </SyncoWeeklyClassesFormsEmergencyContactForm>
        <div class="d-flex justify-content-end my-4 flex-row">
          <div class="mx-4">
            <button type="button" class="btn btn-outline-danger">Delete</button>
          </div>
          <div>
            <button type="button" class="btn btn-primary text-light">
              Save
            </button>
          </div>
        </div>
      </template>

      <template v-else-if="selection == 'Student Profile'">
        <div class="d-flex flex-column">
          <template v-for="student in students">
            <SyncoWeeklyClassesFormsStudentForm :student="student">
              <template v-slot:internal_title>
                <h5 class="py-4">
                  <strong>Student 1 information</strong>
                  <Icon name="ph:pencil-simple-line" />
                </h5>
              </template>
            </SyncoWeeklyClassesFormsStudentForm>
          </template>
        </div>
        <div class="d-flex justify-content-end my-4 flex-row">
          <div class="mx-4">
            <button type="button" class="btn btn-outline-danger">Delete</button>
          </div>
          <div>
            <button type="button" class="btn btn-primary text-light">
              Save
            </button>
          </div>
        </div>
      </template>

      <template v-else-if="selection == 'Service History'">
        <ParentsComponentsAccountInformationServiceHistory
          :header="ServiceHistoryAccountCardHeaders[1]"
        />
      </template>

      <template v-else-if="selection == 'Feedback'">
        <div class="rounded-4 mt-4">
          <table class="table">
            <thead>
              <tr class="">
                <th></th>
                <th>Date submitted</th>
                <th>Type of feedback</th>
                <th>Venue</th>
                <th>Category</th>
                <th>Notes</th>
                <th>User</th>
                <th>Status</th>
                <!-- <th>Actions</th> -->
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in feedbackList" style="vertical-align: middle">
                <td><input type="checkbox" /></td>
                <td>{{ item.SubmittedDate }}</td>
                <td>{{ item.FeedbackType }}</td>
                <td>{{ item.Venue }}</td>
                <td>{{ item.Category }}</td>
                <td>{{ item.Notes }}</td>
                <td>
                  <img
                    src="@/src/assets/img-avatar-jaffar.png"
                    class="me-2"
                  /><span>{{ item.User }}</span>
                </td>
                <td>
                  <span class="badge-warning rounded-4 px-3 py-1">{{
                    item.Status
                  }}</span>
                </td>
                <!-- <td>
                  <button type="button" class="btn btn-primary">Resolve</button>
                </td> -->
              </tr>
            </tbody>
          </table>
        </div>
      </template>

      <template v-else-if="selection == 'Skills'">
        <div class="my-4" v-if="selectedSkill == null">
          <span class="h3"><strong>Student</strong></span>
          <div class="d-flex my-4 flex-row">
            <div v-for="child in studentList">
              <button
                type="button"
                class="btn me-3"
                :class="
                  selectedStudent == child
                    ? 'btn-primary text-light'
                    : 'btn-outline-secondary'
                "
                @click="selectStudent(child)"
              >
                {{ child }}
              </button>
            </div>
          </div>
          <div class="card rounded-4 border-0">
            <div class="p-3">
              <div
                class="d-flex align-items-center justify-content-between flex-row"
              >
                <div class="bg-light rounded-3 d-flex flex-row border-0 p-1">
                  <button
                    type="button"
                    class="btn mx-2"
                    :class="
                      difficulty == 'Beginner' ? 'btn-primary text-light' : ''
                    "
                    @click="difficulty = 'Beginner'"
                  >
                    Beginners
                  </button>
                  <button
                    type="button"
                    class="btn mx-2"
                    :class="
                      difficulty == 'Medium' ? 'btn-primary text-light' : ''
                    "
                    @click="difficulty = 'Medium'"
                  >
                    Medium
                  </button>
                  <button
                    type="button"
                    class="btn mx-2"
                    :class="
                      difficulty == 'Advanced' ? 'btn-primary text-light' : ''
                    "
                    @click="difficulty = 'Advanced'"
                  >
                    Advanced
                  </button>
                </div>
              </div>
            </div>
            <div class="p-3">
              <div class="row">
                <template v-for="skill in skillsList">
                  <div
                    class="col-12 col-md-4 p-3"
                    @click="selectedSkill = skill"
                  >
                    <ParentsComponentsAccountInformationSkillsCard
                      :skill="skill"
                    />
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
        <div class="my-4" v-else>
          <div class="d-flex flex-column">
            <div>
              <span type="button" class="h4 m-0" @click="selectedSkill = null">
                <Icon name="material-symbols:arrow-back" class="me-2" />
              </span>
            </div>
            <div class="my-4">
              <img src="@/src/assets/img-skills-header.png" class="w-100" />
            </div>
            <div class="row my-4">
              <div class="col-8">
                <span class="h4">{{ selectedSkill.Title }}</span>
              </div>
              <div class="col-4">
                <div
                  class="w-100 d-flex align-items-center justify-content-between my-2 flex-row"
                >
                  <div class="progress" style="width: 70%">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      :style="`width: ${selectedSkill.Progress}%`"
                      :class="
                        selectedSkill.Status == 'Completed'
                          ? 'bg-success'
                          : 'bg-warning'
                      "
                    ></div>
                  </div>
                  <div
                    style="height: 100%"
                    class="d-flex flex-column align-items-center"
                  >
                    <span style="font-size: 0.7rem">
                      <strong>{{ selectedSkill.Progress }}% completed</strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="card my-2 border-0"
              v-for="skill in selectedSkill.Skills"
            >
              <div class="row rounded-2 p-3">
                <div class="col-2">
                  <img
                    src="@/src/assets/img-skills-thumbnail.png"
                    class="w-100"
                  />
                </div>
                <div class="col-4 d-flex flex-column">
                  <span class="h4">{{ skill.Title }}</span>
                  <span><strong>Brief</strong></span>
                  <span class="text-muted">{{ skill.Brief }}</span>
                  <div
                    class="w-100 d-flex align-items-center justify-content-between my-2 flex-row"
                  >
                    <div class="progress" style="width: 70%">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        :style="`width: ${skill.Progress}%`"
                        :class="
                          skill.Status == 'Completed'
                            ? 'bg-success'
                            : 'bg-warning'
                        "
                      ></div>
                    </div>
                    <div
                      style="height: 100%"
                      class="d-flex flex-column align-items-center"
                    >
                      <span style="font-size: 0.7rem">
                        <strong>{{ skill.Progress }}% completed</strong>
                      </span>
                    </div>
                  </div>

                  <div class="d-flex my-3 flex-row">
                    <span class="me-2">
                      <Icon name="ph:clock" />
                      {{ skill.Duration }}
                    </span>
                    <span class="mx-2">
                      <Icon name="ph:medal" />
                      {{ skill.Type }}
                    </span>
                    <span class="ms-2">
                      <Icon name="ph:chart-bar" />
                      {{ skill.Difficulty }}
                    </span>
                  </div>
                </div>
                <div class="col-4 d-flex flex-column">
                  <span class="my-3"><strong>My child can...</strong></span>
                  <template v-for="ability in skill.Abilities">
                    <div class="d-flex align-items-center flex-row">
                      <Icon
                        name="ph:check-circle"
                        :class="
                          skill.Status == 'Completed' ? 'text-success' : ''
                        "
                        class="me-2"
                      />
                      {{ ability }}
                    </div>
                  </template>
                </div>
                <div class="col-2 d-flex flex-column justify-content-center">
                  <button
                    type="button"
                    class="btn w-100 rounded-4"
                    :class="
                      skill.Progress == 100
                        ? 'btn-success text-light'
                        : skill.Progress == 0
                          ? 'btn-primary text-light'
                          : 'btn-warning'
                    "
                  >
                    <Icon
                      :name="skill.Progress < 100 ? 'ph:play' : 'ph:check'"
                    />
                    {{
                      skill.Progress == 100
                        ? 'Completed'
                        : skill.Progress == 0
                          ? 'Start training'
                          : 'Continue'
                    }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </NuxtLayout>
</template>

<style scoped>
.badge-warning {
  background-color: #eda60010;
  color: #eda600;
}
.badge-success {
  background-color: #43be4f20;
  color: #43be4f;
}
</style>
