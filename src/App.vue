<template>
  <div id="app">	
  	<!--主界面-->
 		<div class="app-content">
 			<router-view></router-view>
 		</div>
 		<!--主界面-->
 		
 		<!--右侧菜单-->
    <div class="app-menu" align="right">
    	<router-link to="/cityMap"><div class="app-item menu-center mt50"></div></router-link>
    	<router-link to="/carbonList"><div class="app-item menu-maps"></div></router-link>
    	<div class="app-item menu-mans" @click="openMans()"></div>
    	<div class="app-item menu-bag" @click="openBag()"></div>
    </div>
    <!--右侧菜单-->
    
    <!--背包-->
    <bag v-show="bagType" v-on:closeBagEvent="emitCloseBagEvent"></bag>
    <!--背包-->
    
    <!--武将列表-->
    <mans-list v-show="mansType" v-on:closeListEvent="emitCloseListEvent"></mans-list>
    <!--武将列表-->
  </div>
</template>

<script>
	import bag from './components/bag/bag'
	import mansList from './components/mans/list'
export default {
  name: 'app',
  data(){
  	return{
  		bagType:false,//背包状态
  		mansType:false,//武将列表状态
  	}
  },
  mounted:function(){
//	this.$http.get('http://localhost:3000/q').then(function(response){
//		  // 响应成功回调
//		  this.list = response.body;
//		  console.log(this.list)
//		}, function(response){
//		  // 响应错误回调
//		});
			
  },
  components: {
    bag,
    mansList
	},
  methods:{
		openBag(){
				this.bagType = !this.bagType;
				//this.$router.push('CarbonMap') 路由跳转
					
			},
		openMans(){
			this.mansType = !this.mansType;
		},
		closeBag(){
			this.bagType = false;
		},
		closeMans(){
			this.mansType = false;
		},
		emitCloseBagEvent(data){
			//触发子组件传递的事件
			this.bagType = data;
		},
		emitCloseListEvent(data){
			this.mansType = false;
		}
			
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: absolute;
	top: 0;right: 0;left: 0;bottom: 0;
	background: url('./assets/bg.jpg') no-repeat center; 
}
</style>
