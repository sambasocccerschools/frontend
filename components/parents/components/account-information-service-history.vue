<template>
  <div class="w-100 mt-3" v-if="!showServiceHistoryDetails">
    <SyncoWeeklyClassesServiceHistoryItem>
      <template v-slot:title>
        <Icon name="ph:crown" class="h5 m-0" />
        <span class="h5 m-0 mx-2">Weekly Classes Membership</span>
        <span class="mx-2"><strong>01/06/2023</strong></span>
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
        <span class="mx-2"><strong>01/06/2023</strong></span>
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
        <span class="mx-2"><strong>01/06/2023</strong></span>
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
        <span class="mx-2"><strong>01/06/2023</strong></span>
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
        <span class="mx-2"><strong>01/06/2023</strong></span>
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
        <span class="mx-2"><strong>01/06/2023</strong></span>
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
