<script>
export default {
  data: () => ({
    tab: 'Rewards', //Rewards, Points
    rewards: [
      { id: 1, name: 'Free SSS Skills Ball', pointsNeeded: 500, addedBy: 'Nilio Bagga', date: 'Monday 23rd June, 8:54 am' },
      { id: 2, name: 'Free Hoodie', pointsNeeded: 700, addedBy: 'Nilio Bagga', date: 'Monday 23rd June, 8:58 am' }
    ],
    pointsSchemes: [
      { id: 1, action: 'Refer a friend', points: 300, addedBy: 'Nilio Bagga', date: 'Monday 23rd June, 8:54 am' },
      { id: 2, action: '6 months of membership', points: 700, addedBy: 'Nilio Bagga', date: 'Monday 23rd June, 8:59 am' }
    ],
    selectedReward: null,
    selectedPointScheme: null
  }),
  mounted() {
    // this.selectedPointScheme = this.pointsSchemes[0]
    // this.selectedReward = this.pointsSchemes[0]
  }

}
</script>


<template>
  <NuxtLayout name="syncolayout" pageTitle="Loyalty Points">
    <div class="d-flex align-items-center mb-4">
      <div class="border bg-white py-2 px-2 d-inline-block rounded-4 ">
        <button class="btn" @click="tab = 'Rewards'"
          :class="tab === 'Rewards' ? 'btn-primary text-light' : 'btn-transparent'">Rewards</button>
        <button class="btn" @click="tab = 'Points'"
          :class="tab === 'Points' ? 'btn-primary text-light' : 'btn-transparent'">Points Scheme</button>

      </div>
      <span class="text-danger">Missing option to add new one </span>
    </div>


    <!-- Rewards  -->
    <div class="row" v-if="tab === 'Rewards'">
      <div class="col">
        <table class="table table-hover table-sm border shadow-sm">
          <thead class="rounded-top-4">
            <tr class="table-light">
              <!-- <th scope="col">Checkbox</th> -->
              <th scope="col" class="text-muted">
                Reward
              </th>
              <th class="text-muted" scope="col">Points Needed</th>
              <th class="text-muted" scope="col">Added By</th>
              <th class="text-muted" scope="col">Date</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody class="">
            <tr class="align-middle" v-for="reward in rewards" @click="selectedReward = reward">
              <th>
                {{ reward.name }}
              </th>
              <td>{{ reward.pointsNeeded }}</td>
              <td>{{ reward.addedBy }}</td>
              <td>{{ reward.date }}</td>
              <td class="text-end ">
                <button class="btn btn-lg btn-transparent" @click="selectedReward = reward">
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
      <div class="col-4" v-if="selectedReward">
        <div class="card">
          <div class="card-header border-bottom">
            <h4 class="card-title mt-3">Reward Detail</h4>
          </div>
          <div class="card-body">
            <div class="form-group mb-3">
              <label for="reward-name" class="form-label">Reward Name</label>
              <input type="text" class="form-control" id="reward-name" :value="selectedReward.name">
            </div>
            <div class="form-group mb-3">
              <label for="points-required" class="form-label">Number of points required</label>
              <input type="number" class="form-control" id="points-required" :value="selectedReward.pointsNeeded">
            </div>
            <div class="form-group mb-3">
              <label for="cover-image" class="form-label">Cover Image</label>
              <img src="@/src/assets/img-blog-4.png" class="img-fluid rounded-4 w-75" :alt="selectedReward.name"> <br>
              <span class="text-danger">Missing option to replace image or upload new</span>
            </div>
            <div class="d-flex align-items-center justify-content-between">
              <button class="btn btn-lg btn-transparent border w-100 me-2" @click="selectedReward = null">Cancel</button>
              <button class="btn btn-lg btn-primary text-light w-100 ms-2">Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Points  -->
    <div class="row" v-if="tab === 'Points'">
      <div class="col">
        <table class="table table-hover table-sm border shadow-sm">
          <thead class="rounded-top-4">
            <tr class="table-light ">
              <!-- <th scope="col">Checkbox</th> -->
              <th scope="col">
                Action
              </th>
              <th class="text-muted" scope="col">Points Value</th>
              <th class="text-muted" scope="col">Added by</th>
              <th class="text-muted" scope="col">Date</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody class="">
            <tr class="align-middle" v-for="scheme in pointsSchemes" @click="selectedPointScheme = scheme"
              :class="selectedPointScheme">
              <th scope="row">
                {{ scheme.action }}
              </th>
              <td>{{ scheme.points }}</td>
              <td>{{ scheme.addedBy }}</td>
              <td>
                {{ scheme.date }}
              </td>
              <td class="text-end ">
                <button class="btn btn-lg btn-transparent" @click="selectedPointScheme = scheme">
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
      <div class="col-4" v-if="selectedPointScheme">
        <div class="card">
          <div class="card-header border-bottom">
            <h4 class="card-title mt-3">Action Detail</h4>
          </div>
          <div class="card-body">
            <div class="card-body">
              <div class="form-group mb-3">
                <label for="action-name" class="form-label">Action Name</label>
                <input type="text" class="form-control" id="action-name" :value="selectedPointScheme.action">
              </div>
              <div class="form-group mb-3">
                <label for="points-value" class="form-label">Points value</label>
                <input type="number" class="form-control" id="points-value" :value="selectedPointScheme.points">
              </div>
              <div class="d-flex align-items-center justify-content-between">
                <button class="btn btn-lg btn-transparent border w-100 me-2"
                  @click="selectedPointScheme = null">Cancel</button>
                <button class="btn btn-lg btn-primary text-light w-100 ms-2">Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



  </NuxtLayout>
</template>
 
 