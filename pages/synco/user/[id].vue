<script>
const router = useRouter();
export default {
  data(){
    return{
      previousRoute:"/synco/weekly-classes/waiting-list",
      selection:"Service History",
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
      showServiceHistoryDetails:false,
      showFilter:false,
    }
  },
  // beforeRouteEnter(to,from,next){
  //   previousRoute = from.fullPath
  //   next()
  // },
  methods:{
    selectInformation(selection){
      this.selection = selection;
    },
    toggleFilter(){
      this.showFilter = !this.showFilter
    },
    addBooking(){
      console.log("addBooking")
    },
    addStudent(){
      console.log("addStudent")
    },
    sendMessage(type){
      console.log("sendMessage", type)
    },
    addParent(){
      console.log("addParent")
    },
    seeDetails(){
      this.showServiceHistoryDetails=!this.showServiceHistoryDetails;
    },
    bookMembership(){
      console.log("bookMembership")
    },
    leaveWaitingList(){
      console.log("leaveWaitingList")
    }
  }
}
</script>
<template>
  <NuxtLayout name="syncolayout" page-title="Account Information">
    <!-- Some ID -->
    <div class="d-flex flex-row align-items-center">
      <NuxtLink class="h4 m-0" :to="previousRoute">
        <Icon name="material-symbols:arrow-back" class="me-2" />
      </NuxtLink>
      <div class="card rounded-3 p-1 d-flex flex-row">
        <button type="button" class="mx-2 btn" :class="selection=='Parent Profile'?'btn-primary text-light':''" @click="selectInformation('Parent Profile')">Parent Profile</button>
        <button type="button" class="mx-2 btn" :class="selection=='Student Profile'?'btn-primary text-light':''" @click="selectInformation('Student Profile')">Student Profile</button>
        <button type="button" class="mx-2 btn" :class="selection=='Service History'?'btn-primary text-light':''" @click="selectInformation('Service History')">Service History</button>
        <button type="button" class="mx-2 btn" :class="selection=='Feedback'?'btn-primary text-light':''" @click="selectInformation('Feedback')">Feedback</button>
        <button type="button" class="mx-2 btn" :class="selection=='Rewards'?'btn-primary text-light':''" @click="selectInformation('Rewards')">Rewards</button>
        <button type="button" class="mx-2 btn" :class="selection=='Events'?'btn-primary text-light':''" @click="selectInformation('Events')">Events</button>
      </div>
      <template v-if="selection=='Service History' && !showServiceHistoryDetails">
        <div class="mx-2 card rounded-4 p-1 d-flex flex-row">
          <SyncoDashboardMetricsItem
            name="Total points"
            value="543"
            change=""
            icon="ph:star"
          />
        </div>
        <div class="mx-2 card rounded-4 p-1 d-flex flex-row">
          <SyncoDashboardMetricsItem
            name="Total Leads"
            value="£0.00"
            change=""
            icon="ph:currency-gbp"
          />
        </div>
        <div class="p-1 d-flex flex-row">
          <div class="dropdown">
            <button type="button" class="btn btn-light bg-white border mx-2" @click="toggleFilter" data-toggle="dropdown" :aria-expanded="showFilter" data-display="static"><Icon name="ph:faders"/> Filters</button>
            <div class="dropdown-menu dropdown-menu-right card rounded-3 position-absolute shadow-lg" v-if="showFilter" style="width:510px; right:-100px; top:70px;">
              <!-- <div class=" p-1 d-flex flex-column">
                <div class="d-flex flex-row justify-content-between mx-4 py-4 align-items-center">
                  <h5 class="m-0"><strong>Filter</strong></h5>
                  <button type="button" class="mx-2 btn btn-primary text-light btn-sm"><Icon name="ph:faders"/> Apply Filter</button>
                </div>
                <div class="mx-4">

                </div>
              </div> -->

              <div class="card-header d-flex justify-content-between align-items-center">
                <h5 class="card-title">Filter</h5>
                <button class="btn btn-primary text-light shadow-sm">
                  <Icon name="octicon:settings" class="me-2" />Apply Filter
                </button>
              </div>
              <div class="card-body">
                <!-- Choose Type -->
                <div class="bg-light rounded-4 mb-5 px-3 py-2">
                  <label for="" class="form-label">Choose type</label>
                  <div class="container">
                    <div class="row row-cols-3">
                      <div class="form-check col">
                        <input
                          id="allTime"
                          class="form-check-input"
                          type="checkbox"
                          name="filter-type"
                        />
                        <label class="form-check-label" for="allTime"> All time </label>
                      </div>
                      <div class="form-check col">
                        <input
                          id="allPurchases"
                          class="form-check-input"
                          type="checkbox"
                          name="filter-type"
                        />
                        <label class="form-check-label" for="allPurchases">
                          All purchases
                        </label>
                      </div>
                      <div class="form-check col">
                        <input
                          id="weeklyClasses"
                          class="form-check-input"
                          type="checkbox"
                          name="filter-type"
                        />
                        <label class="form-check-label" for="weeklyClasses"> Weekly Classes </label>
                      </div>
                      <div class="form-check col">
                        <input
                          id="club"
                          class="form-check-input"
                          type="checkbox"
                          name="filter-type"
                        />
                        <label class="form-check-label" for="club">
                          Club
                        </label>
                      </div>
                      <div class="form-check col">
                        <input
                          id="oneToOne"
                          class="form-check-input"
                          type="checkbox"
                          name="filter-type"
                        />
                        <label class="form-check-label" for="oneToOne"> One to One </label>
                      </div>
                      <div class="form-check col">
                        <input
                          id="merchandise"
                          class="form-check-input"
                          type="checkbox"
                          name="filter-type"
                        />
                        <label class="form-check-label" for="merchandise"> Merchandise </label>
                      </div>
                      <div class="form-check col">
                        <input
                          id="birthday"
                          class="form-check-input"
                          type="checkbox"
                          name="filter-type"
                        />
                        <label class="form-check-label" for="birthday">
                          Birthday
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Calendar Selector  -->
                <SyncoFilterByCalendar />
              </div>

            </div>
          </div>
          <button type="button" class="mx-2 btn btn-primary text-light" @click="addBooking">+ Add booking</button>
        </div>
      </template>
      <template v-else-if="selection=='Student Profile'">
        <div class="p-1 d-flex flex-row" style="margin-left: auto;">
          <button type="button" class="mx-2 btn btn-primary text-light" @click="addStudent">+ Add new student</button>
        </div>
      </template>
    </div>

    <div>
      <template v-if="selection=='Parent Profile'">
        <SyncoWeeklyClassesFormsParentForm
          :parent="parent"
        >
          <template v-slot:internal_title>
            <div class="d-flex flex-row justify-content-between align-items-center">
              <h5 class="m-0 py-4"><strong>Parent information</strong> <Icon name="ph:pencil-simple-line"/></h5>
              <button type="button" class="btn btn-primary text-light" @click="addParent">Add Parent</button>
            </div>
          </template>
        </SyncoWeeklyClassesFormsParentForm>
        <SyncoWeeklyClassesFormsEmergencyContactForm
          :emergencyContact="emergencyContact"
        >
          <template v-slot:internal_title>
            <h5 class="py-4"><strong>Emergency contact details</strong> <Icon name="ph:pencil-simple-line"/></h5>
          </template>
        </SyncoWeeklyClassesFormsEmergencyContactForm>
        <SyncoWeeklyClassesFormsCommentFormList/>
        <div class="d-flex flex-row justify-content-end my-4 align-items-center">
          <button type="button" class="mx-2 btn btn-light bg-white border" @click="sendMessage('email')"><span class="d-flex flex-row align-items-center"><Icon name="ph:envelope-simple"/><span class="mx-2">Send Email</span></span></button>
          <button type="button" class="mx-2 btn btn-light bg-white border" @click="sendMessage('text')"><span class="d-flex flex-row align-items-center"><Icon name="ph:text-a-underline"/><span class="mx-2">Send text</span></span></button>
        </div>
      </template>

      <template v-else-if="selection=='Student Profile'">
        <SyncoWeeklyClassesFormsStudentForm
          :student="student"
        >
          <template v-slot:internal_title>
            <h5 class="py-4"><strong>Student 1 information</strong> <Icon name="ph:pencil-simple-line"/></h5>
          </template>
        </SyncoWeeklyClassesFormsStudentForm>
        <SyncoWeeklyClassesFormsStudentForm
          :student="student"
        >
          <template v-slot:internal_title>
            <h5 class="py-4"><strong>Student 2 information</strong> <Icon name="ph:pencil-simple-line"/></h5>
          </template>
        </SyncoWeeklyClassesFormsStudentForm>
      </template>

      <template v-else-if="selection=='Service History'">
        <div class="w-100 mt-3" v-if="!showServiceHistoryDetails">
          <SyncoWeeklyClassesServiceHistoryItem>
            <template v-slot:title>
              <Icon name="ph:crown" class="h5 m-0"/> <span class="h5 m-0 mx-2">Weekly Classes Membership</span>
            </template>
            <template v-slot:status>
              <button class="btn btn-success btn-sm border-0 text-light" style="width:95px;">
                Active
              </button>
            </template>
            <template v-slot:fields>
              <div class="d-flex flex-column px-3">
                <label>Membership Plan</label>
                <span>12 month plan</span>
              </div>
              <div class="d-flex flex-column px-3">
                <label>Students</label>
                <span>2</span>
              </div>
              <div class="d-flex flex-column px-3">
                <label>Venue</label>
                <span>Acton</span>
              </div>
              <div class="d-flex flex-column px-3">
                <label>KGoCardless ID</label>
                <span>XHDJDHL3314</span>
              </div>
              <div class="d-flex flex-column px-3">
                <label>Monthly price</label>
                <span>£39.99</span>
              </div>
              <div class="d-flex flex-column px-3">
                <label>Date of booking</label>
                <span>Nov 18 2021, 17:00</span>
              </div>
              <div class="d-flex flex-column px-3">
                <label>Progress</label>
                <span>6/12 months</span>
              </div>
            </template>
            <template v-slot:footer>
              <div class="mt-3">
                <button class="btn btn-light border bg-transparent me-1" @click="seeDetails">
                  See details
                </button>
                <button class="btn btn-light border bg-transparent mx-1">
                  Credits
                </button>
                <button class="btn btn-light border bg-transparent mx-1">
                  Attendance
                </button>
                <button class="btn btn-light border bg-transparent mx-1">
                  See payments
                </button>
              </div>
            </template>
          </SyncoWeeklyClassesServiceHistoryItem>

          <SyncoWeeklyClassesServiceHistoryItem>
            <template v-slot:title>
              <Icon name="ph:cake" class="h5 m-0"/> <span class="h5 m-0 mx-2">Birthday Party Booking</span>
            </template>
            <template v-slot:status>
              <button class="btn btn-danger btn-sm border-0 text-light" style="width:95px;">
                Expired
              </button>
            </template>
            <template v-slot:fields>
              <div class="d-flex flex-column px-3">
                <label>Package</label>
                <span>Gold</span>
              </div>
              <div class="d-flex flex-column px-3">
                <label>Monthly price</label>
                <span>£39.99</span>
              </div>
              <div class="d-flex flex-column px-3">
                <label>Stripe Transaction ID</label>
                <span>XHDJDHL3314</span>
              </div>
              <div class="d-flex flex-column px-3">
                <label>Date of booking</label>
                <span>Nov 18 2021, 17:00</span>
              </div>
              <div class="d-flex flex-column px-3">
                <label>Date of Party</label>
                <span>Nov 18 2021, 17:00</span>
              </div>
              <div class="d-flex flex-column px-3">
                <label>Coach</label>
                <span>Ethan Bond-Vaughan</span>
              </div>
            </template>
            <template v-slot:footer>
              <div class="mt-3">
                <button class="btn btn-light border bg-transparent me-1" @click="seeDetails">
                  See details
                </button>
                <button class="btn btn-light border bg-transparent mx-1">
                  See payments
                </button>
              </div>
            </template>
          </SyncoWeeklyClassesServiceHistoryItem>

          <SyncoWeeklyClassesServiceHistoryItem>
            <template v-slot:title>
              <Icon name="ph:receipt" class="h5 m-0"/> <span class="h5 m-0 mx-2">One to One Booking</span>
            </template>
            <template v-slot:status>
              <button class="btn btn-danger btn-sm border-0 text-light" style="width:95px;">
                Expired
              </button>
            </template>
            <template v-slot:fields>
              <div class="d-flex flex-column px-3">
                <label>Package</label>
                <span>Gold</span>
              </div>
              <div class="d-flex flex-column px-3">
                <label>Students</label>
                <span>1</span>
              </div>
              <div class="d-flex flex-column px-3">
                <label>Monthly price</label>
                <span>£39.99</span>
              </div>
              <div class="d-flex flex-column px-3">
                <label>Stripe Transaction ID</label>
                <span>XHDJDHL3314</span>
              </div>
              <div class="d-flex flex-column px-3">
                <label>Date of booking</label>
                <span>Nov 18 2021, 17:00</span>
              </div>
              <div class="d-flex flex-column px-3">
                <label>Venue</label>
                <span>Chelsea Park</span>
              </div>
              <div class="d-flex flex-column px-3">
                <label>Coach</label>
                <span>Ethan Bond-Vaughan</span>
              </div>
            </template>
            <template v-slot:footer>
              <div class="mt-3">
                <button class="btn btn-light border bg-transparent me-1" @click="seeDetails">
                  See details
                </button>
                <button class="btn btn-light border bg-transparent mx-1">
                  Attendance
                </button>
                <button class="btn btn-light border bg-transparent mx-1">
                  See payments
                </button>
              </div>
            </template>
          </SyncoWeeklyClassesServiceHistoryItem>

          <SyncoWeeklyClassesServiceHistoryItem>
            <template v-slot:title>
              <Icon name="ph:campfire" class="h5 m-0"/> <span class="h5 m-0 mx-2">Holiday Camp</span>
            </template>
            <template v-slot:status>
              <button class="btn btn-danger btn-sm border-0 text-light" style="width:95px;">
                Expired
              </button>
            </template>
            <template v-slot:fields>
              <div class="d-flex flex-column px-3">
                <label>Camp</label>
                <span>Easter</span>
              </div>
              <div class="d-flex flex-column px-3">
                <label>Students</label>
                <span>2</span>
              </div>
              <div class="d-flex flex-column px-3">
                <label>Monthly price</label>
                <span>£39.99</span>
              </div>
              <div class="d-flex flex-column px-3">
                <label>Stripe Transaction ID</label>
                <span>XHDJDHL3314</span>
              </div>
              <div class="d-flex flex-column px-3">
                <label>Date of booking</label>
                <span>Nov 18 2021, 17:00</span>
              </div>
              <div class="d-flex flex-column px-3">
                <label>Venue</label>
                <span>Chelsea Park</span>
              </div>
              <div class="d-flex flex-column px-3">
                <label>Discount</label>
                <span>15% Eraly Bird Discount</span>
              </div>
            </template>
            <template v-slot:footer>
              <div class="mt-3">
                <button class="btn btn-light border bg-transparent me-1" @click="seeDetails">
                  See details
                </button>
                <button class="btn btn-light border bg-transparent mx-1">
                  Attendance
                </button>
                <button class="btn btn-light border bg-transparent mx-1">
                  See payments
                </button>
              </div>
            </template>
          </SyncoWeeklyClassesServiceHistoryItem>
          
          <SyncoWeeklyClassesServiceHistoryItem>
            <template v-slot:title>
              <Icon name="ph:soccer-ball" class="h5 m-0"/> <span class="h5 m-0 mx-2">Club</span>
            </template>
            <template v-slot:status>
              <button class="btn btn-danger btn-sm border-0 text-light" style="width:95px;">
                Expired
              </button>
            </template>
            <template v-slot:fields>
              <div class="d-flex flex-column px-3">
                <label>Team</label>
                <span>U8's Kings Cross</span>
              </div>
              <div class="d-flex flex-column px-3">
                <label>Students</label>
                <span>2</span>
              </div>
              <div class="d-flex flex-column px-3">
                <label>Monthly price</label>
                <span>£39.99</span>
              </div>
              <div class="d-flex flex-column px-3">
                <label>Joining Fee</label>
                <span>£300.00</span>
              </div>
              <div class="d-flex flex-column px-3">
                <label>Gocardless ID</label>
                <span>XHDJDHL3314</span>
              </div>
              <div class="d-flex flex-column px-3">
                <label>Date of booking</label>
                <span>Nov 18 2021, 17:00</span>
              </div>
              <div class="d-flex flex-column px-3">
                <label>Training</label>
                <span>King Solomon</span>
              </div>
            </template>
            <template v-slot:footer>
              <div class="mt-3">
                <button class="btn btn-light border bg-transparent me-1" @click="seeDetails">
                  See details
                </button>
                <button class="btn btn-light border bg-transparent mx-1">
                  Attendance
                </button>
                <button class="btn btn-light border bg-transparent mx-1">
                  See payments
                </button>
              </div>
            </template>
          </SyncoWeeklyClassesServiceHistoryItem>
          
          <SyncoWeeklyClassesServiceHistoryItem>
            <template v-slot:title>
              <Icon name="ph:package" class="h5 m-0"/> <span class="h5 m-0 mx-2">Merchandise</span>
            </template>
            <template v-slot:status>
              <button class="btn btn-success btn-sm border-0 text-light" style="width:95px;">
                Paid
              </button>
            </template>
            <template v-slot:fields>
              <div class="d-flex flex-column px-3">
                <label>Item</label>
                <span>Full Set</span>
              </div>
              <div class="d-flex flex-column px-3">
                <label>Quantity</label>
                <span>2</span>
              </div>
              <div class="d-flex flex-column px-3">
                <label>Price Paid</label>
                <span>£39.99</span>
              </div>
              <div class="d-flex flex-column px-3">
                <label>Transaction ID</label>
                <span>XHDJDHL3314</span>
              </div>
              <div class="d-flex flex-column px-3">
                <label>Date of booking</label>
                <span>Nov 18 2021, 17:00</span>
              </div>
              <div class="d-flex flex-column px-3">
                <label>Discount</label>
                <span>0</span>
              </div>
              <div class="d-flex flex-column px-3">
                <label>Fulfilment Status</label>
                <span>Fulfilled</span>
              </div>
            </template>
            <template v-slot:footer>
              <div class="mt-3">
                <button class="btn btn-light border bg-transparent me-1" @click="seeDetails">
                  See details
                </button>
              </div>
            </template>
          </SyncoWeeklyClassesServiceHistoryItem>
        </div>
        <div class="w-100 mt-3" v-else>
          <div class="row">
            <div class="col-8">
              <div class="card rounded-4 mb-3 p-2 px-4">
                <div class="d-flex flex-row align-items-center justify-content-start">
                  <span style="padding-right: 0.5rem; cursor:pointer;" @click="seeDetails"><Icon name="material-symbols:arrow-back" /></span>
                  <h5 class="m-0 py-4"><strong>Student information</strong></h5>
                </div>
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
                <div class="d-flex flex-row align-items-center">
                  <h5 class="m-0 py-4"><strong>Booking information</strong></h5>
                </div>
                <div class="row">
                  <div class="col-6">
                      <div class="form-group mb-3 w-100">
                          <label for="startDate" class="form-labelform-label-light">Start Date</label>
                          <input
                            id="startDate"
                            type="date"
                            class="form-control form-control-lg"
                          />
                      </div>
                  </div>
                  <div class="col-6">
                      <div class="form-group mb-3 w-100">
                          <label for="venue" class="form-labelform-label-light">Venue</label>
                          <input
                            id="venue"
                            type="text"
                            class="form-control form-control-lg"
                            placeholder="Automatic entry"
                            readonly
                          />
                      </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-6">
                      <div class="form-group mb-3 w-100">
                          <label for="class" class="form-labelform-label-light">Class</label>
                          <select
                            id="class"
                            class="form-control form-control-lg"
                          >
                            <option value="4-7 years">4-7 years</option>
                          </select>
                      </div>
                  </div>
                  <div class="col-6">
                      <div class="form-group mb-3 w-100">
                          <label for="time" class="form-labelform-label-light">Time</label>
                          <input
                            id="time"
                            type="text"
                            class="form-control form-control-lg"
                            placeholder="Automatic entry"
                            readonly
                          />
                      </div>
                  </div>
                </div>
              </div>
              <SyncoWeeklyClassesFormsCommentFormList/>
            </div>
            <div class="col-4">
              <div class="card rounded-4 mb-3 p-2 bg-secondary">
                <div class="card rounded-4 border-0 p-3 px-4" style="background-color: #A4A5A6;">
                  <span class="h5 m-0"><strong>Account Status</strong></span>
                  <span>Waiting List</span>
                </div>
                <div class="p-3 d-flex flex-row align-items-center">
                  <img
                    src="@/src/assets/img-avatar-small.png"
                    alt="Avatar"
                    class="me-3"
                    style="width:102px; height:102px"
                  />
                  <div class="d-flex flex-column text-light">
                    <span class="h4 m-0"><strong>Account Holder</strong></span>
                    <span>John Doe / Father</span>
                  </div>
                </div>
                <div class="px-3 d-flex flex-column text-light">
                  <span class="h5"><strong>Venue</strong></span>
                  <div>
                    <span class="btn btn-primary text-light">Acton</span>
                  </div>
                  <hr/>

                  <span class="h5"><strong>Class</strong></span>
                  <span>4-7 Years | 9-10am</span>
                  <hr/>

                  <span class="h5"><strong>Date added to waiting list</strong></span>
                  <span>Monday 13th January 2023</span>
                  <hr/>

                  <span class="h5"><strong>Students</strong></span>
                  <span>1</span>
                  <hr/>

                  <span class="h5"><strong>Level of interest</strong></span>
                  <div>
                    <span class="btn btn-success rounded-circle btn-sm" style="width:20px; height:20px;"></span>
                  </div>
                  <hr/>

                  <span class="h5"><strong>Queue position</strong></span>
                  <span>3</span>
                  <hr/>

                  <span class="h5"><strong>Booking Source</strong></span>
                  <span>Ben Marcus</span>
                  <hr/>
                </div>
              </div>
              
              <div class="card rounded-4 mb-3 p-2">
                <div class="d-flex flex-column">
                  <div class="d-flex flex-row justify-content-between my-2 align-items-center">
                    <button type="button" class="mx-2 btn btn-light bg-white border" @click="sendMessage('email')"><span class="px-4"><Icon name="ph:envelope-simple"/><span class="mx-2">Send Email</span></span></button>
                    <button type="button" class="mx-2 btn btn-light bg-white border" @click="sendMessage('text')"><span class="px-4"><Icon name="ph:text-a-underline"/><span class="mx-2">Send text</span></span></button>
                  </div>
                  <button type="button" class="m-2 btn btn-primary text-light" @click="bookMembership">Book a membership</button>
                  <button type="button" class="m-2 btn btn-light bg-white border" @click="leaveWaitingList">Leave waiting list</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </NuxtLayout>
</template>
