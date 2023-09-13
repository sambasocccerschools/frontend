<template>
  <div class="btn-group w-100">
    <button type="button"
      class="btn btn-lg border bg-white dropdown-toggle d-flex align-items-center justify-content-between"
      aria-expanded="false" data-bs-toggle="dropdown" data-bs-auto-close="outside">
      Search Venue
    </button>
    <div class="dropdown-menu border-0 shadow-lg w-100">
      <li>
        <h6 class="dropdown-header text-dark">Choose Venue</h6>
      </li>

      <form class="px-4 py-3">
        <div class="form-check mb-2 d-flex align-items-center">
          <input type="checkbox" class="form-check-input me-2" id="region-1">
          <label class="form-check-label" for="region-1">
            Region One
          </label>
        </div>
        <div class="form-check mb-2 d-flex align-items-center">
          <input type="checkbox" class="form-check-input me-2" id="region-2">
          <label class="form-check-label" for="region-2">
            Region Two
          </label>
        </div>
        <div class="form-check mb-2 d-flex align-items-center">
          <input type="checkbox" class="form-check-input me-2" id="region-3">
          <label class="form-check-label" for="region-3">
            Region Three
          </label>
        </div>
        <div class="form-check mb-2 d-flex align-items-center">
          <input type="checkbox" class="form-check-input me-2" id="marylebone">
          <label class="form-check-label" for="marylebone">
            Marylebone
          </label>
        </div>
        <div class="form-check mb-2 d-flex align-items-center">
          <input type="checkbox" class="form-check-input me-2" id="chelsea">
          <label class="form-check-label" for="chelsea">
            Chelsea
          </label>
        </div>
        <div class="form-check mb-2 d-flex align-items-center">
          <input type="checkbox" class="form-check-input me-2" id="kings-cross">
          <label class="form-check-label" for="kings-cross">
            Kings Cross
          </label>
        </div>
        <!-- <button type="submit" class="btn btn-primary w-100 text-light">Next</button> -->
      </form>
    </div>
  </div>
</template>