<script setup lang="ts">
import { ref } from 'vue'

let dashboards = ref<string[]>(['Sales', 'Trials'])
let newDashboards = ref<string>('')
let selectedDashboard = ref<number>(0)
let dashboardDialog = ref<boolean>(false)
let sendToTVDialog = ref<boolean>(false)
let dashboardLink = ref<string>('https://share.sunco.com/dashboard')

const toggleDashboardDialog = () => {
  dashboardDialog.value = !dashboardDialog.value
}
const toggleSendToTVDialog = () => {
  sendToTVDialog.value = !sendToTVDialog.value
}
const addDashboard = () => {
  if (!!newDashboards.value) {
    dashboards.value.push(newDashboards.value)
    toggleDashboardDialog()
    newDashboards.value = ''
  }
}
</script>
<template>
  <div class="d-flex flex-column bg-tv-dark">
    <div
      class="d-flex justify-content-between bg-tv-light-dark border-bottom-gray align-items-center flex-row"
      style="height: 63px"
    >
      <div class="px-3">
        <img
          src="@/src/assets/sss-logo-synco-white.png"
          alt="Synco logo"
          style="width: 130px"
        />
      </div>
      <div>
        <NuxtLink to="/synco/dashboard" class="btn btn-primary">
          Go back to the platform
        </NuxtLink>
      </div>
      <div class="d-flex flex-row">
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Share
          </button>
          <div
            class="dropdown-menu bg-tv-light-dark border-gray rounded-4 py-2"
            style="width: 400px"
          >
            <div class="d-flex border-bottom-gray flex-row px-4 py-3">
              <div class="mx-2">
                <button type="button" class="btn btn-primary">Link</button>
              </div>
              <div class="mx-2">
                <button type="button" class="btn btn-secondary">Email</button>
              </div>
            </div>
            <div class="my-4 px-4">
              <span>
                <Icon name="ph:link" /> Anyone with this link can view the
                dashboard
              </span>
            </div>

            <div class="input-group w-100 my-3 px-4">
              <input
                id="dashboardName"
                type="text"
                class="form-control form-control-lg"
                v-model="dashboardLink"
                readonly
              />
              <span
                class="input-group-append d-flex align-items-center flex-row"
              >
                <Icon
                  name="ph:dots-three-vertical"
                  style="width: 25px; height: 25px"
                />
              </span>
            </div>
          </div>
        </div>
        <NuxtLink
          to="/synco/administration/tv-dashboard/loops"
          class="btn btn-secondary"
        >
          Loops
        </NuxtLink>

        <button class="btn btn-secondary" @click="toggleSendToTVDialog">
          Send to TV
        </button>
      </div>
      <div class="d-flex justify-content-ent flex-row">
        <div class="d-flex flex-row py-2">
          <div class="dropdown">
            <button
              class="btn btn-primary d-flex align-items-center dropdown-toggle mx-2 flex-row"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span
                class="rounded-2 bg-tv-light-dark d-flex align-items-center me-2 flex-row p-2"
              >
                <Icon name="ph:caret-double-right" />
              </span>
              <span> Dashboards </span>
            </button>
            <div
              class="dropdown-menu bg-tv-light-dark border-gray rounded-4 px-4 py-2"
              style="width: 200px"
            >
              <div class="my-4">
                <span class="h5">Choose one</span>
              </div>
              <template v-for="(dashboard, index) in dashboards">
                <div
                  class="d-flex h5 align-items-center my-3 flex-row"
                  @click="selectedDashboard = index"
                >
                  <Icon
                    name="ph:check-circle"
                    class="me-3"
                    :class="index == selectedDashboard ? 'text-primary' : ''"
                  />
                  <span>{{ dashboard }}</span>
                </div>
              </template>
              <hr class="w-100 my-4" />
              <div class="mb-3">
                <button
                  type="button"
                  class="btn btn-primary w-100"
                  @click="toggleDashboardDialog"
                >
                  <Icon name="ph:plus" /> Add dashboard
                </button>
              </div>
            </div>
          </div>
          <button class="btn btn-primary mx-2">
            <Icon name="ph:plus" /> Add widget
          </button>
        </div>
        <div class="d-flex align-items-center px-4">
          <img
            src="@/src/assets/img-avatar-small.png"
            alt="Avatar"
            class="me-3"
          />
          <h5>
            Nilio Bagga
            <Icon name="bi:chevron-down" />
          </h5>
        </div>
      </div>
    </div>
    <div class="d-flex flex-column h-100">
      <div class="d-flex h-66 flex-row">
        <div class="d-flex flex-column w-20">
          <div class="bg-tv-light-dark border-gray rounded-4 h-50 m-2 p-4">
            <span>Students number</span>
          </div>
          <div class="bg-tv-light-dark border-gray rounded-4 h-50 m-2 p-4">
            <span>Capacity filled</span>
          </div>
        </div>
        <div class="d-flex flex-column w-20">
          <div class="bg-tv-light-dark border-gray rounded-4 h-100 m-2 p-4">
            <span>Ben Sales</span>
          </div>
        </div>
        <div class="d-flex flex-column w-20">
          <div class="bg-tv-light-dark border-gray rounded-4 h-100 m-2 p-4">
            <span>Ben Sales</span>
          </div>
        </div>
        <div class="d-flex flex-column w-20">
          <div class="bg-tv-light-dark border-gray rounded-4 m-2 h-20 p-4">
            <span>Online sales weekly</span>
          </div>
          <div class="bg-tv-light-dark border-gray rounded-4 m-2 h-20 p-4">
            <span>Cancelations this week</span>
          </div>
          <div class="bg-tv-light-dark border-gray rounded-4 m-2 h-20 p-4">
            <span>Kit sale this week</span>
          </div>
          <div class="bg-tv-light-dark border-gray rounded-4 m-2 h-40 p-4">
            <span>Monthly SN difference</span>
          </div>
        </div>
        <div class="d-flex flex-column w-20">
          <div class="bg-tv-light-dark border-gray rounded-4 m-2 h-20 p-4">
            <span>Online sales weekly</span>
          </div>
          <div class="bg-tv-light-dark border-gray rounded-4 m-2 h-20 p-4">
            <span>Cancelations this week</span>
          </div>
          <div class="bg-tv-light-dark border-gray rounded-4 m-2 h-20 p-4">
            <span>Kit sale this week</span>
          </div>
          <div class="bg-tv-light-dark border-gray rounded-4 m-2 h-40 p-4">
            <span>Monthly SN difference</span>
          </div>
        </div>
      </div>
      <div class="d-flex h-33 flex-row">
        <div class="bg-tv-light-dark border-gray rounded-4 m-2 w-40 p-4">
          <span>Students number</span>
        </div>
        <div class="bg-tv-light-dark border-gray rounded-4 m-2 w-60 p-4">
          <span>Students number</span>
        </div>
      </div>
    </div>
  </div>
  <template v-if="dashboardDialog">
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
                  @click="toggleDashboardDialog"
                >
                  <Icon name="ph:x" />
                </button>
              </div>
              <div>
                <span class="h4">
                  <strong> Add Dashboard</strong>
                </span>
              </div>
              <div></div>
            </div>
          </div>
          <div class="modal-body my-4 py-4">
            <div class="form-group w-100 mb-3">
              <label for="dashboardName" class="form-labelform-label-light">
                Dashboard Name</label
              >
              <input
                id="dashboardName"
                type="text"
                class="form-control form-control-lg"
                placeholder="Name your dashboard"
                v-model="newDashboards"
              />
            </div>
          </div>
          <div class="modal-footer border-0">
            <div class="d-flex justify-content-end flex-row">
              <div class="mx-2">
                <button
                  type="button"
                  class="btn btn-outline-secondary"
                  @click="toggleDashboardDialog"
                >
                  Cancel
                </button>
              </div>
              <div class="mx-2">
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="addDashboard"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <template v-if="sendToTVDialog">
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
                  @click="toggleSendToTVDialog"
                >
                  <Icon name="ph:x" />
                </button>
              </div>
              <div>
                <span class="h4">
                  <strong> Send to TV</strong>
                </span>
              </div>
              <div></div>
            </div>
          </div>
          <div class="modal-body py-4">
            <div class="d-flex flex-column">
              <div class="d-flex flex-column">
                <span
                  >Put your dashboard in front of your team and make your
                  metrics unmissable.</span
                >
                <a class="text-light" style="text-decoration: underline">
                  <strong>Learn more</strong>
                </a>
              </div>
              <div class="d-flex flex-column my-4">
                <div class="my-4">
                  <span class="h2"><strong>Connect a new TV</strong></span>
                </div>
                <div class="d-flex flex-column my-3">
                  <span><strong>Step 1</strong></span>
                  <span>Open the web browser on your TV</span>
                </div>
                <div class="d-flex flex-column my-3">
                  <span><strong>Step 2</strong></span>
                  <span
                    >Go to the url <strong>http://gbrd.tv</strong> in your TV
                    web browser</span
                  >
                </div>
                <div class="d-flex my-3 flex-row">
                  <div class="d-flex flex-column me-4">
                    <span><strong>Step 3</strong></span>
                    <span>Enter the passcode displayed:</span>
                  </div>
                  <div class="form-group w-50">
                    <input
                      type="text"
                      class="form-control form-control-lg"
                      placeholder="e.g. Z83T54"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer border-0">
            <div class="d-flex justify-content-between w-100 flex-row">
              <div class="text-center">
                <button type="button" class="btn btn-secondary text-center">
                  <Icon
                    name="ph:gear"
                    class="me-2"
                    style="width: 20px; height: 20px"
                  />
                  <span>Manage TVs</span>
                </button>
              </div>

              <div class="d-flex justify-content-end flex-row">
                <div class="mx-2">
                  <button
                    type="button"
                    class="btn btn-outline-secondary"
                    @click="toggleSendToTVDialog"
                  >
                    Cancel
                  </button>
                </div>
                <div class="mx-2">
                  <button type="button" class="btn btn-primary">Connect</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
