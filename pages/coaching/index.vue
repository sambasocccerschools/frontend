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
</style>