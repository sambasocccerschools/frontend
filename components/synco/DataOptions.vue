<template>
  <div class="row row-cols-3 g-3 mt-3">
    <!-- <div class="col">
      <button
        class="btn btn-sm btn-outline-secondary w-100 px-1"
        @click="sendEmail"
      >
        <Icon name="mdi:email-outline" class="me-2" />Send Email
      </button>
    </div>
    <div class="col">
      <button
        class="btn btn-sm btn-outline-secondary w-100 px-1"
        @click="sendText"
      >
        <Icon name="ic:round-text-format" class="me-2" />Send Text
      </button>
    </div> -->
    <div class="col">
      <button
        class="btn btn-sm btn-primary text-light w-100 px-1"
        @click="exportExcel"
      >
        <Icon name="ph:download-simple-bold" class="me-2" />Export data
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useToast } from 'vue-toast-notification'

// const props = defineProps<{
//   parent: IGuardianByName
// }>()

// const router = useRouter()
// const parent = ref<IGuardianByName>(props.parent)

onMounted(async () => {
  console.log('components/synco/DataOptions.vue')
})

const emit = defineEmits(['exportExcel', 'sendText', 'sendEmail'])

const exportExcel = () => {
  emit('exportExcel', '')
}
const sendText = () => {
  emit('sendText', '')
}
const sendEmail = () => {
  emit('sendEmail', '')
}
</script>
