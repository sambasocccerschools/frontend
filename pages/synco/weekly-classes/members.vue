
<script>
export default {
  data: () => ({
    panel: false
  })
}
</script>

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

        <table class="table table-hover table-sm border rounded-4 shadow-sm mt-4">
          <thead class="rounded-top-4">
            <tr class="table-light ">
              <!-- <th scope="col">Checkbox</th> -->
              <th scope="col">
                <input class="form-check-input" type="checkbox" value="" id="all-table">
                <label class="form-check-label ms-3 text-muted" for="all-table">
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
          <tbody class="">
            <tr class="align-middle">
              <th scope="row">
                <input class="form-check-input" type="checkbox" value="" id="tomjones">
                <label class="form-check-label ms-3 text-muted" for="tomjones">
                  Tom Jones
                </label>
              </th>
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
            </tr>

          </tbody>
        </table>

      </div>
      <div class="col">
        <!-- Search Now  -->
        <div class="card mb-4">
          <div class="card-header d-flex flex-column ">
            <h5 class="card-title h2 my-3">Search now</h5>
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
          <div class="card-body">

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
                <div class="row row-cols-3">
                  <div class="form-check col">
                    <input class="form-check-input" type="radio" name="filter-type" id="twelvemonths">
                    <label class="form-check-label" for="twelvemonths">
                      12 Months
                    </label>
                  </div>
                  <div class="form-check col">
                    <input class="form-check-input" type="radio" name="filter-type" id="sixmonths">
                    <label class="form-check-label" for="sixmonths">
                      6 Months
                    </label>
                  </div>
                  <div class="form-check col">
                    <input class="form-check-input" type="radio" name="filter-type" id="lifecycle">
                    <label class="form-check-label" for="lifecycle">
                      Lifecycle
                    </label>
                  </div>
                  <div class="form-check col">
                    <input class="form-check-input" type="radio" name="filter-type" id="flexiplan">
                    <label class="form-check-label" for="flexiplan">
                      Flexi plan
                    </label>
                  </div>
                  <div class="form-check col">
                    <input class="form-check-input" type="radio" name="filter-type" id="agentname">
                    <label class="form-check-label" for="agentname">
                      Agent name
                    </label>
                  </div>


                </div>
              </div>
            </div>

            <!-- Calendar Selector  -->
            Calendar Goes Here

          </div>
        </div>

        <div class="mt-4 row row-cols-3">
          <div class="col"><button class="btn btn-outline-secondary w-100">
              <Icon name="mdi:email-outline" class="me-2" />Send Email
            </button></div>
          <div class="col"><button class="btn btn-outline-secondary w-100">
              <Icon name="ic:round-text-format" class="me-2" />Send Text
            </button></div>
          <div class="col"><button class="btn btn-primary text-light w-100">
              <Icon name="ph:download-simple-bold" class="me-2" />Export data
            </button></div>
        </div>


      </div>
    </div>

  </NuxtLayout>
</template>