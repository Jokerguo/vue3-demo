import { createStore } from 'vuex'
import global from './modules/global'
import user from './modules/user'
import account from './modules/account'

const store = createStore({
  ...global,
  modules: {
    user,
    account
  }
})

export default store