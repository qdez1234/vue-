<template>
  <div class=" publicBox" id="serviceCss">
          <div class="boxItem " id="publicSearch">
<el-form ref="form" :inline="true"  class="demo-form-inline">
 <el-form-item>
            <el-button class="pubBtnGree"  type="primary">新建</el-button>
  </el-form-item>
</el-form>
          </div>
          <public-table :columnDefs="columnDefs" :tableData="tableData" :order=false></public-table>
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
        columnDefs :[
            {headerName: '服务项目ID', field: 'id',width:150},
            {headerName: '服务项目名称', field: 'name',width:240},
            {headerName: '服务时长', field: 'timer',width:200},
            {headerName: '适用设备类型', field: 'class',width:161},
            {headerName: '使用设备型号', field: 'number',width:397}
        ],
        tableData: [{
          id: '10001',
          name: '快速洗',
          timer: '00H25M',
          class:'洗衣机',
          number:'XCG-800G/XCG-600G'
        },{
          id: '10001',
          name: '快速洗',
          timer: '00H25M',
          class:'洗衣机',
          number:'XCG-800G/XCG-600G'
        },{
          id: '10001',
          name: '快速洗',
          timer: '00H25M',
          class:'洗衣机',
          number:'XCG-800G/XCG-600G'
        },{
          id: '10001',
          name: '快速洗',
          timer: '00H25M',
          class:'洗衣机',
          number:'XCG-800G/XCG-600G'
        },{
          id: '10001',
          name: '快速洗',
          timer: '00H25M',
          class:'洗衣机',
          number:'XCG-800G/XCG-600G'
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
  #serviceCss{
    .boxItem{
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      .demo-form-inline{
        align-items: center;
      } 
    } 
  }
</style>