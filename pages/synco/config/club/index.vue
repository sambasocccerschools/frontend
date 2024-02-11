<script>
export default {
  data: () => ({
    panel: false,
    clubs: [
      {
        leagueName: 'Camden Youth League',
        ageGroup: 'Under 8s',
        training: 'King Solomon Academy',
        matches: 'Carams Field',
      },
    ],
  }),
  methods: {
    saveData() {
      console.log('save')
    },
  },
}
</script>

<template>
  <NuxtLayout name="syncolayout">
    <div class="row">
      <div class="col">
        <div class="d-flex justify-content-between mb-4">
          <h4>Clubs</h4>
          <button class="btn btn-primary text-light" @click="panel = !panel">
            + Add New Club
          </button>
        </div>

        <table class="table-hover table-sm rounded-4 table border shadow-sm">
          <thead class="rounded-top-4">
            <tr class="table-light">
              <!-- <th scope="col">Checkbox</th> -->
              <th scope="col">
                <!-- <input class="form-check-input" type="checkbox" value="" id="all-table"> -->
                <label class="form-check-label text-muted ms-3" for="all-table">
                  League
                </label>
              </th>
              <th class="text-muted" scope="col">Age Group</th>
              <th class="text-muted" scope="col">Training</th>
              <th class="text-muted" scope="col">Matches</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody class="">
            <tr v-for="club in clubs" class="align-middle">
              <th scope="row">
                <!-- <input class="form-check-input" type="checkbox" value="" id="chelsea"> -->
                <label class="form-check-label text-muted ms-3">
                  {{ club.leagueName }}
                </label>
              </th>
              <td>{{ club.ageGroup }}</td>
              <td>{{ club.training }}</td>
              <td>{{ club.matches }}</td>
              <td>
                <button class="btn btn-link px-1">
                  <Icon name="emojione-monotone:letter-c" class="text-danger" />
                </button>
                <button class="btn btn-link px-1">
                  <Icon
                    name="emojione-monotone:letter-p"
                    class="text-success"
                  />
                </button>
              </td>
              <td>
                <button class="btn btn-link px-1">
                  <Icon name="solar:calendar-line-duotone" />
                </button>
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
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-if="panel" class="col-sm-4">
        <div class="card">
          <div class="card-header border-bottom">
            <div class="card-title h4">
              <button
                class="btn btn-transparent m-0 p-0"
                @click="panel = !panel"
              >
                <Icon name="material-symbols:arrow-back" class="me-2" />
              </button>
              Club
            </div>
          </div>
          <div class="card-body">
            <div class="mb-3">
              <label for="league" class="form-label">League</label>
              <input
                id="league"
                type="text"
                class="form-control"
                placeholder="Chelsea"
              />
            </div>
            <div class="mb-3">
              <label for="age-group" class="form-label">Age Group</label>
              <input
                id="age-group"
                type="text"
                class="form-control"
                placeholder="Chelsea Academy"
              />
              <span class="text-danger">is this a dropdown or text input?</span>
            </div>
            <div class="mb-3">
              <label for="address" class="form-label">Training Address</label>
              <input
                id="address"
                type="text"
                class="form-control"
                placeholder="Lots road, London, SW10 0AB"
              />
            </div>
            <!-- Parking Congestion  -->
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
              <label for="match-address" class="form-label"
                >Match Address</label
              >
              <input
                id="match-address"
                type="text"
                class="form-control"
                placeholder="Carams Field, Ongur road, London, SW10 0AB"
              />
              <span class="text-danger">What's this ?</span>
            </div>

            <div class="mb-3">
              <label for="subscription-plan" class="form-label"
                >Subscription Plans</label
              >
              <select
                id="subscription-plan"
                class="form-select"
                aria-label="Select plans"
              >
                <option selected disabled>Subscription Plans</option>
                <option value="1">Add New Price+</option>
                <option value="2">Camden youth League U'8</option>
                <option value="2">Camden youth League U'9</option>
                <option value="2">Camden youth League U'10</option>
                <option value="2">Camden youth League U'11</option>
                <option value="2">Camden youth League U'12</option>
              </select>
              <span class="text-danger">Fix the price management section</span>
            </div>

            <div class="d-flex gap-4">
              <button
                class="btn btn-outline-secondary btn-lg w-100"
                @click="panel = !panel"
              >
                Cancel
              </button>
              <button
                class="btn btn-primary btn-lg w-100 text-light"
                @click="saveData()"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
