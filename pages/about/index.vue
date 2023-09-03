<script setup lang="ts">
const layout = "weblayout";
</script>

<template>
  <NuxtLayout :name="layout">
    <header class="bg-header-about-us d-flex align-items-center">
      <div class="container text-center">
        <h1 class="text-info display-2"><em>Teaching <br> brazilian <br> football</em> <br> <span
            class="font-custom text-primary display-4">since 2009</span></h1>
      </div>
    </header>

    <!-- Take your coaching to the next level  -->
    <section class="py-4">
      <div class="container py-5">

        <div class="row align-items-center pt-5 pb-3">
          <div class="col order-sm-2 text-center">
            <img src="@/src/assets/img-football-schools-in-london.png"
              alt="Take your football coaching to the next level…" class="img-fluid">
          </div>
          <div class="col-sm-7 order-sm-1">
            <h2 class="h1 text-primary font-custom mb-4">Football schools in London that change the way your child plays
              football
            </h2>
            <p class="lead text-muted mb-4">We love Brazilian football. Everything from the skills, to the tricks and
              passionate goal celebrations. And we love coaching the game to children even more.</p>
            <p class="lead text-muted mb-4">That’s why we created Samba Soccer Schools in 2009; a Brazilian football
              academy in
              London to help your child learn how to play the beautiful game.</p>
            <p class="lead text-muted mb-4">With our football schools, your child will develop their confidence and can
              enjoy
              playing creatively, without the fear of making mistakes.</p>
            <NuxtLink to="/about" class="btn btn-warning rounded-5 btn-lg px-4 text-primary"><strong>Read More</strong>
            </NuxtLink>
          </div>

        </div>
      </div>
    </section>

    <!-- Our Story  -->
    <section class="what-does-role-include bg-primary-texture bg-primary text-bg-dark pt-5">
      <div class="bg-our-story-corners">
        <div class="container">
          <div class="mt-5 pt-5 text-center">
            <h2 class="display-4 text-warning font-custom mt-5">Our Story</h2>
            <p class="lead col-sm-6 mx-auto">Here is an overview of the six areas our Regional Manager would oversee and
              what each would
              entail:</p>
            <div class="row row-cols-sm-2 text-start my-5 ">
              <div class="col-sm-9 mx-auto">
                <div class="row">
                  <div class="col">
                    <p class="lead">Have you ever seen those coaches who scream and shout constantly at their players? Or
                      the
                      one’s that yell
                      phrases from the sideline like ‘Box em’ in’ or ‘Go long’ without any meaning? There’s nothing worse
                      than
                      your child showing up for training withexcitement, only to go home feeling low on self-esteem.
                      That’s
                      exactly what happened to our Founder, Nilio Bagga when he was a child.</p>
                    <p class="lead">The moment he tried anything skillful, he was immediately shot down by his coaches and
                      told
                      to play the
                      more routined ‘safe’ way. But it was boring! It lacked any creativity or entertainment.</p>
                    <p class="lead">Instead Nilio found more joy on the playground with his friends. There was no pressure
                      from
                      anyone. And
                      he felt he could really express himself without the fear of making mistakes. This is what helped him
                      build
                      his confidence and sharpen his skills. Teachers would struggle to get Nilio and his friends off the
                      pitch
                      because there was just so much passion to play.</p>
                  </div>

                  <div class="col">
                    <p class="lead">It was both experiences that eventually kick-started Nilio’s coaching journey. He
                      realised the importance of great coaches who taught children how to play with freedom, yet
                      maintained
                      structure in their classes. He dug deeper and took off to Brazil to discover the history of
                      Brazilian
                      football and the art of Samba Soccer. Fast forward 10 hardworking years, and the result is a kids
                      football school that emphasises creativity, freedom and imagination at its core to emulate Nilio’s
                      stress-free football experience on the playground.</p>
                    <p class="lead">In addition, our Brazilian football academy provides children with their own ball to
                      maximise the number of touches per class so they can progress quicker. Sessions are well organised
                      and
                      coaches are professionally recruited and trained to teach your child entertaining, skilful football.
                      And to bring the atmosphere to life, your child can enjoy each class to the rich rhythms of samba
                      music in the backdrop.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="py-5">
              <img src="@/src/assets/img-logo-samba-soccer-schools-large.svg" alt="Logo Samba Soccer Schools"
                class="img-fluid mb-5">
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="bg-why-brazil">
      <div class="container">
        <div class="row">
          <h2 class="display-4"><em class="text-success">Why Brazil?</em> <img src="@/src/assets/img-icon-brazil-flag.svg"
              alt="Brazil Flag"></h2>
          <p class="font-custom text-primary lead mb-5">Good question. As a kid, our Founder, Nilio Bagga was obsessed
            with
            watching
            Ronaldinho play.</p>
          <div class="row">
            <div class="col">
              <p class="lead text-muted">Ronaldinho was a Brazilian footballer nick-named ‘the magician’. And there’s good
                reason for it. He would play to entertain. He could dance his way around defenders, control the ball with
                almost any part of his body and do the most unimaginable football tricks that, well… only a magician could
                do! But above all, Ronaldinho played with a smile. And you couldn’t help but smile and be inspired
                watching him.</p>
            </div>
            <div class="col">
              <p class="lead text-muted">So why did Nilio want to emulate the Brazilian style in Samba Soccer Schools?</p>
              <p class="lead text-muted">Because it instils joy and encourages children to think and play more
                creatively. And from all our years of experience, the result is sharper skills and newfound confidence.
              </p>
            </div>
          </div>

          <div class="row mt-5 pt-5">
            <div class="col-sm-6">
              <img src="@/src/assets/img-what-is-brazilian-football.png" alt="img-what-is-brazilian-football"
                class="img-fluid mb-5" />
              <h4 class="h1">
                <em class="text-info me-2">What is Brazilian <span><img src="@/src/assets/img-icon-general.svg"
                      alt=""></span> Football?</em>

                <span class="text-primary font-custom"> Our Style of
                  Play</span>
              </h4>
              <p class="lead text-muted">‘Man you can’t play football if you don’t have that swing’. It was Robinho, an
                iconic Brazilian footballer who said this. Brazilian football is rooted in a style of play known as
                ‘Ginga’.</p>
              <p class="lead text-muted">Ginga is about rhythm. It’s swinging your body from one side to the other to
                deceive. Ginga is creativity and it’s all about having fun with the ball. Our Brazilian football schools
                in London teach this attractive and soulful style of football.</p>
            </div>
            <div class="col-sm-6">
              <img src="@/src/assets/img-what-is-brazilian-football-for-kids.png"
                alt="img-what-is-brazilian-football-for-kids" class="img-fluid mb-4">
              <p class="lead text-muted">‘Man you can’t play football if you don’t have that swing’. It was Robinho, an
                iconic Brazilian footballer who said this. Brazilian football is rooted in a style of play known as
                ‘Ginga’.</p>
              <p class="lead text-muted">Ginga is about rhythm. It’s swinging your body from one side to the other to
                deceive. Ginga is creativity and it’s all about having fun with the ball. Our Brazilian football schools
                in London teach this attractive and soulful style of football.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class=" bg-primary-texture-with-top-wave-white text-bg-dark py-5">
      <div class="container">
        <div class="my-5 pt-5 text-center">
          <h2 class="display-4 text-success font-custom mt-5">Our Values</h2>
          <p class="lead col-sm-6 mx-auto">Get to know us more by understanding our 4 key values</p>
        </div>

        <div class="py-5">
          <div class="container">
            <div class="row row-cols-sm-2 gy-5">
              <!--  -->
              <div class="col">
                <div class="d-flex align-items-start">
                  <img src="@/src/assets/img-icon-safety.svg" class="me-5" alt="Safety">
                  <div class="pe-sm-5">
                    <h4 class="font-custom text-success">Safety</h4>
                    <p class="lead">We put safety first. Football classes only take place in London’s top indoor and
                      outdoor secure
                      venues. Our DBS qualified coaches run safety checks before each class and there are always first-aid
                      trained coaches on site.</p>
                  </div>
                </div>
              </div>
              <!--  -->
              <div class="col">
                <div class="d-flex align-items-start">
                  <img src="@/src/assets/img-icon-values-fun.svg" class="me-5" alt="img-icon-values-fun">
                  <div class="pe-sm-5">
                    <h4 class="font-custom text-warning">Fun</h4>
                    <p class="lead">Fun is carefully woven into our football school so your child can have a great time.
                      Imagine your child stepping onto the football pitch hearing that party-like Samba music. They greet
                      their friends, learn never-before-seen skills and enjoy lots of competitive small-sided games. Now
                      that’s fun!</p>
                  </div>
                </div>
              </div>
              <!--  -->
              <div class="col">
                <div class="d-flex align-items-start">
                  <img src="@/src/assets/img-icon-values-innovation.svg" class="me-5" alt="img-icon-values-innovation">
                  <div class="pe-sm-5">
                    <h4 class="font-custom text-warning">Innovation</h4>
                    <p class="lead">We like to mix things up and do things differently. Aside from the music and the
                      weighted skills ball, we constantly revise our sessions so your child can always be developing. As a
                      member, you will also be given access to our skills tutorial app so your child can continue learning
                      from home.</p>
                  </div>
                </div>
              </div>
              <!--  -->
              <div class="col">
                <div class="d-flex align-items-start">
                  <img src="@/src/assets/img-icon-values-education.svg" class="me-5" alt="img-icon-values-education">
                  <div class="pe-sm-5">
                    <h4 class="font-custom text-warning">Education</h4>
                    <p class="lead">With Samba Soccer Schools, we make it our absolute mission to instil knowledge into
                      students. Skills are broken into ability groups so your child always has something to strive for. We
                      also teach key social skills such as teamwork, respect and listening which can be transferred off
                      the pitch.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <WebsiteReasonsToChooseSSS />

    <!-- Try out a class  -->
    <section class="bg-waves-green-yellow py-4">
      <div class="container">
        <div class="card rounded-4 border-0 bg-light">
          <div class="card-body px-5">
            <div class="row align-items-center">
              <div class="col-sm-8 py-4">
                <h3 class="display-4 text-primary mb-4 font-custom">Try out a class, for <em
                    class="text-success">free…</em>
                </h3>
                <p class="text-muted lead">We could give you hundreds of extra reasons why you should choose our <NuxtLink
                    to="/services/weekly-classes">weekly football
                    classes</NuxtLink> for your child over the rest. But truth be told, we’d rather show you. So why not
                  <NuxtLink to="/book/">book a free
                    trial lesson</NuxtLink> for your child and experience the fun for yourself.
                </p>
                <p class="text-muted lead">Enter your postcode below to find your nearest class!</p>
              </div>
              <div class="col height-100">
                <WebsiteSelectVenueForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<style>
header.bg-header-about-us {
  background-image: url('@/src/assets/bg-header-about-us.png');
  height: 70vh;
  background-size: cover;
  background-repeat: no-repeat;
}

/* .bg-primary-texture {
  background-image: url('@/src/assets/bg-white-wave-top.svg'), url('@/src/assets/bg-primary-texture.png');
  background-repeat: no-repeat;
  background-size: 100% auto, cover;
} */

.bg-our-story-corners {
  background-image: url('@/src/assets/bg-story-1.png'), url('@/src/assets/bg-story-2.png');
  background-repeat: no-repeat;
  background-position: bottom left, bottom right;
}

.bg-why-brazil {
  background-image: url('@/src/assets/bg-corner-left-top-why-brazil.png'), url('@/src/assets/bg-corner-right-top-green-curve.svg');
  background-repeat: no-repeat;
  background-position: top left, top right;
  background-size: 45%, 35%;
  padding-top: 25rem;
  padding-bottom: 7rem;
}
</style>