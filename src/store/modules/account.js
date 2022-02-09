export default {
  namespaced:true,
  state: {
    info: {
      name: '姜浩月',
      age:19
    },
  },
  getters: {
    moduleGetter:(state, getters, rootState)=> {
      return state.info.name
     }
  }
}
