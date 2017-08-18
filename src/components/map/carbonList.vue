<template>
	<div class="carbonList">
		<div class="carbonList-box" @click="toFight()">
			<img src="../../assets/icon/1.jpg"/>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'BigMap',
		data() {
			return {
				
			}
		},
		mounted(){
			
			
		},
		methods:{
			toFight(){
				this.$router.push({ name: 'Battle', params: { id: 123 }})
			}
		}
	}
</script>

<style>
.carbonList{
	width: 100%;
	height: 700px;
	overflow: hidden;
	border-radius: 4px;
}
.carbonList-box{
	width: 280px;
	height: 233.3px;
	background: #000;
}
.carbonList-box{
	width: 280px;
	height: 233.3px;
	cursor: pointer;
	overflow: hidden;
}
.carbonList-box img{
	/*width: 280px;*/
	height: 233.3px;
}
</style>