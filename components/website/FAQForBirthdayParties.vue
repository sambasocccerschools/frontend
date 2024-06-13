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
        Football Birthday Parties <span class="text-info">FAQs</span>
      </h2>
      <p class="col-sm-9 text-muted mx-auto mb-5">
        Football birthday parties aren’t exactly common - yet - so you’ve
        probably got a few questions. Here are some answers to the most common
        we get, but if you have any more queries, feel free to get in touch.
      </p>
      <div class="row g-5">
        <div class="col-sm-5">
          <button
            class="btn-faq-hc mb-3"
            :class="question === 1 ? 'btn-active' : 'btn-inactive'"
            @click="question = 1"
          >
            What do your kids football birthday parties include?
          </button>
          <button
            class="btn-faq-hc mb-3"
            :class="question === 2 ? 'btn-active' : 'btn-inactive'"
            @click="question = 2"
          >
            Where do your children’s football parties take place?
          </button>
          <button
            class="btn-faq-hc mb-3"
            :class="question === 3 ? 'btn-active' : 'btn-inactive'"
            @click="question = 3"
          >
            Who will run my child’s football birthday party?
          </button>
        </div>
        <div class="col">
          <!-- Question 1  -->
          <div v-if="question === 1" class="text-muted">
            <img
              src="@/src/assets/img-what-birthday-parties-include.png"
              class="img-fluid col-sm-10 mb-3"
              alt=""
            />
            <div class="ps-sm-5">
              <p>
                Brazilians are known for throwing incredible celebrations, and
                we’ve cherry-picked the best parts, turned up that samba beat,
                and added some expert football coaching to create a birthday
                party quite unlike your child has ever had.
              </p>
              <p>
                Our birthday parties are suitable for those aged 4-12 years old,
                and all abilities are welcome. We offer a range of challenges
                and competitions, so whether your child and their friends are
                complete football beginners or seasoned pros just waiting for
                that call-up to the Premier League, we’ve got the perfect
                birthday party activities to make the day extra special.  
              </p>
              <p>
                A typical Samba Soccer birthday party includes the following:
              </p>

              <ul class="list-unstyled">
                <li>
                  <Icon name="ic:baseline-check" class="text-success me-2" />
                  The most experienced and enthusiastic Samba Soccer coaches
                </li>
                <li>
                  <Icon name="ic:baseline-check" class="text-success me-2" />
                  Samba music to bring the party to life
                </li>
                <li>
                  <Icon name="ic:baseline-check" class="text-success me-2" />
                  Ball mastery skill workshops
                </li>
                <li>
                  <Icon name="ic:baseline-check" class="text-success me-2" />
                  Fun games with and without the ball
                </li>
                <li>
                  <Icon name="ic:baseline-check" class="text-success me-2" />
                  A football tournament
                </li>
                <li>
                  <Icon name="ic:baseline-check" class="text-success me-2" />
                  Fun challenges
                </li>
              </ul>
            </div>
          </div>
          <!-- Question 2  -->
          <div v-if="question === 2" class="text-muted">
            <img
              src="@/src/assets/img-where-take-place.png"
              class="img-fluid col-sm-10 mb-3"
              alt=""
            />
            <div class="ps-sm-5">
              <p>
                We want to make your child’s birthday party as convenient as
                possible - for you and those coming to it. Parties can be held
                in your local park or a large back garden, or we’ll be happy to
                suggest a few places nearby.
              </p>
              <p>
                We currently offer our football party packages across the London
                area, subject to coach availability. We’ll do our utmost to make
                it work for you and create a day that’s as special as possible.
              </p>
            </div>
          </div>
          <!-- Question 3  -->
          <div v-if="question === 3" class="text-muted">
            <img
              src="@/src/assets/img-who-runs-birthday-party.png"
              class="img-fluid col-sm-10 mb-3"
              alt=""
            />
            <div class="ps-sm-5">
              <p>
                We know those running a football birthday party can make all the
                difference, so we only bring the very best. We want your child
                to have a truly unforgettable experience, and that all begins
                with coaches who are enthusiastic, passionate about the
                Brazilian style of football, and above all, great fun.
              </p>
              <p>
                Safety, security, and experience are hugely important to us,
                which is why each of our coaches holds a minimum Level 1 FA
                Coaching License and has first-aid training along with an
                up-to-date DBS certificate.
              </p>
            </div>
          </div>
          <NuxtLink
            to="/book"
            class="btn btn-lg btn-info d-inline-block ms-sm-5 rounded-5 mt-4 px-4"
            ><span class="text-semibold text-light"
              >Enquire Today</span
            ></NuxtLink
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
