<template>
	<div class="recruit clearfix">
		<div class="center-left" align="center">
			<p>祭坛Lv {{someData.Blv}}.0</p>
			<span class="close" @click="closeModal"></span>
			<img :src="imagePath+'1x200.png'" alt="" />
			<div class="remove" @click="remove">移除</div>
			<!--<div class="upgrade">升级</div>-->
		</div>
		<div class="recruit-middle" align="center">
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
				imagePath:'http://localhost:3000/images/building/altar'
			}
		},
		props:['someData'],
		mounted(){
			$('.equipment li').on('mouseover',function(){
				$(this).find('.equipment-mes').show();
			})
			$('.equipment li').on('mouseout',function(){
				$(this).find('.equipment-mes').hide();
			})
		},
		methods:{
			closeModal(){
				this.$emit('close',5)
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