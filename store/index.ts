import { createStore } from 'vuex'

// My custom modules
// import suiteGPTModule from './suitegpt-module'
// import { SuiteGPTState } from './suitegpt-module/state'
import exampleModule from './module-template'
import { ExampleStateInterface } from './module-template/state'

export interface StateInterface {
  // Define your own store structure, using submodules if needed
  // example: ExampleStateInterface;
  // Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
  // example: ExampleStateInterface
//   suiteGPT: SuiteGPTState
}

export default createStore<StateInterface>({
  modules: {
   //  suiteGPT: suiteGPTModule
  }
})
