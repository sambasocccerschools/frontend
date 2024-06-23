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

    <div class="row">
      <div class="col-6 mx-auto" style="max-width: 375px">
        <div class="d-flex flex-column">
          <img src="@/src/assets/img-template-1.png" class="w-100" />
          <div class="d-flex flex-column">
            <div class="card rounded-4 bg-gray m-4 p-2">
              <span class="mx-2"
                >Lorem ipsum dolor sit amet consectetur. Aliquam nec iaculis
                massa etiam quam sit velit.
                <a href="#"
                  >Erat a convallis malesuada ante. Ultrices bibendum ut in
                  venenatis.</a
                ></span
              >
              <img src="@/src/assets/img-tail.png" class="message-tail" />
            </div>
          </div>
          <img src="@/src/assets/img-template-2.png" class="w-100" />
          <img src="@/src/assets/img-template-3.png" class="w-100 mb-4" />
        </div>
        <slot name="additional_rows"></slot>
      </div>
    </div>
  </div>
  <slot name="footer"></slot>
</template>

<style lang="scss" scoped>
.form-label-light {
  font-weight: 300;
}
.bg-gray {
  background-color: #e9e9eb;
}
.message-tail {
  width: 16px;
  position: absolute;
  bottom: 0px;
  left: -5px;
  height: 21px;
}
</style>
