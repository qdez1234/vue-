<template>
  <div id="publicTable" ref="publicTable">
       <el-table
         :data="tableData"
         ref="multipleTable"
         :max-height="tableHeight"
         border
         header-cell-class-name="tabHeaderClass"
         @row-click="rowClick"
         @row-dblclick="rowDblclick"
         style="width: 100%">
         <!-- 多选 -->
        <el-table-column v-if="multiple" 
           type="selection"
           width="50">
         </el-table-column>
         <!-- 序号 -->
        <el-table-column  v-if="order"
           label="序号"
           type="index"
           width="50">
         </el-table-column>
         <!-- 表数据 -->
         <el-table-column v-for="(item,index) in columnDefs" :key="index"
           :prop="item.field"
           :label="item.headerName"
           :width="item.width?item.width:'200'">
         </el-table-column>
        <!-- 操作按钮 -->
        <el-table-column  v-if="btn.length>0"
           label="操作"
           width="130"
           >
         <template slot-scope="scope" >
             <span v-for="(item,index) in btn" :key="index">
                 <i v-if="item=='enable'" @click="handleEnable(scope.$index, scope.row)" class="iconfont iconClass icon-jinzhi"></i>
                 <i v-if="item=='delete'" @click="handleDelete(scope.$index, scope.row)" class="iconfont iconClass icon-dui"></i>
                 <i v-if="item=='edit'" @click="handleEdit(scope.$index, scope.row)" class="iconfont iconClass icon-pen"></i>
             </span>
         </template>
 

         </el-table-column>

       </el-table>
  </div>
</template>

<script>

export default {
  props:{
      columnDefs:{   //表頭
          type:Array,
          default:[]
      },
      tableData:{    //數據
          type:Array,
          default:[]
      },
      multiple:{   //多选
         type:Boolean,
         default:false
      },
      order:{     //序号
         type:Boolean,
         default:false
      },
      btn:{
          type:Array,
          default:()=>["delete","enable",'edit']
      }
  },
  components: {
  },
  data() {
      return {
          tableHeight:"1000px",
      }
  },
  // 计算属性，会监听依赖属性值随之变化
  computed: {


  },
  // 监控data中的数据变化
  watch: {
    tableData(newVal,oldVal){
        this.tableData=newVal
    }

 },
  methods: {
      RowResize() {
        let publicHeaderHeight=document.getElementById("publicHeaderCSS")==null?0:document.getElementById("publicHeaderCSS").offsetHeight     //公共头部高度
        let publicSearchHeight=document.getElementById("publicSearch")==null?0:document.getElementById("publicSearch").offsetHeight                //公共搜索区域
        let bodyHeight=document.body.clientHeight                                          //当前页面高度
        let tableHeight=bodyHeight-publicHeaderHeight-publicSearchHeight-20   //表格的高度
        this.tableHeight=tableHeight+'px'               //表格的动态高度   
    },
      handleEnable(index,row){   //开启
          this.$emit("handleEnable",row)
      },
      handleDelete(index,row){    //禁用
          this.$emit("handleEnable",row)
      },
      handleEdit(index,row){     //编辑
          this.$emit("handleEdit",row)
      },
      rowClick(row,column){   //单机
          this.$emit("rowClick",row) 
      },
     rowDblclick(row,column){   //双击
          this.$emit("rowClick",row)
      },
      getSelection(){          //多选情况下,获取当前选中行数据
          let data = this.$refs.multipleTable.selection;
          return data
      }
  },
  created() {
       
  },
  mounted() {
      this.RowResize()
       window.onresize = () => {
            this.RowResize()
       }
       
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
  #publicTable{
  ::-webkit-scrollbar-thumb {
    background-color: #c2c2c2;
    border-radius: 10px;
    background-clip: content-box;
  }
::-webkit-scrollbar-track {
    background-color: #fafafa;
}
::-webkit-scrollbar {
    width: 10px;
    height: 10px;
}
 ::-webkit-scrollbar-thumb:hover {
            background: #696969;
}

}
  #publicTable{
      .publicBox()
  }
  #publicTable{
      .el-table__header{
          width: 100% !important;
          background-color: rgba(187, 187, 187, 1) !important;
      }
      thead tr .tabHeaderClass{
           color: rgba(16, 16, 16, 1);
           text-align: center;
           padding:0;
           line-height: 30px;
      }
     .tabHeaderClass:last-child{
          border-right:none;
      }
      .el-table .cell{
          text-align: center;
          line-height: 30px;
      }
      .el-table td, .el-table th{
          padding:0;
      }
      .el-table th:last-child{
           border-right: none;
           z-index: 99;
       }
      .el-table__body-wrapper, .el-table__footer-wrapper, .el-table__header-wrapper{
          background-color: rgba(238, 238, 238, 1);
          color: rgba(16, 16, 16, 1);
          text-align: center;
      }
      .el-table th, .el-table tr{
          background: transparent; 
      }
      .el-table td, .el-table th.is-leaf{
          border-color:#FDFDFD;
      }
      .el-table td:last-child{
          border-right: none;
      }
     .el-table th:nth-last-child(2){
          border-right: none;
      }
       
      .iconClass{
          cursor: pointer;
          margin-left: 5px;
          font-weight: 600;
      }
      .icon-dui{
          color: #0EEC10; 
      }
      .icon-jinzhi{
          color: #F70202; 
      }
      .icon-pen{
          color: #000000;
      }
  }
    
</style>