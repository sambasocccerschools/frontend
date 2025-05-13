<template>
  <!-- This is a good example to show or not based on state  -->
  <WebsiteBanner />
  <!-- Header móvil -->
  <div
    class="d-block d-lg-none"
    style="
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 9999;
      min-height: 150px;
      justify-content: center;
      align-content: center;
    "
  >
    <!-- Capa de overlay oscuro -->
    <div
      style="
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgb(0 0 0 / 32%);
        z-index: -1;
      "
    ></div>

    <!-- Logo a la izquierda, hamburguesa a la derecha -->
    <div
      class="d-flex justify-content-between align-items-center px-3 py-2"
      style="position: relative; z-index: 1"
    >
      <img
        src="@/src/assets/header/logo-movil.png"
        alt="Logo"
        class="logo-mobile"
      />
      <button class="btn text-light" @click="toggleMobileMenu">
        <i class="fas fa-bars" style="font-size: 2rem; color: white"></i>
      </button>
    </div>

    <!-- Menú desplegable -->
    <transition name="slide">
      <div v-if="isMobileMenuOpen" class="mobile-menu bg-menu text-white">
        <!-- Botón de cierre -->
        <button
          @click="toggleMobileMenu"
          class="btn-close btn-close-white d-block ms-auto"
        ></button>

        <!-- Lista de enlaces con iconos -->
        <ul class="list-unstyled mt-4">
          <li v-for="(item, index) in menuItems" :key="index" class="mb-4">
            <div v-if="!item.children">
              <NuxtLink
                :to="item.to"
                class="d-flex align-items-center text-decoration-none text-mobil-menu menu-link"
                :class="{ active: isActive(item.to) }"
              >
                <img
                  :src="item.icon"
                  alt="Icono"
                  style="width: 30px; height: 30px; margin-right: 1rem"
                />
                <span
                  style="
                    font-size: 1.2rem;
                    display: inline-block;
                    position: relative;
                  "
                >
                  {{ item.label }}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 106 6"
                    fill="none"
                    class="menu-wave"
                  >
                    <path
                      d="M0 1C3.83013 1 3.83013 5 7.66026 5C11.4904 5 11.4904 1 15.3205 1C19.1507 1 19.1507 5 22.9808 5C26.8109 5 26.8109 1 30.6539 1C34.4968 1 34.4968 5 38.3269 5C42.1571 5 42.1699 1 46 1"
                      stroke="#FDFDFF"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M30 1C33.8301 1 33.8301 5 37.6603 5C41.4904 5 41.4904 1 45.3205 1C49.1507 1 49.1507 5 52.9808 5C56.8109 5 56.8109 1 60.6539 1C64.4968 1 64.4968 5 68.3269 5C72.1571 5 72.1699 1 76 1"
                      stroke="#FDFDFF"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M60 1C63.8301 1 63.8301 5 67.6603 5C71.4904 5 71.4904 1 75.3205 1C79.1507 1 79.1507 5 82.9808 5C86.8109 5 86.8109 1 90.6539 1C94.4968 1 94.4968 5 98.3269 5C102.157 5 102.17 1 106 1"
                      stroke="#FDFDFF"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                    />
                  </svg>
                </span>
              </NuxtLink>
            </div>

            <div v-else>
              <button
                @click="toggleSubmenu(item.label)"
                class="d-flex align-items-center text-mobil-menu w-100 submenu-toggle border-0 bg-transparent"
                :class="{ 'active-submenu': isSubmenuOpen(item.label) }"
              >
                <img
                  :src="item.icon"
                  alt="Icono"
                  style="width: 30px; height: 30px; margin-right: 1rem"
                />
                <span
                  style="
                    font-size: 1.2rem;
                    display: inline-block;
                    position: relative;
                  "
                >
                  {{ item.label }}
                  <svg
                    v-if="isSubmenuOpen(item.label)"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 106 6"
                    fill="none"
                    class="menu-wave"
                  >
                    <path
                      d="M0 1C3.83013 1 3.83013 5 7.66026 5C11.4904 5 11.4904 1 15.3205 1C19.1507 1 19.1507 5 22.9808 5C26.8109 5 26.8109 1 30.6539 1C34.4968 1 34.4968 5 38.3269 5C42.1571 5 42.1699 1 46 1"
                      stroke="#FDFDFF"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M30 1C33.8301 1 33.8301 5 37.6603 5C41.4904 5 41.4904 1 45.3205 1C49.1507 1 49.1507 5 52.9808 5C56.8109 5 56.8109 1 60.6539 1C64.4968 1 64.4968 5 68.3269 5C72.1571 5 72.1699 1 76 1"
                      stroke="#FDFDFF"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M60 1C63.8301 1 63.8301 5 67.6603 5C71.4904 5 71.4904 1 75.3205 1C79.1507 1 79.1507 5 82.9808 5C86.8109 5 86.8109 1 90.6539 1C94.4968 1 94.4968 5 98.3269 5C102.157 5 102.17 1 106 1"
                      stroke="#FDFDFF"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                    />
                  </svg>
                </span>

                <span class="ms-auto">{{
                  isSubmenuOpen(item.label) ? '▲' : '▼'
                }}</span>
              </button>

              <transition name="submenu-slide">
                <ul
                  v-show="isSubmenuOpen(item.label)"
                  class="list-unstyled mt-2"
                >
                  <li v-for="(child, i) in item.children" :key="i" class="mb-2 pl-40">
                    <NuxtLink
                      :to="child.to"
                      class="text-decoration-none text-white sub-menu-text"
                      style="font-size: 1rem"
                    >
                      {{ child.label }}
                    </NuxtLink>
                  </li>
                </ul>
              </transition>
            </div>
          </li>
        </ul>

        <!-- Nueva sección Book a Free Trial -->
        <div class="book-trial-section br-20 mt-80">
          <h2 class="book-trial-text">Book a Free trial</h2>
          <button class="book-trial-btn">Book a Free Trial</button>
        </div>

        <RoundedButton
          to="tel:02072052723"
          label="020 72052723"
          :icon="iconCall"
          backgroundColor="#ffffff"
          textColor="#042C89"
          class="mt-20"
        />

        <RoundedButton
          to="/parents"
          label="Log In"
          backgroundColor="#ffffff"
          textColor="#042C89"
          class="bg-warning mt-20"
        />
      </div>
    </transition>
  </div>

  <div
    class="d-none d-lg-block bg-primary text-light bg-primary-texture shadow-lg"
  >
    <div class="container-fluid">
      <div class="row pt-4">
        <div class="col-5 border-bottom pb-4">
          <span class="btn btn-light rounded-5">
            <Icon name="ph:phone" class="me-2" />020 72052723
          </span>
        </div>
        <NuxtLink to="/" class="logo col text-center"
          ><img src="@/src/assets/sss-logo.png" alt=""
        /></NuxtLink>
        <div class="d-flex col-5 justify-content-end border-bottom gap-2 pb-4">
          <NuxtLink to="/book" class="btn btn-light rounded-5"
            ><span class="font-custom">Book a Free Trial</span>
          </NuxtLink>
          <div>
            <NuxtLink to="/synco" class="btn btn-outline-light"
              >Synco Login</NuxtLink
            >
          </div>
          <NuxtLink to="/parents" class="btn btn-outline-light"
            >Parents Login</NuxtLink
          >
        </div>
      </div>
      <nav class="row py-3">
        <div class="col d-flex">
          <NuxtLink
            to="/"
            class="btn btn-link text-light"
            active-class="current"
            >HOME</NuxtLink
          >
          <span class="text-warning">.</span>
          <!-- Find a Clas  -->
          <div class="btn-group">
            <button
              class="btn btn-link text-light dropdown-toggle"
              active-class="current"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Find a Class
            </button>
            <ul class="dropdown-menu dropdown-menu-dark bg-primary-texture">
              <li>
                <NuxtLink to="/book" class="dropdown-item"
                  >Find a Class</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/book/holiday-camps" class="dropdown-item"
                  >Book a Holiday Camp</NuxtLink
                >
              </li>
            </ul>
          </div>
          <!-- <NuxtLink to="/book" class="btn btn-link text-light" active-class="current">Find a Class</NuxtLink> -->
          <span class="text-warning">.</span>
          <!-- <NuxtLink to="/services/weekly-classes" class="btn btn-link text-light" active-class="current">Services
          </NuxtLink> -->
          <div class="btn-group">
            <button
              class="btn btn-link text-light dropdown-toggle"
              active-class="current"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Services
            </button>
            <ul class="dropdown-menu dropdown-menu-dark bg-primary-texture">
              <li>
                <NuxtLink to="/services/weekly-classes" class="dropdown-item"
                  >Weekly Classes</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/services/holiday-camps" class="dropdown-item"
                  >Holiday Camps</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/services/one-to-one-training"
                  class="dropdown-item"
                  >One-to-one training</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/services/birthday-parties" class="dropdown-item"
                  >Birthday Parties</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/services/club" class="dropdown-item"
                  >Club</NuxtLink
                >
              </li>
            </ul>
          </div>
          <span class="text-warning">.</span>

          <div class="btn-group">
            <button
              class="btn btn-link text-light dropdown-toggle"
              active-class="current"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              About Us
            </button>
            <ul class="dropdown-menu dropdown-menu-dark bg-primary-texture">
              <li>
                <NuxtLink to="/about" class="dropdown-item">About</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/about/meet-the-team" class="dropdown-item"
                  >Meet the team</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/about/sss-uniform" class="dropdown-item"
                  >SSS Uniform</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/about/london-venues" class="dropdown-item"
                  >London Venues</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/about/reviews" class="dropdown-item"
                  >Reviews</NuxtLink
                >
              </li>
            </ul>
          </div>
          <!-- <NuxtLink to="/about" class="btn btn-link text-light" active-class="current">About Us</NuxtLink> -->
        </div>
        <div class="col justify-content-end d-flex">
          <!-- <NuxtLink to="/franchise" class="btn btn-link text-light" active-class="current">Franchise</NuxtLink> -->
          <!-- Franchise  -->
          <div class="btn-group">
            <button
              class="btn btn-link text-light dropdown-toggle"
              active-class="current"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Franchise
            </button>
            <ul class="dropdown-menu dropdown-menu-dark bg-primary-texture">
              <li>
                <NuxtLink to="/franchise" class="dropdown-item"
                  >Franchise</NuxtLink
                >
              </li>
            </ul>
          </div>

          <span class="text-warning">.</span>
          <!-- Coaching  -->
          <div class="btn-group">
            <button
              class="btn btn-link text-light dropdown-toggle"
              active-class="current"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Coaching
            </button>
            <ul class="dropdown-menu dropdown-menu-dark bg-primary-texture">
              <li>
                <NuxtLink to="/coaching" class="dropdown-item"
                  >Coaching</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/coaching/work-for-us" class="dropdown-item"
                  >Work for us</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/coaching/regional-manager" class="dropdown-item"
                  >Regional Manager</NuxtLink
                >
              </li>
            </ul>
          </div>
          <!-- <NuxtLink to="/coaching" class="btn btn-link text-light" active-class="current">Coaching</NuxtLink> -->
          <span class="text-warning">.</span>
          <NuxtLink
            to="/contact"
            class="btn btn-link text-light"
            active-class="current"
            >Contact</NuxtLink
          >
        </div>
      </nav>
    </div>
  </div>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap"
    rel="stylesheet"
  />
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import RoundedButton from '@/components/website/RoundedButton.vue'
import iconHome from '@/src/assets/icons/icon-home.svg'
import iconFindAClass from '@/src/assets/icons/icon-find-a-class.svg'
import iconServices from '@/src/assets/icons/icon-services.svg'
import iconAboutUs from '@/src/assets/icons/icon-about-us.svg'
import iconFranchise from '@/src/assets/icons/icon-franchise.svg'
import iconVacancies from '@/src/assets/icons/icon-vacancies.svg'
import iconContact from '@/src/assets/icons/icon-contact.svg'
import iconCall from '@/src/assets/icons/icon-call.svg'

