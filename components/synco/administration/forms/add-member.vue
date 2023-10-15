<template>
   <form>
      <div class="mb-3">
         <label for="fullname" class="form-label">Full Name</label>
         <input type="text" class="form-control" id="fullname" placeholder="">
      </div>
      <div class="mb-3">
         <label for="position" class="form-label">Position</label>
         <input type="text" class="form-control" id="position" placeholder="">
      </div>
      <div class="mb-3">
         <label for="phone" class="form-label">Phone</label>
         <input type="phone" class="form-control" id="phone" placeholder="">
      </div>
      <div class="mb-3">
         <label for="email" class="form-label">Email</label>
         <input type="email" class="form-control" id="email" placeholder="">
      </div>
      <div class="mb-3">
         <label for="role" class="form-label">Role</label>
         <select class="form-select" aria-label="role" id="role">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
         </select>
      </div>
      <div class="mb-3">
         <label for="password" class="form-label">Password</label>
         <input type="password" class="form-control" id="password">
      </div>
      <div class="mb-3">
         <label for="profile-picture" class="form-label">Profile Picture</label>
         <input type="file" id="profile-picture" name="profile-picture">
      </div>
      <input type="submit" class="btn btn-primary text-light w-100 btn-lg" value="Add Member">

   </form>
</template>