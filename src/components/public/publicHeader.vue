<template>
  <div id="publicHeaderCSS">
    <div class="head_box" :style="{background:classbg}">
      <div class="up_box"> 
        <p class="up_p">E-Sharing运营管理平台</p>
        <div class="up_right">
          <p>姓名:{{name}}</p>
          <p class="iconfont icon-tuichu"></p>
          <p>退出</p>
        </div>
      </div>
      <div class="lower_box">
        <div class="item_box" 
             v-for="(item,id) in listArr" 
             :key="id"
             @click="buttonFn(item)">
          <el-button type="primary" :style="{background:item.bg}">{{item.name}}</el-button>
        </div>
      </div>
    </div>
    <div class="tab_box">
           <div class="item_box" 
           v-for="(item,index) in tabList"  :key="index" 
           :style="{background:item.path==currentPath?classbg:''}"
           @click="tabFn(item.path)">
        <p  class="item_bg" :style="{color:item.path==currentPath?'white':''}" >{{item.admin}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex"
export default {
  components: {
  },
  data() {
    return {
      classbg:'',
      name:'张三',
      listArr:[
        {name:'设备管理',
        bg:'#358FFE',
        parentPath:"/platform/equipment",
        path:"/platform/equipment/supplier",
        tab:[
        {admin:'供应商管理',path:"/platform/equipment/supplier"},
        {admin:'设备品类管理',path:"/platform/equipment/equipmenter"},
        {admin:'通信模块管理',path:"/platform/equipment/signal"},
        {admin:'终端设备管理',path:"/platform/equipment/terminal"},
        {admin:'库存管理',path:"/platform/equipment/stock"}
        ]
        },


        {name:'门店管理',
        bg:'#B982EA',
        parentPath:"/platform/shop",
        path:"/platform/shop/shoper",
        tab:[
          {admin:'门店管理',path:"/platform/shop/shoper"},
        {admin:'区域管理',path:"/platform/shop/region"},
        ]},


        {name:'运营管理',
        parentPath:"/platform/operate",
        bg:'#FFA726',
        path:"/platform/operate/price",
        tab:[
          {admin:'定价管理',path:"/platform/operate/price"},
          {admin:'服务项目管理',path:"/platform/operate/service"},
          {admin:'优惠卷管理',path:"/platform/operate/coupon"},
        ]},


        {name:'APP管理',
        parentPath:"",
        bg:'#6CC4DE',
        path:""},


        {name:'订单管理',
        parentPath:"",
        bg:'#62B063',
        path:""},

        {name:'财务管理',
        bg:'#A3C87B',
        parentPath:"",
        path:""},


        {name:'用户管理',
        bg:'#90C5F7',
        parentPath:"/platform/userControl",
        path:"/platform/userControl/userList",
        tab:[
        {admin:'用户列表',path:"/platform/userControl/userList"},
        ]
        },


        {name:'系统管理',
        parentPath:"/platform/system",
        bg:'#A7A7A7',
        path:"/platform/system/account",
        tab:[
        {admin:'账号管理',path:"/platform/system/account"},
        {admin:'角色管理',path:"/platform/system/character"},
        {admin:'系统配置',path:"/platform/system/sysConfig"},
        ]
        },
      ],
      tabList:[],
      currentPath:null //当前页面路由
    }
  },
  // 计算属性，会监听依赖属性值随之变化
  computed: {

  },
  // 监控data中的数据变化
  watch: {
    

 },
  methods: {
    buttonFn(item){
        this.classbg = item.bg
        this.$router.push({path:item.path})  
        this.getTabArray(item.parentPath,item.path)   
    },
    tabFn(path){
         this.$router.push({path:path})
         this.currentPath=path
    },
    getTabArray(parentPath,currentPath){               //根据二级路由parentPath 
      for(let i in this.listArr){
           if(this.listArr[i].parentPath.indexOf(parentPath)!=-1){     //如果当前路由是path路由下面的子路由,则动态匹配这个路由的信息
             let curTab=this.listArr[i]
             this.classbg = curTab.bg;   //当前背景颜色样式
             this.tabList = curTab.tab;  //当前tab栏目
             if(currentPath!=undefined) this.currentPath=currentPath             //传入了当前路由path就用,没有传入就用默认的$router自带
             else                       this.currentPath=this.$router.currentRoute.path

             return

           }
      }
    }
  },
  created() {
      let roterArray=this.$route.matched        //当前页面的路由栈
      for(let item in roterArray){
        if(roterArray[item].path=="/platform/equipment" 
                               || "/platform/userControl" || "/platform/system"
        ){
                            this.getTabArray(roterArray[item].path)
                            return
        }
      }
  },
  mounted() {


  },
  beforeCreate() {}, // 生命周期 - 创建之前
  beforeMount() {}, // 生命周期 - 挂载之前
  beforeUpdate() {}, // 生命周期 - 更新之前
  updated() {}, // 生命周期 - 更新之后
  beforeDestroy() {}, // 生命周期 - 销毁之前
  destroyed() {}, // 生命周期 - 销毁完成
  activated() {}, // 如果页面有keep-alive缓存功能，这个函数会触发
}
</script>

<style lang='less'>
  @import "../../styles/less/public.less";
 #publicHeaderCSS{
   .el-button{
      width: 100px;
      box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.4);
   }  
 }
 .el-button--primary{
    border:none;
 }
  .head_box{
    width: 100%;
    height: 100px;
    background-color: #358FFE;
  }
  .up_box{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      p{
        color: rgba(255, 255, 255, 1);
        font-size: 20px;
      }
      .up_p{
        margin-top: 8px;
        margin-left: 14px;
      }
      .up_right{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin-right: 19px;
        .icon-tuichu{
          margin-left: 14px;
          margin-right: 3px;
        }
      }
    }
    .lower_box{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: @contentWidth;
      margin: 0 auto;
      margin-top:15px;
      .item_box{
        // width: 10%;
        height: 40px;
        font-size: 20px;
        color: #ffffff;
        border-radius: 10px;
        line-height: 40px;
        .el-button{
          width: 130px;
          border-radius: 10px;
          font-size: 18px;
        }
      }
    }
    .txt_color{
      color: #ffffff;
    }
     .tab_box{
    display :flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: @contentWidth;
    border-bottom: 1px solid #000000;
    height: 50px;
    margin : 0 auto;
    margin-top: 17px;
    .item_box{
      width: 11.719%;
      height: 50px;
      p{
       font-size: 18px;
       line-height: 50px;
      }
    }
  }
  .item_bg{
    color: #555555;
    cursor: pointer;
  }
</style>