
<template>
  <section class="bg-why-should py-4">
    <div class="container">
      <div class="card rounded-4 border-0 bg-card">
        <div class="card-body px-5">
          <div class="row align-items-center">
            <div class="col-sm-8 py-4">
              <h3 class="display-6 text-success mb-4"><em>WHY SHOULD I CHOOSE</em>
                <div class="text-primary font-custom">your weekly football classes</div>
              </h3>
              <p class="text-muted lead">Weekly classes are an excellent way to develop skills on a consistent basis,
                build
                confidence, make friends, establish a healthy routine, and have a lot of fun along the way - but actions
                speak louder than words. Why not book a free trial class with Samba Soccer Schools, and we’ll be more than
                happy to show you what we do. </p>
            </div>
            <div class="col height-100">
              <WebsiteSelectVenueForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section.bg-why-should {
  background-image: url('@/src/assets/bg-yellow-green-texture.svg');
  background-repeat: no-repeat;
  background-size: cover;
}

.bg-card {
  background-color: #FDFDFF;
}
</style>