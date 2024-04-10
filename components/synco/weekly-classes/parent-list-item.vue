<script setup lang="ts">

import type { IParentListItem } from '~/types/index'
const props = defineProps<{
    parent: IParentListItem
}>()

const selectParent = (selectedParent:IParentListItem)=>{
    console.log(selectedParent)
}
</script>

<template>
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
            @click="selectParent(parent)"
            class="btn btn-primary text-light ms-auto"
            >Select parent</button
        >
        </div>
        <template v-if="!!parent['Students']">
            <div class="d-flex flex-row col-auto">
                <div v-for="(student,sindex) in parent['Students']" class="card rounded-4 mb-4 border mx-3 w-100" style="background-color: #fcf9f6;" :key="sindex">
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
</template>