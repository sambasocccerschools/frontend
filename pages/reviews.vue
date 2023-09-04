<script setup lang="ts">
const layout = "weblayout";
</script>
<template>
  <NuxtLayout :name="layout">
    <section class="bg-gray-texture py-5">
      <div class="container text-center mt-5">
        <p class="text-primary text-semibold lead">GOOGLE REVIEWS</p>
        <h2 class="display-4 text-primary mb-5"><span class="font-custom">Unforgettable</span> <em
            class="text-info">MOMENTS</em>
          <br> <span class="font-custom">since 2009</span>
        </h2>

        <div class="row mb-5">
          <div class="col">
            <div class="card rounded-5 shadow-lg border-0 mb-5">
              <div class="card-body px-sm-5">
                <div class="row row-cols-sm-3 align-items-center mt-5 gy-5">
                  <!--  -->
                  <div class="col">
                    <div class="bg-info text-white rounded-4 p-4">
                      <span class="text-semibold">“Every Tuesday my son is excited to attend his session to learn new
                        skills and
                        listen to loud samba music!”</span>
                      <div class="my-3">Student, Samba Soccer School</div>
                      <div class="text-warning">★★★★★</div>
                    </div>
                    <img src="@/src/assets/img-review-1.png" alt="review-picture" class="mt-3">
                  </div>
                  <!--  -->
                  <div class="col">
                    <div class="bg-success text-white rounded-4 p-4">
                      <span class="text-semibold lead">“Every Tuesday my son is excited to attend his session to learn new
                        skills
                        and listen to loud samba music!”</span>
                      <div class="my-3">Student, Samba Soccer School</div>
                      <div class="text-warning">★★★★★</div>
                    </div>
                    <img src="@/src/assets/img-review-1.png" alt="review-picture" class="mt-3">
                  </div>
                  <!--  -->
                  <div class="col">
                    <div class="bg-warning rounded-4 p-4 text-primary">
                      <span class="text-semibold">“Every Tuesday my son is excited to attend his session to learn new
                        skills and
                        listen to loud samba music!”</span>
                      <div class="my-3">Student, Samba Soccer School</div>
                      <div>★★★★★</div>
                    </div>
                    <img src="@/src/assets/img-review-1.png" alt="review-picture" class="mt-3">
                  </div>
                  <!--  -->
                  <div class="col">
                    <div class="bg-info text-white rounded-4 p-4">
                      <span class="text-semibold">“Every Tuesday my son is excited to attend his session to learn new
                        skills and
                        listen to loud samba music!”</span>
                      <div class="my-3">Student, Samba Soccer School</div>
                      <div class="text-warning">★★★★★</div>
                    </div>
                    <img src="@/src/assets/img-review-1.png" alt="review-picture" class="mt-3">
                  </div>
                  <!--  -->
                  <div class="col">
                    <div class="bg-success text-white rounded-4 p-4">
                      <span class="text-semibold lead">“Every Tuesday my son is excited to attend his session to learn new
                        skills
                        and listen to loud samba music!”</span>
                      <div class="my-3">Student, Samba Soccer School</div>
                      <div class="text-warning">★★★★★</div>
                    </div>
                    <img src="@/src/assets/img-review-1.png" alt="review-picture" class="mt-3">
                  </div>
                  <!--  -->
                  <div class="col">
                    <div class="bg-warning rounded-4 p-4 text-primary">
                      <span class="text-semibold">“Every Tuesday my son is excited to attend his session to learn new
                        skills and
                        listen to loud samba music!”</span>
                      <div class="my-3">Student, Samba Soccer School</div>
                      <div>★★★★★</div>
                    </div>
                    <img src="@/src/assets/img-review-1.png" alt="review-picture" class="mt-3">
                  </div>
                </div>

                <div class="py-5 d-flex align-items-center justify-content-center">
                  <button class="btn btn-link">
                    <Icon name="ic:round-chevron-left" class="h2 m-0" />
                  </button>

                  <strong class="text-muted">1 of 20 comments</strong>
                  <button class="btn btn-link">
                    <Icon name="ic:round-chevron-right" class="h2 m-0" />
                  </button>

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  </NuxtLayout>
</template>