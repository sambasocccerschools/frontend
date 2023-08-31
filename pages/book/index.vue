<script setup lang="ts">
const layout = "weblayout";
</script>

<template>
  <NuxtLayout :name="layout">
    <div class="bg-find-a-class">
      <div class="container-fluid ">
        <div class="row justify-content-between pt-5 pb-4">
          <div class="col">
            <h1 class="text-info"><em>FIND A CLASS</em></h1>
          </div>
          <div class="col-auto d-flex align-items-center">
            <input type="text" placeholder="Enter your postcode" class="form-control me-2 rounded-5 px-3">
            Or
            <select name="" id="" placeholder="Or select a venue" class="form-select mx-2 rounded-5">
              <option value="">Or select a venue</option>
            </select>
            <button class="btn btn-success rounded-5 btn-lg text-white px-4"
              type="submit"><strong>Search</strong></button>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div class="card rounded-5 border-0">
              <img src="@/src/assets/img-map-find-a-class.png" class="img-fluid" alt="">
            </div>
          </div>
        </div>

        <div class="row my-4">
          <div class="col d-flex align-items-center">
            <h4 class="text-semibold h5 me-2">List of Venues <small class="text-secondary h6 text-semibold">+20
                results</small></h4>
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
  background-color: #F6F6F7;
}
</style>