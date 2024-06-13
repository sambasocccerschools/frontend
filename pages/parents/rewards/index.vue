<script setup lang="ts">
const layout = 'parentlayout'
let selectedAction = ref<string>('Refer a friend')
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
            <div class="mt-3">
              <button class="btn text-light bg-transparent">Copy Link</button>
            </div>
            <div class="input-group mb-2">
              <input
                class="bg-primary form-control text-light"
                value="sharelink.com"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
