<script setup lang="ts">
import { ref } from 'vue'
import type { IKeyValuePair, ICoachPracticalAssessment } from '~/types'
const props = defineProps<{
  noBorder?: boolean | null
  isRegionManager?: boolean | null
}>()
let noBorder = ref<boolean>(props.noBorder ?? false).value
let isRegionManager = ref<boolean>(props.isRegionManager ?? false).value
let currentStep = ref<number>(0)
let scheduleCall = ref<boolean>(false)
let showInterviewQuestions = ref<boolean>(false)
// let callScore = ref<number>(0)
let hasPracticalAssessment = ref<boolean>(false)
let showBookPracticalAssessment = ref<boolean>(false)
let showResults = ref<boolean>(false)
let showResultsCard = ref<boolean>(false)
let showSendOffer = ref<boolean>(false)
let callScorecard = ref<IKeyValuePair[]>([
  {
    Key: 'Communication skill',
    Value: '',
  },
  {
    Key: 'Passion for coaching',
    Value: '',
  },
  {
    Key: 'Experience',
    Value: '',
  },
  {
    Key: 'Knowledge of SSS',
    Value: '',
  },
])
let coachPracticalAssessment = ref<ICoachPracticalAssessment>({
  Venue: '',
  Class: '',
  Date: '',
  RegionalManager: '',
  Scores: [
    {
      Key: 'Punctuality of the coach',
      Value: '',
    },
    {
      Key: 'Status of the campus',
      Value: '',
    },
    {
      Key: 'Punctuality',
      Value: '',
    },
  ],
})

