export const state = () => ({
    tasanak: [],
    relatedProduct: []
})

export const mutations = {
    set_tasanak(state, data) {
        state.tasanak = data;
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
    async getTasanak({commit}) {
        try {
            await this.$axios.get('/tasanak.json').then((response)=>{
                commit('set_tasanak', response.data.tasanak)
                commit('set_relatedProduct', response.data.tasanak)
            })
        } catch (error) {
            console.error('error data :', error)
        }
    }

}

export const getters = {
    tasanak: (state) => {
        return state.tasanak
    },
    relatedProduct: (state) => {
      return state.relatedProduct
    }
}

