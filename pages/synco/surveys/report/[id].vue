<script>
export default {
  data: () => ({
    view: 'list' // list or card
  })
}
</script>


<template>
  <NuxtLayout name="syncolayout" pageTitle="Surveys">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <NuxtLink to="/synco/surveys" class="text-dark">Surveys</NuxtLink>
        </li>
        <li class="breadcrumb-item active text-semibold" aria-current="page">Survey Title</li>
      </ol>
    </nav>
    <h2 class="mb-5">
      <NuxtLink to="/synco/surveys">
        <Icon name="material-symbols:arrow-left-alt" class="me-2 text-dark" />
      </NuxtLink>
      Survey Overview
    </h2>
    <h3>Survey Title Goes Here</h3>
  </NuxtLayout>
</template>
