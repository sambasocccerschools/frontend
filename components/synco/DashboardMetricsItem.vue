<script lang="ts">
export default {
  props: [
    'name', // Name of the Metric
    'value', // Value of the Metric string
    'change', // the percentage of the metric that changed
    'icon', // Use the current icon naming convention
  ],
}
</script>

<template>
  <div class="col">
    <div class="card rounded-4 h-100">
      <div class="card-body d-flex align-items-center justify-content-start">
        <span
          class="informatics-circle bg-primary-subtle rounded-5 text-primary me-2"
        >
          <Icon :name="icon" />
        </span>
        <div class="d-flex flex-column">
          <small class="text-muted">{{ name }}</small>
          <div class="d-flex align-items-center">
            <span class="h6 m-0">{{ value }}</span> <span>({{ change }}%)</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.informatics-circle {
  height: 2rem;
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
}
</style>
