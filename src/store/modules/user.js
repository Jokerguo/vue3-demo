export default {
  namespaced:true,
  state: {
    info: {
      name: '郭东生',
      age: 18
    },
  },
  getters: {
    moduleGetter:(state, getters, rootState)=> {
      return state.info.name
     }
  }
}
