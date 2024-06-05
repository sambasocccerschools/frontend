<script setup lang="ts">
const layout = 'weblayout'
</script>

<template>
  <NuxtLayout :name="layout">
    <header class="bg-header-club align-items-center d-flex">
      <div class="container">
        <div class="row">
          <div class="col-sm-9">
            <h1 class="display-2 font-custom text-light">
              Looking for a <br />
              <em class="text-warning">Football Club?</em>
              <br />
              that really stands out?
            </h1>
            <NuxtLink
              to="#book"
              class="btn btn-primary btn-lg rounded-5 mt-4 px-4 py-3"
              ><strong>Enquire Now</strong>
            </NuxtLink>
          </div>
        </div>
      </div>
    </header>
    <!--   -->
    <section class="bg-blue-band py-5">
      <div class="container">
        <div class="row">
          <div class="col-sm-7 mx-auto">
            <div
              class="card rounded-5 border-top border-5 border-warning border-0 shadow-lg"
            >
              <div class="card-body px-5 pb-4 pt-0 text-center">
                <form action="/find-a-class">
                  <p class="h1 text-primary mx-3 pb-2 pt-4 text-center">
                    <em>Request a call back.</em>
                  </p>
                  <p class="font-custom text-primary lead mb-4">
                    Looking to take your child's game up a notch? Private 1-2-1
                    football classes are the perfect way to develop skills and
                    boost confidence in a short time.
                  </p>
                  <p class="text-muted">
                    Fill out the form at the bottom of the page and a member of
                    our team will discuss how we can help your child.
                  </p>
                  <button
                    class="btn btn-success w-75 btn-lg rounded-5 text-light"
                  >
                    Submit details
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-player-celebrating-football">
        <div class="container">
          <div class="row">
            <div class="col offset-sm-5">
              <h2 class="display-4 text-primary font-custom">
                Playing for glory with Samba Soccer FC
              </h2>
              <p class="text-muted">
                Are you looking for competitive football for your child? Think
                they’ve got what it takes to join one of the most exciting teams
                around? 
              </p>
              <p class="text-muted">
                We’ve got 13 years' worth of experience in football coaching, so
                we thought we’d better put it all to good use. Samba Soccer FC
                is our very own football club, with Brazilian style running
                through its veins.
              </p>
              <p class="text-muted">
                We offer weekly training and fortnightly matches for teams to
                compete in a FA Youth League 7v7. It’s competitive football but
                still fun - everybody is welcome to try out, but unfortunately,
                we can only pick those with exceptional football abilities.  
              </p>
              <p class="text-muted">
                Think your child has what it takes to join? 
              </p>
              <p class="text-muted">
                Book your child into a free open trial, and we’ll see what
                they’ve got. 
              </p>
              <NuxtLink
                to="/book?type=club"
                class="btn btn-lg btn-primary rounded-5 mt-4 px-4"
                ><strong>Book Now</strong>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-primary-texture-with-top-wave-white-inverted">
      <div class="container">
        <div class="row mb-4">
          <div class="col-sm-9 mx-auto text-center">
            <h2 class="h1 font-custom text-light">
              <em class="text-success">Benefits </em> of our One to One Football
              Training Classes
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
                >We focus on the close control and ball skills that have defined
                the Bazilan game. Each class is tailored specifically to your
                child and includes skills gradually built upon over time within
                a personalised syllabus. </small
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
            <img src="@/src/assets/img-have-fun.png" alt="" class="img-fluid" />
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
            <WebsiteFormFAQClub />
          </div>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.bg-blue-band {
  background-image: url('@/src/assets/bg-blue-band.svg');
  background-size: 100% auto;
  background-position: top center;
  background-repeat: no-repeat;
}

.bg-header-club {
  background-image: url('@/src/assets/bg-white-wave-bottom-inverted.svg'),
    url('@/src/assets/bg-header-club.png');
  min-height: 80vh;
  background-repeat: no-repeat;
  background-size:
    100% auto,
    cover;
  background-position:
    bottom center,
    bottom right;
}

.bg-player-celebrating-football {
  background-image: url('@/src/assets/bg-player-celebrating-floor.png');
  background-repeat: no-repeat;
  background-size: auto 35rem;
  background-position: 10% center;
  padding-top: 4rem;
  padding-bottom: 7rem;
  margin: 20rem 0 0;
}

.bg-how-much {
  background-image: url('@/src/assets/bg-primary-texture.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
</style>
