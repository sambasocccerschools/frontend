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
        id: 'BCPELE124',
        title: 'BCPELE',
        player: '',
        exercise: {
          title: '',
          duration: '',
          description: '',
          img: ''
        }
      }
    ]
  }),
  methods: {
    goTo(id) {
      console.log(id)
      router.push({ path: `/synco/config/holiday-camps/session-plans/${id}` });
    }
  }
}
</script>



<template>
  <NuxtLayout name="syncolayout">
    <div class="d-flex align-items-center  mb-4 ">
      <h4 class="me-5">Create Session Plans</h4>
      <button class="btn text-light btn-sm btn-primary me-3">4 Days</button>
      <button class="btn btn-sm btn-light border">5 Days</button>
      <span class="text-danger">Where do you set these options?, you can filter by list AND days ?</span>
    </div>

    <div class="row">
      <div class="col-sm-3">
        <div class="card">
          <div class="card-header ">
            <h4 class="card-title mt-3">Lists</h4>
          </div>
          <ul class="list-group">
            <li v-for="group in abilityGroups"
              class="list-group-item list-group-item-action border-top  border py-3 d-flex w-100 rounded-0 border-bottom-0 border-end-0 border-start-0">
              <span class="w-100 d-flex">
                <img src="@/src/assets/img-avatar-ability-group.png" />
                <span class="d-flex flex-column ms-3">
                  <strong>{{ group.name }}</strong>
                  <span class="text-muted">{{ group.ages }}</span>
                </span>

              </span>
            </li>
            <li class="list-group-item border-0 py-4">
              <button class="btn btn-primary btn-sm text-light">Add ability group</button> <span class="text-danger">What
                happens when you click here ?</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div class="card-body">
            <div class="row row-cols-6">
              <div v-for="session in sessions" class="col">
                <div class="card border" @click="goTo(session.id)">
                  <div class="card-body d-flex align-items-center flex-column">
                    <Icon name="ph:pencil-simple-line" />
                    <span>{{ session.title }} </span>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card border">
                  <div class="card-body d-flex align-items-center flex-column">
                    <Icon name="ph:pencil-simple-line" />
                    <span>Day 2</span>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card border">
                  <div class="card-body d-flex align-items-center flex-column">
                    <Icon name="ph:pencil-simple-line" />
                    <span>Day 3</span>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card border">
                  <div class="card-body d-flex align-items-center flex-column">
                    <Icon name="ph:pencil-simple-line" />
                    <span>Day 4</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

