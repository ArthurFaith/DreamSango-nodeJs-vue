<template>
  <div id="app">
  	<ul>
  		<li v-for = "x in list">
  			 <h1>{{x.name}}</h1>
  			 <h2>{{x.sex}}</h2>
  		</li>
  	</ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
  	return{
  		list:''
  	}
  },
  mounted:function(){
  	this.$http.get('http://localhost:3000/q').then(function(response){
		  // 响应成功回调
		  this.list = response.body;
		  console.log(this.list)
		}, function(response){
		  // 响应错误回调
		});
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
