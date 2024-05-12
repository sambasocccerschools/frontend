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
                <li class="breadcrumb-item">Weekly classes</li>
                <li class="breadcrumb-item">
                  <NuxtLink
                    to="/synco/config/weekly-classes/session-plans"
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
            to="/synco/config/weekly-classes/session-plans"
          >
            <Icon name="material-symbols:arrow-back" class="me-2" />Create
            session
          </NuxtLink>
        </div>
        <div class="col-1"></div>
      </div>
      <div class="row my-4">
        <div class="col-3"></div>
        <div class="col-6">
          <div class="d-flex flex-column">
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
              <label for="player" class="form-labelform-label-light">
                Player
              </label>
              <input
                id="player"
                type="text"
                class="form-control form-control-lg"
                placeholder=""
              />
            </div>
            <div class="d-flex justify-content-end flex-row">
              <button type="button" class="btn btn-outline-primary me-2">
                Add video
              </button>
              <button type="button" class="btn btn-outline-primary">
                Add banner
              </button>
            </div>
            <hr />
            <div class="my-3">
              <span class="h4">Exercise || {Skill}</span>
            </div>
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
              <label for="exerciseDuration" class="form-labelform-label-light">
                Title Duration
              </label>
              <input
                id="exerciseDuration"
                type="text"
                class="form-control form-control-lg"
                placeholder=""
              />
            </div>
            <div class="form-group w-100 mb-3">
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
            <div class="d-flex justify-content-end flex-row">
              <button type="button" class="btn btn-outline-primary me-2">
                Add video
              </button>
              <button type="button" class="btn btn-outline-primary">
                Add image
              </button>
            </div>
          </div>
        </div>
        <div class="col-3"></div>
      </div>
      <div class="row mb-4 pb-4">
        <div class="col-3"></div>
        <div class="col-3">
          <button class="btn btn-outline-primary w-100">
            Add new exercise
          </button>
        </div>
        <div class="col-3">
          <button class="btn btn-primary text-light w-100">
            Create Session
          </button>
        </div>
        <div class="col-3"></div>
      </div>
    </div>
  </NuxtLayout>
</template>
