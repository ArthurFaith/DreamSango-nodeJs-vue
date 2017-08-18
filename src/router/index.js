import Vue from 'vue'
import Router from 'vue-router'
import CarbonList from '@/components/map/carbonList'
import CityMap from '@/components/map/cityMap'
import CarbonMap from '@/components/map/carbonMap'
import Battle from '@/components/battle/battle'

Vue.use(Router)

export default new Router({
  routes: [
 		{
      path: '*',
      redirect: '/cityMap'
    },
    {//世界地图
      path: '/carbonList',
      name: 'CarbonList',
      component: CarbonList
    },
    {//城市地图
      path: '/cityMap',
      name: 'CityMap',
      component: CityMap
    },
    {//副本地图
      path: '/carbonMap',
      name: 'CarbonMap',
      component: CarbonMap
    },
    {//战斗界面
      path: '/battle',
      name: 'Battle',
      component: Battle
    }
  
  
]})


