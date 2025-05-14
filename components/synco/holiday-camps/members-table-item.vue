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
<style scoped>
th,
td {
  vertical-align: middle;
  border: none;
  font-size: 14px;
  padding: 0.75rem;
}

tr {
  background-color: #ffffff;
  border-radius: 12px;
  margin-bottom: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

thead th {
  background-color: #f4f4f4;
  color: #6b7280;
  font-weight: 600;
  font-size: 14px;
  border-bottom: 1px solid #dee2e6;
}

thead th:first-child {
  border-top-left-radius: 12px;
}
thead th:last-child {
  border-top-right-radius: 12px;
}

tbody tr:last-child td:first-child {
  border-bottom-left-radius: 12px;
}
tbody tr:last-child td:last-child {
  border-bottom-right-radius: 12px;
}
</style>
