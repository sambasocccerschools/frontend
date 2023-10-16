<script>
export default {
  data: () => ({
    audiences: 3
  })
}
</script>


<template>
  <NuxtLayout name="syncolayout" pageTitle="List of audience">

    <form action="" class="d-flex border-bottom pb-4 mb-4 align-items-end justify-content-between">
      <div class="form-group">
        <label for="search-audience" class="form-label">Search for audience</label>
        <div class="input-group">
          <span class="input-group-text" id="search-audience">
            <Icon name="ic:baseline-search" />
          </span>
          <input type="text" class="form-control" placeholder="Search" aria-label="Search"
            aria-describedby="search-addon">
        </div>
      </div>

      <NuxtLink to="/synco/email-marketing/audience/create" class=" ms-2 btn btn-primary text-light shadow-sm">+
        Create new audience</NuxtLink>
    </form>


    <div class="card rounded-5 border mb-4" v-for="audience in audiences">
      <div class="card-body py-4 px-5 d-flex align-items-center justify-content-start">
        <div class="col-sm-3 d-flex flex-column">
          <span class="h4">Audience Title</span>
          Created 23/06/2023
        </div>
        <div class="col-auto d-flex">
          <div class="d-flex flex-column px-3">
            <span class="h4">Recipients</span>
            10
          </div>
          <div class="d-flex flex-column px-3">
            <span class="h4">Agent</span>
            Ben Marcus
          </div>
          <div class="d-flex flex-column px-3">
            <span class="h4">Venues</span>
            All
          </div>
          <div class="d-flex flex-column px-3">
            <span class="h4">Membership status</span>
            All
          </div>
        </div>
        <NuxtLink to="/synco/email-marketing/audience/1" class="btn btn-primary text-light ms-auto">Edit audience
        </NuxtLink>
      </div>
    </div>

  </NuxtLayout>
</template>
