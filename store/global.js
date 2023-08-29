export const state = () => ({
  loadmore: 6
})

export const mutations = {
  set_loadmore(state, data) {
      state.loadmore = data;
  }
}
export const getters = {
  loadmore: (state) => {
      return state.loadmore
  }
}

