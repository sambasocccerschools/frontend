<script setup lang="ts">
import { ref } from 'vue'
import { useToast } from 'vue-toast-notification'
import type {
  ISessionPlanCreateUpdateItem,
  ISessionPlanExcerciseCreateItem,
} from '~/types/synco/index'

const router = useRouter()
const { $api } = useNuxtApp()
const toast = useToast()

let isLoading = ref<boolean>(false)
let blockButtons = ref<boolean>(false)
let abilityId = ref<number | null>(null)
let newExcercise = ref<ISessionPlanExcerciseCreateItem>({
  title: '',
  subtitle: '',
  description: '',
  banner: null,
  video: null,
})
let newSessionPlan = ref<ISessionPlanCreateUpdateItem>({
  title: '',
  description: '',
  ability_group_id: 0,
  banner: null,
  video: null,
  exercises: [],
})

onMounted(async () => {
  console.log('pages/synco/config/weekly-classes/session-plans/create.vue')
  let queryAbilityId = router.currentRoute.value.query?.abilityId
  abilityId.value = queryAbilityId
  newSessionPlan.value.ability_group_id = queryAbilityId
  addNewExcercise()
})
const addNewExcercise = () => {
  newSessionPlan.value.exercises.push(
    JSON.parse(JSON.stringify(newExcercise.value)),
  )
}

const bannerInput = ref<HTMLInputElement | null>(null)
const banner = ref<File>()
const bannerPreview = ref<string | null>(null)

const handleBannerChange = () => {
  const files = bannerInput.value?.files
  const file = files?.[0]
  banner.value = file
  newSessionPlan.value.banner = file
  bannerPreview.value = file ? URL.createObjectURL(file) : null
  console.log(newSessionPlan.value)
}

const videoInput = ref<HTMLInputElement | null>(null)
const video = ref<File>()
const videoPreview = ref<string | null>(null)

const handleVideoChange = () => {
  const files = videoInput.value?.files
  const file = files?.[0]
  video.value = file
  newSessionPlan.value.video = file
  videoPreview.value = file ? URL.createObjectURL(file) : null
  console.log(newSessionPlan.value)
}

const imageInput = ref<HTMLInputElement | null>(null)
const image = ref<File>()
const imagePreview = ref<string | null>(null)

const handleImageChange = (event: Event, index: number) => {
  console.log(event)
  const files = imageInput.value?.files
  const file = files?.[0]
  image.value = file
  console.log(index, file)
  newSessionPlan.value.exercises[index].banner = file
  imagePreview.value = file ? URL.createObjectURL(file) : null
  console.log(newSessionPlan.value)
}

const video2Input = ref<HTMLInputElement | null>(null)
const video2 = ref<File>()
const video2Preview = ref<string | null>(null)

const handleVideo2Change = (event: Event, index: number) => {
  console.log(event)
  const files = video2Input.value?.files
  const file = files?.[0]
  video2.value = file
  console.log(index, file)
  newSessionPlan.value.exercises[index].video = file
  video2Preview.value = file ? URL.createObjectURL(file) : null
  console.log(newSessionPlan.value)
}
</script>

