<template>
  <tr class="align-middle">
    <!-- <th scope="row">
      <input class="form-check-input" type="checkbox" value="" id="tomjones">
    </th> -->
    <td>
      <input class="form-check-input" type="checkbox" value="" id="tomjones" />
    </td>
    <td scope="row" @click="navigateToUser(1)">Tom Jones</td>
    <!-- <td><label class="form-check-label text-muted" for="tomjones">
        Tom Jones
      </label></td> -->
    <td @click="navigateToUser(1)">10</td>
    <td @click="navigateToUser(1)">Acton</td>
    <td @click="navigateToUser(1)">Sat 1st Nov 22</td>
    <td @click="navigateToUser(1)">Gold</td>
    <td @click="navigateToUser(1)">£350.00</td>
    <td @click="navigateToUser(1)">Referral</td>
    <td @click="navigateToUser(1)">Alex Smith</td>
    <td>
      <span class="badge bg-warning-subtle text-warning px-1"> Pending </span>
      <button class="btn btn-light btn-sm" @click="show = !show">
        <Icon name="mdi:chevron-down" />
      </button>
    </td>
    <!-- Active, Waiting List, Frozen, Cancelled -->
  </tr>
</template>
<script>
// Use for model
const router = useRouter()
export default {
  methods: {
    async navigateToUser(id) {
      await router.push({ path: `/synco/one-to-one/edit/one-to-one/${id}` })
    },
  },
}
</script>
