<template>
	<div class="center clearfix">
		<div class="center-left" align="center">
			<p>主城 lv1.0</p>
			<span class="close"></span>
			<img src="../../assets/主城1.png" alt="" />
			<div class="remove">移除</div>
			<div class="upgrade">升级</div>
		</div>
		<div class="center-right">
			<div class="bag-equip">
				<ul class="equipment">
					<li v-for="x in 12">
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