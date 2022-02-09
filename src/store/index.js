import { createStore } from 'vuex'
import user from './modules/user'
import account from './modules/account'

const store = createStore({
  modules: {
    user,
    account
  }
})

export default store