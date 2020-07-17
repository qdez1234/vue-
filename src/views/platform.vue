<template>
  <div>
              <public-header></public-header>
              <public-tab></public-tab>
              <router-view></router-view>
  </div>
</template>

<script>
import publicHeader from "@/components/public/publicHeader.vue"
import publicTab from "@/components/public/publicTab.vue"

export default {
  components: {
         publicHeader,
         publicTab
  },
  data() {
    return {


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

</style>