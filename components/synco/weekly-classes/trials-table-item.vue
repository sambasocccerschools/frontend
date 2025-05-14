<script setup lang="ts">
import { ref } from 'vue'
import { useToast } from 'vue-toast-notification'
import type { IWeeklyClassesFreeTrials } from '~/types/synco/index'
import { generalStore } from '~/stores'
import { format, parseISO, addDays } from 'date-fns'

const props = defineProps<{
  lead: any
}>()

const router = useRouter()
const store = generalStore()
const { $api } = useNuxtApp()
const toast = useToast()

const lead = ref<any>(props.lead).value

console.log('lead')
console.log(lead)
const show = ref<boolean>(false)

const agents = store.agents
const leadStatus = store.freeTrialStatus

const selectedAgent = ref<string>('')
const selectedStatus = ref<string>('')
const blockButtons = ref(false)

onMounted(async () => {
  console.log('components/synco/weekly-classes/trials-table-item.vue')
  if (lead.agent) {
    selectedAgent.value = lead.agent.id
  }
  if (lead.free_trial_status) {
    selectedStatus.value = lead.free_trial_status.code || '0'
  }
  // if (store.leadStatus.length == 0) await store.getLeadStatus()
})

const navigateToUser = async (id: number) => {
  await router.push({ path: `/synco/user/${id}` })
  // await router.push({ path: `/synco/user/${id}` })
}

const cleanDate = (date: any) => {
  if (!date || typeof date !== 'string') return date
  const parsedDate = new Date(date)
  const cleanedDate = parsedDate.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
  return cleanedDate
}

const formatDate = (dateString: string, daysToAdd: number = 0): string => {
  const date = parseISO(dateString)
  const newDate = addDays(date, daysToAdd)
  return format(newDate, 'dd/MM/yyyy')
}

const emit = defineEmits(['selectedGuardian'])

const selectGuardian = (event: Event) => {
  if (!event?.target) return
  emit('selectedGuardian', { id: event.target.id, value: event.target.checked })
}

const selectAgent = async (event: Event) => {
  if (!event?.target?.value) return
  const agentId = event.target.value
  selectedAgent.value = agentId
  const id = lead.id

  if (blockButtons.value) return
  try {
    blockButtons.value = true
    const response = await $api.wcLeads.assignAgent(id, agentId)
    toast.success(response?.message)
  } catch (error: any) {
    console.log(error)
    toast.error(error?.data?.messages ?? 'Error')
  } finally {
    blockButtons.value = false
  }
}

const selectStatus = async (event: Event) => {
  if (!event?.target?.value) return
  const statusId = event.target.value
  const id = lead.id
  if (blockButtons.value) return
  try {
    blockButtons.value = true
    const response = await $api.wcFreeTrials.assignStatus(Number(id), statusId)
    toast.success(response?.message)
  } catch (error: any) {
    console.log(error)
    toast.error(error?.data?.messages ?? 'Error')
  } finally {
    blockButtons.value = false
  }
}
</script>

<template>
  <tr class="align-middle">
    <th scope="row">
      <input
        :id="`${lead.id}`"
        class="form-check-input"
        type="checkbox"
        value=""
        @change="selectGuardian"
      />
    </th>
    <td @click="navigateToUser(lead.family_id)">
      <label class="form-check-label text-muted" for="tomjones">
        {{ lead.student?.first_name }} {{ lead.student?.last_name }}
      </label>
    </td>
    <td @click="navigateToUser(lead.family_id)">{{ lead.student?.age }}</td>
    <td @click="navigateToUser(lead.family_id)">{{ lead.venue }}</td>
    <td @click="navigateToUser(lead.family_id)">
      {{ formatDate(lead.date_of_booking) }}
    </td>
    <td @click="navigateToUser(lead.family_id)">
      {{ cleanDate(lead.trial_date) }}
    </td>
    <td>{{ lead.who_booked }}</td>
    <td @click="navigateToUser(lead.family_id)">{{ lead.attempt }}</td>
    <td>
      <select
        id="seasons"
        v-model="selectedStatus"
        class="form-control form-control-lg"
        :disabled="blockButtons"
        @change="selectStatus"
      >
        <option value="0">Assign status</option>
        <option
          v-for="(lStatus, index) in leadStatus"
          :key="index"
          :value="lStatus.code"
        >
          {{ lStatus.title }}
        </option>
      </select>
      <!-- <span class="badge bg-danger-subtle text-danger px-1">
        Not attended
      </span> -->
    </td>
    <td>
      <button class="btn btn-light btn-sm" @click="show = !show">
        <Icon name="mdi:chevron-down" />
      </button>
    </td>
  </tr>
  <tr v-if="show">
    <td colspan="12">
      <SyncoWeeklyClassesBookingListItem :item="lead.venue" />
    </td>
  </tr>
</template>
<style scoped>
.table {
  border: 1px solid #e2e1e5;
  border-radius: 12px;
  overflow: hidden;
}

.table th,
.table td {
  vertical-align: middle;
  border: none;
  font-size: 14px;
  padding: 0.75rem;
}

.table thead th {
  background-color: #f4f4f4;
  color: #6b7280;
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
