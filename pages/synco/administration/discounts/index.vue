<script>
const router = useRouter()
export default {
  data: () => ({
    // These will get replaces by arrays
    discounts: [
      {
        id: 1,
        title: 'SAMBA10',
        amount: '15%',
        activity: 'Holiday Camps',
        method: 'CODE',
        type: 'Amount of products',
        used: 15,
        status: 'ACTIVE', // ACTIVE, PAUSED
      },
    ],
  }),
  methods: {
    async navigateToUser(id) {
      await router.push({ path: `/synco/administration/discounts/edit/${id}` })
    },
  },
}
</script>

<template>
  <NuxtLayout name="syncolayout">
    <div class="card mb-4" style="background-color: #38c87a">
      <div class="card-body p-4">
        <span class="h3 text-light">
          <Icon name="solar:bill-list-bold" class="mb-1 me-2" /> Discounts
        </span>
      </div>
    </div>

    <!-- Coaching Roles Tab-->
    <div class="row">
      <div class="col">
        <div class="d-flex justify-content-between pb-3 pt-4">
          <h4>Discounts table</h4>
          <div>
            <NuxtLink
              to="./discounts/create"
              class="btn btn-primary text-light ms-2 shadow-sm"
              >+ Add new discount
            </NuxtLink>
          </div>
        </div>

        <table class="table-hover rounded-4 table border">
          <thead class="rounded-top-4">
            <tr class="table-light">
              <th scope="col">
                <input class="form-check-input" type="checkbox" disabled />
              </th>
              <th scope="col" class="text-muted">Title</th>
              <th class="text-muted" scope="col">Type</th>
              <th class="text-muted" scope="col">Used</th>
              <th class="text-muted" scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="discount in discounts" class="align-middle">
              <td>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="tomjones"
                />
              </td>
              <th scope="row" @click="navigateToUser(1)">
                {{ discount.title }} <br />
                <small class="text-muted"
                  >{{ discount.amount }} in {{ discount.activity }}</small
                >
              </th>
              <td @click="navigateToUser(1)">{{ discount.type }}</td>
              <td @click="navigateToUser(1)">{{ discount.used }}</td>
              <td>
                <span class="badge bg-success-subtle text-success">{{
                  discount.status
                }}</span>
                <button class="btn btn-light btn-sm" @click="show = !show">
                  <Icon name="mdi:chevron-down" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </NuxtLayout>
</template>
