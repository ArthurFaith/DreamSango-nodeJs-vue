<template>
	<div class="map-city-bg">	
		<div class="map-city" align="center">
			<div>
				<div class="build-box" @dragover="allowDrop($event)" @drop="drop($event)" v-for="x in 32">
					<div class="build-mes" style="left: 100px !important;">						
						<p>生命值+10</p>
						<p>生命值+10</p>
						<p>生命值+10</p>
					</div>
				</div>
			</div>
						
		</div>
		<div class="build-list clearfix">
			<div class="build-model" align="center" v-for="y in 5">
				<img  id="building" src="../../assets/主城1.png"  draggable="true" @dragstart="drag($event)"/>				
				<p>商店</p>
				<div class="build-mes">						
					<p>生命值+10</p>
					<p>生命值+10</p>
					<p>生命值+10</p>
				</div>								
			</div> 
		</div>
		<!--主城详情-->
		<city-center v-show=""></city-center>
		<!--主城详情-->
		
		<!--招募武将-->
		<city-recruit v-show=""></city-recruit>
		<!--招募武将-->
		
		<!--店铺-->
		<city-weapon v-show=""></city-weapon>
		<!--店铺-->
	</div>
	
</template>

<script>
	import move from '../../js/move.js'
	import paseDom from '../../js/common.js'
	import cityCenter from '../city/center'
	import cityRecruit from '../city/recruit'
	import cityWeapon from '../city/weapon'
	
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
			$('.build-model').on('mouseover',function(){
				$(this).find('.build-mes').show();
			})
			$('.build-model').on('mouseout',function(){
				$(this).find('.build-mes').hide();
			})
			
		},
		components: {
		    cityCenter,
		    cityRecruit,
		    cityWeapon
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
				item.className = 'builded';
				e.appendChild(item);
				
				$('.build-box img').on('mouseover',function(){
					$(this).parent().find('.build-mes').show();
				})
				
				$('.build-box img').on('click',function(){
					
				})
				
				$('.build-box img').on('mouseout',function(){
					$(this).parent().find('.build-mes').hide();
				})
			}
		}
	}
</script>

<style>
.build-box{
	width: 100px;
	height: 100px;
	position: relative;
	display: inline-block;
	/*background: #008000;*/
} 
.map-city-bg{
	width: 100%;
	height: 670px;
	overflow: hidden;
	background: url('../../assets/citybg.png') no-repeat top center;
	background-size: 840px 670px;
}  
.map-city{
	/*去除元素间隙*/
	font-size: 0;
    -webkit-text-size-adjust:none;
    position: absolute;
	top: 50px;bottom: 20px;
	width: 840px;
	height: 460px;
}

.build-list{
	position:absolute;
	top:530px;right: 20px;
	background: url('../../assets/buildbg.png') no-repeat center;
	width: 735px;height: 145px;
	padding: 15px 30px 0 30px;
}

.build-model{
	width: 146px;
	height:auto;
	font-size: 14px;
	cursor: pointer;
	position: relative;
	float: left;
}

.build-model img{
	width: 100px;
	height:100px;
}
.builded{
	width:100px;
	height: 100px;
	cursor: pointer;
}

.build-mes{
	width: auto;
	height: auto;
	padding: 6px;
	border-radius: 4px;
	color: #fff;
	background:rgba(64,9,122,0.8);
	font-size: 12px;
	position: absolute;
	top:0;left:130px;
	display: none;
	z-index:2;
	white-space:nowrap; /*强制不换行*/
}

</style>