<script setup lang="ts">
import { ref } from 'vue'
import type { IClassItem } from '~/types/index'

const props = defineProps<{
  classItem: IClassItem
}>()

let classItem = ref<IClassItem>(props.classItem).value

const emit = defineEmits(['toggleEdit'])

const toggleEdit = (selected: string) => {
  emit('toggleEdit', selected)
}
</script>
<template>
  <div class="row align-items-center">
    <div class="col-1">
      <span class=""
        ><strong>Class {{ classItem.Name }}</strong></span
      >
    </div>
    <div class="col-1">
      <div class="d-flex flex-column">
        <span class="text-muted">Capacity</span>
        <span class="text-muted">{{ classItem.Capacity }}</span>
      </div>
    </div>
    <div class="col-1">
      <div class="d-flex flex-column">
        <span class="text-muted">Day</span>
        <span class="text-muted">{{ classItem.Day }}</span>
      </div>
    </div>
    <div class="col-1">
      <div class="d-flex flex-column">
        <span class="text-muted">Start time</span>
        <span class="text-muted">{{ classItem.StartTime }}</span>
      </div>
    </div>
    <div class="col-1">
      <div class="d-flex flex-column">
        <span class="text-muted">End time</span>
        <span class="text-muted">{{ classItem.EndTime }}</span>
      </div>
    </div>
    <div class="col-2">
      <div class="d-flex align-items-center flex-row">
        <Icon name="ph:acorn" style="width: 28px; height: 28px" class="me-2" />
        <div class="d-flex flex-column">
          <span class="text-muted">Autumn</span>
          <span class="text-muted">{{ classItem.AutumnTerm }}</span>
        </div>
      </div>
    </div>
    <div class="col-2">
      <div class="d-flex align-items-center flex-row">
        <Icon name="ph:leaf" style="width: 28px; height: 28px" class="me-2" />
        <div class="d-flex flex-column">
          <span class="text-muted">Spring</span>
          <span class="text-muted">{{ classItem.SpringTerm }}</span>
        </div>
      </div>
    </div>
    <div class="col-2">
      <div class="d-flex align-items-center flex-row">
        <Icon name="ph:sun" style="width: 28px; height: 28px" class="me-2" />
        <div class="d-flex flex-column">
          <span class="text-muted">Summer</span>
          <span class="text-muted">{{ classItem.SummerTerm }}</span>
        </div>
      </div>
    </div>

    <div class="col-1">
      <button
        type="button"
        class="btn btn-outline-secondary me-3 border-0 p-0"
        @click="toggleEdit('Edit')"
      >
        <Icon name="ph:pencil-line" style="width: 24px; height: 24px" />
      </button>
      <button type="button" class="btn btn-outline-secondary border-0 p-0">
        <Icon name="ph:trash" style="width: 24px; height: 24px" />
      </button>
    </div>
  </div>
</template>
