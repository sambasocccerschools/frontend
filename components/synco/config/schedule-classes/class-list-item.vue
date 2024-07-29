<script setup lang="ts">
import { ref } from 'vue'
import type { IWeeklyClassesItem } from '~/types/synco/index'

const props = defineProps<{
  classItem: IWeeklyClassesItem
  blockButtons: boolean
}>()

let classItem = ref<IWeeklyClassesItem>(props.classItem)
let blockButtons = ref<boolean>(props.blockButtons)

const emit = defineEmits(['toggleEdit', 'deleteClass', 'restoreClass'])

const toggleEdit = (classItem: IWeeklyClassesItem) => {
  emit('toggleEdit', classItem)
}

const deleteClass = async (id: number) => {
  emit('deleteClass', id)
}
const restoreClass = async (id: number) => {
  emit('restoreClass', id)
}
onMounted(() => {
  console.log('components/synco/config/schedule-classes/class-list-item.vue')
})
</script>
<template>
  <div
    class="row align-items-center"
    :key="`${classItem.id}-${classItem.deleted_at}`"
  >
    <div class="col-1">
      <span class=""
        ><strong>Class {{ classItem.name }}</strong></span
      >
    </div>
    <div class="col-1">
      <div class="d-flex flex-column">
        <span class="text-muted">Capacity</span>
        <span class="text-muted">{{ classItem.capacity }}</span>
      </div>
    </div>
    <div class="col-1">
      <div class="d-flex flex-column">
        <span class="text-muted">Day</span>
        <span class="text-muted">{{ classItem.days }}</span>
      </div>
    </div>
    <div class="col-1">
      <div class="d-flex flex-column">
        <span class="text-muted">Start time</span>
        <span class="text-muted">{{ classItem.start_time }}</span>
      </div>
    </div>
    <div class="col-1">
      <div class="d-flex flex-column">
        <span class="text-muted">End time</span>
        <span class="text-muted">{{ classItem.end_time }}</span>
      </div>
    </div>
    <div class="col-2">
      <div class="d-flex align-items-center flex-row">
        <Icon name="ph:acorn" style="width: 28px; height: 28px" class="me-2" />
        <div class="d-flex flex-column">
          <span class="text-muted">Autumn</span>
          <span class="text-muted">{{ classItem.autumn_term?.name }}</span>
        </div>
      </div>
    </div>
    <div class="col-2">
      <div class="d-flex align-items-center flex-row">
        <Icon name="ph:leaf" style="width: 28px; height: 28px" class="me-2" />
        <div class="d-flex flex-column">
          <span class="text-muted">Spring</span>
          <span class="text-muted">{{ classItem.spring_term?.name }}</span>
        </div>
      </div>
    </div>
    <div class="col-2">
      <div class="d-flex align-items-center flex-row">
        <Icon name="ph:sun" style="width: 28px; height: 28px" class="me-2" />
        <div class="d-flex flex-column">
          <span class="text-muted">Summer</span>
          <span class="text-muted">{{ classItem.summer_term_id?.name }}</span>
        </div>
      </div>
    </div>

    <div class="col-1">
      <button class="btn btn-link mx-1 px-1" @click="toggleEdit(classItem)">
        <Icon name="ph:pencil-simple-line" />
      </button>
      <button
        class="btn btn-link mx-1 px-1"
        @click="
          !!classItem.deleted_at
            ? restoreClass(classItem.id)
            : deleteClass(classItem.id)
        "
        :disabled="blockButtons"
      >
        <Icon :name="!!classItem.deleted_at ? 'ph:recycle' : 'ph:trash'" />
      </button>
    </div>
  </div>
</template>
