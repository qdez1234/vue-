export const state = {
    dialogshow: false,
    userId:0,
    isLogin:0,
}

export const mutations = {
    setdialogshow: (state) => {
        state.dialogshow = true
    },

}

export const actions = {
    setdialogshow: ({ commit }) => {
        commit('setdialogshow')
    }
}

export default { state, mutations, actions }