<script setup lang="ts">
   const layout = "weblayout";
</script>

<template>
  <NuxtLayout :name="layout">
    <div class="bg-find-a-class">
      <div class="container ">
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
            <button class="btn btn-success rounded-5 btn-lg text-white px-4" type="submit"><strong>Search</strong></button>
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
            <h4 class="text-semibold h5 me-2">List of Venues <small class="text-secondary h6 text-semibold">+20 results</small></h4> 
          </div>
        </div>

        

      </div>
      <div class="container-fluid">
        <div class="card rounded-4 p-2 mb-3">
          <div class="rounded-4 bg-primary text-light px-4 py-3 d-flex align-items-center justify-content-between">
            <div>The King Fahad Academy, East Acton Lane, London W3 7HD</div>
            <div class="gap-3 d-flex">
              <button class="btn-venue">P</button>
              <button class="btn-venue">P</button>
              <button class="btn-venue">P</button>
              <button class="btn-venue">P</button>
              <button class="btn-venue">P</button>
            </div>
          </div>
          <div class="card-body bg-muted mt-3 rounded-4 d-flex align-items-start px-4 text-muted">
            <div class=" pe-4 border-end border-muted border-1 d-flex flex-column"><span class="h4">Acton</span> <small>2 miles</small></div>
            <div class=" px-4 order-end border-muted border-1 d-flex flex-column"><span class="h5">Saturday</span> <small>Outdoor</small></div>
            <div class="w-100">
              <div class="border-bottom border-1 border-muted pb-2 d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center justify-content-center gap-3">
                  <span class="h6 text-semibold m-0">Class 1</span>
                  <span class="">4-7 years</span>
                  <span>9:30am-10:30am</span>
                  <span class="bg-danger-subtle text-danger d-flex align-items-center rounded-3 px-2">Fully Booked</span>
                </div>
                <div class="">
                  <button class="btn bg-info-subtle text-primary btn-sm"><strong>Add to Waiting List</strong></button>
                </div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center justify-content-center gap-3">
                  <span class="h6 text-semibold m-0">Class 2</span>
                  <span class="">8-12 years</span>
                  <span>10:30am-11:30am</span>
                  <span class="bg-success-subtle text-success d-flex align-items-center rounded-3 px-2">+4 spaces</span>
                </div>
                <div class=" d-flex align-items-center">
                  <button class="btn btn-outline-primary btn-sm me-3"><strong>Book a Membership</strong></button>
                  <button class="btn btn-primary btn-sm"><strong>Book a Free Trial</strong></button>
                </div>
              </div>
            </div>
            
          </div>

          
        </div>

        <div class="card rounded-4 p-2 mb-3">
          <div class="rounded-4 bg-primary text-light px-4 py-3 d-flex align-items-center justify-content-between">
            <div>The King Fahad Academy, East Acton Lane, London W3 7HD</div>
            <div class="gap-3 d-flex">
              <button class="btn-venue">P</button>
              <button class="btn-venue">P</button>
              <button class="btn-venue">P</button>
              <button class="btn-venue">P</button>
              <button class="btn-venue">P</button>
            </div>
          </div>
          <div class="card-body bg-muted mt-3 rounded-4 d-flex align-items-start px-4 text-muted">
            <div class=" pe-4 border-end border-muted border-1 d-flex flex-column"><span class="h4">Acton</span> <small>2 miles</small></div>
            <div class=" px-4 order-end border-muted border-1 d-flex flex-column"><span class="h5">Saturday</span> <small>Outdoor</small></div>
            <div class="w-100">
              <div class="border-bottom border-1 border-muted pb-2 d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center justify-content-center gap-3">
                  <span class="h6 text-semibold m-0">Class 1</span>
                  <span class="">4-7 years</span>
                  <span>9:30am-10:30am</span>
                  <span class="bg-danger-subtle text-danger d-flex align-items-center rounded-3 px-2">Fully Booked</span>
                </div>
                <div class="">
                  <button class="btn bg-info-subtle text-primary btn-sm"><strong>Add to Waiting List</strong></button>
                </div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center justify-content-center gap-3">
                  <span class="h6 text-semibold m-0">Class 2</span>
                  <span class="">8-12 years</span>
                  <span>10:30am-11:30am</span>
                  <span class="bg-success-subtle text-success d-flex align-items-center rounded-3 px-2">+4 spaces</span>
                </div>
                <div class=" d-flex align-items-center">
                  <button class="btn btn-outline-primary btn-sm me-3"><strong>Book a Membership</strong></button>
                  <button class="btn btn-primary btn-sm"><strong>Book a Free Trial</strong></button>
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
.bg-find-a-class {
  background-color: #F6F6F7;
}
.btn-venue {
  height: 2rem;
  width: 2rem;
  border-radius: 5rem;
  border: none;
}
.bg-muted {
  background-color: #F6F6F7;
}
</style>