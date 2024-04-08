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
          
          <template v-if="parentExists">
            <div v-for="(parent,pindex) in parentInformation" class="card rounded-4 mb-4 border" :key="pindex">
              <div class="card-body d-flex align-items-center justify-content-start py-4">
                <div class="d-flex col-auto">
                  <div class="d-flex flex-column px-3">
                    <label>Name</label>
                    {{parent["First Name"]}} {{parent["Last Name"]}}
                  </div>
                  <div class="vr"></div>
                  <div class="d-flex flex-column px-3">
                    <label>Status</label>
                    {{parent["Status"]}}
                  </div>
                  <div class="vr"></div>
                  <div class="d-flex flex-column px-3">
                    <label>Email</label>
                    {{parent["Email"]}}
                  </div>
                  <div class="vr"></div>
                  <div class="d-flex flex-column px-3">
                    <label>Gocardless ID</label>
                    {{ parent["Gocardless ID"] }}
                  </div>
                  <div class="vr"></div>
                  <div class="d-flex flex-column px-3">
                    <label>Created</label>
                    {{parent["Created"]}}
                  </div>
                  <div class="vr"></div>
                  <div class="d-flex flex-column px-3">
                    <label>Address</label>
                    {{parent["Address"]}}
                  </div>
                  <div class="vr"></div>
                  <div class="d-flex flex-column px-3">
                    <label>Phone number</label>
                    {{parent["Phone number"]}}
                  </div>
                </div>
                <button
                  @click="editParent"
                  class="btn btn-primary text-light ms-auto"
                  >Select parent</button
                >
              </div>
              <template v-if="!!parent['Students']">
                <div class="d-flex flex-row col-auto" :key="sindex">
                  <div v-for="(student,sindex) in parent['Students']" class="card rounded-4 mb-4 border mx-3 w-100" style="background-color: #fcf9f6;">
                    <h6 class="px-4 pt-4 pb-2"><strong>Student {{ sindex+1 }}</strong></h6>
                    <div class="d-flex flex-row pb-4">
                      <div class="d-flex flex-column px-3">
                        <label>Name</label>
                        {{student["First Name"]}} {{student["Last Name"]}}
                      </div>
                      <div class="d-flex flex-column px-3">
                        <label>Age</label>
                        {{student["Age"]}}
                      </div>
                      <div class="d-flex flex-column px-3">
                        <label>Gender</label>
                        {{student["Gender"]}}
                      </div>
                      <div class="d-flex flex-column px-3">
                        <label>Date of Birth</label>
                        {{student["Date of Birth"]}}
                      </div>
                      <div class="d-flex flex-column px-3">
                        <label>Activity of interest</label>
                        {{student["Activity of interest"]}}
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </template>
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
      <h4 class="mt-4"><strong>Parents</strong></h4>
      <div class="card rounded-4 mt-4 px-3">
        <h5 class="py-4"><strong>Parent information</strong></h5>
        <div class="row">
          <div class="col-6">
            <div class="form-group mb-3 w-100">
              <label for="parentFirstName" class="form-labelform-label-light"
                >First name</label
              >
              <input
                id="parentFirstName"
                type="text"
                class="form-control form-control-lg"
                placeholder="Enter first name"
                v-model="parent.firstName"
              />
            </div>
          </div>
          <div class="col-6">
            <div class="form-group mb-3 w-100">
              <label for="parentLastName" class="form-labelform-label-light"
                >Last name</label
              >
              <input
                id="parentLastName"
                type="text"
                class="form-control form-control-lg"
                placeholder="Enter last name"
                v-model="parent.lastName"
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <div class="form-group mb-3 w-100">
              <label for="parentEmail" class="form-labelform-label-light"
                >Email</label
              >
              <input
                id="parentEmail"
                type="text"
                class="form-control form-control-lg"
                placeholder="Enter email address"
                v-model="parent.email"
              />
            </div>
          </div>
          <div class="col-6">
            <div class="form-group mb-3 w-100">
              <label for="parentPhoneNumber" class="form-labelform-label-light"
                >Phone number</label
              >
              <input
                id="parentPhoneNumber"
                type="phone"
                class="form-control form-control-lg"
                placeholder="+44"
                v-model="parent.phoneNumber"
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <div class="form-group mb-3 w-100">
              <label for="parentRelation" class="form-labelform-label-light"
                >Relation to child</label
              >
              <select
                id="parentRelation"
                class="form-control form-control-lg"
                v-model="parent.relationToChild"
              >
                <option v-for="(relation,index) in parentChildRelation" :value="relation.value" :key="index">{{relation.label}}</option>
              </select>
            </div>
          </div>
          <div class="col-6">
            <div class="form-group mb-3 w-100">
              <label for="parentMarketingChannel" class="form-labelform-label-light"
                >How did you hear about us?</label
              >
              <select
                id="parentMarketingChannel"
                class="form-control form-control-lg"
                v-model="parent.marketingChannel"
              >
                <option v-for="(channel,index) in marketingChannels" :value="channel.value" :key="index">{{channel.label}}</option>
              </select>
            </div>
          </div>
        </div>
      </div>
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
      
      <h4 class="mt-4"><strong>Students</strong></h4>
      <div class="card rounded-4 mt-4 px-3">
        <h5 class="py-4"><strong>Student information</strong></h5>
        <div class="row">
          <div class="col-6">
            <div class="form-group mb-3 w-100">
              <label for="studentFirstName" class="form-labelform-label-light"
                >First name</label
              >
              <input
                id="studentFirstName"
                type="text"
                class="form-control form-control-lg"
                placeholder="Enter first name"
                v-model="student.firstName"
              />
            </div>
          </div>
          <div class="col-6">
            <div class="form-group mb-3 w-100">
              <label for="studentLastName" class="form-labelform-label-light"
                >Last name</label
              >
              <input
                id="studentLastName"
                type="text"
                class="form-control form-control-lg"
                placeholder="Enter last name"
                v-model="student.lastName"
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <div class="form-group mb-3 w-100">
              <label for="studentDoB" class="form-labelform-label-light"
                >Date of Birth</label
              >
              <input
                id="studentDoB"
                type="date"
                class="form-control form-control-lg"
                placeholder="Enter date of birth"
                v-model="student.dateOfBirth"
              />
            </div>
          </div>
          <div class="col-6">
            <div class="form-group mb-3 w-100">
              <label for="studentAge" class="form-labelform-label-light"
                >Age</label
              >
              <input
                id="studentAge"
                type="text"
                class="form-control form-control-lg"
                placeholder="Automatic entry"
                v-model="student.age"
                readonly
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <div class="form-group mb-3 w-100">
              <label for="studentGender" class="form-labelform-label-light"
                >Gender</label
              >
              <input
                id="studentGender"
                type="text"
                class="form-control form-control-lg"
                placeholder="Enter gender"
                v-model="student.gender"
              />
            </div>
          </div>
          <div class="col-6">
            <div class="form-group mb-3 w-100">
              <label for="studentMedicalInformation" class="form-labelform-label-light"
                >Medical information</label
              >
              <input
                id="studentMedicalInformation"
                type="text"
                class="form-control form-control-lg"
                placeholder="Enter medical information"
                v-model="student.medicalInformation"
              />
            </div>
          </div>
        </div>
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
      </div>

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
    </div>
  </NuxtLayout>
