<template>
  <template v-for="parent in parents">
    <SyncoWeeklyClassesFormsParentForm :parent="parent">
      <template v-slot:internal_title>
        <div class="d-flex justify-content-between align-items-center flex-row">
          <h5 class="m-0 py-4">
            <strong>Parent information</strong>
            <!-- <Icon name="ph:pencil-simple-line" /> -->
          </h5>
          <!-- <button
            type="button"
            class="btn btn-primary text-light"
            @click="addParent"
          >
            Add Parent
          </button> -->
        </div>
      </template>
    </SyncoWeeklyClassesFormsParentForm>
  </template>
  <template v-for="emergencyContact in emergencyContacts">
    <SyncoWeeklyClassesFormsEmergencyContactForm
      :emergencyContact="emergencyContact"
    >
      <template v-slot:internal_title>
        <h5 class="py-4">
          <strong>Emergency contact details</strong>
          <!-- <Icon name="ph:pencil-simple-line" /> -->
        </h5>
      </template>
    </SyncoWeeklyClassesFormsEmergencyContactForm>
  </template>
  <SyncoWeeklyClassesFormsCommentFormList
    :comments="comments"
    @add-comment="addComment"
  />
  <div class="d-flex justify-content-end align-items-center my-4 flex-row">
    <button
      type="button"
      class="btn btn-light mx-2 border bg-white"
      @click="sendMessage('email')"
    >
      <span class="d-flex align-items-center flex-row"
        ><Icon name="ph:envelope-simple" /><span class="mx-2"
          >Send Email</span
        ></span
      >
    </button>
    <button
      type="button"
      class="btn btn-light mx-2 border bg-white"
      @click="sendMessage('text')"
    >
      <span class="d-flex align-items-center flex-row"
        ><Icon name="ph:text-a-underline" /><span class="mx-2"
          >Send text</span
        ></span
      >
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { IComment } from '~/types/index'
import type {
  IGuardianCreate,
  IEmregencyContactCreate,
} from '~/types/synco/index'
const props = defineProps<{
  parent: IGuardianCreate[]
  emergencyContact: IEmregencyContactCreate[]
  comment: IComment[]
}>()

let parents = ref<IGuardianCreate[]>(props.parent).value
let emergencyContacts = ref<IEmregencyContactCreate[]>(
  props.emergencyContact,
).value
let comments = ref<IComment[]>(props.comment).value

let newComment = ref<string>('')

let addParent = () => {
  console.log('addParent')
}
let sendMessage = (type: string) => {
  console.log('sendMessage', type)
}

const addComment = (comment: string) => {
  newComment.value = comment
}
</script>
