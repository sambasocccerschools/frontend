<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps<{
  noBorder?: boolean | null
}>()
let noBorder = ref<boolean>(props.noBorder ?? false).value
let currentStep = ref<number>(0)
let qualifyLead = ref<boolean>(false)
let scheduleMeet = ref<boolean>(false)
let showInterviewQuestions = ref<boolean>(false)
let callScore = ref<number>(0)
let showDiscovery = ref<boolean>(false)
let showOffer = ref<boolean>(false)
</script>
<template>
  <div class="card rounded-4 p-4" :class="noBorder ? 'border-0' : ''">
    <slot name="internal_title"></slot>
    <div class="d-flex flex-column">
      <!-- Qualify Lead -->
      <div class="d-flex justify-content-between flex-row py-2">
        <span :class="currentStep == 0 ? '' : 'text-muted'">
          <strong>Qualify Lead</strong></span
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
      <div class="d-flex flex-row">
        <button
          type="button"
          class="btn border-1 mx-2 p-3"
          :class="
            qualifyLead
              ? 'btn-secondary text-secondary bg-white '
              : 'btn-danger text-light'
          "
          @click="qualifyLead = !qualifyLead"
        >
          <Icon name="ph:x" />
        </button>
        <button
          type="button"
          class="btn border-1 mx-2 p-3"
          :class="
            qualifyLead
              ? 'btn-primary text-light'
              : 'btn-secondary text-secondary  bg-white '
          "
          @click="qualifyLead = !qualifyLead"
        >
          <Icon name="ph:check" />
        </button>
      </div>

      <!-- Google meet setup -->
      <div class="d-flex justify-content-between flex-row py-2">
        <span :class="currentStep == 1 ? '' : 'text-muted'">
          <strong>Google meet setup</strong></span
        >
        <span class="text-muted">
          Skip
          <Icon
            class="h4 m-0"
            :name="currentStep == 1 ? 'ph:spinner' : 'ph:check-circle'"
            :class="currentStep > 1 ? 'text-primary' : 'text-muted'"
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

      <!-- Delivery Google meet -->
      <div class="d-flex justify-content-between flex-row py-2">
        <span :class="currentStep == 2 ? '' : 'text-muted'">
          <strong>Delivery Google Meet</strong>
        </span>
        <span class="text-muted">
          Skip
          <Icon
            class="h4 m-0"
            :name="currentStep == 2 ? 'ph:spinner' : 'ph:check-circle'"
            :class="currentStep > 2 ? 'text-primary' : 'text-muted'"
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
          <button
            type="button"
            class="btn btn-primary text-light"
            @click="showInterviewQuestions = !showInterviewQuestions"
          >
            Scorecard
          </button>
          <span class="badgge bg-primary text-light rounded-4 mx-2 p-3">
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

      <!-- Discovery day -->
      <div class="d-flex justify-content-between flex-row py-2">
        <span :class="currentStep == 3 ? '' : 'text-muted'">
          <strong>Discovery day</strong></span
        >
        <span class="text-muted">
          Skip
          <Icon
            :name="currentStep == 3 ? 'ph:spinner' : 'ph:check-circle'"
            :class="currentStep > 3 ? 'text-primary' : 'text-muted'"
          />
        </span>
      </div>
      <div class="py-2" v-if="!showDiscovery">
        <span class="text-muted">23 April, 2023</span>
      </div>
      <template v-if="showDiscovery">
        <div class="d-flex justify-content-between flex-row">
          <span class="text-muted">23 April, 2023</span>
          <button
            type="button"
            class="btn btn-primary text-light mx-1"
            @click="showDiscovery = !showDiscovery"
          >
            Continue
          </button>
        </div>
      </template>

      <!-- Waiting for offer -->
      <div class="d-flex justify-content-between flex-row py-2">
        <span :class="currentStep == 4 ? '' : 'text-muted'">
          <strong>Waiting for offer</strong></span
        >
        <span class="text-muted">
          Skip
          <Icon
            :name="currentStep == 4 ? 'ph:spinner' : 'ph:check-circle'"
            :class="currentStep > 4 ? 'text-primary' : 'text-muted'"
          />
        </span>
      </div>
      <div class="py-2" v-if="!showOffer">
        <button
          type="button"
          class="btn btn-primary text-light"
          @click="showOffer = !showOffer"
        >
          Offer sent
        </button>
      </div>
      <template v-if="showOffer">
        <div class="d-flex flex-row">
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
