<script setup lang="ts">
import { ref } from 'vue'
import type { ICandidateEventItem } from '~/types'

const props = defineProps<{
  eventList: ICandidateEventItem[]
}>()
let eventList = ref<ICandidateEventItem[]>(props.eventList)
</script>

<template>
  <div class="row">
    <div class="col-8 mx-auto">
      <div class="card rounded-4">
        <div class="card-body">
          <div class="row" v-for="(event, index) in eventList">
            <div class="col-1 p-3 pb-5">
              <img
                src="@/src/assets/img-avatar-small.png"
                alt="Avatar"
                class="me-3"
              />
            </div>
            <div class="col-11 p-3">
              <div class="d-flex flex-column">
                <div class="d-flex justify-content-between flex-row">
                  <span class="h4"
                    ><strong>{{ event.Title }}</strong></span
                  >
                  <span class="text-muted">{{ event.Date }}</span>
                </div>
                <div class="d-flex justify-content-between flex-row">
                  <span class="text-muted">{{ event.Description }}</span>
                  <div>
                    <template
                      v-if="
                        event.EventType == 'general' ||
                        event.EventType == 'phone-call'
                      "
                    >
                      <span class="badge bg-warning mx-2">General</span>
                    </template>
                    <!-- <template v-else-if="event.EventType == 'phone-call'">
                      <span class="badge bg-primary mx-2">Hear Call</span>
                      <span class="badge bg-primary mx-2">Download Call</span>
                      <span class="badge bg-danger mx-2">Call</span>
                    </template> -->
                  </div>
                </div>
              </div>
              <hr class="w-100" v-if="index < eventList.length - 1" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="col-4">
      <div class="card p-3">
        <div class="card-header d-flex justify-content-between">
          <h5 class="h4"><strong>Filter Event</strong></h5>
          <button class="btn btn-primary btn-sm text-light shadow-sm">
            <Icon name="octicon:settings" class="me-2" />Apply Filter
          </button>
        </div>
        <div class="card-body">
          <div class="bg-light rounded-4 mb-5 px-3 py-2">
            <label for="" class="form-label">Choose type</label>
            <div class="container">
              <div class="row row-cols-3">
                <div class="form-check col">
                  <input
                    id="high"
                    class="form-check-input"
                    type="radio"
                    name="filter-type"
                  />
                  <label class="form-check-label" for="high"> High </label>
                </div>
                <div class="form-check col">
                  <input
                    id="medium"
                    class="form-check-input"
                    type="radio"
                    name="filter-type"
                  />
                  <label class="form-check-label" for="medium"> Medium </label>
                </div>
                <div class="form-check col">
                  <input
                    id="low"
                    class="form-check-input"
                    type="radio"
                    name="filter-type"
                  />
                  <label class="form-check-label" for="low"> Low </label>
                </div>
              </div>
            </div>
          </div>

          <SyncoFilterByCalendar />
        </div>
      </div>
    </div> -->
  </div>
</template>
