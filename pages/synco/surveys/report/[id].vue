<script setup lang="ts">
import { ref } from 'vue'
import type { IKeyValuePair, ISurveyQuestionList } from '~/types'

let surveyData = ref<IKeyValuePair[]>([
  { Key: 'Recipients', Value: '230' },
  { Key: 'Opened', Value: '90' },
  { Key: 'Finished', Value: '40' },
  { Key: 'Questions', Value: '10' },
  { Key: 'Recipients', Value: '190' },
])

let questions = ref<ISurveyQuestionList[]>([
  {
    Title: 'What do you think about Synco?',
    Type: 'rating',
    Choices: [
      { Key: '1', Value: '5%' },
      { Key: '2', Value: '10%' },
      { Key: '3', Value: '15%' },
      { Key: '4', Value: '20%' },
      { Key: '5', Value: '50%' },
    ],
  },
  {
    Title: 'What do you think about Synco?',
    Type: 'single-choice',
    Choices: [
      { Key: 'bad', Value: '10%' },
      { Key: 'good', Value: '30%' },
      { Key: 'excelent', Value: '60%' },
    ],
  },
  {
    Title: 'What do you think about Synco?',
    Type: 'multiple-choice',
    Choices: [
      { Key: 'bad', Value: '20%' },
      { Key: 'good', Value: '40%' },
      { Key: 'excelent', Value: '80%' },
    ],
  },
  {
    Title: 'What do you think about Synco?',
    Type: 'open',
    Choices: [
      { Key: '', Value: 'Response 1' },
      { Key: '', Value: 'Response 2' },
      { Key: '', Value: 'Response 3' },
      { Key: '', Value: 'Response 4' },
      { Key: '', Value: 'Response 5' },
      { Key: '', Value: 'Response 6' },
    ],
  },
])
</script>

<template>
  <NuxtLayout name="syncolayout" page-title="Surveys">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <NuxtLink to="/synco/surveys" class="text-dark">Surveys</NuxtLink>
        </li>
        <li class="breadcrumb-item active text-semibold" aria-current="page">
          Survey Title
        </li>
      </ol>
    </nav>
    <h2 class="mb-5">
      <NuxtLink to="/synco/surveys">
        <Icon name="material-symbols:arrow-left-alt" class="text-dark me-2" />
      </NuxtLink>
      Survey Overview
    </h2>
    <h3>Survey Title Goes Here</h3>
    <div class="row">
      <div
        class="bg-star d-flex flex-column justify-content-center col-2 rounded-4 m-4 p-4"
        v-for="data in surveyData"
      >
        <span class="display-5">
          <strong>{{ data.Value }}</strong>
        </span>
        <span class="text-muted">{{ data.Key }}</span>
      </div>
    </div>
    <div class="card rounded-4">
      <div class="row p-4">
        <div class="col-6 d-flex flex-column">
          <div class="d-flex justify-content-between flex-row">
            <dd>Audience (Chelsea members)</dd>
            <dt>230</dt>
          </div>
          <div class="d-flex justify-content-between flex-row">
            <dd>Total opened</dd>
            <dt>230</dt>
          </div>
          <div class="d-flex justify-content-between flex-row">
            <dd>Last clicked</dd>
            <dt>230</dt>
          </div>
        </div>
        <div
          class="col-6 d-flex flex-column"
          style="border-left: 1px solid lightgray"
        >
          <div class="d-flex justify-content-between flex-row">
            <dd>Audience</dd>
            <dt>230</dt>
          </div>
          <div class="d-flex justify-content-between flex-row">
            <dd>Total opened</dd>
            <dt>230</dt>
          </div>
          <div class="d-flex justify-content-between flex-row">
            <dd>Last clicked</dd>
            <dt>230</dt>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-4">
      <template v-for="(question, index) in questions">
        <div class="col-3">
          <div class="card rounded-4" style="height: 100%">
            <div class="card-header" style="border-bottom: 1px solid lightgray">
              <span class="text-muted">Question {{ index + 1 }}</span>
            </div>
            <div class="card-body">
              <p>{{ question.Title }}</p>
              <template v-if="question.Type != 'open'">
                <template v-for="choice in question.Choices">
                  <div class="row">
                    <div class="col-3">
                      <span>{{ choice.Key }}</span>
                    </div>
                    <div class="col-7">
                      <div class="progress w-100 mx-3">
                        <div
                          class="progress-bar"
                          :style="`width:${choice.Value};`"
                        ></div>
                      </div>
                    </div>
                    <div class="col-2">
                      <span>{{ choice.Value }}</span>
                    </div>
                  </div>
                </template>
              </template>
              <template v-else-if="question.Type == 'open'">
                <template v-for="choice in question.Choices">
                  <div class="d-flex flex-column">
                    <span class="small pb-1">{{ choice.Value }}</span>
                  </div>
                </template>
              </template>
            </div>
          </div>
        </div>
      </template>
    </div>
  </NuxtLayout>
</template>

<style scoped>
.bg-star {
  background-image: url('@/src/assets/bg-survey-star.png');
  background-position: top right;
  background-repeat: no-repeat;
}
</style>
