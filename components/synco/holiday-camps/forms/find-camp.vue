<template>
  <!-- Filter By Date  -->
  <div class="card">
    <div class="card-header d-flex flex-column">
      <h5 class="card-title mb-4 h4">Search by filter</h5>
      <!-- <button class="btn btn-primary btn-sm text-light shadow-sm">Apply Filter</button> -->
      <div class="input-group mb-3">
        <span class="input-group-text" id="search-addon">
          <Icon name="ic:baseline-search" />
        </span>
        <input type="text" class="form-control" placeholder="Search Venue" aria-label="Search Venue"
          aria-describedby="search-addon">
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="postcode-addon">
          <Icon name="ic:baseline-search" />
        </span>
        <input type="text" class="form-control" placeholder="Search by postcode" aria-label="Search by postcode"
          aria-describedby="postcode-addon">
      </div>

    </div>
    <div class="card-body">
      <!-- Venues  -->
      <div class="form-group mb-4">
        <label for="venue"
          class="form-label border-bottom border-1 d-flex border-secondary-subtle pb-2 mb-3">Venues</label>

        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="venue1" checked>
          <label class="form-check-label" for="venue1">All venues</label>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="venue2">
          <label class="form-check-label" for="venue2">Acton</label>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="venue3">
          <label class="form-check-label" for="venue3">Chelsea</label>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="venue4">
          <label class="form-check-label" for="venue4">Kensington</label>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="venue5">
          <label class="form-check-label" for="venue5">London</label>
        </div>
        <button class="btn btn-link px-0">Show more</button>
      </div>

      <!-- Camps -->
      <div class="form-group mb-4">
        <label for="camps"
          class="form-label border-bottom border-1 d-flex border-secondary-subtle pb-2 mb-3">Camps</label>

        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="october-half-term">
          <label class="form-check-label" for="october-half-term">October Half Term</label>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="christmas-camps">
          <label class="form-check-label" for="christmas-camps">Christmas Camps</label>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="february-half-term">
          <label class="form-check-label" for="february-half-term">February Half Term </label>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="easter-camps">
          <label class="form-check-label" for="easter-camps">Easter Camps</label>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="june-half-term">
          <label class="form-check-label" for="june-half-term">June Half Term</label>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="summer-camps">
          <label class="form-check-label" for="summer-camps">Summer Camps</label>
        </div>



      </div>

      <!-- Students Years -->
      <div class="form-group mb-3">
        <label for="venue" class="form-label border-bottom border-1 d-flex border-secondary-subtle pb-2 mb-3">Student
          Age</label>

        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="4to6">
          <label class="form-check-label" for="4to6">4-6</label>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="7to9">
          <label class="form-check-label" for="7to9">7-9</label>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="10to12">
          <label class="form-check-label" for="10to12">10-12</label>
        </div>
      </div>

    </div>
  </div>
</template>