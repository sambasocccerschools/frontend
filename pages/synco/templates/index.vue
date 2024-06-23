<script setup lang="ts">
import { ref } from 'vue'

let view = ref<string>('email')

let selectedCategory = ref<string>('cancellation')
let selectedTemplate = ref<any>(null)

let emailTemplateList = [
  {
    title: 'Class Cancellations',
    mode: 'email',
    category: 'cancellation',
    items: [
      {
        title: 'Cancelled Rain',
        mode: 'email',
        category: 'cancellation',
      },
      {
        title: 'Cancelled Rain',
        mode: 'email',
        category: 'cancellation',
      },
      {
        title: 'Cancelled Rain',
        mode: 'email',
        category: 'cancellation',
      },
    ],
  },
  {
    title: 'Class Sales',
    mode: 'email',
    category: 'sales',
    items: [
      {
        title: 'Sales',
        mode: 'email',
        category: 'sales',
      },
    ],
  },
  {
    title: 'Class Credits',
    mode: 'email',
    category: 'credits',
    items: [
      {
        title: 'Credits',
        mode: 'email',
        category: 'credits',
      },
    ],
  },
  {
    title: 'Class Price Increase',
    mode: 'email',
    category: 'price',
    items: [
      {
        title: 'Price Increase',
        mode: 'email',
        category: 'price',
      },
    ],
  },
]
let textTemplateList = [
  {
    title: 'Class Cancellations',
    mode: 'text',
    category: 'cancellation',
    items: [
      {
        title: 'Cancelled Rain',
        mode: 'text',
        category: 'cancellation',
      },
    ],
  },
  {
    title: 'Class Sales',
    mode: 'text',
    category: 'sales',
    items: [
      {
        title: 'Sales',
        mode: 'text',
        category: 'sales',
      },
    ],
  },
  {
    title: 'Class Credits',
    mode: 'text',
    category: 'credits',
    items: [
      {
        title: 'Credits',
        mode: 'text',
        category: 'credits',
      },
    ],
  },
  {
    title: 'Class Price Increase',
    mode: 'text',
    category: 'price',
    items: [
      {
        title: 'Price Increase',
        mode: 'text',
        category: 'price',
      },
    ],
  },
]

const changeView = (type: string) => {
  view.value = type
  selectedTemplate.value = null
}
</script>
<template>
  <NuxtLayout name="syncolayout" page-title="List of Templates">
    <div class="w-100 d-flex justify-content-between my-4 flex-row">
      <h4 class="h4">Templates</h4>
      <NuxtLink
        to="/synco/templates/create"
        class="btn btn-primary text-light ms-2 shadow-sm"
        >+ Create Template</NuxtLink
      >
    </div>

    <div class="row">
      <div class="col-4">
        <div class="card rounded-4 d-flex flex-column">
          <div class="input-group mb-3 px-3 pt-3">
            <span id="search-template" class="input-group-text">
              <Icon name="ic:baseline-search" />
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="Search template"
              aria-label="Search template"
              aria-describedby="search-template"
            />
          </div>
          <div class="d-flex justify-content-between align-items-center px-3">
            <ul class="nav nav-pills rounded-4 w-100 mb-4 border bg-white p-2">
              <li class="nav-item w-50">
                <button
                  class="nav-link rounded-3 w-100"
                  :class="view === 'email' ? 'active' : ' text-dark'"
                  href="#"
                  @click="changeView('email')"
                >
                  Email
                </button>
              </li>
              <li class="nav-item w-50">
                <button
                  class="nav-link rounded-3 w-100"
                  :class="view === 'text' ? 'active' : ' text-dark'"
                  @click="changeView('text')"
                >
                  Text
                </button>
              </li>
            </ul>
          </div>
          <div class="accordion" id="templates">
            <div
              class="list-group rounded-0"
              v-for="item in view == 'email'
                ? emailTemplateList
                : textTemplateList"
            >
              <div
                class="list-group-item"
                :class="
                  selectedCategory == item.category ? 'accordion-active' : ''
                "
                @click="selectedCategory = item.category"
              >
                <div class="row">
                  <div class="col-2">
                    <h2>
                      <Icon
                        :name="
                          item.mode == 'email'
                            ? 'ph:envelope'
                            : item.mode == 'text'
                              ? 'ph:chat-text'
                              : 'ph:question-mark'
                        "
                      />
                    </h2>
                  </div>
                  <div class="col-8 d-flex flex-column">
                    <span
                      ><strong>{{ item.title }}</strong></span
                    >
                    <span class="text-muted">{{ item.mode }}</span>
                  </div>
                  <div class="col-2">
                    <h2>
                      <Icon
                        :name="
                          selectedCategory == item.category
                            ? 'ph:caret-up'
                            : 'ph:caret-down'
                        "
                      />
                    </h2>
                  </div>
                </div>
              </div>
              <div
                class="collapse"
                :class="selectedCategory == item.category ? 'show' : ''"
                data-parent="templates"
              >
                <div class="list-group-item" v-for="template in item.items">
                  <div class="row" @click="selectedTemplate = template">
                    <div class="col-2"></div>
                    <div class="col-2">
                      <h2>
                        <Icon
                          :name="
                            template.mode == 'email'
                              ? 'ph:envelope'
                              : template.mode == 'text'
                                ? 'ph:chat-text'
                                : 'ph:question-mark'
                          "
                        />
                      </h2>
                    </div>
                    <div class="col-8 d-flex flex-column">
                      <span
                        ><strong>{{ template.title }}</strong></span
                      >
                      <span class="text-muted">{{ template.mode }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-8">
        <div
          class="card rounded-4 d-flex flex-column"
          v-if="!!selectedTemplate"
        >
          <div
            class="border-bottom d-flex justify-content-between m-3 flex-row pb-3"
          >
            <span class="h2 m-0">{{ selectedTemplate.title }}</span>
            <div class="d-flex flex-row">
              <button
                type="button"
                class="btn btn-outline-secondary mx-2 border-0"
              >
                <Icon name="ph:pencil-simple-line" class="h2" />
              </button>
              <button type="button" class="btn btn-outline-secondary border-0">
                <Icon name="ph:trash" class="h2" />
              </button>
            </div>
          </div>
          <template v-if="selectedTemplate.mode == 'email'">
            <SyncoSurveysTemplateDataCard :no-border="true">
            </SyncoSurveysTemplateDataCard>
          </template>
          <template v-if="selectedTemplate.mode == 'text'">
            <div>
              <SyncoSurveysTemplateTextCard :no-border="true">
              </SyncoSurveysTemplateTextCard>
            </div>
          </template>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped>
.accordion-active {
  background-color: #f7fbff;
  border-left: 2px solid #237fea;
}
</style>
