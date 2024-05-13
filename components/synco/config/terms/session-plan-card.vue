<template>
  <div class="card">
    <div class="card-header" style="border-bottom: 1px solid lightgray">
      <div class="row">
        <div class="col-4">
          <button class="btn btn-outline-secondary border-0" @click="close">
            <Icon name="ph:x" />
          </button>
        </div>
        <div class="col-4 text-center">
          <span class="h4">
            <strong> Assign session plan </strong>
          </span>
        </div>
        <div class="col-4 text-end">
          <NuxtLink
            class="btn btn-outline-primary border-0"
            to="/synco/config/weekly-classes/session-plans/create"
          >
            Create new session plan
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="card-body" style="overflow: scroll; max-height: 80vh">
      <div class="d-flex justify-content-between flex-row">
        <span class="h5"><strong>Age group: 6 to 9</strong></span>
        <NuxtLink
          class="btn btn-sm btn-outline-primary border-0"
          to="/synco/config/weekly-classes/session-plans"
        >
          See all sessions
        </NuxtLink>
      </div>
      <div class="my-2" v-for="(num, index) in 8">
        <div
          class="rounded-2"
          @click="changeSelectedSessionPlan(index)"
          :style="selectedSessionPlan == index ? 'border:1px solid red' : ''"
        >
          <SyncoConfigTermsPlayLikeCard></SyncoConfigTermsPlayLikeCard>
        </div>
      </div>
    </div>
    <div class="card-footer">
      <div class="row">
        <div class="col-6">
          <button class="btn btn-outline-secondary w-100" @click="close">
            Cancel
          </button>
        </div>
        <div class="col-6">
          <button class="btn btn-primary text-light w-100" @click="save">
            Assign session plan
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import type { ITermCard } from '~/types/index'

const props = defineProps<{
  term: ITermCard
}>()

let term = ref<ITermCard>(props.term).value
let selectedSessionPlan = ref<number>(-1)

const emit = defineEmits(['toggleAssignSessionCard'])

const close = () => {
  emit('toggleAssignSessionCard', '')
}

const save = () => {
  console.log('Save')
  close()
}
const changeSelectedSessionPlan = (index: number) => {
  selectedSessionPlan.value = index
}
</script>
