<!-- This requires API , when submitted it goes to a url with the right params-->
<script>
</script>

<template>
  <div class="card rounded-5 shadow-lg border-0">
    <div class="card-body pt-0 px-5">
      <form action="/find-a-class">
        <p class="h2 text-center mx-3 custom-border pt-4 pb-4 text-primary">Find your nearest class</p>
        <div class="row">
          <div class="col">
            <input type="text" placeholder="Enter your postcode" class="form-control">
          </div>
          <div class="col">
            <select name="" id="" placeholder="Or select a venue" class="form-select">
              <option value="">Or select a venue</option>
            </select>
          </div>
        </div>
        <div class="d-grid pt-4 pb-4">
          <button class="btn btn-success rounded-5 btn-lg text-white" type="submit"><strong>Search</strong></button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/web/web.scss';

.custom-border {
  border-width: 10px;
  border-top: .7rem solid $warning;
}
</style>