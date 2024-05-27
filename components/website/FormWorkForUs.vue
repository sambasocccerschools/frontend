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
              <label for="dob" class="form-label">Date of Birth</label>
              <input
                id="dob"
                type="date"
                class="form-control bg-light border-0"
                aria-describedby="dobHelp"
                placeholder="Date of Birth"
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
              <button
                id="profile-tab"
                class="btn btn-success text-light w-100 rounded-4"
                type="button"
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
            <div class="d-flex flex-column mb-4">
              <label for="qualifications" class="form-labelform-label-light">
                Please select which qualifications you have below
              </label>

              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="qualifications"
                  id="FALevel1"
                  value="FALevel1"
                />
                <label class="form-check-label" for="FALevel1">
                  FA Level 1
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="qualifications"
                  id="FALevel2"
                  value="FALevel2"
                />
                <label class="form-check-label" for="FALevel2">
                  FA Level 2
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="qualifications"
                  id="DBS"
                  value="DBS"
                />
                <label class="form-check-label" for="DBS">
                  DBS (within the year)
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="qualifications"
                  id="FutsalLevel1"
                  value="FutsalLevel1"
                />
                <label class="form-check-label" for="FutsalLevel1">
                  Futsal Level 1
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="qualifications"
                  id="UEFAB"
                  value="UEFAB"
                />
                <label class="form-check-label" for="UEFAB"> UEFA B </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="qualifications"
                  id="FirstAid"
                  value="FirstAid"
                />
                <label class="form-check-label" for="FirstAid">
                  First Aid (within 2 years)
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="qualifications"
                  id="none"
                  value="none"
                />
                <label class="form-check-label" for="none"> None </label>
              </div>
            </div>
            <div class="d-flex flex-column mb-4">
              <label for="experience" class="form-labelform-label-light">
                How many years football coaching experience do you have?
              </label>

              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="experience"
                  id="none"
                  value="none"
                />
                <label class="form-check-label" for="none"> None </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="experience"
                  id="1Year"
                  value="1"
                />
                <label class="form-check-label" for="1Year"> 1 Year </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="experience"
                  id="2Year"
                  value="2"
                />
                <label class="form-check-label" for="2Year"> 2 Year </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="experience"
                  id="3Year"
                  value="3"
                />
                <label class="form-check-label" for="3Year">
                  More than 3 Year
                </label>
              </div>
            </div>
            <div class="mb-4">
              <div class="form-group w-100 mb-3">
                <label for="venues" class="form-labelform-label-light"
                  >Please select which two venues you are available for your
                  voluntary work experience (Select all available
                  options)</label
                >
                <select id="venues" class="form-control form-control-lg">
                  <option>Select venue</option>
                </select>
              </div>
            </div>
            <div class="mb-4">
              <button
                id="profile-tab"
                class="btn btn-success text-light w-100 rounded-4"
                type="button"
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
            <div class="form-group w-100 mb-4">
              <label for="coverNote" class="form-labelform-label-light">
                Please Add a short cover note (500 words max)
              </label>
              <textarea
                id="coverNote"
                class="form-control form-control-lg"
                rows="4"
                placeholder="Message"
              ></textarea>
            </div>
            <div class="d-flex flex-column mb-4">
              <label for="marketing" class="form-labelform-label-light">
                How did you hear about this opportunity?
              </label>

              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="marketing"
                  id="indeed"
                  value="indeed"
                />
                <label class="form-check-label" for="indeed"> Indeed </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="marketing"
                  id="facebook"
                  value="facebook"
                />
                <label class="form-check-label" for="facebook">
                  Facebook
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="marketing"
                  id="google"
                  value="google"
                />
                <label class="form-check-label" for="google"> Google </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="marketing"
                  id="referal"
                  value="referal"
                />
                <label class="form-check-label" for="referal"> Referal </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="marketing"
                  id="other"
                  value="other"
                />
                <label class="form-check-label" for="other"> Other </label>
              </div>
            </div>
            <div class="mb-4">
              <button
                id="profile-tab"
                class="btn btn-success text-light w-100 rounded-4"
                type="button"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
