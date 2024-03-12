<script>
const router = useRouter()

export default {
  data: () => ({
    // These will get replaces by arrays
    // coachLeads: 10,
  }),
  methods: {
    goBack() {
      router.back()
    },
  },
}
</script>

<template>
  <NuxtLayout name="syncolayout">
    <div class="container-fluid">
      <button class="btn btn-transparent px-0" @click="() => goBack()">
        <Icon name="material-symbols:arrow-left-alt" class="h4 me-2 p-0" />
        <span class="h4">Create Discount</span>
      </button>
      <div class="row">
        <div class="col-sm-8">
          <!-- Amount off products  -->
          <div class="card mb-4">
            <div class="card-body">
              <label for="amount-off-products" class="form-label"
                >Amount off products</label
              >
              <div class="form-check mb-3">
                <input
                  id="discount-code"
                  type="checkbox"
                  class="form-check-input"
                />
                <label class="form-check-label" for="discount-code"
                  >Discount code</label
                >
              </div>
              <div class="form-check mb-3">
                <input
                  id="automatic-discount"
                  type="checkbox"
                  class="form-check-input"
                />
                <label class="form-check-label" for="automatic-discount"
                  >Automatic discount</label
                >
              </div>
              <div class="row align-items-end">
                <div class="form-group col">
                  <label for="generated-discount-code">Discount code</label>
                  <input
                    id="generated-discount-code"
                    type="text"
                    class="form-control"
                  />
                </div>
                <div class="form-group col-auto">
                  <button class="btn btn-primary text-light px-4">
                    Generate
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- Value  -->
          <div class="card mb-4">
            <div class="card-body">
              <div class="form-group mb-4">
                <label class="form-label">Value</label>
                <div class="row">
                  <div class="col-auto">
                    <input
                      id="percentage"
                      type="radio"
                      class="btn-check"
                      name="value-amount"
                      autocomplete="off"
                      checked
                    />
                    <label class="btn btn-primary text-light" for="percentage"
                      >Percentage</label
                    >
                  </div>

                  <div class="col-auto">
                    <input
                      id="fixed-amount"
                      type="radio"
                      class="btn-check"
                      name="value-amount"
                      autocomplete="off"
                    />
                    <label class="btn btn-primary text-light" for="fixed-amount"
                      >Fixed amount</label
                    >
                  </div>

                  <div class="col input-group">
                    <input
                      type="number"
                      class="form-control"
                      placeholder=""
                      aria-label="value"
                      aria-describedby="fixed-amount-value"
                    />
                    <span id="fixed-amount-value" class="input-group-text"
                      >%</span
                    >
                  </div>
                </div>
              </div>

              <div class="form-group mb-4">
                <label for="applyTo" class="form-label">Apply to</label>
                <div class="form-check mb-3">
                  <input
                    id="apply-to-weekly-classes"
                    type="checkbox"
                    class="form-check-input"
                  />
                  <label class="form-check-label" for="apply-to-weekly-classes"
                    >Check me out</label
                  >

                  <div class="form-check">
                    <input
                      id="weekly-class-joining-fee"
                      class="form-check-input"
                      type="radio"
                      name="weekly-class-apply"
                      checked
                    />
                    <label
                      class="form-check-label"
                      for="weekly-class-joining-fee"
                    >
                      Joining Fee
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      id="weekly-class-pro-rata"
                      class="form-check-input"
                      type="radio"
                      name="weekly-class-apply"
                    />
                    <label class="form-check-label" for="weekly-class-pro-rata">
                      Pro Rate Lessons
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      id="weekly-class-uniform-fee"
                      class="form-check-input"
                      type="radio"
                      name="weekly-class-apply"
                    />
                    <label
                      class="form-check-label"
                      for="weekly-class-uniform-fee"
                    >
                      Uniform Fee
                    </label>
                  </div>
                </div>
                <div class="form-check mb-3">
                  <input
                    id="apply-to-one-to-one"
                    type="checkbox"
                    class="form-check-input"
                  />
                  <label class="form-check-label" for="apply-to-one-to-one"
                    >One to one</label
                  >
                </div>

                <div class="form-check mb-3">
                  <input
                    id="apply-to-holiday-camp"
                    type="checkbox"
                    class="form-check-input"
                  />
                  <label class="form-check-label" for="apply-to-holiday-camp"
                    >Holiday camp</label
                  >
                </div>
                <div class="form-check mb-3">
                  <input
                    id="apply-to-birthday-party"
                    type="checkbox"
                    class="form-check-input"
                  />
                  <label class="form-check-label" for="apply-to-birthday-party"
                    >Birthday party</label
                  >
                </div>
              </div>
              <hr class="border" />

              <div class="form-check mb-3">
                <input
                  id="apply-discount-once-per-order"
                  type="checkbox"
                  class="form-check-input"
                />
                <label
                  class="form-check-label"
                  for="apply-discount-once-per-order"
                  >Apply discount once per order</label
                >
              </div>
            </div>
          </div>

          <!-- Maximum Discount Uses  -->
          <div class="card mb-4">
            <div class="card-body">
              <div class="form-group">
                <label for="maximum-discount-uses" class="form-label"
                  >Maximum discount uses</label
                >
                <div class="form-check mb-3">
                  <input
                    id="limit-number-of-times"
                    type="checkbox"
                    class="form-check-input"
                  />
                  <label class="form-check-label" for="limit-number-of-times"
                    >Limit number of times this discount can be used in
                    total</label
                  >
                </div>
                <div class="form-check mb-3">
                  <input
                    id="limit-to-one"
                    type="checkbox"
                    class="form-check-input"
                  />
                  <label class="form-check-label" for="limit-to-one"
                    >Limit to one use per customer</label
                  >
                </div>
              </div>
            </div>
          </div>

          <!-- Active Dates  -->
          <div class="card mb-4">
            <div class="card-body">
              <div class="form-group">
                <label for="active-dates" class="form-label"
                  >Active dates</label
                >
                <div class="d-flex">
                  <div class="me-3">
                    <label for="start-date">Start date</label>
                    <input id="start-date" type="email" class="form-control" />
                  </div>
                  <div>
                    <label for="start-time">Start time</label>
                    <input id="start-time" type="email" class="form-control" />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <div class="form-check my-3">
                  <input
                    id="set-end-date"
                    type="checkbox"
                    class="form-check-input"
                  />
                  <label class="form-check-label" for="set-end-date"
                    >Set end date</label
                  >
                </div>
              </div>
            </div>
          </div>

          <!-- options  -->
          <div>
            <NuxtLink
              class="btn border-light-subtle me-3 border px-5"
              to="/synco/administration/discounts"
              >Cancel
            </NuxtLink>
            <button class="btn btn-primary text-light px-5">Create</button>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <label class="text-primary mb-3">Summary</label>
              <h4 class="h5">SAMBA10</h4>
              <hr class="border" />
              <label class="mb-3">Summary</label> <br />
              <small class="text-muted">Amount off products</small> <br />
              <small class="text-muted">Code</small>
              <hr class="border" />
              <label class="mb-3">Details</label> <br />
              <small class="text-muted">15%</small> <br />
              <small class="text-muted">Applies once per order</small> <br />
              <small class="text-muted">Active from today</small> <br />
              <small class="text-muted">Weekly classes</small> <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
