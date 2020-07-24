<template>
  <div class=" publicBox" id="priceCss">
          <div class="boxItem " id="publicSearch">
<el-form ref="form" :inline="true"  class="demo-form-inline">
 <el-form-item>
            <el-button class="pubBtnGree"  type="primary">新建</el-button>
  </el-form-item>
</el-form>
          </div>
          <public-table :columnDefs="columnDefs" :tableData="tableData" :order=true></public-table>
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
            {headerName: '定价名称', field: 'pirce',width:240},
            {headerName: '使用设备类型', field: 'make',width:119},
            {headerName: '使用过设备型号', field: 'number',width:119},
            {headerName: '使用区域', field: 'region',width:620}
        ],
        tableData: [{
          pirce: '洗衣机通用定价',
          make: '洗衣机',
          number: 'XCG-800G',
          region:'所有'
        },{
          pirce: '洗衣机通用定价',
          make: '洗衣机',
          number: 'XCG-800G',
          region:'所有'
        },{
          pirce: '洗衣机通用定价',
          make: '洗衣机',
          number: 'XCG-800G',
          region:'所有'
        },{
          pirce: '洗衣机通用定价',
          make: '洗衣机',
          number: 'XCG-800G',
          region:'所有'
        },{
          pirce: '洗衣机通用定价',
          make: '洗衣机',
          number: 'XCG-800G',
          region:'所有'
        },{
          pirce: '洗衣机通用定价',
          make: '洗衣机',
          number: 'XCG-800G',
          region:'所有'
        },{
          pirce: '洗衣机通用定价',
          make: '洗衣机',
          number: 'XCG-800G',
          region:'所有'
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
  #priceCss{
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