<template>
  <div class="btn-group">
    <button
      type="button"
      class="btn btn-lg btn-primary text-light d-flex align-items-center dropdown-toggle"
      aria-expanded="false"
      data-bs-toggle="dropdown"
      data-bs-auto-close="outside"
    >
      <Icon name="octicon:settings" class="me-2" />Filters
    </button>
    <div
      class="dropdown-menu rounded-5 border-0 shadow-lg"
      style="min-width: 22rem"
    >
      <form class="px-4 py-3">
        <div class="d-flex align-items-center justify-content-between">
          <h6 class="dropdown-header text-dark">
            <strong class="h4">Filter</strong>
          </h6>
          <button class="btn btn-primary btn-sm text-light">
            <Icon name="octicon:settings" class="me-2" />Apply Filter
          </button>
        </div>

        <!-- Choose Type -->
        <div class="bg-light rounded-4 mb-2 px-3 py-2">
          <label for="" class="form-label">Choose type</label>
          <div class="container">
            <div class="row row-cols-2">
              <div class="form-check col">
                <input
                  id="all-time"
                  class="form-check-input"
                  type="radio"
                  name="filter-type"
                />
                <label class="form-check-label" for="all-time">
                  All time
                </label>
              </div>
              <div class="form-check col">
                <input
                  id="weekly-classes"
                  class="form-check-input"
                  type="radio"
                  name="filter-type"
                />
                <label class="form-check-label" for="weekly-classes">
                  Weekly Classes
                </label>
              </div>
              <div class="form-check col">
                <input
                  id="one-to-one"
                  class="form-check-input"
                  type="radio"
                  name="filter-type"
                />
                <label class="form-check-label" for="one-to-one">
                  One to One
                </label>
              </div>
              <div class="form-check col">
                <input
                  id="merchandise"
                  class="form-check-input"
                  type="radio"
                  name="filter-type"
                />
                <label class="form-check-label" for="merchandise">
                  Merchandise
                </label>
              </div>
              <div class="form-check col">
                <input
                  id="all-purchases"
                  class="form-check-input"
                  type="radio"
                  name="filter-type"
                />
                <label class="form-check-label" for="all-purchases">
                  All purchases
                </label>
              </div>
              <div class="form-check col">
                <input
                  id="birthday"
                  class="form-check-input"
                  type="radio"
                  name="filter-type"
                />
                <label class="form-check-label" for="birthday">
                  Birthday
                </label>
              </div>
            </div>
          </div>
        </div>

        <!-- Calendar Selector  -->
        <SyncoFilterByCalendar />

        <!-- <button type="submit" class="btn btn-primary w-100 text-light">Next</button> -->
      </form>
    </div>
  </div>
</template>
