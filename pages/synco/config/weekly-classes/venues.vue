<script setup>
const { venues } = useVenues()
const { countries, getCountries } = useCountry()
</script>
<script>
export default {
  data: () => ({
    panel: false
  })
}
</script>

<template>
  <NuxtLayout name="syncolayout">
    <div class="row">
      <div class="col">
        <div class="d-flex justify-content-between mb-4">
          <h4>Venues</h4>
          <button class="btn btn-primary text-light" @click="panel = !panel">+ Add New Venue</button>
        </div>

        <table class="table table-hover table-sm border rounded-4 shadow-sm">
          <thead class="rounded-top-4">
            <tr class="table-light ">
              <!-- <th scope="col">Checkbox</th> -->
              <th scope="col">
                <input class="form-check-input" type="checkbox" value="" id="all-table">
                <label class="form-check-label ms-3 text-muted" for="all-table">
                  Area
                </label>
              </th>
              <th class="text-muted" scope="col">Name of the venue</th>
              <th class="text-muted" scope="col">Address</th>
              <th class="text-muted" scope="col">Region</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody class="">
            <tr class="align-middle" v-for="venue in venues">
              <th scope="row">
                <input class="form-check-input" type="checkbox" value="" id="chelsea">
                <label class="form-check-label ms-3 text-muted" for="chelsea">
                  {{ venue.area }}
                </label>
              </th>
              <td>{{ venue.name }}</td>
              <td>{{ venue.address }}</td>
              <td>{{ venue.region }}</td>
              <td>
                <button class="btn btn-link px-1">
                  <Icon name="emojione-monotone:letter-c" class="text-danger" />
                </button>
                <button class="btn btn-link px-1">
                  <Icon name="emojione-monotone:letter-p" class="text-success" />
                </button>
              </td>
              <td>
                <button class="btn btn-link px-1">
                  <Icon name="solar:calendar-line-duotone" />
                </button>
                <button class="btn btn-link px-1">
                  <Icon name="ph:pencil-simple-line" />
                </button>
                <button class="btn btn-link px-1">
                  <Icon name="fluent:delete-24-regular" />
                </button>
              </td>

            </tr>
            <tr v-if="venues.length === 0">No venues</tr>
          </tbody>
        </table>
      </div>
      <div class="col-sm-4" v-if="panel">
        <div class="card">
          <div class="card-header border-bottom">
            <div class="card-title h4">
              <button class="btn btn-transparent m-0 p-0" @click="panel = !panel">
                <Icon name="material-symbols:arrow-back" class="me-2" />
              </button>
              Add New Venue
            </div>
          </div>
          <div class="card-body">
            <div class="mb-3">
              <label for="area" class="form-label">Area</label>
              <input type="text" class="form-control" id="area" placeholder="Chelsea">
            </div>
            <div class="mb-3">
              <label for="name" class="form-label">Name of Venue</label>
              <input type="text" class="form-control" id="name" placeholder="Chelsea Academy">
            </div>
            <div class="mb-3">
              <label for="address" class="form-label">Address</label>
              <input type="text" class="form-control" id="address" placeholder="Lots road, London, SW10 0AB">
            </div>
            <!-- Parking COngestion  -->
            <div class="mb-3 row">
              <div class="col">
                <label for="parking" class="form-label">Parking</label>
                <div class="d-flex gap-3">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="parking" id="parkingyes" checked>
                    <label class="form-check-label" for="parkingyes">
                      Yes
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="parking" id="parkingno">
                    <label class="form-check-label" for="parkingno">
                      No
                    </label>
                  </div>
                </div>
              </div>
              <div class="col">
                <label for="congestion" class="form-label">Congestion</label>

                <div class="d-flex gap-3">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="congestion" id="congestionyes" checked>
                    <label class="form-check-label" for="congestionyes">
                      Yes
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="congestion" id="congestionno">
                    <label class="form-check-label" for="congestionno">
                      No
                    </label>
                  </div>
                </div>
              </div>

            </div>
            <div class="form-floating mb-3">
              <textarea class="form-control" placeholder="Add a parking note" id="parking-note"></textarea>
              <label for="parking-note">Add a parking note</label>
            </div>
            <div class="mb-3">
              <label for="enter-facility" class="form-label">How to enter facility</label>
              <textarea class="form-control" placeholder="Add notes" id="enter-facility"></textarea>
            </div>

            <div class="mb-3">
              <label for="region" class="form-label">Region</label>
              <select class="form-select" aria-label="Default select example" id="region">
                <option selected>--</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>

            <div class="d-flex gap-4">
              <button class="btn btn-outline-secondary btn-lg w-100">Cancel</button>
              <button class="btn btn-primary btn-lg w-100 text-light">Update</button>
            </div>


          </div>
        </div>

      </div>
    </div>
  </NuxtLayout>
</template>