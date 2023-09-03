<script setup lang="ts">
const layout = "weblayout";
</script>

<template>
  <NuxtLayout :name="layout">
    <header class="bg-primary">
      <div class="ratio ratio-16x9">
        <!-- <iframe src="https://youtu.be/qFMjG07ivQI?si=4D151fGSqY8c_ych" title="YouTube video" allowfullscreen></iframe> -->
        <iframe loading=lazy src=" https://youtu.be/qFMjG07ivQI?si=4D151fGSqY8c_ych" title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
      </div>
    </header>
    <section class="bg-secondary-subtle pt-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-sm-4">
            <img src="@/src/assets/img-welcome-to-sss-coaching-pathway.png" alt="img-welcome-to-sss-coaching-pathway"
              class="img-fluid">
          </div>
          <div class="col">
            <h1 class="mb-4">
              <em class="text-success">Welcome </em> <span class="font-custom text-primary">to the SSS Coaching
                Pathway</span>
            </h1>
            <p class="text-muted text-muted">If you’ve always dreamed about being a football coach but never found a way
              into
              the
              profession, our coaching
              pathway is for you. We’re looking for people with a strong desire to coach, a passion for stylish,
              attractive
              football, and the motivation to make their dreams a reality. </p>
            <p class="text-muted">If coaching is what you’ve always wanted to do, why not put the building blocks into
              place and
              construct the life you’ve always wanted to live? Forget that boring office 9-5 job - imagine coaching
              football daily.</p>
          </div>

          <div class="row mt-5 align-items-center mb-5">
            <div class="col">
              <p class="text-muted">The Samba Soccer Schools Coaching Pathway is a free 6-week course that text-muteds
                you
                through the
                basics of coaching and helps you establish proven structures that can be applied to any situation,
                anywhere. It is designed to lay the foundations for a successful coaching career by providing you with
                confidence, knowledge, and real-world situations to practise in.</p>
              <p class="text-muted">
                Samba Soccer Schools is rapidly expanding, and we’re often looking for new coaches to join our team. Those
                who excel on our Coaching Pathway will be offered coaching jobs, but everybody who completes the course
                should feel prepared to take on their FA Level 1 and 2 coaching badges and have acquired the skills to
                make them employable in the football industry.
              </p>
              <p class="text-info"><strong>If you’re ready to act on that long-standing dream and become the
                  coach
                  you’ve
                  always thought you had inside, scroll down to some more information and an application form. </strong>
              </p>
            </div>
            <div class="col-sm-4">
              <img src="@/src/assets/img-coaching-reunion.png" alt="img-coaching-reunion" class="img-fluid">
            </div>
          </div>
        </div>
      </div>

      <div class="bg-primary-waves">
        <div class="container">

          <div class="row mb-4">
            <div class="col-sm-9 mx-auto text-center">
              <h2 class="h1 font-custom text-light">What are the <em class="text-warning">benefits </em> of the SSS
                Coaching
                Pathway?</h2>
              <p class="text-light">We applaud anybody who follows their dream, and if football coaching is yours,
                let’s work together.
                There are several major benefits that taking the SSS Coaching Pathway can have. </p>
            </div>
          </div>


        </div>
        <div class="container-fluid">
          <div class="row row-cols-2 gy-4">
            <div class="col">
              <div class="card rounded-4 bg-info bg-opacity-10 shadow-lg h-100">
                <div class="card-body d-flex">
                  <div class="row align-items-center">
                    <div class="col-sm-5">
                      <img src="@/src/assets/img-develop-a-new-skill.png" alt="img-develop-a-new-skill" class="img-fluid">
                    </div>
                    <div class="col">
                      <h4 class="text-warning font-custom">Develop a New Skill</h4>
                      <small class="text-light">Football is a passion that grips many of us - usually beginning with
                        playing but sometimes
                        eventually moving into coaching. If you’ve always thought you had what it takes to develop the
                        abilities of others through your own knowledge and love of the game, our pathway course is your
                        entry into this exciting yet often hard-to-enter industry. We’ll teach you our fine-tuned coaching
                        structure that you can apply to any coaching situation, regardless of age or ability.     </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card rounded-4 bg-info bg-opacity-10 shadow-lg h-100">
                <div class="card-body d-flex">
                  <div class="row align-items-center">
                    <div class="col-sm-5">
                      <img src="@/src/assets/img-earn-through-what-you-love.png" alt="img-earn-through-what-you-love"
                        class="img-fluid">
                    </div>
                    <div class="col">
                      <h4 class="text-light font-custom">Earn through what you love</h4>
                      <small class="text-light">Is there anything better than waking up in the morning and going to a job
                        that you adore? For those who live and breathe football, coaching allows you to earn a living
                        doing what you truly love. Upon completion of the course, we’ll direct you towards your FA
                        qualifications or a Sports Apprenticeship, and the very best will be offered a job right there and
                        then with Samba Soccer Schools and/or other partner clubs.  </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card rounded-4 bg-info bg-opacity-10 shadow-lg h-100">
                <div class="card-body d-flex">
                  <div class="row align-items-center">
                    <div class="col-sm-5">
                      <img src="@/src/assets/img-expand-your-network.png" alt="img-expand-your-network" class="img-fluid">
                    </div>
                    <div class="col">
                      <h4 class="text-light font-custom">Expand your Network </h4>
                      <small class="text-light">The SSS Coaching Pathway brings together like-minded individuals with an
                        aptitude for success. It provides entry into an industry that can be difficult to crack, allowing
                        you to meet coaches and others within the football world who can help you along the way as you
                        embark on this new profession. </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card rounded-4 bg-info bg-opacity-10 shadow-lg h-100">
                <div class="card-body d-flex">
                  <div class="row align-items-center">
                    <div class="col-sm-5">
                      <img src="@/src/assets/img-personal-growth.png" alt="img-personal-growth" class="img-fluid">
                    </div>
                    <div class="col">
                      <h4 class="text-warning font-custom">Personal Growth</h4>
                      <small class="text-light">If you’re already leaning towards a football career, you’re already
                        blazing a trail that few dare attempt. Life is short, so what waste it doing things you dislike or
                        even hate? We firmly believe that establishing a career in a profession you love is something
                        everybody should try to do as it almost always makes us better people. Our Coaching Pathway
                        establishes the coaching foundations and teaches skills far beyond the football pitch, and the
                        personal growth can be extraordinary.   </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <WebsiteWhyLearnFromUs />

    <!-- Requirements  -->
    <section class="py-5">
      <div class="container">
        <div class="text-center mt-4">
          <h2 class="h1 text-info"><em>Requirements</em></h2>
          <div class="row col-sm-8 mx-auto">
            <p class="text-muted"><strong>Please check our eligibility criteria for joining our Pathway course before you
                submit
                your application.</strong>
            </p>
          </div>
        </div>

      </div>
      <div class="container-fluid">
        <div class="card bg-info text-light shadow-lg rounded-4 border-0 my-4">
          <div class="card-body text-center py-4 ">
            <h4 class="text-warning font-custom d-inline mx-2 p-0">Eligibility Criteria</h4>
            <span class="d-inline align-items-center">
              <Icon name="bi:check2-circle" class="text-warning h2 me-2" />Aged 16-30
            </span>
            <span class="d-inline align-items-center">
              <Icon name="bi:check2-circle" class="text-warning h2 me-2" />A strong passion for football coaching
            </span>
            <span class="d-inline align-items-center">
              <Icon name="bi:check2-circle" class="text-warning h2 me-2" />An eagerness to learn 
            </span>
            <span class="d-inline align-items-center">
              <Icon name="bi:check2-circle" class="text-warning h2 me-2" />Self-confidence
            </span>
            <span class="d-inline align-items-center">
              <Icon name="bi:check2-circle" class="text-warning h2 me-2" />Team player
            </span>
            <span class="d-inline align-items-center">
              <Icon name="bi:check2-circle" class="text-warning h2 me-2" />Playing experience (preferably a minimum of 1-2
              years)
            </span>
            <span class="d-inline align-items-center">
              <Icon name="bi:check2-circle" class="text-warning h2 me-2" />Football coaching experience (preferable but
              not
              essential)
            </span>
            <span class="d-inline align-items-center">
              <Icon name="bi:check2-circle" class="text-warning h2 me-2" />Football coaching qualifications (preferable
              but
              not essential)
            </span>
            <span class="d-inline align-items-center">
              <Icon name="bi:check2-circle" class="text-warning h2 me-2" />A desire to make football coaching a long-term
              profession
            </span>
            <span class="d-inline align-items-center">
              <Icon name="bi:check2-circle" class="text-warning h2 me-2" />A commitment of time and energy to further your
              coaching development
            </span>
          </div>
        </div>

        <p class="text-center text-muted mb-4">If you feel you tick these boxes, we’d love to hear from you! Continue
          reading to
          find out
          what your next steps
          are. </p>
      </div>
    </section>

    <section class="bg-course-details py-5">
      <div class="container">
        <div class="text-center">
          <h2 class="h1 text-light font-custom mt-4">Course Details</h2>
          <div class="row">
            <div class="col-sm-10 mx-auto">
              <p class="lead text-light mb-4"><strong>The SSS Coaching Pathway lasts six weeks, with seven courses
                  throughout the
                  year, and
                  classes are held on Tuesday evenings between 7-8 pm at the King Solomon Academy near Edgware Road in
                  London. 
                </strong>
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-auto mx-auto">
            <div class="card rounded-4 shadow-lg">
              <div class="card-body pb-2 pt-4 px-5">
                <h4 class="text-info h5"><strong>Course dates:</strong></h4>
                <ul class="list-unstyled pe-3">
                  <li><strong class="text-info py-2 d-inline-block">Course 1:</strong> Tuesday 12th - Tuesday 17th October
                    (6
                    weeks)
                  </li>
                  <li><strong class="text-info py-2 d-inline-block">Course 2:</strong> Tuesday 31st October - Tuesday 5th
                    December  (6 weeks)
                  </li>
                  <li><strong class="text-info py-2 d-inline-block">Course 3:</strong> Tuesday 9th Jan - Tuesday 13th Feb
                    (6
                    weeks)
                  </li>
                  <li><strong class="text-info py-2 d-inline-block">Course 4:</strong> Tuesday 20th Feb - Tuesday 26th
                    March
                    (6 weeks)
                  </li>
                  <li><strong class="text-info py-2 d-inline-block">Course 5:</strong> Tuesday 16th April  - Tuesday 21st
                    May (6 weeks)
                  </li>
                  <li><strong class="text-info py-2 d-inline-block">Course 6:</strong> Tuesday 4th June - Tuesday 9th July
                    (6 weeks)
                  </li>
                  <li><strong class="text-info py-2 d-inline-block">Course 7:</strong> Tuesday 23rd July - Tuesday 27th
                    August (6 weeks) 
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How does the programme work? -->

    <section class="bg-green-blue-waves py-5">
      <div class="container">
        <div class="card border-success border-5 rounded-5">
          <div class="card-body py-4 px-5">
            <h2 class="h1 text-center text-primary font-custom">How does the programme work?</h2>
            <p class="text-center text-primary">Here are the details of our Coaching Pathway course
            </p>
            <div class="row row-cols-sm-2 text-muted">
              <div class="col">
                <p>Our Pathway Course is designed to teach you our core coaching methodology, allowing you to apply the
                  same principles within any coaching environment. While we like to encourage children to have fun and
                  play football with freedom, training sessions are still well-structured, with a robust syllabus
                  perfected over more than ten years.  </p>
                <p>Every week, students focus on a particular exercise the tutor demonstrates for around 10 minutes. You
                  will then be asked to imitate the activity in front of your tutor, who will make suggestions and advise
                  as you go before delivering overall feedback once the exercise is complete. </p>
                <p>We’ll be focusing on how well you carry out the set exercises but also how well you build a rapport
                  with others in the class who will be acting as students. Good student rapport is non-negotiable at Samba
                  Soccer Schools as we believe this helps us stand out from other football schools. We’re not looking for
                  robots who simply set drills and shout-out instructions. Rapport, banter, good conversation - call it
                  what you will - it’s essential in what we do.</p>
              </div>
              <div class="col">
                <p>Your six training sessions are complemented by our online training programme that offers further
                  theoretical guidance and health and safety information that is vital if you hope to work in the football
                  industry. </p>
                <p>There’s no pass or fail in our Pathway Course, but students who have shown an outstanding aptitude for
                  coaching will be invited to a real Samba Soccer class and asked to demonstrate their skills in a
                  real-world situation. And if that goes well, we often have coaching positions available, so a training
                  course can become a full-time job before you know it.</p>
                <p>So what are you waiting for? If you like a challenge and want to build your football coaching
                  experience, apply for a space on our football coaching course today and turn that long-standing dream
                  into a reality. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Apply Today  -->
    <section class="bg-enquire-splash py-5">
      <div class="container">
        <div class="row py-5">
          <div class="col-sm-4">
            <em class="h3 text-info">Step 1 </em>
            <h4 class="h1 font-custom text-primary">Enquire today</h4>
            <p class="text-muted mt-4">Your Samba Soccer Schools franchise journey begins here. Simply fill out the
              form
              below,
              and we’ll be in touch within 48 hours to answer any questions and get you started on your franchise
              journey.  </p>
          </div>
          <div class="col offset-sm-1">
            <WebsiteCoachingPathwayForm />
          </div>
        </div>
      </div>
    </section>

  </NuxtLayout>
</template>

<style lang="scss" scoped>
.bg-primary-waves {
  background-image: url('@/src/assets/bg-primary-waves.svg');
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: cover;
  // min-height: 30vh;
  padding-top: 10rem;
  padding-bottom: 5rem
}


.bg-gray-texture {
  background-image: url('@/src/assets/bg-website-gray-texture.png');
  background-repeat: repeat;
}

.bg-course-details {
  background-image: url('@/src/assets/bg-course-details.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

section {
  &.bg-green-blue-waves {
    background-image: url('@/src/assets/bg-green-blue-waves.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }

  &.bg-enquire-splash {
    background-image: url('@/src/assets/bg-enquire-splash-light-blue.svg');
    background-repeat: no-repeat;
    background-size: 80% auto;
    background-position: right center;
  }
}
</style>