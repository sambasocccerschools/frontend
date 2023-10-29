<template>
  <div>
    <!-- Configuration  -->
    <button class="btn btn-nav" type="button" data-bs-toggle="collapse" data-bs-target="#collapseConfiguration"
      aria-expanded="false" aria-controls="collapseConfiguration">
      <Icon name="solar:settings-outline" />Configuration
      <Icon name="pajamas:chevron-down" />
    </button>
    <ul class="ms-2 collapse show" id="collapseConfiguration">
      <!-- Config > Weekly Classes  -->
      <li>
        <button class="btn btn-nav-link" type="button" data-bs-toggle="collapse"
          data-bs-target="#collapseConfWeeklyClasses" aria-expanded="false" aria-controls="collapseConfWeeklyClasses">
          Weekly Classes
          <Icon name="pajamas:chevron-down" />
        </button>
        <ul class="ps-4 collapse show" id="collapseConfWeeklyClasses">
          <li>
            <NuxtLink to="/synco/config/weekly-classes/venues" class="btn-nav-link" exact-active-class="text-primary">
              Add a Venue
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/synco/config/weekly-classes/terms" class="btn-nav-link" exact-active-class="text-primary">
              Terms
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/synco/config/weekly-classes/session-plans" class="btn-nav-link"
              exact-active-class="text-primary">
              Session plans
            </NuxtLink>
          </li>
        </ul>
      </li>
      <!-- Config > Holiday Camps  -->
      <li>
        <button class="btn btn-nav-link" type="button" data-bs-toggle="collapse"
          data-bs-target="#collapseConfHolidayCamps" aria-expanded="false" aria-controls="collapseConfHolidayCamps">
          Holiday Camps
          <Icon name="pajamas:chevron-down" />
        </button>
        <ul class="ps-4 collapse show" id="collapseConfHolidayCamps">
          <li>
            <NuxtLink to="/synco/config/holiday-camps/venues/create" class="btn-nav-link"
              exact-active-class="text-primary">
              Add a Venue
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/synco/config/holiday-camps/dates" class="btn-nav-link" exact-active-class="text-primary">
              Dates
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/synco/config/holiday-camps/session-plans" class="btn-nav-link"
              exact-active-class="text-primary">
              Session plans
            </NuxtLink>
          </li>
        </ul>
      </li>

      <!-- Config > Birthday Parties  -->
      <li>
        <button class="btn btn-nav-link" type="button" data-bs-toggle="collapse"
          data-bs-target="#collapseConfBirthdayParties" aria-expanded="false" aria-controls="collapseConfBirthdayParties">
          Birthday Parties
          <Icon name="pajamas:chevron-down" />
        </button>
        <ul class="ps-4 collapse show" id="collapseConfBirthdayParties">
          <li>
            <NuxtLink to="/synco/config/birthday-parties/session-plans" class="btn-nav-link"
              exact-active-class="text-primary">
              Session Plans
            </NuxtLink>
          </li>

        </ul>
      </li>

      <!-- Config > Club  -->
      <li>
        <!-- <button class="btn btn-nav-link" type="button" data-bs-toggle="collapse"
          data-bs-target="#collapseConfBirthdayParties" aria-expanded="false" aria-controls="collapseConfBirthdayParties">
          Birthday Parties
          <Icon name="pajamas:chevron-down" />
        </button> -->
        <NuxtLink to="/synco/config/club" class="btn-nav-link" exact-active-class="text-primary">
          Club
        </NuxtLink>

      </li>

      <!-- Config > Coach Pro  -->
      <li>
        <button class="btn btn-nav-link" type="button" data-bs-toggle="collapse" data-bs-target="#collapseConfCoachPro"
          aria-expanded="false" aria-controls="collapseConfCoachPro">
          Coach Pro
          <Icon name="pajamas:chevron-down" />
        </button>
        <ul class="ps-4 collapse show" id="collapseConfCoachPro">
          <li>
            <NuxtLink to="/synco/config/coachpro/coaches" class="btn-nav-link" exact-active-class="text-primary">
              Coach profile
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/synco/config/coachpro/contract" class="btn-nav-link" exact-active-class="text-primary">
              Contract
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/synco/config/coachpro/music" class="btn-nav-link" exact-active-class="text-primary">
              Music
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/synco/config/coachpro/courses" class="btn-nav-link" exact-active-class="text-primary">
              Courses
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/synco/config/coachpro/issues" class="btn-nav-link" exact-active-class="text-primary">
              Issues List
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/synco/config/coachpro/referrals" class="btn-nav-link" exact-active-class="text-primary">
              Referrals
            </NuxtLink>
          </li>

        </ul>
      </li>

      <!-- Config > Parent Connect  -->
      <li>
        <button class="btn btn-nav-link" type="button" data-bs-toggle="collapse"
          data-bs-target="#collapseConfParentConnect" aria-expanded="false" aria-controls="collapseConfParentConnect">
          Parent Connect
          <Icon name="pajamas:chevron-down" />
        </button>
        <ul class="ps-4 collapse show" id="collapseConfParentConnect">
          <li>
            <NuxtLink to="/synco/config/parent-connect/courses/create" class="btn-nav-link"
              exact-active-class="text-primary">
              Create a course
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/synco/config/parent-connect/courses" class="btn-nav-link" exact-active-class="text-primary">
              List of Courses
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/synco/config/parent-connect/loyalty-points" class="btn-nav-link"
              exact-active-class="text-primary">
              Loyalty Points
            </NuxtLink>
          </li>

        </ul>
      </li>

      <!-- Config > Recruitment  -->
      <li>
        <button class="btn btn-nav-link" type="button" data-bs-toggle="collapse" data-bs-target="#collapseConfRecruitment"
          aria-expanded="false" aria-controls="collapseConfRecruitment">
          Recruitment
          <Icon name="pajamas:chevron-down" />
        </button>
        <ul class="ps-4 collapse show" id="collapseConfRecruitment">
          <li>
            <NuxtLink to="/synco/config/recruitment/scripts" class="btn-nav-link" exact-active-class="text-primary">
              Scripts
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/synco/config/recruitment/franchise-questions" class="btn-nav-link"
              exact-active-class="text-primary">
              Franchise Questions
            </NuxtLink>
          </li>
        </ul>
      </li>

      <!-- Config > Pathway  -->
      <li>
        <button class="btn btn-nav-link" type="button" data-bs-toggle="collapse" data-bs-target="#collapseConfPathway"
          aria-expanded="false" aria-controls="collapseConfPathway">
          Pathway
          <Icon name="pajamas:chevron-down" />
        </button>
        <ul class="ps-4 collapse show" id="collapseConfPathway">
          <li>
            <NuxtLink to="/synco/config/pathway/venues" class="btn-nav-link" exact-active-class="text-primary">
              Add a venue
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/synco/config/pathway/courses" class="btn-nav-link" exact-active-class="text-primary">
              Add a course
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/synco/config/pathway/students" class="btn-nav-link" exact-active-class="text-primary">
              Students
            </NuxtLink>
          </li>
        </ul>
      </li>




    </ul>
  </div>
</template>