<script>
// Use for model 
export default {
  props: [
    'status' // waiting , active, frozen, cancelled
  ],
}
</script>

<template>
  <!-- Need to see how to turn this into a link -->
  <tr class="align-middle">
    <th scope="row">
      <label class="form-check-label text-muted" for="tomjones">
        Tom Jones
      </label>
    </th>
    <td>7</td>
    <td>Acton</td>
    <td>Sat 1st Nov 22</td>
    <td>Jaffar Bukari</td>
    <td>12 months, 47.99 per months</td>
    <td>6 months</td>
    <td>
      <span v-if="status === 'waiting'" class="badge bg-light-subtle px-1 text-dark">
        Waiting list
      </span>
      <span v-else class="badge bg-success-subtle px-1 text-success">
        Active
      </span>
    </td>
    <!-- Active, Waiting List, Frozen, Cancelled -->
  </tr>
</template>