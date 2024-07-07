<script>
// Use for model
const router = useRouter()
export default {
  props: [
    'status', // waiting , active, frozen, cancelled
  ],
  data: () => ({
    show: false,
  }),
  methods: {
    async navigateToUser(id) {
      await router.push({ path: `/synco/weekly-classes/edit/lead/${id}` })
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
      01-06-2023
    </th>
    <td @click="navigateToUser(1)" style="cursor: pointer">
      <label class="form-check-label text-muted" for="tomjones">
        Steve Jones
      </label>
    </td>
    <td @click="navigateToUser(1)" style="cursor: pointer">
      tom.jones@gmail.com
    </td>
    <td @click="navigateToUser(1)" style="cursor: pointer">123456789</td>
    <td @click="navigateToUser(1)" style="cursor: pointer">ER 7YJ</td>
    <td @click="navigateToUser(1)" style="cursor: pointer">4 to 7</td>
    <td @click="navigateToUser(1)" style="cursor: pointer">Jaffar King</td>
    <td style="cursor: pointer">
      <span class="badge bg-warning-subtle text-warning px-1">
        Call Pending
      </span>
      <button class="btn btn-light btn-sm" @click="show = !show">
        <Icon name="mdi:chevron-down" />
      </button>
    </td>
    <!-- Active, Waiting List, Frozen, Cancelled -->
  </tr>
  <!-- <tr v-if="show">
    <td colspan="8">
      <SyncoBookingListItem activity="weekly-class" />
      <SyncoBookingListItem activity="weekly-class" />
      <div class="d-flex justify-content-center">
        <button class="btn btn-light border">Show All</button>
      </div>
    </td>
  </tr> -->
</template>
