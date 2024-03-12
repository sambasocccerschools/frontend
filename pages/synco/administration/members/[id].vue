<script setup lang="ts">
import { useToast } from 'vue-toast-notification'
const toast = useToast()
const { $api } = useNuxtApp()
const route = useRoute()
const userId = route.params.id as string
const { data } = useAsyncData(`user:${userId}`, () =>
  $api.users.getUser(userId),
)
const user = data.value?.data

const isDeletingUser = ref(false)
const isSuspendingUser = ref(false)
const isRestoringUser = ref(false)
// const deleteUser = async () => {
//   try {
//     isDeletingUser.value = true
//     await $api.users.delete()
//   } catch (error: any) {
//     toast.error(error?.data?.message ?? error?.message)
//   } finally {
//     isDeletingUser.value = false
//   }
// }
const suspendUser = async () => {
  try {
    isSuspendingUser.value = true
    await $api.users.deactivateUser(userId)
    toast.success('User is suspended')
  } catch (error: any) {
    toast.error(error?.data?.message ?? error?.message)
  } finally {
    isSuspendingUser.value = false
  }
}

const restoreUser = async () => {
  try {
    isDeletingUser.value = true
    await $api.users.restoreUser(userId)
    toast.success('User is unsuspended')
  } catch (error: any) {
    toast.error(error?.data?.message ?? error?.message)
  } finally {
    isDeletingUser.value = false
  }
}
const isDisabled = computed(
  () => isDeletingUser.value || isSuspendingUser.value || isRestoringUser.value,
)
</script>

