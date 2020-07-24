<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less" >
/* 引入国外ag-grid组件样式表 */
@import "../node_modules/ag-grid-community/dist/styles/ag-grid.css";
@import "../node_modules/ag-grid-community/dist/styles/ag-theme-alpine.css";
@import "./styles/less/public.less";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

.el-form-item__label{
    color: #101010;
}
.el-form{
    text-align: left;
}
.el-form-item__content{
    line-height: 30px;
}
.el-form-item__label{
    line-height: 30px;
}
.el-form-item{
    margin-bottom: 12px;
    margin-right: 12px;
}
.publicLoading {
.el-loading-spinner .el-loading-text{
     color: white;
}
.el-loading-spinner i{
     color: white;
}
}
</style>
