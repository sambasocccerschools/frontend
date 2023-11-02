<script>
const router = useRouter()

export default {
  data: () => ({
    // audiences: 8
  }),
  methods: {
    addCourseVideo() { console.log('Add video'); router.push({ path: `/synco/config/parent-connect/courses` }) },
    saveData() { console.log('Save Data'); router.push({ path: `/synco/config/parent-connect/courses` }) }
  }
}
</script>


<template>
  <NuxtLayout name="syncolayout">
    <h4 class="mb-4">Create a course</h4>
    <div class="card mb-4">
      <div class="card-header border-bttom">
        <h3 class="card-title mt-3 ms-4">General Settings</h3>
      </div>
      <div class="card-body px-5">
        <div class="form-group py-4 border-bottom border-light">
          <div class="row">
            <div class="col-3"><label for="course-name" class="form-label ">Name of the course</label></div>
            <div class="col-5"><input type="text" class="form-control" id="course-name"></div>
          </div>
        </div>
        <div class="form-group py-4 border-bottom border-light">
          <div class="row">
            <div class="col-3"><label for="duration" class="form-label ">Duration</label></div>
            <div class="col-4">
              <input type="text" class="form-control" id="duration">
              <div class="form-text">The duration of the course.</div>
            </div>
            <div class="col-auto">
              <select class="form-select" aria-label="duration-unit">
                <option selected value="min">Minutes</option>
                <option value="hours">Hours</option>
              </select>
            </div>
          </div>
        </div>
        <div class="form-group py-4 border-bottom border-light">
          <div class="row">
            <div class="col-3">
              <label for="level" class="form-label ">Level</label>
              <div class="form-text">The level of the course</div>
            </div>
            <div class="col-4">
              <select class="form-select" aria-label="level">
                <option selected value="Beginners">Beginners</option>
              </select>
            </div>
          </div>
        </div>
        <div class="form-group py-4 border-bottom border-light">
          <div class="row">
            <div class="col-3"><label for="cover-image" class="form-label ">Cover image</label></div>
            <div class="col-4">
              <input type="file" id="myFile" name="filename" class="btn btn-light border bg-transparent">
            </div>
          </div>
        </div>
      </div>

    </div>

    <div class="card mb-4">
      <div class="card-header border-bttom">
        <h3 class="card-title mt-3 ms-4">Courses videos</h3>
      </div>
      <div class="card-body px-5">
        <div class="form-group py-4 border-bottom border-light">
          <div class="row">
            <div class="col-3"><label for="video-name" class="form-label ">Name of the video</label></div>
            <div class="col-4"><input type="text" class="form-control" id="video-name"></div>
          </div>
        </div>
        <div class="form-group py-4 border-bottom border-light">
          <div class="row">
            <div class="col-3"><label for="add-course-video" class="form-label ">Add course video</label></div>
            <div class="col-4">
              <input type="file" id="add-course-video" name="filename" class="btn btn-light border bg-transparent">
            </div>
          </div>
        </div>
        <div class="form-group py-4 border-bottom border-light">
          <div class="row">
            <div class="col-3"><label for="childs-features" class="form-label ">Childs features</label></div>
            <div class="col-4">
              <input type="text" class="form-control" id="childs-features">
              <div class="form-text text-danger">What would go on these two fields ?</div>
            </div>
            <div class="col-auto">
              <button class="btn btn-transparent border">Add more descriptions</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <button @click="addCourseVideo()" class="btn btn-primary text-light btn-lg">Add course video</button>
      <button @click="saveData()" class="btn btn-primary text-light btn-lg px-5">Save</button>
    </div>
  </NuxtLayout>
</template>
 
 