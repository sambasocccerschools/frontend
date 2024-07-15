<template>
  <tr class="align-middle">
    <!-- <th scope="row">
      <input class="form-check-input" type="checkbox" value="" id="tomjones">
    </th> -->
    <td>
      <input class="form-check-input" type="checkbox" value="" id="tomjones" />
    </td>
    <th scope="row" @click="navigateToUser(1)">Tom Jones</th>
    <!-- <td><label class="form-check-label text-muted" for="tomjones">
        Tom Jones
      </label></td> -->
    <td @click="navigateToUser(1)">Steve Jones</td>
    <td @click="navigateToUser(1)">10</td>
    <td @click="navigateToUser(1)">W14 9EB</td>
    <td @click="navigateToUser(1)">Gold</td>
    <td @click="navigateToUser(1)">Referral</td>
    <td @click="navigateToUser(1)">10th Oct 2023</td>
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
      await router.push({ path: `/synco/birthday-parties/edit/lead/${id}` })
    },
  },
}
</script>
