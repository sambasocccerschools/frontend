<script>
export default {
  props: [
    'direction'
  ],
}
</script>
<template>
  <form action="/find-a-class" class="shadow rounded-5 card border-0">
    <div class="card-body px-4 pt-4">
      <div :class="direction === 'horizontal' ? 'row row-cols-3 gx-4' : ''">
        <div class="mb-3"><input type="text" placeholder="Enter your postcode"
            class="form-control form-control-lg shadow-sm border-0"></div>
        <div class="mb-3">
          <select name="" id="" placeholder="Or select a venue" class="form-select form-select-lg shadow-sm border-0">
            <option value="">Or select a venue</option>
          </select>
        </div>

        <div>
          <button class="btn btn-success rounded-5 btn-lg text-white w-100" type="submit"><strong>Search</strong></button>
        </div>
      </div>

    </div>
  </form>
</template>