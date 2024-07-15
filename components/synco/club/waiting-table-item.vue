<template>
  <tr class="align-middle">
    <!-- <th scope="row">
      <input class="form-check-input" type="checkbox" value="" id="tomjones">
    </th> -->
    <td>
      <input class="form-check-input" type="checkbox" value="" id="tomjones" />
    </td>
    <th scope="row">Steve Jones</th>
    <!-- <td><label class="form-check-label text-muted" for="tomjones">
        Tom Jones
      </label></td> -->
    <td>15</td>
    <td>Acton</td>
    <td>Sat 1st Nov 22</td>
    <td>Jaffar Bukari</td>
    <td>1</td>
    <td>High</td>
  </tr>
</template>

<script>
// Use for model
const router = useRouter()
export default {
  methods: {
    async navigateToUser(id) {
      await router.push({ path: `/synco/club/edit/waiting-list/${id}` })
    },
  },
}
</script>
