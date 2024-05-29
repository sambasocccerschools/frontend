<script setup lang="ts">
import { ref } from 'vue'
import type { ICandidateEventItem } from '~/types'

let selection = ref<string>('Candidate Profile')

const selectionAreas = ref<string[]>(['Candidate Profile', 'Events'])
let eventList = ref<ICandidateEventItem[]>([
  {
    ImageUrl: '',
    Title: 'Lead Generated',
    Date: 'Monday 23rd June, 8:54am',
    Description: 'Lead has been generated through website',
    EventType: 'general',
  },
  {
    ImageUrl: '',
    Title: 'Nilio Bagga',
    Date: 'Monday 23rd June, 8:54am',
    Description: 'Ethan phoned the candidate',
    EventType: 'general',
  },
  {
    ImageUrl: '',
    Title: 'Nilio Bagga',
    Date: 'Monday 23rd June, 8:54am',
    Description: 'Coach Nilio marked them in as attended',
    EventType: 'general',
  },
  {
    ImageUrl: '',
    Title: 'Nilio Bagga',
    Date: 'Monday 23rd June, 8:54am',
    Description: 'Nilio sold 12 month membership plan',
    EventType: 'general',
  },
  {
    ImageUrl: '',
    Title: 'Nilio Bagga',
    Date: 'Monday 23rd June, 8:54am',
    Description: 'Nilio canceled 12 month membership plan',
    EventType: 'general',
  },
  {
    ImageUrl: '',
    Title: 'Nilio Bagga',
    Date: 'Monday 23rd June, 8:54am',
    Description: 'Coach Nilio had a telephone call with call agent Benton',
    EventType: 'phone-call',
    ExtraInformation: [
      { Key: 'CallUrl', Value: '' },
      { Key: 'DownloadCallUrl', Value: '' },
      { Key: 'PhoneNumber', Value: '' },
    ],
  },
  {
    ImageUrl: '',
    Title: 'Nilio Bagga',
    Date: 'Monday 23rd June, 8:54am',
    Description: 'Give a negative feedback',
    EventType: 'general',
  },
])

const selectInformation = (selected: string) => {
  selection.value = selected
}
</script>

<template>
  <NuxtLayout name="syncolayout" page-title="Account Information">
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
    <div class="row" v-if="selection == 'Candidate Profile'">
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
          <SyncoRecruitmentFormsJobSpecificationsCard>
            <template v-slot:internal_title>
              <span class="h3 mb-4"><strong>Job specifications</strong></span>
            </template>
          </SyncoRecruitmentFormsJobSpecificationsCard>
        </div>
        <div class="my-3">
          <SyncoRecruitmentFormsFurtherDetailsCard>
            <template v-slot:internal_title>
              <span class="h3 mb-4"><strong>Further Details</strong></span>
            </template>
          </SyncoRecruitmentFormsFurtherDetailsCard>
        </div>
        <div class="my-3">
          <SyncoWeeklyClassesFormsCommentFormList />
        </div>
      </div>
      <div class="col-4">
        <div class="my-3">
          <SyncoRecruitmentOnlineRecruitmentStatusCard>
            <template v-slot:internal_title>
              <span class="h3 mb-4"><strong>Recruitment status</strong></span>
            </template>
          </SyncoRecruitmentOnlineRecruitmentStatusCard>
        </div>
        <div class="my-3">
          <SyncoRecruitmentActionsCard>
            <template v-slot:after_reject>
              <button
                type="button"
                class="btn btn-light w-100 mx-2 border bg-white"
              >
                <span class="d-flex align-items-center flex-column"
                  >Recruit Candidate</span
                >
              </button>
            </template>
          </SyncoRecruitmentActionsCard>
        </div>
      </div>
    </div>
    <div class="" v-else-if="selection == 'Events'">
      <SyncoRecruitmentEvents :event-list="eventList" />
    </div>
  </NuxtLayout>
</template>
