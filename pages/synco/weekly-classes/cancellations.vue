<template>
  <NuxtLayout name="syncolayout" pageTitle="Cancellations">

    <div class="row">
      <div class="col-sm-8">
        <div class="row row-cols-sm-4">
          <SyncoDashboardMetricsItem name="Total Requests" value="22" change="-P200 p/m" icon="ph:users-three" />
          <SyncoDashboardMetricsItem name="Membership Tenure" value="9 Months" change="100" icon="ph:users-three" />
          <SyncoDashboardMetricsItem name="Top Reasons for request to cancel" value="Price" change=""
            icon="ph:users-three" />
          <SyncoDashboardMetricsItem name="Venue with most requests" value="Acton" change="" icon="ph:users-three" />
        </div>

        <!-- <div class="d-flex justify-content-end py-3">

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
        </div> -->

        <table class="table table-hover border rounded-4 mt-4">
          <thead class="rounded-top-4">
            <tr class="table-light">
              <!-- <th scope="col">Checkbox</th> -->
              <th scope="col">
                <input class="form-check-input" type="checkbox" value="" id="all-table">
              </th>
              <th scope="col">
                <label class="form-check-label text-muted" for="all-table">
                  Parent name
                </label>
              </th>
              <th class="text-muted" scope="col">Number of Student</th>
              <th class="text-muted" scope="col">Venue</th>
              <th class="text-muted" scope="col">Date booked</th>
              <th class="text-muted" scope="col">Date of request</th>
              <th class="text-muted" scope="col">Reason</th>
              <th class="text-muted" scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <LazySyncoWeeklyClassesCancellationsTableItem />
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
              <label for="" class="form-label">Status</label>
              <div class="container">
                <div class="row row-cols-2">
                  <div class="form-check col">
                    <input class="form-check-input" type="radio" name="filter-type" id="request-to-cancel">
                    <label class="form-check-label" for="request-to-cancel">
                      Request to cancel
                    </label>
                  </div>
                  <div class="form-check col">
                    <input class="form-check-input" type="radio" name="filter-type" id="cancelled">
                    <label class="form-check-label" for="cancelled">
                      Cancelled
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