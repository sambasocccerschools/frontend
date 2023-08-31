<script lang="ts" >
export default {
  data: () => ({
    question: 1
  })
}
</script>


<template>
  <section class="py-5">
    <div class="container">
      <h2 class="text-center font-custom h1 text-primary">Let’s answer your <span class="text-success">questions</span>
      </h2>
      <p class="col-sm-9 mx-auto text-muted mb-5">We know you’ve probably got lots of questions to ask about our 1-to-1
        coaching classes.To make things easy, we’ve gone ahead and answered the commonly asked:</p>
      <div class="row g-5">
        <div class="col-sm-5">
          <button class="btn-faq mb-3" :class="question === 1 ? 'btn-active' : 'btn-inactive'" @click="question = 1">What
            is 1 to 1 football coaching?</button>
          <button class="btn-faq mb-3" :class="question === 2 ? 'btn-active' : 'btn-inactive'" @click="question = 2">What
            do your 1 on 1 football coaching lessons involve?</button>
          <button class="btn-faq mb-3" :class="question === 3 ? 'btn-active' : 'btn-inactive'"
            @click="question = 3">Physical Training</button>
          <button class="btn-faq mb-3" :class="question === 4 ? 'btn-active' : 'btn-inactive'" @click="question = 4">Who
            provides your 1-on-1 football coaching lessons? </button>
          <button class="btn-faq" :class="question === 5 ? 'btn-active' : 'btn-inactive'" @click="question = 5">Where and
            when do your one to one football coaching lessons take place?</button>
        </div>
        <div class="col">
          <!-- Question 1  -->
          <div class="text-muted" v-if="question === 1">
            <img src="@/src/assets/img-faq-1.png" class="img-fluid col-sm-10 mb-3" alt="">
            <div class="ps-sm-5">
              <p class="mb-4">Our 1-to-1 football coaching is our most intensive, vigorous, and rewarding way to improve a
                child’s footballing ability. It simply involves one child and one coach, meaning your child receives a
                level of attention and individual teaching that is impossible within team training sessions.</p>
              <p>It’s a bit like having your own personal trainer and the gym. Personal football training designed
                specifically for your child.</p>
            </div>
          </div>
          <!-- Question 2  -->
          <div class="text-muted" v-if="question === 2">
            <img src="@/src/assets/img-faq-2.png" class="img-fluid col-sm-10 mb-3" alt="">
            <div class="ps-sm-5">
              <p class="mb-4">
                Private 1-to-1 football coaching with Samba Soccer Schools is perfect for the budding academy prospect who
                needs to focus on specific points before a trial or complete novices who need a boost in ability and
                confidence. 

                Our personal tailored-made sessions are designed to fast-track a child’s development through a  targeted
                syllabus and close individual attention. 

                Every child’s 1-to-1 coaching period starts with a detailed analysis of their game by an expert coach.
                This is then used to craft individual coaching sessions that focus on gaps within their game, as well as
                boosting overall confidence and establishing our trademark Brazilian way of playing.

              </p>
            </div>
          </div>
          <!-- Question 3  -->
          <div class="text-muted" v-if="question === 3">
            <img src="@/src/assets/img-faq-3.png" class="img-fluid col-sm-10 mb-3" alt="">
            <div class="ps-sm-5">
              <p>We believe an essential part of any football coaching is high-intensity interval training (HIIT), and our
                private 1-to-1 coaching is no different. HIIT involves short bursts of intense exercise alternating with
                low-intensity recovery periods. HIIT has been shown to have numerous benefits, including burning more
                calories, reducing in blood sugar levels, heart rate and blood pressure, and improving aerobic and
                anaerobic performance. 

                When it comes to football, this kind of training is vital as it helps to promote overall physical fitness,
                agility, speed, balance, and coordination. All of our sessions include periods of HIIT, which, when
                combined with our focused approach to ball mastery, close control, flair, and Brazilian skills, creates a
                true all-around footballer.  </p>
            </div>
          </div>
          <!-- Question 4  -->
          <div class="text-muted" v-if="question === 4">
            <img src="@/src/assets/img-faq-4.png" class="img-fluid col-sm-10 mb-3" alt="">
            <div class="ps-sm-5">
              <p class="mb-4">
                Only our most experienced coaches deliver our 1-to-1 football sessions. Each coach holds a minimum Level 1
                FA Coaching License and has first-aid training along with an up-to-date DBS certificate. 

                Each session follows the same structure set out by Samba Soccer Schools to ensure continuity and
                uniformity, but the content is always tailored specifically to the child and adapted enough over time to
                keep them on their toes.
              </p>
            </div>
          </div>
          <!-- Question 5  -->
          <div class="text-muted" v-if="question === 5">
            <img src="@/src/assets/img-faq-5.png" class="img-fluid col-sm-10 mb-3" alt="">
            <div class="ps-sm-5">
              <p class="mb-4">With our 1-to-1 football coaching lessons, we aim to make things as easy as possible by
                offering several flexible options:</p>
              <ul class="list-unstyled">
                <li>
                  <Icon name="ic:baseline-check" class="text-success me-2" />One-hour classes can be scheduled around
                  your needs wherever possible. 
                </li>
                <li>
                  <Icon name="ic:baseline-check" class="text-success me-2" />Sessions can usually be held in any location
                  that’s convenient, be it a park, a local football pitch, or even in your garden. 
                </li>
                <li>
                  <Icon name="ic:baseline-check" class="text-success me-2" />Samba Soccer Schools is always expanding, and
                  we do our best to cater to any 1-to-1 request within the London area.
                </li>
              </ul>
              <p><small>*Please note that your child always needs to be accompanied during our lessons.</small></p>
            </div>
          </div>
          <NuxtLink to="/book" class="btn btn-lg btn-primary px-4 d-inline-block ms-sm-5 rounded-5"><span
              class="text-semibold">Find a Class</span></NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import '@/assets/styles/web/web.scss';

.btn-faq {
  @extend .btn;
  text-align: left;
  @extend .rounded-4;
  transition: all .2s ease;
  padding: $spacer;
  width: 100%;

  &.btn-active {
    @extend .bg-success;
    @extend .text-light;
    font-weight: $font-weight-semibold;
    box-shadow: 0px 4px 20px 0px rgba(13, 209, 128, 0.42);
  }

  &.btn-inactive {
    @extend .bg-success-subtle;
    @extend .text-muted;
  }
}
</style>