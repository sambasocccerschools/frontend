<script setup lang="ts">
import { ref } from 'vue'
import { useToast } from 'vue-toast-notification'
import type { IWeeklyClassesSales } from '~/types/synco/index'
import { generalStore } from '~/stores'

const props = defineProps<{
  lead: IWeeklyClassesSales
}>()

const router = useRouter()
const store = generalStore()
const { $api } = useNuxtApp()
const toast = useToast()

const lead = ref<IWeeklyClassesSales>(props.lead).value
const show = ref<boolean>(false)

const agents = store.agents
const leadStatus = store.saleStatus

console.log('lead', leadStatus)

const selectedAgent = ref<string>('')
const selectedStatus = ref<any>(0)
const blockButtons = ref(false)

onMounted(async () => {
  console.log('components/synco/weekly-classes/sales-table-item.vue')
  // if (!!lead.agent) {
  //   selectedAgent.value = lead.agent.id
  // }
  console.log(lead)
  if (lead.status) {
    selectedStatus.value = lead.status.code
  }
  console.log('status', lead.status)
  // console.log('agent', lead.agent)
  // if (store.leadStatus.length == 0) await store.getLeadStatus()
})

const navigateToUser = async (id: number) => {
  console.log(id)
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
  const agentId = lead.agent?.id ?? ''
  const id = Number(lead.id)
  if (blockButtons.value) return
  try {
    blockButtons.value = true
    const response = await $api.wcSales.assignStatus(id, statusId, agentId)
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
    <td @click="navigateToUser(lead.id)">
      <label class="form-check-label text-muted" for="tomjones">
        {{ lead.student.first_name }} {{ lead.student.last_name }}
      </label>
    </td>
    <td @click="navigateToUser(lead.id)">{{ lead.student.age }}</td>
    <td @click="navigateToUser(lead.id)">{{ lead.venue }}</td>
    <!-- // this is the date of the sale? -->
    <td @click="navigateToUser(lead.id)">{{ cleanDate(lead.created_date) }}</td>
    <td @click="navigateToUser(lead.id)">
      {{ lead.booked_by }}
    </td>
    <!-- <td>12 months, 47.99 per months</td> -->
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
      <!-- <span class="badge bg-success-subtle text-success px-1"> Active </span> -->
    </td>
    <!-- <td>
      <button class="btn btn-light btn-sm" @click="show = !show">
        <Icon name="mdi:chevron-down" />
      </button>
    </td> -->
  </tr>
  <!-- <tr v-if="show">
    <td colspan="12">
      TODO: VERIFY THIS WORKS ONCE THE API RETURNS THE CORRECT DATA
      <SyncoWeeklyClassesBookingListItem :item="lead.venue" />
    </td>
  </tr> -->
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
