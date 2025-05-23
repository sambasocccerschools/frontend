<script lang="ts">
export default {
  data: () => ({
    level: 1,
  }),
}
</script>

<template>
  <section class="four-level ptm-100">
    <div class="container">
      <h2 class="h1 font-custom text-warning fs-64 text-center">Four Levels</h2>
      <div class="row">
        <!-- SOLO EN ESCRITORIO -->
        <div class="col-sm-9 d-none d-md-block mx-auto text-center">
          <p class="text-light text-semibold">
            Our weekly football classes in London are all divided into four
            levels to ensure that every child plays within a group that shares
            similar abilities. 
          </p>
          <p class="text-light text-semibold">
            While we do group students by ability and not age, we find that
            levels usually incorporate rough age ranges - Beginner (4-5 years),
            Intermediate (6-7 years), Advanced (8-9 years), and Proficient
            (10-11 years).  
          </p>
        </div>

        <!-- SOLO EN MÓVIL -->
        <div class="col-12 d-block d-md-none text-center">
          <p class="text-light text-semibold">
            Although we group players based on ability and not age, we have
            found that our ability groups loosely fit certain age groups.
          </p>
        </div>
      </div>
      <div class="row my-5">
        <div class="col-12">
          <div class="levels-scroll d-flex gap-3 overflow-auto">
            <button
              class="btn-level flex-shrink-0"
              :class="level === 1 ? 'btn-active' : 'btn-inactive'"
              @click="level = 1"
            >
              <span class="font-custom">Beginners Group</span>
            </button>
            <button
              class="btn-level flex-shrink-0"
              :class="level === 2 ? 'btn-active' : 'btn-inactive'"
              @click="level = 2"
            >
              <span class="font-custom">Intermediate Group</span>
            </button>
            <button
              class="btn-level flex-shrink-0"
              :class="level === 3 ? 'btn-active' : 'btn-inactive'"
              @click="level = 3"
            >
              <span class="font-custom">Advanced Group</span>
            </button>
            <button
              class="btn-level flex-shrink-0"
              :class="level === 4 ? 'btn-active' : 'btn-inactive'"
              @click="level = 4"
            >
              <span class="font-custom">Proficient Group</span>
            </button>
          </div>
        </div>
      </div>

      <div v-if="level === 1" class="row">
        <!-- Level 1  -->
        <div class="col-sm-7">
          <div class="text-light">
            <h4 class="h5 text-semibold mb-3">
              Weekly beginner football classes for kids
            </h4>
            <p class="mb-4">
              For those just starting their footballing journey, our beginner
              level establishes the foundations for playing football with flair,
              freedom, and fun while establishing those all-important basics
              that are needed to progress.    
            </p>
            <h4 class="h5 text-semibold mb-3">
              Our beginners class teaches your child the following:
            </h4>
            <ul>
              <li>
                Basic dribbling techniques using the sole, inside and outside of
                the foot
              </li>
              <li>
                The foundations for ball mastery skills appropriate for their
                level
              </li>
              <li>
                Simple ball control techniques through passing and receiving
              </li>
              <li>Decision-making skills through fun game-based exercises</li>
            </ul>
          </div>
        </div>
        <div class="col">
          <img
            src="@/src/assets/img-level-beginner.png"
            class="img-fluid"
            alt=""
          />
        </div>
      </div>

      <div v-if="level === 2" class="row">
        <!-- Level 2 -->
        <div class="col-sm-7">
          <div class="text-light">
            <h4 class="h5 text-semibold mb-3">
              Weekly intermediate football classes for kids
            </h4>
            <p class="mb-4">
              With the basics now in place, it’s time for your child to step
              things up. Our intermediate classes build on existing foundations
              by teaching them how to create space and use the skills learnt at
              the beginner level more effectively and with greater confidence.
            </p>
            <h4 class="h5 text-semibold mb-3">
              Our intermediate class teaches your child the following skills:
            </h4>
            <ul>
              <li>A range of ball mastery skills suitable for their level</li>
              <li>How to create space with their body and skills</li>
              <li>Core 1v1 tricks suitable for their level</li>
              <li>
                Decision making including when and how to use skills against
                defenders
              </li>
            </ul>
          </div>
        </div>
        <div class="col">
          <img
            src="@/src/assets/services/weekly-classes/img-intermediate-group.png"
            class="img-fluid"
            alt="Intermediate Level"
          />
        </div>
      </div>

      <div v-if="level === 3" class="row">
        <!-- Level 3 -->
        <div class="col-sm-7">
          <div class="text-light">
            <h4 class="h5 text-semibold mb-3">
              Weekly advanced football classes for kids
            </h4>
            <p class="mb-4">
              We take your child’s footballing development up yet another gear
              as they move into the advanced group. This is where children
              really begin to feel comfortable with a ball at their feet and
              where that Brazilian style of play begins to truly shine.
            </p>
            <h4 class="h5 text-semibold mb-3">
              Our advanced class teaches your child the following skills:
            </h4>
            <ul>
              <li>
                Physical movements and techniques focusing on speed, agility,
                and balance
              </li>
              <li>
                Advanced ball mastery skills suitable for their level, including
                combinations of skills
              </li>
              <li>Core 1v1 tricks suitable for their level</li>
              <li>How to make better decisions with and without the ball</li>
            </ul>
          </div>
        </div>
        <div class="col">
          <img
            src="@/src/assets/services/weekly-classes/img-advanced-group.png"
            class="img-fluid"
            alt="Advanced Level"
          />
        </div>
      </div>

      <div v-if="level === 4" class="row">
        <!-- Level 4 -->
        <div class="col-sm-7">
          <div class="text-light">
            <h4 class="h5 text-semibold mb-3">
              Weekly proficient football classes for kids
            </h4>
            <p class="mb-4">
              If your child has been with us from the start, this is where we
              bring everything together, and the next Neymar emerges! Our
              proficient group ties together all of the skills, tricks,
              techniques, and footballing knowledge learnt throughout the
              previous three levels while sharpening their problem-solving
              ability through more complex drills and training styles. If your
              child dreams of playing in the Premier League one day, they’ll
              need to pass through our proficiency level.
            </p>
            <h4 class="h5 text-semibold mb-3">
              Our proficient football classes teach your child the following
              skills:
            </h4>
            <ul>
              <li>
                Higher intensity physical movements to develop speed and
                reaction
              </li>
              <li>Complex ball mastery skills suitable for their level</li>
              <li>Core 1v1 tricks suitable for their level</li>
              <li>How to problem solve when under significant pressure</li>
            </ul>
          </div>
        </div>
        <div class="col">
          <img
            src="@/src/assets/services/weekly-classes/img-proficient-group.png"
            class="img-fluid"
            alt="Proficient Level"
          />
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
    padding-top: 12rem;
    padding-bottom: 5rem;

    // Media query solo para pantallas menores a 768px
    @media (max-width: 767px) {
      background-image: url('@/src/assets/services/weekly-classes/bg-benefits-mobil.png');
    }
  }
}

.btn-level {
  @extend .btn;
  @extend .rounded-3;
  transition: all 0.2s ease;
  padding: $spacer;

  &.btn-active {
    // @extend .text-light;
    // font-weight: $font-weight-semibold;
    @extend .btn-warning;
    box-shadow: 0px -1px 23px 0px rgba(255, 222, 20, 0.5);
  }

  &.btn-inactive {
    @extend .btn-outline-warning;

    // @extend .bg-success-subtle;
    // @extend .text-muted;
  }
}
</style>
