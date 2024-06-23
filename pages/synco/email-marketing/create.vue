<script setup lang="ts">
import { ref } from 'vue'
import type { ITemplateItem } from '~/types'

let tab = ref<number>(1)
let templates = ref<string[]>(['First Template', 'Second Template'])
let selectedTemplate = ref<string>('')
let blocksList = ref<string[]>([
  'Text field',
  'Image',
  'Image group',
  'Button',
  'Footer',
  'Logo',
  'Banner',
])
</script>

<template>
  <NuxtLayout name="syncolayout" page-title="Email Marketing Campaigns">
    <h4 class="mb-5">Email Marketing Campaigns</h4>

    <div class="row">
      <div class="col-sm-10 mx-auto">
        <div class="card rounded-5">
          <div class="card-header border-bottom pb-4 pt-5">
            <h3 class="card-title mb-4 text-center">Create Campaigns</h3>
            <div class="row">
              <div class="col-sm-9 mx-auto">
                <ul class="nav nav-pills d-flex row">
                  <li class="nav-item col">
                    Campaign setup
                    <button
                      class="nav-link rounded-0 w-100 mt-2"
                      :class="
                        tab === 1 || tab === 2 || tab === 3
                          ? 'active'
                          : 'text-dark border'
                      "
                      @click="tab = 1"
                    ></button>
                  </li>
                  <li class="nav-item col">
                    Template
                    <button
                      class="nav-link rounded-0 w-100 mt-2"
                      :class="
                        tab === 2 || tab === 3 ? 'active' : 'text-dark border'
                      "
                      @click="tab = 2"
                    ></button>
                  </li>
                  <li class="nav-item col">
                    Preview
                    <button
                      class="nav-link rounded-0 w-100 mt-2"
                      :class="tab === 3 ? 'active' : 'text-dark border'"
                      @click="tab = 3"
                    ></button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Setup Tab -->
          <div v-if="tab === 1" class="card-body pb-5 pt-5">
            <div class="row">
              <div class="col-sm-6 mx-auto">
                <div class="form-group mb-3">
                  <label for="title" class="form-labelform-label-light"
                    >Title</label
                  >
                  <input
                    id="title"
                    type="text"
                    class="form-control form-control-lg"
                  />
                </div>
                <div class="form-group mb-3">
                  <label
                    class="form-label form-label-light"
                    for="email-category"
                    >Campaign Category</label
                  >
                  <select
                    class="form-select form-select-lg"
                    aria-label="email-category"
                  >
                    <option disabled selected></option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div class="form-group mb-3">
                  <label class="form-label form-label-light" for="tags"
                    >Tags</label
                  >
                  <select class="form-select form-select-lg" aria-label="tags">
                    <option disabled selected></option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div class="form-group mb-3">
                  <label class="form-label form-label-light" for="Audience"
                    >Audience</label
                  >
                  <select
                    class="form-select form-select-lg"
                    aria-label="Audience"
                  >
                    <option disabled selected></option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div class="form-group mb-3">
                  <label class="form-label form-label-light" for="From"
                    >From</label
                  >
                  <input
                    id="From"
                    type="email"
                    class="form-control form-control-lg"
                  />
                </div>
                <div class="form-group mb-3">
                  <label class="form-label form-label-light" for="subject"
                    >Subject Line</label
                  >
                  <input
                    id="subject"
                    type="text"
                    class="form-control form-control-lg"
                  />
                </div>
                <button
                  class="btn btn-primary text-light w-100 btn-lg my-4"
                  @click="tab = 2"
                >
                  Next
                </button>
              </div>
            </div>
          </div>

          <!-- Template Tab -->
          <div v-if="tab === 2" class="card-body py-0">
            <div class="row pt-4" v-if="selectedTemplate == ''">
              <div class="col-auto my-2">
                <div
                  class="card plan-item rounded-4 border-dashed"
                  @click="selectedTemplate = 'New'"
                >
                  <div
                    class="card-body d-flex align-items-center justify-content-center flex-row"
                  >
                    <span class="rounded-4 p-3 text-center"
                      ><Icon name="ph:plus" /> Create New
                    </span>
                  </div>
                </div>
              </div>
              <div v-for="template in templates" class="col-auto my-2">
                <div
                  class="card plan-item rounded-4 bg-lightgray border"
                  @click="selectedTemplate = template"
                >
                  <div
                    class="card-body d-flex align-items-center flex-column justify-content-center"
                  >
                    <span>{{ template }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="row" v-else>
              <div class="col-8 p-3">
                <template v-if="selectedTemplate == 'New'">
                  <div class="d-flex flex-column">
                    <div class="w-100 my-2">
                      <span class="h4"><strong>Title</strong></span>
                    </div>
                  </div>
                </template>
                <template v-else-if="selectedTemplate != ''">
                  <SyncoSurveysTemplateDataCard :no-border="true">
                  </SyncoSurveysTemplateDataCard>
                </template>
              </div>
              <div
                class="col-4 d-flex flex-column justify-content-between p-3"
                style="border-left: 1px solid lightgray; min-height: 65vh"
              >
                <div class="d-flex flex-column">
                  <span class="mb-2"><strong>Blocks</strong></span>
                  <span
                    class="bg-lightgray d-flex justify-content-between rounded-4 my-2 flex-row px-3 py-2"
                    v-for="block in blocksList"
                  >
                    <span>{{ block }}</span>
                    <span><Icon name="ph:text-t" /></span>
                  </span>
                </div>
                <div>
                  <button
                    type="button"
                    class="btn btn-info text-light w-100"
                    @click="tab = 3"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Preview Tab -->
          <div v-if="tab === 3" class="card-body px-5 pb-5 pt-5">
            <SyncoSurveysTemplateDataCard :no-border="true">
            </SyncoSurveysTemplateDataCard>
            <div class="d-flex justify-content-center">
              <NuxtLink
                href="/synco/templates"
                class="btn btn-outline-dark btn-lg me-3 px-5"
                >Cancel</NuxtLink
              >
              <button
                class="btn btn-primary btn-lg text-light px-5"
                @click="selectedTemplate = ''"
              >
                Send Campaign
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/web/web.scss';

.selected {
  border-width: 10px;
  border-bottom: 0.7rem solid $info;
}
.not-selected {
  border-width: 10px;
  border-bottom: 0.7rem solid lightgray;
}

.text-sm {
  font-size: 0.6rem;
}
.plan-item {
  width: 168px;
  height: 200px;
}
.border-dashed {
  border: 1px dashed var(--bs-border-color) !important;
}
.bg-lightgray {
  background-color: #fafafa;
}
.form-label-light {
  font-weight: 300;
}
.bg-gray {
  background-color: #e9e9eb;
}
.message-tail {
  width: 16px;
  position: absolute;
  bottom: 0px;
  left: -5px;
  height: 21px;
}
</style>
