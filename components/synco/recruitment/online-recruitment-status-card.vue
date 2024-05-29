<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps<{
  noBorder?: boolean | null
}>()
let noBorder = ref<boolean>(props.noBorder ?? false).value
let currentStep = ref<number>(1)
let scheduleMeet = ref<boolean>(false)
let showInterviewQuestions = ref<boolean>(false)
let callScore = ref<number>(0)
let showStatus = ref<boolean>(false)
</script>
<template>
  <div class="card rounded-4 p-4" :class="noBorder ? 'border-0' : ''">
    <slot name="internal_title"></slot>
    <div class="d-flex flex-column">
      <!-- Google meet setup -->
      <div class="d-flex justify-content-between flex-row py-2">
        <span :class="currentStep == 0 ? '' : 'text-muted'">
          <strong>Google meet setup</strong></span
        >
        <span class="text-muted">
          Skip
          <Icon
            class="h4 m-0"
            :name="currentStep == 0 ? 'ph:spinner' : 'ph:check-circle'"
            :class="currentStep > 0 ? 'text-primary' : 'text-muted'"
          />
        </span>
      </div>
      <div class="py-2">
        <button
          type="button"
          class="btn btn-primary text-light"
          @click="scheduleMeet = !scheduleMeet"
        >
          Schedule a meet
          <Icon :name="scheduleMeet ? 'ph:caret-down' : 'ph:caret-up'" />
        </button>
      </div>
      <template v-if="scheduleMeet">
        <div class="row">
          <div class="col-6">
            <div class="form-group w-100 mb-3">
              <label for="date" class="form-labelform-label-light">Date</label>
              <input
                id="date"
                type="date"
                class="form-control form-control-lg"
                placeholder="Select Date"
              />
            </div>
          </div>
          <div class="col-6">
            <div class="form-group w-100 mb-3">
              <label for="time" class="form-labelform-label-light">Time</label>
              <input
                id="time"
                type="time"
                class="form-control form-control-lg"
                placeholder="Select Time"
              />
            </div>
          </div>
          <div class="col-12">
            <div class="form-group w-100 mb-3">
              <label for="reminder" class="form-labelform-label-light"
                >When do you want to be reminded?</label
              >
              <input
                id="reminder"
                type="datetime-local"
                class="form-control form-control-lg"
              />
            </div>
          </div>
        </div>
      </template>

      <!-- Google meet call -->
      <div class="d-flex justify-content-between flex-row py-2">
        <span :class="currentStep == 1 ? '' : 'text-muted'">
          <strong>Google meet call</strong>
        </span>
        <span class="text-muted">
          Skip
          <Icon
            class="h4 m-0"
            :name="currentStep == 1 ? 'ph:spinner' : 'ph:check-circle'"
            :class="currentStep > 1 ? 'text-primary' : 'text-muted'"
          />
        </span>
      </div>
      <div class="py-2" v-if="callScore == 0">
        <button
          type="button"
          class="btn btn-primary text-light"
          @click="showInterviewQuestions = !showInterviewQuestions"
        >
          Scorecard
        </button>
      </div>
      <template v-if="!showInterviewQuestions && callScore > 0">
        <div class="d-flex flex-row">
          <span class="badgge bg-primary text-light rounded-4 p-3">
            {{ callScore.toFixed(0) }} %
          </span>
          <button
            type="button"
            class="btn btn-secondary border-1 text-secondary mx-2 bg-white p-3"
          >
            <Icon name="ph:x" />
          </button>
          <button
            type="button"
            class="btn btn-secondary border-1 text-secondary mx-2 bg-white p-3"
          >
            <Icon name="ph:check" />
          </button>
        </div>
      </template>

      <!-- Status -->
      <div class="d-flex justify-content-between flex-row py-2">
        <span :class="currentStep == 3 ? '' : 'text-muted'">
          <strong>Status</strong></span
        >
        <span class="text-muted">
          Skip
          <Icon
            :name="currentStep == 3 ? 'ph:spinner' : 'ph:check-circle'"
            :class="currentStep > 3 ? 'text-primary' : 'text-muted'"
          />
        </span>
      </div>
      <div class="py-2" v-if="!showStatus">
        <button
          type="button"
          class="btn btn-primary text-light"
          @click="showStatus = !showStatus"
        >
          See Results
        </button>
      </div>
      <template v-if="showStatus">
        <div class="d-flex justify-content-between flex-row">
          <span
            class="badgge text-success rounded-3 mx-1 bg-white py-2"
            v-if="true"
          >
            <Icon name="ph:check" /> Passed
          </span>
          <span
            class="badgge text-danger rounded-3 mx-1 bg-white py-2"
            v-if="false"
          >
            <Icon name="ph:x" /> Failed
          </span>
          <span class="badgge bg-primary text-light rounded-4 mx-1 py-2">
            {{ callScore.toFixed(0) }} %
          </span>
          <button
            type="button"
            class="btn btn-primary text-light mx-1"
            @click="showStatus = !showStatus"
          >
            See Results
          </button>
          <button
            type="button"
            class="btn btn-secondary border-1 text-secondary mx-1 mx-2 bg-white"
          >
            <Icon name="ph:x" />
          </button>
          <button type="button" class="btn btn-success text-light mx-1">
            <Icon name="ph:check" /> Send offer
          </button>
        </div>
      </template>
    </div>
  </div>
</template>
