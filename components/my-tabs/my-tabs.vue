<template>
	<!-- mytabs是通用组件-->
	<!-- 1.可以在父组件定制样式 -->
	<!-- 可以在父组件指定数据 -->
	<!-- 可以在父组件中选中 -->
	<view>

	</view>
</template>

<script>
	export default {
		name:"my-tabs",
		props:{
			config:{
				type: Object,
				//default如果是复杂数据类型，那么需要指定value为函数 通过返回值的形式执行默认值
				default: () =>{
					return {};
				}
			},
			tabData:{
				type: Array,
				default: () =>{
					return [];
				}
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">

</style>
