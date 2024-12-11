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

const lead = ref<IWeeklyClassesLead>(props.lead).value
const show = ref<boolean>(false)

const agents = store.agents
const leadStatus = store.leadStatus

const selectedAgent = ref<string>('')
const selectedStatus = ref<number>(0)
const blockButtons = ref(false)

onMounted(async () => {
  console.log('components/synco/weekly-classes/leads-list-item.vue')
  if (lead.agent) {
    selectedAgent.value = lead.agent.id
  }
  if (lead.status) {
    selectedStatus.value = lead.status.id
  }
  console.log('lead', lead)
  // if (store.leadStatus.length == 0) await store.getLeadStatus()
})

const navigateToUser = async (id: number) => {
  console.log(id)
  await router.push({ path: `/synco/user/${id}` })
  // await router.push({ path: `/synco/user/${id}` })
}

const cleanDate = (date: any) => {
  if (!date || typeof date !== 'string') return date // Verificar que sea una cadena válida
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
  const id = lead.id
  if (blockButtons.value) return
  try {
    blockButtons.value = true
    const response = await $api.wcLeads.assignStatus(id, statusId)
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
        :id="`${lead.id}`"
        class="form-check-input"
        type="checkbox"
        value=""
        @change="selectGuardian"
      />
    </td>
    <th scope="row" style="cursor: pointer" @click="navigateToUser(lead.id)">
      {{ cleanDate(lead.created_at) || 'N/A' }}
    </th>
    <td style="cursor: pointer" @click="navigateToUser(lead.id)">
      <label class="form-check-label text-muted" for="tomjones">
        {{ lead.guardian?.first_name || 'N/A' }}
        {{ lead.guardian?.last_name || 'N/A' }}
      </label>
    </td>
    <td style="cursor: pointer" @click="navigateToUser(lead.id)">
      {{ lead.guardian?.email || 'N/A' }}
    </td>
    <td style="cursor: pointer" @click="navigateToUser(lead.id)">
      {{ lead.guardian?.phone_number || 'N/A' }}
    </td>
    <td style="cursor: pointer" @click="navigateToUser(lead.id)">
      {{ lead?.postcode || 'N/A' }}
    </td>
    <!-- <td @click="navigateToUser(lead.id)" style="cursor: pointer">ER 7YJ</td> -->
    <td style="cursor: pointer" @click="navigateToUser(lead.id)">
      {{ lead?.kid_range || 'N/A' }}
    </td>
    <td>
      <label class="form-check-label text-muted" for="tomjones">
        {{ lead.agent || 'N/A' }}
      </label>
      <!-- <select
        id="seasons"
        v-model="selectedAgent"
        class="form-control form-control-lg"
        :disabled="blockButtons"
        @change="selectAgent"
      >
        <option value="">Assign agent</option>
        <option v-for="(agent, index) in agents" :key="index" :value="agent.id">
          {{ agent.first_name }} {{ agent.last_name }}
        </option>
      </select> -->
    </td>
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
          :value="lStatus.id"
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
  <!-- <tr v-if="show">
    <td colspan="12">
      <template v-for="(venue, index) in lead.venues" :key="index">
        <SyncoWeeklyClassesBookingListItem :item="venue" />
      </template>
    </td>
  </tr> -->
  <tr v-if="show">
    <td colspan="12">
      <SyncoWeeklyClassesBookingListItem :item="lead.venue" />
    </td>
  </tr>
</template>
