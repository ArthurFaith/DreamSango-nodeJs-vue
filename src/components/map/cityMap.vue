<template>
	<div class="map-city-bg">
		<div class="map-city" align="center">
			<div>
				<div class="build-box" @dragover="allowDrop($event)" @drop="drop($event)" v-for="(x,index) in buildList" :index="index">
					<img :src="x.buildImagePath+x.Blv+'.png'" v-if="x.Bid" 
						@mouseover="showDetail(index,'builded')" 
						@mouseout="hideDetail(index,'builded')"
						@click="openModal(x.id,x.Blv,x.Bid)"/>
					<p v-if="x.Bid">{{x.buildName}}</p>
					<div class="build-mes" v-if="x.Bid" v-show="x.showType" style="left:100px !important">
						<p>{{x.buildName}}</p>
						<p>LV{{x.Blv}}</p>
						<p>消耗:黄金{{x.buildCostGlod}} 矿石{{x.buildCostStone}}</p>
						<p>{{x.introduction}}</p>
					</div>
					
				</div>
			</div>

		</div>
		<div class="build-list clearfix">
			<div class="build-model" align="center" v-for="(y,index) in list">
				<img :id="y.id" :src="y.buildImagePath+'1.png'" draggable="true" @dragstart="drag($event,y.id,y.buildLevel)" @mouseover="showDetail(index)" @mouseout="hideDetail(index)"/>
				<p>{{y.buildName}}</p>
				<div :id="'_'+y.id" class="build-mes" v-show="y.showType">
					<p>{{y.buildName}}</p>
					<p>消耗:黄金{{y.buildCostGlod}} 矿石{{y.buildCostStone}}</p>
					<p>{{y.introduction}}</p>
				</div>
			</div>
		</div>
		<!--主城详情-->
		<city-center :someData="someData" v-show="detailType.centerType" @close="closeModal" @update="updateList"></city-center>
		<!--主城详情-->

		<!--祭坛-->
		<city-recruit :someData="someData" v-show="detailType.altarType" @close="closeModal" @update="updateList"></city-recruit>
		<!--祭坛-->

		<!--兵工厂-->
		<city-weapon :someData="someData" v-show="detailType.arsenalType" @close="closeModal" @update="updateList"></city-weapon>
		<!--兵工厂-->
		
		<!--商店-->
		<city-shop :someData="someData" v-show="detailType.shopType" @close="closeModal" @update="updateList"></city-shop>
		<!--商店-->
		
		<!--市场-->
		<city-market :someData="someData" v-show="detailType.marketType" @close="closeModal" @update="updateList"></city-market>
		<!--市场-->
		
		<!--采矿-->
		<city-mine :someData="someData" v-show="detailType.mineType" @close="closeModal" @update="updateList"></city-mine>
		<!--采矿-->
	</div>

</template>

