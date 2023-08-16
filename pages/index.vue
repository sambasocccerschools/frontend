<script setup lang="ts">
   const layout = "weblayout";
</script>

<template>
   <NuxtLayout :name="layout">
      <header class="header d-flex flex-column align-items-center justify-content-center text-white text-center">
         <h1><span class="display-3">Play with</span> <br><span class="display-1">Passion</span></h1>
         <p class="lead">Football training built on flair, confidence and Brazilian rhythm since 2009.</p>
         <NuxtLink to="/" class="btn btn-info rounded-5 px-4 text-light">Learn More</NuxtLink>
      </header>
      <div>
         <WebsiteFindYourNearestClass/>
         <div class="container bg-player">
            <div class="row">
               <div class="col-sm-7 offset-sm-4 text-center">
                  <h2 class="display-4 text-primary"><strong>Building confidence, mastering skills - doing it in Style</strong></h2>
                  <p class="lead text-muted">Samba Soccer Schools - more than just football coaching. Improving your child’s social skills and confidence, developing technique, flair, and footballing ability through our unique Brazilian style.</p>
               </div>
            </div>
         </div>
         <!-- Our Services  -->
         <section class="bg-primary py-5">
            <div class="container text-center">
               <h2 class="h1"><span class="text-light">Our</span> <span class="text-warning">Services</span></h2>
               <p class="text-light mb-5">Take your pick. We offer football training in London with weekly classes, one-to-one sessions, holiday camps, and birthday parties, all set to a jumping samba beat. </p>
               <div class="row row-cols-sm-2 row-cols-1 g-3">
                  <div class="col">
                     <NuxtLink to="services/weekly-classes" class="service-card rounded-4 bg-warning"><span><span>Weekly classes </span> <span>More info</span>  </span></NuxtLink>
                  </div>
                  <div class="col">
                     <NuxtLink to="services/holiday-camps" class="service-card rounded-4 bg-success"><span><span>Holiday Camps </span> <span>More info</span>  </span></NuxtLink>
                  </div>
                  <div class="col">
                     <NuxtLink to="services/one-to-one-training" class="service-card rounded-4 bg-primary-subtle"><span><span>One-to-one training </span> <span>More info</span>  </span></NuxtLink>
                  </div>
                  <div class="col">
                     <NuxtLink to="services/birthday-parties" class="service-card rounded-4 bg-info"><span><span>Birthday parties </span> <span>More info</span>  </span></NuxtLink>
                  </div>
               </div>
            </div>
         </section>
         <!-- Reviews  -->
         <section>
            <p>GOOGLE REVIEWS</p>
            <h2>Unforgettable Moments <br> since 2009</h2>
            <div>Reviews Go Here</div>
         </section>
         <!-- Book a Free Trial  -->
         <section class="">
            <div class="book-a-free-trial-card">
               <h3>Book a Free Trial</h3>
               <div class="book-a-free-trial-content">
                  <img src="@/src/assets/img-book-a-trial-1.png" alt=""/>
                  <p>There are countless football schools around, but we like to think we’re a little different. This is football training where flair, confidence, and close ball control take centre stage alongside a samba rhythm. 

Booking a free trial only takes two minutes, and with venues across London, there’s probably one right on your doorstep.</p>
                  <img src="@/src/assets/img-book-a-trial-2.png" alt=""/>
               </div>
               <NuxtLink to="services/book-a-free-trial">Book a FREE Trial Now</NuxtLink>
            </div>
         </section>
      </div>
   </NuxtLayout>
</template>

<style lang="scss" scoped>
   .header {
      background-image: url('@/src/assets/homepage-header-bg.png');
      background-size: cover;
      height: 70vh;
   }
   .bg-player {
      background-image: url('@/src/assets/player-pointing.png');
      background-repeat: no-repeat;
      background-size: auto 100%;
      background-position: center left;
      padding-top: 4rem;
      padding-bottom: 7rem;
   }
   .service-card {
      background: #dadada;
      height: 16rem;
      display: flex;
      align-items: center;
      justify-content: center;

   }
   section {
      &.book-a-free-trial {
         background-image: url('@/src/assets/bg-book-a-free-trial.svg');
      }
   }
</style>