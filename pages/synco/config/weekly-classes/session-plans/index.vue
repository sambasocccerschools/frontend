<script setup lang="ts">
import { ref } from 'vue'
import { useToast } from 'vue-toast-notification'
import type { ISessionPlanObject } from '~/types/synco/index'
import { generalStore } from '~/stores'
const store = generalStore()

const { $api } = useNuxtApp()
const toast = useToast()

const isLoading = ref<boolean>(false)
const blockButtons = ref<boolean>(false)

const abilityGroups = store.abilityGroups

const sessionPlans = ref<ISessionPlanObject[]>([])
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

const selectedAbilityGroupId = ref<number>(-1)
const selectAbilityGroup = (id: number) => {
  console.log('Selecting ability group:', id)
  if (blockButtons.value) return
  sessionPlans.value = []
  selectedAbilityGroupId.value = id
  getSessionPlans(id)
}

// onMounted(async () => {
//   console.log('pages/synco/config/weekly-classes/session-plans/index.vue')

//   await store.getAbilityGroups()
//   console.log(store)
//   selectAbilityGroup(abilityGroups[0]?.id)
// })
onMounted(async () => {
  console.log('pages/synco/config/weekly-classes/session-plans/index.vue')
  await store.getAbilityGroups()
  console.log('Ability groups:', abilityGroups)
  if (abilityGroups.length > 0 && abilityGroups[0].icon) {
    console.log('Selected ability group:', abilityGroups[0])
    selectAbilityGroup(abilityGroups[0].id)
  }
})
</script>

<template>
  <NuxtLayout name="syncolayout" page-title="Session Plans">
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
              :key="group.id"
              class="list-group-item list-group-item-action border-top d-flex w-100 rounded-0 border-bottom-0 border-end-0 border-start-0 border py-3"
              :class="selectedAbilityGroupId == group.id ? 'text-primary' : ''"
              @click="selectAbilityGroup(group.id)"
            >
              <span class="w-100 d-flex">
                <img
                  :src="group.icon?.url || '/default-icon.png'"
                  :alt="group.icon?.name || 'No icon available'"
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
              <div
                v-for="session in sessionPlans"
                :key="session.id"
                class="col-auto my-2"
              >
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
