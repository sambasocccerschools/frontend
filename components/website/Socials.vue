<template>
  <section class="lets-be-friends py-4">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-sm-5">
          <h3 class="h1  text-light font-custom mt-3">Let's be friends</h3>
          <p class="lead text-light text-semibold">If we are not playing football you can find us socialising on…</p>
        </div>
        <div class="col d-flex">
          <NuxtLink class="btn-social" to="https://www.facebook.com/sambasoccerschools/" target="_blank">
            <Icon name="gg:facebook" />
          </NuxtLink>
          <NuxtLink class="btn-social" to="https://www.instagram.com/sambasoccer_uk" target="_blank">
            <Icon name="mdi:instagram" />
          </NuxtLink>
          <NuxtLink class="btn-social" to="https://www.youtube.com/c/sambasoccerschools" target="_blank">
            <Icon name="ph:youtube-logo-fill" />
          </NuxtLink>
          <NuxtLink class="btn-social" to="https://uk.linkedin.com/company/samba-soccer-schools-" target="_blank">
            <Icon name="mdi:linkedin" />
          </NuxtLink>
          <NuxtLink class="btn-social" to="https://twitter.com/samba_soccer" target="_blank">
            <Icon name="mdi:twitter" />
          </NuxtLink>
        </div>
        <div class="col-auto">
          <NuxtLink to="/" class="btn btn-light rounded-5 text-info px-4 btn-lg d-flex align-items-center">
            <Icon name="material-symbols:shopping-cart-outline" class="me-2" /><strong>Shop Online</strong>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@import '@/assets/styles/web/web.scss';

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
  font-size: 2rem;
}
</style>