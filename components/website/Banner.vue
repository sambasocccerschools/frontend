<template>
  <!-- <transition name="fade">
    <div v-if="showPopup" class="overlay">
      <div class="promo-popup bg-warning text-light text-center p-4 rounded shadow">
        <div class="bg-success d-inline-block px-3 py-2">
          Sign up this summer and get a free kit - Use discount code <strong>SAMBA10</strong>
          <button
            class="btn-close btn-close-white ms-3"
            aria-label="Close"
            @click="closePopup"
          ></button>
        </div>
      </div>
    </div>
  </transition> -->
</template>

<script>
export default {
  data() {
    return {
      showPopup: false,
    };
  },
  mounted() {
    const isMobile = window.innerWidth <= 767;
    if (isMobile) {
      this.showPopup = true;
    }
  },
  methods: {
    closePopup() {
      this.showPopup = false;
    },
  },
};
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9998;
}

.promo-popup {
  z-index: 9999;
  max-width: 90%;
  text-align: center;
}

/* ocultar en pantallas grandes */
@media (min-width: 768px) {
  .overlay {
    display: none !important;
  }
}

/* Transiciones */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>
