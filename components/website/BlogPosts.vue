<script>
export default {
  props: ['size'],
}
</script>

<template>
  <!-- Check out our Blogs -->
  <section
    class="my-4 py-5"
    :class="size === 'lg' ? 'section-blogposts-lg' : ''"
  >
    <div class="container">
      <div class="text-center">
        <h2 class="h1">
          <span class="font-custom text-primary section-title lhm-52 fsm-48"
            >Check out our
          </span>
          <em class="text-success marker-text fsm-48">blogs</em>
        </h2>
        <p class="text-muted col-sm-9 text-content fsm-14 color-navy mx-auto">
          Our weekly blog brings you everything you need to know about
          children’s football<br class="d-none d-md-block" />
          training in London, as well as tips and in-depth footballing
          breakdowns that can help<br class="d-none d-md-block" />
          your child reach the next level.
        </p>
      </div>
      <div class="d-none d-sm-flex">
        <div class="row align-items-start my-5">
          <div class="col">
            <img src="@/src/assets/img-blog-1.png" alt="" class="img-fluid" />
            <h4 class="font-custom text-primary mt-4">
              How to Plan Football Sessions for Children?
            </h4>
            <p class="text-muted lead">
              Planning a football session for kids can seem daunting but it
              doesn’t have to be. The following article will provide a...
            </p>
          </div>
          <div class="col d-grid">
            <div class="row align-items-start">
              <img src="@/src/assets/img-blog-2.png" alt="" class="col-sm-5" />
              <div class="col">
                <h4 class="text-primary h6 m-0">
                  Football Skills to Practice in the Playground
                </h4>
                <p>
                  <small
                    >Every kid loves pulling off fancy tricks and skills and
                    there’s no better place to try these out than on the
                    playgroun...</small
                  >
                </p>
              </div>
            </div>
            <div class="row align-items-start">
              <img src="@/src/assets/img-blog-3.png" alt="" class="col-sm-5" />
              <div class="col">
                <h4 class="text-primary h6 m-0">
                  5 Ways The SSS Skills Tutorial App Can Improve Your Child’s
                  Football Skills
                </h4>
                <p>
                  <small
                    >The Samba Soccer Skills Tutorial App is our home for weekly
                    skills and tutorials. The SSS app...</small
                  >
                </p>
              </div>
            </div>
            <div class="row align-items-start">
              <img src="@/src/assets/img-blog-4.png" alt="" class="col-sm-5" />
              <div class="col">
                <h4 class="text-primary h6 m-0">
                  Six ways to manipulate the ball with a left foot or you know
                </h4>
                <p>
                  <small
                    >Everyone loves scoring goals and there’s no position that
                    is focussed more on scoring goals than a striker. ...</small
                  >
                </p>
              </div>
            </div>
            <div class="row align-items-start">
              <img src="@/src/assets/img-blog-5.png" alt="" class="col-sm-5" />
              <div class="col">
                <h4 class="text-primary h6 m-0">
                  5 Important Attributes the Best Strikers Need
                </h4>
                <p>
                  <small
                    >Everyone loves scoring goals and there’s no position that
                    is focussed more on scoring goals than a striker. ...</small
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center"></div>
      </div>
      <div class="justify-content-center d-none d-sm-flex">
        <NuxtLink to="/blog" class="btn btn-primary btn-lg rounded-5 px-4 py-2">
          <span class="font-custom">Check Out Our Blogs</span>
        </NuxtLink>
      </div>

      <!-- Versión MOBILE: visible solo en XS (hasta <576px) -->
      <div class="d-sm-none">
        <div class="my-5">
          <div class="mb-5">
            <img
              src="@/src/assets/img-blog-1.png"
              alt=""
              class="img-fluid mb-3"
            />
            <h4 class="font-custom text-primary fsm-24">
              How to Plan Football Sessions for Children?
            </h4>
            <p class="text-muted lead fsm-16">
              Planning a football session for kids can seem daunting but it
              doesn’t have to be. The following article will provide a...
            </p>
            <NuxtLink
              to="/blog/post-1"
              class="btn btn-primary btn-lg rounded-5 text-light px-4"
            >
              <span class="text-semibold">Read More</span>
            </NuxtLink>
          </div>

          <div class="mb-5">
            <img
              src="@/src/assets/img-blog-2.png"
              alt=""
              class="img-fluid br-20 mb-3"
            />
            <h4 class="font-custom text-primary fsm-24">
              Football Skills to Practice in the Playground
            </h4>
            <p class="text-muted lead fsm-16">
              Every kid loves pulling off fancy tricks and skills and there’s no
              better place to try these out than on the playgroun...
            </p>
            <NuxtLink
              to="/blog/post-2"
              class="btn btn-primary btn-lg rounded-5 text-light px-4"
            >
              <span class="text-semibold">Read More</span>
            </NuxtLink>
          </div>

          <div class="mb-5">
            <img
              src="@/src/assets/img-blog-3.png"
              alt=""
              class="img-fluid br-20 mb-3"
            />
            <h4 class="font-custom text-primary fsm-24">
              5 Ways The SSS Skills Tutorial App Can Improve Your Child’s
              Football Skills
            </h4>
            <p class="text-muted lead fsm-16">
              The Samba Soccer Skills Tutorial App is our home for weekly skills
              and tutorials. The SSS app...
            </p>
            <NuxtLink
              to="/blog/post-3"
              class="btn btn-primary btn-lg rounded-5 text-light px-4"
            >
              <span class="text-semibold">Read More</span>
            </NuxtLink>
          </div>

          <div class="mb-5">
            <img
              src="@/src/assets/img-blog-4.png"
              alt=""
              class="img-fluid br-20 mb-3"
            />
            <h4 class="font-custom text-primary fsm-24">
              Six ways to manipulate the ball with a left foot or you know
            </h4>
            <p class="text-muted lead fsm-16">
              Everyone loves scoring goals and there’s no position that is
              focussed more on scoring goals than a striker. ...
            </p>
            <NuxtLink
              to="/blog/post-4"
              class="btn btn-primary btn-lg rounded-5 text-light px-4"
            >
              <span class="text-semibold">Read More</span>
            </NuxtLink>
          </div>

          <!-- <div class="mb-5">
            <img
              src="@/src/assets/img-blog-5.png"
              alt=""
              class="img-fluid mb-3 br-20"
            />
            <h4 class="font-custom text-primary fsm-24">
              5 Important Attributes the Best Strikers Need
            </h4>
            <p class="text-muted lead fsm-16">
              Everyone loves scoring goals and there’s no position that is
              focussed more on scoring goals than a striker. ...
            </p>
            <NuxtLink
              to="/blog/post-5"
              class="btn btn-primary btn-lg rounded-5 text-light px-4"
            >
              <span class="text-semibold">Read More</span>
            </NuxtLink>
          </div> -->
        </div>
      </div>
    </div>
  </section>
</template>
