<template>
  <div class="card rounded-4 border-0 shadow">
    <div class="card-body p-5">
      <form action="">
        <SyncoRecruitmentFormsCandidateInformationCard :no-border="true">
          <template v-slot:internal_title> </template>
          <template v-slot:additional_rows>
            <div class="row">
              <div class="col-6">
                <div class="form-group w-100 mb-3">
                  <label for="location" class="form-labelform-label-light"
                    >Location</label
                  >
                  <input
                    id="location"
                    type="text"
                    class="form-control form-control-lg"
                    placeholder="Enter location"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="form-group w-100 mb-3">
                  <label
                    for="availableCapital"
                    class="form-labelform-label-light"
                    >Capital available</label
                  >
                  <input
                    id="availableCapital"
                    type="text"
                    class="form-control form-control-lg"
                    placeholder="Enter capital available"
                  />
                </div>
              </div>
            </div>
            <div class="row my-2">
              <div class="col-12">
                <div class="form-group mb-3">
                  <label for="coverNote" class="form-label">Cover Note</label>
                  <textarea
                    id="coverNote"
                    type="text"
                    class="form-control"
                    rows="5"
                  ></textarea>
                </div>
              </div>
            </div>
          </template>
        </SyncoRecruitmentFormsCandidateInformationCard>

        <button class="btn btn-success bg-gradient rounded-5 w-100">
          <strong class="text-light">Send</strong>
        </button>
      </form>
    </div>
  </div>
</template>
