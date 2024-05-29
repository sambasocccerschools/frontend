<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>
  <NuxtLayout name="syncolayout">
    <div class="card rounded-4">
      <div class="row my-2">
        <div class="col-1"></div>
        <div class="col-10">
          <div class="card rounded-4">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">Config</li>
                <li class="breadcrumb-item">Holiday Camp</li>
                <li class="breadcrumb-item">
                  <NuxtLink
                    to="/synco/config/holiday-camps/session-plans"
                    class="text-dark"
                  >
                    Session plans
                  </NuxtLink>
                </li>
                <li
                  class="breadcrumb-item active text-semibold"
                  aria-current="page"
                >
                  Create session
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div class="col-1"></div>
      </div>
      <div class="row">
        <div class="col-1"></div>
        <div class="col-10 pb-4" style="border-bottom: 1px solid lightgray">
          <NuxtLink
            class="h4 m-0"
            to="/synco/config/holiday-camps/session-plans"
          >
            <Icon name="material-symbols:arrow-back" class="me-2" />Create
            session
          </NuxtLink>
        </div>
        <div class="col-1"></div>
      </div>
      <div class="row my-4">
        <div class="col-2"></div>
        <div class="col-8">
          <div class="d-flex flex-column">
            <span class="h3 mt-4"><strong>Skill of the day</strong></span>
            <div class="row">
              <div class="col-6 d-flex flex-column">
                <div class="form-group w-100 mb-3">
                  <label for="title" class="form-labelform-label-light">
                    Title
                  </label>
                  <input
                    id="title"
                    type="text"
                    class="form-control form-control-lg"
                    placeholder=""
                  />
                </div>
                <div class="form-group w-100 mb-3">
                  <label for="description" class="form-labelform-label-light">
                    Description
                  </label>
                  <input
                    id="description"
                    type="text"
                    class="form-control form-control-lg"
                    placeholder=""
                  />
                </div>
              </div>
              <div class="col-6 d-flex flex-column">
                <div>
                  <button type="button" class="btn btn-outline-primary mb-2">
                    Add player banner
                  </button>
                </div>
                <div>
                  <img src="@/src/assets/bg-stadium.png" style="width: 100%" />
                </div>
              </div>
              <hr />
            </div>
            <div class="row">
              <div class="col-12">
                <span class="my-3"> Add one or more videos </span>
              </div>
              <div class="col-6 d-flex flex-column">
                <div>
                  <button type="button" class="btn btn-outline-primary mb-2">
                    Add video
                  </button>
                </div>
                <div>
                  <video class="rounded-4" controls></video>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-between mt-4 flex-row">
              <span class="h3"><strong>Session Plan</strong></span>
              <span class="h5 text-primary">
                <Icon name="ph:upload-simple" class="" />
              </span>
            </div>
            <div class="my-3">
              <span class="h4">Exercise || {Skill}</span>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="form-group w-100 mb-3">
                  <label for="exerciseTitle" class="form-labelform-label-light">
                    Title
                  </label>
                  <input
                    id="exerciseTitle"
                    type="text"
                    class="form-control form-control-lg"
                    placeholder=""
                  />
                </div>
                <div class="form-group w-100 mb-3">
                  <label
                    for="exerciseSubtitle"
                    class="form-labelform-label-light"
                  >
                    Subtitle
                  </label>
                  <input
                    id="exerciseSubtitle"
                    type="text"
                    class="form-control form-control-lg"
                    placeholder=""
                  />
                </div>
                <div class="form-group w-100 mb-3">
                  <label
                    for="exerciseDuration"
                    class="form-labelform-label-light"
                  >
                    Title Duration
                  </label>
                  <input
                    id="exerciseDuration"
                    type="text"
                    class="form-control form-control-lg"
                    placeholder=""
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <span class="my-3"> Add one or more images </span>
              </div>
              <div class="col-6">
                <div class="d-flex flex-column">
                  <div>
                    <button type="button" class="btn btn-outline-primary mb-2">
                      Add images
                    </button>
                  </div>
                  <div>
                    <img
                      src="/src/assets/field-positions.png"
                      class="rounded-4 w-100"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group w-100 my-3">
              <label for="description" class="form-labelform-label-light">
                Description
              </label>
              <textarea
                id="description"
                class="form-control form-control-lg"
                rows="4"
                placeholder=""
              ></textarea>
            </div>
            <div class="row">
              <div class="col-12">
                <span class="my-3"> Add one video </span>
              </div>
              <div class="col-6 d-flex flex-column">
                <div>
                  <button type="button" class="btn btn-outline-primary mb-2">
                    Add video
                  </button>
                </div>
                <div>
                  <video class="rounded-4" controls></video>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-2"></div>
      </div>
      <div class="row mb-4 pb-4">
        <div class="col-2"></div>
        <div class="col-4">
          <button class="btn btn-outline-primary w-100">
            Add new exercise
          </button>
        </div>
        <div class="col-4">
          <button class="btn btn-primary text-light w-100">
            Create Session
          </button>
        </div>
        <div class="col-2"></div>
      </div>
    </div>
  </NuxtLayout>
</template>
