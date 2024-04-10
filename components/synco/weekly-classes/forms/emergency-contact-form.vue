<script setup lang="ts">
import { ref } from 'vue'

import type { IEmergencyContact } from '~/types/index'
const props = defineProps<{
    emergencyContact: IEmergencyContact
}>()

let emergencyContact = ref<IEmergencyContact>(props.emergencyContact).value

const emergencyContactChildRelation = ref([
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
])

const addLead = ()=>{
    console.log("add lead")
}
const cancel = ()=>{
    console.log("cancel")
}
</script>

<template>
    <div class="card rounded-4 mt-4 px-3">
        <h5 class="py-4"><strong>Emergency contact details</strong></h5>
        <div class="row mb-4">
            <div class="col-12">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="sameAsAbove">
                    <label class="form-check-label" for="sameAsAbove">
                        Fill same as above
                    </label>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <div class="form-group mb-3 w-100">
                    <label for="emergencyContactFirstName" class="form-labelform-label-light"
                        >First name</label
                    >
                    <input
                        id="emergencyContactFirstName"
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Enter first name"
                        v-model="emergencyContact.firstName"
                    />
                </div>
            </div>
            <div class="col-6">
                <div class="form-group mb-3 w-100">
                    <label for="emergencyContactLastName" class="form-labelform-label-light"
                        >Last name</label
                    >
                    <input
                        id="emergencyContactLastName"
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Enter last name"
                        v-model="emergencyContact.lastName"
                    />
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <div class="form-group mb-3 w-100">
                    <label for="emergencyContactPhoneNumber" class="form-labelform-label-light"
                        >Phone number</label
                    >
                    <input
                        id="emergencyContactPhoneNumber"
                        type="phone"
                        class="form-control form-control-lg"
                        placeholder="+44"
                        v-model="emergencyContact.phoneNumber"
                    />
                </div>
            </div>
            <div class="col-6">
                <div class="form-group mb-3 w-100">
                    <label for="emergencyContactRelation" class="form-labelform-label-light"
                        >Relation to child</label
                    >
                    <select
                        id="emergencyContactRelation"
                        class="form-control form-control-lg"
                        v-model="emergencyContact.relationToChild"
                    >
                        <option v-for="(relation,index) in emergencyContactChildRelation" :value="relation.value" :key="index">{{relation.label}}</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
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