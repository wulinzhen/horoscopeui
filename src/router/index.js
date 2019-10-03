import Vue from 'vue'
import Router from 'vue-router'
import InsertRecordPage from '@/components/InsertRecordPage'
import EightCharPage from '@/components/EightCharPage'
import EightCharResultPage from '@/components/EightCharResultPage'
import Home from '@/components/Home'


Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [{
        path: '/InsertRecordPage',
        name: 'InsertRecordPage',
        component: InsertRecordPage
      },
        {
          path: '/EightCharPage',
          name: 'EightCharPage',
          component: EightCharPage
        }
        ,
        {
          path: '/EightCharResultPage',
          name: 'EightCharResultPage',
          component: EightCharResultPage
        }
      ]
    },
  ]
})
