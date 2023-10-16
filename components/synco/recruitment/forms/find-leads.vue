<template>
  <!-- Search Now  -->
  <div class="card mb-4">
    <div class="card-header d-flex flex-column ">
      <h5 class="card-title h2 my-3">Search now</h5>
    </div>
    <div class="card-body">
      <div class="form-group mb-3">
        <label for="search-candidate" class="form-label">Search Candidate</label>
        <div class="input-group mb-3">
          <span class="input-group-text" id="search-candidate">
            <Icon name="ic:baseline-search" />
          </span>
          <input type="text" class="form-control" placeholder="Search by student name" aria-label="Search by student name"
            aria-describedby="search-addon">
        </div>
      </div>
      <div class="form-group">
        <label for="choose-venue" class="form-label">Venue</label>
        <select class="form-select" aria-label="choose-venue">
          <option selected>Open this select menu</option>
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
              <input class="form-check-input" type="radio" name="filter-type" id="pending">
              <label class="form-check-label" for="pending">
                Pending
              </label>
            </div>
            <div class="form-check col">
              <input class="form-check-input" type="radio" name="filter-type" id="recruited">
              <label class="form-check-label" for="recruited">
                Recruited
              </label>
            </div>
            <div class="form-check col">
              <input class="form-check-input" type="radio" name="filter-type" id="0-to-3-years-exp">
              <label class="form-check-label" for="0-to-3-years-exp">
                0-3 Years Exp
              </label>
            </div>
            <div class="form-check col">
              <input class="form-check-input" type="radio" name="filter-type" id="rejected">
              <label class="form-check-label" for="rejected">
                Rejected
              </label>
            </div>
            <div class="form-check col">
              <input class="form-check-input" type="radio" name="filter-type" id="fa-level-1">
              <label class="form-check-label" for="fa-level-1">
                FA Level 1
              </label>
            </div>
            <div class="form-check col">
              <input class="form-check-input" type="radio" name="filter-type" id="3-plus-years-exp">
              <label class="form-check-label" for="3-plus-years-exp">
                3+ Years Exp
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