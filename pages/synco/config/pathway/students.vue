<script>
export default {
  data: () => ({
    venues: [
      {
        id: 1,
        type: 'pathway',
        area: 'Chelsea',
        name: 'Chelsea Academy',
        address: 'Lots Road, London, SW10 0AB',
        region: 1,
        parking: true,
        congestion: false,
        capacity: '4/8',
      },
    ],
    sessionPlans: 5,
    students: [
      {
        id: 1,
        name: 'Tom Jones',
        age: 25,
        experienceInyears: 2,
        faLevel1: false,
        DBS: false,
      },
    ],
  }),
}
</script>

<template>
  <NuxtLayout name="syncolayout" page-title="Pathway Students">
    <div class="row">
      <div class="col">
        <!-- Filter By Date  -->
        <div class="card">
          <div class="card-header d-flex flex-column">
            <h5
              class="card-title h4 d-flex align-items-center justify-content-between mb-4"
            >
              Select now
              <Icon name="octicon:settings" class="me-2" />
            </h5>
            <!-- <button class="btn btn-primary btn-sm text-light shadow-sm">Apply Filter</button> -->
            <div class="input-group mb-3">
              <span id="search-addon" class="input-group-text">
                <Icon name="ic:baseline-search" />
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="Search venue"
                aria-label="Search venue"
                aria-describedby="search-addon"
              />
            </div>
          </div>

          <ul class="list-group">
            <span class="text-danger"
              >Why would I need to checkbox a venue</span
            >
            <li
              v-for="venue in venues"
              class="list-group-item list-group-item-action d-flex w-100 rounded-0 border-bottom-0 border-end-0 border-start-0 py-3"
            >
              <input
                id="camp-1"
                class="form-check-input me-2"
                type="checkbox"
                value=""
              />
              <span class="w-100">
                <div class="d-flex align-items-center justify-content-between">
                  <span class="d-flex justify-content-between">
                    <label
                      class="form-check-label stretched-link text-primary"
                      for="camp-1"
                    >
                      <strong>{{ venue.area }}</strong>
                    </label>
                  </span>
                  <span class="text-muted"
                    >Capacity - {{ venue.capacity }}</span
                  >
                </div>
                <span class="d-flex flex-column">
                  <strong>{{ venue.name }}</strong>
                  <span class="text-muted">Monday 1- April 2022, 2:50pm</span>
                  <span class="text-danger">What is this date?</span>
                </span>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div class="col-sm-8">
        <div class="d-flex align-items-center mb-4">
          <h5 class="mb-0 me-3 text-nowrap">Student Info</h5>
          <div class="input-group w-auto">
            <span id="search-student" class="input-group-text">
              <Icon name="ic:baseline-search" />
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="Search student"
              aria-label="Search student"
              aria-describedby="search-student"
            />
          </div>
        </div>

        <span class="text-danger">How does this attendance work ?</span>
        <table class="table-hover table-sm rounded-4 table border shadow-sm">
          <thead class="rounded-top-4">
            <tr class="table-light">
              <!-- <th scope="col">Checkbox</th> -->
              <th scope="col">
                <input class="form-check-input" type="checkbox" disabled />
              </th>
              <th scope="col" class="text-muted align-middle">Name</th>
              <th class="text-muted align-middle" scope="col">Age</th>
              <th class="text-muted align-middle" scope="col">Experience</th>
              <th class="text-muted align-middle" scope="col">FA Level 1</th>
              <th class="text-muted align-middle" scope="col">DBS</th>
              <th class="text-muted align-middle" colspan="6">
                <table>
                  <tr scope="col">
                    <th colspan="6" class="text-center">
                      <small>Attendance</small>
                    </th>
                  </tr>
                  <tr>
                    <th>5/10</th>
                    <th>5/10</th>
                    <th>5/10</th>
                    <th>5/10</th>
                    <th>5/10</th>
                    <th>5/10</th>
                  </tr>
                </table>
              </th>
            </tr>
          </thead>
          <tbody class="">
            <tr v-for="student in students" class="align-middle">
              <td>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="tomjones"
                />
              </td>
              <td scope="row">
                {{ student.name }}
              </td>
              <td>{{ student.age }}</td>
              <td>{{ student.experienceInyears }}</td>
              <td>
                <Icon
                  v-if="student.faLevel"
                  name="ri:checkbox-circle-line"
                  class="text-success"
                />
                <Icon
                  v-else="student.faLevel"
                  name="iconamoon:sign-times-circle"
                  class="text-danger"
                />
              </td>
              <td>
                <Icon
                  v-if="student.DBS"
                  name="ri:checkbox-circle-line"
                  class="text-success"
                />
                <Icon
                  v-else="student.DBS"
                  name="iconamoon:sign-times-circle"
                  class="text-danger"
                />
              </td>
              <td>
                <Icon name="ri:checkbox-circle-line" class="text-success" />
              </td>
              <td>
                <Icon name="ri:checkbox-circle-line" class="text-success" />
              </td>
              <td>
                <Icon name="ri:checkbox-circle-line" class="text-success" />
              </td>
              <td>
                <Icon name="ri:checkbox-circle-line" class="text-success" />
              </td>
              <td>
                <Icon name="ri:checkbox-circle-line" class="text-success" />
              </td>
              <td>
                <Icon name="ri:checkbox-circle-line" class="text-success" />
              </td>
            </tr>
          </tbody>
        </table>

        <div class="d-flex justify-content-end mb-5 mt-3">
          <button class="btn btn-sm btn-outline-secondary me-2">
            <Icon name="mdi:email-outline" class="me-2" />Send Email
          </button>
          <button class="btn btn-sm btn-outline-secondary me-2">
            <Icon name="ic:round-text-format" class="me-2" />Send Text
          </button>
          <button class="btn btn-sm btn-primary text-light">
            <Icon name="ph:download-simple-bold" class="me-2" />Export data
          </button>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
