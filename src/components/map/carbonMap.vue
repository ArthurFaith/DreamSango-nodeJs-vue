<!--副本地图-->
<template>
	<div class="map-carbon-bg" align="center">
		<div class="map-carbon">
			<div v-bind:style="box"></div>
		</div>
		<!--<battle></battle>-->
	</div>
</template>

<script>
	import move from '../../js/move.js'
	import battle from '../battle/battle'
	export default {
		name: 'CarbonMap',
		data() {
			return {
				position:{
					top:0,
					left:0,
					width:60, //单格的宽度
					totalWidth:840, //总宽度
					totalHeight:600
				},
				box:{
					width: '60px',
					height: '60px',
					background: '#000',
					position:'absolute',
					top:'0px',
					left:'0px'
					
				}
			}
		},
		components: {
		   battle
		},
		mounted(){
			//移动事件
			var that = this;
			document.onkeydown = function(){
				move.directionMove(that.position,event);
				that.box.left = that.position.left + 'px';
				that.box.top = that.position.top + 'px';
				console.log(that.box.left+'--'+that.box.top)
			}
			
		},
		methods:{
			
		}
	}
</script>

<style>
	.map-carbon-bg{
		width: 100%;
		height: 700px;
		overflow: hidden;
		background: url('../../assets/citybg.png') no-repeat top center;
		background-size: 840px 700px;
	} 
	.map-carbon{
	    position: absolute;
		top: 50px;
		width: 840px;
		height: 600px;
	} 
</style>