<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useToast } from 'vue-toast-notification'
import type {
  IVenueItem,
  IVenueCreateItem,
  IAutoCompleteObject,
} from '~/types/synco/index'
// import type { IRegionItem } from '~/types/index'
import { generalStore } from '~/stores'

const updateKey = ref<number>(0)
const blockButtons = ref(false)
const panel = ref(false)
const panelType = ref<string>('')
const store = generalStore()

const { $api } = useNuxtApp()
const toast = useToast()
const venues = ref<IVenueItem[]>([])
const availableVenues = ref<IVenueItem[]>([])
const autoCompleteVenues = ref<IAutoCompleteObject[]>([])
const emptyVenue = ref<IVenueCreateItem>({
  area: '',
  address: '',
  facility_enter_guide: '',
  has_congestion: false,
  has_parking: false,
  latitude: 0,
  longitude: 0,
  name: '',
  parking_note: '',
  price: 0,
  region_code: '',
})

const selectedVenueId = ref<string>('')
const selectedVenue = ref<IVenueCreateItem>({
  area: '',
  address: '',
  facility_enter_guide: '',
  has_congestion: false,
  has_parking: false,
  latitude: 0,
  longitude: 0,
  name: '',
  parking_note: '',
  region_code: '',
  price: 0,
})

const regions = store.regions
const blockFields = ref<boolean>(false)

const getVenues = async () => {
  try {
    const venuesResponse = await $api.venues.getAll()
    venues.value = venuesResponse?.data
  } catch (error: any) {
    venues.value = []
    console.log(error)
    toast.error(error?.data?.messages ?? 'Error')
  }
}

