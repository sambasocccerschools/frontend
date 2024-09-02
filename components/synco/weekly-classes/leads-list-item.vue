<script setup lang="ts">
import { ref } from 'vue'
import { useToast } from 'vue-toast-notification'
import type { IWeeklyClassesLead } from '~/types/synco/index'
import { generalStore } from '~/stores'

const props = defineProps<{
  lead: IWeeklyClassesLead
}>()

const router = useRouter()
const store = generalStore()
const { $api } = useNuxtApp()
const toast = useToast()

let lead = ref<IWeeklyClassesLead>(props.lead).value
let show = ref<boolean>(false)

const agents = store.agents
const leadStatus = store.leadStatus

let selectedAgent = ref<string>('')
let selectedStatus = ref<number>(0)
const blockButtons = ref(false)

onMounted(async () => {
  console.log('components/synco/weekly-classes/leads-list-item.vue')
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
  <!-- Need to see how to turn this into a link -->
  <tr class="align-middle">
    <td>
      <input
        class="form-check-input"
        type="checkbox"
        value=""
        :id="`${lead.id}`"
        @change="selectGuardian"
      />
    </td>
    <th scope="row" @click="navigateToUser(lead.id)" style="cursor: pointer">
      {{ cleanDate(lead.created_at) }}
    </th>
    <td @click="navigateToUser(lead.id)" style="cursor: pointer">
      <label class="form-check-label text-muted" for="tomjones">
        {{ lead.guardian.first_name }} {{ lead.guardian.last_name }}
      </label>
    </td>
    <td @click="navigateToUser(lead.id)" style="cursor: pointer">
      {{ lead.guardian.email }}
    </td>
    <td @click="navigateToUser(lead.id)" style="cursor: pointer">
      {{ lead.guardian.phone_number }}
    </td>
    <!-- <td @click="navigateToUser(lead.id)" style="cursor: pointer">ER 7YJ</td> -->
    <td @click="navigateToUser(lead.id)" style="cursor: pointer">
      {{ lead.kid_range }}
    </td>
    <td>
      <select
        id="seasons"
        class="form-control form-control-lg"
        v-model="selectedAgent"
        @change="selectAgent"
        :disabled="blockButtons"
      >
        <option value="">Assign agent</option>
        <option v-for="(agent, index) in agents" :value="agent.id" :key="index">
          {{ agent.first_name }} {{ agent.last_name }}
        </option>
      </select>
    </td>
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
    </td>
    <td>
      <button class="btn btn-light btn-sm" @click="show = !show">
        <Icon :name="!show ? 'mdi:chevron-down' : 'mdi:chevron-up'" />
      </button>
    </td>
  </tr>
  <tr v-if="show">
    <td colspan="12">
      <template v-for="venue in lead.venues">
        <SyncoWeeklyClassesBookingListItem :item="venue" />
      </template>
    </td>
  </tr>
</template>
