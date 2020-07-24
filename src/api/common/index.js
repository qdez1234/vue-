import axios from 'axios'
import Router from "@/router"
import baseconfig from "./baseconfig"
import loading from "./loading"
import message from "./message"
axios.defaults.withCredentials = true;
axios.defaults.timeout="10000"

//添加一个请求拦截器
// axios.interceptors.request.use(function(config) {
//   var host = window.location.host;
//   if (localStorage.getItem(host + "tenantCode") != null) {
//     config.headers['tenantCode'] = localStorage.getItem(host + "tenantCode");
//   }

//   if (process.env.NODE_ENV == 'production') {
//     config.headers['X-Domain'] = host;
//   }else{
//     config.headers['X-Domain'] = "";
//   }
//   config.headers['X-Token'] = localStorage.getItem(host + "X-Token");
//   config.headers['X-User'] = localStorage.getItem(host + "X-User");

//   return config;
// }, function(error) {
//   // Do something with request error
//   return Promise.reject(error);
// });
//添加一个请求拦截器
axios.interceptors.request.use(
  config => {
    loading.loading.open()
    if (localStorage.getItem('token')) {
      //   config.headers['X-Token'] = localStorage.getItem(host + "X-Token");
      //   config.headers['X-User'] = localStorage.getItem(host + "X-User");
      config.headers.Authorization = localStorage.getItem('token');
    }
    return config;
  },
  error => {
    loading.loading.close()
    return Promise.reject(error);
  });

// 添加一个响应拦截器
axios.interceptors.response.use(
  response => {
      loading.loading.close()
      return response;
  },
  error => {
      loading.loading.close()
      if (error.response) {
          switch (error.response.status) {
              case 401:
                  // 这里写清除token的代码
                  localStorage.removeItem('token');
                  message.message.openWarning("登录失效,请重新登录")
                  return
                  Router.push("/login");
          }
      }
      return Promise.reject(error.response.data)
  });


let base = baseconfig.baseUrl;
let server = baseconfig.serverUrl;
export const POST = (url, params, type) => {
  var allurl = getUrl(url,type);
  return axios.post(`${allurl}`, params).then(res => res.data)
}

export const GET = (url, params, type) => {
  var allurl = getUrl(url,type);
  return axios.get(`${allurl}`, {
    params: params
  }).then(res => res.data)
}

export const PUT = (url, params, type) => {
  var allurl = getUrl(url,type);
  return axios.put(`${allurl}`, params).then(res => res.data)
}

export const DELETE = (url, params, type) => {
  var allurl = getUrl(url,type);
  return axios.delete(`${allurl}`, {
    params: params
  }).then(res => res.data)
}

export const PATCH = (url, params, type) => {
  var allurl = getUrl(url,type);
  return axios.patch(`${allurl}`, params).then(res => res.data)
}

//api封装通过不同type值获取不同的api接口
function getUrl(url,type) {
  let allurl = base;
  if(type==1){}
  else{
     allurl = base 
  }
  return allurl + url;
}