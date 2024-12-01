<script setup lang="ts">
import { ref } from 'vue'
import { useToast } from 'vue-toast-notification'
import type {
  ISessionPlanUpdateItem,
  ISessionPlanCreateUpdateItem,
  ISessionPlanExcerciseCreateItem,
  IIconItem,
} from '~/types/synco/index'

const router = useRouter()
const { $api } = useNuxtApp()
const toast = useToast()

const isLoading = ref<boolean>(false)
const blockButtons = ref<boolean>(false)
const newExcercise = ref<ISessionPlanExcerciseCreateItem>({
  title: '',
  subtitle: '',
  description: '',
  banner: null,
  video: null,
  title_duration: '',
})
const newSessionPlan = ref<ISessionPlanCreateUpdateItem>({
  title: '',
  description: '',
  ability_group_id: 0,
  banner: null,
  video: null,
  exercises: [],
})
const imageSizeLimit = ref<number>(5120000).value
const videoSizeLimit = ref<number>(51200000).value

const getSessionPlan = async () => {
  if (!sessionPlanId.value) return
  try {
    isLoading.value = true
    blockButtons.value = true

    const response = await $api.sessionPlans.getById(sessionPlanId.value)
    const sessionPlan = response?.data

    // Actualizar el objeto de vista
    newSessionPlan.value = {
      title: sessionPlan.title,
      description: sessionPlan.description,
      ability_group_id: sessionPlan?.ability_group?.id ?? 0, // Ajuste para asegurar un valor por defecto
      banner: null,
      video: null,
      exercises: [],
    }

    if (sessionPlan.banner?.url) {
      bannerPreview.value = sessionPlan.banner.url
    }

    if (sessionPlan.video?.url) {
      videoPreview.value = sessionPlan.video.url
    }

    const exercises = sessionPlan.exercises || []
    newSessionPlan.value.exercises = exercises.map((exercise, index) => {
      imagePreview.value[index] = exercise.banner?.url || null
      video2Preview.value[index] = exercise.video?.url || null

      return {
        title: exercise.title,
        subtitle: exercise.subtitle,
        description: exercise.description,
        banner: null,
        video: null,
        title_duration: exercise.title_duration,
      }
    })
  } catch (error: any) {
    console.error(error)
    toast.error(error?.data?.messages ?? 'Error al obtener el plan de sesión.')
  } finally {
    isLoading.value = false
    blockButtons.value = false
  }
}

const sessionPlanId = ref<number | null>(null)

onMounted(async () => {
  console.log('components/synco/config/session-plans/edit-form.vue')
  const querySessionPlanId = router.currentRoute.value.query?.sessionPlanId
  sessionPlanId.value = querySessionPlanId ? +querySessionPlanId : -1
  getSessionPlan()
})

const addNewExercise = () => {
  newSessionPlan.value.exercises.push(
    JSON.parse(JSON.stringify(newExcercise.value)),
  )
  video2Input.value.push(null)
  video2Input.value.push(null)
  // let index = newSessionPlan.value.exercises.length - 1
}

const bannerInput = ref<HTMLInputElement | null>(null)
const banner = ref<File>()
const bannerPreview = ref<string | null>(null)

const handleBannerChange = async () => {
  const files = bannerInput.value?.files!
  const file = files?.[0]
  if (file.size >= imageSizeLimit) {
    alert('Image to big!')
    return
  }
  banner.value = file
  const fileBlob = new Blob([new Uint8Array(await file.arrayBuffer())], {
    type: file.type,
  })
  newSessionPlan.value.banner = fileBlob
  bannerPreview.value = file ? URL.createObjectURL(file) : null
}

const videoInput = ref<HTMLInputElement | null>(null)
const video = ref<File>()
const videoPreview = ref<string | null>(null)

const handleVideoChange = async () => {
  const files = videoInput.value?.files!
  const file = files?.[0]
  if (file.size >= videoSizeLimit) {
    alert('Video to big!')
    return
  }
  video.value = file
  const fileBlob = new Blob([new Uint8Array(await file.arrayBuffer())], {
    type: file.type,
  })
  newSessionPlan.value.video = fileBlob
  videoPreview.value = file ? URL.createObjectURL(file) : null
}

const imageInput = ref<Array<HTMLInputElement | null>>([])
const image = ref<Array<File>>([])
const imagePreview = ref<Array<string | null>>([])

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
  if (file.size >= imageSizeLimit) {
    alert('Image to big!')
    return
  }
  if (image.value[index] != null) {
    image.value[index] = file
  }
  const fileBlob = new Blob([new Uint8Array(await file.arrayBuffer())], {
    type: file.type,
  })
  newSessionPlan.value.exercises[index].banner = fileBlob
  imagePreview.value[index] = file ? URL.createObjectURL(file) : null
}

