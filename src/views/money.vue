<template>
  <div class="wrapper">
    money页面
    <p>user：</p>
    <p class="name">{{name}}</p>
    <p>account:</p>
    <p>{{name2}}</p>
    <el-button type="primary">哈哈哈</el-button>
    输入框： <el-input v-model="input" placeholder="请输入" />
    <p>{{input}}</p>
      <el-popconfirm title="Are you sure to delete this?">
    <template #reference>
      <el-button>Delete</el-button>
    </template>
  </el-popconfirm>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
const store = useStore()

const name = computed(()=> store.state.user.info.name)
const name2 = computed(()=> store.state.account.info.name)

const input = ref('')

</script>

<style scoped lang="scss">
.wrapper{
  border: 1px solid red;
  .name{
    text-align: center;
    background-color: blue;
    color: #fff;
  }
}
</style>