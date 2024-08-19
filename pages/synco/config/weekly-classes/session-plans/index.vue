<script setup lang="ts">
import { ref } from 'vue'
import { useToast } from 'vue-toast-notification'
import type { ISessionPlanObject } from '~/types/synco/index'
import { generalStore } from '~/stores'
const store = generalStore()

const { $api } = useNuxtApp()
const toast = useToast()

let isLoading = ref<boolean>(false)
let blockButtons = ref<boolean>(false)

let abilityGroups = store.abilityGroups

let sessionPlans = ref<ISessionPlanObject[]>([])
const getSessionPlans = async (abilityId: number) => {
  try {
    isLoading.value = true
    blockButtons.value = true
    const sessionPlansResponse =
      await $api.sessionPlans.getByAbilityGroup(abilityId)
    sessionPlans.value = sessionPlansResponse?.data
  } catch (error: any) {
    console.log(error)
    toast.error(error?.data?.messages ?? 'Error')
  } finally {
    isLoading.value = false
    blockButtons.value = false
  }
}

let selectedAbilityGroupId = ref<number>(-1)
const selectAbilityGroup = (id: number) => {
  if (blockButtons.value) return
  sessionPlans.value = []
  selectedAbilityGroupId.value = id
  getSessionPlans(id)
}

onMounted(async () => {
  console.log('pages/synco/config/weekly-classes/session-plans/index.vue')

  await store.getAbilityGroups('weekly-classes')
  selectAbilityGroup(abilityGroups[0]?.id)
})
</script>

<template>
  <NuxtLayout name="syncolayout">
    <h4 class="mb-4">Create Session Plans</h4>
    <div class="row">
      <div class="col-sm-3">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title mt-3">Lists</h4>
          </div>
          <ul class="list-group">
            <li
              v-for="group in abilityGroups"
              class="list-group-item list-group-item-action border-top d-flex w-100 rounded-0 border-bottom-0 border-end-0 border-start-0 border py-3"
              @click="selectAbilityGroup(group.id)"
              :class="selectedAbilityGroupId == group.id ? 'text-primary' : ''"
            >
              <span class="w-100 d-flex">
                <!-- <img src="@/src/assets/img-avatar-ability-group.png"/> -->
                <img
                  :src="group.icon.url"
                  :alt="group.icon.name"
                  height="38px"
                />
                <span class="d-flex flex-column ms-3">
                  <strong>{{ group.name }}</strong>
                  <span class="text-muted">
                    {{ `${group?.min_age} to ${group?.max_age}` }}
                  </span>
                </span>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <span class="h3 my-3">
                <strong>BEGINNER SESSION PLANS</strong>
              </span>
              <div v-for="session in sessionPlans" class="col-auto my-2">
                <NuxtLink
                  class=""
                  :to="`/synco/config/weekly-classes/session-plans/edit?sessionPlanId=${session.id}`"
                >
                  <div class="card plan-item border">
                    <div
                      class="card-body d-flex align-items-center flex-column justify-content-center"
                    >
                      <Icon name="ph:pencil-simple-line" />
                      <span>{{ session.title }}</span>
                    </div>
                  </div>
                </NuxtLink>
              </div>
              <div class="col-auto my-2">
                <NuxtLink
                  class=""
                  :to="`/synco/config/weekly-classes/session-plans/create?abilityId=${selectedAbilityGroupId}`"
                >
                  <div class="card plan-item border-dashed">
                    <div
                      class="card-body d-flex align-items-center justify-content-center flex-column"
                    >
                      <strong><Icon name="ph:plus" /></strong>
                      <span class="text-center">
                        Add new Beginner Session Plan
                      </span>
                    </div>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
<style scoped>
.text-sm {
  font-size: 0.6rem;
}
.plan-item {
  width: 168px;
  height: 100px;
}
.border-dashed {
  border: 1px dashed var(--bs-border-color) !important;
}
</style>
