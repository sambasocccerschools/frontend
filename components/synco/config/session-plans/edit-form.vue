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

const isLoading = ref<boolean>(false)
const blockButtons = ref<boolean>(false)
const newExcercise = ref<ISessionPlanExcerciseCreateItem>({
  title: '',
  subtitle: '',
  title_duration: '',
  description: '',
  json_urls: [],
  videoInput: '',
})

const newSessionPlan = ref<ISessionPlanCreateUpdateItem>({
  title: '',
  description: '',
  ability_group_id: 0,
  banner: '',
  video: '',
  exercises: [],
})

const imageSizeLimit = 5120000
const originalSessionPlan = ref<ISessionPlanCreateUpdateItem | null>(null)

const getSessionPlan = async () => {
  if (!sessionPlanId.value) return

  try {
    isLoading.value = true
    blockButtons.value = true

    const response = await $api.sessionPlans.getById(sessionPlanId.value)
    const sessionPlan = response?.data

    if (!sessionPlan) return

    originalSessionPlan.value = JSON.parse(JSON.stringify(sessionPlan))

    newSessionPlan.value.title = sessionPlan.title || ''
    newSessionPlan.value.description = sessionPlan.description || ''
    newSessionPlan.value.ability_group_id = sessionPlan?.ability_group?.id ?? 0
    newSessionPlan.value.banner = sessionPlan.banner || ''
    newSessionPlan.value.video = sessionPlan.video || ''

    bannerPreview.value = sessionPlan.banner || ''
    videoPreview.value = sessionPlan.video || ''

    newSessionPlan.value.exercises = []

    newSessionPlan.value.exercises = (sessionPlan.exercises || []).map(
      (exercise, index) => {
        imagePreview.value[index] =
          exercise.json_urls?.find((item: any) => item.type === 'IMG')?.url ||
          ''

        video2Preview.value[index] =
          exercise.json_urls?.find((item: any) => item.type === 'VIDEO')?.url ||
          ''

        return {
          title: exercise.title || '',
          subtitle: exercise.subtitle || '',
          description: exercise.description || '',
          title_duration: exercise.title_duration || '',
          json_urls: Array.isArray(exercise.json_urls)
            ? exercise.json_urls
            : [], // 🔥 Se asegura que `json_urls` siempre sea un array
          videoInput:
            exercise.json_urls?.find((item: any) => item.type === 'VIDEO')
              ?.url || '',
        }
      },
    )
  } catch (error: any) {
    console.error('❌ Error al obtener el plan de sesión:', error)
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
  newSessionPlan.value.exercises.push({
    ...newExcercise.value,
    videoInput: '',
    json_urls: [],
  })
}

const bannerInput = ref<HTMLInputElement | null>(null)
const bannerPreview = ref<string | null>(null)
const bannerFormData = ref<FormData | null>(null)

const handleBannerChange = async () => {
  const file = bannerInput.value?.files?.[0]
  if (!file || file.size >= imageSizeLimit) return alert('Image too big!')

  bannerPreview.value = URL.createObjectURL(file)
  bannerFormData.value = new FormData()
  bannerFormData.value.append('file', file)
  bannerFormData.value.append(
    'fields',
    JSON.stringify({
      title: 'Skill of the day - Banner',
      type: 'IMG',
      description: 'Descripción del documento',
      id_for_table: 1,
      table: 'USER',
      action_type: 'PROFILE_PICTURE',
      user_id: 5,
      is_public: 1,
    }),
  )
}

const videoPreview = ref<string | null>(null)

const imageInput = ref<Array<HTMLInputElement | null>>([])
const imagePreview = ref<Array<string | null>>([])

const handleImageInput = (event: Event, index: number) => {
  if (event.target instanceof HTMLInputElement) {
    imageInput.value[index] = event.target
  }
}

const handleImageChange = async (index: number) => {
  const file = imageInput.value[index]?.files?.[0]
  if (!file || file.size >= imageSizeLimit) return alert('Image too big!')

  imagePreview.value[index] = URL.createObjectURL(file)

  try {
    const formData = new FormData()
    formData.append('file', file)
    formData.append(
      'fields',
      JSON.stringify({
        title: `Exercise ${index + 1} - Image`,
        type: 'IMG',
        description: `Image for exercise: ${newSessionPlan.value.exercises[index].title}`,
        id_for_table: 1,
        table: 'USER',
        action_type: 'PROFILE_PICTURE',
        user_id: 5,
        is_public: 1,
      }),
    )

    const response = await $api.documents.create(
      JSON.parse(formData.get('fields') as string),
      formData.get('file') as File,
    )

    if (!response || response.status.http_code !== 200) {
      throw new Error(`Error uploading image for exercise ${index + 1}`)
    }

    newSessionPlan.value.exercises[index].json_urls.push({
      url: response.data.url,
      type: 'IMG',
      extension: response.data.extension,
    })
  } catch (error) {
    console.error(`❌ Image upload failed for exercise ${index + 1}:`, error)
  }
}

const video2Preview = ref<Array<string | null>>([])

const updateDescription = (index: number, description: string) => {
  newSessionPlan.value.exercises[index].description = description
}

const getChangedFields = (newData: any, originalData: any = {}) => {
  const changes: any = {}
  Object.keys(newData).forEach((key) => {
    if (
      JSON.stringify(newData[key]) !== JSON.stringify(originalData[key] || null)
    ) {
      changes[key] = newData[key]
    }
  })
  return changes
}

const uploadChangedImages = async () => {
  if (!bannerFormData.value) return null

  try {
    console.log('🚀 Uploading banner...')
    const response = await $api.documents.create(
      JSON.parse(bannerFormData.value.get('fields') as string),
      bannerFormData.value.get('file') as File,
    )

    if (!response || response.status.http_code !== 200) {
      throw new Error('Error uploading banner')
    }
    return response.data.url
  } catch (error) {
    console.error('❌ Failed to upload banner:', error)
    toast.error('Error uploading banner')
    return null
  }
}

const uploadChangedExerciseImages = async () => {
  for (const [i, exercise] of newSessionPlan.value.exercises.entries()) {
    if (
      !imagePreview.value[i] ||
      imagePreview.value[i] ===
        originalSessionPlan.value?.exercises[i]?.json_urls?.find(
          (img: any) => img.type === 'IMG',
        )?.url
    ) {
      continue
    }

    const file = imageInput.value[i]?.files?.[0]
    if (!file) continue

    try {
      const formData = new FormData()
      formData.append('file', file)
      formData.append(
        'fields',
        JSON.stringify({
          title: `Exercise ${i + 1} - Image`,
          type: 'IMG',
          description: `Image for exercise: ${exercise.title}`,
          id_for_table: 1,
          table: 'USER',
          action_type: 'PROFILE_PICTURE',
          user_id: 5,
          is_public: 1,
        }),
      )

      const response = await $api.documents.create(
        JSON.parse(formData.get('fields') as string),
        formData.get('file') as File,
      )

      if (!response || response.status.http_code !== 200) {
        throw new Error(`Error uploading image for exercise ${i + 1}`)
      }

      exercise.json_urls.push({
        url: response.data.url,
        type: 'IMG',
        extension: response.data.extension,
      })
    } catch (error) {
      console.error(`❌ Image upload failed for exercise ${i + 1}:`, error)
    }
  }
}

const handleVideoUrlChange = (index: number) => {
  const exercise = newSessionPlan.value.exercises[index]
  const videoUrl = exercise.videoInput?.trim() ?? ''
  if (!videoUrl) return

  exercise.json_urls =
    exercise.json_urls?.filter((item) => item.type !== 'VIDEO') ?? []
  exercise.json_urls.push({ url: videoUrl, type: 'VIDEO', extension: '' })
}

const onSubmit = async () => {
  try {
    if (!originalSessionPlan.value) {
      toast.error('Error: There is no data to compare.')
      console.error('❌ originalSessionPlan is null on submit')
      return
    }

    isLoading.value = blockButtons.value = true

    const bannerUrl = await uploadChangedImages()
    await uploadChangedExerciseImages()

    const changedData = getChangedFields(
      newSessionPlan.value,
      originalSessionPlan.value,
    )

    if (Object.keys(changedData).length === 0) {
      toast.info('No changes detected.')
      return
    }

    if (bannerUrl) {
      changedData.banner = bannerUrl
    }

    const sessionResponse = await $api.sessionPlans.update(
      sessionPlanId.value,
      changedData,
    )

    if (!sessionResponse || sessionResponse?.status?.http_code !== 200) {
      throw new Error('Error updating session plan')
    }

    router.push('/synco/config/weekly-classes/session-plans')
  } catch (error) {
    console.error('❌ Error en onSubmit:', error)
    toast.error('Error updating session plan')
  } finally {
    isLoading.value = blockButtons.value = false
  }
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
                v-if="newSessionPlan.banner || bannerPreview"
                :src="bannerPreview || newSessionPlan.banner"
                style="max-width: 200px"
              />
            </div>
            <div class="col-12 d-flex flex-column mb-3">
              <label for="video" class="form-label"> Add video </label>
              <input
                id="video-file"
                v-model="newSessionPlan.video"
                type="text"
                class="form-control form-control-lg"
                placeholder="Video URL"
              />
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
            :key="index"
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
                v-if="
                  newSessionPlan.exercises[index]?.json_urls?.[0]?.url ||
                  imagePreview[index]
                "
                :src="
                  imagePreview[index] ||
                  (newSessionPlan.exercises[index]?.json_urls?.[0]?.url ?? '')
                "
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
                v-model="excercise.videoInput"
                :name="`exercise[${index}][video]`"
                type="text"
                class="form-control form-control-lg"
                placeholder="Enter YouTube or video URL"
                @input="handleVideoUrlChange(index)"
              />
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
