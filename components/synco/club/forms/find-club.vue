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
          placeholder="Search Team"
          aria-label="Search Team"
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
      <!-- Teams  -->
      <div class="form-group mb-4">
        <label
          for="venue"
          class="form-label border-bottom border-1 d-flex border-secondary-subtle mb-3 pb-2"
          >Teams</label
        >

        <div class="form-check mb-3">
          <input
            id="all-teams"
            type="checkbox"
            class="form-check-input"
            checked
          />
          <label class="form-check-label" for="all-teams">All teams</label>
        </div>
        <div class="form-check mb-3">
          <input id="camdenU8" type="checkbox" class="form-check-input" />
          <label class="form-check-label" for="camdenU8">Camden YL U8’s</label>
        </div>
        <div class="form-check mb-3">
          <input id="camdenU9" type="checkbox" class="form-check-input" />
          <label class="form-check-label" for="camdenU9">Camden YL U9’s</label>
        </div>
        <div class="form-check mb-3">
          <input id="regents" type="checkbox" class="form-check-input" />
          <label class="form-check-label" for="regents"
            >Regents Park YL U8’s</label
          >
        </div>
        <div class="form-check mb-3">
          <input id="hackney" type="checkbox" class="form-check-input" />
          <label class="form-check-label" for="hackney"
            >Hackney Marshes YL U8’s</label
          >
        </div>
        <button class="btn btn-link px-0">Show more</button>
      </div>

      <!-- Training Days  -->
      <div class="form-group mb-4">
        <label
          for="venue"
          class="form-label border-bottom border-1 d-flex border-secondary-subtle mb-3 pb-2"
          >Training Days</label
        >

        <div class="form-check mb-3">
          <input id="sunday" type="checkbox" class="form-check-input" checked />
          <label class="form-check-label" for="sunday">Sunday</label>
        </div>
        <div class="form-check mb-3">
          <input id="monday" type="checkbox" class="form-check-input" />
          <label class="form-check-label" for="monday">Monday</label>
        </div>
        <div class="form-check mb-3">
          <input id="tuesday" type="checkbox" class="form-check-input" />
          <label class="form-check-label" for="tuesday">Tuesday</label>
        </div>
        <div class="form-check mb-3">
          <input id="wednesday" type="checkbox" class="form-check-input" />
          <label class="form-check-label" for="wednesday">Wednesday</label>
        </div>
        <div class="form-check mb-3">
          <input id="thursday" type="checkbox" class="form-check-input" />
          <label class="form-check-label" for="thursday">Thursday</label>
        </div>
        <div class="form-check mb-3">
          <input id="friday" type="checkbox" class="form-check-input" />
          <label class="form-check-label" for="friday">Friday</label>
        </div>
        <div class="form-check mb-3">
          <input id="saturday" type="checkbox" class="form-check-input" />
          <label class="form-check-label" for="saturday">Saturday</label>
        </div>
      </div>

      <!-- Student Ages  -->
      <div class="form-group mb-4">
        <label
          for="venue"
          class="form-label border-bottom border-1 d-flex border-secondary-subtle mb-3 pb-2"
          >Student Ages</label
        >

        <div class="form-check mb-3">
          <input id="u5" type="checkbox" class="form-check-input" checked />
          <label class="form-check-label" for="u5">U5’s</label>
        </div>
        <div class="form-check mb-3">
          <input id="u6" type="checkbox" class="form-check-input" />
          <label class="form-check-label" for="u6">U6’s</label>
        </div>
        <div class="form-check mb-3">
          <input id="u7" type="checkbox" class="form-check-input" />
          <label class="form-check-label" for="u7">U7’s</label>
        </div>
        <div class="form-check mb-3">
          <input id="u8" type="checkbox" class="form-check-input" />
          <label class="form-check-label" for="u8">U8’s</label>
        </div>
        <div class="form-check mb-3">
          <input id="u9" type="checkbox" class="form-check-input" />
          <label class="form-check-label" for="u9">U9’s</label>
        </div>
        <div class="form-check mb-3">
          <input id="u10" type="checkbox" class="form-check-input" />
          <label class="form-check-label" for="u10">U10’s</label>
        </div>
        <div class="form-check mb-3">
          <input id="u11" type="checkbox" class="form-check-input" />
          <label class="form-check-label" for="u11">U11’s</label>
        </div>
        <div class="form-check mb-3">
          <input id="u12" type="checkbox" class="form-check-input" />
          <label class="form-check-label" for="u12">U12’s</label>
        </div>
      </div>
    </div>
  </div>
</template>
