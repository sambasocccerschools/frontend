
<script>
export default {
  data: () => ({
    referrals: [
      { id: 1, refereeName: 'Jim Jones', phone: '082648956', date: '13th May', referredBy: 'Ethan Bond Vaughan', notes: null },
    ]
  })
}
</script>

<template>
  <NuxtLayout name="syncolayout">
    <div class="d-flex align-items-center justify-content-between mb-4">
      <h4>Referral List</h4>
      <span class="text-danger">
        Need to check where do customers get the referral link
      </span>
    </div>

    <table class="table table-hover border rounded-4 ">
      <thead class="rounded-top-4">
        <tr class="table-light">
          <!-- <th scope="col">Checkbox</th> -->
          <th scope="col">
            Referee Name
          </th>
          <th class="text-muted" scope="col">Telephone</th>
          <th class="text-muted" scope="col">Date</th>
          <th class="text-muted" scope="col">Referred by</th>
          <th class="text-muted" scope="col">Notes</th>
        </tr>
      </thead>
      <tbody>
        <!-- Need to see how to turn this into a link -->
        <tr class="align-middle" v-for="referral in referrals">
          <th scope="row">
            {{ referral.refereeName }}
          </th>
          <td>{{ referral.phone }}</td>
          <td>{{ referral.date }}</td>
          <td>{{ referral.referredBy }}</td>
          <td>{{ referral.notes || 'N/A' }}</td>
        </tr>
      </tbody>
    </table>
  </NuxtLayout>
</template>
 
 