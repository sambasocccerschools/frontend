<template>
  <div>
    <!-- Configuration  -->
    <button class="btn btn-nav" type="button" data-bs-toggle="collapse" data-bs-target="#collapseConfiguration"
      aria-expanded="false" aria-controls="collapseConfiguration">
      <Icon name="solar:settings-outline" />Configuration
      <Icon name="pajamas:chevron-down" />
    </button>
    <ul class="ms-2 collapse show" id="collapseConfiguration">
      <li>
        <!-- Configuration > Weekly Classes  -->
        <button class="btn btn-nav-link" type="button" data-bs-toggle="collapse"
          data-bs-target="#collapseConfWeeklyClasses" aria-expanded="false" aria-controls="collapseConfWeeklyClasses">
          Weekly Classes
          <Icon name="pajamas:chevron-down" />
        </button>
        <ul class="ps-4 collapse show" id="collapseConfWeeklyClasses">
          <li>
            <NuxtLink to="/synco/config/venues/create" class="btn-nav-link" exact-active-class="text-primary">
              Add a Venue
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/synco/config/venues/terms" class="btn-nav-link" exact-active-class="text-primary">
              Terms
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/synco/config/venues/session-plans" class="btn-nav-link" exact-active-class="text-primary">
              Session plans
            </NuxtLink>
          </li>
        </ul>
      </li>



    </ul>
  </div>
</template>