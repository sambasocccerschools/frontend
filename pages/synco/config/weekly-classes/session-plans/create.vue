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
  title_duration: '',
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
  abilityId.value = !!queryAbilityId ? +queryAbilityId : -1
  newSessionPlan.value.ability_group_id = abilityId.value
  addNewExercise()
})
const addNewExercise = () => {
  newSessionPlan.value.exercises.push(
    JSON.parse(JSON.stringify(newExcercise.value)),
  )
  video2Input.value.push(null)
  video2Input.value.push(null)
  // let index = newSessionPlan.value.exercises.length - 1
}

let bannerInput = ref<HTMLInputElement | null>(null)
let banner = ref<File>()
let bannerPreview = ref<string | null>(null)

const handleBannerChange = async () => {
  const files = bannerInput.value?.files!
  const file = files?.[0]
  banner.value = file
  let fileBlob = new Blob([new Uint8Array(await file.arrayBuffer())], {
    type: file.type,
  })
  newSessionPlan.value.banner = fileBlob
  bannerPreview.value = file ? URL.createObjectURL(file) : null
}

let videoInput = ref<HTMLInputElement | null>(null)
let video = ref<File>()
let videoPreview = ref<string | null>(null)

const handleVideoChange = async () => {
  const files = videoInput.value?.files!
  const file = files?.[0]
  video.value = file
  let fileBlob = new Blob([new Uint8Array(await file.arrayBuffer())], {
    type: file.type,
  })
  newSessionPlan.value.video = fileBlob
  videoPreview.value = file ? URL.createObjectURL(file) : null
}

let imageInput = ref<Array<HTMLInputElement | null>>([])
let image = ref<Array<File>>([])
let imagePreview = ref<Array<string | null>>([])

const handleImageInput = (event: Event, index: number) => {
  if (event.target instanceof HTMLInputElement) {
    const inputElement = event.target
    imageInput.value[index] = inputElement
  }
}

const handleImageChange = async (index: number) => {
  const files = imageInput.value[index]?.files!
  console.log(index, imageInput.value[index])
  const file = files?.[0]
  if (image.value[index] != null) {
    image.value[index] = file
  }
  let fileBlob = new Blob([new Uint8Array(await file.arrayBuffer())], {
    type: file.type,
  })
  newSessionPlan.value.exercises[index].banner = fileBlob
  imagePreview.value[index] = file ? URL.createObjectURL(file) : null
}

let video2Input = ref<Array<HTMLInputElement | null>>([])
let video2 = ref<Array<File>>([])
let video2Preview = ref<Array<string | null>>([])

const handleVideo2Input = (event: Event, index: number) => {
  if (event.target instanceof HTMLInputElement) {
    const inputElement = event.target
    video2Input.value[index] = inputElement
  }
}
const handleVideo2Change = async (index: number) => {
  const files = video2Input.value[index]?.files!
  console.log(index, video2Input.value[index])
  const file = files?.[0]
  if (video2.value[index] != null) {
    video2.value[index] = file
  }
  let fileBlob = new Blob([new Uint8Array(await file.arrayBuffer())], {
    type: file.type,
  })
  newSessionPlan.value.exercises[index].video = fileBlob
  video2Preview.value[index] = file ? URL.createObjectURL(file) : null
}

const updateDescription = (index: number, description: string) => {
  newSessionPlan.value.exercises[index].description = description
}

// const save = async () => {
//   console.log(newSessionPlan.value)
//   try {
//     isLoading.value = true
//     blockButtons.value = true
//     const sessionPlansResponse = await $api.sessionPlans.create(
//       newSessionPlan.value,
//     )
//     console.log(sessionPlansResponse)
//     router.push('/synco/config/weekly-classes/session-plans')
//   } catch (error: any) {
//     console.log(error)
//     toast.error(error?.data?.messages ?? 'Error')
//   } finally {
//     isLoading.value = false
//     blockButtons.value = false
//   }
// }

