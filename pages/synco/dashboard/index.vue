<script setup lang="ts">
const layout = "syncolayout";

</script>
<template>
  <NuxtLayout :name="layout">
    <div class="row">
      <div class="col-sm-8">
        <img src="@/src/assets/img-dashboard-quote.png" class="img-fluid"
          alt="Excellence is not an act, but rather a habit, Aristotle">

        <section class="mt-4">
          <div class="d-flex justify-content-between">
            <h4>Informatics</h4>
            <NuxtLink to="/synco/dashboard/widgets" class="btn btn-primary text-light shadow-sm">+ Add your own widgets
            </NuxtLink>
          </div>
          <SyncoInformatics />
        </section>
      </div>
      <div class="col">
        <!-- Filter By Date  -->
        <div class="card">
          <div class="card-header d-flex justify-content-between">
            <h5 class="card-title">Filter by date</h5>
            <button class="btn btn-primary btn-sm text-light shadow-sm">Apply Filter</button>
          </div>
          <div class="card-body">
            <!-- Choose Type -->
            <div class="bg-light rounded-4 px-3 py-2 mb-5">
              <label for="" class="form-label">Choose type</label>
              <div class="container">
                <div class="row row-cols-2">
                  <div class="form-check col">
                    <input class="form-check-input" type="radio" name="filter-type" id="this-year">
                    <label class="form-check-label" for="this-year">
                      This Year
                    </label>
                  </div>
                  <div class="form-check col">
                    <input class="form-check-input" type="radio" name="filter-type" id="last-year">
                    <label class="form-check-label" for="last-year">
                      Last Year
                    </label>
                  </div>
                  <div class="form-check col">
                    <input class="form-check-input" type="radio" name="filter-type" id="this-month">
                    <label class="form-check-label" for="this-month">
                      This Month
                    </label>
                  </div>
                  <div class="form-check col">
                    <input class="form-check-input" type="radio" name="filter-type" id="last-month">
                    <label class="form-check-label" for="last-month">
                      Last Month
                    </label>
                  </div>
                  <div class="form-check col">
                    <input class="form-check-input" type="radio" name="filter-type" id="this-week">
                    <label class="form-check-label" for="this-week">
                      This Week
                    </label>
                  </div>
                  <div class="form-check col">
                    <input class="form-check-input" type="radio" name="filter-type" id="last-week">
                    <label class="form-check-label" for="last-week">
                      Last Week
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <!-- Calendar Selector  -->
            Calendar Goes Here

          </div>
        </div>

        <!-- My Tasks -->
        <div class="card">
          <div class="card-header d-flex justify-content-between">
            <h5 class="card-title">My Tasks</h5>
            <button class="btn btn-primary btn-sm text-light">+ Add a Task</button>
          </div>
          <div class="card-body">
            <div class="border-bottom pt-2 pb-3 d-flex justify-content-between align-items-center">
              <div>
                <h6 class="m-0 d-flex align-items-center">Meeting
                  <small class="ms-1">
                    <Icon name="bi:info-circle-fill" class="text-danger" />
                  </small>
                </h6>
                <small class="text-muted">30 Nov 2021</small>
              </div>
              <span class="badge bg-secondary-subtle text-dark">6:15</span>
            </div>
            <div class="border-bottom pt-2 pb-3 d-flex justify-content-between align-items-center">
              <div>
                <h6 class="m-0 d-flex align-items-center">Weekly meeting
                </h6>
                <small class="text-muted">24 Nov 2021</small>
              </div>
              <span class="badge bg-secondary-subtle text-dark">6:15</span>
            </div>
            <span class="btn btn-link d-flex align-items-start text-primary ps-0">View All
              <small class="ms-1">
                <Icon name="material-symbols:arrow-forward-ios-rounded" />
              </small>
            </span>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
