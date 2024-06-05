<script setup lang="ts">
import { ref } from 'vue'
import type { IFranchiseQuestion } from '~/types'
const props = defineProps<{
  noBorder?: boolean | null
  questions: IFranchiseQuestion[]
}>()
let noBorder = ref<boolean>(props.noBorder ?? false).value
let questions = ref<IFranchiseQuestion[]>(props.questions)

const changeAnswer = (question: IFranchiseQuestion) => {}
</script>
<template>
  <div class="card rounded-4 mb-4 p-4" :class="noBorder ? 'border-0' : ''">
    <slot name="internal_title"></slot>
    <div class="d-flex flex-column">
      <div class="d-flex flex-row">
        <span class="text-muted number-row p-2">No</span>
        <span class="text-muted question-row p-2">Question</span>
        <span class="text-muted answer-row p-2 text-end">Answer</span>
      </div>
      <div class="d-flex flex-row" v-for="question in questions">
        <span class="number-row p-2">{{ question.Number }}</span>
        <span class="question-row border-bottom p-2">{{
          question.Question
        }}</span>
        <div class="answer-row border-bottom p-2 text-end">
          <span @click="question.Answer = !question.Answer">
            <span
              class="me-2"
              :class="question.Answer == null ? 'text-muted' : ''"
              >{{
                question.Answer == null
                  ? 'Select'
                  : question.Answer
                    ? 'Yes'
                    : 'No'
              }}</span
            >
            <span
              ><Icon
                :name="
                  question.Answer == null
                    ? 'ph:circle'
                    : question.Answer
                      ? 'ph:check-circle'
                      : 'ph:x-circle'
                "
                :class="
                  question.Answer == null
                    ? 'text-muted'
                    : question.Answer
                      ? 'text-primary'
                      : 'text-danger'
                "
            /></span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.number-row {
  width: 50px;
}
.question-row {
  width: calc(100% - 300px);
}
.answer-row {
  width: 200px;
}
.border-bottom {
  border-bottom: 1px solid lightgray;
}
</style>
