<template>
	<div class="shop clearfix">
		<div class="center-left mt60" align="center">
			<p>商店 Lv {{someData.Blv}}.0</p>
			<span class="close" @click="closeModal"></span>
			<img :src="imagePath+someData.Blv+'x200.png'" alt="" />
			<div class="remove" @click="remove">移除</div>
			<div class="upgrade" @click="upgrade">升级</div>
		</div>
		<div class="shop-middle" align="center">
			<div class="bag-equip mb15">
				<div class="bag-equip-title">
					物品
				</div>
				<ul class="equipment">
					<li v-for="x in 16">						
						<div class="equipment-mes">						
							<p>生命值+10</p>
							<p>生命值+10</p>
							<p>生命值+10</p>
						</div>
					</li>					
				</ul>
			</div>
			<div class="remove shop-btn">移除</div>
			<div class="upgrade shop-btn">升级</div>
		</div>
		<div class="shop-right" align="center">
			<div class="bag-equip">
				<div class="bag-equip-title">
					我的背包
				</div>
				<ul class="equipment">
					<li v-for="x in 20">
						<div class="equipment-mes">						
							<p>生命值+10</p>
							<p>生命值+10</p>
							<p>生命值+10</p>
						</div>
					</li>
					
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				imagePath:'http://localhost:3000/images/building/shop'
			}
		},
		props:['someData'],
		mounted(){
			
		},
		methods:{
			closeModal(){
				this.$emit('close',3)
			},
			upgrade(){
				console.log(this.someData)
				var that = this;
				this.$http.get('http://localhost:3000/upgradeBuilding',{params:{
					id:that.someData.id,
					Blv:that.someData.Blv
				}}).then(function(res) {
					console.log(res)
					if(res.body.errorcode == 0){
						this.someData.Blv++;
						this.$emit('update',true)
					}
					
				}, function(res) {
					// 响应错误回调
				})
			},
			remove(){
				var that = this;
				this.$http.get('http://localhost:3000/removeBuilding',{params:{
					id:that.someData.id,
				}}).then(function(res) {
					console.log(res)
					if(res.body.errorcode == 0){
						this.closeModal();
						this.$emit('update',true)
					}
					
				}, function(res) {
					// 响应错误回调
				})
			}
		}
	}
</script>

<style>
</style>