
export const state = () => ({
  loadmore: 6,
  featured: []
})

export const mutations = {
  set_loadmore(state, data) {
    state.loadmore = data;
  },
  set_featured(state, data) {
    state.featured = data
  }
}
export const actions = {
  async getTasFeatured({ commit }) {
    try {
      const [backpack, taswaist, tasanak] = await Promise.all([
        await this.$axios.get('/backpack.json'),
        await this.$axios.get('/taswaist.json'),
        await this.$axios.get('/tasanak.json'),

      ])

      const randomBackpack = []
      const randomTasnak = []
      const randomTaswaist = []

      let tempBackPack = backpack.data.backpack
      let temptasanak = tasanak.data.tasanak
      let temptaswaist = taswaist.data.taswaist

      for (let i = 0; i < 4; i++) {
        const findIndex = Math.floor(Math.random() * tempBackPack.length)
        const randomCategory = tempBackPack[findIndex];
        randomBackpack.push(randomCategory)
        tempBackPack.splice(findIndex,1)
        tempBackPack = tempBackPack

      }
      for (let i = 0; i < 4; i++) {
        const findIndex = Math.floor(Math.random() * temptasanak.length)
        const randomCategory = temptasanak[findIndex];
        randomTasnak.push(randomCategory)
        temptasanak.splice(findIndex,1)
        temptasanak = temptasanak

      }
      for (let i = 0; i < 4; i++) {
        const findIndex = Math.floor(Math.random() * temptaswaist.length)
        const randomCategory = temptaswaist[findIndex];
        randomTaswaist.push(randomCategory)
        temptaswaist.splice(findIndex,1)
        temptaswaist = temptaswaist
      }
      const featured = randomBackpack.concat(randomTasnak, randomTaswaist)
      const randomFeatured = []
      let tempFeatured = featured
      for (let i = 0; i < 12; i++) {
        const findIndex = Math.floor(Math.random() * tempFeatured.length)
        const randomCategory = tempFeatured[findIndex];
        randomFeatured.push(randomCategory)
        tempFeatured.splice(findIndex,1)
        tempFeatured = tempFeatured
      }
      console.log(randomFeatured)

      // const groupedData = randomFeatured.reduce((result, item) => {
      //   if (!result[item.title]) {
      //     result[item.title] = [];
      //   }
      //   result[item.title].push(item);
      //   return result;
      // }, {});
      // console.log(groupedData)
      commit('set_featured', randomFeatured)
    } catch (error) {
      console.error('error data :', error)
    }
  }

}
export const getters = {
  loadmore: (state) => {
    return state.loadmore
  },
  featured: (state) => {
    return state.featured
  }
}
