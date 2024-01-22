<template>
  <!-- This is a good example to show or not based on state  -->
  <WebsiteBanner />
  <div class="bg-primary text-light bg-primary-texture shadow-lg">
    <div class="container-fluid">
      <div class="row pt-4">
        <div class="col-5 border-bottom pb-4">
          <span class="btn btn-light rounded-5 ">
            <Icon name="ph:phone" class="me-2" />020 72052723
          </span>
        </div>
        <NuxtLink to="/" class="logo col text-center"><img src="@/src/assets/sss-logo.png" alt=""></NuxtLink>
        <div class="d-flex gap-2 col-5 justify-content-end  border-bottom pb-4">
          <NuxtLink to="/book" class="btn btn-light rounded-5"><span class="font-custom">Book a Free Trial</span>
          </NuxtLink>
          <div>
            <NuxtLink to="/synco" class="btn btn-outline-light">Synco Login</NuxtLink>
          </div>
          <NuxtLink to="/parents" class="btn btn-outline-light">Parents Login</NuxtLink>
        </div>
      </div>
      <nav class="row py-3">
        <div class="col d-flex">
          <NuxtLink to="/" class="btn btn-link text-light" active-class="current">HOME</NuxtLink>
          <span class="text-warning">.</span>
          <!-- Find a Clas  -->
          <div class="btn-group">
            <button class="btn btn-link text-light dropdown-toggle" active-class="current" data-bs-toggle="dropdown"
              aria-expanded="false">
              Find a Class
            </button>
            <ul class="dropdown-menu dropdown-menu-dark bg-primary-texture">
              <li>
                <NuxtLink to="/book" class="dropdown-item">Find a Class</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/book/holiday-camps" class="dropdown-item">Book a Holiday Camp</NuxtLink>
              </li>

            </ul>
          </div>
          <!-- <NuxtLink to="/book" class="btn btn-link text-light" active-class="current">Find a Class</NuxtLink> -->
          <span class="text-warning">.</span>
          <!-- <NuxtLink to="/services/weekly-classes" class="btn btn-link text-light" active-class="current">Services
          </NuxtLink> -->
          <div class="btn-group">
            <button class="btn btn-link text-light dropdown-toggle" active-class="current" data-bs-toggle="dropdown"
              aria-expanded="false">
              Services
            </button>
            <ul class="dropdown-menu dropdown-menu-dark bg-primary-texture">
              <li>
                <NuxtLink to="/services/weekly-classes" class="dropdown-item">Weekly Classes</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/services/holiday-camps" class="dropdown-item">Holiday Camps</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/services/one-to-one-training" class="dropdown-item">One-to-one training</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/services/birthday-parties" class="dropdown-item">Birthday Parties</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/services/club" class="dropdown-item">Club</NuxtLink>
              </li>
            </ul>
          </div>
          <span class="text-warning">.</span>

          <div class="btn-group">
            <button class="btn btn-link text-light dropdown-toggle" active-class="current" data-bs-toggle="dropdown"
              aria-expanded="false">
              About Us
            </button>
            <ul class="dropdown-menu dropdown-menu-dark bg-primary-texture">
              <li>
                <NuxtLink to="/about" class="dropdown-item">About</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/about/meet-the-team" class="dropdown-item">Meet the team</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/about/sss-uniform" class="dropdown-item">SSS Uniform</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/about/london-venues" class="dropdown-item">London Venues</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/about/reviews" class="dropdown-item">Reviews</NuxtLink>
              </li>

            </ul>
          </div>
          <!-- <NuxtLink to="/about" class="btn btn-link text-light" active-class="current">About Us</NuxtLink> -->
        </div>
        <div class="col justify-content-end d-flex">
          <!-- <NuxtLink to="/franchise" class="btn btn-link text-light" active-class="current">Franchise</NuxtLink> -->
          <!-- Franchise  -->
          <div class="btn-group">
            <button class="btn btn-link text-light dropdown-toggle" active-class="current" data-bs-toggle="dropdown"
              aria-expanded="false">
              Franchise
            </button>
            <ul class="dropdown-menu dropdown-menu-dark bg-primary-texture">
              <li>
                <NuxtLink to="/franchise" class="dropdown-item">Franchise</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/services/weekly-classes" class="dropdown-item">Investment</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/services/holiday-camps" class="dropdown-item">Support</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/services/holiday-camps" class="dropdown-item">Ideal Candidate</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/services/birthday-parties" class="dropdown-item">Case Study</NuxtLink>
              </li>
            </ul>
          </div>

          <span class="text-warning">.</span>
          <!-- Coaching  -->
          <div class="btn-group">
            <button class="btn btn-link text-light dropdown-toggle" active-class="current" data-bs-toggle="dropdown"
              aria-expanded="false">
              Coaching
            </button>
            <ul class="dropdown-menu dropdown-menu-dark bg-primary-texture">
              <li>
                <NuxtLink to="/coaching" class="dropdown-item">Coaching</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/coaching/work-for-us" class="dropdown-item">Work for us</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/coaching/regional-manager" class="dropdown-item">Regional Manager</NuxtLink>
              </li>
            </ul>
          </div>
          <!-- <NuxtLink to="/coaching" class="btn btn-link text-light" active-class="current">Coaching</NuxtLink> -->
          <span class="text-warning">.</span>
          <NuxtLink to="/contact" class="btn btn-link text-light" active-class="current">Contact</NuxtLink>
        </div>
      </nav>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/web/web.scss';


.logo {
  height: 1rem;
}

.btn.current {
  // text-decoration: underline;
  // font-weight: bold;
  border-bottom: 1px solid $warning;
}
</style>
