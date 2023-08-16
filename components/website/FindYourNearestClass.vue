<!-- This requires API -->

<template>
  <div class="container find-your-nearest-class ">
    <div class="col-sm-9 mx-auto">
      <div class="card rounded-5 shadow-lg border-0">
        <div class="card-body pt-0 px-5">
          <form action="">
            <p class="h2 text-center mx-3 custom-border pt-4 pb-4 text-primary">Find your nearest class</p>
            <div class="row">
              <div class="col">
                <input type="text" placeholder="Enter your postcode" class="form-control">
              </div>
              <div class="col">
                <select name="" id="" placeholder="Or select a venue" class="form-select">
                  <option value="">Some venues</option>
                </select>
              </div>
            </div>
            <div class="d-grid pt-4 pb-4">
              <button class="btn btn-success rounded-5 btn-lg text-white"><strong>Search</strong></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
   @import '@/assets/styles/web/style.scss';
  .find-your-nearest-class {
    transform: translateY(-5rem)
  }
  .custom-border {
    border-width: 10px;
    border-top: .7rem solid $warning;
  }
   // .card {
   //    box-shadow: 0 .2rem 4rem rgba(0,0,0,.2);
   //    margin: auto;
   //    display: inline-block;
   //    padding: 2rem;
   // }

</style>