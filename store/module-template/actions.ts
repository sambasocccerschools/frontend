import { ActionTree } from 'vuex'
import { ExampleStateInterface } from './state'
import { StateInterface } from '../index'

// Actions are asynchronous
const actions: ActionTree<ExampleStateInterface, StateInterface> = {
  someAction (/* { commit }, payload  */) {
    // a line to prevent linter errors
  }
}

export default actions
