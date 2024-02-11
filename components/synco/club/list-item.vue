<script>
export default {
  props: [
    // 'activity' // weekly-class , holiday-camp
  ],
}
</script>

<template>
  <!-- Club -->
  <div class="card rounded-4 mb-3 border p-2">
    <div
      class="rounded-4 bg-secondary text-light d-flex align-items-center justify-content-between px-4 py-3"
    >
      <div>
        <Icon name="material-symbols:location-on" class="h1" />Camden Youth
        League - Under 8’s
      </div>
      <div class="d-flex gap-3">
        <button class="btn btn-light rounded-circle btn-sm">
          <Icon name="mingcute:currency-pound-2-fill" />
        </button>
        <button class="btn btn-light rounded-circle btn-sm">
          <Icon name="material-symbols:calendar-month" />
        </button>
        <button class="btn btn-light rounded-circle btn-sm">
          <Icon name="material-symbols:location-on" />
        </button>
        <button class="btn btn-light rounded-circle btn-sm">
          <Icon name="tdesign:letters-c" />
        </button>
        <button class="btn btn-light rounded-circle btn-sm">
          <Icon name="material-symbols:local-parking" />
        </button>
      </div>
    </div>
    <div
      class="card-body bg-muted rounded-4 text-muted mt-3 px-4"
      style="background: #f6f6f7"
    >
      <div class="row row-cols-4">
        <div
          class="col border-end border-muted border-1 d-flex flex-column pe-4"
        >
          <span class="h4">Training</span>
          <div>
            <small class="d-flex align-items-center">
              <Icon name="mdi:map-marker" class="h5 me-1 mt-2" /> King Solomon
              Academy
            </small>
            <small class="d-flex align-items-start">
              <Icon name="material-symbols:calendar-month" class="h5 me-1" />
              Wednesday <br />
              Outdoor
            </small>
            <small class="d-flex align-items-center">
              <Icon name="ic:outline-access-time-filled" class="h5 me-1 mt-2" />
              9:30am - 10:30am
            </small>
          </div>
        </div>
        <div class="col d-flex flex-column pe-4">
          <span class="h4">Matches</span>
          <div>
            <small class="d-flex align-items-center">
              <Icon name="mdi:map-marker" class="h5 me-1 mt-2" /> Corams Field
            </small>
            <small class="d-flex align-items-start">
              <Icon name="material-symbols:calendar-month" class="h5 me-1" />
              Saturdays <br />
              Alternative
            </small>
            <small class="d-flex align-items-center">
              <Icon name="ic:outline-access-time-filled" class="h5 me-1 mt-2" />
              ---
            </small>
          </div>
        </div>
        <div
          class="col border-start border-end border-muted border-1 d-flex flex-column px-4"
        >
          <span class="h4">Capacity</span>
          <div class="d-flex justify-content-between">
            <div>
              <small class="d-flex align-items-center text-semibold">
                Total
              </small>
              <small class="d-flex align-items-start">
                86 Booked of 125 Spaces
              </small>
              <small class="badge bg-success-subtle text-success">
                +4 spaces
              </small>
            </div>
            <div><small>Chart Goes Here</small></div>
          </div>
        </div>
        <div class="col d-flex flex-column justify-content-around ps-4">
          <NuxtLink
            to="/synco/club/create/free-trial"
            class="btn btn-outline-dark btn-sm"
          >
            <strong>Book a Free Trial</strong>
          </NuxtLink>
          <NuxtLink
            to="/synco/club/create/membership"
            class="btn btn-primary text-light btn-sm"
          >
            <strong>Book a Membership</strong>
          </NuxtLink>
          <NuxtLink
            to="/synco/club/create/waiting-list"
            class="btn btn-primary btn-sm text-light"
          >
            <strong>Add to Waiting List</strong>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
