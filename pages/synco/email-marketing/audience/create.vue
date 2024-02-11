<script>
export default {
  data: () => ({
    // audiences: 8
  }),
}
</script>

<template>
  <NuxtLayout name="syncolayout" page-title="Audience">
    <div class="card">
      <div class="card-body p-5">
        <h2 class="mb-5">
          <NuxtLink to="/synco/email-marketing/audience">
            <Icon
              name="material-symbols:arrow-left-alt"
              class="text-dark me-2"
            />
          </NuxtLink>
          Create audience
        </h2>

        <form action="" class="mb-5">
          <div class="col-sm-5">
            <div class="form-group mb-3">
              <label for="title" class="form-label">Title</label>
              <input
                id="title"
                type="email"
                class="form-control form-control-lg"
                aria-describedby="titleHelp"
              />
              <!-- <div id="titleHelp" class="form-text">We'll never share your email with anyone else.</div> -->
            </div>
            <div class="form-group mb-3">
              <label for="time-period" class="form-label">Title</label>

              <select
                id="time-period"
                class="form-select form-select-lg"
                aria-label="timeperiod"
              >
                <option selected disabled>Time period</option>
                <option value="1">Last Month</option>
              </select>
            </div>

            <div class="form-group mb-3">
              <label for="venue" class="form-label">Venue</label>

              <select
                id="venue"
                class="form-select form-select-lg"
                aria-label="venue"
              >
                <option selected disabled>Select audience venue</option>
                <option value="1">Venue</option>
              </select>
            </div>

            <div class="form-group mb-3">
              <label for="services" class="form-label">Services</label>

              <select
                id="services"
                class="form-select form-select-lg"
                aria-label="services"
              >
                <option selected disabled>All</option>
                <option value="1">Last Month</option>
              </select>
            </div>

            <div class="form-group mb-3">
              <label for="membership-status" class="form-label"
                >Membership status</label
              >

              <select
                id="membership-status"
                class="form-select form-select-lg"
                aria-label="membership-status"
              >
                <option selected disabled>All</option>
                <option value="1">Last Month</option>
              </select>
            </div>

            <div class="form-group d-flex">
              <button class="btn btn-outline-secondary btn-lg w-100 me-2">
                Cancel
              </button>
              <button class="btn btn-lg btn-primary w-100 text-light ms-2">
                Create audience
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </NuxtLayout>
</template>
