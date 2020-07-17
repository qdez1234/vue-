  
var baseconfig = {};
if (process.env.NODE_ENV === 'development') {   //开发环境
  baseconfig = {
    baseUrl: 'http://flashq.tevobiz.com',       //域名 ,如果不带http验证规则，则直接使用默认本地
    serverUrl:'xxxx'       //不同项目端口名称
  }
} else if (process.env.NODE_ENV === 'testing') {   //测试环境
  baseconfig = {
    baseUrl: '',
  }
}
else if (process.env.NODE_ENV === 'production') {   //生产环境
  baseconfig = {
    baseUrl: "",
  }
}
export default baseconfig;