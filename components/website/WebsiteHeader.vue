<script setup lang="ts">
import Banner from '@/components/website/Banner.vue'
</script>

<template>
   <!-- This is a good example to show or not based on state  -->
   <Banner/>
   <div class="bg-primary text-light">
      <div class="container-fluid">
         <div>
            <span>020 72052723</span>
            <NuxtLink to="/"><img src="@/src/assets/sss-logo.png" alt=""></NuxtLink>
            <NuxtLink to="">Book a Free Trials</NuxtLink>
            <NuxtLink to="/synco/login" class="btn btn-light">Login</NuxtLink>
            <NuxtLink to="/parents/login">Parents</NuxtLink>
         </div>
         <nav class="navbar-menu">
            <NuxtLink to="/">HOME</NuxtLink>
            <NuxtLink to="/find-a-class">Find a Class</NuxtLink>
            <NuxtLink to="/services">Services</NuxtLink>
            <NuxtLink to="/franchise">Franchise</NuxtLink>
            <nuxtlink to="/coaching">Coaching</nuxtlink>
            <NuxtLink to="/contact">Contact</NuxtLink>
         </nav>
      </div>
   </div>
</template>

<style lang="scss">
   // @import '@/assets/styles/web/style.scss';
   .navbar {
      // background-color: $primary;
      // color: $white;
      text-align: center;
      &-menu {
         a { color: #fff;}
      }
   }
   .btn-login {
      background-color: #FFDE14;
      color: #042C89;
      border-radius: 50rem;
   }
</style>