<script>
	import move from '../../js/move.js'
	import paseDom from '../../js/common.js'
	import cityCenter from '../city/center'
	import cityRecruit from '../city/recruit'
	import cityWeapon from '../city/weapon'
	import cityShop from '../city/shop'
	import cityMarket from '../city/market'
	import cityMine from '../city/mine'

	export default {
		name: 'CityMap',
		data() {
			return {
				box: {
					width: '100px',
					height: '100px',
					background: '#000',
					position: 'absolute',
					top: '0px',
					left: '0px'
				},
				list: {},//建筑物列表
				buildList:[],//已建造建筑列表
				detailType:{
					centerType : false,
					marketType : false,
					shopType : false,
					mineType : false,
					altarType : false,
					arsenalType : false
				},
				someData:{
					Blv:1,
					Bid:1
				},//传递给子组件参数
			}
		},
		mounted() {

			//建筑列表
//			this.$http.post('http://localhost:3000/buildingList',{id:1},{emulateJSON: true})  POST 			
			this.$http.get('http://localhost:3000/buildingList',{id:1}).then(function(res) {
				// 响应成功回调
				this.list = res.body;
				this.list.splice(0, 1);
				for(let i=0;i<this.list.length;i++)
				{
					this.list[i].showType = false;
				}
				console.log(this.list)
			}, function(res) {
				// 响应错误回调
			})
			
			//已建造建筑列表
			this.buildedList();
			
			
		},
		components: {
			cityCenter,
			cityRecruit,
			cityWeapon,
			cityShop,
			cityMarket,
			cityMine
		},
		methods: {
			buildedList(){
				//已建造建筑列表
				this.$http.get('http://localhost:3000/buildingBuilded').then(function(res) {
					this.buildList = res.body.value;
					for(let i=0;i<this.buildList.length;i++)
					{
						this.buildList[i].showType = false;
					}
					console.log(res.body)
				}, function(res) {
					
				})
			},
			drag(ev,Bid,Blv) {
				var params = {
					Bid:Bid,
					Bposition:'',
					Blv:Blv
				}
				ev.dataTransfer.setData("Text", JSON.stringify(params));
			},
			allowDrop(ev) {
				ev.preventDefault();
			},
			drop(ev) {
				ev.preventDefault();
				var e = ev.target,
					data = JSON.parse(ev.dataTransfer.getData("Text")),
					that = this;
				//console.log($(e)[0].localName)
				//console.log($(e).attr('index'));
				data.Bposition = Number($(e).attr('index'))+1;
				console.log(data)
				if(!$(e).children()[0]&&$(e)[0].localName!='img'){
					//添加建造建筑
					this.$http.get('http://localhost:3000/buildingAdd',{params:data}).then(function(res) {
						console.log(res.body)
						that.buildedList();
					}, function(res) {
						
					})
					
				}
				else{
					return;
				}
				
				
			},
			showDetail(index,type){
				if(type != 'builded'){
					this.list[index].showType = true;
					var item = this.list[index];
					this.$set(this.list,index,item);
				}
				else{
					this.buildList[index].showType = true;
					var item = this.buildList[index];
					this.$set(this.buildList,index,item);
				}
				
			},
			hideDetail(index,type){
				if(type != 'builded'){
					this.list[index].showType = false;
					var item = this.list[index];
					this.$set(this.list,index,item);
				}
				else{
					this.buildList[index].showType = false;
					var item = this.buildList[index];
					this.$set(this.buildList,index,item);
				}
			},
			allFalse(){
				this.detailType.centerType = false;
				this.detailType.marketType = false;
				this.detailType.shopType = false;
				this.detailType.mineType = false;
				this.detailType.altarType = false;
				this.detailType.arsenalType = false;
			},
			openModal(id,Blv,Bid){
				//打开详情窗口
				this.allFalse();
				//传递数据给子组件
				this.someData = {
					'Blv':Blv,
					'id':id
				}
				switch (Bid){
					case 1:
						this.detailType.centerType = true;
						break;
					case 2:
						this.detailType.marketType = true;
						break;
					case 3:
						this.detailType.shopType = true;
						break;
					case 4:
						this.detailType.mineType = true;
						break;
					case 5:
						this.detailType.altarType = true;
						break;
					case 6:
						this.detailType.arsenalType = true;
						break;
				}
			},
			closeModal(data){
				//关闭详情窗口
				switch (data){
					case 1:
						this.detailType.centerType = false;
						break;
					case 2:
						this.detailType.marketType = false;
						break;
					case 3:
						this.detailType.shopType = false;
						break;
					case 4:
						this.detailType.mineType = false;
						break;
					case 5:
						this.detailType.altarType = false;
						break;
					case 6:
						this.detailType.arsenalType = false;
						break;
				}
			},
			updateList(data){
				if(data){
					this.buildedList();
				}
				
			}
		}
	}
</script>

<style>
	.build-box {
		width: 100px;
		height: 100px;
		position: relative;
		display: inline-block;
		vertical-align:top;
		cursor: pointer;
		/*background: #008000;*/
	}
	
	.map-city-bg {
		width: 100%;
		height: 700px;
		overflow: hidden;
		background: url('../../assets/citybg.png') no-repeat top center;
		background-size: 840px 700px;
	}
	
	.map-city {
		/*去除元素间隙*/
		font-size: 0;
		-webkit-text-size-adjust: none;
		position: absolute;
		top: 50px;
		bottom: 20px;
		width: 840px;
		height: 460px;
	}
	
	.build-list {
		position: absolute;
		top: 530px;
		right: 20px;
		background: url('../../assets/icon/buildbg.png') no-repeat center;
		width: 735px;
		height: 145px;
		padding: 15px 30px 0 30px;
	}
	
	.build-model {
		width: 146px;
		height: auto;
		font-size: 14px;
		cursor: pointer;
		position: relative;
		float: left;
		
	}
	
	.build-model img {
		width: 100px;
		height: 100px;
	}
	
	.builded {
		width: 100px;
		height: 100px;
		cursor: pointer;
	}
	
	.build-mes {
		width: 150px;
		height: auto;
		padding: 6px;
		border-radius: 4px;
		color: #fff;
		background: rgba(64, 9, 122, 0.8);
		font-size: 12px;
		position: absolute;
		top: 0;
		left: 130px;
		z-index: 2;
		/*white-space: nowrap;*//*强制不换行*/
		text-align: left;	
	}
	.build-mes p{
		line-height: 20px;
	}

</style>