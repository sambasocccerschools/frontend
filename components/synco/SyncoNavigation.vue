<script lang="ts" setup>
import { useStore } from '~/stores'

const token = useCookie('token')
const href: any = useRoute()
const router = useRouter()
const store = useStore()
const { $api } = useNuxtApp()
const logout = async () => {
  const { data, error } = await $api.auth.logout()
  if (data.value) {
    store.updateAuthenticated(false)
    store.setUser(undefined)
    token.value = null
    router.push('/synco')
  }
  if (error.value) {
    console.log(error.value, 'data')
  }
}

const show = (path: any) => {
  if (href.includes(path)) return true
}
</script>

<template>
  <div
    class="vh-100 border-end border-1 border-secondary-subtle d-flex flex-column justify-content-between overflow-y-scroll bg-white py-4 pe-3 ps-2"
    style="width: auto"
  >
    <div>
      <div class="mb-4 text-center">
        <img
          src="@/src/assets/sss-logo-synco-black.png"
          alt="Synco logo"
          class="w-50"
        />
      </div>

      <NuxtLink
        to="/synco/dashboard"
        exact-active-class="btn-nav-active"
        class="btn-nav"
      >
        <Icon name="akar-icons:grid" /> Dashboard
      </NuxtLink>

      <!-- Weekly Classes -->
      <button
        class="btn btn-nav"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseWeeklyClasses"
        aria-expanded="false"
        aria-controls="collapseWeeklyClasses"
      >
        <Icon name="ph:book-open-bold" />Weekly Classes
        <Icon name="pajamas:chevron-down" />
      </button>
      <ul id="collapseWeeklyClasses" class="collapse ms-2">
        <li>
          <NuxtLink
            to="/synco/weekly-classes/find"
            class="btn-nav-link"
            exact-active-class="text-primary"
          >
            Find a class
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/synco/weekly-classes/members"
            class="btn-nav-link"
            exact-active-class="text-primary"
          >
            Members
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/synco/weekly-classes/sales"
            class="btn-nav-link"
            exact-active-class="text-primary"
            >Sales
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/synco/weekly-classes/trials"
            class="btn-nav-link"
            exact-active-class="text-primary"
            >Trials
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/synco/weekly-classes/cancellations"
            class="btn-nav-link"
            exact-active-class="text-primary"
          >
            Cancellation
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/synco/weekly-classes/waiting-list"
            class="btn-nav-link"
            exact-active-class="text-primary"
          >
            Waiting List
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/synco/weekly-classes/leads"
            class="btn-nav-link"
            exact-active-class="text-primary"
          >
            Leads Database
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/synco/weekly-classes/capacity"
            class="btn-nav-link"
            exact-active-class="text-primary"
          >
            Capacity
          </NuxtLink>
        </li>
      </ul>

      <!-- One to one  -->
      <NuxtLink
        to="/synco/one-to-one"
        exact-active-class="btn-nav-active"
        class="btn-nav"
      >
        <Icon name="ph:book-open-bold" /> One to One
      </NuxtLink>

      <!-- Holiday Camps  -->
      <button
        class="btn btn-nav"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseHolidayCamps"
        aria-expanded="false"
        aria-controls="collapseHolidayCamps"
      >
        <Icon name="ph:book-open-bold" />Holiday Camps
        <Icon name="pajamas:chevron-down" />
      </button>
      <ul id="collapseHolidayCamps" class="collapse ms-2">
        <li>
          <NuxtLink
            to="/synco/holiday-camps/find"
            class="btn-nav-link"
            exact-active-class="text-primary"
          >
            Find a camp
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/synco/holiday-camps/members"
            class="btn-nav-link"
            exact-active-class="text-primary"
          >
            Members
          </NuxtLink>
        </li>
      </ul>

      <!-- Birthday Parties  -->
      <NuxtLink
        to="/synco/birthday-parties"
        exact-active-class="btn-nav-active"
        class="btn-nav"
      >
        <Icon name="ph:cake-bold" /> Birthday parties
      </NuxtLink>

      <!-- Holiday Camps  -->
      <button
        class="btn btn-nav"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseClub"
        aria-expanded="false"
        aria-controls="collapseClub"
      >
        <Icon name="clarity:users-line" />Club
        <Icon name="pajamas:chevron-down" />
      </button>
      <ul id="collapseClub" class="collapse ms-2">
        <li>
          <NuxtLink
            to="/synco/club/find"
            class="btn-nav-link"
            exact-active-class="text-primary"
          >
            Find a club
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/synco/club/members"
            class="btn-nav-link"
            exact-active-class="text-primary"
          >
            Members
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/synco/club/leads"
            class="btn-nav-link"
            exact-active-class="text-primary"
          >
            Leads database
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/synco/club/waiting-list"
            class="btn-nav-link"
            exact-active-class="text-primary"
          >
            Waiting list
          </NuxtLink>
        </li>
      </ul>

      <!-- Email Management  -->
      <!-- <NuxtLink to="/synco/email-management" exact-active-class="btn-nav-active" class="btn-nav border-danger">
        <Icon name="material-symbols:folder-managed-outline" /> Email Management
      </NuxtLink> -->

      <!-- Surveys  -->
      <button
        class="btn btn-nav"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseSurveys"
        aria-expanded="false"
        aria-controls="collapseSurveys"
      >
        <Icon name="ph:car-profile-bold" />Surveys
        <Icon name="pajamas:chevron-down" />
      </button>
      <ul id="collapseSurveys" class="collapse ms-2">
        <li>
          <NuxtLink
            to="/synco/surveys/create"
            class="btn-nav-link"
            exact-active-class="text-primary"
          >
            Create a survey
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/synco/surveys"
            class="btn-nav-link"
            exact-active-class="text-primary"
          >
            Reports
          </NuxtLink>
        </li>
      </ul>

      <!-- Email Marketing  -->
      <button
        class="btn btn-nav"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseEmailMarketing"
        aria-expanded="false"
        aria-controls="collapseEmailMarketing"
      >
        <Icon name="ph:car-profile-bold" />Email Marketing
        <Icon name="pajamas:chevron-down" />
      </button>
      <ul id="collapseEmailMarketing" class="show collapse ms-2">
        <li>
          <NuxtLink
            to="/synco/email-marketing/create"
            class="btn-nav-link"
            exact-active-class="text-primary"
          >
            Create a campaign
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/synco/email-marketing/reports"
            class="btn-nav-link"
            exact-active-class="text-primary"
          >
            Reports
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/synco/email-marketing/audience"
            class="btn-nav-link"
            exact-active-class="text-primary"
          >
            Audience
          </NuxtLink>
        </li>
      </ul>

      <!-- Recruitment  -->
      <button
        class="btn btn-nav"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseRecruitment"
        aria-expanded="false"
        aria-controls="collapseRecruitment"
      >
        <Icon name="ph:car-profile-bold" />Recruitment
        <Icon name="pajamas:chevron-down" />
      </button>
      <ul id="collapseRecruitment" class="show collapse ms-2">
        <li>
          <NuxtLink
            to="/synco/recruitment/coaches-leads"
            class="btn-nav-link"
            exact-active-class="text-primary"
          >
            Coaches leads
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/synco/recruitment/franchise-leads"
            class="btn-nav-link"
            exact-active-class="text-primary"
          >
            Franchise leads
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/synco/recruitment/reports"
            class="btn-nav-link"
            exact-active-class="text-primary"
          >
            Recruitment reports
          </NuxtLink>
        </li>
      </ul>

      <!-- Reports  -->
      <button
        class="btn btn-nav"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseReports"
        aria-expanded="false"
        aria-controls="collapseReports"
      >
        <Icon name="ph:car-profile-bold" />Reports
        <Icon name="pajamas:chevron-down" />
      </button>
      <ul id="collapseReports" class="collapse ms-2">
        <li>
          <NuxtLink
            to="/synco/reports/members"
            class="btn-nav-link"
            exact-active-class="text-primary"
          >
            Members
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/synco/reports/new-business"
            class="btn-nav-link"
            exact-active-class="text-primary"
          >
            New business
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/synco/reports/cancellations"
            class="btn-nav-link"
            exact-active-class="text-primary"
          >
            Cancellations
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/synco/reports/trials-and-conversions"
            class="btn-nav-link"
            exact-active-class="text-primary"
          >
            Trials and conversions
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/synco/reports/company"
            class="btn-nav-link"
            exact-active-class="text-primary"
          >
            Company Wide Metrics
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/synco/reports/weekly-classes"
            class="btn-nav-link"
            exact-active-class="text-primary"
          >
            Weekly Classes
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/synco/reports/club"
            class="btn-nav-link"
            exact-active-class="text-primary"
          >
            Club
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/synco/reports/birthday-parties"
            class="btn-nav-link"
            exact-active-class="text-primary"
          >
            Birthday parties
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/synco/reports/one-to-one"
            class="btn-nav-link"
            exact-active-class="text-primary"
          >
            One to one
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/synco/reports/holiday-camps"
            class="btn-nav-link"
            exact-active-class="text-primary"
          >
            Holiday Camps
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/synco/reports/merchandise"
            class="btn-nav-link"
            exact-active-class="text-primary"
          >
            Merchandise
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/synco/reports/capacity"
            class="btn-nav-link"
            exact-active-class="text-primary"
          >
            Capacity
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/synco/reports/venue-analysis"
            class="btn-nav-link"
            exact-active-class="text-primary"
          >
            Venue Analysis
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/synco/reports/venue-comparison"
            class="btn-nav-link"
            exact-active-class="text-primary"
          >
            Venue Analysis
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/synco/reports/parent-feedback"
            class="btn-nav-link"
            exact-active-class="text-primary"
          >
            Parent feedback
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/synco/reports/payments"
            class="btn-nav-link"
            exact-active-class="text-primary"
          >
            Payment metrics
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/synco/reports/agents"
            class="btn-nav-link"
            exact-active-class="text-primary"
          >
            Agent performance
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/synco/reports/students"
            class="btn-nav-link"
            exact-active-class="text-primary"
          >
            Student attendance
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/synco/reports/coaches"
            class="btn-nav-link"
            exact-active-class="text-primary"
          >
            Coach attendance
          </NuxtLink>
        </li>
      </ul>

      <!-- Marketing Reports  -->
      <button
        class="btn btn-nav"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseMarketingReports"
        aria-expanded="false"
        aria-controls="collapseMarketingReports"
      >
        <Icon name="ph:car-profile-bold" />Marketing reports
        <Icon name="pajamas:chevron-down" />
      </button>
      <ul id="collapseMarketingReports" class="show collapse ms-2">
        <li>
          <NuxtLink
            to="/synco/marketing-reports/facebook"
            class="btn-nav-link"
            exact-active-class="text-primary"
          >
            Facebook ads
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/synco/marketing-reports/google"
            class="btn-nav-link"
            exact-active-class="text-primary"
          >
            Google ads
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/synco/marketing-reports/website"
            class="btn-nav-link"
            exact-active-class="text-primary"
          >
            Website
          </NuxtLink>
        </li>
      </ul>

      <!-- Recruitment reports  -->
      <NuxtLink
        to="/synco/recruitment/reports"
        exact-active-class="btn-nav-active"
        class="btn-nav"
      >
        <Icon name="material-symbols:folder-managed-outline" /> Recruitment
        reports
      </NuxtLink>

      <!-- Synco Chat  -->
      <NuxtLink
        to="/synco/chat"
        exact-active-class="btn-nav-active"
        class="btn-nav"
      >
        <Icon name="ph:chat-circle-dots" /> Synco Chat
      </NuxtLink>

      <!-- Templates  -->
      <button
        class="btn btn-nav"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseTemplates"
        aria-expanded="false"
        aria-controls="collapseTemplates"
      >
        <Icon name="ph:car-profile-bold" />Templates
        <Icon name="pajamas:chevron-down" />
      </button>
      <ul id="collapseTemplates" class="show collapse ms-2">
        <li>
          <NuxtLink
            to="/synco/templates/create"
            class="btn-nav-link"
            exact-active-class="text-primary"
          >
            Create a template
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/synco/templates"
            class="btn-nav-link"
            exact-active-class="text-primary"
          >
            List of templates
          </NuxtLink>
        </li>
      </ul>

      <!-- Administration  -->
      <button
        class="btn btn-nav"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseAdministration"
        aria-expanded="false"
        aria-controls="collapseAdministration"
      >
        <Icon name="material-symbols:manage-accounts-outline" />Administration
        <Icon name="pajamas:chevron-down" />
      </button>
      <ul id="collapseAdministration" class="show collapse ms-2">
        <li>
          <NuxtLink
            to="/synco/administration/todos"
            class="btn-nav-link"
            exact-active-class="text-primary"
          >
            To do list
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/synco/administration/tv-dashboard"
            class="btn-nav-link"
            exact-active-class="text-primary"
          >
            TV Dashboard
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/synco/administration/admin-panel"
            class="btn-nav-link"
            exact-active-class="text-primary"
          >
            Admin panel
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/synco/administration/folders"
            class="btn-nav-link"
            exact-active-class="text-primary"
          >
            Folders
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/synco/administration/prices"
            class="btn-nav-link"
            exact-active-class="text-primary"
          >
            Price management
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/synco/administration/discounts"
            class="btn-nav-link"
            exact-active-class="text-primary"
          >
            Discounts
          </NuxtLink>
        </li>
      </ul>

      <SyncoMenuConfiguration />
    </div>
    <div class="mt-5 py-5"></div>

    <button class="btn btn-outline-dark" @click="logout">Logout</button>
  </div>
</template>
