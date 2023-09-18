<template>
  <NuxtLayout name="syncolayout" pageTitle="Holiday Camp Students">

    <div class="row">
      <div class="col">
        <SyncoHolidayCampsFormsFindMember />
      </div>
      <div class="col-sm-8">
        <div class="row row-cols-sm-4">
          <SyncoDashboardMetricsItem name="Total Students" value="30" change="" icon="ph:users-three" />
          <SyncoDashboardMetricsItem name="Revenue" value="£945.00" change="+12" icon="ph:users-three" />
          <SyncoDashboardMetricsItem name="Average Price" value="£105.00" change="+100" icon="ph:users-three" />
          <SyncoDashboardMetricsItem name="Top Source" value="Existing Member" change="" icon="ph:users-three" />
        </div>
        <div class="d-flex justify-content-between pt-4 pb-3">
          <div class="d-flex align-items-center">
            <h4 class="col-auto me-3 mb-0">Student Info</h4>
            <div class="input-group">
              <span class="input-group-text" id="search-addon">
                <Icon name="ic:baseline-search" />
              </span>
              <input type="text" class="form-control" placeholder="Search student" aria-label="Search student"
                aria-describedby="search-addon">
            </div>
          </div>
          <div>
            <button class="btn btn-transparent">
              <Icon name="octicon:settings" class="me-2 h3" />
            </button>
          </div>
        </div>

        <table class="table table-hover border rounded-4 ">
          <thead class="rounded-top-4">
            <tr class="table-light">
              <!-- <th scope="col">Checkbox</th> -->
              <th scope="col">
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


  </NuxtLayout>
</template>