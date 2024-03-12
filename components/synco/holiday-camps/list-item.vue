<template>
  <!-- Holiday Camps -->
  <div class="card rounded-4 mb-3 border p-2">
    <div
      class="rounded-4 bg-secondary text-light d-flex align-items-center justify-content-between px-4 py-3"
    >
      <div>
        <Icon name="material-symbols:location-on" class="h1" />The King Fahad
        Academy, East Acton Lane, London W3 7HD
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
      class="card-body bg-muted rounded-4 d-flex align-items-start text-muted mt-3 px-4"
      style="background: #f6f6f7"
    >
      <div class="border-end border-muted border-1 d-flex flex-column pe-4">
        <span class="h4">Acton</span>
        <small>2 miles</small>
      </div>
      <div class="order-end border-muted border-1 d-flex flex-column px-4">
        <span class="h5">1st Nov - 4th Nov 2023</span>
        <small>4 Days</small>
      </div>
      <div class="w-100">
        <!-- These depend on the classes per venue -->
        <!--  -->
        <div
          class="border-bottom border-1 border-muted d-flex justify-content-between align-items-center pb-2"
        >
          <div class="d-flex align-items-center justify-content-center gap-3">
            <span class="h6 text-semibold m-0">Group 1</span>
            <span class="">4-7 years</span>
            <span>9:30am-10:30am</span>
            <span
              class="bg-danger-subtle text-danger d-flex align-items-center rounded-3 px-2"
              >Fully Booked</span
            >
          </div>
          <div class="">
            <NuxtLink
              to="/synco/holiday-camps/create/waiting-list"
              class="btn btn-primary btn-sm text-light"
              ><strong>Add to Waiting List</strong></NuxtLink
            >
          </div>
        </div>
        <!--  -->
        <div class="d-flex justify-content-between align-items-center mt-2">
          <div class="d-flex align-items-center justify-content-center gap-3">
            <span class="h6 text-semibold m-0">Group 2</span>
            <span class="">8-12 years</span>
            <span>10:30am-11:30am</span>
            <span
              class="bg-success-subtle text-success d-flex align-items-center rounded-3 px-2"
              >+4 spaces</span
            >
          </div>
          <div class="d-flex align-items-center">
            <NuxtLink
              to="/synco/holiday-camps/create/holiday-camp"
              class="btn btn-outline-dark btn-sm"
            >
              <strong>Book a Holiday Camp</strong>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
