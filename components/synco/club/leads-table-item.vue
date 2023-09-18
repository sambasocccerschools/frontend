<script>
export default {
  data: () => ({
    show: false,
    nearbyClubs: 2
  })
}

</script>
<template>
  <!-- Need to see how to turn this into a link -->
  <tr class="align-middle">
    <th scope="row">
      01-06-2023
    </th>
    <td>
      <label class="form-check-label text-muted" for="tomjones">
        Steve Jones
      </label>
    </td>
    <td>Andy Jones</td>
    <td>123456789</td>
    <td>12</td>
    <td>W14 9EB</td>
    <td>Jaffar King</td>
    <td>
      <span class="badge bg-warning-subtle px-1 text-warning">
        Call Pending
      </span>
      <button class="btn btn-light btn-sm" @click="show = !show">
        <Icon name="mdi:chevron-down" />
      </button>
    </td>
    <!-- Active, Waiting List, Frozen, Cancelled -->
  </tr>
  <tr v-if="show">
    <td colspan="8">
      <!-- These should depend on ?  -->
      <SyncoClubListItem v-for="clubs in nearbyClubs" />
      <div class="d-flex justify-content-center">
        <button class="btn btn-light border">Show All</button>
      </div>
    </td>
  </tr>
</template>