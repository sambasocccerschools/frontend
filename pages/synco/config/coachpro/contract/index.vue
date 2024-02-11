<script>
const router = useRouter()

export default {
  data: () => ({
    contracts: [
      { id: 1, name: 'Head Coach Contract', fileUrl: '' },
      { id: 2, name: 'Lead Coach Contract', fileUrl: '' },
      { id: 3, name: 'Support Coach Contract', fileUrl: '' },
      { id: 4, name: 'Regional Manager Contract', fileUrl: '' },
    ],
  }),
  methods: {
    goTo(id) {
      router.push({ path: `/synco/config/coachpro/contract/${id}` })
    },
  },
}
</script>

<template>
  <NuxtLayout name="syncolayout">
    <h4>Coaching Contracts</h4>
    <div class="card">
      <div
        class="card-header d-flex align-items-center justify-content-between border-bottom border-light"
      >
        <h5 class="card-title">Contract List</h5>
        <span class="d-flex flex-column">
          <NuxtLink
            to="/synco/config/coachpro/contract/123"
            class="btn btn-primary text-light"
            >+ Add Template
          </NuxtLink>
          <span class="text-danger">Editable Docs within Synco ?</span>
        </span>
      </div>
      <ul class="list-unstyled">
        <li
          v-for="contract in contracts"
          class="border-top border-light d-flex align-items-center justify-content-between p-3"
        >
          <span>{{ contract.name }}</span>
          <span>
            <button class="btn btn-transparent btn-sm">
              <Icon name="ph:download-simple-bold" />
            </button>
            <button
              class="btn btn-transparent btn-sm"
              @click="goTo(contract.id)"
            >
              <Icon name="ph:pencil-simple-line-light" />
            </button>
            <button class="btn btn-transparent btn-sm">
              <Icon name="ph:trash-thin" />
            </button>
          </span>
        </li>
      </ul>
    </div>
  </NuxtLayout>
</template>
