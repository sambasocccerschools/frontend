<script setup lang="ts">
import { ref } from 'vue'
import type { IGuardianByName } from '~/types/index'
const props = defineProps<{
  parent: IGuardianByName
}>()

const router = useRouter()
const parent = ref<IGuardianByName>(props.parent)

const emit = defineEmits(['selectParent'])

const selectParent = () => {
  emit('selectParent', parent.value)
}

const navigateToUser = async (id: string) => {
  await router.push({ path: `/synco/user/${id}` })
}
</script>

<template>
  <div class="card-body d-flex align-items-center justify-content-start py-4">
    <div class="d-flex col-auto">
      <div class="d-flex flex-column px-3">
        <label>Name</label>
        {{ parent.first_name }} {{ parent.last_name }}
      </div>
      <!-- <div class="vr"></div>
      <div class="d-flex flex-column px-3">
        <label>Status</label>
        {{parent["Status"]}}
      </div> -->
      <div class="vr"></div>
      <div class="d-flex flex-column px-3">
        <label>Email</label>
        {{ parent.email }}
      </div>
      <!-- <div class="vr"></div>
      <div class="d-flex flex-column px-3">
        <label>Gocardless ID</label>
        {{ parent["Gocardless ID"] }}
      </div> -->
      <!-- <div class="vr"></div>
      <div class="d-flex flex-column px-3">
        <label>Created</label>
        {{ parent.created_at }}
      </div> -->
      <!-- <div class="vr"></div>
      <div class="d-flex flex-column px-3">
        <label>Address</label>
        {{parent["Address"]}}
      </div> -->
      <div class="vr"></div>
      <div class="d-flex flex-column px-3">
        <label>Phone number</label>
        {{ parent.phone_number }}
      </div>
      <div class="vr"></div>
      <div class="d-flex flex-column px-3">
        <label>Email</label>
        {{ parent.email }}
      </div>
    </div>
    <button
      @click="navigateToUser(parent.id)"
      class="btn btn-primary text-light ms-auto"
    >
      Select parent
    </button>
  </div>
  <!-- <template v-if="!!parent['Students']">
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
        </template> -->
</template>