const video2Input = ref<Array<HTMLInputElement | null>>([])
const video2 = ref<Array<File>>([])
const video2Preview = ref<Array<string | null>>([])

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
  if (file.size >= videoSizeLimit) {
    alert('Video to big!')
    return
  }
  if (video2.value[index] != null) {
    video2.value[index] = file
  }
  const fileBlob = new Blob([new Uint8Array(await file.arrayBuffer())], {
    type: file.type,
  })
  newSessionPlan.value.exercises[index].video = fileBlob
  video2Preview.value[index] = file ? URL.createObjectURL(file) : null
}

const updateDescription = (index: number, description: string) => {
  newSessionPlan.value.exercises[index].description = description
}

const onSubmit = async () => {
  try {
    isLoading.value = true
    blockButtons.value = true
    if (!sessionPlanId.value) return
    const sessionPlansResponse = await $api.sessionPlans.update(
      sessionPlanId.value,
      newSessionPlan.value,
    )
    getSessionPlan()
    // router.push('/synco/config/weekly-classes/session-plans')
  } catch (error: any) {
    console.log(error)
    toast.error(error?.data?.messages ?? 'Error')
  } finally {
    isLoading.value = false
    blockButtons.value = false
  }
}

const loadBlobFromUrl = async (url: string) => {
  const token = useCookie('token')
  const xhr = new XMLHttpRequest()
  xhr.open('GET', url, true)
  xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
  xhr.setRequestHeader('Authorization', `Bearer ${token.value}`)
  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
  // xhr.responseType = 'blob'
  return new Promise((resolve, reject) => {
    xhr.onload = () => resolve(xhr)
    xhr.onerror = (error) => reject(error)
    xhr.send()
  })
}
</script>

<template>
  <div class="card rounded-4">
    <div class="row my-4">
      <div class="col-2"></div>
      <div v-if="!!newSessionPlan" class="col-8">
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
                  v-model="newSessionPlan.title"
                  type="text"
                  class="form-control form-control-lg"
                  placeholder=""
                />
              </div>
              <div class="form-group w-100 mb-3">
                <label for="description" class="form-labelform-label-light">
                  Description
                </label>
                <input
                  id="description"
                  v-model="newSessionPlan.description"
                  type="text"
                  class="form-control form-control-lg"
                  placeholder=""
                />
              </div>
            </div>
            <div class="col-12 d-flex flex-column mb-3">
              <label for="banner" class="form-label"> Add player banner </label>

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
              <!-- <img
                v-if="!!sessionPlan.banner"
                :src="sessionPlan.banner.url"
                :height="200"
              /> -->
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
              <!-- <video
                v-if="!!sessionPlan.video"
                :src="sessionPlan.video.url"
                :height="200"
                class="rounded-4"
                controls
              ></video> -->
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
            v-for="(excercise, index) in newSessionPlan.exercises"
            class="row"
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
                  v-model="excercise.title"
                  type="text"
                  class="form-control form-control-lg"
                  placeholder=""
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
                  v-model="excercise.subtitle"
                  type="text"
                  class="form-control form-control-lg"
                  placeholder=""
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
                  v-model="excercise.title_duration"
                  type="text"
                  class="form-control form-control-lg"
                  placeholder=""
                />
              </div>
            </div>
            <div class="col-12 d-flex flex-column">
              <label :for="`exercise[${index}][banner]`" class="form-label">
                Add one or more images
              </label>
              <input
                :id="`exercise[${index}][banner]`"
                type="file"
                :name="`exercise[${index}][banner]`"
                accept="image/*"
                @input="handleImageInput($event, index)"
                @change="handleImageChange(index)"
              />
              <img
                v-if="imagePreview[index]"
                :src="imagePreview[index]"
                style="max-width: 200px"
              />
              <!-- <img
                v-if="!!excercise.banner"
                :src="excercise.banner.url"
                :height="200"
              /> -->
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
                type="file"
                :name="`exercise[${index}][video]`"
                accept="video/*"
                @input="handleVideo2Input($event, index)"
                @change="handleVideo2Change(index)"
              />
              <video
                v-if="video2Preview[index]"
                :src="video2Preview[index]"
                style="max-height: 200px"
                class="rounded-4"
                controls
              ></video>
              <!-- <video
                v-if="!!excercise.video"
                :src="excercise.video.url"
                :height="200"
                class="rounded-4"
                controls
              ></video> -->
            </div>

            <hr class="my-4" />
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
          :disabled="blockButtons"
          @click="addNewExercise"
        >
          Add new exercise
        </button>
      </div>
      <div class="col-1"></div>
      <div class="col-4">
        <!-- <button
              class="btn btn-primary text-light w-100"
              @click="save"
              :disabled="blockButtons"
            > -->
        <button
          class="btn btn-primary text-light w-100"
          type="submit"
          :disabled="blockButtons"
          @click="onSubmit"
        >
          Update Session
        </button>
      </div>
      <div class="col-2"></div>
    </div>
  </div>
</template>
