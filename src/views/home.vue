<template>
  首页
  <br>
  数量：{{count}}
  <button @click="onAdd">添加</button>
  <button @click="reset">充值</button>
  <br>
  我的名字是： {{name}}
  <br>
  todos: {{doneTodos}}
  <br>
  todos长度： {{doneTodosCount}}
</template>

<script setup>
import { useStore } from 'vuex'
import {fetchData} from '@/api/index.js'
const store = useStore()

const count = computed(()=> store.state.count)
const doneTodos = computed(()=> store.getters.doneTodos)
const doneTodosCount = computed(()=> store.getters.doneTodosCount)

const name = ref('郭东生')

const onAdd = ()=>{
  store.commit('addCount')  
}
const reset = ()=>{
  store.commit('RESET_COUNT')
}

const xxx  = ()=>{
  console.log(111)
  fetchData({
    roomId:'7065553714825349928'
  }).then(res=>{
    console.log(res)
  })
}
xxx()
</script>