<template>
  <!-- Filter By Date  -->
  <div class="card">
    <div class="card-header d-flex flex-column">
      <h5 class="card-title h4 mb-4">Search by filter</h5>
      <!-- <button class="btn btn-primary btn-sm text-light shadow-sm">Apply Filter</button> -->
      <div class="input-group mb-3">
        <span id="search-addon" class="input-group-text">
          <Icon name="ic:baseline-search" />
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="Search Venue"
          aria-label="Search Venue"
          aria-describedby="search-addon"
        />
      </div>
      <div class="input-group mb-3">
        <span id="postcode-addon" class="input-group-text">
          <Icon name="ic:baseline-search" />
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="Search by postcode"
          aria-label="Search by postcode"
          aria-describedby="postcode-addon"
        />
      </div>
    </div>
    <div class="card-body">
      <!-- Venues  -->
      <div class="form-group mb-4">
        <label
          for="venue"
          class="form-label border-bottom border-1 d-flex border-secondary-subtle mb-3 pb-2"
          >Venues</label
        >

        <div class="form-check mb-3">
          <input id="venue1" type="checkbox" class="form-check-input" checked />
          <label class="form-check-label" for="venue1">All venues</label>
        </div>
        <div class="form-check mb-3">
          <input id="venue2" type="checkbox" class="form-check-input" />
          <label class="form-check-label" for="venue2">Acton</label>
        </div>
        <div class="form-check mb-3">
          <input id="venue3" type="checkbox" class="form-check-input" />
          <label class="form-check-label" for="venue3">Chelsea</label>
        </div>
        <div class="form-check mb-3">
          <input id="venue4" type="checkbox" class="form-check-input" />
          <label class="form-check-label" for="venue4">Kensington</label>
        </div>
        <div class="form-check mb-3">
          <input id="venue5" type="checkbox" class="form-check-input" />
          <label class="form-check-label" for="venue5">London</label>
        </div>
        <button class="btn btn-link px-0">Show more</button>
      </div>

      <!-- Days -->
      <div class="form-group mb-4">
        <label
          for="days"
          class="form-label border-bottom border-1 d-flex border-secondary-subtle mb-3 pb-2"
          >Days</label
        >

        <div class="form-check mb-3">
          <input id="Sunday" type="checkbox" class="form-check-input" />
          <label class="form-check-label" for="Sunday">Sunday</label>
        </div>
        <div class="form-check mb-3">
          <input id="Monday" type="checkbox" class="form-check-input" />
          <label class="form-check-label" for="Monday">Monday</label>
        </div>
        <div class="form-check mb-3">
          <input id="Tuesday" type="checkbox" class="form-check-input" />
          <label class="form-check-label" for="Tuesday">Tuesday</label>
        </div>
        <div class="form-check mb-3">
          <input id="Wednesday" type="checkbox" class="form-check-input" />
          <label class="form-check-label" for="Wednesday">Wednesday</label>
        </div>
        <div class="form-check mb-3">
          <input id="Thursday" type="checkbox" class="form-check-input" />
          <label class="form-check-label" for="Thursday">Thursday</label>
        </div>
        <div class="form-check mb-3">
          <input id="Friday" type="checkbox" class="form-check-input" />
          <label class="form-check-label" for="Friday">Friday</label>
        </div>
        <div class="form-check mb-3">
          <input id="Saturday" type="checkbox" class="form-check-input" />
          <label class="form-check-label" for="Saturday">Saturday</label>
        </div>
      </div>

      <!-- Students Years -->
      <div class="form-group mb-3">
        <label
          for="venue"
          class="form-label border-bottom border-1 d-flex border-secondary-subtle mb-3 pb-2"
          >Student Age</label
        >

        <div class="form-check mb-3">
          <input id="4to7" type="checkbox" class="form-check-input" />
          <label class="form-check-label" for="4to7">4-7</label>
        </div>
        <div class="form-check mb-3">
          <input id="8to12" type="checkbox" class="form-check-input" />
          <label class="form-check-label" for="8to12">8-12</label>
        </div>
      </div>
    </div>
  </div>
</template>
