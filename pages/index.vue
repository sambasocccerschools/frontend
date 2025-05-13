<script setup lang="ts">
const layout = 'weblayout'
// import Socials from '@/components/website/Socials.vue'
// import BlogPosts from '@/components/website/BlogPosts.vue'

import { ref } from 'vue'
import RoundedButton from '@/components/website/RoundedButton.vue'
import iconInsta from '@/src/assets/icons/icon-insta.svg'
</script>

<template>
  <NuxtLayout :name="layout">
    <header
      class="header d-flex flex-column align-items-center justify-content-center text-center text-white"
    >
      <div class="banner-slider container">
        <h1 class="font-custom text-slider fsm-70">
          Play with<br /><em
            class="subtext-slider mt-18 fsm-116"
            style="line-height: 70px"
            >Passion</em
          >
        </h1>
        <p class="lead mt-30">
          Football training built on flair, confidence and Brazilian rhythm
          since 2009.
        </p>
        <NuxtLink
          to="/"
          class="btn btn-info rounded-5 text-light btn-slider mtm-25 mt-40"
          >Book a free trial</NuxtLink
        >
      </div>
    </header>
    <div class="bg-gray-texture">
      <section class="find-nearest-class">
        <div class="container">
          <div class="col-sm-10 mx-auto">
            <WebsiteFindYourNearestClass />
          </div>
        </div>
      </section>
      <!-- <div class="bg-player container mobile-bg-player">
        <div class="row">
          <div class="col-sm-7 offset-sm-4 text-center">
            <h2 class="display-4 text-primary font-custom">
              <strong>
                Building confidence, mastering skills - doing it in
                <span class="decorated-word position-relative d-inline-block">
                  <em class="text-success">Style</em>
                  <img
                    src="@/src/assets/home/decoration-text.svg"
                    alt=""
                    class="decoration-svg position-absolute"
                  />
                </span>
              </strong>
            </h2>

            <p class="lead text-muted">
              Samba Soccer Schools - more than just football coaching. Improving
              your child’s social skills and confidence, developing technique,
              flair, and footballing ability through our unique Brazilian style.
            </p>
          </div>
        </div>
      </div> -->

      <div class="mtm--80 container">
        <div class="row align-items-center flex-column-reverse flex-md-row">
          <!-- Columna del niño -->
          <div class="col-md-6 mb-md-0 px-md-1 ml-100 mlm-0 mb-4 text-center">
            <img
              src="@/src/assets/player-pointing.png"
              alt="Character"
              class="img-fluid player-img mbm--70"
            />
          </div>

          <!-- Columna del texto -->
          <div class="col-md-6 text-md-start px-md-1 ml--130 mlm-0 text-center">
            <div class="w-515">
              <h2
                class="text-primary font-custom fw-bold section-title lh-62-5 fsm-37 lhm-47 text-center"
              >
                Building confidence, mastering skills -
                <br class="d-none d-md-block" />
                doing it in
                <span class="decorated-word position-relative d-inline-block">
                  <em class="text-success fsm-37 lhm-47">STYLE</em>
                  <img
                    src="@/src/assets/home/decoration-text.svg"
                    alt=""
                    class="decoration-svg position-absolute"
                  />
                </span>
              </h2>

              <p
                class="lead text-muted text-content fsm-14 lhm-24 mt-3 text-center"
              >
                Samba Soccer Schools - more than just football coaching. We
                improve your child’s social skills and confidence, developing
                technique, flair, and footballing ability through our unique
                Brazilian style.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Our Services  -->
    <section class="bg-home-services py-140 pmy-60 mtm--120">
      <div class="container text-center">
        <div class="my-5">
          <h2 class="h1 mb-4">
            <span class="text-light font-custom section-title">Our </span>

            <span class="decorated-word position-relative d-inline-block">
              <em class="text-warning marker-text">services</em>
              <img
                src="@/src/assets/home/text-decoration-services.png"
                alt=""
                class="decoration-svg-services position-absolute"
              />
            </span>
          </h2>
          <div class="row">
            <div class="col-10 mx-auto">
              <p class="text-light lead text-content">
                Take your pick. We offer football training in London with weekly
                classes, one-to-one sessions, holiday camps, and birthday
                parties, all set to a jumping samba beat. 
              </p>
            </div>
          </div>
        </div>

        <!-- Box - services -->
        <div
          class="row row-cols-1 row-cols-md-2 g-3 d-none d-md-flex mb-5 pb-4"
        >
          <!-- Service WEEKLY Classes -->
          <div class="col order-md-1 order-1">
            <div class="flip-card h-100">
              <div class="flip-card-inner h-100">
                <!-- FRONT -->
                <div class="flip-card-front h-100">
                  <NuxtLink
                    to="services/weekly-classes"
                    class="bg-warning service-card bg-weekly-classes h-100 rounded-4 d-block overflow-hidden"
                  >
                    <div class="row g-0 h-100 w-100 align-items-center sub-row">
                      <!-- Imagen -->
                      <div
                        class="col-7 col-md-5 weekly-image-wrapper p-lg-3 p-1"
                      >
                        <img
                          src="@/src/assets/home/img-weekly-services-classes.png"
                          alt="Weekly Classes"
                          class="weekly-image img-fluid"
                        />
                      </div>

                      <!-- Texto -->
                      <div
                        class="col-6 col-md-7 d-flex flex-column align-items-start p-lg-3 p-0"
                      >
                        <h2 class="text-service mb-3 text-start">
                          <em>WEEKLY</em><br />
                          classes
                        </h2>
                        <span class="btn btn-md btn-primary rounded-5 px-4"
                          >More info</span
                        >
                      </div>
                    </div>
                  </NuxtLink>
                </div>

                <!-- BACK -->
                <div
                  class="flip-card-back flip-card-back-text bg-weekly-classes-hover d-flex flex-column justify-content-center align-items-center rounded-4 p-4 text-center text-white"
                >
                  <p>
                    We offer weekly football classes where your child will learn
                    everything from the basics to those flicks and tricks the
                    Brazilians are known for. Classes are split into four
                    ability levels meaning there’s something for everybody.
                  </p>
                  <NuxtLink
                    to="services/weekly-classes"
                    class="btn btn-md btn-primary rounded-5 mt-3"
                  >
                    More info
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>

          <!-- Services Holiday Camps -->
          <div class="col order-md-2 order-3">
            <div class="flip-card h-100">
              <div class="flip-card-inner h-100">
                <!-- FRONT -->
                <div class="flip-card-front h-100">
                  <NuxtLink
                    to="services/holiday-camps"
                    class="service-card rounded-4 bg-success bg-holiday-camps d-flex h-100 flex-wrap overflow-hidden"
                  >
                    <!-- Texto -->
                    <div
                      class="col-12 col-md-6 d-flex flex-column align-items-start p-4"
                    >
                      <h2 class="text-service mb-3 text-start">
                        <em>Holiday</em> <br />Camps
                      </h2>
                      <span class="btn btn-md btn-primary rounded-5 px-4">
                        More info
                      </span>
                    </div>

                    <!-- Imagen -->
                    <div class="col-12 col-md-6 p-3">
                      <img
                        src="@/src/assets/home/img-holiday-camps.png"
                        alt="Holiday Camps"
                        class="img-fluid"
                      />
                    </div>
                  </NuxtLink>
                </div>

                <!-- BACK -->
                <div
                  class="flip-card-back flip-card-back-text bg-holiday-camps-hover d-flex flex-column justify-content-center align-items-center rounded-4 p-4 text-center text-white"
                >
                  <p>
                    Packed with skills, fun activities, and plenty of laughs,
                    our football camps provide your child with a massive burst
                    of confidence and increase in skill set over a short period.
                    A great way to make new friends and stay social during that
                    time away from school.
                  </p>
                  <NuxtLink
                    to="services/holiday-camps"
                    class="btn btn-md btn-primary rounded-5 mt-3"
                  >
                    More info
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>

          <!-- Services one to one Training -->
          <div class="col order-md-3 order-2">
            <div class="flip-card h-100">
              <div class="flip-card-inner h-100">
                <!-- FRONT -->
                <div class="flip-card-front h-100">
                  <NuxtLink
                    to="services/one-to-one-training"
                    class="service-card rounded-4 bg-one-to-one"
                  >
                    <!-- Columna izquierda: Texto + botón -->
                    <div
                      class="col-12 col-md-6 d-flex flex-column align-items-start p-4"
                    >
                      <!-- Aquí puedes agregar el contenido del texto -->
                    </div>

                    <!-- Columna derecha vacía -->
                    <div class="col-12 col-md-6 p-3"></div>
                  </NuxtLink>
                </div>

                <!-- BACK -->
                <div
                  class="flip-card-back flip-card-back-text bg-one-to-one-hover d-flex flex-column justify-content-center align-items-center rounded-4 p-4 text-center text-white"
                >
                  <p>
                    For those who want to rapidly improve their skills and
                    technique. Whether a complete beginner or an academy
                    prospect, a private one-to-one football training program can
                    be scheduled to work around you, with each session tailored
                    specifically to your child.
                  </p>
                  <NuxtLink
                    to="services/one-to-one-training"
                    class="btn btn-md btn-light rounded-5 mt-3 text-black"
                  >
                    More info
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>

          <!-- Service Birthday Parties -->
          <div class="col order-md-4 order-4">
            <div class="flip-card h-100">
              <div class="flip-card-inner h-100">
                <!-- FRONT -->
                <div class="flip-card-front h-100">
                  <NuxtLink
                    to="services/birthday-parties"
                    class="service-card rounded-4 bg-info bg-Birthday"
                  >
                    <!-- Columna izquierda vacía -->
                    <div class="col-12 col-md-5 p-3"></div>

                    <!-- Columna derecha: texto + botón -->
                    <div
                      class="col-12 col-md-7 d-flex flex-column align-items-start p-4"
                    >
                      <h2 class="text-service color-yellow mb-3 text-start">
                        Birthday
                        <em>Parties</em><br />
                      </h2>
                      <span
                        class="btn btn-md rounded-5 bg-yellow px-4 text-black"
                      >
                        More info
                      </span>
                    </div>
                  </NuxtLink>
                </div>

                <!-- BACK -->
                <div
                  class="flip-card-back flip-card-back-text bg-Birthday-hover d-flex flex-column justify-content-center align-items-center rounded-4 p-4 text-center text-white"
                >
                  <p>
                    Games, competitions, and prizes all played against the
                    backdrop of swinging carnival music. Samba Soccer Schools
                    birthday parties mix fun and excitement with football
                    activities led by one of our dedicated coaches.
                  </p>
                  <NuxtLink
                    to="services/birthday-parties"
                    class="btn btn-md btn-light rounded-5 mt-3 text-black"
                  >
                    More info
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Box services mobile -->
        <div class="row row-cols-1 g-3 d-block d-md-none mb-5 pb-4">
          <!-- WEEKLY Classes -->
          <div class="col">
            <div class="flip-card h-100">
              <div class="flip-card-inner h-100">
                <div class="">
                  <img
                    src="@/src/assets/home/weekly-classes.png"
                    alt="Weekly Classes"
                    width="377"
                    height="220.624"
                    class="img-fluid rounded-4"
                  />
                </div>
                <div
                  class="flip-card-back flip-card-back-text bg-weekly-classes-hover d-flex flex-column justify-content-center align-items-center rounded-4 p-4 text-center text-white"
                >
                  <p class="fsm-14 content-text-services mlb-10">
                    We offer weekly football classes where your child will learn
                    everything from the basics to those flicks and tricks the
                    Brazilians are known for. Classes are split into four
                    ability levels meaning there’s something for everybody.
                  </p>
                  <NuxtLink
                    to="/services/weekly-classes"
                    class="btn btn-md btn-primary bg-warning rounded-5 color-navy mtm-0 pym-8 pxm-16 mt-3"
                  >
                    More info
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>

          <!-- ONE TO ONE Training -->
          <div class="col">
            <div class="flip-card h-100">
              <div class="flip-card-inner h-100">
                <div class="">
                  <img
                    src="@/src/assets/home/one to one training.png"
                    alt="One to One Training"
                    width="377"
                    height="220.624"
                    class="img-fluid rounded-4"
                  />
                </div>
                <div
                  class="flip-card-back flip-card-back-text bg-one-to-one-hover d-flex flex-column justify-content-center align-items-center rounded-4 p-4 text-center text-white"
                >
                  <p class="fsm-14 content-text-services mlb-10">
                    For those who want to rapidly improve their skills and
                    technique. Whether a complete beginner or an academy
                    prospect, a private one-to-one football training program can
                    be scheduled to work around you, with each session tailored
                    specifically to your child.
                  </p>
                  <NuxtLink
                    to="/services/one-to-one-training"
                    class="btn btn-md btn-light rounded-5 mtm-0 pym-8 pxm-16 mt-3 text-black"
                  >
                    More info
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>

          <!-- HOLIDAY CAMPS -->
          <div class="col">
            <div class="flip-card h-100">
              <div class="flip-card-inner h-100">
                <div class="">
                  <img
                    src="@/src/assets/home/holiday-camps.png"
                    alt="Holiday Camps"
                    width="377"
                    height="220.624"
                    class="img-fluid rounded-4"
                  />
                </div>
                <div
                  class="flip-card-back flip-card-back-text bg-holiday-camps-hover d-flex flex-column justify-content-center align-items-center rounded-4 p-4 text-center text-white"
                >
                  <p class="fsm-14 content-text-services mlb-10">
                    Packed with skills, fun activities, and plenty of laughs,
                    our football camps provide your child with a massive burst
                    of confidence and increase in skill set over a short period.
                    A great way to make new friends and stay social during that
                    time away from school.
                  </p>
                  <NuxtLink
                    to="/services/holiday-camps"
                    class="btn btn-md btn-primary rounded-5 mtm-0 pym-8 pxm-16 mt-3"
                  >
                    More info
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>

          <!-- BIRTHDAY PARTIES -->
          <div class="col">
            <div class="flip-card h-100">
              <div class="flip-card-inner h-100">
                <div class="">
                  <img
                    src="@/src/assets/home/birthday-parties.png"
                    alt="Birthday Parties"
                    width="377"
                    height="220.624"
                    class="img-fluid rounded-4"
                  />
                </div>
                <div
                  class="flip-card-back flip-card-back-text bg-Birthday-hover d-flex flex-column justify-content-center align-items-center rounded-4 p-4 text-center text-white"
                >
                  <p class="fsm-14 content-text-services mlb-10">
                    Games, competitions, and prizes all played against the
                    backdrop of swinging carnival music. Samba Soccer Schools
                    birthday parties mix fun and excitement with football
                    activities led by one of our dedicated coaches.
                  </p>
                  <NuxtLink
                    to="/services/birthday-parties"
                    class="btn btn-md btn-warning rounded-5 mtm-0 pym-8 pxm-16 mt-3 text-black"
                  >
                    More info
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Reviews  -->
    <WebsiteReviewsSection />
    <!-- Book a Free Trial  -->
    <section class="bg-free-trial py-5">
      <div class="container my-2">
        <div class="card rounded-5">
          <div class="card-body px-4 py-5 text-center">
            <!-- Título: en móvil va segundo, en desktop sigue primero -->
            <h3
              class="h1 text-primary fsm-48 order-sm-1 d-none d-md-block order-2"
            >
              <em>Book a Free Trial</em>
            </h3>

            <div
              class="d-sm-flex align-items-center text-sm-start flex-wrap text-center"
            >
              <!-- Imagen izquierda -->
              <div class="col-sm-3 order-1">
                <img
                  src="@/src/assets/img-book-a-trial-1.png"
                  alt=""
                  class="img-fluid mb-sm-0 mb-3"
                />
              </div>

              <h3
                class="h1 text-primary fsm-48 order-sm-1 d-block d-md-none order-2"
              >
                <em>Book a Free Trial</em>
              </h3>
              <!-- Texto -->
              <div class="col order-3">
                <p class="lead text-content color-neutral">
                  There are countless football schools around, but we like to
                  think we’re a little different. This is football training
                  where flair, confidence, and close ball control take centre
                  stage alongside a samba rhythm.<br /><br />
                  Booking a free trial only takes two minutes, and with venues
                  across London, there’s probably one right on your doorstep.
                </p>
              </div>

              <!-- Imagen derecha (solo visible en sm y arriba) -->
              <div class="col-sm-3 order-sm-4 d-none d-sm-block">
                <img
                  src="@/src/assets/img-book-a-trial-2.png"
                  alt=""
                  class="img-fluid"
                />
              </div>
            </div>

            <!-- Botón -->
            <NuxtLink
              to="/book/free-trial"
              class="btn btn-info btn-lg rounded-5 text-light order-4 mt-4 px-4"
            >
              <span class="text-semibold">Book a FREE Trial Now</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
    <!-- What Makes Samba Soccer Schools Different -->
    <section class="py-5 text-center">
      <div class="container my-5">
        <h2 class="text-primary h1 text-semibold text-center">
          <span class="font-custom section-title">What makes Samba Soccer</span
          ><br />
          <span class="position-relative d-inline-block">
            <em class="text-success marker-text">different?</em>
            <img
              src="@/src/assets/home/decoration-text-different.svg"
              alt=""
              class="decoration-svg-different position-absolute"
            />
          </span>
        </h2>

        <div class="row mt-40">
          <div class="col-sm-9 mx-auto">
            <p class="text-muted lead text-content">
              There are hundreds of soccer schools and football academies out
              <br class="d-none d-md-block" />
              there, so what makes us so special?
            </p>
          </div>
        </div>
        <div class="row row-cols-1 row-cols-sm-3 gx-sm-5 mt-5">
          <div class="col">
            <img
              src="@/src/assets/img-brazilian-methodology.png"
              class="img-fluid"
              alt="Brazilian Methodology"
            />
            <h3 class="text-primary font-custom">Brazilian Methodology</h3>
            <p class="text-muted text-normal text-content-2">
              <small
                >At Samba Soccer Schools, we play football with style, the way
                it was supposed to be played - the Brazilian way. We believe
                coaching should focus on mastering close ball control and
                technique while teaching children to play with flair, freedom,
                and huge smiles on their faces. </small
              >
            </p>
          </div>
          <div class="col">
            <img
              src="@/src/assets/img-samba-music.png"
              class="img-fluid"
              alt="Samba Music"
            />
            <h3 class="text-primary font-custom">Samba Music</h3>
            <p class="text-muted text-normal text-content-2">
              <small
                >All of our classes come complete with a bouncing samba
                soundtrack. It’s a lot of fun, but also, research has shown that
                footballers perform significantly better as a team when
                listening to the same piece of music. It also promotes a sense
                of rhythm in children’s skills. </small
              >
            </p>
          </div>
          <div class="col">
            <img
              src="@/src/assets/img-skills-ball.png"
              class="img-fluid"
              alt="Skills Ball"
            />
            <h3 class="text-primary font-custom">Skills Ball</h3>
            <p class="text-muted text-normal text-content-2">
              <small
                >Ever wondered why Brazilians have such exquisite touch?
                Children in Brazil often play with smaller balls than we’re used
                to here, which encourages better close control. At Samba Soccer
                Schools, we do the same to help your children learn the same
                kind of skills as Pele, Ronaldo, and Neymar. </small
              >
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- Image Gallery  -->
    <section class="bg-img-gallery py-5">
      <div class="container my-4 text-center">
        <h2 class="h1 font-custom text-primary section-title">Image Gallery</h2>
        <p class="lead text-muted text-content">
          Our classes are all about fun, flicks & tricks - some of which we
          manage to catch on camera! Check out<br class="d-none d-md-block" />
          the latest images from our training session across London.
        </p>
        <div class="row row-cols-2 row-cols-md-3 g-3 g-md-5 mb-5 mt-4">
          <img
            src="@/src/assets/img-img-gallery-1.png"
            alt="Image Gallery 1"
            class="col"
          />
          <img
            src="@/src/assets/img-img-gallery-1.png"
            alt="Image Gallery 1"
            class="col"
          />
          <img
            src="@/src/assets/img-img-gallery-1.png"
            alt="Image Gallery 1"
            class="col"
          />
          <img
            src="@/src/assets/img-img-gallery-1.png"
            alt="Image Gallery 1"
            class="col"
          />
          <img
            src="@/src/assets/img-img-gallery-1.png"
            alt="Image Gallery 1"
            class="col"
          />
          <img
            src="@/src/assets/img-img-gallery-1.png"
            alt="Image Gallery 1"
            class="col"
          />
        </div>
        <div
          class="card rounded-5 container mt-5 border-0 text-start shadow-lg"
        >
          <div class="card-body px-sm-5 py-5">
            <div class="row">
              <div class="col-sm-7">
                <h3 class="text-primary font-custom fs-40 fb-700">
                  Follow us<br class="d-none d-md-block" />
                  on Instagram
                </h3>
                <p class="text-muted text-content mb-20 mt-20">
                  Relive every moment. Our photographers are always on the
                  lookout for the best flicks, tricks and celebrations so you
                  can add it to the family album. Follow the action from our
                  kids football training in London by subscribing to our
                  Instagram.
                </p>

                <RoundedButton
                  target="_blank"
                  to="https://www.instagram.com/sambasoccer_uk/"
                  label="Follow on Instagram"
                  :icon="iconInsta"
                  backgroundColor="#042C89"
                  textColor="#ffffff"
                  class="w-100 w-md-auto mbm-20 w"
                />
              </div>
              <div class="col">
                <div class="row row-cols-3 g-3">
                  <img
                    src="@/src/assets/img-img-gallery-1.png"
                    alt="Image Gallery 1"
                    class="col"
                  />
                  <img
                    src="@/src/assets/img-img-gallery-1.png"
                    alt="Image Gallery 1"
                    class="col"
                  />
                  <img
                    src="@/src/assets/img-img-gallery-1.png"
                    alt="Image Gallery 1"
                    class="col"
                  />
                  <img
                    src="@/src/assets/img-img-gallery-1.png"
                    alt="Image Gallery 1"
                    class="col"
                  />
                  <img
                    src="@/src/assets/img-img-gallery-1.png"
                    alt="Image Gallery 1"
                    class="col"
                  />
                  <img
                    src="@/src/assets/img-img-gallery-1.png"
                    alt="Image Gallery 1"
                    class="col"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <WebsiteBlogPosts />
  </NuxtLayout>

  <link
    href="https://fonts.googleapis.com/css2?family=Roam:wght@400&display=swap"
    rel="stylesheet"
  />
