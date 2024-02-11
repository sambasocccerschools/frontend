<script>
const router = useRouter()

export default {
  data: () => ({
    members: [
      {
        id: 1,
        fullname: 'Rob Moya',
        email: 'rob@sambasoccerschools.com',
        role: 'Admin',
        phone: '346789',
        position: 'Team lead',
        activity: '2 days ago',
        profile: '@/src/assets/img-avatar-member-admin.png',
      },
    ],
    panel: false,
  }),
  methods: {
    goTo(id) {
      console.log(`/synco/administration/members/`, id)
      router.push({ path: `/synco/administration/members/${id}` })
    },
  },
}
</script>

<template>
  <NuxtLayout name="syncolayout" page-title="Admin panel">
    <div class="row">
      <div class="col">
        <div class="d-flex justify-content-between mb-4">
          <h4>Admin panel</h4>
          <button class="btn btn-primary text-light" @click="panel = !panel">
            + Add New Member
          </button>
        </div>

        <table class="table-hover table-sm rounded-4 table border shadow-sm">
          <thead class="rounded-top-4">
            <tr class="table-light">
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
            <tr
              v-for="member in members"
              class="align-middle"
              @click="goTo(member.id)"
            >
              <th scope="row">
                <img :src="member.profile" alt="" width="25" class="me-2" />
                {{ member.fullname }}
              </th>
              <td>{{ member.position }}</td>
              <td>{{ member.phone }}</td>
              <td>{{ member.email }}</td>
              <td>{{ member.role }}</td>
              <td>{{ member.activity }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-if="panel" class="col-sm-4">
        <div class="card">
          <div class="card-header border-bottom">
            <div class="card-title h4">
              <button
                class="btn btn-transparent m-0 p-0"
                @click="panel = !panel"
              >
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
