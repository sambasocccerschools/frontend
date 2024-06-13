<script setup lang="ts">
const layout = 'weblayout'
</script>

<template>
  <NuxtLayout :name="layout">
    <header class="bg-header-birthday-party align-items-center d-flex">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6"></div>
          <div class="col-12 col-md-6">
            <h1 class="display-3">
              <em class="text-light">Football Birthday</em><br />
              <strong class="text-warning font-custom"
                >Parties,<br />
                Samba Style</strong
              >
            </h1>
            <NuxtLink
              to="#book"
              class="btn btn-primary text-light btn-lg rounded-5 mt-4 px-4"
              ><strong>Enquire today</strong>
            </NuxtLink>
          </div>
        </div>
      </div>
    </header>
    <!--   -->
    <section class="py-5">
      <div class="my-5">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-4">
              <img
                src="@/src/assets/img-player-celebration.png"
                style="max-width: 100%"
              />
            </div>
            <div class="col-12 col-md-8">
              <h2 class="display-5 text-primary font-custom">
                Football birthday parties in London with Samba Soccer Schools
              </h2>
              <p class="text-muted">
                Are you looking for that perfect, stress-free birthday party for
                your child that everybody at school will be talking about?
                Welcome to the world of Samba Soccer Schools birthday parties -
                where Brazilian football is the name of the game, and everybody
                rocks to the samba beat with huge smiles on their faces. 
              </p>
              <p class="text-muted">
                These are birthday parties like you’ve never seen. Forget all
                that preparation hassle, the overpriced clown, and the hours of
                cleanup. Letting Samba Soccer Schools throw your child’s
                birthday party lets you sit back and enjoy yourself for once. 
              </p>
              <p class="text-muted">
                With plenty of games, competitions, and challenges, this is one
                birthday party your child won’t be forgetting any time soon. 
              </p>

              <div>
                <NuxtLink
                  to="#book"
                  class="btn btn-primary text-light btn-lg rounded-5 mt-4 px-4"
                  ><strong>Enquire today</strong>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="">
      <div class="bg-primary-texture-with-top-wave-white">
        <div class="container">
          <div class="row mb-4">
            <div class="col-sm-9 mx-auto text-center">
              <h2 class="h1 text-light">
                The <em class="text-success font-custom">Benefits </em> of a
                Samba<br />
                Soccer birthday party for kids
              </h2>
            </div>
          </div>
        </div>
        <div class="container-fluid">
          <div class="row row-cols-sm-4 text-center">
            <div class="col-12 col-md-3">
              <img src="@/src/assets/img-fun.png" alt="" class="img-fluid" />
              <h4 class="text-warning font-custom">Fun</h4>
              <p class="text-light">
                <small
                  >The Brazilians know how to have fun, and we bring that same
                  pumping samba beat to all our birthday parties. With
                  interactive games and competition, your child’s birthday party
                  will certainly be the talk of the school playground.  </small
                >
              </p>
            </div>
            <div class="col-12 col-md-3">
              <img
                src="@/src/assets/img-interaction.png"
                alt=""
                class="img-fluid"
              />
              <h4 class="text-success font-custom">Interaction</h4>
              <p class="text-light">
                <small
                  >This kind of birthday party only works well if everybody
                  interacts, which is why we’ve crafted our parties to maximise
                  participation across all ages and abilities. We’ve got years
                  of experience in doing this, and we know how to put on the
                  perfect party.  </small
                >
              </p>
            </div>
            <div class="col-12 col-md-3">
              <img
                src="@/src/assets/img-personalized.png"
                alt=""
                class="img-fluid"
              />
              <h4 class="text-warning font-custom">Personalised</h4>
              <p class="text-light">
                <small
                  >We want your child to feel special on their big day, so we
                  personalise the experience as much as we can. This means
                  branded invitations and certificates that your child and their
                  friends will proudly keep for a long time. We always want to
                  go the extra mile, so if there’s anything else we can do, just
                  have a chat with us, and we’ll see what we can do. </small
                >
              </p>
            </div>
            <div class="col-12 col-md-3">
              <img
                src="@/src/assets/img-experienced-coaches.png"
                alt=""
                class="img-fluid"
              />
              <h4 class="text-success font-custom">Experienced Coaches</h4>
              <p class="text-light">
                <small
                  >We only bring our most senior and experienced coaches to our
                  birthday parties, meaning highly qualified professionals who
                  are there to help the children have fun but also teach them a
                  trick or two that they can take home and show their
                  parents. </small
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <WebsiteReviewsSection />

    <WebsiteFAQForBirthdayParties />

    <!-- Book  -->
    <section id="book" class="bg-book-birthday-party py-5">
      <div class="container">
        <div class="row py-5">
          <div class="col-sm-4">
            <h4 class="h1 font-custom text-light">
              <em class="text-success">How can I book </em>
              <br />
              my child a football birthday party in London?
            </h4>
            <p class="text-light mt-4">
              We know how important flexibility is, which is why we offer two
              birthday party packages to choose from. Please bear in mind that
              packages do not include any venue hire or food and drink.
            </p>
          </div>
          <div class="col offset-sm-1">
            <div class="row">
              <div class="col-12 col-md-6">
                <div
                  class="card rounded-5 border-0 shadow-lg"
                  style="height: 100%"
                >
                  <div class="card-body px-5 pt-0">
                    <div
                      class="d-flex flex-column justify-content-between"
                      style="height: 100%"
                    >
                      <div class="d-flex flex-column">
                        <div class="w-100 custom-border-silver mb-4"></div>
                        <div class="mb-2">
                          <img src="@/src/assets/img-silver-package.png" />
                        </div>
                        <h4 class="text-gray">
                          <em class="text-primary font-custom">SILVER</em><br />
                          <strong>PACKAGE</strong>
                        </h4>
                        <p class="text-muted">
                          Our silver birthday party package includes:
                        </p>
                        <ul class="list-unstyled">
                          <li>
                            <Icon
                              name="ic:baseline-check"
                              class="text-success me-2"
                            />
                            Up to 12 friends
                          </li>
                          <li>
                            <Icon
                              name="ic:baseline-check"
                              class="text-success me-2"
                            />
                            1 enthusiastic Samba Soccer coach
                          </li>
                          <li>
                            <Icon
                              name="ic:baseline-check"
                              class="text-success me-2"
                            />
                            1 hour 15 mins Birthday Party
                          </li>
                          <li>
                            <Icon
                              name="ic:baseline-check"
                              class="text-success me-2"
                            />
                            Branded invitations
                          </li>
                        </ul>
                      </div>
                      <div>
                        <p class="text-muted w-100">
                          Cost <span class="display-6 text-info">£175</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div
                  class="card rounded-5 border-0 shadow-lg"
                  style="height: 100%"
                >
                  <div class="card-body px-5 pt-0">
                    <div
                      class="d-flex flex-column justify-content-between"
                      style="height: 100%"
                    >
                      <div class="d-flex flex-column">
                        <div class="w-100 custom-border-gold mb-4"></div>
                        <div class="mb-2">
                          <img src="@/src/assets/img-gold-package.png" />
                        </div>
                        <h4 class="text-gray">
                          <em class="text-primary font-custom">GOLD</em><br />
                          <strong>PACKAGE</strong>
                        </h4>
                        <p class="text-muted">
                          Our gold birthday party package includes:
                        </p>
                        <ul class="list-unstyled">
                          <li>
                            <Icon
                              name="ic:baseline-check"
                              class="text-success me-2"
                            />
                            Up to 20 friends
                          </li>
                          <li>
                            <Icon
                              name="ic:baseline-check"
                              class="text-success me-2"
                            />
                            2 enthusiastic Samba Soccer coaches
                          </li>
                          <li>
                            <Icon
                              name="ic:baseline-check"
                              class="text-success me-2"
                            />
                            1 hour 30 mins Birthday Party
                          </li>
                          <li>
                            <Icon
                              name="ic:baseline-check"
                              class="text-success me-2"
                            />
                            Branded invitations
                          </li>
                          <li>
                            <Icon
                              name="ic:baseline-check"
                              class="text-success me-2"
                            />
                            Medals for competition winners
                          </li>
                        </ul>
                      </div>
                      <div>
                        <p class="text-muted w-100">
                          Cost <span class="display-6 text-info">£310</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Enquire  -->
    <section id="enquire" class="bg-enquire-splash py-5">
      <div class="container">
        <div class="row py-5">
          <div class="col-sm-4">
            <h4 class="h1 font-custom text-primary">
              Football<br />
              Birthday Parties
              <em class="text-info">Enquiry Form</em>
            </h4>
            <p class="text-muted mt-4">
              Like what you hear? Get in touch with us so we can start preparing
              your child’s big day! Fill out the form below and a member of our
              team will call you shortly.
            </p>
          </div>
          <div class="col offset-sm-1">
            <WebsiteFormFAQBirthdayParties />
          </div>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');
.font-custom {
  font-family: 'Luckiest Guy', cursive;
  font-weight: 400;
  font-style: normal;
}

.bg-header-birthday-party {
  background-image: url('@/src/assets/bg-birthday-parties.png');
  min-height: 80vh;
  background-size: cover;
  background-position: bottom center;
}

.bg-book-birthday-party {
  background-color: #003288;
  // background-image: linear-gradient(45deg, #003288 70%, #005498 100%);
  background-image: url('@/src/assets/bg-birthday-party-book.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

.custom-border-gold {
  border-width: 10px;
  border-top: 0.7rem solid #ffde14;
}

.custom-border-silver {
  border-width: 10px;
  border-top: 0.7rem solid #c3c4cc;
}

section {
  &.bg-enquire-splash {
    background-image: url('@/src/assets/bg-enquire-splash-light-blue.svg');
    background-repeat: no-repeat;
    background-size: 80% auto;
    background-position: right center;
  }
}

.text-gray {
  color: #9e9faa;
}
@media only screen and (max-width: 720px) {
  .bg-header-birthday-party {
    background-image: url('@/src/assets/bg-birthday-parties.png');
    min-height: 80vh;
    background-size: cover;
    background-position: bottom center;
  }
}
</style>
