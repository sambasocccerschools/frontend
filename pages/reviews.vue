<script setup lang="ts">
const layout = "weblayout";
import Reviews from '@/components/website/Reviews.vue'

</script>


<template>
  <NuxtLayout :name="layout">
    <WebsiteReviewsSection />
  </NuxtLayout>
</template>