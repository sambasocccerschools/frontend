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
      <h2 class="h1 font-custom text-primary text-center">Why should you <em class="text-success">learn</em> from us?</h2>
      <div class="row">
        <div class="col-sm-9 mx-auto text-center">
          <p class="text-muted">With our industry experience, we are confident we can help you become an outstanding coach
            who
            will thrive in the football world</p>
        </div>
      </div>
      <div class="row my-5">
        <div class="col-sm-10 mx-auto d-flex justify-content-around gap-3">
          <button class="btn-choice mb-3 w-100" :class="choice === 1 ? 'btn-active' : 'btn-inactive'"
            @click="choice = 1"><span class="font-custom">EXPERIENCE</span></button>
          <button class="btn-choice mb-3 w-100" :class="choice === 2 ? 'btn-active' : 'btn-inactive'"
            @click="choice = 2"><span class="font-custom">THE SSS MOVEMENT</span></button>
          <button class="btn-choice mb-3 w-100" :class="choice === 3 ? 'btn-active' : 'btn-inactive'"
            @click="choice = 3"><span class="font-custom">EXPERT GUIDANCE</span></button>

        </div>
      </div>


      <!-- Choice 1  -->
      <div class="row align-items-center" v-if="choice === 1">
        <div class="col-sm-6">
          <p class="text-muted">When it comes to coaching, experience counts for everything. Samba Soccer Schools has been
            operating since
            2009, and in that time, we’ve explored and tweaked countless coaching methods and models before arriving at
            today’s Coaching Pathway course. We’ve fine-tuned and ironed out the wrinkles to create a comprehensive
            coaching syllabus delivered with confidence and passion.    
          </p>
        </div>
        <div class="col offset-sm-1">
          <img src="@/src/assets/img-why-experience.png" class="img-fluid" alt="img-why-experience">
        </div>
      </div>

      <!-- Choice 2  -->
      <div class="row align-items-center" v-if="choice === 2">
        <div class="col-sm-6">
          <p class="text-muted">We’re not just any old football school. What makes Samba Soccer Schools so unique and
            popular is our ability to deliver structured classes that focus on careful progression with the kind of
            show-stopping entertainment the Brazilians are known for. We believe children should love playing football,
            and with a thumping samba beat in the background, and a spotlight on core and 1v1 skills, kids can’t get
            enough of our classes.     
          </p>
        </div>
        <div class="col offset-sm-1">
          <img src="@/src/assets/img-the-sss-movement.png" class="img-fluid" alt="img-the-sss-movement">
        </div>
      </div>

      <!-- Choice 3  -->
      <div class="row align-items-center" v-if="choice === 3">
        <div class="col-sm-6">
          <p class="text-muted">There are many coaching schools where you simply turn up and get taught without having the
            kind of expert, nurturing guidance we pride ourselves on. Developing coaching skills in the detailed and
            thorough way it should be takes time and usually involves plenty of questions. Theoretical teaching is all
            well and good, but without the extra mile that comes with explaining carefully and going over it again when
            needed, learning to coach will always be more of a struggle.   
          </p>
        </div>
        <div class="col offset-sm-1">
          <img src="@/src/assets/img-expert-guidance.png" class="img-fluid" alt="img-expert-guidance">
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