<template>
  <div class="card shadow rounded-4 border-0">
    <div class="card-body p-5">
      <form action="">

        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#section1-tab-pane"
              type="button" role="tab" aria-controls="section1-tab-pane" aria-selected="true">Section 1</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#section2-tab-pane"
              type="button" role="tab" aria-controls="section2-tab-pane" aria-selected="false">Section 2</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#section3-tab-pane"
              type="button" role="tab" aria-controls="section3-tab-pane" aria-selected="false">Section 3</button>
          </li>

        </ul>
        <div class="tab-content mt-4" id="myTabContent">
          <div class="tab-pane fade show active" id="section1-tab-pane" role="tabpanel" aria-labelledby="home-tab"
            tabindex="0">
            <div class="mb-4">
              <label for="firstname" class="form-label">First Name</label>
              <input type="text" class="form-control bg-light border-0" id="firstname" aria-describedby="firstnameHelp"
                placeholder="First Name">
              <!-- <div id="firstnameHelp" class="form-text">We'll never share your email with anyone else.</div> -->
            </div>
            <div class="mb-4">
              <label for="surname" class="form-label">Surname</label>
              <input type="text" class="form-control bg-light border-0" id="surname" aria-describedby="surnameHelp"
                placeholder="Surname">
              <!-- <div id="surnameHelp" class="form-text">We'll never share your email with anyone else.</div> -->
            </div>
            <div class="mb-4">
              <label for="phone" class="form-label">Telephone Number</label>
              <input type="phone" class="form-control bg-light border-0" id="phone" aria-describedby="phoneHelp"
                placeholder="Telephone Number">
              <!-- <div id="phoneHelp" class="form-text">We'll never share your email with anyone else.</div> -->
            </div>
            <div class="mb-4">
              <label for="email" class="form-label">Email address</label>
              <input type="email" class="form-control bg-light border-0" id="email" aria-describedby="emailHelp"
                placeholder="Email">
              <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
            </div>
            <div class="mb-4">
              <label for="age" class="form-label">Age</label>
              <input type="text" class="form-control bg-light border-0" id="age" aria-describedby="ageHelp"
                placeholder="Age">
              <!-- <div id="ageHelp" class="form-text">We'll never share your email with anyone else.</div> -->
            </div>
            <div class="mb-4">
              <label for="london-postcode" class="form-label">London Postcode</label>
              <input type="text" class="form-control bg-light border-0" id="london-postcode"
                aria-describedby="londonPostCodeHelp" placeholder="London Postcode">
              <!-- <div id="londonPostCodeHelp" class="form-text">We'll never share your email with anyone else.</div> -->
            </div>

          </div>
          <div class="tab-pane fade" id="section2-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
            Section 2

          </div>
          <div class="tab-pane fade" id="section3-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
            Section 3
          </div>

        </div>




      </form>
    </div>
  </div>
</template>