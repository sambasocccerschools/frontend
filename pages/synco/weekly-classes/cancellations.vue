<template>
  <NuxtLayout name="syncolayout" page-title="Cancellations">
    <div class="row">
      <div class="col-sm-8">
        <div class="row mb-3">
          <div class="col">
            <ul class="nav nav-pills">
              <li class="nav-item rounded-3 me-2">
                <a class="nav-link active" aria-current="page" href="#"
                  >Request to cancel</a
                >
              </li>
              <li class="nav-item rounded-3 me-2 border">
                <a class="nav-link text-dark" href="#">Full Cancellation</a>
              </li>
              <li class="nav-item rounded-3 border">
                <a class="nav-link text-dark" href="#">All</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="row row-cols-sm-4">
          <SyncoDashboardMetricsItem
            name="Total Requests"
            :value="reporting?.total_requests?.amount"
            :change="reporting?.total_requests?.percentage"
            :remove-percentage="true"
            icon="ph:users-three"
          />
          <SyncoDashboardMetricsItem
            name="Membership Tenure"
            :value="reporting?.membership_tenture?.amount"
            :change="reporting?.membership_tenture?.percentage"
            :remove-percentage="true"
            icon="ph:users-three"
          />
          <SyncoDashboardMetricsItem
            name="Top Reasons for request to cancel"
            :value="reporting?.top_cancel_reason?.name"
            :change="reporting?.top_cancel_reason?.count"
            :remove-percentage="true"
            icon="ph:users-three"
          />
          <SyncoDashboardMetricsItem
            name="Venue with most requests"
            :value="reporting?.most_requested_venue?.name"
            :change="reporting?.most_requested_venue?.count"
            :remove-percentage="true"
            icon="ph:users-three"
          />
        </div>

        <!-- <div class="d-flex justify-content-end py-3">

          <div class="btn-group">
            <button type="button" class="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown"
              aria-expanded="false">
              <Icon name="material-symbols:person-add" />
            </button>
            <div class="dropdown-menu dropdown-menu-end border-0">
              <li>
                <h6 class="dropdown-header">Select Agent</h6>
              </li>

              <form class="px-4 py-3">
                <div class="form-check mb-3 d-flex align-items-center">
                  <input type="checkbox" class="form-check-input me-2" id="agent-1">
                  <label class="form-check-label" for="agent-1">
                    <img src="@/src/assets/img-avatar-jaffar.png" alt="jaffar">
                    Jaffar
                  </label>
                </div>
                <div class="form-check mb-3 d-flex align-items-center">
                  <input type="checkbox" class="form-check-input me-2" id="agent-2">
                  <label class="form-check-label" for="agent-2">
                    <img src="@/src/assets/img-avatar-jaffar.png" alt="jaffar">

                    Jaffar
                  </label>
                </div>
                <button type="submit" class="btn btn-primary w-100 text-light">Next</button>
              </form>
            </div>
          </div>
        </div> -->

        <h4 class="mt-4">Request to cancel</h4>

        <div>
          <SyncoDataOptions
            @export-excel="exportExcel"
            @send-email="sendEmail"
            @send-text="sendText"
          />
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
                    value=""
                  />
                </th>
                <th scope="col">
                  <label class="form-check-label text-muted" for="all-table">
                    Parent name
                  </label>
                </th>
                <th class="text-muted" scope="col">Number of Student</th>
                <th class="text-muted" scope="col">Venue</th>
                <th class="text-muted" scope="col">Date booked</th>
                <th class="text-muted" scope="col">Date of request</th>
                <th class="text-muted" scope="col">Reason</th>
                <th class="text-muted" scope="col">Status</th>
              </tr>
            </thead>
            <!-- <tbody>
              <template
                v-for="cancellation in cancellations"
                :key="Number(cancellation.id)"
              >
                <LazySyncoWeeklyClassesCancellationsTableItem
                  :cancellation="cancellation"
                  @selected-guardian="selectedGuardian"
                />
              </template>
            </tbody> -->
            <tbody>
              <template
                v-for="(cancellation, index) in cancellations"
                :key="cancellation?.id || `cancellation-${index}`"
              >
                <LazySyncoWeeklyClassesCancellationsTableItem
                  v-if="cancellation && cancellation.id"
                  :cancellation="cancellation"
                  @selected-guardian="selectedGuardian"
                />
                <tr v-else>
                  <td colspan="8" class="text-danger text-center">
                    Invalid cancellation data
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col">
        <SyncoWeeklyClassesFormsFindCancellation @apply-filter="applyFilter" />
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useToast } from 'vue-toast-notification'
import type {
  IWeeklyClassesCancellation,
  IWeeklyClassesCancellationReportingObject,
  IWeeklyClassesCancellationFilterObject,
} from '~/types/synco/index'
import { generalStore } from '~/stores'

