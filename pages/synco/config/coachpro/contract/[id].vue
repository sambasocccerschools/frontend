<script>
// Call API for single contract 
export default {
  data: () => ({
    contract: { id: 1, name: 'Head Coach Contract', fileUrl: '' }
  })
}

</script>

<template>
  <NuxtLayout name="syncolayout">
    <h2 class="mb-5">
      <NuxtLink to="/synco/config/coachpro/contract">
        <Icon name="material-symbols:arrow-left-alt" class="me-2 text-dark" />
      </NuxtLink>
      {{ contract.name }}
    </h2>

    <div class="card">
      <div class="card-body">
        <div class="bg-light p-5">PDF Editor Goes Here <span class="text-danger">Editable PDF Library, integration with
            Docusign or just WYSIWYG
            Editor?</span>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

