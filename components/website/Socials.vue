<template>
  <section class="lets-be-friends py-4">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-sm-5">
          <h3 class="h1  text-light font-custom mt-3">Let's be friends</h3>
          <p class="lead text-light text-semibold">If we are not playing football you can find us socialising on…</p>
        </div>
        <div class="col d-flex">
          <NuxtLink class="btn-social">F</NuxtLink>
          <NuxtLink class="btn-social">F</NuxtLink>
          <NuxtLink class="btn-social">F</NuxtLink>
          <NuxtLink class="btn-social">F</NuxtLink>
          <NuxtLink class="btn-social">F</NuxtLink>
        </div>
        <div class="col-auto">
          <NuxtLink to="/" class="btn btn-light rounded-5 text-info px-4 btn-lg"><strong>Shop Online</strong></NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
   @import '@/assets/styles/web/style.scss';

  section.lets-be-friends {
    background-image: url('@/src/assets/bg-banner-waves.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }
  .btn-social {
    @extend .btn;
    @extend .btn-light;
    @extend .rounded-5;
    @extend .me-2;
    @extend .text-success;
    height: 3rem;
    width: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>