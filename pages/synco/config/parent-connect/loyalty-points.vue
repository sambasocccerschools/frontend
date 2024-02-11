<script>
export default {
  data: () => ({
    tab: 'Rewards', // Rewards, Points
    rewards: [
      {
        id: 1,
        name: 'Free SSS Skills Ball',
        pointsNeeded: 500,
        addedBy: 'Nilio Bagga',
        date: 'Monday 23rd June, 8:54 am',
      },
      {
        id: 2,
        name: 'Free Hoodie',
        pointsNeeded: 700,
        addedBy: 'Nilio Bagga',
        date: 'Monday 23rd June, 8:58 am',
      },
    ],
    pointsSchemes: [
      {
        id: 1,
        action: 'Refer a friend',
        points: 300,
        addedBy: 'Nilio Bagga',
        date: 'Monday 23rd June, 8:54 am',
      },
      {
        id: 2,
        action: '6 months of membership',
        points: 700,
        addedBy: 'Nilio Bagga',
        date: 'Monday 23rd June, 8:59 am',
      },
    ],
    selectedReward: null,
    selectedPointScheme: null,
  }),
  mounted() {
    // this.selectedPointScheme = this.pointsSchemes[0]
    // this.selectedReward = this.pointsSchemes[0]
  },
}
</script>

<template>
  <NuxtLayout name="syncolayout" page-title="Loyalty Points">
    <div class="d-flex align-items-center mb-4">
      <div class="d-inline-block rounded-4 border bg-white px-2 py-2">
        <button
          class="btn"
          :class="
            tab === 'Rewards' ? 'btn-primary text-light' : 'btn-transparent'
          "
          @click="tab = 'Rewards'"
        >
          Rewards
        </button>
        <button
          class="btn"
          :class="
            tab === 'Points' ? 'btn-primary text-light' : 'btn-transparent'
          "
          @click="tab = 'Points'"
        >
          Points Scheme
        </button>
      </div>
      <span class="text-danger">Missing option to add new one </span>
    </div>

    <!-- Rewards  -->
    <div v-if="tab === 'Rewards'" class="row">
      <div class="col">
        <table class="table-hover table-sm table border shadow-sm">
          <thead class="rounded-top-4">
            <tr class="table-light">
              <!-- <th scope="col">Checkbox</th> -->
              <th scope="col" class="text-muted">Reward</th>
              <th class="text-muted" scope="col">Points Needed</th>
              <th class="text-muted" scope="col">Added By</th>
              <th class="text-muted" scope="col">Date</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody class="">
            <tr
              v-for="reward in rewards"
              class="align-middle"
              @click="selectedReward = reward"
            >
              <th>
                {{ reward.name }}
              </th>
              <td>{{ reward.pointsNeeded }}</td>
              <td>{{ reward.addedBy }}</td>
              <td>{{ reward.date }}</td>
              <td class="text-end">
                <button
                  class="btn btn-lg btn-transparent"
                  @click="selectedReward = reward"
                >
                  <Icon name="ph:pencil-simple-line" />
                </button>
                <button class="btn btn-lg btn-transparent">
                  <Icon name="ph:trash-thin" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-if="selectedReward" class="col-4">
        <div class="card">
          <div class="card-header border-bottom">
            <h4 class="card-title mt-3">Reward Detail</h4>
          </div>
          <div class="card-body">
            <div class="form-group mb-3">
              <label for="reward-name" class="form-label">Reward Name</label>
              <input
                id="reward-name"
                type="text"
                class="form-control"
                :value="selectedReward.name"
              />
            </div>
            <div class="form-group mb-3">
              <label for="points-required" class="form-label"
                >Number of points required</label
              >
              <input
                id="points-required"
                type="number"
                class="form-control"
                :value="selectedReward.pointsNeeded"
              />
            </div>
            <div class="form-group mb-3">
              <label for="cover-image" class="form-label">Cover Image</label>
              <img
                src="@/src/assets/img-blog-4.png"
                class="img-fluid rounded-4 w-75"
                :alt="selectedReward.name"
              />
              <br />
              <span class="text-danger"
                >Missing option to replace image or upload new</span
              >
            </div>
            <div class="d-flex align-items-center justify-content-between">
              <button
                class="btn btn-lg btn-transparent w-100 me-2 border"
                @click="selectedReward = null"
              >
                Cancel
              </button>
              <button class="btn btn-lg btn-primary text-light w-100 ms-2">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Points  -->
    <div v-if="tab === 'Points'" class="row">
      <div class="col">
        <table class="table-hover table-sm table border shadow-sm">
          <thead class="rounded-top-4">
            <tr class="table-light">
              <!-- <th scope="col">Checkbox</th> -->
              <th scope="col">Action</th>
              <th class="text-muted" scope="col">Points Value</th>
              <th class="text-muted" scope="col">Added by</th>
              <th class="text-muted" scope="col">Date</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody class="">
            <tr
              v-for="scheme in pointsSchemes"
              class="align-middle"
              :class="selectedPointScheme"
              @click="selectedPointScheme = scheme"
            >
              <th scope="row">
                {{ scheme.action }}
              </th>
              <td>{{ scheme.points }}</td>
              <td>{{ scheme.addedBy }}</td>
              <td>
                {{ scheme.date }}
              </td>
              <td class="text-end">
                <button
                  class="btn btn-lg btn-transparent"
                  @click="selectedPointScheme = scheme"
                >
                  <Icon name="ph:pencil-simple-line" />
                </button>
                <button class="btn btn-lg btn-transparent">
                  <Icon name="ph:trash-thin" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-if="selectedPointScheme" class="col-4">
        <div class="card">
          <div class="card-header border-bottom">
            <h4 class="card-title mt-3">Action Detail</h4>
          </div>
          <div class="card-body">
            <div class="card-body">
              <div class="form-group mb-3">
                <label for="action-name" class="form-label">Action Name</label>
                <input
                  id="action-name"
                  type="text"
                  class="form-control"
                  :value="selectedPointScheme.action"
                />
              </div>
              <div class="form-group mb-3">
                <label for="points-value" class="form-label"
                  >Points value</label
                >
                <input
                  id="points-value"
                  type="number"
                  class="form-control"
                  :value="selectedPointScheme.points"
                />
              </div>
              <div class="d-flex align-items-center justify-content-between">
                <button
                  class="btn btn-lg btn-transparent w-100 me-2 border"
                  @click="selectedPointScheme = null"
                >
                  Cancel
                </button>
                <button class="btn btn-lg btn-primary text-light w-100 ms-2">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
