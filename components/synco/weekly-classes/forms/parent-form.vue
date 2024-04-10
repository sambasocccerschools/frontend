<script setup lang="ts">
import { ref } from 'vue'

import type { IParent } from '~/types/index'
const props = defineProps<{
    parent: IParent
}>()

let parent = ref<IParent>(props.parent).value

const parentChildRelation = ref([
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

const marketingChannels = ref([
    {label:"Select from drop down", value:""},
    {label:"Social Media", value:"Social Media"},
    {label:"TV", value:"TV"},
    {label:"Newspaper", value:"Newspaper"},
])

const addParent = ()=>{
    console.log("add parent")
}

</script>

<template>
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
</template>