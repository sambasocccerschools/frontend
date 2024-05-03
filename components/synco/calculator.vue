<template>
  <div class="card mx-auto border-0 bg-transparent p-0" style="width: 350px">
    <div class="card-body">
      <div class="row">
        <div
          class="col-12 text-light d-flex flex-column align-items-end px-4 py-1 text-right"
        >
          <span class="h2">
            <strong>{{ expression }}</strong>
          </span>
        </div>
      </div>
      <div class="row">
        <div class="col-3 p-0 pb-1">
          <button
            type="button"
            class="btn btn-secondary text-light"
            large
            v-on:click="backspace"
          >
            <v-icon> <Icon name="mdi:backspace" /> </v-icon>
          </button>
          <!-- <button
            type="button"
            class="btn text-light"
            large
            v-on:click="clearExpression"
            >
            CE
            </button> -->
        </div>
        <div class="col-3 p-0 pb-1">
          <button
            type="button"
            class="btn btn-secondary text-light"
            large
            v-on:click="inverseSign"
          >
            ±
          </button>
        </div>
        <div class="col-3 p-0 pb-1">
          <button
            type="button"
            class="btn btn-secondary text-light"
            large
            v-on:click="addExpression"
          >
            %
          </button>
        </div>
        <div class="col-3 p-0 pb-1">
          <button
            type="button"
            class="btn btn-secondary text-light"
            large
            v-on:click="addExpression"
          >
            /
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col-3 p-0 pb-1">
          <button
            type="button"
            class="btn bg-light"
            large
            v-on:click="addExpression"
          >
            1
          </button>
        </div>
        <div class="col-3 p-0 pb-1">
          <button
            type="button"
            class="btn bg-light"
            large
            v-on:click="addExpression"
          >
            2
          </button>
        </div>
        <div class="col-3 p-0 pb-1">
          <button
            type="button"
            class="btn bg-light"
            large
            v-on:click="addExpression"
          >
            3
          </button>
        </div>
        <div class="col-3 p-0 pb-1">
          <button
            type="button"
            class="btn btn-secondary text-light"
            large
            v-on:click="addExpression"
          >
            *
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col-3 p-0 pb-1">
          <button
            type="button"
            class="btn bg-light"
            large
            v-on:click="addExpression"
          >
            4
          </button>
        </div>
        <div class="col-3 p-0 pb-1">
          <button
            type="button"
            class="btn bg-light"
            large
            v-on:click="addExpression"
          >
            5
          </button>
        </div>
        <div class="col-3 p-0 pb-1">
          <button
            type="button"
            class="btn bg-light"
            large
            v-on:click="addExpression"
          >
            6
          </button>
        </div>
        <div class="col-3 p-0 pb-1">
          <button
            type="button"
            class="btn btn-secondary text-light"
            large
            v-on:click="addExpression"
          >
            -
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col-3 p-0 pb-1">
          <button
            type="button"
            class="btn bg-light"
            large
            v-on:click="addExpression"
          >
            7
          </button>
        </div>
        <div class="col-3 p-0 pb-1">
          <button
            type="button"
            class="btn bg-light"
            large
            v-on:click="addExpression"
          >
            8
          </button>
        </div>
        <div class="col-3 p-0 pb-1">
          <button
            type="button"
            class="btn bg-light"
            large
            v-on:click="addExpression"
          >
            9
          </button>
        </div>
        <div class="col-3 p-0 pb-1">
          <button
            type="button"
            class="btn btn-secondary text-light"
            large
            v-on:click="addExpression"
          >
            +
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col-3 p-0 pb-1"></div>
        <div class="col-3 p-0 pb-1">
          <button
            type="button"
            class="btn bg-light"
            large
            v-on:click="addExpression"
          >
            0
          </button>
        </div>
        <div class="col-3 p-0 pb-1">
          <button
            type="button"
            class="btn bg-light"
            large
            v-on:click="addExpression"
          >
            .
          </button>
        </div>
        <div class="col-3 p-0 pb-1">
          <button
            type="button"
            class="btn btn-secondary text-light"
            large
            v-on:click="equal"
          >
            =
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { evaluate } from 'mathjs'

export default {
  data() {
    return {
      expression: '0',
    }
  },
  methods: {
    addExpression(event) {
      if (this.expression === '0')
        this.expression = this.expression.slice(0, -1)
      let exp = event.originalTarget.innerText.trim()
      this.expression = this.expression.concat(exp)
    },
    equal() {
      if (this.expression.trim() === '') return
      this.expression = evaluate(this.expression).toString()
    },
    clearExpression() {
      this.expression = '0'
    },
    backspace() {
      this.expression = this.expression.slice(0, -1).toString()
      if (this.expression.length === 0) this.expression = '0'
    },
    inverseSign() {
      this.expression = (parseInt(this.expression) * -1).toString()
    },
  },
}
</script>

<style scoped>
button.btn {
  height: 50px;
  width: 80px;
  font-weight: bold;
}
.btn-secondary {
  background-color: #464c55;
}
</style>
