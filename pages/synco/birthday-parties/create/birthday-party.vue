<template>
  <NuxtLayout name="syncolayout" page-title="Booking Form">
    <div class="card bg-secondary rounded-4">
      <div
        class="card-body d-flex align-items-center justify-content-between p-3"
      >
        <NuxtLink class="h4 text-light m-0" to="/synco/birthday-parties">
          <Icon name="material-symbols:arrow-back" class="me-2" />Book a
          Birthday Party
        </NuxtLink>
      </div>
    </div>
    <div class="row">
      <div class="col-4">
        <div class="card rounded-4 mt-4 px-3">
          <h5 class="py-4"><strong>General Information</strong></h5>
          <div class="row">
            <div class="col-12">
              <div class="form-group w-100 mb-3">
                <label for="address" class=""> Address </label>
                <input
                  id="address"
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Search address"
                />
              </div>
            </div>
            <div class="col-12">
              <div class="form-group w-100 mb-3">
                <label for="date" class=""> Date </label>
                <select id="date" class="form-control form-control-lg">
                  <option>Choose date</option>
                </select>
              </div>
            </div>
            <div class="col-12">
              <div class="form-group w-100 mb-3">
                <label for="time" class="form-labelform-label-light">
                  Time
                </label>
                <select id="time" class="form-control form-control-lg">
                  <option>Choose time</option>
                </select>
              </div>
            </div>
            <div class="col-12">
              <div class="form-group w-100 mb-3">
                <label for="students" class=""> Capacity </label>
                <input
                  id="students"
                  type="number"
                  class="form-control form-control-lg"
                  min="1"
                  max="100"
                />
              </div>
            </div>
            <div class="col-12">
              <div class="form-group w-100 mb-3">
                <label for="coach" class="form-labelform-label-light">
                  Select a coach(es)
                </label>
                <select id="coach" class="form-control form-control-lg">
                  <option>Choose coach</option>
                </select>
              </div>
            </div>
            <div class="col-12">
              <div class="form-group w-100 mb-3">
                <label for="package" class="form-labelform-label-light">
                  Package
                </label>
                <select id="time" class="form-control form-control-lg">
                  <option>Choose package</option>
                </select>
              </div>
            </div>
            <div class="col-12">
              <div class="form-group w-100 mb-3">
                <label for="discount" class="form-labelform-label-light">
                  Apply discount
                </label>
                <select id="discount" class="form-control form-control-lg">
                  <option>Select a discount code</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-4">
          <button
            class="btn btn-primary text-light btn-lg w-100"
            @click="toggleBreakdown"
          >
            Price Breakdown {{ !showBreakdown ? '+' : '-' }}
          </button>
        </div>
        <div class="card rounded-4 mt-4 p-3" v-if="showBreakdown">
          <div
            class="d-flex justify-content-between mb-3 flex-row"
            v-for="breakdown in breakdown"
          >
            <span>{{ breakdown?.label }}</span>
            <span
              ><strong>{{ breakdown?.value }}</strong></span
            >
          </div>
          <hr />
        </div>
      </div>
      <div class="col-8">
        <SyncoWeeklyClassesFormsStudentForm :student="student">
          <template v-slot:internal_title>
            <h5 class="py-4"><strong>Student information</strong></h5>
          </template>
        </SyncoWeeklyClassesFormsStudentForm>

        <SyncoWeeklyClassesFormsParentForm :parent="parent">
          <template v-slot:internal_title>
            <div
              class="d-flex justify-content-between align-items-center flex-row"
            >
              <h5 class="m-0 py-4">
                <strong>Parent information</strong>
              </h5>
              <button
                type="button"
                class="btn btn-primary text-light"
                @click="addParent"
              >
                Add Parent
              </button>
            </div>
          </template>
        </SyncoWeeklyClassesFormsParentForm>

        <SyncoWeeklyClassesFormsEmergencyContactForm
          :emergencyContact="emergencyContact"
        >
          <template v-slot:internal_title>
            <h5 class="py-4">
              <strong>Emergency contact details</strong>
            </h5>
          </template>
        </SyncoWeeklyClassesFormsEmergencyContactForm>

        <div class="card rounded-4 mt-4 px-3">
          <div
            class="d-flex justify-content-between align-items-center flex-row"
          >
            <h5 class="m-0 py-4">
              <strong>Key information</strong>
            </h5>
          </div>
        </div>

        <div class="row mt-4">
          <div class="col-12 d-flex justify-content-end my-4 flex-row">
            <div class="pe-4">
              <button class="btn btn-outline-secondary btn-lg" @click="cancel">
                Cancel
              </button>
            </div>
            <div>
              <button
                class="btn btn-primary text-light btn-lg"
                data-bs-toggle="modal"
                data-bs-target="#payment"
              >
                Make payment
              </button>
            </div>
          </div>
        </div>
        <SyncoWeeklyClassesFormsCommentFormList />
      </div>
    </div>
  </NuxtLayout>
</template>

<script>
const classes = ref([
  { label: 'Select from drop down', value: '' },
  { label: '4-7 years', value: 'Merchandise' },
])
const times = ref([
  { label: 'Automatic entry', value: '' },
  { label: '4-6', value: '4-6' },
])
const breakdown = ref([
  { label: 'One-off Joining Fee', value: '£35.00' },
  { label: 'Number of lessons pro-rate', value: '1' },
  { label: 'Price per class per child', value: '£23.66' },
  { label: 'Cost of pro-rate lessons', value: '£23.66' },
])
export default {
  data: () => ({
    classes: classes,
    times: times,
    breakdown: breakdown,
    showBreakdown: false,
    showDirectDebit: false,
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
      class: '',
      time: '',
    },
    emergencyContact: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      relationToChild: '',
    },
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
    addStudent() {
      console.log('add student')
    },
    cancel() {
      console.log('cancel')
    },
    toggleBreakdown() {
      this.showBreakdown = !this.showBreakdown
    },
  },
}
</script>
