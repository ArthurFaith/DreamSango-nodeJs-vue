<template>
	<div class="bag clearfix">
		<span class="close"></span>
		<div class="bag-left">
			<!--头像-->
			<div class="bag-head clearfix">
				<div class="bag-head-img fl">123</div>
				<div class="bag-head-name fl">赵云</div>
			</div>
			<!--头像-->
			
			<!--装备-->
			<div class="bag-equip">
				<div class="bag-equip-title">
					装备
				</div>
				<ul class="equipment">
					<li v-for="x in 8">
						<div class="equipment-mes">						
							<p>生命值+10</p>
							<p>生命值+10</p>
							<p>生命值+10</p>
						</div>
					</li>					
				</ul>
			</div>
			<!--装备-->
			
			<!--装备-->
			<div class="bag-equip">
				<div class="bag-equip-title">
					技能
				</div>
				<ul class="equipment">
					<li v-for="x in 4">
						<div class="equipment-mes">						
							<p>生命值+10</p>
							<p>生命值+10</p>
							<p>生命值+10</p>
						</div>
					</li>
					
				</ul>
			</div>
			<!--装备-->
			
			<!--属性-->
			<div class="bag-attr">
				<div class="bag-equip-title">
					属性
				</div>
				<ul class="clearfix">
					<li>HP:120</li>
					<li>MP:100</li>
					<li>攻击：100</li>
					<li>防御：200</li>
					<li>力量：200</li>
					<li>敏捷：200</li>
					<li>智力：200</li>
				</ul>
			</div>
			<!--属性-->
		</div>
		<div class="bag-right">
			<div class="bag-money">
				<ul class="clearfix">
					<li>金币：1000</li>
					<li>木材：1000</li>
					<li class="fr">进入商店</li>
				</ul>
			</div>
			<!--仓库-->
			<div class="bag-equip">
				<div class="bag-equip-title">
					仓库
				</div>
				<ul class="equipment">
					<li v-for="x in 28">
						<div class="equipment-mes">						
							<p>生命值+10</p>
							<p>生命值+10</p>
							<p>生命值+10</p>
						</div>
					</li>
					
				</ul>
			</div>
			<!--仓库-->
			
			<!--背包-->
			<div class="bag-equip">
				<div class="bag-equip-title">
					背包
				</div>
				<ul class="equipment">
					<li v-for="x in 21">
						<div class="equipment-mes">						
							<p>生命值+10</p>
							<p>生命值+10</p>
							<p>生命值+10</p>
						</div>
					</li>
					
				</ul>
			</div>
			<!--背包-->
		</div>
	</div>
</template>

<script>
export default {
  data(){
  	return{
  		
  	}
  },
  mounted(){
		$('.equipment li').on('mouseover',function(){
			$(this).find('.equipment-mes').show();
		})
		$('.equipment li').on('mouseout',function(){
			$(this).find('.equipment-mes').hide();
		})
			
  },
  methods:{
	
  }
}
</script>

<style>
</style>