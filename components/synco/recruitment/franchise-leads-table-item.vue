<script>
// Use for model
const router = useRouter()
export default {
  props: [
    'status', // waiting , active, frozen, cancelled
  ],
  methods: {
    async navigateToUser(id) {
      await router.push({
        path: `/synco/recruitment/edit/franchise-lead/${id}`,
      })
    },
  },
}
</script>
<template>
  <tr class="align-middle">
    <td>
      <input class="form-check-input" type="checkbox" value="" id="tomjones" />
    </td>
    <th scope="row" @click="navigateToUser(1)" style="cursor: pointer">
      Tom Jones
    </th>
    <!-- <td><label class="form-check-label text-muted" for="tomjones">
        Tom Jones
      </label></td> -->
    <td @click="navigateToUser(1)" style="cursor: pointer">25</td>
    <td @click="navigateToUser(1)" style="cursor: pointer">Chelsea</td>
    <td @click="navigateToUser(1)" style="cursor: pointer">12344567</td>
    <td @click="navigateToUser(1)" style="cursor: pointer">
      tom.john@gmail.com
    </td>
    <td @click="navigateToUser(1)" style="cursor: pointer">2 years</td>
    <td @click="navigateToUser(1)" style="cursor: pointer">£123,123</td>
    <td @click="navigateToUser(1)" style="cursor: pointer">
      <span class="badge bg-warning-subtle text-warning px-1"> Pending </span>
    </td>
    <!-- pending , Rejected, recruited-->
  </tr>
</template>
