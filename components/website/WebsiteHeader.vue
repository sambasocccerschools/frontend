<script setup lang="ts">
import PromoCode from '@/components/website/PromoCode.vue'
</script>

<template>
   <!-- This is a good example to show or not based on state  -->
   <PromoCode/>
   <div class="navbar">
      <div>
         <span>020 72052723</span>
         <NuxtLink to="/"><img src="@/src/assets/sss-logo.png" alt=""></NuxtLink>
         <NuxtLink to="">Book a Free Trials</NuxtLink>
         <NuxtLink to="/synco" class="btn btn-login">Login</NuxtLink>
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
</template>

<style scoped lang="scss">
   .navbar {
      background-color: #042C89;
      color: #fff;
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
