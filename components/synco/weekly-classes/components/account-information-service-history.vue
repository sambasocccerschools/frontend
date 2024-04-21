<template>
  <div class="w-100 mt-3" v-if="!showServiceHistoryDetails">
    <SyncoWeeklyClassesServiceHistoryItem>
      <template v-slot:title>
        <Icon name="ph:crown" class="h5 m-0" />
        <span class="h5 m-0 mx-2">Weekly Classes Membership</span>
      </template>
      <template v-slot:status>
        <button
          class="btn btn-success btn-sm text-light border-0"
          style="width: 95px"
        >
          Active
        </button>
      </template>
      <template v-slot:fields>
        <SyncoWeeklyClassesComponentsServiceHistoryWeeklyClassesListItem />
      </template>
      <template v-slot:footer>
        <div class="mt-3">
          <button
            class="btn btn-light me-1 border bg-transparent"
            @click="seeDetails('weekly-classes')"
          >
            See details
          </button>
          <button class="btn btn-light mx-1 border bg-transparent">
            Credits
          </button>
          <button class="btn btn-light mx-1 border bg-transparent">
            Attendance
          </button>
          <button class="btn btn-light mx-1 border bg-transparent">
            See payments
          </button>
        </div>
      </template>
    </SyncoWeeklyClassesServiceHistoryItem>

    <SyncoWeeklyClassesServiceHistoryItem>
      <template v-slot:title>
        <Icon name="ph:cake" class="h5 m-0" />
        <span class="h5 m-0 mx-2">Birthday Party Booking</span>
      </template>
      <template v-slot:status>
        <button
          class="btn btn-danger btn-sm text-light border-0"
          style="width: 95px"
        >
          Expired
        </button>
      </template>
      <template v-slot:fields>
        <SyncoWeeklyClassesComponentsServiceHistoryBirthdayPartyListItem />
      </template>
      <template v-slot:footer>
        <div class="mt-3">
          <button
            class="btn btn-light me-1 border bg-transparent"
            @click="seeDetails('birthday-party')"
          >
            See details
          </button>
          <button class="btn btn-light mx-1 border bg-transparent">
            See payments
          </button>
        </div>
      </template>
    </SyncoWeeklyClassesServiceHistoryItem>

    <SyncoWeeklyClassesServiceHistoryItem>
      <template v-slot:title>
        <Icon name="ph:receipt" class="h5 m-0" />
        <span class="h5 m-0 mx-2">One to One Booking</span>
      </template>
      <template v-slot:status>
        <button
          class="btn btn-danger btn-sm text-light border-0"
          style="width: 95px"
        >
          Expired
        </button>
      </template>
      <template v-slot:fields>
        <SyncoWeeklyClassesComponentsServiceHistoryOneToOneListItem />
      </template>
      <template v-slot:footer>
        <div class="mt-3">
          <button
            class="btn btn-light me-1 border bg-transparent"
            @click="seeDetails('one-to-one')"
          >
            See details
          </button>
          <button class="btn btn-light mx-1 border bg-transparent">
            Attendance
          </button>
          <button class="btn btn-light mx-1 border bg-transparent">
            See payments
          </button>
        </div>
      </template>
    </SyncoWeeklyClassesServiceHistoryItem>

    <SyncoWeeklyClassesServiceHistoryItem>
      <template v-slot:title>
        <Icon name="ph:campfire" class="h5 m-0" />
        <span class="h5 m-0 mx-2">Holiday Camp</span>
      </template>
      <template v-slot:status>
        <button
          class="btn btn-danger btn-sm text-light border-0"
          style="width: 95px"
        >
          Expired
        </button>
      </template>
      <template v-slot:fields>
        <SyncoWeeklyClassesComponentsServiceHistoryHolidayCampListItem />
      </template>
      <template v-slot:footer>
        <div class="mt-3">
          <button
            class="btn btn-light me-1 border bg-transparent"
            @click="seeDetails('holiday-camp')"
          >
            See details
          </button>
          <button class="btn btn-light mx-1 border bg-transparent">
            Attendance
          </button>
          <button class="btn btn-light mx-1 border bg-transparent">
            See payments
          </button>
        </div>
      </template>
    </SyncoWeeklyClassesServiceHistoryItem>

    <SyncoWeeklyClassesServiceHistoryItem>
      <template v-slot:title>
        <Icon name="ph:soccer-ball" class="h5 m-0" />
        <span class="h5 m-0 mx-2">Club</span>
      </template>
      <template v-slot:status>
        <button
          class="btn btn-danger btn-sm text-light border-0"
          style="width: 95px"
        >
          Expired
        </button>
      </template>
      <template v-slot:fields>
        <SyncoWeeklyClassesComponentsServiceHistoryClubListItem />
      </template>
      <template v-slot:footer>
        <div class="mt-3">
          <button
            class="btn btn-light me-1 border bg-transparent"
            @click="seeDetails('club')"
          >
            See details
          </button>
          <button class="btn btn-light mx-1 border bg-transparent">
            Attendance
          </button>
          <button class="btn btn-light mx-1 border bg-transparent">
            See payments
          </button>
        </div>
      </template>
    </SyncoWeeklyClassesServiceHistoryItem>

    <SyncoWeeklyClassesServiceHistoryItem>
      <template v-slot:title>
        <Icon name="ph:package" class="h5 m-0" />
        <span class="h5 m-0 mx-2">Merchandise</span>
      </template>
      <template v-slot:status>
        <button
          class="btn btn-success btn-sm text-light border-0"
          style="width: 95px"
        >
          Paid
        </button>
      </template>
      <template v-slot:fields>
        <SyncoWeeklyClassesComponentsServiceHistoryMerchandiseListItem />
      </template>
      <template v-slot:footer>
        <div class="mt-3">
          <button
            class="btn btn-light me-1 border bg-transparent"
            @click="seeDetails('merchandise')"
          >
            See details
          </button>
        </div>
      </template>
    </SyncoWeeklyClassesServiceHistoryItem>
  </div>
  <div class="w-100 mt-3" v-else>
    <div class="row">
      <div class="col-8">
        <SyncoWeeklyClassesComponentsServiceHistoryInformation>
          <template v-slot:title>
            <span
              style="padding-right: 0.5rem; cursor: pointer"
              @click="seeDetails('')"
              ><Icon name="material-symbols:arrow-back"
            /></span>
            <h5 class="m-0 py-4"><strong>Student information</strong></h5>
          </template>
        </SyncoWeeklyClassesComponentsServiceHistoryInformation>
        <SyncoWeeklyClassesFormsCommentFormList />
      </div>
      <div class="col-4">
        <SyncoWeeklyClassesComponentsServiceHistoryAccountCard
          :header-color="header.Color"
          :account-status="header.Status"
        >
          <template v-slot:body>
            <template v-if="selectedDetails == 'weekly-classes'">
              <SyncoWeeklyClassesComponentsServiceHistoryWeeklyClassesCardItem />
            </template>
            <template v-if="selectedDetails == 'birthday-party'">
              <SyncoWeeklyClassesComponentsServiceHistoryBirthdayPartyCardItem />
            </template>
            <template v-if="selectedDetails == 'one-to-one'">
              <SyncoWeeklyClassesComponentsServiceHistoryOneToOneCardItem />
            </template>
            <template v-if="selectedDetails == 'holiday-camp'">
              <SyncoWeeklyClassesComponentsServiceHistoryHolidayCampCardItem />
            </template>
            <template v-if="selectedDetails == 'club'">
              <SyncoWeeklyClassesComponentsServiceHistoryClubCardItem />
            </template>
            <template v-if="selectedDetails == 'merchandise'">
              <SyncoWeeklyClassesComponentsServiceHistoryMerchandiseCardItem />
            </template>
          </template>
        </SyncoWeeklyClassesComponentsServiceHistoryAccountCard>
        <div class="card rounded-4 mb-3 p-2">
          <div class="d-flex flex-column">
            <div
              class="d-flex justify-content-between align-items-center my-2 flex-row"
            >
              <button
                type="button"
                class="btn btn-light mx-2 border bg-white"
                @click="sendMessage('email')"
              >
                <span class="px-4"
                  ><Icon name="ph:envelope-simple" /><span class="mx-2"
                    >Send Email</span
                  ></span
                >
              </button>
              <button
                type="button"
                class="btn btn-light mx-2 border bg-white"
                @click="sendMessage('text')"
              >
                <span class="px-4"
                  ><Icon name="ph:text-a-underline" /><span class="mx-2"
                    >Send text</span
                  ></span
                >
              </button>
            </div>
            <button
              type="button"
              class="btn btn-primary text-light m-2"
              @click="bookMembership"
            >
              Book a membership
            </button>
            <button
              type="button"
              class="btn btn-light m-2 border bg-white"
              @click="leaveWaitingList"
            >
              Leave waiting list
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

import type { IAccountCardHeader } from '~/types/index'
const props = defineProps<{
  header: IAccountCardHeader
}>()

let header = ref<IAccountCardHeader>(props.header).value
let showServiceHistoryDetails = ref(false)
let selectedDetails = ref('')

let seeDetails = (details: string) => {
  selectedDetails.value = details
  showServiceHistoryDetails.value = !showServiceHistoryDetails.value
}
let bookMembership = () => {
  console.log('bookMembership')
}
let leaveWaitingList = () => {
  console.log('leaveWaitingList')
}
let sendMessage = (type: string) => {
  console.log('sendMessage', type)
}
</script>
