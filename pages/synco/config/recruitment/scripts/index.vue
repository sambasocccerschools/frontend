<script>
export default {
  data: () => ({
    scripts: [{ coaches: [] }],
  }),
}
</script>

<template>
  <NuxtLayout name="syncolayout">
    <div class="d-flex align-items-center justify-content-between mb-3">
      <h4 class="m-0">Scripts & Scorecards List</h4>
      <NuxtLink
        to="/synco/config/recruitment/scripts/create"
        class="btn btn-primary text-light"
        >Create script</NuxtLink
      >
    </div>
    <div class="row">
      <div class="col">
        <!-- Filter By Date  -->
        <div class="card">
          <div class="card-header d-flex flex-column">
            <!-- <button class="btn btn-primary btn-sm text-light shadow-sm">Apply Filter</button> -->
            <div class="input-group mb-3">
              <span id="search-addon" class="input-group-text">
                <Icon name="ic:baseline-search" />
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="Search script"
                aria-label="Search script"
                aria-describedby="search-addon"
              />
            </div>
          </div>

          <ul class="list-group">
            <li
              class="list-group-item list-group-item-action rounded-0 border-0"
            >
              <strong>
                <Icon
                  name="ph:folder-notch-open"
                  class="h4 text-muted m-0 me-2"
                />Coaches
              </strong>
              <ul>
                <li class="d-flex align-items-center py-3">
                  <Icon
                    name="ic:round-folder-open"
                    class="h5 text-muted me-2"
                  />
                  <span class="d-flex flex-column">
                    <span>Round 1 Telephone Call</span>
                    <span class="text-muted">Last updated 07/09/2023</span>
                  </span>
                </li>
                <li class="d-flex align-items-center py-3">
                  <Icon
                    name="ic:round-folder-open"
                    class="h5 text-muted me-2"
                  />
                  <span class="d-flex flex-column">
                    <span>Round 2 Practical Assesment</span>
                    <span class="text-muted">Last updated 07/09/2023</span>
                  </span>
                </li>
              </ul>
            </li>
            <li
              class="list-group-item list-group-item-action rounded-0 border-0"
            >
              <strong>
                <Icon
                  name="ph:folder-notch-open"
                  class="h4 text-muted m-0 me-2"
                />Regional Managers
              </strong>
            </li>
          </ul>
        </div>
      </div>

      <div class="col-sm-8">
        <div class="card">
          <div class="card-header border-bottom">
            <h4 class="card-title mb-2 mt-3">Round 1 Telephone call</h4>
          </div>
          <div class="card-body py-0">
            <div class="row">
              <div class="col">
                <div class="p-4">
                  <div class="border-bottom d-flex align-items-center pb-3">
                    <span
                      class="bg-primary text-light d-flex align-items-center justify-content-center rounded-circle me-3"
                      style="height: 2.5rem; width: 2.5rem"
                    >
                      <Icon name="solar:notes-outline" class="h2 m-0" />
                    </span>
                    <h4 class="m-0">Title Name</h4>
                  </div>
                  <p class="lead mb-3 mt-4">
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
                  <span class="h4 mb-4">Scorecard</span>

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
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
