<template>
  <div class=" publicBox" id="couponCss">
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
            {headerName: '优惠券ID', field: 'id',width:100},
            {headerName: '优惠券名称', field: 'name',width:200},
            {headerName: '优惠券类型', field: 'class',width:100},
            {headerName: '有效期', field: 'end',width:190},
            {headerName: '品类条件', field: 'category',width:170},
            {headerName: '订单条件', field: 'order',width:199},
            {headerName: '用户条件', field: 'condition',width:140},
            {headerName: '状态', field: 'state',width:50}
        ],
        tableData: [{
          id: 'MJ332992',
          name: '满100减10元券',
          class: '满减券',
          end:'2020.07.14-2020.08.14',
          category:'无限制',
          order:'订单金额满100元可用',
          condition:'无限制',
          state:'正常'
        },{
          id: 'MJ332992',
          name: '满100减10元券',
          class: '满减券',
          end:'2020.07.14-2020.08.14',
          category:'无限制',
          order:'订单金额满100元可用',
          condition:'无限制',
          state:'正常'
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
  #couponCss{
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