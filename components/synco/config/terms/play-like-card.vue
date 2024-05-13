<template>
  <div class="card rounded-2 border p-3" style="background-color: #e2e1e5">
    <div class="d-flex justify-content-between flex-row">
      <div class="d-flex flex-column">
        <div class="d-flex flex-column">
          <span class="text-muted"> Title </span>
          <span>BVPELE1</span>
        </div>
        <div class="d-flex flex-column mt-2">
          <span class="text-muted"> Player </span>
          <span>PELE</span>
        </div>
      </div>
      <div>
        <div class="card rounded-3 bg-stadium border-0">
          <div class="row h-100 w-100">
            <div class="col-5">
              <div
                class="d-flex flex-column align-items-center justify-content-center h-100 text-light font-custom"
              >
                <span> PLAY LIKE </span>
                <span class="h3"> Pele </span>
              </div>
            </div>
            <div class="col-7">
              <img src="@/src/assets/img-pele.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <span class="text-muted">Exercises</span>
      </div>
      <div class="col-12">
        <div class="d-flex flex-row" style="overflow-y: scroll; height: 25px">
          <span class="badge badge-blue mx-1">Small-side games</span>
          <span class="badge badge-blue mx-1">Introduction (Head coach)</span>
          <span class="badge badge-blue mx-1">Warm up activity</span>
          <span class="badge badge-blue mx-1">Technical exercise</span>
          <span class="badge badge-blue mx-1">Lesson debrief</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.badge.badge-blue {
  background-color: #c5d8f3;
  color: #414243;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bg-stadium {
  background-image: url('@/src/assets/bg-stadium.png');
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center center;
  width: 360px;
  height: 90px;
}
@import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');
.font-custom {
  font-family: 'Luckiest Guy', cursive;
  font-weight: 400;
  font-style: normal;
}
</style>
