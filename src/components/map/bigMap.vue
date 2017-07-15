<template>
	<div class="map map-big">
		<div v-bind:style="box"></div>
	</div>
</template>

<script>
	import move from '../../js/move.js'
	export default {
		name: 'BigMap',
		data() {
			return {
				position:{
					top:0,
					left:0,
					width:60, //单格的宽度
					totalWidth:600 //总宽度
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
		mounted(){
			//移动事件
			var that = this;
			document.onkeydown = function(){
				move.directionMove(that.position,event);
				that.box.left = that.position.left + 'px';
				that.box.top = that.position.top + 'px';
			}
			
		}
	}
</script>

<style>

</style>