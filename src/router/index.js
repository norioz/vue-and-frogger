import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Bar from '@/components/Bar'
import Foo from '@/components/Foo'
import Scene from '@/components/ControlledScene/ControlledScene'
import FroggerScene from '@/components/Frogger/FroggerScene'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/bar',
      name: 'Bar',
      component: Bar
    },
    {
      path: '/foo',
      name: 'Foo',
      component: Foo
    },
    {
      path: '/scene',
      name: 'Scene',
      component: Scene
    },
    {
      path: '/frogger',
      name: 'Frogger',
      component: FroggerScene
    }
  ]
})
