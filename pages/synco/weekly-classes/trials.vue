<template>
  <NuxtLayout name="syncolayout" page-title="Trials Information">
    <div class="row">
      <div class="col-sm-8">
        <div class="row row-cols-sm-4">
          <SyncoDashboardMetricsItem
            name="Total Free Trials"
            :value="reporting?.total_free_trials.amount"
            :change="reporting?.total_free_trials.percentage"
            :removePercentage="true"
            icon="ph:users-three"
          />
          <SyncoDashboardMetricsItem
            name="Top Performer"
            :value="reporting?.top_performer.name"
            :change="reporting?.top_performer.count"
            :removePercentage="true"
            icon="ph:users-three"
          />
          <SyncoDashboardMetricsItem
            name="Free Trials to Member"
            :value="reporting?.trials_to_member.amount"
            :change="reporting?.trials_to_member.percentage"
            :removePercentage="true"
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
            <template v-for="lead in leads">
              <LazySyncoWeeklyClassesTrialsTableItem
                :lead="lead"
                @selectedGuardian="selectedGuardian"
              />
            </template>
          </tbody>
        </table>
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
const getLeads = async (source: number | null = null, limit: number = 25) => {
  try {
    blockButtons.value = true
    const response = await $api.wcFreeTrials.getAll(limit)
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
    const response = await $api.wcFreeTrials.getReporting()
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
  console.log('pages/synco/weekly-classes/trials.vue')
  await getLeads()
  await getReporting()
})

const exportExcel = async () => {
  if (blockButtons.value) return
  try {
    blockButtons.value = true
    let excel = await $api.wcFreeTrials.exportExcel()
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
    const response = await $api.wcFreeTrials.sendText({
      message: message,
      weekly_classes_free_trial_id: guardianIds,
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
    const response = await $api.wcFreeTrials.sendEmail({
      message: message,
      weekly_classes_free_trial_id: guardianIds,
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

const applyFilter = async (data: IWeeklyClassesFreeTrialsFilterObject) => {
  try {
    // data.referral_source_id = `${selectedReferralSourceId.value}`
    blockButtons.value = true
    const response = await $api.wcFreeTrials.getByFilter(data, 25)
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
