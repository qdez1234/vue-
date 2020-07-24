<template>
<div class=" publicBox" id="accountCss">

<div class="boxItem " id="publicSearch">
<el-form ref="form" :inline="true"  class="demo-form-inline">
<el-row>
       <el-form-item>
                 <el-button @click="addUser()" class="pubBtnGree140" type="primary">新建账号</el-button>
       </el-form-item>
</el-row>

</el-form>
</div>
          <public-table class="colum" @handleEdit="handleEdit" :columnDefs="columnDefs" :tableData="tableData"></public-table>
  </div>
</template>

<script>
import publicTable from "@/components/public/publicTable.vue"
import * as Api from '@api/system.js'
export default {
  components: {
         publicTable
  },
  data() {
    return {
        tableData:[],
        columnDefs :[
            {headerName: 'ID', field: 'acnt',width:211},
            {headerName: '姓名', field: 'name',width:303},
            {headerName: '手机号码', field: 'mphone',width:211},
            {headerName: '角色权限', field: 'posname',width:211},
            {headerName: '状态', field: 'statusname',width:211},
        ],
    }
  },
  // 计算属性，会监听依赖属性值随之变化
  computed: {


  },
  // 监控data中的数据变化
  watch: {


 },
  methods: {
    handleEdit(row){
      this.$router.push({path:"/platform/system/accountEdit",query:{data:row}})
    },
    addUser(){
        this.$router.push({path:"/platform/system/accountEdit"})
    },
    async getAccountListApi(){   //添加账号
             let res=await Api.getAccountListApi()
             if(res.IsPositive){
               this.tableData=res.Data.records
             }else this.$message.warning("获取列表信息失败")
       },
  },
  created() {
             this.getAccountListApi()
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

<style lang='less' scoped>
@import "../../styles/less/public.less";
  #accountCss{


  }
</style>