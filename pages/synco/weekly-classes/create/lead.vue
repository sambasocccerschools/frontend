<template>
  <NuxtLayout name="syncolayout" page-title="Lead Database">
    <div class="card bg-secondary rounded-4">
      <div
        class="card-body d-flex align-items-center justify-content-between p-3"
      >
        <NuxtLink class="h4 text-light m-0" to="/synco/weekly-classes/leads">
          <Icon name="material-symbols:arrow-back" class="me-2" />Add a new lead
        </NuxtLink>

        <div class="d-flex align-items-center">
          <div class="indicator rounded-circle bg-light h4 mb-0">
            <Icon name="mingcute:currency-pound-2-fill" />
          </div>
          <div class="indicator rounded-circle bg-light h4 mb-0 ms-3">
            <Icon name="ion:calendar" />
          </div>
          <div class="indicator rounded-circle bg-light h4 mb-0 ms-3">
            <Icon name="mdi:document" />
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
<style lang="scss" scoped>
.indicator {
  height: 2rem;
  width: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
