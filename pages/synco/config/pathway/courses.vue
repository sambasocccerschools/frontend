<script setup>
const { venues } = useVenues()
</script>
<script>
export default {
  data: () => ({
    sessionPlans: 5
  })
}
</script>

<template>
  <NuxtLayout name="syncolayout">

    <div class="row">
      <div class="col">
        <h4 class="mb-4">Create Pathway Courses</h4>
        <!-- Filter By Date  -->
        <div class="card">
          <div class="card-header d-flex flex-column">
            <h5 class="card-title mb-4 h4 d-flex align-items-center justify-content-between">
              Select a venue
              <Icon name="octicon:settings" class="me-2" />
            </h5>
            <!-- <button class="btn btn-primary btn-sm text-light shadow-sm">Apply Filter</button> -->
            <div class="input-group mb-3">
              <span class="input-group-text" id="search-addon">
                <Icon name="ic:baseline-search" />
              </span>
              <input type="text" class="form-control" placeholder="Search pathway venue" aria-label="Search pathway venue"
                aria-describedby="search-addon">
            </div>
          </div>

          <ul class="list-group">
            <span class="text-danger">Why would I need to checkbox a venue</span>
            <li v-for="venue in venues"
              class="list-group-item list-group-item-action py-3 d-flex w-100 rounded-0 border-bottom-0 border-end-0 border-start-0">
              <input class="form-check-input me-2" type="checkbox" value="" id="camp-1">
              <span class="w-100">
                <span class="d-flex justify-content-between">
                  <label class="form-check-label stretched-link text-primary" for="camp-1">
                    <strong>{{ venue.area }}</strong>
                  </label>
                </span>
                <span class="d-flex flex-column">
                  <strong>{{ venue.name }}</strong>
                  <span class="text-muted">Region {{ venue.region }}</span>
                </span>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div class="col-sm-8">
        <h5 class="mb-4 mt-3">Add a course</h5>
        <div class="card">
          <div class="card-body p-4">
            <div class="row mb-3">
              <div class="col">
                <label for="course-name">Course Name</label>
                <input type="text" class="form-control mt-2" id="course-name" placeholder="Cohort 1" name="course-name">
              </div>
              <div class="col">
                <label for="camp">Capacity</label>
                <input type="number" class="form-control mt-2" id="capacity" placeholder="24" name="capacity">
              </div>
            </div>
            <div class="row mb-3">
              <div class="col">
                <label for="day">Day</label>
                <select class="form-select" id="day" aria-label="day">
                  <option selected value="Monday">Monday</option>
                </select>
              </div>
              <div class="col">
                <div class="row">
                  <div class="col">
                    <label for="start-date">Start time</label>
                    <input type="date" class="form-control mt-2" id="start-date" name="start-date">
                    <!-- <input type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31" /> -->
                  </div>
                  <div class="col">
                    <label for="end-date">End time</label>
                    <input type="date" class="form-control mt-2" id="end-date" name="end-date">
                  </div>
                </div>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col">
                <label for="start-date">Start Date</label>
                <input type="date" class="form-control mt-2" id="start-time" name="start-time">
                <!-- <input type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31" /> -->
              </div>
              <div class="col">
                <label for="end-date">End Date</label>
                <input type="date" class="form-control mt-2" id="end-time" name="end-time">
              </div>
            </div>
            <div class="row mb-3">
              <div class="col">
                <label for="exclusion-date">Exclusion Date</label>
                <input type="date" class="form-control mt-2" id="exclusion-date" name="exclusion-date">
                <!-- <input type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31" /> -->
              </div>
              <div class="col">
                <label for="end-date">Number of Sessions</label>
                <input type="number" class="form-control mt-2" id="number-sessions" name="number-sessions">
              </div>
            </div>
            <div class="form-group mb-3">
              <label for="Facility" class="mb-3">Facility</label>
              <div class="d-flex">
                <div class="form-check me-4">
                  <input class="form-check-input" type="radio" name="facility" id="facility1">
                  <label class="form-check-label" for="facility1">
                    Indoor
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="facility" id="facility2" checked>
                  <label class="form-check-label" for="facility2">
                    Outdoor
                  </label>
                </div>
              </div>

            </div>

            <br>

            <h5>Session Plans</h5>
            <div class="row row-cols-2 gy-3">
              <div class="col" v-for="plan in sessionPlans">
                <div class="card border">
                  <div class="card-body py-2">
                    <div class="d-flex justify-content-between align-items-center">
                      <strong>Date 1</strong>
                      <button class="btn btn-link p-0 btn-sm text-dark">
                        <Icon name="ph:pencil-simple-line" />
                      </button>
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                      <small class="text-muted">Saturday, 9/9/2023, 11:00</small>
                      <button class="btn btn-link p-0 btn-sm text-warning">
                        <Icon name="ic:round-access-time-filled" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div class="d-flex align-items-center justify-content-between mt-3 mb-3">
              <button class="btn btn-primary text-light">+ Add new course</button>
              <div>
                <button class="btn btn-outline-primary">Duplicate</button>
                <button class="btn btn-transparent">
                  <Icon name="ph:trash-thin" class="h4 m-0" />
                </button>

              </div>
            </div>

          </div>

        </div>

        <div class="text-end my-4">
          <button class="btn btn-lg btn-outline-primary me-2 px-5">Cancel</button>
          <button class="btn btn-lg btn-primary text-light px-5">Save</button>
        </div>

      </div>
    </div>


  </NuxtLayout>
</template>