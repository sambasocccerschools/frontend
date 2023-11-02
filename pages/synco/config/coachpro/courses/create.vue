<script>
export default {
  data: () => ({
    tab: 1, // 1 leads 2 sales 3 all,
    questions: [
      {
        id: 1, text: 'What are the roles we have at SSS?',
        answers: [{ id: 1, text: 'Rules are not given', score: 100 }, { id: 2, text: 'There are 4 rules', score: 0 }, { id: 2, text: 'Only 10 rules are availablea', score: 0 }]
      }
    ]
  })
}
</script>

<template>
  <NuxtLayout name="syncolayout">

    <h4 class="mb-5">
      <NuxtLink to="/synco/config/coachpro/courses">
        <Icon name="material-symbols:arrow-left-alt" class="me-2 text-dark" />
      </NuxtLink>
      Create a course
    </h4>

    <div class="card rounded-5">
      <div class="card-header py-4 border-bottom">
        <div class="row">
          <div class="col-sm-11 mx-auto">
            <ul class="nav nav-pills d-flex row">
              <li class="nav-item col">
                Title
                <button class="nav-link rounded-0 mt-2 w-100" :class="tab >= 1 ? 'active' : 'text-dark border'"
                  @click="tab = 1"></button>
              </li>
              <li class="nav-item col">
                Modules
                <button class="nav-link rounded-0 mt-2 w-100" :class="tab >= 2 ? 'active' : 'text-dark border'"
                  @click="tab = 2"></button>
              </li>
              <li class="nav-item col">
                Assessment
                <button class="nav-link rounded-0 mt-2 w-100" :class="tab >= 3 ? 'active' : 'text-dark border'"
                  @click="tab = 3"></button>
              </li>
              <li class="nav-item col">
                Settings
                <button class="nav-link rounded-0 mt-2 w-100" :class="tab >= 4 ? 'active' : 'text-dark border'"
                  @click="tab = 4"></button>
              </li>
              <li class="nav-item col">
                Certificate
                <button class="nav-link rounded-0 mt-2 w-100" :class="tab >= 5 ? 'active' : 'text-dark border'"
                  @click="tab = 5"></button>
              </li>
              <li class="nav-item col">
                Complete
                <button class="nav-link rounded-0 mt-2 w-100" :class="tab >= 6 ? 'active' : 'text-dark border'"
                  @click="tab = 6"></button>
              </li>

            </ul>
          </div>
        </div>
      </div>

      <!-- Title Tab -->
      <div class="card-body pb-5 pt-5" v-if="tab === 1">
        <div class="row">
          <div class="col-sm-6 mx-auto">
            <div class="form-group mb-3">
              <label for="course-title" class="form-label form-label-light">Enter Course Title</label>
              <input type="text" class="form-control" id="course-title">
            </div>
            <div class="form-group mb-3">
              <label for="course-description" class="form-label form-label-light">Enter Course Description</label>
              <textarea class="form-control" rows="4" id="course-description" />
            </div>
            <div class="d-flex align-items-center justify-content-between">
              <NuxtLink to="/synco/config/coachpro/courses" class="btn btn-outline-dark btn-lg border px-5">Cancel
              </NuxtLink>
              <button @click="tab = 2" class="btn btn-primary text-light btn-lg px-5">Next</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Modules Tab -->
      <div class="card-body  pb-5 pt-5" v-if="tab === 2">
        <div class="row">
          <div class="col-sm-6 mx-auto">
            <div class="form-group mb-3">
              <div class="bg-light rounded-4 py-3 px-4 border d-flex align-items-center justify-content-between">
                <div>Module 1 <span class="text-danger">What is this module?</span></div>
                <button class="btn btn-primary text-light">+ Add Module</button>
              </div>
            </div>
            <div class="form-group mb-3">
              <label for="module-title" class="form-label form-label-light">Enter Module Title</label>
              <input type="text" class="form-control" id="module-title">
            </div>
            <div class="form-group mb-3">
              <div class="bg-light rounded-3 d-flex justify-content-center align-items-center"
                style="height:8rem; border-style:dashed; border-color: #d0cfd1">
                + Add Media
              </div>
            </div>
            <div class="d-flex align-items-center justify-content-between">
              <NuxtLink to="/synco/config/coachpro/courses" class="btn btn-outline-dark btn-lg border px-5">Cancel
              </NuxtLink>
              <button @click="tab = 3" class="btn btn-primary text-light btn-lg px-5">Next</button>
            </div>
          </div>

        </div>
      </div>

      <!-- Assessment Tab -->
      <div class="card-body pb-5 px-0" v-if="tab === 3">
        <div class="card-header border-bottom pb-3 d-flex align-items-center justify-content-between">
          <h4 class="card-title mt-1">Questions</h4>
          <!-- Button trigger modal -->
          <button type="button" class="btn btn-primary text-light" data-bs-toggle="modal"
            data-bs-target="#addNewQuestionModal">
            + Add New Question
          </button>
        </div>

        <div class="card-body px-4 pb-5">
          <div class="card border" v-for="question in questions">
            <div class="card-header text-center py-0">
              <button class="btn btn-white py-1">
                <Icon name="teenyicons:drag-horizontal-outline" />
              </button>
            </div>
            <div class="card-body px-4 pt-0">
              <div class="d-flex align-items-center justify-content-between">
                <label :for="question.id">{{ question.text }}</label>
                <button type="button" class="btn btn-transparent btn-sm" data-bs-toggle="modal"
                  data-bs-target="#addNewQuestionModal">
                  <Icon name="humbleicons:dots-vertical" class="text-muted" />
                </button>
              </div>
              <p class="text-muted"><small>Answers ({{ question.answers.length }})</small></p>

              <div class="form-check d-flex align-items-center mb-2" v-for="answer in question.answers">
                <input class="form-check-input" type="radio" :name="question.id" :id="answer.id">
                <label class="form-check-label bg-light w-50 border py-2 px-3 ms-3 rounded-2" :for="answer.id">
                  {{ answer.text }}
                </label>
              </div>
              <button class="btn btn-primary btn-sm text-light ms-5 mt-3" @click="addAnswer()">+ Add Option</button>
            </div>
          </div>

          <div class="d-flex align-items-center justify-content-between my-5">
            <NuxtLink to="/synco/config/coachpro/courses" class="btn btn-outline-dark btn-lg border px-5">Cancel
            </NuxtLink>
            <button @click="tab = 4" class="btn btn-primary text-light btn-lg px-5">Next</button>
          </div>
        </div>
      </div>

      <!-- Settings Tab -->
      <div class="card-body p-0" v-if="tab === 4">
        <div class="card-header border-bottom">
          <h3 class="card-title mt-3 ms-4 mb-3">General Settings</h3>
        </div>
        <div class="card-body px-5">
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
              <div class="col-3"><label for="retake-course" class="form-label ">Re-take Course</label></div>
              <div class="col-5">
                <input type="number" class="form-control" id="retake-course">
                <div class="form-text">How many times the user can re-take this course. Set to 0 to disable re-taking
                </div>

              </div>
            </div>
          </div>

          <div class="form-group py-4 border-bottom border-light">
            <div class="row">
              <div class="col-3"><label for="duration" class="form-label ">Passing Condition Value</label></div>
              <div class="col-4">
                <span class="d-flex align-items-center"><input type="text" class="form-control me-2" id="duration">
                  <span class="h4 m-0">%</span></span>
                <div class="form-text">The passing percentage value of quiz result.</div>
              </div>
            </div>
          </div>

          <div class="form-group py-4 border-bottom border-light">
            <div class="row">
              <div class="col-3">
                <label for="level" class="form-label ">Is this course compulsory?</label>
              </div>
              <div class="col-4">
                <div class="mb-3 form-check">
                  <input type="radio" class="form-check-input" id="mandatory-yes" name="mandatory">
                  <label class="form-check-label" for="mandatory-yes">Yes</label>
                </div>
                <div class="mb-3 form-check">
                  <input type="radio" class="form-check-input" id="mandatory-no" name="mandatory">
                  <label class="form-check-label" for="mandatory-no">No</label>
                </div>
              </div>
            </div>
          </div>

          <div class="form-group py-4 border-bottom border-light">
            <div class="row">
              <div class="col-3"><label for="periodic" class="form-label ">Set reminder every</label></div>
              <div class="col-4">
                <input type="text" class="form-control" id="periodic">
                <div class="form-text">Reminder will lapse when user has completed course.</div>
              </div>
              <div class="col-auto">
                <select class="form-select" aria-label="duration-unit">
                  <option selected value="min">Minutes</option>
                  <option value="hours">Hours</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="px-5 pb-5">
          <div class="d-flex align-items-center justify-content-between">
            <NuxtLink to="/synco/config/coachpro/courses" class="btn btn-outline-dark btn-lg border px-5">Cancel
            </NuxtLink>
            <button @click="tab = 5" class="btn btn-primary text-light btn-lg px-5">Next</button>
          </div>
        </div>

      </div>

      <!-- Certificate Tab -->
      <div class="card-body pb-5 pt-5 px-5" v-if="tab === 5">
        <div class="row">
          <div class="col-6">
            <div class="form-group mb-3">
              <label for="certificate-title" class="form-label form-label-light">Certificate Title</label>
              <input type="email" class="form-control" id="certificate-title">
            </div>
            <div class="form-group mb-3">
              <label for="upload-certificate" class="form-label form-label-light">Upload Certificate</label> <br>
              <input type="file" id="upload-certificate" name="filename" class="btn btn-primary text-light">
            </div>
            <div class="form-group mb-3">
              <input type="checkbox" class="form-check-input me-2" id="disable-certificate">
              <label class="form-check-label" for="disable-certificate">Disable Certificate</label> <br>
              <span class="text-danger">What is this?</span>
            </div>
            <div class="d-flex align-items-center justify-content-between mt-5">
              <NuxtLink to="/synco/config/coachpro/courses" class="btn btn-outline-dark btn-lg border px-5">Cancel
              </NuxtLink>
              <button @click="tab = 6" class="btn btn-primary text-light btn-lg px-5">Next</button>
            </div>
          </div>
          <div class="col offset-sm-1">
            <img src="@/src/assets/img-certificate.png" class="img-fluid" alt="">
          </div>
        </div>

      </div>

      <!-- Settings Tab -->
      <div class="card-body pb-5 pt-5 px-5" v-if="tab === 6">
        <div class="form-group mb-3">
          <label class="form-label form-label-light">Select who to notify about this course</label>
          <div class="input-group mb-3 w-50">
            <span class="input-group-text" id="search-addon">
              <Icon name="ic:baseline-search" />
            </span>
            <input type="text" class="form-control" placeholder="Search" aria-label="Search"
              aria-describedby="search-addon">
          </div>
        </div>
        <div class="d-flex align-items-center justify-content-between my-5">
          <NuxtLink to="/synco/config/coachpro/courses" class="btn btn-outline-dark btn-lg border px-5">Cancel
          </NuxtLink>
          <NuxtLink to="/synco/config/coachpro/courses" class="btn btn-primary text-light btn-lg px-5">Finish</NuxtLink>
        </div>
      </div>




    </div>

  </NuxtLayout>
</template>

<style lang="scss" scoped>
.form-label-light {
  font-weight: 300;
}
</style>