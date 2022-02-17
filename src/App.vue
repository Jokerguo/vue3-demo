<template>
  <router-link to="/">首页</router-link>
  <br>
  <router-link to="/money">钱</router-link>
  <br>
  <router-link to="/echarts">图表</router-link>
  <br>
  <router-link to="/icon">icon</router-link>
  <hr>
  <router-view></router-view>
</template>

<style lang="scss">
:root {
  --el-color-primary: green;
}
</style>