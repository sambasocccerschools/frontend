<script>
const router = useRouter()
export default {
  data: () => ({
    show: false,
    nearbyClubs: 2,
  }),
  methods: {
    async navigateToUser(id) {
      await router.push({ path: `/synco/club/edit/lead/${id}` })
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
    <th scope="row" @click="navigateToUser(1)">01-06-2023</th>
    <td @click="navigateToUser(1)">
      <label class="form-check-label text-muted" for="tomjones">
        Steve Jones
      </label>
    </td>
    <td @click="navigateToUser(1)">Andy Jones</td>
    <td @click="navigateToUser(1)">123456789</td>
    <td @click="navigateToUser(1)">12</td>
    <td @click="navigateToUser(1)">W14 9EB</td>
    <td @click="navigateToUser(1)">Jaffar King</td>
    <td>
      <span class="badge bg-warning-subtle text-warning px-1">
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

<style scoped>
.table {
  border: 1px solid #e2e1e5;
  border-radius: 12px;
  overflow: hidden; /* para que las esquinas redondeadas se vean */
}

.table th,
.table td {
  vertical-align: middle;
  border: none; /* importante: elimina las líneas internas */
  font-size: 14px;
  padding: 0.75rem;
}

.table thead th {
  background-color: #f4f4f4; /* gris claro */
  color: #6b7280; /* gris opaco, como tailwind's text-gray-500 */
  font-weight: 600;
  font-size: 14px;
  border-bottom: 1px solid #dee2e6;
}

.table thead th:first-child {
  border-top-left-radius: 12px;
}
.table thead th:last-child {
  border-top-right-radius: 12px;
}

.table tbody tr:last-child td:first-child {
  border-bottom-left-radius: 12px;
}
.table tbody tr:last-child td:last-child {
  border-bottom-right-radius: 12px;
}

.table .btn-link {
  font-size: 22px;
  color: #717073;
}

.table .btn-link:hover {
  color: #252526;
}
</style>
