<script>
export default {
  data: () => ({
    panel: false
  })
}
</script>

<template>
  <NuxtLayout name="syncolayout" pageTitle="Admin panel">
    <div class="row">
      <div class="col">
        <div class="d-flex justify-content-between mb-4">
          <h4>Admin panel</h4>
          <button class="btn btn-primary text-light" @click="panel = !panel">+ Add New Member</button>
        </div>

        <table class="table table-hover table-sm border rounded-4 shadow-sm">
          <thead class="rounded-top-4">
            <tr class="table-light ">
              <!-- <th scope="col">Checkbox</th> -->
              <th scope="col">User</th>
              <th class="text-muted" scope="col">Role</th>
              <th class="text-muted" scope="col">Phone</th>
              <th class="text-muted" scope="col">Email</th>
              <th class="text-muted" scope="col">Position</th>
              <th class="text-muted" scope="col">Activity</th>
            </tr>
          </thead>
          <tbody class="">
            <tr class="align-middle">
              <th scope="row">
                <img src="@/src/assets/img-avatar-member-admin.png" alt="" width="25" class="me-2">
                Mark Jones
              </th>
              <td>Admin</td>
              <td>12345678</td>
              <td>sarag@gmail.com</td>
              <td>Team Lead</td>
              <td>2 Days Ago</td>
            </tr>

          </tbody>
        </table>
      </div>
      <div class="col-sm-4" v-if="panel">
        <div class="card">
          <div class="card-header border-bottom">
            <div class="card-title h4">
              <button class="btn btn-transparent m-0 p-0" @click="panel = !panel">
                <Icon name="material-symbols:arrow-back" class="me-2" />
              </button>
              Add New Member
            </div>
          </div>
          <div class="card-body">
            <SyncoAdministrationFormsAddMember />
          </div>
        </div>

      </div>
    </div>
  </NuxtLayout>
</template>
