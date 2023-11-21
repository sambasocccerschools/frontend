<script>
export default {
  // inheritAttrs: false,
  data: () => ({
    show: false,
  }),
  props: ['props'],

}

</script>
<template>
  <tr class="align-middle">
    <td>
      <label class="form-check-label text-muted" for="tomjones">
        {{ props.venue }}
      </label>
    </td>
    <td>{{ props.invoiceID }}</td>
    <td>{{ props.sessions.length }}</td>
    <td>{{ props.dateRange }}</td>
    <td>{{ props.invoiceStatus }}</td>
    <td>{{ props.accountInPounds }}</td>
    <td class="d-flex justify-content-end">
      <button class="btn btn-primary text-light btn-sm" @click="show = !show">
        See More
        <Icon name="mdi:chevron-down" />
      </button>
    </td>
    <!-- Active, Waiting List, Frozen, Cancelled -->
  </tr>
  <tr v-if="show">
    <td colspan="8">
      <span class="h6 ">Details</span>
      <span v-for="session in props.sessions">
        <span class="d-block">
          <span class="col-3 d-inline-block">{{ session.id }}</span>
          <span class="col-3 d-inline-block">{{ session.address }}</span>
          <span class="col-3 d-inline-block">{{ session.date }}</span>
          <span class="col-3 d-inline-block text-end pe-3">£{{ session.accountInPounds }}</span>
        </span>
      </span>

    </td>
  </tr>
</template>