let callScore = computed<number>(() => {
  let scores = callScorecard.value.map((x) => (+x.Value * 100) / 5)
  let totalScore = 0
  scores.forEach((x) => (totalScore += x))
  totalScore = totalScore / scores.length
  return totalScore
})
</script>
<template>
  <div class="card rounded-4 p-4" :class="noBorder ? 'border-0' : ''">
    <slot name="internal_title"></slot>

    <div class="d-flex flex-column">
      <!-- Telephone call setup -->
      <div class="d-flex justify-content-between flex-row py-2">
        <span :class="currentStep == 0 ? '' : 'text-muted'">
          <strong>Telephone call setup</strong></span
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
          @click="scheduleCall = !scheduleCall"
        >
          Schedule a call
          <Icon :name="scheduleCall ? 'ph:caret-down' : 'ph:caret-up'" />
        </button>
      </div>
      <template v-if="scheduleCall">
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

      <!-- Telephone call delivery -->
      <div class="d-flex justify-content-between flex-row py-2">
        <span :class="currentStep == 1 ? '' : 'text-muted'">
          <strong>Telephone call delivery</strong>
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
            @click="showBookPracticalAssessment = !showBookPracticalAssessment"
          >
            <Icon name="ph:check" />
          </button>
        </div>
      </template>

      <!-- Practical assessment -->
      <div class="d-flex justify-content-between flex-row py-2">
        <span :class="currentStep == 2 ? '' : 'text-muted'">
          <strong>Practical assessment</strong></span
        >
        <span class="text-muted">
          Skip
          <Icon
            :name="currentStep == 2 ? 'ph:spinner' : 'ph:check-circle'"
            :class="currentStep > 2 ? 'text-primary' : 'text-muted'"
          />
        </span>
      </div>
      <!-- <div class="py-2" v-if="!hasPracticalAssessment">
        <button
          type="button"
          class="btn btn-primary text-light"
          @click="hasPracticalAssessment = !hasPracticalAssessment"
        >
          Scorecard
        </button>
      </div> -->
      <template v-if="!hasPracticalAssessment">
        <div class="d-flex justify-content-between flex-row">
          <div class="form-group w-50">
            <label for="date" class="form-labelform-label-light">Date</label>
            <input
              id="date"
              type="date"
              class="form-control form-control-sm"
              @change="showResults = !showResults"
            />
          </div>
          <div class="form-group w-50">
            <label for="time" class="form-labelform-label-light">Time</label>
            <input
              id="time"
              type="time"
              class="form-control form-control-sm"
              @change="showResults = !showResults"
            />
          </div>
          <!-- <button
            class="btn btn-primary text-light"
            @click="showResults = !showResults"
          >
            Saturday 9th July / Acton 2-3pm
          </button>
          <span class="badgge text-secondary rounded-3 bg-white px-3 py-2">
            Michael Smith
          </span> -->
        </div>
      </template>

      <!-- Waiting results -->
      <div class="d-flex justify-content-between flex-row py-2">
        <span :class="currentStep == 3 ? '' : 'text-muted'">
          <strong>Waiting results</strong></span
        >
        <span class="text-muted">
          Skip
          <Icon
            :name="currentStep == 3 ? 'ph:spinner' : 'ph:check-circle'"
            :class="currentStep > 3 ? 'text-primary' : 'text-muted'"
          />
        </span>
      </div>
      <div class="py-2" v-if="!showResults">
        <button
          type="button"
          class="btn btn-primary text-light"
          @click="showResults = !showResults"
        >
          See Results
        </button>
      </div>
      <template v-if="showResults">
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
            @click="showResultsCard = !showResultsCard"
          >
            See Results
          </button>
          <button
            type="button"
            class="btn btn-secondary border-1 text-secondary mx-1 mx-2 bg-white"
          >
            <Icon name="ph:x" />
          </button>
          <button
            type="button"
            class="btn btn-success text-light mx-1"
            @click="showSendOffer = !showSendOffer"
          >
            <Icon name="ph:check" /> Send offer
          </button>
        </div>
        <div class="d-flex flex-column mt-3">
          <span :class="currentStep == 4 ? '' : 'text-muted'">
            <strong>Recruited?</strong></span
          >
          <div>
            <button type="button" class="btn btn-outline-success">
              Recruited
            </button>
          </div>
        </div>
      </template>
    </div>
  </div>

  <template v-if="showInterviewQuestions">
    <div class="modal-backdrop fade show"></div>
    <div
      class="modal fade show centered d-block"
      aria-modal="true"
      role="dialog"
      tabindex="-1"
    >
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content bg-tv-light-dark border-gray">
          <div class="modal-header border-bottom-gray">
            <div class="d-flex justify-content-between w-100 flex-row">
              <div></div>
              <div>
                <span class="h4">
                  <strong> Interview Questions & Call Scorecard</strong>
                </span>
              </div>
              <div>
                <button
                  class="btn btn-outline-secondary border-0"
                  @click="showInterviewQuestions = !showInterviewQuestions"
                >
                  <Icon name="ph:x" />
                </button>
              </div>
            </div>
          </div>
          <div class="modal-body py-0">
            <SyncoRecruitmentInterviewQuestionsCallScoreCard
              :call-scorecard="callScorecard"
            >
            </SyncoRecruitmentInterviewQuestionsCallScoreCard>
          </div>
        </div>
      </div>
    </div>
  </template>

  <template v-if="showBookPracticalAssessment">
    <div class="modal-backdrop fade show"></div>
    <div
      class="modal fade show centered d-block"
      aria-modal="true"
      role="dialog"
      tabindex="-1"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content bg-tv-light-dark border-gray">
          <div class="modal-header border-bottom-gray">
            <div class="d-flex justify-content-between w-100 flex-row">
              <div>
                <button
                  class="btn btn-outline-secondary border-0"
                  @click="
                    showBookPracticalAssessment = !showBookPracticalAssessment
                  "
                >
                  <Icon name="ph:x" />
                </button>
              </div>
              <div>
                <span class="h4">
                  <strong>Book Practical Assessment</strong>
                </span>
              </div>
              <div></div>
            </div>
          </div>
          <div class="modal-body">
            <div class="d-flex flex-column">
              <div class="form-group w-100 my-2">
                <label for="venue" class="form-labelform-label-light">
                  Venue
                </label>
                <select
                  id="venue"
                  class="form-control form-control-lg"
                  v-model="coachPracticalAssessment.Venue"
                >
                  <option>Select Option</option>
                </select>
              </div>
              <div class="form-group w-100 my-2">
                <label for="class" class="form-labelform-label-light">
                  Class
                </label>
                <select
                  id="class"
                  class="form-control form-control-lg"
                  v-model="coachPracticalAssessment.Class"
                >
                  <option>Select Option</option>
                </select>
              </div>
              <div class="form-group w-100 my-2">
                <label for="Date" class="form-labelform-label-light">
                  Date
                </label>
                <select
                  id="date"
                  class="form-control form-control-lg"
                  v-model="coachPracticalAssessment.Date"
                >
                  <option>Select Option</option>
                </select>
              </div>
              <div class="form-group w-100 my-2">
                <label for="regionalManager" class="form-labelform-label-light">
                  Assign to Regional Manager
                </label>
                <select
                  id="regionalManager"
                  class="form-control form-control-lg"
                  v-model="coachPracticalAssessment.RegionalManager"
                >
                  <option>Select Option</option>
                </select>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <div class="row w-100">
              <div class="col-6">
                <button
                  type="button"
                  class="btn btn-outline-secondary w-100"
                  @click="
                    showBookPracticalAssessment = !showBookPracticalAssessment
                  "
                >
                  Cancel
                </button>
              </div>
              <div class="col-6">
                <button
                  type="button"
                  class="btn btn-primary text-light w-100"
                  @click="hasPracticalAssessment = !hasPracticalAssessment"
                >
                  Send Confirmation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

  <template v-if="showResultsCard">
    <div class="modal-backdrop fade show"></div>
    <div
      class="modal fade show centered d-block"
      aria-modal="true"
      role="dialog"
      tabindex="-1"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content bg-tv-light-dark border-gray">
          <div class="modal-header border-bottom-gray">
            <div class="d-flex justify-content-between w-100 flex-row">
              <div>
                <button
                  class="btn btn-outline-secondary border-0"
                  @click="showResultsCard = !showResultsCard"
                >
                  <Icon name="ph:x" />
                </button>
              </div>
              <div>
                <span class="h4">
                  <strong>Book Practical Assessment</strong>
                </span>
              </div>
              <div></div>
            </div>
          </div>
          <div class="modal-body">
            <div class="d-flex flex-column">
              <div class="form-group w-100 my-2">
                <label for="venue" class="form-labelform-label-light">
                  Venue
                </label>
                <select
                  id="venue"
                  class="form-control form-control-lg"
                  v-model="coachPracticalAssessment.Venue"
                >
                  <option>Select Option</option>
                </select>
              </div>
              <div class="form-group w-100 my-2">
                <label for="class" class="form-labelform-label-light">
                  Class
                </label>
                <select
                  id="class"
                  class="form-control form-control-lg"
                  v-model="coachPracticalAssessment.Class"
                >
                  <option>Select Option</option>
                </select>
              </div>
              <div class="form-group w-100 my-2">
                <label for="date" class="form-labelform-label-light">
                  Date
                </label>
                <select
                  id="date"
                  class="form-control form-control-lg"
                  v-model="coachPracticalAssessment.Date"
                >
                  <option>Select Option</option>
                </select>
              </div>
              <div class="form-group w-100 my-2">
                <label for="regionalManager" class="form-labelform-label-light">
                  Assign to Regional Manager
                </label>
                <select
                  id="regionalManager"
                  class="form-control form-control-lg"
                  v-model="coachPracticalAssessment.RegionalManager"
                >
                  <option>Select Option</option>
                </select>
              </div>

              <template v-for="scorecard in coachPracticalAssessment.Scores">
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
          <div class="modal-footer border-0">
            <div class="row w-100">
              <div class="col-6">
                <button type="button" class="btn btn-primary text-light w-100">
                  Play Audio Summary
                </button>
              </div>
              <div class="col-6">
                <button type="button" class="btn btn-primary text-light w-100">
                  Watch Video
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <template v-if="showSendOffer && !isRegionManager">
    <div class="modal-backdrop fade show"></div>
    <div
      class="modal fade show centered d-block"
      aria-modal="true"
      role="dialog"
      tabindex="-1"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content bg-tv-light-dark border-gray">
          <div class="modal-header border-bottom-gray">
            <div class="d-flex justify-content-between w-100 flex-row">
              <div>
                <button
                  class="btn btn-outline-secondary border-0"
                  @click="showSendOffer = !showSendOffer"
                >
                  <Icon name="ph:x" />
                </button>
              </div>
              <div>
                <span class="h4">
                  <strong>Send Offer of Employement</strong>
                </span>
              </div>
              <div></div>
            </div>
          </div>
          <div class="modal-body">
            <div class="d-flex flex-column">
              <div class="form-group w-100 my-2">
                <label for="offerVenue" class="form-labelform-label-light">
                  Venue
                </label>
                <select id="offerVenue" class="form-control form-control-lg">
                  <option>Select Option</option>
                </select>
              </div>
              <div class="form-group w-100 my-2">
                <label for="payRate" class="form-labelform-label-light">
                  Pay rate per hour
                </label>
                <select id="payRate" class="form-control form-control-lg">
                  <option>Select Option</option>
                </select>
              </div>
              <div class="my-2">
                <button type="button" class="btn btn-success text-light">
                  + Add venue
                </button>
              </div>
              <div class="form-group w-100 my-2">
                <label for="startDate" class="form-labelform-label-light">
                  Start Date
                </label>
                <select id="startDate" class="form-control form-control-lg">
                  <option>Select Option</option>
                </select>
              </div>
            </div>
          </div>
          <div class="modal-footer border-0">
            <div class="row w-100">
              <div class="col-12">
                <button type="button" class="btn btn-primary text-light w-100">
                  Send Email Offer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <template v-if="showSendOffer && isRegionManager">
    <div class="modal-backdrop fade show"></div>
    <div
      class="modal fade show centered d-block"
      aria-modal="true"
      role="dialog"
      tabindex="-1"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content bg-tv-light-dark border-gray">
          <div class="modal-header border-bottom-gray">
            <div class="d-flex justify-content-between w-100 flex-row">
              <div>
                <button
                  class="btn btn-outline-secondary border-0"
                  @click="showSendOffer = !showSendOffer"
                >
                  <Icon name="ph:x" />
                </button>
              </div>
              <div>
                <span class="h4">
                  <strong>Send Offer of Employement</strong>
                </span>
              </div>
              <div></div>
            </div>
          </div>
          <div class="modal-body">
            <div class="d-flex flex-column">
              <div class="form-group w-100 my-2">
                <label for="offerRegion" class="form-labelform-label-light">
                  Region
                </label>
                <select id="offerRegion" class="form-control form-control-lg">
                  <option>Select Option</option>
                </select>
              </div>
              <div class="form-group w-100 my-2">
                <label for="dailyPayRate" class="form-labelform-label-light">
                  Daily Pay rate
                </label>
                <select id="dailyPayRate" class="form-control form-control-lg">
                  <option>Select Option</option>
                </select>
              </div>
              <div class="form-group w-100 my-2">
                <label for="startDate" class="form-labelform-label-light">
                  Start Date
                </label>
                <select id="startDate" class="form-control form-control-lg">
                  <option>Select Option</option>
                </select>
              </div>
            </div>
          </div>
          <div class="modal-footer border-0">
            <div class="row w-100">
              <div class="col-12">
                <button type="button" class="btn btn-primary text-light w-100">
                  Send Email Offer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
</template>
