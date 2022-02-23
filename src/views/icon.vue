<template>
  <p class="icon">
    <i class="iconfont icon-gouxiao"></i>
    <i class="iconfont icon-gougou"></i>
    <g-table></g-table>
    <g-tabs></g-tabs>
  </p>
  <div>
    <template v-for="item in list" :key="item">
      <span v-copy="item" style="display:block">{{item}}</span>
    </template>
  </div>
  <el-button type="primary" @click="toggleList">切换</el-button>
</template>

<script setup>
const list = ref([ '第一3句','第二句' ])

const toggleList = ()=>{
  list.value = ['第三局','第四局']
}
</script>

<style lang="scss" scoped>
  .icon{
    padding: 100px;
    >.iconfont{
      font-size: 24px;
      color: red;
    }
  }
</style>