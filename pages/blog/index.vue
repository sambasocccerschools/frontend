<script setup lang="ts">
   const layout = "weblayout";
   import BlogPosts from '@/components/website/BlogPosts.vue'
</script>

<template>
  <NuxtLayout :name="layout">
    This one is a bit different
    <BlogPosts/>
  </NuxtLayout>
</template>