
import { SyncoFiltersFilterWeeklyClassesForm } from '.nuxt/components';

<template>
  <NuxtLayout name="syncolayout" pageTitle="Weekly Classes">

    <div class="card bg-success bg-gradient text-bg-dark">
      <div class="card-body">
        <span class="h3">
          <Icon name="ic:baseline-search" /> Find a Class
        </span>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-sm-3 ">
        <SyncoWeeklyClassesFormsFindClass />
      </div>
      <div class="col">
        <SyncoBookingListItem activity="weekly-class" />
        <SyncoBookingListItem activity="weekly-class" />
        <SyncoBookingListItem activity="weekly-class" />
        <SyncoBookingListItem activity="weekly-class" />
        <SyncoBookingListItem activity="weekly-class" />
        <SyncoBookingListItem activity="weekly-class" />
        <SyncoBookingListItem activity="weekly-class" />
        <SyncoBookingListItem activity="weekly-class" />
        <SyncoBookingListItem activity="weekly-class" />
        <SyncoBookingListItem activity="weekly-class" />
      </div>
    </div>
  </NuxtLayout>
</template>