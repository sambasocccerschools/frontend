<template>
  <template v-for="student in students">
    <SyncoWeeklyClassesFormsStudentForm :student="student">
      <template v-slot:internal_title>
        <h5 class="py-4">
          <strong>Student 1 information</strong>
          <!-- <Icon name="ph:pencil-simple-line" /> -->
        </h5>
      </template>
    </SyncoWeeklyClassesFormsStudentForm>
  </template>
</template>
<script setup lang="ts">
import { ref } from 'vue'

import type { IStudentCreate } from '~/types/synco/index'
const props = defineProps<{
  student: IStudentCreate[]
}>()

let students = ref<IStudentCreate[]>(props.student).value
</script>
