<script setup lang="ts">
import { ref } from 'vue'
import { useToast } from 'vue-toast-notification'
import type { IWeeklyClassesFreeTrials } from '~/types/synco/index'
import { generalStore } from '~/stores'

const props = defineProps<{
  lead: IWeeklyClassesFreeTrials
}>()

const router = useRouter()
const store = generalStore()
const { $api } = useNuxtApp()
const toast = useToast()

let lead = ref<IWeeklyClassesFreeTrials>(props.lead).value
let show = ref<boolean>(false)

const agents = store.agents
const leadStatus = store.freeTrialStatus

let selectedAgent = ref<string>('')
let selectedStatus = ref<number>(0)
const blockButtons = ref(false)

onMounted(async () => {
  console.log('components/synco/weekly-classes/trials-table-item.vue')
  if (!!lead.agent) {
    selectedAgent.value = lead.agent.id
  }
  if (!!lead.status) {
    selectedStatus.value = lead.status.id
  }
  console.log('status', lead.status)
  console.log('agent', lead.agent)
  // if (store.leadStatus.length == 0) await store.getLeadStatus()
})

const navigateToUser = async (id: number) => {
  console.log(id)
  await router.push({ path: `/synco/user/${id}` })
  // await router.push({ path: `/synco/user/${id}` })
}
const cleanDate = (date: any) => {
  if (!Number.isInteger(date)) return date
  let cleanedDate = new Date(+date * 1000).toISOString()?.split('T')[0]
  return cleanedDate
}

const emit = defineEmits(['selectedGuardian'])

const selectGuardian = (event: Event) => {
  if (!event?.target) return
  emit('selectedGuardian', { id: event.target.id, value: event.target.checked })
}

const selectAgent = async (event: Event) => {
  if (!event?.target?.value) return
  let agentId = event.target.value
  selectedAgent.value = agentId
  let id = lead.id

  if (blockButtons.value) return
  try {
    blockButtons.value = true
    let response = await $api.wcLeads.assignAgent(id, agentId)
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
  let statusId = event.target.value
  let id = lead.id
  if (blockButtons.value) return
  try {
    blockButtons.value = true
    let response = await $api.wcLeads.assignStatus(id, statusId)
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
        class="form-check-input"
        type="checkbox"
        value=""
        :id="`${lead.id}`"
        @change="selectGuardian"
      />
    </th>
    <td @click="navigateToUser(lead.id)">
      <label class="form-check-label text-muted" for="tomjones">
        {{ lead.student.first_name }} {{ lead.student.last_name }}
      </label>
    </td>
    <td @click="navigateToUser(lead.id)">{{ lead.student.age }}</td>
    <td @click="navigateToUser(lead.id)">{{ lead.venue.name }}</td>
    <td @click="navigateToUser(lead.id)">{{ cleanDate(lead.created_at) }}</td>
    <td @click="navigateToUser(lead.id)">{{ cleanDate(lead.trial_date) }}</td>
    <td>{{ lead.booked_by?.first_name }}</td>
    <td @click="navigateToUser(lead.id)">{{ lead.attempt }}</td>
    <td>
      <select
        id="seasons"
        class="form-control form-control-lg"
        v-model="selectedStatus"
        @change="selectStatus"
        :disabled="blockButtons"
      >
        <option value="0">Assign status</option>
        <option
          v-for="(lStatus, index) in leadStatus"
          :value="lStatus.id"
          :key="index"
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
