<template>
  <!-- Search Now  -->
  <div class="card mb-4">
    <div class="card-header d-flex flex-column">
      <h5 class="card-title h2 my-3">Search now</h5>
    </div>
    <div class="card-body">
      <div class="form-group mb-3">
        <label for="search-student" class="form-label">Search Student</label>
        <div class="input-group mb-3">
          <span id="search-student" class="input-group-text">
            <Icon name="ic:baseline-search" />
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Search by student name"
            aria-label="Search by student name"
            aria-describedby="search-addon"
          />
        </div>
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
      <div class="bg-light rounded-4 mb-5 px-3 py-2">
        <label for="" class="form-label">Choose type</label>
        <div class="container">
          <div class="row row-cols-2">
            <div class="form-check col">
              <input
                id="paid"
                class="form-check-input"
                type="radio"
                name="filter-type"
              />
              <label class="form-check-label" for="paid"> Paid </label>
            </div>
            <div class="form-check col">
              <input
                id="gold"
                class="form-check-input"
                type="radio"
                name="filter-type"
              />
              <label class="form-check-label" for="gold"> Gold </label>
            </div>
            <div class="form-check col">
              <input
                id="cancelled"
                class="form-check-input"
                type="radio"
                name="filter-type"
              />
              <label class="form-check-label" for="cancelled">
                Cancelled
              </label>
            </div>
            <div class="form-check col">
              <input
                id="silver"
                class="form-check-input"
                type="radio"
                name="filter-type"
              />
              <label class="form-check-label" for="silver"> Silver </label>
            </div>
            <div class="form-check col">
              <input
                id="pending"
                class="form-check-input"
                type="radio"
                name="filter-type"
              />
              <label class="form-check-label" for="pending"> Pending </label>
            </div>
            <div class="form-check col">
              <input
                id="party-date"
                class="form-check-input"
                type="radio"
                name="filter-type"
              />
              <label class="form-check-label" for="party-date">
                Date of party
              </label>
            </div>
          </div>
        </div>
      </div>

      <!-- Calendar Selector  -->
      <SyncoFilterByCalendar />
    </div>
  </div>
</template>
