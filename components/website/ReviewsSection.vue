<!-- <template>
  <section class="bg-gray-texture pt-30 pb-30">
    <div class="container text-center">
      <img
        src="@/src/assets/home/logo-google.png"
        alt="Google Reviews"
        class="img-fluid google-logo"
      />

      <h2 class="display-4 text-primary text-center">
        <span class="font-custom">Unforgettable </span>
        <span class="position-relative d-inline-block">
          <em class="text-info">MOMENTS</em>
          <img
            src="@/src/assets/home/text-decoration-services.png"
            alt="decoration"
            class="decoration-svg-review position-absolute"
          />
        </span>
        <br />
        <span class="font-custom">since 2009</span>
      </h2>

      <div class="row align-items-center mt-5">
        <div class="col">
          <div class="bg-info rounded-4 p-4 text-white">
            <span class="text-semibold"
              >“Every Tuesday my son is excited to attend his session to learn
              new skills and listen to loud samba music!”</span
            >
            <div class="my-3">Student, Samba Soccer School</div>
            <div class="text-warning">★★★★★</div>
          </div>
          <img
            src="@/src/assets/img-review-1.png"
            alt="review-picture"
            class="mt-3"
          />
        </div>
        <div class="col">
          <div class="bg-success rounded-4 p-4 text-white">
            <span class="text-semibold lead"
              >“Every Tuesday my son is excited to attend his session to learn
              new skills and listen to loud samba music!”</span
            >
            <div class="my-3">Student, Samba Soccer School</div>
            <div class="text-warning">★★★★★</div>
          </div>
          <img
            src="@/src/assets/img-review-1.png"
            alt="review-picture"
            class="mt-3"
          />
        </div>
        <div class="col">
          <div class="bg-warning rounded-4 text-primary p-4">
            <span class="text-semibold"
              >“Every Tuesday my son is excited to attend his session to learn
              new skills and listen to loud samba music!”</span
            >
            <div class="my-3">Student, Samba Soccer School</div>
            <div>★★★★★</div>
          </div>
          <img
            src="@/src/assets/img-review-1.png"
            alt="review-picture"
            class="mt-3"
          />
        </div>
      </div>
    </div>
  </section>
</template> -->

<!-- <style lang="scss" scoped>
.decoration-svg-review {
  bottom: -0.26em;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 220px;
  height: auto;
}
</style> -->

<template>
  <section class="bg-gray-texture pt-30 pb-30">
    <div class="container text-center">
      <img
        src="@/src/assets/home/logo-google.png"
        alt="Google Reviews"
        class="img-fluid google-logo"
      />

      <h2 class="display-4 text-primary text-center">
        <span class="font-custom">Unforgettable </span>
        <span class="position-relative d-inline-block">
          <em class="text-info">MOMENTS</em>
          <img
            src="@/src/assets/home/text-decoration-services.png"
            alt="decoration"
            class="decoration-svg-review position-absolute"
          />
        </span>
        <br />
        <span class="font-custom">since 2009</span>
      </h2>
    </div>
    <section class="carousel-container">
      <!-- <div class="carousel-wrapper" :style="carouselStyle"> -->
      <div class="carousel-wrapper">
        <div
          v-for="(review, index) in reviews"
          :key="index"
          class="carousel-item"
          :class="{
            active: index === currentIndex,
            prev: index === prevIndex,
            next: index === nextIndex,
          }"
        >
          <div class="review-card" :class="review.bgClass">
            <p class="review-text">“{{ review.text }}”</p>
            <div class="author">{{ review.author }}</div>
            <div class="stars">★★★★★</div>
          </div>
          <img :src="review.image" alt="Reviewer" class="review-image" />
        </div>
      </div>

      <!-- Arrows -->
      <button class="nav left" @click="prevReview">‹</button>
      <button class="nav right" @click="nextReview">›</button>

      <!-- Dots -->
      <div class="dots">
        <span
          v-for="(_, i) in reviews"
          :key="'dot-' + i"
          class="dot"
          :class="{ active: i === currentIndex }"
        />
      </div>
    </section>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import iconReview1 from '@/src/assets/home/img-review1.png'
