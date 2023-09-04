<script setup lang="ts">
const layout = "weblayout";
</script>

<template>
  <NuxtLayout :name="layout">
    <header class="bg-header-sss-uniform d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div class="col-sm-7 offset-sm-1">
            <h1 class="display-1 font-custom text-light"><em class="text-warning">Worn </em>with pride</h1>
            <p class="h4 text-light py-4">Get them excited about the beautiful game with our exclusive range of kids’
              football kits. Whether you’re taking them to their lesson or kicking the ball about in the garden, our
              official kids’ football kit will make their day!</p>
            <NuxtLink to="/about/sss-uniform" class="btn btn-lg btn-warning rounded-5 px-4 font-custom">Online Shop
            </NuxtLink>
            <p class="text-light mt-4 lead">You can buy your kit directly on our online shop!</p>
          </div>
        </div>
      </div>
    </header>


    <section class="py-5">
      <div class="container mt-5">
        <h2 class="h1 text-primary text-center font-custom">The Official Training Kit</h2>
        <p class="lead text-muted text-center">The items below are compulsory for students attending our classes.</p>

        <!--  -->
        <div class="card shadow-lg border-0 rounded-4 text-center my-5">
          <div class="card-body">
            <h3 class="display-4 font-custom text-info py-4">Kids Collection</h3>

            <div class="row">
              <div class="col-sm-8 mx-auto">
                <div class="row">
                  <div class="col">
                    <img src="@/src/assets/img-sss-kids-shirt.png" alt="img-sss-kids-shirt"
                      class="img-fluid rounded-circle border-success border-4 border">
                    <h4 class="font-custom text-primary mt-4">SSS Kids T-Shirt</h4>
                  </div>
                  <div class="col">
                    <img src="@/src/assets/img-sss-dri-fit-shorts.png" alt="img-sss-kids-shirt"
                      class="img-fluid rounded-circle border-success border-4 border">
                    <h4 class="font-custom text-primary mt-4">SSS Dri-FIT Shorts</h4>

                  </div>
                  <div class="col">
                    <img src="@/src/assets/img-sss-classic-II-socks.png" alt="img-sss-classic-II-socks "
                      class="img-fluid rounded-circle border-success border-4 border">
                    <h4 class="font-custom text-primary mt-4">SSS CLASSIC II Socks</h4>

                  </div>
                </div>
              </div>
            </div>

            <div class="mt-4 mb-5">
              <NuxtLink to="/about/sss-uniform" class="btn btn-warning btn-lg px-4 rounded-5 font-custom text-primary">
                <Icon name="material-symbols:shopping-cart-outline" class="me-2" />Buy Today
              </NuxtLink>
            </div>


          </div>
        </div>


        <!--  -->
        <div class="card shadow-lg border-0 rounded-4 text-center my-5">
          <div class="card-body">
            <h3 class="display-4 font-custom text-success py-4">Coaches Collection</h3>

            <div class="row">
              <div class="col-sm-8 mx-auto">
                <div class="row">
                  <div class="col">
                    <img src="@/src/assets/img-sss-coaches-shirt.png" alt="img-sss-coaches-shirt"
                      class="img-fluid rounded-circle border-info border-4 border">
                    <h4 class="font-custom text-primary mt-4">Coaches T-Shirt</h4>

                  </div>
                  <div class="col">
                    <img src="@/src/assets/img-sss-coaches-mid-layer.png" alt="img-sss-coaches-mid-layer"
                      class="img-fluid rounded-circle border-info border-4 border">
                    <h4 class="font-custom text-primary mt-4">Coaches Mid-Layer</h4>

                  </div>
                  <div class="col">
                    <img src="@/src/assets/img-sss-coaches-winter-jacket.png" alt="img-sss-coaches-winter-jacket "
                      class="img-fluid rounded-circle border-info border-4 border">
                    <h4 class="font-custom text-primary mt-4">Coaches Winter Jacket</h4>

                  </div>
                </div>
              </div>
            </div>

            <div class="mt-4 mb-5">
              <NuxtLink to="/about/sss-uniform" class="btn btn-warning btn-lg px-4 rounded-5 font-custom ">
                <Icon name="material-symbols:shopping-cart-outline" class="me-2" />Buy Today
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <WebsiteFAQForSSSUniforms />


  </NuxtLayout>
</template>


<style lang="scss" scoped>
@import '@/assets/styles/web/web.scss';

header.bg-header-sss-uniform {
  background-image: url('@/src/assets/bg-white-wave-bottom-inverted.svg'), url('@/src/assets/bg-header-sss-uniform.png');
  padding: 4rem 0;
  min-height: 80vh;
  background-repeat: no-repeat;
  background-size: 100% auto, cover;
  background-position: bottom center, center center;
  @extend .bg-info;
}
</style>