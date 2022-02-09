<template>
  <div class="wrapper">
    money页面
    <p>user：</p>
    <p class="name">{{name}}</p>
    <p>account:</p>
    <p>{{name2}}</p>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
const store = useStore()

const name = computed(()=> store.state.user.info.name)
const name2 = computed(()=> store.state.account.info.name)

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