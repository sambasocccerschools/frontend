<script setup lang="ts">
   const layout = "weblayout";
</script>

<template>
   <NuxtLayout :name="layout">
      <header class="header">
         <h1>Play with Passion</h1>
         <p>Football training built on flair, confidence and Brazilian rhythm since 2009.</p>
         <NuxtLink to="/">Learn More</NuxtLink>
      </header>
      <div>
         <WebsiteFindYourNearestClass/>
         <div>
            <img src="@/public/player-pointing.png" alt="Samba Soccer Schools Player - Building confidence, mastering skills">
            <div>
               <h2>Building confidence, mastering skills - doing it in Style</h2>
               <p>Samba Soccer Schools - more than just football coaching. Improving your child’s social skills and confidence, developing technique, flair, and footballing ability through our unique Brazilian style.</p>
            </div>
         </div>
         <!-- Our Services  -->
         <section>
            <h2>Our Services</h2>
            <p>Take your pick. We offer football training in London with weekly classes, one-to-one sessions, holiday camps, and birthday parties, all set to a jumping samba beat. </p>
            <div class="services">
               <NuxtLink to="services/weekly-classes" class="service-card"><span><span>Weekly classes </span> <span>More info</span>  </span></NuxtLink>
               <NuxtLink to="services/holiday-camps" class="service-card"><span><span>Holiday Camps </span> <span>More info</span>  </span></NuxtLink>
               <NuxtLink to="services/one-to-one-training" class="service-card"><span><span>One-to-one training </span> <span>More info</span>  </span></NuxtLink>
               <NuxtLink to="services/birthday-parties" class="service-card"><span><span>Birthday parties </span> <span>More info</span>  </span></NuxtLink>
            </div>
         </section>
         <!-- Reviews  -->
         <section>
            <p>GOOGLE REVIEWS</p>
            <h2>Unforgettable Moments <br> since 2009</h2>
            <div>Reviews Go Here</div>
         </section>
         <!-- Book a Free Trial  -->
         <section class="book-a-free-trial">
            <div class="book-a-free-trial-card">
               <h3>Book a Free Trial</h3>
               <div class="book-a-free-trial-content">
                  <img src="@/public/img-book-a-trial-1.png" alt=""/>
                  <p>There are countless football schools around, but we like to think we’re a little different. This is football training where flair, confidence, and close ball control take centre stage alongside a samba rhythm. 

Booking a free trial only takes two minutes, and with venues across London, there’s probably one right on your doorstep.</p>
                  <img src="@/public/img-book-a-trial-2.png" alt=""/>
               </div>
               <NuxtLink to="services/book-a-free-trial">Book a FREE Trial Now</NuxtLink>
            </div>
         </section>
      </div>
   </NuxtLayout>
</template>

<style lang="scss" scoped>
   .header {
      background-image: url('@/public/homepage-header-bg.png');
      background-size: cover;
      height: 80vh;
      color: #fff;
      font-size: 3rem;
      text-align: center;
      padding: 0 15rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
   }
   .services {
      text-align: center;
   }
   .service-card {
      background: #dadada;
      width: 30rem;
      height: 15rem;
      display: inline-block;
      margin: .5rem;
   }
   section {
      &.book-a-free-trial {
         background-image: url('@/public/bg-book-a-free-trial.svg');
         padding: 4rem 0;
         .book-a-free-trial-card {
            max-width: 1080px;
            background-color: #fff;
            margin: 4rem auto;

         }
         .book-a-free-trial-content {
            display: flex;

         }
      }
   }
</style>