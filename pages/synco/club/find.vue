<script>
export default {
  data: () => ({
    clubs: 10,
  }),
}
</script>
<template>
  <NuxtLayout name="syncolayout" page-title="Club Bookings">
    <div class="card text-light" style="background-color: #fe6e4e">
      <div class="card-body p-4">
        <span class="h2">
          <Icon name="ion:ios-football-outline" class="h1 mb-1" /> Find a Club
        </span>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-sm-3">
        <SyncoClubFormsFindClub />
      </div>
      <div class="col">
        <SyncoClubListItem v-for="club in clubs" />
      </div>
    </div>
  </NuxtLayout>
</template>
