<template>
  <!-- Search Now  -->
  <div class="card mb-4">
    <div class="card-header d-flex flex-column ">
      <h5 class="card-title h2 my-3">Search now</h5>
    </div>
    <div class="card-body">
      <div class="form-group mb-3">
        <label for="search-student" class="form-label">Search Student</label>
        <div class="input-group mb-3">
          <span class="input-group-text" id="search-student">
            <Icon name="ic:baseline-search" />
          </span>
          <input type="text" class="form-control" placeholder="Search by student name" aria-label="Search by student name"
            aria-describedby="search-addon">
        </div>
      </div>
      <div class="form-group">
        <label for="choose-team" class="form-label">Team</label>
        <select class="form-select" aria-label="choose-team">
          <option selected>Choose team</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    </div>
  </div>

  <!-- Filter By Date  -->
  <div class="card">
    <div class="card-header d-flex justify-content-between">
      <h5 class="card-title">Filter by date</h5>
      <button class="btn btn-primary btn-sm text-light shadow-sm">
        <Icon name="octicon:settings" class="me-2" />Apply Filter
      </button>
    </div>
    <div class="card-body">
      <!-- Choose Type -->
      <div class="bg-light rounded-4 px-3 py-2 mb-5">
        <label for="" class="form-label">Choose type</label>
        <div class="container">
          <div class="row row-cols-3">
            <div class="form-check col">
              <input class="form-check-input" type="radio" name="filter-type" id="high">
              <label class="form-check-label" for="high">
                High
              </label>
            </div>
            <div class="form-check col">
              <input class="form-check-input" type="radio" name="filter-type" id="medium">
              <label class="form-check-label" for="medium">
                Medium
              </label>
            </div>
            <div class="form-check col">
              <input class="form-check-input" type="radio" name="filter-type" id="low">
              <label class="form-check-label" for="low">
                Low
              </label>
            </div>

          </div>
        </div>
      </div>

      <!-- Calendar Selector  -->
      <SyncoFilterByCalendar />

    </div>
  </div>

  <SyncoDataOptions />
</template>