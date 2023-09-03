<script lang="ts" >
export default {
  data: () => ({
    reason: 1
  })
}
</script>


<template>
  <section class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-sm-8 mx-auto mt-5 mb-4">
          <h2 class="text-center font-custom h1 text-primary">4 reasons why you should choose Samba Soccer Schools
          </h2>
          <p class="text-muted mb-5">Wondering what makes our London-based soccer academy stand out from the rest? At
            Samba Soccer Schools, we take pride in what sets us apart from other coaching services.</p>
        </div>
      </div>
      <div class="row g-5">
        <div class="col-sm-5">
          <button class="btn-faq mb-3" :class="reason === 1 ? 'btn-active' : 'btn-inactive'" @click="reason = 1">1 |
            Experienced Football Coaches</button>
          <button class="btn-faq mb-3" :class="reason === 2 ? 'btn-active' : 'btn-inactive'" @click="reason = 2">2 |
            Premium Facilities</button>
          <button class="btn-faq mb-3" :class="reason === 3 ? 'btn-active' : 'btn-inactive'" @click="reason = 3">3 |
            Coaching Syllabus</button>
          <button class="btn-faq mb-3" :class="reason === 4 ? 'btn-active' : 'btn-inactive'" @click="reason = 4">4 | Value
            For Money</button>

        </div>
        <div class="col">
          <!-- Reason 1  -->
          <div class="text-muted" v-if="reason === 1">
            <img src="@/src/assets/img-reason-1.png" class="img-fluid col-sm-10 mb-3"
              alt="1 | Experienced Football Coaches">
            <div class="text-muted">
              <p class="mb-4">We run our classes in some of London’s top indoor and outdoor facilities.</p>
              <p>Each venue includes classes for children aged 4 to 12, but are often held at different times and on
                different days. Click below to find your closest class.</p>
              <p class="mb-4">The venues are safe and comfortable for you to sit back and watch your child enjoy their
                lesson.</p>
              <p class="mb-4">You also won’t have to worry about missing a class during the winter as we have plenty of
                indoor options to choose from.</p>
            </div>
          </div>
          <!-- Reason 2  -->
          <div class="text-muted" v-if="reason === 2">
            <img src="@/src/assets/img-reason-2.png" class="img-fluid col-sm-10 mb-3" alt="2 | Premium Facilities">
            <div class="text-muted">
              <p class="mb-4">
                We run our classes in some of London’s top indoor and outdoor facilities.</p>
              <p class="mb-4">The venues are safe and comfortable for you to sit back and watch your child enjoy their
                lesson.</p>
              <p class="mb-4">You also won’t have to worry about missing a class during the winter as we have plenty of
                indoor options to choose from.</p>
            </div>
          </div>
          <!-- Reason 3  -->
          <div class="text-muted" v-if="reason === 3">
            <img src="@/src/assets/img-reason-3.png" class="img-fluid col-sm-10 mb-3" alt="3 | Coaching Syllabus">
            <div class="text-muted">
              <p class="mb-4">Your child’s development rests on a well thought out coaching curriculum. </p>
              <p class="mb-4">Our technical coaching team have over 10 years of experience in developing exercises and
                session plans to achieve a balance of fun and education in every lesson.</p>
              <p class="mb-4">There is also a clear focus to each lesson geared towards helping your child play the
                Brazilian way.</p>
            </div>
          </div>
          <!-- Reason 4  -->
          <div class="text-muted" v-if="reason === 4">
            <img src="@/src/assets/img-reason-4.png" class="img-fluid col-sm-10 mb-3" alt="4 | Value For Money">
            <div class="text-muted">
              <p class="mb-4">
                Samba Soccer Schools have put in a tremendous amount of work to ensure our football classes provide
                children with the best possible coaching experience.
              </p>
              <p class="mb-4">We are able to offer a high level of coaching in London’s best facilities while still
                keeping our prices affordable for you. </p>
              <p class="mb-4">You also don’t need to worry about big one-off payments as our memberships are spread out
                monthly making it more cost-efficient and convenient for you.</p>
            </div>
          </div>

          <NuxtLink to="/book" class="btn btn-lg btn-success px-4 d-inline-block rounded-5"><span
              class="text-semibold text-light">Find a Class</span></NuxtLink>
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