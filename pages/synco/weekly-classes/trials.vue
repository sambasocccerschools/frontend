<template>
  <NuxtLayout name="syncolayout" page-title="Trials Information">
    <div class="row">
      <div class="col-sm-8">
        <div class="row row-cols-sm-4">
          <SyncoDashboardMetricsItem
            name="Total Free Trials"
            :value="reporting?.total_free_trials?.amount"
            :change="reporting?.total_free_trials?.percentage"
            :remove-percentage="true"
            icon="ph:users-three"
          />
          <SyncoDashboardMetricsItem
            name="Top Performer"
            :value="reporting?.top_performer?.name"
            :change="reporting?.top_performer?.count"
            :remove-percentage="true"
            icon="ph:users-three"
          />
          <SyncoDashboardMetricsItem
            name="Free Trials to Member"
            :value="reporting?.trials_to_member?.amount"
            :change="reporting?.trials_to_member?.percentage"
            :remove-percentage="true"
            icon="ph:users-three"
          />
          <!-- <SyncoDashboardMetricsItem
            name=""
            value=""
            change=""
            :removePercentage="true"
            icon="ph:users-three"
          /> -->
        </div>

        <!-- <div class="d-flex justify-content-end py-3">
          <SyncoFiltersAgentsDropdown />
        </div> -->

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
                    Name
                  </label>
                </th>
                <th class="text-muted" scope="col">Age</th>
                <th class="text-muted" scope="col">Venue</th>
                <th class="text-muted" scope="col">Date of booking</th>
                <th class="text-muted" scope="col">Date of Trial</th>
                <th class="text-muted" scope="col">Source</th>
                <th class="text-muted" scope="col">Attempts</th>
                <th class="text-muted" scope="col">Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <template v-for="lead in leads" :key="lead.id">
                <LazySyncoWeeklyClassesTrialsTableItem
                  :lead="lead"
                  @selected-guardian="selectedGuardian"
                />
              </template>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col">
        <SyncoWeeklyClassesFormsFindTrial @apply-filter="applyFilter" />
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useToast } from 'vue-toast-notification'
import type {
  IWeeklyClassesFreeTrials,
  IWeeklyClassesFreeTrialReportingObject,
  IWeeklyClassesFreeTrialsFilterObject,
} from '~/types/synco/index'
import { generalStore } from '~/stores'

const updateKey = ref<number>(0)
const blockButtons = ref(false)
// const panel = ref(false)
// const panelType = ref<string>('')
const store = generalStore()

const { $api } = useNuxtApp()
const toast = useToast()
const leads = ref<IWeeklyClassesFreeTrials[]>([])
const selectedGuardians = ref<string[]>([])
const reporting = ref<IWeeklyClassesFreeTrialReportingObject | null>(null)

const cleanLeadsData = (data: any) => {
  return data.map((item: any) => {
    return {
      id: item.id,
      attemp: item.attempt,
      student: item.student,
      venue: item.weekly_class.venue.name ?? 'N/A',
      date_of_booking: item.created_date ?? 'N/A',
      who_booked: item.booked_by?.user_name ?? 'N/A',
      membership_plan: '',
      lifecycle_of_membership: '',
      free_trial_status: item.free_trial_status ?? 'N/A',
      family_id: item.student.family.id,
      trial_date: item.trial_date ?? 'N/A',
    }
  })
}

const getLeads = async (source: number | null = null, limit: number = 25) => {
  try {
    blockButtons.value = true
    const response = await $api.wcFreeTrials.getAll(limit)
    const data = cleanLeadsData(response?.data)
    console.log('data')
    console.log(data)
    leads.value = data
  } catch (error: any) {
    leads.value = []
    toast.error(error?.message ?? 'Error')
  } finally {
    blockButtons.value = false
  }
}

const getReporting = async () => {
  try {
    blockButtons.value = true
    const response = await $api.wcFreeTrials.getReporting()
    reporting.value = response?.data
  } catch (error: any) {
    reporting.value = null
    console.log(error)
    toast.error(error?.message ?? 'Error')
  } finally {
    blockButtons.value = false
  }
}

onMounted(async () => {
  console.log('pages/synco/weekly-classes/trials.vue')
  await getLeads()
  // await getReporting()
})

const exportExcel = async () => {
  if (blockButtons.value) return
  try {
    blockButtons.value = true
    const excel = await $api.wcFreeTrials.exportExcel()
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
    const response = await $api.wcFreeTrials.sendText({
      message: message,
      weekly_classes_free_trial_id: guardianIds,
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
    const response = await $api.wcFreeTrials.sendEmail({
      message: message,
      weekly_classes_free_trial_id: guardianIds,
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
  console.log(data)
  if (!data.value) {
    const dataIndex = selectedGuardians.value.indexOf(data.id)
    if (dataIndex >= 0) {
      selectedGuardians.value.splice(dataIndex, 1)
    }
  } else {
    selectedGuardians.value.push(data.id)
  }
}

const applyFilter = async (data: IWeeklyClassesFreeTrialsFilterObject) => {
  try {
    // data.referral_source_id = `${selectedReferralSourceId.value}`
    blockButtons.value = true
    const response = await $api.wcFreeTrials.getByFilter(data, 25)
    leads.value = response?.data
  } catch (error: any) {
    leads.value = []
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