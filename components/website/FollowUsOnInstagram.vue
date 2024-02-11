<template>
  <div class="container py-5">
    <div class="col-sm-10 mx-auto">
      <div class="card bg-info rounded-4 text-bg-dark bg-light-blue-green-wave">
        <div class="row">
          <div class="col-sm-4 order-sm-2">
            <img
              src="@/src/assets/img-kids-picture-2.png"
              class="img-fluid rounded-start px-4"
              alt=""
            />
          </div>
          <div class="col order-sm-1">
            <div class="card-body ms-sm-3 p-5">
              <h4 class="h1 font-custom">
                <span class="text-warning">Follow us</span> on Instagram
              </h4>
              <p class="lead" style="line-height: 2rem">
                Relive every moment. Our photographers are always on the lookout
                for the best flicks, tricks and celebrations so you can add it
                to the family album. Follow the action from our kids football
                training in London by subscribing to our Instagram.
              </p>
              <NuxtLink
                to="https://www.instagram.com/sambasoccer_uk"
                target="_blank"
                class="btn btn-lg btn-warning rounded-5 px-4"
              >
                <strong>
                  <Icon name="mdi:instagram" class="mb-1 me-3" />Follow on
                  Instagram
                </strong>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg-light-blue-green-wave {
  background-image: url('@/src/assets/bg-right-green-wave.svg');
  background-repeat: no-repeat;
  // background-size: cover;
  background-position: right center;
}
</style>
