<script setup lang="ts">
const layout = "weblayout";
</script>

<template>
  <NuxtLayout :name="layout">
    <header class="bg-header-work-for-us text-center bg-warning">
      <div class="container">
        <div class="row">
          <div class="col-sm-8 mx-auto">
            <h1 class="text-light font-custom display-5 mb-5">
              Join us on our mission to <em class="text-warning">change the way </em> children play football
            </h1>
            <button class="btn btn-lg btn-warning rounded-5 px-4"><strong>Learn More</strong></button>
          </div>
        </div>
      </div>
    </header>

    <section class="bg-secondary-subtle pt-5">
      <div class="container">
        <div class="row py-5">
          <div class="col-sm-5 order-sm-2">
            <img src="@/src/assets/img-looking-for-football-coaching-job.png" alt="img-looking-for-football-coaching-job"
              class="img-fluid">
          </div>
          <div class="col order-sm-1">
            <h1 class="mb-4">
              <span class="font-custom text-primary">Looking for a football coaching</span><em class="text-success"> job?
              </em>
            </h1>
            <p class="text-muted text-muted">If you’re looking for a football coaching job in London that is both
              rewarding and pays well, then look no further!</p>
            <p class="text-muted">At Samba Soccer Schools, we’re building a culture where amazing people (like you) can do
              their best coaching! If you’re ready to develop your coaching skills and help thousands of kids play skilful
              football with a smile, you’ve come to the right place.
              When you join SSS, you become part of our family. We ensure our coaches receive the best training and
              support to develop their coachings skills so you can help your students fulfil their potential..</p>
            <p class="text-muted">So if you think you would be a great addition to our coaching team and are ready to
              accelerate your personal growth, then we’d love to hear from you!</p>
          </div>
        </div>
      </div>


      <div class="bg-primary-waves">
        <div class="container">
          <div class="row mb-4">
            <div class="col-sm-9 mx-auto text-center">
              <h2 class="h1 font-custom text-light"><em class="text-warning">Benefits </em> Of Working With Samba Soccer
                Schools</h2>
            </div>
          </div>
        </div>
        <div class="container-fluid">
          <div class="row row-cols-sm-4 text-center">
            <div class="col">
              <img src="@/src/assets/img-competitive-rates.png" alt="img-competitive-rates" class="img-fluid">
              <h4 class="text-warning font-custom">Competitive Rates</h4>
              <p class="text-light"><small>We offer our coaches competitive salaries compared to other football coaching
                  companies.
                  We have two coaching positions available ranging from £14-18
                  per hour.</small></p>
            </div>
            <div class="col">
              <img src="@/src/assets/img-training-and-support.png" alt="img-training-and-support" class="img-fluid">
              <h4 class="text-success font-custom">Training & Support</h4>
              <p class="text-light"><small>We are committed to ensuring that you can carry out your best coaching. To that
                  end, we make sure that all coaches undergo comprehensive training through our Coach Education programme.
                  You’ll also benefit from our ongoing mentorship and support so you can coach with confidence.</small>
              </p>
            </div>
            <div class="col">
              <img src="@/src/assets/img-premade-session-plans.png" alt="img-premade-session-plans" class="img-fluid">
              <h4 class="text-warning font-custom">Pre-made Session Plans</h4>
              <p class="text-light"><small>When you coach with Samba Soccer Schools, you’ll get access to our coaching
                  syllabus which features detailed lesson plans and videos. This saves you heaps of time from having to
                  create your own session plans.</small></p>
            </div>
            <div class="col">
              <img src="@/src/assets/img-fun-benefits.png" alt="img-fun-benefits" class="img-fluid">
              <h4 class="text-success font-custom">Fun</h4>
              <p class="text-light"><small>We don’t teach ordinary football. So if you’re open to a new challenge, you’ll
                  enjoy learning and teaching a unique style of football that is fun for everyone!

                </small></p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <WebsiteWorkForUsProcess />

    <!-- Before You Apply -->
    <section class="bg-before-you-apply py-5 text-light bg-primary">
      <div class="container-fluid ">
        <div class="row mt-4 mb-5 align-items-center">
          <div class="col-sm-5 offset-sm-1">
            <h2 class="display-5 font-custom mb-5"><em class="text-warning">BEFORE <br> </em> YOU APPLY</h2>
            <p>We’re excited to hear from you! However please read our eligibility criteria. You must meet these
              requirements before you can apply as it will give you the best chance of being selected.</p>
            <p>The football coaching position you are applying for is either for the role as a Lead Coach or a Head Coach.
              Both roles will involve you delivering football classes for children between the ages of 4 and 11 years
              according to our coaching syllabus and in-line with the schools playing philosophy.</p>
            <button class="btn btn-lg rounded-5 btn-warning mt-3 px-4"><strong>Learn More</strong></button>
          </div>
          <div class="col-sm-6">
            <div class="row row-cols-2  align-items-end">
              <div class="col">
                <div class="card rounded-3 bg-info bg-opacity-10 shadow-lg ">
                  <div class="card-body pb-0">
                    <h4 class="text-success font-custom h5">Qualifications:</h4>
                    <ul class="list-unstyled text-light">
                      <li>
                        <Icon name="ic:baseline-check" class="text-success me-2" /><small>Minimum FA Level 1
                          Football</small>
                      </li>
                      <li>
                        <Icon name="ic:baseline-check" class="text-success me-2" /><small>Coaching License
                          (Required)</small>
                      </li>
                      <li>
                        <Icon name="ic:baseline-check" class="text-success me-2" /><small>Driving License
                          (Preferred)</small>
                      </li>
                      <li>
                        <Icon name="ic:baseline-check" class="text-success me-2" /><small>DBS Certificate
                          (Required)</small>
                      </li>
                      <li>
                        <Icon name="ic:baseline-check" class="text-success me-2" /><small>First Aid at Work
                          (Required)</small>
                      </li>
                    </ul>


                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card rounded-3 bg-info bg-opacity-10 shadow-lg ">
                  <div class="card-body">
                    <h4 class="text-success font-custom h5">Requirements:</h4>
                    <ul class="list-unstyled text-light">
                      <li>
                        <Icon name="ic:baseline-check" class="text-success me-2" /><small>Must speak fluent English
                        </small>
                      </li>
                      <li>
                        <Icon name="ic:baseline-check" class="text-success me-2" /><small>Must live in London </small>
                      </li>
                      <li>
                        <Icon name="ic:baseline-check" class="text-success me-2" /><small>Punctuality and Reliability
                        </small>
                      </li>
                      <li>
                        <Icon name="ic:baseline-check" class="text-success me-2" /><small>Confidence and enthusiasm
                        </small>
                      </li>
                      <li>
                        <Icon name="ic:baseline-check" class="text-success me-2" /><small>Must have a passion for
                          football</small>
                      </li>
                    </ul>
                    <strong class="text-success"><small>(Required)</small></strong>


                  </div>
                </div>
              </div>
            </div>
            <div class="row row-cols-2  align-items-start mt-4">
              <div class="col">
                <div class="card rounded-3 bg-info bg-opacity-10 shadow-lg ">
                  <div class="card-body pb-0">
                    <h4 class="text-success font-custom h5">Experience:</h4>
                    <ul class="list-unstyled text-light">
                      <li>
                        <Icon name="ic:baseline-check" class="text-success me-2" /><small>2 Years of experience working
                          with children between 4 and 11 years (Required)</small>
                      </li>
                      <li>
                        <Icon name="ic:baseline-check" class="text-success me-2" /><small>2 or more years playing
                          experience (Required)</small>
                      </li>
                    </ul>


                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card rounded-3 bg-info bg-opacity-10 shadow-lg ">
                  <div class="card-body">
                    <h4 class="text-success font-custom h5">Key Responsibilities:</h4>
                    <ul class="list-unstyled text-light">
                      <li>
                        <Icon name="ic:baseline-check" class="text-success me-2" /><small>To deliver classes in accordance
                          with our coaching syllabus
                        </small>
                      </li>
                      <li>
                        <Icon name="ic:baseline-check" class="text-success me-2" /><small>To carry out safety checks
                          before each session</small>
                      </li>
                      <li>
                        <Icon name="ic:baseline-check" class="text-success me-2" /><small>To completing administration
                          responsibilities after each class
                        </small>
                      </li>
                    </ul>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Enquire  -->
    <section class="bg-enquire-splash-light-blue py-5">
      <div class="container">
        <div class="row py-5">
          <div class="col-sm-4">
            <h4 class="h1 font-custom text-primary">Application form</h4>
            <p class="text-muted mt-4">Like what you hear? If you meet our eligibility criteria, then we’d love to hear
              from you. Fill out the form below and a member of our recruitment team will get in touch with you. Good
              luck!</p>
          </div>
          <div class="col offset-sm-1">
            <WebsiteWorkForUsForm />
          </div>
        </div>
      </div>
    </section>




  </NuxtLayout>
</template>

<style lang="scss" scoped>
.bg-header-work-for-us {
  background-image: url('@/src/assets/bg-header-work-for-us.png');
  background-size: cover;
  background-position: center center;
  min-height: 90vh;
  display: flex;
  align-items: center;
}

.bg-primary-waves {
  background-image: url('@/src/assets/bg-primary-waves.svg');
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: cover;
  // min-height: 30vh;
  padding-top: 10rem;
  padding-bottom: 5rem
}

.bg-before-you-apply {
  background-image: url('@/src/assets/bg-primary-texture.svg');

}

.bg-enquire-splash-light-blue {
  background-image: url('@/src/assets/bg-enquire-splash-light-blue.svg');
  background-repeat: no-repeat;
  background-size: 80% auto;
  background-position: right center;
}
</style>