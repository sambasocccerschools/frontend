<script setup lang="ts">
import { ref } from 'vue'
import type { IComment } from '~/types/index'
import { generalStore } from '~/stores'

const props = defineProps<{
  comments: IComment[]
}>()
const store = generalStore()

let newComment: string = ''
let comments = ref<IComment[]>(props.comments)

const addComment = () => {
  emit('addComment', newComment)
}
const cleanDate = (date: string) => {
  if (!Number.isInteger(+date)) return date
  let cleanedDate = new Date(+date * 1000).toISOString()?.split('T')[0]
  return cleanedDate
}
const emit = defineEmits(['addComment'])
const updateComment = (event: Event) => {
  if (!event?.target?.value) return
  let comment = event.target.value
  emit('addComment', comment)
}
</script>

<template>
  <div class="card rounded-4 mt-4 px-3 py-4">
    <h3 class="pb-4"><strong>Comment</strong></h3>
    <div class="row">
      <div class="col-12 d-flex flex-row">
        <div class="d-flex align-items-center">
          <img
            src="@/src/assets/img-avatar-small.png"
            alt="Avatar"
            class="me-3"
          />
        </div>
        <div class="form-group w-100 d-flex align-items-center flex-row px-4">
          <input
            id="comment"
            type="text"
            class="form-control form-control-lg"
            placeholder="Add a comment"
            v-model="newComment"
            @input="updateComment"
          />
        </div>
        <div>
          <button
            class="btn btn-primary text-light btn-lg d-flex align-items-center h-100 flex-row rounded"
            @click="addComment"
          >
            <Icon
              name="material-symbols:send"
              style="transform: rotate(-45deg)"
            />
          </button>
        </div>
      </div>
    </div>
    <template v-for="comment in comments">
      <div
        class="card rounded-4 mt-4 p-4"
        style="background-color: #fafafa"
        v-if="!!comment.text"
      >
        <div class="row">
          <div class="col-12">
            <div class="form-group w-100 mb-3">
              <p>{{ comment.text }}</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 d-flex justify-content-between flex-row">
            <div class="d-flex align-items-center">
              <img
                :src="comment.avatar"
                alt="Avatar"
                class="me-3"
                style="width: 36px; height: 36px"
              />
              <span
                ><strong>{{ comment.name }}</strong></span
              >
            </div>
            <div class="d-flex align-items-center">
              <span>{{
                !!comment.created ? cleanDate(comment.created) : ''
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
