<script setup lang="ts">
const layout = "weblayout";
   // import Socials from '@/components/website/Socials.vue'
   // import BlogPosts from '@/components/website/BlogPosts.vue'
</script>

<template>
   <NuxtLayout :name="layout">
      <header class="header d-flex flex-column align-items-center justify-content-center text-white text-center">
         <h1><span class="display-3">Play with</span> <br><em class="display-1">Passion</em></h1>
         <p class="lead">Football training built on flair, confidence and Brazilian rhythm since 2009.</p>
         <NuxtLink to="/" class="btn btn-info rounded-5 px-4 text-light">Learn More</NuxtLink>
      </header>
      <div class="bg-gray-texture">
         <section class="find-nearest-class">
            <div class="container">
               <div class="col-sm-10 mx-auto">
                  <WebsiteFindYourNearestClass />
               </div>
            </div>
         </section>
         <div class="container bg-player">
            <div class="row">
               <div class="col-sm-7 offset-sm-4 text-center">
                  <h2 class="display-4 text-primary font-custom"><strong>Building confidence, mastering skills - doing it
                        in
                        <em class="text-success">Style</em></strong></h2>
                  <p class="lead text-muted">Samba Soccer Schools - more than just football coaching. Improving your
                     child’s social skills and confidence, developing technique, flair, and footballing ability through our
                     unique Brazilian style.</p>
               </div>
            </div>
         </div>
      </div>

      <!-- Our Services  -->
      <section class="bg-primary py-5">
         <div class="container text-center">
            <div class="my-5">
               <h2 class="h1 mb-4"><span class="text-light font-custom">Our</span> <em class="text-warning">Services</em>
               </h2>
               <div class="row">
                  <div class="col-10 mx-auto">
                     <p class="text-light lead">Take your pick. We offer football training in London with weekly classes,
                        one-to-one sessions, holiday camps, and birthday parties, all set to a jumping samba beat. </p>
                  </div>
               </div>
            </div>
            <div class="row row-cols-sm-2 row-cols-1 g-3 mb-5 pb-4">
               <div class="col">
                  <NuxtLink to="services/weekly-classes" class="service-card rounded-4 bg-warning"><span
                        class="d-flex flex-column"><span class="display-6"><em>Weekly </em>classes </span> <span
                           class="btn btn-md btn-primary rounded-5 px-4">More info</span> </span></NuxtLink>
               </div>
               <div class="col">
                  <NuxtLink to="services/holiday-camps" class="service-card rounded-4 bg-success"><span
                        class="d-flex flex-column"><span class="display-6"><em>Holiday</em> Camps </span> <span
                           class="btn btn-md btn-primary rounded-5 px-4">More info</span> </span></NuxtLink>
               </div>
               <div class="col">
                  <NuxtLink to="services/one-to-one-training" class="service-card rounded-4 bg-primary-subtle"><span
                        class="d-flex flex-column"><span class="display-6"><em>One-to-one</em> training </span> <span
                           class="btn btn-md btn-success rounded-5 px-4 text-semibold">More info</span> </span></NuxtLink>
               </div>
               <div class="col">
                  <NuxtLink to="services/birthday-parties" class="service-card rounded-4 bg-info"><span
                        class="d-flex flex-column"><span class="display-6 text-warning"><span
                              class="font-custom">Birthday</span> <em>Parties</em> </span>
                        <span class="btn btn-md btn-warning rounded-5 px-4 text-semibold">More info</span> </span>
                  </NuxtLink>
               </div>
            </div>
         </div>
      </section>
      <!-- Reviews  -->
      <WebsiteReviewsSection />
      <!-- Book a Free Trial  -->
      <section class="py-5 bg-free-trial">
         <div class="container my-2">
            <div class="card rounded-5">
               <div class="card-body text-center px-4 py-5">
                  <h3 class="h1 text-primary"><em>Book a Free Trial</em></h3>
                  <div class="d-sm-flex">
                     <div class="col-sm-3">
                        <img src="@/src/assets/img-book-a-trial-1.png" alt="" class="img-fluid" />
                     </div>
                     <div class="col">
                        <p class="lead text-muted">There are countless football schools around, but we like to think we’re
                           a little different. This is football training where flair, confidence, and close ball control
                           take centre stage alongside a samba rhythm.
                           Booking a free trial only takes two minutes, and with venues across London, there’s probably one
                           right on your doorstep.</p>
                     </div>
                     <div class="col-sm-3">
                        <img src="@/src/assets/img-book-a-trial-2.png" alt="" class="img-fluid" />
                     </div>
                  </div>
                  <NuxtLink to="services/book-a-free-trial" class="btn btn-info btn-lg rounded-5 text-light px-4"><span
                        class="text-semibold">Book a FREE Trial Now</span></NuxtLink>
               </div>
            </div>
         </div>
      </section>
      <!-- What Makes Samba Soccer Schools Different -->
      <section class="py-5 text-center">
         <div class="container my-5">
            <h2 class="text-primary h1 text-semibold"><span class="font-custom">What makes Samba Soccer</span> <br> <em
                  class="text-success">DIFFERENT?</em></h2>
            <div class="row">
               <div class="col-sm-9 mx-auto">
                  <p class="text-muted lead">There are hundreds of soccer schools and football academies out there, so what
                     makes us so special?</p>
               </div>
            </div>
            <div class="row row-cols-sm-3 mt-5 gx-sm-5">
               <div class="col">
                  <img src="@/src/assets/img-brazilian-methodology.png" class="img-fluid" alt="Brazilian Methodology">
                  <h3 class="text-primary font-custom">Brazilian Methodology</h3>
                  <p class="text-muted text-normal"><small>At Samba Soccer Schools, we play football with style, the way it
                        was supposed to be played - the Brazilian way. We believe coaching should focus on mastering close
                        ball control and technique while teaching children to play with flair, freedom, and huge smiles on
                        their faces. </small></p>
               </div>
               <div class="col">
                  <img src="@/src/assets/img-samba-music.png" class="img-fluid" alt="Samba Music">
                  <h3 class="text-primary font-custom">Samba Music</h3>
                  <p class="text-muted text-normal"><small>All of our classes come complete with a bouncing samba
                        soundtrack. It’s a lot of fun, but also, research has shown that footballers perform significantly
                        better as a team when listening to the same piece of music. It also promotes a sense of rhythm in
                        children’s skills. </small></p>
               </div>
               <div class="col">
                  <img src="@/src/assets/img-skills-ball.png" class="img-fluid" alt="Skills Ball">
                  <h3 class="text-primary font-custom">Skills Ball</h3>
                  <p class="text-muted text-normal"><small>Ever wondered why Brazilians have such exquisite touch? Children
                        in Brazil often play with smaller balls than we’re used to here, which encourages better close
                        control. At Samba Soccer Schools, we do the same to help your children learn the same kind of
                        skills as Pele, Ronaldo, and Neymar. </small></p>
               </div>
            </div>
         </div>
      </section>
      <!-- Image Gallery  -->
      <section class="bg-img-gallery py-5">
         <div class="container text-center my-4">
            <h2 class="h1 font-custom text-primary">Image Gallery</h2>
            <p class="lead text-muted">Our classes are all about fun, flicks & tricks - some of which we manage to catch on
               camera! Check out the latest images from our training session across London.</p>
            <div class="row row-cols-3 g-5 mt-4 mb-5">
               <img src="@/src/assets/img-img-gallery-1.png" alt="Image Gallery 1" class="col">
               <img src="@/src/assets/img-img-gallery-1.png" alt="Image Gallery 1" class="col">
               <img src="@/src/assets/img-img-gallery-1.png" alt="Image Gallery 1" class="col">
               <img src="@/src/assets/img-img-gallery-1.png" alt="Image Gallery 1" class="col">
               <img src="@/src/assets/img-img-gallery-1.png" alt="Image Gallery 1" class="col">
               <img src="@/src/assets/img-img-gallery-1.png" alt="Image Gallery 1" class="col">
            </div>
            <div class="card border-0 rounded-5 shadow-lg mt-5 text-start">
               <div class="card-body px-sm-5 py-5">
                  <div class="row">
                     <div class="col-sm-7">
                        <h3 class="text-primary font-custom">Follow us on Instagram</h3>
                        <p class="text-muted">Relive every moment. Our photographers are always on the lookout for the best
                           flicks, tricks and celebrations so you can add it to the family album. Follow the action from
                           our kids football training in London by subscribing to our Instagram.</p>
                        <NuxtLink to="https://www.instagram.com/sambasoccer_uk/" target="_blank"
                           class="btn btn-primary rounded-5 px-4 btn-lg">Follow on Instagram</NuxtLink>
                     </div>
                     <div class="col">
                        <div class="row row-cols-3 g-3">
                           <img src="@/src/assets/img-img-gallery-1.png" alt="Image Gallery 1" class="col">
                           <img src="@/src/assets/img-img-gallery-1.png" alt="Image Gallery 1" class="col">
                           <img src="@/src/assets/img-img-gallery-1.png" alt="Image Gallery 1" class="col">
                           <img src="@/src/assets/img-img-gallery-1.png" alt="Image Gallery 1" class="col">
                           <img src="@/src/assets/img-img-gallery-1.png" alt="Image Gallery 1" class="col">
                           <img src="@/src/assets/img-img-gallery-1.png" alt="Image Gallery 1" class="col">
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <WebsiteBlogPosts />

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
   &.find-nearest-class {
      transform: translateY(-5rem)
   }

   &.bg-free-trial {
      background-image: url('@/src/assets/bg-yellow-green-texture.svg');
      background-repeat: no-repeat;
      background-size: cover;
   }

   &.bg-img-gallery {
      background-image: url('@/src/assets/bg-website-gray-texture.png');
      background-repeat: repeat;
      background-color: #F8F8F8;
   }
}
</style>