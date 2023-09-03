<script setup lang="ts">
const layout = "weblayout";
</script>

<template>
  <NuxtLayout :name="layout">
    <!-- <BlogPosts size="lg" /> -->
    <section class="py-5 my-4">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="h1"><span class="font-custom text-primary">Check out our</span> <em class="text-success">BLOGS</em>
          </h2>
          <p class="text-primary col-sm-9 mx-auto lead">Check out our blogs to stay updated with the latest news about our
            football training for kids in London.</p>
        </div>

        <!-- <div class="card text-bg-dark"> -->
        <NuxtLink to="/blog/1">
          <div class="card mb-4">
            <img src="@/src/assets/img-blog-lg-1.png" class="card-img" alt="...">
            <div class="card-img-overlay h-100 d-flex justify-content-center flex-column p-5 col-sm-6">
              <h5 class="card-title display-4 font-custom text-primary mb-4">How to Plan <em class="text-info">Football
                  Sessions</em> for Children?</h5>
              <span class="btn btn-primary btn-lg rounded-5 me-auto px-4">Read More</span>
            </div>
          </div>
        </NuxtLink>

        <div class="row row-col-sm-3 mb-5 pb-5">
          <div class="col">
            <NuxtLink to="/blog/1">
              <div class="card border-0 shadow h-100">
                <img src="@/src/assets/img-blog-2.png" alt="" class="card-img-top">

                <div class="card-body p-4 d-flex flex-column justify-content-between align-items-start">
                  <div>
                    <h4 class="text-primary h5"><strong>Football Skills to Practice in the Playground</strong></h4>
                    <p>Every kid loves pulling off fancy tricks and skills and there’s no better place to try these
                      out than on the playgroun...</p>
                  </div>
                  <span class="btn btn-primary btn-sm px-3 rounded-5">Read More</span>
                </div>
              </div>
            </NuxtLink>

          </div>
          <div class="col">
            <NuxtLink to="/blog/1">
              <div class="card border-0 shadow h-100">
                <img src="@/src/assets/img-blog-3.png" alt="" class="card-img-top">

                <div class="card-body p-4 d-flex flex-column justify-content-between align-items-start">
                  <div>
                    <h4 class="text-primary h5"><strong>5 Ways The SSS Skills Tutorial App Can Improve Your Child’s
                        Football
                        Skills</strong></h4>
                    <p>The Samba Soccer Skills Tutorial App is our home for weekly skills and tutorials. The SSS
                      app...</p>
                  </div>
                  <span class="btn btn-primary btn-sm px-3 rounded-5">Read More</span>

                </div>

              </div>
            </NuxtLink>
          </div>
          <div class="col">
            <NuxtLink to="/blog/1">
              <div class="card border-0 shadow h-100">
                <img src="@/src/assets/img-blog-4.png" alt="" class="card-img-top">

                <div class="card-body p-4 d-flex flex-column justify-content-between align-items-start">
                  <div>
                    <h4 class="text-primary h5"><strong>Six ways to manipulate the ball with a left foot or you
                        know</strong></h4>
                    <p>Everyone loves scoring goals and there’s no position that is focussed more on scoring goals
                      than a striker. ...</p>
                  </div>
                  <span class="btn btn-primary btn-sm px-3 rounded-5">Read More</span>

                </div>

              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Categories  -->
    <section class="bg-light py-5 bg-gray-texture">
      <div class="container my-5">
        <div class="d-flex justify-content-between align-items-center">
          <h4 class="text-primary">Browse The Category ___</h4>
          <NuxtLink to="/blog" class="h4">See All Category
            <Icon name="ic:round-chevron-right" />
          </NuxtLink>
        </div>
        <div class="row row-cols-sm-6 my-5">
          <div class="col">
            <NuxtLink to="/blog" class="btn btn-category">
              <span class="icon-container">
                <img src="@/src/assets/img-icon-parents.svg" alt="img-icon-parents">
              </span>
              Parents
            </NuxtLink>
          </div>
          <div class="col">
            <NuxtLink to="/blog" class="btn btn-category">
              <span class="icon-container">
                <img src="@/src/assets/img-icon-skills.svg" alt="img-icon-skills">
              </span>

              Skills
            </NuxtLink>
          </div>
          <div class="col">
            <NuxtLink to="/blog" class="btn btn-category">
              <span class="icon-container">
                <img src="@/src/assets/img-icon-general.svg" alt="img-icon-general">

              </span>
              General
            </NuxtLink>
          </div>
          <div class="col">
            <NuxtLink to="/blog" class="btn btn-category">
              <span class="icon-container">
                <img src="@/src/assets/img-icon-franchise.svg" alt="img-icon-franchise">

              </span>
              Franchise
            </NuxtLink>
          </div>
          <div class="col">
            <NuxtLink to="/blog" class="btn btn-category">
              <span class="icon-container">
                <img src="@/src/assets/img-icon-coaches.svg" alt="img-icon-coaches">

              </span>
              Coaches
            </NuxtLink>
          </div>
          <div class="col">
            <NuxtLink to="/blog" class="btn btn-category">
              <span class="icon-container">
                <img src="@/src/assets/img-icon-services.svg" alt="img-icon-services">

              </span>
              Services
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- All Blog Posts  -->
    <section class="py-5 mb-4">
      <div class="container">
        <h4>All blog posts</h4>
        <div class="row row-cols-2 my-4 gy-4">
          <div class="col">
            <div class="card border-0 h-100">
              <img src="@/src/assets/img-blog-sm-1.png" alt="image-blog-sm-1" class="card-img-top">

              <div class="card-body py-4 px-0">
                <div>
                  <small class="text-muted ">Alan Whitten • Jul 17</small>
                  <h4 class="text-primary h5 mt-3"><strong>How to Plan Football Sessions for Children?</strong></h4>
                  <p class="py-3">Planning a football session for kids can seem daunting but it doesn’t have to be. The
                    following
                    article will provide a...</p>
                </div>
                <div>
                  <span class="badge bg-warning-subtle text-primary rounded-5 px-3 py-2 me-3">Parents</span>
                  <span class="badge bg-success-subtle text-primary rounded-5 px-3 py-2">Services</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card border-0 h-100">
              <img src="@/src/assets/img-blog-2.png" alt="" class="card-img-top">

              <div class="card-body py-4 px-0">
                <div>
                  <small class="text-muted ">Alan Whitten • Jul 17</small>
                  <h4 class="text-primary h5 mt-3"><strong>Football Skills to Practice in the Playground</strong></h4>
                  <p class="py-3">Every kid loves pulling off fancy tricks and skills and there’s no better place to try
                    these
                    out than on the playgroun...</p>
                </div>
                <div>
                  <span class="badge bg-warning-subtle text-primary rounded-5 px-3 py-2 me-3">Parents</span>
                  <span class="badge bg-success-subtle text-primary rounded-5 px-3 py-2">Services</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card border-0 h-100">
              <img src="@/src/assets/img-blog-3.png" alt="" class="card-img-top">

              <div class="card-body py-4 px-0">
                <div>
                  <small class="text-muted ">Alan Whitten • Jul 17</small>
                  <h4 class="text-primary h5 mt-3"><strong>5 Ways The SSS Skills Tutorial App Can Improve Your Child’s
                      Football
                      Skills</strong></h4>
                  <p class="py-3">The Samba Soccer Skills Tutorial App is our home for weekly skills and tutorials. The
                    SSS
                    app...</p>
                </div>
                <div>
                  <span class="badge bg-warning-subtle text-primary rounded-5 px-3 py-2 me-3">Parents</span>
                  <span class="badge bg-success-subtle text-primary rounded-5 px-3 py-2">Services</span>
                </div>
              </div>

            </div>
          </div>
          <div class="col">
            <div class="card border-0 h-100">
              <img src="@/src/assets/img-blog-4.png" alt="" class="card-img-top">

              <div class="card-body py-4 px-0">
                <div>
                  <small class="text-muted ">Alan Whitten • Jul 17</small>
                  <h4 class="text-primary h5 mt-3"><strong>Six ways to manipulate the ball with a left foot or you
                      know</strong></h4>
                  <p class="py-3">Everyone loves scoring goals and there’s no position that is focussed more on scoring
                    goals
                    than a striker. ...</p>
                </div>
                <div>
                  <span class="badge bg-warning-subtle text-primary rounded-5 px-3 py-2 me-3">Parents</span>
                  <span class="badge bg-success-subtle text-primary rounded-5 px-3 py-2">Services</span>
                </div>

              </div>

            </div>
          </div>
        </div>

        <div class=" border-top border-secondary border-1">
          <nav aria-label="blog-nagivation" class="border-top border-secondary border-1 py-4">
            <ul class="pagination justify-content-between">
              <li class="page-item disabled">
                <a class="page-link d-flex align-items-center">
                  <Icon name="material-symbols:arrow-left-alt" class="me-3 " />
                  Previous
                </a>
              </li>
              <span class="d-flex">
                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
              </span>
              <li class="page-item">
                <a class="page-link border-0 d-flex align-items-center" href="#">Next
                  <Icon name="material-symbols:arrow-right-alt" class="ms-3" />
                </a>
              </li>
            </ul>
          </nav>
        </div>

      </div>
    </section>

    <!-- Follow us on Instagram  -->
    <WebsiteFollowUsOnInstagram />


  </NuxtLayout>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/web/web.scss';

.bg-gray-texture {
  background-image: url('@/src/assets/bg-website-gray-texture.png');
  background-repeat: repeat;
}

.btn-category {
  @extend .btn;
  @extend .bg-warning;
  border: 0;
  @extend .rounded-4;
  // @extend .shadow;
  box-shadow: 4px 6px 13px 0px rgba(215, 215, 215, 0.25);
  @extend .font-custom;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: $h3-font-size;
  color: $primary;
  padding: 5rem 1rem;
  height: 100%;

  .icon-container {
    @extend .mb-4;
    // width: 70%;
  }

  &:hover {
    @extend .bg-success;
    color: white;
    box-shadow: 0px 4px 66px 0px rgba(13, 209, 128, 0.42), 0px 4px 13px 0px rgba(13, 209, 128, 0.34);
  }
}
</style>