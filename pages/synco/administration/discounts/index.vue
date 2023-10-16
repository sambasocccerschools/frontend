<script>

export default {
  data: () => ({
    // These will get replaces by arrays 
    discounts: [{
      id: 1,
      title: 'SAMBA10',
      amount: '15%',
      activity: 'Holiday Camps',
      method: 'CODE',
      type: 'Amount of products',
      used: 15,
      status: 'ACTIVE' //ACTIVE, PAUSED
    }]
  }),

}
</script>



<template>
  <NuxtLayout name="syncolayout">

    <div class="card mb-4" style="background-color: #38C87A">
      <div class="card-body p-4">
        <span class="h3 text-light">
          <Icon name="solar:bill-list-bold" class="me-2 mb-1" /> Discounts
        </span>
      </div>
    </div>


    <!-- Coaching Roles Tab-->
    <div class="row">
      <div class="col">
        <div class="d-flex justify-content-between pt-4 pb-3">
          <h4>Discounts table</h4>
          <div>
            <NuxtLink to="./discounts/create" class=" ms-2 btn btn-primary text-light shadow-sm">+ Add
              new
              discount
            </NuxtLink>
          </div>
        </div>

        <table class="table table-hover border rounded-4 ">
          <thead class="rounded-top-4">
            <tr class="table-light">
              <th scope="col">
                Title
              </th>
              <th class="text-muted" scope="col">Method</th>
              <th class="text-muted" scope="col">Type</th>
              <th class="text-muted" scope="col">Used</th>
              <th class="text-muted" scope="col">Status</th>
            </tr>
          </thead>
          <tbody>

            <tr class="align-middle" v-for="discount in discounts">
              <th scope="row">{{ discount.title }} <br> <small class="text-muted">{{ discount.amount }} in {{
                discount.activity }}</small></th>
              <td>{{ discount.method }}</td>
              <td>{{ discount.type }}</td>
              <td>{{ discount.used }}</td>
              <td><span class="badge bg-success-subtle text-success">{{ discount.status }}</span></td>
            </tr>

          </tbody>
        </table>

      </div>
    </div>




  </NuxtLayout>
</template>