<script>
export default {
  data: () => ({
    title: 'Campaign Title' || null,
    recipients: 230,
    opened: 90,
    clicked: 40,
    bounced: 10,
    unsubscribed: 2
  })
}
</script>


<template>
  <NuxtLayout name="syncolayout" pageTitle="Email Marketing Campaigns">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <NuxtLink to="/synco/email-marketing/reports" class="text-dark">Email Marketing</NuxtLink>
        </li>
        <li class="breadcrumb-item active text-semibold" aria-current="page">{{ title }}</li>
      </ol>
    </nav>
    <h2 class="mb-5">
      <NuxtLink to="/synco/email-marketing/reports">
        <Icon name="material-symbols:arrow-left-alt" class="me-2 text-dark" />
      </NuxtLink>
      Campaign Overview
    </h2>
    <h3>{{ title }}</h3>

    <div class="row mb-4">
      <div class="col">
        <div class="card rounded-5 border-0  bg-star-spark">
          <div class="card-body d-flex flex-column ps-5 pe-4 py-5">
            <span class="h1">{{ recipients }}</span>
            <span class="h5">Recipients</span>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card rounded-5 border-0  bg-star-spark">
          <div class="card-body d-flex flex-column ps-5 pe-4 py-5">
            <span class="h1">{{ opened }}</span>
            <span class="h5">Opened</span>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card rounded-5 border-0  bg-star-spark">
          <div class="card-body d-flex flex-column ps-5 pe-4 py-5">
            <span class="h1">{{ clicked }}</span>
            <span class="h5">Clicked</span>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card rounded-5 border-0  bg-star-spark">
          <div class="card-body d-flex flex-column ps-5 pe-4 py-5">
            <span class="h1">{{ bounced }}</span>
            <span class="h5">Bounced</span>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card rounded-5 border-0  bg-star-spark">
          <div class="card-body d-flex flex-column ps-5 pe-4 py-5">
            <span class="h1">{{ unsubscribed }}</span>
            <span class="h5">Unsubscribed</span>
          </div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col border-end ">
            <div class="d-flex align-items-center justify-content-between mb-3">
              Audience (Chelsea members)
              <strong>230</strong>
            </div>
            <div class="d-flex align-items-center justify-content-between mb-3">
              Total opened
              <strong>230</strong>
            </div>
            <div class="d-flex align-items-center justify-content-between mb-3">
              Last clicked
              <strong>230</strong>
            </div>
            <div class="d-flex align-items-center justify-content-between mb-3">
              Date Delivered
              <strong>Mon, Dec 3, 2018 2:24 PM</strong>
            </div>
          </div>
          <div class="col">
            <div class="d-flex align-items-center justify-content-between mb-3">
              Audience
              <strong>230</strong>
            </div>
            <div class="d-flex align-items-center justify-content-between mb-3">
              Total opened
              <strong>230</strong>
            </div>
            <div class="d-flex align-items-center justify-content-between mb-3">
              Last clicked
              <strong>230</strong>
            </div>
          </div>
        </div>
      </div>
    </div>

  </NuxtLayout>
</template>

<style lang="scss" scoped>
.bg-star-spark {
  background-image: url('@/src/assets/bg-star-spark.svg');
  background-repeat: no-repeat;
  background-position: top right;
}
</style>