<template>
  <NuxtLayout name="syncolayout" page-title="Lead Database">
    <div class="card bg-secondary rounded-4">
      <div
        class="card-body d-flex align-items-center justify-content-between p-3"
      >
        <NuxtLink class="h4 text-light m-0" to="/synco/one-to-one">
          <Icon name="material-symbols:arrow-back" class="me-2" />One to One
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
        <template v-slot:footer>
          <div class="row mt-4 px-3">
            <div class="col-12 d-flex justify-content-end my-4 flex-row">
              <div class="">
                <button
                  class="btn btn-outline-secondary btn-lg"
                  @click="cancel"
                >
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
        </template>
      </SyncoWeeklyClassesFormsParentForm>

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
