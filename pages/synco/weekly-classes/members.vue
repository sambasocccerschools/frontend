<template>
  <NuxtLayout name="syncolayout" pageTitle="Members">

    <div class="row">
      <div class="col-sm-8">
        <div class="row row-cols-sm-4">
          <SyncoDashboardMetricsItem name="Total Students" value="3021" change="+12" icon="ph:users-three" />
          <SyncoDashboardMetricsItem name="Monthly Revenue" value="£75,000" change="+12" icon="ph:users-three" />
          <SyncoDashboardMetricsItem name="Av. Monthly Fee" value="£35.00" change="+100" icon="ph:users-three" />
          <SyncoDashboardMetricsItem name="Av. Life Cycle" value="18 months" change="+12" icon="ph:users-three" />
        </div>

        <table class="table table-hover border rounded-4 mt-4">
          <thead class="rounded-top-4">
            <tr class="table-light">
              <!-- <th scope="col">Checkbox</th> -->
              <th scope="col">
                <input class="form-check-input" type="checkbox" value="" id="all-table">
              </th>
              <th scope="col">
                <label class="form-check-label text-muted" for="all-table">
                  Name
                </label>
              </th>
              <th class="text-muted" scope="col">Age</th>
              <th class="text-muted" scope="col">Venue</th>
              <th class="text-muted" scope="col">Date of booking</th>
              <th class="text-muted" scope="col">Who booked?</th>
              <th class="text-muted" scope="col">Membership plan</th>
              <th class="text-muted" scope="col">Lifecycle of membership</th>
              <th class="text-muted" scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr class="align-middle">
              <th scope="row">
                <input class="form-check-input" type="checkbox" value="" id="tomjones">
              </th>
              <td><label class="form-check-label text-muted" for="tomjones">
                  Tom Jones
                </label></td>
              <td>7</td>
              <td>Acton</td>
              <td>Sat 1st Nov 22</td>
              <td>Jaffar Bukari</td>
              <td>12 months, 47.99 per months</td>
              <td>6 months</td>
              <td>
                <span class="badge bg-success-subtle px-1 text-success">
                  Active
                </span>
              </td>
              <!-- Active, Waiting List, Frozen, Cancelled -->
            </tr>
          </tbody>
        </table>

      </div>
      <div class="col">
        <SyncoFormTableDataFilters />

      </div>
    </div>

  </NuxtLayout>
</template>