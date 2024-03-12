<script>
export default {
  data: () => ({
    panel: false,
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
      },
    ],
    selectedVenue: null,
  }),
  methods: {
    addNewVenue() {
      this.panel = !this.panel
      this.selectedVenue = null
    },
  },
}
</script>

<template>
  <NuxtLayout name="syncolayout">
    <div class="row">
      <div class="col">
        <div class="d-flex justify-content-between mb-4">
          <h4>Pathway Venues</h4>
          <button class="btn btn-primary text-light" @click="panel = !panel">
            + Add New Venue
          </button>
        </div>

        <table class="table-hover table-sm rounded-4 table border shadow-sm">
          <thead class="rounded-top-4">
            <tr class="table-light">
              <!-- <th scope="col">Checkbox</th> -->
              <th scope="col">Area</th>
              <th class="text-muted" scope="col">Name of the venue</th>
              <th class="text-muted" scope="col">Address</th>
              <th class="text-muted" scope="col">Region</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody class="">
            <tr v-for="venue in venues" class="align-middle">
              <th scope="row">
                {{ venue.area }}
              </th>
              <td>{{ venue.name }}</td>
              <td>{{ venue.address }}</td>
              <td>{{ venue.region }}</td>
              <td>
                <button class="btn btn-link px-1">
                  <Icon
                    name="emojione-monotone:letter-c"
                    :class="venue.congestion ? 'text-success' : 'text-danger'"
                  />
                </button>
                <button class="btn btn-link px-1">
                  <Icon
                    name="emojione-monotone:letter-p"
                    :class="venue.parking ? 'text-success' : 'text-danger'"
                  />
                </button>
              </td>
              <td>
                <button class="btn btn-link px-1">
                  <Icon name="solar:calendar-line-duotone" />
                </button>
                <button
                  class="btn btn-link px-1"
                  @click="selectedVenue = venue"
                >
                  <Icon name="ph:pencil-simple-line" />
                </button>
                <button class="btn btn-link px-1">
                  <Icon name="fluent:delete-24-regular" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-if="panel || selectedVenue" class="col-sm-4">
        <div class="card">
          <div class="card-header border-bottom">
            <div class="card-title h4">
              <button class="btn btn-transparent m-0 p-0" @click="addNewVenue">
                <Icon name="material-symbols:arrow-back" class="me-2" />
              </button>
              Add New Venue
            </div>
          </div>
          <div class="card-body">
            <div class="mb-3">
              <label for="area" class="form-label">Area</label>
              <input
                id="area"
                type="text"
                class="form-control"
                placeholder="Chelsea"
              />
            </div>
            <div class="mb-3">
              <label for="name" class="form-label">Name of Venue</label>
              <input
                id="name"
                type="text"
                class="form-control"
                placeholder="Chelsea Academy"
              />
            </div>
            <div class="mb-3">
              <label for="address" class="form-label">Address</label>
              <input
                id="address"
                type="text"
                class="form-control"
                placeholder="Lots road, London, SW10 0AB"
              />
            </div>
            <!-- Parking COngestion  -->
            <div class="row mb-3">
              <div class="col">
                <label for="parking" class="form-label">Parking</label>
                <div class="d-flex gap-3">
                  <div class="form-check">
                    <input
                      id="parkingyes"
                      class="form-check-input"
                      type="radio"
                      name="parking"
                      checked
                    />
                    <label class="form-check-label" for="parkingyes">
                      Yes
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      id="parkingno"
                      class="form-check-input"
                      type="radio"
                      name="parking"
                    />
                    <label class="form-check-label" for="parkingno"> No </label>
                  </div>
                </div>
              </div>
              <div class="col">
                <label for="congestion" class="form-label">Congestion</label>

                <div class="d-flex gap-3">
                  <div class="form-check">
                    <input
                      id="congestionyes"
                      class="form-check-input"
                      type="radio"
                      name="congestion"
                      checked
                    />
                    <label class="form-check-label" for="congestionyes">
                      Yes
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      id="congestionno"
                      class="form-check-input"
                      type="radio"
                      name="congestion"
                    />
                    <label class="form-check-label" for="congestionno">
                      No
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-floating mb-3">
              <textarea
                id="parking-note"
                class="form-control"
                placeholder="Add a parking note"
              ></textarea>
              <label for="parking-note">Add a parking note</label>
            </div>
            <div class="mb-3">
              <label for="enter-facility" class="form-label"
                >How to enter facility</label
              >
              <textarea
                id="enter-facility"
                class="form-control"
                placeholder="Add notes"
              ></textarea>
            </div>

            <div class="mb-3">
              <label for="region" class="form-label">Region</label>
              <select
                id="region"
                class="form-select"
                aria-label="Default select example"
              >
                <option selected>--</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>

            <div class="d-flex gap-4">
              <button class="btn btn-outline-secondary btn-lg w-100">
                Cancel
              </button>
              <button class="btn btn-primary btn-lg w-100 text-light">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
