export const state = () => ({
    backpack: []
})

export const mutations = {
    set_backpack(state, data) {
        state.backpack = data;
    }
}

export const actions = {
    async getBackpack({commit}) {
        try {
            const response = await this.$axios.get('/backpack.json')
            commit('set_backpack', response.data.backpack)
            console.log(response)
        } catch (error) {
            console.error('error data :', error)
        }
    }

}

export const getters = {
    backpack: (state) => {
        return state.backpack
    }
}

