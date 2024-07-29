<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useToast } from 'vue-toast-notification'
import type { IVenueItem, IVenueCreateItem } from '~/types/synco/index'
// import { generalStore } from '~/stores'

const blockButtons = ref(false)
const panel = ref(false)
const panelType = ref<string>('')

const { $api } = useNuxtApp()
const toast = useToast()
const venues = ref<IVenueItem[]>([])
const emptyVenue = ref<IVenueCreateItem>({
  area: '',
  address: '',
  facility_enter_guide: '',
  has_congestion: false,
  has_parking: false,
  lat: 0,
  lng: 0,
  name: '',
  parking_note: '',
  region: 0,
  service: 'club',
  subscriptionPlans: [1],
})

const selectedVenueId = ref<string>('')
const selectedVenue = ref<IVenueCreateItem>({
  area: '',
  address: '',
  facility_enter_guide: '',
  has_congestion: false,
  has_parking: false,
  lat: 0,
  lng: 0,
  name: '',
  parking_note: '',
  region: 0,
  service: 'club',
  subscriptionPlans: [1],
})

const regions = ref([
  { label: 'Select from drop down', value: '' },
  { label: 'North London', value: 1 },
  { label: 'East London', value: 2 },
  { label: 'South London', value: 3 },
  { label: 'West London', value: 4 },
])

const getVenues = async (limit: number = 25) => {
  try {
    const venuesResponse = await $api.venues.getAll('club', limit)
    venues.value = venuesResponse?.data
  } catch (error: any) {
    console.log(error)
    toast.error(error?.data?.messages ?? 'Error')
  } finally {
  }
}

onMounted(async () => {
  await getVenues()
})

const openPanel = (item: IVenueItem | null) => {
  panel.value = true
  if (!item) {
    panelType.value = 'Add'
    selectedVenue.value = JSON.parse(JSON.stringify(emptyVenue.value))
    selectedVenueId.value = ''
  } else {
    panelType.value = 'Update'
    selectedVenue.value = {
      address: item.address,
      area: item.area,
      facility_enter_guide: item.facility_enter_guide,
      has_congestion: item.has_congestion,
      has_parking: item.has_parking,
      lat: item.lat,
      lng: item.lng,
      name: item.name,
      parking_note: item.parking_note,
      region: item.region,
      service: 'club',
      subscriptionPlans: [1],
    }
    selectedVenueId.value = item.id
  }
}

const actionButton = async () => {
  try {
    blockButtons.value = true
    if (panelType.value == 'Add') {
      const addResponse = await $api.venues.create(selectedVenue.value)
      toast.success(addResponse?.message)
    } else if (panelType.value == 'Update') {
      const updateResponse = await $api.venues.update(
        selectedVenueId.value,
        selectedVenue.value,
      )
      toast.success(updateResponse?.message)
    }
  } catch (error: any) {
    console.log(error)
    toast.error(error?.data?.messages ?? 'Error')
  } finally {
    panel.value = false
    await getVenues()
    blockButtons.value = false
  }
}

const deleteVenue = async (id: string) => {
  try {
    blockButtons.value = true
    const deleteResponse = await $api.venues.delete(id)
    toast.success(deleteResponse?.message)
  } catch (error: any) {
    console.log(error)
    toast.error(error?.data?.messages ?? 'Error')
  } finally {
    await getVenues()
    blockButtons.value = false
  }
}
const restoreVenue = async (id: string) => {
  try {
    blockButtons.value = true
    const restoreResponse = await $api.venues.restore(id)
    toast.success(restoreResponse?.message)
  } catch (error: any) {
    console.log(error)
    toast.error(error?.data?.messages ?? 'Error')
  } finally {
    await getVenues()
    blockButtons.value = false
  }
}
</script>

<template>
  <NuxtLayout name="syncolayout" pageTitle="Club Venues">
    <div class="row">
      <div class="col">
        <div class="d-flex justify-content-between mb-4">
          <h4>Club Venues</h4>
          <button class="btn btn-primary text-light" @click="openPanel(null)">
            + Add New Venue
          </button>
        </div>

        <table class="table-hover table-sm rounded-4 table border shadow-sm">
          <thead class="rounded-top-4">
            <tr class="table-light">
              <!-- <th scope="col">Checkbox</th> -->
              <th scope="col">
                <input
                  id="all-table"
                  class="form-check-input"
                  type="checkbox"
                  disabled
                />
                <label class="form-check-label text-muted ms-3" for="all-table">
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
                <input
                  :id="venue.id"
                  class="form-check-input"
                  type="checkbox"
                  value=""
                />
                <label class="form-check-label text-muted ms-3" :for="venue.id">
                  {{ venue.area }}
                </label>
              </th>
              <td>{{ venue.name }}</td>
              <td>{{ venue.address }}</td>
              <td>{{ venue.region }}</td>
              <td>
                <button class="btn btn-link px-1" v-if="venue.has_congestion">
                  <Icon name="emojione-monotone:letter-c" class="text-danger" />
                </button>
                <button class="btn btn-link px-1" v-if="venue.has_parking">
                  <Icon
                    name="emojione-monotone:letter-p"
                    class="text-success"
                  />
                </button>
              </td>
              <td>
                <button class="btn btn-link mx-1 px-1">
                  <Icon name="solar:calendar-line-duotone" />
                </button>
                <button
                  class="btn btn-link mx-1 px-1"
                  @click="openPanel(venue)"
                >
                  <Icon name="ph:pencil-simple-line" />
                </button>
                <button
                  class="btn btn-link mx-1 px-1"
                  @click="
                    !!venue.deleted_at
                      ? restoreVenue(venue.id)
                      : deleteVenue(venue.id)
                  "
                  :disabled="blockButtons"
                >
                  <Icon
                    :name="!!venue.deleted_at ? 'ph:recycle' : 'ph:trash'"
                  />
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
              {{ panelType }} Venue
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
                v-model="selectedVenue.area"
              />
            </div>
            <div class="mb-3">
              <label for="name" class="form-label">Name of Venue</label>
              <input
                id="name"
                type="text"
                class="form-control"
                placeholder="Chelsea Academy"
                v-model="selectedVenue.name"
              />
            </div>
            <div class="mb-3">
              <label for="address" class="form-label">Address</label>
              <input
                id="address"
                type="text"
                class="form-control"
                placeholder="Lots road, London, SW10 0AB"
                v-model="selectedVenue.address"
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
                      :value="true"
                      v-model="selectedVenue.has_parking"
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
                      :value="false"
                      v-model="selectedVenue.has_parking"
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
                      :value="true"
                      v-model="selectedVenue.has_congestion"
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
                      :value="false"
                      v-model="selectedVenue.has_congestion"
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
                v-model="selectedVenue.parking_note"
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
                v-model="selectedVenue.facility_enter_guide"
              ></textarea>
            </div>

            <div class="mb-3">
              <div class="form-group w-100 mb-3">
                <label for="Region" class="form-labelform-label-light"
                  >Region</label
                >
                <select
                  id="Region"
                  class="form-control form-control-lg"
                  v-model="selectedVenue.region"
                >
                  <option
                    v-for="(channel, index) in regions"
                    :value="channel.value"
                    :key="index"
                  >
                    {{ channel.label }}
                  </option>
                </select>
              </div>
              <!-- <label for="region" class="form-label">Region</label>
              <select
                id="region"
                class="form-select"
                aria-label="Default select example"
                v-model="selectedVenue.region"
              >
                <option selected>--</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select> -->
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
                @click="actionButton"
                :disabled="blockButtons"
              >
                {{ panelType }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
