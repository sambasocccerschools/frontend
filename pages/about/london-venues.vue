<script setup lang="ts">
import { WebsiteReviews } from '.nuxt/components';

const layout = "weblayout";
</script>

<template>
  <NuxtLayout :name="layout">
    <header class="bg-header-london-venues d-flex align-items-center">
      <div class="container text-center">
        <h1 class="text-primary display-1"><em>Football<br>Classes London</em></h1>
        <div class="row mt-4">
          <div class="col-sm-6 mx-auto text-center">
            <p class="text-light h3"> Sharpen your child’s football skills and boost their confidence
            </p>
          </div>
        </div>
      </div>
    </header>

    <section class="py-5">
      <div class="container">
        <div class="row py-5 align-items-center">
          <div class="col-sm-5 order-sm-2">
            <img src="@/src/assets/img-football-classed-for-4-12-years.png" alt="img-football-classed-for-4-12-years"
              class="img-fluid">
          </div>
          <div class="col order-sm-1">
            <h1 class="mb-4 font-custom text-primary">Football classes for 4-12 years</h1>
            <div style="line-height:2">
              <p class="text-muted text-muted">So your child is either obsessed with football and you’re looking for a fun
                training centre to channel their passion and energy. Or you notice your child’s confidence needs a boost
                and
                their football skills need a polish. Whatever the reason, we can help you!</p>
              <p class="text-muted">At Samba Soccer Schools, we teach boys and girls aged 4-12 the skills and mentality
                needed to play attractive winning football so they can play without the fear of making mistakes. You’ll
                notice your child’s confidence build thick and fast as they learn how to master the ball under the
                guidance
                of our experienced coaches.
                Classes run from multiple football training centres in London. Scroll down to find your nearest football
                coaching centre in London..</p>
            </div>

            <NuxtLink to="/about/london-venues" class="btn btn-warning font-custom btn-lg px-4 rounded-5 mt-4">Online
              Shop!
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Find your venue  -->
    <section class="py-5 bg-gray-texture">
      <div class="container">
        <div class="my-5 text-center">
          <h2 class="display-4 font-custom text-primary">Find your Venue</h2>
          <p class="lead text-muted">Football Classes For Kids In London (Aged 4-12)</p>
        </div>

        <div class="row">
          <div class="col-sm-11 mx-auto">
            <WebsiteFormSelectVenue direction="horizontal" />
          </div>
        </div>

        <div class="row my-5 row-cols-sm-4 py-5">
          <!--  -->
          <div class="col d-flex flex-column text-center align-items-center">
            <img src="@/src/assets/img-venue-battersea.png" alt="img-venue-battersea.png"
              class="rounded-circle border border-info border-5 mb-4">
            <span class="text-primary">Football Classes in </span>
            <h4 class="text-primary font-custom mt-2 mb-3">Battersea</h4>
            <p class="text-muted">Football classes are held at the Battersea academy on Saturday afternoons for boys and
              girls aged 4-12.</p>
            <NuxtLink to="/about/london-venues" class="btn btn-warning text-primary rounded-5 px-4 mt-3">
              <strong>Learn More</strong>
            </NuxtLink>
          </div>
          <!--  -->
          <div class="col d-flex flex-column text-center align-items-center">
            <img src="@/src/assets/img-venue-chelsea.png" alt="img-venue-chelsea.png"
              class="rounded-circle border border-info border-5 mb-4">
            <span class="text-primary">Football Classes in </span>
            <h4 class="text-primary font-custom mt-2 mb-3">Chelsea</h4>
            <p class="text-muted">Football classes are held at the Chelsea academy on Sunday afternoons for boys and girls
              aged 4-12.</p>
            <NuxtLink to="/about/london-venues" class="btn btn-warning text-primary rounded-5 px-4 mt-3">
              <strong>Learn More</strong>
            </NuxtLink>
          </div>
          <!--  -->
          <div class="col d-flex flex-column text-center align-items-center">
            <img src="@/src/assets/img-venue-fulham.png" alt="img-venue-fulham.png"
              class="rounded-circle border border-info border-5 mb-4">
            <span class="text-primary">Football Classes in </span>
            <h4 class="text-primary font-custom mt-2 mb-3">Fulham</h4>
            <p class="text-muted">Football classes are held at the Fulham academy on Saturday afternoons for boys and
              girls aged 4-12.</p>
            <NuxtLink to="/about/london-venues" class="btn btn-warning text-primary rounded-5 px-4 mt-3">
              <strong>Learn More</strong>
            </NuxtLink>
          </div>
          <!--  -->
          <div class="col d-flex flex-column text-center align-items-center">
            <img src="@/src/assets/img-venue-haggerston.png" alt="img-venue-haggerston.png"
              class="rounded-circle border border-info border-5 mb-4">
            <span class="text-primary">Football Classes in </span>
            <h4 class="text-primary font-custom mt-2 mb-3">Haggerston</h4>
            <p class="text-muted">Football classes are held at the Haggerston academy on Sunday afternoons for boys and
              girls aged 4-12.</p>
            <NuxtLink to="/about/london-venues" class="btn btn-warning text-primary rounded-5 px-4 mt-3">
              <strong>Learn More</strong>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Reviews  -->
    <WebsiteReviewsSection />

    <!-- FAQs  -->
    <WebsiteFAQForLondonVenues />


  </NuxtLayout>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/web/web.scss';


header.bg-header-london-venues {
  background-image: url('@/src/assets/bg-header-london-venues.png');
  min-height: 75vh;
  padding: 2rem 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  @extend .bg-success;
}
</style>