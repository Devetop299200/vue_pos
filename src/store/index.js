// import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

// TODO: lang 为什么没有init到localStorage
const defaultState = {
  lang: 'zh-CN', // 语言
}

const store = new Vuex.Store({
  // TODO: 这里原来只写了defaultState会导致store init state为undefined
  state: defaultState,
  // plugins: [createPersistedState()]
})

// TODO: write to blog
export { store as default, defaultState }
