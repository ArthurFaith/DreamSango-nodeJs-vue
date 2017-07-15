import Vue from 'vue'
import Router from 'vue-router'
import BigMap from '@/components/map/bigMap'
import CityMap from '@/components/map/cityMap'
import CarbonMap from '@/components/map/carbonMap'

Vue.use(Router)

export default new Router({
  routes: [
 		{
      path: '*',
      redirect: '/bigMap'
    },
    {//世界地图
      path: '/bigMap',
      name: 'BigMap',
      component: BigMap
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
    }
  
  
]})
