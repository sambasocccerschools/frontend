<template>
  <NuxtLayout name="syncolayout" page-title="Booking Form">
    <div class="card bg-secondary rounded-4">
      <div
        class="card-body d-flex align-items-center justify-content-between p-3"
      >
        <NuxtLink class="h4 text-light m-0" @click.prevent="goBack">
          <Icon name="material-symbols:arrow-back" class="me-2" />Book a Free
          Trial
        </NuxtLink>

        <div class="d-flex align-items-center">
          <div class="dropdown">
            <button
              class="btn dropdown-toggle btn-light rounded-circle bg-light indicator h4 mb-0 p-0"
              type="button"
              data-toggle="dropdown"
              :aria-expanded="showSubscriptionCard"
              @click="toggleSubscriptionCard"
            >
              <Icon name="mingcute:currency-pound-2-fill" />
            </button>
            <template v-if="showSubscriptionCard">
              <SyncoWeeklyClassesComponentsSubscriptionPlanCard
                @toggle-subscription-card="toggleSubscriptionCard"
              />
            </template>
          </div>
          <div class="dropdown ms-3">
            <button
              class="btn dropdown-toggle btn-light rounded-circle bg-light indicator h4 mb-0 p-0"
              type="button"
              data-toggle="dropdown"
              :aria-expanded="showCalculatorCard"
              @click="toggleCalculatorCard"
            >
              <Icon name="ph:calculator" />
            </button>
            <template v-if="showCalculatorCard">
              <div
                class="dropdown-menu dropdown-menu-right card rounded-4 bg-secondary position-absolute p-2 shadow-lg"
                style="right: -50px; top: 45px"
              >
                <SyncoCalculator />
              </div>
            </template>
          </div>
          <div class="dropdown ms-3">
            <button
              class="btn dropdown-toggle btn-light rounded-circle bg-light indicator h4 mb-0 p-0"
              type="button"
              data-toggle="dropdown"
              :aria-expanded="showScriptCard"
              @click="toggleScriptCard"
            >
              <Icon name="mdi:document" />
            </button>
            <template v-if="showScriptCard">
              <div
                class="dropdown-menu dropdown-menu-right card rounded-4 position-absolute shadow-lg"
                style="width: 360px; right: 0px; top: 45px"
              >
                <div
                  class="d-flex align-items-center justify-content-center h-100 flex-row"
                >
                  <div
                    class="card-header d-flex flex-column justify-content-between"
                  >
                    <span class="h5 card-title"
                      ><strong>Phone Script</strong></span
                    >
                    <p class="card-body">
                      In publishing and graphic design, Lorem ipsum is a
                      placeholder text commonly used to demonstrate the visual
                      form of a document or a typeface.
                    </p>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-4">
        <div class="card rounded-4 mt-4 px-3">
          <h5 class="py-4"><strong>Enter information</strong></h5>
          <div class="row">
            <div class="col-12">
              <div class="w-100 mb-3">
                <label for="venueInfo" class="form-labelform-label-light"
                  >Venue</label
                >
                <div class="input-group input-group-lg">
                  <!-- <div class="input-group-prepend">
                    <span class="input-group-text">
                      <Icon name="ph:magnifying-glass" class="indicator"
                    /></span>
                  </div> -->
                  <input
                    id="venueInfo"
                    type="text"
                    class="form-control"
                    placeholder="Enter venue"
                  />
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="form-group w-100 mb-3">
                <label
                  for="studentsNumberInfo"
                  class="form-labelform-label-light"
                  >Number of students</label
                >
                <input
                  id="studentsNumberInfo"
                  type="number"
                  class="form-control form-control-lg"
                  placeholder="Choose number of students"
                  min="0"
                  step="1"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="card rounded-4 mt-4 px-3">
          <h5 class="py-4"><strong>Select start date</strong></h5>
          <SyncoFilterByCalendar :class-date="classDate" />
        </div>
      </div>

      <div class="col-8">
        <SyncoWeeklyClassesFormsParentForm :parent="parent">
          <template #internal_title>
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

        <SyncoWeeklyClassesFormsStudentForm :student="student">
          <template #internal_title>
            <h5 class="py-4"><strong>Student information</strong></h5>
          </template>
          <template #additional_rows>
            <div class="row">
              <div class="col-6">
                <div class="form-group w-100 mb-3">
                  <label for="studentClass" class="form-labelform-label-light"
                    >Class</label
                  >
                  <select
                    id="studentClass"
                    v-model="student.class"
                    class="form-control form-control-lg"
                  >
                    <option
                      v-for="(cls, index) in classes"
                      :key="index"
                      :value="cls.value"
                    >
                      {{ cls.label }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="col-6">
                <div class="form-group w-100 mb-3">
                  <label for="studentTime" class="form-labelform-label-light"
                    >Time</label
                  >
                  <select
                    id="studentTime"
                    v-model="student.time"
                    class="form-control form-control-lg"
                  >
                    <option
                      v-for="(time, index) in times"
                      :key="index"
                      :value="time.value"
                    >
                      {{ time.label }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </template>
        </SyncoWeeklyClassesFormsStudentForm>

        <SyncoWeeklyClassesFormsEmergencyContactForm
          :emergency-contact="emergencyContact"
        >
          <template #internal_title>
            <h5 class="py-4">
              <strong>Emergency contact details</strong>
              <Icon name="ph:pencil-simple-line" />
            </h5>
          </template>
        </SyncoWeeklyClassesFormsEmergencyContactForm>

        <!-- <div class="card rounded-4 mt-4 px-3">
          <div
            class="d-flex justify-content-between align-items-center flex-row"
          >
            <h5 class="m-0 py-4">
              <strong>Key information</strong>
            </h5>
          </div>
        </div> -->

        <div class="row mt-4 px-3">
          <div class="col-12 d-flex justify-content-end my-4 flex-row">
            <div class="">
              <button class="btn btn-outline-secondary btn-lg" @click="cancel">
                Cancel
              </button>
            </div>
            <div class="px-4">
              <button
                class="btn btn-primary text-light btn-lg"
                @click="bookTrial"
              >
                Book FREE Trial
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
const router = useRouter()

const classes = ref([
  { label: 'Select from drop down', value: '' },
  { label: '4-7 years', value: 'Merchandise' },
])
const times = ref([
  { label: 'Automatic entry', value: '' },
  { label: '4-6', value: '4-6' },
])
export default {
  data: () => ({
    classes: classes,
    times: times,
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
    showSubscriptionCard: false,
    showCalculatorCard: false,
    showScriptCard: false,
    classDate: new Date(),
  }),
  watch: {
    'student.dateOfBirth'(newDate, oldDate) {
      const dob = new Date(newDate)
      const today = new Date()
      const ageDifference = today.getTime() - dob.getTime()
      const ageDate = new Date(ageDifference)
      const age = Math.abs(ageDate.getUTCFullYear() - 1970)
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
    bookTrial() {
      console.log('bookTrial')
    },
    cancel() {
      console.log('cancel')
    },
    toggleSubscriptionCard() {
      this.showSubscriptionCard = !this.showSubscriptionCard
      this.showCalculatorCard = false
      this.showScriptCard = false
    },
    toggleCalculatorCard() {
      this.showCalculatorCard = !this.showCalculatorCard
      this.showSubscriptionCard = false
      this.showScriptCard = false
    },
    toggleScriptCard() {
      this.showScriptCard = !this.showScriptCard
      this.showSubscriptionCard = false
      this.showCalculatorCard = false
    },
    goBack() {
      router.back()
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
