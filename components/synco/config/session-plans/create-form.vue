<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useToast } from 'vue-toast-notification'
import type {
  ISessionPlanCreateUpdateItem,
  ISessionPlanExcerciseCreateItem,
} from '~/types/synco/index'

const router = useRouter()
const { $api } = useNuxtApp()
const toast = useToast()

const isLoading = ref(false)
const blockButtons = ref(false)
const abilityId = ref<number | null>(null)

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
  banner: null,
  video: null,
  exercises: [],
})

const imageSizeLimit = 5120000

onMounted(() => {
  console.log('components/synco/config/session-plans/create-form.vue')
  abilityId.value = Number(router.currentRoute.value.query?.abilityId) || -1
  newSessionPlan.value.ability_group_id = abilityId.value
  addNewExercise()
})

const addNewExercise = () => {
  newSessionPlan.value.exercises.push({ ...newExcercise.value, videoInput: '' })
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
      title: 'Front end SSS',
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
  newSessionPlan.value.exercises[index].json_urls ||= []
  newSessionPlan.value.exercises[index].json_urls.push({
    extension: file.type.split('/')[1],
    url: '',
    type: 'IMG',
    file,
  })
}

const updateDescription = (index: number, description: string) => {
  newSessionPlan.value.exercises[index].description = description
}

const uploadExerciseImages = async () => {
  for (const [i, exercise] of newSessionPlan.value.exercises.entries()) {
    if (!exercise.json_urls?.length) continue

    for (const [j, image] of exercise.json_urls.entries()) {
      if (!image.file) continue

      try {
        const formData = new FormData()
        formData.append('file', image.file)
        formData.append(
          'fields',
          JSON.stringify({
            title: `Exercise ${i + 1} - Image ${j + 1}`,
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
          throw new Error(
            `Error uploading image ${j + 1} for exercise ${i + 1}`,
          )
        }

        image.url = response.data.url
        image.extension = response.data.extension
        delete image.file
      } catch (error) {
        console.error(`❌ Image upload failed for exercise ${i + 1}:`, error)
      }
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
    isLoading.value = blockButtons.value = true

    await uploadExerciseImages()

    let bannerUrl = null
    if (bannerFormData.value) {
      try {
        console.log('🚀 Subiendo banner...')
        const response = await $api.documents.create(
          JSON.parse(bannerFormData.value.get('fields') as string),
          bannerFormData.value.get('file') as File,
        )

        if (!response || response.status.http_code !== 200)
          throw new Error('Error uploading banner')
        bannerUrl = response.data.url
      } catch (error) {
        console.error('❌ Failed to upload banner:', error)
        toast.error('Error uploading banner')
        return
      }
    }

    const formattedExercises = newSessionPlan.value.exercises.map(
      ({ title, subtitle, title_duration, description, json_urls }) => ({
        title,
        subtitle,
        title_duration,
        description,
        json_urls: json_urls.map(({ extension, url, type }) => ({
          extension,
          url,
          type,
        })),
      }),
    )

    const payload = {
      title: newSessionPlan.value.title,
      description: newSessionPlan.value.description,
      banner: bannerUrl,
      video: newSessionPlan.value.video,
      ability_group_id: newSessionPlan.value.ability_group_id,
      exercises: formattedExercises,
    }

    console.log('✅ Final payload:', payload)
    const sessionResponse = await $api.sessionPlans.create(payload)

    if (!sessionResponse || sessionResponse?.status?.http_code !== 200) {
      throw new Error('Error creating session plan')
    }

    router.push('/synco/config/weekly-classes/session-plans')
  } catch (error) {
    console.error('❌ Error en onSubmit:', error)
    toast.error('Error creating session plan')
  } finally {
    isLoading.value = blockButtons.value = false
  }
}
</script>
<template>
  <div class="card rounded-4">
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
            </div>
            <div class="col-12 d-flex flex-column mb-3">
              <label for="video" class="form-label">Add video URL</label>
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
          Create Session
        </button>
      </div>
      <div class="col-2"></div>
    </div>
  </div>
</template>
