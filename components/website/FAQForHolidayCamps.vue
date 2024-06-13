<script lang="ts">
export default {
  data: () => ({
    question: 1,
  }),
}
</script>

<template>
  <section class="py-5">
    <div class="container">
      <h2 class="font-custom h1 text-primary text-center">
        Soccer Holiday Camps <span class="text-info">FAQs</span>
      </h2>
      <p class="col-sm-9 text-muted mx-auto mb-5">
        You’ve probably got plenty of questions about summer camps with Samba
        Soccer Schools, so here are some answers to our most common questions.
        If you can’t find what you’re looking for, contact us at
        <a href="tel: +4402072052723">020 72052723</a> or at
        <a href="mailto: admin@sambasoccerschools.com"
          >admin@sambasoccerschools.com</a
        >
      </p>
      <div class="row g-5">
        <div class="col-sm-5">
          <button
            class="btn-faq-hc mb-3"
            :class="question === 1 ? 'btn-active' : 'btn-inactive'"
            @click="question = 1"
          >
            What are football holiday camps?
          </button>
          <button
            class="btn-faq-hc mb-3"
            :class="question === 2 ? 'btn-active' : 'btn-inactive'"
            @click="question = 2"
          >
            What do your soccer camps include?
          </button>
          <button
            class="btn-faq-hc mb-3"
            :class="question === 3 ? 'btn-active' : 'btn-inactive'"
            @click="question = 3"
          >
            What is a typical day like?
          </button>
          <button
            class="btn-faq-hc mb-3"
            :class="question === 4 ? 'btn-active' : 'btn-inactive'"
            @click="question = 4"
          >
            When and where do you run your camps? 
          </button>
          <button
            class="btn-faq-hc"
            :class="question === 5 ? 'btn-active' : 'btn-inactive'"
            @click="question = 5"
          >
            Who runs the football camps?
          </button>
        </div>
        <div class="col">
          <!-- Question 1  -->
          <div v-if="question === 1" class="text-muted">
            <img
              src="@/src/assets/img-what-are-holiday-camps.png"
              class="img-fluid col-sm-10 mb-3"
              alt=""
            />
            <div class="ps-sm-5">
              <p>
                Football camps with Samba Soccer Schools provide children
                between 4 and 12 with fun, healthy, and engaging football
                activities lasting anywhere from 4 days to several weeks. They
                offer the perfect opportunity for children to improve their
                football skills based on our Brazilian methodology, develop
                their confidence, make new friends, and have a fantastic time
                while doing so. 
              </p>
              <p>
                Our football camps are grouped by ability, so whether your child
                is entirely new to football or has been playing for many years
                and just can’t get enough, we’ve got the perfect camp for them.
                Boys or girls - everybody is welcome at our football camps held
                at some of London’s premium venues.
              </p>
            </div>
          </div>
          <!-- Question 2  -->
          <div v-if="question === 2" class="text-muted">
            <img
              src="@/src/assets/img-what-do-soccer-camps.png"
              class="img-fluid col-sm-10 mb-3"
              alt=""
            />
            <div class="ps-sm-5">
              <p>
                If your child loves the beautiful game, there’s no better place
                for them than a football camp with Samba Soccer Schools. 
              </p>
              <p>
                We base all of our expert coaching around the Brazilian way of
                playing football, which means flair, fun, and unforgettable
                skills to take back to the playground. We’ll teach them Neymar’s
                famous double step-over, Ronaldinho’s iconic elastico, and
                Courtinho’s incredible bending shots - you’ll be amazed at what
                children can do after just a few days’ practice. 
              </p>
              <p>
                Our camps are about quickly improving skills and confidence, but
                they’re also about enjoying yourself. No two days are ever the
                same, and we build skills and techniques over several days that
                build towards our end-of-camp tournament, where your child can
                showcase their new abilities. 
              </p>
            </div>
          </div>
          <!-- Question 3  -->
          <div v-if="question === 3" class="text-muted">
            <img
              src="@/src/assets/img-what-is-typical-day.png"
              class="img-fluid col-sm-10 mb-3"
              alt=""
            />
            <div class="ps-sm-5">
              <p>
                We’ve been doing this since 2008, so we’ve had plenty of time to
                see what works and what doesn’t to make sure everything is just
                right. We think it’s vital that children are having fun while
                learning new football skills and techniques, which is why we
                always mix up activities to ensure that everything feels fresh
                and exciting. 
              </p>
              <p>
                We always mix it up at Samba Soccer Schools camp, but here is an
                idea of what a typical day looks like. We don’t do the kind of
                camps where kids sit around doing nothing, we like to keep
                everybody active and on their toes at all times.
              </p>
              <p>
                <strong>9:00am</strong> - We kickstart the day with a Mini-Match
                Mayhem!
                <br />
                <strong>9:30am - 10:15am</strong> - Ball Mastery Bonanza: Master
                the ball like the Brazilian greats!
                <br />
                <strong>10:15am - 10:30am</strong> - Snack Attack: Refuel for
                the second half of the camp.
                <br />
                <strong>10:30am - 12:15pm</strong> - Mastering Core 1v1 tricks
                <br />
                <strong>12:15pm - 1:00pm</strong> - Small-Sided Games
                Extravaganza!
              </p>
            </div>
          </div>
          <!-- Question 4  -->
          <div v-if="question === 4" class="text-muted">
            <img
              src="@/src/assets/img-when-where-run-camp.png"
              class="img-fluid col-sm-10 mb-3"
              alt=""
            />
            <div class="ps-sm-5">
              <p>
                All of our holiday camps take place across the London area and
                are held during each of the school holidays. 
              </p>
              <p>
                A football camp is a perfect way to keep children engaged,
                active, and learning during their time away from school while
                also providing a relaxed, fun environment every child needs to
                re-energise. 
              </p>
            </div>
          </div>
          <!-- Question 5  -->
          <div v-if="question === 5" class="text-muted">
            <img
              src="@/src/assets/img-who-runs-football-camps.png"
              class="img-fluid col-sm-10 mb-3"
              alt=""
            />
            <div class="ps-sm-5">
              <p class="mb-4">
                Ensuring your child is in safe hands is our top priority, which
                is why our coaching staff are expertly trained and highly
                qualified. The football camp is led by one of our regional
                managers, who can be contacted regarding any issues that may
                arise, while each coach on-site holds a minimum Level 1 FA
                Coaching License and has first-aid training along with an
                up-to-date DBS certificate. 
              </p>
              <p>
                While certificates and safety training is vital, we know there’s
                much more to it. Every one of our coaches shares the same
                passion and energy about teaching Brazilian-style football,
                meaning entertaining classes, dedicated and vigorous coaching,
                support for every child, and broad smiles.   
              </p>
            </div>
          </div>
          <NuxtLink
            to="/book"
            class="btn btn-lg btn-info d-inline-block ms-sm-5 rounded-5 mt-4 px-4"
            ><span class="text-semibold text-light">Find a Camp</span></NuxtLink
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import '@/assets/styles/web/web.scss';

.btn-faq-hc {
  @extend .btn;
  text-align: left;
  @extend .rounded-4;
  transition: all 0.2s ease;
  padding: $spacer;
  width: 100%;

  &.btn-active {
    @extend .bg-info;
    @extend .text-light;
    font-weight: $font-weight-semibold;
    box-shadow: 0px 4px 20px 0px #00a6e315;
  }

  &.btn-inactive {
    @extend .bg-info-subtle;
    @extend .text-muted;
  }
}
</style>
