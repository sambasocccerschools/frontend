<script setup lang="ts">
import { ref } from 'vue'
import type { IKeyValuePair, ISurveyQuestionList } from '~/types'
const layout = 'parentlayout'

let questions = ref<ISurveyQuestionList[]>([
  {
    Title: 'What do you think about Synco?',
    Type: 'single-choice',
    Choices: [
      { Key: 'bad', Value: 'Bad' },
      { Key: 'good', Value: 'Good' },
      { Key: 'excelent', Value: 'Excelent' },
    ],
  },
  {
    Title: 'What do you think about Synco?',
    Type: 'multiple-choice',
    Choices: [
      { Key: 'bad', Value: 'Bad' },
      { Key: 'good', Value: 'Good' },
      { Key: 'excelent', Value: 'Excelent' },
    ],
  },
  {
    Title: 'What do you think about Synco?',
    Type: 'open',
    Choices: [{ Key: 'bad', Value: 'Bad' }],
  },
])
</script>
<template>
  <NuxtLayout :name="layout" page-title="Surveys">
    <div class="d-flex flex-column card rounded-4 border-0 p-3">
      <span class="h2 mb-4">Survey title</span>
      <div class="card rounded-4 p-3">
        <div class="row">
          <template v-for="(question, index) in questions">
            <div class="col-1 px-4">
              <hr
                style="
                  height: 60%;
                  width: 5px;
                  border: 5px solid #d9d9d9;
                  opacity: 100;
                "
                class="m-0"
              />
              <span
                class="rounded-circle d-flex flex-column justify-content-center align-items-center text-light circle"
                :class="index == 0 ? 'circle-success' : 'circle-lightgray'"
                >{{ index + 1 }}</span
              >
              <hr
                style="
                  height: 40%;
                  width: 5px;
                  border: 5px solid #d9d9d9;
                  position: relative;
                  top: -35px;
                  opacity: 100;
                "
                class="m-0"
              />
            </div>
            <div class="col-11">
              <div class="card rounded-4 my-2 border p-3">
                <div class="d-flex flex-column">
                  <span class="text-success">Question {{ index + 1 }}</span>
                  <span class="h5"
                    ><strong>{{ question.Title }}</strong></span
                  >
                  <template
                    v-if="
                      question.Type == 'multiple-choice' ||
                      question.Type == 'single-choice'
                    "
                  >
                    <div
                      class="form-check form-check-inline"
                      v-for="(option, key) in question.Choices"
                    >
                      <input
                        class="form-check-input"
                        :type="
                          question.Type == 'single-choice'
                            ? 'radio'
                            : 'checkbox'
                        "
                        :name="question.Title"
                        :id="`${option.Value}-${key}`"
                        :value="key"
                      />
                      <label
                        class="form-check-label"
                        :for="`question-preview-${index}-option-${key}`"
                      >
                        {{ option.Value }}
                      </label>
                    </div>
                  </template>
                  <template v-else-if="question.Type == 'open'">
                    <div class="form-group w-100 mb-3">
                      <input
                        :id="`${question.Choices[0].Value}-${key}`"
                        type="text"
                        class="form-control form-control-lg"
                      />
                    </div>
                  </template>
                </div>
              </div>
            </div>
          </template>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="card google-card d-flex flex-column rounded-4 my-4 p-3">
              <span class="h5"
                >Google
                <Icon
                  name="ph:star-fill"
                  class="text-success ms-2"
                />Trustpilot</span
              >
              <span class="h4"
                ><strong
                  >Would you like to upload the review to Google /
                  Trustpilot?</strong
                ></span
              >
              <p>
                We'll reward you with 100 points as part of your loyalty scheme.
              </p>
              <div class="d-flex flex-row">
                <div class="form-group">
                  <input
                    type="range"
                    class="form-control-range rounded-4 me-2"
                    id="canUpload"
                    min="0"
                    max="1"
                    style="width: 3rem"
                  />
                </div>
                <label for="canUpload">Yes, Upload</label>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 d-flex justify-content-end flex-row">
            <div class="mx-2">
              <button
                type="button"
                class="btn btn-outline-secondary"
                style="width: 150px"
              >
                Cancel
              </button>
            </div>
            <div class="mx-2">
              <button
                type="button"
                class="btn btn-primary"
                style="width: 150px"
              >
                Complete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
<style scoped>
.circle {
  position: relative;
  top: -30px;
  left: -13px;
  z-index: 100;
  height: 35px;
  width: 35px;
}
.circle-lightgray {
  background-color: #d9d9d9;
}
.circle-success {
  background-color: #34ae56;
  box-shadow: 0px 0px 0px 10px #34ae5650;
}
.google-card {
  background-color: #ffde1415;
  border: 6px solid #ffde14;
}
input[type='range'] {
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  cursor: pointer;
}
input[type='range']::-webkit-slider-runnable-track,
input[type='range']::-moz-range-track {
  background-color: #34ae56;
  height: 1.4rem;
  border-radius: var(--bs-border-radius-xl) !important;
}
input[type='range']::-webkit-slider-thumb,
input[type='range']::-moz-range-thumb {
  -webkit-appearance: none;
  appearance: none;
  margin-top: -12px;
  background-color: white;
  height: 1rem;
  width: 1rem;
  border: none;
  border-radius: 50%;
}
</style>
