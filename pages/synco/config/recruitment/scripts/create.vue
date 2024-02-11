<script>
export default {
  data: () => ({
    tab: 1, // 1 leads 2 sales 3 all,
    // These will get replaces by arrays
  }),
}
</script>

<template>
  <NuxtLayout name="syncolayout" page-title="Recruitment Scripts">
    <h4 class="mb-5">Scripts & Scorecards</h4>

    <div class="row">
      <div class="col-sm-10 mx-auto">
        <div class="card rounded-5">
          <div class="card-header border-bottom pb-4 pt-5">
            <h3 class="card-title mb-4 text-center">Create Template</h3>
            <div class="row">
              <div class="col-sm-9 mx-auto">
                <ul class="nav nav-pills d-flex row">
                  <li class="nav-item col">
                    Setup
                    <button
                      class="nav-link rounded-0 w-100 mt-2"
                      :class="
                        tab === 1 || tab === 2 || tab === 3
                          ? 'active'
                          : 'text-dark border'
                      "
                      @click="tab = 1"
                    ></button>
                  </li>
                  <li class="nav-item col">
                    Script
                    <button
                      class="nav-link rounded-0 w-100 mt-2"
                      :class="
                        tab === 2 || tab === 3 ? 'active' : 'text-dark border'
                      "
                      @click="tab = 2"
                    ></button>
                  </li>
                  <li class="nav-item col">
                    Scorecard
                    <button
                      class="nav-link rounded-0 w-100 mt-2"
                      :class="tab === 3 ? 'active' : 'text-dark border'"
                      @click="tab = 3"
                    ></button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Setup Tab -->
          <div v-if="tab === 1" class="card-body pb-5 pt-5">
            <div class="row">
              <div class="col-sm-6 mx-auto">
                <div class="form-group mb-3">
                  <label
                    class="form-label form-label-light"
                    for="Mode of communication"
                    >Position</label
                  >
                  <select
                    class="form-select form-select-lg"
                    aria-label="Mode of communication"
                  >
                    <option value="coaches" selected>Coaches</option>
                    <option value="regional-managers">Regional Managers</option>
                    <option value="pathway">Pathway</option>
                    <option value="franchise">Franchise</option>
                  </select>
                </div>
                <div class="form-group mb-3">
                  <label for="title" class="form-labelform-label-light"
                    >Title</label
                  >
                  <input
                    id="title"
                    type="email"
                    class="form-control form-control-lg"
                    aria-describedby="emailHelp"
                  />
                </div>

                <button
                  class="btn btn-primary text-light w-100 btn-lg my-4"
                  @click="tab = 2"
                >
                  Next
                </button>
              </div>
            </div>
          </div>

          <!-- Script Tab -->
          <div v-if="tab === 2" class="card-body py-0">
            <div class="row">
              <div class="col">
                <div class="p-4">
                  <div
                    class="border-bottom d-flex align-items-center mb-4 pb-3"
                  >
                    <span
                      class="bg-primary text-light d-flex align-items-center justify-content-center rounded-circle me-3"
                      style="height: 2.5rem; width: 2.5rem"
                    >
                      <Icon name="solar:notes-outline" class="h2 m-0" />
                    </span>
                    <h4 class="m-0">Title Name</h4>
                  </div>
                  <p class="lead mb-3">
                    <Icon
                      name="mdi:checkbox-marked-circle"
                      class="text-success h4 text-normal me-3"
                    />
                    <strong
                      >Check they are free and in a quiet space for the
                      call</strong
                    >
                  </p>

                  <div class="lead mb-3">
                    <Icon
                      name="mdi:checkbox-marked-circle"
                      class="text-success h4 text-normal me-3"
                    />
                    <strong>Give them break down for the call</strong>

                    <ul class="list-unstyled ms-5">
                      <li>(A) Explain 2 steps recruitment process</li>
                      <li>(B) Housekeeping</li>
                      <li>(C) Interview Q</li>
                      <li>(D) Address any question they have</li>
                    </ul>
                  </div>

                  <div class="lead mb-3">
                    <Icon
                      name="mdi:checkbox-marked-circle"
                      class="text-success h4 text-normal me-3"
                    />
                    <strong>Process</strong> <br />
                    <span class="text-success ms-5">2 steps</span>

                    <ul class="list-unstyled ms-5">
                      <li>(A) Phone call</li>
                      <li>
                        (B) Practical assessment - taking place next week and
                        week after
                      </li>
                      <li>
                        <small style="text-decoration: underline"
                          ><strong>Any questions?</strong></small
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="border-start col-auto">
                <div class="d-flex flex-column h-100 p-3">
                  <span class="h4 mb-4">Blocks</span>
                  <button
                    class="btn btn-lg btn-light d-flex align-items-center justify-content-between mb-4"
                  >
                    Add a title section
                    <Icon name="ph:text-t" />
                  </button>

                  <button
                    class="btn btn-primary text-light w-100 btn-lg my-4 mt-auto"
                    @click="tab = 3"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Scorecard Tab -->
          <div v-if="tab === 3" class="card-body px-5 pb-5 pt-5">
            <div class="row">
              <div class="col">
                <div class="p-4">
                  <!-- Communication Skill  -->
                  <div class="form-group mb-3">
                    <label for="communication-skill" class="form-label"
                      >Communication skill</label
                    >
                    <div class="d-flex">
                      <div class="form-check me-4">
                        <input
                          id="communication-skill-1"
                          class="form-check-input"
                          type="radio"
                          name="communication-skill"
                        />
                        <label
                          class="form-check-label"
                          for="communication-skill-1"
                          >1</label
                        >
                      </div>
                      <div class="form-check me-4">
                        <input
                          id="communication-skill-2"
                          class="form-check-input"
                          type="radio"
                          name="communication-skill"
                        />
                        <label
                          class="form-check-label"
                          for="communication-skill-2"
                          >2</label
                        >
                      </div>
                      <div class="form-check me-4">
                        <input
                          id="communication-skill-3"
                          class="form-check-input"
                          type="radio"
                          name="communication-skill"
                        />
                        <label
                          class="form-check-label"
                          for="communication-skill-3"
                          >3</label
                        >
                      </div>
                      <div class="form-check me-4">
                        <input
                          id="communication-skill-4"
                          class="form-check-input"
                          type="radio"
                          name="communication-skill"
                          checked
                        />
                        <label
                          class="form-check-label"
                          for="communication-skill-4"
                          >4</label
                        >
                      </div>
                      <div class="form-check">
                        <input
                          id="communication-skill-5"
                          class="form-check-input"
                          type="radio"
                          name="communication-skill"
                        />
                        <label
                          class="form-check-label"
                          for="communication-skill-5"
                          >5</label
                        >
                      </div>
                    </div>
                  </div>

                  <!-- Passion for coaching  -->
                  <div class="form-group mb-3">
                    <label for="passion-for-coaching" class="form-label"
                      >Passion for coaching</label
                    >
                    <div class="d-flex">
                      <div class="form-check me-4">
                        <input
                          id="passion-for-coaching-1"
                          class="form-check-input"
                          type="radio"
                          name="passion-for-coaching"
                        />
                        <label
                          class="form-check-label"
                          for="passion-for-coaching-1"
                          >1</label
                        >
                      </div>
                      <div class="form-check me-4">
                        <input
                          id="passion-for-coaching-2"
                          class="form-check-input"
                          type="radio"
                          name="passion-for-coaching"
                        />
                        <label
                          class="form-check-label"
                          for="passion-for-coaching-2"
                          >2</label
                        >
                      </div>
                      <div class="form-check me-4">
                        <input
                          id="passion-for-coaching-3"
                          class="form-check-input"
                          type="radio"
                          name="passion-for-coaching"
                        />
                        <label
                          class="form-check-label"
                          for="passion-for-coaching-3"
                          >3</label
                        >
                      </div>
                      <div class="form-check me-4">
                        <input
                          id="passion-for-coaching-4"
                          class="form-check-input"
                          type="radio"
                          name="passion-for-coaching"
                          checked
                        />
                        <label
                          class="form-check-label"
                          for="passion-for-coaching-4"
                          >4</label
                        >
                      </div>
                      <div class="form-check">
                        <input
                          id="passion-for-coaching-5"
                          class="form-check-input"
                          type="radio"
                          name="passion-for-coaching"
                        />
                        <label
                          class="form-check-label"
                          for="passion-for-coaching-5"
                          >5</label
                        >
                      </div>
                    </div>
                  </div>

                  <!-- Experience  -->
                  <div class="form-group mb-3">
                    <label for="experience" class="form-label"
                      >Experience</label
                    >
                    <div class="d-flex">
                      <div class="form-check me-4">
                        <input
                          id="experience-1"
                          class="form-check-input"
                          type="radio"
                          name="experience"
                        />
                        <label class="form-check-label" for="experience-1"
                          >1</label
                        >
                      </div>
                      <div class="form-check me-4">
                        <input
                          id="experience-2"
                          class="form-check-input"
                          type="radio"
                          name="experience"
                        />
                        <label class="form-check-label" for="experience-2"
                          >2</label
                        >
                      </div>
                      <div class="form-check me-4">
                        <input
                          id="experience-3"
                          class="form-check-input"
                          type="radio"
                          name="experience"
                        />
                        <label class="form-check-label" for="experience-3"
                          >3</label
                        >
                      </div>
                      <div class="form-check me-4">
                        <input
                          id="experience-4"
                          class="form-check-input"
                          type="radio"
                          name="experience"
                          checked
                        />
                        <label class="form-check-label" for="experience-4"
                          >4</label
                        >
                      </div>
                      <div class="form-check">
                        <input
                          id="experience-5"
                          class="form-check-input"
                          type="radio"
                          name="experience"
                        />
                        <label class="form-check-label" for="experience-5"
                          >5</label
                        >
                      </div>
                    </div>
                  </div>

                  <!-- Knowledge of SSS  -->
                  <div class="form-group mb-3">
                    <label for="knowledge-sss" class="form-label"
                      >Knowledge of SSS</label
                    >
                    <div class="d-flex">
                      <div class="form-check me-4">
                        <input
                          id="knowledge-sss-1"
                          class="form-check-input"
                          type="radio"
                          name="knowledge-sss"
                        />
                        <label class="form-check-label" for="knowledge-sss-1"
                          >1</label
                        >
                      </div>
                      <div class="form-check me-4">
                        <input
                          id="knowledge-sss-2"
                          class="form-check-input"
                          type="radio"
                          name="knowledge-sss"
                        />
                        <label class="form-check-label" for="knowledge-sss-2"
                          >2</label
                        >
                      </div>
                      <div class="form-check me-4">
                        <input
                          id="knowledge-sss-3"
                          class="form-check-input"
                          type="radio"
                          name="knowledge-sss"
                        />
                        <label class="form-check-label" for="knowledge-sss-3"
                          >3</label
                        >
                      </div>
                      <div class="form-check me-4">
                        <input
                          id="knowledge-sss-4"
                          class="form-check-input"
                          type="radio"
                          name="knowledge-sss"
                          checked
                        />
                        <label class="form-check-label" for="knowledge-sss-4"
                          >4</label
                        >
                      </div>
                      <div class="form-check">
                        <input
                          id="knowledge-sss-5"
                          class="form-check-input"
                          type="radio"
                          name="knowledge-sss"
                        />
                        <label class="form-check-label" for="knowledge-sss-5"
                          >5</label
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="border-start col-auto">
                <div class="d-flex flex-column h-100 p-3">
                  <span class="h4 mb-4">Blocks</span>
                  <button
                    class="btn btn-lg btn-light d-flex align-items-center justify-content-between mb-4"
                  >
                    Add a scorecard
                    <Icon name="ph:text-t" />
                  </button>

                  <NuxtLink
                    to="/synco/config/recruitment/scripts"
                    class="btn btn-primary btn-lg text-light mt-auto px-5"
                    >Save</NuxtLink
                  >
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
