<script setup lang="ts">
import { ref } from 'vue'
import type { ISessionPlan, IExerciseSessionPlan } from '~/types/index'

const smallSideGames = ref<IExerciseSessionPlan>({
  Title: 'Small-side games',
  SubTitle:
    'This skills tutorial will help you understand how to perform the Penguim.',
  ImagesUrls: ['field-positions.png'],
  VideoUrl: '',
  Duration: '10 mins',
  Description: '',
})
const introduction = ref<IExerciseSessionPlan>({
  Title: 'Introduction (Head coach)',
  SubTitle:
    'This skills tutorial will help you understand how to perform the Penguim.',
  ImagesUrls: ['@/src/assets/field-positions.png'],
  VideoUrl: '',
  Duration: '10 mins',
  Description: '',
})
const warmup = ref<IExerciseSessionPlan>({
  Title: 'Warm up activity',
  SubTitle:
    'This skills tutorial will help you understand how to perform the Penguim.',
  ImagesUrls: ['@/src/assets/field-positions.png'],
  VideoUrl: '',
  Duration: '10 mins',
  Description: '',
})
const technical = ref<IExerciseSessionPlan>({
  Title: 'Technical exercise',
  SubTitle:
    'This skills tutorial will help you understand how to perform the Penguim.',
  ImagesUrls: ['@/src/assets/field-positions.png'],
  VideoUrl: '',
  Duration: '10 mins',
  Description: '',
})
const lesson = ref<IExerciseSessionPlan>({
  Title: 'Lesson debrief',
  SubTitle:
    'This skills tutorial will help you understand how to perform the Penguim.',
  ImagesUrls: ['@/src/assets/field-positions.png'],
  VideoUrl: '',
  Duration: '10 mins',
  Description: '',
})

const sessionPlan = ref<ISessionPlan>({
  TotalDuration: '4 Hours',
  PlayerImageUrl: '',
  SubTitle: 'In todays lesson, students will learn to perform the Pinguim',
  Title: 'The Pinguim',
  BannerUrl: 'bg-stadium.png',
  VideosUrls: [''],
  Exercises: [
    smallSideGames.value,
    introduction.value,
    warmup.value,
    technical.value,
    lesson.value,
  ],
})

let selectedExercise = ref<number>(-1)

const selectionAreas = ref<string[]>([
  'Session Plans',
  'Members',
  'Trails',
  'Coaches',
  'Cancel Class',
])
let selection = ref<string>('Session Plans')
let notificationSelection = ref<string>('Members')

const selectInformation = (selected: string) => {
  selection.value = selected
}
const selectNotification = (selected: string) => {
  notificationSelection.value = selected
}
onMounted(() => {
  console.log('pages/synco/config/weekly-classes/session-plans/edit.vue')
})
</script>

