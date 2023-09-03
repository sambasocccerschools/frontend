<template>
  <section class="py-5 bg-light bg-gray-texture">
    <div class="container py-5">
      <div class="row">
        <div class="col-sm-8 mx-auto">
          <h3 class="display-4 text-center font-custom text-primary mb-5"><span class="text-success">FAQs</span> About
            Planning
            Football
            Sessions for Children</h3>



          <div class="accordion" id="FAQBlogPostAccordion">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne">
                  <span class="h5">What are the best football drills for kids?</span>
                </button>
              </h2>
              <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                <div class="accordion-body">
                  <p>If you’re interested in some specific football games/drills for kids, click here.</p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo">
                  <span class="h5">What is a warm-up drill?</span>
                </button>
              </h2>
              <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                <div class="accordion-body">
                  <p>Warm-up drills help players get stretched and ready to play by minimising the chance of injury.</p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree">
                  <span class="h5">What are the best fitness drills for soccer?</span>
                </button>
              </h2>
              <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                <div class="accordion-body">
                  <p>If you’re looking for football drills to help improve endurance, click here.</p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseFour">
                  <span class="h5">How do you warm-up for soccer practice?</span>
                </button>
              </h2>
              <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse">
                <div class="accordion-body">
                  <p>There are many different methods to warm up and it’s important you stretch as many muscle groups as
                    possible.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/web/web.scss';

.accordion {
  &-header {
    @extend .rounded-top-4;
  }

  &-button {
    @extend .rounded-4;
  }

  &-item {
    @extend .mb-3;
    @extend .shadow;
    @extend .rounded-4
  }

  &-body {
    @extend .rounded-bottom-4;
  }

}
</style>