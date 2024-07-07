<template>
  <tr class="align-middle">
    <th scope="row">
      <input id="tomjones" class="form-check-input" type="checkbox" value="" />
    </th>
    <td>
      <label class="form-check-label text-muted" for="tomjones">
        Tom Jones
      </label>
    </td>
    <td>7</td>
    <td>Acton</td>
    <td>Sat 1st Nov 22</td>
    <td>Sat 2nd Nov 22</td>
    <td>[Agent Abdul A.]</td>
    <td>1</td>
    <td>
      <span class="badge bg-danger-subtle text-danger px-1">
        Not attended
      </span>
      <button class="btn btn-light btn-sm" @click="show = !show">
        <Icon name="mdi:chevron-down" />
      </button>
    </td>
    <!-- Active, Waiting List, Frozen, Cancelled -->
  </tr>
</template>
