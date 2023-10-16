<script>
export default {
  data: () => ({
    tab: 1, // 1 leads 2 sales 3 all,
    // These will get replaces by arrays 
    coachLeads: 10,
    pathwayLeads: 10,
    regionalManagerLeads: 8
  })
}
</script>

<template>
  <NuxtLayout name="syncolayout" pageTitle="Recruitment">

    <div class="card mb-4" style="background-color: #3846C8">
      <div class="card-body p-4">
        <span class="h3 text-light">
          <Icon name="ri:file-list-2-fill" class="me-2 mb-1" /> Recruitment
        </span>
      </div>
    </div>

    <ul class="nav nav-pills mb-4">
      <li class="nav-item rounded-3 me-2">
        <button class="nav-link" :class="tab === 1 ? 'active' : 'text-dark border'" @click="tab = 1">Coaching
          roles</button>
      </li>
      <li class="nav-item border rounded-3 me-2">
        <button class="nav-link" :class="tab === 2 ? 'active' : 'text-dark border'" @click="tab = 2">Pathway</button>
      </li>
      <li class="nav-item border rounded-3 me-2">
        <button class="nav-link" :class="tab === 3 ? 'active' : 'text-dark border'" @click="tab = 3">Regional
          managers</button>
      </li>
      <!-- <li class="nav-item border rounded-3 ">
        <button class="nav-link" :class="tab === 3 ? 'active' : 'text-dark'" @click="tab = 3">All</button>
      </li> -->
    </ul>

    <!-- Coaching Roles Tab-->
    <div class="row" v-if="tab === 1">
      <div class="col-sm-8">
        <div class="row row-cols-sm-4">
          <SyncoDashboardMetricsItem name="Total Leads" value="945" change="+12" icon="ph:users-three" />
          <SyncoDashboardMetricsItem name="New Leads" value="945" change="+12" icon="ph:users-three" />
          <SyncoDashboardMetricsItem name="Leads to assesments" value="945" change="+100" icon="ph:users-three" />
          <SyncoDashboardMetricsItem name="Source of recruitment" value="343" change="" icon="ph:users-three" />
        </div>
        <div class="d-flex justify-content-between pt-4 pb-3">
          <h4>Coach Recruitment Leads</h4>
          <div>
            <SyncoFiltersAgentsDropdown />
            <NuxtLink to="/synco/recruitment/create" class=" ms-2 btn btn-primary text-light shadow-sm">+ Add a
              new
              lead
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
              <th class="text-muted" scope="col">FA Level 1</th>
              <th class="text-muted" scope="col">DBS</th>
              <th class="text-muted" scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <LazySyncoRecruitmentLeadsTableItem v-for="item in coachLeads" />
          </tbody>
        </table>

      </div>
      <div class="col">
        <SyncoRecruitmentFormsFindLeads />
      </div>
    </div>



    <!-- Pathway Tab-->
    <div class="row" v-if="tab === 2">
      <div class="col-sm-8">
        <div class="row row-cols-sm-4">
          <SyncoDashboardMetricsItem name="Total Leads" value="945" change="+12" icon="ph:users-three" />
          <SyncoDashboardMetricsItem name="New Leads" value="945" change="+12" icon="ph:users-three" />
          <SyncoDashboardMetricsItem name="Leads to course" value="945" change="+100" icon="ph:users-three" />
          <SyncoDashboardMetricsItem name="Leads to recruitment" value="343" change="" icon="ph:users-three" />
        </div>
        <div class="d-flex justify-content-between pt-4 pb-3">
          <h4>Pathway Recruitment Leads</h4>
          <div>
            <SyncoFiltersAgentsDropdown />
            <NuxtLink to="/synco/recruitment/create" class=" ms-2 btn btn-primary text-light shadow-sm">+ Add a
              new
              lead
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
              <th class="text-muted" scope="col">FA Level 1</th>
              <th class="text-muted" scope="col">DBS</th>
              <th class="text-muted" scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <LazySyncoRecruitmentLeadsTableItem v-for="item in pathwayLeads" />

          </tbody>
        </table>
      </div>
      <div class="col">
        <SyncoRecruitmentFormsFindLeads />
      </div>
    </div>


    <!-- Regional Managers Tab-->
    <div class="row" v-if="tab === 3">
      <div class="col-sm-8">
        <div class="row row-cols-sm-4">
          <SyncoDashboardMetricsItem name="Total Leads" value="945" change="+12" icon="ph:users-three" />
          <SyncoDashboardMetricsItem name="New Leads" value="945" change="+12" icon="ph:users-three" />
          <SyncoDashboardMetricsItem name="Leads to assessment" value="945" change="+100" icon="ph:users-three" />
          <SyncoDashboardMetricsItem name="Leads to recruitment" value="343" change="" icon="ph:users-three" />
        </div>
        <div class="d-flex justify-content-between pt-4 pb-3">
          <h4>Regional Manager Leads</h4>
          <div>
            <SyncoFiltersAgentsDropdown />
            <NuxtLink to="/synco/recruitment/create" class=" ms-2 btn btn-primary text-light shadow-sm">+ Add a
              new
              lead
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
              <th class="text-muted" scope="col">FA Level 1</th>
              <th class="text-muted" scope="col">DBS</th>
              <th class="text-muted" scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <LazySyncoRecruitmentLeadsTableItem v-for="item in regionalManagerLeads" />

          </tbody>
        </table>
      </div>
      <div class="col">
        <SyncoRecruitmentFormsFindLeads />
      </div>
    </div>


  </NuxtLayout>
</template>