import Vue from 'vue'
import VueI18n from 'vue-i18n'

import store from '../store'
console.log('2018.4.19', store.state.lang)
const lang = store.state.lang ? store.state.lang : 'zh-CN'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: lang,
  messages: {
    'en': require('./en.json'),
    'zh-CN': require('./zh-CN.json')
  }
})

// i18n.formatter = {
//   format: (message, ...values) => {
//     return i18n.messages[i18n.locale][message]
//   }
// }

export default i18n
