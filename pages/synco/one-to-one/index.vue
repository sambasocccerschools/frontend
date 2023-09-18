<script>
export default {
  data: () => ({
    tab: 1 // 1 leads 2 sales 3 all
  })
}
</script>

<template>
  <NuxtLayout name="syncolayout" pageTitle="One to One">

    <div class="card text-light mb-4" style="background-color: #38C8AB">
      <div class="card-body">
        <span class="h3">
          <Icon name="ic:baseline-search" /> One to One
        </span>
      </div>
    </div>

    <ul class="nav nav-pills mb-4">
      <li class="nav-item rounded-3 me-2">
        <button class="nav-link" :class="tab === 1 ? 'active' : 'text-dark border'" @click="tab = 1">Leads</button>
      </li>
      <li class="nav-item border rounded-3 me-2">
        <button class="nav-link" :class="tab === 2 ? 'active' : 'text-dark border'" @click="tab = 2">Sales</button>
      </li>
      <!-- <li class="nav-item border rounded-3 ">
        <button class="nav-link" :class="tab === 3 ? 'active' : 'text-dark'" @click="tab = 3">All</button>
      </li> -->
    </ul>

    <!-- Leads Tab-->
    <div class="row" v-if="tab === 1">
      <div class="col-sm-8">
        <div class="row row-cols-sm-4">
          <SyncoDashboardMetricsItem name="Total Leads" value="945" change="+12" icon="ph:users-three" />
          <SyncoDashboardMetricsItem name="New Leads" value="945" change="+12" icon="ph:users-three" />
          <SyncoDashboardMetricsItem name="Leads to bookings" value="945" change="+100" icon="ph:users-three" />
          <SyncoDashboardMetricsItem name="Source of Leads" value="Online" change="" icon="ph:users-three" />
        </div>
        <div class="d-flex justify-content-between pt-4 pb-3">
          <h4>One to One Leads</h4>
          <div>
            <SyncoFiltersAgentsDropdown />
            <NuxtLink to="/synco/one-to-one/create/lead" class=" ms-2 btn btn-primary text-light shadow-sm">+ Add a
              new
              lead
            </NuxtLink>
          </div>
        </div>

        <table class="table table-hover border rounded-4 ">
          <thead class="rounded-top-4">
            <tr class="table-light">
              <!-- <th scope="col">Checkbox</th> -->
              <th scope="col">
                Parent Name
                <!-- <label class="form-check-label text-muted" for="all-table">
                  Date
                </label> -->
              </th>
              <th class="text-muted" scope="col">Child Name</th>
              <th class="text-muted" scope="col">Age</th>
              <th class="text-muted" scope="col">Postcode</th>
              <th class="text-muted" scope="col">Package Interest</th>
              <th class="text-muted" scope="col">Availability</th>
              <th class="text-muted" scope="col">Source</th>
              <th class="text-muted" scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <LazySyncoOneToOneLeadsTableItem />
            <LazySyncoOneToOneLeadsTableItem />
            <LazySyncoOneToOneLeadsTableItem />
          </tbody>
        </table>

      </div>
      <div class="col">
        <SyncoOneToOneFormsFindLead />
      </div>
    </div>



    <!-- Sales Tab-->
    <div class="row" v-if="tab === 2">
      <div class="col-sm-8">
        <div class="row row-cols-sm-4">
          <SyncoDashboardMetricsItem name="Total Revenue" value="£30.300" change="+12" icon="ph:users-three" />
          <SyncoDashboardMetricsItem name="Revenue Gold Package" value="£20.000" change="+12" icon="ph:users-three" />
          <SyncoDashboardMetricsItem name="Revenue Silver Package" value="£20.000" change="+100" icon="ph:users-three" />
          <SyncoDashboardMetricsItem name="Top Sales Agent" value="Ben Marcus" change="" icon="ph:users-three" />
        </div>
        <div class="d-flex justify-content-between pt-4 pb-3">
          <h4>One to One Sales</h4>
          <div>
            <SyncoFiltersAgentsDropdown />
            <NuxtLink to="/synco/one-to-one/create/one-to-one" class=" ms-2 btn btn-primary text-light shadow-sm">+ Add a
              new
              booking
            </NuxtLink>
          </div>
        </div>
        <table class="table table-hover border rounded-4 ">
          <thead class="rounded-top-4">
            <tr class="table-light">
              <!-- <th scope="col">
                <label class="form-check-label text-muted" for="all-table">
                  Date
                </label>
              </th> -->
              <th scope="col" class="text-muted">Parent name</th>
              <th class="text-muted" scope="col">Child Age</th>
              <th class="text-muted" scope="col">Location</th>
              <th class="text-muted" scope="col">Date of class</th>
              <th class="text-muted" scope="col">Package</th>
              <th class="text-muted" scope="col">Price Paid</th>
              <th class="text-muted" scope="col">Source</th>
              <th class="text-muted" scope="col">Coach</th>
              <th class="text-muted" scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <LazySyncoOneToOneSalesTableItem />
            <LazySyncoOneToOneSalesTableItem />
            <LazySyncoOneToOneSalesTableItem />
          </tbody>
        </table>
      </div>
      <div class="col">
        <SyncoOneToOneFormsFindSale />
      </div>
    </div>

  </NuxtLayout>
</template>