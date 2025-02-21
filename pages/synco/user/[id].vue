<!-- <script>
export default {
  data() {
    return {
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
      ServiceHistoryAccountCardHeaders: [
        {
          Status: 'Active',
          Color: '#43BE4F',
        },
        {
          Status: 'Waiting List',
          Color: '#A4A5A6',
        },
      ],
      feedbackList: [
        {
          SubmittedDate: '01/06/2023',
          FeedbackType: 'Negative',
          Venue: 'Acton',
          Category: 'Time',
          Notes: 'I think is too much time for my kid',
          User: 'Jaffar',
          Status: 'In process',
        },
      ],
      eventList: [
        {
          ImageUrl: '',
          Title: 'Lead Generated',
          Date: 'Monday 23rd June, 8:54am',
          Description: 'Lead has been generated through website',
          EventType: 'general',
        },
        {
          ImageUrl: '',
          Title: 'Nilio Bagga',
          Date: 'Monday 23rd June, 8:54am',
          Description: 'Ethan phoned the candidate',
          EventType: 'general',
        },
      ],
    }
  },
}
</script> -->

<script setup lang="ts">
import { ref } from 'vue'
import { useToast } from 'vue-toast-notification'
import { date } from 'yup'
import { generalStore } from '~/stores'
import type { IComment, ICandidateEventItem, IIdTitleItem } from '~/types/index'
import type {
  IAccountInformationObject,
  IGuardianCreate,
  IStudentCreate,
  IEmregencyContactCreate,
  IFeedbackItem,
  IAccountRefereeItem,
  IRefereeReportingItem,
  IAccountRewardHistoryItem,
  IAccountLoyaltyPointsHistoryItem,
  ICreateFeedbackItem,
  IAccountWeeklyClassesServiceHistory,
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

const accountId = ref<number>(-1)
const accountInformation = ref<IAccountInformationObject>()
const selection = ref<string>('Service History')
const previousRoute = ref<string>('/synco/weekly-classes/waiting-list')
const showFilter = ref<boolean>(false)
const showBookings = ref<boolean>(false)
const showServiceHistoryDetails = ref<boolean>(false)
const showFeedbackModal = ref<boolean>(false)

const loyalty_points = ref<number>(0)
// const parent = ref<IGuardianCreate[]>()
const parent = ref<any[]>()
// const student = ref<IStudentCreate[]>()
const student = ref<any[]>()
const emergencyContact = ref<IEmregencyContactCreate[]>()
const comment = ref<IEmregencyContactCreate[]>()
// let ServiceHistoryAccountCardHeaders = [
//   {
//     Status: 'Active',
//     Color: '#43BE4F',
//   },
//   {
//     Status: 'Waiting List',
//     Color: '#A4A5A6',
//   },
// ]
const feedbackItems = ref<IFeedbackItem[]>()
const referralsList = ref<IAccountRefereeItem[]>([])
const referralReporting = ref<IRefereeReportingItem>()
const loyaltyPointsRewards = ref<IAccountRewardHistoryItem[]>()
const loyaltyPointsHistory = ref<IAccountLoyaltyPointsHistoryItem[]>()

const eventList = ref<ICandidateEventItem[]>()

const feedbackItem = ref<ICreateFeedbackItem>({
  family_id: 0,
  agent_id: '',
  additional_notes: '',
  feedback_category_id: 0,
  feedback_type_id: 0,
  weekly_class_id: 0,
})

const serviceHistoryWeecklyClasses = ref<any[]>()

// const feedbackStatus = store.feedbackStatus
const feedbackCategory = store.feedbackCategory
const feedbackType = store.feedbackType
const agents = store.agents
const enrolledClasses = ref<IIdTitleItem[]>([])

onMounted(async () => {
  console.log('pages/synco/user/[id].vue')
  const queryAccountId = router.currentRoute.value.params.id
  accountId.value = queryAccountId ? +queryAccountId : -1
  await getAccountInformation()
  // await getEnrolledWeeklyClasses(accountId.value)

  // Call fetchAllData to fetch all miscellaneous data
  await store.fetchAllData()
})

const getAccountInformation = async () => {
  try {
    changeLoadingState(true)
    const response = await $api.accountInformation.getById(accountId.value)
    console.log('response', response)
    loyalty_points.value = response.data.loyalty_points
    parent.value = response.data.guardians
    student.value = response.data.students
    feedbackItems.value = response.data.feedbacks
    referralsList.value = response.data.referees
    referralReporting.value = response.data.referee_reporting
    loyaltyPointsRewards.value = response.data.rewardHistories
    loyaltyPointsHistory.value = response.data.loyaltyPointHistories
    eventList.value =
      response.data.events?.map((x) => {
        return {
          Date: x.created_at,
          Description: x.description,
          EventType: x.eventType.title,
          ImageUrl: x.performedBy.avatar_image,
          Title: x.eventType.title,
          ExtraInformation: null,
        }
      }) ?? []

    serviceHistoryWeecklyClasses.value = response.data.service_history

    console.log('serviceHistoryWeecklyClasses.value')
    console.log(serviceHistoryWeecklyClasses.value)

    // response.data.service_history['weekly-classes']
    const data = response?.data
    accountInformation.value = data
  } catch (error: any) {
    console.log(error)
    toast.error(error?.data?.messages ?? 'Error')
  } finally {
    changeLoadingState(false)
  }
}

// const getEnrolledWeeklyClasses = async (familiId: number) => {
//   try {
//     changeLoadingState(true)
//     const response = await $api.datasets.getEnrolledWeeklyClass(familiId, true)
//     console.log('getEnrolledWeeklyClasses', response)
//     const eClasses: IIdTitleItem[] = []
//     response.data.forEach((x) => {
//       x?.classes.forEach((y) => {
//         eClasses.push({
//           title: `${x.year} - ${y.name}`,
//           id: y.id,
//         })
//       })
//     })
//     enrolledClasses.value = eClasses
//   } catch (error: any) {
//     console.log(error)
//     toast.error(error?.data?.messages ?? 'Error')
//   } finally {
//     changeLoadingState(false)
//   }
// }

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
  await router.push({ path: `${path}` })
}

