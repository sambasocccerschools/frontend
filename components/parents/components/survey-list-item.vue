<template>
  <div class="card rounded-4 p-3">
    <div class="row align-items-center">
      <div class="col-6">
        <dt>Survey Title</dt>
        <dd>Created 23/06/2023</dd>
      </div>
      <div class="col-2">
        <dt>Status</dt>
        <dd><Icon name="ph:circle-fill" class="text-warning" />Incomplete</dd>
      </div>
      <div class="col-2">
        <dt>Questions</dt>
        <dd>4</dd>
      </div>
      <div class="col-2">
        <NuxtLink to="/parents/surveys/1" class="btn btn-primary">
          Complete survey
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
