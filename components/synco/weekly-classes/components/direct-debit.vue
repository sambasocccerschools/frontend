<template>
  <div class="row m-0 p-4">
    <div class="col-12">
      <div class="header rounded-4 text-light d-flex flex-column p-4">
        <span>{{ directDebit.Product.Name }}</span>
        <span class="h4">
          <strong>£{{ directDebit.Product.Price.toFixed(2) }}</strong>
        </span>
      </div>
    </div>
  </div>
  <div class="row m-0 p-4 py-2">
    <div class="col-12 py-1">
      <span class="h5"><strong>Personal Details</strong></span>
    </div>
    <div class="col-6 py-1">
      <div class="form-group">
        <label for="firstName">First name</label>
        <input
          type="text"
          class="form-control"
          id="firstName"
          v-model="directDebit.PersonalDetails.FirstName"
        />
      </div>
    </div>
    <div class="col-6 py-1">
      <div class="form-group">
        <label for="lastName">Last name</label>
        <input
          type="text"
          class="form-control"
          id="lastName"
          v-model="directDebit.PersonalDetails.LastName"
        />
      </div>
    </div>
    <div class="col-12 py-1">
      <div class="form-group">
        <label for="emailAddress">Email address</label>
        <input
          type="email"
          class="form-control"
          id="emailAddress"
          v-model="directDebit.PersonalDetails.EmailAddress"
        />
      </div>
    </div>
    <div class="col-12 py-1">
      <div class="form-group">
        <label for="billingAddress">Billing address</label>
        <input
          type="text"
          class="form-control"
          id="billingAddress"
          v-model="directDebit.PersonalDetails.BillingAddress"
        />
      </div>
    </div>
  </div>
  <div class="row m-0 p-4 py-2">
    <div class="col-12 py-1">
      <span class="h5"><strong>Bank Details</strong></span>
    </div>
    <div class="col-12 py-1">
      <div class="form-group">
        <label for="accountHolder">Account holder name</label>
        <input
          type="text"
          class="form-control"
          id="accountHolder"
          v-model="directDebit.BankDetails.AccountHolderName"
        />
      </div>
    </div>
    <div class="col-12 py-1">
      <div class="form-group">
        <label for="sortCode">Your sort code (must be 6 digits long)</label>
        <input
          type="number"
          class="form-control"
          id="sortCode"
          minlength="6"
          maxlength="6"
          v-model="directDebit.BankDetails.SortCode"
        />
      </div>
    </div>
    <div class="col-12 py-1">
      <div class="form-group">
        <label for="accountNumber"
          >Your account number (must be 8 digits long)</label
        >
        <input
          type="text"
          class="form-control"
          id="accountNumber"
          minlength="8"
          maxlength="8"
          v-model="directDebit.BankDetails.AccountNumber"
        />
      </div>
    </div>
    <div class="col-12 py-1">
      <div class="form-group">
        <input
          type="checkbox"
          class="form-check-input"
          id="canAuthorize"
          v-model="directDebit.BankDetails.CanAuthoriseDirectDebits"
        />
        <label for="canAuthorize" class="ms-2"
          >I can authorize Direct Debits on this account myself</label
        >
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import type { IDirectDebit } from '~/types/index'

const props = defineProps<{
  directDebit: IDirectDebit
}>()

const emit = defineEmits(['toggleDirectDebit'])

let directDebit = ref<IDirectDebit>(props.directDebit).value

const close = () => {
  emit('toggleDirectDebit')
}
</script>

<style>
.header {
  background-color: #237fea;
}
</style>
