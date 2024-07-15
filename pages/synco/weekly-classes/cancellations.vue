<template>
  <NuxtLayout name="syncolayout" page-title="Cancellations">
    <div class="row">
      <div class="col-sm-8">
        <div class="row mb-3">
          <div class="col">
            <ul class="nav nav-pills">
              <li class="nav-item rounded-3 me-2">
                <a class="nav-link active" aria-current="page" href="#"
                  >Request to cancel</a
                >
              </li>
              <li class="nav-item rounded-3 me-2 border">
                <a class="nav-link text-dark" href="#">Full Cancellation</a>
              </li>
              <li class="nav-item rounded-3 border">
                <a class="nav-link text-dark" href="#">All</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="row row-cols-sm-4">
          <SyncoDashboardMetricsItem
            name="Total Requests"
            value="22"
            change="-P200 p/m"
            icon="ph:users-three"
          />
          <SyncoDashboardMetricsItem
            name="Membership Tenure"
            value="9 Months"
            change="100"
            icon="ph:users-three"
          />
          <SyncoDashboardMetricsItem
            name="Top Reasons for request to cancel"
            value="Price"
            change=""
            icon="ph:users-three"
          />
          <SyncoDashboardMetricsItem
            name="Venue with most requests"
            value="Acton"
            change=""
            icon="ph:users-three"
          />
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

        <h4 class="mt-4">Request to cancel</h4>

        <div>
          <SyncoDataOptions />
        </div>
        <table class="table-hover rounded-4 mt-4 table border">
          <thead class="rounded-top-4">
            <tr class="table-light">
              <!-- <th scope="col">Checkbox</th> -->
              <th scope="col">
                <input
                  id="all-table"
                  class="form-check-input"
                  type="checkbox"
                  value=""
                />
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
        <SyncoWeeklyClassesFormsFindCancellation />
      </div>
    </div>
  </NuxtLayout>
</template>
