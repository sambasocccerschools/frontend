<script>
export default {
  props: ['direction'],
}
</script>
<template>
  <form action="/find-a-class" class="rounded-5 card formVenue border-0 shadow">
    <div class="card-body px-md-4 plm-20 prm-20 pt-4">
      <div :class="direction === 'horizontal' ? 'row row-cols-3 gx-4' : ''">
        <div class="mb-3">
          <input
            type="text"
            placeholder="Enter your postcode"
            class="form-control form-control-lg border-0 shadow-sm"
          />
        </div>
        <!-- <div class="mb-3">
          <select
            id=""
            name=""
            placeholder="Or select a venue"
            class="form-select form-select-lg border-0 shadow-sm"
          >
            <option value="">Or select a venue</option>
          </select>
        </div> -->

        <div class="custom-select-wrapper mb-3">
          <select
            class="form-select form-select-lg border-0 shadow-sm"
            name=""
            id=""
          >
            <option value="">Or select a venue</option>
          </select>

          <!-- Flecha personalizada -->
          <span class="arrow-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
            >
              <path
                d="M5.50293 8.18021L10.5924 13.2696L15.6818 8.18021"
                stroke="#212121"
                stroke-width="1.69648"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>

        <div>
          <button
            class="btn btn-success rounded-5 btn-lg w-100 text-white"
            type="submit"
          >
            <strong>Search</strong>
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<style lang="scss" scoped>
.formVenue {
  input,
  select {
    color: #5f5f6d;
    @media (max-width: 767px) {
      border-radius: 3.393px;
      background: #fff;
      box-shadow:
        0px 0.848px 1.696px 0px rgba(50, 50, 71, 0.08),
        0px 0px 0.848px 0px rgba(50, 50, 71, 0.2) !important;
      border-color: #f7f7f9;
      padding: 13.572px 16.965px;
    }
  }
}

.custom-select-wrapper {
  position: relative;
}

.custom-select-wrapper select {
  padding-right: 2.5rem; /* espacio para la flecha */
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: white;
}

.custom-select-wrapper .arrow-icon {
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  pointer-events: none;
}
</style>
