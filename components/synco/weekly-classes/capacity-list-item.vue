<template>
  <div class="card border rounded-4 mb-4">
    <div class="card-body d-flex justify-content-between p-2">
      <!-- Venue  -->
      <div class="card rounded-4 bg-secondary text-bg-dark d-flex align-items-center justify-content-center"
        style="min-width: 7rem">
        <strong class="h4">Acton</strong>
      </div>
      <!-- Classes  -->
      <div class="w-100 d-flex justify-content-center py-3">
        <!--  -->
        <div class="d-flex flex-column justify-content-between align-items-center px-3 border-end">
          <span class="h5">Class 1: 4-7 years</span>
          <div class="d-flex">
            <span class="indicator-square indicator-square-lg bg-light border">24</span>
            <span class="indicator-square indicator-square-lg bg-primary text-light">16</span>
            <span class="indicator-square indicator-square-lg bg-warning text-light">4</span>
            <span class="indicator-square indicator-square-lg bg-success text-light">+4</span>
          </div>
        </div>
        <!--  -->
        <div class="d-flex flex-column justify-content-between align-items-center px-3 border-end">
          <span class="h5">Class 1: 4-7 years</span>
          <div class="d-flex">
            <span class="indicator-square indicator-square-lg bg-light border">24</span>
            <span class="indicator-square indicator-square-lg bg-primary text-light">16</span>
            <span class="indicator-square indicator-square-lg bg-warning text-light">4</span>
            <span class="indicator-square indicator-square-lg bg-success text-light">+4</span>
          </div>
        </div>
        <!--  -->
        <div class="d-flex flex-column justify-content-between align-items-center px-3 border-end">
          <span class="h5">Class 1: 4-7 years</span>
          <div class="d-flex">
            <span class="indicator-square indicator-square-lg bg-light border">24</span>
            <span class="indicator-square indicator-square-lg bg-primary text-light">16</span>
            <span class="indicator-square indicator-square-lg bg-warning text-light">4</span>
            <span class="indicator-square indicator-square-lg bg-danger text-light">+4</span>
          </div>
        </div>
        <!--  -->
        <div class="d-flex flex-column justify-content-between align-items-center px-3">
          <span class="h5">Class 1: 4-7 years</span>
          <div class="d-flex">
            <span class="indicator-square indicator-square-lg bg-light border">24</span>
            <span class="indicator-square indicator-square-lg bg-primary text-light">16</span>
            <span class="indicator-square indicator-square-lg bg-warning text-light">4</span>
            <span class="indicator-square indicator-square-lg bg-success text-light">+4</span>
          </div>
        </div>
      </div>

      <!-- Total  -->
      <div class="card bg-light rounded-4 border col-auto">

        <div class="card-body d-flex p-4">
          <div class="d-flex flex-column">
            <span class="h4">Total</span>
            <span>1654 Booked <br>
              of 2040 Spaces</span>
          </div>
          <div>CHART</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.indicator-square-lg {
  height: 2.5rem;
  width: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, .05);
  border-radius: .5rem;
  margin: 0 .2rem;
}
</style>