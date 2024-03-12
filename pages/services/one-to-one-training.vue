<script setup lang="ts">
const layout = 'weblayout'
</script>

<template>
  <NuxtLayout :name="layout">
    <header class="bg-header-one-to-one bg-primary align-items-center d-flex">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <h1 class="display-2">
              <em class="text-warning">One-to-one</em>
              <span class="text-success font-custom"> training</span>
            </h1>
            <NuxtLink
              to="#book"
              class="btn btn-warning btn-lg rounded-5 mt-4 px-4"
              ><strong>Book Now</strong>
            </NuxtLink>
          </div>
        </div>
      </div>
    </header>
    <!--   -->
    <section class="bg-yellow-band py-5">
      <div class="container mt-5 pt-5">
        <div class="row">
          <div class="col-sm-8 mx-auto">
            <div
              class="card rounded-5 border-top border-5 border-warning border-0 shadow-lg"
            >
              <div class="card-body px-5 pt-0 text-center">
                <form action="/find-a-class">
                  <p class="h2 text-primary mx-3 pb-2 pt-4 text-center">
                    <em>Request a call back.</em>
                  </p>
                  <p class="font-custom text-primary">
                    Private 1-2-1 football classes are the perfect way to
                    develop skills and boost confidence in a short time.
                  </p>
                  <p class="text-muted">
                    Fill out the form at the bottom of the page and a member of
                    our team will discuss how we can help your child.
                  </p>
                  <button class="btn btn-success w-75 rounded-5 text-light">
                    Request a call back
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-player-holding-football my-5">
        <div class="container">
          <div class="row">
            <div class="col offset-sm-4">
              <h2 class="display-4 text-primary font-custom">
                1 to 1 Football coaching for kids aged 4-16 in London
              </h2>
              <p class="text-muted">
                Football is a team game, perfected by playing together, but work
                done on an individual level can make all the difference.
              </p>
              <p class="text-muted">
                Whether your child has professional potential that needs
                fine-tuning or simply loves football so much they just want to
                keep playing, private 1-2-1 football coaching with Samba Soccer
                Schools can quickly develop ability, establish greater
                confidence, and teach children how to play the beautiful game
                the Brazilian way, through flair and fun.
              </p>
              <p class="text-muted">
                We offer private 1-2-1 football classes in the London area for
                children aged between 4 and 16, with each session tailored
                specifically to the child’s level and personalised goals.
              </p>
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
                <em class="text-success">Benefits </em> of our One to One
                Football Training Classes
              </h2>
            </div>
          </div>
        </div>
        <div class="container-fluid">
          <div class="row row-cols-sm-4 text-center">
            <div class="col">
              <img
                src="@/src/assets/img-builds-confidence.png"
                alt=""
                class="img-fluid"
              />
              <h4 class="text-warning font-custom">Builds Confidence</h4>
              <p class="text-light">
                <small
                  >Children work best without distractions. Without the pressure
                  of having others around, your child can develop their
                  footballing confidence and mental maturity quickly and
                  efficiently through direct individual coaching. </small
                >
              </p>
            </div>
            <div class="col">
              <img
                src="@/src/assets/img-learn-new-skills.png"
                alt=""
                class="img-fluid"
              />
              <h4 class="text-success font-custom">Learn New Skills</h4>
              <p class="text-light">
                <small
                  >We focus on the close control and ball skills that have
                  defined the Bazilan game. Each class is tailored specifically
                  to your child and includes skills gradually built upon over
                  time within a personalised syllabus. </small
                >
              </p>
            </div>
            <div class="col">
              <img
                src="@/src/assets/img-make-new-friends.png"
                alt=""
                class="img-fluid"
              />
              <h4 class="text-warning font-custom">Physical Fitness</h4>
              <p class="text-light">
                <small
                  >This isn’t just a casual kickabout. Our classes place great
                  importance on high-intensity interval training to help develop
                  your child’s cardiovascular endurance, agility, speed, and
                  strength. </small
                >
              </p>
            </div>
            <div class="col">
              <img
                src="@/src/assets/img-have-fun.png"
                alt=""
                class="img-fluid"
              />
              <h4 class="text-success font-custom">Measurable Goals</h4>
              <p class="text-light">
                <small
                  >Through careful analysis of their game, we set your child
                  realistic and measurable goals each session, as well as
                  throughout their personalised syllabus to develop their game
                  step by step.   </small
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <WebsiteReviews />

    <WebsiteFAQOneToOne />

    <section class="bg-how-much text-light py-5 text-center">
      <div class="container">
        <div class="row">
          <div class="col-sm-10 mx-auto">
            <h2 class="h1 font-custom">
              <em class="text-info">How much </em> are your One to One football
              coaching sessions?
            </h2>
          </div>
        </div>
      </div>
    </section>

    <!-- Enquire  -->
    <section id="book" class="bg-enquire-splash py-5">
      <div class="container">
        <div class="row py-5">
          <div class="col-sm-4">
            <h4 class="h1 font-custom text-primary">
              1 on 1 Football Coaching
              <em class="text-success">Enquiry Form</em>
            </h4>
            <p class="text-muted mt-4">
              Like what you hear? Fill out the form below to show your interest
              and a member of our team will call you shortly.
            </p>
          </div>
          <div class="col offset-sm-1">
            <WebsiteFormFAQOneToOne />
          </div>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.bg-yellow-band {
  background-image: url('@/src/assets/bg-yellow-band.svg');
  background-size: 100% auto;
  background-position: top center;
  background-repeat: no-repeat;
}

.bg-header-one-to-one {
  background-image: url('@/src/assets/bg-header-one-to-one.png');
  min-height: 80vh;
  background-size: cover;
  background-position: bottom center;
}

.bg-player-holding-football {
  background-image: url('@/src/assets/bg-player-holding-football.png');
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: -10% center;
  padding-top: 4rem;
  padding-bottom: 7rem;
}

.bg-how-much {
  background-image: url('@/src/assets/bg-primary-texture.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
</style>
