<script>
export default {
  data: () => ({
    id: 1,
    fullname: 'Rob Moya',
    email: 'rob@sambasoccerschools.com',
    role: 'Admin',
    phone: '346789',
    position: 'Team lead',
    activity: '2 days ago',
    profile: '@/src/assets/img-avatar-member-admin.png',
    country: 'United Kingdom',
    city: 'London',
    postalcode: 'ERT 1136',
  }),
}
</script>

<template>
  <NuxtLayout name="syncolayout" page-title="Admin panel">
    <div class="container">
      <div class="row">
        <div class="col-sm-10 mx-auto">
          <!-- Top -->
          <div class="card mb-4 border border">
            <div
              class="card-body d-flex align-items-center justify-content-between"
            >
              <div class="d-flex align-items-center">
                <img
                  src="@/src/assets/img-avatar-member-admin.png"
                  alt=""
                  class="me-4"
                />
                <div>
                  <h3>{{ fullname }}</h3>
                  <p class="text-muted mb-1">{{ email }}</p>
                  <p class="text-muted m-0">{{ role }} | {{ position }}</p>
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
                <div class="h5 text-normal mb-3">{{ fullname }}</div>

                <div class="row row-cols-2 gy-3">
                  <div class="col">
                    <span class="text-muted mb-2">Email Address</span>
                    <div class="h5 text-normal">{{ email }}</div>
                  </div>
                  <div class="col">
                    <span class="text-muted mb-2">Phone</span>
                    <div class="h5 text-normal">{{ phone }}</div>
                  </div>
                  <div class="col">
                    <span class="text-muted mb-2">Bio</span>
                    <div class="h5 text-normal">{{ position }}, {{ role }}</div>
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
                <div class="h5 text-normal mb-3">{{ country }}</div>

                <div class="row row-cols-2 gy-3">
                  <div class="col">
                    <span class="text-muted mb-2">City</span>
                    <div class="h5 text-normal">{{ city }}</div>
                  </div>
                  <div class="col">
                    <span class="text-muted mb-2">Postal Code</span>
                    <div class="h5 text-normal">{{ postalcode }}</div>
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
            <button class="btn border">Suspend</button>
            <button class="btn mx-4 border">Delete</button>
            <button class="btn btn-primary text-light">Save</button>
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
