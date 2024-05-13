<template>
  <div class="card my-2 border">
    <div class="card-header px-3 py-1">
      <div class="d-flex justify-content-between flex-row">
        <span>Session {{ item.SessionNumber }}</span>
        <a type="button" class="btn btn-sm btn-outline-danger border-0">
          Remove
        </a>
      </div>
    </div>
    <div class="card-body px-3 py-1 text-sm">
      <div class="row">
        <div class="col-3 text-muted">Beginners</div>
        <div class="col-9">
          {{ item.Beginner }}
          <a
            type="button"
            class="btn btn-sm btn-outline-primary border-0"
            @click="toggleAssignSessionCard(item.SessionNumber.toString())"
          >
            <span v-if="item.Beginner">Change Session</span>
            <span v-else>Assign Session Plan</span>
          </a>
        </div>
      </div>
      <div class="row">
        <div class="col-3 text-muted">Intermediate</div>
        <div class="col-9">
          {{ item.Intermediate }}
          <a
            type="button"
            class="btn btn-sm btn-outline-primary border-0"
            @click="toggleAssignSessionCard(item.SessionNumber.toString())"
          >
            <span v-if="item.Intermediate">Change Session</span>
            <span v-else>Assign Session Plan</span>
          </a>
        </div>
      </div>
      <div class="row">
        <div class="col-3 text-muted">Advanced</div>
        <div class="col-9">
          {{ item.Advanced }}
          <a
            type="button"
            class="btn btn-sm btn-outline-primary border-0"
            @click="toggleAssignSessionCard(item.SessionNumber.toString())"
          >
            <span v-if="item.Advanced">Change Session</span>
            <span v-else>Assign Session Plan</span>
          </a>
        </div>
      </div>
      <div class="row">
        <div class="col-3 text-muted">Pro</div>
        <div class="col-9">
          {{ item.Pro }}
          <a
            type="button"
            class="btn btn-sm btn-outline-primary border-0"
            @click="toggleAssignSessionCard(item.SessionNumber.toString())"
          >
            <span v-if="item.Pro">Change Session</span>
            <span v-else>Assign Session Plan</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { ITermItem } from '~/types/index'

const props = defineProps<{
  item: ITermItem
}>()

let item = ref<ITermItem>(props.item).value

const emit = defineEmits(['toggleAssignSessionCard'])

const toggleAssignSessionCard = (selected: string) => {
  emit('toggleAssignSessionCard', selected)
}
</script>

<style scoped>
.bg-gray {
  background-color: #f6f6f9;
}
.text-sm {
  font-size: 0.6rem !important;
}
</style>
