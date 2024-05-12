<script>
export default {
  data: () => ({
    abilityGroups: [
      { name: 'Beginners', ages: '4-5 years' },
      { name: 'Intermediate', ages: '6-7 years' },
      { name: 'Advanced', ages: '8-9 years' },
      { name: 'Pro', ages: '10-12 years' },
    ],
    sessions: 7,
  }),
}
</script>

<template>
  <NuxtLayout name="syncolayout">
    <h4 class="mb-4">Create Session Plans</h4>
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
          </ul>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <span class="h3 my-3">
                <strong>BEGINNER SESSION PLANS</strong>
              </span>
              <div v-for="session in sessions" class="col-auto my-2" @click="">
                <NuxtLink
                  class=""
                  to="/synco/config/weekly-classes/session-plans/edit"
                >
                  <div class="card plan-item border">
                    <div
                      class="card-body d-flex align-items-center flex-column justify-content-center"
                    >
                      <Icon name="ph:pencil-simple-line" />
                      <span>BCPELE</span>
                    </div>
                  </div>
                </NuxtLink>
              </div>
              <div class="col-auto my-2">
                <NuxtLink
                  class=""
                  to="/synco/config/weekly-classes/session-plans/create"
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
