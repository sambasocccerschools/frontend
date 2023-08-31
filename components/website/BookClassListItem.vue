<template>
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
    <div class="card-body bg-muted mt-3 rounded-4 d-flex align-items-start px-4 text-muted" style="background: #F6F6F7">
      <div class=" pe-4 border-end border-muted border-1 d-flex flex-column"><span class="h4">Acton</span> <small>2
          miles</small></div>
      <div class=" px-4 order-end border-muted border-1 d-flex flex-column"><span class="h5">Saturday</span>
        <small>Outdoor</small>
      </div>
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
</template>

<style lang="scss" scoped>
.btn-venue {
  height: 2rem;
  width: 2rem;
  border-radius: 5rem;
  border: none;
}
</style>