<script>
export default {
  data: () => ({
    issues: [
      {
        id: 1,
        title: 'Parents not happy with access',
        createdBy: 'Ellis Marsh',
        date: 'Sat 13th May',
        category: 'Equipment',
        venue: 'Marylebone',
        region: '1',
        status: 'Pending',
        assignedTo: '',
        details:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a',
      },
      {
        id: 2,
        title: 'Parents not happy with access',
        createdBy: 'Ellis Marsh',
        date: 'Sat 16th May',
        category: 'Equipment',
        venue: 'Marylebone',
        region: '2',
        status: 'Pending',
        assignedTo: '',
        details:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a',
      },
    ],
  }),
}
</script>

<template>
  <NuxtLayout name="syncolayout">
    <div class="d-flex align-items-center justify-content-between">
      <h4>Issues List</h4>
      <div class="d-flex align-items-center">
        <label for="time-period" class="me-2 text-nowrap">Time Period</label>
        <input
          id="time-period"
          type="date"
          class="form-control"
          name="time-period"
        />
      </div>
    </div>

    <span class="text-danger">
      There are no actions defined, this relates also to Parent Connect, unsure
      if we can connect right now because if extra functionality. How to assign
      to people and what happens afterwards ? How to change status?
    </span>

    <table class="table-hover rounded-4 table border">
      <thead class="rounded-top-4">
        <tr class="table-light">
          <!-- <th scope="col">Checkbox</th> -->
          <th scope="col">
            <label class="form-check-label text-muted" for="all-table">
              Issue Title
            </label>
          </th>
          <th class="text-muted" scope="col">Created by</th>
          <th class="text-muted" scope="col">Date</th>
          <th class="text-muted" scope="col">Category</th>
          <th class="text-muted" scope="col">Venue</th>
          <th class="text-muted" scope="col">Region</th>
          <th class="text-muted" scope="col">Status</th>
          <th class="text-muted" scope="col">Assigned to</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <SyncoConfigCoachIssueTableItem
          v-for="issue in issues"
          :key="issue.id"
          :props="issue"
        />
      </tbody>
    </table>
  </NuxtLayout>
</template>
