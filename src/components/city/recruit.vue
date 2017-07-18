<template>
	<div class="recruit center clearfix">
		<span class="close"></span>
		<div class="recruit-left" align="center">
			<div class="recruit-box"></div>
			<div class="upgrade recruit-btn">招募</div>
		</div>
		<div class="recruit-right">
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