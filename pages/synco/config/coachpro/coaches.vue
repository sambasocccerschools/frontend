<script>
export default {
  data: () => ({
    coachesList: [
      {
        id: 1,
        name: 'Nilio Bagga',
        email: 'nilio@sambasoccerschools.com',
        venues: [
          {
            name: 'Chelsea',
            address: 'The King Fahad Academy East Acton Lane',
          },
        ],
        qualifications: [{ name: 'FA LEvel 1 Coaching Certificate' }],
        assessments: [
          {
            name: 'How to use this app',
            status: 'Pending',
            grade: '0/15',
            percentage: 100,
          },
        ],
        qcResults: [
          {
            date: 'Sat 3rd April 2023',
            time: '10:30-11:30am',
            assessor: 'John Fernandes',
            venue: 'Marylebone',
            resultPercentage: 75,
          },
        ],
        attendance: [
          {
            id: 1,
            venue: 'Chelsea',
            invoiceID: '2456456',
            dateRange: '01/04/2023 - 01/05/2023',
            invoiceStatus: 'paid',
            accountInPounds: 120,
            sessions: [
              {
                id: 'Session 1',
                address: 'Address 1',
                date: '1st May 2023 - 11:00 AM',
                accountInPounds: 120,
              },
            ],
          },
        ],
      },
      {
        id: 2,
        name: 'Rob Moya',
        email: 'rob@sambasoccerschools.com',
        venues: [],
      },
    ],
    selectedCoach: {},
    tab: 1, // Venues allocation, qualifications, assessments, contract, QC Result Attendance
  }),
  mounted() {
    this.selectedCoach = this.coachesList[0]
    // console.log(this.selectedCoach)
  },
  methods: {
    saveNewVenue() {
      console.log('save new venue')
    },
  },
}
</script>

