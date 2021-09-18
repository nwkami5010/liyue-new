<template>
	<view class="hot-container">
		<!-- 小程序的image组件  -->
		<image class="logo" src="@/static/images/logo.png" mode="aspectFit" />
		<!-- 可直接使用组件，无需注册 -->
		<my-search></my-search>
	</view>
</template>

<script>
	export default {
		name:'my-search',
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.hot-container {
  background-color: $uni-bg-color;
  .logo {
    width: 100%;
    height: 40px;
  }
  .search-box {
    padding: 0 16px;
    margin-bottom: $uni-spacing-col-base;
  }
  .tab-sticky {
    position: -webkit-sticky;
    position: sticky;
    z-index: 99;
    /* #ifndef H5 */
    top: 0;
    /* #endif */
    /* #ifdef H5 */
    top: 44px;
    /* #endif */
  }
}
</style>
