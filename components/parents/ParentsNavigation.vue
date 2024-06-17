<script lang="ts" setup>
import { nextTick, onMounted, ref } from 'vue'
import { useStore } from '~/stores'

const token = useCookie('token')
const router = useRouter()
const store = useStore()
const { $api } = useNuxtApp()
const logout = async () => {
  const { data, error } = await $api.auth.logout()
  if (data.value) {
    store.updateAuthenticated(false)
    store.setUser(undefined)
    token.value = null
    router.push('/parents')
  }
  if (error.value) {
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
</script>

<template>
  <div
    class="vh-100 border-end border-1 border-secondary-subtle d-flex flex-column justify-content-between bg-blue-gradient overflow-y-scroll py-4 pe-3 ps-2"
    style="width: auto"
  >
    <div class="">
      <div class="mb-4 text-center">
        <img
          src="@/src/assets/sss-logo-parents-white.png"
          alt="Samba Soccer Schools Parents Logo"
          class="w-100"
        />
      </div>

      <NuxtLink
        to="/parents/account-profile"
        exact-active-class="btn-success text-light"
        class="btn-nav rounded-4 text-light"
      >
        <Icon
          name="akar-icons:grid"
          :class="show('account-profile', 2) ? '' : 'text-success'"
        />
        Account Profile
      </NuxtLink>

      <NuxtLink
        to="/parents/my-bookings"
        exact-active-class="btn-success text-light"
        class="btn-nav rounded-4 text-light"
      >
        <Icon
          name="ph:book-open-user"
          :class="show('my-bookings', 2) ? '' : 'text-success'"
        />
        My Bookings
      </NuxtLink>

      <NuxtLink
        to="/parents/refer-a-friend"
        exact-active-class="btn-success text-light"
        class="btn-nav rounded-4 text-light"
      >
        <Icon
          name="ph:user-gear"
          :class="show('refer-a-friend', 2) ? '' : 'text-success'"
        />
        Refer a friend
      </NuxtLink>

      <NuxtLink
        to="/parents/rewards"
        exact-active-class="btn-success text-light"
        class="btn-nav rounded-4 text-light"
      >
        <Icon
          name="ph:medal"
          :class="show('rewards', 2) ? '' : 'text-success'"
        />
        Rewards
      </NuxtLink>

      <NuxtLink
        to="/parents/surveys"
        exact-active-class="btn-success text-light"
        class="btn-nav rounded-4 text-light"
      >
        <Icon
          name="ph:book-open-user"
          :class="show('surveys', 2) ? '' : 'text-success'"
        />
        Surveys
      </NuxtLink>

      <!-- Settings  -->
      <!-- <button
        class="btn btn-nav rounded-4 w-100 text-light"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseSettings"
        aria-expanded="false"
        aria-controls="collapseSettings"
      >
        <Icon name="solar:settings-outline" class="text-success" />Settings
        <Icon name="pajamas:chevron-down" />
      </button>
      <ul
        id="collapseSettings"
        class="collapse ms-2"
        :class="show('settings', 2) ? 'show' : ''"
      >
        <li>
          <NuxtLink
            to="/parents/settings"
            :class="
              show('settings', 2)
                ? 'btn btn-success'
                : 'btn-nav-link text-light'
            "
          >
            Settings
          </NuxtLink>
        </li>
      </ul> -->
    </div>
    <div class="mt-5 py-5"></div>

    <button class="btn btn-outline-light" @click="logout">
      <Icon name="ph:sign-out" />
      Logout
    </button>
  </div>
</template>

<style scoped>
.bg-blue-gradient {
  background: linear-gradient(45deg, #042c89, #005498) !important;
}
ul li::marker {
  color: white;
}
ul li a {
  text-decoration: none;
}
.btn-success {
  background-color: #0dd180;
  color: white;
}
.text-success {
  color: #0dd180 !important;
}
</style>
