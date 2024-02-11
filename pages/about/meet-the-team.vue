<script setup lang="ts">
const layout = 'weblayout'
</script>

<template>
  <NuxtLayout :name="layout">
    <header class="bg-header-meet-the-team d-flex align-items-center">
      <div class="container text-center">
        <div class="row align-items-center">
          <div class="order-sm-1 col-auto text-center">
            <img
              src="@/src/assets/img-meet-the-team-coach-1.png"
              alt="img-meet-the-team-coach-1"
              class="img-fluid"
            />
          </div>
          <div class="order-sm-3 col-auto text-center">
            <img
              src="@/src/assets/img-meet-the-team-coach-2.png"
              alt="img-meet-the-team-coach-2"
              class="img-fluid"
            />
          </div>
          <div class="col order-sm-2">
            <h1 class="text-info display-2"><em>Meet the team</em></h1>

            <p class="lead" style="line-height: 2.5rem">
              With over 50 years of combined football coaching experience, you
              can rest assured that your child’s progress is in the right hands.
              Meet some of our senior kids football coaches who work very hard
              to make sure your child has a safe and enjoyable football
              experience.
            </p>
            <div>
              <Icon name="carbon:chevron-down" class="display-1 text-muted" />
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Regional Managers -->
    <WebsiteTeamRegionalManagers />

    <!-- Head Coaches  -->
    <WebsiteTeamHeadCoaches />

    <!-- Management Team -->
    <WebsiteTeamManagement />

    <!-- Word from founder -->

    <section
      class="bg-primary-texture-with-top-wave-white bg-primary text-bg-dark py-5"
    >
      <div class="container">
        <div class="my-5 pt-5 text-center">
          <img
            src="@/src/assets/img-founder-nilio-bagga.png"
            alt="img-founder-nilio-bagga"
            class="mt-5"
          />
          <h2 class="display-4 text-success font-custom my-5">
            A Word from our founder
          </h2>
          <div class="col-sm-8 mx-auto" style="line-height: 2.5rem">
            <p class="lead">
              It was both experiences that eventually kick-started Nilio’s
              coaching journey. He realised the importance of great coaches who
              taught children how to play with freedom, yet maintained structure
              in their classes. He dug deeper and took off to Brazil to discover
              the history of Brazilian football and the art of Samba Soccer.
              Fast forward 10 hardworking years, and the result is a kids
              football school that emphasises creativity, freedom and
              imagination at its core to emulate Nilio’s stress-free football
              experience on the playground.
            </p>
            <p class="lead">
              In addition, our Brazilian football academy provides children with
              their own ball to maximise the number of touches per class so they
              can progress quicker. Sessions are well organised and coaches are
              professionally recruited and trained to teach your child
              entertaining, skilful football. And to bring the atmosphere to
              life, your child can enjoy each class to the rich rhythms of samba
              music in the backdrop.
            </p>
          </div>

          <div class="mb-3 mt-5">
            <img
              src="@/src/assets/img-signature-founder.png"
              alt="Founder Signature"
              class="mb-5"
            />
            <h4>Nilio Bagga</h4>
            <p>Founder and Managing Director</p>
          </div>
        </div>
      </div>
    </section>

    <!--  -->

    <section class="bg-waves-green-blue text-cneter py-5">
      <div class="container">
        <div class="row">
          <div class="col-sm-8 mx-auto">
            <div class="card rounded-4 bg-light border-0 pb-5 pt-4">
              <div class="card-body px-5">
                <h3 class="display-4 text-info font-custom mb-4">
                  <em>Book a samba soccer class</em>
                </h3>
                <WebsiteFormSelectVenue />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/web/web.scss';

header.bg-header-meet-the-team {
  background-image: url('@/src/assets/bg-light-wave-bottom.svg'),
    url('@/src/assets/bg-header-meet-the-team.png');
  padding: 2rem 0 1rem;
  background-repeat: no-repeat;
  background-size:
    100% auto,
    cover;
  background-position:
    bottom center,
    center center;
  @extend .bg-warning;
}
</style>
