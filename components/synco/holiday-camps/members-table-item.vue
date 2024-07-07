<template>
  <tr class="align-middle">
    <!-- <th scope="row">
      <input class="form-check-input" type="checkbox" value="" id="tomjones">
    </th> -->
    <td>
      <input class="form-check-input" type="checkbox" value="" id="tomjones" />
    </td>
    <th scope="row">Tom Jones</th>
    <!-- <td><label class="form-check-label text-muted" for="tomjones">
        Tom Jones
      </label></td> -->
    <td>7</td>
    <td>N/A</td>
    <td>£100</td>
    <td>Existing Customer</td>
    <td>
      <span class="badge bg-success-subtle text-success px-1"> Active </span>
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
      await router.push({ path: `/synco/holiday-camps/edit/lead/${id}` })
    },
  },
}
</script>
