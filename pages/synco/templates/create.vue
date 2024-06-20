<script setup lang="ts">
import { ref } from 'vue'
import type { ITemplateItem } from '~/types'

let tab = ref<number>(1)
let templateData = ref<ITemplateItem>({
  Title: '',
  Category: '',
  Mode: '',
  Tags: [],
})

let modeOfCommunication = ref<string[]>(['Email', 'Text'])
</script>

<template>
  <NuxtLayout name="syncolayout" page-title="Communication Templates">
    <h4 class="mb-5">Templates</h4>

    <div class="row">
      <div class="col-sm-10 mx-auto">
        <div class="card rounded-5">
          <div class="card-header border-bottom pb-4 pt-5">
            <h3 class="card-title mb-4 text-center">Create Template</h3>
            <div class="row">
              <div class="col-sm-9 mx-auto">
                <ul class="nav nav-pills d-flex row">
                  <li class="nav-item col">
                    Setup
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
                  <label
                    class="form-label form-label-light"
                    for="Mode of communication"
                    >Mode of communication</label
                  >
                  <select
                    class="form-select form-select-lg"
                    aria-label="Mode of communication"
                    v-model="templateData.Mode"
                  >
                    <option v-for="mode in modeOfCommunication" :value="mode">
                      {{ mode }}
                    </option>
                  </select>
                </div>
                <div class="form-group mb-3">
                  <label for="title" class="form-labelform-label-light"
                    >Title</label
                  >
                  <input
                    id="title"
                    type="email"
                    class="form-control form-control-lg"
                    aria-describedby="emailHelp"
                    v-model="templateData.Title"
                  />
                </div>
                <div class="form-group mb-3">
                  <label
                    class="form-label form-label-light"
                    for="email-template-category"
                    >{{ templateData.Mode }} Template Category</label
                  >
                  <select
                    class="form-select form-select-lg"
                    aria-label="email-template-category"
                    v-model="templateData.Category"
                  >
                    <option disabled selected></option>
                    <option value="cancellations">Cancellations</option>
                    <option value="sales">Sales</option>
                    <option value="credits">Credits</option>
                    <option value="price-increase">Price Increase</option>
                  </select>
                </div>
                <div class="form-group mb-3">
                  <label class="form-label form-label-light" for="tags"
                    >Tags</label
                  >
                  <select
                    class="form-select form-select-lg"
                    aria-label="tags"
                    multiple
                    v-model="templateData.Tags"
                  >
                    <option disabled selected></option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
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
            <template v-if="templateData.Mode == 'Email'">
              <div class="row">
                <div class="col">
                  <SyncoSurveysTemplateDataCard :no-border="true">
                  </SyncoSurveysTemplateDataCard>
                </div>
                <div class="col-3 border-start">
                  <div class="d-flex flex-column h-100 p-3">
                    <span class="h4 mb-4">Blocks</span>
                    <button
                      class="btn btn-lg btn-light d-flex align-items-center justify-content-between mb-4"
                    >
                      Text field
                      <Icon name="ph:text-t" />
                    </button>
                    <button
                      class="btn btn-lg btn-light d-flex align-items-center justify-content-between mb-4"
                    >
                      Image
                      <Icon name="ph:text-t" />
                    </button>
                    <button
                      class="btn btn-lg btn-light d-flex align-items-center justify-content-between mb-4"
                    >
                      Image group
                      <Icon name="ph:text-t" />
                    </button>
                    <button
                      class="btn btn-lg btn-light d-flex align-items-center justify-content-between mb-4"
                    >
                      Button
                      <Icon name="ph:text-t" />
                    </button>
                    <button
                      class="btn btn-lg btn-light d-flex align-items-center justify-content-between mb-4"
                    >
                      Footer
                      <Icon name="ph:text-t" />
                    </button>
                    <button
                      class="btn btn-lg btn-light d-flex align-items-center justify-content-between mb-4"
                    >
                      Logo
                      <Icon name="ph:text-t" />
                    </button>
                    <button
                      class="btn btn-lg btn-light d-flex align-items-center justify-content-between mb-4"
                    >
                      Banner
                      <Icon name="ph:text-t" />
                    </button>

                    <button
                      class="btn btn-primary text-light w-100 btn-lg my-4 mt-auto"
                      @click="tab = 3"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </template>
            <template v-else-if="templateData.Mode == 'Text'">
              <div class="row">
                <div class="col-8 mx-auto">
                  <div class="p-4">
                    <div class="form-group mb-3">
                      <label for="sender" class="form-label form-label-light"
                        >Sender</label
                      >
                      <input
                        id="sender"
                        type="text"
                        class="form-control form-control-lg"
                      />
                    </div>
                    <div class="form-group mb-3">
                      <label for="text" class="form-label form-label-light"
                        >Text</label
                      >
                      <textarea
                        id="text"
                        class="form-control form-control-lg"
                        rows="8"
                      ></textarea>
                    </div>
                    <div
                      class="d-flex justify-content-between text-muted flex-row"
                    >
                      <span>1 Credit</span>
                      <span>0/160 Characters remaining</span>
                    </div>

                    <button
                      class="btn btn-primary text-light w-100 btn-lg my-4"
                      @click="tab = 3"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </template>
          </div>

          <!-- Preview Tab -->
          <div v-if="tab === 3" class="card-body px-5 pb-5 pt-5">
            <template v-if="templateData.Mode == 'Email'">
              <SyncoSurveysTemplateDataCard :no-border="true">
              </SyncoSurveysTemplateDataCard>
              <div class="d-flex justify-content-end">
                <NuxtLink
                  href="/synco/templates"
                  class="btn btn-outline-dark btn-lg me-3 px-5"
                  >Cancel</NuxtLink
                >
                <button class="btn btn-primary btn-lg text-light px-5">
                  Send Email
                </button>
              </div>
            </template>
            <template v-if="templateData.Mode == 'Text'">
              <div class="row">
                <div class="col-6 mx-auto" style="max-width: 375px">
                  <img src="@/src/assets/img-template-1.png" class="w-100" />
                  <div class="d-flex flex-column">
                    <div class="card rounded-4 bg-gray m-4 p-2">
                      <span class="mx-2"
                        >Lorem ipsum dolor sit amet consectetur. Aliquam nec
                        iaculis massa etiam quam sit velit.
                        <a href="#"
                          >Erat a convallis malesuada ante. Ultrices bibendum ut
                          in venenatis.</a
                        ></span
                      >
                      <img
                        src="@/src/assets/img-tail.png"
                        class="message-tail"
                      />
                    </div>
                  </div>
                  <img src="@/src/assets/img-template-2.png" class="w-100" />
                  <img
                    src="@/src/assets/img-template-3.png"
                    class="w-100 mb-4"
                  />
                  <div class="d-flex justify-content-end mt-4">
                    <button class="btn btn-primary text-light w-100">
                      Save Template
                    </button>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
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