const onSubmit = async () => {
  try {
    isLoading.value = true
    blockButtons.value = true
    const sessionPlansResponse = await $api.sessionPlans.create(
      newSessionPlan.value,
    )
    router.push('/synco/config/weekly-classes/session-plans')
  } catch (error: any) {
    console.log(error)
    toast.error(error?.data?.messages ?? 'Error')
  } finally {
    isLoading.value = false
    blockButtons.value = false
  }
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
      <SyncoConfigSessionPlansCreateForm></SyncoConfigSessionPlansCreateForm>
      <!-- <div class="row my-4">
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
                <label for="banner" class="form-label">
                  Add player banner
                </label>
                <input
                  id="banner"
                  ref="bannerInput"
                  type="file"
                  name="banner"
                  accept="image/*"
                  @change="handleBannerChange"
                />
                <img
                  v-if="bannerPreview"
                  :src="bannerPreview"
                  style="max-width: 200px"
                />
              </div>
              <div class="col-12 d-flex flex-column mb-3">
                <label for="video" class="form-label"> Add video </label>
                <input
                  id="video-file"
                  ref="videoInput"
                  type="file"
                  name="video"
                  accept="video/*"
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
                  <label
                    :for="`exercise[${index}][title]`"
                    class="form-labelform-label-light"
                  >
                    Title
                  </label>
                  <input
                    :id="`exercise[${index}][title]`"
                    type="text"
                    class="form-control form-control-lg"
                    placeholder=""
                    v-model="excercise.title"
                  />
                </div>
                <div class="form-group w-100 mb-3">
                  <label
                    :for="`exercise[${index}][subtitle]`"
                    class="form-labelform-label-light"
                  >
                    Subtitle
                  </label>
                  <input
                    :id="`exercise[${index}][subtitle]`"
                    type="text"
                    class="form-control form-control-lg"
                    placeholder=""
                    v-model="excercise.subtitle"
                  />
                </div>
                <div class="form-group w-100 mb-3">
                  <label
                    :for="`exercise[${index}][duration]`"
                    class="form-labelform-label-light"
                  >
                    Title Duration
                  </label>
                  <input
                    :id="`exercise[${index}][duration]`"
                    type="text"
                    class="form-control form-control-lg"
                    placeholder=""
                    v-model="excercise.title_duration"
                  />
                </div>
              </div>
              <div class="col-12 d-flex flex-column">
                <label :for="`exercise[${index}][banner]`" class="form-label">
                  Add one or more images
                </label>
                <input
                  :id="`exercise[${index}][banner]`"
                  @input="handleImageInput($event, index)"
                  type="file"
                  :name="`exercise[${index}][banner]`"
                  accept="image/*"
                  @change="handleImageChange(index)"
                />
                <img
                  v-if="imagePreview[index]"
                  :src="imagePreview[index]"
                  style="max-width: 200px"
                />
              </div>
              <div class="col-12">
                <div class="form-group w-100 my-3">
                  <label
                    :for="`exercise[${index}][description]`"
                    class="form-labelform-label-light"
                  >
                    Description
                  </label>
                  <div class="content">
                    <SyncoTipTapEditor
                      :id="`exercise[${index}][description]`"
                      :data="excercise.description"
                      @update-description="
                        (value) => updateDescription(index, value)
                      "
                    />
                  </div>
                </div>
              </div>
              <div class="col-12 d-flex flex-column">
                <label :for="`exercise[${index}][video]`" class="form-label">
                  Add one or more videos
                </label>
                <input
                  :id="`exercise[${index}][video]`"
                  @input="handleVideo2Input($event, index)"
                  type="file"
                  :name="`exercise[${index}][video]`"
                  accept="video/*"
                  @change="handleVideo2Change(index)"
                />
                <video
                  v-if="video2Preview[index]"
                  :src="video2Preview[index]"
                  style="max-height: 200px"
                  class="rounded-4"
                  controls
                ></video>
              </div>
            </div>
          </div>
        </div>
        <div class="col-2"></div>
      </div>
      <div class="row mb-4 pb-4">
        <div class="col-2"></div>
        <div class="col-3">
          <button
            class="btn btn-outline-primary w-100"
            @click="addNewExercise"
            :disabled="blockButtons"
          >
            Add new exercise
          </button>
        </div>
        <div class="col-1"></div>
        <div class="col-4">
          <button
            class="btn btn-primary text-light w-100"
            type="submit"
            :disabled="blockButtons"
            @click="onSubmit"
          >
            Create Session
          </button>
        </div>
        <div class="col-2"></div>
      </div> -->
    </div>
  </NuxtLayout>
</template>
