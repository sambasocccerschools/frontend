<template>
  <div class="h-100 border-end border-1 border-secondary d-flex flex-column py-5 px-4" style="width:18rem">
    <div class="text-center mb-4">
      <img src="@/src/assets/sss-logo-synco-black.png" alt="Synco logo" class="w-50">
    </div>
    <NuxtLink to="/synco/dashboard" exact-active-class="btn-nav-active" class="btn-nav">
      [] Dashboard
    </NuxtLink>
    <!-- Weekly Classes -->
    <NuxtLink to="/synco/weekly-classes/" class="btn-nav disabled border-0" active-class="btn-nav-active">
      [] Weekly Classes >
    </NuxtLink>
    <ul class="ms-4">
      <li>
        <NuxtLink to="/synco/weekly-classes/find-a-class" class="btn-nav-link" exact-active-class="text-primary">
          Find a class
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/synco/weekly-classes/members" class="btn-nav-link" exact-active-class="text-primary">
          Members
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/synco/weekly-classes/sales" class="btn-nav-link" exact-active-class="text-primary">Sales
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/synco/weekly-classes/trials" class="btn-nav-link" exact-active-class="text-primary">Trials
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/synco/weekly-classes/cancellation" class="btn-nav-link" exact-active-class="text-primary">
          Cancellation
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/synco/weekly-classes/waiting-list" class="btn-nav-link" exact-active-class="text-primary">
          Waiting
          List
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/synco/weekly-classes/leads-database" class="btn-nav-link" exact-active-class="text-primary">
          Leads
          Database
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/synco/weekly-classes/capacity" class="btn-nav-link" exact-active-class="text-primary">
          Capacity
        </NuxtLink>
      </li>
    </ul>


    <NuxtLink to="/synco/venues">Venues</NuxtLink>
    <NuxtLink to="/synco">Logout</NuxtLink>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/styles/synco/synco.scss';

.btn-nav {
  @extend .btn;
  @extend .btn-lg;
  @extend .py-3;
  @extend .text-start;

  &-link {
    @extend .py-2;
    @extend .btn-link;
    @extend .ps-0;
    @extend .d-inline-block;
  }

  &-active {
    @extend .btn-primary;
    @extend .text-light;
    @extend .rounded-4;
    box-shadow: 4px 6px 12px 0px rgba(35, 127, 234, 0.25);
  }
}
</style>