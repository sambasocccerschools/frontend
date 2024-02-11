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

      <!-- Camps -->
      <div class="form-group mb-4">
        <label
          for="camps"
          class="form-label border-bottom border-1 d-flex border-secondary-subtle mb-3 pb-2"
          >Camps</label
        >

        <div class="form-check mb-3">
          <input
            id="october-half-term"
            type="checkbox"
            class="form-check-input"
          />
          <label class="form-check-label" for="october-half-term"
            >October Half Term</label
          >
        </div>
        <div class="form-check mb-3">
          <input
            id="christmas-camps"
            type="checkbox"
            class="form-check-input"
          />
          <label class="form-check-label" for="christmas-camps"
            >Christmas Camps</label
          >
        </div>
        <div class="form-check mb-3">
          <input
            id="february-half-term"
            type="checkbox"
            class="form-check-input"
          />
          <label class="form-check-label" for="february-half-term"
            >February Half Term
          </label>
        </div>
        <div class="form-check mb-3">
          <input id="easter-camps" type="checkbox" class="form-check-input" />
          <label class="form-check-label" for="easter-camps"
            >Easter Camps</label
          >
        </div>
        <div class="form-check mb-3">
          <input id="june-half-term" type="checkbox" class="form-check-input" />
          <label class="form-check-label" for="june-half-term"
            >June Half Term</label
          >
        </div>
        <div class="form-check mb-3">
          <input id="summer-camps" type="checkbox" class="form-check-input" />
          <label class="form-check-label" for="summer-camps"
            >Summer Camps</label
          >
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
          <input id="4to6" type="checkbox" class="form-check-input" />
          <label class="form-check-label" for="4to6">4-6</label>
        </div>
        <div class="form-check mb-3">
          <input id="7to9" type="checkbox" class="form-check-input" />
          <label class="form-check-label" for="7to9">7-9</label>
        </div>
        <div class="form-check mb-3">
          <input id="10to12" type="checkbox" class="form-check-input" />
          <label class="form-check-label" for="10to12">10-12</label>
        </div>
      </div>
    </div>
  </div>
</template>
