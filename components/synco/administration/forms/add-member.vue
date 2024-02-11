<template>
  <form>
    <div class="mb-3">
      <label for="fullname" class="form-label">Full Name</label>
      <input id="fullname" type="text" class="form-control" placeholder="" />
    </div>
    <div class="mb-3">
      <label for="position" class="form-label">Position</label>
      <input id="position" type="text" class="form-control" placeholder="" />
    </div>
    <div class="mb-3">
      <label for="phone" class="form-label">Phone</label>
      <input id="phone" type="phone" class="form-control" placeholder="" />
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <input id="email" type="email" class="form-control" placeholder="" />
    </div>
    <div class="mb-3">
      <label for="role" class="form-label">Role</label>
      <select id="role" class="form-select" aria-label="role">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Password</label>
      <input id="password" type="password" class="form-control" />
    </div>
    <div class="mb-3">
      <label for="profile-picture" class="form-label">Profile Picture</label>
      <input id="profile-picture" type="file" name="profile-picture" />
    </div>
    <input
      type="submit"
      class="btn btn-primary text-light w-100 btn-lg"
      value="Add Member"
    />
  </form>
</template>
