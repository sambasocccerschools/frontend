<template>
  <NuxtLayout name="syncolayout" page-title="Capacity">
    <div class="row mb-4">
      <div class="col-sm-4 d-flex flex-column justify-content-between">
        <h4>Weekly Classes</h4>
        <div class="d-flex">
          <SyncoFiltersSelectVenuesDropdown />
          <span class="ms-4">
            <SyncoFiltersFilterVenuesDropdown />
          </span>
        </div>
      </div>
      <div class="col d-flex justify-content-end">
        <div class="d-flex flex-column align-items-end me-3">
          <button
            class="btn btn-primary text-light rounded-3 d-flex align-items-center"
          >
            <Icon name="ph:download-simple-bold" class="me-2" />Export data
          </button>
          <div class="d-flex mt-auto pb-2">
            <div class="d-flex align-items-center">
              Total Capacity
              <span class="indicator-square bg-light border"></span>
            </div>
            <div class="d-flex align-items-center ms-3">
              Capacity left <span class="indicator-square bg-danger"></span>
            </div>
            <div class="d-flex align-items-center ms-3">
              Free Trials <span class="indicator-square bg-warning"></span>
            </div>
            <div class="d-flex align-items-center ms-3">
              Members <span class="indicator-square bg-primary"></span>
            </div>
          </div>
        </div>

        <div class="card bg-primary text-bg-dark rounded-4 shadow-primary">
          <div class="card-body d-flex p-4">
            <div class="d-flex flex-column">
              <span class="h4">Total</span>
              <span>1654 Booked of 2040 Spaces</span>
            </div>
            <div>CHART</div>
          </div>
        </div>
      </div>
    </div>

    <SyncoWeeklyClassesCapacityListItem />
    <SyncoWeeklyClassesCapacityListItem />
    <SyncoWeeklyClassesCapacityListItem />
    <SyncoWeeklyClassesCapacityListItem />
    <SyncoWeeklyClassesCapacityListItem />
    <SyncoWeeklyClassesCapacityListItem />
    <SyncoWeeklyClassesCapacityListItem />
    <SyncoWeeklyClassesCapacityListItem />
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.indicator-square {
  height: 1.5rem;
  width: 1.5rem;
  display: inline-block;
  border-radius: 0.5rem;
  margin-left: 0.5rem;
}

.shadow-primary {
  box-shadow: 4px 6px 12px 0px rgba(35, 127, 234, 0.25);
}
</style>
