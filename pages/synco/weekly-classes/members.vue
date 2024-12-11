<template>
  <NuxtLayout name="syncolayout" page-title="Members">
    <div class="row">
      <div class="col-sm-8">
        <div class="row row-cols-sm-4">
          <SyncoDashboardMetricsItem
            name="Total Students"
            :value="reporting?.total_students?.amount"
            :change="reporting?.total_students?.percentage"
            icon="ph:users-three"
            :remove-percentage="true"
          />
          <SyncoDashboardMetricsItem
            name="Monthly Revenue"
            :value="reporting?.monthly_revenue?.amount"
            :change="reporting?.monthly_revenue?.percentage"
            icon="ph:users-three"
            :remove-percentage="true"
          />
          <SyncoDashboardMetricsItem
            name="Av. Monthly Fee"
            :value="reporting?.average_monthly_fee?.amount"
            :change="reporting?.average_monthly_fee?.percentage"
            icon="ph:users-three"
            :remove-percentage="true"
          />
          <SyncoDashboardMetricsItem
            name="Av. Life Cycle"
            :value="reporting?.average_life_cycle?.amount"
            :change="reporting?.average_life_cycle?.percentage"
            icon="ph:users-three"
            :remove-percentage="true"
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
              <th scope="col">
                <input class="form-check-input" type="checkbox" disabled />
              </th>
              <!-- <th scope="col">Checkbox</th> -->
              <th scope="col">
                <label class="form-check-label text-muted" for="all-table">
                  Name
                </label>
              </th>
              <th class="text-muted" scope="col">Age</th>
              <th class="text-muted" scope="col">Venue</th>
              <th class="text-muted" scope="col">Date of booking</th>
              <th class="text-muted" scope="col">Who booked?</th>
              <th class="text-muted" scope="col">Membership plan</th>
              <th class="text-muted" scope="col">Lifecycle of membership</th>
              <th class="text-muted" scope="col">Status</th>
              <!-- <th></th> -->
            </tr>
          </thead>
          <tbody>
            <template v-for="(lead, index) in leads" :key="index">
              <LazySyncoWeeklyClassesMembersTableItem
                :lead="lead"
                @selected-guardian="selectedGuardian"
              />
            </template>
          </tbody>
        </table>
      </div>
      <div class="col">
        <SyncoWeeklyClassesFormsFindMember @apply-filter="applyFilter" />
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useToast } from 'vue-toast-notification'
import type {
  IWeeklyClassesMembers,
  IWeeklyClassesMembersReportingObject,
  IWeeklyClassesMembersFilterObject,
} from '~/types/synco/index'
import { generalStore } from '~/stores'
import { title } from 'process'

const updateKey = ref<number>(0)
const blockButtons = ref(false)
// const panel = ref(false)
// const panelType = ref<string>('')
const store = generalStore()

const { $api } = useNuxtApp()
const toast = useToast()
// const leads = ref<IWeeklyClassesMembers[]>([])
const leads = ref<any[]>([])
const selectedGuardians = ref<string[]>([])
const reporting = ref<IWeeklyClassesMembersReportingObject | null>(null)

// TODO: UPDATE THIS FUNCTION ONCE THE API RETURNS THE CORRECT DATA FOR THE VALUES N/A
const cleanLeadsData = (data: any) => {
  return data.map((item: any) => {
    return {
      id: item.id,
      student: item.student,
      venue: item.weekly_class.venue.name ?? 'N/A',
      date_of_booking: item.date_of_booking?.date ?? 'N/A',
      who_booked: item.booked_by?.user_name ?? 'N/A',
      membership_plan: item?.subscription_plan_price ?? 'N/A',
      lifecycle_of_membership:
        item.subscription_plan_price?.lifecycle_of_membership ?? 'Monthly',
      status: item.member_status ?? 'N/A',
    }
  })
}
const getLeads = async (source: number | null = null, limit: number = 25) => {
  try {
    blockButtons.value = true
    const response = await $api.wcMembers.getAll(limit)
    const data = cleanLeadsData(response?.data)
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
    const response = await $api.wcMembers.getReporting()
    reporting.value = response?.data
  } catch (error: any) {
    reporting.value = null
    toast.error(error?.message ?? 'Error')
  } finally {
    blockButtons.value = false
  }
}

onMounted(async () => {
  console.log('pages/synco/weekly-classes/members.vue')
  await getLeads()
  await getReporting()
})

const exportExcel = async () => {
  if (blockButtons.value) return
  try {
    blockButtons.value = true
    const excel = await $api.wcMembers.exportExcel()
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
    const response = await $api.wcMembers.sendText({
      message: message,
      weekly_class_member_id: guardianIds,
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
    const response = await $api.wcMembers.sendEmail({
      message: message,
      weekly_class_member_id: guardianIds,
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

const applyFilter = async (data: IWeeklyClassesMembersFilterObject) => {
  try {
    // data.referral_source_id = `${selectedReferralSourceId.value}`
    blockButtons.value = true
    const response = await $api.wcMembers.getByFilter(data, 25)
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
