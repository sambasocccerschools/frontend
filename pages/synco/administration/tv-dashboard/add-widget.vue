<script setup lang="ts">
import { ref } from 'vue'
import type { ILoop } from '~/types/index'

let dashboards = ref<string[]>(['Sales', 'Trials'])
let newDashboards = ref<string>('')
let selectedDashboard = ref<number>(0)
let dashboardDialog = ref<boolean>(false)
let sendToTVDialog = ref<boolean>(false)
let widgetDialog = ref<boolean>(false)
let dashboardLink = ref<string>('https://share.sunco.com/dashboard')
let selected = ref<string>('')
let selectedWidget = ref<string>('')
let selectedView = ref<string>('Title view')
let selectedMetrics = ref<string[]>([])
let views = ref<string[]>(['Title view', 'Graph view'])
let keyMetrics = ref<string[]>(['All Members', 'New Members', 'Title (Name)'])
let reports = ref<string[]>([
  'Members',
  'New Business',
  'Cancellations',
  'Capacity',
  'Trials and Conversions',
  'Club',
  'Weekly Classes',
  'One to One',
  'Birthday Party',
  'Holiday Camp',
  'Merchandise',
  'Waiting List',
])
let marketing = ref<string[]>([
  'Members',
  'New Business',
  'Cancellations',
  'Capacity',
  'Trials and Conversions',
  'Club',
  'Weekly Classes',
  'One to One',
  'Birthday Party',
  'Holiday Camp',
  'Merchandise',
  'Waiting List',
])

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
const openWidgetDialog = (selection: string) => {
  selectedWidget.value = selection
  toggleWidgetDialog()
}
const toggleWidgetDialog = () => {
  widgetDialog.value = !widgetDialog.value
}
const toggleMetric = (metric: string) => {
  if (selectedMetrics.value.includes(metric)) {
    selectedMetrics.value = selectedMetrics.value.filter((x) => x != metric)
  } else {
    selectedMetrics.value.push(metric)
  }
}
const toggleSelectedView = (view: string) => {
  selectedView.value = view
}
</script>

