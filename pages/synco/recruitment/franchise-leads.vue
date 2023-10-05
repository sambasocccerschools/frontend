<script>
export default {
  data: () => ({
    franchiseLeads: 4,
  })
}
</script>

<template>
  <NuxtLayout name="syncolayout" pageTitle="Recruitment">

    <div class="card mb-4" style="background-color: #C838A8">
      <div class="card-body p-4">
        <span class="h3 text-light">
          <Icon name="ri:file-list-2-fill" class="me-2 mb-1" /> Franchise
        </span>
      </div>
    </div>


    <div class="row">
      <div class="col-sm-8">
        <div class="row row-cols-sm-4">
          <SyncoDashboardMetricsItem name="Total Franchise Leads" value="945" change="+12" icon="ph:users-three" />
          <SyncoDashboardMetricsItem name="New Leads" value="945" change="+12" icon="ph:users-three" />
          <SyncoDashboardMetricsItem name="Quality Leads" value="15%" change="+100" icon="ph:users-three" />
          <SyncoDashboardMetricsItem name="Leads to sales" value="343" change="" icon="ph:users-three" />
        </div>
        <div class="d-flex justify-content-between pt-4 pb-3">
          <h4>Franchise Recruitment Leads</h4>
          <div>
            <SyncoFiltersAgentsDropdown />
            <NuxtLink to="/synco/recruitment/create/franchise-lead" class=" ms-2 btn btn-primary text-light shadow-sm">+
              Add a
              new
              franchise
            </NuxtLink>
          </div>
        </div>

        <table class="table table-hover border rounded-4 ">
          <thead class="rounded-top-4">
            <tr class="table-light">
              <th scope="col">
                Name
              </th>
              <th class="text-muted" scope="col">Age</th>
              <th class="text-muted" scope="col">Postcode</th>
              <th class="text-muted" scope="col">Telephone</th>
              <th class="text-muted" scope="col">Email</th>
              <th class="text-muted" scope="col">Experience</th>
              <th class="text-muted" scope="col">Capital Available</th>
              <th class="text-muted" scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <LazySyncoRecruitmentFranchiseLeadsTableItem v-for="item in franchiseLeads" />
          </tbody>
        </table>

      </div>
      <div class="col">
        <SyncoRecruitmentFormsFindLeads />
      </div>
    </div>






  </NuxtLayout>
</template>