<template>
  <NuxtLayout name="syncolayout" pageTitle="Create Session">
    <div class="card rounded-4">
      <div class="row my-2">
        <div class="col-1"></div>
        <div class="col-10">
          <div class="card rounded-4">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">Config</li>
                <li class="breadcrumb-item">Weekly classes</li>
                <li class="breadcrumb-item">
                  <NuxtLink
                    to="/synco/config/weekly-classes/session-plans"
                    class="text-dark"
                  >
                    Session plans
                  </NuxtLink>
                </li>
                <li
                  class="breadcrumb-item active text-semibold"
                  aria-current="page"
                >
                  Create session
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div class="col-1"></div>
      </div>
      <div class="row">
        <div class="col-1"></div>
        <div class="col-10 pb-4" style="border-bottom: 1px solid lightgray">
          <NuxtLink
            class="h4 m-0"
            to="/synco/config/weekly-classes/session-plans"
          >
            <Icon name="material-symbols:arrow-back" class="me-2" />Create
            session
          </NuxtLink>
        </div>
        <div class="col-1"></div>
      </div>
      <div class="row my-4">
        <div class="col-2"></div>
        <div class="col-8">
          <div class="d-flex flex-column">
            <span class="h3 mt-4"><strong>Skill of the day</strong></span>
            <div class="row">
              <div class="col-12 d-flex flex-column">
                <div class="form-group w-100 mb-3">
                  <label for="title" class="form-labelform-label-light">
                    Title
                  </label>
                  <input
                    id="title"
                    type="text"
                    class="form-control form-control-lg"
                    placeholder=""
                    v-model="newSessionPlan.title"
                  />
                </div>
                <div class="form-group w-100 mb-3">
                  <label for="description" class="form-labelform-label-light">
                    Description
                  </label>
                  <input
                    id="description"
                    type="text"
                    class="form-control form-control-lg"
                    placeholder=""
                    v-model="newSessionPlan.description"
                  />
                </div>
              </div>
              <div class="col-12 d-flex flex-column mb-3">
                <label for="banner-picture" class="form-label">
                  Add player banner
                </label>
                <input
                  id="banner-picture"
                  ref="bannerInput"
                  type="file"
                  name="banner-picture"
                  accept="image/*"
                  required
                  @change="handleBannerChange"
                />
                <img
                  v-if="bannerPreview"
                  :src="bannerPreview"
                  style="max-width: 200px"
                />
                <!-- <div>
                  <button type="button" class="btn btn-outline-primary mb-2">
                    Add player banner
                  </button>
                </div>
                <div>
                  <img src="@/src/assets/bg-stadium.png" style="width: 100%" />
                </div> -->
              </div>
              <div class="col-12 d-flex flex-column mb-3">
                <label for="video-file" class="form-label"> Add video </label>
                <input
                  id="video-file"
                  ref="videoInput"
                  type="file"
                  name="video-file"
                  accept="video/*"
                  required
                  @change="handleVideoChange"
                />
                <video
                  v-if="videoPreview"
                  :src="videoPreview"
                  style="max-height: 200px"
                  class="rounded-4"
                  controls
                ></video>
              </div>
              <hr />
            </div>
            <div class="d-flex justify-content-between mt-4 flex-row">
              <span class="h3"><strong>Session Plan</strong></span>
              <span class="h5 text-primary">
                <Icon name="ph:upload-simple" class="" />
              </span>
            </div>
            <div class="my-3">
              <span class="h4">Exercise || {Skill}</span>
            </div>
            <div
              class="row"
              v-for="(excercise, index) in newSessionPlan.exercises"
            >
              <div class="col-12">
                <div class="form-group w-100 mb-3">
                  <label for="exerciseTitle" class="form-labelform-label-light">
                    Title
                  </label>
                  <input
                    id="exerciseTitle"
                    type="text"
                    class="form-control form-control-lg"
                    placeholder=""
                    v-model="excercise.title"
                  />
                </div>
                <div class="form-group w-100 mb-3">
                  <label
                    for="exerciseSubtitle"
                    class="form-labelform-label-light"
                  >
                    Subtitle
                  </label>
                  <input
                    id="exerciseSubtitle"
                    type="text"
                    class="form-control form-control-lg"
                    placeholder=""
                    v-model="excercise.subtitle"
                  />
                </div>
                <div class="form-group w-100 mb-3">
                  <label
                    for="exerciseDuration"
                    class="form-labelform-label-light"
                  >
                    Title Duration
                  </label>
                  <input
                    id="exerciseDuration"
                    type="text"
                    class="form-control form-control-lg"
                    placeholder=""
                    v-model="excercise.title_duration"
                  />
                </div>
              </div>
              <div class="col-12">
                <label :for="`image-file-${index}`" class="form-label">
                  Add one or more images
                </label>
                <input
                  :id="`image-file-${index}`"
                  ref="imageInput"
                  type="file"
                  :name="`image-file-${index}`"
                  accept="image/*"
                  required
                  @change="handleImageChange($event, index)"
                />
                <img
                  v-if="imagePreview"
                  :src="imagePreview"
                  style="max-width: 200px"
                />
              </div>
              <!-- <div class="col-12">
                <span class="my-3"> Add one or more images </span>
              </div>
              <div class="col-12">
                <div class="d-flex flex-column">
                  <div>
                    <button type="button" class="btn btn-outline-primary mb-2">
                      Add images
                    </button>
                  </div>
                  <div>
                    <img
                      src="/src/assets/field-positions.png"
                      class="rounded-4 w-100"
                    />
                  </div>
                </div>
              </div> -->
              <div class="col-12">
                <div class="form-group w-100 my-3">
                  <label for="description" class="form-labelform-label-light">
                    Description
                  </label>
                  <textarea
                    id="description"
                    class="form-control form-control-lg"
                    rows="4"
                    placeholder=""
                    v-model="excercise.description"
                  ></textarea>
                </div>
              </div>
              <div class="col-12">
                <label :for="`video2-file-${index}`" class="form-label">
                  Add one or more videos
                </label>
                <input
                  :id="`video2-file-${index}`"
                  ref="video2Input"
                  type="file"
                  name="`video2-file-${index}`"
                  accept="video/*"
                  required
                  @change="handleVideo2Change($event, index)"
                />
                <video
                  v-if="video2Preview"
                  :src="video2Preview"
                  style="max-height: 200px"
                  class="rounded-4"
                  controls
                ></video>
              </div>
              <!-- <div class="col-12">
                <span class="my-3"> Add one video </span>
              </div>
              <div class="col-12 d-flex flex-column">
                <div>
                  <button type="button" class="btn btn-outline-primary mb-2">
                    Add video
                  </button>
                </div>
                <div>
                  <video class="rounded-4" controls></video>
                </div>
              </div> -->
            </div>
          </div>
        </div>
        <div class="col-2"></div>
      </div>
      <div class="row mb-4 pb-4">
        <div class="col-2"></div>
        <div class="col-4">
          <button
            class="btn btn-outline-primary w-100"
            @click="addNewExcercise"
          >
            Add new exercise
          </button>
        </div>
        <div class="col-4">
          <button class="btn btn-primary text-light w-100">
            Create Session
          </button>
        </div>
        <div class="col-2"></div>
      </div>
    </div>
  </NuxtLayout>
</template>
