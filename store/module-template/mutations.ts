import { MutationTree } from 'vuex'
import { ExampleStateInterface } from './state'

const mutation: MutationTree<ExampleStateInterface> = {
  // These mutations are the ones that change the state
  someMutation (/* state: ExampleStateInterface */) {
  // a line to prevent linter errors
  }
}

export default mutation
