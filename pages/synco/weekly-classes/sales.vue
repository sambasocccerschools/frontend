<template>
  <NuxtLayout name="syncolayout" page-title="Sales">
    <div class="row">
      <div class="col-sm-8">
        <div class="row row-cols-sm-4">
          <SyncoDashboardMetricsItem
            name="Total Sales"
            :value="reporting?.total_students?.amount"
            :change="reporting?.total_students?.percentage"
            :remove-percentage="true"
            icon="ph:users-three"
          />
          <SyncoDashboardMetricsItem
            name="Monthly Revenue"
            :value="reporting?.monthly_revenue?.amount"
            :change="reporting?.monthly_revenue?.percentage"
            :remove-percentage="true"
            icon="ph:users-three"
          />
          <SyncoDashboardMetricsItem
            name="Av. Monthly Fee"
            :value="reporting?.average_monthly_fee?.amount"
            :change="reporting?.average_monthly_fee?.percentage"
            :remove-percentage="true"
            icon="ph:users-three"
          />
          <SyncoDashboardMetricsItem
            name="Top Sales Agent"
            :value="reporting?.top_performer?.name"
            :change="reporting?.top_performer?.count"
            :remove-percentage="true"
            icon="ph:users-three"
          />
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
              <th class="text-muted" scope="col">Who booked?</th>
              <!-- <th class="text-muted" scope="col">Membership plan</th> -->
              <th class="text-muted" scope="col">Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(lead, index) in leads" :key="index">
              <LazySyncoWeeklyClassesSalesTableItem
                :lead="lead"
                @selected-guardian="selectedGuardian"
              />
            </template>
          </tbody>
        </table>
      </div>
      <div class="col">
        <SyncoWeeklyClassesFormsFindSales @apply-filter="applyFilter" />
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useToast } from 'vue-toast-notification'
import type {
  IWeeklyClassesSales,
  IWeeklyClassesSalesReportingObject,
  IWeeklyClassesSalesFilterObject,
} from '~/types/synco/index'
import { generalStore } from '~/stores'

const updateKey = ref<number>(0)
const blockButtons = ref(false)
// const panel = ref(false)
// const panelType = ref<string>('')
const store = generalStore()

const { $api } = useNuxtApp()
const toast = useToast()
const leads = ref<IWeeklyClassesSales[]>([])
const selectedGuardians = ref<string[]>([])
const reporting = ref<IWeeklyClassesSalesReportingObject | null>(null)

// TODO: UPDATE THIS FUNCTION ONCE THE API RETURNS THE CORRECT DATA FOR THE VALUES N/A
const cleanLeadsData = (data: any) => {
  return data.map((item: any) => {
    return {
      id: item.id,
      venue: item.weekly_class.venue_id.name ?? 'N/A',
      student: item.student,
      status: item.sale_status_code ?? 'N/A',
      membership_plan: item.subscription_plan_price ?? 'Monthly',
      booked_by: item.booked_by?.name ?? 'N/A',
      created_date: item.created_date ?? 'N/A',
      updated_date: item.updated_date ?? 'N/A',
    }
  })
}

const getLeads = async (source: number | null = null, limit: number = 25) => {
  try {
    blockButtons.value = true
    const response = await $api.wcSales.getAll(limit)
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
    const response = await $api.wcSales.getReporting()
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
  console.log('pages/synco/weekly-classes/sales.vue')
  await getLeads()
  await getReporting()
})

const exportExcel = async () => {
  if (blockButtons.value) return
  try {
    blockButtons.value = true
    const excel = await $api.wcSales.exportExcel()
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
    const response = await $api.wcSales.sendText({
      message: message,
      weekly_classes_sale_id: guardianIds,
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
    const response = await $api.wcSales.sendEmail({
      message: message,
      weekly_classes_sale_id: guardianIds,
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

const applyFilter = async (data: IWeeklyClassesSalesFilterObject) => {
  try {
    // data.referral_source_id = `${selectedReferralSourceId.value}`
    blockButtons.value = true
    const response = await $api.wcSales.getByFilter(data, 25)
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