// const cleanDate = (date: any) => {
//   if (!Number.isInteger(date)) return date
//   const cleanedDate = new Date(+date * 1000).toISOString()?.split('T')[0]
//   return cleanedDate
// }

const cleanDate = (date: any) => {
  if (!date) return ''

  const parsedDate = new Date(date)
  if (isNaN(parsedDate.getTime())) return date

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(parsedDate)
}

const resolveFeedback = async (id: number) => {
  try {
    changeLoadingState(true)
    const response = await $api.feedback.resolve(id)
    console.log(response)
    await getAccountInformation()
  } catch (error: any) {
    console.log(error)
    toast.error(error?.data?.messages ?? 'Error')
  } finally {
    changeLoadingState(false)
  }
}

const submitFeedback = async () => {
  try {
    changeLoadingState(true)
    feedbackItem.value.family_id = accountId.value
    const response = await $api.feedback.create(feedbackItem.value)
    console.log(response)
    openCloseCleanFeedbackItem(false)
  } catch (error: any) {
    console.log(error)
    toast.error(error?.data?.messages ?? 'Error')
  } finally {
    changeLoadingState(false)
  }
}

const openCloseCleanFeedbackItem = (state: boolean) => {
  feedbackItem.value = {
    family_id: 0,
    agent_id: '',
    additional_notes: '',
    feedback_category_id: 0,
    feedback_type_id: 0,
    weekly_class_id: 0,
  }
  showFeedbackModal.value = state
}

const selectedDetails = ref('')

const seeDetails = (details: string) => {
  selectedDetails.value = details
  showServiceHistoryDetails.value = !showServiceHistoryDetails.value
}

