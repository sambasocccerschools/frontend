<script setup lang="ts">
const layout = 'weblayout'
</script>
<template>
  <NuxtLayout :name="layout">
    <header>
      <div class="container-fluid">
        <div class="row">
          <div
            class="col-sm-4 offset-sm-2 height-100 d-flex flex-column justify-content-center align-items-start"
          >
            <h1 class="title-services-hero fsm-72 text-start">
              <span class="marker-text-services">Weekly</span>
              <br class="" />
              <span class="normal-text">classes</span>
            </h1>

            <NuxtLink to="/book" class="btn btn-primary btn-lg rounded-5 px-5"
              ><strong>Book Now</strong>
            </NuxtLink>
          </div>
          <div class="col-sm-5 img-wrapper">
            <img
              src="@/src/assets/img-kids-picture-2.png"
              class="img-fluid"
              alt="Kids Samba Soccer Schools"
            />
          </div>
        </div>
      </div>
    </header>

    <!--  <section class="wave-top-left">
      <svg viewBox="0 0 1440 100" class="wave-svg-left">
        <path
          fill="#024aa8"
          d="M0,50 C360,-50 1080,150 1440,50 L1440,0 L0,0 Z"
        ></path>
      </svg>
    </section> -->

    <!-- <section class="wave-top">
      <svg viewBox="0 0 1440 100" class="wave-svg" preserveAspectRatio="none">
        <path
          fill="#024aa8"
          d="M0,50 C360,150 1080,-50 1440,50 L1440,0 L0,0 Z"
        ></path>
      </svg>
    </section> -->

    <!-- Why should I Choose  -->
    <section class="why-choose py-5">
      <div class="container my-5 text-center">
        <h2 class="title-services text-md-center fsm-48 lhm-52 text-start">
          <span class="title-services--marker text-light"
            >Why should I choose</span
          ><br class="" />
          <!-- Solo visible en desktop (md en adelante) -->
          <span class="d-none d-md-inline c-green">your Weekly Classes?</span>

          <!-- Solo visible en móvil (menor a md) -->
          <span class="d-inline d-md-none c-green"
            >your weekly football classes?</span
          >
        </h2>

        <div class="col-sm-9 mx-md-auto w-100 w-md-auto">
          <p
            class="text-light text-content text-md-center fsm-16 mbm-28 mb-5 text-start"
          >
            Where do we start? Weekly classes are an excellent way to develop
            skills on a consistent basis, build confidence, make friends,
            establish a healthy routine, and have a lot of fun along the way -
            but actions speak louder than words. Why not book a free trial class
            with Samba Soccer Schools, and we’ll be more than happy to show you
            what we do.  
          </p>
          <WebsiteFindYourNearestClass />
        </div>
      </div>
    </section>

    <!-- Weekly Fotball classes -->
    <section class="weekly-football-classes py-md-5 pt-5">
      <div class="">
        <div class="container">
          <div class="row">
            <!-- Imagen: aparece segundo en mobile, primero en desktop -->
            <div class="col-12 col-md-5 order-md-1 order-2">
              <img
                src="@/src/assets/img-player-head-football.png"
                alt=""
                class="img-fluid"
              />
            </div>

            <!-- Texto: aparece primero en mobile, segundo en desktop -->
            <div
              class="col-12 col-md-7 order-md-2 d-flex justify-content-center align-items-start flex-column order-1"
            >
              <h2 class="title-services fs-52 text-md-start text-start">
                Weekly football classes in London for
                <span class="text-info">kids aged 4 to 12</span>
              </h2>

              <div class="content mb-14 mt-14">
                <p class="text-muted text-content fsm-16">
                  The likes of Neymar and Ronaldinho don’t just appear overnight
                  - it takes consistent practice and training. Samba Soccer
                  Schools offers weekly football classes in London for children
                  aged four to twelve, split into four ability levels - meaning
                  nobody misses out.
                </p>
                <p class="text-muted text-content fsm-16">
                  Our approach is unique in that we place the Brazilian
                  footballing methodology at the core of everything we do. With
                  a skills-based program that focuses on close control, flair,
                  and freedom, your child can learn how to play attractive,
                  winning football with a huge smile on their face. 
                </p>
              </div>
              <NuxtLink
                to="/book"
                class="btn btn-info btn-lg text-light rounded-5 px-4"
                ><span class="text-semibold">Book a free trial</span></NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits -->
    <section class="bg-services-benefits pt-200 ptm-100 pbm-60 pb-80">
      <div class="container-fluid text-center">
        <div class="row">
          <h2 class="title-services mb-38 fsm-48">
            <span class="text-light">
              The
              <span
                class="c-green title-services--marker position-relative d-inline-block"
              >
                benefits

                <!-- SVG inline -->
                <svg
                  class="underline-svg position-absolute"
                  xmlns="http://www.w3.org/2000/svg"
                  width="166"
                  height="19"
                  viewBox="0 0 166 19"
                  fill="none"
                >
                  <path
                    d="M162.221 9.55863C159.032 7.62173 155.445 7.33047 152.017 6.13144C140.017 3.13144 133.76 2.50859 123.517 1.63237C106.379 0.202761 94.5174 1.26523 73.5174 4.13164C51.5175 7.13453 41.5174 8.74831 22.5831 11.4206C16.0467 12.5274 9.51034 13.4498 2.93411 14.3721C0.5 14.7135 1.00078 18.5 3.50087 18.5C25.1028 15.4102 41.532 12.3131 66.0008 9.5C97.0008 5.5002 120.501 4.13164 146.501 11C152.906 12.6919 158.001 15 160.945 14.9397C163.129 14.895 164.017 10.1314 162.221 9.55863Z"
                    fill="#00A6E3"
                  />
                </svg>
              </span>
              of our weekly<br class="d-none d-md-block" />
              football classes for kids
            </span>
          </h2>
        </div>
        <div class="row row-cols-sm-4 row-cols-1">
          <div class="col">
            <img
              src="@/src/assets/services/weekly-classes/builds-confidence.png"
              alt=""
              class="img-fluid uniform-img"
            />
            <h4 class="text-warning font-custom">Builds Confidence</h4>
            <p class="text-light">
              <small class="font-poppins"
                >Confident football comes with practice. Each class focuses on 1
                or 2 key skills, which are gradually integrated together over
                time to help develop confidence and ability.  </small
              >
            </p>
          </div>
          <div class="col">
            <img
              src="@/src/assets/services/weekly-classes/learn-new-skills.png"
              alt=""
              class="img-fluid uniform-img"
            />
            <h4 class="text-success font-custom">Learn New Skills</h4>
            <p class="text-light">
              <small class="font-poppins"
                >Kids want to learn the flicks and tricks that will wow their
                friends. Each week your child will learn skills straight out of
                the Brazilian football textbook that are fun, challenging, and
                dazzling. </small
              >
            </p>
          </div>
          <div class="col">
            <img
              src="@/src/assets/services/weekly-classes/make-new-friends.png"
              alt=""
              class="img-fluid uniform-img"
            />
            <h4 class="text-warning font-custom">Make New Friends</h4>
            <p class="text-light">
              <small class="font-poppins"
                >Weekly classes offer your child the chance to expand their
                friendship group while learning vital social skills such as
                respect, teamwork, and communication that go far beyond
                football. </small
              >
            </p>
          </div>
          <div class="col">
            <img
              src="@/src/assets/services/weekly-classes/have-fun.png"
              alt=""
              class="img-fluid uniform-img"
            />
            <h4 class="text-success font-custom">Have Fun</h4>
            <p class="text-light">
              <small class="font-poppins"
                >Playing football should be fun. For a huge number of children,
                they’re never happier than when they’re kicking a ball around
                with their friends. A weekly beaming smile is a joy to
                see. </small
              >
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Reviews  -->
    <div class="bg-gray-texture">
      <WebsiteReviewsSection />
    </div>

    <!-- FAQ -->
    <WebsiteFAQ />

    <!-- Four Levels -->
    <WebsiteFourLevels />

    <!-- Why  -->
    <WebsiteWhyShouldChoose />
  </NuxtLayout>
