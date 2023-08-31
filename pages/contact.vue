<script setup lang="ts">
const layout = "weblayout";
</script>

<template>
  <NuxtLayout :name="layout">
    <header class="bg-header-contact-page d-flex align-items-center">
      <div class="container">
        <div class="col-sm-6">
          <h1 class="text-primary font-custom display-5 mb-4">We'd Love To Hear From You, So Feel Free To <em
              class="text-info">Get In
              Touch!</em>
          </h1>
          <p class="mb-4">If you’d like to contact the Samba Soccer team, please fill out the contact form, and we’ll do
            our best to
            respond to all messages within 48 hours. </p>
          <p>Alternatively, please feel free to either email us or call our support team and we’ll be happy to discuss any
            queries - or simply to chat about how much your child loves our lessons!  </p>
        </div>
      </div>
    </header>

    <section class="mt-n5">

      <div class="container">
        <div class="row">
          <div class="col-sm-5">
            <div class="bg-green-blue-waves px-4 py-5 rounded-4  h-100 align-items-center d-flex">
              <div class="card rounded-4 border-0">
                <div class="card-body px-4 py-5">
                  <p>
                    <Icon class="text-success h4" name="mdi:map-marker-outline" /><br>
                    <strong><small>Samba Soccer Schools, 65-69 Shelton Street, Covent Garden, London WC2H
                        9HE</small></strong>
                  </p>
                  <p>
                    <Icon class="text-success h4" name="akar-icons:envelope" /><br>
                    <strong> <small>admin@sambasoccerschools.com</small></strong>
                  </p>
                  <p>
                    <Icon class="text-success h4" name="bi:telephone-fill" /><br>
                    <strong><small>020 72052723</small></strong>
                  </p>


                  <div class="d-flex">
                    <NuxtLink class="btn-social" to="/" target="_blank">
                      <Icon name="gg:facebook" />
                    </NuxtLink>
                    <NuxtLink class="btn-social" to="/" target="_blank">
                      <Icon name="mdi:instagram" />
                    </NuxtLink>
                    <NuxtLink class="btn-social" to="/" target="_blank">
                      <Icon name="ph:youtube-logo-fill" />
                    </NuxtLink>
                    <NuxtLink class="btn-social" to="/" target="_blank">
                      <Icon name="mdi:linkedin" />
                    </NuxtLink>
                    <NuxtLink class="btn-social" to="/" target="_blank">
                      <Icon name="mdi:twitter" />
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card rounded-4 border-0 shadow-lg">
              <div class="card-body p-4">
                <form action="">
                  <div class="mb-4">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control bg-light border-0" id="name" aria-describedby="nameHelp"
                      placeholder="Name">
                    <!-- <div id="nameHelp" class="form-text">We'll never share your email with anyone else.</div> -->
                  </div>
                  <div class="mb-4">
                    <label for="phone" class="form-label">Telephone*</label>
                    <input type="phone" class="form-control bg-light border-0" id="phone" aria-describedby="phoneHelp"
                      placeholder="Telephone Number">
                    <!-- <div id="phoneHelp" class="form-text">We'll never share your email with anyone else.</div> -->
                  </div>

                  <div class="mb-4">
                    <label for="email" class="form-label">Email Address</label>
                    <input type="email" class="form-control bg-light border-0" id="email" aria-describedby="emailHelp"
                      placeholder="Email">
                    <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
                  </div>

                  <div class="mb-4">
                    <label for="message" class="form-label">Message</label>
                    <textarea name="message" id="message" class="form-control bg-light border-0" rows="4"
                      placeholder="Message"></textarea>
                    <!-- <input type="email" class="form-control" id="email" aria-describedby="emailHelp"> -->
                    <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
                  </div>
                  <button class="btn  btn-success bg-gradient rounded-5 w-100"><strong
                      class="text-light">Send</strong></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>

    <section class="py-5">
      <div class="container mb-4">
        <img src="@/src/assets/img-map-samba-soccer-schools-london.png" alt="img-map-samba-soccer-schools-london"
          class="img-fluid">
      </div>
    </section>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/web/web.scss';

.bg-header-contact-page {
  background-image: url('@/src/assets/bg-header-contact-page.png');
  min-height: 70vh;
  background-size: cover;
  padding: 5rem 0 10rem;
}

.bg-green-blue-waves {
  background-image: url('@/src/assets/bg-green-blue-waves.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

.btn-social {
  @extend .btn;
  @extend .btn-success;
  @extend .rounded-5;
  @extend .me-2;
  @extend .text-light;
  height: 3rem;
  width: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
}
</style>