const getServiceHistory = (index: number) => {
  return {
    accountInfo: {
      holder: `${parent.value?.[index]?.first_name} ${parent.value?.[index]?.last_name}`,
      membership:
        serviceHistoryWeecklyClasses.value?.[index]?.subscription_plan_price
          ?.name ?? '',
      students:
        serviceHistoryWeecklyClasses.value?.[index]?.subscription_plan_price
          ?.student_coverage?.title ?? '',
      venue:
        serviceHistoryWeecklyClasses.value?.[index]?.weekly_class?.venue.name,
      monthlyPrice:
        serviceHistoryWeecklyClasses.value?.[index]?.subscription_plan_price
          ?.monthly_subscription_fee ?? '',
      dateOfBooking:
        serviceHistoryWeecklyClasses.value?.[index]?.created_date ?? '',
      bookingSource: `${serviceHistoryWeecklyClasses.value?.[index]?.agent?.first_name ?? ''} ${serviceHistoryWeecklyClasses.value?.[index]?.agent?.last_name ?? ''}`,
    },
  }
}

const getStudentBookingInfo = (index: number) => {
  return {
    student: {
      firstName: student.value?.[index]?.first_name ?? '',
      lastName: student.value?.[index]?.last_name ?? '',
    },
    bookingInfo: {
      startDate: serviceHistoryWeecklyClasses.value?.[index]?.start_date ?? '',
      venue:
        serviceHistoryWeecklyClasses.value?.[index]?.weekly_class.venue?.name ??
        '',
      classAgeRange: `${serviceHistoryWeecklyClasses.value?.[index]?.weekly_class?.min_age ?? ''} - ${serviceHistoryWeecklyClasses.value?.[index]?.weekly_class?.max_age ?? ''} years`,
      time: `${serviceHistoryWeecklyClasses.value?.[index]?.weekly_class?.start_time ?? ''} - ${serviceHistoryWeecklyClasses.value?.[index]?.weekly_class?.end_time ?? ''}`,
      dateOfBooking:
        serviceHistoryWeecklyClasses.value?.[index]?.created_date ?? '',
    },
  }
}
</script>

