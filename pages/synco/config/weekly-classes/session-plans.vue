<script>
export default {
  data: () => ({
    abilityGroups: [
      { name: 'Beginners', ages: '4-5 years' },
      { name: 'Intermediate', ages: '6-7 years' },
      { name: 'Advanced', ages: '8-9 years' },
      { name: 'Pro', ages: '10-12 years' },
    ],
    sessions: 4,
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
            <div class="row row-cols-6">
              <div v-for="session in sessions" class="col">
                <div class="card border">
                  <div class="card-body d-flex align-items-center flex-column">
                    <Icon name="ph:pencil-simple-line" />
                    <span>BCPELE</span>
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
