<script setup lang="ts">
import { ref } from 'vue'
import type { IFranchiseQuestion, IFranchiseTopicQuestions } from '~/types'

const questions = ref<IFranchiseQuestion[]>([
  {
    Number: 1,
    Question: 'Have you work in a franchise before?',
    Answer: null,
  },
  {
    Number: 2,
    Question: 'Have you work in a franchise before?',
    Answer: null,
  },
  {
    Number: 3,
    Question: 'Have you work in a franchise before?',
    Answer: null,
  },
  {
    Number: 4,
    Question: 'Have you work in a franchise before?',
    Answer: null,
  },
  {
    Number: 5,
    Question: 'Have you work in a franchise before?',
    Answer: null,
  },
])

const topics = ref<IFranchiseTopicQuestions[]>([
  {
    Title: 'First topic',
    Questions: questions.value,
  },
  {
    Title: 'Second topic',
    Questions: questions.value,
  },
  {
    Title: 'Third topic',
    Questions: questions.value,
  },
  {
    Title: 'Forth topic',
    Questions: questions.value,
  },
])

let selection = ref<string>('Overview')

const selectionAreas = ref<string[]>(['Overview', 'Answers'])

const selectInformation = (selected: string) => {
  selection.value = selected
}
</script>

<template>
  <NuxtLayout name="syncolayout" page-title="Franchise Account Information">
    <div class="d-flex flex-row py-4">
      <NuxtLink class="h3 my-auto" to="/synco/recruitment/coaches-leads">
        <Icon name="material-symbols:arrow-back" class="me-2" />
      </NuxtLink>
      <div class="rounded-3 d-flex card flex-row p-1">
        <template v-for="btn in selectionAreas">
          <button
            type="button"
            class="btn mx-2"
            :class="selection == btn ? 'btn-primary text-light' : ''"
            @click="selectInformation(btn)"
          >
            {{ btn }}
          </button>
        </template>
      </div>
    </div>
    <div class="row" v-if="selection == 'Overview'">
      <div class="col-8">
        <div class="my-3">
          <SyncoRecruitmentFormsCandidateInformationCard>
            <template v-slot:internal_title>
              <span class="h3 mb-4"
                ><strong>Candidate Information</strong></span
              >
            </template>
          </SyncoRecruitmentFormsCandidateInformationCard>
        </div>
        <div class="my-3">
          <div class="card rounded-4 p-4">
            <span class="h3 mb-4"
              ><strong>Franchise specifications</strong></span
            >
            <div class="row">
              <div class="col-6">
                <div class="form-group w-100 mb-3">
                  <label for="location" class="form-labelform-label-light"
                    >Location</label
                  >
                  <input
                    id="location"
                    type="text"
                    class="form-control form-control-lg"
                    placeholder="Enter location"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="form-group w-100 mb-3">
                  <label
                    for="availableCapital"
                    class="form-labelform-label-light"
                    >Capital available</label
                  >
                  <input
                    id="availableCapital"
                    type="text"
                    class="form-control form-control-lg"
                    placeholder="Enter capital available"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="my-3">
          <div class="card rounded-4 p-4">
            <span class="h3 mb-4"><strong>Details</strong></span>
            <div class="row my-2">
              <div class="col-12">
                <div class="form-group mb-3">
                  <label for="coverNote" class="form-label">Cover Note</label>
                  <textarea
                    id="coverNote"
                    type="text"
                    class="form-control"
                    rows="5"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="my-3">
          <SyncoWeeklyClassesFormsCommentFormList />
        </div>
      </div>
      <div class="col-4">
        <div class="my-3">
          <SyncoRecruitmentFranchiseRecruitmentStatusCard>
            <template v-slot:internal_title>
              <span class="h3 mb-4"><strong>Recruitment status</strong></span>
            </template>
          </SyncoRecruitmentFranchiseRecruitmentStatusCard>
        </div>
        <div class="my-3">
          <SyncoRecruitmentFranchiseRecruitmentStatusChartsCard>
            <template v-slot:internal_title>
              <span class="h3 mb-4"><strong>Recruitment status</strong></span>
            </template>
          </SyncoRecruitmentFranchiseRecruitmentStatusChartsCard>
        </div>
        <div class="my-3">
          <SyncoRecruitmentActionsCard />
        </div>
      </div>
    </div>
    <div class="" v-else-if="selection == 'Answers'">
      <div class="row">
        <div class="col-8">
          <template v-for="topic in topics">
            <SyncoRecruitmentFranchiseTopicCard :questions="topic.Questions">
              <template v-slot:internal_title>
                <span class="h3 mb-4"
                  ><strong>{{ topic.Title }}</strong></span
                >
              </template>
            </SyncoRecruitmentFranchiseTopicCard>
          </template>
        </div>
        <div class="col-4">
          <SyncoRecruitmentFranchiseRecruitmentStatusChartsCard>
            <template v-slot:internal_title>
              <span class="h3 mb-4"><strong>Recruitment status</strong></span>
            </template>
          </SyncoRecruitmentFranchiseRecruitmentStatusChartsCard>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