<template>
  <NuxtLayout name="syncolayout">
    <div class="row">
      <div class="col-sm-3">
        <div class="card">
          <div class="card-header">
            <div class="input-group">
              <span id="search-addon" class="input-group-text">
                <Icon name="ic:baseline-search" />
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="Search coach"
                aria-label="search-coach"
                aria-describedby="search-addon"
              />
            </div>
          </div>
          <ul class="list-group">
            <li
              v-for="coach in coachesList"
              class="list-group-item list-group-item-action border-top d-flex w-100 rounded-0 border-bottom-0 border-end-0 border-start-0 border py-3"
            >
              <span class="w-100 d-flex" @click="selectedCoach = coach">
                <img src="@/src/assets/img-avatar-ability-group.png" />
                <span class="d-flex flex-column ms-3">
                  <strong>{{ coach.name }}</strong>
                  <span class="text-muted">{{ coach.email }}</span>
                </span>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-4">
                <div class="card bg-light border-secondary-subtle border">
                  <div class="card-body text-center">
                    <img src="@/src/assets/img-avatar-ability-group.png" />
                    <p class="mb-0 mt-2">
                      <strong>{{ selectedCoach.name }}</strong>
                    </p>
                  </div>
                  <hr class="m-0" />
                  <div class="card-body d-flex flex-column">
                    <strong>Username</strong>
                    <span class="mb-2">Nilio Bagga</span>
                    <strong>Email</strong>
                    <span class="mb-2">{{ selectedCoach.email }}</span>
                    <strong>Position</strong>
                    <span class="mb-2">Head Coach</span>
                    <strong>Phone</strong>
                    <span class="text-primary mb-2">1234567</span>
                    <strong>Address</strong>
                    <span class="mb-2">65 Shelton Street, WC2H 9HE</span>
                  </div>
                  <hr class="m-0" />
                  <div class="card-body">
                    <h6>Onboarding</h6>
                    <div
                      class="d-flex justify-content-between align-items-center"
                    >
                      Training Courses <strong>100%</strong>
                    </div>
                    <div
                      class="d-flex justify-content-between align-items-center"
                    >
                      Uniform <strong>25%</strong>
                    </div>
                    <span class="text-danger"
                      >How do we calculate this uniform percentage?</span
                    >
                  </div>
                </div>
              </div>

              <div class="col">
                <!-- Tabs  -->
                <div class="rounded-4 border">
                  <div class="p-2">
                    <button
                      class="btn"
                      :class="
                        tab === 1 ? 'btn-primary text-light' : 'btn-transparent'
                      "
                      @click="tab = 1"
                    >
                      Venues allocation
                    </button>
                    <button
                      class="btn"
                      :class="
                        tab === 2 ? 'btn-primary text-light' : 'btn-transparent'
                      "
                      @click="tab = 2"
                    >
                      Qualifications
                    </button>
                    <button
                      class="btn"
                      :class="
                        tab === 3 ? 'btn-primary text-light' : 'btn-transparent'
                      "
                      @click="tab = 3"
                    >
                      Assessments
                    </button>
                    <button
                      class="btn"
                      :class="
                        tab === 4 ? 'btn-primary text-light' : 'btn-transparent'
                      "
                      @click="tab = 4"
                    >
                      Contract
                    </button>
                    <button
                      class="btn"
                      :class="
                        tab === 5 ? 'btn-primary text-light' : 'btn-transparent'
                      "
                      @click="tab = 5"
                    >
                      QC Results
                    </button>
                    <button
                      class="btn"
                      :class="
                        tab === 6 ? 'btn-primary text-light' : 'btn-transparent'
                      "
                      @click="tab = 6"
                    >
                      Attendance
                    </button>
                  </div>
                </div>

                <section class="py-3">
                  <!-- Tab Content -->
                  <!-- Venues Allocations  -->
                  <div v-if="tab === 1">
                    <div
                      class="d-flex align-items-center justify-content-between"
                    >
                      <h5>
                        Venues Allocations ({{
                          selectedCoach &&
                          selectedCoach.venues &&
                          selectedCoach.venues.length
                        }})
                      </h5>
                      <!-- Button trigger modal -->
                      <button
                        type="button"
                        class="btn btn-primary btn-sm text-light"
                        data-bs-toggle="modal"
                        data-bs-target="#newVenueModal"
                      >
                        Add new venue
                      </button>
                    </div>
                    <div
                      v-for="venue in selectedCoach.venues"
                      class="d-flex align-items-center justify-content-between border-bottom py-2"
                    >
                      {{ venue.name }} {{ venue.address }}
                      <div>
                        <button class="btn btn-link px-1">
                          <Icon
                            name="ph:pencil-simple-line"
                            class="text-danger"
                            @click="panel = !panel"
                          />
                        </button>
                        <button class="btn btn-link px-1">
                          <Icon name="fluent:delete-24-regular" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <!-- Qualifications  -->
                  <div v-if="tab === 2">
                    <div
                      v-for="qualification in selectedCoach.qualifications"
                      class="d-flex align-items-center justify-content-between border-bottom py-2"
                    >
                      {{ qualification.name }}
                      <Icon name="ph:download-simple-bold" />
                    </div>
                  </div>
                  <!-- Assessments  -->
                  <div v-if="tab === 3">
                    <table class="table-hover table-sm table border shadow-sm">
                      <thead class="rounded-top-4">
                        <tr class="table-light">
                          <!-- <th scope="col">Checkbox</th> -->
                          <th scope="col">
                            <label
                              class="form-check-label text-muted ms-3"
                              for="all-table"
                            >
                              Title
                            </label>
                          </th>
                          <th class="text-muted" scope="col">Status</th>
                          <th class="text-muted" scope="col">Grade</th>
                          <th class="text-muted" scope="col">Percentage</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody class="">
                        <tr
                          v-for="assessment in selectedCoach.assessments"
                          class="align-middle"
                        >
                          <th scope="row">
                            <label
                              class="form-check-label text-muted ms-3"
                              for="chelsea"
                            >
                              {{ assessment.name }}
                            </label>
                          </th>
                          <td>{{ assessment.status }}</td>
                          <td>{{ assessment.grade }}</td>
                          <td>{{ assessment.percentage }}</td>
                          <td>
                            <button class="btn btn-primary btn-sm text-light">
                              See results
                            </button>
                            <span class="text-danger">What does this do?</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!-- Contract  -->
                  <div v-if="tab === 4">
                    <span class="text-danger"
                      >Is this contract a PDF or text ?</span
                    >
                  </div>
                  <!-- QC Results  -->
                  <div v-if="tab === 5">
                    <div
                      class="d-flex align-items-center justify-content-between"
                    >
                      <h4 class="h6">Quality Control Results</h4>
                      <div class="d-flex">
                        <div class="form-group">
                          <select
                            id="search-assessor"
                            class="form-select form-select-sm"
                            aria-label="Assesor"
                          >
                            <option selected disabled>Assessor</option>
                            <option value="1">John Fernandes</option>
                          </select>
                          <span class="text-danger"
                            >Where does this assessor come from ? Coachpro
                            app?</span
                          >
                        </div>
                        <div class="form-group ms-2">
                          <select
                            id="search-venue"
                            class="form-select form-select-sm"
                            aria-label="Search Venue"
                          >
                            <option selected disabled>Venue</option>
                            <option value="1">Marylebone</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <table class="table-hover table-sm table border shadow-sm">
                      <thead class="rounded-top-4">
                        <tr class="table-light">
                          <!-- <th scope="col">Checkbox</th> -->
                          <th scope="col">
                            <label
                              class="form-check-label text-muted ms-3"
                              for="qcresult"
                            >
                              Date
                            </label>
                          </th>
                          <th class="text-muted" scope="col">Time</th>
                          <th class="text-muted" scope="col">Status</th>
                          <th class="text-muted" scope="col">Grade</th>
                          <th class="text-muted" scope="col">Percentage</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody class="">
                        <tr
                          v-for="result in selectedCoach.qcResults"
                          class="align-middle"
                        >
                          <th scope="row">
                            <label
                              class="form-check-label text-muted ms-3"
                              for="chelsea"
                            >
                              {{ result.date }}
                            </label>
                          </th>
                          <td>{{ result.time }}</td>
                          <td>{{ result.assessor }}</td>
                          <td>{{ result.venue }}</td>
                          <td>
                            <span class="badge bg-success-subtle text-success"
                              >{{ result.resultPercentage }}%</span
                            >
                          </td>
                          <!-- <td>
                            <button class="btn btn-primary btn-sm text-light">
                              See results
                            </button>
                          </td> -->
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!-- Attendance  -->
                  <div v-if="tab === 6">
                    <div
                      class="d-flex align-items-center justify-content-between mb-4"
                    >
                      <h4 class="h5">Attendance</h4>
                      <div
                        class="d-flex align-items-center justify-content-end"
                      >
                        <button
                          class="btn btn-primary text-light btn-sm d-flex rounded-2 me-2 text-nowrap"
                        >
                          <Icon name="ph:download-simple-bold" class="me-2" />
                          Download Invoice
                        </button>
                        <select
                          class="form-select form-select-sm me-2"
                          aria-label="filter-venue"
                        >
                          <option selected disabled>Venues filter</option>
                          <option value="1">One</option>
                        </select>
                        <input
                          id="date-period"
                          type="date"
                          class="form-control form-control-sm"
                          name="date-period"
                          placeholder="Time Period"
                        />
                      </div>
                    </div>

                    <table class="table-hover table border shadow-sm">
                      <thead class="rounded-top-4">
                        <tr class="table-light">
                          <!-- <th scope="col">Checkbox</th> -->
                          <th scope="col">
                            <label class="text-muted" for="qcresult">
                              Venue
                            </label>
                          </th>
                          <th class="text-muted" scope="col">Invoice</th>
                          <th class="text-muted" scope="col">Sessions</th>
                          <th class="text-muted" scope="col">Date Range</th>
                          <th class="text-muted" scope="col">Status</th>
                          <th class="text-muted" scope="col">Account</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody class="">
                        <SyncoConfigCoachInvoiceTableItem
                          v-for="attendance in selectedCoach.attendance"
                          :key="attendance.id"
                          :props="attendance"
                        />
                      </tbody>
                    </table>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal New venue -->
    <div
      id="newVenueModal"
      class="modal fade centered"
      tabindex="-1"
      aria-labelledby="newVenueModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header p-4">
            <h1 id="newVenueModalLabel" class="modal-title fs-3">
              Add New Venue
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body p-4">
            <div class="form-group mb-3">
              <label for="venue" class="form-label">Select Venue</label>
              <select id="venue" class="form-select" aria-label="Select plans">
                <option selected disabled>Select venue</option>
                <option value="1"></option>
              </select>
            </div>
            <div class="form-group">
              <label for="hourly-rate" class="form-label"
                >Enter hourly rate</label
              >
              <input
                id="hourly-rate"
                type="number"
                class="form-control"
                aria-describedby="emailHelp"
              />
              <span class="text-danger">Any limitations here ?</span>
            </div>
          </div>
          <div class="modal-footer border-0 p-4">
            <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> -->
            <button
              type="button"
              class="btn btn-primary w-100 text-light"
              @click="saveNewVenue()"
            >
              Create New Venue
            </button>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
