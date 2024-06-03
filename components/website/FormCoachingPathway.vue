<template>
  <div class="card rounded-4 border-0 shadow">
    <div class="card-body p-5">
      <form action="">
        <ul id="myTab" class="nav nav-tabs" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              id="home-tab"
              class="nav-link active"
              data-bs-toggle="tab"
              data-bs-target="#section1-tab-pane"
              type="button"
              role="tab"
              aria-controls="section1-tab-pane"
              aria-selected="true"
            >
              Section 1
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              id="profile-tab"
              class="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#section2-tab-pane"
              type="button"
              role="tab"
              aria-controls="section2-tab-pane"
              aria-selected="false"
            >
              Section 2
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              id="contact-tab"
              class="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#section3-tab-pane"
              type="button"
              role="tab"
              aria-controls="section3-tab-pane"
              aria-selected="false"
            >
              Section 3
            </button>
          </li>
        </ul>
        <div id="myTabContent" class="tab-content mt-4">
          <div
            id="section1-tab-pane"
            class="tab-pane fade show active"
            role="tabpanel"
            aria-labelledby="home-tab"
            tabindex="0"
          >
            <SyncoRecruitmentFormsCandidateInformationCard :no-border="true">
            </SyncoRecruitmentFormsCandidateInformationCard>
            <div class="mb-4">
              <button
                id="profile-tab"
                class="btn btn-success text-light w-100 rounded-4"
                type="button"
                data-bs-toggle="tab"
                data-bs-target="#section2-tab-pane"
                role="tab"
                aria-controls="section2-tab-pane"
                aria-selected="false"
              >
                Next
              </button>
            </div>
          </div>
          <div
            id="section2-tab-pane"
            class="tab-pane fade"
            role="tabpanel"
            aria-labelledby="profile-tab"
            tabindex="0"
          >
            <SyncoRecruitmentFormsJobSpecificationsCard :no-border="true">
            </SyncoRecruitmentFormsJobSpecificationsCard>
            <div class="mb-4">
              <button
                class="btn btn-success text-light w-100 rounded-4"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#section3-tab-pane"
                type="button"
                role="tab"
                aria-controls="section3-tab-pane"
                aria-selected="false"
              >
                Next
              </button>
            </div>
          </div>
          <div
            id="section3-tab-pane"
            class="tab-pane fade"
            role="tabpanel"
            aria-labelledby="contact-tab"
            tabindex="0"
          >
            <SyncoRecruitmentFormsFurtherDetailsCard :no-border="true">
            </SyncoRecruitmentFormsFurtherDetailsCard>
            <button
              type="submit"
              class="btn btn-success bg-gradient rounded-5 w-100"
            >
              <strong class="text-light">Send</strong>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
