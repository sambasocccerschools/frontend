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
  <NuxtLayout name="syncolayout" pageTitle="Recruitment Reports">

    <div class="d-flex justify-content-between align-items-center">
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
        <li class="nav-item border rounded-3 me-2">
          <button class="nav-link" :class="tab === 4 ? 'active' : 'text-dark border'" @click="tab = 4">Franchise</button>
        </li>
        <!-- <li class="nav-item border rounded-3 ">
        <button class="nav-link" :class="tab === 3 ? 'active' : 'text-dark'" @click="tab = 3">All</button>
      </li> -->
      </ul>
      <div class="d-flex">
        <select class="form-select me-2" aria-label="daterange">
          <option selected>Date Range</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <button class="btn btn-sm btn-primary text-light w-100">
          <Icon name="ph:download-simple-bold" class="me-2" />Export data
        </button>
      </div>

    </div>

    <!-- Coaching Tab-->
    <div class="row" v-if="tab === 1">
      <h4>Coach Recruitment</h4>
      <div class="row row-cols-sm-5 mb-4">
        <SyncoDashboardMetricsItem name="Total Leads" value="945" change="+12" icon="ph:users-three" />
        <SyncoDashboardMetricsItem name="No. of telephone interviews" value="87" change="+12" icon="ph:users-three" />
        <SyncoDashboardMetricsItem name="No. of practical assessments" value="945" change="+100" icon="ph:users-three" />
        <SyncoDashboardMetricsItem name="No. of hires" value="343" change="" icon="ph:users-three" />
        <SyncoDashboardMetricsItem name="Conversion Rate (Leads to recruitment)" value="65%" change="15"
          icon="ph:users-three" />
      </div>

      <div class="row mb-4">
        <div class="col-sm-8">
          <div class="card h-100">
            <div class="card-header">
              <h4 class="card-title pt-4 pb-2">Recruitment Chart (Leads vs Hires)</h4>
            </div>
            <div class="card-body">
              <SyncoChartComponent />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title pt-4 pb-2">Recruitment Call Statistics</h4>
            </div>
            <div class="card-body">
              <!--  -->
              <div class="border-bottom d-flex pb-3 align-items-center">
                <span class="icon-circle icon-circle-warning me-3">
                  <Icon name="ph:address-book" />
                </span>
                <div class="col-auto d-flex flex-column">
                  <span>No. of calls made</span>
                  <span class="h5">1920</span>
                  <small class="text-muted">vs. previous period <span class="text-danger">2004</span></small>
                </div>
              </div>
              <!--  -->
              <div class="border-bottom d-flex py-3 align-items-center">
                <span class="icon-circle icon-circle-success me-3">
                  <Icon name="solar:phone-calling-outline" />
                </span>
                <div class="col-auto d-flex flex-column">
                  <span>No. of calls made</span>
                  <span class="h5">23 min</span>
                  <small class="text-muted">vs. previous period <span class="text-danger">18 months</span></small>
                </div>
              </div>
              <!--  -->
              <div class="d-flex py-3 align-items-center">
                <span class="icon-circle icon-circle-info me-3">
                  <Icon name="icon-park-outline:address-book" />
                </span>
                <div class="col-auto d-flex flex-column">
                  <span>Av. time duration of first contact</span>
                  <span class="h5">3 hr 16 min</span>
                  <small class="text-muted">vs. previous period <span class="text-danger">1 hour 8
                      minutes</span></small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-8">
          <div class="row row-cols-2 gy-4">
            <div class="col">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title pt-4 pb-2">Coaches Demographics</h4>
                  <ul class="nav nav-pills border rounded-4 p-2 d-flex justify-content-between">
                    <li class="nav-item me-2">
                      <button class="nav-link rounded-3 active">By age</button>
                    </li>
                    <li class="nav-item  me-2">
                      <button class="nav-link rounded-3">By gender</button>
                    </li>
                    <li class="nav-item  me-2">
                      <button class="nav-link rounded-3">By venue</button>
                    </li>
                  </ul>
                </div>
                <div class="card-body">
                  <div class="d-flex mb-2">
                    <span class="me-3">4</span>
                    <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                      aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar bg-primary text-white" style="width: 50%">50%</div>
                    </div>
                    <span class="ms-3">10%</span>
                  </div>
                  <div class="d-flex mb-2">
                    <span class="me-3">5</span>
                    <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                      aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar bg-primary text-white" style="width: 60%">50%</div>
                    </div>
                    <span class="ms-3">10%</span>
                  </div>
                  <div class="d-flex mb-2">
                    <span class="me-3">6</span>
                    <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                      aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar bg-primary text-white" style="width: 40%">50%</div>
                    </div>
                    <span class="ms-3">10%</span>
                  </div>
                  <div class="d-flex mb-2">
                    <span class="me-3">7</span>
                    <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                      aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar bg-primary text-white" style="width: 80%">50%</div>
                    </div>
                    <span class="ms-3">10%</span>
                  </div>
                  <div class="d-flex mb-2">
                    <span class="me-3">8</span>
                    <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                      aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar bg-primary text-white" style="width: 20%">50%</div>
                    </div>
                    <span class="ms-3">10%</span>
                  </div>
                  <div class="d-flex mb-2">
                    <span class="me-3">9</span>
                    <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                      aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar bg-primary text-white" style="width: 30%">50%</div>
                    </div>
                    <span class="ms-3">10%</span>
                  </div>
                  <div class="d-flex mb-2">
                    <span class="me-3">10</span>
                    <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                      aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar bg-primary text-white" style="width: 40%">50%</div>
                    </div>
                    <span class="ms-3">10%</span>
                  </div>
                  <div class="d-flex mb-2">
                    <span class="me-3">11</span>
                    <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                      aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar bg-primary text-white" style="width: 50%">50%</div>
                    </div>
                    <span class="ms-3">10%</span>
                  </div>
                  <div class="d-flex mb-2">
                    <span class="me-3">12</span>
                    <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                      aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar bg-primary text-white" style="width: 50%">50%</div>
                    </div>
                    <span class="ms-3">10%</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <div class="card-header">
                  <h4 class="card-title pt-4 pb-2">Qualifications & Experience</h4>
                </div>
                <div class="card-body">
                  <!--  -->
                  <div class="d-flex mb-4">
                    <span class="icon-circle icon-circle-secondary me-3">
                      <Icon name="ph:graduation-cap-duotone" />
                    </span>
                    <div class="w-100">
                      FA Qualification(s)
                      <div class="d-flex mt-2">
                        <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                          aria-valuemin="0" aria-valuemax="100">
                          <div class="progress-bar bg-primary text-white" style="width: 50%"></div>
                        </div>
                        <span class="ms-3">3</span>
                      </div>
                    </div>
                  </div>
                  <!--  -->
                  <div class="d-flex mb-4">
                    <span class="icon-circle icon-circle-warning me-3">
                      <Icon name="solar:medal-star-circle-outline" />
                    </span>
                    <div class="w-100">
                      DBS Certificate
                      <div class="d-flex mt-2">
                        <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                          aria-valuemin="0" aria-valuemax="100">
                          <div class="progress-bar bg-primary text-white" style="width: 50%"></div>
                        </div>
                        <span class="ms-3">2</span>
                      </div>
                    </div>
                  </div>
                  <!--  -->
                  <div class="d-flex mb-4">
                    <span class="icon-circle icon-circle-success me-3">
                      <Icon name="material-symbols:person-outline" />
                    </span>
                    <div class="w-100">
                      2-3 years of coaching experience
                      <div class="d-flex mt-2">
                        <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                          aria-valuemin="0" aria-valuemax="100">
                          <div class="progress-bar bg-primary text-white" style="width: 50%"></div>
                        </div>
                        <span class="ms-3">4</span>
                      </div>
                    </div>
                  </div>
                  <!--  -->
                  <div class="d-flex mb-4">
                    <span class="icon-circle icon-circle-info me-3">
                      <Icon name="mdi:google-circles" />
                    </span>
                    <div class="w-100">
                      No experience
                      <div class="d-flex mt-2">
                        <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                          aria-valuemin="0" aria-valuemax="100">
                          <div class="progress-bar bg-primary text-white" style="width: 50%"></div>
                        </div>
                        <span class="ms-3">3</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title pt-4 pb-2">Source of Leads</h4>
                </div>
                <div class="card-body">
                  <div class="mb-3">
                    Indeed
                    <div class="d-flex mt-2">
                      <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                        aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-primary text-white" style="width: 50%"></div>
                      </div>
                      <span class="ms-3">50%</span>
                    </div>
                  </div>
                  <div class="mb-3">
                    Google
                    <div class="d-flex mt-2">
                      <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                        aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-primary text-white" style="width: 50%"></div>
                      </div>
                      <span class="ms-3">50%</span>
                    </div>
                  </div>
                  <div class="mb-3">
                    Instagram
                    <div class="d-flex mt-2">
                      <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                        aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-primary text-white" style="width: 50%"></div>
                      </div>
                      <span class="ms-3">50%</span>
                    </div>
                  </div>
                  <div class="mb-3">
                    Referral
                    <div class="d-flex mt-2">
                      <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                        aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-primary text-white" style="width: 50%"></div>
                      </div>
                      <span class="ms-3">50%</span>
                    </div>
                  </div>
                  <div class="mb-3">
                    Linkedin
                    <div class="d-flex mt-2">
                      <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                        aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-primary text-white" style="width: 50%"></div>
                      </div>
                      <span class="ms-3">50%</span>
                    </div>
                  </div>
                  <div class="mb-3">
                    Other
                    <div class="d-flex mt-2">
                      <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                        aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-primary text-white" style="width: 50%"></div>
                      </div>
                      <span class="ms-3">50%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title pt-4 pb-2">High demand venues</h4>
                </div>
                <div class="card-body">
                  <div class="d-flex align-items-center mb-2">
                    <span class="me-3 col col-3">Acton</span>
                    <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                      aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar bg-primary text-white" style="width: 10%"></div>
                    </div>
                    <span class="ms-3">10%</span>
                  </div>
                  <div class="d-flex align-items-center mb-2">
                    <span class="me-3 col col-3">Kings Cross</span>
                    <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                      aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar bg-primary text-white" style="width: 10%"></div>
                    </div>
                    <span class="ms-3">10%</span>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card mb-4">
            <div class="card-header">
              <h4 class="card-title pt-4 pb-2">Onboarding Results</h4>
            </div>
            <div class="card-body">
              <div class="mb-3">
                Average Call Grade
                <div class="d-flex mt-2">
                  <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                    aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar bg-primary text-white" style="width: 87%"></div>
                  </div>
                  <span class="ms-3">87%</span>
                </div>
              </div>
              <div class="mb-3">
                Average Practical Assessment Grade
                <div class="d-flex mt-2">
                  <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                    aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar bg-primary text-white" style="width: 67%"></div>
                  </div>
                  <span class="ms-3">67%</span>
                </div>
              </div>
              <div class="mb-3">
                Average Coach Education Pass Mark
                <div class="d-flex mt-2">
                  <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                    aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar bg-primary text-white" style="width: 91%"></div>
                  </div>
                  <span class="ms-3">91%</span>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <h4 class="card-title pt-4 pb-2">Top agents with most hires</h4>
            </div>
            <div class="card-body">
              <div class="d-flex align-items-center mb-3">
                <img src="@/src/assets/img-avatar-agent.png" alt="Jessica Smith">
                <div class="w-100 ms-3">
                  Jessica Smith
                  <div class="d-flex mt-2">
                    <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                      aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar bg-primary text-white" style="width: 50%"></div>
                    </div>
                    <span class="ms-3">50</span>
                  </div>
                </div>
              </div>
              <div class="d-flex align-items-center mb-3">
                <img src="@/src/assets/img-avatar-agent.png" alt="Jessica Smith">
                <div class="w-100 ms-3">
                  Jessica Smith
                  <div class="d-flex mt-2">
                    <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                      aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar bg-primary text-white" style="width: 50%"></div>
                    </div>
                    <span class="ms-3">50</span>
                  </div>
                </div>
              </div>
              <div class="d-flex align-items-center mb-3">
                <img src="@/src/assets/img-avatar-agent.png" alt="Jessica Smith">
                <div class="w-100 ms-3">
                  Jessica Smith
                  <div class="d-flex mt-2">
                    <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                      aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar bg-primary text-white" style="width: 50%"></div>
                    </div>
                    <span class="ms-3">50</span>
                  </div>
                </div>
              </div>
              <div class="d-flex align-items-center mb-3">
                <img src="@/src/assets/img-avatar-agent.png" alt="Jessica Smith">
                <div class="w-100 ms-3">
                  Jessica Smith
                  <div class="d-flex mt-2">
                    <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                      aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar bg-primary text-white" style="width: 50%"></div>
                    </div>
                    <span class="ms-3">50</span>
                  </div>
                </div>
              </div>
              <div class="d-flex align-items-center mb-3">
                <img src="@/src/assets/img-avatar-agent.png" alt="Jessica Smith">
                <div class="w-100 ms-3">
                  Jessica Smith
                  <div class="d-flex mt-2">
                    <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                      aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar bg-primary text-white" style="width: 50%"></div>
                    </div>
                    <span class="ms-3">50</span>
                  </div>
                </div>
              </div>
              <div class="d-flex align-items-center ">
                <img src="@/src/assets/img-avatar-agent.png" alt="Jessica Smith">
                <div class="w-100 ms-3">
                  Jessica Smith
                  <div class="d-flex mt-2">
                    <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                      aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar bg-primary text-white" style="width: 50%"></div>
                    </div>
                    <span class="ms-3">50</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Pathway  Tab-->
    <div class="row" v-if="tab === 2">
      <h4>Pathway Recruitment</h4>
      <div class="row row-cols-sm-5 mb-4">
        <SyncoDashboardMetricsItem name="Total Leads" value="945" change="+12" icon="ph:users-three" />
        <SyncoDashboardMetricsItem name="No. of video interviews" value="87" change="+33" icon="ph:users-three" />
        <SyncoDashboardMetricsItem name="No. of students recruited" value="945" change="+100" icon="ph:users-three" />
        <SyncoDashboardMetricsItem name="No. of hires" value="343" change="" icon="ph:users-three" />
        <SyncoDashboardMetricsItem name="Conversion Rate (Leads to recruitment)" value="65%" change="15"
          icon="ph:users-three" />
      </div>

      <div class="row mb-4">
        <div class="col-sm-8">
          <div class="card h-100">
            <div class="card-header">
              <h4 class="card-title pt-4 pb-2">Recruitment Chart (Leads vs Recruited Students)</h4>
            </div>
            <div class="card-body">
              <SyncoChartComponent />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title pt-4 pb-2">Recruitment Call Statistics</h4>
            </div>
            <div class="card-body">
              <!--  -->
              <div class="border-bottom d-flex pb-3 align-items-center">
                <span class="icon-circle icon-circle-warning me-3">
                  <Icon name="ph:address-book" />
                </span>
                <div class="col-auto d-flex flex-column">
                  <span>No. of calls made</span>
                  <span class="h5">1920</span>
                  <small class="text-muted">vs. previous period <span class="text-danger">2004</span></small>
                </div>
              </div>
              <!--  -->
              <div class="border-bottom d-flex py-3 align-items-center">
                <span class="icon-circle icon-circle-success me-3">
                  <Icon name="solar:phone-calling-outline" />
                </span>
                <div class="col-auto d-flex flex-column">
                  <span>No. of calls made</span>
                  <span class="h5">23 min</span>
                  <small class="text-muted">vs. previous period <span class="text-danger">18 months</span></small>
                </div>
              </div>
              <!--  -->
              <div class="d-flex py-3 align-items-center">
                <span class="icon-circle icon-circle-info me-3">
                  <Icon name="icon-park-outline:address-book" />
                </span>
                <div class="col-auto d-flex flex-column">
                  <span>Av. time duration of first contact</span>
                  <span class="h5">3 hr 16 min</span>
                  <small class="text-muted">vs. previous period <span class="text-danger">1 hour 8
                      minutes</span></small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-8">
          <div class="row row-cols-2 gy-4">
            <div class="col">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title pt-4 pb-2">Student Demographics</h4>
                  <ul class="nav nav-pills border rounded-4 p-2 d-flex">
                    <li class="nav-item col">
                      <button class="nav-link rounded-3 active w-100">By age</button>
                    </li>
                    <li class="nav-item col ">
                      <button class="nav-link rounded-3 w-100">By gender</button>
                    </li>
                  </ul>
                </div>
                <div class="card-body">
                  <div class="d-flex mb-2">
                    <span class="me-3">4</span>
                    <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                      aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar bg-primary text-white" style="width: 50%">50%</div>
                    </div>
                    <span class="ms-3">10%</span>
                  </div>
                  <div class="d-flex mb-2">
                    <span class="me-3">5</span>
                    <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                      aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar bg-primary text-white" style="width: 60%">50%</div>
                    </div>
                    <span class="ms-3">10%</span>
                  </div>
                  <div class="d-flex mb-2">
                    <span class="me-3">6</span>
                    <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                      aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar bg-primary text-white" style="width: 40%">50%</div>
                    </div>
                    <span class="ms-3">10%</span>
                  </div>
                  <div class="d-flex mb-2">
                    <span class="me-3">7</span>
                    <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                      aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar bg-primary text-white" style="width: 80%">50%</div>
                    </div>
                    <span class="ms-3">10%</span>
                  </div>
                  <div class="d-flex mb-2">
                    <span class="me-3">8</span>
                    <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                      aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar bg-primary text-white" style="width: 20%">50%</div>
                    </div>
                    <span class="ms-3">10%</span>
                  </div>
                  <div class="d-flex mb-2">
                    <span class="me-3">9</span>
                    <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                      aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar bg-primary text-white" style="width: 30%">50%</div>
                    </div>
                    <span class="ms-3">10%</span>
                  </div>
                  <div class="d-flex mb-2">
                    <span class="me-3">10</span>
                    <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                      aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar bg-primary text-white" style="width: 40%">50%</div>
                    </div>
                    <span class="ms-3">10%</span>
                  </div>
                  <div class="d-flex mb-2">
                    <span class="me-3">11</span>
                    <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                      aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar bg-primary text-white" style="width: 50%">50%</div>
                    </div>
                    <span class="ms-3">10%</span>
                  </div>
                  <div class="d-flex mb-2">
                    <span class="me-3">12</span>
                    <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                      aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar bg-primary text-white" style="width: 50%">50%</div>
                    </div>
                    <span class="ms-3">10%</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <div class="card-header">
                  <h4 class="card-title pt-4 pb-2">Qualifications & Experience</h4>
                </div>
                <div class="card-body">
                  <!--  -->
                  <div class="d-flex mb-4">
                    <span class="icon-circle icon-circle-secondary me-3">
                      <Icon name="ph:graduation-cap-duotone" />
                    </span>
                    <div class="w-100">
                      FA Qualification(s)
                      <div class="d-flex mt-2">
                        <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                          aria-valuemin="0" aria-valuemax="100">
                          <div class="progress-bar bg-primary text-white" style="width: 50%"></div>
                        </div>
                        <span class="ms-3">3</span>
                      </div>
                    </div>
                  </div>
                  <!--  -->
                  <div class="d-flex mb-4">
                    <span class="icon-circle icon-circle-warning me-3">
                      <Icon name="solar:medal-star-circle-outline" />
                    </span>
                    <div class="w-100">
                      DBS Certificate
                      <div class="d-flex mt-2">
                        <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                          aria-valuemin="0" aria-valuemax="100">
                          <div class="progress-bar bg-primary text-white" style="width: 50%"></div>
                        </div>
                        <span class="ms-3">2</span>
                      </div>
                    </div>
                  </div>
                  <!--  -->
                  <div class="d-flex mb-4">
                    <span class="icon-circle icon-circle-success me-3">
                      <Icon name="material-symbols:person-outline" />
                    </span>
                    <div class="w-100">
                      2-3 years of coaching experience
                      <div class="d-flex mt-2">
                        <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                          aria-valuemin="0" aria-valuemax="100">
                          <div class="progress-bar bg-primary text-white" style="width: 50%"></div>
                        </div>
                        <span class="ms-3">4</span>
                      </div>
                    </div>
                  </div>
                  <!--  -->
                  <div class="d-flex mb-4">
                    <span class="icon-circle icon-circle-info me-3">
                      <Icon name="mdi:google-circles" />
                    </span>
                    <div class="w-100">
                      No experience
                      <div class="d-flex mt-2">
                        <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                          aria-valuemin="0" aria-valuemax="100">
                          <div class="progress-bar bg-primary text-white" style="width: 50%"></div>
                        </div>
                        <span class="ms-3">3</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title pt-4 pb-2">Source of Leads</h4>
                </div>
                <div class="card-body">
                  <div class="mb-3">
                    Indeed
                    <div class="d-flex mt-2">
                      <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                        aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-primary text-white" style="width: 50%"></div>
                      </div>
                      <span class="ms-3">50%</span>
                    </div>
                  </div>
                  <div class="mb-3">
                    Google
                    <div class="d-flex mt-2">
                      <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                        aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-primary text-white" style="width: 50%"></div>
                      </div>
                      <span class="ms-3">50%</span>
                    </div>
                  </div>
                  <div class="mb-3">
                    Instagram
                    <div class="d-flex mt-2">
                      <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                        aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-primary text-white" style="width: 50%"></div>
                      </div>
                      <span class="ms-3">50%</span>
                    </div>
                  </div>
                  <div class="mb-3">
                    Referral
                    <div class="d-flex mt-2">
                      <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                        aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-primary text-white" style="width: 50%"></div>
                      </div>
                      <span class="ms-3">50%</span>
                    </div>
                  </div>
                  <div class="mb-3">
                    Linkedin
                    <div class="d-flex mt-2">
                      <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                        aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-primary text-white" style="width: 50%"></div>
                      </div>
                      <span class="ms-3">50%</span>
                    </div>
                  </div>
                  <div class="mb-3">
                    Other
                    <div class="d-flex mt-2">
                      <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                        aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-primary text-white" style="width: 50%"></div>
                      </div>
                      <span class="ms-3">50%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title pt-4 pb-2">Top agents with most hires</h4>
                </div>
                <div class="card-body">
                  <div class="d-flex align-items-center mb-3">
                    <img src="@/src/assets/img-avatar-agent.png" alt="Jessica Smith">
                    <div class="w-100 ms-3">
                      Jessica Smith
                      <div class="d-flex mt-2">
                        <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                          aria-valuemin="0" aria-valuemax="100">
                          <div class="progress-bar bg-primary text-white" style="width: 50%"></div>
                        </div>
                        <span class="ms-3">50</span>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mb-3">
                    <img src="@/src/assets/img-avatar-agent.png" alt="Jessica Smith">
                    <div class="w-100 ms-3">
                      Jessica Smith
                      <div class="d-flex mt-2">
                        <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                          aria-valuemin="0" aria-valuemax="100">
                          <div class="progress-bar bg-primary text-white" style="width: 50%"></div>
                        </div>
                        <span class="ms-3">50</span>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mb-3">
                    <img src="@/src/assets/img-avatar-agent.png" alt="Jessica Smith">
                    <div class="w-100 ms-3">
                      Jessica Smith
                      <div class="d-flex mt-2">
                        <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                          aria-valuemin="0" aria-valuemax="100">
                          <div class="progress-bar bg-primary text-white" style="width: 50%"></div>
                        </div>
                        <span class="ms-3">50</span>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mb-3">
                    <img src="@/src/assets/img-avatar-agent.png" alt="Jessica Smith">
                    <div class="w-100 ms-3">
                      Jessica Smith
                      <div class="d-flex mt-2">
                        <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                          aria-valuemin="0" aria-valuemax="100">
                          <div class="progress-bar bg-primary text-white" style="width: 50%"></div>
                        </div>
                        <span class="ms-3">50</span>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mb-3">
                    <img src="@/src/assets/img-avatar-agent.png" alt="Jessica Smith">
                    <div class="w-100 ms-3">
                      Jessica Smith
                      <div class="d-flex mt-2">
                        <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                          aria-valuemin="0" aria-valuemax="100">
                          <div class="progress-bar bg-primary text-white" style="width: 50%"></div>
                        </div>
                        <span class="ms-3">50</span>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center ">
                    <img src="@/src/assets/img-avatar-agent.png" alt="Jessica Smith">
                    <div class="w-100 ms-3">
                      Jessica Smith
                      <div class="d-flex mt-2">
                        <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                          aria-valuemin="0" aria-valuemax="100">
                          <div class="progress-bar bg-primary text-white" style="width: 50%"></div>
                        </div>
                        <span class="ms-3">50</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div class="col">
          <div class="card mb-4">
            <div class="card-header">
              <h4 class="card-title pt-4 pb-2">Onboarding Results</h4>
            </div>
            <div class="card-body">
              <div class="mb-3">
                Average Video Interview Grade
                <div class="d-flex mt-2">
                  <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                    aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar bg-primary text-white" style="width: 87%"></div>
                  </div>
                  <span class="ms-3">87%</span>
                </div>
              </div>
              <div class="mb-3">
                Average Practical Assessment Grade
                <div class="d-flex mt-2">
                  <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                    aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar bg-primary text-white" style="width: 67%"></div>
                  </div>
                  <span class="ms-3">67%</span>
                </div>
              </div>
              <div class="mb-3">
                Average Coach Education Pass Mark
                <div class="d-flex mt-2">
                  <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                    aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar bg-primary text-white" style="width: 91%"></div>
                  </div>
                  <span class="ms-3">91%</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- Regional Manager Recruit Tab-->
    <div class="row" v-if="tab === 3">
      <h4>Regional Manager Recruitment</h4>
      <div class="row row-cols-sm-5 mb-4">
        <SyncoDashboardMetricsItem name="Total Leads" value="945" change="+12" icon="ph:users-three" />
        <SyncoDashboardMetricsItem name="No. of video interviews" value="87" change="+33" icon="ph:users-three" />
        <SyncoDashboardMetricsItem name="No. of students recruited" value="945" change="+100" icon="ph:users-three" />
        <SyncoDashboardMetricsItem name="No. of hires" value="343" change="" icon="ph:users-three" />
        <SyncoDashboardMetricsItem name="Conversion Rate (Leads to recruitment)" value="65%" change="15"
          icon="ph:users-three" />
      </div>

      <div class="row mb-4">
        <div class="col-sm-8">
          <div class="card h-100">
            <div class="card-header">
              <h4 class="card-title pt-4 pb-2">Recruitment Chart (Leads vs Recruited Students)</h4>
            </div>
            <div class="card-body">
              <SyncoChartComponent />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title pt-4 pb-2">Recruitment Call Statistics</h4>
            </div>
            <div class="card-body">
              <!--  -->
              <div class="border-bottom d-flex pb-3 align-items-center">
                <span class="icon-circle icon-circle-warning me-3">
                  <Icon name="ph:address-book" />
                </span>
                <div class="col-auto d-flex flex-column">
                  <span>No. of calls made</span>
                  <span class="h5">1920</span>
                  <small class="text-muted">vs. previous period <span class="text-danger">2004</span></small>
                </div>
              </div>
              <!--  -->
              <div class="border-bottom d-flex py-3 align-items-center">
                <span class="icon-circle icon-circle-success me-3">
                  <Icon name="solar:phone-calling-outline" />
                </span>
                <div class="col-auto d-flex flex-column">
                  <span>No. of calls made</span>
                  <span class="h5">23 min</span>
                  <small class="text-muted">vs. previous period <span class="text-danger">18 months</span></small>
                </div>
              </div>
              <!--  -->
              <div class="d-flex py-3 align-items-center">
                <span class="icon-circle icon-circle-info me-3">
                  <Icon name="icon-park-outline:address-book" />
                </span>
                <div class="col-auto d-flex flex-column">
                  <span>Av. time duration of first contact</span>
                  <span class="h5">3 hr 16 min</span>
                  <small class="text-muted">vs. previous period <span class="text-danger">1 hour 8
                      minutes</span></small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-8">
          <div class="row row-cols-2 gy-4">
            <div class="col">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title pt-4 pb-2">Student Demographics</h4>
                  <ul class="nav nav-pills border rounded-4 p-2 d-flex">
                    <li class="nav-item col">
                      <button class="nav-link rounded-3 active w-100">By age</button>
                    </li>
                    <li class="nav-item col ">
                      <button class="nav-link rounded-3 w-100">By gender</button>
                    </li>
                  </ul>
                </div>
                <div class="card-body">
                  <div class="d-flex mb-2">
                    <span class="me-3">4</span>
                    <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                      aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar bg-primary text-white" style="width: 50%">50%</div>
                    </div>
                    <span class="ms-3">10%</span>
                  </div>
                  <div class="d-flex mb-2">
                    <span class="me-3">5</span>
                    <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                      aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar bg-primary text-white" style="width: 60%">50%</div>
                    </div>
                    <span class="ms-3">10%</span>
                  </div>
                  <div class="d-flex mb-2">
                    <span class="me-3">6</span>
                    <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                      aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar bg-primary text-white" style="width: 40%">50%</div>
                    </div>
                    <span class="ms-3">10%</span>
                  </div>
                  <div class="d-flex mb-2">
                    <span class="me-3">7</span>
                    <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                      aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar bg-primary text-white" style="width: 80%">50%</div>
                    </div>
                    <span class="ms-3">10%</span>
                  </div>
                  <div class="d-flex mb-2">
                    <span class="me-3">8</span>
                    <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                      aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar bg-primary text-white" style="width: 20%">50%</div>
                    </div>
                    <span class="ms-3">10%</span>
                  </div>
                  <div class="d-flex mb-2">
                    <span class="me-3">9</span>
                    <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                      aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar bg-primary text-white" style="width: 30%">50%</div>
                    </div>
                    <span class="ms-3">10%</span>
                  </div>
                  <div class="d-flex mb-2">
                    <span class="me-3">10</span>
                    <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                      aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar bg-primary text-white" style="width: 40%">50%</div>
                    </div>
                    <span class="ms-3">10%</span>
                  </div>
                  <div class="d-flex mb-2">
                    <span class="me-3">11</span>
                    <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                      aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar bg-primary text-white" style="width: 50%">50%</div>
                    </div>
                    <span class="ms-3">10%</span>
                  </div>
                  <div class="d-flex mb-2">
                    <span class="me-3">12</span>
                    <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                      aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar bg-primary text-white" style="width: 50%">50%</div>
                    </div>
                    <span class="ms-3">10%</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <div class="card-header">
                  <h4 class="card-title pt-4 pb-2">Qualifications & Experience</h4>
                </div>
                <div class="card-body">
                  <!--  -->
                  <div class="d-flex mb-4">
                    <span class="icon-circle icon-circle-secondary me-3">
                      <Icon name="ph:graduation-cap-duotone" />
                    </span>
                    <div class="w-100">
                      FA Qualification(s)
                      <div class="d-flex mt-2">
                        <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                          aria-valuemin="0" aria-valuemax="100">
                          <div class="progress-bar bg-primary text-white" style="width: 50%"></div>
                        </div>
                        <span class="ms-3">3</span>
                      </div>
                    </div>
                  </div>
                  <!--  -->
                  <div class="d-flex mb-4">
                    <span class="icon-circle icon-circle-warning me-3">
                      <Icon name="solar:medal-star-circle-outline" />
                    </span>
                    <div class="w-100">
                      DBS Certificate
                      <div class="d-flex mt-2">
                        <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                          aria-valuemin="0" aria-valuemax="100">
                          <div class="progress-bar bg-primary text-white" style="width: 50%"></div>
                        </div>
                        <span class="ms-3">2</span>
                      </div>
                    </div>
                  </div>
                  <!--  -->
                  <div class="d-flex mb-4">
                    <span class="icon-circle icon-circle-success me-3">
                      <Icon name="material-symbols:person-outline" />
                    </span>
                    <div class="w-100">
                      2-3 years of coaching experience
                      <div class="d-flex mt-2">
                        <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                          aria-valuemin="0" aria-valuemax="100">
                          <div class="progress-bar bg-primary text-white" style="width: 50%"></div>
                        </div>
                        <span class="ms-3">4</span>
                      </div>
                    </div>
                  </div>
                  <!--  -->
                  <div class="d-flex mb-4">
                    <span class="icon-circle icon-circle-info me-3">
                      <Icon name="mdi:google-circles" />
                    </span>
                    <div class="w-100">
                      No experience
                      <div class="d-flex mt-2">
                        <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                          aria-valuemin="0" aria-valuemax="100">
                          <div class="progress-bar bg-primary text-white" style="width: 50%"></div>
                        </div>
                        <span class="ms-3">3</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title pt-4 pb-2">Source of Leads</h4>
                </div>
                <div class="card-body">
                  <div class="mb-3">
                    Indeed
                    <div class="d-flex mt-2">
                      <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                        aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-primary text-white" style="width: 50%"></div>
                      </div>
                      <span class="ms-3">50%</span>
                    </div>
                  </div>
                  <div class="mb-3">
                    Google
                    <div class="d-flex mt-2">
                      <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                        aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-primary text-white" style="width: 50%"></div>
                      </div>
                      <span class="ms-3">50%</span>
                    </div>
                  </div>
                  <div class="mb-3">
                    Instagram
                    <div class="d-flex mt-2">
                      <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                        aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-primary text-white" style="width: 50%"></div>
                      </div>
                      <span class="ms-3">50%</span>
                    </div>
                  </div>
                  <div class="mb-3">
                    Referral
                    <div class="d-flex mt-2">
                      <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                        aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-primary text-white" style="width: 50%"></div>
                      </div>
                      <span class="ms-3">50%</span>
                    </div>
                  </div>
                  <div class="mb-3">
                    Linkedin
                    <div class="d-flex mt-2">
                      <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                        aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-primary text-white" style="width: 50%"></div>
                      </div>
                      <span class="ms-3">50%</span>
                    </div>
                  </div>
                  <div class="mb-3">
                    Other
                    <div class="d-flex mt-2">
                      <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                        aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-primary text-white" style="width: 50%"></div>
                      </div>
                      <span class="ms-3">50%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title pt-4 pb-2">Top agents with most hires</h4>
                </div>
                <div class="card-body">
                  <div class="d-flex align-items-center mb-3">
                    <img src="@/src/assets/img-avatar-agent.png" alt="Jessica Smith">
                    <div class="w-100 ms-3">
                      Jessica Smith
                      <div class="d-flex mt-2">
                        <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                          aria-valuemin="0" aria-valuemax="100">
                          <div class="progress-bar bg-primary text-white" style="width: 50%"></div>
                        </div>
                        <span class="ms-3">50</span>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mb-3">
                    <img src="@/src/assets/img-avatar-agent.png" alt="Jessica Smith">
                    <div class="w-100 ms-3">
                      Jessica Smith
                      <div class="d-flex mt-2">
                        <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                          aria-valuemin="0" aria-valuemax="100">
                          <div class="progress-bar bg-primary text-white" style="width: 50%"></div>
                        </div>
                        <span class="ms-3">50</span>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mb-3">
                    <img src="@/src/assets/img-avatar-agent.png" alt="Jessica Smith">
                    <div class="w-100 ms-3">
                      Jessica Smith
                      <div class="d-flex mt-2">
                        <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                          aria-valuemin="0" aria-valuemax="100">
                          <div class="progress-bar bg-primary text-white" style="width: 50%"></div>
                        </div>
                        <span class="ms-3">50</span>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mb-3">
                    <img src="@/src/assets/img-avatar-agent.png" alt="Jessica Smith">
                    <div class="w-100 ms-3">
                      Jessica Smith
                      <div class="d-flex mt-2">
                        <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                          aria-valuemin="0" aria-valuemax="100">
                          <div class="progress-bar bg-primary text-white" style="width: 50%"></div>
                        </div>
                        <span class="ms-3">50</span>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mb-3">
                    <img src="@/src/assets/img-avatar-agent.png" alt="Jessica Smith">
                    <div class="w-100 ms-3">
                      Jessica Smith
                      <div class="d-flex mt-2">
                        <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                          aria-valuemin="0" aria-valuemax="100">
                          <div class="progress-bar bg-primary text-white" style="width: 50%"></div>
                        </div>
                        <span class="ms-3">50</span>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center ">
                    <img src="@/src/assets/img-avatar-agent.png" alt="Jessica Smith">
                    <div class="w-100 ms-3">
                      Jessica Smith
                      <div class="d-flex mt-2">
                        <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                          aria-valuemin="0" aria-valuemax="100">
                          <div class="progress-bar bg-primary text-white" style="width: 50%"></div>
                        </div>
                        <span class="ms-3">50</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div class="col">
          <div class="card mb-4">
            <div class="card-header">
              <h4 class="card-title pt-4 pb-2">Onboarding Results</h4>
            </div>
            <div class="card-body">
              <div class="mb-3">
                Average Interview graduation-cap-duotone
                <div class="d-flex mt-2">
                  <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                    aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar bg-primary text-white" style="width: 87%"></div>
                  </div>
                  <span class="ms-3">87%</span>
                </div>
              </div>
              <div class="mb-3">
                Average Practical Assessment Grade
                <div class="d-flex mt-2">
                  <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                    aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar bg-primary text-white" style="width: 67%"></div>
                  </div>
                  <span class="ms-3">67%</span>
                </div>
              </div>
              <div class="mb-3">
                Average Coach Assessment Pass Mark
                <div class="d-flex mt-2">
                  <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                    aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar bg-primary text-white" style="width: 91%"></div>
                  </div>
                  <span class="ms-3">91%</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- Franchise Tab-->
    <div class="row" v-if="tab === 4">
      <h4>Franchise Recruitment</h4>
      <div class="row row-cols-sm-5 mb-4">
        <SyncoDashboardMetricsItem name="Total Leads" value="945" change="+12" icon="ph:users-three" />
        <SyncoDashboardMetricsItem name="No. of discovery calls" value="87" change="+33" icon="ph:users-three" />
        <SyncoDashboardMetricsItem name="No. of students recruited" value="945" change="+100" icon="ph:users-three" />
        <SyncoDashboardMetricsItem name="No. of hires" value="343" change="" icon="ph:users-three" />
        <SyncoDashboardMetricsItem name="Conversion Rate (Leads to recruitment)" value="65%" change="15"
          icon="ph:users-three" />
      </div>

      <div class="row mb-4">
        <div class="col-sm-8">
          <div class="card h-100">
            <div class="card-header">
              <h4 class="card-title pt-4 pb-2">Recruitment Chart (Leads vs Recruited Students)</h4>
            </div>
            <div class="card-body">
              <SyncoChartComponent />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title pt-4 pb-2">Recruitment Call Statistics</h4>
            </div>
            <div class="card-body">
              <!--  -->
              <div class="border-bottom d-flex pb-3 align-items-center">
                <span class="icon-circle icon-circle-warning me-3">
                  <Icon name="ph:address-book" />
                </span>
                <div class="col-auto d-flex flex-column">
                  <span>No. of calls made</span>
                  <span class="h5">1920</span>
                  <small class="text-muted">vs. previous period <span class="text-danger">2004</span></small>
                </div>
              </div>
              <!--  -->
              <div class="border-bottom d-flex py-3 align-items-center">
                <span class="icon-circle icon-circle-success me-3">
                  <Icon name="solar:phone-calling-outline" />
                </span>
                <div class="col-auto d-flex flex-column">
                  <span>No. of calls made</span>
                  <span class="h5">23 min</span>
                  <small class="text-muted">vs. previous period <span class="text-danger">18 months</span></small>
                </div>
              </div>
              <!--  -->
              <div class="d-flex py-3 align-items-center">
                <span class="icon-circle icon-circle-info me-3">
                  <Icon name="icon-park-outline:address-book" />
                </span>
                <div class="col-auto d-flex flex-column">
                  <span>Av. time duration of first contact</span>
                  <span class="h5">3 hr 16 min</span>
                  <small class="text-muted">vs. previous period <span class="text-danger">1 hour 8
                      minutes</span></small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-8">
          <div class="row row-cols-2 gy-4">
            <div class="col">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title pt-4 pb-2">Student Demographics</h4>
                  <ul class="nav nav-pills border rounded-4 p-2 d-flex">
                    <li class="nav-item col">
                      <button class="nav-link rounded-3 active w-100">By age</button>
                    </li>
                    <li class="nav-item col ">
                      <button class="nav-link rounded-3 w-100">By gender</button>
                    </li>
                  </ul>
                </div>
                <div class="card-body">
                  <div class="d-flex mb-2">
                    <span class="me-3">4</span>
                    <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                      aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar bg-primary text-white" style="width: 50%">50%</div>
                    </div>
                    <span class="ms-3">10%</span>
                  </div>
                  <div class="d-flex mb-2">
                    <span class="me-3">5</span>
                    <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                      aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar bg-primary text-white" style="width: 60%">50%</div>
                    </div>
                    <span class="ms-3">10%</span>
                  </div>
                  <div class="d-flex mb-2">
                    <span class="me-3">6</span>
                    <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                      aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar bg-primary text-white" style="width: 40%">50%</div>
                    </div>
                    <span class="ms-3">10%</span>
                  </div>
                  <div class="d-flex mb-2">
                    <span class="me-3">7</span>
                    <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                      aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar bg-primary text-white" style="width: 80%">50%</div>
                    </div>
                    <span class="ms-3">10%</span>
                  </div>
                  <div class="d-flex mb-2">
                    <span class="me-3">8</span>
                    <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                      aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar bg-primary text-white" style="width: 20%">50%</div>
                    </div>
                    <span class="ms-3">10%</span>
                  </div>
                  <div class="d-flex mb-2">
                    <span class="me-3">9</span>
                    <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                      aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar bg-primary text-white" style="width: 30%">50%</div>
                    </div>
                    <span class="ms-3">10%</span>
                  </div>
                  <div class="d-flex mb-2">
                    <span class="me-3">10</span>
                    <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                      aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar bg-primary text-white" style="width: 40%">50%</div>
                    </div>
                    <span class="ms-3">10%</span>
                  </div>
                  <div class="d-flex mb-2">
                    <span class="me-3">11</span>
                    <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                      aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar bg-primary text-white" style="width: 50%">50%</div>
                    </div>
                    <span class="ms-3">10%</span>
                  </div>
                  <div class="d-flex mb-2">
                    <span class="me-3">12</span>
                    <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                      aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar bg-primary text-white" style="width: 50%">50%</div>
                    </div>
                    <span class="ms-3">10%</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <div class="card-header">
                  <h4 class="card-title pt-4 pb-2">Qualifications & Experience</h4>
                </div>
                <div class="card-body">
                  <!--  -->
                  <div class="d-flex mb-4">
                    <span class="icon-circle icon-circle-secondary me-3">
                      <Icon name="ph:graduation-cap-duotone" />
                    </span>
                    <div class="w-100">
                      FA Qualification(s)
                      <div class="d-flex mt-2">
                        <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                          aria-valuemin="0" aria-valuemax="100">
                          <div class="progress-bar bg-primary text-white" style="width: 50%"></div>
                        </div>
                        <span class="ms-3">3</span>
                      </div>
                    </div>
                  </div>
                  <!--  -->
                  <div class="d-flex mb-4">
                    <span class="icon-circle icon-circle-warning me-3">
                      <Icon name="solar:medal-star-circle-outline" />
                    </span>
                    <div class="w-100">
                      DBS Certificate
                      <div class="d-flex mt-2">
                        <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                          aria-valuemin="0" aria-valuemax="100">
                          <div class="progress-bar bg-primary text-white" style="width: 50%"></div>
                        </div>
                        <span class="ms-3">2</span>
                      </div>
                    </div>
                  </div>
                  <!--  -->
                  <div class="d-flex mb-4">
                    <span class="icon-circle icon-circle-success me-3">
                      <Icon name="material-symbols:person-outline" />
                    </span>
                    <div class="w-100">
                      2-3 years of coaching experience
                      <div class="d-flex mt-2">
                        <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                          aria-valuemin="0" aria-valuemax="100">
                          <div class="progress-bar bg-primary text-white" style="width: 50%"></div>
                        </div>
                        <span class="ms-3">4</span>
                      </div>
                    </div>
                  </div>
                  <!--  -->
                  <div class="d-flex mb-4">
                    <span class="icon-circle icon-circle-info me-3">
                      <Icon name="mdi:google-circles" />
                    </span>
                    <div class="w-100">
                      No experience
                      <div class="d-flex mt-2">
                        <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                          aria-valuemin="0" aria-valuemax="100">
                          <div class="progress-bar bg-primary text-white" style="width: 50%"></div>
                        </div>
                        <span class="ms-3">3</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title pt-4 pb-2">Source of Leads</h4>
                </div>
                <div class="card-body">
                  <div class="mb-3">
                    Indeed
                    <div class="d-flex mt-2">
                      <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                        aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-primary text-white" style="width: 50%"></div>
                      </div>
                      <span class="ms-3">50%</span>
                    </div>
                  </div>
                  <div class="mb-3">
                    Google
                    <div class="d-flex mt-2">
                      <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                        aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-primary text-white" style="width: 50%"></div>
                      </div>
                      <span class="ms-3">50%</span>
                    </div>
                  </div>
                  <div class="mb-3">
                    Instagram
                    <div class="d-flex mt-2">
                      <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                        aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-primary text-white" style="width: 50%"></div>
                      </div>
                      <span class="ms-3">50%</span>
                    </div>
                  </div>
                  <div class="mb-3">
                    Referral
                    <div class="d-flex mt-2">
                      <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                        aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-primary text-white" style="width: 50%"></div>
                      </div>
                      <span class="ms-3">50%</span>
                    </div>
                  </div>
                  <div class="mb-3">
                    Linkedin
                    <div class="d-flex mt-2">
                      <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                        aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-primary text-white" style="width: 50%"></div>
                      </div>
                      <span class="ms-3">50%</span>
                    </div>
                  </div>
                  <div class="mb-3">
                    Other
                    <div class="d-flex mt-2">
                      <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                        aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-primary text-white" style="width: 50%"></div>
                      </div>
                      <span class="ms-3">50%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title pt-4 pb-2">Top agents with most hires</h4>
                </div>
                <div class="card-body">
                  <div class="d-flex align-items-center mb-3">
                    <img src="@/src/assets/img-avatar-agent.png" alt="Jessica Smith">
                    <div class="w-100 ms-3">
                      Jessica Smith
                      <div class="d-flex mt-2">
                        <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                          aria-valuemin="0" aria-valuemax="100">
                          <div class="progress-bar bg-primary text-white" style="width: 50%"></div>
                        </div>
                        <span class="ms-3">50</span>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mb-3">
                    <img src="@/src/assets/img-avatar-agent.png" alt="Jessica Smith">
                    <div class="w-100 ms-3">
                      Jessica Smith
                      <div class="d-flex mt-2">
                        <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                          aria-valuemin="0" aria-valuemax="100">
                          <div class="progress-bar bg-primary text-white" style="width: 50%"></div>
                        </div>
                        <span class="ms-3">50</span>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mb-3">
                    <img src="@/src/assets/img-avatar-agent.png" alt="Jessica Smith">
                    <div class="w-100 ms-3">
                      Jessica Smith
                      <div class="d-flex mt-2">
                        <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                          aria-valuemin="0" aria-valuemax="100">
                          <div class="progress-bar bg-primary text-white" style="width: 50%"></div>
                        </div>
                        <span class="ms-3">50</span>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mb-3">
                    <img src="@/src/assets/img-avatar-agent.png" alt="Jessica Smith">
                    <div class="w-100 ms-3">
                      Jessica Smith
                      <div class="d-flex mt-2">
                        <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                          aria-valuemin="0" aria-valuemax="100">
                          <div class="progress-bar bg-primary text-white" style="width: 50%"></div>
                        </div>
                        <span class="ms-3">50</span>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mb-3">
                    <img src="@/src/assets/img-avatar-agent.png" alt="Jessica Smith">
                    <div class="w-100 ms-3">
                      Jessica Smith
                      <div class="d-flex mt-2">
                        <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                          aria-valuemin="0" aria-valuemax="100">
                          <div class="progress-bar bg-primary text-white" style="width: 50%"></div>
                        </div>
                        <span class="ms-3">50</span>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center ">
                    <img src="@/src/assets/img-avatar-agent.png" alt="Jessica Smith">
                    <div class="w-100 ms-3">
                      Jessica Smith
                      <div class="d-flex mt-2">
                        <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                          aria-valuemin="0" aria-valuemax="100">
                          <div class="progress-bar bg-primary text-white" style="width: 50%"></div>
                        </div>
                        <span class="ms-3">50</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div class="col">
          <div class="card mb-4">
            <div class="card-header">
              <h4 class="card-title pt-4 pb-2">Onboarding Results</h4>
            </div>
            <div class="card-body">
              <div class="mb-3">
                Average Questionnaire Scorecard
                <div class="d-flex mt-2">
                  <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                    aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar bg-primary text-white" style="width: 87%"></div>
                  </div>
                  <span class="ms-3">87%</span>
                </div>
              </div>
              <div class="mb-3">
                Average Discovery Call Assessment Grade
                <div class="d-flex mt-2">
                  <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                    aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar bg-primary text-white" style="width: 67%"></div>
                  </div>
                  <span class="ms-3">67%</span>
                </div>
              </div>
              <div class="mb-3">
                Average Practical Assessment Grade
                <div class="d-flex mt-2">
                  <div class="progress w-100" role="progressbar" aria-label="Example 2px high" aria-valuenow="50"
                    aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar bg-primary text-white" style="width: 91%"></div>
                  </div>
                  <span class="ms-3">91%</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>


  </NuxtLayout>
</template>