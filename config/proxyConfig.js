module.exports = {
      proxy: {
            '/api': {    //将www.exaple.com印射为/apis
                target: 'http://192.168.1.109:8088',  // 接口域名
                changeOrigin: true,  //是否跨域
                //secure:false,  //支持https
                pathRewrite: {
                    '^/api': '/api'   //需要rewrite的,
                }              
            }
      }
    }