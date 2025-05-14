<script>
export default {
  data: () => ({
    // These will get replaces by arrays
    members: 10,
  }),
}
</script>

<template>
  <NuxtLayout name="syncolayout" page-title="Members">
    <div class="row">
      <div class="col-sm-8">
        <div class="row row-cols-sm-4">
          <SyncoDashboardMetricsItem
            name="Total Students"
            value="3021"
            change="+12"
            icon="ph:users-three"
          />
          <SyncoDashboardMetricsItem
            name="Monthly Revenue"
            value="£75,000"
            change="+12"
            icon="ph:users-three"
          />
          <SyncoDashboardMetricsItem
            name="Av. Monthly Fee"
            value="£35.00"
            change="+100"
            icon="ph:users-three"
          />
          <SyncoDashboardMetricsItem
            name="Av. Life Cycle"
            value="18 months"
            change="+12"
            icon="ph:users-three"
          />
        </div>

        <div>
          <SyncoDataOptions />
        </div>
        <div class="table-responsive">
          <table
            class="table-bordered table-sm w-100 rounded-4 table shadow-sm"
          >
            <thead class="rounded-top-4">
              <tr class="table-light">
                <!-- <th scope="col">Checkbox</th> -->
                <th scope="col">
                  <input class="form-check-input" type="checkbox" disabled />
                </th>
                <th scope="col" class="text-muted">
                  <label class="form-check-label text-muted" for="all-table">
                    Name
                  </label>
                </th>
                <th class="text-muted" scope="col">Age</th>
                <th class="text-muted" scope="col">Team</th>
                <th class="text-muted" scope="col">Date of booking</th>
                <th class="text-muted" scope="col">Monthly Fee</th>
                <th class="text-muted" scope="col">Lifecycle of membership</th>
                <th class="text-muted" scope="col">Who booked?</th>
                <th class="text-muted" scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <LazySyncoClubMembersTableItem v-for="member in members" />
            </tbody>
          </table>
        </div>
      </div>
      <div class="col">
        <SyncoClubFormsFindMember />
      </div>
    </div>
  </NuxtLayout>
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
