<script lang="ts" setup>
import type { ICreateUserParams } from '~/types/index'
import { useToast } from 'vue-toast-notification'
const { $api } = useNuxtApp()
const router = useRouter()
const toast = useToast()
const page = ref(1)
const panel = ref(false)
const isLoadingCreateMember = ref(false)
const limit = 25
const { data: usersData } = await $api.users.getUsers({
  page: page.value,
  limit,
})

const goTo = (id: string) => {
  router.push({ path: `/synco/administration/members/${id}` })
}

const createMember = async (input: ICreateUserParams) => {
  try {
    isLoadingCreateMember.value = true
    await $api.users.createUser(input)

    // refetch users
    await $api.users.getUsers({
      page: page.value,
      limit,
    })

    toast.success('User is created successfully')
  } catch (error: any) {
    toast.error((error?.data as any)?.message)
  } finally {
    isLoadingCreateMember.value = false
  }
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
              v-for="member in usersData?.data"
              :key="member.id"
              class="align-middle"
              @click="goTo(member.id)"
            >
              <th scope="row">
                <img
                  :src="member.avatar_image?.url"
                  alt=""
                  width="25"
                  class="me-2"
                />
                {{ member.first_name }} {{ member.last_name }}
              </th>
              <td>{{ member.position }}</td>
              <td>{{ member.phone_number }}</td>
              <td>{{ member.email }}</td>
              <td>{{ member.position }}</td>
              <td
                v-if="member.last_active_at && member.last_active_at.length > 0"
              >
                {{ $dayjs(member.last_active_at, 'DD/MM/YYYY') }}
              </td>
              <td v-else></td>
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
            <SyncoAdministrationFormsAddMember
              :loading="isLoadingCreateMember"
              :create-member="createMember"
            />
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