const getAllVenues = async () => {
  try {
    const response = await $api.venues.getAll()
    availableVenues.value = response?.data
    autoCompleteVenues.value = response?.data?.map((x) => {
      return {
        value: x.name,
        label: x.name,
      }
    })
  } catch (error: any) {
    autoCompleteVenues.value = []
    console.log(error)
    toast.error(error?.data?.messages ?? 'Error')
  }
}
onMounted(async () => {
  console.log('pages/synco/config/weekly-classes/venues.vue')
  await getVenues()
  await getAllVenues()
  await store.fetchAllData()
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
      has_congestion: !!item.has_congestion,
      has_parking: !!item.has_parking,
      latitude: item.latitude,
      longitude: item.longitude,
      name: item.name,
      parking_note: item.parking_note,
      region_code: item.region.code,
      price: item.price,
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
    } else if (panelType.value == 'Add to service') {
      selectedVenue.value.id = selectedVenueId.value
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

const selectExistingVenue = (value: string, options: IAutoCompleteObject) => {
  selectedVenue.value.name = value
  const venue = availableVenues.value.find((x) => x.name == value)
  if (venue) {
    panelType.value = 'Add to service'
    selectedVenue.value = {
      address: venue.address,
      area: venue.area,
      facility_enter_guide: venue.facility_enter_guide,
      has_congestion: venue.has_congestion,
      has_parking: venue.has_parking,
      latitude: venue.latitude,
      longitude: venue.longitude,
      name: venue.name,
      parking_note: venue.parking_note,
      region_code: venue.region.code,
      price: venue.price,
    }
    selectedVenueId.value = venue.id
    blockFields.value = true
  } else {
    blockFields.value = false
  }
}
</script>

<template>
  <NuxtLayout name="syncolayout" page-title="Weekly Classes Venues">
    <div class="row">
      <div class="col">
        <div class="d-flex justify-content-between mb-4">
          <h4>Weekly Classes Venues</h4>
          <button class="btn btn-primary text-light" @click="openPanel(null)">
            + Add New Venue
          </button>
        </div>

        <div class="table-responsive">
          <table
            class="table-bordered table-sm w-100 rounded-4 table shadow-sm"
          >
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
              <tr v-for="venue in venues" class="align-middle">
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
                <td>{{ venue.region.title }}</td>
                <td>
                  <button v-if="venue.has_congestion" class="btn btn-link px-1">
                    <Icon name="emojione-monotone:letter-c" class="text-danger" />
                  </button>
                  <button v-if="venue.has_parking" class="btn btn-link px-1">
                    <Icon
                      name="emojione-monotone:letter-p"
                      class="text-success"
                    />
                  </button>
                </td>
                <td>
                  <NuxtLink
                    class="btn btn-link mx-1 px-1"
                    :to="`/synco/config/weekly-classes/schedule-classes/${venue.id}`"
                  >
                    <Icon name="solar:calendar-line-duotone" />
                  </NuxtLink>
                  <!-- <button class="btn btn-link px-1">
                    <Icon name="solar:calendar-line-duotone" />
                  </button> -->
                  <button
                    class="btn btn-link mx-1 px-1"
                    @click="openPanel(venue)"
                  >
                    <Icon name="ph:pencil-simple-line" />
                  </button>
                  <button
                    class="btn btn-link mx-1 px-1"
                    :disabled="blockButtons"
                    @click="
                      !!venue.deleted_at
                        ? restoreVenue(venue.id)
                        : deleteVenue(venue.id)
                    "
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
              <label for="name" class="form-label">Name of Venue</label>
              <!-- <input
                id="name"
                type="text"
                class="form-control"
                placeholder="Chelsea Academy"
                v-model="selectedVenue.name"
              /> -->
              <a-auto-complete
                v-model:value="selectedVenue.name"
                class="w-100"
                :options="autoCompleteVenues"
                @select="selectExistingVenue"
              />
            </div>
            <div class="mb-3">
              <label for="area" class="form-label">Area</label>
              <input
                id="area"
                v-model="selectedVenue.area"
                type="text"
                class="form-control"
                placeholder="Chelsea"
                :disabled="blockFields"
              />
            </div>
            <div class="mb-3">
              <label for="address" class="form-label">Address</label>
              <input
                id="address"
                v-model="selectedVenue.address"
                type="text"
                class="form-control"
                placeholder="Lots road, London, SW10 0AB"
                :disabled="blockFields"
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
                      v-model="selectedVenue.has_parking"
                      class="form-check-input"
                      type="radio"
                      name="parking"
                      :value="true"
                      :disabled="blockFields"
                    />
                    <label class="form-check-label" for="parkingyes">
                      Yes
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      id="parkingno"
                      v-model="selectedVenue.has_parking"
                      class="form-check-input"
                      type="radio"
                      name="parking"
                      :value="false"
                      :disabled="blockFields"
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
                      v-model="selectedVenue.has_congestion"
                      class="form-check-input"
                      type="radio"
                      name="congestion"
                      :value="true"
                      :disabled="blockFields"
                    />
                    <label class="form-check-label" for="congestionyes">
                      Yes
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      id="congestionno"
                      v-model="selectedVenue.has_congestion"
                      class="form-check-input"
                      type="radio"
                      name="congestion"
                      :value="false"
                      :disabled="blockFields"
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
                v-model="selectedVenue.parking_note"
                class="form-control"
                placeholder="Add a parking note"
                :disabled="blockFields"
              ></textarea>
              <label for="parking-note">Add a parking note</label>
            </div>
            <div class="mb-3">
              <label for="enter-facility" class="form-label"
                >How to enter facility</label
              >
              <textarea
                id="enter-facility"
                v-model="selectedVenue.facility_enter_guide"
                class="form-control"
                placeholder="Add notes"
                :disabled="blockFields"
              ></textarea>
            </div>

            <div class="mb-3">
              <div class="form-group w-100 mb-3">
                <label for="Region" class="form-label">Region</label>
                <select
                  id="Region"
                  v-model="selectedVenue.region_code"
                  class="form-control form-control-lg"
                  :disabled="blockFields"
                >
                  <option
                    v-for="(region, index) in regions"
                    :key="index"
                    :value="region.code"
                  >
                    {{ region.title }}
                  </option>
                </select>
              </div>
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
                :disabled="blockButtons"
                @click="actionButton"
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
<style scoped>
.table {
  border: 1px solid #e2e1e5;
  border-radius: 12px;
  overflow: hidden; /* para que las esquinas redondeadas se vean */
}

.table th,
.table td {
  vertical-align: middle;
  border: none; /* importante: elimina las líneas internas */
  font-size: 14px;
  padding: 0.75rem;
}

.table thead th {
  background-color: #f4f4f4; /* gris claro */
  color: #6b7280; /* gris opaco, como tailwind's text-gray-500 */
  font-weight: 600;
  font-size: 14px;
  border-bottom: 1px solid #dee2e6;
}

.table thead th:first-child {
  border-top-left-radius: 12px;
}
.table thead th:last-child {
  border-top-right-radius: 12px;
}

.table tbody tr:last-child td:first-child {
  border-bottom-left-radius: 12px;
}
.table tbody tr:last-child td:last-child {
  border-bottom-right-radius: 12px;
}

.table .btn-link {
  font-size: 22px;
  color: #717073;
}

.table .btn-link:hover {
  color: #252526;
}
</style>
