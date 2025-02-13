<script setup lang="ts">
import { ref } from 'vue'
// import { useToast } from 'vue-toast-notification'
import type { IWeeklyClassesCancellation } from '~/types/synco/index'
import { generalStore } from '~/stores'

const props = defineProps<{
  cancellation: IWeeklyClassesCancellation
}>()

const router = useRouter()
const store = generalStore()
// const { $api } = useNuxtApp()
// const toast = useToast()

const cancellation = ref<IWeeklyClassesCancellation>(props.cancellation).value
// const show = ref<boolean>(false)
// const agents = store.agents
const leadStatus = store.memberCancelStatus
const selectedAgent = ref<string>('')
const selectedStatus = ref<number>(0)
// const blockButtons = ref(false)

onMounted(() => {
  if (cancellation.agent) {
    selectedAgent.value = cancellation.agent.id
  }
  if (cancellation.member_cancel_status) {
    selectedStatus.value = cancellation.member_cancel_status.id
  }
})

const navigateToUser = async (id: number) => {
  await router.push({ path: `/synco/user/${id}` })
}

const cleanDate = (date: any) => {
  if (!date || typeof date !== 'string') return date
  const parsedDate = new Date(date)
  return parsedDate.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
}

const emit = defineEmits(['selectedGuardian'])

const selectGuardian = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('selectedGuardian', { id: target.id, value: target.checked })
}

// const selectAgent = async (event: Event) => {
//   const agentId = event.target.value
//   if (!agentId || blockButtons.value) return
//   try {
//     blockButtons.value = true
//     await $api.wcLeads.assignAgent(cancellation.id, agentId)
//     toast.success('Agent assigned successfully')
//   } catch (error: any) {
//     console.error(error)
//     toast.error(error?.message ?? 'Error assigning agent')
//   } finally {
//     blockButtons.value = false
//   }
// }

// const selectStatus = async (event: Event) => {
//   const statusId = event.target.value
//   if (!statusId || blockButtons.value) return
//   try {
//     blockButtons.value = true
//     await $api.wcLeads.assignStatus(cancellation.id, statusId)
//     toast.success('Status updated successfully')
//   } catch (error: any) {
//     console.error(error)
//     toast.error(error?.message ?? 'Error updating status')
//   } finally {
//     blockButtons.value = false
//   }
// }

// Define un Map para asociar los estados con las clases de estilo
const statusBadgeClasses = new Map([
  ['pending', 'bg-warning-subtle text-warning'],
  ['cancelled', 'bg-danger-subtle text-danger'],
  ['approved', 'bg-success-subtle text-success'],
])

// Computa la clase del badge según el estado actual
const getStatusBadgeClass = (status: string | undefined) => {
  return (
    statusBadgeClasses.get(status ? status.toLowerCase() : '') ||
    'bg-secondary-subtle text-secondary'
  )
}
</script>

<template>
  <tr class="align-middle">
    <th scope="row">
      <input
        :id="`${cancellation?.id || 'unknown'}`"
        class="form-check-input"
        type="checkbox"
        value=""
        @change="selectGuardian"
      />
    </th>
    <td @click="navigateToUser(Number(cancellation?.id))">
      <label class="form-check-label text-muted">
        {{ cancellation?.guardian?.first_name || 'N/A' }}
        {{ cancellation?.guardian?.last_name || 'N/A' }}
      </label>
    </td>
    <td @click="navigateToUser(Number(cancellation?.id))">
      {{ cancellation?.total_student || 'N/A' }}
    </td>
    <td @click="navigateToUser(Number(cancellation?.id))">
      {{ cancellation?.venue?.name || 'N/A' }}
    </td>
    <td @click="navigateToUser(Number(cancellation?.id))">
      {{ cleanDate(cancellation?.created_date) }}
    </td>
    <td @click="navigateToUser(Number(cancellation?.id))">
      {{ cleanDate(cancellation?.termination_date) }}
    </td>
    <td @click="navigateToUser(Number(cancellation?.id))">
      {{ cancellation?.membership_cancel_reason?.title || 'N/A' }}
    </td>
    <td class="badge-container">
      <span
        :class="
          cancellation?.member_cancel_status?.title.includes('Cancelled')
            ? 'badge bg-danger-subtle text-danger px-2'
            : 'bg-warning-subtle text-warning px-1'
        "
        class="badge px-2"
      >
        {{ cancellation?.member_cancel_status?.title || 'Unknown' }}
      </span>
      <!-- <select
        v-model="selectedStatus"
        class="form-control"
        :disabled="blockButtons"
        @change="selectStatus"
      >
        <option value="0">Assign status</option>
        <option
          v-for="status in leadStatus"
          :key="status.id"
          :value="status.id"
        >
          {{ status?.title || 'Unknown' }}
        </option>
      </select> -->
    </td>
  </tr>
</template>
<style scoped lang="scss">
.badge {
  display: inline-flex;
  height: 29px;
  padding: 6px 12px;
  justify-content: center;
  // align-items: center;
  font-size: 14px;
  font-weight: 500;
  min-width: 155px;
}
</style>
