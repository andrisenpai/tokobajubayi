export const state = () => ({
  backpack: [],
  relatedProduct: []
})

export const mutations = {
  set_backpack(state, data) {
    state.backpack = data;
  },
  set_relatedProduct(state, data) {

    const randomProduct = []
    let tempProduct = data
    for (let i = 0; i < 6; i++) {
      const findIndex = Math.floor(Math.random() * tempProduct.length)
      const randomCategory = tempProduct[findIndex];
      randomProduct.push(randomCategory)
      tempProduct.splice(findIndex, 1)
      tempProduct = tempProduct
    }
    state.relatedProduct = randomProduct
  }
}
export const actions = {
  async getBackpack({ commit, dispatch }) {
    try {
      await this.$axios.get('/backpack.json').then((response) => {
        commit('set_backpack', response.data.backpack)
        commit('set_relatedProduct', response.data.backpack)
      })
    } catch (error) {
      console.error('error data :', error)
    }
  },

}

export const getters = {
  backpack: (state) => {
    return state.backpack
  },
  relatedProduct: (state) => {
    return state.relatedProduct
  }
}

