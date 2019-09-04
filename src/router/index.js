import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hello from '@/components/Hello'
import InsertRecordPage from '@/components/InsertRecordPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'InsertRecordPage',
      component: InsertRecordPage
    }
  ]
})
