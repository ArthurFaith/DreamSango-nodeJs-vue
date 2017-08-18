<template>
	<div class="mans">
		<span class="close" @click="closeList()"></span>
		<div class="bag-equip">
				<div class="bag-equip-title">
					武将
				</div>
				<ul class="equipment">
					<li v-for="x in 40">
						<div class="equipment-mes">						
							<p>生命值+10</p>
							<p>生命值+10</p>
							<p>生命值+10</p>
						</div>
					</li>
					
				</ul>
			</div>
	</div>
</template>

<script>
	export default{
		data(){
			
		},
		mounted(){
			
		},
		methods:{
			closeList(){
				this.$emit('closeListEvent',false)
			}
		}
	}
</script>

<style>
</style>