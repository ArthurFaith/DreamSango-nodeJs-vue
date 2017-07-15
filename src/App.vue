<template>
  <div id="app">
  	
  	<!--主界面-->
 		<div class="app-content">
 			<div class="app-money">
 				<!--金钱、木材、武将数-->
 			</div>
 			<router-view></router-view>
 		</div>
 		<!--主界面-->
 		
 		<!--右侧菜单-->
    <div class="app-menu">
    	<div class="app-mans">
    		<!--武将列表-->
    		
    	</div>
    </div>
    <!--右侧菜单-->
    
    <!--背包-->
    <bag v-show="1"></bag>
    <!--背包-->
  </div>
</template>

<script>
	import bag from './components/bag/bag'
export default {
  name: 'app',
  data(){
  	return{
  		dom:''
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
    bag
	},
  methods:{

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
