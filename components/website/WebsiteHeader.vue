<script setup lang="ts">
// import Banner from '@/components/website/Banner.vue'
</script>

<template>
  <!-- This is a good example to show or not based on state  -->
  <WebsiteBanner />
  <div class="bg-primary text-light bg-texture-primary">
    <div class="container-fluid">
      <div class="row pt-4">
        <div class="col-5 border-bottom pb-4">
          <span class="btn btn-light rounded-5 ">
            <Icon name="ph:phone" class="me-2" />020 72052723
          </span>
        </div>
        <NuxtLink to="/" class="logo col text-center"><img src="@/src/assets/sss-logo.png" alt=""></NuxtLink>
        <div class="d-flex gap-2 col-5 justify-content-end  border-bottom pb-4">
          <NuxtLink to="/find-a-class" class="btn btn-light rounded-5"><span class="font-custom">Book a Free Trial</span>
          </NuxtLink>
          <NuxtLink to="/synco" class="btn btn-outline-light">Synco Login</NuxtLink>
          <NuxtLink to="/parents" class="btn btn-outline-light">Parents Login</NuxtLink>
        </div>
      </div>
      <nav class="row py-3">
        <div class="col d-flex">
          <NuxtLink to="/" class="btn btn-link text-light" active-class="current">HOME</NuxtLink>
          <span class="text-warning">.</span>
          <NuxtLink to="/find-a-class" class="btn btn-link text-light" active-class="current">Find a Class</NuxtLink>
          <span class="text-warning">.</span>
          <!-- <NuxtLink to="/services/weekly-classes" class="btn btn-link text-light" active-class="current">Services
          </NuxtLink> -->
          <button class="btn btn-link text-light dropdown-toggle" active-class="current" data-bs-toggle="dropdown"
            aria-expanded="false">
            Services
          </button>
          <ul class="dropdown-menu dropdown-menu-dark bg-texture-primary">
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
          <span class="text-warning">.</span>
          <NuxtLink to="/about-us" class="btn btn-link text-light" active-class="current">About Us</NuxtLink>
        </div>
        <div class="col justify-content-end d-flex">
          <NuxtLink to="/franchise" class="btn btn-link text-light" active-class="current">Franchise</NuxtLink>
          <span class="text-warning">.</span>
          <NuxtLink to="/coaching" class="btn btn-link text-light" active-class="current">Coaching</NuxtLink>
          <span class="text-warning">.</span>
          <NuxtLink to="/contact" class="btn btn-link text-light" active-class="current">Contact</NuxtLink>
        </div>
      </nav>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/web/web.scss';

.bg-texture-primary {
  background-image: url('@/src/assets/bg-primary-texture.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center right;
}

.logo {
  height: 1rem;
}

.btn.current {
  // text-decoration: underline;
  // font-weight: bold;
  border-bottom: 1px solid $warning;
}
</style>