<template>
  <NuxtLayout name="syncolayout" page-title="Admin panel">
    <div class="container">
      <div class="row">
        <div class="col-sm-10 mx-auto">
          <!-- Top -->
          <div class="card mb-4 border">
            <div
              class="card-body d-flex align-items-center justify-content-between"
            >
              <div class="d-flex align-items-center">
                <img
                  :src="
                    user?.avatar_image
                      ? user.avatar_image.url
                      : '@/src/assets/img-avatar-member-admin.png'
                  "
                  :alt="user?.avatar_image.name ?? ''"
                  class="me-4"
                />
                <div>
                  <h3>{{ `${user?.first_name} ${user?.last_name}` }}</h3>
                  <p class="text-muted mb-1">{{ user?.email }}</p>
                  <p class="text-muted m-0">
                    {{ user?.role }} | {{ user?.position }}
                  </p>
                </div>
              </div>

              <button class="btn btn-transparent rounded-5 border">
                Edit Profile
                <Icon name="ph:pencil-simple-line-light" />
              </button>
            </div>
          </div>

          <!-- Personal Information  -->
          <div class="card mb-4 border">
            <div class="card-body">
              <div
                class="card-header d-flex align-items-center justify-content-between"
              >
                <h3 class="card-title h4 m-0">Personal Information</h3>
                <button class="btn btn-transparent rounded-5 border">
                  Edit
                  <Icon name="ph:pencil-simple-line-light" />
                </button>
              </div>
              <div class="card-body">
                <span class="text-muted mb-2">Full Name</span>
                <div class="h5 text-normal mb-3">
                  {{ `${user?.first_name} ${user?.last_name}` }}
                </div>

                <div class="row row-cols-2 gy-3">
                  <div class="col">
                    <span class="text-muted mb-2">Email Address</span>
                    <div class="h5 text-normal">{{ user?.email }}</div>
                  </div>
                  <div class="col">
                    <span class="text-muted mb-2">Phone</span>
                    <div class="h5 text-normal">{{ user?.phone_number }}</div>
                  </div>
                  <div class="col">
                    <span class="text-muted mb-2">Bio</span>
                    <div class="h5 text-normal">
                      {{ user?.bio }}
                    </div>
                  </div>
                  <div class="col">
                    <span class="text-muted mb-2">Password</span>
                    <div class="h5 text-normal">**********</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Address  -->
          <div class="card mb-4 border">
            <div class="card-body">
              <div
                class="card-header d-flex align-items-center justify-content-between"
              >
                <h3 class="card-title h4 m-0">Address</h3>
                <button class="btn btn-transparent rounded-5 border">
                  Edit
                  <Icon name="ph:pencil-simple-line-light" />
                </button>
              </div>
              <div class="card-body">
                <span class="text-muted mb-2">Country</span>
                <div class="h5 text-normal mb-3">{{ user?.country }}</div>

                <div class="row row-cols-2 gy-3">
                  <div class="col">
                    <span class="text-muted mb-2">City</span>
                    <div class="h5 text-normal">{{ user?.city }}</div>
                  </div>
                  <div class="col">
                    <span class="text-muted mb-2">Postal Code</span>
                    <div class="h5 text-normal">{{ user?.postal_code }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Permissions  -->
          <div class="card mb-4 border">
            <div class="card-body">
              <div
                class="card-header d-flex align-items-center justify-content-between"
              >
                <h5 class="card-title">Permissions</h5>
                <!-- Button trigger modal -->
                <button
                  type="button"
                  class="btn btn-primary rounded-5 text-light"
                  data-bs-toggle="modal"
                  data-bs-target="#addRoleModal"
                >
                  Add
                </button>
              </div>
            </div>
          </div>

          <!-- Actions  -->
          <div class="mb-5 pb-5 text-center">
            <button
              :disabled="isDisabled"
              class="btn mx-4 border"
              @click="suspendUser"
            >
              <span
                v-if="isSuspendingUser"
                class="spinner-border text-primary spinner-border-sm"
                role="status"
              ></span>
              <span v-else>Suspend</span>
            </button>
            <!-- <button
              :disabled="isDisabled"
              class="btn mx-4 border"
              @click="deleteUser"
            >
              <span
                v-if="isDeletingUser"
                class="spinner-border text-primary spinner-border-sm"
                role="status"
              ></span>
              <span v-else>Delete</span>
            </button> -->
            <button :disabled="isDisabled" class="btn btn-primary text-light">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Add Role Modal -->
    <div
      id="addRoleModal"
      class="modal fade centered"
      tabindex="-1"
      aria-labelledby="addRoleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header p-4">
            <h1 id="addRoleModalLabel" class="modal-title fs-3">New Role</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body p-4">
            <div class="form-group mb-3">
              <label for="rolename" class="form-label">Role Name</label>
              <input
                id="rolename"
                type="text"
                class="form-control"
                aria-describedby="roleNameHelp"
              />
            </div>
            <div class="form-group mb-3">
              <label for="sales" class="form-label">Sales</label>

              <div class="form-check">
                <input
                  id="sales-weekly-classes"
                  type="checkbox"
                  class="form-check-input"
                />
                <label class="form-check-label" for="sales-weekly-classes"
                  >Weekly Classes</label
                >
              </div>
              <div class="form-check">
                <input
                  id="sales-birthday-parties"
                  type="checkbox"
                  class="form-check-input"
                />
                <label class="form-check-label" for="sales-birthday-parties"
                  >Birthday Parties</label
                >
              </div>
            </div>

            <div class="form-group mb-3">
              <label for="sales" class="form-label">Customer Service</label>

              <div class="form-check">
                <input
                  id="customer-service-1"
                  type="checkbox"
                  class="form-check-input"
                />
                <label class="form-check-label" for="customer-service-1"
                  >Customer Service 1</label
                >
              </div>
              <div class="form-check">
                <input
                  id="customer-service-2"
                  type="checkbox"
                  class="form-check-input"
                />
                <label class="form-check-label" for="customer-service-2"
                  >Customer Service 2</label
                >
              </div>
            </div>

            <div class="form-group mb-3">
              <label for="sales" class="form-label">Recruitment</label>

              <div class="form-check">
                <input
                  id="recruitment-coaches"
                  type="checkbox"
                  class="form-check-input"
                />
                <label class="form-check-label" for="recruitment-coaches"
                  >Coaches</label
                >
              </div>
              <div class="form-check">
                <input
                  id="recruitment-pathway"
                  type="checkbox"
                  class="form-check-input"
                />
                <label class="form-check-label" for="recruitment-pathway"
                  >Pathway</label
                >
              </div>
            </div>
          </div>
          <div class="modal-footer border-0 p-4">
            <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> -->
            <button type="button" class="btn btn-primary w-100 text-light">
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
