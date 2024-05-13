<template>
  <div class="card">
    <div class="card-header">
      <slot name="header"></slot>
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col-12 my-1">
          <label for="term-name">Term name</label>
          <input
            id="term-name"
            type="text"
            class="form-control mt-2"
            placeholder="Autumn 23 Saturdays"
            name="term-name"
            v-model="term.Header.Name"
          />
        </div>
        <div class="col-12 my-1">
          <label for="term">Term</label>
          <input
            id="term"
            type="text"
            class="form-control mt-2"
            placeholder="Autumn"
            name="term"
            v-model="term.Header.Seasson"
          />
        </div>
        <div class="col-6 my-1">
          <label for="start-date">Start date</label>
          <input
            id="start-date"
            type="text"
            class="form-control mt-2"
            name="start-date"
            v-model="term.Header.StartDate"
          />
        </div>
        <div class="col-6 my-1">
          <label for="end-date">End date</label>
          <input
            id="end-date"
            type="text"
            class="form-control mt-2"
            name="end-date"
            v-model="term.Header.EndDate"
          />
        </div>
        <div class="col-6 my-1">
          <label for="half-term-exclusion-date">
            Half-Term Exclusion Date(s)
          </label>
          <input
            id="half-term-exclusion-date"
            type="text"
            class="form-control mt-2"
            name="half-term-exclusion-date"
            v-model="term.Header.ExclusionDates"
          />
        </div>
        <div class="col-6 my-1"></div>
      </div>
      <div class="row mt-2">
        <div class="col-12 my-3">
          <span class="h5"><strong>Map Session Plans</strong></span>
        </div>
        <div class="col-12">
          <div class="card bg-gray">
            <div class="card-header bg-gray border-0">
              <span>
                <strong>
                  {{ term.Header.Name ? term.Header.Name : '{Term name}' }} |
                  {{ term.Header.Seasson ? term.Header.Seasson : '{Seasson}' }}
                  Term |
                  {{
                    term.Items.length > 1
                      ? `${term.Items.length + 1} Sessions`
                      : `${term.Items.length + 1} Session`
                  }}
                </strong>
              </span>
            </div>
            <div
              class="card-body bg-gray border-0"
              style="overflow: scroll; max-height: 35vh"
            >
              <template v-for="item in term.Items">
                <SyncoConfigTermsMapSessionCard
                  :item="item"
                  @toggle-assign-session-card="toggleAssignSessionCard"
                ></SyncoConfigTermsMapSessionCard>
              </template>

              <SyncoConfigTermsMapSessionCard
                :item="termItem"
                @toggle-assign-session-card="toggleAssignSessionCard"
              ></SyncoConfigTermsMapSessionCard>
            </div>
            <div class="card-footer bg-gray border-0">
              <a type="button" class="btn btn-sm btn-outline-primary border-0">
                Add new session
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import type { ITermCard, ITermItem } from '~/types/index'

const props = defineProps<{
  term: ITermCard
}>()

let term = ref<ITermCard>(props.term).value

let termItem = ref<ITermItem>({
  SessionNumber: 2,
  Beginner: '',
  Intermediate: '',
  Advanced: '',
  Pro: '',
}).value

const emit = defineEmits(['toggleAssignSessionCard'])

const toggleAssignSessionCard = (selected: string) => {
  emit('toggleAssignSessionCard', selected)
}
</script>

<style scoped>
.bg-gray {
  background-color: #f6f6f9;
}
.text-sm {
  font-size: 0.6rem !important;
}
</style>
