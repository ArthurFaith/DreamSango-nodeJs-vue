<template>
	
	<div class="battle clearfix">
		<div class="mt20 clearfix">
			<div class="battle-left">
			<!--头像-->
				<div class="bag-head clearfix">
					<div class="bag-head-img fl">123</div>
					<div class="bag-head-name fl">
						<div class="battle-hp">
							<div v-bind:style="hp"></div>
							<p class="hpNum">200 / 200</p>
							
						</div>
						<div class="battle-mp">
							<div v-bind:style="mp"></div>
							<p class="hpNum">200 / 200</p>
						</div>
					</div>
				</div>
				<!--头像-->
				
				<!--技能-->
				<div class="bag-equip">
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
				
				<!--装备-->
				<div class="bag-equip">
					<div class="bag-equip-title">
						装备
					</div>
					<ul class="equipment">
						<li v-for="x in 8">
							<div class="equip-box">
								<img src="../../assets/6.png"/>
							</div>
							
							<div class="equipment-mes">						
								<p>生命值+10</p>
								<p>生命值+10</p>
								<p>生命值+10</p>
							</div>
						</li>
						
					</ul>
				</div>
				<!--装备-->
			</div>
			
			<div class="battle-middle"></div>
			
			<div class="battle-right">
				<!--头像-->
				<div class="bag-head clearfix">
					
					<div class="bag-head-name fl">
						<div class="battle-hp">
							<div v-bind:style="hp" class="monster-hp"></div>
							<p class="hpNum">200 / 200</p>
						</div>
						<div class="battle-mp">
							<div v-bind:style="mp" class="monster-hp"></div>
							<p class="hpNum">200 / 200</p>
						</div>
					</div>
					<div class="bag-head-img fl" style="margin-left:10px">123</div>
				</div>
				<!--头像-->
				
				<!--技能-->
				<div class="bag-equip">
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
				
				<!--装备-->
				<div class="bag-equip">
					<div class="bag-equip-title">
						可能掉落物品
					</div>
					<ul class="equipment">
						<li v-for="x in 8">
							<!--<img src="http://localhost:3000/image/7.png"/>-->
							<div class="equipment-mes">						
								<p>生命值+10</p>
								<p>生命值+10</p>
								<p>生命值+10</p>
							</div>
						</li>
						
					</ul>
				</div>
				<!--装备-->
			</div>
		</div>
		
		<!--战斗细节-->
		<div class="fight clearfix">
			<div class="fight-box fl">
				<!--战斗文字直播-->
			</div>
			<div class="fight-box fr">
				<!--战利品-->
				<div class="bag-equip">
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
				<button class="btn btn-success pick">全部捡起</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Battle',
		data(){
			return{
				hp:{
					width: '200px',
					height: '20px'
				},
				mp:{
					width: '160px',
					height: '20px'
				}
			}
		},
		mounted(){
			$('.equipment li').on('mouseover',function(){
				$(this).find('.equipment-mes').show();
			})
			$('.equipment li').on('mouseout',function(){
				$(this).find('.equipment-mes').hide();
			})
//			console.log(this.$route.params)
		},
		methods:{
			
		}
	}
</script>

<style>
	.battle-hp div{
		background: #be0004;
		border-radius: 4px;
		/*position: relative;*/
	}
	.battle-mp div{
		background: #0086c3;
		border-radius: 4px;
		/*position: relative;*/
	}
	.hpNum{
		position: absolute;
		font-size: 12px;
		left: 74px;
		line-height: 20px;
	}
	.monster-hp{
		position: absolute;
		right: 0;
	}
	.battle-middle{
		width: 200px;
		height: 200px;
		float: left;
		background: url('../../assets/icon/vs.png') no-repeat center;
		background-size:150px 150px;
		margin-top: 75px;
	}
	.fight{
		width: 800px;
		height: 280px;
		padding: 0 20px 20px 20px;
	}
	.fight-box{
		width:370px;
		height: 260px;
		background: rgba(0,0,0,0.4);
		border-radius: 6px;
		position: relative;
		padding: 10px;
	}
	.pick{
		position: absolute;
		bottom: 10px;
		left: 160px;
	}
</style>