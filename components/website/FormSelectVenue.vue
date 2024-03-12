<script>
export default {
  props: ['direction'],
}
</script>
<template>
  <form action="/find-a-class" class="rounded-5 card border-0 shadow">
    <div class="card-body px-4 pt-4">
      <div :class="direction === 'horizontal' ? 'row row-cols-3 gx-4' : ''">
        <div class="mb-3">
          <input
            type="text"
            placeholder="Enter your postcode"
            class="form-control form-control-lg border-0 shadow-sm"
          />
        </div>
        <div class="mb-3">
          <select
            id=""
            name=""
            placeholder="Or select a venue"
            class="form-select form-select-lg border-0 shadow-sm"
          >
            <option value="">Or select a venue</option>
          </select>
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
