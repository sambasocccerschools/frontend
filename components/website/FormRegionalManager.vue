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
            <div class="mb-4">
              <label for="firstname" class="form-label">First Name</label>
              <input
                id="firstname"
                type="text"
                class="form-control bg-light border-0"
                aria-describedby="firstnameHelp"
                placeholder="First Name"
              />
              <!-- <div id="firstnameHelp" class="form-text">We'll never share your email with anyone else.</div> -->
            </div>
            <div class="mb-4">
              <label for="surname" class="form-label">Surname</label>
              <input
                id="surname"
                type="text"
                class="form-control bg-light border-0"
                aria-describedby="surnameHelp"
                placeholder="Surname"
              />
              <!-- <div id="surnameHelp" class="form-text">We'll never share your email with anyone else.</div> -->
            </div>
            <div class="mb-4">
              <label for="email" class="form-label">Email address</label>
              <input
                id="email"
                type="email"
                class="form-control bg-light border-0"
                aria-describedby="emailHelp"
                placeholder="Email"
              />
              <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
            </div>
            <div class="mb-4">
              <label for="phone" class="form-label">Telephone Number</label>
              <input
                id="phone"
                type="phone"
                class="form-control bg-light border-0"
                aria-describedby="phoneHelp"
                placeholder="Telephone Number"
              />
              <!-- <div id="phoneHelp" class="form-text">We'll never share your email with anyone else.</div> -->
            </div>
            <div class="mb-4">
              <label for="age" class="form-label">Age</label>
              <input
                id="age"
                type="text"
                class="form-control bg-light border-0"
                aria-describedby="ageHelp"
                placeholder="Age"
              />
              <!-- <div id="ageHelp" class="form-text">We'll never share your email with anyone else.</div> -->
            </div>
            <div class="mb-4">
              <label for="london-postcode" class="form-label"
                >London Postcode</label
              >
              <input
                id="london-postcode"
                type="text"
                class="form-control bg-light border-0"
                aria-describedby="londonPostCodeHelp"
                placeholder="London Postcode"
              />
              <!-- <div id="londonPostCodeHelp" class="form-text">We'll never share your email with anyone else.</div> -->
            </div>

            <div class="mb-4">
              <label for="own-vehicle" class="form-label"
                >Do you have access to your own vehicle?</label
              >
              <div class="d-flex">
                <div class="form-check me-4">
                  <input
                    id="own-vehicle2"
                    class="form-check-input"
                    type="radio"
                    name="own-vehicle"
                    checked
                  />
                  <label class="form-check-label" for="own-vehicle2">
                    Yes
                  </label>
                </div>
                <div class="form-check">
                  <input
                    id="own-vehicle1"
                    class="form-check-input"
                    type="radio"
                    name="own-vehicle"
                  />
                  <label class="form-check-label" for="own-vehicle1">
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div
            id="section2-tab-pane"
            class="tab-pane fade"
            role="tabpanel"
            aria-labelledby="profile-tab"
            tabindex="0"
          >
            Section 2
          </div>
          <div
            id="section3-tab-pane"
            class="tab-pane fade"
            role="tabpanel"
            aria-labelledby="contact-tab"
            tabindex="0"
          >
            Section 3
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
