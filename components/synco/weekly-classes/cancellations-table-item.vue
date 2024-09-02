<script setup lang="ts">
import { ref } from 'vue'
import { useToast } from 'vue-toast-notification'
import type { IWeeklyClassesCancellation } from '~/types/synco/index'
import { generalStore } from '~/stores'

const props = defineProps<{
  lead: IWeeklyClassesCancellation
}>()

const router = useRouter()
const store = generalStore()
const { $api } = useNuxtApp()
const toast = useToast()

let lead = ref<IWeeklyClassesCancellation>(props.lead).value
let show = ref<boolean>(false)

const agents = store.agents
const leadStatus = store.memberCancelStatus

let selectedAgent = ref<string>('')
let selectedStatus = ref<number>(0)
const blockButtons = ref(false)

onMounted(async () => {
  console.log('components/synco/weekly-classes/cancellations-table-item.vue')
  // if (!!lead.agent) {
  //   selectedAgent.value = lead.agent.id
  // }
  if (!!lead.status) {
    selectedStatus.value = lead.status.id
  }
  console.log('status', lead.status)
  // console.log('agent', lead.agent)
  // if (store.leadStatus.length == 0) await store.getLeadStatus()
})

const navigateToUser = async (id: number) => {
  console.log(id)
  await router.push({ path: `/synco/weekly-classes/edit/lead/${id}` })
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
    <td>
      <label class="form-check-label text-muted" for="tomjones">
        {{ lead.guardian.first_name }} {{ lead.guardian.last_name }}
      </label>
    </td>
    <td>{{ lead.total_student }}</td>
    <td>{{ lead.venue.name }}</td>
    <td>{{ cleanDate(lead.created_at) }}</td>
    <td>{{ cleanDate(lead.termination_date) }}</td>
    <td>{{ lead.cancel_reason.name }}</td>
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
      <!-- <span class="badge bg-warning-subtle text-warning px-1">
        Request to cancel
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
