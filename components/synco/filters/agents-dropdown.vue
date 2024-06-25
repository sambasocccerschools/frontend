<template>
  <div class="btn-group">
    <button
      type="button"
      class="btn btn-outline-secondary dropdown-toggle"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <Icon name="material-symbols:person-add" />
    </button>
    <div class="dropdown-menu dropdown-menu-end border-0">
      <li>
        <h6 class="dropdown-header">Select Agent</h6>
      </li>

      <form class="px-4 py-3">
        <div class="form-check d-flex align-items-center mb-3">
          <input
            id="agent-1"
            type="radio"
            name="agent"
            class="form-check-input me-2"
          />
          <label class="form-check-label" for="agent-1">
            <img src="@/src/assets/img-avatar-jaffar.png" alt="jaffar" />
            Jaffar
          </label>
        </div>
        <div class="form-check d-flex align-items-center mb-3">
          <input
            id="agent-2"
            type="radio"
            name="agent"
            class="form-check-input me-2"
          />
          <label class="form-check-label" for="agent-2">
            <img src="@/src/assets/img-avatar-jaffar.png" alt="jaffar" />

            Jaffar
          </label>
        </div>
        <button type="submit" class="btn btn-primary w-100 text-light">
          Next
        </button>
      </form>
    </div>
  </div>
</template>