const isMobileMenuOpen = ref(false)

const openSubmenus = ref([])
const route = useRoute()

const isActive = (to) => {
  return route.path === to || route.path.startsWith(to + '/')
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const toggleSubmenu = (label) => {
  if (openSubmenus.value.includes(label)) {
    openSubmenus.value = openSubmenus.value.filter((item) => item !== label)
  } else {
    openSubmenus.value.push(label)
  }
}

const isSubmenuOpen = (label) => openSubmenus.value.includes(label)

const menuItems = [
  { icon: iconHome, label: 'Home', to: '/' },
  {
    icon: iconFindAClass,
    label: 'Find A Class',
    children: [{ label: 'Book a Holiday Camp', to: '/book/holiday-camps' }],
  },
  {
    icon: iconServices,
    label: 'Services',
    children: [
      { label: 'Weekly classes', to: '/services/weekly-classes' },
      { label: 'Holiday Camps', to: '/services/holiday-camps' },
      { label: 'One-to-one training', to: '/services/one-to-one-training' },
      { label: 'Birthday Parties', to: '/services/birthday-parties' },
      { label: 'Club', to: '/services/club' },
    ],
  },
  {
    icon: iconAboutUs,
    label: 'About Us',
    children: [
      { label: 'Meet the team', to: '/about/meet-the-team' },
      { label: 'SSS Uniform', to: '/about/sss-uniform' },
      { label: 'London Venues', to: '/about/london-venues' },
      { label: 'Reviews', to: '/about/reviews' },
    ],
  },
  { icon: iconFranchise, label: 'Franchise', to: '/franchise' },
  {
    icon: iconVacancies,
    label: 'Vacancies',
    children: [
      { label: 'Become a coach', to: '/' },
      { label: 'Venue manager', to: '/' },
    ],
  },
  { icon: iconContact, label: 'Contact', to: '/contact' },
]
</script>

<style lang="scss">
@import '@/assets/styles/web/web.scss';

.logo {
  height: 1rem;
}

.btn.current {
  border-bottom: 1px solid $warning;
}

.mobile-header {
  background-color: #133e87;
}

.logo-mobile img {
  height: 2rem;
}

.mobile-menu {
  padding: 50px;
  overflow-y: auto; 
}

.mobile-menu-fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #133e87;
  z-index: 9999;
}

