<script>
const router = useRouter()

export default {
  data: () => ({
    tab: 'Beginners', // Beginners, Intermediate, Advanced
    courses: [
      {
        id: 1,
        level: 'Beginners',
        name: '5 Important Attributes the best strikers need',
        durationInMin: 45,
        skills: 10,
      },
      {
        id: 2,
        level: 'Intermediate',
        name: '10 Ball Mastery Skills',
        durationInMin: 45,
        skills: 10,
      },
    ],
  }),
  methods: {
    goTo(id) {
      router.push({ path: `/synco/config/parent-connect/courses/create` })
    },
  },
}
</script>

<template>
  <NuxtLayout name="syncolayout">
    <div class="d-flex align-items-center justify-content-between mb-4">
      <h4 class="m-0">Skills Tracker Training Courses</h4>
      <NuxtLink
        to="/synco/config/parent-connect/courses/create"
        class="btn btn-primary text-light"
        >+ Add course
      </NuxtLink>
    </div>

    <div class="card">
      <div class="card-header border-bottom text-center">
        <h4 class="card-title pt-4 text-center">All Courses</h4>
        <div class="bg-light d-inline-block mx-auto my-4">
          <button
            class="btn"
            :class="
              tab === 'Beginners' ? 'btn-primary text-light' : 'bg-transparent'
            "
            @click="tab = 'Beginners'"
          >
            Beginners
          </button>
          <button
            class="btn"
            :class="
              tab === 'Intermediate'
                ? 'btn-primary text-light'
                : 'bg-transparent'
            "
            @click="tab = 'Intermediate'"
          >
            Intermediate
          </button>
          <button
            class="btn"
            :class="
              tab === 'Advanced' ? 'btn-primary text-light' : 'bg-transparent'
            "
            @click="tab = 'Advanced'"
          >
            Advanced
          </button>
        </div>
      </div>

      <div class="card-body py-4">
        <div
          v-for="course in courses.filter((item) => item.level === tab)"
          class="card"
          style="width: 18rem"
        >
          <img
            src="@/src/assets/img-blog-4.png"
            class="card-img-top rounded-4"
            alt="{{ course.name }}"
          />
          <div class="card-body">
            <div class="d-flex align-items-start justify-content-between">
              <h5 class="card-title w-100 mt-2">{{ course.name }}</h5>
              <div class="col-auto m-0">
                <button
                  class="btn btn-transparent p-1"
                  @click="goTo(course.id)"
                >
                  <Icon name="ph:pencil-simple-line" />
                </button>
                <button class="btn btn-transparent p-1">
                  <Icon name="ph:trash-thin" />
                </button>
              </div>
            </div>
            <p class="card-text d-flex text-muted">
              <span class="d-flex align-items-center me-2">
                <Icon
                  name="ic:round-access-time"
                  class="h4 text-muted mb-0 me-1"
                />
                {{ course.durationInMin }} min
              </span>
              <span class="me-2">
                <Icon
                  name="solar:medal-ribbon-linear"
                  class="h4 text-muted mb-0 me-1"
                />{{ course.skills }} Skills
              </span>
              <span>
                <Icon
                  name="streamline:phone-signal-full-phone-mobile-device-signal-wireless-smartphone-iphone-bar-bars-full-android"
                  class="h4 text-muted mb-0 me-1"
                />{{ course.level }}
              </span>
            </p>
            <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
            <span class="text-danger"
              >Why do we need a completed progress bar ?</span
            >
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
