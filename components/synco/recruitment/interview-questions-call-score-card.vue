<script setup lang="ts">
import { ref } from 'vue'
import type { IKeyValuePair } from '~/types'
const props = defineProps<{
  callScorecard: IKeyValuePair[]
}>()
let callScorecard = ref<IKeyValuePair[]>(props.callScorecard)
</script>
<template>
  <div class="row rounded-4" style="height: 70vh">
    <div class="col-8 py-4">
      <div class="d-flex flex-column">
        <h3 class="py-2" style="border-bottom: 1px solid lightgray">
          <Icon
            name="ph:note"
            class="text-light rounded-circle bg-primary me-2 p-2"
            style="font-size: 30px"
          />
          <strong>Title Name</strong>
        </h3>
        <h4>
          <Icon name="ph:check-circle" class="text-success me-2" /><strong
            >Check they are free and in a quiet space for the call</strong
          >
        </h4>
        <h4>
          <Icon name="ph:check-circle" class="text-success me-2" /><strong
            >Give them break down for the call</strong
          >
        </h4>
        <div class="d-flex flex-column text-muted mb-4 ms-4">
          <span>(A) Explain 2 steps recruitment process</span>
          <span>(B) Housekeeping</span>
          <span>(C) Interview Q</span>
          <span>(D) Address any question they have</span>
        </div>
        <h4>
          <Icon name="ph:check-circle" class="text-success me-2" /><strong
            >Process</strong
          >
        </h4>
        <div class="d-flex flex-column text-muted mb-4 ms-4">
          <span class="text-success">2 steps</span>
          <span>(A) Phone call</span>
          <span
            >(B) Practice assessment - taking place next week and week
            after</span
          >
          <span class="text-black" style="text-decoration: underline"
            >Any questions?</span
          >
        </div>
        <h3 class="py-2" style="border-bottom: 1px solid lightgray">
          <Icon
            name="ph:note"
            class="text-light rounded-circle bg-primary me-2 p-2"
            style="font-size: 30px"
          />
          <strong>Title Name</strong>
        </h3>
        <h4>
          <Icon name="ph:check-circle" class="text-success me-2" /><strong
            >Housekeeping</strong
          >
        </h4>
        <div class="d-flex flex-column text-muted mb-4 ms-4">
          <span>(A) Check all info on their form is correct</span>
          <span
            >(B) Go through venues and ask them if they are available for any
            more if the chosen one are not available</span
          >
        </div>
        <h4>
          <Icon name="ph:check-circle" class="text-success me-2" /><strong
            >Questions</strong
          >
        </h4>
        <div class="d-flex flex-column text-muted mb-4 ms-4">
          <span>What do you know about SSS?</span>
        </div>
      </div>
    </div>
    <div
      class="col-4 d-flex flex-column justify-content-between bg-light rounded-4 m-0 py-4"
    >
      <div>
        <h4><strong>Call Scorecard</strong></h4>
        <div class="d-flex flex-column">
          <template v-for="scorecard in callScorecard">
            <label :for="scorecard.Key" class="mt-2"
              ><strong>{{ scorecard.Key }}</strong></label
            >
            <div class="d-flex justify-content-between mb-2 flex-row">
              <template v-for="key in 5">
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    :name="scorecard.Key"
                    :id="`${scorecard.Key}-${key}`"
                    :value="key"
                    v-model="scorecard.Value"
                  />
                  <label
                    class="form-check-label"
                    :for="`${scorecard.Key}-${key}`"
                  >
                    {{ key }}
                  </label>
                </div>
              </template>
            </div>
          </template>
        </div>
      </div>
      <div class="w-100">
        <button type="button" class="btn btn-primary text-light w-100">
          Submit
        </button>
      </div>
    </div>
  </div>
</template>