/* Transición para el menú deslizante */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

.bg-menu {
  background-image: url('@/src/assets/header/bg-menu.jpg'); 
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center center;
  z-index: 10000;
  transition: transform 0.3s ease;
}

.text-mobil-menu {
  color: #fdfdff;
  font-family: Recline;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 22.4px */
  letter-spacing: 0.2px;
  text-transform: uppercase;
}

/* Seccion book a free trial */
.book-trial-section {
  background-image: url('@/src/assets/header/bg-book-trial.svg');
  background-size: cover;
  background-position: center center;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.book-trial-text {
  color: #042c89;
  font-family: 'Permanent Marker', cursive;
  font-size: 43px;
  font-style: normal;
  font-weight: 400;
  line-height: 107%; /* 46.01px */
  letter-spacing: 0.2px;
  transform: rotate(-2.535deg);
  margin-bottom: 22px;
}

.book-trial-btn {
  display: flex;
  padding: 16px 24px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 50px;
  background: #042c89;
  color: white;
  border: none;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}

.submenu-slide-enter-active,
.submenu-slide-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}
.submenu-slide-enter-from,
.submenu-slide-leave-to {
  max-height: 0;
  opacity: 0;
}
.submenu-slide-enter-to,
.submenu-slide-leave-from {
  max-height: 500px;
  opacity: 1;
}

