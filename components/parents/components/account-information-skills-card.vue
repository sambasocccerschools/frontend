<template>
  <div class="card border-1 rounded-4 p-3">
    <div class="d-flex flex-column">
      <div class="rounded-4">
        <img
          src="@/src/assets/img-skills-1.png"
          class="rounded-4"
          style="max-height: 250px; width: 100%"
        />
      </div>
      <span
        ><strong>
          {{ skill.Title }}
        </strong></span
      >
      <div class="d-flex justify-content-between my-3 flex-row">
        <span>
          <Icon name="ph:clock" />
          {{ skill.Duration }}
        </span>
        <span>
          <Icon name="ph:medal" />
          {{ skill.Skills.length }} Skills
        </span>
        <span>
          <Icon name="ph:chart-bar" />
          {{ skill.Difficulty }}
        </span>
        <span
          class="rounded-4 px-2"
          :class="
            skill.Status == 'Completed' ? 'badge-success' : 'badge-warning'
          "
        >
          {{ skill.Status }}
        </span>
      </div>
      <div
        class="w-100 d-flex align-items-center justify-content-between my-2 flex-row"
      >
        <div class="progress" style="width: 70%">
          <div
            class="progress-bar"
            role="progressbar"
            :style="`width: ${skill.Progress}%`"
            :class="skill.Status == 'Completed' ? 'bg-success' : 'bg-warning'"
          ></div>
        </div>
        <div style="height: 100%" class="d-flex flex-column align-items-center">
          <span style="font-size: 0.7rem">
            <strong>{{ skill.Progress }}% completed</strong>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

import type { ISkillTrackerCard } from '~/types/index'
const props = defineProps<{
  skill: ISkillTrackerCard
}>()

let skill = ref<ISkillTrackerCard>(props.skill).value
</script>

<style scoped>
.badge-warning {
  background-color: #eda60010;
  color: #eda600;
}
.badge-success {
  background-color: #43be4f20;
  color: #43be4f;
}
</style>
