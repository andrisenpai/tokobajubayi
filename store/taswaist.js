export const state = () => ({
    taswaist: []
})

export const mutations = {
    set_taswaist(state, data) {
        state.taswaist = data;
    }
}

export const actions = {
    async getTaswaist({commit}) {
        try {
            await this.$axios.get('/taswaist.json').then((response)=>{
                commit('set_taswaist', response.data.taswaist)
            })
        } catch (error) {
            console.error('error data :', error)
        }
    }

}

export const getters = {
    taswaist: (state) => {
        return state.taswaist
    }
}

