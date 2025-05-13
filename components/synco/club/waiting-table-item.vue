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
