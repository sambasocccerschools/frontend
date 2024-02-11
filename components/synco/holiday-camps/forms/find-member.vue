<script>
export default {
  data: () => ({
    // This will be an array
    camps: 8,
  }),
}
</script>

<template>
  <form>
    <!-- Filter By Date  -->
    <div class="card">
      <div class="card-header d-flex flex-column">
        <h5
          class="card-title h4 d-flex align-items-center justify-content-between mb-4"
        >
          Search now
          <Icon name="octicon:settings" class="me-2" />
        </h5>
        <!-- <button class="btn btn-primary btn-sm text-light shadow-sm">Apply Filter</button> -->
        <div class="input-group mb-3">
          <span id="search-addon" class="input-group-text">
            <Icon name="ic:baseline-search" />
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Search camps..."
            aria-label="Search camps"
            aria-describedby="search-addon"
          />
        </div>
      </div>

      <ul class="list-group">
        <SyncoHolidayCampsCampListItem v-for="camp in camps" />
      </ul>
    </div>
  </form>
</template>
