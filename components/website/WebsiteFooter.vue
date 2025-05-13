<template>
  <!-- Socials -->
  <WebsiteSocials />
  <footer class="bg-primary text-light py-5">
    <div class="container-fluid mt-3">
      <div class="border-bottom border-light pb-5">
        <div class="row">
          <div class="col-sm-3">
            <img
              src="@/src/assets/img-logo-samba-soccer-schools-large.svg"
              alt="Logo Samba Soccer Schools"
              class="img-fluid"
            />
            <div class="mt-5">
              <h4 class="text-success text-semibold mb-3 pt-4">NAVIGATE</h4>
              <ul class="row row-cols-2 list-unstyled">
                <li class="col">
                  <NuxtLink to="/about" class="text-light btn btn-link px-0"
                    >About Us</NuxtLink
                  >
                </li>
                <li class="col">
                  <NuxtLink to="/franchise" class="text-light btn btn-link px-0"
                    >Franchise</NuxtLink
                  >
                </li>
                <li class="col">
                  <NuxtLink to="/book" class="text-light btn btn-link px-0"
                    >Find a Class</NuxtLink
                  >
                </li>
                <li class="col">
                  <NuxtLink
                    to="/about/reviews"
                    class="text-light btn btn-link px-0"
                    >Reviews</NuxtLink
                  >
                </li>
                <li class="col">
                  <NuxtLink
                    to="/services/weekly-classes"
                    class="text-light btn btn-link px-0"
                    >Services</NuxtLink
                  >
                </li>
                <li class="col">
                  <NuxtLink to="/blog" class="text-light btn btn-link px-0"
                    >Blog</NuxtLink
                  >
                </li>
                <li class="col">
                  <NuxtLink to="/book" class="text-light btn btn-link px-0"
                    >Book Now</NuxtLink
                  >
                </li>
                <li class="col">
                  <NuxtLink to="/contact" class="text-light btn btn-link px-0"
                    >Contact Us</NuxtLink
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="col">
            <h4 class="text-success text-semibold mb-3">CUSTOMER SERVICE</h4>
            <ul class="list-unstyled">
              <li>
                <NuxtLink
                  to="/terms-and-conditions"
                  class="text-light btn btn-link px-0"
                  >Terms & Conditions</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/privacy-policy"
                  class="text-light btn btn-link px-0"
                  >Privacy Policy</NuxtLink
                >
              </li>
            </ul>

            <div class="card bg-primary-subtle rounded-5 mt-5 shadow-sm">
              <div class="card-body p-4">
                <h4 class="text-light h4 text-semibold">
                  Join our Mailing List
                </h4>
                <p class="text-light">Sign-up for the SSS Newsletter</p>
                <form action="" class="row g-3 d-grid d-md-flex mt-1">
                  <div class="col-12 col-md">
                    <input
                      type="text"
                      class="form-control form-control-lg rounded-5 w-100"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div class="col-12 col-md-auto">
                    <button
                      class="btn btn-success rounded-5 text-light btn-lg w-100 w-md-auto px-4"
                    >
                      <strong>Subscribe</strong>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="mtm-35 col-12 col-md-auto">
            <div
              class="card-contact card rounded-5 h-100 d-grid align-items-center border-0 shadow"
            >
              <div class="card-body p-4">
                <h4 class="text-light h4 text-semibold">Contact Us</h4>
                <p class="text-light">We’d love to hear from you</p>
                <ul class="list-unstyled text-light">
                  <li class="d-flex align-items-center">
                    <span class="icon-circle me-2">
                      <Icon name="material-symbols:phone-iphone-outline" />
                    </span>
                    <a
                      href="tel:02072052723"
                      class="text-light text-decoration-none"
                    >
                      020 72052723
                    </a>
                  </li>
                  <li class="d-flex align-items-center my-2">
                    <span class="icon-circle me-2">
                      <Icon name="mdi:map-marker-outline" />
                    </span>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener"
                      class="text-light text-decoration-none"
                    >
                      Find us on Google Maps
                    </a>
                  </li>
                  <li class="d-flex align-items-center">
                    <span class="icon-circle me-2">
                      <Icon name="akar-icons:envelope" />
                    </span>
                    <a
                      href="mailto:info@sambasoccerschools.com"
                      class="text-light text-decoration-none"
                    >
                      info@sambasoccerschools.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p class="pt-5 text-center">
        © {{ new Date().getFullYear() }}, Samba Soccer Schools Global Ltd | All
        Rights Reserved.
      </p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/web/web.scss';

.card-contact {
  @extend .bg-info;
  background-image: url('@/src/assets/bg-waves-small.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right top;
}

.icon-circle {
  @extend .btn;
  @extend .btn-light;
  @extend .text-info;
  border-radius: 50%;
  height: 2.5rem;
  width: 2.5rem;
  @extend .d-flex;
  @extend .align-items-center;
  @extend .justify-content-center;
  padding: 0;
  font-size: 1.5rem;
}
</style>