</template>

<style lang="scss" scoped>
.header {
  background-image: url('@/src/assets/homepage-header-bg.png');
  background-size: cover;
  height: 90vh;
  min-height: 800px;
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
  height: 21rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

section {
  &.find-nearest-class {
    transform: translateY(-110px);
  }

  &.bg-free-trial {
    background-image: url('@/src/assets/home/bg-book-a-free-trial.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #00a3df;
  }

  &.bg-img-gallery {
    background-image: url('@/src/assets/bg-website-gray-texture.png');
    background-repeat: repeat;
    background-color: #f8f8f8;
  }
}

.bg-home-services {
  background-color: #f6f7f8;
  position: relative;
  z-index: 3;
  background-image: url('@/src/assets/home/bg-services.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  min-height: 600px; 
}

.bg-weekly-classes {
  background-image: url('@/src/assets/home/bg-weekly-services-classes.png');
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: top center;
}

.bg-weekly-classes-hover {
  background-image: url('@/src/assets/home/Weekly-classes-hover.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.bg-holiday-camps {
  background-image: url('@/src/assets/home/bg-holiday-camps.png');
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: bottom right;
}

.bg-holiday-camps-hover {
  background-image: url('@/src/assets/home/Holiday-Camps-hover.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.bg-one-to-one {
  background-image: url('@/src/assets/home/One-to-one-training.png');
  background-repeat: no-repeat;
  background-size: auto auto;
  background-position: cover;
}

.bg-one-to-one-hover {
  background-image: url('@/src/assets/home/One-to-one training-Hover.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.bg-Birthday {
  background-image: url('@/src/assets/home/bg-birthday.png');
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: cover;
}

.bg-Birthday-hover {
  background-image: url('@/src/assets/home/Birthday-Parties-hover.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.py-140 {
  padding: 140px 0px;
}

.text-service {
  font-family: 'Recline', sans-serif;
  font-weight: 400;
  font-size: 50px;
  line-height: 48px;
  letter-spacing: 0%;
  vertical-align: middle;
  color: #042c89;
}

.color-yellow {
  color: #ffde14;
}

.bg-yellow {
  background-color: #ffde14;
}

.bg-yellow:hover {
  background-color: #ffde14;
}

/* Hover card animation */
.flip-card {
  perspective: 1000px;
  position: relative;
  height: 100%;
  min-height: 20rem;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 1rem;
  overflow: hidden;
  top: 0;
  left: 0;
}

.flip-card-front {
  z-index: 2;
}

.flip-card-back {
  transform: rotateY(180deg);
  z-index: 1;
}

.flip-card-back-text {
  font-family: Recline;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
}

.decorated-word {
  line-height: 1;
}

.decoration-svg {
  bottom: -0.2em;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 120px;
  height: auto;
}

.decoration-svg-services {
  bottom: -0.2em;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 120px;
  height: auto;
}

.decoration-svg-different {
  bottom: -0.5em;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 250px;
  height: auto;
}

.btn-slider {
  color: #fff;
  font-family: 'Permanent Marker';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px; 
  padding: 16px 24px;
}

.text-slider {
  color: #fff;
  text-align: center;
  font-family: Recline;
  font-size: 100px;
  font-style: normal;
  font-weight: 700;
  line-height: 109px;
}

.banner-slider .subtext-slider {
  color: #fff;
  text-align: center;
  font-family: Roam;
  font-size: 160px;
  font-style: normal;
  font-weight: 400;
  line-height: 109px; 
  letter-spacing: 9.6px;
  text-transform: uppercase;
}

.banner-slider .lead {
  color: #fff;
  text-align: center;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 14px; /* 70% */
}

.text-content {
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px; /* 187.5% */
}

.marker-text {
  font-family: 'Permanent Marker';
  font-size: 56px;
  font-style: normal;
  font-weight: 400 !important;
  line-height: 72px;
}
/* Mobile */

/* Media query para dispositivos móviles a partir de 768px */
@media (max-width: 767px) {
  /* Hader */
  .header {
    height: 100vh;
    background-size: cover;
    background-position: center;
  }

  /* Estilos para la clase .lead */
  .banner-slider .lead {
    color: #fff;
    text-align: center;
    font-family: Poppins, sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px; /* 140% */
  }

  /* Estilos para la clase .display-2 (Play with) */
  .banner-slider .text-slider {
    color: #fff;
    text-align: center;
    font-family: Recline, sans-serif;
    font-size: 72px;
    font-style: normal;
    font-weight: 700;
    line-height: 72px; /* 100% */
  }

  /* Estilos para la clase .display-1 (Passion) */
  .banner-slider .display-1 {
    color: #fff;
    text-align: center;
    font-family: 'Roam', sans-serif;
    font-size: 116px;
    font-style: normal;
    font-weight: 400;
    line-height: 109px;
    letter-spacing: 6.96px;
    text-transform: uppercase;
  }

  .mobile-bg-player {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url('@/src/assets/player-pointing.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom center;
    padding-bottom: 200px;
  }

  .mobile-bg-player .decorated-word {
    display: inline-block;
  }

  .mobile-bg-player .decoration-svg {
    bottom: -10px;
    left: 0;
    width: 100%;
    max-width: 100px;
  }

  section {
    &.find-nearest-class {
      transform: translateY(-150px);
    }
  }

  .bg-home-services {
    background-color: transparent !important;
    position: relative;
    z-index: 3;
    background-image: url('@/src/assets/home/bgm-services.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
    min-height: 600px;
  }

  .decoration-svg-services {
    bottom: -0.6em;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 120px;
    height: auto;
  }

  /* Services box */
  .weekly-image-wrapper,
  .weekly-image {
    width: 100%;
    max-width: 160px;
    box-sizing: border-box;
  }

  .text-service {
    font-size: 38px;
    line-height: 37.882px;
  }

  .sub-row {
    display: flex;
    justify-content: space-around;
    align-content: center;
  }

  .flip-card {
    min-height: auto;
  }

  .content-text-services {
    text-align: center;
    font-family: Recline;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
  }
}
</style>
