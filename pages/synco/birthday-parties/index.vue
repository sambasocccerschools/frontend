<script>
export default {
  data: () => ({
    tab: 1, // 1 leads 2 sales 3 all,
    // These will get replaces by arrays
    leads: 10,
    sales: 10,
  }),
}
</script>

<template>
  <NuxtLayout name="syncolayout" page-title="One to One">
    <div class="card mb-4" style="background-color: #fbd266">
      <div class="card-body p-4">
        <span class="h3">
          <Icon name="icon-park-solid:birthday-cake" class="mb-1 me-2" />
          Birthday Party
        </span>
      </div>
    </div>

    <ul class="nav nav-pills mb-4">
      <li class="nav-item rounded-3 me-2">
        <button
          class="nav-link"
          :class="tab === 1 ? 'active' : 'text-dark border'"
          @click="tab = 1"
        >
          Leads
        </button>
      </li>
      <li class="nav-item rounded-3 me-2 border">
        <button
          class="nav-link"
          :class="tab === 2 ? 'active' : 'text-dark border'"
          @click="tab = 2"
        >
          Sales
        </button>
      </li>
      <!-- <li class="nav-item border rounded-3 ">
        <button class="nav-link" :class="tab === 3 ? 'active' : 'text-dark'" @click="tab = 3">All</button>
      </li> -->
    </ul>

    <!-- Leads Tab-->
    <div v-if="tab === 1" class="row">
      <div class="col-sm-8">
        <div class="row row-cols-sm-4">
          <SyncoDashboardMetricsItem
            name="Total Leads"
            value="945"
            change="+12"
            icon="ph:users-three"
          />
          <SyncoDashboardMetricsItem
            name="New Leads"
            value="945"
            change="+12"
            icon="ph:users-three"
          />
          <SyncoDashboardMetricsItem
            name="Leads to bookings"
            value="945"
            change="+100"
            icon="ph:users-three"
          />
          <SyncoDashboardMetricsItem
            name="Source of Leads"
            value="Online"
            change=""
            icon="ph:users-three"
          />
        </div>
        <div class="d-flex justify-content-between pb-3 pt-4">
          <h4>Birthday Party Leads</h4>
          <div>
            <SyncoFiltersAgentsDropdown />
            <NuxtLink
              to="/synco/birthday-parties/create/lead"
              class="btn btn-primary text-light ms-2 shadow-sm"
              >+ Add a new lead
            </NuxtLink>
          </div>
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
                  Parent Name
                  <!-- <label class="form-check-label text-muted" for="all-table">
                    Date
                  </label> -->
                </th>
                <th class="text-muted" scope="col">Child Name</th>
                <th class="text-muted" scope="col">Age</th>
                <th class="text-muted" scope="col">Postcode</th>
                <th class="text-muted" scope="col">Package Interest</th>
                <th class="text-muted" scope="col">Source</th>
                <th class="text-muted" scope="col">Date of party</th>
                <th class="text-muted" scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <LazySyncoBirthdayPartiesLeadsTableItem v-for="item in leads" />
            </tbody>
          </table>
        </div>
      </div>
      <div class="col">
        <SyncoBirthdayPartiesFormsFindLeadOrSale />
      </div>
    </div>

    <!-- Sales Tab-->
    <div v-if="tab === 2" class="row">
      <div class="col-sm-8">
        <div class="row row-cols-sm-4">
          <SyncoDashboardMetricsItem
            name="Total Revenue"
            value="£30.300"
            change="+12"
            icon="ph:users-three"
          />
          <SyncoDashboardMetricsItem
            name="Revenue Gold Package"
            value="£20.000"
            change="+12"
            icon="ph:users-three"
          />
          <SyncoDashboardMetricsItem
            name="Revenue Silver Package"
            value="£20.000"
            change="+100"
            icon="ph:users-three"
          />
          <SyncoDashboardMetricsItem
            name="Top Sales Agent"
            value="Ben Marcus"
            change=""
            icon="ph:users-three"
          />
        </div>
        <div class="d-flex justify-content-between pb-3 pt-4">
          <h4>Birthday Party Sales</h4>
          <div>
            <SyncoFiltersAgentsDropdown />
            <NuxtLink
              to="/synco/birthday-parties/create/birthday-party"
              class="btn btn-primary text-light ms-2 shadow-sm"
              >+ Add a new booking
            </NuxtLink>
          </div>
        </div>
        <div>
          <SyncoDataOptions />
        </div>
        <table class="table-hover rounded-4 mt-4 table border">
          <thead class="rounded-top-4">
            <tr class="table-light">
              <!-- <th scope="col">
                <label class="form-check-label text-muted" for="all-table">
                  Date
                </label>
              </th> -->
              <th scope="col">
                <input class="form-check-input" type="checkbox" disabled />
              </th>
              <th scope="col" class="text-muted">Parent Name</th>
              <th class="text-muted" scope="col">Child Age</th>
              <th class="text-muted" scope="col">Venue</th>
              <th class="text-muted" scope="col">Date of party</th>
              <th class="text-muted" scope="col">Package</th>
              <th class="text-muted" scope="col">Price Paid</th>
              <th class="text-muted" scope="col">Source</th>
              <th class="text-muted" scope="col">Coach</th>
              <th class="text-muted" scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <LazySyncoBirthdayPartiesSalesTableItem v-for="item in sales" />
          </tbody>
        </table>
      </div>
      <div class="col">
        <SyncoBirthdayPartiesFormsFindLeadOrSale />
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
