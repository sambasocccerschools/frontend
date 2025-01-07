<template>
  <!-- Filter By Date  -->
  <div
    class="dropdown-menu dropdown-menu-right card rounded-4 position-absolute shadow-lg"
    style="width: 489px; right: -10px; top: 45px; position: absolute"
  >
    <div class="card-header d-flex justify-content-between">
      <h5 class="card-title"><strong>Term Dates</strong></h5>
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
          v-for="(term, index) in Object.values(terms[0]).filter(
            (term) => term && term.name,
          )"
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

type Term = {
  name: string
  start_date: string
  end_date: string
  half_term_date: string
}

const props = defineProps<{
  item: Record<
    'autumn_term' | 'spring_term' | 'summer_term' | 'winter_term',
    Term
  >
}>()

interface TermObj {
  [season: string]: Term
}

interface YearObj {
  terms: TermObj[]
}

const transformTerms = (itemTerms: any): Record<string, Term> => {
  return itemTerms.terms.reduce(
    (acc: Record<string, Term>, yearObj: YearObj) => {
      yearObj.terms.forEach((term) => {
        Object.entries(term).forEach(([season, value]) => {
          if (value) {
            acc[`${season}_term`] = {
              name: value.name,
              start_date: value.start_date,
              end_date: value.end_date,
              half_term_date: value.half_term_date,
            }
          }
        })
      })
      return acc
    },
    {} as Record<string, Term>,
  )
}

const terms = [transformTerms(props.item)]
</script>
