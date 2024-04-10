<script setup lang="ts">
import { ref } from 'vue'

import type { IStudent } from '~/types/index'
const props = defineProps<{
    student: IStudent
}>()

let student = ref<IStudent>(props.student).value

const activities  = ref([
    {label:"Select from drop down", value:""},
    {label:"Weekly classes", value:"Weekly classes"},
    {label:"One to one", value:"One to one"},
    {label:"Holiday camps", value:"Holiday camps"},
    {label:"Clubs", value:"Clubs"},
    {label:"Merchandise", value:"Merchandise"},
])

const addStudent = ()=>{
    console.log("add student")
}

</script>

<template>
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
</template>