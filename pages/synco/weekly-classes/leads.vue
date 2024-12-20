<template>
  <NuxtLayout name="syncolayout" page-title="Leads Database">
    <div class="row">
      <div class="col-sm-8">
        <div class="row mb-3">
          <div class="col">
            <ul class="nav nav-pills">
              <li
                class="nav-item rounded-3 show-pointer me-2 border"
                @click="selectReferralSource('All')"
              >
                <span
                  class="nav-link"
                  :class="
                    selectedReferralSource == 'All' ? 'active' : 'text-dark'
                  "
                  >All</span
                >
              </li>
              <template v-if="referralSources.length">
                <template v-for="source in referralSources" :key="source.id">
                  <li
                    class="nav-item rounded-3 show-pointer me-2 border"
                    @click="selectReferralSource(source.title)"
                  >
                    <span
                      class="nav-link"
                      :class="
                        selectedReferralSource == source.title
                          ? 'active'
                          : 'text-dark'
                      "
                      >{{ source.title }}</span
                    >
                  </li>
                </template>
              </template>
            </ul>
          </div>
        </div>

        <div class="row row-cols-sm-4">
          <SyncoDashboardMetricsItem
            name="Total Leads"
            :value="reporting?.total_leads?.amount"
            :change="reporting?.total_leads?.percentage"
            icon="ph:users-three"
          />
          <SyncoDashboardMetricsItem
            name="New Leads"
            :value="reporting?.new_leads?.amount"
            :change="reporting?.new_leads?.percentage"
            icon="ph:users-three"
            :remove-percentage="true"
          />
          <SyncoDashboardMetricsItem
            name="Leads to trials"
            :value="reporting?.leads_to_trials?.amount"
            :change="reporting?.leads_to_trials?.percentage"
            icon="ph:users-three"
          />
          <SyncoDashboardMetricsItem
            name="Leads to sales"
            :value="reporting?.leads_to_sales?.amount"
            :change="reporting?.leads_to_sales?.percentage"
            icon="ph:users-three"
          />
        </div>

        <div class="d-flex justify-content-between pb-3 pt-4">
          <h4>Weekly Classes {{ selectedReferralSource }} Leads</h4>
          <div>
            <NuxtLink
              to="/synco/weekly-classes/create/lead"
              class="btn btn-primary text-light ms-2 shadow-sm"
              >+ Add a new lead
            </NuxtLink>
          </div>
        </div>
        <div>
          <SyncoDataOptions
            @export-excel="exportExcel"
            @send-email="sendEmail"
            @send-text="sendText"
          />
        </div>

        <table class="table-hover rounded-4 mt-4 table border">
          <thead class="rounded-top-4">
            <tr class="table-light">
              <th scope="col">
                <input class="form-check-input" type="checkbox" disabled />
              </th>
              <!-- <th scope="col">Checkbox</th> -->
              <th scope="col">
                <label class="form-check-label text-muted" for="all-table">
                  Date
                </label>
              </th>
              <th class="text-muted" scope="col">Parent name</th>
              <th class="text-muted" scope="col">Email</th>
              <th class="text-muted" scope="col">Phone</th>
              <th class="text-muted" scope="col">Postcode</th>
              <th class="text-muted" scope="col">Kid range</th>
              <th class="text-muted" scope="col">Assigned Agent</th>
              <th class="text-muted" scope="col">Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(lead, index) in leads" :key="index">
              <LazySyncoWeeklyClassesLeadsListItem
                :lead="lead"
                @selected-guardian="selectedGuardian"
              />
            </template>
          </tbody>
        </table>
      </div>
      <div class="col">
        <SyncoWeeklyClassesFormsFindLead @apply-filter="applyFilter" />
      </div>
    </div>
  </NuxtLayout>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useToast } from 'vue-toast-notification'
import type {
  IWeeklyClassesLead,
  IWeeklyClassesLeadsReportingObject,
  IWeeklyClassesLeadFilterObject,
} from '~/types/synco/index'
import { generalStore } from '~/stores'

const updateKey = ref<number>(0)
const blockButtons = ref(false)
// const panel = ref(false)
// const panelType = ref<string>('')
const store = generalStore()

const { $api } = useNuxtApp()
const toast = useToast()
const leads = ref<IWeeklyClassesLead[]>([])
const selectedReferralSource = ref<string>('All')
const selectedReferralSourceId = ref<number>(0)
const selectedGuardians = ref<string[]>([])
const reporting = ref<IWeeklyClassesLeadsReportingObject | null>(null)

const cleanLeadsData = (data: any) => {
  return data.map((item: any) => {
    return {
      id: item.id,
      guardian: item.guardian,
      phone: item.guardian?.phone,
      postcode: item.guardian?.postcode,
      kid_range: item.kid_range,
      status: item.lead_status_code,
      agent: item.agent?.user_name,
      created_at: item.created_date,
      venue: item.weekly_class?.venue,
    }
  })
}

const getLeads = async (source: number | null = null, limit: number = 25) => {
  try {
    blockButtons.value = true
    const response = !source
      ? await $api.wcLeads.getAll(limit)
      : await $api.wcLeads.getByReferralSource(source, limit)
    const data = cleanLeadsData(response?.data)
    leads.value = data
  } catch (error: any) {
    leads.value = []
    console.log(error)
    toast.error(error?.message ?? 'Error')
  } finally {
    blockButtons.value = false
  }
}
const getReporting = async () => {
  try {
    blockButtons.value = true
    const response = await $api.wcLeads.getReporting()
    reporting.value = response?.data
  } catch (error: any) {
    reporting.value = null
    console.log(error)
    toast.error(error?.message ?? 'Error')
  } finally {
    blockButtons.value = false
  }
}

const referralSources = store.referralSources

onMounted(async () => {
  console.log('pages/synco/weekly-classes/leads.vue')
  await getLeads()
  // await getReporting()
})

const selectReferralSource = async (source: string) => {
  if (blockButtons.value) return
  selectedGuardians.value = []
  selectedReferralSource.value = source
  if (source == 'All') {
    selectedReferralSourceId.value = 0
    await getLeads()
  } else if (referralSources.some((x) => x.title == source)) {
    const referralSource = referralSources.find((x) => x.title == source)
    if (!referralSource) return
    selectedReferralSourceId.value = referralSource.id
    await getLeads(referralSource?.id)
  } else {
    await getLeads()
  }
}

const exportExcel = async () => {
  if (blockButtons.value) return
  try {
    blockButtons.value = true
    const excel = await $api.wcLeads.exportExcel()
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
    const response = await $api.wcLeads.sendText({
      message: message,
      weekly_classes_lead_id: guardianIds,
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
    const response = await $api.wcLeads.sendEmail({
      message: message,
      weekly_classes_lead_id: guardianIds,
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

const applyFilter = async (data: IWeeklyClassesLeadFilterObject) => {
  try {
    data.referral_source_id = `${selectedReferralSourceId.value}`
    blockButtons.value = true
    const response = await $api.wcLeads.getByFilter(data, 25)
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
.show-pointer {
  cursor: pointer;
}
</style>
