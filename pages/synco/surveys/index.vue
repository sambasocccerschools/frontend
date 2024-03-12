<script>
export default {
  data: () => ({
    view: 'list', // list or card
    surveys: 8,
  }),
}
</script>

<template>
  <NuxtLayout name="syncolayout" page-title="Surveys">
    <h4 class="h4 mb-4">Reports</h4>
    <div class="d-flex justify-content-between align-items-center">
      <!-- <div>
        <button class="btn " >List View</button>
        <button class="btn " >Card View</button>
      </div> -->

      <ul class="nav nav-pills rounded-4 mb-4 border bg-white p-2">
        <li class="nav-item">
          <button
            class="nav-link rounded-4"
            :class="view === 'list' ? 'active' : ' text-dark'"
            href="#"
            @click="view = 'list'"
          >
            List View
          </button>
        </li>
        <li class="nav-item">
          <button
            class="nav-link rounded-4"
            :class="view === 'card' ? 'active' : ' text-dark'"
            @click="view = 'card'"
          >
            Card View
          </button>
        </li>
      </ul>
      <NuxtLink
        to="/synco/surveys/create"
        class="btn btn-primary text-light ms-2 shadow-sm"
        @click="view = 'card'"
        >+ Create Survey</NuxtLink
      >
    </div>

    <form action="" class="row border-bottom mb-4 pb-4">
      <div class="form-group col-sm-3">
        <label for="search-survey" class="form-label">Search for survey</label>
        <div class="input-group">
          <span id="search-survey" class="input-group-text">
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
      <div class="form-group col-sm-2">
        <label for="date" class="form-label">Date</label>
        <select class="form-select" aria-label="date">
          <option selected>All</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div class="form-group col-sm-2">
        <label for="category" class="form-label">Category</label>
        <select class="form-select" aria-label="category">
          <option selected>All</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div class="form-group col-sm-2">
        <label for="status" class="form-label">Status</label>
        <select class="form-select" aria-label="status">
          <option selected>All</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    </form>

    <div v-if="view === 'list'">
      <SyncoSurveysListItem v-for="survey in surveys" view="list" />
    </div>
    <div v-if="view === 'card'" class="row row-cols-sm-4 g-4">
      <SyncoSurveysListItem v-for="survey in surveys" view="card" />
    </div>
  </NuxtLayout>
</template>
