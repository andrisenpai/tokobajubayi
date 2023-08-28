export const state = () => ({
    tasanak: []
})

export const mutations = {
    set_tasanak(state, data) {
        state.tasanak = data;
    }
}

export const actions = {
    async getTasanak({commit}) {
        try {
            await this.$axios.get('/tasanak.json').then((response)=>{
                commit('set_tasanak', response.data.tasanak)
            })
        } catch (error) {
            console.error('error data :', error)
        }
    }

}

export const getters = {
    tasanak: (state) => {
        return state.tasanak
    }
}

