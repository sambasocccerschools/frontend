<script>
// Use for model
const router = useRouter()
export default {
  props: [
    'status', // waiting , active, frozen, cancelled
  ],
  methods: {
    async navigateToUser(id) {
      await router.push({ path: `/synco/user/${id}` })
    },
  },
}
</script>

<template>
  <!-- Need to see how to turn this into a link -->
  <tr class="align-middle">
    <td>
      <input class="form-check-input" type="checkbox" value="" id="tomjones" />
    </td>
    <th scope="row" @click="navigateToUser(1)" style="cursor: pointer">
      <label class="form-check-label text-muted" for="tomjones">
        Tom Jones
      </label>
    </th>
    <td @click="navigateToUser(1)" style="cursor: pointer">7</td>
    <td @click="navigateToUser(1)" style="cursor: pointer">Acton</td>
    <td @click="navigateToUser(1)" style="cursor: pointer">Sat 1st Nov 22</td>
    <td @click="navigateToUser(1)" style="cursor: pointer">Jaffar Bukari</td>
    <td @click="navigateToUser(1)" style="cursor: pointer">
      12 months, 47.99 per months
    </td>
    <td @click="navigateToUser(1)" style="cursor: pointer">6 months</td>
    <td @click="navigateToUser(1)" style="cursor: pointer">
      <span
        v-if="status === 'waiting'"
        class="badge bg-light-subtle text-dark px-1"
      >
        Waiting list
      </span>
      <span v-else class="badge bg-success-subtle text-success px-1">
        Active
      </span>
    </td>
    <!-- Active, Waiting List, Frozen, Cancelled -->
  </tr>
</template>
