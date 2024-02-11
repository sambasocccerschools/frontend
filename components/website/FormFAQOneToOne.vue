<template>
  <div class="card rounded-4 border-danger shadow">
    <div class="card-body p-5">
      <form action="">
        <div class="mb-4">
          <label for="firstname" class="form-label">Parent Full Name</label>
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
          <label for="desiredLocation" class="form-label"
            >Desired location of the franchise</label
          >
          <input
            id="desiredLocation"
            type="text"
            class="form-control bg-light border-0"
            aria-describedby="desiredLocationHelp"
            placeholder="Desired location of the franchise"
          />
          <!-- <div id="desiredLocationHelp" class="form-text">We'll never share your email with anyone else.</div> -->
        </div>
        <div class="mb-4">
          <label for="liquid-capital" class="form-label"
            >How much liquid capital do you have available?</label
          >
          <input
            id="liquid-capital"
            type="text"
            class="form-control bg-light border-0"
            aria-describedby="liquidCapitalHelp"
            placeholder="How much liquid capital do you have available?"
          />
          <!-- <div id="liquidCapitalHelp" class="form-text">We'll never share your email with anyone else.</div> -->
        </div>
        <div class="mb-4">
          <label for="how-did-you-hear" class="form-label"
            >How did you hear about our franchise opportunity?</label
          >
          <input
            id="how-did-you-hear"
            type="text"
            class="form-control bg-light border-0"
            aria-describedby="howdidyouhear"
            placeholder="How did you hear about our franchise opportunity?"
          />
          <!-- <div id="howdidyouhear" class="form-text">We'll never share your email with anyone else.</div> -->
        </div>
        <div class="mb-4">
          <label for="message" class="form-label">Message</label>
          <textarea
            id="message"
            name="message"
            class="form-control"
            rows="4"
            placeholder="Message"
          ></textarea>
          <!-- <input type="email" class="form-control" id="email" aria-describedby="emailHelp"> -->
          <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
        </div>
        <button class="btn btn-success bg-gradient rounded-5 w-100">
          <strong class="text-light">Send</strong>
        </button>
      </form>
    </div>
  </div>
</template>
