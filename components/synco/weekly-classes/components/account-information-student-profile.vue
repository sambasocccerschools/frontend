<template>
  <SyncoWeeklyClassesFormsStudentForm :student="student">
    <template v-slot:internal_title>
      <h5 class="py-4">
        <strong>Student 1 information</strong>
        <Icon name="ph:pencil-simple-line" />
      </h5>
    </template>
  </SyncoWeeklyClassesFormsStudentForm>
  <SyncoWeeklyClassesFormsStudentForm :student="student">
    <template v-slot:internal_title>
      <h5 class="py-4">
        <strong>Student 2 information</strong>
        <Icon name="ph:pencil-simple-line" />
      </h5>
    </template>
  </SyncoWeeklyClassesFormsStudentForm>
</template>
<script setup lang="ts">
import { ref } from 'vue'

import type { IStudent } from '~/types/index'
const props = defineProps<{
  student: IStudent
}>()

let student = ref<IStudent>(props.student).value
</script>
