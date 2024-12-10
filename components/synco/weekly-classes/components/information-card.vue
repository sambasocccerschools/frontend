<template>
  <!-- Filter By Date  -->
  <div
    class="dropdown-menu dropdown-menu-right card rounded-4 position-absolute dropdownmenu-information shadow-lg"
  >
    <div
      class="card-header d-flex justify-content-between card-header-information"
    >
      <h5 class="title">{{ title }}</h5>
      <Icon name="material-symbols:info-outline" class="info-icon" />
    </div>
    <div class="card-body card-body-information">
      <div class="d-flex align-items-center flex-column">
        <div class="d-flex justify-content-between w-100 flex-row">
          <div v-if="type === 'congestion'" class="description-container">
            <p class="description">
              {{
                hasFeature
                  ? 'This venue has congestion'
                  : 'This venue has no parking facilities available. Paid road parking is available.'
              }}
            </p>
          </div>

          <div v-if="type === 'parking'" class="description-container">
            <p class="description">
              {{
                hasFeature
                  ? 'This venue has parking facilities available.'
                  : 'This venue has no parking facilities available. Paid road parking is available.'
              }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  hasFeature: boolean
  type: string
  title: string
}>()

const hasFeature = ref(props.hasFeature).value
const type = ref(props.type).value
</script>
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Gilroy');
.font-custom {
  font-family: 'Luckiest Guy', cursive;
  font-weight: 400;
  font-style: normal;
}
.dropdownmenu-information {
  width: 436px;
  right: -10px;
  top: 45px;
  padding: 20px;
  position: absolute;
  z-index: 1000;
}
.card-header-information,
.card-body-information {
  padding: 0;
}
.card-header-information {
  align-items: center;
  margin-bottom: 12px;
}
.title {
  color: #ff5c40;
  font-size: 18px;
  font-weight: 600;
  line-height: 21px;
  margin: 0;
}
.description-container {
  text-align: left;
}
.description {
  color: #282829;
  font-size: 16px;
  line-height: 21px;
  font-weight: 500;
  font-family: 'Gilroy', sans-serif;
  font-weight: 400;
  margin: 0 0 5px;
}
.info-icon {
  color: #717073;
  font-size: 26px;
}
</style>
