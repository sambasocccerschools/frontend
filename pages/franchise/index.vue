<script setup lang="ts">
const layout = "weblayout";
</script>

<template>
  <NuxtLayout :name="layout">
    <header class="franchise-header bg-info d-flex flex-column ">
      <div class="container">
        <div class="row">
          <div class="col-sm-10 mx-auto text-center">
            <h1 class="font-custom text-light mb-4">Increase your income and wake up each day doing what you love</h1>
            <NuxtLink class="btn btn-warning btn-lg rounded-5">Learn More</NuxtLink>
          </div>
        </div>
      </div>
    </header>



    <!-- Weekly Fotball classes -->
    <section class="py-5">
      <div class="bg-player-airkick">
        <div class="container">
          <div class="row">
            <div class="col offset-sm-5">
              <h2 class="h1 font-custom text-primary">Start Your Football Franchise With Samba Soccer Schools</h2>
              <p class="text-muted">Have you ever thought about starting your own children’s football coaching business?
                But felt put off by the complicated setup process and high-level market competition? Franchising through
                Samba Soccer Schools allows you to hurdle those arduous steps by providing the tools and expertise needed
                to succeed - and do it quickly. </p>
              <p class="text-muted">Our franchise business model offers a comprehensive setup package to help you create
                your successful children’s football coaching business - and includes the following:</p>
              <ul class="text-muted list-unstyled">
                <li>
                  <Icon name="ic:baseline-check" class="text-success h4 me-2" />Expert support and guidance
                </li>
                <li>
                  <Icon name="ic:baseline-check" class="text-success h4 me-2" />Professional coaching syllabus
                </li>
                <li>
                  <Icon name="ic:baseline-check" class="text-success h4 me-2" />Trusted Samba Soccer Schools brand
                </li>
                <li>
                  <Icon name="ic:baseline-check" class="text-success h4 me-2" />Synco - Our purpose-built CRM software
                  package
                </li>
              </ul>
              <NuxtLink to="/" class="btn btn-success btn-lg text-light rounded-5 px-4"><span class="text-semibold">Read
                  More???</span></NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Take your coaching to the next level  -->
    <section class="py-5 bg-warning">
      <div class="container">
        <div class="row align-items-center pt-5 pb-3">
          <div class="col-sm-7">
            <h2 class="h2"><span class="font-custom text-primary">Transforming your football coaching into a </span><em
                class="text-info">viable business</em>
            </h2>
            <p class="text-muted">Using our established and successful brand, franchising with Samba Soccer Schools gives
              you an immediate and effective advantage over competitors. </p>
            <p class="text-muted">We’ve been doing this for over ten years, so you can trust us to lead you through the
              early difficulties that every football coaching business experiences. </p>
            <p class="text-muted">With dozens of venues across London and a growing brand, we’re the perfect people to
              assist you with everything from securing venues and hiring coaches to marketing and managing your business. 
            </p>
            <p class="text-muted">Want to make a living doing what you love? Contact us today and discuss how we can help
              you achieve your dream and set up a robust and lucrative children’s football coaching business. </p>
          </div>
          <div class="col">
            <img src="@/src/assets/img-take-your-football-coaching-to-next-level.png"
              alt="Take your football coaching to the next level…" class="img-fluid">
          </div>
        </div>
      </div>
    </section>


    <!--  -->
    <section class="bg-gray-texture py-5">
      <div class="container-fluid">
        <div class="row mb-5 mt-4">
          <div class="col-sm-6 mx-auto text-center">
            <h2 class="h1">
              <span class="font-custom text-primary">What Samba Soccer Schools</span> <em class="text-success">Offer
                You</em>
            </h2>
            <p class="text-muted ">Our franchise opportunity is designed to provide you with the tools and the know-how to
              push you above your local competitors from the very start.   
            </p>
          </div>
        </div>

        <div class="row row-cols-2 gy-4 mb-5">
          <!--  -->
          <div class="col">
            <div class="card shadow-lg border-0 rounded-4 h-100 ">
              <div class="card-body d-flex">
                <div class="row align-items-center align-items-center">
                  <div class="col-sm-5">
                    <img src="@/src/assets/img-offer-1.png" alt="" class="img-fluid">
                  </div>
                  <div class="col">
                    <h4 class="h3 font-custom text-success">Exclusive Territory</h4>
                    <small class="text-muted">Each SSS franchise holder operates in their own exclusive territory. Our
                      specially designed
                      mapping system defines your exclusive, protected territory. This means you can focus on dominating
                      your region without looking over your shoulder.</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--  -->
          <div class="col">
            <div class="card shadow-lg border-0 rounded-4 h-100 ">
              <div class="card-body d-flex">
                <div class="row align-items-center align-items-center">
                  <div class="col-sm-5">
                    <img src="@/src/assets/img-offer-2.png" alt="" class="img-fluid">
                  </div>
                  <div class="col">
                    <h4 class="h3 font-custom text-success">The SSS Brand</h4>
                    <small class="text-muted">Our brand and trademark are instantly recognisable across the London area,
                      but creating your own successfully can take years. Franchising with us means you can skip to the
                      front of the queue by using our name, imagery, personalised website layout, and booking system to
                      draw customers to you quickly.</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--  -->
          <div class="col">
            <div class="card shadow-lg border-0 rounded-4 h-100 ">
              <div class="card-body d-flex">
                <div class="row align-items-center align-items-center">
                  <div class="col-sm-5">
                    <img src="@/src/assets/img-offer-3.png" alt="" class="img-fluid">
                  </div>
                  <div class="col">
                    <h4 class="h3 font-custom text-success">Coaching Syllabus</h4>
                    <small class="text-muted">Creating a coaching syllabus is vital for providing the kind of services
                      customers want to keep returning to - but doing it yourself can take months. With a SSS franchise,
                      you get an organised coaching programme ready to go from Day 1. Our syllabus provides
                      minute-by-minute instructions on how to deliver high-quality classes cutting down your set-up time
                      dramatically.</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--  -->
          <div class="col">
            <div class="card shadow-lg border-0 rounded-4 h-100 ">
              <div class="card-body d-flex">
                <div class="row align-items-center align-items-center">
                  <div class="col-sm-5">
                    <img src="@/src/assets/img-offer-4.png" alt="" class="img-fluid">
                  </div>
                  <div class="col">
                    <h4 class="h3 font-custom text-success">Synco</h4>
                    <small class="text-muted">At the core of our franchise package is our purpose-built CRM software that
                      slashes administration time by up to 80%.
                      Organising a thriving business isn’t easy, but with Samba Soccer Schools, we provide the tools to
                      simplify the whole process. Synco has transformed how we operate by cutting the tedious side of
                      business operations down to the bare minimum, leaving you to focus on the exciting side
                      instead.</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--  -->
          <div class="col">
            <div class="card shadow-lg border-0 rounded-4 h-100 ">
              <div class="card-body d-flex">
                <div class="row align-items-center align-items-center">
                  <div class="col-sm-5">
                    <img src="@/src/assets/img-offer-5.png" alt="" class="img-fluid">
                  </div>
                  <div class="col">
                    <h4 class="h3 font-custom text-success">Coaching Education</h4>
                    <small class="text-muted">We have included everything you need to recruit and train coaches within the
                      Coach Pro app, saving you enormous work. It contains detailed video guidance on recruitment, quality
                      control and Samba Soccer Schools class delivery to ensure your customers get the best coaching by
                      the best coaches out there.</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--  -->
          <div class="col">
            <div class="card shadow-lg border-0 rounded-4 h-100 ">
              <div class="card-body d-flex">
                <div class="row align-items-center align-items-center">
                  <div class="col-sm-5">
                    <img src="@/src/assets/img-offer-6.png" alt="" class="img-fluid">
                  </div>
                  <div class="col">
                    <h4 class="h3 font-custom text-success">Guidance and Consultancy</h4>
                    <small class="text-muted">Starting a business is never easy, so having somebody guide you through the
                      early stages and help with consultancy whenever you have questions or issues can make all the
                      difference. Each SSS Franchisee is assigned their own franchise manager to help set achievable goals
                      and actionable targets, while our detailed online course is freely available to assist with
                      everything from marketing to customer service.</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Are We a good fit  -->
    <section class="bg-primary-texture py-5">
      <div class="container">
        <div class="text-center">
          <h2 class="h1 font-custom text-light">Are we a <em class="text-warning">Good Fit?</em></h2>
          <div class="row">
            <div class="col-sm-11 mx-auto">
              <p class="text-light">We'd love to hear from you if you like the sound of what we do and think you might be
                a
                good fit to join the exciting and ever-expanding Samba Soccer Schools franchise. We’re always looking for
                passionate and motivated people to partner with, so if you tick the following boxes, get in contact today.
              </p>

            </div>
            <div class="row row-cols-sm-6 mt-5 gx-3">
              <!--  -->
              <div class="col">
                <div class="card bg-primary rounded-4 h-100">
                  <div class="card-body px-2 align-items-center d-flex flex-column text-light">
                    <span class="icon-good-fit bg-success text-primary">
                      <Icon name="ic:twotone-star-border" />
                    </span>
                    <small>A strong passion for children’s football coaching</small>
                  </div>
                </div>
              </div>
              <!--  -->
              <div class="col">
                <div class="card bg-primary rounded-4 h-100">
                  <div class="card-body px-2 align-items-center d-flex flex-column text-light">
                    <span class="icon-good-fit bg-info text-primary">
                      <Icon name="material-symbols:star-outline-rounded" />
                    </span>
                    <small>Minimum two years of football coaching experience (Aged 4-12)</small>
                  </div>
                </div>
              </div>
              <!--  -->
              <div class="col">
                <div class="card bg-primary rounded-4 h-100">
                  <div class="card-body px-2 align-items-center d-flex flex-column text-light">
                    <span class="icon-good-fit bg-success text-primary">
                      <Icon name="ion:ios-football" />
                    </span>
                    <small>Love the Brazilian way of playing football</small>
                  </div>
                </div>
              </div>
              <!--  -->
              <div class="col">
                <div class="card bg-primary rounded-4 h-100">
                  <div class="card-body px-2 align-items-center d-flex flex-column text-light">
                    <span class="icon-good-fit bg-success text-primary">
                      <Icon name="mdi:chat-processing-outline" />
                    </span>
                    <small>Good communication skills</small>
                  </div>
                </div>
              </div>
              <!--  -->
              <div class="col">
                <div class="card bg-primary rounded-4 h-100">
                  <div class="card-body px-2 align-items-center d-flex flex-column text-light">
                    <span class="icon-good-fit bg-info text-primary">
                      <Icon name="fluent:target-arrow-16-regular" />
                    </span>
                    <small>Self-motivation</small>
                  </div>
                </div>
              </div>
              <!--  -->
              <div class="col">
                <div class="card bg-primary rounded-4 h-100">
                  <div class="card-body px-2 align-items-center d-flex flex-column text-light">
                    <span class="icon-good-fit bg-success text-primary">
                      <Icon name="ph:presentation-chart-bold" />
                    </span>
                    <small>Entrepreneurial skills </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- Your Next Steps  -->
    <section class="bg-gray-texture py-5">
      <div class="container">
        <div class="text-center">
          <h2 class="h1 text-primary"><span class="font-custom">Your next <em class="text-success">steps...</em></span>
          </h2>
          <div class="row">
            <div class="col-sm-10 mx-auto">
              <p class="text-muted">If you ticked all of the boxes above, you’re already well on your way. We’ve
                streamlined our entire application process into four simple steps so we can find out quickly if
                franchising with Samba Soccer
                Schools is right for you. </p>
            </div>

            <!-- Timeline -->
            <div class="bg-timeline my-5 ">
              <!-- 1  -->
              <div class="row align-items-center pb-4">
                <div class="col-sm-4 offset-sm-2 order-sm-2">
                  <img src="@/src/assets/img-enquire.svg" alt="Enquire" class="img-fluid">
                </div>
                <div class="col-sm-4 offset-sm-1 order-sm-1">
                  <h4 class="text-success font-custom">Enquire</h4>
                  <small class="text-muted">Simply fill out the short application form at the bottom of this page to let
                    us know you’re interested in our football coaching franchise, and we’ll be in touch shortly. </small>
                </div>
              </div>
              <!-- 2  -->
              <div class="row align-items-center py-4">
                <div class="col-sm-6">
                  <img src="@/src/assets/img-phone-call.svg" alt="Phone Call" class="img-fluid">
                </div>
                <div class="col-sm-4 offset-sm-1 text-center">
                  <h4 class="text-info font-custom">Phone Call</h4>
                  <small class="text-muted">One of our team will give you a call within 48 hours to discuss your needs and
                    business ideas. This also allows us to answer any questions you might have before we send you our
                    official franchise prospectus with everything you need to know. </small>
                </div>
              </div>
              <!-- 3 -->
              <div class="row align-items-center py-4">
                <div class="col-sm-4 offset-sm-2 order-sm-2">
                  <img src="@/src/assets/img-meet-with-us.svg" alt="Meet with us" class="img-fluid">
                </div>
                <div class="col-sm-4 offset-sm-1 order-sm-1">
                  <h4 class="text-success font-custom">Meet with us</h4>
                  <small class="text-muted">Get to know the management team behind Samba Soccer Schools with a
                    face-to-face meeting where we’ll be happy to discuss the franchise process and answer any questions
                    you still have. </small>
                </div>
              </div>
              <!-- 4  -->
              <div class="row align-items-center pt-4">
                <div class="col-sm-6">
                  <img src="@/src/assets/img-watch-a-lesson.svg" alt="Watch a lesson" class="img-fluid">
                </div>
                <div class="col-sm-4 offset-sm-1">
                  <h4 class="text-info font-custom">Watch A Lesson</h4>
                  <small class="text-muted">Observe one of our lessons in person to see how it all works while also having
                    the opportunity to speak to our coaches and operations manager.  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Enquire  -->
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
            <WebsiteFormFranchise />
          </div>
        </div>
      </div>
    </section>

  </NuxtLayout>
</template>

<style lang="scss" scoped>
.franchise-header {
  min-height: 80vh;
  padding-top: 7rem;
  padding-bottom: 15rem;
  background-image: url('@/src/assets/bg-white-wave-bottom.svg'), url('@/src/assets/bg-header-franchise.png'), ;
  // background-size: cover;
  // background-position: center 20%;
  background-size: 100% auto, cover;
  background-repeat: no-repeat;
  background-position: bottom center, bottom center;
}

.bg-player-airkick {
  background-image: url('@/src/assets/img-player-airkick.png');
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: center left;
  // padding-top: 4rem;
  // padding-bottom: 8rem;
}

.icon-good-fit {
  height: 3rem;
  width: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 2rem;
  margin-bottom: 1rem;
  margin-top: -2.2rem;
}

section {

  &.bg-enquire-splash {
    background-image: url('@/src/assets/bg-enquire-splash-green.svg');
    background-repeat: no-repeat;
    background-size: 80% auto;
    background-position: right center;
  }
}

.bg-timeline {
  background-image: url('@/src/assets/bg-timeline-4-steps.svg');
  background-repeat: no-repeat;
  background-position: center top;
  background-size: auto 100%;
}
</style>