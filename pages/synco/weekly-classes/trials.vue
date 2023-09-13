<template>
  <NuxtLayout name="syncolayout" pageTitle="Trials Information">

    <div class="row">
      <div class="col-sm-8">
        <div class="row row-cols-sm-4">
          <SyncoDashboardMetricsItem name="Total Free Trials" value="1920" change="+12" icon="ph:users-three" />
          <SyncoDashboardMetricsItem name="Top Performer" value="Abdul Ali" change="456" icon="ph:users-three" />
          <SyncoDashboardMetricsItem name="Free Trial Attendance" value="120" change="35" icon="ph:users-three" />
          <SyncoDashboardMetricsItem name="Trials to Members" value="57" change="45" icon="ph:users-three" />
        </div>

        <div class="d-flex justify-content-end py-3">

          <div class="btn-group">
            <button type="button" class="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown"
              aria-expanded="false">
              <Icon name="material-symbols:person-add" />
            </button>
            <div class="dropdown-menu dropdown-menu-end border-0">
              <li>
                <h6 class="dropdown-header">Select Agent</h6>
              </li>

              <form class="px-4 py-3">
                <div class="form-check mb-3 d-flex align-items-center">
                  <input type="checkbox" class="form-check-input me-2" id="agent-1">
                  <label class="form-check-label" for="agent-1">
                    <img src="@/src/assets/img-avatar-jaffar.png" alt="jaffar">
                    Jaffar
                  </label>
                </div>
                <div class="form-check mb-3 d-flex align-items-center">
                  <input type="checkbox" class="form-check-input me-2" id="agent-2">
                  <label class="form-check-label" for="agent-2">
                    <img src="@/src/assets/img-avatar-jaffar.png" alt="jaffar">

                    Jaffar
                  </label>
                </div>
                <button type="submit" class="btn btn-primary w-100 text-light">Next</button>
              </form>
            </div>
          </div>
        </div>

        <table class="table table-hover border rounded-4 ">
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
              <th class="text-muted" scope="col">Date of Trial</th>
              <th class="text-muted" scope="col">Source</th>
              <th class="text-muted" scope="col">Attempts</th>
              <th class="text-muted" scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <LazySyncoWeeklyClassesTrialsTableItem />
          </tbody>
        </table>

      </div>
      <div class="col">
        <!-- Search Now  -->
        <div class="card mb-4">
          <div class="card-header d-flex flex-column ">
            <h5 class="card-title h2 my-3">Search now</h5>
          </div>
          <div class="card-body">
            <div class="form-group mb-3">
              <label for="search-student" class="form-label">Search Student</label>
              <div class="input-group mb-3">
                <span class="input-group-text" id="search-student">
                  <Icon name="ic:baseline-search" />
                </span>
                <input type="text" class="form-control" placeholder="Search by student name"
                  aria-label="Search by student name" aria-describedby="search-addon">
              </div>
            </div>
            <div class="form-group">
              <label for="choose-venue" class="form-label">Venue</label>
              <select class="form-select" aria-label="choose-venue">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Filter By Date  -->
        <div class="card">
          <div class="card-header d-flex justify-content-between">
            <h5 class="card-title">Filter by date</h5>
            <button class="btn btn-primary btn-sm text-light shadow-sm">
              <Icon name="octicon:settings" class="me-2" />Apply Filter
            </button>
          </div>
          <div class="card-body">
            <!-- Choose Type -->
            <div class="bg-light rounded-4 px-3 py-2 mb-5">
              <label for="" class="form-label">Choose type</label>
              <div class="container">
                <div class="row row-cols-2">
                  <div class="form-check col">
                    <input class="form-check-input" type="radio" name="filter-type" id="attended">
                    <label class="form-check-label" for="attended">
                      Attended
                    </label>
                  </div>
                  <div class="form-check col">
                    <input class="form-check-input" type="radio" name="filter-type" id="not-attended">
                    <label class="form-check-label" for="not-attended">
                      Not attended
                    </label>
                  </div>
                  <div class="form-check col">
                    <input class="form-check-input" type="radio" name="filter-type" id="date-booked">
                    <label class="form-check-label" for="date-booked">
                      Date Booked
                    </label>
                  </div>
                  <div class="form-check col">
                    <input class="form-check-input" type="radio" name="filter-type" id="trial-date">
                    <label class="form-check-label" for="trial-date">
                      Date of Trial
                    </label>
                  </div>
                  <div class="form-check col">
                    <input class="form-check-input" type="radio" name="filter-type" id="agentname">
                    <label class="form-check-label" for="agentname">
                      Agent
                    </label>
                  </div>


                </div>
              </div>
            </div>

            <!-- Calendar Selector  -->
            <SyncoFilterByCalendar />

          </div>
        </div>

        <SyncoDataOptions />
      </div>
    </div>

  </NuxtLayout>
</template>