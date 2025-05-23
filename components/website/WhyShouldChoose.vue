<template>
  <section class="bg-why-should ptm-60 pbm-60 plm-40 prm-40 py-4">
    <div class="d-none d-md-block container">
      <div class="card rounded-4 bg-card border-0">
        <div class="card-body px-5">
          <div class="row align-items-center">
            <div class="col-sm-8 py-4">
              <h3 class="display-6 text-success mb-4">
                <em>WHY SHOULD I CHOOSE</em>
                <div class="text-primary font-custom">
                  your weekly football classes
                </div>
              </h3>
              <p class="text-muted lead">
                Weekly classes are an excellent way to develop skills on a
                consistent basis, build confidence, make friends, establish a
                healthy routine, and have a lot of fun along the way - but
                actions speak louder than words. Why not book a free trial class
                with Samba Soccer Schools, and we’ll be more than happy to show
                you what we do. 
              </p>
            </div>
            <div class="col height-100">
              <WebsiteFormSelectVenue />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="d-block d-md-none">
      <div class="card rounded-4 plm-42 prm-42 ptm-45 pbm-45">
        <div class="row align-items-center">
          <div class="col-12">
            <h3 class="fsm-32 text-success lhm-38 mbm-23 mb-4">
              <em>WHY SHOULD I CHOOSE</em>
              <div class="fsm-32 text-primary font-custom lhm-38 mtm-10">
                your weekly football classes?
              </div>
            </h3>
            <p class="text-muted lead font-poppins fsm-16 lhm-25">
              We believe football should be taught regularly and in a way that
              allows children to express themselves, build confidence, develop
              skills, make friends, and have the time of their lives while doing
              it. Weekly classes with Samba Soccer Schools provide just this. An
              hour a week of fun, action-packed, samba-filled, breathtaking
              football that your child is going to adore. <br /><br />Still not
              sure? Why not book a free trial class with Samba Soccer Schools?
              We’ll be more than happy to show you what we do and why we’re the
              best.
            </p>
          </div>
          <div class="col height-100">
            <WebsiteFormSelectVenue />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section.bg-why-should {
  background-image: url('@/src/assets/bg-yellow-green-texture.svg');
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 767px) {
    background-image: url('@/src/assets/services/weekly-classes/bg-book-a-free-trial-mobil.svg');
  }
}

.bg-card {
  background-color: #fdfdff;
}
</style>
