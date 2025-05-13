<template>
  <NuxtLink
    :to="to"
    class="rounded-button d-inline-flex align-items-center justify-content-center text-decoration-none"
    :style="buttonStyle"
  >
    <img
      v-if="icon"
      :src="icon"
      alt="Icon"
      class="me-2"
      style="width: 20px; height: 20px"
    />
    <span>{{ label }}</span>
  </NuxtLink>
</template>

<script setup>
defineProps({
  to: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: null,
  },
  backgroundColor: {
    type: String,
    default: '#042C89', // por defecto Navy Blue
  },
  textColor: {
    type: String,
    default: '#ffffff',
  },
  width: {
    type: String,
    default: '100%', // por defecto 100% para móvil
  },
})
</script>

<style scoped>
.rounded-button {
  padding: 16px 24px;
  border-radius: 50px;
  gap: 10px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.rounded-button:hover {
  opacity: 0.9;
}

span {
    font-family: Recline;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 28px */
    letter-spacing: 0.2px;
    /* text-transform: uppercase; */
}
</style>

<script>
export default {
  computed: {
    buttonStyle() {
      return {
        backgroundColor: this.backgroundColor,
        color: this.textColor,
        width: this.width,
      }
    },
  },
}
</script>
