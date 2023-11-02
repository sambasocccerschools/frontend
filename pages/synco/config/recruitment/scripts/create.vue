<script>
export default {
  data: () => ({
    tab: 1, // 1 leads 2 sales 3 all,
    // These will get replaces by arrays 
  })
}
</script>

<template>
  <NuxtLayout name="syncolayout" pageTitle="Recruitment Scripts">

    <h4 class="mb-5">Scripts & Scorecards</h4>

    <div class="row">
      <div class="col-sm-10 mx-auto">
        <div class="card rounded-5">
          <div class="card-header pt-5 pb-4 border-bottom">
            <h3 class="card-title text-center mb-4">Create Template</h3>
            <div class="row">
              <div class="col-sm-9 mx-auto">
                <ul class="nav nav-pills d-flex row">
                  <li class="nav-item col">
                    Setup
                    <button class="nav-link rounded-0 mt-2 w-100"
                      :class="tab === 1 || tab === 2 || tab === 3 ? 'active' : 'text-dark border'"
                      @click="tab = 1"></button>
                  </li>
                  <li class="nav-item col">
                    Script
                    <button class="nav-link rounded-0 mt-2 w-100"
                      :class="tab === 2 || tab === 3 ? 'active' : 'text-dark border'" @click="tab = 2"></button>
                  </li>
                  <li class="nav-item col">
                    Scorecard
                    <button class="nav-link rounded-0 mt-2 w-100" :class="tab === 3 ? 'active' : 'text-dark border'"
                      @click="tab = 3"></button>
                  </li>

                </ul>
              </div>
            </div>
          </div>

          <!-- Setup Tab -->
          <div class="card-body pb-5 pt-5" v-if="tab === 1">
            <div class="row">
              <div class="col-sm-6 mx-auto">
                <div class="form-group mb-3">
                  <label class="form-label form-label-light" for="Mode of communication">Position</label>
                  <select class="form-select form-select-lg" aria-label="Mode of communication">
                    <option value="coaches" selected>Coaches</option>
                    <option value="regional-managers">Regional Managers</option>
                    <option value="pathway">Pathway</option>
                    <option value="franchise">Franchise</option>
                  </select>
                </div>
                <div class="form-group mb-3">
                  <label for="title" class="form-labelform-label-light">Title</label>
                  <input type="email" class="form-control form-control-lg" id="title" aria-describedby="emailHelp">
                </div>

                <button @click="tab = 2" class="btn btn-primary text-light w-100 btn-lg my-4">Next</button>
              </div>

            </div>
          </div>

          <!-- Script Tab -->
          <div class="card-body py-0" v-if="tab === 2">
            <div class="row">
              <div class="col">
                <div class="p-4">
                  <div class="border-bottom pb-3 d-flex align-items-center mb-4">
                    <span
                      class="bg-primary text-light d-flex align-items-center justify-content-center rounded-circle me-3"
                      style="height: 2.5rem; width: 2.5rem">
                      <Icon name="solar:notes-outline" class="h2 m-0" />
                    </span>
                    <h4 class="m-0">Title Name</h4>
                  </div>
                  <p class="lead mb-3">
                    <Icon name="mdi:checkbox-marked-circle" class="text-success h4 text-normal me-3" />
                    <strong>Check they are free and in a quiet
                      space for the call</strong>
                  </p>

                  <p class="lead mb-3">
                    <Icon name="mdi:checkbox-marked-circle" class="text-success h4 text-normal me-3" />
                    <strong>Give them break down for the call</strong>

                  <ul class="list-unstyled ms-5">
                    <li>(A) Explain 2 steps recruitment process</li>
                    <li>(B) Housekeeping</li>
                    <li>(C) Interview Q</li>
                    <li>(D) Address any question they have</li>
                  </ul>
                  </p>

                  <p class="lead mb-3">
                    <Icon name="mdi:checkbox-marked-circle" class="text-success h4 text-normal me-3" />
                    <strong>Process</strong> <br>
                    <span class="text-success ms-5">2 steps</span>

                  <ul class="list-unstyled ms-5">
                    <li>(A) Phone call</li>
                    <li>(B) Practical assessment - taking place next week and week after</li>
                    <li>
                      <small style="text-decoration:underline"><strong>Any questions?</strong></small>
                    </li>
                  </ul>
                  </p>

                </div>
              </div>
              <div class="col-auto border-start">
                <div class="p-3 d-flex flex-column h-100">
                  <span class="h4 mb-4">Blocks</span>
                  <button class="btn btn-lg btn-light d-flex align-items-center justify-content-between mb-4">Add a title
                    section
                    <Icon name="ph:text-t" />
                  </button>

                  <button @click="tab = 3" class="btn btn-primary text-light w-100 btn-lg my-4 mt-auto">Next</button>

                </div>
              </div>
            </div>
          </div>

          <!-- Scorecard Tab -->
          <div class="card-body pb-5 pt-5 px-5" v-if="tab === 3">
            <div class="row">
              <div class="col">
                <div class="p-4">

                  <!-- Communication Skill  -->
                  <div class="form-group mb-3">
                    <label for="communication-skill" class="form-label">Communication skill</label>
                    <div class="d-flex">
                      <div class="form-check me-4">
                        <input class="form-check-input" type="radio" name="communication-skill"
                          id="communication-skill-1">
                        <label class="form-check-label" for="communication-skill-1">1</label>
                      </div>
                      <div class="form-check me-4">
                        <input class="form-check-input" type="radio" name="communication-skill"
                          id="communication-skill-2">
                        <label class="form-check-label" for="communication-skill-2">2</label>
                      </div>
                      <div class="form-check me-4">
                        <input class="form-check-input" type="radio" name="communication-skill"
                          id="communication-skill-3">
                        <label class="form-check-label" for="communication-skill-3">3</label>
                      </div>
                      <div class="form-check me-4">
                        <input class="form-check-input" type="radio" name="communication-skill" id="communication-skill-4"
                          checked>
                        <label class="form-check-label" for="communication-skill-4">4</label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="communication-skill"
                          id="communication-skill-5">
                        <label class="form-check-label" for="communication-skill-5">5</label>
                      </div>
                    </div>
                  </div>

                  <!-- Passion for coaching  -->
                  <div class="form-group mb-3">
                    <label for="passion-for-coaching" class="form-label">Passion for coaching</label>
                    <div class="d-flex">
                      <div class="form-check me-4">
                        <input class="form-check-input" type="radio" name="passion-for-coaching"
                          id="passion-for-coaching-1">
                        <label class="form-check-label" for="passion-for-coaching-1">1</label>
                      </div>
                      <div class="form-check me-4">
                        <input class="form-check-input" type="radio" name="passion-for-coaching"
                          id="passion-for-coaching-2">
                        <label class="form-check-label" for="passion-for-coaching-2">2</label>
                      </div>
                      <div class="form-check me-4">
                        <input class="form-check-input" type="radio" name="passion-for-coaching"
                          id="passion-for-coaching-3">
                        <label class="form-check-label" for="passion-for-coaching-3">3</label>
                      </div>
                      <div class="form-check me-4">
                        <input class="form-check-input" type="radio" name="passion-for-coaching"
                          id="passion-for-coaching-4" checked>
                        <label class="form-check-label" for="passion-for-coaching-4">4</label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="passion-for-coaching"
                          id="passion-for-coaching-5">
                        <label class="form-check-label" for="passion-for-coaching-5">5</label>
                      </div>
                    </div>
                  </div>

                  <!-- Experience  -->
                  <div class="form-group mb-3">
                    <label for="experience" class="form-label">Experience</label>
                    <div class="d-flex">
                      <div class="form-check me-4">
                        <input class="form-check-input" type="radio" name="experience" id="experience-1">
                        <label class="form-check-label" for="experience-1">1</label>
                      </div>
                      <div class="form-check me-4">
                        <input class="form-check-input" type="radio" name="experience" id="experience-2">
                        <label class="form-check-label" for="experience-2">2</label>
                      </div>
                      <div class="form-check me-4">
                        <input class="form-check-input" type="radio" name="experience" id="experience-3">
                        <label class="form-check-label" for="experience-3">3</label>
                      </div>
                      <div class="form-check me-4">
                        <input class="form-check-input" type="radio" name="experience" id="experience-4" checked>
                        <label class="form-check-label" for="experience-4">4</label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="experience" id="experience-5">
                        <label class="form-check-label" for="experience-5">5</label>
                      </div>
                    </div>
                  </div>

                  <!-- Knowledge of SSS  -->
                  <div class="form-group mb-3">
                    <label for="knowledge-sss" class="form-label">Knowledge of SSS</label>
                    <div class="d-flex">
                      <div class="form-check me-4">
                        <input class="form-check-input" type="radio" name="knowledge-sss" id="knowledge-sss-1">
                        <label class="form-check-label" for="knowledge-sss-1">1</label>
                      </div>
                      <div class="form-check me-4">
                        <input class="form-check-input" type="radio" name="knowledge-sss" id="knowledge-sss-2">
                        <label class="form-check-label" for="knowledge-sss-2">2</label>
                      </div>
                      <div class="form-check me-4">
                        <input class="form-check-input" type="radio" name="knowledge-sss" id="knowledge-sss-3">
                        <label class="form-check-label" for="knowledge-sss-3">3</label>
                      </div>
                      <div class="form-check me-4">
                        <input class="form-check-input" type="radio" name="knowledge-sss" id="knowledge-sss-4" checked>
                        <label class="form-check-label" for="knowledge-sss-4">4</label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="knowledge-sss" id="knowledge-sss-5">
                        <label class="form-check-label" for="knowledge-sss-5">5</label>
                      </div>
                    </div>
                  </div>



                </div>
              </div>
              <div class="col-auto border-start">
                <div class="p-3 d-flex flex-column h-100">
                  <span class="h4 mb-4">Blocks</span>
                  <button class="btn btn-lg btn-light d-flex align-items-center justify-content-between mb-4">Add a
                    scorecard
                    <Icon name="ph:text-t" />
                  </button>

                  <NuxtLink to="/synco/config/recruitment/scripts"
                    class="btn btn-primary btn-lg px-5 text-light mt-auto ">Save</NuxtLink>

                </div>
              </div>
            </div>

          </div>


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