<script lang="ts">
export default {
  data: () => ({
    level: 1
  })
}
</script>

<template>
  <section class="four-level">
    <div class="container">
      <h2 class="h1 font-custom text-warning text-center">Four Levels</h2>
      <div class="row">
        <div class="col-sm-9 mx-auto text-center">
          <p class="text-light text-semibold">Our weekly football classes in London are all divided into four levels to
            ensure that every child plays within a group that shares similar abilities. </p>
          <p class="text-light text-semibold">
            While we do group students by ability and not age, we find that levels usually incorporate rough age ranges -
            Beginner (4-5 years), Intermediate 6-7 years), Advanced (8-9 years), and Proficient (10-11 years).  
          </p>
        </div>
      </div>
      <div class="row my-5">
        <div class="col-sm-10 mx-auto d-flex justify-content-around gap-3">
          <button class="btn-level mb-3 w-100" :class="level === 1 ? 'btn-active' : 'btn-inactive'"
            @click="level = 1"><span class="font-custom">Beginners Group</span></button>
          <button class="btn-level mb-3 w-100" :class="level === 2 ? 'btn-active' : 'btn-inactive'"
            @click="level = 2"><span class="font-custom">Intermediate Group</span></button>
          <button class="btn-level mb-3 w-100" :class="level === 3 ? 'btn-active' : 'btn-inactive'"
            @click="level = 3"><span class="font-custom">Advanced Group</span></button>
          <button class="btn-level mb-3 w-100" :class="level === 4 ? 'btn-active' : 'btn-inactive'"
            @click="level = 4"><span class="font-custom">Proficient Group</span></button>

        </div>
      </div>
      <div class="text-danger text-semibold">NEED TO FINISH THIS PART</div>

      <div class="row" v-if="level === 1">
        <!-- Level 1  -->
        <div class="col-sm-7">
          <div class="text-light">
            <h4 class=" h5 mb-3 text-semibold">Weekly beginner football classes for kids </h4>
            <p class="mb-4">For those just starting their footballing journey, our beginner level establishes the
              foundations for playing football with flair, freedom, and fun while establishing those all-important basics
              that are needed to progress.    </p>
            <h4 class=" h5 mb-3 text-semibold">Our beginners class teaches your child the following:</h4>
            <ul>
              <li>Basic dribbling techniques using the sole, inside and outside of the foot</li>
              <li>The foundations for ball mastery skills appropriate for their level</li>
              <li>Simple ball control techniques through passing and receiving</li>
              <li>Decision-making skills through fun game-based exercises</li>
            </ul>
          </div>
        </div>
        <div class="col">
          <img src="@/src/assets/img-level-beginner.png" class="img-fluid" alt="">
        </div>
      </div>

    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/web/web.scss';

section {
  &.four-level {
    background-image: url('@/src/assets/bg-primary-waves.svg');
    background-repeat: no-repeat;
    background-position: center top;
    background-size: cover;
    padding-top: 10rem;
    padding-bottom: 3rem;
  }
}

.btn-level {
  @extend .btn;
  @extend .rounded-3;
  transition: all .2s ease;
  padding: $spacer;

  &.btn-active {
    // @extend .text-light;
    // font-weight: $font-weight-semibold;
    @extend .btn-warning;
    box-shadow: 0px -1px 23px 0px rgba(255, 222, 20, 0.50);
  }

  &.btn-inactive {
    @extend .btn-outline-warning;

    // @extend .bg-success-subtle;
    // @extend .text-muted;
  }
}
</style>