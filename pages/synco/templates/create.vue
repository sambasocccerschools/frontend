<script>
export default {
  data: () => ({
    tab: 1, // 1 leads 2 sales 3 all,
    // These will get replaces by arrays
  }),
}
</script>

<template>
  <NuxtLayout name="syncolayout" page-title="Communication Templates">
    <h4 class="mb-5">Templates</h4>

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
                    Template
                    <button
                      class="nav-link rounded-0 w-100 mt-2"
                      :class="
                        tab === 2 || tab === 3 ? 'active' : 'text-dark border'
                      "
                      @click="tab = 2"
                    ></button>
                  </li>
                  <li class="nav-item col">
                    Preview
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
                    >Mode of communication</label
                  >
                  <select
                    class="form-select form-select-lg"
                    aria-label="Mode of communication"
                  >
                    <option value="1" selected>Email</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
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
                <div class="form-group mb-3">
                  <label
                    class="form-label form-label-light"
                    for="email-template-category"
                    >Email Template Category</label
                  >
                  <select
                    class="form-select form-select-lg"
                    aria-label="email-template-category"
                  >
                    <option disabled selected></option>
                    <option value="1">Email</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div class="form-group mb-3">
                  <label class="form-label form-label-light" for="tags"
                    >Tags</label
                  >
                  <select class="form-select form-select-lg" aria-label="tags">
                    <option disabled selected></option>
                    <option value="1">Email</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
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

          <!-- Template Tab -->
          <div v-if="tab === 2" class="card-body py-0">
            <div class="row">
              <div class="col">
                <div class="p-4">
                  <div class="form-group mb-3">
                    <label
                      for="subject-line"
                      class="form-label form-label-light"
                      >Subject line</label
                    >
                    <input
                      id="subject-line"
                      type="email"
                      class="form-control form-control-lg"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <img
                    src="@/src/assets/img-template-long.png"
                    alt=""
                    class="w-100"
                  />

                  <h4 class="my-4">Title</h4>
                  <p class="lead">
                    Lorem ipsum dolor sit amet consectetur. Aliquam nec iaculis
                    massa etiam quam fames sit velit. Erat a convallis malesuada
                    ante. Ultrices bibendum ut in venenatis. Id cras tellus eget
                    facilisi cras diam in diam. In sodales turpis venenatis dis
                    ornare. Aliquet placerat diam viverra morbi massa.
                  </p>
                  <img
                    src="@/src/assets/img-template-long.png"
                    alt=""
                    class="w-100"
                  />
                  <p class="lead">
                    Lorem ipsum dolor sit amet consectetur. Aliquam nec iaculis
                    massa etiam quam fames sit velit. Erat a convallis malesuada
                    ante. Ultrices bibendum ut in venenatis. Id cras tellus eget
                    facilisi cras diam in diam. In sodales turpis venenatis dis
                    ornare. Aliquet placerat diam viverra morbi massa.
                  </p>
                </div>
              </div>
              <div class="col-3 border-start">
                <div class="d-flex flex-column h-100 p-3">
                  <span class="h4 mb-4">Blocks</span>
                  <button
                    class="btn btn-lg btn-light d-flex align-items-center justify-content-between mb-4"
                  >
                    Text field
                    <Icon name="ph:text-t" />
                  </button>
                  <button
                    class="btn btn-lg btn-light d-flex align-items-center justify-content-between mb-4"
                  >
                    Image
                    <Icon name="ph:text-t" />
                  </button>
                  <button
                    class="btn btn-lg btn-light d-flex align-items-center justify-content-between mb-4"
                  >
                    Image group
                    <Icon name="ph:text-t" />
                  </button>
                  <button
                    class="btn btn-lg btn-light d-flex align-items-center justify-content-between mb-4"
                  >
                    Button
                    <Icon name="ph:text-t" />
                  </button>
                  <button
                    class="btn btn-lg btn-light d-flex align-items-center justify-content-between mb-4"
                  >
                    Footer
                    <Icon name="ph:text-t" />
                  </button>
                  <button
                    class="btn btn-lg btn-light d-flex align-items-center justify-content-between mb-4"
                  >
                    Logo
                    <Icon name="ph:text-t" />
                  </button>
                  <button
                    class="btn btn-lg btn-light d-flex align-items-center justify-content-between mb-4"
                  >
                    Banner
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

          <!-- Preview Tab -->
          <div v-if="tab === 3" class="card-body px-5 pb-5 pt-5">
            <div>
              <img
                src="@/src/assets/img-template-long.png"
                alt=""
                class="w-100"
              />

              <h4 class="my-4">Title</h4>
              <p class="lead">
                Lorem ipsum dolor sit amet consectetur. Aliquam nec iaculis
                massa etiam quam fames sit velit. Erat a convallis malesuada
                ante. Ultrices bibendum ut in venenatis. Id cras tellus eget
                facilisi cras diam in diam. In sodales turpis venenatis dis
                ornare. Aliquet placerat diam viverra morbi massa.
              </p>
              <img
                src="@/src/assets/img-template-long.png"
                alt=""
                class="w-100"
              />
              <p class="lead">
                Lorem ipsum dolor sit amet consectetur. Aliquam nec iaculis
                massa etiam quam fames sit velit. Erat a convallis malesuada
                ante. Ultrices bibendum ut in venenatis. Id cras tellus eget
                facilisi cras diam in diam. In sodales turpis venenatis dis
                ornare. Aliquet placerat diam viverra morbi massa.
              </p>
            </div>
            <div class="d-flex justify-content-end">
              <NuxtLink
                href="/synco/templates"
                class="btn btn-outline-dark btn-lg me-3 px-5"
                >Cancel</NuxtLink
              >
              <button class="btn btn-primary btn-lg text-light px-5">
                Send Email
              </button>
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
