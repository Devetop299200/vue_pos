import Vue from 'vue'
import Router from 'vue-router'
import Pos from '@/components/page/Pos'
import Test from '@/components/page/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Pos',
      component: Pos
    } ,
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
