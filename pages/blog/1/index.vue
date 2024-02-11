<script setup lang="ts">
const layout = 'weblayout'
</script>

<template>
  <NuxtLayout :name="layout">
    <article id="sss-article" class="my-5">
      <section class="container pt-5">
        <div class="row mt-">
          <div class="col-sm-11 mx-auto text-center">
            <span class="text-muted">Posted 30 January 2021, 04:00 am</span>
            <h1>How to Plan Football Sessions for Children?</h1>
            <p>
              Planning a football session for kids can seem daunting but it
              doesn’t have to be. The following article will provide a simple
              framework to help you plan a fun and engaging football session in
              no time.
            </p>
          </div>
        </div>
        <div class="row text-center">
          <div class="col">
            <img
              src="@/src/assets/img-blog-post-cover.png"
              alt="How to plan football sessions for children?"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-sm-9 mx-auto">
            <h2>Warm Up</h2>
            <p>
              Any good football session starts with a thorough warm-up. This
              isn’t anyone’s favourite part of football training but it is vital
              to avoid unnecessary injuries.
            </p>
            <p>
              Some stretching is a good starting point to make sure muscles are
              ready before any more vigorous exercise. Alongside this, light
              jogging is a good idea to loosen up.
            </p>
            <img
              src="@/src/assets/img-blog-article-1.png"
              alt="img-blog-article-1"
            />
            <p>
              This doesn’t have to be as boring as it sounds, though. This can
              be incorporated into games to keep kids engaged in what they’re
              doing. A ball can also be incorporated into exercises like the
              rondo to make warming up that bit more interesting.
            </p>
            <h2>Drills</h2>
            <p>
              The main part of a football session will be made up from various
              drills. You’ll want a wide variety of drills focussing on
              different aspects of the game to keep children focused and
              interested.
            </p>
            <p>
              Try to incorporate a mixture of passing, dribbling, positioning,
              shooting, tackling, and endurance where possible.
            </p>
            <img
              src="@/src/assets/img-blog-article-2.png"
              alt="img-blog-article-2"
            />
            <p>
              Like warm-ups, drills don’t have to be boring and can be based on
              kids’ favourite games like stuck in the mud and bulldog. If you’re
              running regular football sessions, make sure to vary which drills
              you’re doing each week to keep things fresh.
            </p>
            <h2>Match Situation</h2>
            <p>
              It’s a good idea to end most sessions with some form of match
              situation. Kids love playing competitive matches and this gives
              them something to look forward to each time.
            </p>
            <p>
              This can be anything from 3v3 to 7v7, attack vs defence, or even a
              mini 1v1 tournament. Again, it’s worth mixing this up each week
              but there is no need to go overboard. Making sure the teams are
              different or awarding extra points for team goals is enough to
              keep things new and fun.
            </p>
            <img
              src="@/src/assets/img-blog-article-3.png"
              alt="img-blog-article-3"
            />
            <h2>Awards</h2>
            <p>
              Man of the match awards are a great way to incentivize kids but
              they don’t have to be reserved exclusively for match days. If you
              have a group of kids, consider handing out regular awards for
              effort and commitment.
            </p>
            <p>
              These awards don’t necessarily have to go to the best player,
              instead, reward those who try the hardest. This encourages
              children to put in as much effort as possible and will help you
              get the most out of your football sessions.
            </p>
            <img
              src="@/src/assets/img-blog-article-4.png"
              alt="img-blog-article-4"
            />
            <p>
              If this all sounds like too much work, why not leave it to us? At
              Samba Soccer Schools we specialise in teaching football the
              Brazilian way! For more information, click here.
            </p>
          </div>
        </div>
      </section>
    </article>

    <WebsiteFAQForBlogPosts />

    <!-- Recent posts  -->
    <section class="mb-5 py-5">
      <div class="container mb-5">
        <h3 class="mt-5">Recent posts</h3>
        <div class="row row-col-sm-3">
          <div class="col">
            <NuxtLink to="/blog/1">
              <div class="card h-100 border-0 shadow">
                <img
                  src="@/src/assets/img-blog-2.png"
                  alt=""
                  class="card-img-top"
                />

                <div
                  class="card-body d-flex flex-column justify-content-between align-items-start p-4"
                >
                  <div>
                    <h4 class="text-primary h5">
                      <strong
                        >Football Skills to Practice in the Playground</strong
                      >
                    </h4>
                    <p>
                      Every kid loves pulling off fancy tricks and skills and
                      there’s no better place to try these out than on the
                      playgroun...
                    </p>
                  </div>
                  <span class="btn btn-primary btn-sm rounded-5 px-3"
                    >Read More</span
                  >
                </div>
              </div>
            </NuxtLink>
          </div>
          <div class="col">
            <NuxtLink to="/blog/1">
              <div class="card h-100 border-0 shadow">
                <img
                  src="@/src/assets/img-blog-3.png"
                  alt=""
                  class="card-img-top"
                />

                <div
                  class="card-body d-flex flex-column justify-content-between align-items-start p-4"
                >
                  <div>
                    <h4 class="text-primary h5">
                      <strong
                        >5 Ways The SSS Skills Tutorial App Can Improve Your
                        Child’s Football Skills</strong
                      >
                    </h4>
                    <p>
                      The Samba Soccer Skills Tutorial App is our home for
                      weekly skills and tutorials. The SSS app...
                    </p>
                  </div>
                  <span class="btn btn-primary btn-sm rounded-5 px-3"
                    >Read More</span
                  >
                </div>
              </div>
            </NuxtLink>
          </div>
          <div class="col">
            <NuxtLink to="/blog/1">
              <div class="card h-100 border-0 shadow">
                <img
                  src="@/src/assets/img-blog-4.png"
                  alt=""
                  class="card-img-top"
                />

                <div
                  class="card-body d-flex flex-column justify-content-between align-items-start p-4"
                >
                  <div>
                    <h4 class="text-primary h5">
                      <strong
                        >Six ways to manipulate the ball with a left foot or you
                        know</strong
                      >
                    </h4>
                    <p>
                      Everyone loves scoring goals and there’s no position that
                      is focussed more on scoring goals than a striker. ...
                    </p>
                  </div>
                  <span class="btn btn-primary btn-sm rounded-5 px-3"
                    >Read More</span
                  >
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/web/web.scss';

#sss-article {
  h1 {
    @extend .font-custom;
    @extend .display-4;
  }

  h2 {
    @extend .font-custom;
    @extend .mt-5;
    @extend .mb-4;
  }

  p {
    @extend .lead;
  }

  img {
    @extend .img-fluid;
    @extend .my-5;
    @extend .rounded-5;
  }
}
</style>
