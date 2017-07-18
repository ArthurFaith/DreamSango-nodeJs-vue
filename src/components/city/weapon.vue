<template>
	<div class="shop clearfix">
		<span class="close"></span>
		<div class="shop-left" align="center">
			<div class="bag-equip mb15">
				<div class="bag-equip-title">
					兵工厂
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
				
			}
		},
		mounted(){
			
		},
		methods:{
			
		}
	}
</script>

<style>
</style>