<template>
  <NuxtLayout name="syncolayout">
    <div class="d-flex flex-column">
      <NuxtLink class="h3 my-4" to="/synco/config/weekly-classes/session-plans">
        <Icon name="material-symbols:arrow-back" class="me-2" />Edit Session
      </NuxtLink>
    </div>
    <div class="card rounded-4 px-4">
      <div class="row my-4">
        <div class="col-3 px-4">
          <div
            class="card rounded-4 border"
            style="background-color: #12121308; min-height: 600px"
          >
            <div class="d-flex flex-column align-items-center">
              <Icon
                name="ph:clock"
                style="color: orange; height: 100px; width: 100px"
              />
              <span>Pending</span>
              <hr class="w-100" />
              <div class="d-flex flex-column align-items-left w-100 my-2 px-4">
                <span><strong>Venue</strong></span>
                <span class="text-muted">Acton</span>
              </div>
              <div class="d-flex flex-column align-items-left w-100 my-2 px-4">
                <span><strong>Class</strong></span>
                <span class="text-muted">4-5 Years</span>
              </div>
              <div class="d-flex flex-column align-items-left w-100 my-2 px-4">
                <span><strong>Date</strong></span>
                <span class="text-muted">Sunday 23rd April 2023</span>
              </div>
              <div class="d-flex flex-column align-items-left w-100 my-2 px-4">
                <span><strong>Time</strong></span>
                <span class="text-muted">11:00am - 12:00pm</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-9">
          <div class="d-flex flex-column align-items-center w-100 my-4">
            <div
              class="rounded-3 d-flex flex-row border p-1"
              style="width: fit-content"
            >
              <template v-for="btn in selectionAreas">
                <button
                  type="button"
                  class="btn mx-2"
                  :class="selection == btn ? 'btn-primary text-light' : ''"
                  @click="selectInformation(btn)"
                >
                  {{ btn }}
                </button>
              </template>
            </div>
          </div>
          <template v-if="selection == 'Session Plans'">
            <div class="row">
              <div class="col-12" style="border-right: 1px solid lightgray">
                <!-- <div class="card rounded-3 bg-stadium border-0">
                  <div class="row h-100 w-100">
                    <div class="col-5">
                      <div
                        class="d-flex flex-column align-items-center justify-content-center h-100 text-light font-custom"
                      >
                        <span> PLAY LIKE </span>
                        <span class="h3"> Pele </span>
                      </div>
                    </div>
                    <div class="col-7 d-flex align-items-end flex-row">
                      <img src="@/src/assets/img-pele.png" height="100px" />
                    </div>
                  </div>
                </div> -->
                <div class="d-flex flex-column">
                  <div
                    class="d-flex justify-content-between align-items-center flex-row"
                  >
                    <div class="d-flex flex-column">
                      <span class="h3 mt-4"
                        ><strong>Skill of the day</strong></span
                      >
                      <span class="h5"
                        >{{ sessionPlan.Title }}
                        <Icon class="text-primary" name="ph:speaker-high"
                      /></span>
                      <span class="text-muted">{{ sessionPlan.SubTitle }}</span>
                    </div>
                    <NuxtImg
                      :src="sessionPlan.BannerUrl"
                      style="width: 600px; height: 120px"
                    />
                  </div>
                  <hr class="w-100" />
                  <template v-for="video in sessionPlan.VideosUrls">
                    <video class="rounded-4" :src="video" controls></video>
                  </template>
                  <div class="d-flex justify-content-between mt-4 flex-row">
                    <span class="h3"><strong>Session Plan</strong></span>
                    <span class="h5 text-primary">
                      <Icon name="ph:download-simple" class="" />
                    </span>
                  </div>
                  <span class="text-small text-muted mb-4">
                    <Icon name="ph:clock" /> {{ sessionPlan.TotalDuration }}
                  </span>

                  <template v-for="(exercise, index) in sessionPlan.Exercises">
                    <div
                      class="row hover-hand my-3"
                      v-if="selectedExercise != index"
                      @click="selectedExercise = index"
                    >
                      <div class="col-2">
                        <NuxtImg
                          :src="exercise.ImagesUrls[0]"
                          class="rounded-4 w-100"
                        />
                      </div>
                      <div
                        class="col-10 d-flex flex-column"
                        @click="selectedExercise = index"
                      >
                        <span class="h6"
                          ><strong>{{ exercise.Title }}</strong></span
                        >
                        <span class="text-muted">
                          {{ exercise.SubTitle }}
                        </span>
                        <span class="text-muted">{{ exercise.Duration }}</span>
                      </div>
                    </div>
                    <div class="row my-3" v-if="selectedExercise == index">
                      <div class="col-12">
                        <div class="d-flex flex-column">
                          <div
                            class="d-flex flex-column hover-hand"
                            @click="selectedExercise = -1"
                          >
                            <span class="h4">
                              <strong>{{ exercise.Title }}</strong>
                            </span>
                            <NuxtImg
                              :src="exercise.ImagesUrls[0]"
                              class="rounded-4 w-100 my-4"
                              style="max-width: 80%"
                            />
                          </div>
                          <template
                            v-for="(image, index) in exercise.ImagesUrls"
                          >
                            <template v-if="index > 0">
                              <NuxtImg
                                :src="image"
                                class="rounded-4 w-100 my-4"
                                style="max-width: 80%"
                              />
                            </template>
                          </template>
                          <span class="text-primary">
                            Time Duration: {{ exercise.Duration }}
                          </span>
                          <div class="d-flex flex-column">
                            {{ exercise.Description }}
                            <!--                             
                              <span class="h5 my-2">
                                <strong>Organization</strong>
                              </span>
                              <span>
                                Set up two small-sided games. You will need the
                                following:
                              </span>
                              <ul>
                                <li>4 pop-up goals</li>
                                <li>Bibs to clearly divide teams</li>
                                <li>4 blue cones to divide the two pitches</li>
                                <li>5 footballs</li>
                              </ul>
                              <span class="h5 my-2"
                                ><strong>Description</strong></span
                              >
                              <span>
                                Begin the lesson with two small-sided games.
                                Organise players based on ability into four teams.
                                If you do not have many students, use one pitch
                                only. Keep an eye on both games, unless you have a
                                support coach working with you.
                              </span>
                              <span class="h5 my-2"><strong>Rules</strong></span>
                              <span>
                                Before you start the game, quickly reiterate the
                                rules of the game:
                              </span>
                              <ol>
                                <li>No slide tackles</li>
                                <li>
                                  If the ball rolls out of play, students should
                                  all freeze and wait for a new ball to be rolled
                                  in (have 5 football nearby ready)
                                </li>
                              </ol>
                              <span class="h5 my-2"
                                ><strong>Conditions</strong></span
                              >
                              <span>
                                You can select a condition from below to stop
                                students from all chasing the ball and/or playing
                                as solo players. Keep classes fun by variating the
                                conditions each week.
                              </span>
                              <ol>
                                <li>
                                  Players can only shoot once every member of the
                                  team has touched the ball.
                                </li>
                                <li>
                                  Only can only shoot once they have built 3-5
                                  passes.
                                </li>
                                <li>
                                  Only one member of each team is selected as the
                                  goalscorer.
                                </li>
                              </ol>
                              <span class="h5 my-2">
                                <strong
                                  >How to maintain the tone & intensity</strong
                                >
                              </span>
                              <span>
                                Set up two small-sided games. You will need the
                                following:
                              </span>
                              <ul>
                                <li>4 pop-up goals</li>
                                <li>Bibs to clearly divide teams</li>
                                <li>4 blue cones to divide the two pitches</li>
                                <li>5 footballs</li>
                              </ul> 
                            -->
                            <div v-if="!!exercise.VideoUrl">
                              <video
                                class="rounded-4"
                                :src="exercise.VideoUrl"
                                controls
                              ></video>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </template>
                </div>
              </div>
            </div>
          </template>
          <template v-else-if="selection == 'Members'">
            <div class="row border-y py-3">
              <div class="col-4">
                <span>1. John Smith</span>
              </div>
              <div class="col-2">
                <span>7 Years</span>
              </div>
              <div class="col-6">
                <div class="d-flex flex-row">
                  <div
                    class="badge-light rounded-3 mx-3 p-1 text-center"
                    style="width: 120px"
                  >
                    <span class=""><Icon name="ph:check" /> Attended</span>
                  </div>
                  <div
                    class="badge-light rounded-3 mx-3 p-1 text-center"
                    style="width: 120px"
                  >
                    <span class=""><Icon name="ph:x" /> Not Attended</span>
                  </div>
                </div>
              </div>
            </div>
            <template v-for="num in 2">
              <div class="row border-y py-3">
                <div class="col-4">
                  <span>1. John Smith</span>
                </div>
                <div class="col-2">
                  <span>7 Years</span>
                </div>
                <div class="col-6">
                  <div class="d-flex flex-row">
                    <div
                      class="badge-success rounded-3 mx-3 p-1 text-center"
                      style="width: 120px"
                    >
                      <span class="text-light"
                        ><Icon name="ph:check" /> Attended</span
                      >
                    </div>
                    <div
                      class="badge-danger rounded-3 mx-3 p-1 text-center"
                      style="width: 120px"
                    >
                      <span class="text-light"
                        ><Icon name="ph:x" /> Not Attended</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </template>
          <template v-else-if="selection == 'Trails'"> Trails </template>
          <template v-else-if="selection == 'Coaches'"> Coaches </template>
          <template v-else-if="selection == 'Cancel Class'">
            <div class="row">
              <div
                class="col-6"
                style="
                  border-right: 1px solid lightgray;
                  border-top: 1px solid lightgray;
                "
              >
                <div class="d-flex flex-column my-4">
                  <div class="my-4">
                    <div class="form-group w-100">
                      <label for="className" class="form-labelform-label-light">
                        Class 2 name
                      </label>
                      <select
                        id="className"
                        class="form-control form-control-lg"
                      >
                        <option>4-7 Years</option>
                      </select>
                    </div>
                  </div>

                  <div class="my-3">
                    <label for="notifyMembers" class="form-label">
                      Would you like to notify members?
                    </label>
                    <div class="d-flex flex-row">
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="notifyMembers"
                          id="notifyMembers-yes"
                          value="yes"
                        />
                        <label class="form-check-label" for="notifyMembers-yes">
                          Yes
                        </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="notifyMembers"
                          id="notifyMembers-no"
                          value="no"
                        />
                        <label class="form-check-label" for="notifyMembers-no">
                          No
                        </label>
                      </div>
                    </div>
                  </div>

                  <div class="my-3">
                    <label for="creditMembers" class="form-label">
                      Credit members 1 session?
                    </label>
                    <div class="d-flex flex-row">
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="creditMembers"
                          id="creditMembers-yes"
                          value="yes"
                        />
                        <label class="form-check-label" for="creditMembers-yes">
                          Yes
                        </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="creditMembers"
                          id="creditMembers-no"
                          value="no"
                        />
                        <label class="form-check-label" for="creditMembers-no">
                          No
                        </label>
                      </div>
                    </div>
                  </div>

                  <div class="my-3">
                    <label for="notifyTrialists" class="form-label">
                      Would you like to notify trialists?
                    </label>
                    <div class="d-flex flex-row">
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="notifyTrialists"
                          id="notifyTrialists-yes"
                          value="yes"
                        />
                        <label
                          class="form-check-label"
                          for="notifyTrialists-yes"
                        >
                          Yes
                        </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="notifyTrialists"
                          id="notifyTrialists-no"
                          value="no"
                        />
                        <label
                          class="form-check-label"
                          for="notifyTrialists-no"
                        >
                          No
                        </label>
                      </div>
                    </div>
                  </div>

                  <div class="my-3">
                    <label for="notifyCoaches" class="form-label">
                      Would you like to notify coaches?
                    </label>
                    <div class="d-flex flex-row">
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="notifyCoaches"
                          id="notifyCoaches-yes"
                          value="yes"
                        />
                        <label class="form-check-label" for="notifyCoaches-yes">
                          Yes
                        </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="notifyCoaches"
                          id="notifyCoaches-no"
                          value="no"
                        />
                        <label class="form-check-label" for="notifyCoaches-no">
                          No
                        </label>
                      </div>
                    </div>
                  </div>

                  <div class="my-4">
                    <button type="button" class="btn btn-danger text-light">
                      Cancel Class
                    </button>
                  </div>
                </div>
              </div>
              <div
                class="col-6"
                style="
                  border-left: 1px solid lightgray;
                  border-top: 1px solid lightgray;
                "
              >
                <div class="d-flex w-100 justify-content-center my-4 flex-row">
                  <button
                    @click="selectNotification('Members')"
                    class="btn-transparent px-4 py-1"
                    :class="
                      notificationSelection == 'Members'
                        ? 'nav-selected'
                        : 'nav-unselected'
                    "
                  >
                    Members
                  </button>
                  <button
                    @click="selectNotification('Trialists')"
                    class="btn-transparent px-4 py-1"
                    :class="
                      notificationSelection == 'Trialists'
                        ? 'nav-selected'
                        : 'nav-unselected'
                    "
                  >
                    Trialists
                  </button>
                  <button
                    @click="selectNotification('Coaches')"
                    class="btn-transparent px-4 py-1"
                    :class="
                      notificationSelection == 'Coaches'
                        ? 'nav-selected'
                        : 'nav-unselected'
                    "
                  >
                    Coaches
                  </button>
                </div>
                <template v-if="notificationSelection == 'Members'">
                  <SyncoConfigSessionPlansEmailForm
                    :to="'Members'"
                  ></SyncoConfigSessionPlansEmailForm>
                </template>
                <template v-else-if="notificationSelection == 'Trialists'">
                  <SyncoConfigSessionPlansEmailForm
                    :to="'Trialists'"
                  ></SyncoConfigSessionPlansEmailForm>
                </template>
                <template v-else-if="notificationSelection == 'Coaches'">
                  <SyncoConfigSessionPlansEmailForm
                    :to="'Coaches'"
                  ></SyncoConfigSessionPlansEmailForm>
                </template>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped lang="scss">
.bg-stadium {
  background-image: url('@/src/assets/bg-stadium.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 120px;
}
@import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');
.font-custom {
  font-family: 'Luckiest Guy', cursive;
  font-weight: 400;
  font-style: normal;
}
.badge-light {
  background-color: #71707307;
  border: 1px solid #71707320;
}

.badge-success {
  background-color: #ff5c40;
  border: 1px solid #ff5c4080;
}

.badge-danger {
  background-color: #34ae56;
  border: 1px solid #34ae5680;
}
.border-y {
  border-top: 1px solid var(--bs-border-color);
  border-bottom: 1px solid var(--bs-border-color);
}
.btn-transparent {
  background-color: transparent;
  box-shadow: none;
  border: 0px;
}

.nav-selected {
  font-weight: bold;
  border-bottom: 1px solid #237fea;
}
.nav-unselected {
  border-bottom: 1px solid #e2e1e5;
}
.hover-hand:hover {
  cursor: pointer;
}
</style>
