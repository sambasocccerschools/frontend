<template>
  <h5 class="term-title">{{ term.name }}</h5>

  <div class="description-container">
    <p class="description">
      {{ formatCustomDate(term.start_date, term.end_date) }}
    </p>
    <p class="description">Half term Exclusion: {{ term.half_term_date }}</p>
  </div>
</template>
<script setup lang="ts">
import { format, parseISO } from 'date-fns'

const addOrdinalSuffix = (day: number): string => {
  const suffix = ['th', 'st', 'nd', 'rd']
  const value = day % 100
  return `${day}${suffix[(value - 20) % 10] || suffix[value] || suffix[0]}`
}

// Función para formatear la fecha en el formato requerido
const formatCustomDate = (startDate: string, endDate: string): string => {
  const start = parseISO(startDate)
  const end = parseISO(endDate)

  const formattedStart = `${format(start, 'EEE')} ${addOrdinalSuffix(
    parseInt(format(start, 'd')),
  )} ${format(start, 'MMM yyyy')}`

  const formattedEnd = `${format(end, 'EEE')} ${addOrdinalSuffix(
    parseInt(format(end, 'd')),
  )} ${format(end, 'MMM yyyy')}`

  return `${formattedStart} - ${formattedEnd}`
}

const props = defineProps<{
  term: {
    name: string
    start_date: string
    end_date: string
    half_term_date: string
  }
}>()

const term = ref(props.term).value
</script>
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Gilroy');
.font-custom {
  font-family: 'Luckiest Guy', cursive;
  font-weight: 400;
  font-style: normal;
}
.term-title {
  color: #1f1c1e;
  font-size: 20px;
  font-weight: 600;
  line-height: 23px;
}
.description-container {
  text-align: center;
  margin-bottom: 20px;
}
.description {
  color: #717073;
  font-size: 18px;
  line-height: 21px;
  font-weight: 500;
  font-family: 'Gilroy', sans-serif;
  font-weight: 400;
  margin: 0 0 5px;
}
</style>
