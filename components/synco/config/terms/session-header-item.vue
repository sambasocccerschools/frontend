<template>
  <div class="row align-items-center">
    <div class="col-1">
      <strong>{{ term.Name }}</strong>
    </div>
    <div class="col-3 d-flex flex-row">
      <div class="me-2">
        <Icon name="ph:leaf" style="height: 38px; width: 38px" />
      </div>
      <div class="d-flex flex-column">
        <span>Term seasons</span>
        <span class="text-muted">{{ term.Seasson }}</span>
      </div>
    </div>
    <div class="col-4 d-flex flex-column">
      <span>Start and end date</span>
      <span class="text-muted">{{ term.StartDate }} - {{ term.EndDate }}</span>
    </div>
    <div class="col-3 d-flex flex-column">
      <span>Half-Term Exclusion Date(s)</span>
      <span>
        <span
          class="text-muted"
          v-for="(exclusionDate, index) in term.ExclusionDates"
        >
          {{ exclusionDate
          }}{{ index + 1 == term.ExclusionDates.length ? '' : ', ' }}
        </span>
      </span>
    </div>
    <div class="col-1 d-flex justify-content-end flex-row">
      <button
        type="button"
        class="btn btn-outline-secondary me-2 border-0 bg-white"
        @click="toggleShowCard('Edit')"
      >
        <Icon
          name="ph:pencil-line"
          style="color: black !important; height: 24px; width: 24px"
        />
      </button>
      <button type="button" class="btn btn-outline-secondary border-0 bg-white">
        <Icon
          name="ph:trash"
          style="color: black !important; height: 24px; width: 24px"
        />
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import type { ITermHeader } from '~/types/index'

const props = defineProps<{
  header: ITermHeader
}>()

let term = ref<ITermHeader>(props.header).value

const emit = defineEmits(['toggleShowCard'])

const toggleShowCard = (newEditText: string) => {
  emit('toggleShowCard', newEditText)
}
</script>
