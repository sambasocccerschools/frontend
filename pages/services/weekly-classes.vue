<script setup lang="ts">
const layout = "weblayout";

</script>
<template>
  <NuxtLayout :name="layout">
    <header>
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-4 offset-sm-2 height-100 d-flex flex-column justify-content-center align-items-start">
            <h1 class="mb-2 text-primary display-1">WEEKLY <br><span class="font-custom">classes</span></h1>
            <NuxtLink to="/find-a-class" class="btn btn-primary btn-lg px-5 rounded-5"><strong>Book Now</strong>
            </NuxtLink>
          </div>
          <div class="col-sm-5">
            <img src="@/src/assets/img-kids-picture-2.png" class="img-fluid" alt="Kids Samba Soccer Schools">
          </div>
        </div>
      </div>
    </header>
    <!-- Why should I Choose  -->
    <section class="why-choose py-5">
      <div class="container text-center my-5">
        <h2 class="h1"><span class="text-light text-semibold">WHY SHOULD I CHOOSE</span> <br> <span
            class="font-custom text-success">your weekly football classes?</span></h2>
        <div class="col-sm-9 mx-auto">
          <p class="text-light mb-5">Where do we start? Weekly classes are an excellent way to develop skills on a
            consistent basis, build confidence, make friends, establish a healthy routine, and have a lot of fun along the
            way - but actions speak louder than words. Why not book a free trial class with Samba Soccer Schools, and
            we’ll be more than happy to show you what we do.  </p>
          <WebsiteFindYourNearestClass />
        </div>
      </div>
    </section>
    <!-- Weekly Fotball classes -->
    <section class="weekly-football-classes py-5">
      <div class="bg-player-playing">
        <div class="container">
          <div class="row">
            <!-- <div class="col-sm-5">
                <img src="@/src/assets/img-player-head-football.png" alt="" class="img-fluid">
              </div> -->
            <div class="col offset-sm-5">
              <h2 class="h1 font-custom text-primary">Weekly football classes in London for <span class="text-info">kids
                  aged 4 to 12</span></h2>
              <p class="text-muted">The likes of Neymar and Ronaldinho don’t just appear overnight - it takes consistent
                practice and training. Samba Soccer Schools offers weekly football classes in London for children aged
                four to twelve, split into four ability levels - meaning nobody misses out.</p>
              <p class="text-muted">Our approach is unique in that we place the Brazilian footballing methodology at the
                core of everything we do. With a skills-based program that focuses on close control, flair, and freedom,
                your child can learn how to play attractive, winning football with a huge smile on their face. </p>
              <NuxtLink to="/find-a-class" class="btn btn-info btn-lg text-light rounded-5 px-4"><span
                  class="text-semibold">Book Now</span></NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Benefits -->
    <section class="bg-primary-waves">
      <div class="container-fluid text-center">
        <div class="row">
          <h2 class="h1 font-custom text-light col-sm-7 mx-auto">The <em class="text-success">Benefits</em> of our weekly
            football classes for kids</h2>

        </div>
        <div class="row row-cols-sm-4 row-cols-1">
          <div class="col">
            <img src="@/src/assets/img-builds-confidence.png" alt="" class="img-fluid">
            <h4 class="text-warning font-custom">Builds Confidence</h4>
            <p class="text-light"><small>Confident football comes with practice. Each class focuses on 1 or 2 key skills,
                which are gradually integrated together over time to help develop confidence and ability.  </small></p>
          </div>
          <div class="col">
            <img src="@/src/assets/img-learn-new-skills.png" alt="" class="img-fluid">
            <h4 class="text-success font-custom">Learn New Skills</h4>
            <p class="text-light"><small>Kids want to learn the flicks and tricks that will wow their friends. Each week
                your child will learn skills straight out of the Brazilian football textbook that are fun, challenging,
                and dazzling. </small></p>
          </div>
          <div class="col">
            <img src="@/src/assets/img-make-new-friends.png" alt="" class="img-fluid">
            <h4 class="text-warning font-custom">Make New Friends</h4>
            <p class="text-light"><small>Weekly classes offer your child the chance to expand their friendship group while
                learning vital social skills such as respect, teamwork, and communication that go far beyond
                football. </small></p>
          </div>
          <div class="col">
            <img src="@/src/assets/img-have-fun.png" alt="" class="img-fluid">
            <h4 class="text-success font-custom">Have Fun</h4>
            <p class="text-light"><small>Playing football should be fun. For a huge number of children, they’re never
                happier than when they’re kicking a ball around with their friends. A weekly beaming smile is a joy to
                see. </small></p>
          </div>
        </div>
      </div>
    </section>

    <!-- Reviews  -->
    <div class="bg-gray-texture">
      <WebsiteReviews />
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

.bg-gray-texture {
  background-image: url('@/src/assets/bg-website-gray-texture.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #FDFDFF;
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

  &.bg-primary-waves {
    background-image: url('@/src/assets/bg-primary-waves.svg');
    background-repeat: no-repeat;
    background-position: center top;
    background-size: cover;
    min-height: 30vh;
    padding-top: 10rem;
    padding-bottom: 5rem
  }
}

.bg-player-playing {
  background-image: url('@/src/assets/img-player-head-football.png');
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: center left;
  padding-top: 4rem;
  padding-bottom: 8rem;
}</style>