import iconReview2 from '@/src/assets/home/img-review2.png'
import iconReview3 from '@/src/assets/home/img-review3.png'

const reviews = [
  {
    text: 'Every Tuesday my son is excited to attend his session to learn new skills and listen to loud samba music!',
    author: 'Student, Samba Soccer School',
    image: iconReview2,
    bgClass: 'green-bg',
  },
  {
    text: 'My daughter loves the energy and the music. It’s her favorite part of the week!',
    author: 'Parent, Samba Soccer School',
    image: iconReview1,
    bgClass: 'blue-bg',
  },
  {
    text: 'Fun, learning, and passion – all in one session!',
    author: 'Coach, Samba Soccer School',
    image: iconReview3,
    bgClass: 'yellow-bg',
  },
]

const currentIndex = ref(0)

const prevIndex = computed(() =>
  currentIndex.value === 0 ? reviews.length - 1 : currentIndex.value - 1,
)
const nextIndex = computed(() =>
  currentIndex.value === reviews.length - 1 ? 0 : currentIndex.value + 1,
)

const prevReview = () => {
  currentIndex.value = prevIndex.value
}
const nextReview = () => {
  currentIndex.value = nextIndex.value
}

const carouselStyle = computed(() => {
  const offset = currentIndex.value * -70 // mueve en base al ancho del item
  return {
    transform: `translateX(${offset}%)`,
  }
})
</script>

<style scoped>
.decoration-svg-review {
  bottom: -0.26em;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 220px;
  height: auto;
}

.carousel-container {
  overflow: hidden;
  width: 100%;
  max-width: 400px;
  margin: auto;
  padding: 2rem 0;
  position: relative;
}

.carousel-wrapper {
  display: flex;
  transition: transform 0.6s ease;
  gap: 1rem;
  padding: 0 10%;
}

.carousel-item {
  min-width: 70%;
  flex-shrink: 0;
  transition: transform 0.3s ease;
  opacity: 0.6;
  transform: scale(0.95);
}

.carousel-item:nth-child(n + 1) {
  opacity: 0.6;
}

.carousel-item:nth-child(n + 1):nth-of-type(1n) {
  transform: scale(0.95);
}

.carousel-item:nth-child(n + 1):nth-of-type(1n).active {
  transform: scale(1);
  opacity: 1;
}

.review-card {
  border-radius: 20px;
  padding: 1.5rem;
  color: white;
  text-align: center;
  position: relative;
}

/* ... El resto de tus estilos de imágenes, dots, flechas, etc. se mantiene igual */

.review-text {
  font-size: 1.1rem;
  font-weight: bold;
}

.author {
  margin: 1rem 0;
  font-size: 0.9rem;
}

.stars {
  color: #ffc107;
  font-size: 1.2rem;
}

/* Backgrounds */
.green-bg {
  background-color: #00c96b;
}

.blue-bg {
  background-color: #0070f3;
}

.yellow-bg {
  background-color: #ffcc00;
  color: #042c89;
}

/* Reviewer image */
.review-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
  margin: 1rem auto 0;
  border: 3px solid white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  display: block;
}

/* Navigation arrows */
.nav {
  position: absolute;
  top: 45%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 2rem;
  color: #042c89;
  cursor: pointer;
  z-index: 10;
}

.nav.left {
  left: 10px;
}

.nav.right {
  right: 10px;
}

/* Dots */
.dots {
  text-align: center;
  margin-top: 1rem;
}

.dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  background-color: #ffd700;
  border-radius: 50%;
  opacity: 0.5;
  transition: opacity 0.3s;
}

.dot.active {
  background-color: #042c89;
  opacity: 1;
}
</style>
