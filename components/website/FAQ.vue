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
      <p class="col-sm-9 mx-auto text-muted mb-5">You’ve probably got a few questions, so here are the answers to some of
        the most common we get. If you can’t find what you’re looking for, please give us a call, and we’ll be more than
        happy to answer any queries you might have.</p>
      <div class="row g-5">
        <div class="col-sm-5">
          <button class="btn-faq mb-3" :class="question === 1 ? 'btn-active' : 'btn-inactive'" @click="question = 1">Where
            and When Do Your Weekly Classes Take Place?</button>
          <button class="btn-faq mb-3" :class="question === 2 ? 'btn-active' : 'btn-inactive'" @click="question = 2">What is
            Brazilian football & What do you teach in the lessons?</button>
          <button class="btn-faq mb-3" :class="question === 3 ? 'btn-active' : 'btn-inactive'" @click="question = 3">Can my
            child attend weekly classes even if they have no experience?</button>
          <button class="btn-faq mb-3" :class="question === 4 ? 'btn-active' : 'btn-inactive'" @click="question = 4">Who
            runs your weekly football classes? </button>
          <button class="btn-faq" :class="question === 5 ? 'btn-active' : 'btn-inactive'" @click="question = 5">How much are
            your weekly football classes?</button>
        </div>
        <div class="col">
          <!-- Question 1  -->
          <div class="text-muted" v-if="question === 1">
            <img src="@/src/assets/img-faq-1.png" class="img-fluid col-sm-10 mb-3" alt="">
            <div class="ps-sm-5">
              <p class="mb-4">Our weekly football classes take place throughout the academic year at some of the finest
                indoor and outdoor venues across the London area. This means your child receives 36 weekly classes every
                year (12 each in the spring, autumn, and winter terms), and with nearly 50 separate locations, there’s
                sure to be something close by. Safety and comfort are our highest priorities, meaning you can sit back and
                watch your child having the time of their life. </p>
              <p>Each venue includes classes for children aged 4 to 12, but are often held at different times and on
                different days. Click below to find your closest class.</p>
            </div>
          </div>
          <!-- Question 2  -->
          <div class="text-muted" v-if="question === 2">
            <img src="@/src/assets/img-faq-2.png" class="img-fluid col-sm-10 mb-3" alt="">
            <div class="ps-sm-5">
              <p class="mb-4">Brazilian football combines passion, flair, and fun with a style of play often referred to
                as ‘Ginga Football’ that has brought the country a record five World Cups. Ginga translates literally as
                ‘to sway,’ and if you ever saw Ronaldinho dance into the penalty area like he was on a samba dancefloor,
                you’ll know what we mean.     </p>
              <p class="mb-4">
                Our classes incorporate all of these elements while placing a strong emphasis on close control and skills
                development. We aim to make our classes as fun as possible but also believe in developing technique and
                skills while building confidence and teaching about the Brazilian side of the beautiful game.
              </p>
              <p>A typical class begins with small-sided games to warm kids up and to get them excited for their lesson.
                Then we focus on the technical aspect, teaching core ball mastery skills to develop confidence. Students
                are then taught how to apply these skills boosting their quick decision making skills in our tactical
                exercises. Finally we wrap up the session back with a return to small-sided games where kids can put their
                skills to the real test whilst having heaps of fun!</p>
            </div>
          </div>
          <!-- Question 3  -->
          <div class="text-muted" v-if="question === 3">
            <img src="@/src/assets/img-faq-3.png" class="img-fluid col-sm-10 mb-3" alt="">
            <div class="ps-sm-5">
              <p>We welcome children of all abilities, and our four-ability level system means there is a place for
                everybody at Samba Soccer Schools. Our beginner level teaches children the basics, such as dribbling and
                shooting, giving them a solid foundation to build on from there. </p>
            </div>
          </div>
          <!-- Question 4  -->
          <div class="text-muted" v-if="question === 4">
            <img src="@/src/assets/img-faq-4.png" class="img-fluid col-sm-10 mb-3" alt="">
            <div class="ps-sm-5">
              <p class="mb-4">
                Our weekly football classes are run by our qualified coaches who have all been through our extensive
                coaching education programme, which requires each of them to sit an exam and gain the appropriate
                qualifications. Each coach holds a minimum Level 1 FA Coaching License and has first-aid training along
                with an up-to-date DBS certificate. 
              </p>
              <p>Our football classes have a 1:10 coach-to-student ratio, meaning your child receives personalised
                coaching, which isn’t always the case with other football classes. </p>
            </div>
          </div>
          <!-- Question 5  -->
          <div class="text-muted" v-if="question === 5">
            <img src="@/src/assets/img-faq-5.png" class="img-fluid col-sm-10 mb-3" alt="">
            <div class="ps-sm-5">
              <p class="mb-4">At Samba Soccer Schools, we run a membership programme for our weekly football classes.</p>
              <p class="mb-4">Our membership fees are spread over equal monthly instalments to make it affordable and
                cost-efficient for you. So every month, you’ll know exactly how much you’re spending.</p>
              <p class="mb-4">Our 12-month membership plan starts at £39.99 per month and this includes a 15% discount on
                our SSS uniform. Alternatively, you can opt for our 6-month membership plan which starts at £47.99 per
                month and includes a 5% discount on our SSS uniform. Click below to see our full membership prices.</p>
            </div>
          </div>
        <NuxtLink to="/find-a-class" class="btn btn-lg btn-primary px-4 d-inline-block ms-sm-5 rounded-5"><span
            class="text-semibold">Find a Class</span></NuxtLink>
      </div>
    </div>
  </div>
</section></template>

<style lang="scss">@import '@/assets/styles/web/web.scss';

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
}</style>