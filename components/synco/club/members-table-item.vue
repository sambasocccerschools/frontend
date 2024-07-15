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
    <td>Camden YL U8's</td>
    <td>Sat 1st Nov 22</td>
    <td>£47.99 per month</td>
    <td>12 months</td>
    <td>Jaffar Bukari</td>
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
      await router.push({ path: `/synco/club/edit/membership/${id}` })
    },
  },
}
</script>
