import * as types from './mutation-types'

const mutations = {
  [types.SET_NAVBARSTATE](state, navBarState) {
    state.navBarState = navBarState
  },
  [types.SET_BREADCURBLIST](state,breadCurbList){
    state.breadCurbList = breadCurbList
  }
}

export default mutations
