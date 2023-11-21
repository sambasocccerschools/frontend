<script>
const router = useRouter()


export default {
  data: () => ({
    courses: [
      { id: 1, name: 'Welcome to Samba Soccer Schools', status: 'Published' },
      { id: 2, name: 'Health and Safety', status: 'Draft' },
      { id: 3, name: 'Safeguarding', status: 'Published' },
      { id: 4, name: 'Social Media Policy', status: 'Published' },
    ]
  }),
  methods: {
    goTo(id) {
      router.push({ path: `/synco/config/coachpro/course/${id}` });
    }
  }
}

</script>

<template>
  <NuxtLayout name="syncolayout">
    <h4 class="mb-4">Courses List</h4>
    <div class="card border border-light">
      <div class="card-header py-3 d-flex align-items-center justify-content-between border-bottom border-light">
        <h5 class="card-title m-0">Courses</h5>
        <span class="d-flex flex-column">
          <NuxtLink to="/synco/config/coachpro/courses/create" class="btn  btn-primary text-light">+ Create a course
          </NuxtLink>
        </span>
      </div>
      <ul class="list-unstyled">
        <li v-for="course in courses"
          class="p-3 border-top border-light d-flex align-items-center justify-content-between">
          <span>{{ course.name }}</span>
          <span>
            <span class="badge px-3 py-2 rounded-2"
              :class="course.status === 'Published' ? 'bg-success-subtle text-success' : 'bg-warning-subtle text-warning'">
              <span class="h6 m-0">{{ course.status }}</span>
            </span>
            <button @click="goTo(course.id)" class="btn btn-transparent btn-sm">
              <Icon name="ph:pencil-simple-line-light" class="h4 m-0" />
            </button>
            <button class="btn btn-transparent btn-sm">
              <Icon name="ph:trash-thin" class="h4 m-0" />
            </button>
          </span>
        </li>
      </ul>
    </div>
  </NuxtLayout>
</template>
 
 