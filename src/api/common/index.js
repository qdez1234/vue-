import axios from 'axios'
import baseconfig from "./baseconfig"
axios.defaults.withCredentials = true;
//添加一个请求拦截器
axios.interceptors.request.use(function(config) {
  var host = window.location.host;
  if (localStorage.getItem(host + "tenantCode") != null) {
    config.headers['tenantCode'] = localStorage.getItem(host + "tenantCode");
  }

  if (process.env.NODE_ENV == 'production') {
    config.headers['X-Domain'] = host;
  }else{
    config.headers['X-Domain'] = "";
  }
  config.headers['X-Token'] = localStorage.getItem(host + "X-Token");
  config.headers['X-User'] = localStorage.getItem(host + "X-User");

  return config;
}, function(error) {
  // Do something with request error
  return Promise.reject(error);
});

//添加一个响应拦截器
axios.interceptors.response.use(function(response) {
  if (response.data && response.data.errcode) {
    if (parseInt(response.data.errcode) === 40001) {
      //未登录
      console.log('登录信息已失效，请重新登录！');
    }
  }
  return response;
}, function(error) {
  // Do something with response error
  return Promise.reject(error);
});

let base = baseconfig.baseUrl;
let server = baseconfig.serverUrl;
export const POST = (url, type, params) => {
  var allurl = getUrl(type, url);
  return axios.post(`${allurl}`, params).then(res => res.data)
}

export const GET = (url, type, params) => {
  var allurl = getUrl(type, url);
  return axios.get(`${allurl}`, {
    params: params
  }).then(res => res.data)
}

export const PUT = (url, type, params) => {
  var allurl = getUrl(type, url);
  return axios.put(`${allurl}`, params).then(res => res.data)
}

export const DELETE = (url, type, params) => {
  var allurl = getUrl(type, url);
  return axios.delete(`${allurl}`, {
    params: params
  }).then(res => res.data)
}

export const PATCH = (url, type, params) => {
  var allurl = getUrl(type, url);
  return axios.patch(`${allurl}`, params).then(res => res.data)
}



//api封装通过不同type值获取不同的api接口
function getUrl(type, url) {
  let allurl = base;
  if(type==1){
      allurl = base + server
  }else if(type==2){}
  else{
     allurl = base + server
  }
  return allurl + url;
}