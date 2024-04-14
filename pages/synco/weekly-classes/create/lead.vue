<template>
  <NuxtLayout name="syncolayout" page-title="Lead Database">
    <div class="card bg-secondary rounded-4">
      <div
        class="card-body d-flex align-items-center justify-content-between p-3"
      >
        <NuxtLink class="h4 text-light m-0" to="/synco/weekly-classes/leads">
          <Icon name="material-symbols:arrow-back" class="me-2" />Add a new lead
        </NuxtLink>

        <div class="d-flex align-items-center">
          <div class="indicator rounded-circle bg-light h4 mb-0">
            <Icon name="mingcute:currency-pound-2-fill" />
          </div>
          <div class="indicator rounded-circle bg-light h4 mb-0 ms-3">
            <Icon name="ion:calendar" />
          </div>
          <div class="indicator rounded-circle bg-light h4 mb-0 ms-3">
            <Icon name="mdi:document" />
          </div>
        </div>
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
                <div class="form-group mb-3 w-100">
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
            <div v-for="(parent,pindex) in parentInformation" class="card rounded-4 mb-4 border w-100" :key="pindex">
              <SyncoWeeklyClassesParentListItem
                :parent="parent"
                />
            </div>
          </template>
          <div v-else-if="!parentExists && searched" class="row m-0 mt-2 w-100">
            <div class="p-0 mt-4">
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
      <div v-if="parentExists" class="row m-0 mt-4 w-100">
        <div class="p-0 mt-4">
          <h4>Didn't find what you were looking for? Create a new parent with the button below.</h4>
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

      <SyncoWeeklyClassesFormsParentForm
        :parent="parent"
      >
        <template v-slot:external_title>
          <h4 class="mt-4"><strong>Parents</strong></h4>
        </template>
        <template v-slot:internal_title>
          <h5 class="py-4"><strong>Parent information</strong></h5>
        </template>
        <template v-slot:footer>
          <div class="card rounded-4 mt-4 px-3">
            <div class="d-flex justify-content-between my-4">
              <button
                  class="btn btn-primary text-light btn-lg"
                  @click="addParent"
                >
                  + Add new parent
                </button>
              </div>
          </div>
        </template>
      </SyncoWeeklyClassesFormsParentForm>

      <SyncoWeeklyClassesFormsStudentForm
        :student="student"
      >
        <template v-slot:external_title>
          <h4 class="mt-4"><strong>Students</strong></h4>
        </template>
        <template v-slot:internal_title>
          <h5 class="py-4"><strong>Student information</strong></h5>
        </template>
        <template v-slot:additional_rows>
          <div class="row">
              <div class="col-6">
                  <div class="form-group mb-3 w-100">
                      <label for="studentAoI" class="form-labelform-label-light"
                      >Activity of interest</label
                      >
                      <select
                      id="studentAoI"
                      class="form-control form-control-lg"
                      v-model="student.activityOfInterest"
                      >
                      <option v-for="(activity,index) in activities" :value="activity.value" :key="index">{{activity.label}}</option>
                      </select>
                  </div>
              </div>
              <div class="col-6">
              </div>
          </div>
        </template>
        <template v-slot:footer>
          <div class="card rounded-4 mt-4 px-3">
              <div class="d-flex justify-content-between my-4">
                  <button
                      class="btn btn-primary text-light btn-lg"
                      @click="addStudent"
                      >
                      + Add new student
                  </button>
              </div>
          </div>
        </template>
      </SyncoWeeklyClassesFormsStudentForm>

      <SyncoWeeklyClassesFormsEmergencyContactForm
        :emergencyContact="emergencyContact"
      >
        <template v-slot:internal_title>
          <h5 class="py-4"><strong>Emergency contact details</strong></h5>
        </template>
        <template v-slot:footer>
          <div class="row mt-4 px-3">
              <div class="col-12 d-flex flex-row my-4">
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
                          class="btn btn-primary text-light btn-lg"
                          @click="addLead"
                      >
                          Add Lead
                      </button>
                  </div>
              </div>
          </div>
        </template>
      </SyncoWeeklyClassesFormsEmergencyContactForm>

      <SyncoWeeklyClassesFormsCommentFormList/>
    </div>
  </NuxtLayout>
</template>
<script>
const activities  = ref([
    {label:"Select from drop down", value:""},
    {label:"Weekly classes", value:"Weekly classes"},
    {label:"One to one", value:"One to one"},
    {label:"Holiday camps", value:"Holiday camps"},
    {label:"Clubs", value:"Clubs"},
    {label:"Merchandise", value:"Merchandise"},
])
const parentInformation = ref([
  {
    "First Name":"John",
    "Last Name":"Doe",
    "Status":"Active",
    "Email":"john.doe@gmail.com",
    "Gocardless ID":"123456789",
    "Created":"01/01/2023",
    "Address":"The king Fahad Academy, East Acton Lane,London W3 7HD",
    "Phone number":"123 456 789"
  },
  {
    "First Name":"John",
    "Last Name":"Doe",
    "Status":"Active",
    "Email":"john.doe@gmail.com",
    "Gocardless ID":"123456789",
    "Created":"01/01/2023",
    "Address":"The king Fahad Academy, East Acton Lane,London W3 7HD",
    "Phone number":"123 456 789",
    "Students":[{
      "First Name":"Erik",
      "Last Name":"Doe",
      "Age":"8",
      "Gender":"Masculine",
      "Date of Birth":"22/09/2016",
      "Activity of interest":"Weekly classes"
    },
    {
      "First Name":"Mark",
      "Last Name":"Doe",
      "Age":"10",
      "Gender":"Masculine",
      "Date of Birth":"24/03/2014",
      "Activity of interest":"Weekly classes"
    }]
  }
]);
export default {
  data: () => ({
    createParent:false,
    parentName:'',
    parentExists:false,
    searched:false,
    parentInformation:parentInformation,
    parent:{
      firstName:"",
      lastName:"",
      email:"",
      phoneNumber:"",
      relationToChild:"",
      marketingChannel:""
    },
    student:{
      firstName:"",
      lastName:"",
      dateOfBirth:"",
      age:"",
      gender:"",
      medicalInformation:"",
      activityOfInterest:""
    },
    emergencyContact:{
      firstName:"",
      lastName:"",
      phoneNumber:"",
      relationToChild:"",
    },
    activities:activities
  }),
  watch:{
    "student.dateOfBirth"(newDate, oldDate){
      let dob = new Date(newDate);
      let today = new Date();
      let ageDifference = today.getTime()-dob.getTime();
      var ageDate = new Date(ageDifference);
      let age = Math.abs(ageDate.getUTCFullYear()-1970);
      this.student.age = age
    }
  },
  methods:{
    search(){
      this.searched = false;
      if(!this.parentName) return
      this.searched = true;
      let parentInfo = this.parentInformation.filter(pi=>(`${pi["First Name"]} ${pi["Last Name"]}`).toLowerCase().includes(this.parentName.toLowerCase()))
      this.parentExists = parentInfo.length>0;
    },
    addParent(){
      console.log("add parent")
    },
    addStudent(){
      console.log("add student")
    },
    create(){
      this.createParent = true
    },
    addLead(){
      console.log("add lead")
    },
    cancel(){
      console.log("cancel")
    }
  }
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