<template>
  <div class="d-flex flex-column bg-tv-dark">
    <div
      class="d-flex justify-content-between bg-tv-light-dark border-bottom-gray align-items-center flex-row"
      style="height: 63px"
    >
      <div class="px-3">
        <NuxtLink to="/synco/administration/tv-dashboard">
          <img
            src="@/src/assets/sss-logo-synco-white.png"
            alt="Synco logo"
            style="width: 130px"
          />
        </NuxtLink>
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
        <button class="btn btn-secondary">Loops</button>
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
          <button class="btn btn-primary mx-2" disabled>
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
    <div class="d-flex flex-column h-100 p-4">
      <div
        class="d-flex justify-content-between align-items-center my-4 flex-row"
      >
        <NuxtLink class="h3 m-0" to="/synco/administration/tv-dashboard">
          <Icon name="material-symbols:arrow-back" class="me-2" />Connect your
          data
        </NuxtLink>

        <div style="width: 300px">
          <div class="form-group w-100">
            <input
              type="text"
              class="form-control form-control-lg"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
      <div
        class="d-flex justify-content-between align-items-center my-4 flex-row"
        :class="selected == 'reports' ? '' : 'hover-hand'"
        @click="selected = 'reports'"
      >
        <span class="h4"><strong>Your Reports</strong></span>
        <Icon
          :name="selected == 'reports' ? 'ph:caret-up' : 'ph:caret-down'"
          :class="selected == 'reports' ? 'text-primary' : 'text-light'"
          style="width: 25px; height: 25px; margin-right: 100px"
        />
      </div>
      <div
        class="d-flex justify-content-between align-items-center border-bottom-gray flex-row"
      >
        <div class="row w-100 pb-4" v-if="selected == 'reports'">
          <div class="col-2" v-for="item in reports">
            <div
              class="bg-tv-light-dark rounded-3 border-gray hover-hand my-2 p-4 text-center"
              @click="openWidgetDialog(item)"
            >
              {{ item }}
            </div>
          </div>
        </div>
      </div>
      <div
        class="d-flex justify-content-between align-items-center my-4 flex-row"
        :class="selected == 'marketing' ? '' : 'hover-hand'"
        @click="selected = 'marketing'"
      >
        <span class="h4"><strong>Marketing</strong></span>
        <Icon
          :name="selected == 'marketing' ? 'ph:caret-up' : 'ph:caret-down'"
          :class="selected == 'marketing' ? 'text-primary' : 'text-light'"
          style="width: 25px; height: 25px; margin-right: 100px"
        />
      </div>
      <div
        class="d-flex justify-content-between align-items-center border-bottom-gray flex-row"
      >
        <div class="row w-100 pb-4" v-if="selected == 'marketing'">
          <div class="col-2" v-for="item in marketing">
            <div
              class="bg-tv-light-dark rounded-3 border-gray hover-hand my-2 p-4 text-center"
              @click="openWidgetDialog(item)"
            >
              {{ item }}
            </div>
          </div>
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
  <template v-if="widgetDialog">
    <div class="modal-backdrop fade show"></div>
    <div
      class="modal fade show centered d-block"
      aria-modal="true"
      role="dialog"
      tabindex="-1"
    >
      <div class="modal-dialog modal-dialog-right">
        <div class="modal-content bg-tv-light-dark border-gray">
          <div class="modal-header border-bottom-gray">
            <div
              class="d-flex justify-content-between w-100 align-items-center flex-row"
            >
              <div>
                <button
                  class="btn btn-outline-secondary border-0"
                  @click="toggleWidgetDialog"
                >
                  <Icon name="ph:x" style="height: 20px; width: 20px" />
                </button>
              </div>
              <div>
                <span class="h4">
                  <strong>{{ selectedWidget }}</strong>
                </span>
              </div>

              <div>
                <div class="dropdown">
                  <button
                    class="btn btn-outline-secondary border-0"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <Icon name="ph:faders" style="height: 20px; width: 20px" />
                  </button>
                  <div
                    class="dropdown-menu bg-tv-light-dark border-gray rounded-4 px-4 py-2"
                    style="width: 200px"
                  >
                    <div class="my-4">
                      <span class="h5">Choose one</span>
                    </div>
                    <template v-for="view in views">
                      <div
                        class="d-flex h5 align-items-center my-3 flex-row"
                        @click="toggleSelectedView(view)"
                      >
                        <Icon
                          name="ph:check-circle"
                          class="me-3"
                          :class="view == selectedView ? 'text-primary' : ''"
                        />
                        <span>{{ view }}</span>
                      </div>
                    </template>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-body my-4 py-4">
            <span class="my-2">Key Metrics</span>
            <template v-if="selectedView == 'Title view'">
              <template v-for="metric in keyMetrics">
                <div
                  class="w-100 rounded-3 my-3 p-2"
                  :class="
                    selectedMetrics.includes(metric)
                      ? 'border-primary'
                      : 'border'
                  "
                  style="height: 50px"
                  @click="toggleMetric(metric)"
                >
                  <div
                    class="d-flex justify-content-between align-items-center hover-hand flex-row"
                    style="height: 100%"
                  >
                    <span
                      :class="
                        selectedMetrics.includes(metric)
                          ? 'text-primary'
                          : 'text-light'
                      "
                      >{{ metric }}</span
                    >
                    <Icon
                      style="height: 20px; width: 20px"
                      :name="
                        selectedMetrics.includes(metric)
                          ? 'ph:check-square'
                          : 'ph:square'
                      "
                      :class="
                        selectedMetrics.includes(metric)
                          ? 'text-primary'
                          : 'text-light'
                      "
                    />
                  </div>
                </div>
              </template>
            </template>
            <template v-else-if="selectedView == 'Graph view'">
              <template v-for="metric in keyMetrics">
                <div
                  class="rounded-4 hover-hand my-4 p-3"
                  style="width: 70%"
                  :class="
                    selectedMetrics.includes(metric)
                      ? 'border-primary'
                      : 'border'
                  "
                  @click="toggleMetric(metric)"
                >
                  <span>
                    <Icon
                      class="bg-tv-light-dark"
                      style="
                        height: 30px;
                        width: 30px;
                        margin-top: -50px;
                        margin-left: -20px;
                      "
                      :name="
                        selectedMetrics.includes(metric)
                          ? 'ph:check-circle'
                          : 'ph:circle'
                      "
                      :class="
                        selectedMetrics.includes(metric)
                          ? 'text-primary'
                          : 'text-light'
                      "
                    />
                  </span>
                  <span
                    class="h5"
                    :class="
                      selectedMetrics.includes(metric)
                        ? 'text-primary'
                        : 'text-light'
                    "
                    >{{ metric }}</span
                  >
                  <div style="height: 100px"></div>
                </div>
              </template>
            </template>
          </div>
          <div class="modal-footer border-0">
            <div class="d-flex justify-content-end flex-row">
              <div class="mx-2"></div>
              <div class="mx-2">
                <button
                  type="button"
                  class="btn btn-primary"
                  v-if="selectedView == 'Title view'"
                >
                  Add to dashboard
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  v-if="selectedView == 'Graph view'"
                >
                  Select widget
                </button>
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
.btn.btn-outline-primary {
  background-color: #282829;
  border: 1px solid #6be795;
  color: #6be795;
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

.border-primary {
  border: 1px solid #6be795 !important;
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
.hover-hand:hover {
  cursor: pointer;
}
</style>
