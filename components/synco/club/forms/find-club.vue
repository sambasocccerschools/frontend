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
        <input type="text" class="form-control" placeholder="Search Team" aria-label="Search Team"
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
      <!-- Teams  -->
      <div class="form-group mb-4">
        <label for="venue"
          class="form-label border-bottom border-1 d-flex border-secondary-subtle pb-2 mb-3">Teams</label>

        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="all-teams" checked>
          <label class="form-check-label" for="all-teams">All teams</label>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="camdenU8">
          <label class="form-check-label" for="camdenU8">Camden YL U8’s</label>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="camdenU9">
          <label class="form-check-label" for="camdenU9">Camden YL U9’s</label>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="regents">
          <label class="form-check-label" for="regents">Regents Park YL U8’s</label>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="hackney">
          <label class="form-check-label" for="hackney">Hackney Marshes YL U8’s</label>
        </div>
        <button class="btn btn-link px-0">Show more</button>
      </div>

      <!-- Training Days  -->
      <div class="form-group mb-4">
        <label for="venue" class="form-label border-bottom border-1 d-flex border-secondary-subtle pb-2 mb-3">Training
          Days</label>

        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="sunday" checked>
          <label class="form-check-label" for="sunday">Sunday</label>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="monday">
          <label class="form-check-label" for="monday">Monday</label>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="tuesday">
          <label class="form-check-label" for="tuesday">Tuesday</label>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="wednesday">
          <label class="form-check-label" for="wednesday">Wednesday</label>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="thursday">
          <label class="form-check-label" for="thursday">Thursday</label>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="friday">
          <label class="form-check-label" for="friday">Friday</label>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="saturday">
          <label class="form-check-label" for="saturday">Saturday</label>
        </div>
      </div>

      <!-- Student Ages  -->
      <div class="form-group mb-4">
        <label for="venue" class="form-label border-bottom border-1 d-flex border-secondary-subtle pb-2 mb-3">Student
          Ages</label>

        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="u5" checked>
          <label class="form-check-label" for="u5">U5’s</label>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="u6">
          <label class="form-check-label" for="u6">U6’s</label>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="u7">
          <label class="form-check-label" for="u7">U7’s</label>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="u8">
          <label class="form-check-label" for="u8">U8’s</label>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="u9">
          <label class="form-check-label" for="u9">U9’s</label>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="u10">
          <label class="form-check-label" for="u10">U10’s</label>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="u11">
          <label class="form-check-label" for="u11">U11’s</label>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="u12">
          <label class="form-check-label" for="u12">U12’s</label>
        </div>

      </div>



    </div>
  </div>
</template>