</template>
<style scoped>
.bg-tv-light-dark {
  background-color: #282829;
  color: #ffffff;
}
.bg-tv-dark {
  background-color: #000000;
  color: #ffffff;
}
.text-primary {
  color: #6be795 !important;
}
.h-100 {
  height: 100vh !important;
}
.btn.btn-primary {
  background-color: #6be795;
  border: 1px solid #6be795;
  color: #282829;
}
.btn.btn-secondary {
  background-color: #282829;
  border: 1px solid #282829;
  color: #ffffff;
}

.btn.btn-outline-secondary {
  background-color: #282829;
  border: 1px solid #6a6b6c;
  color: #ffffff;
}
.form-control.form-control-lg {
  background-color: #282829;
  color: #ffffff;
}
.form-control.form-control-lg::placeholder {
  color: #6a6b6c;
}
.border-gray {
  border: 1px solid #6a6b6c;
}

.border-top-gray {
  border-top: 1px solid #6a6b6c;
}
.border-bottom-gray {
  border-bottom: 1px solid #6a6b6c;
}
.border-left-gray {
  border-left: 1px solid #6a6b6c;
}
.border-right-gray {
  border-right: 1px solid #6a6b6c;
}
.w-20 {
  width: 20vw !important;
}
.w-40 {
  width: 40vw !important;
}
.w-60 {
  width: 60vw !important;
}
.h-20 {
  height: 20vh !important;
}
.h-33 {
  height: 33vh !important;
}
.h-40 {
  height: 40vh !important;
}
.h-50 {
  height: 50vh !important;
}
.h-66 {
  height: 66vh !important;
}
.h-100 {
  height: calc(100vh - 63px) !important;
}
</style>
