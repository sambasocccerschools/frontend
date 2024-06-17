<script setup lang="ts">
const layout = 'parentlayout'
</script>
<template>
  <NuxtLayout :name="layout" page-title="Surveys">
    <div class="d-flex flex-column">
      <span class="h2">Surveys</span>
      <template v-for="survey in 1">
        <ParentsComponentsSurveyListItem></ParentsComponentsSurveyListItem>
      </template>
    </div>
  </NuxtLayout>
</template>
