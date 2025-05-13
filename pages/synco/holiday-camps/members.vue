<template>
  <NuxtLayout name="syncolayout" page-title="Holiday Camp Students">
    <div class="row">
      <div class="col">
        <SyncoHolidayCampsFormsFindMember />
      </div>
      <div class="col-sm-8">
        <div class="row row-cols-sm-4">
          <SyncoDashboardMetricsItem
            name="Total Students"
            value="30"
            change=""
            icon="ph:users-three"
          />
          <SyncoDashboardMetricsItem
            name="Revenue"
            value="£945.00"
            change="+12"
            icon="ph:users-three"
          />
          <SyncoDashboardMetricsItem
            name="Average Price"
            value="£105.00"
            change="+100"
            icon="ph:users-three"
          />
          <SyncoDashboardMetricsItem
            name="Top Source"
            value="Existing Member"
            change=""
            icon="ph:users-three"
          />
        </div>
        <div class="d-flex justify-content-between pb-3 pt-4">
          <div class="d-flex align-items-center">
            <h4 class="col-auto mb-0 me-3">Student Info</h4>
            <div class="input-group">
              <span id="search-addon" class="input-group-text">
                <Icon name="ic:baseline-search" />
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="Search student"
                aria-label="Search student"
                aria-describedby="search-addon"
              />
            </div>
          </div>
          <div>
            <button class="btn btn-transparent">
              <Icon name="octicon:settings" class="h3 me-2" />
            </button>
          </div>
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
                  Name
                  <!-- <label class="form-check-label text-muted" for="all-table">
                    Date
                  </label> -->
                </th>
                <th class="text-muted" scope="col">Age</th>
                <th class="text-muted" scope="col">Medical Information</th>
                <th class="text-muted" scope="col">Price Paid</th>
                <th class="text-muted" scope="col">Source</th>
                <th class="text-muted" scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <LazySyncoHolidayCampsMembersTableItem />
              <LazySyncoHolidayCampsMembersTableItem />
              <LazySyncoHolidayCampsMembersTableItem />
            </tbody>
          </table>
        </div>
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