</template>
<script>
export default {
  data: () => ({
    createParent:false,
    parentName:'',
    parentExists:false,
    parentInformation:[
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
    ],
    parentChildRelation:[
      {label:"Select from drop down", value:""},
      {label:"Mother", value:"Mother"},
      {label:"Father", value:"Father"},
      {label:"Brother", value:"Brother"},
      {label:"Sister", value:"Sister"},
      {label:"Grandmother", value:"Grandmother"},
      {label:"Grandfather", value:"Grandfather"},
      {label:"Uncle", value:"Uncle"},
      {label:"Aunt", value:"Aunt"},
      {label:"Cousin", value:"Cousin"},
    ],
    marketingChannels:[
      {label:"Select from drop down", value:""},
      {label:"Social Media", value:"Social Media"},
      {label:"TV", value:"TV"},
      {label:"Newspaper", value:"Newspaper"},
    ],
    activities:[
      {label:"Select from drop down", value:""},
      {label:"Weekly classes", value:"Weekly classes"},
      {label:"One to one", value:"One to one"},
      {label:"Holiday camps", value:"Holiday camps"},
      {label:"Clubs", value:"Clubs"},
      {label:"Merchandise", value:"Merchandise"},
    ],
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
    }
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
      console.log(this.parentName)
      if(this.parentName)
        this.parentExists = true;
      else
        this.parentExists = false;
    },
    create(){
      this.createParent = true
    },
    addParent(){
      console.log("add parent")
    },
    addStudent(){
      console.log("add student")
    },
    addLead(){
      console.log("add lead")
    },

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
