<script>
export default {
  data: () => ({
    folders: 2,
    files: 3,
  }),
}
</script>

<template>
  <NuxtLayout name="syncolayout" page-title="Folders">
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <div class="card">
            <div
              class="card-header d-flex align-items-center justify-content-between border-bottom border-light-subtle"
            >
              <h4 class="card-title">
                <Icon name="tdesign:folder-minus" class="me-2" /> Folders
              </h4>
              <div class="d-flex align-items-center">
                <div class="form-group me-2">
                  <input
                    id="search"
                    type="text"
                    class="form-control form-control-sm"
                    placeholder="Search folder"
                  />
                </div>
                <button class="btn btn-primary text-light btn-sm">
                  <Icon name="ic:baseline-add" class="me-1" /> Create New
                </button>
              </div>
            </div>
            <div class="card-body">
              <div
                v-for="folder in folders"
                class="card rounded-5 bg-light border-light-subtle d-flex flex-column me-3 border p-3"
                style="height: 9rem; width: 9rem; float: left"
              >
                <img
                  src="@/src/assets/icon-folder-single.svg"
                  alt=""
                  width="30"
                />
                <small class="mt-2">Social Media Designs</small>
                <div class="d-flex justify-content-between mt-auto">
                  <small class="text-muted">5 Files</small>
                  <small>65 GB</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <div
              class="card-header border-light-subtle border-bottom d-flex align-items-center justify-content-between"
            >
              <h4 class="card-title">
                <Icon name="solar:file-linear" class="me-2" /> Files
              </h4>
              <div>
                <label for="files" class="btn btn-primary text-light">
                  <Icon name="ic:baseline-add" class="me-1" /> Upload file
                </label>
                <input id="files" style="visibility: hidden" type="file" />
              </div>
            </div>

            <div class="card-body">
              <div
                v-for="file in files"
                class="d-flex justify-content-between align-items-center py-2"
              >
                <div class="d-flex align-items-center">
                  <div
                    class="bg-primary-subtle d-flex align-items-center justify-content-center rounded-2 me-3"
                    style="height: 2.5rem; width: 2.5rem"
                  >
                    <img
                      src="@/src/assets/icon-folder-single.svg"
                      alt=""
                      width="30"
                    />
                  </div>
                  <div class="d-flex flex-column">
                    <span class="h6 m-0">DOC_Revision_12.doc</span>
                    <small class="text-muted">7/14/2022 - 1:40 AM</small>
                  </div>
                </div>
                <div>
                  <button class="btn btn-link text-dark px-1">
                    <Icon name="solar:download-minimalistic-bold" />
                  </button>
                  <button class="btn btn-link text-dark px-1">
                    <Icon name="fluent:delete-24-regular" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
