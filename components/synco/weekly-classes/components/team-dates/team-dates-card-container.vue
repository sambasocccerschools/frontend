<template>
  <!-- Filter By Date  -->
  <div
    class="dropdown-menu dropdown-menu-right card rounded-4 position-absolute shadow-lg"
    style="width: 489px; right: -10px; top: 45px; position: absolute"
  >
    <div class="card-header d-flex justify-content-between">
      <h5 class="card-title"><strong>Team Dates</strong></h5>
      <button
        class="btn btn-transparent p-0"
        @click="emit('toggleTeamDatesCard')"
      >
        <Icon name="ph:x" class="me-2" />
      </button>
    </div>
    <div class="px-3">
      <hr />
    </div>
    <div class="card-body">
      <div class="d-flex align-items-center flex-column">
        <SyncoWeeklyClassesComponentsTeamDatesCard
          v-for="(term, index) in terms"
          :key="index"
          :term="term"
        />
      </div>

      <SyncoFilterByCalendar />
    </div>
  </div>
</template>
<script setup lang="ts">
const emit = defineEmits(['toggleTeamDatesCard'])

const props = defineProps<{
  item: {
    autumn_term: {
      name: string
      start_date: string
      end_date: string
      half_term_date: string
    }
    spring_term: {
      name: string
      start_date: string
      end_date: string
      half_term_date: string
    }
    summer_term: {
      name: string
      start_date: string
      end_date: string
      half_term_date: string
    }
  }
}>()

const terms = [
  props.item.autumn_term,
  props.item.spring_term,
  props.item.summer_term,
]
</script>
