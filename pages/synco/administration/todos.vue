<script>
export default {
  data: () => ({
    tab: 1, // 1 leads 2 sales 3 all,
    // These will get replaces by arrays
  }),
}
</script>

<template>
  <NuxtLayout name="syncolayout">
    <div class="d-flex justify-content-between align-items-center mb-5">
      <span class="h2 m-0">To Do list</span>
      <button class="btn btn-primary text-light shadow-sm">
        <Icon name="octicon:settings" class="me-2" /> Apply Filter
      </button>
    </div>

    <div class="row row-cols-4">
      <!-- To Do Column  -->
      <div class="col">
        <div class="d-flex justify-content-between align-items-center">
          <span class="h4 m-0 p-0"
            >To Do <span class="badge bg-primary rounded-5 ms-2">50</span></span
          >
          <!-- Button trigger modal -->
          <button
            type="button"
            class="btn btn-transparent"
            data-bs-toggle="modal"
            data-bs-target="#createTaskModal"
          >
            <Icon name="ic:baseline-add" class="h2 m-0" />
          </button>
        </div>
        <button
          type="button"
          class="btn text-primary w-100 my-4 border bg-white py-3"
          data-bs-toggle="modal"
          data-bs-target="#createTaskModal"
        >
          <span class="h5 m-0">
            <Icon name="ic:baseline-add" class="me-2" /> Add New Task
          </span>
        </button>

        <!-- Task -->
        <div
          class="card border"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#viewTaskModal"
        >
          <div class="card-body d-flex flex-column align-items-start">
            <span class="badge bg-warning-subtle text-warning p-3">Medium</span>
            <span class="h5 mt-3">Web Dashboard</span>
            <div class="d-flex py-3">
              <div class="d-flex align-items-center me-3">
                <img
                  src="@/src/assets/img-avatar-todo.png"
                  alt="avatar"
                  class="me-2"
                />
                Jessica
              </div>
              <div class="d-flex align-items-center">
                <img
                  src="@/src/assets/img-avatar-todo.png"
                  alt="avatar"
                  class="me-2"
                />
                Matt
              </div>
            </div>
          </div>
          <div
            class="card-footer border-top d-flex justify-content-between py-3"
          >
            <span> <Icon name="heroicons:paper-clip-solid" /> 2 </span>
            <span class="text-muted">4 days left</span>
          </div>
        </div>
      </div>

      <!-- In Progress Column  -->
      <div class="col">
        <div class="d-flex justify-content-between align-items-center">
          <span class="h4 m-0 p-0"
            >In Progress
            <span class="badge bg-warning rounded-5 ms-2">50</span></span
          >
          <!-- Button trigger modal -->
          <button
            type="button"
            class="btn btn-transparent"
            data-bs-toggle="modal"
            data-bs-target="#createTaskModal"
          >
            <Icon name="ic:baseline-add" class="h2 m-0" />
          </button>
        </div>
        <button
          type="button"
          class="btn text-primary w-100 my-4 border bg-white py-3"
          data-bs-toggle="modal"
          data-bs-target="#createTaskModal"
        >
          <span class="h5 m-0">
            <Icon name="ic:baseline-add" class="me-2" /> Add New Task
          </span>
        </button>

        <!-- Task -->
        <div
          class="card border"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#viewTaskModal"
        >
          <div class="card-body d-flex flex-column align-items-start">
            <span class="badge bg-warning-subtle text-warning p-3">Medium</span>
            <span class="h5 mt-3">Web Dashboard</span>
            <div class="d-flex py-3">
              <div class="d-flex align-items-center me-3">
                <img
                  src="@/src/assets/img-avatar-todo.png"
                  alt="avatar"
                  class="me-2"
                />
                Jessica
              </div>
              <div class="d-flex align-items-center">
                <img
                  src="@/src/assets/img-avatar-todo.png"
                  alt="avatar"
                  class="me-2"
                />
                Matt
              </div>
            </div>
          </div>
          <div
            class="card-footer border-top d-flex justify-content-between py-3"
          >
            <span> <Icon name="heroicons:paper-clip-solid" /> 2 </span>
            <span class="text-muted">4 days left</span>
          </div>
        </div>
      </div>

      <!-- In Review Column  -->
      <div class="col">
        <div class="d-flex justify-content-between align-items-center">
          <span class="h4 m-0 p-0"
            >In Review
            <span class="badge bg-warning rounded-5 ms-2">50</span></span
          >
          <!-- Button trigger modal -->
          <button
            type="button"
            class="btn btn-transparent"
            data-bs-toggle="modal"
            data-bs-target="#createTaskModal"
          >
            <Icon name="ic:baseline-add" class="h2 m-0" />
          </button>
        </div>
        <button
          type="button"
          class="btn text-primary w-100 my-4 border bg-white py-3"
          data-bs-toggle="modal"
          data-bs-target="#createTaskModal"
        >
          <span class="h5 m-0">
            <Icon name="ic:baseline-add" class="me-2" /> Add New Task
          </span>
        </button>

        <!-- Task -->
        <div
          class="card border"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#viewTaskModal"
        >
          <div class="card-body d-flex flex-column align-items-start">
            <span class="badge bg-warning-subtle text-warning p-3">Medium</span>
            <span class="h5 mt-3">Web Dashboard</span>
            <div class="d-flex py-3">
              <div class="d-flex align-items-center me-3">
                <img
                  src="@/src/assets/img-avatar-todo.png"
                  alt="avatar"
                  class="me-2"
                />
                Jessica
              </div>
              <div class="d-flex align-items-center">
                <img
                  src="@/src/assets/img-avatar-todo.png"
                  alt="avatar"
                  class="me-2"
                />
                Matt
              </div>
            </div>
          </div>
          <div
            class="card-footer border-top d-flex justify-content-between py-3"
          >
            <span> <Icon name="heroicons:paper-clip-solid" /> 2 </span>
            <span class="text-muted">4 days left</span>
          </div>
        </div>
      </div>

      <!-- Completed Column  -->
      <div class="col">
        <div class="d-flex justify-content-between align-items-center">
          <span class="h4 m-0 p-0"
            >Completed
            <span class="badge bg-success rounded-5 ms-2">50</span></span
          >
          <!-- Button trigger modal -->
          <button
            type="button"
            class="btn btn-transparent"
            data-bs-toggle="modal"
            data-bs-target="#createTaskModal"
          >
            <Icon name="ic:baseline-add" class="h2 m-0" />
          </button>
        </div>
        <button
          type="button"
          class="btn text-primary w-100 my-4 border bg-white py-3"
          data-bs-toggle="modal"
          data-bs-target="#createTaskModal"
        >
          <span class="h5 m-0">
            <Icon name="ic:baseline-add" class="me-2" /> Add New Task
          </span>
        </button>

        <!-- Task -->
        <div
          class="card border"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#viewTaskModal"
        >
          <div class="card-body d-flex flex-column align-items-start">
            <span class="badge bg-warning-subtle text-warning p-3">Medium</span>
            <span class="h5 mt-3">Web Dashboard</span>
            <div class="d-flex py-3">
              <div class="d-flex align-items-center me-3">
                <img
                  src="@/src/assets/img-avatar-todo.png"
                  alt="avatar"
                  class="me-2"
                />
                Jessica
              </div>
              <div class="d-flex align-items-center">
                <img
                  src="@/src/assets/img-avatar-todo.png"
                  alt="avatar"
                  class="me-2"
                />
                Matt
              </div>
            </div>
          </div>
          <div
            class="card-footer border-top d-flex justify-content-between py-3"
          >
            <span> <Icon name="heroicons:paper-clip-solid" /> 2 </span>
            <span class="text-muted">4 days left</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Create Modal -->
    <div
      id="createTaskModal"
      class="modal modal-xl fade centered"
      tabindex="-1"
      aria-labelledby="createTaskModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content rounded-5 overflow-hidden shadow-lg">
          <div class="modal-header py-4">
            <h1 id="createTaskModalLabel" class="modal-title fs-3">
              Create Task
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body p-0">
            <div class="container">
              <div class="row">
                <div class="col modal-dialog-scrollable">
                  <div class="d-flex flex-column h-100 p-3">
                    <div class="form-group mb-3">
                      <label for="title" class="form-label">Title</label>
                      <input id="title" type="text" class="form-control" />
                    </div>
                    <div class="form-group mb-5">
                      <label for="description" class="form-label"
                        >Description</label
                      >
                      <textarea
                        id="description"
                        type="text"
                        class="form-control"
                        rows="5"
                      ></textarea>
                    </div>
                    <div class="form-group mt-5">
                      <span class="h4">Add attachments</span>
                      <div
                        class="rounded-4 d-flex justify-content-center align-items-center flex-column my-3 border p-3"
                      >
                        <img
                          src="@/src/assets/icon-file-upload.svg"
                          alt="upload"
                        />
                        <span>
                          <a class="link-underline-dark me-2"
                            >Click to upload</a
                          >
                          or drag and drop</span
                        >
                      </div>
                    </div>
                  </div>
                  <div class="border-top px-3 py-4">
                    <strong class="h4">Comment</strong>
                    <div class="d-flex mt-2">
                      <img
                        src="@/src/assets/img-avatar-todo.png"
                        alt=""
                        class="me-2"
                      />
                      <input
                        type="text"
                        placeholder="Add a comment"
                        class="form-control"
                      />
                      <button class="btn btn-primary text-light ms-3">
                        <Icon name="lucide:send" />
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col-3 bg-light">
                  <div class="border-bottom p-3">
                    <span class="h5">Created by</span>
                  </div>
                  <div class="border-bottom p-3">
                    <span class="h5">Status</span>
                  </div>
                  <div class="border-bottom p-3">
                    <span class="h5">Assign</span>
                  </div>
                  <div class="border-bottom p-3">
                    <span class="h5">Priority</span>
                  </div>
                  <div class="border-bottom p-3">
                    <span class="h5">Created</span>
                  </div>

                  <div class="border-bottom p-3">
                    <span class="h5">Assign</span>
                  </div>
                  <div class="border-bottom p-3">
                    <span class="h5">Last update</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div> -->
        </div>
      </div>
    </div>

    <!-- View Modal -->
    <div
      id="viewTaskModal"
      class="modal modal-xl fade centered"
      tabindex="-1"
      aria-labelledby="viewTaskModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content rounded-5 overflow-hidden shadow-lg">
          <div class="modal-header py-4">
            <h1 id="viewTaskModalLabel" class="modal-title fs-3">Task</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body p-0">
            <div class="container">
              <div class="row">
                <div class="col modal-dialog-scrollable">
                  <div class="d-flex flex-column h-100 p-3">
                    <h3>Task 1 title</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Tellus tellus nec
                      at amet lacinia. Magna consect hac tellus nam vel lectus
                      morbi porta. Diam cum feugiat nibh sed quisque tincidunt
                      mattis blandit eget. Ultricies molestie nam ipsum est.
                      Porttitor sed mus magna dictum ultrices convallis sed
                      dignissim. Morbi diam massa morbi interdum. Dictum massa
                      nunc in neque pellentesque enim justo libero cursus. Vitae
                      nisl hendrerit est est at volutpat quam. Quis ultrices
                      habitant sit at.
                    </p>

                    <div class="border-bottom p-3">
                      <h4>Attachments</h4>
                    </div>
                    <div class="border-bottom p-3">
                      <h4>Comments</h4>
                    </div>
                    <div class="d-flex my-4">
                      <img
                        src="@/src/assets/img-avatar-todo.png"
                        alt=""
                        class="me-2"
                      />
                      <input
                        type="text"
                        placeholder="Add a comment"
                        class="form-control"
                      />
                      <button class="btn btn-primary text-light ms-3">
                        <Icon name="lucide:send" />
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col-3 bg-light">
                  <div class="border-bottom p-3">
                    <span class="h5">Created by</span>
                  </div>
                  <div class="border-bottom p-3">
                    <span class="h5">Status</span>
                  </div>
                  <div class="border-bottom p-3">
                    <span class="h5">Assign</span>
                  </div>
                  <div class="border-bottom p-3">
                    <span class="h5">Priority</span>
                  </div>
                  <div class="border-bottom p-3">
                    <span class="h5">Created</span>
                  </div>

                  <div class="border-bottom p-3">
                    <span class="h5">Assign</span>
                  </div>
                  <div class="border-bottom p-3">
                    <span class="h5">Last update</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div> -->
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
