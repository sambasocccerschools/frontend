<template>
  <section class="bg-banner-waves-yellow-green py-4">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="h1  text-light font-custom mt-3">Join our Mailing List</h3>
          <p class="lead text-light text-semibold">Sign-up for the SSS Newsletter</p>
        </div>
        <div class="col-sm-6">
          <form action="">
            <div class="form-group">
              <div class="col d-flex">
                <input type="email" placeholder="Enter your Email"
                  class=" form-control-lg rounded-5 border-0 shadow me-3 w-100">
                <button type="submit" class="btn btn-lg btn-primary rounded-5 px-4">Subscribe</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section.bg-banner-waves-yellow-green {
  background-image: url('@/src/assets/bg-banner-waves-yellow-green.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
</style>