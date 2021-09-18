<template>
	<view class="hot-container">
		<image class="logo" src="@/static/images/logo.png" mode="aspectFit" ></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
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
