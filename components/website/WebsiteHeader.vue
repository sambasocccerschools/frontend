<script setup lang="ts">
import Banner from '@/components/website/Banner.vue'
</script>

<template>
   <!-- This is a good example to show or not based on state  -->
   <Banner/>
   <div class="bg-primary text-light">
      <div class="container-fluid">
        <div class="row pt-4">
          <div class="col-5 border-bottom pb-4">
            <span class="btn btn-light rounded-5">020 72052723</span>
          </div>
          <NuxtLink to="/" class="logo col text-center"><img src="@/src/assets/sss-logo.png" alt=""></NuxtLink>
          <div class="d-flex gap-2 col-5 justify-content-end  border-bottom pb-4">
            <NuxtLink to="/find-a-class" class="btn btn-light rounded-5">Book a Free Trials</NuxtLink>
            <NuxtLink to="/synco/login" class="btn btn-outline-light">Synco Login</NuxtLink>
            <NuxtLink to="/parents/login" class="btn btn-outline-light">Parents Login</NuxtLink>
          </div>
        </div>
        <nav class="row py-3">
          <div class="col d-flex">
            <NuxtLink to="/" class="btn btn-link text-light">HOME</NuxtLink>
            .
            <NuxtLink to="/find-a-class" class="btn btn-link text-light">Find a Class</NuxtLink>
            .
            <!-- <NuxtLink to="/services" class="btn btn-link text-light">Services</NuxtLink> -->
            .
            <NuxtLink to="/about-us" class="btn btn-link text-light">About Us</NuxtLink>
          </div>
          <div class="col justify-content-end d-flex">
            <NuxtLink to="/franchise" class="btn btn-link text-light">Franchise</NuxtLink>
            .
            <Nuxtlink to="/coaching" class="btn btn-link text-light">Coaching</Nuxtlink>
            <!-- <NuxtLink to="/contact" class="btn btn-link text-light">Contact</NuxtLink> -->
          </div>
        </nav>
      </div>
   </div>
</template>

<style lang="scss">
   // @import '@/assets/styles/web/style.scss';
   .logo {
      height: 1rem;
   }
</style>
