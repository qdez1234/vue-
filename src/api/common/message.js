import { Message } from 'element-ui';
//添加加载中弹窗
 let message={
   openWarning:function(title){
    Message({
        message: title,
        type: 'warning'
      })
  },
 }
 export  default{
    message:message
 }