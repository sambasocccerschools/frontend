<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  noBorder?: boolean | null
}>()

let noBorder = ref<boolean>(props.noBorder ?? false).value
</script>

<template>
  <slot name="external_title"></slot>
  <div class="card rounded-4 mt-4 px-3" :class="noBorder ? 'border-0' : ''">
    <slot name="internal_title"></slot>

    <div class="d-flex flex-column">
      <div class="w-100 my-2">
        <img
          src="@/src/assets/img-coach-students.jpeg"
          class="w-100 rounded-4"
        />
      </div>
      <div class="w-100 my-2">
        <span class="h4"><strong>Title</strong></span>
      </div>
      <div class="w-100 my-2">
        <p>
          Lorem ipsum dolor sit amet consectetur. Aliquam nec iaculis massa
          etiam quam fames sit velit. Erat a convallis malesuada ante. Ultrices
          bibendum ut in venenatis. Id cras tellus eget facilisi cras diam in
          diam. In sodales turpis venenatis dis ornare. Aliquet placerat diam
          viverra morbi massa.
        </p>
      </div>

      <div class="w-100 my-2">
        <div class="row">
          <div class="col-6">
            <img
              src="@/src/assets/img-coach-students-sm.jpeg"
              class="w-100 rounded-4"
            />
          </div>
          <div class="col-6">
            <img
              src="@/src/assets/img-coach-students-sm.jpeg"
              class="w-100 rounded-4"
            />
          </div>
        </div>
      </div>
      <div class="w-100 my-2">
        <p>
          Lorem ipsum dolor sit amet consectetur. Aliquam nec iaculis massa
          etiam quam fames sit velit. Erat a convallis malesuada ante. Ultrices
          bibendum ut in venenatis. Id cras tellus eget facilisi cras diam in
          diam. In sodales turpis venenatis dis ornare. Aliquet placerat diam
          viverra morbi massa.
        </p>
      </div>
    </div>
    <slot name="additional_rows"></slot>
  </div>
  <slot name="footer"></slot>
</template>
