<template>
  <div class="card rounded-4 border-danger shadow">
    <div class="card-body p-2">
      <form action="">
        <SyncoWeeklyClassesFormsStudentForm
          :student="student"
          :no-border="true"
        >
          <template v-slot:internal_title>
            <h5 class="pb-4"><strong>Student information</strong></h5>
          </template>
        </SyncoWeeklyClassesFormsStudentForm>

        <SyncoWeeklyClassesFormsParentForm :parent="parent" :no-border="true">
          <template v-slot:internal_title>
            <div class="d-flex justify-content-between mb-4">
              <h5><strong>Parent information</strong></h5>
            </div>
          </template>
        </SyncoWeeklyClassesFormsParentForm>
        <button class="btn btn-success bg-gradient rounded-5 w-100 my-4">
          <strong class="text-light">Send</strong>
        </button>
      </form>
    </div>
  </div>
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
