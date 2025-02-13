<script setup lang="ts">
import { ref } from 'vue'
import { useToast } from 'vue-toast-notification'
import type { IWeeklyClassesMembers } from '~/types/synco/index'
import { generalStore } from '~/stores'

const props = defineProps<{
  lead: IWeeklyClassesMembers
  statusType?: string
}>()

const router = useRouter()
const store = generalStore()
const { $api } = useNuxtApp()
const toast = useToast()

const lead = ref<IWeeklyClassesMembers>(props.lead).value
const show = ref<boolean>(false)

const agents = store.agents
const memberStatus = store.memberStatus
const waitingListStatus = store.waitingListStatus
const selectedAgent = ref<string>('')
const selectedStatus = ref<string>('')
const blockButtons = ref(false)

onMounted(async () => {
  console.log('components/synco/weekly-classes/members-table-item.vue')
  // if (!!lead.agent) {
  //   selectedAgent.value = lead.agent.id
  // }
  if (lead.status) {
    selectedStatus.value = lead.status.code || '0'
  }

  // if (store.memberStatus.length == 0) await store.getmemberStatus()
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
    if (props.statusType === 'waitingListStatus') {
      const response = await $api.wcWaitingList.assignStatus(
        Number(id),
        statusId,
      )
      toast.success(response?.message)
      return
    }
    const response = await $api.wcMembers.assignStatus(Number(id), statusId)
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
    <th
      scope="row"
      style="cursor: pointer"
      @click="navigateToUser(lead.family_id)"
    >
      <label class="form-check-label text-muted" for="tomjones">
        {{ lead.student?.first_name }} {{ lead.student?.last_name }}
      </label>
    </th>
    <td style="cursor: pointer" @click="navigateToUser(lead.family_id)">
      {{ lead.student.age }}
    </td>
    <td style="cursor: pointer" @click="navigateToUser(lead.family_id)">
      {{ lead.venue }}
    </td>
    <td style="cursor: pointer" @click="navigateToUser(lead.family_id)">
      {{ cleanDate(lead.date_of_booking) }}
    </td>
    <td style="cursor: pointer" @click="navigateToUser(lead.family_id)">
      {{ lead.who_booked }}
    </td>
    <td style="cursor: pointer" @click="navigateToUser(lead.family_id)">
      {{ lead?.membership_plan.name }}
    </td>
    <td style="cursor: pointer" @click="navigateToUser(lead.family_id)">
      {{ lead.lifecycle_of_membership }}
    </td>
    <td style="cursor: pointer">
      <select
        id="seasons"
        v-model="selectedStatus"
        class="form-control form-control-lg"
        :disabled="blockButtons"
        @change="selectStatus"
      >
        <option value="0">Assign status</option>
        <option
          v-for="(lStatus, index) in statusType === 'waitingListStatus'
            ? waitingListStatus
            : memberStatus"
          :key="index"
          :value="lStatus.code"
        >
          {{ lStatus.title }}
        </option>
      </select>
      <!-- <span
        v-if="status === 'waiting'"
        class="badge bg-light-subtle text-dark px-1"
      >
        Waiting list
      </span>
      <span v-else class="badge bg-success-subtle text-success px-1">
        Active
      </span> -->
    </td>
    <!-- <td>
      <button class="btn btn-light btn-sm" @click="show = !show">
        <Icon name="mdi:chevron-down" />
      </button>
    </td> -->
  </tr>
  <!-- <tr v-if="show">
    <td colspan="12">
      <SyncoWeeklyClassesBookingListItem :item="lead.venue" />
    </td>
  </tr> -->
</template>
