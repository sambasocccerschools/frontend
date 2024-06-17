<script setup lang="ts">
import { ref } from 'vue'
import type { IKeyValuePair, ISurveyQuestionList } from '~/types'

let selected = ref<number>(1)
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

let questionTypes = ref<IKeyValuePair[]>([
  {
    Key: 'multiple-choice',
    Value: 'Multiple choice',
  },
  {
    Key: 'single-choice',
    Value: 'Single choice',
  },
  {
    Key: 'open',
    Value: 'Open text',
  },
])

let questions = ref<ISurveyQuestionList[]>([])

let previewSelection = ref<string>('template')
</script>
<template>
  <NuxtLayout name="syncolayout">
    <div class="row">
      <div class="col-sm-8 mx-auto">
        <div class="card">
          <div class="card-header pt-4">
            <h4 class="card-title h2 text-center">Create Survey</h4>
          </div>
          <div class="card-body">
            <ul
              class="nav row px-4 pb-4"
              style="border-bottom: 1px solid lightgray"
            >
              <li class="nav-item col-3">
                <button
                  type="button"
                  class="nav-link text-black"
                  :class="selected == 1 ? 'active' : ''"
                  id="Setup-tab"
                  data-toggle="tab"
                  data-target="#Setup"
                  role="tab"
                  aria-controls="Setup"
                  :aria-selected="selected == 1"
                  @click="selected = 1"
                >
                  <Icon
                    name="ph:check"
                    class="me-1"
                    :class="selected > 1 ? 'text-primary' : 'text-light'"
                  />
                  Survey Setup
                </button>
                <div
                  class="w-100"
                  :class="selected >= 1 ? 'selected' : 'not-selected'"
                ></div>
              </li>
              <li class="nav-item col-3">
                <button
                  type="button"
                  class="nav-link text-black"
                  :class="selected == 2 ? 'active' : ''"
                  id="Templates-tab"
                  data-toggle="tab"
                  data-target="#Templates"
                  role="tab"
                  aria-controls="Templates"
                  :aria-selected="selected == 2"
                  @click="selected = 2"
                >
                  <Icon
                    name="ph:check"
                    class="me-1"
                    :class="selected > 2 ? 'text-primary' : 'text-light'"
                  />
                  Templates
                </button>
                <div
                  class="w-100"
                  :class="selected >= 2 ? 'selected' : 'not-selected'"
                ></div>
              </li>
              <li class="nav-item col-3">
                <button
                  type="button"
                  class="nav-link text-black"
                  :class="selected == 3 ? 'active' : ''"
                  id="Questions-tab"
                  data-toggle="tab"
                  data-target="#Questions"
                  role="tab"
                  aria-controls="Questions"
                  :aria-selected="selected == 3"
                  @click="selected = 3"
                >
                  <Icon
                    name="ph:check"
                    class="me-1"
                    :class="selected > 3 ? 'text-primary' : 'text-light'"
                  />
                  Questions
                </button>
                <div
                  class="w-100"
                  :class="selected >= 3 ? 'selected' : 'not-selected'"
                ></div>
              </li>
              <li class="nav-item col-3">
                <button
                  type="button"
                  class="nav-link text-black"
                  :class="selected == 4 ? 'active' : ''"
                  id="Preview-tab"
                  data-toggle="tab"
                  data-target="#Preview"
                  role="tab"
                  aria-controls="Preview"
                  :aria-selected="selected == 4"
                  @click="selected = 4"
                >
                  <Icon
                    name="ph:check"
                    class="me-1"
                    :class="selected > 4 ? 'text-primary' : 'text-light'"
                  />
                  Preview
                </button>
                <div
                  class="w-100"
                  :class="selected == 4 ? 'selected' : 'not-selected'"
                ></div>
              </li>
            </ul>
            <div class="tab-content" id="SurveyTabContent">
              <!-- Setup -->
              <div
                class="tab-pane pt-4"
                :class="selected == 1 ? 'fade show active' : ''"
                id="Setup"
                role="tabpanel"
                aria-labelledby="Setup-tab"
                v-if="selected == 1"
              >
                <div class="row">
                  <div class="col-12 col-md-3"></div>
                  <div class="col-12 col-md-6">
                    <SyncoSurveysSetupCard :no-border="true">
                      <template v-slot:footer>
                        <div class="row">
                          <div class="col-12">
                            <button
                              type="button"
                              class="btn btn-info text-light w-100"
                              @click="selected = 2"
                            >
                              Next
                            </button>
                          </div>
                        </div>
                      </template>
                    </SyncoSurveysSetupCard>
                  </div>
                  <div class="col-12 col-md-3"></div>
                </div>
              </div>
              <!-- Templates -->
              <div
                class="tab-pane"
                :class="selected == 2 ? 'fade show active' : ''"
                id="Templates"
                role="tabpanel"
                aria-labelledby="Templates-tab"
                v-if="selected == 2"
              >
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
                        @click="selected = 3"
                      >
                        Save template
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Questions -->
              <div
                class="tab-pane d-flex flex-column justify-content-between pt-4"
                :class="selected == 3 ? 'fade show active' : ''"
                id="Questions"
                role="tabpanel"
                aria-labelledby="Questions-tab"
                v-if="selected == 3"
              >
                <div class="row">
                  <template v-for="(question, index) in questions">
                    <div class="row">
                      <div class="col-6">
                        <div class="form-group w-100 mb-3">
                          <label
                            :for="`question${index}`"
                            class="form-labelform-label-light"
                            >Question {{ index + 1 }}</label
                          >
                          <input
                            :id="`question${index}`"
                            type="text"
                            class="form-control form-control-lg"
                            v-model="question.Title"
                          />
                        </div>
                      </div>
                      <div class="col-6">
                        <div class="form-group w-100 mb-3">
                          <label
                            for="questionType"
                            class="form-labelform-label-light"
                            >Question Type</label
                          >
                          <select
                            id="questionType"
                            class="form-control form-control-lg"
                            v-model="question.Type"
                            @select="
                              question.Choices = [{ Key: '', Value: '' }]
                            "
                          >
                            <option value="">Select type</option>
                            <option
                              v-for="(types, indexTypes) in questionTypes"
                              :value="types.Key"
                              :key="indexTypes"
                            >
                              {{ types.Value }}
                            </option>
                          </select>
                        </div>
                      </div>
                      <div class="col-12">
                        <template
                          v-if="
                            question.Type == 'multiple-choice' ||
                            question.Type == 'single-choice'
                          "
                        >
                          <div class="d-flex flex-column">
                            <div
                              class="d-flex align-items-center mb-3 flex-row"
                              v-for="(choice, indexChoice) in question.Choices"
                            >
                              <span
                                ><Icon
                                  :name="
                                    question.Type == 'multiple-choice'
                                      ? 'ph:square'
                                      : question.Type == 'single-choice'
                                        ? 'ph:circle'
                                        : 'ph:question'
                                  "
                              /></span>
                              <div class="form-group mx-3">
                                <input
                                  :id="`question-${index}-${indexChoice}`"
                                  type="text"
                                  class="form-control form-control-lg"
                                  v-model="choice.Value"
                                />
                              </div>
                              <div>
                                <button
                                  type="button"
                                  class="btn btn-outline-secondary rounded-circle border-0"
                                  @click="
                                    question.Choices.splice(indexChoice, 1)
                                  "
                                >
                                  <Icon name="ph:minus-circle" />
                                </button>
                              </div>
                            </div>
                          </div>
                          <button
                            type="button"
                            class="btn btn-outline-secondary mb-4 border-0 text-black"
                            @click="
                              question.Choices.push({ Key: '', Value: '' })
                            "
                          >
                            <Icon name="ph:plus" /> Add New Option
                          </button>
                        </template>
                        <!-- <template v-else-if="question.Type == 'open'">
                        <div class="form-group w-100 mb-3">
                          <input
                            :id="`question-open-${index}`"
                            type="text"
                            class="form-control form-control-lg"
                            v-model="question.Choices[0].Value"
                          />
                        </div>
                      </template> -->
                      </div>
                    </div>
                  </template>
                  <div class="col-12">
                    <div>
                      <button
                        type="button"
                        class="btn btn-outline-primary"
                        @click="
                          questions.push({
                            Title: '',
                            Type: '',
                            Choices: [{ Key: '', Value: '' }],
                          })
                        "
                      >
                        <Icon name="ph:plus" /> Add new Question
                      </button>
                    </div>
                  </div>
                </div>
                <div class="mt-4 py-4">
                  <button
                    type="button"
                    class="btn btn-info text-light rounded-4"
                    @click="selected = 4"
                    style="width: 250px"
                  >
                    Continue
                  </button>
                </div>
              </div>
              <!-- Preview -->
              <div
                class="tab-pane pt-4"
                :class="selected == 4 ? 'fade show active' : ''"
                id="Preview"
                role="tabpanel"
                aria-labelledby="Preview-tab"
                v-if="selected == 4"
              >
                <div class="d-flex flex-column align-items-center">
                  <div
                    class="rounded-4 d-flex flex-row border p-1"
                    style="width: fit-content"
                  >
                    <button
                      type="button"
                      class="btn rounded-4 mx-2"
                      :class="
                        previewSelection == 'template'
                          ? 'btn-info text-light'
                          : ''
                      "
                      @click="previewSelection = 'template'"
                      style="width: 120px"
                    >
                      Template
                    </button>
                    <button
                      type="button"
                      class="btn rounded-4 mx-2"
                      :class="
                        previewSelection == 'survey'
                          ? 'btn-info text-light'
                          : ''
                      "
                      @click="previewSelection = 'survey'"
                      style="width: 120px"
                    >
                      Survey
                    </button>
                  </div>
                  <template v-if="previewSelection == 'template'">
                    <div class="d-flex flex-column w-100"></div>

                    <SyncoSurveysTemplateDataCard :no-border="true">
                    </SyncoSurveysTemplateDataCard>
                    <div class="d-flex mt-4 flex-row">
                      <div class="mx-2">
                        <button
                          type="button"
                          class="btn btn-outline-secondary"
                          style="width: 120px"
                        >
                          Cancel
                        </button>
                      </div>
                      <div class="mx-2">
                        <button
                          type="button"
                          class="btn btn-info text-light"
                          style="width: 120px"
                        >
                          Publish
                        </button>
                      </div>
                    </div>
                  </template>
                  <template v-if="previewSelection == 'survey'">
                    <div class="d-flex flex-column w-100">
                      <template v-for="(question, index) in questions">
                        <span
                          class="form-labelform-label-light text-muted mt-3"
                        >
                          Question {{ index + 1 }}
                        </span>
                        <p class="form-labelform-label-light">
                          {{ question.Title }}
                        </p>
                        <template v-for="(option, key) in question.Choices">
                          <div
                            class="form-check form-check-inline"
                            v-if="
                              question.Type == 'multiple-choice' ||
                              question.Type == 'single-choice'
                            "
                          >
                            <input
                              class="form-check-input"
                              :type="
                                question.Type == 'single-choice'
                                  ? 'radio'
                                  : 'checkbox'
                              "
                              :name="option.Key"
                              :id="`${option.Value}-${key}`"
                              :value="key"
                            />
                            <label
                              class="form-check-label"
                              :for="`question-preview-${index}-option-${key}`"
                            >
                              {{ option.Value }}
                            </label>
                          </div>
                          <div
                            class="form-group w-100 mb-3"
                            v-else-if="question.Type == 'open'"
                          >
                            <input
                              :id="`${option.Value}-${key}`"
                              type="text"
                              class="form-control form-control-lg"
                            />
                          </div>
                        </template>
                      </template>
                    </div>
                    <div class="d-flex flex-row">
                      <div class="mx-2">
                        <button
                          type="button"
                          class="btn btn-outline-secondary"
                          style="width: 120px"
                        >
                          Cancel
                        </button>
                      </div>
                      <div class="mx-2">
                        <button
                          type="button"
                          class="btn btn-info text-light"
                          style="width: 120px"
                        >
                          Finish
                        </button>
                      </div>
                    </div>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped lang="scss">
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
</style>
