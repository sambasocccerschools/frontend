<script setup lang="ts">
const layout = 'parentlayout'
let selectedAction = ref<string>('Refer a friend')

let referralPending = {
  Date: '01/06/2023',
  Name: 'Steve Jones',
  Email: 'tom.jones@gmail.com',
  Phone: '123456789',
  Status: 'Pending',
}

let referralSuccess = {
  Date: '01/06/2023',
  Name: 'Steve Jones',
  Email: 'tom.jones@gmail.com',
  Phone: '123456789',
  Status: 'Success',
}

let referralsList = [
  referralPending,
  referralPending,
  referralPending,
  referralPending,
  referralPending,
  referralPending,
  referralSuccess,
]

let collectPoints = [
  {
    title: 'Reserve your Membership every month',
    points: '100 Points',
  },
  {
    title: 'Book Holiday Camps',
    points: '100 Points',
  },
  {
    title: 'Book a Birthday Party',
    points: '100 Points',
  },
  {
    title: 'Book Weekply Classes',
    points: '100 Points',
  },
  {
    title: 'Book One-To-One Training',
    points: '100 Points',
  },
  {
    title: 'Reserve your Membership every month',
    points: '100 Points',
  },
]
</script>
<template>
  <NuxtLayout :name="layout" page-title="Rewardss">
    <div class="my-4">
      <div class="card rounded-4 border-0" style="width: fit-content">
        <div class="p-3">
          <div
            class="d-flex align-items-center justify-content-between flex-row"
          >
            <div class="bg-light rounded-3 d-flex flex-row border-0 p-1">
              <button
                type="button"
                class="btn mx-2"
                :class="
                  selectedAction == 'Refer a friend'
                    ? 'btn-primary text-light'
                    : ''
                "
                @click="selectedAction = 'Refer a friend'"
              >
                Refer a friend
              </button>
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
                Your referrals
              </button>
              <button
                type="button"
                class="btn mx-2"
                :class="
                  selectedAction == 'Loyalty Club'
                    ? 'btn-primary text-light'
                    : ''
                "
                @click="selectedAction = 'Loyalty Club'"
              >
                Loyalty Club
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <template v-if="selectedAction == 'Refer a friend'">
      <div class="card rounded-4 border-0">
        <div class="row">
          <div class="col-4 p-3">
            <div
              class="rounded-4 bg-primary text-light d-flex flex-column align-items-center p-4 text-center"
            >
              <div class="my-4">
                <img src="@/src/assets/img-rewards.png" />
              </div>
              <span class="h3 my-3"
                ><strong> Refer your friends and get benefits! </strong></span
              >
              <span class="h5 my-3">
                Lorem ipsum dolor sit amet consectetur. Pellentesque bibendum id
                duis sit mi lobortis dictum consectetur venenatis.
              </span>
              <!-- <div class="mt-3">
                <button class="btn text-light bg-transparent">Copy Link</button>
              </div>
              <div class="input-group mb-2">
                <input
                  class="bg-primary form-control text-light"
                  value="sharelink.com"
                />
              </div> -->
            </div>
          </div>
          <div class="col-8 p-3">
            <div class="d-flex flex-column">
              <span class="h4 my-4"><strong>Share</strong></span>
              <div class="d-flex my-4 flex-row">
                <button
                  type="button"
                  class="btn btn-success rounded-circle text-light me-2"
                  style="height: 54px; width: 54px"
                >
                  <Icon name="ph:device-mobile" class="h3 m-0" />
                </button>
                <button
                  type="button"
                  class="btn btn-success rounded-circle text-light me-2"
                  style="height: 54px; width: 54px"
                >
                  <Icon name="ph:envelope" class="h3 m-0" />
                </button>
                <button
                  type="button"
                  class="btn btn-success rounded-circle text-light me-2"
                  style="height: 54px; width: 54px"
                >
                  <Icon name="ph:facebook-logo" class="h3 m-0" />
                </button>
                <button
                  type="button"
                  class="btn btn-success rounded-circle text-light me-2"
                  style="height: 54px; width: 54px"
                >
                  <Icon name="ph:instagram-logo" class="h3 m-0" />
                </button>
                <button
                  type="button"
                  class="btn btn-success rounded-circle text-light me-2"
                  style="height: 54px; width: 54px"
                >
                  <Icon name="ph:linkedin-logo" class="h3 m-0" />
                </button>
              </div>

              <span class="h4 my-2"
                ><strong>Or send us the referee details</strong></span
              >
              <span class="text-muted my-2 mb-4">
                Prefer to send us their details? Use the form below and we’ll
                contact directly your friend for you and if they sign up, we’ll
                let you know.
              </span>

              <div class="row">
                <div class="col-6">
                  <div class="form-group w-100 mb-3">
                    <label for="firstName" class="form-labelform-label-light"
                      >First name</label
                    >
                    <input
                      id="firstName"
                      type="text"
                      class="form-control form-control-lg"
                      placeholder="Enter first name"
                    />
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-group w-100 mb-3">
                    <label for="lastName" class="form-labelform-label-light"
                      >Last name</label
                    >
                    <input
                      id="lastName"
                      type="text"
                      class="form-control form-control-lg"
                      placeholder="Enter last name"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <div class="form-group w-100 mb-3">
                    <label for="email" class="form-labelform-label-light"
                      >Email</label
                    >
                    <input
                      id="email"
                      type="text"
                      class="form-control form-control-lg"
                      placeholder="Enter email address"
                    />
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-group w-100 mb-3">
                    <label for="phoneNumber" class="form-labelform-label-light"
                      >Phone number</label
                    >
                    <input
                      id="phoneNumber"
                      type="phone"
                      class="form-control form-control-lg"
                      placeholder="+44"
                    />
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-group w-100 mb-3">
                    <label for="service" class="form-labelform-label-light"
                      >Service</label
                    >
                    <select class="form-select" aria-label="level" id="service">
                      <option selected value="weekly-classes">
                        Weekly Classes
                      </option>
                      <option value="one-to-one">One to One</option>
                      <option value="holiday-camps">Holiday Camps</option>
                      <option value="birthday-parties">Birthday Parties</option>
                      <option value="club">Club</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="my-2 mt-4">
                <button class="btn btn-primary">
                  <span class="mx-4 px-4">Submit</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="card rounded-4 d-flex flex-column align-items-center my-4 border-0 p-3"
      >
        <img
          src="@/src/assets/img-parents-rewards.png"
          height="80px"
          width="95px"
        />
        <h2 class="text-primary">What the reward is?</h2>
        <p class="text-muted">
          Get one free month for yourself and give your friend one free month as
          well.
        </p>
      </div>
    </template>
    <template v-if="selectedAction == 'Your referrals'">
      <div class="row">
        <div class="col-10">
          <div class="card rounded-4 border-0 p-3">
            <h3>Your referrals</h3>
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
                  <div class="col-2">{{ referral.Date }}</div>
                  <div class="col-3">{{ referral.Name }}</div>
                  <div class="col-3">{{ referral.Email }}</div>
                  <div class="col-2">{{ referral.Phone }}</div>
                  <div class="col-2">
                    <span
                      class="badge"
                      :class="
                        referral.Status == 'Pending'
                          ? 'badge-warning'
                          : referral.Status == 'Success'
                            ? 'badge-success'
                            : ''
                      "
                      >{{ referral.Status }}</span
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
              <h2 class="text-success">1</h2>
              <h5>Successful referrals</h5>
              <hr class="border-yellow" />
              <h2 class="text-success">1</h2>
              <h5>Free months</h5>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-if="selectedAction == 'Loyalty Club'">
      <div class="card rounded-4 border-0 p-3">
        <div class="d-flex flex-column">
          <div class="rounded-4 loyalty-points">
            <img
              src="@/src/assets/img-parents-loyalty-points.png"
              class="w-100"
            />
          </div>
          <div class="card rounded-4 my-3 border p-3">
            <h3>How can you collect your Points?</h3>
            <div class="row my-2">
              <div class="col-6" v-for="points in collectPoints">
                <div
                  class="d-flex justify-content-between align-items-center flex-row py-2"
                  style="border-bottom: 1px solid lightgray"
                >
                  <span>{{ points.title }}</span>
                  <span
                    class="badge badge-warning d-flex align-items-center rounded-4 flex-row"
                  >
                    <img src="@/src/assets/img-star.png" width="25px" />
                    <span class="ms-2">{{ points.points }}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="card rounded-4 my-3 border p-3">
            <h3>Ways to collect your Points</h3>
            <div class="row justify-content-between my-4">
              <div
                class="col-2 d-flex flex-column align-items-center mx-2 my-4"
              >
                <img src="@/src/assets/img-parents-bag.png" class="w-100" />
                <span class="h5 mt-3">Kids Winter Hat</span>
                <span class="mb-3"><strong>100 Points</strong></span>
                <!-- <button type="button" class="btn btn-success">
                  Redeem Award
                </button> -->
              </div>
              <div
                class="col-2 d-flex flex-column align-items-center mx-2 my-4"
              >
                <img src="@/src/assets/img-parents-tshirt.png" class="w-100" />
                <span class="h5 mt-3">Kids Winter Hat</span>
                <span class="mb-3"><strong>120 Points</strong></span>
                <!-- <button type="button" class="btn btn-locked">
                  <Icon name="ph:lock" class="h5 m-0" />
                </button>
                <span class="text-orange mt-3 text-center"
                  >You need 20 more points to reach this reward</span
                > -->
              </div>
              <div
                class="col-2 d-flex flex-column align-items-center mx-2 my-4"
              >
                <img src="@/src/assets/img-parents-uniform.png" class="w-100" />
                <span class="h5 mt-3">Kids Winter Hat</span>
                <span class="mb-3"><strong>120 Points</strong></span>
                <!-- <button type="button" class="btn btn-locked">
                  <Icon name="ph:lock" class="h5 m-0" />
                </button>
                <span class="text-orange mt-3 text-center"
                  >You need 20 more points to reach this reward</span
                > -->
              </div>
              <div
                class="col-2 d-flex flex-column align-items-center mx-2 my-4"
              >
                <img src="@/src/assets/img-parents-hat.png" class="w-100" />
                <span class="h5 mt-3">Kids Winter Hat</span>
                <span class="mb-3"><strong>120 Points</strong></span>
                <!-- <button type="button" class="btn btn-locked">
                  <Icon name="ph:lock" class="h5 m-0" />
                </button>
                <span class="text-orange mt-3 text-center"
                  >You need 20 more points to reach this reward</span
                > -->
              </div>
              <div
                class="col-2 d-flex flex-column align-items-center mx-2 my-4"
              >
                <img src="@/src/assets/img-parents-ball.png" class="w-100" />
                <span class="h5 mt-3">Kids Winter Hat</span>
                <span class="mb-3"><strong>120 Points</strong></span>
                <!-- <button type="button" class="btn btn-locked">
                  <Icon name="ph:lock" class="h5 m-0" />
                </button>
                <span class="text-orange mt-3 text-center"
                  >You need 20 more points to reach this reward</span
                > -->
              </div>
              <div
                class="col-2 d-flex flex-column align-items-center mx-2 my-4"
              >
                <img src="@/src/assets/img-parents-bag.png" class="w-100" />
                <span class="h5 mt-3">Kids Winter Hat</span>
                <span class="mb-3"><strong>200 Points</strong></span>
                <!-- <button type="button" class="btn btn-locked">
                  <Icon name="ph:lock" class="h5 m-0" />
                </button>
                <span class="text-orange mt-3 text-center"
                  >You need 20 more points to reach this reward</span
                > -->
              </div>
              <div
                class="col-2 d-flex flex-column align-items-center mx-2 my-4"
              >
                <img src="@/src/assets/img-parents-tshirt.png" class="w-100" />
                <span class="h5 mt-3">Kids Winter Hat</span>
                <span class="mb-3"><strong>200 Points</strong></span>
                <!-- <button type="button" class="btn btn-locked">
                  <Icon name="ph:lock" class="h5 m-0" />
                </button>
                <span class="text-orange mt-3 text-center"
                  >You need 20 more points to reach this reward</span
                > -->
              </div>
              <div
                class="col-2 d-flex flex-column align-items-center mx-2 my-4"
              >
                <img src="@/src/assets/img-parents-uniform.png" class="w-100" />
                <span class="h5 mt-3">Kids Winter Hat</span>
                <span class="mb-3"><strong>200 Points</strong></span>
                <!-- <button type="button" class="btn btn-locked">
                  <Icon name="ph:lock" class="h5 m-0" />
                </button>
                <span class="text-orange mt-3 text-center"
                  >You need 20 more points to reach this reward</span
                > -->
              </div>
              <div
                class="col-2 d-flex flex-column align-items-center mx-2 my-4"
              >
                <img src="@/src/assets/img-parents-hat.png" class="w-100" />
                <span class="h5 mt-3">Kids Winter Hat</span>
                <span class="mb-3"><strong>200 Points</strong></span>
                <!-- <button type="button" class="btn btn-locked">
                  <Icon name="ph:lock" class="h5 m-0" />
                </button>
                <span class="text-orange mt-3 text-center"
                  >You need 20 more points to reach this reward</span
                > -->
              </div>
              <div
                class="col-2 d-flex flex-column align-items-center mx-2 my-4"
              >
                <img src="@/src/assets/img-parents-ball.png" class="w-100" />
                <span class="h5 mt-3">Kids Winter Hat</span>
                <span class="mb-3"><strong>200 Points</strong></span>
                <!-- <button type="button" class="btn btn-locked">
                  <Icon name="ph:lock" class="h5 m-0" />
                </button>
                <span class="text-orange mt-3 text-center"
                  >You need 20 more points to reach this reward</span
                > -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </NuxtLayout>
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
