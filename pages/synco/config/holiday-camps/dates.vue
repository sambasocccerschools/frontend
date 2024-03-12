<script>
export default {
  data: () => ({
    // audiences: 8
    dates: [{ name: 'Autumn 23 Saturdays', sessions: 4 }],
  }),
  methods: {
    duplicateTerm() {
      console.log('duplicate')
    },
    sendToTrash() {
      console.log('sendToTrash')
    },
    saveTerm() {
      console.log('save Term')
    },
  },
}
</script>

<template>
  <NuxtLayout name="syncolayout">
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <h4 class="mb-4">Dates & Mapping Session Plans</h4>
          <h5 class="mb-4">Add Dates</h5>

          <!-- Date Card -->
          <div v-for="date in dates" class="card mb-3">
            <div class="card-body p-4">
              <div class="row row-cols-2 gy-4">
                <div class="col">
                  <label for="camp-name">Holiday Camp Name</label>
                  <input
                    id="camp-name"
                    type="text"
                    class="form-control mt-2"
                    placeholder="Autumn 23 Saturdays"
                    name="camp-name"
                  />
                </div>
                <div class="col">
                  <label for="camp">Camp</label>
                  <input
                    id="camp"
                    type="text"
                    class="form-control border-danger mt-2"
                    placeholder="Autumn"
                    name="camp"
                  />
                </div>
                <div class="col">
                  <label for="start-date">Start date</label>
                  <input
                    id="start-date"
                    type="date"
                    class="form-control mt-2"
                    name="start-date"
                  />
                  <!-- <input type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31" /> -->
                </div>
                <div class="col">
                  <label for="end-date">End date</label>
                  <input
                    id="end-date"
                    type="date"
                    class="form-control mt-2"
                    name="end-date"
                  />
                </div>
                <div class="col">
                  <label for="duration">Duration</label>
                  <input
                    id="duration"
                    type="date"
                    class="form-control border-danger mt-2"
                    name="duration"
                  />
                </div>
              </div>
              <div
                class="d-flex align-items-center justify-content-between mt-4"
              >
                <NuxtLink to="" class="btn btn-outline-primary border-danger">
                  Map Session</NuxtLink
                >
                <div>
                  <button
                    class="btn btn-outline-primary"
                    @click="duplicateTerm()"
                  >
                    Duplicate
                  </button>
                  <button class="btn btn-link text-dark" @click="sendToTrash()">
                    <Icon name="ph:trash-thin" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <button
            class="btn btn-primary btn-lg text-light"
            @click="dates.push({})"
          >
            Add New Dates
          </button>
        </div>
        <div class="col">
          <h4 class="mb-4">Map Sessions Plans</h4>

          <div v-for="date in dates" class="card mb-4">
            <div class="card-header">
              <h4 class="card-title h5 mt-3">{{ date.name }}</h4>
            </div>
            <div class="card-body">
              <div class="card-body px-2">
                <div class="row row-cols-2 gy-2">
                  <div v-for="session in date.sessions" class="col">
                    <div class="card border">
                      <div class="card-body py-2">
                        <div
                          class="d-flex justify-content-between align-items-center"
                        >
                          <strong>Date 1</strong>
                          <button class="btn btn-link btn-sm text-dark p-0">
                            <Icon name="ph:pencil-simple-line" />
                          </button>
                        </div>
                        <div
                          class="d-flex justify-content-between align-items-center"
                        >
                          <small class="text-muted"
                            >Saturday, 9/9/2023, 11:00</small
                          >
                          <button class="btn btn-link btn-sm text-warning p-0">
                            <Icon name="ic:round-access-time-filled" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="d-flex justify-content-end">
            <button
              class="btn btn-primary btn-lg text-light px-5"
              @click="saveTerm()"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
