export const state = () => ({
    taswaist: [],
    relatedProduct: []
})

export const mutations = {
    set_taswaist(state, data) {
        state.taswaist = data;
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
      console.log(randomProduct)
      state.relatedProduct = randomProduct
    }
}

export const actions = {
    async getTaswaist({commit}) {
        try {
            await this.$axios.get('/taswaist.json').then((response)=>{
                commit('set_taswaist', response.data.taswaist)
                commit('set_relatedProduct', response.data.taswaist)
            })
        } catch (error) {
            console.error('error data :', error)
        }
    }

}

export const getters = {
    taswaist: (state) => {
        return state.taswaist
    },
    relatedProduct: (state) => {
      return state.relatedProduct
    }
}

