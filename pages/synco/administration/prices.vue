<script>
export default {
  data: () => ({
    plans: [
      {
        id: 'plan-1',
        name: 'Weekly Classes',
        venue: 'Kings Cross', // Probably an ID
        priceList: [
          {
            id: 'price-1',
            name: '12 Month Plan',
            connectWith: 'GoCardless',
            studentsAmmount: 1,
            monthlyPrice: 3999,
            pricePerClassPerChild: 11.33,
            initialFee: 35,
          },
          {
            id: 'price-2',
            name: '6 Month Plan',
            connectWith: 'GoCardless',
            studentsAmmount: 1,
            monthlyPrice: 3999,
            pricePerClassPerChild: 11.33,
            initialFee: 35,
          },
          {
            id: 'price-3',
            name: 'Flexi Plan',
            connectWith: 'GoCardless',
            studentsAmmount: 1,
            monthlyPrice: 3999,
            pricePerClassPerChild: 11.33,
            initialFee: 35,
          },
        ],
      },
    ],
    selectedPlan: {},
  }),
}
</script>

<template>
  <NuxtLayout name="syncolayout" page-title="Settings">
    <div class="d-flex align-items-center justify-content-between mb-4">
      <h4>Price Management</h4>
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn btn-primary text-light"
        data-bs-toggle="modal"
        data-bs-target="#addNewPlanModal"
      >
        Create New Plan
      </button>
    </div>

    <div class="card">
      <div class="container">
        <div class="row">
          <div class="col-3 border-end border-light-subtle px-0">
            <div class="card-header pt-4">
              <h4 class="card-title">Plans</h4>
            </div>
            <div class="card-body p-0">
              <div v-for="plan in plans">
                <button
                  class="btn w-100 align-items-center justify-content-between text-start"
                  type="button"
                  @click="selectedPlan = plan"
                >
                  {{ plan.name }}
                  <Icon name="pajamas:chevron-down" />
                </button>
                <ul class="list-unstyled ms-5">
                  <li v-for="price in plan.priceList" class="py-2">
                    {{ price.name }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col">
            <div
              class="card-header d-flex align-items-center justify-content-between pt-4"
            >
              <h4 class="card-title">Weekly price - 12 month plan</h4>
              <!-- Button trigger modal -->
              <button
                type="button"
                class="btn btn-primary text-light"
                data-bs-toggle="modal"
                data-bs-target="#addNewPriceModal"
              >
                Add new price
              </button>
            </div>
            <div class="card-body">
              <!-- One Price Card  -->
              <div class="card border-light-subtle mb-4 border">
                <div
                  class="card-header d-flex align-items-center justify-content-between border-bottom border-light-subtle"
                >
                  <h5 class="card-title m-0">1 Students Kings Cross</h5>
                  <button
                    class="btn btn-transparent rounded-5 border-light-subtle border"
                  >
                    Edit
                    <Icon name="ph:pencil-simple-line-light" />
                  </button>
                </div>
                <div class="card-body">
                  <div class="container">
                    <div class="row mb-2">
                      <div class="col-3 text-muted">Connect with</div>
                      <div class="col">Go Cardless</div>
                    </div>
                    <div class="row mb-2">
                      <div class="col-3 text-muted">
                        Monthly subscription fee
                      </div>
                      <div class="col">£39.99/month</div>
                    </div>
                    <div class="row mb-2">
                      <div class="col-3 text-muted">
                        Price per class per child
                      </div>
                      <div class="col">£11.33/month</div>
                    </div>
                    <div class="row mb-2">
                      <div class="col-3 text-muted">One off joining fee</div>
                      <div class="col">£35.00</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- One Price Card  -->
              <div class="card border-light-subtle mb-4 border">
                <div
                  class="card-header d-flex align-items-center justify-content-between border-bottom border-light-subtle"
                >
                  <h5 class="card-title m-0">2 Students Kings Cross</h5>
                  <button
                    class="btn btn-transparent rounded-5 border-light-subtle border"
                  >
                    Edit
                    <Icon name="ph:pencil-simple-line-light" />
                  </button>
                </div>
                <div class="card-body">
                  <div class="container">
                    <div class="row mb-2">
                      <div class="col-3 text-muted">Connect with</div>
                      <div class="col">Go Cardless</div>
                    </div>
                    <div class="row mb-2">
                      <div class="col-3 text-muted">
                        Monthly subscription fee
                      </div>
                      <div class="col">£39.99/month</div>
                    </div>
                    <div class="row mb-2">
                      <div class="col-3 text-muted">
                        Price per class per child
                      </div>
                      <div class="col">£11.33/month</div>
                    </div>
                    <div class="row mb-2">
                      <div class="col-3 text-muted">One off joining fee</div>
                      <div class="col">£35.00</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- One Price Card  -->
              <div class="card border-light-subtle mb-4 border">
                <div
                  class="card-header d-flex align-items-center justify-content-between border-bottom border-light-subtle"
                >
                  <h5 class="card-title m-0">3 Students Kings Cross</h5>
                  <button
                    class="btn btn-transparent rounded-5 border-light-subtle border"
                  >
                    Edit
                    <Icon name="ph:pencil-simple-line-light" />
                  </button>
                </div>
                <div class="card-body">
                  <div class="container">
                    <div class="row mb-2">
                      <div class="col-3 text-muted">Connect with</div>
                      <div class="col">Go Cardless</div>
                    </div>
                    <div class="row mb-2">
                      <div class="col-3 text-muted">
                        Monthly subscription fee
                      </div>
                      <div class="col">£39.99/month</div>
                    </div>
                    <div class="row mb-2">
                      <div class="col-3 text-muted">
                        Price per class per child
                      </div>
                      <div class="col">£11.33/month</div>
                    </div>
                    <div class="row mb-2">
                      <div class="col-3 text-muted">One off joining fee</div>
                      <div class="col">£35.00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Add Role Modal -->
    <div
      id="addNewPlanModal"
      class="modal fade centered"
      tabindex="-1"
      aria-labelledby="addNewPlanModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header p-4">
            <h1 id="addNewPlanModalLabel" class="modal-title fs-3">New Plan</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body p-4">
            <div class="form-group mb-3">
              <label for="planName" class="form-label">Plan Name</label>
              <input
                id="planName"
                type="text"
                class="form-control"
                aria-describedby="planNameHelp"
              />
            </div>
            <div class="form-group mb-3">
              <label for="venue" class="form-label">Venue</label>
              <select id="venue" class="form-select" aria-label="Venue">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div class="modal-footer border-0 p-4">
            <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> -->
            <button type="button" class="btn btn-primary text-light px-5">
              Create
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Add new Price Modal -->
    <div
      id="addNewPriceModal"
      class="modal fade centered"
      tabindex="-1"
      aria-labelledby="addNewPriceModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header p-4">
            <h1 id="addNewPriceModalLabel" class="modal-title fs-3">
              New Price
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body p-4">
            <div class="form-group mb-3">
              <label for="priceName" class="form-label">Price name</label>
              <input id="priceName" type="text" class="form-control" />
            </div>
            <div class="form-group mb-3">
              <label for="connectWith" class="form-label">Connect with</label>
              <select
                id="connectWith"
                class="form-select"
                aria-label="connectWith"
              >
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="form-group mb-3">
              <label for="students" class="form-label"
                >How many students is this plan for?</label
              >
              <select id="students" class="form-select" aria-label="students">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="form-group mb-3">
              <label for="monthlyPrice" class="form-label">Monthly price</label>
              <input id="monthlyPrice" type="number" class="form-control" />
            </div>
            <div class="form-group mb-3">
              <label for="pricePerClassPerChild" class="form-label"
                >Price per class per child</label
              >
              <input
                id="pricePerClassPerChild"
                type="number"
                class="form-control"
              />
            </div>
            <div class="form-group mb-3">
              <label for="joiningFee" class="form-label"
                >One off joining fee</label
              >
              <input id="joiningFee" type="number" class="form-control" />
            </div>
          </div>
          <div class="modal-footer border-0 p-4">
            <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> -->
            <button type="button" class="btn btn-primary text-light px-5">
              Create Price
            </button>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
