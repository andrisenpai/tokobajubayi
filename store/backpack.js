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
            await this.$axios.get('/backpack.json').then((response)=>{
                commit('set_backpack', response.data.backpack)
            })
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