</template>
<style scoped lang="scss">
@import '@/assets/styles/web/web.scss';

header {
  background-color: $warning;
  // height: 70vh;
  background-image: url('@/src/assets/bg-weekly-classes.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

section {
  &.why-choose {
    background: $primary;
    background-image: url('@/src/assets/bg-primary-texture.svg');
    background-repeat: no-repeat;
    background-size: cover;
  }

  &.weekly-football-classes {
    background-color: white;
    background-image: url('@/src/assets/bg-website-gray-texture.png');
    background-repeat: repeat;
  }
}

.bg-player-playing {
  background-image: url('@/src/assets/img-player-head-football.png');
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: center left;
  padding-top: 4rem;
  padding-bottom: 8rem;
}

.bg-services-benefits {
  background-image: url('@/src/assets/services/weekly-classes/bg-benefits.png');
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  height: 100%;
}

.uniform-img {
  height: 205px;
  object-fit: contain;
}

.underline-svg {
  bottom: -15px;
  left: 76px;
  width: 70%;
  height: auto;
  z-index: 1;
}

.levels-scroll {
  @media (max-width: 767.98px) {
    overflow-x: auto;
    flex-wrap: nowrap;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 1rem;
    scroll-snap-type: x mandatory;

    button {
      min-width: 220px;
      scroll-snap-align: start;
    }
  }
}

@media (max-width: 767px) {
  /* Hader */
  header {
    height: 120vh !important;
    background-image: url('@/src/assets/services/weekly-classes/bg-hero-mobil.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    align-items: flex-end;
    text-align: center;
    display: flex;
    justify-content: flex-end;
    margin-top: -80px;
  }

  header .container-fluid .row {
    display: flex;
    flex-direction: column;

    .col-sm-4 {
      width: 100% !important;
      margin-left: 0px !important;
    }

    .img-wrapper {
      width: 100%;
    }
  }

  .img-wrapper img {
    max-height: 500px;
    object-fit: contain;
  }

  .weekly-football-classes img {
    z-index: 1;
    margin-bottom: -130px;
    position: relative;
    right: -70px;
  }

  .bg-services-benefits {
    background-image: url('@/src/assets/services/weekly-classes/bg-benefits-mobil.png');
    z-index: 2;
    position: relative;
  }
}

@media (max-width: 429px) {
  header {
    height: 160vh !important;
  }
}
</style>