.mt-80 {
  margin-top: 80px;
}

.mt-20 {
  margin-top: 20px;
}

.br-20 {
  border-radius: 20px;
}

.pl-40 {
  padding-left: 40px ;
}

.menu-link {
  position: relative;
  display: inline-block;
}

.menu-link span {
  position: relative;
  z-index: 1;
}

.menu-link svg {
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 100%;
  height: 6px;
  display: none;
}

.menu-link:hover svg,
.menu-link.active svg {
  display: block;
}

/* Color para ítems activos y al hacer hover */
.menu-link.active span,
.menu-link:hover span,
.menu-link.active img,
.menu-link:hover img,
.menu-link.active svg path,
.menu-link:hover svg path {
  color: #ffde14 !important;
  stroke: #ffde14 !important;
}

ul li .text-white.router-link-exact-active,
ul li .text-white:hover {
  color: #ffde14 !important;
}

.submenu-toggle:hover,
.submenu-toggle.active-submenu {
  color: #ffde14;
}

.submenu-toggle:hover img,
.submenu-toggle.active-submenu img {
  filter: brightness(1.3) saturate(1.5);
}

.submenu-toggle:hover .menu-wave path,
.submenu-toggle.active-submenu .menu-wave path {
  stroke: #ffde14;
}

.submenu-toggle {
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  text-align: left; 
}

.sub-menu-text {
  font-family: Recline;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 132%; 
  letter-spacing: 0.2px;
}

</style>
