<script setup lang="ts">
const layout = "weblayout";
</script>

<template>
  <NuxtLayout :name="layout">

    <!-- Word from founder -->

    <section class="bg-primary-texture-with-top-wave-light bg-primary text-bg-dark py-5">
      <div class="container">
        <div class="my-5 pt-5 text-center">
          <h2 class="display-4 text-success font-custom my-5">A Word from our founder</h2>
          <div class="col-sm-8 mx-auto " style="line-height:2.5rem">
            <p class="lead">It was both experiences that eventually kick-started Nilio’s coaching journey. He realised the
              importance
              of great coaches who taught children how to play with freedom, yet maintained structure in their classes. He
              dug deeper and took off to Brazil to discover the history of Brazilian football and the art of Samba Soccer.
              Fast forward 10 hardworking years, and the result is a kids football school that emphasises creativity,
              freedom and imagination at its core to emulate Nilio’s stress-free football experience on the playground.
            </p>
            <p class="lead">In addition, our Brazilian football academy provides children with their own ball to maximise
              the number of touches per class so they can progress quicker. Sessions are well organised and coaches are
              professionally recruited and trained to teach your child entertaining, skilful football. And to bring the
              atmosphere to life, your child can enjoy each class to the rich rhythms of samba music in the backdrop.</p>

          </div>

        </div>



      </div>
    </section>

    <!--  -->


    <section class="bg-waves-green-blue py-4 text-cneter">
      <div class="container">
        <div class="row">
          <div class="col-sm-8 mx-auto">
            <div class="card rounded-4 border-0 bg-light pt-4 pb-5">
              <div class="card-body px-5">
                <h3 class="display-4 text-info mb-4 font-custom"><em>Book a samba soccer class</em></h3>
                <WebsiteSelectVenueForm />

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>