const updateKey = ref<number>(0)
const blockButtons = ref(false)
// const panel = ref(false)
// const panelType = ref<string>('')
const store = generalStore()

const { $api } = useNuxtApp()
const toast = useToast()
const cancellations = ref<IWeeklyClassesCancellation[]>([])
const selectedGuardians = ref<string[]>([])
const reporting = ref<IWeeklyClassesCancellationReportingObject | null>(null)
const getCancellations = async () => {
  try {
    blockButtons.value = true
    const response = await $api.wcCancellation.getAll()
    cancellations.value = response?.data
    console.log
  } catch (error: any) {
    cancellations.value = []
    console.log(error)
    toast.error(error?.message ?? 'Error')
  } finally {
    blockButtons.value = false
  }
}
// const getReporting = async () => {
//   try {
//     blockButtons.value = true
//     const response = await $api.wcCancellation.getReporting()
//     reporting.value = response?.data
//   } catch (error: any) {
//     reporting.value = null
//     console.log(error)
//     toast.error(error?.message ?? 'Error')
//   } finally {
//     blockButtons.value = false
//   }
// }

onMounted(async () => {
  console.log('pages/synco/weekly-classes/cancellations.vue')
  await getCancellations()
  // await getReporting()
})

const exportExcel = async () => {
  if (blockButtons.value) return
  try {
    blockButtons.value = true
    const excel = await $api.wcCancellation.exportExcel()
    store.downloadExcelFile(excel.data.url, excel.data.name)
  } catch (error: any) {
    console.log(error)
    toast.error(error?.message ?? 'Error')
  } finally {
    blockButtons.value = false
  }
}

const sendText = async () => {
  if (blockButtons.value) return

  const guardianIds = selectedGuardians.value.filter(
    (value, index, array) => array.indexOf(value) == index,
  )
  if (guardianIds.length == 0) {
    alert('Select any row')
    return
  }
  const message = prompt('Write text message.')
  if (!message) return
  try {
    blockButtons.value = true
    const response = await $api.wcCancellation.sendText({
      message: message,
      weekly_classes_cancellation_id: guardianIds,
    })
    toast.success(response?.message ?? 'Error')
  } catch (error: any) {
    console.log(error)
    toast.error(error?.message ?? 'Error')
  } finally {
    blockButtons.value = false
  }
}
const sendEmail = async () => {
  if (blockButtons.value) return
  const guardianIds = selectedGuardians.value.filter(
    (value, index, array) => array.indexOf(value) == index,
  )
  if (guardianIds.length == 0) {
    alert('Select any row')
    return
  }
  const message = prompt('Write email message.')
  if (!message) return
  try {
    blockButtons.value = true
    const response = await $api.wcCancellation.sendEmail({
      message: message,
      weekly_classes_cancellation_id: guardianIds,
    })
    toast.success(response?.message ?? 'Error')
  } catch (error: any) {
    console.log(error)
    toast.error(error?.message ?? 'Error')
  } finally {
    blockButtons.value = false
  }
}

const selectedGuardian = (data: any) => {
  if (!data.value) {
    const dataIndex = selectedGuardians.value.indexOf(data.id)
    if (dataIndex >= 0) {
      selectedGuardians.value.splice(dataIndex, 1)
    }
  } else {
    selectedGuardians.value.push(data.id)
  }
}

const applyFilter = async (data: IWeeklyClassesCancellationFilterObject) => {
  try {
    // data.referral_source_id = `${selectedReferralSourceId.value}`
    blockButtons.value = true
    const response = await $api.wcCancellation.getByFilter(data, 25)
    cancellations.value = response?.data
  } catch (error: any) {
    cancellations.value = []
    console.log(error)
    toast.error(error?.message ?? 'Error')
  } finally {
    blockButtons.value = false
  }
}
</script>
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
