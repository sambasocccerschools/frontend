<script setup lang="ts">
const layout = 'weblayout'
</script>

<template>
  <NuxtLayout :name="layout">
    <div class="bg-find-a-class">
      <div class="container-fluid">
        <div class="row justify-content-between pb-4 pt-5">
          <div class="col">
            <h1 class="text-info"><em>FIND A CLASS</em></h1>
          </div>
          <div class="d-flex align-items-center col-auto">
            <input
              type="text"
              placeholder="Enter your postcode"
              class="form-control rounded-5 me-2 px-3"
            />
            Or
            <select
              id=""
              name=""
              placeholder="Or select a venue"
              class="form-select rounded-5 mx-2"
            >
              <option value="">Or select a venue</option>
            </select>
            <button
              class="btn btn-success rounded-5 btn-lg px-4 text-white"
              type="submit"
            >
              <strong>Search</strong>
            </button>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div class="card rounded-5 border-0">
              <img
                src="@/src/assets/img-map-find-a-class.png"
                class="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>

        <div class="row my-4">
          <div class="col d-flex align-items-center">
            <h4 class="text-semibold h5 me-2">
              List of Venues
              <small class="text-secondary h6 text-semibold">+20 results</small>
            </h4>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <WebsiteBookClassListItem />
        <WebsiteBookClassListItem />
      </div>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.bg-find-a-class {
  background-color: #f6f6f7;
}
</style>
