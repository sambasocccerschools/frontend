<script>
export default {
  props: ['props'],
  // inheritAttrs: false,
  data: () => ({
    show: false,
  }),
}
</script>
<template>
  <!-- Need to see how to turn this into a link -->
  <tr
    class="align-middle"
    :class="show ? 'table-info border-bottom border-info' : ''"
  >
    <th scope="row">
      {{ props.title }}
    </th>
    <td>{{ props.createdBy }}</td>
    <td>{{ props.date }}</td>
    <td>{{ props.category }}</td>
    <td>{{ props.venue }}</td>
    <td>{{ props.region }}</td>
    <td>
      <span class="badge bg-warning-subtle text-warning px-1">
        {{ props.status }}
      </span>
    </td>
    <td>{{ props.assignedTo }}</td>
    <td>
      <button class="btn btn-light btn-sm" @click="show = !show">
        <Icon name="mdi:chevron-down" />
      </button>
    </td>
    <!-- Active, Waiting List, Frozen, Cancelled -->
  </tr>
  <tr v-if="show">
    <td colspan="9">
      <span class="h6">Details</span>
      <span class="d-block">{{ props.details }}</span>
    </td>
  </tr>
</template>
