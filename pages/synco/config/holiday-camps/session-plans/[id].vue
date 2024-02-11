<script>
export default {
  data: () => ({
    formData: {},
  }),
  methods: {
    saveData() {
      console.log('send to api')
    },
  },
}
</script>

<template>
  <NuxtLayout name="syncolayout" page-title="Audience">
    <div class="card">
      <div class="card-header border-bottom border-light">
        <h2 class="card-title mb-5 mt-2">
          <NuxtLink to="/synco/config/holiday-camps/session-plans">
            <Icon
              name="material-symbols:arrow-left-alt"
              class="text-dark me-2"
            />
          </NuxtLink>
          Create session
        </h2>
      </div>
      <div class="card-body">
        <form action="" class="mx-auto mb-5">
          <div class="col-sm-5 mx-auto">
            <section class="border-bottom border-light pb-4">
              <div class="form-group mb-3">
                <label for="session-title" class="form-label">Title</label>
                <input
                  id="session-title"
                  type="text"
                  class="form-control form-control-lg"
                  aria-describedby="sessiontitleHelp"
                />
                <!-- <div id="titleHelp" class="form-text">We'll never share your email with anyone else.</div> -->
              </div>
              <div class="form-group mb-3">
                <label for="player" class="form-label">Player</label>

                <select
                  id="player"
                  class="form-select form-select-lg"
                  aria-label="player"
                >
                  <option selected disabled>Player</option>
                </select>
                <span class="text-danger">
                  What type of input is it ? Dropdown ?</span
                >
              </div>
              <div class="d-flex justify-content-end align-items-center">
                <span class="text-danger">What do these buttons do ?</span>
                <button class="btn btn-outline-primary btn-sm me-2">
                  Add Video
                </button>
                <button class="btn btn-outline-primary btn-sm">
                  Add Banner
                </button>
              </div>
            </section>

            <section class="py-4">
              <h4>Exercise</h4>
              <div class="form-group mb-3">
                <label for="exercise-title" class="form-label">Title</label>
                <input
                  id="exercise-title"
                  type="text"
                  class="form-control form-control-lg"
                  aria-describedby="exercisetitleHelp"
                />
              </div>
              <div class="form-group mb-3">
                <label for="title-duration" class="form-label"
                  >Title Duration</label
                >

                <select
                  id="title-duration"
                  class="form-select form-select-lg"
                  aria-label="title-duration"
                >
                  <option selected disabled>Duration</option>
                </select>
                <span class="text-danger">
                  What type of input is it ? Dropdown ?</span
                >
              </div>

              <div class="form-group mb-3">
                <label for="description" class="form-label">Description</label>
                <textarea
                  id="description"
                  type="text"
                  class="form-control"
                ></textarea>
              </div>
              <div class="d-flex justify-content-end">
                <button class="btn btn-outline-primary btn-sm">
                  Add Image
                </button>
              </div>
            </section>

            <div class="form-group d-flex">
              <button class="btn btn-outline-primary btn-lg w-100 me-2">
                Add new exercise
              </button>
              <button class="btn btn-lg btn-primary w-100 text-light ms-2">
                Create Session
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </NuxtLayout>
</template>
