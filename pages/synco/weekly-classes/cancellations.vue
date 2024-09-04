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
            :value="reporting?.total_requests.amount"
            :change="reporting?.total_requests.percentage"
            :removePercentage="true"
            icon="ph:users-three"
          />
          <SyncoDashboardMetricsItem
            name="Membership Tenure"
            :value="reporting?.membership_tenture.amount"
            :change="reporting?.membership_tenture.percentage"
            :removePercentage="true"
            icon="ph:users-three"
          />
          <SyncoDashboardMetricsItem
            name="Top Reasons for request to cancel"
            :value="reporting?.top_cancel_reason.name"
            :change="reporting?.top_cancel_reason.count"
            :removePercentage="true"
            icon="ph:users-three"
          />
          <SyncoDashboardMetricsItem
            name="Venue with most requests"
            :value="reporting?.most_requested_venue.name"
            :change="reporting?.most_requested_venue.count"
            :removePercentage="true"
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
            @exportExcel="exportExcel"
            @send-email="sendEmail"
            @send-text="sendText"
          />
        </div>
        <table class="table-hover rounded-4 mt-4 table border">
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
          <tbody>
            <template v-for="lead in leads">
              <LazySyncoWeeklyClassesCancellationsTableItem
                :lead="lead"
                @selectedGuardian="selectedGuardian"
              />
            </template>
          </tbody>
        </table>
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
const leads = ref<IWeeklyClassesCancellation[]>([])
const selectedGuardians = ref<string[]>([])
const reporting = ref<IWeeklyClassesCancellationReportingObject | null>(null)
const getLeads = async (source: number | null = null, limit: number = 25) => {
  try {
    blockButtons.value = true
    const response = await $api.wcCancellation.getAll(limit)
    leads.value = response?.data
  } catch (error: any) {
    leads.value = []
    console.log(error)
    toast.error(error?.data?.messages ?? 'Error')
  } finally {
    blockButtons.value = false
  }
}
const getReporting = async () => {
  try {
    blockButtons.value = true
    const response = await $api.wcCancellation.getReporting()
    reporting.value = response?.data
  } catch (error: any) {
    leads.value = []
    console.log(error)
    toast.error(error?.data?.messages ?? 'Error')
  } finally {
    blockButtons.value = false
  }
}

onMounted(async () => {
  console.log('pages/synco/weekly-classes/cancellations.vue')
  await getLeads()
  await getReporting()
})

const exportExcel = async () => {
  if (blockButtons.value) return
  try {
    blockButtons.value = true
    let excel = await $api.wcCancellation.exportExcel()
    store.downloadExcelFile(excel.data.url, excel.data.name)
  } catch (error: any) {
    console.log(error)
    toast.error(error?.data?.messages ?? 'Error')
  } finally {
    blockButtons.value = false
  }
}

const sendText = async () => {
  if (blockButtons.value) return

  let guardianIds = selectedGuardians.value.filter(
    (value, index, array) => array.indexOf(value) == index,
  )
  if (guardianIds.length == 0) {
    alert('Select any row')
    return
  }
  let message = prompt('Write text message.')
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
    toast.error(error?.data?.messages ?? 'Error')
  } finally {
    blockButtons.value = false
  }
}
const sendEmail = async () => {
  if (blockButtons.value) return
  let guardianIds = selectedGuardians.value.filter(
    (value, index, array) => array.indexOf(value) == index,
  )
  if (guardianIds.length == 0) {
    alert('Select any row')
    return
  }
  let message = prompt('Write email message.')
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
    toast.error(error?.data?.messages ?? 'Error')
  } finally {
    blockButtons.value = false
  }
}

const selectedGuardian = (data: any) => {
  console.log(data)
  if (!data.value) {
    let dataIndex = selectedGuardians.value.indexOf(data.id)
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
    leads.value = response?.data
  } catch (error: any) {
    leads.value = []
    console.log(error)
    toast.error(error?.data?.messages ?? 'Error')
  } finally {
    blockButtons.value = false
  }
}
</script>
