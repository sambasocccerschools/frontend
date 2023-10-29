<template>
   <NuxtLayout name="syncolayout">
      <div class="container-fluid">
         <div class="row">
            <div class="col">
               <h4 class="mb-4">Term Dates & Mapping Session Plans</h4>
               <h5 class="mb-4">Add a term</h5>
               <div class="card">
                  <div class="card-body p-4">
                     <div class="row row-cols-2 gy-4">
                        <div class="col">
                           <label for="term-name">Term name</label>
                           <input type="text" class="form-control mt-2" id="term-name" placeholder="Autumn 23 Saturdays"
                              name="term-name">
                        </div>
                        <div class="col">
                           <label for="term">Term</label>
                           <input type="text" class="form-control mt-2" id="term" placeholder="Autumn" name="term">
                        </div>
                        <div class="col">
                           <label for="start-date">Start date</label>
                           <input type="date" class="form-control mt-2" id="start-date" name="start-date">
                           <!-- <input type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31" /> -->
                        </div>
                        <div class="col">
                           <label for="end-date">End date</label>
                           <input type="date" class="form-control mt-2" id="end-date" name="end-date">
                        </div>
                        <div class="col">
                           <label for="half-term-exclusion-date">Half-Term Exclusion Date(s)</label>
                           <input type="date" class="form-control mt-2" id="half-term-exclusion-date"
                              name="half-term-exclusion-date">
                        </div>
                        <div class="col">
                           <label for="total-number-of-sessions">Total Number of Sessions</label>
                           <input type="number" class="form-control mt-2" id="total-number-of-sessions"
                              name="total-number-of-sessions">
                        </div>
                     </div>
                     <div class="d-flex align-items-center justify-content-between">
                        <NuxtLink to="/synco/config/ven">Map Session</NuxtLink>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col">
               <h4>Map Sessions Plans</h4>
            </div>
         </div>
      </div>
   </NuxtLayout>
</template>
 