<script lang="ts" setup>
import { nextTick, onMounted, ref } from 'vue'
import { generalStore } from '~/stores'

const token = useCookie('token')
const router = useRouter()
const store = generalStore()
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
    store.updateAuthenticated(false)
    store.setUser(undefined)
    token.value = null
    router.push('/synco')
    console.log(error.value, 'data')
  }
}

const show = (path: any, position: number) => {
  let currentPath = router.currentRoute.value.path.split('/')
  return currentPath[position] == path
}

onMounted(async () => {
  await nextTick()
  let ul = document.querySelectorAll(
    `a[href='${router.currentRoute.value.path}']`,
  )
  if (ul[0]) {
    ul[0]?.scrollIntoView()
  } else {
    let div = document.getElementById(router.currentRoute.value.path)
    if (!div) {
      let path = router.currentRoute.value.path.split('/')
      path[path.length - 1] = ''
      div = document.getElementById(path.join('/'))

      console.log(router.currentRoute.value.path)
      console.log(path.join('/'))
    }
    div?.scrollIntoView()
  }
})

const showDashboard = ref<boolean>(true)
const showWeeklyClasses = ref<boolean>(true)
const showOneToOne = ref<boolean>(false)
const showHolidayCamps = ref<boolean>(false)
const showBirthdayParties = ref<boolean>(false)
const showClub = ref<boolean>(false)
const showSurveys = ref<boolean>(false)
const showEmailMarketing = ref<boolean>(false)
const showRecruitment = ref<boolean>(false)
const showReports = ref<boolean>(false)
const showMarketingReports = ref<boolean>(false)
const showRecruitmentReports = ref<boolean>(false)
const showSyncoChat = ref<boolean>(false)
const showTemplates = ref<boolean>(false)
const showAdministration = ref<boolean>(false)
const showConfiguration = ref<boolean>(true)
const showConfigurationWeeklyClasses = ref<boolean>(true)
const showConfigurationHolidayCamps = ref<boolean>(false)
const showConfigurationBirthdayParties = ref<boolean>(false)
const showConfigurationClub = ref<boolean>(false)
const showConfigurationOneToOne = ref<boolean>(false)
const showConfigurationCoachPro = ref<boolean>(false)
const showConfigurationParentConnect = ref<boolean>(false)
const showConfigurationRecruitment = ref<boolean>(false)
const showConfigurationPathway = ref<boolean>(false)
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
        v-if="showDashboard"
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
        v-if="showWeeklyClasses"
      >
        <Icon name="ph:book-open-bold" />Weekly Classes
        <Icon name="pajamas:chevron-down" />
      </button>
      <ul
        id="collapseWeeklyClasses"
        class="collapse ms-2"
        :class="show('weekly-classes', 2) ? 'show' : ''"
      >
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
        <li v-if="false">
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
        v-if="showOneToOne"
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
        v-if="showHolidayCamps"
      >
        <Icon name="ph:book-open-bold" />Holiday Camps
        <Icon name="pajamas:chevron-down" />
      </button>
      <ul
        id="collapseHolidayCamps"
        class="collapse ms-2"
        :class="show('holiday-camps', 2) ? 'show' : ''"
      >
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
        v-if="showBirthdayParties"
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
        v-if="showClub"
      >
        <Icon name="clarity:users-line" />Club
        <Icon name="pajamas:chevron-down" />
      </button>
      <ul
        id="collapseClub"
        class="collapse ms-2"
        :class="show('club', 2) ? 'show' : ''"
      >
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
        v-if="showSurveys"
      >
        <Icon name="ph:car-profile-bold" />Surveys
        <Icon name="pajamas:chevron-down" />
      </button>
      <ul
        id="collapseSurveys"
        class="collapse ms-2"
        :class="show('surveys', 2) ? 'show' : ''"
      >
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
        v-if="showEmailMarketing"
      >
        <Icon name="ph:car-profile-bold" />Email Marketing
        <Icon name="pajamas:chevron-down" />
      </button>
      <ul
        id="collapseEmailMarketing"
        class="collapse ms-2"
        :class="show('email-marketing', 2) ? 'show' : ''"
      >
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
        v-if="showRecruitment"
      >
        <Icon name="ph:car-profile-bold" />Recruitment
        <Icon name="pajamas:chevron-down" />
      </button>
      <ul
        id="collapseRecruitment"
        class="collapse ms-2"
        :class="show('recruitment', 2) ? 'show' : ''"
      >
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
        v-if="showReports"
      >
        <Icon name="ph:car-profile-bold" />Reports
        <Icon name="pajamas:chevron-down" />
      </button>
      <ul
        id="collapseReports"
        class="collapse ms-2"
        :class="show('reports', 2) ? 'show' : ''"
      >
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
        v-if="showMarketingReports"
      >
        <Icon name="ph:car-profile-bold" />Marketing reports
        <Icon name="pajamas:chevron-down" />
      </button>
      <ul
        id="collapseMarketingReports"
        class="collapse ms-2"
        :class="show('marketing-reports', 2) ? 'show' : ''"
      >
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
        v-if="showRecruitmentReports"
      >
        <Icon name="material-symbols:folder-managed-outline" /> Recruitment
        reports
      </NuxtLink>

      <!-- Synco Chat  -->
      <NuxtLink
        to="/synco/chat"
        exact-active-class="btn-nav-active"
        class="btn-nav"
        v-if="showSyncoChat"
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
        v-if="showTemplates"
      >
        <Icon name="ph:car-profile-bold" />Templates
        <Icon name="pajamas:chevron-down" />
      </button>
      <ul
        id="collapseTemplates"
        class="collapse ms-2"
        :class="show('templates', 2) ? 'show' : ''"
      >
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
        v-if="showAdministration"
      >
        <Icon name="material-symbols:manage-accounts-outline" />Administration
        <Icon name="pajamas:chevron-down" />
      </button>
      <ul
        id="collapseAdministration"
        class="collapse ms-2"
        :class="show('administration', 2) ? 'show' : ''"
      >
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

      <!-- <SyncoMenuConfiguration /> -->
      <!-- Configuration  -->
      <button
        class="btn btn-nav"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseConfiguration"
        aria-expanded="false"
        aria-controls="collapseConfiguration"
        v-if="showConfiguration"
      >
        <Icon name="solar:settings-outline" />Configuration
        <Icon name="pajamas:chevron-down" />
      </button>
      <ul
        id="collapseConfiguration"
        class="collapse ms-2"
        :class="show('config', 2) ? 'show' : ''"
        ref="test"
      >
        <!-- Config > Weekly Classes  -->
        <li v-if="showConfigurationWeeklyClasses">
          <button
            class="btn btn-nav-link"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseConfWeeklyClasses"
            aria-expanded="false"
            aria-controls="collapseConfWeeklyClasses"
          >
            Weekly Classes
            <Icon name="pajamas:chevron-down" />
          </button>
          <ul
            id="collapseConfWeeklyClasses"
            class="collapse ps-4"
            :class="show('weekly-classes', 3) ? 'show' : ''"
          >
            <li>
              <NuxtLink
                to="/synco/config/weekly-classes/venues"
                class="btn-nav-link"
                exact-active-class="text-primary"
              >
                Add a Venue
              </NuxtLink>
              <div id="/synco/config/weekly-classes/schedule-classes"></div>
            </li>
            <li>
              <NuxtLink
                to="/synco/config/weekly-classes/terms"
                class="btn-nav-link"
                exact-active-class="text-primary"
              >
                Terms
              </NuxtLink>
              <div id="/synco/config/weekly-classes/terms/create"></div>
            </li>
            <li>
              <NuxtLink
                to="/synco/config/weekly-classes/session-plans"
                class="btn-nav-link"
                exact-active-class="text-primary"
              >
                Session plans
              </NuxtLink>
              <div id="/synco/config/weekly-classes/session-plans/edit"></div>
              <div id="/synco/config/weekly-classes/session-plans/create"></div>
            </li>
          </ul>
        </li>
        <!-- Config > Holiday Camps  -->
        <li v-if="showConfigurationHolidayCamps">
          <button
            class="btn btn-nav-link"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseConfHolidayCamps"
            aria-expanded="false"
            aria-controls="collapseConfHolidayCamps"
          >
            Holiday Camps
            <Icon name="pajamas:chevron-down" />
          </button>
          <ul
            id="collapseConfHolidayCamps"
            class="collapse ps-4"
            :class="show('holiday-camps', 3) ? 'show' : ''"
          >
            <li>
              <NuxtLink
                to="/synco/config/holiday-camps/venues"
                class="btn-nav-link"
                exact-active-class="text-primary"
              >
                Add a Venue
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/synco/config/holiday-camps/dates"
                class="btn-nav-link"
                exact-active-class="text-primary"
              >
                Dates
              </NuxtLink>
              <div id="/synco/config/holiday-camps/dates/create"></div>
            </li>
            <li>
              <NuxtLink
                to="/synco/config/holiday-camps/session-plans"
                class="btn-nav-link"
                exact-active-class="text-primary"
              >
                Session plans
              </NuxtLink>
              <div id="/synco/config/holiday-camps/session-plans/"></div>
            </li>
          </ul>
        </li>

        <!-- Config > Birthday Parties  -->
        <li v-if="showConfigurationBirthdayParties">
          <button
            class="btn btn-nav-link"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseConfBirthdayParties"
            aria-expanded="false"
            aria-controls="collapseConfBirthdayParties"
          >
            Birthday Parties
            <Icon name="pajamas:chevron-down" />
          </button>
          <ul
            id="collapseConfBirthdayParties"
            class="collapse ps-4"
            :class="show('birthday-parties', 3) ? 'show' : ''"
          >
            <li>
              <NuxtLink
                to="/synco/config/birthday-parties/venues"
                class="btn-nav-link"
                exact-active-class="text-primary"
              >
                Add a Venue
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/synco/config/birthday-parties/session-plans"
                class="btn-nav-link"
                exact-active-class="text-primary"
              >
                Session Plans
              </NuxtLink>
            </li>
          </ul>
        </li>

        <!-- Config > Club  -->
        <li v-if="showConfigurationClub">
          <button
            class="btn btn-nav-link"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseConfClub"
            aria-expanded="false"
            aria-controls="collapseConfClub"
          >
            Club
            <Icon name="pajamas:chevron-down" />
          </button>
          <ul
            id="collapseConfClub"
            class="collapse ps-4"
            :class="show('club', 3) ? 'show' : ''"
          >
            <li>
              <NuxtLink
                to="/synco/config/club/venues"
                class="btn-nav-link"
                exact-active-class="text-primary"
              >
                Add a Venue
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/synco/config/club"
                class="btn-nav-link"
                exact-active-class="text-primary"
              >
                Club
              </NuxtLink>
            </li>
          </ul>
        </li>

        <!-- Config > One to One  -->
        <li v-if="showConfigurationOneToOne">
          <button
            class="btn btn-nav-link"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseConfOneToOne"
            aria-expanded="false"
            aria-controls="collapseConfOneToOne"
          >
            One to One
            <Icon name="pajamas:chevron-down" />
          </button>
          <ul
            id="collapseConfOneToOne"
            class="collapse ps-4"
            :class="show('one-to-one', 3) ? 'show' : ''"
          >
            <li>
              <NuxtLink
                to="/synco/config/one-to-one/venues"
                class="btn-nav-link"
                exact-active-class="text-primary"
              >
                Add a Venue
              </NuxtLink>
            </li>
          </ul>
        </li>

        <!-- Config > Coach Pro  -->
        <li v-if="showConfigurationCoachPro">
          <button
            class="btn btn-nav-link"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseConfCoachPro"
            aria-expanded="false"
            aria-controls="collapseConfCoachPro"
          >
            Coach Pro
            <Icon name="pajamas:chevron-down" />
          </button>
          <ul
            id="collapseConfCoachPro"
            class="collapse ps-4"
            :class="show('coachpro', 3) ? 'show' : ''"
          >
            <li>
              <NuxtLink
                to="/synco/config/coachpro/coaches"
                class="btn-nav-link"
                exact-active-class="text-primary"
              >
                Coach profile
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/synco/config/coachpro/contract"
                class="btn-nav-link"
                exact-active-class="text-primary"
              >
                Contract
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/synco/config/coachpro/music"
                class="btn-nav-link"
                exact-active-class="text-primary"
              >
                Music
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/synco/config/coachpro/courses"
                class="btn-nav-link"
                exact-active-class="text-primary"
              >
                Courses
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/synco/config/coachpro/issues"
                class="btn-nav-link"
                exact-active-class="text-primary"
              >
                Issues List
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/synco/config/coachpro/referrals"
                class="btn-nav-link"
                exact-active-class="text-primary"
              >
                Referrals
              </NuxtLink>
            </li>
          </ul>
        </li>

        <!-- Config > Parent Connect  -->
        <li v-if="showConfigurationParentConnect">
          <button
            class="btn btn-nav-link"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseConfParentConnect"
            aria-expanded="false"
            aria-controls="collapseConfParentConnect"
          >
            Parent Connect
            <Icon name="pajamas:chevron-down" />
          </button>
          <ul
            id="collapseConfParentConnect"
            class="collapse ps-4"
            :class="show('parent-connect', 3) ? 'show' : ''"
          >
            <li>
              <NuxtLink
                to="/synco/config/parent-connect/courses/create"
                class="btn-nav-link"
                exact-active-class="text-primary"
              >
                Create a course
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/synco/config/parent-connect/courses"
                class="btn-nav-link"
                exact-active-class="text-primary"
              >
                List of Courses
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/synco/config/parent-connect/loyalty-points"
                class="btn-nav-link"
                exact-active-class="text-primary"
              >
                Loyalty Points
              </NuxtLink>
            </li>
          </ul>
        </li>

        <!-- Config > Recruitment  -->
        <li v-if="showConfigurationRecruitment">
          <button
            class="btn btn-nav-link"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseConfRecruitment"
            aria-expanded="false"
            aria-controls="collapseConfRecruitment"
          >
            Recruitment
            <Icon name="pajamas:chevron-down" />
          </button>
          <ul
            id="collapseConfRecruitment"
            class="collapse ps-4"
            :class="show('recruitment', 3) ? 'show' : ''"
          >
            <li>
              <NuxtLink
                to="/synco/config/recruitment/scripts"
                class="btn-nav-link"
                exact-active-class="text-primary"
              >
                Scripts
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/synco/config/recruitment/franchise-questions"
                class="btn-nav-link"
                exact-active-class="text-primary"
              >
                Franchise Questions
              </NuxtLink>
            </li>
          </ul>
        </li>

        <!-- Config > Pathway  -->
        <li v-if="showConfigurationPathway">
          <button
            class="btn btn-nav-link"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseConfPathway"
            aria-expanded="false"
            aria-controls="collapseConfPathway"
          >
            Pathway
            <Icon name="pajamas:chevron-down" />
          </button>
          <ul
            id="collapseConfPathway"
            class="collapse ps-4"
            :class="show('pathway', 3) ? 'show' : ''"
          >
            <li>
              <NuxtLink
                to="/synco/config/pathway/venues"
                class="btn-nav-link"
                exact-active-class="text-primary"
              >
                Add a venue
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/synco/config/pathway/courses"
                class="btn-nav-link"
                exact-active-class="text-primary"
              >
                Add a course
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/synco/config/pathway/students"
                class="btn-nav-link"
                exact-active-class="text-primary"
              >
                Students
              </NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="mt-5 py-5"></div>

    <button class="btn btn-outline-dark" @click="logout">Logout</button>
  </div>
</template>
