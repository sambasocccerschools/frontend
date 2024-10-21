<script setup lang="ts">
import { ref } from 'vue'
import type {
  IAccountRefereeItem,
  IRefereeReportingItem,
  IAccountRewardHistoryItem,
  IAccountLoyaltyPointsHistoryItem,
} from '~/types/synco/index'
const props = defineProps<{
  referralsList: IAccountRefereeItem[]
  reporting: IRefereeReportingItem
  loyaltyPointsRewards: IAccountRewardHistoryItem[]
  loyaltyPointsHistory: IAccountLoyaltyPointsHistoryItem[]
  currentPoitns: number
}>()

let selectedAction = ref<string>('Your referrals')

let referralsList = ref<IAccountRefereeItem[]>(props.referralsList).value
let reporting = ref<IRefereeReportingItem>(props.reporting).value
let loyaltyPointsRewards = ref<IAccountRewardHistoryItem[]>(
  props.loyaltyPointsRewards,
).value
let loyaltyPointsHistory = ref<IAccountLoyaltyPointsHistoryItem[]>(
  props.loyaltyPointsHistory,
).value
let currentPoitns = ref<number>(props.currentPoitns).value

const cleanDate = (date: any) => {
  if (!Number.isInteger(date)) return date
  let cleanedDate = new Date(+date * 1000).toISOString()?.split('T')[0]
  return cleanedDate
}
</script>
<template>
  <div class="my-4">
    <div class="card rounded-4 border-0" style="width: fit-content">
      <div class="p-3">
        <div class="d-flex align-items-center justify-content-between flex-row">
          <div class="bg-light rounded-3 d-flex flex-row border-0 p-1">
            <button
              type="button"
              class="btn mx-2"
              :class="
                selectedAction == 'Your referrals'
                  ? 'btn-primary text-light'
                  : ''
              "
              @click="selectedAction = 'Your referrals'"
            >
              Referrals
            </button>
            <button
              type="button"
              class="btn mx-2"
              :class="
                selectedAction == 'Loyalty Club' ? 'btn-primary text-light' : ''
              "
              @click="selectedAction = 'Loyalty Club'"
            >
              Loyalty Points
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <template v-if="selectedAction == 'Your referrals'">
    <div class="row">
      <div class="col-10">
        <div class="card rounded-4 border-0 p-3">
          <h3>Customer Referrals</h3>
          <div class="card rounded-4 mt-4">
            <div class="card-header bg-lightgray p-3">
              <div class="row">
                <div class="col-2">Date</div>
                <div class="col-3">Referral name</div>
                <div class="col-3">Email</div>
                <div class="col-2">Phone</div>
                <div class="col-2">Status</div>
              </div>
            </div>
            <div class="card-body rounded-4 p-3">
              <div class="row my-3" v-for="referral in referralsList">
                <div class="col-2">{{ cleanDate(referral.created_at) }}</div>
                <div class="col-3">
                  {{ referral.first_name }} {{ referral.last_name }}
                </div>
                <div class="col-3">{{ referral.email }}</div>
                <div class="col-2">{{ referral.phone_number }}</div>
                <div class="col-2">
                  <span
                    class="badge"
                    :class="
                      referral.guardianRefereeStatus.title == 'Pending'
                        ? 'badge-warning'
                        : referral.guardianRefereeStatus.title == 'Success'
                          ? 'badge-success'
                          : ''
                    "
                    >{{ referral.guardianRefereeStatus.title }}</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-2">
        <div class="your-referrals rounded-4 p-3">
          <div class="card rounded-4 border-0 p-4">
            <h2 class="text-success">{{ reporting.success_count }}</h2>
            <h5>Successful referrals</h5>
            <hr class="border-yellow" />
            <h2 class="text-success">{{ reporting.total_free_months }}</h2>
            <h5>Free months</h5>
          </div>
        </div>
      </div>
    </div>
  </template>
  <template v-if="selectedAction == 'Loyalty Club'">
    <div class="d-flex w-100 flex-row">
      <!-- Current Points -->
      <div class="d-flex flex-column w-50 p-4">
        <div class="bg-primary text-light rounded-4 w-100 p-4">
          <h3>
            <strong>{{ currentPoitns }}</strong>
          </h3>
          <span>Current Points</span>
        </div>
        <h4 class="mt-4"><strong>Collected Points History</strong></h4>
        <div class="card rounded-4 w-100 mt-4 p-4">
          <table class="table">
            <thead>
              <tr>
                <th>Action Taken</th>
                <th>Date</th>
                <th>Points Accumulated</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="history in loyaltyPointsHistory">
                <td>{{ history.loyaltyPoint.title }}</td>
                <td>{{ cleanDate(history.created_at) }}</td>
                <td>
                  <span
                    class="badge badge-warning d-flex align-items-center rounded-4 flex-row"
                  >
                    <img src="@/src/assets/img-star.png" width="25px" />
                    <span class="ms-2">{{ history.earned_points }} Points</span>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- Rewards Collected -->
      <div class="d-flex flex-column w-50 p-4">
        <div class="bg-warning rounded-4 w-100 p-4">
          <h3>
            <strong>{{ loyaltyPointsRewards.length }}</strong>
          </h3>
          <span>Rewards Collected</span>
        </div>
        <h4 class="mt-4"><strong>Collected Rewards History</strong></h4>
        <div class="card rounded-4 w-100 mt-4 p-4">
          <table class="table">
            <thead>
              <tr>
                <th>Unlocked Rewards</th>
                <th>Collection Date</th>
                <th>Collected Points</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="reward in loyaltyPointsRewards">
                <td>{{ reward.reward.title }}</td>
                <td>{{ cleanDate(reward.created_at) }}</td>
                <td>
                  <span
                    class="badge badge-warning d-flex align-items-center rounded-4 flex-row"
                  >
                    <img src="@/src/assets/img-star.png" width="25px" />
                    <span class="ms-2"
                      >{{ reward.redeemed_points }} Points</span
                    >
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
</template>

<style scoped>
.badge {
  padding: 0.5rem 1.5rem;
}
.badge.badge-warning {
  background-color: #eda60010;
  color: #eda600;
}
.badge.badge-success {
  background-color: #ebf3ef;
  color: #34ae56;
}

.your-referrals {
  background-image: url('@/src/assets/bg-your-referrals.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
}

.loyalty-points {
  background-image: url('@/src/assets/bg-parents-loyalty-points.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 0px 2rem;
}

.border-yellow {
  border-color: #ffde14;
}

.btn.btn-locked {
  background-color: #f38b4d;
  color: white;
}
.btn.btn-locked:hover {
  background-color: #f38b4d90;
  color: white;
}
.text-orange {
  color: #f38b4d;
}
</style>
