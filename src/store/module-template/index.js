
import state from './state'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutation'

const myCustomModule = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}


export default myCustomModule