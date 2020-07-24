import Axios from "axios";

import * as API from "@api/common/common";

export const state = {
    userId:0,
    userName:0,
    isLogin:0,
    bacStore:"",  //背景颜色
    dialogshow: false,  //弹窗展示
    // 存储token
    token: localStorage.getItem('token') ? localStorage.getItem('token') : ''
}

export const mutations = {
    setdialogshow: (state) => {
        state.dialogshow = true
    },
    bacStore: (state,val) => {
        state.bacStore = val
    },
    changeLogin (state, user) {   //登录成功设置token
        state.userName=user.name
        state.userId=user.idstr
        state.isLogin=1
        //state.token = user.token;
        //localStorage.setItem('token', user.token);
      }

}
export const actions = {
    setdialogshow: ({ commit }) => {
        commit('setdialogshow')
    },
    bacStore: ({ commit },params) => {
        commit('bacStore',params)
    },
    changeLogin: ({ commit },params) => {
// 返回一个promise对象
       return new Promise((resolve, reject) => {
        API.post("/v1/flash/login",params)
                 .then((res) => {
                   commit("changeLogin",res.Data)
                   resolve(res);
                 })
                 .catch(function (error) {
                   reject(error);
               });
           });
       }
}

export default { state, mutations, actions }