<template>
  <NuxtLayout name="syncolayout" page-title="Account Information">
    <!-- Some ID -->
    <div class="d-flex align-items-center flex-row">
      <NuxtLink class="h4 m-0" :to="previousRoute">
        <Icon name="material-symbols:arrow-back" class="me-2" />
      </NuxtLink>
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
          Student Profile
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
          @click="selectInformation('Rewards')"
        >
          Rewards
        </button>
        <button
          type="button"
          class="btn mx-2"
          :class="selection == 'Events' ? 'btn-primary text-light' : ''"
          @click="selectInformation('Events')"
        >
          Events
        </button>
      </div>
      <template
        v-if="selection == 'Service History' && !showServiceHistoryDetails"
      >
        <div class="card rounded-4 d-flex mx-2 flex-row p-1">
          <SyncoDashboardMetricsItem
            name="Total points"
            :value="loyalty_points"
            change=""
            icon="ph:star"
          />
        </div>
        <!-- <div class="card rounded-4 d-flex mx-2 flex-row p-1">
          <SyncoDashboardMetricsItem
            name="Total Leads"
            value="£0.00"
            change=""
            icon="ph:currency-gbp"
          />
        </div> -->
        <div class="d-flex flex-row p-1">
          <div class="dropdown">
            <button
              type="button"
              class="btn btn-light mx-2 border bg-white"
              data-toggle="dropdown"
              :aria-expanded="showFilter"
              data-display="static"
              @click="toggleFilter"
            >
              <Icon name="ph:faders" /> Filters
            </button>
            <div
              v-if="showFilter"
              class="dropdown-menu dropdown-menu-right card rounded-3 position-absolute shadow-lg"
              style="width: 510px; right: -100px; top: 70px"
            >
              <div
                class="card-header d-flex justify-content-between align-items-center"
              >
                <h5 class="card-title">Filter</h5>
                <button class="btn btn-primary text-light shadow-sm">
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
              class="btn btn-primary text-light dropdown-toggle mx-2"
              data-toggle="dropdown"
              :aria-expanded="showBookings"
              data-display="static"
              @click="toggleBooking"
            >
              + Add booking
            </button>
            <div
              v-if="showBookings"
              class="position-absolute card rounded-4 bg-white p-4 shadow-lg"
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
      </template>
      <template v-if="selection == 'Feedback'">
        <button
          type="button"
          class="btn btn-primary text-light mx-2"
          @click="openCloseCleanFeedbackItem(true)"
        >
          + Add Feedback
        </button>
      </template>
      <!-- <template v-else-if="selection == 'Student Profile'">
        <div class="d-flex flex-row p-1" style="margin-left: auto">
          <button
            type="button"
            class="btn btn-primary text-light mx-2"
            @click="addStudent"
          >
            + Add new student
          </button>
        </div>
      </template> -->
    </div>

    <div>
      <template v-if="selection == 'Parent Profile'">
        <SyncoWeeklyClassesComponentsAccountInformationParentProfile
          :parent="parent"
          :emergency-contact="emergencyContact"
          :comment="comment"
        />
      </template>

      <template v-else-if="selection == 'Student Profile'">
        <SyncoWeeklyClassesComponentsAccountInformationStudentProfile
          :student="student"
        />
      </template>

      <template v-else-if="selection == 'Service History'">
        <!-- <SyncoWeeklyClassesComponentsAccountInformationServiceHistory
          :header="ServiceHistoryAccountCardHeaders[1]"
        /> -->
        <template
          v-for="(weeklyClasses, index) in serviceHistoryWeecklyClasses"
        >
          <template v-if="selectedDetails == ''">
            <div :key="weeklyClasses.id">
              <SyncoWeeklyClassesServiceHistoryItem>
                <template #title>
                  <Icon name="ph:crown" class="h5 m-0" />
                  <span class="h5 m-0 mx-2">Weekly Classes Membership</span>
                  <span class="mx-2"
                    ><strong>{{
                      cleanDate(weeklyClasses.start_date)
                    }}</strong></span
                  >
                </template>
                <template #status>
                  <button
                    class="btn btn-sm text-light border-0"
                    :class="
                      weeklyClasses.member_status.title == 'Active'
                        ? 'btn-success'
                        : 'btn-danger'
                    "
                    style="width: 95px"
                  >
                    {{ weeklyClasses.member_status.title }}
                  </button>
                </template>
                <template #fields>
                  <!-- <SyncoWeeklyClassesComponentsServiceHistoryWeeklyClassesListItem /> -->
                  <div class="d-flex flex-column px-3">
                    <label>Membership Plan</label>
                    <span>{{
                      weeklyClasses.subscription_plan_price.name
                    }}</span>
                  </div>
                  <div class="d-flex flex-column px-3">
                    <label>Students</label>
                    <span>{{
                      weeklyClasses.subscription_plan_price.student_coverage
                        .title || ''
                    }}</span>
                  </div>
                  <div class="d-flex flex-column px-3">
                    <label>Venue</label>
                    <!-- <span>{{ weeklyClasses.venue.name }}</span> -->
                    <span>{{ weeklyClasses.weekly_class.venue.name }}</span>
                  </div>
                  <div class="d-flex flex-column px-3">
                    <label>Monthly price</label>
                    <span
                      >£{{
                        weeklyClasses.subscription_plan_price
                          .monthly_subscription_fee
                      }}</span
                    >
                  </div>
                  <div class="d-flex flex-column px-3">
                    <label>Date of booking</label>
                    <span>{{ cleanDate(weeklyClasses.created_date) }}</span>
                  </div>
                  <!-- <div class="d-flex flex-column px-3">
                      <label>Progress</label>
                      <span>6/12 months</span>
                    </div> -->
                  <div class="d-flex flex-column px-3">
                    <label>Booking Source</label>
                    <span
                      >{{ weeklyClasses.agent?.first_name || '-' }}
                      {{ weeklyClasses.agent?.last_name || '-' }}</span
                    >
                  </div>
                </template>
                <template #footer>
                  <div class="mt-3">
                    <button
                      class="btn btn-light me-1 border bg-transparent"
                      @click="seeDetails('weekly-classes')"
                    >
                      See details
                    </button>
                  </div>
                </template>
              </SyncoWeeklyClassesServiceHistoryItem>
            </div>
          </template>
          <!-- <template v-else>
            <div :key="weeklyClasses.id">
              <div class="row">
                <div class="col-8">
                  <SyncoWeeklyClassesComponentsServiceHistoryInformation>
                    <template #title>
                      <span
                        style="padding-right: 0.5rem; cursor: pointer"
                        @click="seeDetails('')"
                        ><Icon name="material-symbols:arrow-back"
                      /></span>
                      <h5 class="m-0 py-4">
                        <strong>Student information</strong>
                      </h5>
                    </template>
                  </SyncoWeeklyClassesComponentsServiceHistoryInformation>
                  <SyncoWeeklyClassesFormsCommentFormList />
                </div>
                <div class="col-4">
                  <SyncoWeeklyClassesComponentsServiceHistoryAccountCard
                    :header-color="
                      weeklyClasses.member_status.title == 'Active'
                        ? '#43BE4F'
                        : '#A4A5A6'
                    "
                    :account-status="weeklyClasses.member_status.title"
                  >
                    <template v-slot:body>
                      <template v-if="selectedDetails == 'weekly-classes'">
                        <SyncoWeeklyClassesComponentsServiceHistoryWeeklyClassesCardItem />
                      </template>
                      <template v-if="selectedDetails == 'birthday-party'">
                        <SyncoWeeklyClassesComponentsServiceHistoryBirthdayPartyCardItem />
                      </template>
                      <template v-if="selectedDetails == 'one-to-one'">
                        <SyncoWeeklyClassesComponentsServiceHistoryOneToOneCardItem />
                      </template>
                      <template v-if="selectedDetails == 'holiday-camp'">
                        <SyncoWeeklyClassesComponentsServiceHistoryHolidayCampCardItem />
                      </template>
                      <template v-if="selectedDetails == 'club'">
                        <SyncoWeeklyClassesComponentsServiceHistoryClubCardItem />
                      </template>
                      <template v-if="selectedDetails == 'merchandise'">
                        <SyncoWeeklyClassesComponentsServiceHistoryMerchandiseCardItem />
                      </template>
                    </template>
                  </SyncoWeeklyClassesComponentsServiceHistoryAccountCard>
                  <div class="card rounded-4 mb-3 p-2"></div>
                </div>
              </div>
            </div>
          </template> -->
          <template v-else>
            <div :key="weeklyClasses.id">
              <div class="row">
                <div class="col-8">
                  <SyncoWeeklyClassesComponentsServiceHistoryInformation
                    :data="getStudentBookingInfo(index)"
                  >
                    <template #title>
                      <span
                        style="padding-right: 0.5rem; cursor: pointer"
                        @click="seeDetails('')"
                        ><Icon name="material-symbols:arrow-back"
                      /></span>
                      <h5 class="m-0 py-4">
                        <strong>Student information</strong>
                      </h5>
                    </template>
                  </SyncoWeeklyClassesComponentsServiceHistoryInformation>
                  <SyncoWeeklyClassesFormsCommentFormList />
                </div>
                <div class="col-4">
                  <SyncoWeeklyClassesComponentsServiceHistoryAccountCard
                    :holder="parent"
                    :header-color="
                      weeklyClasses.member_status.title == 'Active'
                        ? '#43BE4F'
                        : '#A4A5A6'
                    "
                    :account-status="weeklyClasses.member_status.title"
                  >
                    <template #body>
                      <template v-if="selectedDetails == 'weekly-classes'">
                        <SyncoWeeklyClassesComponentsServiceHistoryWeeklyClassesCardItem
                          :data="getServiceHistory(index)"
                        />
                      </template>
                      <template v-if="selectedDetails == 'birthday-party'">
                        <SyncoWeeklyClassesComponentsServiceHistoryBirthdayPartyCardItem />
                      </template>
                      <template v-if="selectedDetails == 'one-to-one'">
                        <SyncoWeeklyClassesComponentsServiceHistoryOneToOneCardItem />
                      </template>
                      <template v-if="selectedDetails == 'holiday-camp'">
                        <SyncoWeeklyClassesComponentsServiceHistoryHolidayCampCardItem />
                      </template>
                      <template v-if="selectedDetails == 'club'">
                        <SyncoWeeklyClassesComponentsServiceHistoryClubCardItem />
                      </template>
                      <template v-if="selectedDetails == 'merchandise'">
                        <SyncoWeeklyClassesComponentsServiceHistoryMerchandiseCardItem />
                      </template>
                    </template>
                  </SyncoWeeklyClassesComponentsServiceHistoryAccountCard>
                  <div class="card rounded-4 mb-3 p-2">
                    <div class="d-flex flex-column">
                      <div
                        class="d-flex justify-content-between align-items-center my-2 flex-row"
                      >
                        <button
                          type="button"
                          class="btn btn-light mx-2 border bg-white"
                          @click="sendMessage('email')"
                        >
                          <span class="px-4"
                            ><Icon name="ph:envelope-simple" /><span
                              class="mx-2"
                              >Send Email</span
                            ></span
                          >
                        </button>
                        <button
                          type="button"
                          class="btn btn-light mx-2 border bg-white"
                          @click="sendMessage('text')"
                        >
                          <span class="px-4"
                            ><Icon name="ph:text-a-underline" /><span
                              class="mx-2"
                              >Send text</span
                            ></span
                          >
                        </button>
                      </div>
                      <button
                        type="button"
                        class="btn btn-primary text-light m-2"
                        @click="bookMembership"
                      >
                        Book a membership
                      </button>
                      <button
                        type="button"
                        class="btn btn-light m-2 border bg-white"
                        @click="leaveWaitingList"
                      >
                        Leave waiting list
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </template>
      </template>

      <template v-else-if="selection == 'Feedback'">
        <template v-if="showFeedbackModal">
          <div class="modal-backdrop fade show"></div>
          <div
            class="modal fade show centered d-block"
            aria-modal="true"
            role="dialog"
            tabindex="-1"
          >
            <div class="modal-dialog modal-lg modal-dialog-centered">
              <div class="modal-content">
                <div class="card">
                  <div
                    class="card-header"
                    style="border-bottom: 1px solid lightgray"
                  >
                    <div class="row">
                      <div class="col-4">
                        <button
                          class="btn btn-outline-secondary border-0"
                          @click="showFeedbackModal = false"
                        >
                          <Icon name="ph:x" />
                        </button>
                      </div>
                      <div class="col-4 text-center">
                        <span class="h4">
                          <strong> Add Feedback </strong>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    class="card-body"
                    style="overflow: scroll; max-height: 80vh"
                  >
                    <div class="d-flex justify-content-between flex-column">
                      <div
                        v-if="enrolledClasses?.length"
                        class="form-group w-100 mb-3"
                      >
                        <label
                          for="feedbackClass"
                          class="form-labelform-label-light"
                        >
                          Please select the class you whish to add feedback for
                        </label>
                        <select
                          id="feedbackClass"
                          v-model="feedbackItem.weekly_class_id"
                          class="form-control form-control-lg"
                        >
                          <option :value="0">Select option</option>
                          <option
                            v-for="(item, index) in enrolledClasses"
                            :key="index"
                            :value="item.id"
                          >
                            {{ item.title }}
                          </option>
                        </select>
                      </div>

                      <div
                        v-if="feedbackType?.length"
                        class="form-group w-100 mb-3"
                      >
                        <label
                          for="feedbackType"
                          class="form-labelform-label-light"
                        >
                          Feedback type</label
                        >
                        <select
                          id="feedbackType"
                          v-model="feedbackItem.feedback_type_id"
                          class="form-control form-control-lg"
                        >
                          <option :value="0">Select option</option>
                          <option
                            v-for="(item, index) in feedbackType"
                            :key="index"
                            :value="item.id"
                          >
                            {{ item.name }}
                          </option>
                        </select>
                      </div>

                      <div
                        v-if="feedbackCategory?.length"
                        class="form-group w-100 mb-3"
                      >
                        <label
                          for="feedbackCategory"
                          class="form-labelform-label-light"
                        >
                          Category</label
                        >
                        <select
                          id="feedbackCategory"
                          v-model="feedbackItem.feedback_category_id"
                          class="form-control form-control-lg"
                        >
                          <option :value="0">Select option</option>
                          <option
                            v-for="(item, index) in feedbackCategory"
                            :key="index"
                            :value="item.id"
                          >
                            {{ item.name }}
                          </option>
                        </select>
                      </div>

                      <div class="form-group w-100 mb-3">
                        <label
                          for="feedbackNotes"
                          class="form-labelform-label-light"
                        >
                          Notes
                        </label>
                        <textarea
                          id="feedbackNotes"
                          v-model="feedbackItem.additional_notes"
                          class="form-control form-control-lg"
                          placeholder=""
                          rows="4"
                        >
                        </textarea>
                      </div>

                      <div v-if="agents?.length" class="form-group w-100 mb-3">
                        <label
                          for="feedbackAgent"
                          class="form-labelform-label-light"
                        >
                          Assign agent
                        </label>
                        <select
                          id="feedbackAgent"
                          v-model="feedbackItem.agent_id"
                          class="form-control form-control-lg"
                        >
                          <option :value="0">Select option</option>
                          <option
                            v-for="(item, index) in agents"
                            :key="index"
                            :value="item.id"
                          >
                            {{ item.first_name }} {{ item.last_name }}
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="card-footer">
                    <div class="row">
                      <div class="col-6">
                        <button
                          class="btn btn-outline-secondary w-100"
                          @click="showFeedbackModal = false"
                        >
                          Cancel
                        </button>
                      </div>
                      <div class="col-6">
                        <button
                          class="btn btn-primary text-light w-100"
                          @click="submitFeedback"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
        <div class="rounded-4 mt-4">
          <table class="table">
            <thead>
              <tr class="">
                <!-- <th></th> -->
                <th>Date submitted</th>
                <th>Type of feedback</th>
                <th>Venue</th>
                <th>Category</th>
                <th>Notes</th>
                <th>User</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in feedbackItems" style="vertical-align: middle">
                <!-- <td><input type="checkbox" /></td> -->
                <td>{{ cleanDate(item.created_at) }}</td>
                <td>{{ item.feedbackType.name }}</td>
                <td>{{ item.weeklyClass.venue.name }}</td>
                <td>{{ item.feedbackCategory.name }}</td>
                <td>{{ item.additional_notes }}</td>
                <td>
                  <img :src="item.agent?.avatar_image" class="me-2" /><span
                    >{{ item.agent?.first_name }}
                    {{ item.agent?.last_name }}</span
                  >
                </td>
                <td>
                  <span class="badge-warning rounded-4 px-3 py-1">{{
                    item.feedbackStatus.name
                  }}</span>
                </td>
                <td>
                  <button
                    type="button"
                    class="btn btn-primary text-white"
                    :disabled="
                      blockButtons || item.feedbackStatus.name == 'Solved'
                    "
                    @click="resolveFeedback(item.id)"
                  >
                    Resolve
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </template>
      <!-- <template v-else-if="selection == 'Rewards'">
        <SyncoUserRewards
          :referrals-list="referralsList"
          :reporting="referralReporting"
          :loyalty-points-rewards="loyaltyPointsRewards"
          :loyalty-points-history="loyaltyPointsHistory"
          :current-poitns="loyalty_points"
        ></SyncoUserRewards>
      </template>
      <template v-else-if="selection == 'Events'">
        <div class="mt-4">
          <SyncoRecruitmentEvents :event-list="eventList" />
        </div>
      </template> -->
    </div>
  </NuxtLayout>
</template>
