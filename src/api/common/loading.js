import { Loading } from 'element-ui';
//添加加载中弹窗
 let loadingObj={
  loadingInstance:null,
  open:function(){
      this.loadingInstance =Loading.service({
      lock: true,
      text: '请求中...',
      spinner: 'el-icon-loading',
      customClass:"publicLoading",
      background: 'rgba(0, 0, 0, 0.3)'
    });
  },
  close:function(){
      let that=this
      setTimeout(()=>{
        that.loadingInstance.close();
      },200)
  }
 }
 export  default{
  loading:loadingObj
 }