<script setup lang="ts">
const layout = 'weblayout'
</script>

<template>
  <NuxtLayout :name="layout">
    <header class="bg-header-holiday-camp bg-primary align-items-center d-flex">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <h1 class="display-2">
              <em class="text-light font-custom">Holiday</em><br />
              <strong class="text-primary"> Camps</strong>
            </h1>
            <NuxtLink
              to="#book"
              class="btn btn-primary text-light btn-lg rounded-5 mt-4 px-4"
              ><strong>Book Now</strong>
            </NuxtLink>
          </div>
        </div>
      </div>
    </header>
    <!-- Book your holiday football camp today  -->
    <section class="bg-primary py-5">
      <div class="container my-5 text-center" style="max-width: 850px">
        <h2 class="h1 text-light">
          <span
            ><span class="font-custom text-success">BOOK</span> Your
            Holiday</span
          >
          <br />
          <span> Football Camp Today!</span>
        </h2>
        <div class="col-sm-9 mx-auto">
          <p class="text-light mb-5">
            Our football camps are the perfect mix of fun, physical activity,
            and skills development - we know your child is going to love it. We
            have football camps across the London area - find your closest one
            by entering your postcode below. 
          </p>
          <WebsiteFindByPostCode />
        </div>
      </div>
    </section>
    <!--   -->
    <section class="py-5">
      <div class="my-5">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-4">
              <img
                src="@/src/assets/img-side-kick.png"
                style="max-width: 100%"
              />
            </div>
            <div class="col-12 col-md-8">
              <h2 class="display-5 text-primary font-custom">
                Keeping your child engaged and energised during the school break
                with Samba Soccer Schools
              </h2>
              <p class="text-muted">
                School holidays can be difficult for parents, and juggling work
                commitments with trying to keep children entertained is a
                frequent challenge.
              </p>
              <p class="text-muted">
                Football camps with Samba Soccer Schools are designed to take
                the pressure off parents by providing children of all abilities
                aged 4-12 with intensive football coaching during the school
                holidays.
              </p>
              <p class="text-muted">
                Our camps are a perfect way for children to stay healthy and
                active while away from school, improving their football skills,
                teaching them traditional Brazilian flair, and helping them make
                new friends. Sound good to you? Book now and see the dramatic
                change that a football camp can have first-hand.
              </p>

              <div>
                <NuxtLink
                  to="#book"
                  class="btn btn-success text-light btn-lg rounded-5 mt-4 px-4"
                  ><strong>Book Now</strong>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="">
      <div class="bg-primary-texture-with-top-wave-white">
        <div class="container">
          <div class="row mb-4">
            <div class="col-sm-9 mx-auto text-center">
              <h2 class="h1 font-custom text-light">
                The <em class="text-success">Benefits </em><br />
                of our football camps
              </h2>
            </div>
          </div>
        </div>
        <div class="container-fluid">
          <div class="row row-cols-sm-4 text-center">
            <div class="col-12 col-md-3">
              <img
                src="@/src/assets/img-boost-skills.png"
                alt=""
                class="img-fluid"
              />
              <h4 class="text-warning font-custom">Boost in skills</h4>
              <p class="text-light">
                <small
                  >Our football camp is an excellent opportunity for children to
                  supercharge their football skills quickly through personalised
                  expert coaching. We focus on the Brazilian way of playing,
                  which means flair, ball skills, close control, and a whole lot
                  of fun while doing it.   </small
                >
              </p>
            </div>
            <div class="col-12 col-md-3">
              <img
                src="@/src/assets/img-make-friends.png"
                alt=""
                class="img-fluid"
              />
              <h4 class="text-success font-custom">Make New Friends</h4>
              <p class="text-light">
                <small
                  >For many children, time away from their friends at school can
                  be tricky - but who says you need to be in school to make
                  friends? A wider friendship group can boost confidence and
                  self-esteem, and football camps are the perfect setting for
                  your child to strike up new friendships with those who share
                  the same passion for football. </small
                >
              </p>
            </div>
            <div class="col-12 col-md-3">
              <img src="@/src/assets/img-fun.png" alt="" class="img-fluid" />
              <h4 class="text-warning font-custom">Fun</h4>
              <p class="text-light">
                <small
                  >Every child needs to reset and have plenty of fun during the
                  holidays away from formal education. With exercises,
                  tournaments, prizes, and samba music, our camps are always
                  bubbling with excitement, and it’s great to see children
                  grinning from ear to ear. If only school could be this much
                  fun!</small
                >
              </p>
            </div>
            <div class="col-12 col-md-3">
              <img
                src="@/src/assets/img-physical-activity.png"
                alt=""
                class="img-fluid"
              />
              <h4 class="text-success font-custom">Physical Activity</h4>
              <p class="text-light">
                <small
                  >Children are leading increasingly sedentary lives, which can
                  lead to obesity, physical and mental health problems. Our
                  camps get children away from screens and provide that
                  much-needed physical activity that we all know is vital for a
                  healthy life. </small
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <WebsiteReviewsSection />

    <WebsiteFAQForHolidayCamps />

    <!-- Book  -->
    <section id="book" class="bg-book-holiday-camp py-5">
      <div class="container">
        <div class="row rounded-4 mx-2 bg-white py-5">
          <div class="col-12 col-md-8">
            <h4 class="h1 font-custom text-primary">
              Book Your
              <em class="text-success"
                >Holiday<br />
                Football camp
              </em>
              Today!
            </h4>
            <p class="text-muted mt-4">
              If you’re growing tired or frustrated at constantly thinking about
              what your child will do over the school break, let us take the
              reins. A holiday camp with Samba Soccer Schools is the perfect
              setting for any child who loves football. We provide entertaining,
              exercise-driven football camps where children can quickly boost
              their development and confidence while having the time of their
              lives.
            </p>
            <p class="text-primary">
              <small>
                Enter your postcode to find the nearest holiday camp to you.
              </small>
            </p>
          </div>
          <div class="col-12 col-md-4">
            <WebsiteFindByPostCode :no-border="true" :row="true" />
          </div>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');
.font-custom {
  font-family: 'Luckiest Guy', cursive;
  font-weight: 400;
  font-style: normal;
}

.bg-header-holiday-camp {
  background-image: url('@/src/assets/bg-holiday-camp.png');
  min-height: 80vh;
  background-size: cover;
  background-position: bottom center;
}

.bg-book-holiday-camp {
  background-color: #0dd180;
  background-image: url('@/src/assets/bg-book-holiday-camp.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

@media only screen and (max-width: 720px) {
  .bg-header-holiday-camp {
    background-image: url('@/src/assets/bg-holiday-camp-mobile.png');
    min-height: 80vh;
    background-size: cover;
    background-position: bottom center;
  }
}
</style>
