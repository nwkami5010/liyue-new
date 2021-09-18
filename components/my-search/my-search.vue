<template>
	<!--
	1.具备输入框的样式
	2，不可输入，本质按钮
	3.placeholder 内容可以在父组件定义
	-->
	<view class="my-search-container">
		<uni-search-bar>
			
		</uni-search-bar>
		<!-- 搜索按钮 -->
		<view class="my-search-box">
			<!-- 搜索图标 -->
			<image class="icon" src="@/static/images/search.png"
			/>
			<!-- placeholder -->
			<text class="placeholder">placeholder</text>
		</view>
	</view>
</template>

<script>
	export default {
		name:"my-search",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.my-search-container{
	display: flex;
	align-items: center;
	.my-search-box {
		height: 36px;
		background-color:$uni-bg-color;
		border-radius: 15px;
		border:1px solid $uni-bg-color-border;
		width: 100%;
		display: flex;
		align-item: center;
		padding: 0 $uni-spacing-row-base;
		
		.icon {
			width:$uni-img-size-sm;
			height:$uni-img-size-sm;
		}
		.placeholder {
			font-size: $uni-font-size-sm;
			margin-left: $uni-spacing-row-sm;
			color: $uni-text-color-placeholder;
		}
	}
}
</style>
