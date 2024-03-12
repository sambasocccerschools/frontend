<script>
export default {
  data: () => ({
    audiences: 3,
  }),
}
</script>

<template>
  <NuxtLayout name="syncolayout" page-title="List of audience">
    <form
      action=""
      class="d-flex border-bottom align-items-end justify-content-between mb-4 pb-4"
    >
      <div class="form-group">
        <label for="search-audience" class="form-label"
          >Search for audience</label
        >
        <div class="input-group">
          <span id="search-audience" class="input-group-text">
            <Icon name="ic:baseline-search" />
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
        </div>
      </div>

      <NuxtLink
        to="/synco/email-marketing/audience/create"
        class="btn btn-primary text-light ms-2 shadow-sm"
        >+ Create new audience</NuxtLink
      >
    </form>

    <div v-for="audience in audiences" class="card rounded-5 mb-4 border">
      <div
        class="card-body d-flex align-items-center justify-content-start px-5 py-4"
      >
        <div class="col-sm-3 d-flex flex-column">
          <span class="h4">Audience Title</span>
          Created 23/06/2023
        </div>
        <div class="d-flex col-auto">
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
        <NuxtLink
          to="/synco/email-marketing/audience/1"
          class="btn btn-primary text-light ms-auto"
          >Edit audience
        </NuxtLink>
      </div>
    </div>
  </NuxtLayout>
</template>
