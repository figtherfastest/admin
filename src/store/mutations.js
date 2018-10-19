import * as types from './mutation-types'

const mutations = {
  [types.SET_NAVBARSTATE] (state, navBarState) {
    state.navBarState = navBarState
  },
  [types.SET_BREADCURBLIST] (state, breadCurbList) {
    state.breadCurbList = breadCurbList
  },
  [types.SET_COVERSTATE] (state, coverState) {
    state.coverState = coverState
  },
  [types.SET_INDEXLISTDETAIL] (state, indexListDetail) {
    state.indexListDetail = indexListDetail
  },
  [types.SET_FIXONELIST] (state, fixOneList) {
    state.fixOneList = fixOneList
  },
  [types.SET_FIXONENAME] (state, fixOneName) {
    state.fixOneName = fixOneName
  },
  [types.SET_GROUPDELETE] (state,groupDelete ) {
    state.groupDelete = groupDelete
  },
}

export default mutations
