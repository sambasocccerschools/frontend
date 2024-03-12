<script setup lang="ts">
const layout = 'weblayout'
</script>

<template>
  <NuxtLayout :name="layout">
    <header class="regional-manager-header bg-info d-flex flex-column">
      <div class="container">
        <div class="row">
          <div class="col-sm-10 mx-auto text-center">
            <h1 class="font-custom text-light display-3 mb-4">
              Apply to be a <br />
              <em class="text-warning">regional manager</em>
            </h1>
            <NuxtLink class="btn btn-warning btn-lg rounded-5 px-4 shadow-lg"
              ><strong>Learn More</strong></NuxtLink
            >
          </div>
        </div>
      </div>
    </header>

    <!-- Do you have the skills  -->

    <!-- Take your coaching to the next level  -->
    <section class="py-4">
      <div class="container">
        <div class="row align-items-center pb-3 pt-5">
          <div class="col">
            <img
              src="@/src/assets/img-coaching-skills.png"
              alt="Take your football coaching to the next level…"
              class="img-fluid"
            />
          </div>
          <div class="col-sm-7">
            <h2 class="h1 text-primary font-custom">
              Do you have the <em class="text-success">skills</em> to oversee,
              manage, and maintain our coaching quality?
            </h2>
            <p class="lead text-muted">
              Samba Soccer Schools are searching for an experienced football
              coach to manage our coaching staff and supervise the quality of
              our football classes.
            </p>
            <p class="lead text-muted">
              The role of a ‘Regional Manager’ requires exceptional management
              and leadership skills as you take on significant responsibility.
            </p>
            <p class="lead text-muted">
              Please read the details below carefully before submitting your
              application and only apply if you meet the eligibility criteria.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section
      class="what-does-role-include bg-primary-texture-with-top-wave-white atext-bg-dark py-5"
    >
      <div class="container">
        <div class="my-5 pt-5 text-center">
          <h2 class="display-4 text-warning font-custom mt-5">
            What does the role include?
          </h2>
          <p class="lead col-sm-6 mx-auto">
            Here is an overview of the six areas our Regional Manager would
            oversee and what each would entail:
          </p>
        </div>
        <!-- Row  -->
        <div class="row py-5">
          <div class="col-sm-4">
            <img
              src="@/src/assets/img-quality-of-classes.png"
              alt="quality of classes"
              class="img-fluid"
            />
          </div>
          <div class="col d-flex">
            <div class="row row-cols-sm-3">
              <!--  -->
              <div class="col">
                <div
                  class="card rounded-5 bg-info h-100 bg-opacity-10 text-center shadow"
                >
                  <div class="card-header bg-success rounded-top-5">
                    <h4 class="text-primary font-custom m-0">
                      Quality of Classes
                    </h4>
                  </div>
                  <div class="card-body">
                    <small class="text-light"
                      >Supervising and maintaining the high standards of
                      coaching at Samba Soccer Schools. This includes overseeing
                      coaching assessments, delivering quality control feedback,
                      and managing issues and concerns, among other
                      tasks.</small
                    >
                  </div>
                </div>
              </div>
              <!--  -->
              <div class="col">
                <div
                  class="card rounded-5 bg-info h-100 bg-opacity-10 text-center shadow"
                >
                  <div class="card-header bg-warning rounded-top-5">
                    <h4 class="text-primary font-custom m-0">
                      Practical Assessments
                    </h4>
                  </div>
                  <div class="card-body">
                    <small class="text-light"
                      >Conducting hands-on practical assessments with potential
                      coaches and compiling data evaluation.</small
                    >
                  </div>
                </div>
              </div>
              <!--  -->
              <div class="col">
                <div
                  class="card rounded-5 bg-info h-100 bg-opacity-10 text-center shadow"
                >
                  <div class="card-header bg-success rounded-top-5">
                    <h4 class="text-primary font-custom m-0">Onboarding</h4>
                  </div>
                  <div class="card-body">
                    <small class="text-light"
                      >Training new coaches using our training checklist.
                      Managing and guiding volunteer/pathway coaches.</small
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Row  -->
        <div class="row py-5">
          <div class="col-sm-4 order-sm-2">
            <img
              src="@/src/assets/img-safety.png"
              alt="Safety"
              class="img-fluid"
            />
          </div>
          <div class="col d-flex order-sm-1">
            <div class="row row-cols-sm-3">
              <!--  -->
              <div class="col">
                <div
                  class="card rounded-5 bg-info h-100 bg-opacity-10 text-center shadow"
                >
                  <div class="card-header bg-success rounded-top-5">
                    <h4 class="text-primary font-custom m-0">
                      Emergency Coaching
                    </h4>
                  </div>
                  <div class="card-body">
                    <small class="text-light"
                      >Setting up emergency coaching contingency plans and
                      acting as a hub for coaching enquiries. Fulfilling the
                      role of emergency coach if necessary.</small
                    >
                  </div>
                </div>
              </div>
              <!--  -->
              <div class="col">
                <div
                  class="card rounded-5 bg-info h-100 bg-opacity-10 text-center shadow"
                >
                  <div class="card-header bg-warning rounded-top-5">
                    <h4 class="text-primary font-custom m-0">
                      Key Performance Indicators
                    </h4>
                  </div>
                  <div class="card-body">
                    <small class="text-light"
                      >Overseeing and reviewing data from KPIs. Compiling
                      quality control reports and customer feedback.</small
                    >
                  </div>
                </div>
              </div>
              <!--  -->
              <div class="col">
                <div
                  class="card rounded-5 bg-info h-100 bg-opacity-10 text-center shadow"
                >
                  <div class="card-header bg-success rounded-top-5">
                    <h4 class="text-primary font-custom m-0">Safety</h4>
                  </div>
                  <div class="card-body">
                    <small class="text-light"
                      >Safeguarding regional lead. Responsible for updating and
                      maintaining company policies.</small
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Become an integral par of the SSS team  -->

    <div class="bg-gray-texture">
      <section class="bg-right-top-corner-coach py-5">
        <div class="container">
          <div class="row my-5">
            <div class="col-sm-7">
              <h2 class="h1 text-primary font-custom mb-4">
                Become an integral part of the Samba Soccer Schools team!
              </h2>
              <p class="lead text-muted">
                We do things a little differently at Samba Soccer Schools and we
                would like to offer you the opportunity to be a crucial part of
                that.
              </p>
              <p class="lead text-muted">
                Our ethos is all about doing things the Brazilian way –
                injecting fun, flair, and freedom into everything we do.
              </p>
              <p class="lead text-muted">
                As one of our Regional Managers, you would benefit in a variety
                of ways…
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="pb-5">
        <div class="container">
          <div class="row row-cols-sm-2 gy-4 pb-5">
            <!--  -->
            <div class="col">
              <div class="card rounded-5 shadow">
                <div class="card-body py-4">
                  <div class="row">
                    <div class="col-auto">
                      <img
                        src="@/src/assets/img-icon-career-progress.svg"
                        alt="img-icon-career-progress"
                        class="img-fluid"
                      />
                    </div>
                    <div class="col">
                      <h4 class="text-primary font-custom">Career Progress</h4>
                      <p class="text-muted lead m-0">
                        There is plenty of scope for career progress as our
                        brand continues to grow in London and beyond through
                        franchising.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--  -->
            <div class="col">
              <div class="card rounded-5 shadow">
                <div class="card-body py-4">
                  <div class="row">
                    <div class="col-auto">
                      <img
                        src="@/src/assets/img-establishing-relationships.svg"
                        alt="img-establishing-relationships"
                        class="img-fluid"
                      />
                    </div>
                    <div class="col">
                      <h4 class="text-primary font-custom">
                        Establishing Relationshipss
                      </h4>
                      <p class="text-muted lead m-0">
                        Working closely with coaches, our Regional Managers
                        provides the platform to really get to know our staff
                        members.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--  -->
            <div class="col">
              <div class="card rounded-5 shadow">
                <div class="card-body py-4">
                  <div class="row">
                    <div class="col-auto">
                      <img
                        src="@/src/assets/img-icon-leadership-responsibilities.svg"
                        alt="img-icon-leadership-responsibilities"
                        class="img-fluid"
                      />
                    </div>
                    <div class="col">
                      <h4 class="text-primary font-custom">
                        Leadership Responsibilities
                      </h4>
                      <p class="text-muted lead m-0">
                        Our Regional Managers will play a large part in shaping
                        the company’s future.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--  -->
            <div class="col">
              <div class="card rounded-5 shadow">
                <div class="card-body py-4">
                  <div class="row">
                    <div class="col-auto">
                      <img
                        src="@/src/assets/img-icon-rewarding-encounters.svg"
                        alt="img-icon-rewarding-encounters"
                        class="img-fluid"
                      />
                    </div>
                    <div class="col">
                      <h4 class="text-primary font-custom">
                        Rewarding Encounters
                      </h4>
                      <p class="text-muted lead m-0">
                        This role is all about helping others develop and
                        improve.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--  -->
            <div class="col">
              <div class="card rounded-5 shadow">
                <div class="card-body py-4">
                  <div class="row">
                    <div class="col-auto">
                      <img
                        src="@/src/assets/img-icon-competitive-salary.svg"
                        alt="img-icon-competitive-salary"
                        class="img-fluid"
                      />
                    </div>
                    <div class="col">
                      <h4 class="text-primary font-custom">
                        Competitive Salary
                      </h4>
                      <p class="text-muted lead m-0">
                        This role comes with a competitive starting salary for
                        the right candidate.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--  -->
            <div class="col">
              <div class="card rounded-5 shadow">
                <div class="card-body py-4">
                  <div class="row">
                    <div class="col-auto">
                      <img
                        src="@/src/assets/img-icon-transferable-skills.svg"
                        alt="img-icon-transferable-skills"
                        class="img-fluid"
                      />
                    </div>
                    <div class="col">
                      <h4 class="text-primary font-custom">
                        Transferable Skills
                      </h4>
                      <p class="text-muted lead m-0">
                        This role will equip our Regional Managers with
                        invaluable skills and experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--  -->
            <div class="col">
              <div class="card rounded-5 shadow">
                <div class="card-body py-4">
                  <div class="row">
                    <div class="col-auto">
                      <img
                        src="@/src/assets/img-icon-sense-of-community.svg"
                        alt="img-icon-sense-of-community"
                        class="img-fluid"
                      />
                    </div>
                    <div class="col">
                      <h4 class="text-primary font-custom">
                        Sense of Community
                      </h4>
                      <p class="text-muted lead m-0">
                        We work really hard to create a sense of belonging for
                        everyone at Samba Soccer Schools, including staff.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Requirements & Our Values  -->
    <section class="bg-regional-manager-details py-5">
      <div class="container">
        <div class="row my-5 py-5">
          <div class="col-sm-6">
            <div class="card rounded-4 h-100 shadow-lg">
              <div class="card-body px-5 pb-2 pt-4">
                <h4 class="text-info h1"><em>Requirements</em></h4>
                <p class="text-muted lead py-2">
                  This is a senior part-time position at Samba Soccer Schools.
                  If you’re interested in the role and meet the below criteria,
                  we would love to hear from you!
                </p>
                <h5 class="font-custom text-primary mb-3">
                  Eligibility Criteria
                </h5>
                <ul class="list-unstyled lead pe-3">
                  <li>
                    <Icon
                      name="ic:baseline-check"
                      class="text-success h4 me-2"
                    />Minimum FA Level 1 in coaching football
                  </li>
                  <li>
                    <Icon
                      name="ic:baseline-check"
                      class="text-success h4 me-2"
                    />Playing experience
                  </li>
                  <li>
                    <Icon
                      name="ic:baseline-check"
                      class="text-success h4 me-2"
                    />Football coaching experience (essential)
                  </li>
                  <li>
                    <Icon
                      name="ic:baseline-check"
                      class="text-success h4 me-2"
                    />Previous experience working in a similar capacity
                  </li>
                  <li>
                    <Icon
                      name="ic:baseline-check"
                      class="text-success h4 me-2"
                    />Leadership/Management experience
                  </li>
                  <li>
                    <Icon
                      name="ic:baseline-check"
                      class="text-success h4 me-2"
                    />Access to a personal vehicle (preferable)
                  </li>
                  <li>
                    <Icon
                      name="ic:baseline-check"
                      class="text-success h4 me-2"
                    />Proficient user of Excel and Word
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-sm-6 mx-auto">
            <div class="card rounded-4 shadow-lg">
              <div class="card-body px-5 pb-2 pt-4">
                <h4 class="text-info h1"><em>Our Values</em></h4>
                <p class="text-muted lead py-2">
                  At Samba Soccer Schools, we adopt a very particular set of
                  values. Our Regional Managers must share our values below.
                </p>
                <h5 class="font-custom text-primary mb-3">Values</h5>
                <ul class="list-unstyled lead pe-3">
                  <li>
                    <Icon
                      name="ic:baseline-check"
                      class="text-success h4 me-2"
                    />Dependability: Reliable, trustworthy and does what they
                    say they will!
                  </li>
                  <li>
                    <Icon
                      name="ic:baseline-check"
                      class="text-success h4 me-2"
                    />Passion: Truly loves what they do and is proud to let
                    people know!
                  </li>
                  <li>
                    <Icon
                      name="ic:baseline-check"
                      class="text-success h4 me-2"
                    />Work Ethic: Never lets a minute go to waste.
                  </li>
                  <li>
                    <Icon
                      name="ic:baseline-check"
                      class="text-success h4 me-2"
                    />People-orientated: Sociable – has a good understanding of
                    human behaviour and knows how to adapt.
                  </li>
                  <li>
                    <Icon
                      name="ic:baseline-check"
                      class="text-success h4 me-2"
                    />Team Player: Willing to sacrifice for the greater good of
                    the team!
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- if you think  -->
    <section class="py-5">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-sm-5">
            <h3 class="display-5 font-custom text-primary">
              If you think you have what it takes, we’d love to hear from you!
            </h3>
          </div>
          <div class="col offset-sm-1">
            <h4 class="text-primary">Further details</h4>
            <ul class="lead">
              <li>Start Date: Immediate</li>
              <li>Hours:Sat & Sun: 9am-6pm</li>
              <li>Salary: £100 per day (Experience dependent)</li>
              <li>Regions available: North, East, South, West London</li>
            </ul>
          </div>
        </div>

        <div class="row py-5">
          <div class="col">
            <p class="text-muted lead text-center">Regional Split</p>
            <img
              src="@/src/assets/img-regional-split.png"
              alt="regional split"
              class="img-fluid"
            />
          </div>
        </div>

        <div class="row py-5">
          <div class="col-sm-7 mx-auto text-center">
            <h3 class="text-success display-5">
              <em>So what are you waiting for?</em>
            </h3>
            <p class="lead text-muted mt-4">
              If you believe you’d be a good fit for the role and would relish
              the opportunity, fill out the application form below.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Apply Today  -->
    <section class="bg-enquire bg-secondary-subtle py-5">
      <div class="container">
        <div class="row py-5">
          <div class="col-sm-4">
            <h4 class="h1 font-custom text-primary">Apply Today</h4>
            <p class="text-muted mt-4">
              Fill in your details below and you can expect to hear from our
              team within 48 hours. Don’t forget to add a cover note and upload
              your CV at the bottom!
            </p>
          </div>
          <div class="col offset-sm-1">
            <WebsiteFormRegionalManager />
          </div>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
