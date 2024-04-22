<script>
const router = useRouter()
export default {
  data() {
    return {
      previousRoute: '/synco/weekly-classes/waiting-list',
      selection: 'Service History',
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
      showFilter: false,
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
    }
  },
  methods: {
    selectInformation(selection) {
      this.selection = selection
    },
    toggleFilter() {
      this.showFilter = !this.showFilter
    },
    addBooking() {
      console.log('addBooking')
    },
  },
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
            value="543"
            change=""
            icon="ph:star"
          />
        </div>
        <div class="card rounded-4 d-flex mx-2 flex-row p-1">
          <SyncoDashboardMetricsItem
            name="Total Leads"
            value="£0.00"
            change=""
            icon="ph:currency-gbp"
          />
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
              class="dropdown-menu dropdown-menu-right card rounded-3 position-absolute shadow-lg"
              v-if="showFilter"
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
                <SyncoFilterByCalendar />
              </div>
            </div>
          </div>
          <button
            type="button"
            class="btn btn-primary text-light mx-2"
            @click="addBooking"
          >
            + Add booking
          </button>
        </div>
      </template>
      <template v-else-if="selection == 'Student Profile'">
        <div class="d-flex flex-row p-1" style="margin-left: auto">
          <button
            type="button"
            class="btn btn-primary text-light mx-2"
            @click="addStudent"
          >
            + Add new student
          </button>
        </div>
      </template>
    </div>

    <div>
      <template v-if="selection == 'Parent Profile'">
        <SyncoWeeklyClassesComponentsAccountInformationParentProfile
          :parent="parent"
          :emergency-contact="emergencyContact"
        />
      </template>

      <template v-else-if="selection == 'Student Profile'">
        <SyncoWeeklyClassesComponentsAccountInformationStudentProfile
          :student="student"
        />
      </template>

      <template v-else-if="selection == 'Service History'">
        <SyncoWeeklyClassesComponentsAccountInformationServiceHistory
          :header="ServiceHistoryAccountCardHeaders[1]"
        />
      </template>
    </div>
  </NuxtLayout>
</template>
