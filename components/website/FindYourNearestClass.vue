<!-- This requires API , when submitted it goes to a url with the right params-->
<script></script>

<template>
  <div class="card rounded-5 border-0 shadow-lg">
    <div class="card-body px-5 pt-0">
      <form action="/find-a-class">
        <p
          class="h2 custom-border text-primary font-custom mx-3 pb-4 pt-4 text-center fsm-32"
        >
          Find your nearest class
        </p>
        <div class="row">
          <div class="col-12 col-md-6 mb-md-0 mb-3">
            <input
              type="text"
              placeholder="Enter your postcode"
              class="form-control"
            />
          </div>
          <div class="col-12 col-md-6">
            <select name="" class="form-select">
              <option value="">Or select a venue</option>
            </select>
          </div>
        </div>

        <div class="d-grid pb-4 pt-4">
          <button
            class="btn btn-success rounded-5 btn-lg text-white"
            type="submit"
          >
            <strong>Search</strong>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/web/web.scss';

.custom-border {
  border-width: 10px;
  border-top: 0.7rem solid $warning;
}
</style>
