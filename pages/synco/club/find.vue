<script>
export default {
  data: () => ({
    clubs: 10,
  })
}
</script>
<template>
  <NuxtLayout name="syncolayout" pageTitle="Club Bookings">

    <div class="card text-light" style="background-color: #FE6E4E">
      <div class="card-body p-4">
        <span class="h2">
          <Icon name="ion:ios-football-outline" class="mb-1 h1" /> Find a Club
        </span>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-sm-3 ">
        <SyncoClubFormsFindClub />
      </div>
      <div class="col">
        <SyncoClubListItem v-for="club in clubs" />
      </div>
    </div>
  </NuxtLayout>
</template>