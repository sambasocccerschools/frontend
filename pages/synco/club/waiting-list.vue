<script>
export default {
  data: () => ({
    // Will be replaced by array
    waiting: 8,
  }),
}
</script>

<template>
  <NuxtLayout name="syncolayout" page-title="Club Waiting List">
    <div class="row">
      <div class="col-sm-8">
        <div class="row row-cols-sm-4">
          <SyncoDashboardMetricsItem
            name="Total on wait list"
            value="457"
            change="+12"
            icon="ph:users-three"
          />
          <SyncoDashboardMetricsItem
            name="Average time on list"
            value="2 months"
            change="+12"
            icon="ph:users-three"
          />
          <SyncoDashboardMetricsItem
            name="Level of interest"
            value="review new type of"
            change=""
            icon="ph:users-three"
          />
          <SyncoDashboardMetricsItem
            name="Most demanded team"
            value="4-7 Years Acton"
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
                <th class="text-muted" scope="col">Venue</th>
                <th class="text-muted" scope="col">Date of booking</th>
                <th class="text-muted" scope="col">Who booked?</th>
                <th class="text-muted" scope="col">Position</th>
                <th class="text-muted" scope="col">Level of interest</th>
              </tr>
            </thead>
            <tbody>
              <SyncoClubWaitingTableItem v-for="item in waiting" />
            </tbody>
          </table>
        </div>
      </div>
      <div class="col">
        <SyncoClubFormsFindWaiting />
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