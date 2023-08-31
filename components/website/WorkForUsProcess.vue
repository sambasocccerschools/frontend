<script lang="ts">
export default {
  data: () => ({
    choice: 1
  })
}
</script>

<template>
  <section class="py-5 bg-gray-texture bg-light">
    <div class="container">
      <h2 class="h1 font-custom text-primary text-center">The process</h2>
      <div class="row">
        <div class="col-sm-9 mx-auto text-center">
          <p class="text-muted">Obtaining a football coaching job at Samba Soccer Schools involves three steps. We’ve
            outlined these below to make the process smooth for you.</p>
        </div>
      </div>
      <div class="row my-5">
        <div class="col mx-auto d-flex justify-content-center gap-3">
          <button class="btn-choice mb-3 " :class="choice === 1 ? 'btn-active' : 'btn-inactive'" @click="choice = 1"><span
              class="font-custom text-uppercase">Phone Interview</span></button>
          <button class="btn-choice mb-3 " :class="choice === 2 ? 'btn-active' : 'btn-inactive'" @click="choice = 2"><span
              class="font-custom text-uppercase">Phase 1: Can you do the skills?</span></button>
          <button class="btn-choice mb-3 " :class="choice === 3 ? 'btn-active' : 'btn-inactive'" @click="choice = 3"><span
              class="font-custom text-uppercase">Phase 2: Can you coach?</span></button>

        </div>
      </div>


      <!-- Choice 1  -->
      <div class="row align-items-center" v-if="choice === 1">
        <div class="col-sm-6">
          <p class="text-muted">The first step in your pursuit of a football coaching job is to have a telephone interview
            with us.    
          </p>
          <p class="text-muted">
            Once you have filled out the application form at the bottom of this page and provided you meet the eligibility
            requirements, a member of our recruitment team will contact you within 48 hours.
          </p>
          <p class="text-muted">
            During this phone interview, we may ask you questions about your coaching experience, playing experience,
            qualifications and availability.
          </p>
          <p class="text-muted">
            The phone interview is also a great opportunity for you to ask any questions you may have about the role.
          </p>
        </div>
        <div class="col offset-sm-1">
          <img src="@/src/assets/img-phone-interview.png" class="img-fluid" alt="img-phone-interview">
        </div>
      </div>

      <!-- Choice 2  -->
      <div class="row align-items-center" v-if="choice === 2">
        <div class="col-sm-6">
          <p class="text-muted">At Samba Soccer Schools, we teach children how to play football the Brazilian way which
            involves a host of ball mastery skills and core 1v1 moves.   
          </p>
          <p class="text-muted">
            It is absolutely imperative that you can perform these skills. Imagine taking instructions from a gym trainer
            who struggles with each workout. You wouldn’t feel very confident, would you? The same applies to football
            coaching. You are required to demonstrate skills to students all the time, so you need to know how to perform
            them.
          </p>
          <p class="text-muted">
            To this end, if you have passed the phone interview, we will invite you to a skills assessment. One of our
            lead trainers will demonstrate 15 skills from our coaching syllabus and you will be required to copy them.
          </p>
          <p class="text-muted">
            But please don’t be put off! The skills are not super crazy. After all, we are working with 4-11 year olds!
          </p>
        </div>
        <div class="col offset-sm-1">
          <img src="@/src/assets/img-phase-1.png" class="img-fluid" alt="img-phase-1">
        </div>
      </div>

      <!-- Choice 3  -->
      <div class="row align-items-center" v-if="choice === 3">
        <div class="col-sm-6">
          <p class="text-muted">In the final phase of our coach recruitment process, we assess your coaching ability. You
            will be invited to one of our classes to deliver a full session.
          </p>
          <p class="text-muted">
            We will provide you with a session plan in advance so you can prepare for the assessment. The key areas we
            look for are your ability to communicate clearly, your tone and enthusiasm and ability to demonstrate skills.
          </p>
        </div>
        <div class="col offset-sm-1">
          <img src="@/src/assets/img-phase-2.png" class="img-fluid" alt="img-phase-2">
        </div>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
@import '@/assets/styles/web/web.scss';

.bg-gray-texture {
  background-image: url('@/src/assets/bg-website-gray-texture.png');
  background-repeat: repeat;
}

.btn-choice {
  @extend .btn;
  @extend .rounded-3;
  transition: all .2s ease;
  padding: $spacer;

  &.btn-active {
    // @extend .text-light;
    // font-weight: $font-weight-semibold;
    @extend .btn-success;
    box-shadow: 0px -1px 19px 0px rgba(13, 209, 128, 0.48);
    color: white;
  }

  &.btn-inactive {
    @extend .btn-outline-success;

    // @extend .bg-success-subtle;
    // @extend .text-muted;
  }
}
</style>