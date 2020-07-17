export const state = {
    dialogshow: false,
    userId:0,
    isLogin:0,
    bacStore:"",  //背景颜色
}

export const mutations = {
    setdialogshow: (state) => {
        state.dialogshow = true
    },
    bacStore: (state,val) => {
        state.bacStore = val
    },

}
export const actions = {
    setdialogshow: ({ commit }) => {
        commit('setdialogshow')
    },
    bacStore: ({ commit },val) => {
        commit('bacStore',val)
    },
}

export default { state, mutations, actions }