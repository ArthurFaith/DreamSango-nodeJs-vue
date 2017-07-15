<template>
	<div>	
		<div class="map map-city">
			<div class="build-box" @dragover="allowDrop($event)" @drop="drop($event)" v-for="x in 36"></div>			
		</div>
		<div id="aaa" class="build-model">
			<img id="qqw" src="../../assets/timg.jpg" draggable="true" @dragstart="drag($event)"/>
		</div>
	</div>
</template>

<script>
	import move from '../../js/move.js'
	export default {
		name: 'CityMap',
		data() {
			return {
				box:{
					width: '100px',
					height: '100px',
					background: '#000',
					position:'absolute',
					top:'0px',
					left:'0px'					
				},
				list:0
			}
		},
		mounted(){
			
		},
		methods:{
			drag(ev){
				ev.dataTransfer.setData("Text",ev.target.id);
			},
			allowDrop(ev){
				ev.preventDefault();
			},
			drop(ev){
				ev.preventDefault();
				var e = ev.target,
					data=ev.dataTransfer.getData("Text"),
					item = document.getElementById(data).cloneNode();
				console.log(e.childNodes)
				if(e.childNodes.length>0){
					return;
				}
				else{
					item.className = 'green';
					e.appendChild(item);
				}				
			}
		}
	}
</script>

<style>
.build-box{
	width: 100px;
	height: 100px;
	display: inline-block;
	/*background: #008000;*/
} 
    
.map-city{
	/*去除元素间隙*/
	font-size: 0;
    -webkit-text-size-adjust:none;
}

.build-model{
	position:absolute;
	top:80px;right: 0;
	background: #000;
	width: 100px;height: 100px;
}

.build-model img{
	width: 100px;
	height:100px;
}
.green{
	background:#FF0000;
	width:100px;
	height: 100px;
}
</style>