header.regional-manager-header {
  min-height: 80rem;
  padding-top: 7rem;
  padding-bottom: 15rem;
  background-image: url('@/src/assets/bg-white-wave-bottom.svg'),
    url('@/src/assets/bg-header-regional-manager.png');
  background-size:
    100% auto,
    cover;
  background-repeat: no-repeat;
  background-position:
    bottom,
    bottom center;
}

.bg-primary-texture {
  background-image: url('@/src/assets/bg-white-wave-top.svg'),
    url('@/src/assets/bg-primary-texture.png');
  background-repeat: no-repeat;
  background-size:
    100% auto,
    cover;
}

.bg-right-top-corner-coach {
  background-image: url('@/src/assets/bg-right-top-corner-coach.png');
  background-repeat: no-repeat;
  background-size: auto;
  background-position: top right;
}

section {
  &.what-does-role-include {
    .card-header {
      height: 5.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &.bg-regional-manager-details {
    background-image: url('@/src/assets/bg-coaching-kids-gym.png');
    background-repeat: no-repeat;
    background-size: cover;
  }
}

.bg-enquire {
  background-image: url('@/src/assets/bg-enquire-splash-green.svg'),
    url('@/src/assets/bg-website-gray-texture.png');
  background-repeat: no-repeat, repeat;
  background-size:
    80% auto,
    cover;
  background-position:
    right center,
    center center;
}
</style>
