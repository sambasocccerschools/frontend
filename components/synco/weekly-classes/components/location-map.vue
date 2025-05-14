<template>
  <div :id="`map-${uniqueId}`" class="map-container"></div>
</template>

<script setup lang="ts">
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { onMounted, onUnmounted, ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'

const props = defineProps({
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
})

const uniqueId = uuidv4()
const map = ref<L.Map | null>(null)

// onMounted(() => {
//   const mapElementId = `map-${uniqueId}`
//   const mapElement = document.getElementById(mapElementId)

//   if (!mapElement) {
//     console.error(
//       `El contenedor del mapa con ID ${mapElementId} no se encuentra`,
//     )
//     return
//   }

//   map.value = L.map(mapElementId).setView([props.latitude, props.longitude], 13)

//   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution:
//       '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//   }).addTo(map.value as L.Map)

//   L.marker([props.latitude, props.longitude]).addTo(map.value as L.Map)
// })

onMounted(() => {
  const mapElementId = `map-${uniqueId}`
  const mapElement = document.getElementById(mapElementId)

  if (!mapElement) {
    console.error(
      `El contenedor del mapa con ID ${mapElementId} no se encuentra`,
    )
    return
  }

  map.value = L.map(mapElementId).setView([props.latitude, props.longitude], 13)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map.value as L.Map)

  L.marker([props.latitude, props.longitude]).addTo(map.value as L.Map)

  // Redibuja el mapa
  setTimeout(() => {
    map.value?.invalidateSize()
  }, 200)
})

onUnmounted(() => {
  if (map.value) {
    map.value.remove()
  }
})
</script>

<style scoped>
.map-container {
  height: 400px;
  width: 100%;
  border-radius: 8px;
}
</style>
