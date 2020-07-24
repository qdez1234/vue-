<template>
<div class=" publicBox" id="userListCss">


<div class="boxItem " id="publicSearch">
<el-form ref="form" :inline="true"  class="demo-form-inline">
<el-row>
       <el-form-item label="用户ID">
                 <el-input class="pubIpt200" v-model="input"  placeholder="请输入用户ID"></el-input>
       </el-form-item>
       <el-form-item label="用户姓名">
                 <el-input class="pubIpt200" v-model="input"  placeholder="请输入用户姓名"></el-input>
       </el-form-item>
       <el-form-item label="手机号码">
                 <el-input class="pubIpt200" v-model="input"  placeholder="请输入手机号码"></el-input>
       </el-form-item>
       <el-form-item>
                 <el-button class="pubBtnBlue" type="primary">查询</el-button>
       </el-form-item>
</el-row>

<el-row>
       <el-form-item>
                 <el-button @click="addUser()" class="pubBtnGree140" type="primary">新建测试用户</el-button>
       </el-form-item>
</el-row>

</el-form>
</div>
          <public-table class="colum" @handleEdit="handleEdit" :columnDefs="columnDefs" :tableData="tableData" :order=true></public-table>
  </div>
</template>

<script>
import publicTable from "@/components/public/publicTable.vue"

export default {
  components: {
         publicTable
  },
  data() {
    return {
        input:"",
        columnDefs :[
            {headerName: '供应商ID', field: 'zip',width:85},
            {headerName: '名称', field: 'make',width:259},
            {headerName: '供应产品', field: 'price',width:119},
            {headerName: '地址', field: 'address',width:232},
            {headerName: '联系人', field: 'model',width:77},
            {headerName: '电话', field: 'phone',width:111},
            {headerName: '创建时间', field: 'date',width:120},
            {headerName: '当前状态', field: 'state',width:90}
        ],
        tableData: [{
          date: '2016-05-03',
          make: '王小虎',
          model: '上海',
          price: '普陀区',
          phone:'13988888888',
          address: '上海市普陀区金沙江路 1518 弄',
          state:'正常',
          zip: 200333
        },{
          date: '2016-05-03',
          make: '王小虎',
          model: '上海',
          price: '普陀区',
          phone:'13988888888',
          address: '上海市普陀区金沙江路 1518 弄',
          state:'正常',
          zip: 200333
        },{
          date: '2016-05-03',
          make: '王小虎',
          model: '上海',
          price: '普陀区',
          phone:'13988888888',
          address: '上海市普陀区金沙江路 1518 弄',
          state:'正常',
          zip: 200333
        },{
          date: '2016-05-03',
          make: '王小虎',
          model: '上海',
          price: '普陀区',
          phone:'13988888888',
          address: '上海市普陀区金沙江路 1518 弄',
          state:'正常',
          zip: 200333
        },{
          date: '2016-05-03',
          make: '王小虎',
          model: '上海',
          price: '普陀区',
          phone:'13988888888',
          address: '上海市普陀区金沙江路 1518 弄',
          state:'正常',
          zip: 200333
        },{
          date: '2016-05-03',
          make: '王小虎',
          model: '上海',
          price: '普陀区',
          phone:'13988888888',
          address: '上海市普陀区金沙江路 1518 弄',
          state:'正常',
          zip: 200333
        },{
          date: '2016-05-03',
          make: '王小虎',
          model: '上海',
          price: '普陀区',
          phone:'13988888888',
          address: '上海市普陀区金沙江路 1518 弄',
          state:'正常',
          zip: 200333
        }]
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
      this.$router.push({path:"/platform/equipment/supplierEdit",query:{data:row.date}})
    },
    addUser(){
        this.$router.push({path:"/platform/userControl/userListEdit"})
    }

  },
  created() {

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
  #userListCss{


  }
</style>