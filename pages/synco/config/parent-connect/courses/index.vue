<script>
const router = useRouter()

export default {
  data: () => ({
    tab: 'Beginners', // Beginners, Intermediate, Advanced
    courses: [
      { id: 1, level: 'Beginners', name: '5 Ball Beginner Skills', durationInMin: 45, skills: 10 },
      { id: 2, level: 'Intermediate', name: '10 Ball Mastery Skills', durationInMin: 45, skills: 10 }
    ]
  }),
  methods: {
    goTo(id) {
      router.push({ path: `/synco/config/parent-connect/courses/create` });
    }
  }
}
</script>



<template>
  <NuxtLayout name="syncolayout">
    <div class="d-flex align-items-center justify-content-between mb-4">
      <h4 class="m-0">Skills Tracker Training Courses</h4>
      <NuxtLink to="/synco/config/parent-connect/courses/create" class="btn btn-primary text-light">+ Add course
      </NuxtLink>
    </div>

    <div class="card">
      <div class="card-header text-center border-bottom">
        <h4 class="card-title text-center pt-4">All Courses</h4>
        <div class="bg-light mx-auto d-inline-block my-4">
          <button class="btn" @click="tab = 'Beginners'"
            :class="tab === 'Beginners' ? 'btn-primary text-light' : 'bg-transparent'">Beginners</button>
          <button class="btn" @click="tab = 'Intermediate'"
            :class="tab === 'Intermediate' ? 'btn-primary text-light' : 'bg-transparent'">Intermediate</button>
          <button class="btn" @click="tab = 'Advanced'"
            :class="tab === 'Advanced' ? 'btn-primary text-light' : 'bg-transparent'">Advanced</button>
        </div>
      </div>

      <div class="card-body">
        <div class="card" style="width: 18rem;" v-for="course in courses.filter(item => item.level === tab)"
          @click="goTo(course.id)">
          <img src="@/src/assets/img-blog-4.png" class="card-img-top rounded-4" alt="{{ course.name }}">
          <div class="card-body">
            <h5 class="card-title">{{ course.name }}</h5>
            <p class="card-text">
              <span>{{ course.durationInMin }}min</span>
              <span>{{ course.skills }} Skills</span>
              <span>{{ course.level }}</span>
            </p>
            <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
            <span class="text-danger">Why do we need a completed progress bar ?</span>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
 
 