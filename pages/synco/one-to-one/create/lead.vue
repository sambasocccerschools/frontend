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

    <template v-if="!createParent">
      <div class="card rounded-4 mt-4">
        <div
          class="card-body d-flex flex-column align-items-start justify-content-start p-3"
        >
          <h4 class="mb-3"><strong>Parent information</strong></h4>

          <div class="row w-100">
            <div class="col-12 col-md-7">
              <div class="d-flex align-items-center w-100">
                <div class="form-group w-100 mb-3">
                  <label for="parentName" class="form-labelform-label-light"
                    >Parent name</label
                  >
                  <input
                    id="parentName"
                    type="text"
                    class="form-control form-control-lg"
                    v-model="parentName"
                  />
                </div>
                <button
                  class="btn btn-primary text-light btn-lg mx-4"
                  @click="search"
                >
                  Search
                </button>
              </div>
            </div>
          </div>

          <template v-if="searched && parentExists">
            <div
              v-for="(parent, pindex) in parentInformation"
              class="card rounded-4 w-100 mb-4 border"
              :key="pindex"
            >
              <SyncoWeeklyClassesParentListItem :parent="parent" />
            </div>
          </template>
          <div v-else-if="!parentExists && searched" class="row w-100 m-0 mt-2">
            <div class="mt-4 p-0">
              <h4>Parent not found. Do you want to create a new parent?</h4>
              <button
                class="btn btn-primary text-light btn-lg my-2"
                @click="create"
              >
                Yes, create new parent
              </button>
            </div>
          </div>
        </div>
      </div>
      <div v-if="parentExists" class="row w-100 m-0 mt-4">
        <div class="mt-4 p-0">
          <h4>
            Didn't find what you were looking for? Create a new parent with the
            button below.
          </h4>
          <button
            class="btn btn-primary text-light btn-lg my-2"
            @click="create"
          >
            Create new parent
          </button>
        </div>
      </div>
    </template>

    <div v-else>
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

      <SyncoWeeklyClassesFormsStudentForm :student="student">
        <template v-slot:internal_title>
          <h5 class="py-4"><strong>Student information</strong></h5>
        </template>
      </SyncoWeeklyClassesFormsStudentForm>

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
    createParent: false,
    parentExists: false,
    searched: false,
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
    search() {
      this.searched = false
      if (!this.parentName) return
      this.searched = true
      let parentInfo = this.parentInformation.filter((pi) =>
        `${pi['firstName']} ${pi['lastName']}`
          .toLowerCase()
          .includes(this.parentName.toLowerCase()),
      )
      this.parentExists = parentInfo.length
    },
    addParent() {
      console.log('add parent')
    },
    addStudent() {
      console.log('add student')
    },
    create() {
      this.createParent = true
    },
    addLead() {
      console.log('add lead')
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
