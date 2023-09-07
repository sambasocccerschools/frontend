<template>
  <div
    class="vh-100 border-end border-1 border-secondary-subtle d-flex flex-column py-4 px-3 bg-white overflow-y-scroll justify-content-between"
    style="width:auto">
    <div>
      <div class="text-center mb-4">
        <img src="@/src/assets/sss-logo-synco-black.png" alt="Synco logo" class="w-50">
      </div>

      <NuxtLink to="/synco/dashboard" exact-active-class="btn-nav-active" class="btn-nav">
        <Icon name="akar-icons:grid" /> Dashboard
      </NuxtLink>

      <!-- Weekly Classes -->
      <button class="btn btn-nav" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWeeklyClasses"
        aria-expanded="false" aria-controls="collapseWeeklyClasses">
        <Icon name="ph:book-open-bold" />Weekly Classes
        <Icon name="pajamas:chevron-down" />
      </button>
      <ul class="ms-4 collapse " id="collapseWeeklyClasses">
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

      <NuxtLink to="/synco/one-to-one" exact-active-class="btn-nav-active" class="btn-nav">
        <Icon name="ph:book-open-bold" /> One to One
      </NuxtLink>

      <NuxtLink to="/synco/venues" exact-active-class="btn-nav-active" class="btn-nav">
        <Icon name="ph:map-pin" /> Venues
      </NuxtLink>
    </div>


    <NuxtLink to="/synco" class="btn btn-outline-dark"><span>Logout</span></NuxtLink>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/styles/synco/synco.scss';

.btn-nav {
  @extend .btn;
  // @extend .btn-lg;
  @extend .py-3;
  text-align: start;
  align-items: center;
  display: flex;
  gap: .5rem;
  font-size: $font-size-lg;

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
    @extend .mb-1;
  }
}
</style>