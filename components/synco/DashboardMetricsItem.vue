<script lang="ts">
export default {
  props: [
    'name', // Name of the Metric
    'value', // Value of the Metric string
    'change', // the percentage of the metric that changed
    'icon' // Use the current icon naming convention
  ],
}
</script>

<template>
  <div class="col">
    <div class="card rounded-5 h-100 d-flex align-items-center">
      <div class="card-body flex-stretch">
        <div class="d-flex">
          <span class="informatics-circle bg-primary-subtle rounded-5 text-primary me-3">
            <Icon :name="icon" />
          </span>
          <div class=" d-flex flex-column">
            <small class="text-muted">{{ name }}</small>
            <div class="d-flex align-items-center">
              <span class="h4">{{ value }}</span> <span>({{ change }}%)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.informatics-circle {
  height: 3rem;
  width: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
}
</style>