<script>
const router = useRouter()

export default {
  data: () => ({
    abilityGroups: [
      { name: 'Beginners', ages: '4-6 years' },
      { name: 'Intermediate', ages: '7-9 years' },
      { name: 'Advanced', ages: '10-12 years' },
    ],
    sessions: [
      {
        id: 'BCPELE1',
        title: 'Day 1',
        player: '',
        exercise: {
          title: '',
          duration: '',
          description: '',
          img: '',
        },
      },
      {
        id: 'BCPELE2',
        title: 'Day 2',
        player: '',
        exercise: {
          title: '',
          duration: '',
          description: '',
          img: '',
        },
      },
      {
        id: 'BCPELE3',
        title: 'Day 3',
        player: '',
        exercise: {
          title: '',
          duration: '',
          description: '',
          img: '',
        },
      },
      {
        id: 'BCPELE4',
        title: 'Day 4',
        player: '',
        exercise: {
          title: '',
          duration: '',
          description: '',
          img: '',
        },
      },
    ],
  }),
  methods: {
    goTo(id) {
      console.log(id)
      router.push({ path: `/synco/config/holiday-camps/session-plans/${id}` })
    },
  },
}
</script>

<template>
  <NuxtLayout name="syncolayout">
    <div class="d-flex align-items-center mb-4">
      <h4 class="me-5">Create Session Plans</h4>
      <button class="btn text-light btn-sm btn-primary me-3">4 Days</button>
      <button class="btn btn-sm btn-light border">5 Days</button>
      <span class="text-danger"
        >Where do you set these options?, you can filter by list AND days
        ?</span
      >
    </div>

    <div class="row">
      <div class="col-sm-3">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title mt-3">Lists</h4>
          </div>
          <ul class="list-group">
            <li
              v-for="group in abilityGroups"
              class="list-group-item list-group-item-action border-top d-flex w-100 rounded-0 border-bottom-0 border-end-0 border-start-0 border py-3"
            >
              <span class="w-100 d-flex">
                <img src="@/src/assets/img-avatar-ability-group.png" />
                <span class="d-flex flex-column ms-3">
                  <strong>{{ group.name }}</strong>
                  <span class="text-muted">{{ group.ages }}</span>
                </span>
              </span>
            </li>
            <li class="list-group-item border-0 py-4">
              <button class="btn btn-primary btn-sm text-light">
                Add ability group
              </button>
              <span class="text-danger"
                >What happens when you click here ?</span
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div class="card-body">
            <div class="row row-cols-6">
              <div v-for="session in sessions" class="col-auto my-2" @click="">
                <NuxtLink
                  class=""
                  :to="`/synco/config/holiday-camps/session-plans/${session.id}`"
                >
                  <div class="card plan-item border">
                    <div
                      class="card-body d-flex align-items-center flex-column justify-content-center"
                    >
                      <Icon name="ph:pencil-simple-line" />
                      <span>{{ session.title }}</span>
                    </div>
                  </div>
                </NuxtLink>
              </div>
              <div class="col-auto my-2">
                <NuxtLink
                  class=""
                  to="/synco/config/holiday-camps/session-plans/create"
                >
                  <div class="card plan-item border-dashed">
                    <div
                      class="card-body d-flex align-items-center justify-content-center flex-column"
                    >
                      <strong><Icon name="ph:plus" /></strong>
                      <span class="text-center">
                        Add new Beginner Session Plan
                      </span>
                    </div>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped>
.text-sm {
  font-size: 0.6rem;
}
.plan-item {
  width: 168px;
  height: 100px;
}
.border-dashed {
  border: 1px dashed var(--bs-border-color) !important;
}
</style>
