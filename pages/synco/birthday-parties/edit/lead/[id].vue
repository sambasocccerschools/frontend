<template>
  <NuxtLayout name="syncolayout" page-title="Lead Database">
    <div class="card bg-secondary rounded-4">
      <div
        class="card-body d-flex align-items-center justify-content-between p-3"
      >
        <NuxtLink class="h4 text-light m-0" to="/synco/birthday-parties">
          <Icon name="material-symbols:arrow-back" class="me-2" />Birthday Party
          Lead Details
        </NuxtLink>
      </div>
    </div>
    <div>
      <SyncoWeeklyClassesFormsStudentForm :student="student">
        <template v-slot:internal_title>
          <h5 class="py-4"><strong>Student information</strong></h5>
        </template>
      </SyncoWeeklyClassesFormsStudentForm>

      <SyncoWeeklyClassesFormsParentForm :parent="parent">
        <template v-slot:internal_title>
          <div class="d-flex justify-content-between my-4">
            <h5><strong>Parent information</strong></h5>
            <button class="btn btn-primary text-light" @click="addParent">
              + Add new parent
            </button>
          </div>
        </template>
      </SyncoWeeklyClassesFormsParentForm>

      <div class="card rounded-4 mt-4 border-0 p-3">
        <label for="package" class="form-label">Selected package</label>
        <div class="d-flex gap-3">
          <div class="form-check">
            <input
              id="package-gold"
              class="form-check-input"
              type="radio"
              name="package"
            />
            <label class="form-check-label" for="package-gold"> Gold </label>
          </div>
          <div class="form-check">
            <input
              id="package-silver"
              class="form-check-input"
              type="radio"
              name="package"
            />
            <label class="form-check-label" for="package-silver">
              Silver
            </label>
          </div>
        </div>
        <div class="form-group mt-4">
          <label for="message" class="form-label">Message</label>
          <textarea
            id="message"
            type="text"
            class="form-control"
            rows="5"
            placeholder="Message"
          ></textarea>
        </div>
      </div>

      <div class="row mt-4 px-3">
        <div class="col-12 d-flex justify-content-end my-4 flex-row">
          <div class="">
            <button class="btn btn-outline-secondary btn-lg" @click="cancel">
              Cancel
            </button>
          </div>
          <div class="px-4">
            <button
              class="btn btn-danger text-light btn-lg"
              @click="removeLead"
            >
              Remove Lead
            </button>
          </div>
        </div>
      </div>
      <SyncoWeeklyClassesFormsCommentFormList />
    </div>
  </NuxtLayout>
</template>
<script>
const activities = ref([
  { label: 'Select from drop down', value: '' },
  { label: 'Weekly classes', value: 'Weekly classes' },
  { label: 'One to one', value: 'One to one' },
  { label: 'Holiday camps', value: 'Holiday camps' },
  { label: 'Clubs', value: 'Clubs' },
  { label: 'Merchandise', value: 'Merchandise' },
])
export default {
  data: () => ({
    parent: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      relationToChild: '',
      marketingChannel: '',
    },
    student: {
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      age: '',
      gender: '',
      medicalInformation: '',
      activityOfInterest: '',
    },
    activities: activities,
  }),
  watch: {
    'student.dateOfBirth'(newDate, oldDate) {
      let dob = new Date(newDate)
      let today = new Date()
      let ageDifference = today.getTime() - dob.getTime()
      var ageDate = new Date(ageDifference)
      let age = Math.abs(ageDate.getUTCFullYear() - 1970)
      this.student.age = age
    },
  },
  methods: {
    addParent() {
      console.log('add parent')
    },
    removeLead() {
      console.log('remove lead')
    },
    cancel() {
      console.log('cancel')
    },
  },
}
</script>
<style lang="scss" scoped>
.indicator {
  height: 2rem;
  width: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
